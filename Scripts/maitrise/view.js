// ============================================================
//  Dashboard Maîtrise — vue Dataview partagée
//  Appel :  await dv.view("Scripts/maitrise", {section: "notes"})
//  Sections : entete · echeances · notes · heatmap · suivi · sante · revision · maitrise
//  Données : notes `type: session` (dates) · MOC `type: moc-cours` (cours, évaluations)
//            · notes quotidiennes (`etude_<CODE>` en minutes)
//  Dashboard : `session: auto` (session en cours / prochaine) ou un nom, ex. "Hiver 2027"
// ============================================================

const cfg = dv.current();
const today = dv.date("today").startOf("day");

// ---------- utilitaires ----------
const toArr = x => x == null ? [] : Array.isArray(x) ? x : Array.isArray(x.values) ? x.values : [x];
const toDate = x => {
  if (!x) return null;
  if (typeof x === "object" && typeof x.toISODate === "function") return x.startOf("day");
  const d = dv.date(String(x));
  return d ? d.startOf("day") : null;
};
const nameOf = x => x == null ? null
  : (typeof x === "object" && x.path) ? x.path.split("/").pop().replace(/\.md$/, "") : String(x).replace(/^\[\[|\]\]$/g, "");
const FR = d => d.setLocale("fr");
const codeOf = p => toArr(p.cours)[0];
const hasCode = (p, k) => toArr(p.cours).includes(k);
const isNum = v => typeof v === "number" && isFinite(v);
const num = (v, def = 0) => { const n = Number(v); return v != null && v !== "" && isFinite(n) ? n : def; };
const h = m => (m / 60).toFixed(1);
const pct = x => x == null ? "—" : x.toFixed(1) + " %";
const ms = d => d ? d.toMillis() : Infinity;

const PALETTE = ["#7c5cff", "#16a34a", "#ea580c", "#0891b2", "#db2777", "#ca8a04"];
const NON_NOTES = new Set(["moc-cours", "moc-theme", "seance", "dashboard", "session"]);

// Barème UdeM (cycles sup.) — ajuste si un plan de cours en utilise un autre
const BAREME = [[90,"A+",4.3],[85,"A",4.0],[80,"A-",3.7],[77,"B+",3.3],[73,"B",3.0],[70,"B-",2.7],
                [65,"C+",2.3],[60,"C",2.0],[57,"C-",1.7],[54,"D+",1.3],[50,"D",1.0],[0,"E",0]];
const lettre = n => BAREME.find(([s]) => n >= s) ?? BAREME[BAREME.length - 1];
const ptsLettre = L => (BAREME.find(b => b[1] === L) ?? [null, null, null])[2];

// ---------- sessions ----------
const SESSIONS = dv.pages().where(p => p.type === "session").array()
  .map(p => ({ p, nom: p.file.name, debut: toDate(p.debut), fin: toDate(p.fin) }))
  .sort((a, b) => ms(a.debut) - ms(b.debut));
const statutSession = s => !s.debut || !s.fin ? "?" : s.fin < today ? "terminée" : s.debut <= today ? "en cours" : "à venir";

function pickSession() {
  const want = cfg.session && String(cfg.session).toLowerCase() !== "auto" ? nameOf(cfg.session) : null;
  if (want) return SESSIONS.find(s => s.nom === want) ?? { nom: want, debut: null, fin: null, p: {} };
  const dated = SESSIONS.filter(s => s.debut && s.fin);
  return dated.find(s => s.debut <= today && today <= s.fin)
      ?? dated.find(s => s.debut > today)
      ?? dated[dated.length - 1] ?? null;
}
const SES = pickSession();
const START = SES?.debut ?? null, END = SES?.fin ?? null;

const ALL_MOCS = dv.pages().where(p => p.type === "moc-cours" && p.session).array();
const coursesOf = nom => ALL_MOCS.filter(p => nameOf(p.session) === nom)
  .sort((a, b) => String(codeOf(a)).localeCompare(String(codeOf(b))));
const courses = SES ? coursesOf(SES.nom) : [];
const colorOf = new Map(courses.map((c, i) => [codeOf(c), c.couleur || PALETTE[i % PALETTE.length]]));

