// Lernwelt – Bildschirme und Navigation
"use strict";
const haupt = $("#haupt");
function zeige(html) { haupt.innerHTML = html; window.scrollTo(0, 0); }
let rundeAktiv = false;

const BOSSE = {
  mathe: { name: "Der Zahlendrache", e: "🐲" }, englisch: { name: "The Grammar Kraken", e: "🐙" }, deutsch: { name: "Der Kommakrake", e: "🦑" },
  physik: { name: "Blitzgolem", e: "⚡🗿" }, chemie: { name: "Die Säureschlange", e: "🐍" }, biologie: { name: "Mutanten-Mammut", e: "🦣" },
  geschichte: { name: "Der Zeitwächter", e: "⏳" }, erdkunde: { name: "Der Weltenriese", e: "🗿" }, politik: { name: "Der Paragrafenlöwe", e: "🦁" },
  informatik: { name: "Der Bug-Bot", e: "🤖" }, religion: { name: "Der Sphinx-Wächter", e: "🗿" }, kunstmusik: { name: "Der Farbenphantom", e: "🎭" }, lernen: { name: "Der Prokrastinator", e: "🦥" },
};
const bossFuer = (f) => BOSSE[f.id] || { name: `Boss von ${f.name}`, e: "👹" };
const fach = (id) => window.FAECHER.find((f) => f.id === id);
const sterneHtml = (n, max = 3) => `<span class="sterne">${"★".repeat(n)}<span class="leer">${"★".repeat(max - n)}</span></span>`;

