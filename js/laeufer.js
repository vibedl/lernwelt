// Lernwelt – Aufgaben-Läufer: spielt eine Liste von Aufgaben ab (Übung oder Boss-Kampf)
"use strict";

// Aus einer Karteikarte eine Testaufgabe machen (Auswahl oder Eingabe)
function aufgabeAusKarte(k, pool, rng = RNG) {
  const andere = pool.filter((x) => x !== k && x.t === "karte" && x.hinten !== k.hinten);
  if (andere.length >= 3 && rng() < 0.5) {
    const falsche = rng.shuffle(andere).slice(0, 3).map((x) => x.hinten);
    return { t: "wahl", f: k.vorne, a: [k.hinten, ...falsche], r: 0, info: k.bsp || "", laut: k.laut, karte: k };
  }
  return { t: "eingabe", f: k.hinten, l: [k.vorne], info: k.bsp ? `${k.vorne} – ${k.bsp}` : "", richtigAnzeige: k.vorne, laut: k.laut, karte: k };
}
// Aufgaben eines Themas holen (statisch gemischt oder per Generator), n Stück
function aufgabenFuer(thema, n, rng = RNG) {
  const liste = [];
  if (thema.gen) {
    const gesehen = new Set();
    for (let i = 0; i < n * 6 && liste.length < n; i++) { const a = thema.gen(rng); const k = JSON.stringify([a.f, a.l, a.a]); if (!gesehen.has(k)) { gesehen.add(k); liste.push(a); } }
  } else {
    const pool = thema.aufgaben || [];
    const nurKarten = pool.filter((a) => a.t === "karte"), rest = pool.filter((a) => a.t !== "karte");
    let auswahl = rng.shuffle(rest).slice(0, n);
    if (auswahl.length < n && nurKarten.length) auswahl = auswahl.concat(rng.shuffle(nurKarten).slice(0, n - auswahl.length).map((k) => aufgabeAusKarte(k, pool, rng)));
    liste.push(...rng.shuffle(auswahl));
  }
  return liste;
}

