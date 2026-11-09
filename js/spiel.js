// Lernwelt – Spielmechanik: XP, Level, Münzen, Streak, Tagesquests, Abzeichen, Shop
"use strict";
const SPEICHER = "lernwelt-v1";

const AVATARE = [
  { id: "fuchs", e: "🦊", name: "Fuchs", preis: 0 }, { id: "koala", e: "🐨", name: "Koala", preis: 0 }, { id: "robot", e: "🤖", name: "Roboter", preis: 0 },
  { id: "eule", e: "🦉", name: "Eule", preis: 60 }, { id: "drache", e: "🐉", name: "Drache", preis: 120 }, { id: "astro", e: "👨‍🚀", name: "Astronaut", preis: 150 },
  { id: "ninja", e: "🥷", name: "Ninja", preis: 150 }, { id: "zauber", e: "🧙", name: "Magier", preis: 200 }, { id: "einhorn", e: "🦄", name: "Einhorn", preis: 250 },
  { id: "alien", e: "👽", name: "Alien", preis: 300 }, { id: "krone", e: "👑", name: "Königskrone", preis: 500 }, { id: "phoenix", e: "🔥", name: "Phönix", preis: 800 },
];
const THEMES = [
  { id: "sonne", name: "Sonnenaufgang", preis: 0, farben: { bg: "#fdf6ee", karte: "#ffffff", text: "#2b2118", leise: "#7b6a5c", akzent: "#e0632f", akzent2: "#f0a040", rand: "#ead9c6" } },
  { id: "ozean", name: "Ozean", preis: 100, farben: { bg: "#eef6fb", karte: "#ffffff", text: "#13283a", leise: "#5d7488", akzent: "#1f7ac9", akzent2: "#36b4d8", rand: "#cfe0ee" } },
  { id: "wald", name: "Dschungel", preis: 100, farben: { bg: "#eff7ee", karte: "#ffffff", text: "#1c2e1a", leise: "#5f7a5c", akzent: "#2e8b57", akzent2: "#7cc04a", rand: "#cfe3cc" } },
  { id: "nacht", name: "Nachtmodus", preis: 150, farben: { bg: "#15131c", karte: "#231f2e", text: "#f1ecff", leise: "#a79fc4", akzent: "#8f6cff", akzent2: "#5bd0ff", rand: "#3a3350" } },
  { id: "lava", name: "Lava", preis: 250, farben: { bg: "#1b1212", karte: "#2a1a1a", text: "#ffeee6", leise: "#c99b8a", akzent: "#ff5a2e", akzent2: "#ffb02e", rand: "#4a2a24" } },
  { id: "gold", name: "Gold-Edition", preis: 600, farben: { bg: "#fbf6e4", karte: "#fffdf4", text: "#3a2d0a", leise: "#8a7a4a", akzent: "#c9962a", akzent2: "#e8c45a", rand: "#eadfb8" } },
];
const TITEL = [
  { id: "neuling", name: "Neuling", preis: 0 }, { id: "streber", name: "Streber (im besten Sinn)", preis: 80 }, { id: "entdecker", name: "Entdecker", preis: 120 },
  { id: "bosskiller", name: "Boss-Bezwinger", preis: 200 }, { id: "nachteule", name: "Nachteule", preis: 150 }, { id: "legende", name: "Lebende Legende", preis: 1000 },
];
const LEVEL_TITEL = ["Frischling", "Neuling", "Lehrling", "Entdecker", "Kenner", "Könner", "Profi", "Experte", "Meister", "Großmeister", "Legende"];

// XP, die für Level n insgesamt nötig sind (Level 1 = 0 XP)
const xpFuerLevel = (n) => Math.round(60 * (n - 1) * (n + 2) / 2);
function levelAusXp(xp) { let n = 1; while (xpFuerLevel(n + 1) <= xp) n++; return n; }

