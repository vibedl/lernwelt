// Lernwelt – Ergänzung Mathematik nach KLP Gesamtschule NRW (9/10): exponentielles Wachstum, Statistik,
// Kombinatorik/Vierfeldertafel (E-Kurs), Zuordnungen/Dreisatz und Winkel (Wiederholung 7/8).
// Hängt an das bestehende Fach "mathe" an. Reines Browser-JS, kein Import/Export.
"use strict";
(function () {
  const FACH = window.FAECHER.find((f) => f.id === "mathe");
  if (!FACH) return;

  // Hilfsfunktionen (lokal; nur fz ist global aus js/kern.js)
  const r2 = (x) => Math.round(x * 100) / 100;
  const z = (x) => fz(x);
  const zahl = (f, l, info, einheit, tol) => ({ t: "zahl", f, l, info, einheit, tol: tol ?? (Number.isInteger(l) ? 0.01 : 0.05) });
  const wahl = (f, a, r, info) => ({ t: "wahl", f, a, r, info });
  const wahlU = (f, richtig, falsche, info) => { const u = [...new Set(falsche)].filter((x) => x !== richtig).slice(0, 3); while (u.length < 2) u.push(u.length ? "keine der Angaben" : richtig + " + 1"); return { t: "wahl", f, a: [richtig, ...u], r: 0, info }; };
  const ggT = (a, b) => (b ? ggT(b, a % b) : Math.abs(a));
  const bruch = (zl, n) => { const g = ggT(zl, n); return (zl / g) + "/" + (n / g); };
  const fak = (n) => (n <= 1 ? 1 : n * fak(n - 1));
  const binom = (n, k) => fak(n) / (fak(k) * fak(n - k));

  // ---------- Generator: exponentielles Wachstum ----------
  function genExponentiell(rng) {
    const art = rng.int(1, 9);
    if (art === 1) {
      const p = rng.pick([2, 3, 4, 5, 8, 10, 12, 15, 20, 25, 50]);
      const ab = rng() < 0.5;
      const q = r2(1 + (ab ? -p : p) / 100);
      return zahl(`Ein Bestand ${ab ? "nimmt pro Jahr um " + p + " % ab" : "wächst pro Jahr um " + p + " %"}. Wie lautet der Wachstumsfaktor q? (als Dezimalzahl)`, q,
        `q = 1 ${ab ? "−" : "+"} ${p}/100 = ${z(q)}. Mit q multiplizierst du den Bestand in jedem Schritt.`, "", 0.001);
    }
    if (art === 2) {
      const a = rng.pick([50, 100, 200, 500, 1000]), q = rng.pick([2, 2, 3]), n = rng.int(2, q === 3 ? 4 : 6);
      const B = a * q ** n;
      return zahl(`In einer Schale sind ${a} Bakterien. Ihre Zahl ${q === 2 ? "verdoppelt" : "verdreifacht"} sich jede Stunde. Wie viele Bakterien sind es nach ${n} Stunden?`, B,
        `B(n) = a · qⁿ = ${a} · ${q}^${n} = ${a} · ${q ** n} = ${B}.`, "");
    }
    if (art === 3) {
      const K = rng.pick([500, 1000, 2000, 2500, 5000, 10000]), p = rng.pick([1.5, 2, 2.5, 3, 4, 5]), n = rng.pick([2, 3, 4, 5]);
      const q = 1 + p / 100, Kn = r2(K * q ** n);
      return zahl(`${K} € werden ${n} Jahre lang zu ${z(p)} % Zinseszins angelegt. Wie hoch ist das Kapital danach? (auf Cent gerundet)`, Kn,
        `Wachstumsfaktor q = 1 + ${z(p)}/100 = ${z(q)}; K(${n}) = ${K} · ${z(q)}^${n} = ${z(Kn)} €.`, "€", 0.05);
    }
    if (art === 4) {
      const P = rng.pick([8000, 12000, 15000, 20000, 24000, 30000]), p = rng.pick([10, 15, 20, 25]), n = rng.pick([2, 3, 4]);
      const q = 1 - p / 100, W = r2(P * q ** n);
      return zahl(`Ein Auto kostet neu ${P} € und verliert jedes Jahr ${p} % seines Wertes. Wie viel ist es nach ${n} Jahren noch wert? (auf Cent gerundet)`, W,
        `Abnahme: q = 1 − ${p}/100 = ${z(q)}; W(${n}) = ${P} · ${z(q)}^${n} = ${z(W)} €.`, "€", 0.05);
    }
    if (art === 5) {
      const m0 = rng.pick([80, 160, 200, 400, 640, 1000]), T = rng.pick([5, 8, 10, 12, 24, 30]), k = rng.int(1, 4);
      const m = m0 / 2 ** k;
      return zahl(`Ein radioaktiver Stoff hat die Halbwertszeit ${T} Stunden. Von ${m0} g sind nach ${k * T} Stunden noch wie viel übrig? (in g)`, m,
        `${k * T} h sind ${k} Halbwertszeit${k > 1 ? "en" : ""}: ${m0} · (1/2)^${k} = ${m0} / ${2 ** k} = ${z(m)} g.`, "g", 0.05);
    }
    if (art === 6) {
      const expo = rng() < 0.5;
      const a = rng.pick([2, 3, 4, 5, 10]), q = rng.pick([2, 3]), d = rng.pick([3, 4, 5, 6, 8]);
      const werte = expo ? [a, a * q, a * q * q, a * q ** 3] : [a, a + d, a + 2 * d, a + 3 * d];
      return wahl(`Wertetabelle: Schritt 0 → ${werte[0]}, Schritt 1 → ${werte[1]}, Schritt 2 → ${werte[2]}, Schritt 3 → ${werte[3]}. Welche Art von Wachstum liegt vor?`,
        ["exponentiell (immer mal derselbe Faktor)", "linear (immer plus dieselbe Zahl)"], expo ? 0 : 1,
        expo ? `Von Schritt zu Schritt wird mit ${q} multipliziert (${werte[0]} → ${werte[1]} → ${werte[2]}): exponentiell.` : `Von Schritt zu Schritt kommen immer ${d} dazu (${werte[0]} → ${werte[1]} → ${werte[2]}): linear.`);
    }
    if (art === 7) {
      const p = rng.pick([2, 3, 5, 8, 10, 12, 15, 20, 25, 30]), ab = rng() < 0.5;
      const q = r2(1 + (ab ? -p : p) / 100);
      return zahl(`Der Wachstumsfaktor eines Bestands ist q = ${z(q)}. Um wie viel Prozent ${ab ? "nimmt der Bestand pro Schritt ab" : "wächst der Bestand pro Schritt"}?`, p,
        `${z(q)} = 1 ${ab ? "−" : "+"} ${p}/100, also ${ab ? "Abnahme" : "Zunahme"} um ${p} %.`, "%");
    }
    if (art === 8) {
      const b = rng.pick([2, 3, 4, 5, 10]);
      const x = b === 2 ? rng.int(2, 7) : b === 3 ? rng.int(2, 5) : b === 10 ? rng.int(2, 6) : rng.int(2, 4);
      const c = b ** x;
      return zahl(`(E-Kurs) Löse die Exponentialgleichung ${b}^x = ${c.toLocaleString("de-DE")}. Welche Zahl ist x?`, x,
        `Probieren oder Logarithmus: ${b}^${x} = ${c.toLocaleString("de-DE")}, also x = log${b}(${c.toLocaleString("de-DE")}) = ${x}.`, "");
    }
    const a = rng.pick([100, 200, 500, 1000]), k = rng.int(2, 6);
    const ziel = a * 2 ** k;
    return zahl(`Eine Bakterienkultur mit ${a} Bakterien verdoppelt sich jede Stunde. Nach wie vielen Stunden sind es ${ziel.toLocaleString("de-DE")} Bakterien?`, k,
      `${a} · 2^n = ${ziel.toLocaleString("de-DE")} → 2^n = ${2 ** k} → n = ${k}.`, "h");
  }

  // ---------- Generator: Kombinatorik & Vierfeldertafel (E-Kurs) ----------
  const TAFELN = [
    { zeilen: ["Mädchen", "Jungen"], spalten: ["mit Brille", "ohne Brille"], ort: "In einer Jahrgangsstufe" },
    { zeilen: ["Schüler mit Fahrrad", "Schüler ohne Fahrrad"], spalten: ["wohnen im Ort", "wohnen auswärts"], ort: "An einer Schule" },
    { zeilen: ["Sportler", "Nicht-Sportler"], spalten: ["Vereinsmitglied", "kein Vereinsmitglied"], ort: "In einer Umfrage" },
    { zeilen: ["Raucher", "Nichtraucher"], spalten: ["mit Husten", "ohne Husten"], ort: "In einer Studie" },
  ];
  function genKombinatorik(rng) {
    const art = rng.int(1, 8);
    if (art === 1) {
      const a = rng.int(2, 4), b = rng.int(3, 6), c = rng.int(2, 4);
      return zahl(`(E-Kurs) Ein Restaurant bietet ${a} Vorspeisen, ${b} Hauptgerichte und ${c} Nachspeisen. Wie viele verschiedene Menüs aus je einer Vorspeise, einem Hauptgericht und einer Nachspeise gibt es?`, a * b * c,
        `Zählprinzip: ${a} · ${b} · ${c} = ${a * b * c} Menüs.`, "");
    }
    if (art === 2) {
      const k = rng.int(3, 4), wuerfel = rng() < 0.4;
      const basis = wuerfel ? 6 : 10;
      return zahl(`(E-Kurs) Ein Zahlenschloss hat ${k} Ringe mit je ${wuerfel ? "6 Ziffern (1 bis 6)" : "10 Ziffern (0 bis 9)"}. Wie viele Kombinationen sind möglich?`, basis ** k,
        `Jeder Ring hat ${basis} Möglichkeiten: ${basis}^${k} = ${basis ** k}.`, "");
    }
    if (art === 3) {
      const n = rng.int(3, 6);
      const dinge = rng.pick(["Personen auf einer Bank", "Bücher in einem Regal", "Autos in einer Reihe", "Läufer auf der Startlinie"]);
      return zahl(`(E-Kurs) Auf wie viele Arten lassen sich ${n} ${dinge} nebeneinander anordnen?`, fak(n),
        `Alle Plätze werden belegt: ${n}! = ${Array.from({ length: n }, (_, i) => n - i).join(" · ")} = ${fak(n)}.`, "");
    }
    if (art === 4) {
      const n = rng.int(4, 8), k = rng.pick([2, 3]);
      return zahl(`(E-Kurs) Aus ${n} Schülern sollen ${k} für den Klassenrat ausgewählt werden. Die Reihenfolge spielt keine Rolle. Wie viele Möglichkeiten gibt es?`, binom(n, k),
        k === 2 ? `Mit Reihenfolge wären es ${n} · ${n - 1} = ${n * (n - 1)}; jedes Paar wurde doppelt gezählt: ${n * (n - 1)} / 2 = ${binom(n, k)}.`
          : `Mit Reihenfolge: ${n} · ${n - 1} · ${n - 2} = ${n * (n - 1) * (n - 2)}; jede Dreiergruppe ist 3! = 6-mal dabei: ${n * (n - 1) * (n - 2)} / 6 = ${binom(n, k)}.`, "");
    }
    if (art === 5) {
      const n = rng.int(5, 8), k = rng.pick([2, 3]);
      const erg = k === 2 ? n * (n - 1) : n * (n - 1) * (n - 2);
      return zahl(`(E-Kurs) Bei einem Lauf mit ${n} Teilnehmern werden ${k === 3 ? "Gold, Silber und Bronze" : "der erste und der zweite Platz"} vergeben. Wie viele verschiedene Ergebnisse sind möglich?`, erg,
        `Die Reihenfolge zählt: ${k === 3 ? `${n} · ${n - 1} · ${n - 2}` : `${n} · ${n - 1}`} = ${erg}.`, "");
    }
    // Vierfeldertafel: N, A (Zeile 1), B (Spalte 1), AB
    const T = rng.pick(TAFELN);
    const N = rng.pick([50, 60, 80, 100, 120, 150, 200]);
    const A = rng.int(Math.round(N * 0.3), Math.round(N * 0.7));
    const B = rng.int(Math.round(N * 0.3), Math.round(N * 0.7));
    const AB = rng.int(Math.max(1, A + B - N + 1), Math.min(A, B) - 1);
    const AnB = A - AB, nAB = B - AB, nAnB = N - A - B + AB;
    const kopf = `${T.ort} wurden ${N} Personen erfasst. Vierfeldertafel (Zeilen: ${T.zeilen[0]} / ${T.zeilen[1]}; Spalten: ${T.spalten[0]} / ${T.spalten[1]}).`;
    if (art === 6) {
      return zahl(`(E-Kurs) ${kopf} Gegeben: ${T.zeilen[0]} gesamt ${A}, davon ${T.spalten[0]}: ${AB}. Wie viele ${T.zeilen[0]} sind ${T.spalten[1]}?`, AnB,
        `Zeilensumme: ${A} − ${AB} = ${AnB}.`, "");
    }
    if (art === 7) {
      return zahl(`(E-Kurs) ${kopf} Gegeben: ${T.zeilen[0]} ${T.spalten[0]}: ${AB}; ${T.zeilen[1]} ${T.spalten[0]}: ${nAB}; ${T.zeilen[0]} ${T.spalten[1]}: ${AnB}. Wie viele Personen sind ${T.zeilen[1]} und ${T.spalten[1]}?`, nAnB,
        `Gesamt ${N} minus die drei bekannten Felder: ${N} − ${AB} − ${nAB} − ${AnB} = ${nAnB}.`, "");
    }
    // bedingte Wahrscheinlichkeit P(Spalte1 | Zeile1) = AB / A, hübsche Zahlen erzwingen
    const Ah = rng.pick([20, 25, 40, 50, 80, 100]);
    const teiler = Ah === 25 ? [5, 10, 15, 20] : Ah === 20 ? [4, 5, 8, 10, 12, 15, 16] : Ah === 40 ? [8, 10, 16, 20, 24, 30, 32] : Ah === 50 ? [5, 10, 15, 20, 25, 30, 35, 40, 45] : Ah === 80 ? [8, 16, 20, 24, 32, 40, 48, 56, 60, 64] : [5, 10, 15, 20, 25, 30, 40, 45, 50, 60, 75, 80];
    const ABh = rng.pick(teiler);
    const P = r2(ABh / Ah);
    return zahl(`(E-Kurs) ${T.ort} sind ${Ah} Personen ${T.zeilen[0]}; ${ABh} davon sind ${T.spalten[0]}. Du wählst zufällig eine Person aus der Gruppe „${T.zeilen[0]}“. Mit welcher Wahrscheinlichkeit ist sie ${T.spalten[0]}? (als Dezimalzahl, z. B. 0,25)`, P,
      `Bedingte Wahrscheinlichkeit: P(${T.spalten[0]} | ${T.zeilen[0]}) = ${ABh}/${Ah} = ${bruch(ABh, Ah)} = ${z(P)}. Nur die Zeile „${T.zeilen[0]}“ zählt als Grundgesamtheit.`, "", 0.005);
  }

  // ---------- Generator: Zuordnungen & Dreisatz ----------
  const ZUORDNUNGEN = [
    ["Anzahl gekaufter Brötchen → Gesamtpreis", "proportional"],
    ["Anzahl der Arbeiter → Dauer der Arbeit", "antiproportional"],
    ["Alter eines Menschen → Körpergröße", "weder noch"],
    ["Fahrzeit bei gleichbleibendem Tempo → zurückgelegte Strecke", "proportional"],
    ["Geschwindigkeit → Fahrzeit für dieselbe Strecke", "antiproportional"],
    ["Anzahl der Pumpen → Zeit zum Füllen eines Beckens", "antiproportional"],
    ["Menge Benzin → Preis an der Tankstelle", "proportional"],
    ["Seitenlänge eines Quadrats → Flächeninhalt", "weder noch"],
    ["Anzahl Personen → Anteil jeder Person an einer Pizza", "antiproportional"],
    ["Anzahl Stunden → Lohn bei festem Stundenlohn", "proportional"],
    ["Temperatur am Tag → Anzahl verkaufter Eiskugeln", "weder noch"],
  ];
  function genZuordnungen(rng) {
    const art = rng.int(1, 7);
    if (art === 1) {
      const ppk = rng.pick([0.8, 1.2, 1.5, 2.5, 3, 4.5, 6]), a = rng.int(2, 6);
      let b = rng.int(1, 12); if (b === a) b = a + 1;
      const ware = rng.pick(["Äpfel", "Kartoffeln", "Tomaten", "Birnen", "Mehl"]);
      return zahl(`${a} kg ${ware} kosten ${z(ppk * a)} €. Was kosten ${b} kg?`, r2(ppk * b),
        `Proportional: 1 kg kostet ${z(ppk * a)} / ${a} = ${z(ppk)} €; ${b} kg kosten ${b} · ${z(ppk)} = ${z(ppk * b)} €.`, "€");
    }
    if (art === 2) {
      const v = rng.pick([60, 80, 90, 100, 120]), t1 = rng.pick([2, 3, 4]), t2 = rng.pick([1.5, 2.5, 5, 6, 0.5]);
      return zahl(`Ein Zug fährt gleichmäßig schnell und legt in ${t1} Stunden ${v * t1} km zurück. Wie weit kommt er in ${z(t2)} Stunden?`, r2(v * t2),
        `Proportional: ${v * t1} km / ${t1} h = ${v} km pro Stunde; ${v} · ${z(t2)} = ${z(v * t2)} km.`, "km");
    }
    if (art === 3) {
      const P = rng.pick([12, 24, 36, 48, 60, 72]);
      const teiler = [2, 3, 4, 6, 8, 12].filter((d) => P % d === 0);
      const a = rng.pick(teiler); let b = rng.pick(teiler); if (b === a) b = teiler[(teiler.indexOf(a) + 1) % teiler.length];
      return zahl(`${a} Arbeiter brauchen für eine Mauer ${P / a} ${P / a === 1 ? "Tag" : "Tage"}. Wie lange brauchen ${b} Arbeiter (gleiches Tempo)? (in Tagen)`, P / b,
        `Antiproportional: Produkt bleibt gleich: ${a} · ${P / a} = ${P} Arbeitstage; ${P} / ${b} = ${P / b} ${P / b === 1 ? "Tag" : "Tage"}.`, "Tage");
    }
    if (art === 4) {
      const s = rng.pick([120, 180, 240, 300, 360]);
      const vs = [40, 60, 80, 90, 120].filter((v) => (s / v) * 2 === Math.round((s / v) * 2));
      const v1 = rng.pick(vs); let v2 = rng.pick(vs); if (v2 === v1) v2 = vs[(vs.indexOf(v1) + 1) % vs.length];
      return zahl(`Mit ${v1} km/h braucht ein Auto für eine Strecke ${z(s / v1)} ${s / v1 === 1 ? "Stunde" : "Stunden"}. Wie lange braucht es mit ${v2} km/h?`, r2(s / v2),
        `Antiproportional: Strecke = ${v1} · ${z(s / v1)} = ${s} km; ${s} / ${v2} = ${z(s / v2)} h.`, "h");
    }
    if (art === 5) {
      const [text, typ] = rng.pick(ZUORDNUNGEN);
      const a = ["proportional", "antiproportional", "weder noch"];
      const info = typ === "proportional" ? "Doppelte Menge → doppelter Wert: der Quotient y/x bleibt gleich, also proportional."
        : typ === "antiproportional" ? "Doppelte Menge → halber Wert: das Produkt x · y bleibt gleich, also antiproportional."
          : "Hier gibt es keinen festen Faktor und kein festes Produkt – die Zuordnung ist weder proportional noch antiproportional.";
      return wahl(`Welche Art von Zuordnung ist das: „${text}“?`, a, a.indexOf(typ), info);
    }
    if (art === 6) {
      const prop = rng() < 0.5;
      return wahl(prop ? "Was bleibt bei einer proportionalen Zuordnung immer gleich?" : "Was bleibt bei einer antiproportionalen Zuordnung immer gleich?",
        ["der Quotient y : x", "das Produkt x · y", "die Differenz y − x", "die Summe x + y"], prop ? 0 : 1,
        prop ? "Proportional heißt: y = k · x, also y : x = k ist konstant (der Graph ist eine Gerade durch den Ursprung)." : "Antiproportional heißt: x · y = c ist konstant (der Graph ist eine Hyperbel).");
    }
    const prop = rng() < 0.5;
    if (prop) {
      const k = rng.pick([1.5, 2, 2.5, 3, 4, 5]), x1 = rng.int(2, 6); let x2 = rng.int(2, 12); if (x2 === x1) x2 = x1 + 2;
      return zahl(`Proportionale Zuordnung: x = ${x1} → y = ${z(k * x1)}. Welcher Wert y gehört zu x = ${x2}?`, r2(k * x2),
        `Faktor k = ${z(k * x1)} / ${x1} = ${z(k)}; y = ${z(k)} · ${x2} = ${z(k * x2)}.`, "");
    }
    const c = rng.pick([24, 36, 48, 60, 120]), teiler = [2, 3, 4, 5, 6, 8, 10, 12].filter((d) => c % d === 0);
    const x1 = rng.pick(teiler); let x2 = rng.pick(teiler); if (x2 === x1) x2 = teiler[(teiler.indexOf(x1) + 1) % teiler.length];
    return zahl(`Antiproportionale Zuordnung: x = ${x1} → y = ${c / x1}. Welcher Wert y gehört zu x = ${x2}?`, c / x2,
      `Produkt c = ${x1} · ${c / x1} = ${c}; y = ${c} / ${x2} = ${c / x2}.`, "");
  }

  FACH.themen.push(
    {
      id: "exponentiell", titel: "Exponentielles Wachstum & Abnahme", kurz: "Wachstumsfaktor, B(n) = a · qⁿ, Zinseszins, Halbwertszeit (G-Kurs); b^x = c (E-Kurs)",
      erklaerung: `<p><b>Lineares Wachstum:</b> In jedem Schritt kommt dieselbe Zahl dazu (+ d). <b>Exponentielles Wachstum:</b> In jedem Schritt wird mit demselben <b>Wachstumsfaktor q</b> multipliziert (· q).</p>
<p><b>Formel:</b> B(n) = a · qⁿ – a ist der Anfangsbestand, n die Anzahl der Schritte (Jahre, Stunden …).</p>
<p><b>Wachstumsfaktor aus Prozent:</b> Zunahme um p % → q = 1 + p/100 (5 % → 1,05). Abnahme um p % → q = 1 − p/100 (20 % → 0,8). Ist q &gt; 1, wächst der Bestand; ist q &lt; 1, nimmt er ab.</p>
<p><b>Beispiele:</b> Zinseszins (q = 1,03 bei 3 %), Bakterien, die sich verdoppeln (q = 2), Wertverlust eines Autos (q = 0,8 bei −20 %), <b>Halbwertszeit</b>: nach jeder Halbwertszeit ist nur noch die Hälfte da (q = 0,5 pro Halbwertszeit).</p>
<p><b>E-Kurs – Exponentialgleichung:</b> b^x = c löst du durch Probieren (2^x = 32 → x = 5, weil 2·2·2·2·2 = 32) oder mit dem Logarithmus: x = log<sub>b</sub>(c). Der Logarithmus ist die Umkehrung des Potenzierens.</p>
<p>Typischer Fehler: Bei 5 % Zunahme <i>nicht</i> mit 5 oder 0,05 multiplizieren, sondern mit 1,05 – und bei mehreren Schritten hoch n, nicht mal n.</p>`,
      gen: genExponentiell,
    },
    {
      id: "statistik", titel: "Daten & Diagramme: Mittelwert, Median, Boxplot", kurz: "Kennwerte berechnen, Quartile und Boxplot lesen, Diagramm-Tricks erkennen (G- und E-Kurs)",
      erklaerung: `<p><b>Arithmetisches Mittel</b> (Durchschnitt): alle Werte addieren und durch die Anzahl teilen. <b>Median</b> (Zentralwert): Werte der Größe nach ordnen, der mittlere Wert – bei gerader Anzahl das Mittel der beiden mittleren. <b>Modalwert</b>: der häufigste Wert. <b>Spannweite</b>: größter minus kleinster Wert.</p>
<p>Der Median ist unempfindlich gegen <b>Ausreißer</b>: Ein einziges Riesengehalt zieht den Mittelwert hoch, den Median kaum.</p>
<p><b>Quartile:</b> Das untere Quartil Q1 ist der Median der unteren Hälfte, das obere Quartil Q3 der Median der oberen Hälfte. Zwischen Q1 und Q3 liegt etwa die mittlere Hälfte (50 %) der Daten. Der <b>Boxplot</b> zeigt fünf Zahlen: Minimum, Q1, Median (Strich in der Box), Q3, Maximum. Die Box reicht von Q1 bis Q3; ihre Länge ist der Quartilsabstand.</p>
<p><b>Diagramme kritisch lesen:</b> Beginnt die y-Achse nicht bei 0, wirken kleine Unterschiede riesig. Werden Bilder doppelt so hoch <i>und</i> doppelt so breit gezeichnet, ist die Fläche viermal so groß – das täuscht. Achte auch auf fehlende Achsenbeschriftung und auf die Frage, wer die Daten erhoben hat.</p>
<p><b>Welches Diagramm?</b> Anteile am Ganzen → Kreisdiagramm; Entwicklung über die Zeit → Liniendiagramm; Vergleich von Gruppen → Säulen-/Balkendiagramm.</p>
<p><b>Stichprobe:</b> Eine Umfrage ist nur dann aussagekräftig (repräsentativ), wenn die Befragten zufällig aus der ganzen Gruppe ausgewählt wurden und die Stichprobe groß genug ist.</p>`,
      aufgaben: [
        zahl("Berechne das arithmetische Mittel der Werte 4, 7, 9, 12, 8.", 8, "Summe 4 + 7 + 9 + 12 + 8 = 40; 40 / 5 = 8.", ""),
        zahl("Bestimme den Median der Werte 3, 9, 5, 12, 7.", 7, "Ordnen: 3, 5, 7, 9, 12 – der mittlere (dritte) Wert ist 7.", ""),
        zahl("Bestimme den Median der Werte 2, 4, 6, 10.", 5, "Gerade Anzahl: Mittel der beiden mittleren Werte (4 + 6) / 2 = 5.", ""),
        zahl("Wie groß ist die Spannweite der Werte 15, 22, 9, 31, 18?", 22, "Spannweite = Maximum − Minimum = 31 − 9 = 22.", ""),
        zahl("Klassenarbeit mit den Noten 1, 2, 2, 3, 4, 3, 2, 3. Wie groß ist der Notendurchschnitt?", 2.5, "Summe = 20, Anzahl = 8; 20 / 8 = 2,5.", ""),
        zahl("Welcher Wert ist der Modalwert der Datenreihe 4, 7, 7, 2, 9, 7, 4?", 7, "Der Modalwert ist der häufigste Wert: 7 kommt dreimal vor.", ""),
        wahl("In einer Firma verdienen fünf Personen monatlich 2000 €, 2200 €, 2400 €, 2500 € und 12000 €. Welcher Kennwert beschreibt das „typische“ Gehalt besser?",
          ["der Median (2400 €)", "das arithmetische Mittel (4220 €)", "die Spannweite (10000 €)", "der Modalwert"], 0,
          "Das Riesengehalt 12000 € ist ein Ausreißer und zieht den Mittelwert auf 4220 € hoch – vier von fünf verdienen deutlich weniger. Der Median 2400 € bleibt davon unberührt."),
        zahl("Datenreihe (geordnet): 3, 5, 6, 8, 10, 12, 14, 20. Bestimme das untere Quartil Q1.", 5.5, "Untere Hälfte 3, 5, 6, 8 → Median davon (5 + 6) / 2 = 5,5.", "", 0.05),
        zahl("Datenreihe (geordnet): 3, 5, 6, 8, 10, 12, 14, 20. Wie groß ist der Quartilsabstand Q3 − Q1?", 7.5, "Q3 = Median von 10, 12, 14, 20 = 13; Q1 = 5,5; 13 − 5,5 = 7,5.", "", 0.05),
        wahl("Ein Boxplot zeigt: Minimum 2, Q1 5, Median 8, Q3 11, Maximum 15. Wie viel Prozent der Daten liegen ungefähr in der Box (zwischen 5 und 11)?",
          ["etwa 50 %", "etwa 25 %", "etwa 75 %", "100 %"], 0, "Die Box reicht vom unteren zum oberen Quartil und enthält die mittlere Hälfte der Daten – etwa 50 %."),
        wahl("Was zeigt der Strich innerhalb der Box eines Boxplots?", ["den Median", "das arithmetische Mittel", "den Modalwert", "die Spannweite"], 0,
          "Der Strich in der Box markiert den Median; das arithmetische Mittel kommt im Boxplot gar nicht vor."),
        wahl("Ein Säulendiagramm zu Wahlergebnissen beginnt auf der y-Achse bei 95 statt bei 0. Welche Wirkung hat das?",
          ["Kleine Unterschiede wirken riesig", "Die Werte werden falsch berechnet", "Das Diagramm wird übersichtlicher und ehrlicher", "Es hat keine Wirkung"], 0,
          "Eine abgeschnittene Achse vergrößert die sichtbaren Unterschiede: 96 und 99 sehen aus wie das Doppelte, obwohl der Unterschied 3 % beträgt."),
        wahl("In einem Bilddiagramm ist der Umsatz von 2 Mio. € als Geldsack gezeichnet. Für 4 Mio. € wird der Sack doppelt so hoch und doppelt so breit gezeichnet. Was stimmt?",
          ["Die Fläche ist viermal so groß – der Unterschied wird übertrieben", "Die Darstellung ist korrekt, weil die Höhe stimmt", "Die Fläche ist doppelt so groß – alles richtig", "Der Sack müsste dreimal so groß sein"], 0,
          "Höhe mal 2 und Breite mal 2 ergibt die vierfache Fläche. Unser Auge vergleicht Flächen – der Umsatz wirkt vervierfacht statt verdoppelt."),
        wahl("Du willst zeigen, wie sich die Stimmen bei der Klassensprecherwahl auf vier Kandidaten verteilen (Anteile am Ganzen). Welches Diagramm passt am besten?",
          ["Kreisdiagramm", "Liniendiagramm", "Boxplot", "Streudiagramm"], 0, "Anteile an einem Ganzen (100 %) zeigt das Kreisdiagramm am klarsten."),
        wahl("Du willst die Entwicklung der Durchschnittstemperatur in Köln über 50 Jahre darstellen. Welches Diagramm passt am besten?",
          ["Liniendiagramm", "Kreisdiagramm", "Bilddiagramm", "Vierfeldertafel"], 0, "Eine zeitliche Entwicklung zeigt man als Liniendiagramm – man sieht Trends und Schwankungen sofort."),
        wahl("Für eine Umfrage „Wie oft treibst du Sport?“ werden nur Leute vor einem Fitnessstudio befragt. Was ist das Problem?",
          ["Die Stichprobe ist nicht repräsentativ – Sportler sind überrepräsentiert", "Es wurden zu viele Leute befragt", "Die Frage ist zu kurz", "Es gibt kein Problem"], 0,
          "Vor einem Fitnessstudio triffst du vor allem Sportliche. Das Ergebnis gilt nicht für alle Menschen – die Stichprobe ist verzerrt."),
        wahl("Welche Stichprobe ist am ehesten repräsentativ für alle 900 Schüler einer Schule?",
          ["100 zufällig aus der Schülerliste gezogene Schüler", "die 25 Schüler der Klasse 9a", "die 50 Mitglieder der Fußball-AG", "alle, die freiwillig online abstimmen"], 0,
          "Repräsentativ wird eine Stichprobe durch Zufallsauswahl aus der gesamten Gruppe; einzelne Klassen oder Freiwillige sind verzerrt."),
        { t: "paare", f: "Ordne die Kennwerte ihrer Bedeutung zu", p: [["arithmetisches Mittel", "Summe aller Werte geteilt durch ihre Anzahl"], ["Median", "mittlerer Wert der geordneten Reihe"], ["Spannweite", "größter Wert minus kleinster Wert"], ["Modalwert", "häufigster Wert"], ["Quartilsabstand", "Länge der Box im Boxplot (Q3 − Q1)"]] },
      ],
    },
    {
      id: "kombinatorik", titel: "Zählprinzip & Vierfeldertafel", kurz: "Anzahl Möglichkeiten, n!, Auswahl mit/ohne Reihenfolge, Vierfeldertafel, bedingte Wahrscheinlichkeit (E-Kurs)",
      erklaerung: `<p><b>Zählprinzip (E-Kurs):</b> Werden mehrere Entscheidungen nacheinander getroffen, multiplizierst du die Anzahlen: 3 Vorspeisen · 4 Hauptgerichte · 2 Desserts = 24 Menüs. Ein Zahlenschloss mit 3 Ringen à 10 Ziffern hat 10 · 10 · 10 = 1000 Kombinationen.</p>
<p><b>Anordnungen:</b> n verschiedene Dinge lassen sich auf n! = n · (n−1) · … · 1 Arten in eine Reihe bringen (4! = 24).</p>
<p><b>Auswahl mit Reihenfolge</b> (z. B. Gold/Silber/Bronze aus 6 Läufern): 6 · 5 · 4 = 120. <b>Auswahl ohne Reihenfolge</b> (z. B. 2 Vertreter aus 6 Schülern): erst mit Reihenfolge rechnen (6 · 5 = 30), dann durch die Anzahl der Anordnungen teilen (30 / 2 = 15), weil jedes Paar sonst doppelt zählt.</p>
<p><b>Vierfeldertafel:</b> Zwei Merkmale mit je zwei Ausprägungen (z. B. Mädchen/Jungen und Brille/keine Brille) ergeben vier Felder plus Randsummen. Jede Zeile und jede Spalte muss sich zur Randsumme addieren – so berechnest du fehlende Felder.</p>
<p><b>Bedingte Wahrscheinlichkeit</b> P(A|B) = „Wahrscheinlichkeit von A, wenn B schon feststeht“: Du schaust nur in die Zeile oder Spalte von B und teilst das Feld A-und-B durch die Randsumme von B. Beispiel: 30 Mädchen, 12 davon mit Brille → P(Brille | Mädchen) = 12/30 = 0,4.</p>
<p>Typischer Fehler: Bei P(A|B) durch die Gesamtzahl teilen statt durch die Randsumme von B.</p>`,
      gen: genKombinatorik,
    },
    {
      id: "zuordnungen", titel: "Proportional, antiproportional & Dreisatz", kurz: "Dreisatz, Quotient oder Produkt konstant, Zuordnungstyp erkennen (Wiederholung 7/8, G- und E-Kurs)",
      erklaerung: `<p><b>Proportionale Zuordnung:</b> Doppelte Menge → doppelter Wert. Der Quotient y : x ist immer gleich (y = k · x). Graph: Gerade durch den Ursprung. Beispiel: 3 kg Äpfel kosten 4,50 €, 6 kg kosten 9 €.</p>
<p><b>Antiproportionale Zuordnung:</b> Doppelte Menge → halber Wert. Das Produkt x · y ist immer gleich. Graph: Hyperbel. Beispiel: 4 Arbeiter brauchen 6 Tage, 8 Arbeiter brauchen 3 Tage (4 · 6 = 8 · 3 = 24).</p>
<p><b>Dreisatz proportional:</b> auf 1 zurückrechnen (teilen), dann auf die gesuchte Menge hochrechnen (malnehmen): 3 kg → 4,50 €; 1 kg → 1,50 €; 7 kg → 10,50 €.</p>
<p><b>Dreisatz antiproportional:</b> auf 1 zurückrechnen heißt hier <i>malnehmen</i>: 4 Arbeiter → 6 Tage; 1 Arbeiter → 24 Tage; 3 Arbeiter → 8 Tage.</p>
<p>Viele Zuordnungen sind <b>weder noch</b> (Alter → Größe, Seitenlänge → Fläche). Prüfe immer: Verdoppelt sich der Wert mit, halbiert er sich, oder keins von beidem?</p>`,
      gen: genZuordnungen,
    },
    {
      id: "winkel", titel: "Winkel, Kongruenz & Satz des Thales", kurz: "Winkelsummen, Neben-/Scheitel-/Stufen-/Wechselwinkel, gleichschenklig, Thales, SSS/SWS/WSW (Wiederholung 7/8)",
      erklaerung: `<p><b>Winkelsummen:</b> Im Dreieck 180°, im Viereck 360°.</p>
<p><b>Winkel an Geraden:</b> <b>Nebenwinkel</b> ergänzen sich zu 180°. <b>Scheitelwinkel</b> (gegenüber am Schnittpunkt) sind gleich groß. Schneidet eine Gerade zwei <b>parallele</b> Geraden, sind <b>Stufenwinkel</b> (gleiche Lage, „F-Form“) und <b>Wechselwinkel</b> („Z-Form“) gleich groß.</p>
<p><b>Besondere Dreiecke:</b> Im <b>gleichschenkligen</b> Dreieck sind die beiden Basiswinkel gleich groß. Im <b>gleichseitigen</b> Dreieck ist jeder Winkel 60°.</p>
<p><b>Satz des Thales:</b> Liegt C auf dem Halbkreis über dem Durchmesser AB, dann hat das Dreieck ABC bei C einen rechten Winkel (90°). Die beiden anderen Winkel ergänzen sich zu 90°.</p>
<p><b>Kongruenzsätze</b> – ein Dreieck ist eindeutig festgelegt (kongruent = deckungsgleich) durch: <b>SSS</b> drei Seiten, <b>SWS</b> zwei Seiten und der eingeschlossene Winkel, <b>WSW</b> eine Seite und die beiden anliegenden Winkel, <b>SsW</b> zwei Seiten und der Winkel gegenüber der längeren Seite. Drei Winkel (WWW) reichen <i>nicht</i> – solche Dreiecke sind nur ähnlich.</p>`,
      aufgaben: [
        zahl("In einem Dreieck sind α = 47° und β = 85°. Wie groß ist γ? (in Grad)", 48, "Winkelsumme 180°: γ = 180° − 47° − 85° = 48°.", "°"),
        zahl("Ein Viereck hat die Winkel 90°, 110° und 75°. Wie groß ist der vierte Winkel? (in Grad)", 85, "Winkelsumme im Viereck 360°: 360 − 90 − 110 − 75 = 85°.", "°"),
        zahl("Ein gleichschenkliges Dreieck hat Basiswinkel von je 40°. Wie groß ist der Winkel an der Spitze? (in Grad)", 100, "Basiswinkel sind gleich: 180° − 40° − 40° = 100°.", "°"),
        zahl("Ein gleichschenkliges Dreieck hat an der Spitze 36°. Wie groß ist jeder Basiswinkel? (in Grad)", 72, "(180° − 36°) / 2 = 72° – die beiden Basiswinkel sind gleich groß.", "°"),
        zahl("Wie groß ist jeder Innenwinkel eines gleichseitigen Dreiecks? (in Grad)", 60, "Drei gleiche Winkel mit Summe 180°: 180° / 3 = 60°.", "°"),
        zahl("Zwei Geraden schneiden sich; ein Winkel misst 112°. Wie groß ist sein Nebenwinkel? (in Grad)", 68, "Nebenwinkel ergänzen sich zu 180°: 180° − 112° = 68°.", "°"),
        zahl("Zwei Geraden schneiden sich; ein Winkel misst 35°. Wie groß ist sein Scheitelwinkel? (in Grad)", 35, "Scheitelwinkel liegen sich am Schnittpunkt gegenüber und sind gleich groß: 35°.", "°"),
        zahl("Eine Gerade schneidet zwei parallele Geraden. Ein Winkel misst 63°. Wie groß ist der Stufenwinkel dazu an der anderen Parallelen? (in Grad)", 63, "An Parallelen sind Stufenwinkel gleich groß: 63°.", "°"),
        wahl("Eine Gerade schneidet zwei parallele Geraden. Was gilt für Wechselwinkel (Z-Winkel)?", ["Sie sind gleich groß", "Sie ergänzen sich zu 180°", "Sie ergänzen sich zu 90°", "Sie sind immer 45°"], 0,
          "An parallelen Geraden sind Wechselwinkel (und Stufenwinkel) gleich groß; nur Nebenwinkel ergänzen sich zu 180°."),
        wahl("Punkt C liegt auf dem Halbkreis über dem Durchmesser AB. Was sagt der Satz des Thales über das Dreieck ABC?", ["Der Winkel bei C ist 90°", "Das Dreieck ist gleichseitig", "Der Winkel bei A ist 90°", "Alle Winkel sind gleich groß"], 0,
          "Thales: Jeder Winkel im Halbkreis über dem Durchmesser ist ein rechter Winkel – er liegt beim Punkt C auf dem Kreis."),
        zahl("Dreieck ABC liegt im Thaleskreis über AB (rechter Winkel bei C). α = 32°. Wie groß ist β? (in Grad)", 58, "γ = 90°, also α + β = 90°: β = 90° − 32° = 58°.", "°"),
        wahl("Von einem Dreieck kennst du alle drei Seitenlängen. Mit welchem Kongruenzsatz ist es eindeutig festgelegt?", ["SSS", "SWS", "WSW", "WWW"], 0,
          "Drei Seiten legen ein Dreieck eindeutig fest: Kongruenzsatz SSS."),
        wahl("Du kennst zwei Seiten eines Dreiecks und den Winkel, der zwischen ihnen liegt. Welcher Kongruenzsatz gilt?", ["SWS", "SSS", "WSW", "SsW"], 0,
          "Zwei Seiten mit dem eingeschlossenen Winkel: Seite–Winkel–Seite, also SWS."),
        wahl("Du kennst eine Seite eines Dreiecks und die beiden Winkel, die an dieser Seite anliegen. Welcher Kongruenzsatz gilt?", ["WSW", "SWS", "SSS", "SsW"], 0,
          "Eine Seite mit den beiden anliegenden Winkeln: Winkel–Seite–Winkel, also WSW."),
        wahl("Von zwei Dreiecken stimmen alle drei Winkel überein. Sind die Dreiecke damit kongruent?", ["Nein – sie sind nur ähnlich, die Größe kann verschieden sein", "Ja, immer", "Ja, wenn ein Winkel 90° ist", "Nur bei gleichseitigen Dreiecken nicht"], 0,
          "WWW ist kein Kongruenzsatz: Ein kleines und ein großes Dreieck können dieselben Winkel haben. Für Kongruenz braucht es mindestens eine Seite."),
        { t: "paare", f: "Ordne die Winkelarten ihrer Größe zu", p: [["spitzer Winkel", "kleiner als 90°"], ["rechter Winkel", "genau 90°"], ["stumpfer Winkel", "zwischen 90° und 180°"], ["gestreckter Winkel", "genau 180°"], ["überstumpfer Winkel", "zwischen 180° und 360°"]] },
      ],
    },
  );
})();