function needSession() {
  if (START && END) return true;
  dv.paragraph(SES ? `⚠️ La note de session « ${SES.nom} » doit avoir \`debut\` et \`fin\`.`
                   : "⚠️ Aucune note `type: session` trouvée (voir Maîtrise/Sessions).");
  return false;
}
function noCourses() {
  if (courses.length) return false;
  dv.paragraph(`Aucun MOC \`type: moc-cours\` avec \`session: ${SES?.nom ?? "?"}\` pour l'instant.`);
  return true;
}

// ---------- évaluations ----------
function evalsAll() {
  const out = [];
  for (const c of courses) for (const e of toArr(c.evaluations)) {
    if (!e) continue;
    out.push({ c, code: codeOf(c), nom: e.nom ?? "?", poids: num(e.poids),
               note: e.note, max: num(e.max, 100) || 100, d: toDate(e.echeance) });
  }
  return out;
}
const upcoming = () => evalsAll().filter(e => e.d && e.d >= today && !isNum(e.note)).sort((a, b) => a.d - b.d);
function quand(d) {
  const n = Math.round(d.diff(today, "days").days);
  const dot = n <= 3 ? "🔴" : n <= 7 ? "🟠" : n <= 14 ? "🟡" : "🟢";
  return `${dot} ${n === 0 ? "aujourd'hui" : n === 1 ? "demain" : "dans " + n + " j"}`;
}
function calc(c) {
  const evs = toArr(c.evaluations).filter(Boolean);
  const W = evs.reduce((s, e) => s + num(e.poids), 0);
  let Wd = 0, pts = 0;
  for (const e of evs) if (isNum(e.note)) {
    const p = num(e.poids); Wd += p; pts += p * e.note / (num(e.max, 100) || 100);
  }
  const moy = Wd ? pts / Wd * 100 : null;
  const cible = isNum(c.cible_note) ? c.cible_note : null;
  let proj = pts;
  for (const e of evs) if (!isNum(e.note)) {
    const est = isNum(e.estime) ? e.estime / (num(e.max, 100) || 100) * 100 : (moy ?? cible ?? 80);
    proj += num(e.poids) * est / 100;
  }
  return { evs, W, Wd, pts, moy, cible,
    proj: W ? proj / W * 100 : null, floor: W ? pts / W * 100 : null, ceil: W ? (pts + W - Wd) / W * 100 : null };
}
// note retenue pour un cours : officielle si fournie, sinon projection
function resultat(c) {
  const r = calc(c);
  const note = isNum(c.note_finale) ? c.note_finale : r.proj;
  const L = c.lettre_finale ? String(c.lettre_finale) : note != null ? lettre(note)[1] : null;
  const officiel = !!c.lettre_finale || isNum(c.note_finale) || (r.W > 0 && r.Wd === r.W);
  return { note, L, pts: L ? ptsLettre(L) : null, officiel, cr: num(c.credits, 4) };
}

// ---------- temps d'étude ----------
function studyMinutes(codes) {
  const by = Object.fromEntries(codes.map(k => [k, new Map()]));
  const total = new Map();
  for (const p of dv.pages().where(p => p.file.day).array()) {
    const k = p.file.day.toISODate();
    for (const c of codes) {
      const v = num(p["etude_" + c]);
      if (v > 0) { by[c].set(k, (by[c].get(k) || 0) + v); total.set(k, (total.get(k) || 0) + v); }
    }
  }
  return { by, total };
}
const sumRange = (m, a, b) => { let s = 0; for (const [k, v] of m) if (k >= a && k <= b) s += v; return s; };

