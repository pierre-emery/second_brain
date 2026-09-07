
```dataviewjs
const trackerData = {
    heatmapTitle: "Escalade",
    entries: [],
    excludeFalsy: true,
    intensityScaleStart: 4,
    intensityScaleEnd: 9,
    colorScheme: {
        paletteName: "custom",
        customColors: ["#d6e9ff", "#a8cdff", "#6ea8ff", "#3d7dff", "#1450d6"]
    }
};

for (let page of dv.pages('"98 - Logs Santé/Escalade"')) {
    if (!page.date || !page.niveau_max) continue;
    const grade = parseInt(String(page.niveau_max).replace(/[^\d]/g, ""));
    if (isNaN(grade)) continue;
    trackerData.entries.push({
        date: page.date.toFormat("yyyy-MM-dd"),
        filePath: page.file.path,
        intensity: grade
    });
}

renderHeatmapTracker(this.container, trackerData);
```
```dataviewjs
const trackerData = {
    heatmapTitle: "Cardio",
    entries: [],
    excludeFalsy: true,
    intensityScaleStart: 1,
    intensityScaleEnd: 15,
    colorScheme: {
        paletteName: "custom",
        customColors: ["#ffe0b2", "#ffb74d", "#fb8c00", "#e65100", "#bf360c"]
    }
};

for (let page of dv.pages('"98 - Logs Santé/Cardio"')) {
    if (!page.date || !page.distance_km) continue;
    trackerData.entries.push({
        date: page.date.toFormat("yyyy-MM-dd"),
        filePath: page.file.path,
        intensity: page.distance_km
    });
}

renderHeatmapTracker(this.container, trackerData);
```
```dataviewjs
const trackerData = {
    heatmapTitle: "Poids / Nutrition",
    entries: [],
    excludeFalsy: true,
    intensityScaleStart: 1,
    intensityScaleEnd: 2,
    colorScheme: {
        paletteName: "custom",
        customColors: ["#a8e6a1", "#1e7a34"]
    }
};

const byDate = {};

for (let page of dv.pages('"98 - Logs Santé/Poids"')) {
    if (!page.date || !page.poids_kg) continue;
    const d = page.date.toFormat("yyyy-MM-dd");
    byDate[d] = byDate[d] || { count: 0, filePath: page.file.path };
    byDate[d].count++;
    byDate[d].filePath = page.file.path;
}

for (let page of dv.pages('"98 - Logs Santé/Nutrition"')) {
    if (!page.date || !page.souper) continue;
    const d = page.date.toFormat("yyyy-MM-dd");
    byDate[d] = byDate[d] || { count: 0, filePath: page.file.path };
    byDate[d].count++;
    byDate[d].filePath = page.file.path;
}

for (const [date, info] of Object.entries(byDate)) {
    trackerData.entries.push({
        date: date,
        filePath: info.filePath,
        intensity: info.count
    });
}

renderHeatmapTracker(this.container, trackerData);
```
