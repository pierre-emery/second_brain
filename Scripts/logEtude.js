// QuickAdd — Log étude
// Ajoute des minutes à `etude_<CODE>` dans le frontmatter de la note quotidienne.
// Le dashboard (section heatmap) lit ces champs.

const parseDuree = s => {
  s = String(s || "").trim().toLowerCase().replace(",", ".");
  let m = s.match(/^(\d+(?:\.\d+)?)\s*h\s*(\d+)?$/);            // 1h30, 1.5h, 2h
  if (m) return Math.round(parseFloat(m[1]) * 60 + (m[2] ? parseInt(m[2]) : 0));
  m = s.match(/^(\d+)\s*(?:min|m)?$/);                           // 90, 90min
  return m ? parseInt(m[1]) : NaN;
};

const toArr = x => x == null ? [] : Array.isArray(x) ? x : Array.isArray(x.values) ? x.values : [x];

function dailyCfg(app) {
  const pn = app.plugins.plugins["periodic-notes"]?.settings?.daily;
  if (pn && pn.enabled !== false) return { folder: pn.folder || "", format: pn.format || "YYYY-MM-DD" };
  const core = app.internalPlugins.getPluginById?.("daily-notes")?.instance?.options;
  return { folder: core?.folder || "", format: core?.format || "YYYY-MM-DD" };
}

module.exports = async ({ app, quickAddApi: qa, obsidian }) => {
  const dv = app.plugins.plugins.dataview?.api;
  let codes = dv ? dv.pages().where(p => p.type === "moc-cours").array().map(p => toArr(p.cours)[0]).filter(Boolean) : [];
  if (!codes.length) codes = ["IFT6135", "IFT6269"];

  const code = await qa.suggester(codes, codes);
  if (!code) return;
  const quand = await qa.suggester(["Aujourd'hui", "Hier"], [0, 1]);
  if (quand == null) return;
  const min = parseDuree(await qa.inputPrompt(`Durée pour ${code} (ex. 90, 1h30, 1.5h)`));
  if (!min || min <= 0) { new obsidian.Notice("Durée invalide"); return; }

  const { folder, format } = dailyCfg(app);
  const day = window.moment().subtract(quand, "days");
  const path = obsidian.normalizePath(`${folder ? folder + "/" : ""}${day.format(format)}.md`);

  let file = app.vault.getAbstractFileByPath(path);
  if (!file) {
    const dir = path.split("/").slice(0, -1).join("/");
    if (dir && !app.vault.getAbstractFileByPath(dir)) await app.vault.createFolder(dir);
    file = await app.vault.create(path, "");
  }

  const key = `etude_${code}`;
  let totalJour = 0;
  await app.fileManager.processFrontMatter(file, fm => {
    fm[key] = (Number(fm[key]) || 0) + min;
    totalJour = fm[key];
  });
  new obsidian.Notice(`✅ +${min} min ${code} (${day.format("D MMM")} : ${totalJour} min au total)`);
};