function drawHeat(label, map, color, cible, from, to) {
  const g0 = from.startOf("week"), g1 = to.endOf("week").startOf("day");
  const nDays = Math.round(g1.diff(g0, "days").days) + 1;
  const tISO = today.toISODate(), wk0 = today.startOf("week").toISODate();
  const nW = Math.max(1, Math.ceil((Math.min(ms(today), ms(to)) - ms(from)) / 864e5 / 7));
  const box = dv.container.createDiv({ cls: "mtr-heat-box" });
  const all = sumRange(map, from.toISODate(), to.toISODate()), week = sumRange(map, wk0, tISO);
  const t = box.createDiv({ cls: "mtr-heat-title" });
  t.createSpan({ cls: "mtr-dot" }).style.background = color;
  const enCours = today >= from && today <= to;
  t.createSpan({ text: ` ${label} — ` + (enCours ? `cette semaine ${h(week)} h${cible ? " / " + cible + " h" : ""} · ` : "") +
                       `moyenne ${h(all / nW)} h/sem · total ${h(all)} h` });
  if (cible && enCours) {
    const b = box.createDiv({ cls: "mtr-bar mtr-bar-thin" });
    const s = b.createDiv({ cls: "mtr-seg" }); s.style.width = Math.min(100, week / 60 / cible * 100) + "%"; s.style.background = color;
  }
  const grid = box.createDiv({ cls: "mtr-heat-grid" });
  for (let i = 0; i < nDays; i++) {
    const d = g0.plus({ days: i }), k = d.toISODate(), m = map.get(k) || 0;
    const cell = grid.createDiv({ cls: "mtr-cell" });
    const lvl = m === 0 ? 0 : m < 30 ? 1 : m < 60 ? 2 : m < 120 ? 3 : 4;
    if (lvl) { cell.style.background = color; cell.style.opacity = [0, .3, .5, .75, 1][lvl]; }
    if (d < from || d > to) cell.addClass("mtr-out");
    if (k === tISO) cell.addClass("mtr-today");
    if (d > today) cell.addClass("mtr-future");
    cell.setAttr("title", `${FR(d).toFormat("ccc d LLL yyyy")} — ${m} min`);
  }
}

// ==================== SECTIONS ====================

function entete() {
  if (!SES) return dv.paragraph("⚠️ Aucune note `type: session` trouvée (voir Maîtrise/Sessions).");
  const box = dv.container.createDiv({ cls: "mtr-head" });
  const idx = SESSIONS.findIndex(s => s.nom === SES.nom);
  const auto = !cfg.session || String(cfg.session).toLowerCase() === "auto";
  box.createDiv({ cls: "mtr-head-title",
    text: `${SES.nom}${idx >= 0 ? ` · session ${idx + 1} / ${SESSIONS.length}` : ""}${auto ? "" : " · (session fixée dans le frontmatter)"}` });
  if (!needSession()) return;
  const span = END.diff(START, "days").days;
  const totalW = Math.ceil(span / 7);
  const sem = Math.min(totalW, Math.max(0, Math.floor(today.diff(START, "days").days / 7) + 1));
  const st = statutSession(SES);
  const txt = st === "à venir" ? `Commence dans ${Math.round(START.diff(today, "days").days)} jours`
            : st === "terminée" ? "Session terminée"
            : `Semaine ${sem} / ${totalW} · ${Math.max(0, Math.round(END.diff(today, "days").days))} jours restants`;
  box.createDiv({ cls: "mtr-head-txt", text: `${txt} · ${courses.length} cours` });
  const bar = box.createDiv({ cls: "mtr-bar" });
  bar.createDiv({ cls: "mtr-seg mtr-accent" }).style.width =
    (Math.min(1, Math.max(0, today.diff(START, "days").days / span)) * 100).toFixed(1) + "%";
  const next = upcoming()[0];
  if (next) box.createDiv({ cls: "mtr-head-sub", text: `Prochaine échéance : ${next.nom} (${next.code}) — ${quand(next.d)}` });
}

function echeances() {
  if (noCourses()) return;
  const up = upcoming();
  if (up.length) dv.table(["Quand", "Date", "Cours", "Évaluation", "Poids"],
    up.map(e => [quand(e.d), FR(e.d).toFormat("ccc d LLL"), e.c.file.link, e.nom, e.poids + " %"]));
  else dv.paragraph("Aucune échéance à venir (ou dates `echeance` non renseignées).");
  const attente = evalsAll().filter(e => e.d && e.d < today && !isNum(e.note)).sort((a, b) => a.d - b.d);
  if (attente.length) {
    dv.paragraph("**📥 Remis, en attente de note** — inscris-la dans le MOC dès que tu la reçois :");
    dv.table(["Date", "Cours", "Évaluation", "Poids"],
      attente.map(e => [FR(e.d).toFormat("d LLL"), e.c.file.link, e.nom, e.poids + " %"]));
  }
  const sansDate = evalsAll().filter(e => !e.d && !isNum(e.note));
  if (sansDate.length) dv.paragraph(`<small>Sans date : ${sansDate.map(e => `${e.nom} (${e.code})`).join(" · ")}</small>`);
}