// Haupt-Läufer. opt = { titel, boss:{name, e, hp}, lang, zurueck: () => {}, fertig: (ergebnis) => {} }
function laufeAufgaben(aufgaben, opt) {
  let i = 0, richtig = 0, kombo = 0, komboMax = 0, herzen = opt.boss ? 3 : Infinity;
  const fehler = [], start = Date.now();
  const n = aufgaben.length;

  const kopf = () => {
    const hp = opt.boss ? Math.max(0, n - richtig) : 0;
    return `<div class="laufkopf">
      <button class="zurueck" id="abbruch">‹ ${esc(opt.zurueckText || "Abbrechen")}</button>
      <div class="zaehler">${i + 1}/${n}</div>
      ${kombo >= 2 ? `<div class="kombo">🔥 Kombo ×${kombo}</div>` : ""}
    </div>
    <div class="balken"><div style="width:${Math.round(100 * i / n)}%"></div></div>
    ${opt.boss ? `<div class="boss"><div class="bossbild ${hp === 0 ? "tot" : ""}">${opt.boss.e}</div><div class="bossinfo"><b>${esc(opt.boss.name)}</b>
      <div class="hpbalken"><div style="width:${Math.round(100 * hp / n)}%"></div></div><div class="klein">${hp} HP · Deine Leben: ${"❤️".repeat(herzen)}${"🖤".repeat(3 - herzen)}</div></div></div>` : ""}`;
  };

  const ende = (abgebrochen = false) => {
    const sek = Math.round((Date.now() - start) / 1000);
    opt.fertig({ richtig, gesamt: n, fehler, komboMax, sekunden: sek, abgebrochen, herzen: opt.boss ? herzen : null, verloren: opt.boss ? herzen <= 0 : false });
  };

  const bewerte = (ok, a, extra = "") => {
    if (ok) { richtig++; kombo++; komboMax = Math.max(komboMax, kombo); ton(opt.boss ? "ok" : "ok"); }
    else { kombo = 0; fehler.push(a); if (opt.boss) herzen--; ton(opt.boss ? "boss" : "fehler"); }
    const rm = $("#rm");
    const texte = ok ? ["Richtig! ✓", "Genau! ✓", "Stark! ✓", "Treffer! ✓", "Sauber! ✓"] : ["Leider nicht.", "Nicht ganz.", "Daneben."];
    rm.innerHTML = `<div class="rm ${ok ? "ja" : "nein"}">${ok ? RNG.pick(texte) : RNG.pick(texte) + " Richtig ist:"}${extra}${a.info ? `<div class="info">${a.info}</div>` : ""}</div>
      <button class="haupt" id="weiter">${i + 1 >= n ? "Ergebnis ›" : "Weiter ›"}</button>`;
    $("#weiter").focus();
    $("#weiter").onclick = () => { i++; if (opt.boss && herzen <= 0) return ende(); if (i >= n) return ende(); zeichne(); };
    // Kopf aktualisieren (Kombo, HP)
    $("#lk").innerHTML = kopf(); $("#abbruch").onclick = () => ende(true);
    if (opt.boss && ok) { const bb = $(".boss"); if (bb) bb.classList.add("treffer"); }
    if (opt.boss && herzen <= 0) { $("#weiter").textContent = "Ergebnis ›"; }
  };

  const zeichne = () => {
    const a = aufgaben[i];
    const lang = a.lang || opt.lang;
    const laut = (t) => lang ? " " + lautBtn(t, lang) : "";
    let html = "";
    if (a.t === "wahl") {
      const opts = mischen(a.a.map((t, k) => ({ t, ok: k === a.r })));
      html = `<div class="frage">${esc(a.f)}${laut(a.f)}</div><div class="wahl" id="w">${opts.map((o, k) => `<button data-k="${k}">${esc(o.t)}</button>`).join("")}</div><div id="rm"></div>`;
      zeige(`<div id="lk">${kopf()}</div>${opt.vorText || ""}${html}`);
      $$("#w button").forEach((b) => b.onclick = () => {
        const o = opts[+b.dataset.k];
        $$("#w button").forEach((x) => { x.disabled = true; if (opts[+x.dataset.k].ok) x.classList.add("ok"); });
        if (!o.ok) b.classList.add("falsch");
        bewerte(o.ok, a, o.ok ? "" : `<div class="loesung">${esc(a.a[a.r])}${laut(a.a[a.r])}</div>`);
      });
    } else if (a.t === "eingabe" || a.t === "zahl") {
      const satz = a.f.includes("___") ? `<div class="frage satz">${esc(a.f).replace(/___/g, "<span class='luecke'>_____</span>")}</div>` : `<div class="frage">${esc(a.f)}${laut(a.f)}</div>`;
      html = `${satz}<form id="f" autocomplete="off"><input id="ein" ${a.t === "zahl" ? 'inputmode="decimal"' : 'autocapitalize="off" autocorrect="off" spellcheck="false"'} placeholder="${a.t === "zahl" ? "Zahl eingeben …" + (a.einheit ? " (in " + esc(a.einheit) + ")" : "") : "Antwort eingeben …"}">
        <button class="haupt">Prüfen</button></form><div id="rm"></div>`;
      zeige(`<div id="lk">${kopf()}</div>${opt.vorText || ""}${html}`);
      $("#ein").focus();
      $("#f").onsubmit = (ev) => {
        ev.preventDefault(); const ein = $("#ein").value; if (!ein.trim()) return;
        let r, loesungText;
        if (a.t === "zahl") { r = pruefeZahl(ein, a.l, a.tol ?? 0.01); loesungText = fz(a.l) + (a.einheit ? " " + a.einheit : ""); }
        else { r = pruefeText(ein, a.l, a.tippfehler !== false); loesungText = a.richtigAnzeige || [].concat(a.l)[0]; }
        $("#f").innerHTML = `<div class="deine">Deine Antwort: <b>${esc(ein)}</b></div>`;
        const ok = r !== "falsch";
        const zusatz = r === "fast" ? `<div class="klein">Fast richtig – achte auf die Schreibweise: <b>${esc(loesungText)}</b></div>` : ok ? "" : `<div class="loesung">${a.f.includes("___") ? esc(a.f.replace(/___/g, loesungText)) : esc(loesungText)}${laut(loesungText)}</div>`;
        bewerte(ok, a, zusatz);
      };
    } else if (a.t === "paare") {
      const paare = a.p.slice(0, 6);
      const links = mischen(paare.map((p, k) => ({ t: p[0], k }))), rechts = mischen(paare.map((p, k) => ({ t: p[1], k })));
      let gewaehlt = null, fehlerZahl = 0, fertig = 0;
      html = `<div class="frage">${esc(a.f || "Ordne die Paare zu")}</div><div class="paare" id="p">
        <div class="spalte">${links.map((x) => `<button data-s="l" data-k="${x.k}">${esc(x.t)}</button>`).join("")}</div>
        <div class="spalte">${rechts.map((x) => `<button data-s="r" data-k="${x.k}">${esc(x.t)}</button>`).join("")}</div></div><div id="rm"></div>`;
      zeige(`<div id="lk">${kopf()}</div>${opt.vorText || ""}${html}`);
      $$("#p button").forEach((b) => b.onclick = () => {
        if (b.disabled) return;
        if (!gewaehlt) { gewaehlt = b; b.classList.add("aktiv"); return; }
        if (gewaehlt === b) { b.classList.remove("aktiv"); gewaehlt = null; return; }
        if (gewaehlt.dataset.s === b.dataset.s) { gewaehlt.classList.remove("aktiv"); gewaehlt = b; b.classList.add("aktiv"); return; }
        const ok = gewaehlt.dataset.k === b.dataset.k;
        if (ok) { gewaehlt.classList.add("ok"); b.classList.add("ok"); gewaehlt.disabled = b.disabled = true; fertig++; ton("ok"); }
        else { fehlerZahl++; const g = gewaehlt; g.classList.add("falsch"); b.classList.add("falsch"); setTimeout(() => { g.classList.remove("falsch"); b.classList.remove("falsch"); }, 500); }
        gewaehlt.classList.remove("aktiv"); gewaehlt = null;
        if (fertig === paare.length) bewerte(fehlerZahl <= (paare.length >= 4 ? 1 : 0), a, fehlerZahl ? `<div class="klein">${fehlerZahl} Fehlversuch${fehlerZahl > 1 ? "e" : ""}</div>` : "");
      });
    } else if (a.t === "reihenfolge") {
      const items = a.items; let gemischt = mischen(items.map((t, k) => ({ t, k })));
      if (gemischt.every((x, idx) => x.k === idx)) gemischt = gemischt.reverse();
      let gewaehlt = [];
      const male = () => {
        $("#rf").innerHTML = `<div class="gewaehlt">${gewaehlt.length ? gewaehlt.map((x, idx) => `<div><span class="nr">${idx + 1}</span>${esc(x.t)}</div>`).join("") : '<div class="klein">Tippe die Einträge in der richtigen Reihenfolge an.</div>'}</div>
          <div class="wahl">${gemischt.filter((x) => !gewaehlt.includes(x)).map((x) => `<button data-k="${x.k}">${esc(x.t)}</button>`).join("")}</div>
          <div class="reihe">${gewaehlt.length ? `<button class="neben" id="rz">Zurücksetzen</button>` : ""}${gewaehlt.length === items.length ? `<button class="haupt" id="rp">Prüfen</button>` : ""}</div>`;
        $$("#rf .wahl button").forEach((b) => b.onclick = () => { gewaehlt.push(gemischt.find((x) => x.k === +b.dataset.k)); male(); });
        const rz = $("#rz"); if (rz) rz.onclick = () => { gewaehlt = []; male(); };
        const rp = $("#rp"); if (rp) rp.onclick = () => {
          const ok = gewaehlt.every((x, idx) => x.k === idx);
          $("#rf .wahl").innerHTML = ""; $("#rf .reihe").innerHTML = "";
          $("#rf .gewaehlt").innerHTML = gewaehlt.map((x, idx) => `<div class="${x.k === idx ? "ok" : "falsch"}"><span class="nr">${idx + 1}</span>${esc(x.t)}</div>`).join("");
          bewerte(ok, a, ok ? "" : `<ol class="loesungliste">${items.map((t) => `<li>${esc(t)}</li>`).join("")}</ol>`);
        };
      };
      html = `<div class="frage">${esc(a.f || "Bringe in die richtige Reihenfolge")}</div><div id="rf"></div><div id="rm"></div>`;
      zeige(`<div id="lk">${kopf()}</div>${opt.vorText || ""}${html}`);
      male();
    } else { // unbekannter Typ überspringen
      i++; if (i >= n) return ende(); return zeichne();
    }
    $("#abbruch").onclick = () => ende(true);
  };
  if (!n) return opt.fertig({ richtig: 0, gesamt: 0, fehler: [], komboMax: 0, sekunden: 0, abgebrochen: true });
  zeichne();
}