const ABZEICHEN = [
  { id: "erste", e: "🎉", name: "Erste Runde", text: "Deine erste Übungsrunde geschafft", pruefe: (s) => s.statistik.runden >= 1 },
  { id: "perfekt", e: "💯", name: "Fehlerfrei", text: "Eine Runde ohne Fehler", pruefe: (s) => s.statistik.perfekt >= 1 },
  { id: "perfekt10", e: "🌟", name: "Perfektionist", text: "10 Runden ohne Fehler", pruefe: (s) => s.statistik.perfekt >= 10 },
  { id: "aufg100", e: "💪", name: "Hundert", text: "100 Aufgaben gelöst", pruefe: (s) => s.statistik.richtig >= 100 },
  { id: "aufg500", e: "🏋️", name: "Fünfhundert", text: "500 Aufgaben gelöst", pruefe: (s) => s.statistik.richtig >= 500 },
  { id: "aufg2000", e: "🧠", name: "Hirnathlet", text: "2000 Aufgaben gelöst", pruefe: (s) => s.statistik.richtig >= 2000 },
  { id: "streak3", e: "🔥", name: "Dranbleiber", text: "3 Tage am Stück gelernt", pruefe: (s) => s.streak.max >= 3 },
  { id: "streak7", e: "🔥🔥", name: "Eine Woche", text: "7 Tage am Stück gelernt", pruefe: (s) => s.streak.max >= 7 },
  { id: "streak30", e: "☄️", name: "Unaufhaltsam", text: "30 Tage am Stück gelernt", pruefe: (s) => s.streak.max >= 30 },
  { id: "boss1", e: "⚔️", name: "Boss-Bezwinger", text: "Ersten Boss besiegt", pruefe: (s) => Object.keys(s.bosse).length >= 1 },
  { id: "boss5", e: "🛡️", name: "Bossjäger", text: "Bosse in 5 Fächern besiegt", pruefe: (s) => Object.keys(s.bosse).length >= 5 },
  { id: "bossalle", e: "🏆", name: "Champion", text: "In jedem Fach den Boss besiegt", pruefe: (s) => window.FAECHER.length > 0 && window.FAECHER.every((f) => s.bosse[f.id]) },
  { id: "level5", e: "⭐", name: "Level 5", text: "Level 5 erreicht", pruefe: (s) => levelAusXp(s.xp) >= 5 },
  { id: "level10", e: "🌠", name: "Level 10", text: "Level 10 erreicht", pruefe: (s) => levelAusXp(s.xp) >= 10 },
  { id: "level20", e: "👑", name: "Level 20", text: "Level 20 erreicht", pruefe: (s) => levelAusXp(s.xp) >= 20 },
  { id: "allefaecher", e: "🧭", name: "Allrounder", text: "In jedem Fach eine Runde gespielt", pruefe: (s) => window.FAECHER.length > 0 && window.FAECHER.every((f) => s.faecher[f.id] && s.faecher[f.id].runden >= 1) },
  { id: "sterne10", e: "✨", name: "Sternensammler", text: "10 Themen mit 3 Sternen", pruefe: (s) => Object.values(s.themen).filter((t) => t.sterne >= 3).length >= 10 },
  { id: "sterne30", e: "🌌", name: "Sternenhimmel", text: "30 Themen mit 3 Sternen", pruefe: (s) => Object.values(s.themen).filter((t) => t.sterne >= 3).length >= 30 },
  { id: "quests10", e: "📜", name: "Questmeister", text: "10 Tagesquests erfüllt", pruefe: (s) => s.statistik.quests >= 10 },
  { id: "frueh", e: "🌅", name: "Frühaufsteher", text: "Vor 7 Uhr gelernt", pruefe: (s) => s.statistik.frueh },
  { id: "nacht", e: "🦉", name: "Nachteule", text: "Nach 22 Uhr gelernt", pruefe: (s) => s.statistik.nacht },
  { id: "shopper", e: "🛍️", name: "Shopper", text: "Etwas im Shop gekauft", pruefe: (s) => s.gekauft.length > 5 },
  { id: "vokabel100", e: "🗣️", name: "Wortschatz", text: "100 Vokabelkarten als „kann ich“ markiert", pruefe: (s) => Object.keys(s.gekonnt).length >= 100 },
];