function notes() {
  if (noCourses()) return;
  const rows = [], bars = [];
  let gpaNum = 0, gpaCred = 0;
  for (const c of courses) {
    const r = calc(c);
    if (!r.W) { rows.push([c.file.link, "—", "—", "—", "—", "ajoute `evaluations` au MOC"]); continue; }
    let requis = "—";
    if (r.cible != null && r.W - r.Wd > 0) {
      const q = (r.cible * r.W / 100 - r.pts) / (r.W - r.Wd) * 100;
      requis = q <= 0 ? "✅ acquis" : q > 100 ? "❌ hors d'atteinte" : `${q.toFixed(1)} % requis sur le reste`;
    } else if (r.cible != null) requis = r.proj >= r.cible ? "✅ atteinte" : "❌ manquée";
    const [, L, p43] = lettre(r.proj);
    const cr = num(c.credits, 4);
    gpaNum += p43 * cr; gpaCred += cr;
    const warn = Math.abs(r.W - 100) > 0.01 ? ` ⚠️ Σpoids=${r.W}` : "";
    rows.push([c.file.link, `${r.Wd} / ${r.W} %${warn}`, pct(r.moy), `**${pct(r.proj)}** (${L})`,
               `${r.floor.toFixed(0)}–${r.ceil.toFixed(0)} %`, r.cible != null ? `${r.cible} % → ${requis}` : "—"]);
    bars.push({ c, r });
  }
  dv.table(["Cours", "Évalué", "Moy. actuelle", "Projetée", "Plancher–plafond", "Cible"], rows);
  const wrap = dv.container.createDiv({ cls: "mtr-bars" });
  for (const { c, r } of bars) {
    const row = wrap.createDiv({ cls: "mtr-bar-row" });
    row.createDiv({ cls: "mtr-bar-label", text: codeOf(c) });
    const bar = row.createDiv({ cls: "mtr-bar" });
    const seg = (cls, w, t) => { const s = bar.createDiv({ cls: "mtr-seg " + cls }); s.style.width = w + "%"; s.setAttr("title", t); };
    seg("mtr-ok", r.pts / r.W * 100, `Acquis : ${r.pts.toFixed(1)} pts`);
    seg("mtr-lost", (r.Wd - r.pts) / r.W * 100, `Perdus : ${(r.Wd - r.pts).toFixed(1)} pts`);
    if (r.cible != null) { const m = bar.createDiv({ cls: "mtr-mark" }); m.style.left = r.cible + "%"; m.setAttr("title", `Cible ${r.cible} %`); }
  }
  if (bars.length) wrap.createDiv({ cls: "mtr-legend", text: "vert = acquis · rouge = perdu · gris = encore en jeu · trait = cible" });
  if (gpaCred) dv.paragraph(`Moyenne de session projetée : **${(gpaNum / gpaCred).toFixed(2)} / 4.3** (pondérée par crédits).`);
}

function heatmap() {
  if (!needSession() || noCourses()) return;
  const codes = courses.map(codeOf);
  const { by, total } = studyMinutes(codes);
  for (const c of courses) drawHeat(codeOf(c), by[codeOf(c)], colorOf.get(codeOf(c)), num(c.cible_h_semaine) || null, START, END);
  drawHeat("Total", total, "var(--interactive-accent)", courses.reduce((s, c) => s + num(c.cible_h_semaine), 0) || null, START, END);
  dv.container.createDiv({ cls: "mtr-legend", text: "Colonnes = semaines (lun→dim). Intensité : < 30 min · < 1 h · < 2 h · ≥ 2 h." });
  const g0 = START.startOf("week"), rows = [];
  for (let w = 0; ; w++) {
    const a = g0.plus({ weeks: w }); if (a > today || a > END) break;
    const A = a.toISODate(), B = a.plus({ days: 6 }).toISODate();
    rows.push([`S${w + 1} · ${FR(a).toFormat("d LLL")}`, ...codes.map(k => h(sumRange(by[k], A, B))), `**${h(sumRange(total, A, B))}**`]);
  }
  if (rows.length) dv.table(["Semaine", ...codes.map(k => k + " (h)"), "Total (h)"], rows.reverse());
}

