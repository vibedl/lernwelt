// Lernwelt – Lernwerkzeuge: Lerntimer, Klassenarbeitsplaner, eigene Karteikarten, Spickzettel
"use strict";

function werkzeuge() {
  const s = SPIEL.stand; s.termine = s.termine || []; s.eigene = s.eigene || [];
  const naechster = s.termine.filter((t) => tageDiff(heuteKey(), t.datum) >= 0).sort((a, b) => a.datum.localeCompare(b.datum))[0];
  zeige(`${kopfzeile()}<h1>Werkzeuge</h1>
    <div class="themen">
      <button class="thema" onclick="geh('timer')"><div><b>⏱️ Lerntimer</b><span>25 Minuten konzentriert lernen, 5 Minuten Pause – jede Runde bringt XP und Münzen${s.statistik.timerRunden ? ` · ${s.statistik.timerRunden} Runden geschafft` : ""}</span></div><div class="rechts">›</div></button>
      <button class="thema" onclick="geh('termine')"><div><b>📅 Klassenarbeiten</b><span>${naechster ? `Nächste: ${esc(naechster.fach)} in ${tageDiff(heuteKey(), naechster.datum)} Tag${tageDiff(heuteKey(), naechster.datum) === 1 ? "" : "en"}` : "Termine eintragen, Lernplan bekommen"}</span></div><div class="rechts">›</div></button>
      <button class="thema" onclick="geh('eigene')"><div><b>🗂️ Eigene Karteikarten</b><span>${s.eigene.length ? `${s.eigene.length} Stapel, ${s.eigene.reduce((a, x) => a + x.karten.length, 0)} Karten` : "Vokabeln oder Begriffe aus dem Heft selbst eintippen und abfragen lassen"}</span></div><div class="rechts">›</div></button>
      <button class="thema" onclick="geh('spick')"><div><b>📋 Spickzettel</b><span>Alle Regeln und Formeln eines Fachs auf einer Seite – zum Wiederholen vor der Arbeit</span></div><div class="rechts">›</div></button>
    </div>${nav("werkzeuge")}`);
}

// ---------- Lerntimer (Pomodoro) ----------
let timerLauf = null;
function timer() {
  const s = SPIEL.stand; s.timer = s.timer || { modus: "lernen", rest: 25 * 60, laeuft: false, ende: null };
  const t = s.timer;
  const male = () => {
    if (!location.hash.startsWith("#timer")) { clearInterval(timerLauf); timerLauf = null; return; }
    if (t.laeuft && t.ende) t.rest = Math.max(0, Math.round((t.ende - Date.now()) / 1000));
    if (t.laeuft && t.rest <= 0) return fertig();
    const m = String(Math.floor(t.rest / 60)).padStart(2, "0"), sek = String(t.rest % 60).padStart(2, "0");
    const gesamt = t.modus === "lernen" ? 25 * 60 : 5 * 60;
    zeige(`<div class="laufkopf"><button class="zurueck" onclick="geh('werkzeuge')">‹ Werkzeuge</button></div>
      <div class="timer ${t.modus}"><div class="modus">${t.modus === "lernen" ? "📚 Lernzeit" : "☕ Pause"}</div><div class="uhr">${m}:${sek}</div>
        <div class="balken"><div style="width:${Math.round(100 * (1 - t.rest / gesamt))}%"></div></div>
        <div class="reihe"><button class="haupt" id="startstop">${t.laeuft ? "Pause" : t.rest === gesamt ? "Start" : "Weiter"}</button><button class="neben" id="reset">Zurücksetzen</button></div>
        <div class="reihe"><button class="neben" id="wechsel">${t.modus === "lernen" ? "Zur Pause (5 min)" : "Zum Lernen (25 min)"}</button></div></div>
      <p class="hinweis">So geht Pomodoro: 25 Minuten nur eine Sache (Handy weg, Vokabeln, Aufgaben aus dem Heft), dann 5 Minuten Pause. Nach 4 Runden eine längere Pause. Jede volle Lernrunde bringt <b>20 XP und 5 🪙</b>.</p>
      <p class="klein mitte">${s.statistik.timerRunden || 0} Lernrunden bisher</p>${nav("werkzeuge")}`);
    $("#startstop").onclick = () => { t.laeuft = !t.laeuft; t.ende = t.laeuft ? Date.now() + t.rest * 1000 : null; SPIEL.sichern(); male(); };
    $("#reset").onclick = () => { t.laeuft = false; t.ende = null; t.rest = gesamt; SPIEL.sichern(); male(); };
    $("#wechsel").onclick = () => { t.modus = t.modus === "lernen" ? "pause" : "lernen"; t.laeuft = false; t.ende = null; t.rest = t.modus === "lernen" ? 25 * 60 : 5 * 60; SPIEL.sichern(); male(); };
  };
  const fertig = () => {
    t.laeuft = false; t.ende = null;
    if (t.modus === "lernen") {
      s.statistik.timerRunden = (s.statistik.timerRunden || 0) + 1; s.xp += 20; s.muenzen += 5; SPIEL.tagAktiv(); SPIEL.questZaehlen("timer");
      SPIEL.ereignis("⏱️ Lernrunde geschafft (+20 XP, +5 🪙)"); SPIEL.abzeichenPruefen(); ton("level");
      t.modus = "pause"; t.rest = 5 * 60;
    } else { ton("ok"); t.modus = "lernen"; t.rest = 25 * 60; }
    SPIEL.sichern(); male();
  };
  if (!timerLauf) timerLauf = setInterval(() => { if (t.laeuft) male(); }, 1000);
  male();
}