// Tagesquests: 3 pro Tag, deterministisch aus dem Datum
const QUEST_VORLAGEN = [
  { id: "aufg15", text: "Löse 15 Aufgaben richtig", ziel: 15, zaehler: "richtig", lohn: 30 },
  { id: "aufg30", text: "Löse 30 Aufgaben richtig", ziel: 30, zaehler: "richtig", lohn: 50 },
  { id: "runden3", text: "Spiele 3 Übungsrunden", ziel: 3, zaehler: "runden", lohn: 30 },
  { id: "faecher2", text: "Übe in 2 verschiedenen Fächern", ziel: 2, zaehler: "faecher", lohn: 35 },
  { id: "faecher3", text: "Übe in 3 verschiedenen Fächern", ziel: 3, zaehler: "faecher", lohn: 50 },
  { id: "perfekt1", text: "Schaffe eine Runde ohne Fehler", ziel: 1, zaehler: "perfekt", lohn: 40 },
  { id: "boss1", text: "Fordere einen Boss heraus", ziel: 1, zaehler: "bosse", lohn: 40 },
  { id: "sterne1", text: "Hole in einem Thema 3 Sterne", ziel: 1, zaehler: "dreisterne", lohn: 40 },
  { id: "karten10", text: "Lerne 10 Karteikarten", ziel: 10, zaehler: "karten", lohn: 25 },
  { id: "schwach", text: "Übe eine Runde in deinem schwächsten Fach", ziel: 1, zaehler: "schwach", lohn: 45 },
];

