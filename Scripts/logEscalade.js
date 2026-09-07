module.exports = async (params) => {
  const { app, quickAddApi, obsidian } = params;
  const { Modal, Setting } = obsidian;

  class ClimbBoardModal extends Modal {
    constructor(app, label, onSubmit) {
      super(app);
      this.label = label;
      this.onSubmit = onSubmit;
      this.boardName = label;
      this.counts = {};
      for (let i = 0; i <= 13; i++) this.counts[`v${i}`] = 0;
    }

    onOpen() {
      const { contentEl } = this;
      contentEl.createEl("h2", { text: this.label });

      new Setting(contentEl)
        .setName("Nom (salle générale ou nom du board)")
        .addText(t => t.setValue(this.boardName).onChange(v => this.boardName = v));

      for (let i = 0; i <= 13; i++) {
        const grade = `v${i}`;
        new Setting(contentEl)
          .setName(grade.toUpperCase())
          .addText(t => t.setPlaceholder("0").onChange(v => this.counts[grade] = parseInt(v) || 0));
      }

      const row = contentEl.createDiv({ cls: "modal-button-container" });

      const addBtn = row.createEl("button", { text: "+ Ajouter un board" });
      addBtn.onclick = () => {
        this.close();
        this.onSubmit({ boardName: this.boardName, counts: this.counts, addAnother: true });
      };

      const doneBtn = row.createEl("button", { text: "Terminer la séance", cls: "mod-cta" });
      doneBtn.onclick = () => {
        this.close();
        this.onSubmit({ boardName: this.boardName, counts: this.counts, addAnother: false });
      };
    }

    onClose() { this.contentEl.empty(); }
  }

  const date = await quickAddApi.inputPrompt("Date (YYYY-MM-DD)", "", window.moment().format("YYYY-MM-DD"));
  const lieu = await quickAddApi.inputPrompt("Salle/lieu");
  const duree = await quickAddApi.inputPrompt("Durée (minutes)");

  let boards = [];
  let first = true;
  let keepGoing = true;

  while (keepGoing) {
    const label = first ? "Murs de la salle" : `Board #${boards.length}`;
    const result = await new Promise(resolve => {
      new ClimbBoardModal(app, label, resolve).open();
    });
    boards.push(result);
    keepGoing = result.addAnother;
    first = false;
  }

  const totals = {};
  for (let i = 0; i <= 13; i++) totals[`v${i}`] = 0;
  let detailLines = [];

  for (const b of boards) {
    let boardTotal = 0;
    let boardGrades = [];
    for (let i = 0; i <= 13; i++) {
      const grade = `v${i}`;
      const count = b.counts[grade] || 0;
      totals[grade] += count;
      boardTotal += count;
      if (count > 0) boardGrades.push(`${grade}x${count}`);
    }
    if (boardTotal > 0) detailLines.push(`- **${b.boardName}** : ${boardGrades.join(", ")} (${boardTotal} voies)`);
  }

  const nbVoies = Object.values(totals).reduce((a, b) => a + b, 0);
  const grades = Object.entries(totals).filter(([g, c]) => c > 0).map(([g]) => parseInt(g.slice(1)));
  const niveauMax = grades.length ? `v${Math.max(...grades)}` : "";
  const resume = Object.entries(totals).filter(([g, c]) => c > 0).map(([g, c]) => `${g}x${c}`).join(", ");

  const folder = "98 - Logs Santé/Escalade";
  try { await app.vault.createFolder(folder); } catch (e) {}
  const filename = `${folder}/${date}-escalade.md`;

  const content = `---
type: escalade
date: ${date}
lieu: "${lieu}"
duree_min: ${duree}
nb_voies: ${nbVoies}
niveau_max: ${niveauMax}
resume: "${resume}"
---
## Détail par board
${detailLines.join("\n")}

## Notes

`;

  await app.vault.create(filename, content);
};