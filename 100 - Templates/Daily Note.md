<%*

const m = window.moment(tp.file.title, "YYYY-MM-DD");

const jour = m.format("dddd");

const dateAffichee = m.locale("fr").format("dddd D MMMM YYYY");

const p1Debut = window.moment("2026-08-31", "YYYY-MM-DD");

const p1Fin = window.moment("2026-10-16", "YYYY-MM-DD");

const p2Debut = window.moment("2026-10-26", "YYYY-MM-DD");

const p2Fin = window.moment("2026-12-09", "YYYY-MM-DD");

const enSession = (m.isSameOrAfter(p1Debut) && m.isSameOrBefore(p1Fin)) ||

(m.isSameOrAfter(p2Debut) && m.isSameOrBefore(p2Fin));

let taches = [];

const entrainements = {

Monday: "Escalade (technique/volume) + Hangboard + Gainage (front lever, leg raises, windshield wipers) — avant les cours",

Tuesday: "",

Wednesday: "Escalade (board climbing) + Antagonistes (pike push-ups, face pulls, dips, extension poignet, rotator cuff) + Tractions lestées modérées + lock-offs légers — après les cours",

Thursday: "Course Zone 2",

Friday: "Escalade + Tractions lestées (séance lourde) + lock-offs + Gainage",

Saturday: "Course Zone 2",

Sunday: ""

};

if (enSession) {

if (jour === "Monday") {

// entraînement avant les cours le lundi

if (entrainements[jour]) taches.push(`- [ ] ${entrainements[jour]}`);

taches.push("- [ ] IFT6269 13h30-15h29 — Agora_MILA (Lacoste-Julien)");

taches.push("- [ ] IFT6135 15h30-17h29 — Agora_MILA (Agrawal)");

} else if (jour === "Wednesday") {

// entraînement après les cours le mercredi

taches.push("- [ ] IFT6135 9h30-11h29 — Agora_MILA (Agrawal)");

taches.push("- [ ] IFT6269 13h30-15h29 — Agora_MILA (Lacoste-Julien)");

if (entrainements[jour]) taches.push(`- [ ] ${entrainements[jour]}`);

} else {

if (entrainements[jour]) taches.push(`- [ ] ${entrainements[jour]}`);

}

} else {

if (entrainements[jour]) taches.push(`- [ ] ${entrainements[jour]}`);

}

const evenementsPonctuels = { "2026-12-18": "13h30-16h29 EXAMEN FINAL IFT6135 — Agora_MILA" };

if (evenementsPonctuels[tp.file.title]) {

taches.push(`- [ ] ⚠️ ${evenementsPonctuels[tp.file.title]}`);

}

const classesJour = { Monday:"monday",Tuesday:"tuesday",Wednesday:"wednesday",Thursday:"thursday",Friday:"friday",Saturday:"saturday",Sunday:"sunday" };

tR = `---
cssclasses: [daily, ${classesJour[jour]}]
`;
tR += "# NOTE DU JOUR\n";
tR += `## ${dateAffichee}\n`;
tR += "\n---\n\n";
tR += "### Tâches\n";
tR += taches.length ? taches.join("\n") + "\n" : "";
tR += "- [ ] \n- [ ] \n- [ ] \n";
%>