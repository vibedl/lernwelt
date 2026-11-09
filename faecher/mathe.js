// Lernwelt – Fach Mathematik (Klasse 9): Aufgaben werden per Generator erzeugt und selbst nachgerechnet
"use strict";
(function () {
  const r2 = (x) => Math.round(x * 100) / 100;
  const r1 = (x) => Math.round(x * 10) / 10;
  const z = (x) => fz(x);
  const zahl = (f, l, info, einheit, tol) => ({ t: "zahl", f, l, info, einheit, tol: tol ?? (Number.isInteger(l) ? 0.01 : 0.05) });
  const wahl = (f, a, r, info) => ({ t: "wahl", f, a, r, info });
  // Auswahl mit richtiger Antwort vorn; doppelte oder gleiche Ablenker werden entfernt
  const wahlU = (f, richtig, falsche, info) => { const u = [...new Set(falsche)].filter((x) => x !== richtig).slice(0, 3); while (u.length < 2) u.push(u.length ? "keine der Angaben" : richtig + " + 1"); return { t: "wahl", f, a: [richtig, ...u], r: 0, info }; };
  const ggT = (a, b) => (b ? ggT(b, a % b) : Math.abs(a));
  const bruch = (zl, n) => { const g = ggT(zl, n); return `${zl / g}/${n / g}`; };
  const vz = (n) => (n < 0 ? "−" : "+") + " " + Math.abs(n);
  const TRIPEL = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15], [12, 16, 20], [20, 21, 29], [9, 40, 41]];

  const THEMEN = [
    {
      id: "prozent", titel: "Prozent- und Zinsrechnung", kurz: "Grundwert, Prozentwert, Prozentsatz, Zinsen, Zinseszins",
      erklaerung: `<p><b>Grundformel:</b> Prozentwert W = G · p/100. Daraus: G = W · 100/p und p = W · 100/G.</p><p><b>Erhöhen/Vermindern:</b> neuer Wert = alter Wert · (1 ± p/100). 20 % Rabatt → mal 0,8; 19 % MwSt. dazu → mal 1,19.</p><p><b>Zinsen:</b> Z = K · p/100 · t (t in Jahren; Monate: t = m/12). <b>Zinseszins:</b> K<sub>n</sub> = K · (1 + p/100)<sup>n</sup>.</p><p>Typischer Fehler: Beim Rückrechnen vom Endpreis <i>nicht</i> p % abziehen, sondern durch (1 + p/100) teilen!</p>`,
      gen: (rng) => {
        const art = rng.int(1, 6);
        if (art === 1) { const G = rng.pick([80, 120, 150, 200, 250, 400, 500, 640, 800, 1200]), p = rng.pick([5, 10, 12, 15, 20, 25, 30, 35, 40, 45, 60, 75]); return zahl(`Wie viel sind ${p} % von ${G} €?`, r2(G * p / 100), `W = ${G} · ${p}/100 = ${z(G * p / 100)} €`, "€"); }
        if (art === 2) { const G = rng.pick([80, 120, 150, 200, 250, 400, 500, 800]), p = rng.pick([5, 10, 20, 25, 40, 50, 75]); const W = G * p / 100; return zahl(`${z(W)} € sind ${p} % vom Grundwert. Wie groß ist der Grundwert?`, G, `G = W · 100/p = ${z(W)} · 100/${p} = ${G} €`, "€"); }
        if (art === 3) { const G = rng.pick([40, 50, 80, 120, 200, 250, 400, 500]), p = rng.pick([5, 10, 15, 20, 25, 30, 40, 60]); const W = G * p / 100; return zahl(`Von ${G} Schülern fahren ${z(W)} mit dem Rad. Wie viel Prozent sind das?`, p, `p = W · 100/G = ${z(W)} · 100/${G} = ${p} %`, "%"); }
        if (art === 4) { const alt = rng.pick([40, 50, 60, 80, 120, 150, 200, 250]), p = rng.pick([10, 15, 20, 25, 30, 50]); const rabatt = rng() < 0.5; const neu = r2(alt * (1 + (rabatt ? -p : p) / 100)); return zahl(`Eine Jacke kostet ${alt} €. Der Preis wird um ${p} % ${rabatt ? "gesenkt" : "erhöht"}. Neuer Preis?`, neu, `${alt} · ${z(1 + (rabatt ? -p : p) / 100)} = ${z(neu)} €`, "€"); }
        if (art === 5) { const K = rng.pick([500, 800, 1000, 1500, 2000, 2500, 4000, 5000]), p = rng.pick([1, 1.5, 2, 2.5, 3, 4, 5]), t = rng.pick([1, 2, 3, 0.5]); const Z = r2(K * p / 100 * t); return zahl(`${K} € werden ${t === 0.5 ? "ein halbes Jahr" : t + " Jahre"} zu ${z(p)} % angelegt (einfache Zinsen). Wie hoch sind die Zinsen?`, Z, `Z = K · p/100 · t = ${K} · ${z(p)}/100 · ${z(t)} = ${z(Z)} €`, "€"); }
        const K = rng.pick([1000, 2000, 5000, 10000]), p = rng.pick([2, 3, 4, 5, 10]), n = rng.pick([2, 3]); const Kn = r2(K * (1 + p / 100) ** n);
        return zahl(`${K} € liegen ${n} Jahre zu ${p} % mit Zinseszins. Wie hoch ist das Kapital danach? (auf Cent)`, Kn, `K · (1 + p/100)ⁿ = ${K} · ${z(1 + p / 100)}^${n} = ${z(Kn)} €`, "€", 0.02);
      },
    },
    {
      id: "aehnlichkeit", titel: "Ähnlichkeit: Maßstab, Streckung, Strahlensätze", kurz: "Maßstab umrechnen, Streckfaktor k, fehlende Längen",
      erklaerung: `<p><b>Maßstab 1 : n</b> – 1 cm auf der Karte sind n cm in Wirklichkeit. Beispiel 1 : 50 000 → 1 cm ≙ 500 m.</p><p><b>Zentrische Streckung</b> mit Faktor k: Alle Längen werden mit k multipliziert, Winkel bleiben gleich, der <b>Flächeninhalt</b> wird mit k² multipliziert.</p><p><b>Strahlensätze:</b> Bei zwei sich schneidenden Geraden und Parallelen gilt ZA : ZA' = ZB : ZB' (Abschnitte auf den Strahlen) und ZA : ZA' = AB : A'B' (Parallelenstücke verhalten sich wie die Abschnitte vom Scheitel Z aus).</p><p>Rechenweg: Verhältnis aufstellen, über Kreuz multiplizieren, nach der Unbekannten auflösen.</p>`,
      gen: (rng) => {
        const art = rng.int(1, 5);
        if (art === 1) { const m = rng.pick([25000, 50000, 100000, 200000, 500000]), cm = rng.pick([2, 3, 4, 5, 6, 8, 10, 12]); const km = r2(cm * m / 100000); return zahl(`Karte im Maßstab 1 : ${m.toLocaleString("de-DE")}. Zwei Orte sind auf der Karte ${cm} cm entfernt. Wie weit in Wirklichkeit (km)?`, km, `${cm} cm · ${m.toLocaleString("de-DE")} = ${(cm * m).toLocaleString("de-DE")} cm = ${z(km)} km`, "km"); }
        if (art === 2) { const m = rng.pick([20, 50, 100, 200, 500]), real = rng.pick([4, 6, 8, 10, 12, 15, 20, 25]); const cm = r2(real * 100 / m); return zahl(`Modell im Maßstab 1 : ${m}. Das echte Haus ist ${real} m lang. Wie lang ist es im Modell (cm)?`, cm, `${real} m = ${real * 100} cm; ${real * 100} / ${m} = ${z(cm)} cm`, "cm"); }
        if (art === 3) { const a = rng.pick([2, 3, 4, 5, 6, 8]), k = rng.pick([1.5, 2, 2.5, 3, 4, 0.5]); return zahl(`Zentrische Streckung mit k = ${z(k)}: Eine Strecke ist ${a} cm lang. Wie lang ist ihr Bild?`, r2(a * k), `${a} · ${z(k)} = ${z(a * k)} cm`, "cm"); }
        if (art === 4) { const A = rng.pick([4, 6, 8, 10, 12, 20]), k = rng.pick([2, 3, 4, 0.5, 1.5]); return zahl(`Ein Dreieck mit Flächeninhalt ${A} cm² wird mit k = ${z(k)} gestreckt. Flächeninhalt des Bildes?`, r2(A * k * k), `Fläche · k² = ${A} · ${z(k * k)} = ${z(A * k * k)} cm²`, "cm²"); }
        const a = rng.pick([2, 3, 4, 5, 6]), f = rng.pick([1.5, 2, 2.5, 3]), b = rng.pick([3, 4, 5, 6, 8]); const a2 = r2(a * f), b2 = r2(b * f);
        return zahl(`Strahlensatz: Auf dem ersten Strahl gilt ZA = ${a} cm und ZA' = ${z(a2)} cm. Auf dem zweiten Strahl ist ZB = ${b} cm. Wie lang ist ZB'?`, b2, `ZB' = ZB · ZA'/ZA = ${b} · ${z(a2)}/${a} = ${z(b2)} cm`, "cm");
      },
    },
    {
      id: "pythagoras", titel: "Satz des Pythagoras", kurz: "a² + b² = c², Hypotenuse und Kathete, Diagonalen",
      erklaerung: `<p>Im <b>rechtwinkligen</b> Dreieck gilt: <b>a² + b² = c²</b>. c ist die <b>Hypotenuse</b> – die längste Seite, gegenüber dem rechten Winkel. a und b sind die <b>Katheten</b>.</p><p>Hypotenuse gesucht: c = √(a² + b²). Kathete gesucht: a = √(c² − b²).</p><p>Anwendungen: Diagonale im Rechteck d = √(l² + b²), Raumdiagonale im Quader d = √(a² + b² + c²), Höhe im gleichschenkligen Dreieck, Leiter an der Wand.</p><p>Fehlerquelle: Erst quadrieren, dann addieren – nicht die Seiten addieren und dann quadrieren!</p>`,
      gen: (rng) => {
        const [a, b, c] = rng.pick(TRIPEL), f = rng.pick([1, 1, 2, 0.5, 10]); const A = r2(a * f), B = r2(b * f), C = r2(c * f);
        const art = rng.int(1, 5);
        if (art === 1) return zahl(`Rechtwinkliges Dreieck, Katheten a = ${z(A)} cm und b = ${z(B)} cm. Wie lang ist die Hypotenuse c?`, C, `c = √(${z(A)}² + ${z(B)}²) = √${z(A * A + B * B)} = ${z(C)} cm`, "cm");
        if (art === 2) return zahl(`Hypotenuse c = ${z(C)} cm, Kathete a = ${z(A)} cm. Wie lang ist die andere Kathete b?`, B, `b = √(${z(C)}² − ${z(A)}²) = √${z(C * C - A * A)} = ${z(B)} cm`, "cm");
        if (art === 3) return zahl(`Ein Rechteck ist ${z(A)} m lang und ${z(B)} m breit. Wie lang ist die Diagonale?`, C, `d = √(${z(A)}² + ${z(B)}²) = ${z(C)} m`, "m");
        if (art === 4) return zahl(`Eine ${z(C)} m lange Leiter lehnt an einer Wand; ihr Fuß steht ${z(A)} m von der Wand entfernt. Wie hoch reicht sie?`, B, `h = √(${z(C)}² − ${z(A)}²) = ${z(B)} m`, "m");
        const recht = rng() < 0.5; const s = recht ? [A, B, C] : [A, B, r2(C + rng.pick([0.5, 1, 2]) * (f >= 1 ? 1 : 0.5))];
        const sort = s.slice().sort((x, y) => x - y);
        return wahl(`Ist ein Dreieck mit den Seiten ${z(s[0])} cm, ${z(s[1])} cm und ${z(s[2])} cm rechtwinklig? (längste Seite = Hypotenuse)`, ["Ja", "Nein"], recht ? 0 : 1, `Prüfe: ${z(sort[0])}² + ${z(sort[1])}² = ${z(sort[0] ** 2 + sort[1] ** 2)}, ${z(sort[2])}² = ${z(sort[2] ** 2)} → ${recht ? "gleich, also rechtwinklig" : "ungleich, also nicht rechtwinklig"}.`);
      },
    },
    {
      id: "quadratisch", titel: "Quadratische Gleichungen & Parabeln", kurz: "pq-Formel, Scheitelpunktform, Nullstellen",
      erklaerung: `<p><b>Normalform</b> x² + px + q = 0 → <b>pq-Formel:</b> x<sub>1,2</sub> = −p/2 ± √((p/2)² − q).</p><p>Die <b>Diskriminante</b> D = (p/2)² − q sagt, wie viele Lösungen es gibt: D &gt; 0 zwei, D = 0 eine, D &lt; 0 keine.</p><p><b>Scheitelpunktform</b> y = a(x − d)² + e → Scheitel S(d | e). Achtung Vorzeichen: y = (x + 3)² − 2 hat den Scheitel (−3 | −2). a &gt; 0: nach oben geöffnet; |a| &lt; 1: gestaucht (breiter).</p><p>Nullstellen einer Parabel = Lösungen von y = 0. Satz von Vieta zum Prüfen: x<sub>1</sub> + x<sub>2</sub> = −p, x<sub>1</sub> · x<sub>2</sub> = q.</p>`,
      gen: (rng) => {
        const art = rng.int(1, 5);
        const x1 = rng.int(-6, 6), x2 = rng.int(-6, 6); const p = -(x1 + x2), q = x1 * x2;
        const term = `x² ${p === 0 ? "" : vz(p) + "x "}${q === 0 ? "" : vz(q)}`.trim();
        if (art <= 2) { if (x1 === x2) return zahl(`Löse ${term} = 0. (Es gibt nur eine Lösung.)`, x1, `D = 0, also x = −p/2 = ${x1}`); const gross = Math.max(x1, x2), klein = Math.min(x1, x2); const g = rng() < 0.5; return zahl(`Löse ${term} = 0. Gib die ${g ? "größere" : "kleinere"} Lösung an.`, g ? gross : klein, `pq-Formel: x = ${z(-p / 2)} ± √(${z((p / 2) ** 2)} − (${q})) → x₁ = ${klein}, x₂ = ${gross}`); }
        if (art === 3) { const d = rng.int(-5, 5), e = rng.int(-6, 6), a = rng.pick([1, 1, -1, 2, 0.5]); const f = `y = ${a === 1 ? "" : a === -1 ? "−" : z(a) + "·"}${d === 0 ? "x²" : `(x ${vz(-d)})²`} ${e === 0 ? "" : vz(e)}`.trim(); const k = rng() < 0.5; return zahl(`Parabel ${f}. Gib die ${k ? "x" : "y"}-Koordinate des Scheitelpunkts an.`, k ? d : e, `Scheitelpunktform y = a(x − d)² + e → S(${d} | ${e})`); }
        if (art === 4) { const pp = rng.int(-6, 6), qq = rng.int(-8, 8); const D = (pp / 2) ** 2 - qq; const n = D > 0 ? 2 : D === 0 ? 1 : 0; return wahl(`Wie viele Lösungen hat x² ${vz(pp)}x ${vz(qq)} = 0?`, ["keine", "eine", "zwei"], n, `D = (p/2)² − q = ${z((pp / 2) ** 2)} − (${qq}) = ${z(D)} → ${n === 2 ? "D > 0: zwei" : n === 1 ? "D = 0: eine" : "D < 0: keine"} Lösung(en).`); }
        const a = rng.pick([1, -1, 2, 0.5, -0.5, 3]); return wahl(`Die Parabel y = ${z(a)}x² + 1 ist …`, ["nach oben geöffnet und gestreckt (schmaler)", "nach oben geöffnet und gestaucht (breiter)", "nach unten geöffnet und gestreckt (schmaler)", "nach unten geöffnet und gestaucht (breiter)", "eine (verschobene) Normalparabel"], Math.abs(a) === 1 ? 4 : a > 0 ? (Math.abs(a) > 1 ? 0 : 1) : (Math.abs(a) > 1 ? 2 : 3), `a = ${z(a)}: Vorzeichen → Öffnung; |a| > 1 gestreckt, |a| < 1 gestaucht, |a| = 1 Normalparabel.`);
      },
    },
    {
      id: "potenzen", titel: "Potenzen, Wurzeln, Zehnerpotenzen", kurz: "Potenzgesetze, negative Exponenten, wissenschaftliche Schreibweise",
      erklaerung: `<p><b>Potenzgesetze:</b> aᵐ · aⁿ = aᵐ⁺ⁿ · aᵐ : aⁿ = aᵐ⁻ⁿ · (aᵐ)ⁿ = aᵐ·ⁿ · aⁿ · bⁿ = (a·b)ⁿ.</p><p>a⁰ = 1 · a⁻ⁿ = 1/aⁿ · a^(1/2) = √a.</p><p><b>Zehnerpotenzen:</b> 3,5 · 10⁴ = 35 000; 2 · 10⁻³ = 0,002. Wissenschaftliche Schreibweise: eine Ziffer vor dem Komma.</p><p><b>Wurzeln:</b> √(a·b) = √a · √b; teilweise Wurzelziehen √50 = √25 · √2 = 5√2. Quadratzahlen bis 20² = 400 kennen!</p>`,
      gen: (rng) => {
        const art = rng.int(1, 6);
        if (art === 1) { const a = rng.pick(["2", "3", "5", "10", "x"]), m = rng.int(2, 6), n = rng.int(2, 6); return wahlU(`Vereinfache: ${a}^${m} · ${a}^${n}`, `${a}^${m + n}`, [`${a}^${m * n}`, `${a}^${Math.abs(m - n) || 1}`, `${a}^${m + n + 1}`, `${a}^${m + n - 1}`], `Gleiche Basis, mal → Exponenten addieren: ${m} + ${n} = ${m + n}.`); }
        if (art === 2) { const m = rng.int(2, 4), n = rng.int(2, 4); return wahlU(`Vereinfache: (x^${m})^${n}`, `x^${m * n}`, [`x^${m + n}`, `x^${m ** n}`, `${m * n}x`, `x^${m * n + 1}`], `Potenz einer Potenz → Exponenten multiplizieren: ${m} · ${n} = ${m * n}.`); }
        if (art === 3) { const b = rng.pick([2, 3, 4, 5, 10]), n = rng.int(1, 3); return zahl(`Berechne ${b}^(−${n}) als Dezimalzahl oder Bruch.`, 1 / b ** n, `${b}⁻${n} = 1/${b}^${n} = 1/${b ** n}`, "", 0.0005); }
        if (art === 4) { const mant = rng.pick([1.2, 2.5, 3, 4.7, 6, 7.5, 8.1]), e = rng.int(2, 6); return zahl(`Schreibe als Zahl: ${z(mant)} · 10^${e}`, mant * 10 ** e, `Komma um ${e} Stellen nach rechts: ${(mant * 10 ** e).toLocaleString("de-DE")}`); }
        if (art === 5) { const n = rng.int(11, 25); return zahl(`Berechne √${n * n}`, n, `${n}² = ${n * n}`); }
        const k = rng.pick([2, 3, 5]), q = rng.pick([2, 3, 4, 5]); const unter = k * q * q; return wahlU(`Ziehe teilweise die Wurzel: √${unter}`, `${q}√${k}`, [`${k}√${q}`, `${q * k}√${k}`, `${q}√${k * k}`, `${q + 1}√${k}`], `√${unter} = √(${q * q} · ${k}) = ${q}√${k}`);
      },
    },
    {
      id: "gleichungen", titel: "Lineare Gleichungen & Gleichungssysteme", kurz: "Umformen, Klammern, LGS mit zwei Unbekannten",
      erklaerung: `<p><b>Äquivalenzumformungen:</b> Auf beiden Seiten dasselbe tun (+, −, ·, : mit Zahlen ≠ 0). Ziel: x allein auf einer Seite.</p><p>Reihenfolge: Klammern auflösen → zusammenfassen → x-Terme auf eine Seite, Zahlen auf die andere → durch den Faktor vor x teilen.</p><p><b>LGS (zwei Gleichungen, zwei Unbekannte):</b> <i>Gleichsetzungsverfahren</i> (beide nach y auflösen), <i>Einsetzungsverfahren</i> (eine Gleichung nach x oder y auflösen und einsetzen), <i>Additionsverfahren</i> (Gleichungen so vervielfachen, dass eine Variable beim Addieren wegfällt).</p><p>Immer die Probe machen: Lösung in <b>beide</b> Gleichungen einsetzen!</p>`,
      gen: (rng) => {
        const art = rng.int(1, 4);
        if (art === 1) { const x = rng.int(-8, 9), a = rng.pick([2, 3, 4, 5, 6, 7]), b = rng.int(-12, 12); const c = a * x + b; return zahl(`Löse: ${a}x ${vz(b)} = ${c}`, x, `${a}x = ${c - b} → x = ${c - b}/${a} = ${x}`); }
        if (art === 2) { const x = rng.int(-6, 8), a = rng.int(2, 6), b = rng.int(1, 9), d = rng.pick([1, 2, 3, 4, 5].filter((v) => v !== a)), konst = rng.int(-10, 10); const rechts = a * (x + b) - konst - d * x; return zahl(`Löse: ${a}(x + ${b}) ${vz(-konst)} = ${d}x ${vz(rechts)}`, x, `Klammer: ${a}x + ${a * b}; zusammenfassen: ${a}x ${vz(a * b - konst)} = ${d}x ${vz(rechts)} → ${a - d}x = ${rechts - (a * b - konst)} → x = ${x}`); }
        if (art === 3) { const x = rng.int(-5, 6), y = rng.int(-5, 6); const a1 = rng.int(1, 4), b1 = rng.int(1, 4), a2 = rng.int(1, 4), b2 = rng.int(1, 4); const c1 = a1 * x + b1 * y, c2 = a2 * x - b2 * y; const g = rng() < 0.5; return zahl(`LGS: (I) ${a1}x + ${b1}y = ${c1}   (II) ${a2}x − ${b2}y = ${c2}. Bestimme ${g ? "x" : "y"}.`, g ? x : y, `Lösung: x = ${x}, y = ${y} (Probe I: ${a1}·${x} + ${b1}·${y} = ${c1} ✓)`); }
        const x = rng.int(-5, 6), y = rng.int(-5, 6); const m1 = rng.pick([1, 2, 3, -1, -2]), m2 = rng.pick([1, 2, 3, -1, -2, 4].filter((m) => m !== m1)); const n1 = y - m1 * x, n2 = y - m2 * x; const g = rng() < 0.5;
        return zahl(`Gleichsetzen: y = ${m1}x ${vz(n1)} und y = ${m2}x ${vz(n2)}. Bestimme ${g ? "x" : "y"} des Schnittpunkts.`, g ? x : y, `${m1}x ${vz(n1)} = ${m2}x ${vz(n2)} → x = ${x}, y = ${y}`);
      },
    },
    {
      id: "funktionen", titel: "Lineare Funktionen", kurz: "Steigung m, y-Achsenabschnitt n, Funktionswerte, Geraden lesen",
      erklaerung: `<p><b>y = m·x + n</b>: m = Steigung (pro 1 nach rechts geht es m nach oben), n = Schnittpunkt mit der y-Achse (0 | n).</p><p><b>Steigung aus zwei Punkten:</b> m = (y₂ − y₁)/(x₂ − x₁). Dann n = y₁ − m·x₁.</p><p>Nullstelle: y = 0 setzen → x = −n/m. Parallele Geraden haben gleiches m.</p><p>Punktprobe: Punkt einsetzen – stimmt die Gleichung, liegt er auf der Geraden.</p>`,
      gen: (rng) => {
        const art = rng.int(1, 5);
        const m = rng.pick([1, 2, 3, -1, -2, 0.5, -0.5, 1.5]), n = rng.int(-6, 6);
        const mt = m === 1 ? "" : m === -1 ? "−" : z(m);
        const f = `y = ${mt}x ${n === 0 ? "" : vz(n)}`.trim();
        if (art === 1) { const x = rng.int(-4, 6); return zahl(`f(x) = ${f.slice(4)}. Berechne f(${x}).`, r2(m * x + n), `${z(m)} · ${x} ${vz(n)} = ${z(m * x + n)}`); }
        if (art === 2) { const x1 = rng.int(-4, 3), x2 = x1 + rng.pick([1, 2, 4]); const y1 = r2(m * x1 + n), y2 = r2(m * x2 + n); return zahl(`Eine Gerade geht durch P(${x1} | ${z(y1)}) und Q(${x2} | ${z(y2)}). Wie groß ist die Steigung m?`, m, `m = (${z(y2)} − ${z(y1)}) / (${x2} − ${x1}) = ${z(m)}`); }
        if (art === 3) { const x1 = rng.int(-4, 4); const y1 = r2(m * x1 + n); return zahl(`Gerade mit m = ${z(m)} durch P(${x1} | ${z(y1)}). Bestimme den y-Achsenabschnitt n.`, n, `n = y − m·x = ${z(y1)} − ${z(m)}·${x1} = ${n}`); }
        if (art === 4) { if (n === 0) return zahl(`Nullstelle von ${f}?`, 0, "y = 0 bei x = 0."); return zahl(`Bestimme die Nullstelle von ${f}.`, r2(-n / m), `0 = ${z(m)}x ${vz(n)} → x = ${-n}/${z(m)} = ${z(-n / m)}`, "", 0.05); }
        const px = rng.int(-3, 3), auf = rng() < 0.5; const py = r2(m * px + n + (auf ? 0 : rng.pick([1, -1, 2]))); return wahl(`Liegt der Punkt P(${px} | ${z(py)}) auf der Geraden ${f}?`, ["Ja", "Nein"], auf ? 0 : 1, `Einsetzen: ${z(m)} · ${px} ${vz(n)} = ${z(m * px + n)} ${auf ? "= " : "≠ "}${z(py)}.`);
      },
    },
    {
      id: "kreis", titel: "Kreis: Umfang und Fläche", kurz: "u = 2πr, A = πr², Kreisring, Kreisausschnitt",
      erklaerung: `<p><b>Umfang:</b> u = 2 · π · r = π · d. <b>Fläche:</b> A = π · r². π ≈ 3,14159.</p><p>Rückwärts: r = u / (2π); r = √(A / π).</p><p><b>Kreisring:</b> A = π(R² − r²). <b>Kreisausschnitt</b> mit Mittelpunktswinkel α: A = πr² · α/360°, Bogenlänge b = 2πr · α/360°.</p><p>Achte auf Radius oder Durchmesser in der Aufgabe – der häufigste Fehler!</p>`,
      gen: (rng) => {
        const art = rng.int(1, 5); const r = rng.pick([2, 2.5, 3, 4, 5, 6, 7.5, 8, 10, 12]);
        if (art === 1) return zahl(`Kreis mit Radius r = ${z(r)} cm. Umfang? (2 Nachkommastellen)`, r2(2 * Math.PI * r), `u = 2π · ${z(r)} = ${z(r2(2 * Math.PI * r))} cm`, "cm", 0.1);
        if (art === 2) return zahl(`Kreis mit Durchmesser d = ${z(2 * r)} cm. Flächeninhalt? (2 Nachkommastellen)`, r2(Math.PI * r * r), `r = ${z(r)} cm; A = π · ${z(r)}² = ${z(r2(Math.PI * r * r))} cm²`, "cm²", 0.1);
        if (art === 3) { const u = r2(2 * Math.PI * r); return zahl(`Ein Kreis hat den Umfang ${z(u)} cm. Wie groß ist der Radius? (1 Nachkommastelle)`, r, `r = u / (2π) = ${z(u)} / 6,28 = ${z(r)} cm`, "cm", 0.1); }
        if (art === 4) { const R = r + rng.pick([1, 2, 3]); return zahl(`Kreisring: äußerer Radius ${z(R)} cm, innerer Radius ${z(r)} cm. Flächeninhalt? (2 Nachkommastellen)`, r2(Math.PI * (R * R - r * r)), `A = π(${z(R)}² − ${z(r)}²) = π · ${z(R * R - r * r)} = ${z(r2(Math.PI * (R * R - r * r)))} cm²`, "cm²", 0.1); }
        const alpha = rng.pick([30, 45, 60, 90, 120, 180, 270]); return zahl(`Kreisausschnitt mit r = ${z(r)} cm und α = ${alpha}°. Flächeninhalt? (2 Nachkommastellen)`, r2(Math.PI * r * r * alpha / 360), `A = πr² · α/360 = ${z(r2(Math.PI * r * r))} · ${alpha}/360 = ${z(r2(Math.PI * r * r * alpha / 360))} cm²`, "cm²", 0.1);
      },
    },
    {
      id: "koerper", titel: "Körper: Volumen und Oberfläche", kurz: "Prisma, Zylinder, Pyramide, Kegel, Kugel",
      erklaerung: `<p><b>Prisma / Zylinder:</b> V = Grundfläche · Höhe. Zylinder: V = πr²h, Mantel M = 2πrh, O = 2πr² + 2πrh.</p><p><b>Pyramide / Kegel:</b> V = ⅓ · Grundfläche · Höhe. Kegel: V = ⅓πr²h.</p><p><b>Kugel:</b> V = 4/3 · π · r³, O = 4πr².</p><p>Einheiten: 1 Liter = 1 dm³ = 1000 cm³. Erst alle Längen in dieselbe Einheit bringen!</p>`,
      gen: (rng) => {
        const art = rng.int(1, 6);
        if (art === 1) { const a = rng.int(2, 8), b = rng.int(2, 8), h = rng.int(3, 12); return zahl(`Quader mit a = ${a} cm, b = ${b} cm, h = ${h} cm. Volumen?`, a * b * h, `V = a·b·h = ${a * b * h} cm³`, "cm³"); }
        if (art === 2) { const r = rng.pick([2, 3, 4, 5]), h = rng.pick([5, 6, 8, 10, 12]); return zahl(`Zylinder mit r = ${r} cm und h = ${h} cm. Volumen? (1 Nachkommastelle)`, r1(Math.PI * r * r * h), `V = πr²h = π · ${r * r} · ${h} = ${z(r1(Math.PI * r * r * h))} cm³`, "cm³", 0.3); }
        if (art === 3) { const a = rng.pick([3, 4, 5, 6, 8]), h = rng.pick([6, 9, 12, 15]); return zahl(`Quadratische Pyramide, Grundkante a = ${a} cm, Höhe h = ${h} cm. Volumen?`, r2(a * a * h / 3), `V = ⅓ · a² · h = ⅓ · ${a * a} · ${h} = ${z(a * a * h / 3)} cm³`, "cm³", 0.05); }
        if (art === 4) { const r = rng.pick([2, 3, 4, 6]), h = rng.pick([5, 6, 9, 10]); return zahl(`Kegel mit r = ${r} cm und h = ${h} cm. Volumen? (1 Nachkommastelle)`, r1(Math.PI * r * r * h / 3), `V = ⅓πr²h = ${z(r1(Math.PI * r * r * h / 3))} cm³`, "cm³", 0.3); }
        if (art === 5) { const r = rng.pick([1, 2, 3, 4, 5, 6]); return zahl(`Kugel mit r = ${r} cm. Volumen? (1 Nachkommastelle)`, r1(4 / 3 * Math.PI * r ** 3), `V = 4/3 · π · ${r}³ = ${z(r1(4 / 3 * Math.PI * r ** 3))} cm³`, "cm³", 0.3); }
        const r = rng.pick([2, 3, 4, 5]), h = rng.pick([4, 5, 8, 10]); return zahl(`Zylinder mit r = ${r} cm, h = ${h} cm. Oberfläche (Grund-, Deckfläche und Mantel)? (1 Nachkommastelle)`, r1(2 * Math.PI * r * r + 2 * Math.PI * r * h), `O = 2πr² + 2πrh = ${z(r1(2 * Math.PI * r * r))} + ${z(r1(2 * Math.PI * r * h))} = ${z(r1(2 * Math.PI * r * r + 2 * Math.PI * r * h))} cm²`, "cm²", 0.3);
      },
    },
    {
      id: "wahrscheinlichkeit", titel: "Wahrscheinlichkeit", kurz: "Laplace, Baumdiagramm, Pfadregeln, Gegenereignis",
      erklaerung: `<p><b>Laplace:</b> P(E) = günstige / mögliche Ergebnisse. Würfel: P(6) = 1/6; P(gerade) = 3/6 = 1/2.</p><p><b>Baumdiagramm:</b> Entlang eines Pfads <b>multiplizieren</b> (1. Pfadregel), mehrere Pfade <b>addieren</b> (2. Pfadregel). Beim Ziehen <b>ohne Zurücklegen</b> ändern sich die Zahlen in der zweiten Stufe!</p><p><b>Gegenereignis:</b> P(mindestens einmal) = 1 − P(keinmal).</p><p>Antworten darfst du als Bruch (3/8) oder Dezimalzahl (0,375) eingeben.</p>`,
      gen: (rng) => {
        const art = rng.int(1, 5);
        if (art === 1) { const e = rng.pick([["eine 6", 1], ["eine gerade Zahl", 3], ["eine Zahl größer als 4", 2], ["eine Primzahl (2, 3, 5)", 3], ["höchstens eine 2", 2], ["keine 1", 5]]); return zahl(`Ein Würfel wird einmal geworfen. P(${e[0]})? (als Bruch oder Dezimalzahl)`, e[1] / 6, `günstig/möglich = ${e[1]}/6 = ${bruch(e[1], 6)}`, "", 0.005); }
        if (art === 2) { const rot = rng.int(2, 5), blau = rng.int(2, 5); const n = rot + blau; return zahl(`In einer Urne sind ${rot} rote und ${blau} blaue Kugeln. Du ziehst zweimal MIT Zurücklegen. P(beide rot)?`, (rot / n) ** 2, `${rot}/${n} · ${rot}/${n} = ${bruch(rot * rot, n * n)}`, "", 0.005); }
        if (art === 3) { const rot = rng.int(2, 5), blau = rng.int(2, 5); const n = rot + blau; return zahl(`${rot} rote und ${blau} blaue Kugeln, zweimal ziehen OHNE Zurücklegen. P(beide rot)?`, rot * (rot - 1) / (n * (n - 1)), `${rot}/${n} · ${rot - 1}/${n - 1} = ${bruch(rot * (rot - 1), n * (n - 1))}`, "", 0.005); }
        if (art === 4) { const n = rng.int(2, 3); return zahl(`Eine Münze wird ${n}-mal geworfen. P(mindestens einmal Kopf)?`, 1 - 0.5 ** n, `1 − P(nie Kopf) = 1 − (1/2)^${n} = ${bruch(2 ** n - 1, 2 ** n)}`, "", 0.005); }
        const rot = rng.int(2, 4), blau = rng.int(2, 4); const n = rot + blau; const p = 2 * rot * blau / (n * n); return zahl(`${rot} rote und ${blau} blaue Kugeln, zweimal ziehen MIT Zurücklegen. P(genau eine rote)?`, p, `Pfade rot-blau und blau-rot addieren: 2 · ${rot}/${n} · ${blau}/${n} = ${bruch(2 * rot * blau, n * n)}`, "", 0.005);
      },
    },
    {
      id: "terme", titel: "Terme & binomische Formeln", kurz: "Ausmultiplizieren, Zusammenfassen, Faktorisieren",
      erklaerung: `<p><b>Binomische Formeln:</b> (a + b)² = a² + 2ab + b² · (a − b)² = a² − 2ab + b² · (a + b)(a − b) = a² − b².</p><p><b>Ausmultiplizieren:</b> Jeden Summanden der ersten Klammer mit jedem der zweiten multiplizieren. <b>Zusammenfassen:</b> Nur gleichartige Terme (3x² und 5x², nicht x² und x).</p><p><b>Faktorisieren</b> = rückwärts: gemeinsamen Faktor ausklammern oder binomische Formel erkennen (x² − 9 = (x + 3)(x − 3)).</p>`,
      gen: (rng) => {
        const art = rng.int(1, 5); const b = rng.int(1, 9);
        if (art === 1) return wahlU(`(x + ${b})² =`, `x² + ${2 * b}x + ${b * b}`, [`x² + ${b * b}`, `x² + ${b}x + ${b * b}`, `x² + ${2 * b}x + ${2 * b}`, `x² + ${2 * b}x − ${b * b}`], `1. binomische Formel: a² + 2ab + b² mit a = x, b = ${b}.`);
        if (art === 2) return wahlU(`(x − ${b})² =`, `x² − ${2 * b}x + ${b * b}`, [`x² − ${b * b}`, `x² − ${2 * b}x − ${b * b}`, `x² + ${2 * b}x + ${b * b}`], `2. binomische Formel: a² − 2ab + b².`);
        if (art === 3) return wahlU(`(x + ${b})(x − ${b}) =`, `x² − ${b * b}`, [`x² + ${b * b}`, `x² − ${2 * b}x − ${b * b}`, `x² − ${2 * b}x + ${b * b}`], `3. binomische Formel: a² − b².`);
        if (art === 4) { const c = rng.int(1, 6), d = rng.int(1, 6); return wahlU(`Multipliziere aus: (x + ${c})(x + ${d})`, `x² + ${c + d}x + ${c * d}`, [`x² + ${c * d}x + ${c + d}`, `x² + ${c + d}x + ${c + d}`, `x² + ${c * d}`, `x² + ${c + d}x + ${c * d + 1}`], `x·x + x·${d} + ${c}·x + ${c}·${d} = x² + ${c + d}x + ${c * d}`); }
        const k = rng.pick([2, 3, 4, 5, 6]), m = rng.int(1, 6); return wahlU(`Faktorisiere: ${k}x² + ${k * m}x`, `${k}x(x + ${m})`, [`${k}(x² + ${m})`, `x(${k}x + ${m})`, `${k}x(x + ${k * m})`], `Gemeinsamer Faktor ${k}x: ${k}x · x + ${k}x · ${m}.`);
      },
    },
    {
      id: "trigonometrie", titel: "Trigonometrie (sin, cos, tan)", kurz: "Seitenverhältnisse im rechtwinkligen Dreieck (E-Kurs)",
      erklaerung: `<p>Im rechtwinkligen Dreieck, für einen spitzen Winkel α:</p><p><b>sin α</b> = Gegenkathete / Hypotenuse · <b>cos α</b> = Ankathete / Hypotenuse · <b>tan α</b> = Gegenkathete / Ankathete.</p><p>Merkhilfe: <i>GAGA HühnerHof AG</i> (Gegenkathete, Ankathete, Gegenkathete, Ankathete – Hypotenuse, Hypotenuse, Ankathete, Gegenkathete).</p><p>Wichtige Werte: sin 30° = 0,5 · cos 60° = 0,5 · tan 45° = 1 · sin 90° = 1. Taschenrechner auf DEG stellen!</p>`,
      gen: (rng) => {
        const art = rng.int(1, 4); const rad = (g) => g * Math.PI / 180;
        if (art === 1) { const w = rng.pick([30, 45, 60]); const fn = rng.pick(["sin", "cos", "tan"]); const v = r2(Math[fn](rad(w))); return zahl(`${fn} ${w}° = ? (2 Nachkommastellen)`, v, `${fn} ${w}° ≈ ${z(v)}`, "", 0.01); }
        if (art === 2) { const c = rng.pick([5, 8, 10, 12, 20]), a = rng.pick([20, 30, 40, 50, 60]); const g = r1(c * Math.sin(rad(a))); return zahl(`Rechtwinkliges Dreieck: Hypotenuse c = ${c} cm, Winkel α = ${a}°. Wie lang ist die Gegenkathete von α? (1 Nachkommastelle)`, g, `a = c · sin α = ${c} · sin ${a}° = ${z(g)} cm`, "cm", 0.15); }
        if (art === 3) { const an = rng.pick([4, 5, 6, 8, 10]), a = rng.pick([20, 30, 35, 45, 55, 60]); const g = r1(an * Math.tan(rad(a))); return zahl(`Ankathete ${an} m, Winkel α = ${a}°. Wie lang ist die Gegenkathete? (1 Nachkommastelle)`, g, `Gegenkathete = Ankathete · tan α = ${an} · tan ${a}° = ${z(g)} m`, "m", 0.15); }
        const g = rng.pick([3, 4, 5, 6]), c = g + rng.pick([2, 3, 4, 5]); const w = Math.round(Math.asin(g / c) * 180 / Math.PI); return zahl(`Gegenkathete ${g} cm, Hypotenuse ${c} cm. Wie groß ist der Winkel α? (ganze Grad)`, w, `sin α = ${g}/${c} = ${z(g / c)} → α = sin⁻¹(${z(g / c)}) ≈ ${w}°`, "°", 0.6);
      },
    },
  ];
  window.FAECHER.push({ id: "mathe", name: "Mathematik", icon: "📐", farbe: "#2f6fd1", beschreibung: "Prozent, Pythagoras, Gleichungen, Funktionen, Körper, Wahrscheinlichkeit", themen: THEMEN });
})();