// ---------- Navigation ----------
function geh(hash) { location.hash = hash; }
function route() {
  rundeAktiv = false;
  const s = SPIEL.stand;
  if (!s.eingerichtet) return einrichten();
  const [seite, a, b] = location.hash.replace(/^#/, "").split("/");
  SPIEL.questsPruefen();
  switch (seite) {
    case "fach": return fach(a) ? fachSeite(fach(a)) : start();
    case "thema": { const f = fach(a), t = f && f.themen.find((x) => x.id === b); return t ? themaSeite(f, t) : start(); }
    case "ueben": { const f = fach(a), t = f && f.themen.find((x) => x.id === b); return t ? ueben(f, t) : start(); }
    case "karten": { const f = fach(a), t = f && f.themen.find((x) => x.id === b); return t ? karten(f, t) : start(); }
    case "boss": return fach(a) ? boss(fach(a)) : start();
    case "mix": return tagesmix();
    case "schwach": return schwacheRunde();
    case "shop": return shop();
    case "profil": return profil();
    case "abzeichen": return abzeichenSeite();
    case "einstellungen": return einstellungen();
    case "werkzeuge": return werkzeuge();
    case "timer": return timer();
    case "termine": return termine();
    case "eigene": return eigene(a);
    case "spick": return spick(a);
    default: return start();
  }
}
window.addEventListener("hashchange", route);

const nav = (aktiv) => `<nav class="unten">
  <button class="${aktiv === "start" ? "aktiv" : ""}" onclick="geh('')"><span>🏠</span>Start</button>
  <button class="${aktiv === "mix" ? "aktiv" : ""}" onclick="geh('mix')"><span>🎲</span>Mix</button>
  <button class="${aktiv === "werkzeuge" ? "aktiv" : ""}" onclick="geh('werkzeuge')"><span>🧰</span>Tools</button>
  <button class="${aktiv === "shop" ? "aktiv" : ""}" onclick="geh('shop')"><span>🛍️</span>Shop</button>
  <button class="${aktiv === "profil" ? "aktiv" : ""}" onclick="geh('profil')"><span>${SPIEL.avatar().e}</span>Profil</button></nav>`;

function kopfzeile() {
  const s = SPIEL.stand, li = SPIEL.levelInfo(), streak = SPIEL.streakAktiv();
  return `<header class="spielkopf" onclick="geh('profil')">
    <div class="avatar">${SPIEL.avatar().e}</div>
    <div class="spielinfo"><b>${esc(s.name || "Spieler")}</b> <span class="klein">· ${esc((TITEL.find((t) => t.id === s.titel) || TITEL[0]).name)}</span>
      <div class="levelzeile"><span class="level">Lv ${li.level}</span><div class="xpbalken"><div style="width:${Math.round(li.anteil * 100)}%"></div></div><span class="klein">${li.fehlt} XP bis Lv ${li.level + 1}</span></div></div>
    <div class="werte"><div title="Münzen">🪙 ${s.muenzen}</div><div title="Streak" class="${streak ? "heiss" : ""}">🔥 ${streak}</div></div>
  </header>`;
}

// ---------- Einrichten ----------
function einrichten() {
  const s = SPIEL.stand; let avatar = s.avatar;
  const male = () => zeige(`<section class="kopf"><h1>Willkommen in der Lernwelt!</h1><p>Lernen wie ein Spiel: Du sammelst XP, Münzen, Sterne und Abzeichen – in allen Fächern ab Klasse 9.</p></section>
    <h2>Wie heißt du?</h2><input id="name" maxlength="20" placeholder="Dein Name" value="${esc(s.name)}">
    <h2>Wähle deinen Begleiter</h2><div class="avatare">${AVATARE.filter((a) => a.preis === 0).map((a) => `<button class="${a.id === avatar ? "aktiv" : ""}" data-id="${a.id}"><span>${a.e}</span>${a.name}</button>`).join("")}</div>
    <p class="klein">Weitere Begleiter, Farbwelten und Titel gibt es später im Shop für Münzen.</p>
    <button class="haupt" id="los">Los geht's! 🚀</button>`);
  male();
  $$(".avatare button").forEach((b) => b.onclick = () => { avatar = b.dataset.id; $$(".avatare button").forEach((x) => x.classList.toggle("aktiv", x.dataset.id === avatar)); });
  $("#los").onclick = () => { s.name = $("#name").value.trim() || "Spieler"; s.avatar = avatar; s.eingerichtet = true; SPIEL.sichern(); geh(""); route(); };
}

// ---------- Startseite ----------
function start() {
  const s = SPIEL.stand, quests = SPIEL.questListe();
  const schwach = SPIEL.schwaechstesFach();
  zeige(`${kopfzeile()}
    <section class="quests">
      <h2>Tagesquests <small>${quests.filter((q) => q.fertig).length}/${quests.length}</small></h2>
      ${quests.map((q) => `<div class="quest ${q.fertig ? "fertig" : ""}"><div><div>${q.fertig ? "✅" : "▫️"} ${esc(q.text)}</div><div class="mini"><div style="width:${Math.round(100 * q.stand / q.ziel)}%"></div></div></div><div class="lohn">${q.stand}/${q.ziel}<br>+${q.lohn} 🪙</div></div>`).join("")}
    </section>
    <div class="reihe schnell">
      <button class="haupt" onclick="geh('mix')">🎲 Tagesmix<small>12 Aufgaben quer durch alles</small></button>
      ${schwach ? `<button class="neben" onclick="geh('schwach')">💪 Schwachstelle<small>${esc(fach(schwach).name)} üben</small></button>` : ""}
    </div>
    <h2>Deine Fächer</h2>
    <div class="faecher">${window.FAECHER.map((f) => { const p = SPIEL.fachFortschritt(f); return `<button class="fachkachel" style="--f:${f.farbe}" onclick="geh('fach/${f.id}')">
      <div class="icon">${f.icon}</div><div class="fachtext"><b>${esc(f.name)}</b><span>${esc(f.beschreibung)}</span>
      <div class="mini"><div style="width:${Math.round(p.anteil * 100)}%"></div></div><span class="klein">${p.sterne}/${p.max} ★ · ${f.themen.length} Themen ${s.bosse[f.id] ? "· Boss besiegt ⚔️" : ""}</span></div></button>`; }).join("")}
    </div>
    ${s.log.length ? `<h2>Zuletzt</h2><ul class="log">${s.log.slice(0, 5).map((l) => `<li>${esc(l.text)}</li>`).join("")}</ul>` : ""}
    ${nav("start")}`);
}

// ---------- Fach ----------
function fachSeite(f) {
  const s = SPIEL.stand, p = SPIEL.fachFortschritt(f), st = s.faecher[f.id];
  const b = bossFuer(f);
  zeige(`<div class="laufkopf"><button class="zurueck" onclick="geh('')">‹ Start</button></div>
    <section class="kopf" style="--f:${f.farbe}"><div class="fachkopf"><div class="icon">${f.icon}</div><div><h1>${esc(f.name)}</h1><p>${esc(f.beschreibung)}</p></div></div>
      <div class="fortschritt"><div style="width:${Math.round(p.anteil * 100)}%"></div></div>
      <p class="klein">${p.sterne} von ${p.max} Sternen ${st ? `· ${st.richtig} richtig, ${st.falsch} falsch` : ""}</p></section>
    <button class="bosskachel ${s.bosse[f.id] ? "besiegt" : ""}" onclick="geh('boss/${f.id}')"><div class="icon">${b.e}</div><div><b>Boss-Kampf: ${esc(b.name)}</b><span>12 Aufgaben aus allen Themen, 3 Leben. ${s.bosse[f.id] ? `Besiegt mit ${s.bosse[f.id]} %` : "Noch unbesiegt"} · doppelte Münzen</span></div></button>
    <h2>Themen</h2>
    <div class="themen">${f.themen.map((t) => { const st2 = s.themen[f.id + "/" + t.id]; return `<button class="thema" onclick="geh('thema/${f.id}/${t.id}')"><div><b>${esc(t.titel)}</b><span>${esc(t.kurz || "")}</span></div><div class="rechts">${sterneHtml(SPIEL.sterne(f.id, t.id))}${st2 ? `<span class="klein">${st2.best} %</span>` : ""}</div></button>`; }).join("")}</div>
    ${nav("")}`);
}

// ---------- Thema ----------
function themaSeite(f, t) {
  const karten = (t.aufgaben || []).filter((a) => a.t === "karte");
  const st = SPIEL.stand.themen[f.id + "/" + t.id];
  const anzahl = t.gen ? "∞" : (t.aufgaben || []).length;
  zeige(`<div class="laufkopf"><button class="zurueck" onclick="geh('fach/${f.id}')">‹ ${esc(f.name)}</button></div>
    <h1 class="themat">${esc(t.titel)}</h1><p class="klein">${esc(t.kurz || "")} · ${anzahl} Aufgaben ${st ? `· Bestwert ${st.best} % · ${st.runden} Runde${st.runden === 1 ? "" : "n"}` : ""} ${sterneHtml(SPIEL.sterne(f.id, t.id))}</p>
    ${t.erklaerung ? `<details class="regel" ${st ? "" : "open"}><summary>Erklärung</summary><div class="erkl">${t.erklaerung}</div></details>` : ""}
    ${t.hoertext ? `<div class="hoer">${lautBtn(t.hoertext, t.lang || f.lang || "en-GB")} <span>Hörtext anhören (der Text wird nicht angezeigt – wie im Test)</span></div>` : ""}
    <button class="haupt" onclick="geh('ueben/${f.id}/${t.id}')">▶ Üben – 10 Aufgaben</button>
    ${karten.length ? `<button class="neben breit" onclick="geh('karten/${f.id}/${t.id}')">🃏 Karteikarten lernen (${karten.length})</button>` : ""}
    <p class="hinweis">3 Sterne ab 90 %, 2 ab 70 %, 1 ab 50 %. Jede richtige Antwort bringt 10 XP, eine fehlerfreie Runde 30 XP extra.</p>
    ${nav("")}`);
}

// ---------- Runden ----------
function ueben(f, t) {
  rundeAktiv = true;
  const liste = aufgabenFuer(t, 10);
  const vorText = t.vorText || (t.hoertext ? `<div class="hoer">${lautBtn(t.hoertext, t.lang || f.lang || "en-GB")} <span>Hörtext anhören – so oft du willst. Lies erst die Frage, dann hör zu.</span></div>` : "");
  laufeAufgaben(liste, { lang: t.lang || f.lang, vorText, zurueckText: t.titel, fertig: (erg) => rundenErgebnis(erg, { f, t, zurueck: `thema/${f.id}/${t.id}`, nochmal: `ueben/${f.id}/${t.id}` }) });
}
function karten(f, t) {
  const liste = (t.aufgaben || []).filter((a) => a.t === "karte");
  laufeKarten(liste, { lang: f.lang, schluessel: `${f.id}/${t.id}`, zurueckText: t.titel, fertig: () => geh(`thema/${f.id}/${t.id}`) });
}
function boss(f) {
  const b = bossFuer(f);
  zeige(`<div class="laufkopf"><button class="zurueck" onclick="geh('fach/${f.id}')">‹ ${esc(f.name)}</button></div>
    <div class="bossintro"><div class="bossgross">${b.e}</div><h1>${esc(b.name)}</h1>
    <p>12 Aufgaben aus allen Themen von <b>${esc(f.name)}</b>. Jede richtige Antwort zieht dem Boss 1 HP ab. Du hast <b>3 Leben</b> – bei jedem Fehler geht eins verloren.</p>
    <p>Sieg ab 70 % (mindestens 9 Treffer) · XP ×1,5 · Münzen ×2</p>
    <button class="haupt" id="los">⚔️ Kampf beginnen</button></div>${nav("")}`);
  $("#los").onclick = () => {
    rundeAktiv = true;
    const themen = mischen(f.themen.filter((t) => !t.hoertext)); const liste = [];
    for (let i = 0; liste.length < 12 && i < 60; i++) { const t = themen[i % themen.length]; const a = aufgabenFuer(t, 1)[0]; if (a && !liste.some((x) => x.f === a.f)) liste.push(a); }
    laufeAufgaben(mischen(liste), { lang: f.lang, boss: b, zurueckText: "Aufgeben", fertig: (erg) => rundenErgebnis(erg, { f, boss: b, zurueck: `fach/${f.id}`, nochmal: `boss/${f.id}` }) });
  };
}
function zufallsAufgaben(n, faecherListe) {
  const liste = [];
  for (let i = 0; liste.length < n && i < n * 8; i++) {
    const f = RNG.pick(faecherListe), t = RNG.pick(f.themen.filter((x) => !x.hoertext)); const a = aufgabenFuer(t, 1)[0];
    if (a && !liste.some((x) => x.f === a.f)) { a.lang = a.lang || f.lang; a.fachName = f.name; liste.push(a); }
  }
  return liste;
}
function tagesmix() {
  rundeAktiv = true;
  const liste = zufallsAufgaben(12, window.FAECHER);
  laufeAufgaben(liste, { zurueckText: "Start", fertig: (erg) => rundenErgebnis(erg, { mix: true, zurueck: "", nochmal: "mix" }) });
}
function schwacheRunde() {
  const id = SPIEL.schwaechstesFach(); const f = id && fach(id); if (!f) return geh("");
  rundeAktiv = true;
  laufeAufgaben(zufallsAufgaben(10, [f]), { lang: f.lang, zurueckText: f.name, fertig: (erg) => rundenErgebnis(erg, { f, zurueck: `fach/${f.id}`, nochmal: "schwach" }) });
}

function rundenErgebnis(erg, ctx) {
  rundeAktiv = false;
  if (erg.abgebrochen && erg.gesamt && erg.richtig + erg.fehler.length < 3) return geh(ctx.zurueck); // kaum gespielt → nichts werten
  const gespielt = erg.abgebrochen ? erg.richtig + erg.fehler.length : erg.gesamt;
  const r = SPIEL.rundeAbschliessen({ fachId: ctx.f ? ctx.f.id : "mix", themaId: ctx.t ? ctx.t.id : null, richtig: erg.richtig, gesamt: ctx.boss ? erg.gesamt : gespielt, boss: !!ctx.boss, kombMax: erg.komboMax });
  if (r.levelUp) ton("level");
  const titel = ctx.boss ? (r.bossSieg ? `🏆 ${ctx.boss.name} besiegt!` : erg.verloren ? `💀 ${ctx.boss.name} hat gewonnen` : `😤 Knapp daneben`) : r.proz === 100 ? "💯 Perfekt!" : r.proz >= 70 ? "👍 Gut gemacht!" : r.proz >= 50 ? "🙂 Geht schon" : "💪 Weiter üben";
  zeige(`<div class="ergebnis">
      <div class="titel">${titel}</div>
      <div class="gross">${erg.richtig} / ${ctx.boss ? erg.gesamt : gespielt}</div>
      <div>${r.proz} %${ctx.t ? " · " + sterneHtml(r.sterne) : ""}${erg.komboMax >= 3 ? ` · beste Kombo ×${erg.komboMax}` : ""}</div>
      <div class="belohnung"><span>+${r.xp} XP</span><span>+${r.muenzen} 🪙</span>${r.streakBonus ? `<span>🔥 +${r.streakBonus} % Streak-Bonus</span>` : ""}</div>
      ${r.levelUp ? `<div class="levelup">⬆️ Level ${SPIEL.level()} – ${esc(SPIEL.levelInfo().titel)}!</div>` : ""}
      ${r.neueAbzeichen.map((a) => `<div class="neuabz">${a.e} Neues Abzeichen: <b>${esc(a.name)}</b> – ${esc(a.text)}</div>`).join("")}
    </div>
    ${erg.fehler.length ? `<h3>Noch mal anschauen</h3><ul class="fehler">${erg.fehler.map((a) => `<li>${esc(a.fachName ? a.fachName + ": " : "")}${esc((a.f || "").replace(/___/g, "…"))}<br><b>${esc(loesungText(a))}</b></li>`).join("")}</ul>` : ""}
    <div class="reihe"><button class="haupt" onclick="geh('${ctx.nochmal}')">Noch mal</button><button class="neben" onclick="geh('${ctx.zurueck}')">Zurück</button></div>
    ${nav("")}`);
}
function loesungText(a) {
  if (a.t === "wahl") return a.a[a.r];
  if (a.t === "zahl") return fz(a.l) + (a.einheit ? " " + a.einheit : "");
  if (a.t === "eingabe") return a.richtigAnzeige || [].concat(a.l)[0];
  if (a.t === "paare") return a.p.map((p) => p.join(" – ")).join(" · ");
  if (a.t === "reihenfolge") return a.items.join(" → ");
  return "";
}

// ---------- Shop ----------
function shop() {
  const s = SPIEL.stand;
  const gruppe = (titel, liste, art) => `<h2>${titel}</h2><div class="shopgrid">${liste.map((x) => {
    const hat = s.gekauft.includes(x.id), aktiv = art === "avatar" ? s.avatar === x.id : art === "theme" ? s.theme === x.id : s.titel === x.id;
    const vorschau = art === "avatar" ? `<span class="big">${x.e}</span>` : art === "theme" ? `<span class="swatch" style="background:linear-gradient(135deg,${x.farben.akzent},${x.farben.akzent2});border-color:${x.farben.bg}"></span>` : `<span class="big">🏷️</span>`;
    return `<button class="shopitem ${aktiv ? "aktiv" : ""} ${hat ? "" : "zu"}" data-art="${art}" data-id="${x.id}" data-preis="${x.preis}">${vorschau}<b>${esc(x.name)}</b><span>${aktiv ? "Ausgewählt ✓" : hat ? "Auswählen" : `${x.preis} 🪙`}</span></button>`; }).join("")}</div>`;
  zeige(`${kopfzeile()}<h1>Shop</h1><p class="klein">Münzen verdienst du mit jeder Runde, Quests und Boss-Kämpfen. Du hast <b>${s.muenzen} 🪙</b>.</p>
    ${gruppe("Begleiter", AVATARE, "avatar")}${gruppe("Farbwelten", THEMES, "theme")}${gruppe("Titel", TITEL, "titel")}${nav("shop")}`);
  $$(".shopitem").forEach((b) => b.onclick = () => {
    const { art, id } = b.dataset, preis = +b.dataset.preis;
    if (!s.gekauft.includes(id)) {
      if (s.muenzen < preis) { b.classList.add("wackel"); setTimeout(() => b.classList.remove("wackel"), 500); return; }
      if (!confirm(`${preis} Münzen ausgeben?`)) return;
      SPIEL.kaufen(id, preis); SPIEL.ereignis(`🛍️ Gekauft: ${b.querySelector("b").textContent}`);
    }
    if (art === "avatar") s.avatar = id; else if (art === "theme") { s.theme = id; SPIEL.themeAnwenden(); } else s.titel = id;
    SPIEL.sichern(); shop();
  });
}

// ---------- Profil ----------
function profil() {
  const s = SPIEL.stand, st = s.statistik, li = SPIEL.levelInfo();
  const abz = Object.keys(s.abzeichen).length;
  const quote = st.richtig + st.falsch ? Math.round(100 * st.richtig / (st.richtig + st.falsch)) : 0;
  zeige(`${kopfzeile()}
    <div class="profilkarte"><div class="avatar gross">${SPIEL.avatar().e}</div><div><h1>${esc(s.name)}</h1><p>Level ${li.level} · ${esc(li.titel)} · ${s.xp} XP</p></div></div>
    <div class="statgrid">
      <div><b>${st.runden}</b><span>Runden</span></div><div><b>${st.richtig}</b><span>richtig</span></div><div><b>${quote} %</b><span>Trefferquote</span></div>
      <div><b>${SPIEL.streakAktiv()}</b><span>Tage Streak</span></div><div><b>${s.streak.max}</b><span>längster Streak</span></div><div><b>${st.perfekt}</b><span>fehlerfrei</span></div>
      <div><b>${Object.keys(s.bosse).length}/${window.FAECHER.length}</b><span>Bosse</span></div><div><b>${Object.values(s.themen).filter((t) => t.sterne >= 3).length}</b><span>Themen ★★★</span></div><div><b>${st.quests}</b><span>Quests</span></div>
    </div>
    <button class="thema" onclick="geh('abzeichen')"><div><b>🏅 Abzeichen</b><span>${abz} von ${ABZEICHEN.length} gesammelt</span></div><div class="rechts">›</div></button>
    <h2>Fächer</h2><div class="themen">${window.FAECHER.map((f) => { const x = s.faecher[f.id]; const p = SPIEL.fachFortschritt(f); return `<button class="thema" onclick="geh('fach/${f.id}')"><div><b>${f.icon} ${esc(f.name)}</b><span>${x ? `${x.runden} Runden · ${x.richtig + x.falsch ? Math.round(100 * x.richtig / (x.richtig + x.falsch)) : 0} % richtig` : "noch nicht gespielt"}</span></div><div class="rechts">${p.sterne}/${p.max} ★</div></button>`; }).join("")}</div>
    <button class="thema" onclick="geh('einstellungen')"><div><b>⚙️ Einstellungen</b><span>Name, Ton, Fortschritt übertragen</span></div><div class="rechts">›</div></button>
    ${nav("profil")}`);
}
function abzeichenSeite() {
  const s = SPIEL.stand;
  zeige(`<div class="laufkopf"><button class="zurueck" onclick="geh('profil')">‹ Profil</button></div><h1>Abzeichen</h1>
    <div class="abzgrid">${ABZEICHEN.map((a) => `<div class="abz ${s.abzeichen[a.id] ? "hat" : ""}"><div class="e">${a.e}</div><b>${esc(a.name)}</b><span>${esc(a.text)}</span>${s.abzeichen[a.id] ? `<span class="klein">${s.abzeichen[a.id]}</span>` : ""}</div>`).join("")}</div>${nav("profil")}`);
}
function einstellungen() {
  const s = SPIEL.stand;
  zeige(`<div class="laufkopf"><button class="zurueck" onclick="geh('profil')">‹ Profil</button></div><h1>Einstellungen</h1>
    <h2>Name</h2><div class="reihe"><input id="name" maxlength="20" value="${esc(s.name)}"><button class="neben" id="nameOk">Speichern</button></div>
    <h2>Ton</h2><label class="schalter"><input type="checkbox" id="ton" ${s.einstellungen.ton !== false ? "checked" : ""}> Spielgeräusche</label>
    <h2>Fortschritt auf ein anderes Gerät übertragen</h2>
    <p class="klein">Code kopieren und auf dem anderen Gerät hier einfügen. Der Code enthält nur deinen Spielstand.</p>
    <textarea id="code" rows="3" placeholder="Code hier einfügen …"></textarea>
    <div class="reihe"><button class="neben" id="export">Code anzeigen</button><button class="neben" id="import">Code laden</button></div>
    <h2>Zurücksetzen</h2><button class="leise" id="reset">Alles löschen und neu anfangen</button>${nav("profil")}`);
  $("#nameOk").onclick = () => { s.name = $("#name").value.trim() || s.name; SPIEL.sichern(); einstellungen(); };
  $("#ton").onchange = (e) => { s.einstellungen.ton = e.target.checked; SPIEL.sichern(); if (e.target.checked) ton("ok"); };
  $("#export").onclick = () => { $("#code").value = btoa(unescape(encodeURIComponent(JSON.stringify(s)))); $("#code").select(); try { navigator.clipboard.writeText($("#code").value); } catch { /* egal */ } };
  $("#import").onclick = () => { try { const g = JSON.parse(decodeURIComponent(escape(atob($("#code").value.trim())))); if (!g || typeof g.xp !== "number") throw 0; if (confirm("Aktuellen Spielstand durch den Code ersetzen?")) { SPIEL.stand = Object.assign(SPIEL.neu(), g); SPIEL.sichern(); SPIEL.themeAnwenden(); geh(""); } } catch { alert("Der Code ist ungültig."); } };
  $("#reset").onclick = () => { if (confirm("Wirklich alles löschen? Das kann nicht rückgängig gemacht werden.")) { SPIEL.zuruecksetzen(); geh(""); route(); } };
}

// ---------- Start ----------
SPIEL.laden();
route();
if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {});