// Après chaque cours, au moins une note du cours doit être modifiée avant le cours suivant.
function suivi() {
  if (!needSession() || noCourses()) return;
  const fenetre = input?.jours ?? 14;   // on ne juge que les cours récents (l'historique des modifs se perd)
  const d0 = toDate(SES.p.suivi_depuis) || START, dF = today.minus({ days: fenetre });
  const from = d0 > dF ? d0 : dF;
  const excl = new Set(toArr(SES.p.pas_de_cours).map(x => toDate(x)?.toISODate()).filter(Boolean));
  const lim = END < today ? END : today.minus({ days: 1 });
  // dates d'activité connues d'une note : création, `maj`, dernière modification
  const dates = p => [p.file.ctime, p.maj, p.file.mtime].map(toDate).filter(Boolean);
  const flagged = [], recap = [];
  for (const c of courses) {
    const k = codeOf(c), jours = toArr(c.jours).map(Number);
    const upd = dv.pages().where(p => p.cours && hasCode(p, k) && p.type !== "dashboard" && p.type !== "session")
      .array().flatMap(p => dates(p).map(d => ({ p, d })));
    const lect = [];
    if (jours.length) for (let d = from; d <= lim; d = d.plus({ days: 1 }))
      if (jours.includes(d.weekday) && !excl.has(d.toISODate())) lect.push(d);
    let ok = 0;
    lect.forEach((d, i) => {
      const fin = lect[i + 1] ?? today.plus({ days: 1 });
      const couvert = upd.some(x => x.d >= d && x.d < fin);
      const age = Math.round(today.diff(d, "days").days);
      if (couvert) ok++;
      else if (lect[i + 1] || age >= 2) flagged.push([c.file.link, FR(d).toFormat("cccc d LLLL"), `${age} j`]);
    });
    const last = lect[lect.length - 1];
    const touched = last ? new Set(upd.filter(x => x.d >= last).map(x => x.p.file.path ?? x.p.file.link)).size : 0;
    const dern = upd.map(x => x.d).sort((a, b) => b - a)[0];
    recap.push([c.file.link, lect.length ? `${ok} / ${lect.length}` : (jours.length ? "—" : "ajoute `jours` au MOC"),
                last ? FR(last).toFormat("ccc d LLL") : "—", touched, dern ? FR(dern).toFormat("d LLL") : "—"]);
  }
  if (flagged.length) {
    dv.paragraph(`**🚨 ${flagged.length} cours sans mise à jour du vault** (${fenetre} derniers jours — aucune note du cours créée ou modifiée avant le cours suivant) :`);
    dv.table(["Cours", "Date du cours", "Il y a"], flagged);
  } else dv.paragraph(`✅ Chaque cours des ${fenetre} derniers jours a été suivi d'une mise à jour du vault.`);
  dv.table(["Cours", `Couverts (${fenetre} j)`, "Dernier cours", "Notes touchées depuis", "Dernière maj"], recap);
}

function sante() {
  if (noCourses()) return;
  dv.table(["Cours", "Notes", "complet", "brouillon", "incomplet", "à réviser", "sans statut", "% complet"], courses.map(c => {
    const k = codeOf(c);
    const ns = dv.pages().where(p => p.cours && hasCode(p, k) && !NON_NOTES.has(p.type)).array();
    const n = s => ns.filter(p => p.statut === s).length, comp = n("complet");
    return [c.file.link, ns.length, comp, n("brouillon"), n("incomplet"), n("à réviser"), ns.filter(p => !p.statut).length,
            ns.length ? Math.round(comp / ns.length * 100) + " %" : "—"];
  }));
}