const SPIEL = {
  stand: null,
  neu() {
    return {
      name: "", avatar: "fuchs", theme: "sonne", titel: "neuling", eingerichtet: false,
      xp: 0, muenzen: 0, gekauft: ["fuchs", "koala", "robot", "sonne", "neuling"],
      streak: { aktuell: 0, max: 0, letzterTag: null },
      statistik: { runden: 0, richtig: 0, falsch: 0, perfekt: 0, quests: 0, frueh: false, nacht: false, minuten: 0 },
      faecher: {},        // fachId → { runden, richtig, falsch }
      themen: {},         // "fach/thema" → { sterne, best, runden }
      bosse: {},          // fachId → beste Punktzahl in %
      schwer: {}, gekonnt: {},   // Karteikarten-Merker ("fach/thema/vorne")
      quests: { tag: null, stand: {}, erledigt: {} },
      abzeichen: {},      // id → Datum
      einstellungen: { ton: true },
      log: [],            // letzte Ereignisse [{t, text}]
    };
  },
  laden() {
    this.stand = this.neu();
    try { const g = JSON.parse(localStorage.getItem(SPEICHER)); if (g) this.stand = Object.assign(this.stand, g); } catch { /* kein Speicher */ }
    if (!AVATARE.some((a) => a.id === this.stand.avatar)) this.stand.avatar = "fuchs";
    this.questsPruefen();
    this.themeAnwenden();
    return this.stand;
  },
  sichern() { try { localStorage.setItem(SPEICHER, JSON.stringify(this.stand)); } catch { /* egal */ } },
  zuruecksetzen() { this.stand = this.neu(); this.sichern(); this.themeAnwenden(); },

  level() { return levelAusXp(this.stand.xp); },
  levelInfo() {
    const n = this.level(), von = xpFuerLevel(n), bis = xpFuerLevel(n + 1);
    return { level: n, titel: LEVEL_TITEL[Math.min(n, LEVEL_TITEL.length - 1)], von, bis, anteil: (this.stand.xp - von) / (bis - von), fehlt: bis - this.stand.xp };
  },
  avatar() { return AVATARE.find((a) => a.id === this.stand.avatar) || AVATARE[0]; },
  themeAnwenden() {
    const th = THEMES.find((t) => t.id === this.stand.theme) || THEMES[0];
    for (const [k, v] of Object.entries(th.farben)) document.documentElement.style.setProperty("--" + k, v);
    document.documentElement.dataset.theme = th.id;
    const meta = document.querySelector('meta[name="theme-color"]'); if (meta) meta.content = th.farben.akzent;
  },

  // Streak täglich fortschreiben – wird beim ersten Rundenende des Tages aufgerufen
  tagAktiv() {
    const s = this.stand.streak, heute = heuteKey();
    if (s.letzterTag === heute) return;
    s.aktuell = s.letzterTag && tageDiff(s.letzterTag, heute) === 1 ? s.aktuell + 1 : 1;
    s.letzterTag = heute; s.max = Math.max(s.max, s.aktuell);
    if (s.aktuell > 1) this.ereignis(`🔥 Streak: ${s.aktuell} Tage!`);
  },
  streakAktiv() { // zählt die Serie als lebendig, wenn heute oder gestern gelernt wurde
    const s = this.stand.streak; if (!s.letzterTag) return 0;
    const d = tageDiff(s.letzterTag, heuteKey()); return d <= 1 ? s.aktuell : 0;
  },

  // Tagesquests
  questsPruefen() {
    const q = this.stand.quests, heute = heuteKey();
    if (q.tag === heute) return;
    const r = macheRng(Number(heute.replace(/-/g, "")));
    const auswahl = r.shuffle(QUEST_VORLAGEN).slice(0, 3);
    q.tag = heute; q.liste = auswahl.map((v) => v.id); q.stand = {}; q.erledigt = {}; q.faecherHeute = [];
    this.sichern();
  },
  questListe() {
    this.questsPruefen();
    const q = this.stand.quests;
    return (q.liste || []).map((id) => { const v = QUEST_VORLAGEN.find((x) => x.id === id); return { ...v, stand: Math.min(v.ziel, q.stand[v.zaehler] || 0), fertig: !!q.erledigt[id] }; });
  },
  questZaehlen(zaehler, n = 1) {
    this.questsPruefen();
    const q = this.stand.quests; q.stand[zaehler] = (q.stand[zaehler] || 0) + n;
    for (const v of this.questListe()) if (!v.fertig && (q.stand[v.zaehler] || 0) >= v.ziel) {
      q.erledigt[v.id] = true; this.stand.statistik.quests++; this.stand.muenzen += v.lohn;
      this.ereignis(`📜 Quest geschafft: ${v.text} (+${v.lohn} 🪙)`); ton("muenze");
    }
  },

  // Nach einer Übungsrunde: XP, Münzen, Sterne, Quests, Abzeichen
  rundeAbschliessen({ fachId, themaId, richtig, gesamt, boss = false, kombMax = 0 }) {
    const s = this.stand, st = s.statistik, h = new Date().getHours();
    const vorherLevel = this.level();
    const proz = gesamt ? Math.round(100 * richtig / gesamt) : 0;
    let xp = richtig * 10 + (richtig === gesamt && gesamt > 0 ? 30 : 0) + Math.min(kombMax, 10) * 3;
    let muenzen = Math.round(richtig * 1.5) + (richtig === gesamt && gesamt > 0 ? 10 : 0);
    const serie = this.streakAktiv(); const bonus = Math.min(50, Math.max(0, serie - 1) * 5); // Streak-Bonus in %
    xp = Math.round(xp * (1 + bonus / 100));
    if (boss) { xp = Math.round(xp * 1.5); muenzen = Math.round(muenzen * 2); }
    s.xp += xp; s.muenzen += muenzen;
    st.runden++; st.richtig += richtig; st.falsch += gesamt - richtig; if (richtig === gesamt && gesamt > 0) st.perfekt++;
    if (h < 7) st.frueh = true; if (h >= 22) st.nacht = true;
    const f = s.faecher[fachId] = s.faecher[fachId] || { runden: 0, richtig: 0, falsch: 0 };
    f.runden++; f.richtig += richtig; f.falsch += gesamt - richtig;
    let sterneNeu = 0, dreiNeu = false;
    if (themaId) {
      const k = fachId + "/" + themaId, t = s.themen[k] = s.themen[k] || { sterne: 0, best: 0, runden: 0 };
      sterneNeu = proz >= 90 ? 3 : proz >= 70 ? 2 : proz >= 50 ? 1 : 0;
      if (sterneNeu >= 3 && t.sterne < 3) dreiNeu = true;
      t.sterne = Math.max(t.sterne, sterneNeu); t.best = Math.max(t.best, proz); t.runden++;
    }
    let bossSieg = false;
    if (boss) { bossSieg = proz >= 70; if (bossSieg) s.bosse[fachId] = Math.max(s.bosse[fachId] || 0, proz); }
    this.tagAktiv();
    // Quests
    const q = this.stand.quests; this.questsPruefen();
    q.faecherHeute = q.faecherHeute || []; if (!q.faecherHeute.includes(fachId)) { q.faecherHeute.push(fachId); q.stand.faecher = q.faecherHeute.length; }
    this.questZaehlen("richtig", richtig); this.questZaehlen("runden");
    if (richtig === gesamt && gesamt > 0) this.questZaehlen("perfekt");
    if (boss) this.questZaehlen("bosse"); if (dreiNeu) this.questZaehlen("dreisterne");
    if (fachId === this.schwaechstesFach(fachId)) this.questZaehlen("schwach");
    const neueAbzeichen = this.abzeichenPruefen();
    const levelUp = this.level() > vorherLevel;
    if (levelUp) { this.ereignis(`⬆️ Level ${this.level()} – ${this.levelInfo().titel}!`); }
    this.sichern();
    return { xp, muenzen, proz, sterne: sterneNeu, levelUp, neueAbzeichen, bossSieg, streakBonus: bonus };
  },
  schwaechstesFach(ausnahme) {
    const liste = window.FAECHER.map((f) => { const s = this.stand.faecher[f.id]; return { id: f.id, quote: s && s.richtig + s.falsch >= 10 ? s.richtig / (s.richtig + s.falsch) : 2 }; });
    const gespielt = liste.filter((x) => x.quote <= 1); if (!gespielt.length) return null;
    gespielt.sort((a, b) => a.quote - b.quote); return gespielt[0].id;
  },
  karteGelernt(n = 1) { this.questZaehlen("karten", n); this.sichern(); },
  abzeichenPruefen() {
    const neu = [];
    for (const a of ABZEICHEN) if (!this.stand.abzeichen[a.id] && a.pruefe(this.stand)) { this.stand.abzeichen[a.id] = heuteKey(); neu.push(a); this.ereignis(`${a.e} Abzeichen: ${a.name}`); }
    return neu;
  },
  kaufen(id, preis) {
    if (this.stand.gekauft.includes(id)) return true;
    if (this.stand.muenzen < preis) return false;
    this.stand.muenzen -= preis; this.stand.gekauft.push(id); this.abzeichenPruefen(); this.sichern(); ton("muenze"); return true;
  },
  ereignis(text) { this.stand.log.unshift({ t: Date.now(), text }); this.stand.log = this.stand.log.slice(0, 30); },
  sterne(fachId, themaId) { const t = this.stand.themen[fachId + "/" + themaId]; return t ? t.sterne : 0; },
  fachFortschritt(fach) {
    const n = fach.themen.length, sterne = fach.themen.reduce((a, t) => a + this.sterne(fach.id, t.id), 0);
    return { sterne, max: n * 3, anteil: n ? sterne / (n * 3) : 0 };
  },
};