// Karteikarten-Modus (Lernen, zählt für Quests, nicht als Runde)
function laufeKarten(karten, opt) {
  let liste = mischen(karten), i = 0, um = false, gelernt = 0;
  const schl = (k) => `${opt.schluessel}/${k.vorne}`;
  const male = () => {
    const k = liste[i]; const lang = k.lang || opt.lang;
    zeige(`<div class="laufkopf"><button class="zurueck" id="abbruch">‹ ${esc(opt.zurueckText || "Zurück")}</button><div class="zaehler">${i + 1}/${liste.length}</div></div>
      <div class="karte ${um ? "hinten" : ""}" id="karte">${um ? `<div class="de">${esc(k.hinten)}</div>${k.bsp ? `<div class="bsp">${esc(k.bsp)}${lang ? " " + lautBtn(k.bsp, lang) : ""}</div>` : ""}` : `<div class="en">${esc(k.vorne)}</div><div class="klein">Tippen zum Umdrehen</div>`}</div>
      <div class="reihe">${lang ? lautBtn(k.vorne, lang) : ""}<button class="neben" id="kz">‹</button><button class="haupt" id="kw">${um ? "Weiter ›" : "Umdrehen"}</button></div>
      ${um ? `<div class="reihe"><button class="gut" id="kk">Kann ich ✓</button><button class="schlecht" id="kn">Noch nicht ✗</button></div>` : ""}
      <p class="klein mitte">${Object.keys(SPIEL.stand.gekonnt).filter((x) => x.startsWith(opt.schluessel + "/")).length} von ${karten.length} als „kann ich“ markiert</p>`);
    $("#abbruch").onclick = () => { SPIEL.karteGelernt(0); opt.fertig(gelernt); };
    $("#karte").onclick = () => { um = !um; male(); };
    $("#kz").onclick = () => { i = (i - 1 + liste.length) % liste.length; um = false; male(); };
    $("#kw").onclick = () => { if (!um) um = true; else { i = (i + 1) % liste.length; um = false; gelernt++; SPIEL.karteGelernt(1); } male(); };
    if (um) {
      $("#kk").onclick = () => { SPIEL.stand.gekonnt[schl(k)] = 1; delete SPIEL.stand.schwer[schl(k)]; gelernt++; SPIEL.karteGelernt(1); SPIEL.abzeichenPruefen(); SPIEL.sichern(); i = (i + 1) % liste.length; um = false; male(); };
      $("#kn").onclick = () => { SPIEL.stand.schwer[schl(k)] = 1; delete SPIEL.stand.gekonnt[schl(k)]; gelernt++; SPIEL.karteGelernt(1); i = (i + 1) % liste.length; um = false; male(); };
    }
  };
  male();
}