function revision() {
  if (noCourses()) return;
  const N = input?.n ?? 12;
  const codes = new Set(courses.map(codeOf));
  const ns = dv.pages().where(p => p.cours && toArr(p.cours).some(k => codes.has(k)) && !NON_NOTES.has(p.type)).array();
  const age = p => { const d = toDate(p.maj) || toDate(p.file.mtime); return d ? Math.round(today.diff(d, "days").days) : 999; };
  const score = p => (p.statut === "à réviser" ? 10000 : 0) + age(p);
  const top = ns.sort((a, b) => score(b) - score(a)).slice(0, N);
  if (!top.length) return dv.paragraph("Rien à revoir pour l'instant.");
  dv.table(["Note", "Cours", "Statut", "Dernière maj"],
    top.map(p => [p.file.link, toArr(p.cours).filter(k => codes.has(k)).join(", "), p.statut ?? "—", `il y a ${age(p)} j`]));
}

// Vue d'ensemble de toute la maîtrise
function maitrise() {
  const noms = [...new Set([...SESSIONS.map(s => s.nom), ...ALL_MOCS.map(p => nameOf(p.session))])];
  const sesOf = nom => SESSIONS.find(s => s.nom === nom) ?? { nom, debut: null, fin: null, p: {} };
  const ordered = noms.map(sesOf).sort((a, b) => ms(a.debut) - ms(b.debut));
  const allCodes = [...new Set(ALL_MOCS.map(codeOf))];
  const { total } = studyMinutes(allCodes);

  let crFait = 0, gNum = 0, gCr = 0, pNum = 0, pCr = 0;
  const rows = [];
  for (const s of ordered) {
    const cs = coursesOf(s.nom), st = statutSession(s);
    const hrs = s.debut && s.fin ? h(sumRange(total, s.debut.toISODate(), s.fin.toISODate())) : "—";
    const link = s.p?.file?.link ?? s.nom;
    if (!cs.length) { rows.push([link, st, "—", "—", "—", "—", hrs]); continue; }
    cs.forEach((c, i) => {
      const r = resultat(c);
      if (r.pts != null) {
        pNum += r.pts * r.cr; pCr += r.cr;
        if (r.officiel && st === "terminée") { gNum += r.pts * r.cr; gCr += r.cr; if (r.pts > 0) crFait += r.cr; }
      }
      rows.push([i === 0 ? link : "", i === 0 ? st : "", c.file.link, r.cr,
                 r.note != null ? r.note.toFixed(1) + " %" : "—", r.L ? (r.officiel ? `**${r.L}**` : `*${r.L}* (proj.)`) : "—",
                 i === 0 ? hrs : ""]);
    });
  }
  const prog = num(cfg.credits_programme) || null;
  const box = dv.container.createDiv({ cls: "mtr-head" });
  box.createDiv({ cls: "mtr-head-txt", text:
    `Crédits complétés : ${crFait}${prog ? " / " + prog : ""} · moyenne cumulative : ${gCr ? (gNum / gCr).toFixed(2) : "—"} / 4.3` +
    ` · projetée (incl. sessions en cours) : ${pCr ? (pNum / pCr).toFixed(2) : "—"}` });
  if (prog) { const b = box.createDiv({ cls: "mtr-bar" }); b.createDiv({ cls: "mtr-seg mtr-accent" }).style.width = Math.min(100, crFait / prog * 100) + "%"; }
  dv.table(["Session", "Statut", "Cours", "Crédits", "Note", "Lettre", "Étude (h)"], rows);

  const dated = ordered.filter(s => s.debut && s.fin);
  if (dated.length) drawHeat("Toute la maîtrise", total, "var(--interactive-accent)", null,
                             dated[0].debut, dated[dated.length - 1].fin);
}

const SECTIONS = { entete, echeances, notes, heatmap, suivi, sante, revision, maitrise };
const fn = SECTIONS[input?.section];
if (fn) fn(); else dv.paragraph(`Section inconnue : \`${input?.section}\`. Choix : ${Object.keys(SECTIONS).join(", ")}`);