// ---------- Klassenarbeiten ----------
function termine() {
  const s = SPIEL.stand; s.termine = s.termine || [];
  const heute = heuteKey();
  const liste = s.termine.slice().sort((a, b) => a.datum.localeCompare(b.datum));
  zeige(`<div class="laufkopf"><button class="zurueck" onclick="geh('werkzeuge')">‹ Werkzeuge</button></div><h1>Klassenarbeiten</h1>
    ${liste.length ? `<div class="themen">${liste.map((t, i) => { const d = tageDiff(heute, t.datum); const f = fach(t.fachId); return `<div class="thema termin ${d < 0 ? "vorbei" : d <= 3 ? "bald" : ""}"><div><b>${f ? f.icon + " " : ""}${esc(t.fach)}</b><span>${esc(t.thema || "")}</span><span class="klein">${t.datum.split("-").reverse().join(".")} · ${d < 0 ? "vorbei" : d === 0 ? "heute!" : d === 1 ? "morgen" : `in ${d} Tagen`}</span>
        ${d >= 0 && f ? `<div class="reihe"><button class="neben" onclick="geh('fach/${f.id}')">Themen üben</button><button class="neben" onclick="geh('boss/${f.id}')">Boss als Probearbeit</button></div>` : ""}</div><button class="leise" data-del="${i}">✕</button></div>`; }).join("")}</div>` : "<p class='klein'>Noch keine Termine. Trag die nächste Arbeit ein – dann siehst du, wie viele Tage du noch hast, und bekommst einen Lernplan.</p>"}
    <h2>Neue Arbeit eintragen</h2>
    <select id="tf">${window.FAECHER.map((f) => `<option value="${f.id}">${f.icon} ${esc(f.name)}</option>`).join("")}<option value="">Anderes Fach</option></select>
    <input id="tfname" placeholder="Fachname (nur bei „Anderes Fach“)" style="margin-top:8px;display:none">
    <input id="tthema" placeholder="Thema (z. B. Pythagoras, Unit 2)" style="margin-top:8px">
    <input id="tdatum" type="date" min="${heute}" style="margin-top:8px">
    <button class="haupt" id="tadd">Eintragen</button>
    ${liste.filter((t) => tageDiff(heute, t.datum) >= 0).length ? `<h2>Lernplan</h2><p class="klein">Faustregel: 7 Tage vorher anfangen, jeden Tag eine Runde im Fach, am Vortag den Boss als Probearbeit, am Abend davor nur noch Spickzettel lesen.</p><ul>${liste.filter((t) => tageDiff(heute, t.datum) >= 0).slice(0, 3).map((t) => { const d = tageDiff(heute, t.datum); return `<li><b>${esc(t.fach)}</b>: ${d > 7 ? `noch ${d - 7} Tage Zeit, dann` : "jetzt"} täglich 1 Runde${d <= 1 ? " – heute Boss und Spickzettel" : d <= 3 ? " – ab jetzt jeden Tag den Boss versuchen" : ""}</li>`; }).join("")}</ul>` : ""}
    ${nav("werkzeuge")}`);
  $("#tf").onchange = () => { $("#tfname").style.display = $("#tf").value ? "none" : "block"; };
  $("#tadd").onclick = () => {
    const fid = $("#tf").value, name = fid ? fach(fid).name : $("#tfname").value.trim(), datum = $("#tdatum").value;
    if (!name || !datum) { alert("Bitte Fach und Datum angeben."); return; }
    s.termine.push({ fachId: fid, fach: name, thema: $("#tthema").value.trim(), datum }); SPIEL.sichern(); termine();
  };
  $$("[data-del]").forEach((b) => b.onclick = () => { if (confirm("Termin löschen?")) { s.termine.splice(+b.dataset.del, 1); SPIEL.sichern(); termine(); } });
}

