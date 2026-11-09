"use strict";
(function () {
const FACH = {
  id: "chemie",
  name: "Chemie",
  icon: "⚗️",
  farbe: "#6a4fb3",
  beschreibung: "Periodensystem, Atombau, Bindungen, Reaktionen, Säuren und Basen, Alltag",
  themen: [
    {
      id: "pse",
      titel: "Periodensystem & Elementsymbole",
      kurz: "40 Elementsymbole, Perioden, Hauptgruppen",
      erklaerung: `<p>Im <b>Periodensystem der Elemente (PSE)</b> sind alle Elemente nach steigender <b>Ordnungszahl</b> (Protonenzahl) geordnet. Jedes Element hat ein <b>Symbol</b> aus ein oder zwei Buchstaben, oft aus dem Lateinischen: Na = Natrium, Fe = Ferrum (Eisen), Au = Aurum (Gold), Ag = Argentum (Silber), Pb = Plumbum (Blei), Hg = Hydrargyrum (Quecksilber), Cu = Cuprum (Kupfer), Sn = Stannum (Zinn), K = Kalium.</p>
<p>Die waagerechten Zeilen heißen <b>Perioden</b> (1–7). Die Periodennummer gibt an, wie viele Elektronenschalen die Atome besetzt haben. Die senkrechten Spalten heißen <b>Gruppen</b>. Elemente einer <b>Hauptgruppe</b> haben gleich viele <b>Außenelektronen</b> und ähnliche Eigenschaften.</p>
<p>Wichtige Hauptgruppen: <b>I. Alkalimetalle</b> (Li, Na, K – weich, reagieren heftig mit Wasser), <b>II. Erdalkalimetalle</b> (Mg, Ca), <b>VII. Halogene</b> (F, Cl, Br, I – „Salzbildner“, reaktive Nichtmetalle), <b>VIII. Edelgase</b> (He, Ne, Ar – reaktionsträge, Außenschale voll).</p>
<p>Links und in der Mitte stehen <b>Metalle</b> (glänzend, leiten Strom und Wärme), rechts oben die <b>Nichtmetalle</b>. Zwischen den Hauptgruppen II und III liegen die <b>Nebengruppen</b> mit Übergangsmetallen wie Eisen, Kupfer und Zink. Tipp: Lerne die ersten 20 Elemente (H bis Ca) der Reihe nach auswendig.</p>`,
      aufgaben: [
        { t: "karte", vorne: "H", hinten: "Wasserstoff", bsp: "Ordnungszahl 1, leichtestes Element" },
        { t: "karte", vorne: "He", hinten: "Helium", bsp: "Edelgas, Ordnungszahl 2" },
        { t: "karte", vorne: "Li", hinten: "Lithium", bsp: "Alkalimetall, in Akkus" },
        { t: "karte", vorne: "Be", hinten: "Beryllium", bsp: "Erdalkalimetall, Ordnungszahl 4" },
        { t: "karte", vorne: "B", hinten: "Bor", bsp: "Ordnungszahl 5, Halbmetall" },
        { t: "karte", vorne: "C", hinten: "Kohlenstoff", bsp: "Carboneum – Diamant und Graphit" },
        { t: "karte", vorne: "N", hinten: "Stickstoff", bsp: "Nitrogenium – 78 % der Luft" },
        { t: "karte", vorne: "O", hinten: "Sauerstoff", bsp: "Oxygenium – 21 % der Luft" },
        { t: "karte", vorne: "F", hinten: "Fluor", bsp: "Halogen, reaktivstes Element" },
        { t: "karte", vorne: "Ne", hinten: "Neon", bsp: "Edelgas, Leuchtreklame" },
        { t: "karte", vorne: "Na", hinten: "Natrium", bsp: "Alkalimetall, in Kochsalz NaCl" },
        { t: "karte", vorne: "Mg", hinten: "Magnesium", bsp: "Erdalkalimetall, brennt grell weiß" },
        { t: "karte", vorne: "Al", hinten: "Aluminium", bsp: "Leichtmetall, Ordnungszahl 13" },
        { t: "karte", vorne: "Si", hinten: "Silicium", bsp: "Halbleiter in Computerchips" },
        { t: "karte", vorne: "P", hinten: "Phosphor", bsp: "Ordnungszahl 15, in Streichhölzern" },
        { t: "karte", vorne: "S", hinten: "Schwefel", bsp: "gelbes Nichtmetall, Ordnungszahl 16" },
        { t: "karte", vorne: "Cl", hinten: "Chlor", bsp: "Halogen, grünes giftiges Gas" },
        { t: "karte", vorne: "Ar", hinten: "Argon", bsp: "Edelgas, 1 % der Luft" },
        { t: "karte", vorne: "K", hinten: "Kalium", bsp: "Alkalimetall, Ordnungszahl 19" },
        { t: "karte", vorne: "Ca", hinten: "Calcium", bsp: "Erdalkalimetall, in Knochen und Kalk" },
        { t: "karte", vorne: "Ti", hinten: "Titan", bsp: "leichtes, festes Metall, Ordnungszahl 22" },
        { t: "karte", vorne: "Cr", hinten: "Chrom", bsp: "glänzende Überzüge, Ordnungszahl 24" },
        { t: "karte", vorne: "Mn", hinten: "Mangan", bsp: "Ordnungszahl 25, in Stahl" },
        { t: "karte", vorne: "Fe", hinten: "Eisen", bsp: "Ferrum, Ordnungszahl 26" },
        { t: "karte", vorne: "Co", hinten: "Cobalt", bsp: "Ordnungszahl 27, blaue Farbe" },
        { t: "karte", vorne: "Ni", hinten: "Nickel", bsp: "Ordnungszahl 28, in Münzen" },
        { t: "karte", vorne: "Cu", hinten: "Kupfer", bsp: "Cuprum, rötliches Metall, Stromkabel" },
        { t: "karte", vorne: "Zn", hinten: "Zink", bsp: "Ordnungszahl 30, Korrosionsschutz" },
        { t: "karte", vorne: "Br", hinten: "Brom", bsp: "Halogen, einziges flüssiges Nichtmetall" },
        { t: "karte", vorne: "Kr", hinten: "Krypton", bsp: "Edelgas, Ordnungszahl 36" },
        { t: "karte", vorne: "Sr", hinten: "Strontium", bsp: "Erdalkalimetall, rotes Feuerwerk" },
        { t: "karte", vorne: "Ag", hinten: "Silber", bsp: "Argentum, Ordnungszahl 47" },
        { t: "karte", vorne: "Sn", hinten: "Zinn", bsp: "Stannum, Ordnungszahl 50" },
        { t: "karte", vorne: "I", hinten: "Iod", bsp: "Halogen, violetter Dampf, in Jodsalz" },
        { t: "karte", vorne: "Ba", hinten: "Barium", bsp: "Erdalkalimetall, grünes Feuerwerk" },
        { t: "karte", vorne: "Pt", hinten: "Platin", bsp: "Edelmetall, Katalysator" },
        { t: "karte", vorne: "Au", hinten: "Gold", bsp: "Aurum, Ordnungszahl 79" },
        { t: "karte", vorne: "Hg", hinten: "Quecksilber", bsp: "Hydrargyrum, einziges flüssiges Metall" },
        { t: "karte", vorne: "Pb", hinten: "Blei", bsp: "Plumbum, Ordnungszahl 82" },
        { t: "karte", vorne: "U", hinten: "Uran", bsp: "radioaktiv, Ordnungszahl 92" },
        { t: "wahl", f: "Wie heißen die Elemente der VIII. Hauptgruppe?", a: ["Edelgase", "Halogene", "Alkalimetalle", "Erdalkalimetalle"], r: 0, info: "Edelgase wie Helium, Neon und Argon haben eine volle Außenschale und reagieren kaum." },
        { t: "wahl", f: "Welche Elemente gehören zu den Halogenen (VII. Hauptgruppe)?", a: ["Fluor, Chlor, Brom, Iod", "Helium, Neon, Argon", "Lithium, Natrium, Kalium", "Magnesium, Calcium, Barium"], r: 0, info: "Halogene heißen „Salzbildner“ und haben 7 Außenelektronen." },
        { t: "wahl", f: "Welche Elemente sind Alkalimetalle?", a: ["Lithium, Natrium, Kalium", "Magnesium, Calcium", "Fluor, Chlor", "Eisen, Kupfer, Zink"], r: 0, info: "Alkalimetalle stehen in der I. Hauptgruppe, haben 1 Außenelektron und reagieren heftig mit Wasser." },
        { t: "wahl", f: "Was haben Elemente einer Hauptgruppe gemeinsam?", a: ["Gleich viele Außenelektronen", "Gleich viele Schalen", "Gleiche Masse", "Gleiche Protonenzahl"], r: 0, info: "Die Hauptgruppennummer entspricht der Zahl der Außenelektronen – daher ähnliche Eigenschaften." },
        { t: "wahl", f: "Was gibt die Periodennummer an?", a: ["Die Anzahl der besetzten Elektronenschalen", "Die Anzahl der Außenelektronen", "Die Anzahl der Neutronen", "Die Anzahl der Protonen"], r: 0, info: "Natrium steht in Periode 3 und hat drei Schalen (2-8-1)." },
        { t: "wahl", f: "Wonach sind die Elemente im Periodensystem geordnet?", a: ["Nach steigender Ordnungszahl (Protonenzahl)", "Alphabetisch", "Nach Entdeckungsjahr", "Nach Farbe"], r: 0, info: "Die Ordnungszahl ist gleich der Zahl der Protonen im Kern." },
        { t: "wahl", f: "Zu welcher Hauptgruppe gehören Magnesium und Calcium?", a: ["II. Hauptgruppe – Erdalkalimetalle", "I. Hauptgruppe – Alkalimetalle", "VII. Hauptgruppe – Halogene", "VIII. Hauptgruppe – Edelgase"], r: 0, info: "Erdalkalimetalle haben 2 Außenelektronen und bilden zweifach positive Ionen." },
        { t: "wahl", f: "Wo stehen die Nichtmetalle im Periodensystem?", a: ["Rechts oben", "Links unten", "In der Mitte", "Ganz links"], r: 0, info: "Links und in der Mitte stehen die Metalle, rechts oben die Nichtmetalle (außer Wasserstoff)." }
      ]
    },
    {
      id: "atombau",
      titel: "Atombau",
      kurz: "Kern und Hülle, Ordnungszahl, Massenzahl, Isotope, Schalenmodell",
      erklaerung: `<p>Ein <b>Atom</b> besteht aus dem winzigen, schweren <b>Kern</b> und der großen, fast leeren <b>Hülle</b>. Im Kern sitzen <b>Protonen</b> (positiv, p<sup>+</sup>) und <b>Neutronen</b> (neutral, n). In der Hülle kreisen <b>Elektronen</b> (negativ, e<sup>−</sup>), die fast keine Masse haben. Ein Atom ist nach außen neutral: Protonenzahl = Elektronenzahl.</p>
<p>Die <b>Ordnungszahl</b> (Kernladungszahl) = Anzahl der Protonen – sie bestimmt das Element. Die <b>Massenzahl</b> = Protonen + Neutronen. Also: <b>Neutronen = Massenzahl − Ordnungszahl</b>. Beispiel 23-Na: Natrium hat Ordnungszahl 11 → 23 − 11 = <b>12 Neutronen</b>.</p>
<p><b>Isotope</b> sind Atome desselben Elements mit gleich vielen Protonen, aber unterschiedlich vielen Neutronen, z. B. 12-C und 14-C (14-C ist radioaktiv und dient zur Altersbestimmung).</p>
<p>Im <b>Schalenmodell</b> (Bohr) verteilen sich die Elektronen auf Schalen: die 1. Schale fasst maximal <b>2</b>, die 2. Schale <b>8</b>, die 3. Schale (als Außenschale) <b>8</b> Elektronen (2-8-8). Natrium (11 Elektronen): 2-8-1. Chlor (17): 2-8-7. Die Elektronen der äußersten Schale heißen <b>Valenzelektronen (Außenelektronen)</b>; ihre Zahl entspricht der Hauptgruppe.</p>
<p><b>Edelgasregel (Oktettregel):</b> Atome streben eine volle Außenschale mit 8 Elektronen an (Helium: 2). Dafür geben sie Elektronen ab (Metalle → Kationen), nehmen welche auf (Nichtmetalle → Anionen) oder teilen sie (Elektronenpaarbindung).</p>`,
      aufgaben: [
        { t: "wahl", f: "Welche Teilchen befinden sich im Atomkern?", a: ["Protonen und Neutronen", "Protonen und Elektronen", "Nur Elektronen", "Neutronen und Elektronen"], r: 0, info: "Der Kern enthält die positiven Protonen und die neutralen Neutronen; die Elektronen sind in der Hülle." },
        { t: "wahl", f: "Welche Ladung haben Elektronen?", a: ["Negativ", "Positiv", "Neutral", "Wechselnd"], r: 0, info: "Elektronen sind negativ, Protonen positiv, Neutronen ungeladen." },
        { t: "wahl", f: "Was gibt die Ordnungszahl an?", a: ["Die Anzahl der Protonen", "Die Anzahl der Neutronen", "Die Anzahl der Schalen", "Die Masse des Atoms"], r: 0, info: "Die Protonenzahl legt das Element fest; im neutralen Atom ist sie gleich der Elektronenzahl." },
        { t: "wahl", f: "Wie berechnet man die Anzahl der Neutronen?", a: ["Massenzahl minus Ordnungszahl", "Massenzahl plus Ordnungszahl", "Ordnungszahl mal 2", "Massenzahl geteilt durch 2"], r: 0, info: "Massenzahl = Protonen + Neutronen, also Neutronen = Massenzahl − Protonen." },
        { t: "zahl", f: "Wie viele Neutronen hat das Isotop 23-Na (Natrium, Ordnungszahl 11)?", l: 12, tol: 0, einheit: "", info: "23 − 11 = 12 Neutronen." },
        { t: "zahl", f: "Wie viele Neutronen hat 35-Cl (Chlor, Ordnungszahl 17)?", l: 18, tol: 0, einheit: "", info: "35 − 17 = 18 Neutronen." },
        { t: "zahl", f: "Wie viele Neutronen hat 14-C (Kohlenstoff, Ordnungszahl 6)?", l: 8, tol: 0, einheit: "", info: "14 − 6 = 8 Neutronen; das normale 12-C hat nur 6." },
        { t: "zahl", f: "Wie viele Neutronen hat 56-Fe (Eisen, Ordnungszahl 26)?", l: 30, tol: 0, einheit: "", info: "56 − 26 = 30 Neutronen." },
        { t: "zahl", f: "Wie viele Elektronen hat ein neutrales Sauerstoffatom (Ordnungszahl 8)?", l: 8, tol: 0, einheit: "", info: "Im neutralen Atom gilt Elektronen = Protonen = 8." },
        { t: "zahl", f: "Wie viele Valenzelektronen hat Chlor (Elektronen 2-8-7)?", l: 7, tol: 0, einheit: "", info: "Die äußerste Schale trägt 7 Elektronen – Chlor steht in der VII. Hauptgruppe." },
        { t: "wahl", f: "Was sind Isotope?", a: ["Atome eines Elements mit verschiedener Neutronenzahl", "Atome mit verschiedener Protonenzahl", "Geladene Atome", "Moleküle aus zwei Atomen"], r: 0, info: "Isotope haben gleiche Ordnungszahl, aber unterschiedliche Massenzahl." },
        { t: "wahl", f: "Wie ist die Elektronenverteilung von Natrium (11 Elektronen)?", a: ["2-8-1", "2-9", "8-2-1", "2-8-8"], r: 0, info: "Erste Schale 2, zweite 8, auf der dritten bleibt 1 Elektron – daher I. Hauptgruppe." },
        { t: "wahl", f: "Wie viele Elektronen passen maximal auf die 1. Schale?", a: ["2", "8", "18", "1"], r: 0, info: "Die K-Schale fasst nur 2 Elektronen, die zweite 8." },
        { t: "wahl", f: "Was besagt die Edelgasregel?", a: ["Atome streben 8 Außenelektronen an", "Atome streben möglichst viele Elektronen an", "Edelgase reagieren am stärksten", "Atome haben immer 2 Schalen"], r: 0, info: "Mit voller Außenschale (Oktett) sind Atome besonders stabil – wie die Edelgase." },
        { t: "wahl", f: "Warum sind Edelgase so reaktionsträge?", a: ["Ihre Außenschale ist bereits voll besetzt", "Sie haben keine Elektronen", "Sie haben zu viele Protonen", "Sie sind zu schwer"], r: 0, info: "Edelgase erfüllen die Oktettregel schon und müssen keine Elektronen tauschen." },
        { t: "wahl", f: "Welche Aussage über die Atomhülle ist richtig?", a: ["Sie ist riesig im Vergleich zum Kern und fast leer", "Sie enthält die ganze Masse", "Sie ist positiv geladen", "Sie enthält Neutronen"], r: 0, info: "Der Kern ist etwa 10 000-mal kleiner als das Atom, trägt aber fast die gesamte Masse." },
        { t: "eingabe", f: "Die Elektronen der äußersten Schale nennt man ___ (Fachwort).", l: ["Valenzelektronen", "Außenelektronen"], info: "Valenzelektronen bestimmen das chemische Verhalten und die Hauptgruppe." },
        { t: "eingabe", f: "Gib die Elektronenverteilung von Chlor (17 Elektronen) als Zahlen mit Bindestrich an.", l: ["2-8-7"], info: "2 auf der ersten, 8 auf der zweiten, 7 auf der dritten Schale." },
        { t: "paare", f: "Ordne die Teilchen zu", p: [["Proton", "positiv, im Kern"], ["Neutron", "neutral, im Kern"], ["Elektron", "negativ, in der Hülle"]] },
        { t: "paare", f: "Ordne Elemente ihrer Elektronenverteilung zu", p: [["Helium", "2"], ["Sauerstoff", "2-6"], ["Magnesium", "2-8-2"], ["Argon", "2-8-8"]] }
      ]
    },
    {
      id: "bindungen",
      titel: "Chemische Bindungen",
      kurz: "Ionenbindung, Elektronenpaarbindung, Metallbindung, Formeln",
      erklaerung: `<p><b>Ionenbindung</b> entsteht zwischen <b>Metall und Nichtmetall</b>. Das Metall gibt Elektronen ab und wird zum positiven <b>Kation</b> (Na → Na<sup>+</sup>), das Nichtmetall nimmt sie auf und wird zum negativen <b>Anion</b> (Cl → Cl<sup>−</sup>). Die entgegengesetzt geladenen Ionen ziehen sich an und bilden ein <b>Ionengitter</b>. Solche Stoffe heißen <b>Salze</b>: hoher Schmelzpunkt, spröde, als Lösung oder Schmelze leitfähig. Beispiel: Natriumchlorid NaCl (Kochsalz).</p>
<p><b>Formeln bilden:</b> Die Ladungen müssen sich ausgleichen. Mg<sup>2+</sup> und Cl<sup>−</sup> → <b>MgCl<sub>2</sub></b>; Al<sup>3+</sup> und O<sup>2−</sup> → <b>Al<sub>2</sub>O<sub>3</sub></b>; Ca<sup>2+</sup> und O<sup>2−</sup> → <b>CaO</b>. Die Ionenladung ergibt sich aus der Hauptgruppe: I → +1, II → +2, III → +3, VI → −2, VII → −1.</p>
<p><b>Elektronenpaarbindung (Atombindung)</b> entsteht zwischen <b>Nichtmetallen</b>: Atome teilen sich Elektronenpaare, um die Edelgasregel zu erfüllen. So entstehen <b>Moleküle</b>: H<sub>2</sub>O (Wasser, gewinkelt), CO<sub>2</sub> (zwei Doppelbindungen), CH<sub>4</sub> (Methan, vier Einfachbindungen), O<sub>2</sub> (Doppelbindung), N<sub>2</sub> (Dreifachbindung). Bei ungleicher Elektronenanziehung ist die Bindung <b>polar</b> – Wasser ist ein <b>Dipol</b>.</p>
<p><b>Metallbindung:</b> Metallatome geben ihre Außenelektronen in ein gemeinsames <b>Elektronengas</b> ab; die positiven Atomrümpfe sitzen im Gitter. Die frei beweglichen Elektronen erklären, warum Metalle Strom und Wärme leiten, glänzen und verformbar sind.</p>`,
      aufgaben: [
        { t: "wahl", f: "Zwischen welchen Stoffklassen entsteht eine Ionenbindung?", a: ["Metall und Nichtmetall", "Nichtmetall und Nichtmetall", "Metall und Metall", "Edelgas und Metall"], r: 0, info: "Das Metall gibt Elektronen ab, das Nichtmetall nimmt sie auf – es entstehen Ionen." },
        { t: "wahl", f: "Was ist ein Kation?", a: ["Ein positiv geladenes Ion", "Ein negativ geladenes Ion", "Ein neutrales Atom", "Ein Molekül"], r: 0, info: "Kationen entstehen durch Elektronenabgabe, z. B. Na+." },
        { t: "wahl", f: "Welche Ladung hat ein Chlorid-Ion?", a: ["1−", "1+", "2−", "2+"], r: 0, info: "Chlor hat 7 Außenelektronen, nimmt eines auf und wird zu Cl− (Chlorid)." },
        { t: "wahl", f: "Welche Ladung hat ein Magnesium-Ion?", a: ["2+", "1+", "2−", "3+"], r: 0, info: "Magnesium steht in der II. Hauptgruppe und gibt 2 Elektronen ab: Mg2+." },
        { t: "wahl", f: "Welche Eigenschaft ist typisch für Salze?", a: ["Hoher Schmelzpunkt und spröde", "Niedriger Schmelzpunkt und weich", "Leiten als Feststoff Strom", "Sind immer gasförmig"], r: 0, info: "Im Ionengitter halten starke Anziehungskräfte; Strom leiten Salze nur gelöst oder geschmolzen." },
        { t: "wahl", f: "Warum leitet eine Kochsalzlösung Strom, festes Kochsalz aber nicht?", a: ["In Lösung sind die Ionen frei beweglich", "In Lösung entstehen Elektronen", "Festes Salz hat keine Ionen", "Wasser leitet immer Strom"], r: 0, info: "Nur frei bewegliche Ladungsträger leiten – im Gitter sitzen die Ionen fest." },
        { t: "eingabe", f: "Formel von Natriumchlorid (Kochsalz)?", l: ["NaCl"], info: "Na+ und Cl− gleichen sich 1:1 aus." },
        { t: "eingabe", f: "Formel von Magnesiumchlorid?", l: ["MgCl2"], info: "Mg2+ braucht zwei Cl−, um neutral zu sein: MgCl2." },
        { t: "eingabe", f: "Formel von Calciumoxid?", l: ["CaO"], info: "Ca2+ und O2− gleichen sich 1:1 aus." },
        { t: "eingabe", f: "Formel von Aluminiumoxid?", l: ["Al2O3"], info: "Zwei Al3+ (6+) und drei O2− (6−) ergeben Al2O3." },
        { t: "eingabe", f: "Formel von Kaliumbromid?", l: ["KBr"], info: "K+ und Br− im Verhältnis 1:1." },
        { t: "eingabe", f: "Formel von Methan (ein Kohlenstoffatom mit vier Wasserstoffatomen)?", l: ["CH4"], info: "Kohlenstoff braucht 4 Elektronen bis zum Oktett und bindet 4 Wasserstoffatome." },
        { t: "wahl", f: "Welche Bindung liegt im Wassermolekül H2O vor?", a: ["Elektronenpaarbindung (polar)", "Ionenbindung", "Metallbindung", "Keine Bindung"], r: 0, info: "Zwei Nichtmetalle teilen sich Elektronenpaare; Sauerstoff zieht stärker – Wasser ist ein Dipol." },
        { t: "wahl", f: "Wie viele Elektronenpaare teilen sich die beiden Atome im Sauerstoffmolekül O2?", a: ["2 (Doppelbindung)", "1 (Einfachbindung)", "3 (Dreifachbindung)", "4"], r: 0, info: "Jedes O-Atom hat 6 Außenelektronen und braucht 2 – also eine Doppelbindung." },
        { t: "wahl", f: "Welches Molekül hat eine Dreifachbindung?", a: ["N2", "O2", "H2", "CH4"], r: 0, info: "Stickstoff hat 5 Außenelektronen und braucht 3 – die Dreifachbindung ist extrem stabil." },
        { t: "wahl", f: "Was erklärt die elektrische Leitfähigkeit von Metallen?", a: ["Frei bewegliche Elektronen (Elektronengas)", "Frei bewegliche Ionen", "Feste Elektronenpaare", "Protonen im Gitter"], r: 0, info: "Im Metallgitter bewegen sich die Außenelektronen frei zwischen den Atomrümpfen." },
        { t: "paare", f: "Ordne die Bindungsart zu", p: [["NaCl", "Ionenbindung"], ["H2O", "Elektronenpaarbindung"], ["Eisen", "Metallbindung"], ["CO2", "Elektronenpaarbindung"], ["MgO", "Ionenbindung"]] },
        { t: "paare", f: "Ordne die Ionen ihrer Ladung zu", p: [["Natrium-Ion", "1+"], ["Calcium-Ion", "2+"], ["Aluminium-Ion", "3+"], ["Oxid-Ion", "2−"], ["Chlorid-Ion", "1−"]] },
        { t: "reihenfolge", f: "Ordne die Entstehung von Natriumchlorid", items: ["Natriumatom gibt ein Elektron ab", "Chloratom nimmt das Elektron auf", "Na+ und Cl− entstehen", "Ionen ordnen sich zum Ionengitter"] }
      ]
    },
    {
      id: "reaktionen",
      titel: "Chemische Reaktionen",
      kurz: "Edukte/Produkte, Energie, Katalysator, Gleichungen, Redox",
      erklaerung: `<p>Bei einer <b>chemischen Reaktion</b> werden Ausgangsstoffe (<b>Edukte</b>) in neue Stoffe (<b>Produkte</b>) mit anderen Eigenschaften umgewandelt. Atome werden dabei nur neu verknüpft, nie erzeugt oder vernichtet – das <b>Gesetz von der Erhaltung der Masse</b> (Lavoisier): Die Masse der Produkte ist gleich der Masse der Edukte.</p>
<p>Darum muss eine <b>Reaktionsgleichung</b> ausgeglichen sein: links und rechts gleich viele Atome jeder Sorte. 2 H<sub>2</sub> + O<sub>2</sub> → 2 H<sub>2</sub>O; CH<sub>4</sub> + 2 O<sub>2</sub> → CO<sub>2</sub> + 2 H<sub>2</sub>O; 4 Fe + 3 O<sub>2</sub> → 2 Fe<sub>2</sub>O<sub>3</sub>. Man ändert nur die Zahlen <i>vor</i> den Formeln (Koeffizienten), nie die kleinen Indizes.</p>
<p><b>Exotherme</b> Reaktionen geben Energie ab (Verbrennung, Wärme wird frei), <b>endotherme</b> brauchen ständig Energie (Fotosynthese, Kalkbrennen). Fast jede Reaktion braucht einen Anstoß, die <b>Aktivierungsenergie</b> (Streichholz). Ein <b>Katalysator</b> senkt die Aktivierungsenergie und beschleunigt die Reaktion, ohne verbraucht zu werden (Auto-Katalysator, Enzyme).</p>
<p><b>Oxidation</b> = Elektronenabgabe (früher: Reaktion mit Sauerstoff), <b>Reduktion</b> = Elektronenaufnahme (Sauerstoffabgabe). Beides läuft immer zusammen ab: <b>Redoxreaktion</b>. Beim <b>Thermitverfahren</b> reagiert Eisenoxid mit Aluminium: Fe<sub>2</sub>O<sub>3</sub> + 2 Al → 2 Fe + Al<sub>2</sub>O<sub>3</sub>. Aluminium wird oxidiert (Reduktionsmittel), Eisenoxid wird reduziert (Oxidationsmittel). Die Reaktion ist so heiß (über 2000 °C), dass flüssiges Eisen entsteht – damit werden Schienen verschweißt.</p>`,
      aufgaben: [
        { t: "wahl", f: "Wie nennt man die Ausgangsstoffe einer chemischen Reaktion?", a: ["Edukte", "Produkte", "Katalysatoren", "Indikatoren"], r: 0, info: "Edukte stehen links vom Reaktionspfeil, Produkte rechts." },
        { t: "wahl", f: "Was besagt das Gesetz von der Erhaltung der Masse?", a: ["Die Gesamtmasse bleibt bei einer Reaktion gleich", "Die Masse nimmt bei Verbrennung ab", "Produkte sind immer schwerer", "Atome werden neu erzeugt"], r: 0, info: "Atome werden nur umgruppiert – darum müssen Gleichungen ausgeglichen werden." },
        { t: "wahl", f: "Welche Gleichung für die Knallgasreaktion ist richtig ausgeglichen?", a: ["2 H2 + O2 → 2 H2O", "H2 + O2 → H2O", "H2 + O2 → 2 H2O", "2 H2 + 2 O2 → 2 H2O"], r: 0, info: "Links 4 H und 2 O, rechts 2 × H2O = 4 H und 2 O." },
        { t: "wahl", f: "Welche Gleichung für die Verbrennung von Methan ist richtig?", a: ["CH4 + 2 O2 → CO2 + 2 H2O", "CH4 + O2 → CO2 + H2O", "CH4 + 2 O2 → CO2 + H2O", "2 CH4 + O2 → 2 CO2 + 4 H2O"], r: 0, info: "1 C, 4 H und 4 O auf jeder Seite." },
        { t: "wahl", f: "Welche Gleichung für die Bildung von Eisenoxid (Rost) ist richtig?", a: ["4 Fe + 3 O2 → 2 Fe2O3", "Fe + O2 → FeO2", "2 Fe + O2 → Fe2O3", "Fe + O → FeO3"], r: 0, info: "4 Fe und 6 O links, 2 × Fe2O3 = 4 Fe und 6 O rechts." },
        { t: "wahl", f: "Welche Gleichung für die Verbrennung von Magnesium ist richtig?", a: ["2 Mg + O2 → 2 MgO", "Mg + O2 → MgO", "Mg + O2 → MgO2", "2 Mg + O2 → MgO"], r: 0, info: "Zwei Mg-Atome binden die zwei O-Atome des Sauerstoffmoleküls." },
        { t: "wahl", f: "Welche Gleichung beschreibt die Bildung von Kochsalz richtig?", a: ["2 Na + Cl2 → 2 NaCl", "Na + Cl2 → NaCl", "Na + Cl → NaCl2", "2 Na + Cl2 → NaCl"], r: 0, info: "Chlor liegt als Cl2 vor, deshalb werden 2 Na für 2 NaCl gebraucht." },
        { t: "wahl", f: "Was ist eine exotherme Reaktion?", a: ["Eine Reaktion, die Energie abgibt", "Eine Reaktion, die ständig Energie braucht", "Eine Reaktion ohne Energieumsatz", "Eine Reaktion mit Katalysator"], r: 0, info: "Verbrennungen sind exotherm – Wärme und Licht werden frei." },
        { t: "wahl", f: "Welche Reaktion ist endotherm?", a: ["Fotosynthese", "Verbrennung von Holz", "Rosten von Eisen", "Knallgasreaktion"], r: 0, info: "Die Fotosynthese braucht ständig Lichtenergie, um Zucker aufzubauen." },
        { t: "wahl", f: "Was ist die Aktivierungsenergie?", a: ["Die Energie, die nötig ist, um eine Reaktion zu starten", "Die Energie, die bei der Reaktion frei wird", "Die Energie des Katalysators", "Die Masse der Edukte"], r: 0, info: "Holz brennt nicht von allein – das Streichholz liefert die Aktivierungsenergie." },
        { t: "wahl", f: "Was macht ein Katalysator?", a: ["Er senkt die Aktivierungsenergie und wird nicht verbraucht", "Er wird bei der Reaktion verbraucht", "Er erhöht die Aktivierungsenergie", "Er verändert die Produkte"], r: 0, info: "Katalysatoren beschleunigen Reaktionen und liegen danach unverändert vor." },
        { t: "wahl", f: "Was ist eine Oxidation (nach dem erweiterten Begriff)?", a: ["Elektronenabgabe", "Elektronenaufnahme", "Wasseraufnahme", "Abkühlung"], r: 0, info: "Oxidation = Elektronenabgabe; der Stoff, der oxidiert wird, ist das Reduktionsmittel." },
        { t: "wahl", f: "Beim Thermitverfahren reagiert Eisenoxid mit Aluminium. Welcher Stoff wird reduziert?", a: ["Eisenoxid", "Aluminium", "Sauerstoff", "Eisen"], r: 0, info: "Eisenoxid gibt Sauerstoff ab bzw. Fe3+ nimmt Elektronen auf – es wird zu Eisen reduziert." },
        { t: "wahl", f: "Wozu wird das Thermitverfahren praktisch genutzt?", a: ["Zum Verschweißen von Eisenbahnschienen", "Zur Herstellung von Kochsalz", "Zum Löschen von Bränden", "Zur Fotosynthese"], r: 0, info: "Das flüssige, über 2000 °C heiße Eisen fließt in die Lücke zwischen den Schienen." },
        { t: "eingabe", f: "Elektronenabgabe und Elektronenaufnahme laufen immer gekoppelt ab. Wie heißt eine solche Reaktion?", l: ["Redoxreaktion", "Redox-Reaktion", "Redox"], info: "Redox = Reduktion + Oxidation; die Elektronen wechseln den Besitzer." },
        { t: "eingabe", f: "Wie heißt die Reaktion eines Stoffes mit Sauerstoff unter Abgabe von Energie allgemein?", l: ["Verbrennung", "Oxidation"], info: "Verbrennung ist eine schnelle, exotherme Oxidation mit Flamme." },
        { t: "eingabe", f: "Wer stellte das Gesetz von der Erhaltung der Masse auf (Nachname)?", l: ["Lavoisier", "Antoine Lavoisier"], info: "Antoine Lavoisier wog Edukte und Produkte in geschlossenen Gefäßen." },
        { t: "paare", f: "Ordne zu", p: [["exotherm", "gibt Energie ab"], ["endotherm", "nimmt Energie auf"], ["Katalysator", "senkt Aktivierungsenergie"], ["Edukt", "Ausgangsstoff"], ["Produkt", "entstehender Stoff"]] },
        { t: "paare", f: "Thermitverfahren: Ordne die Rollen zu", p: [["Aluminium", "wird oxidiert"], ["Eisenoxid", "wird reduziert"], ["Aluminium", "Reduktionsmittel"], ["Eisenoxid", "Oxidationsmittel"]] },
        { t: "reihenfolge", f: "Ordne den Ablauf einer Verbrennung", items: ["Aktivierungsenergie zuführen (Streichholz)", "Reaktion mit Sauerstoff beginnt", "Energie wird frei (exotherm)", "Produkte (z. B. CO2 und H2O) entstehen"] }
      ]
    },
    {
      id: "saeuren",
      titel: "Säuren, Basen, Salze",
      kurz: "pH-Skala, Indikatoren, Neutralisation, wichtige Säuren und Laugen",
      erklaerung: `<p><b>Säuren</b> geben in Wasser <b>H<sup>+</sup>-Ionen</b> (Protonen, genauer H<sub>3</sub>O<sup>+</sup>) ab. <b>Basen (Laugen)</b> bilden in Wasser <b>OH<sup>−</sup>-Ionen</b> (Hydroxid-Ionen). Die <b>pH-Skala</b> reicht von 0 bis 14: pH < 7 sauer, pH = 7 neutral (reines Wasser), pH > 7 basisch (alkalisch). Je kleiner der pH, desto saurer; ein pH-Schritt bedeutet zehnmal so viele H<sup>+</sup>-Ionen.</p>
<p><b>Indikatoren</b> zeigen den pH durch Farbe: <b>Universalindikator</b> (rot = sauer, grün = neutral, blau = basisch), <b>Lackmus</b> (rot in Säure, blau in Lauge), <b>Phenolphthalein</b> (farblos in Säure, pink in Lauge), <b>Rotkohlsaft</b> als Hausmittel.</p>
<p>Wichtige Säuren: <b>Salzsäure HCl</b> (Magensäure, Reiniger), <b>Schwefelsäure H<sub>2</sub>SO<sub>4</sub></b> (Autobatterie), <b>Salpetersäure HNO<sub>3</sub></b> (Dünger, Sprengstoffe), <b>Kohlensäure H<sub>2</sub>CO<sub>3</sub></b> (Sprudel, zerfällt zu CO<sub>2</sub> und Wasser). Wichtige Laugen: <b>Natronlauge NaOH</b> (Abflussreiniger), <b>Kalilauge KOH</b> (Seife), <b>Kalkwasser Ca(OH)<sub>2</sub></b> (Mörtel, Nachweis von CO<sub>2</sub>).</p>
<p><b>Neutralisation:</b> Säure + Lauge → Salz + Wasser. H<sup>+</sup> und OH<sup>−</sup> verbinden sich zu H<sub>2</sub>O, die Reaktion ist exotherm. HCl + NaOH → NaCl + H<sub>2</sub>O. Salze sind nach Säure und Base benannt: aus Schwefelsäure entstehen <b>Sulfate</b>, aus Salpetersäure <b>Nitrate</b>, aus Kohlensäure <b>Carbonate</b>, aus Salzsäure <b>Chloride</b>.</p>
<p><b>Saurer Regen</b> entsteht, wenn Schwefeldioxid (SO<sub>2</sub>) und Stickoxide (NO<sub>x</sub>) aus Abgasen mit Regenwasser zu Schwefel- und Salpetersäure reagieren. Er schädigt Wälder, Gewässer und Bauwerke aus Kalkstein. Abhilfe: Rauchgasentschwefelung und Katalysatoren.</p>`,
      aufgaben: [
        { t: "wahl", f: "Welchen pH-Wert hat reines Wasser?", a: ["7", "0", "14", "1"], r: 0, info: "pH 7 ist neutral – gleich viele H+ und OH−-Ionen." },
        { t: "wahl", f: "Eine Lösung hat pH 2. Sie ist …", a: ["stark sauer", "schwach sauer", "neutral", "basisch"], r: 0, info: "Je näher an 0, desto saurer – Magensäure liegt etwa bei pH 1 bis 2." },
        { t: "wahl", f: "Eine Lösung hat pH 12. Sie ist …", a: ["stark basisch", "schwach sauer", "neutral", "stark sauer"], r: 0, info: "Werte über 7 sind basisch (alkalisch), z. B. Abflussreiniger." },
        { t: "wahl", f: "Welche Ionen sind für saure Eigenschaften verantwortlich?", a: ["H+ (Wasserstoff-Ionen)", "OH− (Hydroxid-Ionen)", "Na+", "Cl−"], r: 0, info: "Säuren geben Protonen (H+) ab, die mit Wasser H3O+ bilden." },
        { t: "wahl", f: "Welche Ionen enthalten Laugen?", a: ["OH− (Hydroxid-Ionen)", "H+", "SO4 2−", "NO3−"], r: 0, info: "Basen bilden in Wasser Hydroxid-Ionen OH−." },
        { t: "wahl", f: "Welche Farbe zeigt Universalindikator in einer Säure?", a: ["Rot", "Blau", "Grün", "Farblos"], r: 0, info: "Rot = sauer, grün = neutral, blau/violett = basisch." },
        { t: "wahl", f: "Wie verhält sich Phenolphthalein in einer Lauge?", a: ["Es wird pink/violett", "Es bleibt farblos", "Es wird gelb", "Es wird grün"], r: 0, info: "Phenolphthalein ist in Säure und neutral farblos, in Laugen pink." },
        { t: "wahl", f: "Was entsteht bei der Neutralisation von Säure und Lauge?", a: ["Salz und Wasser", "Nur Wasser", "Ein Gas", "Eine neue Säure"], r: 0, info: "H+ und OH− bilden Wasser, die restlichen Ionen bilden das Salz." },
        { t: "wahl", f: "Welches Salz entsteht aus Salzsäure und Natronlauge?", a: ["Natriumchlorid NaCl", "Natriumsulfat", "Calciumchlorid", "Natriumnitrat"], r: 0, info: "HCl + NaOH → NaCl + H2O." },
        { t: "wahl", f: "Welche Säure befindet sich in der Autobatterie?", a: ["Schwefelsäure H2SO4", "Salzsäure HCl", "Kohlensäure H2CO3", "Salpetersäure HNO3"], r: 0, info: "Bleiakkus enthalten verdünnte Schwefelsäure." },
        { t: "wahl", f: "Welche Säure ist in Mineralwasser mit Sprudel?", a: ["Kohlensäure H2CO3", "Salzsäure HCl", "Schwefelsäure H2SO4", "Salpetersäure HNO3"], r: 0, info: "CO2 reagiert mit Wasser zu Kohlensäure, die leicht wieder zerfällt." },
        { t: "wahl", f: "Wie entsteht saurer Regen?", a: ["Schwefeldioxid und Stickoxide aus Abgasen reagieren mit Regenwasser zu Säuren", "Kohlensäure aus Sprudel verdunstet", "Laugen gelangen in die Luft", "Durch Ozon in großer Höhe"], r: 0, info: "SO2 → Schwefelsäure, NOx → Salpetersäure; Wälder und Kalkbauten werden geschädigt." },
        { t: "eingabe", f: "Formel von Salzsäure?", l: ["HCl"], info: "Chlorwasserstoff in Wasser gelöst heißt Salzsäure." },
        { t: "eingabe", f: "Formel von Schwefelsäure?", l: ["H2SO4"], info: "Zwei H+, ein Sulfat-Ion SO4 2−." },
        { t: "eingabe", f: "Formel von Natronlauge (Natriumhydroxid)?", l: ["NaOH"], info: "Na+ und OH− – eine starke Lauge." },
        { t: "eingabe", f: "Formel von Salpetersäure?", l: ["HNO3"], info: "Ihre Salze heißen Nitrate." },
        { t: "paare", f: "Ordne Säuren ihre Formeln zu", p: [["Salzsäure", "HCl"], ["Schwefelsäure", "H2SO4"], ["Salpetersäure", "HNO3"], ["Kohlensäure", "H2CO3"]] },
        { t: "paare", f: "Ordne Laugen ihre Formeln zu", p: [["Natronlauge", "NaOH"], ["Kalilauge", "KOH"], ["Kalkwasser", "Ca(OH)2"]] },
        { t: "paare", f: "Ordne die Salznamen den Säuren zu", p: [["Schwefelsäure", "Sulfate"], ["Salpetersäure", "Nitrate"], ["Kohlensäure", "Carbonate"], ["Salzsäure", "Chloride"]] },
        { t: "reihenfolge", f: "Ordne von stark sauer bis stark basisch", items: ["Magensäure (pH 1)", "Essig (pH 3)", "Reines Wasser (pH 7)", "Seifenlauge (pH 10)", "Abflussreiniger (pH 13)"] }
      ]
    },
    {
      id: "alltag",
      titel: "Chemie im Alltag",
      kurz: "Verbrennung, Korrosion, Kalk, Kunststoffe, Wasserhärte, Gefahrensymbole",
      erklaerung: `<p><b>Verbrennung</b> braucht drei Dinge – das <b>Branddreieck</b>: <b>Brennstoff</b>, <b>Sauerstoff</b> und <b>Zündtemperatur</b> (Wärme). Fehlt eines, erlischt das Feuer. Löschen heißt also: Brennstoff entfernen, Sauerstoff abschneiden (Decke, CO<sub>2</sub>, Schaum) oder kühlen (Wasser). <b>Fettbrände nie mit Wasser löschen</b> – das Wasser verdampft schlagartig und schleudert brennendes Fett heraus. Bei zu wenig Sauerstoff entsteht statt CO<sub>2</sub> das giftige <b>Kohlenstoffmonoxid CO</b>.</p>
<p><b>Korrosion</b> ist die langsame Zerstörung von Metallen durch Reaktion mit der Umgebung. <b>Rosten</b> von Eisen braucht Wasser <i>und</i> Sauerstoff; Salz beschleunigt es. Schutz: Lackieren, Fetten, <b>Verzinken</b> (Zink opfert sich), Edelstahl (Chrom bildet eine dichte Oxidschicht). Edle Metalle wie Gold korrodieren nicht, unedle wie Eisen und Zink schon.</p>
<p><b>Kalkkreislauf:</b> Kalkstein (<b>Calciumcarbonat CaCO<sub>3</sub></b>) wird gebrannt → <b>Branntkalk CaO</b> + CO<sub>2</sub>; mit Wasser gelöscht → <b>Löschkalk Ca(OH)<sub>2</sub></b>; dieser nimmt an der Luft CO<sub>2</sub> auf und wird wieder zu festem Kalk – so härtet Mörtel aus. <b>Wasserhärte</b> kommt von gelösten Calcium- und Magnesium-Ionen; beim Erhitzen fällt Kalk aus (Kesselstein im Wasserkocher). Entkalken geht mit Säuren (Essig, Zitronensäure).</p>
<p><b>Kunststoffe</b> bestehen aus riesigen Molekülketten (<b>Polymere</b>) aus Erdöl. <b>Thermoplaste</b> (PE, PET, PVC) werden beim Erwärmen weich und sind recycelbar, <b>Duroplaste</b> bleiben hart und zersetzen sich, <b>Elastomere</b> (Gummi) sind elastisch.</p>
<p><b>GHS-Gefahrensymbole</b> (weiße Raute mit rotem Rand): Flamme = entzündbar, Flamme über Kreis = brandfördernd, explodierende Bombe = explosiv, Totenkopf = giftig, Ätzsymbol = ätzend, Ausrufezeichen = reizend/gesundheitsschädlich, Gasflasche = Gas unter Druck, Torso mit Stern = gesundheitsgefährdend (z. B. krebserregend), toter Baum und Fisch = umweltgefährlich.</p>`,
      aufgaben: [
        { t: "wahl", f: "Welche drei Dinge braucht ein Feuer (Branddreieck)?", a: ["Brennstoff, Sauerstoff, Zündtemperatur", "Brennstoff, Wasser, Luft", "Holz, Kohle, Gas", "Sauerstoff, Stickstoff, Wärme"], r: 0, info: "Fehlt eine der drei Bedingungen, erlischt die Flamme." },
        { t: "wahl", f: "Wie wirkt eine Löschdecke?", a: ["Sie schneidet den Sauerstoff ab", "Sie kühlt die Flamme", "Sie entfernt den Brennstoff", "Sie senkt die Zündtemperatur"], r: 0, info: "Ohne Sauerstoff kann die Verbrennung nicht weiterlaufen – Ersticken des Feuers." },
        { t: "wahl", f: "Warum darf man brennendes Fett nicht mit Wasser löschen?", a: ["Das Wasser verdampft schlagartig und schleudert brennendes Fett heraus", "Wasser brennt selbst", "Wasser macht das Fett giftig", "Das Fett wird dadurch fest"], r: 0, info: "Fettexplosion: Wasser sinkt ins heiße Fett, verdampft explosionsartig und reißt Fett mit." },
        { t: "wahl", f: "Welches giftige Gas entsteht bei unvollständiger Verbrennung?", a: ["Kohlenstoffmonoxid CO", "Kohlenstoffdioxid CO2", "Sauerstoff O2", "Stickstoff N2"], r: 0, info: "CO ist farb- und geruchlos und blockiert den Sauerstofftransport im Blut." },
        { t: "wahl", f: "Was braucht Eisen, um zu rosten?", a: ["Wasser und Sauerstoff", "Nur Wasser", "Nur Sauerstoff", "Nur Wärme"], r: 0, info: "Rost ist Eisenoxid-Hydrat; ohne Wasser oder ohne Sauerstoff rostet Eisen nicht." },
        { t: "wahl", f: "Warum schützt Verzinken Eisen vor Rost?", a: ["Zink ist unedler und wird anstelle des Eisens oxidiert", "Zink ist edler als Eisen", "Zink macht Eisen härter", "Zink verhindert Wärme"], r: 0, info: "Das unedlere Zink „opfert“ sich – selbst bei Kratzern bleibt das Eisen geschützt." },
        { t: "wahl", f: "Was ist Kalkstein chemisch?", a: ["Calciumcarbonat CaCO3", "Calciumoxid CaO", "Calciumhydroxid Ca(OH)2", "Calciumchlorid CaCl2"], r: 0, info: "Kalkstein, Marmor und Kreide bestehen aus Calciumcarbonat." },
        { t: "wahl", f: "Was entsteht beim Brennen von Kalk?", a: ["Branntkalk CaO und CO2", "Löschkalk und Wasser", "Gips", "Kochsalz"], r: 0, info: "CaCO3 → CaO + CO2 bei etwa 1000 °C – eine endotherme Reaktion." },
        { t: "wahl", f: "Wodurch wird Wasser „hart“?", a: ["Gelöste Calcium- und Magnesium-Ionen", "Gelöstes Kochsalz", "Hohe Temperatur", "Gelöster Sauerstoff"], r: 0, info: "Beim Erhitzen fallen die Ionen als Kalk aus – Kesselstein im Wasserkocher." },
        { t: "wahl", f: "Womit entkalkt man einen Wasserkocher am besten?", a: ["Mit einer Säure wie Essig oder Zitronensäure", "Mit Natronlauge", "Mit Kochsalz", "Mit Öl"], r: 0, info: "Säuren lösen Calciumcarbonat auf; dabei entweicht CO2 (es sprudelt)." },
        { t: "wahl", f: "Welche Kunststoffe werden beim Erwärmen weich und lassen sich recyceln?", a: ["Thermoplaste", "Duroplaste", "Elastomere", "Keramiken"], r: 0, info: "PE, PET und PVC sind Thermoplaste; Duroplaste zersetzen sich beim Erhitzen." },
        { t: "wahl", f: "Woraus bestehen Kunststoffe chemisch?", a: ["Aus langen Molekülketten (Polymeren)", "Aus Ionengittern", "Aus Metallatomen", "Aus einzelnen Atomen"], r: 0, info: "Viele kleine Bausteine (Monomere) werden zu Polymerketten verknüpft." },
        { t: "wahl", f: "Was bedeutet das GHS-Symbol mit dem Totenkopf?", a: ["Giftig – schon kleine Mengen können tödlich sein", "Entzündbar", "Ätzend", "Umweltgefährlich"], r: 0, info: "Der Totenkopf steht für akute Giftigkeit." },
        { t: "wahl", f: "Welches GHS-Symbol steht für „ätzend“?", a: ["Reagenzglas, aus dem Tropfen auf Hand und Metall fallen", "Flamme", "Ausrufezeichen", "Toter Baum und Fisch"], r: 0, info: "Ätzende Stoffe wie Natronlauge oder konzentrierte Säuren zerstören Haut und Metalle." },
        { t: "eingabe", f: "Die langsame Zerstörung von Metallen durch Umwelteinflüsse heißt ___.", l: ["Korrosion"], info: "Rosten ist die bekannteste Form der Korrosion." },
        { t: "eingabe", f: "Wie heißt der weiße Belag aus Calciumcarbonat im Wasserkocher?", l: ["Kesselstein", "Kalk"], info: "Hartes Wasser scheidet beim Erhitzen Kalk ab." },
        { t: "eingabe", f: "Mit welchem Metall überzieht man Eisen, damit es nicht rostet (unedler als Eisen)?", l: ["Zink"], info: "Verzinktes Eisen hält Jahrzehnte – das Zink wird zuerst oxidiert." },
        { t: "paare", f: "Ordne die GHS-Gefahrensymbole zu", p: [["Flamme", "entzündbar"], ["Totenkopf", "giftig"], ["Ausrufezeichen", "reizend"], ["toter Baum und Fisch", "umweltgefährlich"], ["explodierende Bombe", "explosiv"]] },
        { t: "paare", f: "Ordne weitere GHS-Symbole zu", p: [["Flamme über Kreis", "brandfördernd"], ["Gasflasche", "Gas unter Druck"], ["Torso mit Stern", "gesundheitsgefährdend"], ["Tropfen auf Hand und Metall", "ätzend"]] },
        { t: "reihenfolge", f: "Ordne den Kalkkreislauf", items: ["Kalkstein CaCO3", "Brennen → Branntkalk CaO", "Löschen mit Wasser → Löschkalk Ca(OH)2", "CO2 aus der Luft → Mörtel härtet zu CaCO3"] },
      ]
    }
  ]
};
window.FAECHER.push(FACH);
})();
