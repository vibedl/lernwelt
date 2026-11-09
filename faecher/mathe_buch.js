// Lernwelt – Buch-Zuordnung Mathematik: Westermann „Mathematik – Ausgabe 2022 für NRW“, Schulbuch 9E / 9G.
// Ordnet die vorhandenen Themen den Buchkapiteln zu (Nummerierung nach dem E-Kurs-Band, Abweichungen des
// G-Kurses stehen im Kapitel-String) und ergänzt Themen für Kapitel ohne Abdeckung (Generatoren).
// Nur Kapitelnamen und Seitenzahlen aus dem Inhaltsverzeichnis – keine Buchtexte. Reines Browser-JS.
"use strict";
(function () {
  const FACH = window.FAECHER.find((f) => f.id === "mathe");
  if (!FACH) return;
  FACH.buch = "Westermann Mathematik 9 (Ausgabe 2022 NRW, G-/E-Kurs)";

  // ---------- Kapitel (Nummern wie im Band 9E; G-Kurs-Abweichung in Klammern) ----------
  const K1 = "Kapitel 1 · Maßstäbliches Vergrößern und Verkleinern (E: S. 6–27, G: S. 6–23)";
  const K2 = "Kapitel 2 · Reelle Zahlen (E: S. 28–47; G: Potenzen und Wurzeln, S. 24–41)";
  const K3 = "Kapitel 3 · Kreis und Kreisteile (E: S. 48–63; G: Kreis, S. 42–55)";
  const K4 = "Kapitel 4 · Lineare Funktionen (E: S. 64–85, G: S. 56–77)";
  const K5 = "Kapitel 5 · Lineare Gleichungssysteme (E: S. 86–107; G: nur Wiederholung Gleichungen, S. 186)";
  const K6 = "Kapitel 6 · Satz des Pythagoras (E: S. 108–127; G: Kapitel 5, S. 78–93)";
  const K7 = "Kapitel 7 · Körper (E: S. 128–155; G: Kapitel 6, S. 94–121)";
  const K8 = "Kapitel 8 · Große und kleine Zahlen (E: S. 156–169; G: Zehnerpotenzen in Kapitel 2)";
  const K9 = "Kapitel 9 · Statistische Erhebungen (E: S. 170–195; G: Kapitel 7, S. 122–147)";
  const W1 = "Wiederholung · Prozent- und Zinsrechnung (E: S. 212–215, G: S. 181–184)";
  const W2 = "Wiederholung · Proportionale und antiproportionale Zuordnungen (E: S. 210–211, G: S. 179–180)";
  const W3 = "Wiederholung · Terme und Gleichungen (E: S. 216–217, G: S. 185–186)";
  const W4 = "Wiederholung · Ebene Figuren (E: S. 219, G: S. 188)";

  const kap = (id, kapitel) => { const t = FACH.themen.find((x) => x.id === id); if (t) t.kapitel = kapitel; };
  kap("aehnlichkeit", K1);
  kap("potenzen", K2);
  kap("kreis", K3);
  kap("funktionen", K4);
  kap("gleichungen", K5);
  kap("pythagoras", K6);
  kap("koerper", K7);
  kap("statistik", K9);
  kap("prozent", W1);
  kap("zuordnungen", W2);
  kap("terme", W3);
  kap("winkel", W4);
  // Ohne Kapitel (nicht im Band 9, erscheinen unter „Weitere Themen“): quadratisch, wahrscheinlichkeit,
  // trigonometrie, exponentiell, kombinatorik – das sind Inhalte des Bandes 10.

  // ---------- Hilfsfunktionen (lokal; nur fz ist global aus js/kern.js) ----------
  const r2 = (x) => Math.round(x * 100) / 100;
  const z = (x) => fz(x);
  const zahl = (f, l, info, einheit, tol) => ({ t: "zahl", f, l, info, einheit, tol: tol ?? (Number.isInteger(l) ? 0.01 : 0.05) });
  const wahl = (f, a, r, info) => ({ t: "wahl", f, a, r, info });
  const wahlU = (f, richtig, falsche, info) => { const u = [...new Set(falsche)].filter((x) => x !== richtig).slice(0, 3); while (u.length < 2) u.push(u.length ? "keine der Angaben" : richtig + " + 1"); return { t: "wahl", f, a: [richtig, ...u], r: 0, info }; };
  const SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
  const hoch = (n) => String(n).split("").map((c) => SUP[c] || c).join("");
  const zp = (m, e) => z(m) + " · 10" + hoch(e);   // 3,2 · 10⁵
  const tausender = (x) => x.toLocaleString("de-DE", { maximumFractionDigits: 10 });

  // ---------- Generator: Quadratwurzeln, dritte Wurzeln, irrationale Zahlen (Kapitel 2) ----------
  const genWurzeln = (rng) => {
    const art = rng.int(1, 8);
    if (art === 1) { const n = rng.int(2, 25); return zahl(`Wie groß ist √${n * n}?`, n, `${n} · ${n} = ${n * n}, also √${n * n} = ${n}.`); }
    if (art === 2) { const n = rng.int(2, 10); return zahl(`Wie groß ist die dritte Wurzel aus ${n ** 3} (∛${n ** 3})?`, n, `${n} · ${n} · ${n} = ${n ** 3}, also ∛${n ** 3} = ${n}.`); }
    if (art === 3) {
      const a = rng.int(2, 6), b = rng.pick([2, 3, 5, 6, 7, 10]);
      const richtig = `${a} · √${b}`;
      return wahlU(`Vereinfache teilweise: √${a * a * b} = ?`, richtig, [`${b} · √${a}`, `${a * b}`, `${a * a} · √${b}`, `${a} · √${a * b}`],
        `√${a * a * b} = √(${a * a} · ${b}) = √${a * a} · √${b} = ${richtig}.`);
    }
    if (art === 4) {
      const Z = rng.pick([["√16", 0, "√16 = 4, eine ganze Zahl"], ["√2", 1, "√2 = 1,41421… bricht nie ab und wird nie periodisch"], ["0,75", 0, "0,75 = 3/4, ein Bruch"], ["π", 1, "π = 3,14159… ist nicht als Bruch darstellbar"], ["√0,25", 0, "√0,25 = 0,5 = 1/2"], ["1/3", 0, "1/3 = 0,333… ist periodisch, also rational"], ["√10", 1, "10 ist keine Quadratzahl, √10 = 3,1622… bricht nie ab"], ["√49", 0, "√49 = 7"], ["√3", 1, "3 ist keine Quadratzahl, also ist √3 irrational"], ["2,5", 0, "2,5 = 5/2, ein Bruch"], ["√81", 0, "√81 = 9"], ["√7", 1, "7 ist keine Quadratzahl, also ist √7 irrational"], ["√1,44", 0, "√1,44 = 1,2 = 6/5"], ["√5", 1, "5 ist keine Quadratzahl, also ist √5 irrational"]]);
      return wahl(`Ist die Zahl ${Z[0]} rational oder irrational?`, ["rational", "irrational"], Z[1], `${Z[2]}. Rational = als Bruch darstellbar (endliche oder periodische Dezimalzahl), irrational = unendlich, nicht periodisch.`);
    }
    if (art === 5) {
      let n = rng.int(2, 99); while (Number.isInteger(Math.sqrt(n))) n = rng.int(2, 99);
      const w = r2(Math.sqrt(n)), u = Math.floor(Math.sqrt(n));
      return zahl(`Berechne √${n} mit dem Taschenrechner und runde auf zwei Nachkommastellen.`, w, `√${n} liegt zwischen ${u} und ${u + 1} (weil ${u * u} < ${n} < ${(u + 1) * (u + 1)}); gerundet ${z(w)}.`, "", 0.011);
    }
    if (art === 6) {
      const P = rng.pick([[2, 8], [3, 12], [5, 20], [2, 18], [3, 27], [6, 24], [5, 45], [7, 28], [2, 32], [3, 48], [10, 40], [6, 54]]);
      const e = Math.sqrt(P[0] * P[1]);
      return zahl(`Berechne √${P[0]} · √${P[1]} ohne Taschenrechner.`, e, `√a · √b = √(a · b): √${P[0]} · √${P[1]} = √${P[0] * P[1]} = ${e}.`);
    }
    if (art === 7) {
      const A = rng.pick([2, 3, 5, 8, 10, 12, 18, 20, 30, 50, 72, 98, 128, 200]);
      const s = r2(Math.sqrt(A));
      return zahl(`Ein Quadrat hat den Flächeninhalt ${A} cm². Wie lang ist eine Seite? (auf zwei Nachkommastellen)`, s, `Seite = √A = √${A} ≈ ${z(s)} cm.`, "cm", 0.011);
    }
    const n = rng.pick([2, 3, 5, 7, 10, 11, 13, 17, 20, 30]), x0 = Math.round(Math.sqrt(n)) || 1;
    const x1 = r2((x0 + n / x0) / 2);
    return zahl(`Heron-Verfahren für √${n} mit Startwert ${x0}: Berechne den nächsten Näherungswert x₁ = (x₀ + ${n}/x₀) : 2. (auf zwei Nachkommastellen)`, x1, `x₁ = (${x0} + ${n}/${x0}) : 2 = (${x0} + ${z(n / x0)}) : 2 = ${z(x1)}. Zum Vergleich: √${n} ≈ ${z(Math.sqrt(n))}.`, "", 0.011);
  };

  // ---------- Generator: Katheten- und Höhensatz (Kapitel 6, Vertiefen) ----------
  const genKathetensatz = (rng) => {
    const art = rng.int(1, 6);
    if (art === 1) {
      return wahl("Rechtwinkliges Dreieck mit Hypotenuse c, Höhe h und Hypotenusenabschnitten p (unter a) und q (unter b). Wie lautet der Höhensatz?",
        ["h² = p · q", "h² = p + q", "h = p · q", "h² = c · p"], 0, "Höhensatz: Das Quadrat über der Höhe ist so groß wie das Rechteck aus den beiden Hypotenusenabschnitten: h² = p · q.");
    }
    if (art === 2) {
      return wahl("Rechtwinkliges Dreieck, Hypotenuse c = p + q, p liegt unter der Kathete a. Wie lautet der Kathetensatz für a?",
        ["a² = c · p", "a² = c · q", "a² = p · q", "a = c · p"], 0, "Kathetensatz: Das Quadrat über einer Kathete ist so groß wie das Rechteck aus der Hypotenuse und dem anliegenden Hypotenusenabschnitt: a² = c · p.");
    }
    const p = rng.int(2, 12), q = rng.int(2, 12), c = p + q;
    if (art === 3) { const h = r2(Math.sqrt(p * q)); return zahl(`Die Hypotenusenabschnitte sind p = ${p} cm und q = ${q} cm. Wie lang ist die Höhe h? (auf zwei Nachkommastellen)`, h, `h² = p · q = ${p} · ${q} = ${p * q}, also h = √${p * q} ≈ ${z(h)} cm.`, "cm", 0.011); }
    if (art === 4) { const a = r2(Math.sqrt(c * p)); return zahl(`Hypotenuse c = ${c} cm, Hypotenusenabschnitt p = ${p} cm (unter der Kathete a). Wie lang ist a? (auf zwei Nachkommastellen)`, a, `a² = c · p = ${c} · ${p} = ${c * p}, also a = √${c * p} ≈ ${z(a)} cm.`, "cm", 0.011); }
    if (art === 5) { const a2 = c * p; return zahl(`Die Kathete a ist √${a2} cm lang, die Hypotenuse c = ${c} cm. Wie lang ist der Hypotenusenabschnitt p unter a?`, p, `a² = c · p → p = a²/c = ${a2}/${c} = ${p} cm.`, "cm"); }
    return zahl(`Für die Höhe gilt h² = ${p * q} cm², der Hypotenusenabschnitt p = ${p} cm. Wie lang ist der zweite Abschnitt q?`, q, `h² = p · q → q = h²/p = ${p * q}/${p} = ${q} cm.`, "cm");
  };

  // ---------- Generator: Zehnerpotenzen, große und kleine Zahlen, Einheiten (Kapitel 8) ----------
  const VORSATZ = [["Kilo (k)", 3], ["Mega (M)", 6], ["Giga (G)", 9], ["Tera (T)", 12], ["Milli (m)", -3], ["Mikro (µ)", -6], ["Nano (n)", -9]];
  const NAMEN = [["Tausend", 3], ["eine Million", 6], ["eine Milliarde", 9], ["eine Billion", 12], ["eine Billiarde", 15], ["eine Trillion", 18]];
  const HIMMEL = [["Mond", 384000], ["Sonne", 150000000], ["Mars (kleinster Abstand)", 56000000], ["Venus (kleinster Abstand)", 40000000], ["Jupiter (kleinster Abstand)", 630000000], ["Saturn (kleinster Abstand)", 1200000000]];
  const genZehnerpotenzen = (rng) => {
    const art = rng.int(1, 8);
    if (art === 1) {
      const m = rng.pick([1.5, 2, 3.2, 4.5, 6, 7.8, 9.1, 2.5]), e = rng.int(3, 9); const x = Math.round(m * 10 ** e);
      return wahlU(`Schreibe ${tausender(x)} in wissenschaftlicher Schreibweise (a · 10ⁿ mit 1 ≤ a < 10).`, zp(m, e), [zp(m, e + 1), zp(m, e - 1), zp(m * 10, e - 1)], `Komma hinter die erste Ziffer: ${z(m)}; das Komma wurde um ${e} Stellen verschoben → ${zp(m, e)}.`);
    }
    if (art === 2) { const m = rng.pick([1.2, 2, 3.5, 4, 6.3, 7, 8.4]), e = rng.int(2, 7); const x = Math.round(m * 10 ** e); return zahl(`Wie viel ist ${zp(m, e)} als ganze Zahl?`, x, `Komma um ${e} Stellen nach rechts: ${tausender(x)}.`, "", 0.5); }
    if (art === 3) { const m = rng.pick([1, 2, 2.5, 4, 5, 7.5]), e = rng.int(1, 6); const x = m / 10 ** e; return zahl(`Wie viel ist ${zp(m, -e)} als Dezimalzahl?`, x, `Komma um ${e} Stellen nach links: ${String(x).replace(".", ",")}.`, "", x / 1000); }
    if (art === 4) {
      const V = rng.pick(VORSATZ);
      return zahl(`Vorsätze bei Einheiten: Der Vorsatz ${V[0]} steht für 10ⁿ. Wie groß ist n?`, V[1], `${V[0]} bedeutet 10${hoch(V[1])}.`);
    }
    if (art === 5) {
      const V = rng.pick([["km", 1000, "m"], ["MW", 1000000, "W"], ["GB", 1000000000, "Byte"], ["kg", 1000, "g"], ["GW", 1000000000, "W"], ["MJ", 1000000, "J"]]), m = rng.pick([1.5, 2, 2.4, 3, 4.5, 6, 7.2]);
      const x = r2(m * V[1]);
      return zahl(`Rechne um: ${z(m)} ${V[0]} = ? ${V[2]}`, x, `1 ${V[0]} = ${tausender(V[1])} ${V[2]}, also ${z(m)} · ${tausender(V[1])} = ${tausender(x)} ${V[2]}.`, V[2], 0.5);
    }
    if (art === 6) {
      const a = rng.int(-6, 9), b = rng.int(-6, 9); const mal = rng() < 0.5;
      return zahl(`Wie groß ist der Exponent: 10${hoch(a)} ${mal ? "·" : ":"} 10${hoch(b)} = 10ⁿ`, mal ? a + b : a - b, mal ? `Beim Multiplizieren werden die Exponenten addiert: ${a} + (${b}) = ${a + b}.` : `Beim Dividieren werden die Exponenten subtrahiert: ${a} − (${b}) = ${a - b}.`);
    }
    if (art === 7) {
      const H = rng.pick(HIMMEL); const t = r2(H[1] / 300000);
      return zahl(`Licht legt etwa 300 000 km in jeder Sekunde zurück. Die Entfernung Erde–${H[0]} beträgt etwa ${tausender(H[1])} km. Wie viele Sekunden ist das Licht unterwegs?`, t, `t = s : v = ${tausender(H[1])} km : 300 000 km/s ≈ ${z(t)} s${t > 60 ? " (≈ " + z(t / 60) + " min)" : ""}.`, "s", Math.max(0.05, t * 0.001));
    }
    const N = rng.pick(NAMEN);
    return zahl(`Welche Zehnerpotenz ist ${N[0]}? 10ⁿ mit n = ?`, N[1], `${N[0]} = 1 mit ${N[1]} Nullen = 10${hoch(N[1])}.`);
  };

  FACH.themen.push(
    {
      id: "wurzeln", kapitel: K2, titel: "Quadratwurzeln, dritte Wurzeln & irrationale Zahlen",
      kurz: "√ und ∛ berechnen, teilweise radizieren, rational oder irrational, Heron-Verfahren",
      erklaerung: `<p>Die <b>Quadratwurzel</b> √a ist die nicht negative Zahl, die mit sich selbst multipliziert a ergibt: √49 = 7, weil 7 · 7 = 49. Die <b>dritte Wurzel</b> ∛a fragt nach einer Zahl, die dreimal mit sich selbst multipliziert a ergibt: ∛125 = 5.</p>
<p><b>Rechenregeln:</b> √a · √b = √(a · b) und √a : √b = √(a : b). Achtung: √a + √b ist <i>nicht</i> √(a + b)! Mit der Produktregel kannst du <b>teilweise radizieren</b>: √50 = √(25 · 2) = 5 · √2.</p>
<p><b>Rational oder irrational?</b> Rationale Zahlen lassen sich als Bruch schreiben (endliche oder periodische Dezimalzahl). Wurzeln aus Zahlen, die keine Quadratzahlen sind (√2, √3, √10), und π sind <b>irrational</b>: unendlich viele Nachkommastellen ohne Periode. Rationale und irrationale Zahlen zusammen heißen <b>reelle Zahlen</b> ℝ.</p>
<p><b>Näherungswerte:</b> √40 liegt zwischen 6 und 7, weil 36 < 40 < 49. Das <b>Heron-Verfahren</b> verbessert einen Startwert x₀ Schritt für Schritt: x₁ = (x₀ + a/x₀) : 2.</p>
<p>Typischer Fehler: √16 ist 4, nicht ±4 – die Wurzel selbst ist immer positiv; erst die Gleichung x² = 16 hat zwei Lösungen.</p>`,
      gen: genWurzeln,
    },
    {
      id: "kathetensatz", kapitel: K6, titel: "Katheten- und Höhensatz",
      kurz: "a² = c · p, b² = c · q, h² = p · q im rechtwinkligen Dreieck (E-Kurs, Vertiefen)",
      erklaerung: `<p>Zeichnest du im rechtwinkligen Dreieck die <b>Höhe h</b> auf die Hypotenuse c, teilt sie c in zwei <b>Hypotenusenabschnitte</b>: p liegt unter der Kathete a, q unter der Kathete b. Es gilt c = p + q.</p>
<p><b>Kathetensatz:</b> a² = c · p und b² = c · q. Das Quadrat über einer Kathete hat denselben Flächeninhalt wie das Rechteck aus Hypotenuse und anliegendem Abschnitt.</p>
<p><b>Höhensatz:</b> h² = p · q. Das Quadrat über der Höhe ist so groß wie das Rechteck aus beiden Abschnitten.</p>
<p>Beispiel: p = 4 cm, q = 9 cm → h = √36 = 6 cm, a = √(13 · 4) = √52 ≈ 7,21 cm. Zur Kontrolle: a² + b² = 52 + 117 = 169 = 13² – der Satz des Pythagoras stimmt.</p>
<p>Merkhilfe: Beide Sätze folgen aus der Ähnlichkeit der drei Teildreiecke; zusammen mit Pythagoras bilden sie die <b>Satzgruppe des Pythagoras</b>.</p>`,
      gen: genKathetensatz,
    },
    {
      id: "zehnerpotenzen", kapitel: K8, titel: "Große und kleine Zahlen: Zehnerpotenzen & Einheiten",
      kurz: "Wissenschaftliche Schreibweise a · 10ⁿ, Vorsätze kilo bis nano, Sonnensystem-Aufgaben (E-Kurs)",
      erklaerung: `<p>Sehr große und sehr kleine Zahlen schreibt man als <b>Zehnerpotenz</b>: 1 000 000 = 10⁶ (1 mit 6 Nullen), 0,001 = 10⁻³. In der <b>wissenschaftlichen Schreibweise</b> steht vor der Zehnerpotenz eine Zahl zwischen 1 und 10: 150 000 000 km = 1,5 · 10⁸ km; 0,000 25 = 2,5 · 10⁻⁴.</p>
<p><b>Rechnen:</b> 10ᵃ · 10ᵇ = 10ᵃ⁺ᵇ und 10ᵃ : 10ᵇ = 10ᵃ⁻ᵇ. Also 10⁵ · 10³ = 10⁸ und 10² : 10⁵ = 10⁻³.</p>
<p><b>Vorsätze bei Einheiten:</b> kilo = 10³, Mega = 10⁶, Giga = 10⁹, Tera = 10¹²; milli = 10⁻³, mikro (µ) = 10⁻⁶, nano = 10⁻⁹. 2,4 MW = 2 400 000 W; 5 µm = 0,000 005 m.</p>
<p><b>Namen:</b> Tausend 10³, Million 10⁶, Milliarde 10⁹, Billion 10¹², Billiarde 10¹⁵, Trillion 10¹⁸.</p>
<p>Beispiel aus dem Sonnensystem: Licht braucht für 150 000 000 km zur Sonne etwa 150 000 000 : 300 000 = 500 s, also gut 8 Minuten. Typischer Fehler: Beim Verschieben des Kommas die Stellen falsch zählen – immer prüfen, ob die Zahl größer oder kleiner als 1 ist.</p>`,
      gen: genZehnerpotenzen,
    },
  );
})();