// ---------- Eigene Karteikarten ----------
function eigene(stapelId) {
  const s = SPIEL.stand; s.eigene = s.eigene || [];
  if (stapelId) {
    const st = s.eigene.find((x) => x.id === stapelId); if (!st) return geh("eigene");
    zeige(`<div class="laufkopf"><button class="zurueck" onclick="geh('eigene')">‹ Stapel</button></div><h1>${esc(st.name)}</h1><p class="klein">${st.karten.length} Karten</p>
      ${st.karten.length >= 1 ? `<button class="haupt" id="lernen">🃏 Karteikarten lernen</button>` : ""}
      ${st.karten.length >= 4 ? `<button class="neben breit" id="abfrage">▶ Abfrage (10 Aufgaben, bringt XP)</button>` : "<p class='klein'>Ab 4 Karten gibt es die Abfrage mit XP.</p>"}
      <h2>Karten hinzufügen</h2>
      <textarea id="neu" rows="5" placeholder="Eine Karte pro Zeile: Vorderseite – Rückseite&#10;z. B. to achieve – erreichen&#10;Photosynthese – Pflanzen bauen aus CO₂ und Wasser Zucker"></textarea>
      <button class="neben breit" id="add">Zeilen übernehmen</button>
      <h2>Karten</h2><div class="themen">${st.karten.map((k, i) => `<div class="thema"><div><b>${esc(k.vorne)}</b><span>${esc(k.hinten)}</span></div><button class="leise" data-del="${i}">✕</button></div>`).join("") || "<p class='klein'>Noch leer.</p>"}</div>
      <button class="leise" id="delst">Stapel löschen</button>${nav("werkzeuge")}`);
    const karten = () => st.karten.map((k) => ({ t: "karte", vorne: k.vorne, hinten: k.hinten }));
    const l = $("#lernen"); if (l) l.onclick = () => laufeKarten(karten(), { schluessel: "eigene/" + st.id, zurueckText: st.name, fertig: () => eigene(st.id) });
    const a = $("#abfrage"); if (a) a.onclick = () => { rundeAktiv = true; const pool = karten(); const liste = mischen(pool).slice(0, 10).map((k) => aufgabeAusKarte(k, pool)); laufeAufgaben(liste, { zurueckText: st.name, fertig: (erg) => rundenErgebnis(erg, { f: { id: "eigene", name: st.name }, zurueck: "eigene/" + st.id, nochmal: "eigene/" + st.id }) }); };
    $("#add").onclick = () => {
      const zeilen = $("#neu").value.split("\n").map((z) => z.trim()).filter(Boolean); let n = 0;
      for (const z of zeilen) { const m = z.split(/\s+[–—-]\s+|\t|;/); if (m.length >= 2 && m[0].trim() && m[1].trim()) { st.karten.push({ vorne: m[0].trim(), hinten: m.slice(1).join(" ").trim() }); n++; } }
      if (!n) { alert("Keine Karte erkannt. Schreibe „Vorderseite – Rückseite“ (mit Bindestrich und Leerzeichen)."); return; }
      SPIEL.sichern(); eigene(st.id);
    };
    $$("[data-del]").forEach((b) => b.onclick = () => { st.karten.splice(+b.dataset.del, 1); SPIEL.sichern(); eigene(st.id); });
    $("#delst").onclick = () => { if (confirm("Stapel wirklich löschen?")) { s.eigene = s.eigene.filter((x) => x !== st); SPIEL.sichern(); geh("eigene"); } };
    return;
  }
  zeige(`<div class="laufkopf"><button class="zurueck" onclick="geh('werkzeuge')">‹ Werkzeuge</button></div><h1>Eigene Karteikarten</h1>
    <p class="klein">Für alles, was nicht in der App steckt: Vokabeln aus der aktuellen Unit, Begriffe aus dem Heft, Jahreszahlen. Eintippen, lernen, abfragen lassen – mit XP wie bei den anderen Themen.</p>
    <div class="themen">${s.eigene.map((st) => `<button class="thema" onclick="geh('eigene/${st.id}')"><div><b>${esc(st.name)}</b><span>${st.karten.length} Karten</span></div><div class="rechts">›</div></button>`).join("")}</div>
    <h2>Neuer Stapel</h2><div class="reihe"><input id="stname" placeholder="Name, z. B. Englisch Unit 2"><button class="neben" id="stadd">Anlegen</button></div>${nav("werkzeuge")}`);
  $("#stadd").onclick = () => { const name = $("#stname").value.trim(); if (!name) return; const id = "s" + Date.now().toString(36); s.eigene.push({ id, name, karten: [] }); SPIEL.sichern(); geh("eigene/" + id); };
}

