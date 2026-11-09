// Lernwelt – Ergänzung Physik nach KLP Naturwissenschaften Gesamtschule NRW (2. Progressionsstufe):
// Elektromagnetismus & Energieversorgung (IF 10), Druck/Dichte/Auftrieb (IF 8), Erde und Weltall (IF 6).
// Hängt an das bestehende Fach "physik" an. Reines Browser-JS, kein Import/Export.
"use strict";
(function () {
  const FACH = window.FAECHER.find((f) => f.id === "physik");
  if (!FACH) return;

  // Hilfsfunktionen (lokal; nur fz ist global aus js/kern.js)
  const r2 = (x) => Math.round(x * 100) / 100;
  const z = (x) => fz(x);
  const zahl = (f, l, info, einheit, tol) => ({ t: "zahl", f, l, info, einheit, tol: tol ?? (Number.isInteger(l) ? 0.01 : 0.05) });
  const wahl = (f, a, r, info) => ({ t: "wahl", f, a, r, info });
  const wahlU = (f, richtig, falsche, info) => { const u = [...new Set(falsche)].filter((x) => x !== richtig).slice(0, 3); while (u.length < 2) u.push(u.length ? "keine der Angaben" : richtig + " + 1"); return { t: "wahl", f, a: [richtig, ...u], r: 0, info }; };
  const G = 9.81; // N/kg

  // ---------- Generator: Druck, Dichte, Auftrieb ----------
  const STOFFE = [
    { name: "Wasser", rho: 1 }, { name: "Eisen", rho: 7.9 }, { name: "Aluminium", rho: 2.7 }, { name: "Holz (Fichte)", rho: 0.6 },
    { name: "Gold", rho: 19.3 }, { name: "Kupfer", rho: 8.9 }, { name: "Blei", rho: 11.3 }, { name: "Eis", rho: 0.92 }, { name: "Kork", rho: 0.24 },
  ];
  const FEST = STOFFE.filter((s) => s.name !== "Wasser");
  function genDruck(rng) {
    const art = rng.int(1, 9);
    if (art === 1) {
      const F = rng.pick([50, 100, 200, 400, 600, 800]), A = rng.pick([2, 4, 5, 8, 10, 20, 25, 40]);
      const p = r2(F / A);
      return zahl(`Eine Kraft von ${F} N wirkt senkrecht auf eine Fläche von ${A} cm². Wie groß ist der Druck? (in N/cm²)`, p,
        `p = F / A = ${F} N / ${A} cm² = ${z(p)} N/cm².`, "N/cm²");
    }
    if (art === 2) {
      const F = rng.pick([200, 500, 1000, 2000, 6000]), A = rng.pick([0.25, 0.5, 2, 4, 5, 10]);
      const p = F / A;
      const ding = rng.pick(["Eine Kiste", "Ein Schrank", "Ein Steinblock", "Eine Maschine"]);
      return zahl(`${ding} drückt mit ${F} N auf eine Standfläche von ${z(A)} m². Wie groß ist der Druck auf den Boden? (in Pa)`, p,
        `p = F / A = ${F} N / ${z(A)} m² = ${p} Pa (1 Pa = 1 N/m²).`, "Pa");
    }
    if (art === 3) {
      const p = rng.pick([2, 5, 8, 10, 15, 20, 25]), A = rng.pick([4, 5, 10, 12, 20, 50]);
      return zahl(`In einer Hydraulikanlage herrscht ein Druck von ${p} N/cm². Der Kolben hat eine Fläche von ${A} cm². Welche Kraft wirkt auf den Kolben? (in N)`, p * A,
        `F = p · A = ${p} N/cm² · ${A} cm² = ${p * A} N.`, "N");
    }
    if (art === 4) {
      const s = rng.pick(FEST), V = rng.pick([10, 20, 50, 100, 200, 250, 500]);
      const m = r2(s.rho * V);
      return zahl(`Ein Körper aus ${s.name} (Dichte ${z(s.rho)} g/cm³) hat das Volumen ${V} cm³. Welche Masse hat er? (in g)`, m,
        `m = ρ · V = ${z(s.rho)} g/cm³ · ${V} cm³ = ${z(m)} g.`, "g", Math.max(0.05, m * 0.002));
    }
    if (art === 5) {
      const s = rng.pick(FEST), V = rng.pick([10, 20, 50, 100, 200]);
      const m = r2(s.rho * V);
      return wahlU(`Ein Würfel hat die Masse ${z(m)} g und das Volumen ${V} cm³. Aus welchem Stoff besteht er wahrscheinlich?`, s.name,
        rng.shuffle(FEST.filter((x) => x.name !== s.name)).slice(0, 3).map((x) => x.name),
        `ρ = m / V = ${z(m)} g / ${V} cm³ = ${z(s.rho)} g/cm³ – das ist die Dichte von ${s.name}.`);
    }
    if (art === 6) {
      const s = rng.pick(STOFFE.filter((x) => x.name !== "Wasser"));
      const schwimmt = s.rho < 1;
      return wahl(`Ein massiver Klotz aus ${s.name} (Dichte ${z(s.rho)} g/cm³) wird in Wasser (Dichte 1 g/cm³) gelegt. Was passiert?`,
        ["Er schwimmt", "Er sinkt", "Er schwebt in der Mitte"], schwimmt ? 0 : 1,
        schwimmt ? `${z(s.rho)} g/cm³ ist kleiner als die Dichte von Wasser (1 g/cm³) – der Klotz schwimmt.` : `${z(s.rho)} g/cm³ ist größer als die Dichte von Wasser (1 g/cm³) – der Klotz sinkt.`);
    }
    if (art === 7) {
      const h = rng.pick([1, 2, 3, 5, 8, 10, 12, 20]);
      const p = r2(1000 * G * h / 1000);
      return zahl(`Wie groß ist der Schweredruck des Wassers in ${h} m Tiefe? (Dichte 1000 kg/m³, g = 9,81 N/kg; Antwort in kPa, ohne Luftdruck)`, p,
        `p = ρ · g · h = 1000 kg/m³ · 9,81 N/kg · ${h} m = ${z(1000 * G * h)} Pa = ${z(p)} kPa. Pro 10 m Tiefe steigt der Druck um etwa 1 bar.`, "kPa", 0.5);
    }
    if (art === 8) {
      const V = rng.pick([100, 200, 250, 500, 1000, 2000]);
      const F = r2(V / 1000 * G);
      return zahl(`Ein Körper taucht ganz unter und verdrängt ${V} cm³ Wasser. Wie groß ist die Auftriebskraft? (g = 9,81 N/kg; in N)`, F,
        `Verdrängtes Wasser: ${V} cm³ = ${V} g = ${z(V / 1000)} kg. Auftrieb = Gewichtskraft des verdrängten Wassers = ${z(V / 1000)} kg · 9,81 N/kg = ${z(F)} N.`, "N", Math.max(0.05, F * 0.02));
    }
    const s = rng.pick(FEST), V = rng.pick([10, 20, 50, 100]);
    const m = r2(s.rho * V);
    return zahl(`Ein Stück ${s.name} (Dichte ${z(s.rho)} g/cm³) hat die Masse ${z(m)} g. Welches Volumen hat es? (in cm³)`, V,
      `V = m / ρ = ${z(m)} g / ${z(s.rho)} g/cm³ = ${V} cm³.`, "cm³", 0.05);
  }

  FACH.themen.push(
    {
      id: "elektromagnetismus", titel: "Elektromagnetismus, Induktion & Energieversorgung", kurz: "Elektromagnet, Induktion, Generator, Motor, Transformator, Kraftwerk, Hochspannung (G- und E-Kurs)",
      erklaerung: `<p><b>Elektromagnetismus:</b> Um jeden stromdurchflossenen Leiter entsteht ein <b>Magnetfeld</b> (Entdeckung von Oersted 1820). Eine Spule bündelt das Feld; mit Eisenkern, mehr Windungen oder mehr Strom wird der <b>Elektromagnet</b> stärker. Anders als ein Dauermagnet lässt er sich ein- und ausschalten.</p>
<p><b>Induktion</b> (Faraday 1831): Ändert sich das Magnetfeld, das eine Spule durchsetzt – etwa weil ein Magnet hinein- oder herausbewegt wird –, entsteht in der Spule eine <b>Spannung</b>. Je schneller die Änderung und je mehr Windungen, desto größer die Spannung. Ohne Änderung keine Spannung!</p>
<p><b>Generator:</b> Eine Spule dreht sich im Magnetfeld (oder umgekehrt) → Bewegungsenergie wird in elektrische Energie umgewandelt; es entsteht <b>Wechselspannung</b>. Der <b>Elektromotor</b> ist die Umkehrung: elektrische Energie → Bewegung (Kraft auf stromdurchflossene Spule im Magnetfeld).</p>
<p><b>Transformator:</b> Zwei Spulen auf einem Eisenkern. Nur <b>Wechselstrom</b> funktioniert, weil sich das Magnetfeld ändern muss. Es gilt <b>U<sub>1</sub> / U<sub>2</sub> = N<sub>1</sub> / N<sub>2</sub></b> (Spannungen verhalten sich wie die Windungszahlen). Beim idealen Trafo bleibt die Leistung gleich: U<sub>1</sub> · I<sub>1</sub> = U<sub>2</sub> · I<sub>2</sub> – hohe Spannung bedeutet kleinen Strom.</p>
<p><b>Energieversorgung:</b> Im Kraftwerk treibt Dampf (Kohle, Gas, Kernenergie), Wasser oder Wind eine Turbine an, die den Generator dreht. Für den Transport wird auf <b>Hochspannung</b> (bis 380 000 V) hochtransformiert: Bei gleicher Leistung fließt dann ein viel kleinerer Strom, und die Wärmeverluste in der Leitung (P<sub>V</sub> = I² · R) sinken stark. Vor dem Haushalt wird auf 230 V heruntertransformiert. Unser Netz hat <b>50 Hz</b>: 50 volle Schwingungen pro Sekunde.</p>`,
      aufgaben: [
        wahl("Was entsteht um einen Draht, durch den Strom fließt?", ["ein Magnetfeld", "ein Lichtblitz", "eine Schallwelle", "nichts, solange der Draht isoliert ist"], 0,
          "Jeder stromdurchflossene Leiter ist von einem Magnetfeld umgeben – eine Kompassnadel daneben schlägt aus (Versuch von Oersted)."),
        wahl("Wie kannst du einen Elektromagneten stärker machen?", ["mehr Windungen, mehr Strom oder einen Eisenkern", "dünneren Draht verwenden", "die Spule kürzer schließen", "den Strom umpolen"], 0,
          "Die Stärke hängt von Windungszahl, Stromstärke und Kern ab; ein Eisenkern verstärkt das Feld um ein Vielfaches. Umpolen dreht nur Nord- und Südpol um."),
        wahl("Wann entsteht in einer Spule eine Induktionsspannung?", ["wenn sich das Magnetfeld durch die Spule ändert", "wenn ein Magnet ruhig in der Spule liegt", "wenn die Spule aus Kupfer ist", "wenn die Spule erwärmt wird"], 0,
          "Induktion braucht eine Änderung des Magnetfelds, etwa einen bewegten Magneten. Ein ruhender Magnet erzeugt keine Spannung."),
        wahl("Wer entdeckte 1831 die elektromagnetische Induktion?", ["Michael Faraday", "Isaac Newton", "Albert Einstein", "Georg Simon Ohm"], 0,
          "Faraday zeigte, dass ein veränderliches Magnetfeld eine Spannung erzeugt – die Grundlage von Generator und Transformator."),
        wahl("Welche Energieumwandlung findet in einem Generator statt?", ["Bewegungsenergie → elektrische Energie", "elektrische Energie → Bewegungsenergie", "Wärme → Licht", "chemische Energie → Wärme"], 0,
          "Im Generator dreht sich eine Spule im Magnetfeld; durch Induktion wird Bewegungsenergie in elektrische Energie umgewandelt."),
        wahl("Welche Energieumwandlung findet in einem Elektromotor statt?", ["elektrische Energie → Bewegungsenergie", "Bewegungsenergie → elektrische Energie", "Lageenergie → Wärme", "Licht → elektrische Energie"], 0,
          "Der Motor ist die Umkehrung des Generators: Auf die stromdurchflossene Spule im Magnetfeld wirkt eine Kraft, sie dreht sich."),
        wahl("Warum funktioniert ein Transformator nicht mit Gleichstrom?", ["Weil sich das Magnetfeld ändern muss, damit in der zweiten Spule Spannung induziert wird", "Weil Gleichstrom zu schwach ist", "Weil der Eisenkern Gleichstrom leitet", "Weil Gleichstrom keine Wärme erzeugt"], 0,
          "Gleichstrom erzeugt ein konstantes Magnetfeld – ohne Änderung gibt es keine Induktion. Nur beim Einschalten gäbe es einen kurzen Spannungsstoß."),
        zahl("Ein Transformator hat 1000 Windungen in der Primärspule und 50 in der Sekundärspule. Primärspannung 230 V. Wie groß ist die Sekundärspannung? (in V)", 11.5,
          "U2 = U1 · N2 / N1 = 230 V · 50 / 1000 = 11,5 V.", "V", 0.05),
        zahl("Ein Trafo soll 230 V auf 23 V heruntertransformieren. Die Primärspule hat 500 Windungen. Wie viele Windungen braucht die Sekundärspule?", 50,
          "N2 = N1 · U2 / U1 = 500 · 23 / 230 = 50 Windungen.", "Windungen"),
        zahl("Ein Trafo hat N1 = 200 und N2 = 1000 Windungen. Primärspannung 12 V. Wie groß ist die Sekundärspannung? (in V)", 60,
          "U2 = U1 · N2 / N1 = 12 V · 1000 / 200 = 60 V – der Trafo transformiert hoch.", "V"),
        zahl("Ein idealer Trafo wird mit 230 V und 0,5 A betrieben. Die Sekundärspannung beträgt 23 V. Wie groß ist die Sekundärstromstärke? (in A)", 5,
          "Leistung bleibt gleich: P = 230 V · 0,5 A = 115 W; I2 = 115 W / 23 V = 5 A. Zehnmal kleinere Spannung, zehnmal größerer Strom.", "A"),
        wahl("Welche Frequenz hat der Wechselstrom im deutschen Stromnetz?", ["50 Hz", "60 Hz", "230 Hz", "5 Hz"], 0,
          "50 Hz bedeutet 50 vollständige Schwingungen pro Sekunde; die Stromrichtung wechselt dabei 100-mal pro Sekunde. In den USA sind es 60 Hz."),
        wahl("Warum wird Strom über weite Strecken mit Hochspannung (z. B. 380 000 V) übertragen?", ["Bei hoher Spannung fließt für dieselbe Leistung ein kleinerer Strom – die Wärmeverluste in der Leitung sinken", "Hohe Spannung fließt schneller durch die Leitung", "Damit die Leitungen nicht einfrieren", "Weil Hochspannung ungefährlich ist"], 0,
          "P = U · I: Hohe Spannung → kleiner Strom. Die Verlustleistung in der Leitung ist P = I² · R – zehnmal weniger Strom bedeutet hundertmal weniger Verlust."),
        { t: "reihenfolge", f: "Bringe den Weg der Energie in einem Kohlekraftwerk in die richtige Reihenfolge", items: ["Kohle wird verbrannt", "Wasser wird zu heißem Dampf", "Dampf treibt die Turbine an", "Generator erzeugt Wechselspannung", "Trafo transformiert auf Hochspannung", "Leitung transportiert den Strom zu den Haushalten"] },
        wahl("Welche Spannung liegt an einer normalen Steckdose in Deutschland an?", ["230 V Wechselspannung", "230 V Gleichspannung", "12 V Wechselspannung", "380 000 V Wechselspannung"], 0,
          "Im Haushalt gibt es 230 V Wechselspannung (50 Hz). Die 380 000 V der Fernleitungen werden vorher in mehreren Stufen heruntertransformiert."),
        { t: "eingabe", f: "Eine Spule mit Eisenkern, die nur magnetisch ist, solange Strom fließt, heißt ___.", l: ["Elektromagnet"], info: "Ein Elektromagnet lässt sich im Gegensatz zum Dauermagneten ein- und ausschalten – wichtig für Türöffner, Schrottkräne und Relais." },
        wahl("Welche dieser Energiequellen ist NICHT erneuerbar?", ["Erdgas", "Windenergie", "Sonnenenergie", "Wasserkraft"], 0,
          "Erdgas ist ein fossiler Brennstoff, der in Millionen Jahren entstand und sich nicht nachbildet. Wind, Sonne und Wasser stehen dauerhaft zur Verfügung."),
        { t: "paare", f: "Ordne die Geräte ihrer Energieumwandlung zu", p: [["Generator", "Bewegung → elektrische Energie"], ["Elektromotor", "elektrische Energie → Bewegung"], ["Transformator", "ändert Wechselspannung (hoch oder runter)"], ["Solarzelle", "Licht → elektrische Energie"], ["Heizdraht", "elektrische Energie → Wärme"]] },
        wahl("In der Nähe eines Elektromagneten liegt eine Kompassnadel. Was passiert, wenn du den Strom umpolst?", ["Die Nadel dreht sich um – Nord- und Südpol des Elektromagneten tauschen", "Nichts, der Magnet bleibt gleich", "Der Elektromagnet wird doppelt so stark", "Der Elektromagnet verliert sein Feld dauerhaft"], 0,
          "Die Richtung des Magnetfelds hängt von der Stromrichtung ab. Umpolen vertauscht Nord- und Südpol – darum kann ein Elektromotor sich drehen."),
      ],
    },
    {
      id: "druck", titel: "Druck, Dichte & Auftrieb", kurz: "p = F/A, ρ = m/V, Schwimmen/Sinken, Schweredruck, Auftriebskraft (G- und E-Kurs)",
      erklaerung: `<p><b>Druck</b> ist Kraft pro Fläche: <b>p = F / A</b>. Einheiten: 1 N/m² = 1 Pascal (Pa); 1 N/cm² = 10 000 Pa; 1 bar = 100 000 Pa. Gleiche Kraft auf kleinere Fläche → größerer Druck (darum schneidet ein scharfes Messer, und Skier sinken nicht ein).</p>
<p><b>Dichte</b> ist Masse pro Volumen: <b>ρ = m / V</b>, meist in g/cm³ (= kg/dm³ = 1000 kg/m³). Wasser 1,0 – Holz 0,6 – Aluminium 2,7 – Eisen 7,9 – Gold 19,3 g/cm³. Umstellen: m = ρ · V und V = m / ρ.</p>
<p><b>Schwimmen, Schweben, Sinken:</b> Ein Körper schwimmt, wenn seine Dichte kleiner ist als die der Flüssigkeit, er sinkt, wenn sie größer ist, er schwebt, wenn beide gleich sind. Ein Stahlschiff schwimmt, weil es innen viel Luft enthält – seine <i>mittlere</i> Dichte ist kleiner als 1 g/cm³.</p>
<p><b>Schweredruck</b> in einer Flüssigkeit: <b>p = ρ · g · h</b> – er wächst mit der Tiefe h, nicht mit der Form des Gefäßes. In Wasser kommen pro 10 m etwa 1 bar (100 kPa) dazu.</p>
<p><b>Auftrieb (Archimedes):</b> Die Auftriebskraft ist so groß wie die Gewichtskraft der verdrängten Flüssigkeit: F<sub>A</sub> = ρ<sub>Fl</sub> · g · V<sub>verdrängt</sub>. 1 Liter verdrängtes Wasser (1 kg) bringt etwa 9,81 N Auftrieb. Ist F<sub>A</sub> größer als die Gewichtskraft des Körpers, steigt er auf.</p>
<p>Rechne mit <b>g = 9,81 N/kg</b> (Masse in kg → Gewichtskraft in N). Typischer Fehler: g und cm³ mischen – erst Volumen in Masse (1 cm³ Wasser = 1 g), dann in kg, dann mal g.</p>`,
      gen: genDruck,
    },
    {
      id: "weltall", titel: "Erde & Weltall", kurz: "Sonnensystem, Tag/Nacht, Jahreszeiten, Mondphasen, Finsternisse, Gezeiten, Lichtjahr, Gravitation (G- und E-Kurs)",
      erklaerung: `<p><b>Sonnensystem:</b> Die Sonne ist ein Stern – eine riesige Gaskugel, in der Wasserstoff zu Helium verschmilzt. Um sie kreisen acht Planeten: Merkur, Venus, Erde, Mars (Gesteinsplaneten), Jupiter, Saturn, Uranus, Neptun (Gasplaneten). Merksatz: „Mein Vater erklärt mir jeden Sonntag unseren Nachthimmel.“ Pluto gilt seit 2006 als Zwergplanet.</p>
<p><b>Tag und Nacht</b> entstehen, weil sich die Erde in 24 Stunden um ihre eigene Achse dreht. <b>Jahreszeiten</b> entstehen, weil die Erdachse um etwa <b>23,5°</b> geneigt ist: Ist die Nordhalbkugel zur Sonne geneigt, steht die Sonne hoch, die Tage sind lang – Sommer. Der Abstand zur Sonne ist nicht der Grund (im Januar ist die Erde der Sonne sogar am nächsten).</p>
<p><b>Mondphasen:</b> Der Mond leuchtet nicht selbst; wir sehen je nach Stellung von Sonne, Erde und Mond unterschiedlich viel seiner beleuchteten Hälfte (Neumond → zunehmend → Vollmond → abnehmend, etwa 29,5 Tage). <b>Sonnenfinsternis:</b> Der Mond steht zwischen Sonne und Erde (nur bei Neumond). <b>Mondfinsternis:</b> Die Erde steht zwischen Sonne und Mond, der Mond wandert durch den Erdschatten (nur bei Vollmond).</p>
<p><b>Gezeiten:</b> Die Anziehungskraft des Mondes (und weniger stark der Sonne) erzeugt zwei Flutberge; darum gibt es etwa zweimal täglich Ebbe und Flut (alle 12 h 25 min).</p>
<p><b>Gravitation:</b> Alle Massen ziehen sich an. Auf der Erde ist der Ortsfaktor g ≈ 9,81 N/kg, auf dem Mond nur etwa <b>1,6 N/kg</b>. Die <b>Masse</b> eines Körpers bleibt überall gleich, seine <b>Gewichtskraft</b> F = m · g ändert sich. Astronauten auf der ISS sind „schwerelos“, weil die Station mit ihnen dauernd um die Erde fällt.</p>
<p><b>Entfernungen:</b> Ein <b>Lichtjahr</b> ist eine Strecke: etwa 9,5 Billionen km, die das Licht in einem Jahr zurücklegt. Das Sonnenlicht braucht rund 8 Minuten bis zur Erde. Unsere Galaxie, die <b>Milchstraße</b>, enthält mehr als 100 Milliarden Sterne.</p>`,
      aufgaben: [
        { t: "reihenfolge", f: "Bringe die ersten sechs Planeten von der Sonne aus nach außen in die richtige Reihenfolge", items: ["Merkur", "Venus", "Erde", "Mars", "Jupiter", "Saturn"] },
        wahl("Wie viele Planeten hat unser Sonnensystem?", ["8", "9", "7", "12"], 0, "Seit 2006 zählt Pluto als Zwergplanet; es bleiben acht Planeten von Merkur bis Neptun."),
        wahl("Welcher ist der größte Planet unseres Sonnensystems?", ["Jupiter", "Saturn", "Erde", "Neptun"], 0, "Jupiter ist ein Gasriese mit etwa dem 11-fachen Erddurchmesser; in ihn passten über 1300 Erden."),
        { t: "eingabe", f: "Der Planet mit dem auffälligen Ringsystem heißt ___.", l: ["Saturn"], info: "Saturns Ringe bestehen aus unzähligen Eis- und Gesteinsbrocken; auch Jupiter, Uranus und Neptun haben schwache Ringe." },
        wahl("Wodurch entstehen Tag und Nacht?", ["durch die Drehung der Erde um ihre eigene Achse", "durch die Bewegung der Erde um die Sonne", "durch die Mondphasen", "durch die Neigung der Erdachse"], 0,
          "Die Erde dreht sich in 24 Stunden einmal um ihre Achse; die der Sonne zugewandte Seite hat Tag."),
        wahl("Wodurch entstehen die Jahreszeiten?", ["durch die Neigung der Erdachse um etwa 23,5°", "durch den wechselnden Abstand der Erde zur Sonne", "durch die Drehung der Erde um ihre Achse", "durch die Anziehung des Mondes"], 0,
          "Wegen der geneigten Achse trifft das Sonnenlicht im Sommer steiler und länger auf eine Halbkugel. Der Abstand ist nicht der Grund – im Januar ist die Erde der Sonne sogar am nächsten."),
        zahl("Um wie viel Grad ist die Erdachse gegen die Senkrechte auf ihrer Bahnebene geneigt? (in Grad, gerundet)", 23.5, "Die Erdachse ist um etwa 23,5° (genauer 23,4°) geneigt – das ist der Grund für die Jahreszeiten.", "°", 0.6),
        wahl("Auf der Nordhalbkugel ist Sommer. Was gilt dann?", ["Die Nordhalbkugel ist zur Sonne geneigt, die Sonne steht hoch, die Tage sind lang", "Die Erde ist der Sonne am nächsten", "Auf der Südhalbkugel ist auch Sommer", "Die Erdachse zeigt von der Sonne weg"], 0,
          "Im Nordsommer ist die Nordhalbkugel zur Sonne geneigt – gleichzeitig ist auf der Südhalbkugel Winter."),
        wahl("Wodurch entstehen die Mondphasen?", ["Wir sehen je nach Stellung von Sonne, Erde und Mond unterschiedlich viel der beleuchteten Mondhälfte", "Der Erdschatten fällt auf den Mond", "Der Mond leuchtet mal stärker, mal schwächer", "Wolken verdecken Teile des Mondes"], 0,
          "Der Mond wird immer zur Hälfte von der Sonne beleuchtet; von der Erde aus sehen wir diese Hälfte aus wechselndem Blickwinkel. Der Erdschatten spielt nur bei der Mondfinsternis eine Rolle."),
        wahl("Wie steht der Mond bei einer Sonnenfinsternis?", ["zwischen Sonne und Erde (Neumond)", "hinter der Erde im Erdschatten (Vollmond)", "genau über dem Nordpol", "am weitesten von der Erde entfernt"], 0,
          "Bei der Sonnenfinsternis schiebt sich der Mond vor die Sonne – das geht nur bei Neumond, wenn er zwischen Sonne und Erde steht."),
        wahl("Was passiert bei einer Mondfinsternis?", ["Die Erde steht zwischen Sonne und Mond, der Mond wandert durch den Erdschatten", "Der Mond steht zwischen Sonne und Erde", "Der Mond dreht uns seine dunkle Seite zu", "Die Sonne geht hinter dem Mond unter"], 0,
          "Nur bei Vollmond kann der Mond in den Schatten der Erde geraten – er erscheint dann oft rötlich („Blutmond“)."),
        wahl("Was ist die Hauptursache für Ebbe und Flut?", ["die Anziehungskraft des Mondes", "der Wind über dem Meer", "die Drehung der Erde um die Sonne", "Unterwasservulkane"], 0,
          "Der Mond zieht das Wasser auf der ihm zugewandten Seite an; auf der Gegenseite entsteht ein zweiter Flutberg. Darum gibt es etwa zweimal täglich Flut."),
        wahl("Was ist ein Lichtjahr?", ["eine Entfernung: die Strecke, die Licht in einem Jahr zurücklegt (etwa 9,5 Billionen km)", "eine Zeitspanne von einem Jahr", "die Zeit, die Licht von der Sonne zur Erde braucht", "die Helligkeit eines Sterns pro Jahr"], 0,
          "Trotz des Wortes „Jahr“ ist das Lichtjahr eine Längeneinheit. Der nächste Stern nach der Sonne, Proxima Centauri, ist gut 4 Lichtjahre entfernt."),
        wahl("Was ist die Sonne?", ["ein Stern, in dem Wasserstoff zu Helium verschmilzt", "ein brennender Gasplanet", "ein glühender Felsbrocken", "ein großer Mond"], 0,
          "Die Sonne ist ein gewöhnlicher Stern; ihre Energie stammt aus der Kernfusion von Wasserstoff zu Helium, nicht aus Verbrennung."),
        wahl("Wie heißt die Galaxie, in der sich unser Sonnensystem befindet?", ["Milchstraße", "Andromeda", "Orion", "Großer Wagen"], 0,
          "Die Milchstraße ist eine Spiralgalaxie mit über 100 Milliarden Sternen; Andromeda ist unsere Nachbargalaxie, Orion und Großer Wagen sind Sternbilder."),
        wahl("Wie lange braucht das Licht ungefähr von der Sonne bis zur Erde?", ["etwa 8 Minuten", "etwa 8 Sekunden", "etwa 8 Stunden", "etwa 1 Jahr"], 0,
          "150 Millionen km geteilt durch 300 000 km/s ergibt rund 500 s, also etwa 8 Minuten."),
        zahl("Ein Astronaut hat die Masse 60 kg. Wie groß ist seine Gewichtskraft auf dem Mond? (g Mond = 1,6 N/kg; in N)", 96, "F = m · g = 60 kg · 1,6 N/kg = 96 N (auf der Erde wären es 60 · 9,81 ≈ 589 N).", "N", 1),
        zahl("Ein Rucksack hat auf dem Mond die Gewichtskraft 32 N (g Mond = 1,6 N/kg). Welche Masse hat er? (in kg)", 20, "m = F / g = 32 N / 1,6 N/kg = 20 kg – und diese Masse hat er auch auf der Erde.", "kg"),
        wahl("Ein Stein wird von der Erde zum Mond gebracht. Was ändert sich?", ["Seine Gewichtskraft wird kleiner, seine Masse bleibt gleich", "Seine Masse wird kleiner, seine Gewichtskraft bleibt gleich", "Beides bleibt gleich", "Beides wird kleiner"], 0,
          "Die Masse (Stoffmenge, in kg) ist überall gleich. Die Gewichtskraft F = m · g hängt vom Ortsfaktor ab – auf dem Mond nur etwa ein Sechstel."),
        wahl("Warum schweben Astronauten in der Raumstation ISS?", ["Weil die Station mit ihnen ständig um die Erde fällt (freier Fall)", "Weil es dort keine Gravitation gibt", "Weil die Luft in der Station sie trägt", "Weil der Mond sie anzieht"], 0,
          "In 400 km Höhe wirkt noch etwa 90 % der Erdanziehung. Die ISS fällt aber dauernd um die Erde herum – alles in ihr fällt mit, darum fühlt es sich schwerelos an."),
        wahl("Wie bewegt sich eine Rakete im luftleeren Weltraum vorwärts?", ["durch Rückstoß: ausgestoßene Gase treiben sie in die Gegenrichtung", "indem sie sich von der Luft abstößt", "indem sie vom Mond angezogen wird", "durch Sonnenwind in den Düsen"], 0,
          "Rückstoßprinzip: Die Rakete stößt Gas nach hinten aus und wird selbst nach vorn beschleunigt – dafür braucht sie keine Luft."),
      ],
    },
  );
})();