// ---------- Spickzettel ----------
function spick(fachId) {
  const f = fachId && fach(fachId);
  if (!f) return zeige(`<div class="laufkopf"><button class="zurueck" onclick="geh('werkzeuge')">‹ Werkzeuge</button></div><h1>Spickzettel</h1><p class="klein">Wähle ein Fach – du bekommst alle Regeln und Formeln der Themen auf einer Seite.</p>
    <div class="themen">${window.FAECHER.map((x) => `<button class="thema" onclick="geh('spick/${x.id}')"><div><b>${x.icon} ${esc(x.name)}</b><span>${x.themen.length} Themen</span></div><div class="rechts">›</div></button>`).join("")}</div>${nav("werkzeuge")}`);
  zeige(`<div class="laufkopf"><button class="zurueck" onclick="geh('spick')">‹ Fächer</button></div><h1>${f.icon} ${esc(f.name)} – Spickzettel</h1>
    ${f.themen.filter((t) => t.erklaerung).map((t) => `<details class="regel"><summary>${esc(t.titel)} ${sterneHtml(SPIEL.sterne(f.id, t.id))}</summary><div class="erkl">${t.erklaerung}</div><button class="neben breit" onclick="geh('ueben/${f.id}/${t.id}')">Dazu üben</button></details>`).join("")}
    <button class="neben breit" id="alle">Alle auf-/zuklappen</button>${nav("werkzeuge")}`);
  $("#alle").onclick = () => { const d = $$("details.regel"); const offen = d.some((x) => !x.open); d.forEach((x) => x.open = offen); };
}
