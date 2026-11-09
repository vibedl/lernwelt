"use strict";
(function () {
const FACH = {
  id: "biologie",
  name: "Biologie",
  icon: "🧬",
  farbe: "#2e8b57",
  beschreibung: "Zelle, Genetik, DNA, Nerven, Hormone, Immunsystem, Ökologie, Evolution",
  themen: [
    {
      id: "zelle",
      titel: "Zelle & Zellteilung",
      kurz: "Zellorganellen, Mitose, Meiose, Chromosomen",
      erklaerung: `<p>Die <b>Zelle</b> ist die kleinste lebende Einheit. Tierische und pflanzliche Zellen haben einen <b>Zellkern</b> (steuert alles, enthält die DNA), <b>Mitochondrien</b> (Zellatmung, liefern Energie), <b>Ribosomen</b> (bauen Proteine), das <b>Endoplasmatische Retikulum</b> (Transport) und den <b>Golgi-Apparat</b> (verpackt und verschickt Stoffe).</p>
<p>Nur Pflanzenzellen haben zusätzlich eine <b>Zellwand</b> aus Zellulose, <b>Chloroplasten</b> für die Fotosynthese und eine große <b>Vakuole</b>, die Wasser speichert und die Zelle prall hält.</p>
<p>Der Mensch hat in jeder Körperzelle <b>46 Chromosomen</b> (23 Paare). Keimzellen (Eizelle, Spermium) haben nur <b>23 Chromosomen</b>, damit bei der Befruchtung wieder 46 entstehen.</p>
<p>Bei der <b>Mitose</b> entstehen aus einer Zelle zwei genetisch identische Tochterzellen mit je 46 Chromosomen. Sie dient dem Wachstum und der Erneuerung. Die Phasen: <b>Prophase</b> (Chromosomen werden sichtbar, Kernhülle löst sich auf), <b>Metaphase</b> (Chromosomen ordnen sich in der Mitte an), <b>Anaphase</b> (Chromatiden werden zu den Polen gezogen), <b>Telophase</b> (neue Kernhüllen, die Zelle schnürt sich durch).</p>
<p>Bei der <b>Meiose</b> entstehen aus einer Zelle vier Keimzellen mit halbem Chromosomensatz (23). Sie läuft in zwei Teilungen ab und mischt das Erbgut neu. Typischer Fehler: Mitose und Meiose verwechseln – merke: Mei<b>o</b>se = Keimzellen, halbiert.</p>`,
      aufgaben: [
        { t: "wahl", f: "Welches Zellorganell steuert die Zelle und enthält die DNA?", a: ["Zellkern", "Mitochondrium", "Ribosom", "Vakuole"], r: 0, info: "Der Zellkern enthält die Chromosomen mit der Erbinformation und steuert so die Zelle." },
        { t: "wahl", f: "Welches Organell nennt man das „Kraftwerk der Zelle“?", a: ["Mitochondrium", "Golgi-Apparat", "Chloroplast", "Zellmembran"], r: 0, info: "In den Mitochondrien läuft die Zellatmung ab, die Energie aus Zucker freisetzt." },
        { t: "wahl", f: "Was haben nur Pflanzenzellen, aber keine tierischen Zellen?", a: ["Zellwand und Chloroplasten", "Zellkern und Ribosomen", "Mitochondrien und Zellmembran", "Golgi-Apparat"], r: 0, info: "Zellwand, Chloroplasten und große Vakuole sind typisch für Pflanzenzellen." },
        { t: "wahl", f: "Wo werden in der Zelle Proteine hergestellt?", a: ["An den Ribosomen", "Im Zellkern", "In der Vakuole", "In den Mitochondrien"], r: 0, info: "Ribosomen lesen die mRNA ab und bauen daraus Proteine." },
        { t: "zahl", f: "Wie viele Chromosomen hat eine menschliche Körperzelle?", l: 46, tol: 0, einheit: "", info: "23 Paare, also 46 Chromosomen – davon ein Paar Geschlechtschromosomen." },
        { t: "zahl", f: "Wie viele Chromosomen hat eine menschliche Eizelle?", l: 23, tol: 0, einheit: "", info: "Keimzellen haben den halben Satz (23), damit nach der Befruchtung wieder 46 vorliegen." },
        { t: "reihenfolge", f: "Bringe die Phasen der Mitose in die richtige Reihenfolge", items: ["Prophase", "Metaphase", "Anaphase", "Telophase"] },
        { t: "reihenfolge", f: "Ordne die Vorgänge der Mitose zeitlich", items: ["Chromosomen werden sichtbar, Kernhülle löst sich auf", "Chromosomen ordnen sich in der Äquatorialebene an", "Chromatiden werden zu den Zellpolen gezogen", "Neue Kernhüllen entstehen, Zelle teilt sich"] },
        { t: "wahl", f: "Wie viele Tochterzellen entstehen bei der Mitose?", a: ["2", "1", "4", "8"], r: 0, info: "Die Mitose liefert zwei genetisch identische Tochterzellen." },
        { t: "wahl", f: "Wie viele Zellen entstehen am Ende der Meiose aus einer Ausgangszelle?", a: ["4", "2", "1", "6"], r: 0, info: "Zwei Teilungen hintereinander ergeben vier Keimzellen mit halbem Chromosomensatz." },
        { t: "wahl", f: "Welche Aussage über die Meiose ist richtig?", a: ["Der Chromosomensatz wird halbiert", "Es entstehen zwei identische Zellen", "Sie dient dem Wachstum", "Sie findet in allen Körperzellen statt"], r: 0, info: "Die Meiose halbiert den Chromosomensatz und findet nur bei der Bildung von Keimzellen statt." },
        { t: "wahl", f: "Wozu dient die Mitose im Körper?", a: ["Wachstum und Ersatz von Zellen", "Bildung von Spermien", "Bildung von Eizellen", "Neukombination der Gene"], r: 0, info: "Durch Mitose wächst der Körper und ersetzt abgestorbene Zellen, zum Beispiel in der Haut." },
        { t: "paare", f: "Ordne die Organellen ihrer Aufgabe zu", p: [["Zellkern", "steuert die Zelle, enthält DNA"], ["Mitochondrium", "Zellatmung, Energie"], ["Chloroplast", "Fotosynthese"], ["Vakuole", "speichert Wasser und Stoffe"], ["Ribosom", "baut Proteine"]] },
        { t: "paare", f: "Mitose oder Meiose? Ordne zu", p: [["2 Tochterzellen", "Mitose"], ["4 Keimzellen", "Meiose"], ["Chromosomensatz bleibt 46", "Mitose"], ["Chromosomensatz wird 23", "Meiose"]] },
        { t: "eingabe", f: "Die Zellmembran grenzt die Zelle ab und ist ___ durchlässig (Fachwort).", l: ["selektiv", "semipermeabel", "halbdurchlässig"], info: "Die Membran lässt nur bestimmte Stoffe hindurch – sie ist selektiv (semipermeabel)." },
        { t: "eingabe", f: "Wie heißt der Vorgang, bei dem Wasser durch eine halbdurchlässige Membran vom Ort niedriger zu hoher Teilchenkonzentration wandert?", l: ["Osmose"], info: "Osmose ist die Diffusion von Wasser durch eine semipermeable Membran." },
        { t: "eingabe", f: "Ein Chromosom vor der Teilung besteht aus zwei identischen ___.", l: ["Chromatiden", "Schwesterchromatiden"], info: "Die beiden Chromatiden hängen am Centromer zusammen und werden in der Anaphase getrennt." },
        { t: "wahl", f: "Welche Zellen des Menschen haben nur 23 Chromosomen?", a: ["Eizellen und Spermien", "Hautzellen", "Nervenzellen", "Muskelzellen"], r: 0, info: "Nur Keimzellen haben den einfachen (haploiden) Chromosomensatz." }
      ]
    },
    {
      id: "genetik",
      titel: "Klassische Genetik",
      kurz: "Mendel-Regeln, dominant/rezessiv, Kreuzungsschema, Blutgruppen",
      erklaerung: `<p>Gregor <b>Mendel</b> kreuzte Erbsen und fand drei Regeln. <b>1. Uniformitätsregel:</b> Kreuzt man zwei reinerbige Eltern (z. B. AA × aa), sehen alle Nachkommen der F1 gleich aus (Aa). <b>2. Spaltungsregel:</b> Kreuzt man die F1 untereinander (Aa × Aa), spalten die Merkmale in der F2 im Verhältnis <b>3 : 1</b> auf (Genotyp 1 : 2 : 1). <b>3. Unabhängigkeitsregel:</b> Zwei verschiedene Merkmale werden unabhängig voneinander vererbt (Verhältnis 9 : 3 : 3 : 1).</p>
<p>Ein <b>dominantes</b> Allel (großer Buchstabe, A) setzt sich durch, ein <b>rezessives</b> (kleiner Buchstabe, a) zeigt sich nur, wenn es doppelt vorliegt (aa). Der <b>Genotyp</b> ist die Kombination der Allele (AA, Aa, aa), der <b>Phänotyp</b> das sichtbare Merkmal. <b>Homozygot</b> = reinerbig (AA oder aa), <b>heterozygot</b> = mischerbig (Aa).</p>
<p>Bei den <b>Blutgruppen AB0</b> gibt es drei Allele: A und B sind dominant gegenüber 0 und untereinander <b>kodominant</b> (beide zeigen sich). Blutgruppe 0 hat den Genotyp 00, Blutgruppe AB den Genotyp AB.</p>
<p>Die <b>Rot-Grün-Schwäche</b> wird rezessiv auf dem <b>X-Chromosom</b> vererbt. Männer (XY) haben nur ein X – ein krankes Allel reicht aus. Frauen (XX) brauchen zwei kranke Allele; mit einem sind sie gesunde <b>Überträgerinnen (Konduktorinnen)</b>. Darum sind Männer viel häufiger betroffen.</p>`,
      aufgaben: [
        { t: "wahl", f: "Was besagt Mendels 1. Regel (Uniformitätsregel)?", a: ["Nachkommen reinerbiger Eltern sehen alle gleich aus", "Die F2 spaltet 3:1 auf", "Merkmale werden unabhängig vererbt", "Rezessive Merkmale verschwinden für immer"], r: 0, info: "Kreuzt man zwei reinerbige Eltern, ist die ganze F1-Generation uniform (gleich)." },
        { t: "wahl", f: "In welchem Verhältnis spaltet der Phänotyp in der F2 bei einem dominant-rezessiven Erbgang auf?", a: ["3 : 1", "1 : 1", "1 : 2 : 1", "9 : 3 : 3 : 1"], r: 0, info: "Aa × Aa ergibt AA, Aa, Aa, aa – drei zeigen das dominante Merkmal, eins das rezessive." },
        { t: "wahl", f: "Welches Genotyp-Verhältnis ergibt die Kreuzung Aa × Aa?", a: ["1 AA : 2 Aa : 1 aa", "3 AA : 1 aa", "1 AA : 1 aa", "2 AA : 2 aa"], r: 0, info: "Im Kreuzungsschema entstehen AA, Aa, Aa und aa – also 1 : 2 : 1." },
        { t: "wahl", f: "Was bedeutet „rezessiv“?", a: ["Das Merkmal zeigt sich nur, wenn das Allel doppelt vorliegt", "Das Merkmal setzt sich immer durch", "Das Merkmal ist geschlechtsgebunden", "Das Merkmal wird nicht vererbt"], r: 0, info: "Ein rezessives Allel wird vom dominanten überdeckt und zeigt sich nur im Genotyp aa." },
        { t: "wahl", f: "Welcher Genotyp ist heterozygot (mischerbig)?", a: ["Aa", "AA", "aa", "00"], r: 0, info: "Heterozygot heißt: zwei verschiedene Allele, also Aa." },
        { t: "wahl", f: "Was ist der Phänotyp?", a: ["Das sichtbare Erscheinungsbild", "Die Kombination der Allele", "Die Anzahl der Chromosomen", "Die Zahl der Gene"], r: 0, info: "Der Phänotyp ist das, was man sieht (z. B. blaue Augen); der Genotyp sind die Allele dahinter." },
        { t: "wahl", f: "Blaue Augen (b) sind rezessiv gegenüber braunen (B). Zwei braunäugige Eltern Bb × Bb – wie hoch ist die Wahrscheinlichkeit für ein blauäugiges Kind?", a: ["25 %", "50 %", "75 %", "0 %"], r: 0, info: "Nur der Genotyp bb (1 von 4 Feldern im Kreuzungsschema) ist blauäugig – 25 %." },
        { t: "wahl", f: "Kreuzung Aa × aa: Welcher Anteil der Nachkommen zeigt das rezessive Merkmal?", a: ["50 %", "25 %", "75 %", "100 %"], r: 0, info: "Es entstehen je zur Hälfte Aa und aa – also 50 % rezessiv." },
        { t: "wahl", f: "Welchen Genotyp hat ein Mensch mit Blutgruppe 0?", a: ["00", "A0", "AB", "B0"], r: 0, info: "0 ist rezessiv, also muss es doppelt vorliegen: 00." },
        { t: "wahl", f: "Mutter hat Blutgruppe A (A0), Vater B (B0). Welche Blutgruppen sind bei den Kindern möglich?", a: ["A, B, AB und 0", "Nur A und B", "Nur AB", "Nur 0"], r: 0, info: "Die Kombinationen AB, A0, B0 und 00 ergeben alle vier Blutgruppen." },
        { t: "wahl", f: "Warum sind Männer viel häufiger rot-grün-schwach als Frauen?", a: ["Sie haben nur ein X-Chromosom, ein krankes Allel reicht", "Sie haben zwei Y-Chromosomen", "Das Allel ist bei Männern dominant", "Frauen können es nicht vererben"], r: 0, info: "Das Allel liegt auf dem X-Chromosom; Männer (XY) haben kein zweites X, das es ausgleichen könnte." },
        { t: "wahl", f: "Eine Frau ist Konduktorin (Überträgerin) für Rot-Grün-Schwäche, der Vater ist gesund. Wie hoch ist die Wahrscheinlichkeit, dass ein Sohn betroffen ist?", a: ["50 %", "25 %", "100 %", "0 %"], r: 0, info: "Der Sohn bekommt eines der beiden X der Mutter – eines trägt das Allel, also 50 %." },
        { t: "eingabe", f: "Wie nennt man ein Lebewesen mit zwei gleichen Allelen (AA oder aa)?", l: ["homozygot", "reinerbig"], info: "Homozygot = reinerbig; heterozygot = mischerbig." },
        { t: "eingabe", f: "Die verschiedenen Varianten eines Gens nennt man ___.", l: ["Allele", "Allel"], info: "Ein Gen kann in mehreren Varianten (Allelen) vorkommen, z. B. für braune oder blaue Augen." },
        { t: "eingabe", f: "Welcher Mönch gilt als Begründer der Genetik (Nachname)?", l: ["Mendel", "Gregor Mendel"], info: "Gregor Mendel veröffentlichte 1866 seine Erbsen-Versuche." },
        { t: "eingabe", f: "Bei den Blutgruppen sind A und B gleich stark, beide zeigen sich. Dieses Verhältnis nennt man ___.", l: ["kodominant", "Kodominanz", "codominant"], info: "Kodominanz: Beide Allele prägen sich aus, es entsteht Blutgruppe AB." },
        { t: "paare", f: "Ordne die Begriffe zu", p: [["Genotyp", "Kombination der Allele"], ["Phänotyp", "sichtbares Merkmal"], ["dominant", "setzt sich durch"], ["rezessiv", "zeigt sich nur doppelt"], ["heterozygot", "mischerbig"]] },
        { t: "paare", f: "Ordne die Mendelschen Regeln zu", p: [["1. Regel", "F1 ist uniform"], ["2. Regel", "F2 spaltet 3:1 auf"], ["3. Regel", "Merkmale werden unabhängig vererbt"]] },
        { t: "reihenfolge", f: "Ordne die Generationen eines Kreuzungsversuchs", items: ["Parentalgeneration (P)", "1. Filialgeneration (F1)", "2. Filialgeneration (F2)"] }
      ]
    },
    {
      id: "dna",
      titel: "DNA & Proteinbiosynthese",
      kurz: "Doppelhelix, Basenpaarung, Transkription, Translation, Mutation",
      erklaerung: `<p>Die <b>DNA</b> (Desoxyribonukleinsäure) ist der Träger der Erbinformation. Sie ist eine <b>Doppelhelix</b> aus zwei Strängen. Jeder Baustein (Nukleotid) besteht aus Zucker (Desoxyribose), Phosphat und einer von vier <b>Basen</b>: Adenin (A), Thymin (T), Guanin (G), Cytosin (C). Es paaren sich immer <b>A mit T</b> und <b>G mit C</b> (komplementäre Basenpaarung). Der komplementäre Strang zu ATGC ist also TACG.</p>
<p>Ein <b>Gen</b> ist ein DNA-Abschnitt, der den Bauplan für ein Protein enthält. Drei Basen (ein <b>Triplett</b> oder Codon) stehen für eine Aminosäure.</p>
<p><b>Proteinbiosynthese</b> in zwei Schritten: Bei der <b>Transkription</b> im Zellkern wird das Gen in <b>mRNA</b> umgeschrieben (RNA hat statt Thymin <b>Uracil</b> U). Bei der <b>Translation</b> am Ribosom wird die mRNA Triplett für Triplett in eine Aminosäurekette übersetzt; die <b>tRNA</b> bringt die passenden Aminosäuren.</p>
<p>Eine <b>Mutation</b> ist eine dauerhafte Veränderung der DNA, z. B. durch UV-Strahlung oder Kopierfehler. Genmutationen betreffen ein Gen (z. B. Punktmutation), Chromosomenmutationen die Struktur, Genommutationen die Anzahl der Chromosomen (Trisomie 21: Chromosom 21 dreifach).</p>
<p><b>Gentechnik:</b> Mit „Genscheren“ (Restriktionsenzyme, CRISPR/Cas9) wird DNA gezielt geschnitten; fremde Gene können in Bakterien eingebaut werden, die dann z. B. Insulin herstellen. Ein <b>Klon</b> ist eine genetisch identische Kopie.</p>`,
      aufgaben: [
        { t: "wahl", f: "Welche Form hat das DNA-Molekül?", a: ["Doppelhelix", "Einzelstrang", "Kugel", "Dreifachspirale"], r: 0, info: "Zwei Stränge winden sich umeinander – die Doppelhelix (Watson und Crick, 1953)." },
        { t: "wahl", f: "Welche Basen paaren sich in der DNA?", a: ["A mit T, G mit C", "A mit G, T mit C", "A mit C, G mit T", "A mit A, T mit T"], r: 0, info: "Adenin bildet zwei Wasserstoffbrücken mit Thymin, Guanin drei mit Cytosin." },
        { t: "eingabe", f: "Bilde den komplementären DNA-Strang zu: A T G C", l: ["TACG", "T A C G"], info: "A wird zu T, T zu A, G zu C, C zu G: TACG." },
        { t: "eingabe", f: "Bilde den komplementären DNA-Strang zu: G G A T C", l: ["CCTAG", "C C T A G"], info: "G→C, G→C, A→T, T→A, C→G ergibt CCTAG." },
        { t: "eingabe", f: "Bilde den komplementären DNA-Strang zu: T T C A G A", l: ["AAGTCT", "A A G T C T"], info: "Jede Base wird durch ihren Partner ersetzt: AAGTCT." },
        { t: "eingabe", f: "Welche Base ersetzt in der RNA das Thymin?", l: ["Uracil", "U"], info: "RNA enthält Uracil (U) statt Thymin; U paart mit A." },
        { t: "eingabe", f: "Wie lautet die mRNA zum DNA-Abschnitt T A C G? (mit U)", l: ["AUGC", "A U G C"], info: "T→A, A→U, C→G, G→C: AUGC." },
        { t: "wahl", f: "Wie viele Basen bilden ein Triplett (Codon) für eine Aminosäure?", a: ["3", "2", "4", "1"], r: 0, info: "Drei Basen codieren eine Aminosäure; 4³ = 64 mögliche Tripletts." },
        { t: "wahl", f: "Was passiert bei der Transkription?", a: ["Ein Gen wird in mRNA umgeschrieben", "mRNA wird in ein Protein übersetzt", "Die DNA wird verdoppelt", "Chromosomen werden getrennt"], r: 0, info: "Transkription = Umschreiben der DNA in mRNA, im Zellkern." },
        { t: "wahl", f: "Wo findet die Translation statt?", a: ["Am Ribosom", "Im Zellkern", "Im Mitochondrium", "In der Vakuole"], r: 0, info: "Das Ribosom liest die mRNA und verknüpft die Aminosäuren zum Protein." },
        { t: "wahl", f: "Welche Aufgabe hat die tRNA?", a: ["Sie bringt die passende Aminosäure zum Ribosom", "Sie speichert die Erbinformation", "Sie schneidet DNA", "Sie bildet die Kernhülle"], r: 0, info: "Die tRNA trägt ein Anticodon und die zugehörige Aminosäure." },
        { t: "wahl", f: "Was ist ein Gen?", a: ["Ein DNA-Abschnitt mit dem Bauplan für ein Protein", "Ein ganzes Chromosom", "Ein Protein", "Eine Zelle"], r: 0, info: "Gene sind Abschnitte der DNA; der Mensch hat etwa 20 000 davon." },
        { t: "wahl", f: "Was ist eine Mutation?", a: ["Eine dauerhafte Veränderung der DNA", "Die Verdopplung der DNA", "Die Übersetzung in ein Protein", "Eine Zellteilung"], r: 0, info: "Mutationen entstehen zufällig oder durch Mutagene wie UV-Strahlung und Chemikalien." },
        { t: "wahl", f: "Bei Trisomie 21 liegt …", a: ["Chromosom 21 dreimal vor", "Chromosom 21 nur einmal vor", "Chromosom 21 fehlt", "ein X-Chromosom zu viel vor"], r: 0, info: "Trisomie 21 (Down-Syndrom) ist eine Genommutation mit 47 statt 46 Chromosomen." },
        { t: "wahl", f: "Wozu nutzt man in der Gentechnik Restriktionsenzyme?", a: ["Um DNA an bestimmten Stellen zu schneiden", "Um Proteine zu verdauen", "Um Zellen zu färben", "Um Zucker abzubauen"], r: 0, info: "Restriktionsenzyme sind „Genscheren“, die DNA an bestimmten Basenfolgen zerschneiden." },
        { t: "wahl", f: "Gentechnisch veränderte Bakterien stellen heute ein wichtiges Medikament für Diabetiker her. Welches?", a: ["Insulin", "Aspirin", "Penicillin", "Vitamin C"], r: 0, info: "Das menschliche Insulin-Gen wird in Bakterien eingebaut, die dann Insulin produzieren." },
        { t: "paare", f: "Ordne die Bausteine zu", p: [["Adenin", "paart mit Thymin"], ["Guanin", "paart mit Cytosin"], ["Uracil", "nur in RNA"], ["Desoxyribose", "Zucker der DNA"]] },
        { t: "reihenfolge", f: "Bringe die Proteinbiosynthese in die richtige Reihenfolge", items: ["DNA wird im Zellkern abgelesen", "mRNA entsteht (Transkription)", "mRNA wandert zum Ribosom", "tRNA bringt Aminosäuren (Translation)", "Protein ist fertig"] },
        { t: "paare", f: "Ordne die Mutationstypen zu", p: [["Genmutation", "eine Base verändert"], ["Chromosomenmutation", "Stück eines Chromosoms verändert"], ["Genommutation", "Anzahl der Chromosomen verändert"]] }
      ]
    },
    {
      id: "nerven",
      titel: "Nervensystem & Sinne",
      kurz: "Neuron, Synapse, Reflexbogen, Gehirn, Auge, Ohr",
      erklaerung: `<p>Eine <b>Nervenzelle (Neuron)</b> besteht aus <b>Dendriten</b> (nehmen Signale auf), dem <b>Zellkörper</b> mit Kern, dem langen <b>Axon</b> (leitet den Impuls weiter) mit <b>Myelinscheide</b> (isoliert, macht die Leitung schneller) und den <b>Endknöpfchen</b>, die an der <b>Synapse</b> enden.</p>
<p>An der Synapse springt das Signal nicht elektrisch über, sondern chemisch: <b>Neurotransmitter</b> werden in den synaptischen Spalt ausgeschüttet und docken an Rezeptoren der nächsten Zelle an.</p>
<p>Die Kette <b>Reiz → Sinneszelle → sensorischer Nerv → Zentralnervensystem → motorischer Nerv → Muskel → Reaktion</b> heißt Reiz-Reaktions-Schema. Beim <b>Reflexbogen</b> (z. B. Kniesehnenreflex) wird die Antwort direkt im <b>Rückenmark</b> verschaltet, ohne Umweg über das Gehirn – darum geht es so schnell.</p>
<p><b>Gehirnteile:</b> Großhirn (Denken, Sprache, Bewusstsein), Kleinhirn (Gleichgewicht, Bewegungskoordination), Zwischenhirn (Hormonsteuerung, Schaltstelle), Stammhirn (Atmung, Herzschlag).</p>
<p><b>Auge:</b> Hornhaut und <b>Linse</b> bündeln das Licht auf die <b>Netzhaut</b>; die <b>Iris</b> regelt mit der <b>Pupille</b> den Lichteinfall. <b>Stäbchen</b> sehen hell/dunkel, <b>Zapfen</b> Farben. Am <b>Blinden Fleck</b> tritt der Sehnerv aus. <b>Ohr:</b> Schall → Trommelfell → Gehörknöchelchen (Hammer, Amboss, Steigbügel) → <b>Schnecke</b> (Hörsinneszellen); das Gleichgewichtsorgan sitzt ebenfalls im Innenohr.</p>`,
      aufgaben: [
        { t: "wahl", f: "Welcher Teil des Neurons leitet den Impuls über lange Strecken weiter?", a: ["Axon", "Dendrit", "Zellkern", "Synapse"], r: 0, info: "Das Axon kann beim Menschen über einen Meter lang sein und leitet den Impuls zu den Endknöpfchen." },
        { t: "wahl", f: "Welche Aufgabe haben die Dendriten?", a: ["Sie nehmen Signale anderer Zellen auf", "Sie schütten Transmitter aus", "Sie isolieren das Axon", "Sie bilden Hormone"], r: 0, info: "Dendriten sind die verzweigten Empfangsantennen der Nervenzelle." },
        { t: "wahl", f: "Wozu dient die Myelinscheide?", a: ["Isolierung und schnellere Weiterleitung", "Signalaufnahme", "Energieproduktion", "Bildung von Transmittern"], r: 0, info: "Der Impuls springt von Schnürring zu Schnürring – so wird er viel schneller geleitet." },
        { t: "wahl", f: "Wie wird das Signal an der Synapse übertragen?", a: ["Chemisch durch Neurotransmitter", "Elektrisch durch direkten Kontakt", "Durch Hormone im Blut", "Durch Licht"], r: 0, info: "Botenstoffe überbrücken den synaptischen Spalt und binden an Rezeptoren." },
        { t: "wahl", f: "Wo wird ein Reflex wie der Kniesehnenreflex verschaltet?", a: ["Im Rückenmark", "Im Großhirn", "Im Kleinhirn", "Im Auge"], r: 0, info: "Beim Reflexbogen antwortet das Rückenmark direkt – das spart Zeit und schützt." },
        { t: "wahl", f: "Welcher Gehirnteil steuert Atmung und Herzschlag?", a: ["Stammhirn", "Großhirn", "Kleinhirn", "Zwischenhirn"], r: 0, info: "Das Stammhirn (Hirnstamm) regelt lebenswichtige Grundfunktionen." },
        { t: "wahl", f: "Welcher Gehirnteil ist für Gleichgewicht und Bewegungskoordination zuständig?", a: ["Kleinhirn", "Großhirn", "Stammhirn", "Rückenmark"], r: 0, info: "Das Kleinhirn stimmt Bewegungen fein ab, z. B. beim Radfahren." },
        { t: "wahl", f: "Welche Sinneszellen im Auge sind für das Farbensehen zuständig?", a: ["Zapfen", "Stäbchen", "Linsenzellen", "Hornhautzellen"], r: 0, info: "Zapfen gibt es in drei Typen (rot, grün, blau); Stäbchen sehen nur hell/dunkel." },
        { t: "wahl", f: "Was passiert mit der Pupille bei hellem Licht?", a: ["Sie wird kleiner", "Sie wird größer", "Sie bleibt gleich", "Sie wird dunkler"], r: 0, info: "Die Iris verengt die Pupille, damit weniger Licht auf die Netzhaut fällt." },
        { t: "wahl", f: "Warum sieht man am Blinden Fleck nichts?", a: ["Dort tritt der Sehnerv aus, es gibt keine Sinneszellen", "Dort ist die Linse", "Dort sitzen nur Zapfen", "Dort ist die Hornhaut zu dick"], r: 0, info: "Am Austritt des Sehnervs fehlen Stäbchen und Zapfen." },
        { t: "wahl", f: "Wo sitzen die Hörsinneszellen?", a: ["In der Schnecke (Innenohr)", "Im Trommelfell", "In der Ohrmuschel", "Im Steigbügel"], r: 0, info: "In der Hörschnecke (Cochlea) werden Schwingungen in Nervenimpulse umgewandelt." },
        { t: "wahl", f: "Wo befindet sich das Gleichgewichtsorgan?", a: ["Im Innenohr", "Im Auge", "Im Kleinhirn", "In der Nase"], r: 0, info: "Die Bogengänge im Innenohr melden Drehungen und Lage des Kopfes." },
        { t: "eingabe", f: "Wie heißt die Kontaktstelle zwischen zwei Nervenzellen?", l: ["Synapse"], info: "An der Synapse wird das Signal chemisch mit Neurotransmittern übertragen." },
        { t: "eingabe", f: "Die Botenstoffe an der Synapse heißen ___.", l: ["Neurotransmitter", "Transmitter", "Botenstoffe"], info: "Beispiele für Neurotransmitter sind Acetylcholin und Dopamin." },
        { t: "eingabe", f: "Gehirn und Rückenmark bilden zusammen das ___ (Abkürzung ZNS).", l: ["Zentralnervensystem", "zentrale Nervensystem", "ZNS"], info: "Das Zentralnervensystem verarbeitet Informationen; die Nerven im Körper bilden das periphere Nervensystem." },
        { t: "eingabe", f: "Welche Sinneszellen im Auge sehen bei Dämmerung (hell/dunkel)?", l: ["Stäbchen"], info: "Stäbchen sind lichtempfindlicher als Zapfen, können aber keine Farben unterscheiden." },
        { t: "reihenfolge", f: "Ordne das Reiz-Reaktions-Schema", items: ["Reiz", "Sinneszelle", "sensorischer Nerv", "Zentralnervensystem", "motorischer Nerv", "Muskel reagiert"] },
        { t: "reihenfolge", f: "Weg des Schalls im Ohr", items: ["Ohrmuschel", "Gehörgang", "Trommelfell", "Gehörknöchelchen", "Schnecke", "Hörnerv"] },
        { t: "paare", f: "Ordne die Gehirnteile ihrer Aufgabe zu", p: [["Großhirn", "Denken, Sprache"], ["Kleinhirn", "Gleichgewicht, Koordination"], ["Stammhirn", "Atmung, Herzschlag"], ["Zwischenhirn", "Hormonsteuerung, Schaltstelle"]] },
        { t: "paare", f: "Ordne die Teile des Auges zu", p: [["Linse", "bündelt Licht"], ["Netzhaut", "enthält Sinneszellen"], ["Iris", "regelt Lichteinfall"], ["Sehnerv", "leitet zum Gehirn"]] }
      ]
    },
    {
      id: "hormone",
      titel: "Hormone",
      kurz: "Insulin/Glukagon, Adrenalin, Schilddrüse, Pubertät, Regelkreis, Diabetes",
      erklaerung: `<p><b>Hormone</b> sind Botenstoffe, die von <b>Drüsen</b> ins Blut abgegeben werden und an Zielzellen mit passenden Rezeptoren wirken (Schlüssel-Schloss-Prinzip). Im Vergleich zu Nerven wirken sie langsamer, aber länger.</p>
<p><b>Blutzucker-Regelkreis:</b> Steigt der Blutzucker nach dem Essen, schüttet die <b>Bauchspeicheldrüse</b> <b>Insulin</b> aus – Zellen nehmen Glukose auf, die Leber speichert sie als Glykogen, der Blutzucker sinkt. Sinkt er zu stark, wird <b>Glukagon</b> ausgeschüttet – die Leber gibt Glukose frei. Insulin und Glukagon sind <b>Gegenspieler (Antagonisten)</b>.</p>
<p><b>Diabetes Typ 1:</b> Das Immunsystem zerstört die insulinbildenden Zellen, meist schon in der Jugend; Betroffene müssen Insulin spritzen. <b>Typ 2:</b> Die Zellen reagieren nicht mehr richtig auf Insulin (Insulinresistenz), oft durch Übergewicht und Bewegungsmangel; hilft: Bewegung, Ernährung, Medikamente.</p>
<p><b>Adrenalin</b> aus den <b>Nebennieren</b> ist das Stresshormon: Herz schlägt schneller, Blutdruck steigt, Zucker wird freigesetzt, Verdauung wird gebremst – der Körper ist bereit zu kämpfen oder zu fliehen.</p>
<p>Die <b>Schilddrüse</b> bildet <b>Thyroxin</b> (braucht <b>Jod</b>), das den Stoffwechsel antreibt. Zu wenig: Müdigkeit, Gewichtszunahme, Kropf. In der <b>Pubertät</b> steuert die <b>Hypophyse</b> (Hirnanhangdrüse) die Keimdrüsen: <b>Testosteron</b> (Hoden) und <b>Östrogen</b> (Eierstöcke) lösen die Geschlechtsreife aus.</p>`,
      aufgaben: [
        { t: "wahl", f: "Wie gelangen Hormone zu ihren Zielzellen?", a: ["Über das Blut", "Über Nervenbahnen", "Über die Lymphe", "Über die Atemluft"], r: 0, info: "Hormondrüsen geben ihre Botenstoffe direkt ins Blut ab." },
        { t: "wahl", f: "Welches Hormon senkt den Blutzuckerspiegel?", a: ["Insulin", "Glukagon", "Adrenalin", "Thyroxin"], r: 0, info: "Insulin bewirkt, dass Zellen Glukose aufnehmen und die Leber sie als Glykogen speichert." },
        { t: "wahl", f: "Welches Hormon erhöht den Blutzuckerspiegel bei Hunger?", a: ["Glukagon", "Insulin", "Östrogen", "Melatonin"], r: 0, info: "Glukagon lässt die Leber gespeichertes Glykogen zu Glukose abbauen." },
        { t: "wahl", f: "Welche Drüse bildet Insulin und Glukagon?", a: ["Bauchspeicheldrüse", "Schilddrüse", "Nebenniere", "Hypophyse"], r: 0, info: "In den Langerhans-Inseln der Bauchspeicheldrüse entstehen beide Hormone." },
        { t: "wahl", f: "Was ist die Ursache von Diabetes Typ 1?", a: ["Die insulinbildenden Zellen werden zerstört", "Zu viel Zucker im Essen", "Die Zellen reagieren nicht mehr auf Insulin", "Jodmangel"], r: 0, info: "Typ 1 ist eine Autoimmunkrankheit: Der Körper bildet kein Insulin mehr." },
        { t: "wahl", f: "Was ist typisch für Diabetes Typ 2?", a: ["Zellen reagieren nicht mehr richtig auf Insulin", "Es wird gar kein Insulin gebildet", "Er tritt nur bei Kindern auf", "Er wird durch Viren übertragen"], r: 0, info: "Insulinresistenz, oft durch Übergewicht und Bewegungsmangel; Lebensstil hilft." },
        { t: "wahl", f: "Wo wird Adrenalin gebildet?", a: ["Nebennieren", "Schilddrüse", "Bauchspeicheldrüse", "Eierstöcke"], r: 0, info: "Das Nebennierenmark schüttet in Stresssituationen Adrenalin aus." },
        { t: "wahl", f: "Welche Wirkung hat Adrenalin NICHT?", a: ["Verdauung wird angeregt", "Herz schlägt schneller", "Blutdruck steigt", "Blutzucker steigt"], r: 0, info: "Adrenalin bremst die Verdauung – Energie wird für Muskeln und Gehirn gebraucht." },
        { t: "wahl", f: "Welches Spurenelement braucht die Schilddrüse für ihr Hormon Thyroxin?", a: ["Jod", "Eisen", "Calcium", "Zink"], r: 0, info: "Jodmangel führt zu Unterfunktion und Kropfbildung – darum gibt es jodiertes Speisesalz." },
        { t: "wahl", f: "Was bewirkt Thyroxin?", a: ["Es steigert den Stoffwechsel", "Es senkt den Blutzucker", "Es löst Stress aus", "Es steuert den Schlaf"], r: 0, info: "Thyroxin treibt Energieumsatz, Wachstum und Entwicklung an." },
        { t: "wahl", f: "Welche Drüse im Gehirn steuert viele andere Hormondrüsen?", a: ["Hypophyse (Hirnanhangdrüse)", "Nebenniere", "Schilddrüse", "Thymus"], r: 0, info: "Die Hypophyse schüttet Steuerhormone aus, z. B. für Schilddrüse und Keimdrüsen." },
        { t: "wahl", f: "Welches Hormon wird in den Hoden gebildet?", a: ["Testosteron", "Östrogen", "Insulin", "Adrenalin"], r: 0, info: "Testosteron löst bei Jungen Stimmbruch, Bartwuchs und Muskelwachstum aus." },
        { t: "wahl", f: "Was ist ein Regelkreis?", a: ["Ein Istwert wird gemessen und bei Abweichung vom Sollwert gegengesteuert", "Eine Drüse gibt ständig gleich viel Hormon ab", "Ein Hormon verstärkt sich selbst unbegrenzt", "Ein Nerv leitet im Kreis"], r: 0, info: "Beispiel Blutzucker: zu hoch → Insulin, zu niedrig → Glukagon; so bleibt der Wert stabil." },
        { t: "eingabe", f: "Insulin und Glukagon wirken entgegengesetzt. Solche Hormone nennt man ___.", l: ["Antagonisten", "Gegenspieler", "Antagonist"], info: "Antagonisten halten einen Wert gemeinsam im Gleichgewicht." },
        { t: "eingabe", f: "In welcher Form speichert die Leber überschüssige Glukose?", l: ["Glykogen"], info: "Glykogen ist ein Vielfachzucker, der schnell wieder zu Glukose abgebaut werden kann." },
        { t: "eingabe", f: "Wie heißt das weibliche Geschlechtshormon aus den Eierstöcken?", l: ["Östrogen", "Estrogen", "Oestrogen"], info: "Östrogen steuert den Zyklus und die Entwicklung weiblicher Geschlechtsmerkmale." },
        { t: "paare", f: "Ordne Hormone ihren Drüsen zu", p: [["Insulin", "Bauchspeicheldrüse"], ["Adrenalin", "Nebenniere"], ["Thyroxin", "Schilddrüse"], ["Testosteron", "Hoden"], ["Östrogen", "Eierstöcke"]] },
        { t: "reihenfolge", f: "Ordne den Regelkreis nach dem Essen", items: ["Blutzucker steigt", "Bauchspeicheldrüse schüttet Insulin aus", "Zellen nehmen Glukose auf, Leber speichert Glykogen", "Blutzucker sinkt auf Normalwert"] },
        { t: "paare", f: "Diabetes Typ 1 oder Typ 2?", p: [["Insulin muss gespritzt werden", "Typ 1"], ["Insulinresistenz", "Typ 2"], ["meist in der Jugend", "Typ 1"], ["oft durch Übergewicht", "Typ 2"]] }
      ]
    },
    {
      id: "immun",
      titel: "Immunsystem",
      kurz: "Abwehr, Antikörper, Impfung, Viren vs. Bakterien, Antibiotika",
      erklaerung: `<p>Das Immunsystem schützt vor <b>Krankheitserregern</b>. Die <b>unspezifische Abwehr</b> wirkt sofort gegen alles: Haut und Schleimhäute als Barriere, Magensäure, Tränen, und <b>Fresszellen (Makrophagen)</b>, die Eindringlinge verschlingen. Fieber und Entzündung gehören auch dazu.</p>
<p>Die <b>spezifische Abwehr</b> richtet sich gezielt gegen einen Erreger und braucht einige Tage: <b>T-Helferzellen</b> erkennen das fremde <b>Antigen</b> und aktivieren <b>B-Zellen</b>, die zu Plasmazellen werden und passende <b>Antikörper</b> bilden (Schlüssel-Schloss). Antikörper markieren und verklumpen die Erreger. <b>Gedächtniszellen</b> merken sich den Erreger – beim zweiten Kontakt ist die Antwort viel schneller (Immunität).</p>
<p><b>Aktive Impfung:</b> Abgeschwächte oder tote Erreger bzw. Bestandteile (oder mRNA) werden gespritzt; der Körper bildet selbst Antikörper und Gedächtniszellen – langer Schutz, braucht aber Zeit. <b>Passive Impfung:</b> Fertige Antikörper werden gespritzt – wirkt sofort, aber nur Wochen (z. B. nach Biss eines tollwütigen Tiers).</p>
<p><b>Bakterien</b> sind Lebewesen (Zellen ohne Kern), vermehren sich selbst; <b>Antibiotika</b> wirken gegen sie. <b>Viren</b> sind keine Zellen, sondern Erbgut in einer Hülle; sie brauchen eine Wirtszelle zur Vermehrung. Gegen Viren helfen Antibiotika <b>nicht</b>. Falscher oder zu kurzer Antibiotika-Einsatz fördert <b>Resistenzen</b>.</p>
<p><b>Allergie</b> = Überreaktion auf harmlose Stoffe (Pollen); <b>Autoimmunkrankheit</b> = Abwehr gegen eigene Zellen (Diabetes Typ 1). <b>HIV</b> zerstört T-Helferzellen und schwächt so die Abwehr (AIDS).</p>`,
      aufgaben: [
        { t: "wahl", f: "Was gehört zur unspezifischen Abwehr?", a: ["Haut, Schleimhäute, Fresszellen", "Antikörper", "Gedächtniszellen", "B-Zellen"], r: 0, info: "Die unspezifische Abwehr wirkt gegen alle Erreger gleich und sofort." },
        { t: "wahl", f: "Was machen Fresszellen (Makrophagen)?", a: ["Sie nehmen Erreger auf und verdauen sie", "Sie bilden Antikörper", "Sie speichern Blutzucker", "Sie transportieren Sauerstoff"], r: 0, info: "Fresszellen umfließen Eindringlinge und zersetzen sie – erste Verteidigungslinie." },
        { t: "wahl", f: "Was sind Antigene?", a: ["Fremde Strukturen, die eine Immunantwort auslösen", "Abwehrstoffe des Körpers", "Weiße Blutkörperchen", "Impfstoffe"], r: 0, info: "Antigene sind z. B. Oberflächenmoleküle von Bakterien und Viren." },
        { t: "wahl", f: "Welche Zellen bilden Antikörper?", a: ["B-Zellen (Plasmazellen)", "Rote Blutkörperchen", "Fresszellen", "Nervenzellen"], r: 0, info: "Aktivierte B-Zellen werden zu Plasmazellen und produzieren massenhaft Antikörper." },
        { t: "wahl", f: "Warum ist man nach überstandenen Masern meist lebenslang immun?", a: ["Gedächtniszellen erkennen den Erreger beim nächsten Mal sofort", "Die Haut wird dicker", "Das Virus bleibt im Körper", "Antikörper bleiben für immer im Blut"], r: 0, info: "Gedächtniszellen ermöglichen eine schnelle und starke zweite Immunantwort." },
        { t: "wahl", f: "Was passiert bei einer aktiven Impfung?", a: ["Der Körper bildet selbst Antikörper und Gedächtniszellen", "Fertige Antikörper werden gespritzt", "Das Immunsystem wird abgeschaltet", "Antibiotika werden verabreicht"], r: 0, info: "Abgeschwächte Erreger oder Bestandteile trainieren das Immunsystem – langer Schutz." },
        { t: "wahl", f: "Wann ist eine passive Impfung sinnvoll?", a: ["Wenn sofortiger Schutz nötig ist, z. B. nach einem Tollwut-Biss", "Für lebenslangen Schutz", "Zur Vorbeugung Jahre vorher", "Gegen Allergien"], r: 0, info: "Fertige Antikörper wirken sofort, werden aber nach Wochen abgebaut." },
        { t: "wahl", f: "Was unterscheidet Viren von Bakterien?", a: ["Viren sind keine Zellen und brauchen eine Wirtszelle", "Viren sind größer als Bakterien", "Viren haben einen Zellkern", "Bakterien brauchen eine Wirtszelle"], r: 0, info: "Viren bestehen nur aus Erbgut und Hülle; Bakterien sind eigenständige Zellen." },
        { t: "wahl", f: "Gegen welche Erreger wirken Antibiotika?", a: ["Bakterien", "Viren", "Bakterien und Viren", "Pollen"], r: 0, info: "Antibiotika greifen Zellwand oder Stoffwechsel von Bakterien an – Viren haben beides nicht." },
        { t: "wahl", f: "Warum soll man Antibiotika nicht bei einer Erkältung nehmen?", a: ["Erkältungen werden durch Viren ausgelöst, Antibiotika wirken da nicht", "Antibiotika machen Fieber", "Sie wirken erst nach Monaten", "Sie zerstören Antikörper"], r: 0, info: "Unnötiger Einsatz hilft nicht und fördert resistente Bakterien." },
        { t: "wahl", f: "Was ist eine Antibiotika-Resistenz?", a: ["Bakterien, gegen die ein Antibiotikum nicht mehr wirkt", "Menschen, die Antibiotika nicht vertragen", "Viren, die Antibiotika abbauen", "Eine Impfung gegen Bakterien"], r: 0, info: "Durch Mutation und Selektion überleben Bakterien, die das Mittel aushalten." },
        { t: "wahl", f: "Was ist eine Allergie?", a: ["Überreaktion des Immunsystems auf harmlose Stoffe", "Ein Mangel an Antikörpern", "Eine Virusinfektion", "Eine Bakterieninfektion"], r: 0, info: "Bei Heuschnupfen reagiert die Abwehr auf Pollen, als wären sie gefährlich." },
        { t: "wahl", f: "Welche Zellen zerstört das HI-Virus?", a: ["T-Helferzellen", "Rote Blutkörperchen", "Nervenzellen", "Leberzellen"], r: 0, info: "Ohne T-Helferzellen bricht die spezifische Abwehr zusammen – AIDS." },
        { t: "eingabe", f: "Wie heißen die Abwehrstoffe, die passgenau an Antigene binden?", l: ["Antikörper"], info: "Antikörper passen zum Antigen wie ein Schlüssel ins Schloss." },
        { t: "eingabe", f: "Welche Zellen sorgen dafür, dass man nach einer Infektion immun ist?", l: ["Gedächtniszellen"], info: "Gedächtniszellen bleiben jahrelang erhalten und starten beim zweiten Kontakt sofort." },
        { t: "eingabe", f: "Wer entdeckte 1928 das Penicillin (Nachname)?", l: ["Fleming", "Alexander Fleming"], info: "Alexander Fleming bemerkte, dass ein Schimmelpilz Bakterien abtötet." },
        { t: "paare", f: "Unspezifisch oder spezifisch?", p: [["Haut als Barriere", "unspezifisch"], ["Fresszelle", "unspezifisch"], ["Antikörper", "spezifisch"], ["Gedächtniszelle", "spezifisch"]] },
        { t: "paare", f: "Aktive oder passive Impfung?", p: [["Körper bildet selbst Antikörper", "aktiv"], ["fertige Antikörper gespritzt", "passiv"], ["Schutz hält Jahre", "aktiv"], ["wirkt sofort", "passiv"]] },
        { t: "reihenfolge", f: "Ordne die spezifische Immunantwort", items: ["Erreger dringt ein", "Fresszelle präsentiert Antigen", "T-Helferzelle aktiviert B-Zelle", "Plasmazellen bilden Antikörper", "Gedächtniszellen bleiben zurück"] }
      ]
    },
    {
      id: "oekologie",
      titel: "Ökologie",
      kurz: "Ökosystem, Nahrungsnetz, Fotosynthese, Treibhauseffekt, Kreisläufe",
      erklaerung: `<p>Ein <b>Ökosystem</b> besteht aus dem Lebensraum (<b>Biotop</b>) und der Lebensgemeinschaft (<b>Biozönose</b>). <b>Abiotische Faktoren</b> sind unbelebt (Licht, Temperatur, Wasser), <b>biotische</b> gehen von Lebewesen aus (Konkurrenz, Fressfeinde).</p>
<p><b>Produzenten</b> (Pflanzen) bauen mit Fotosynthese Zucker auf. <b>Konsumenten</b> fressen: 1. Ordnung Pflanzenfresser, 2. Ordnung Fleischfresser usw. <b>Destruenten</b> (Pilze, Bakterien) zersetzen tote Reste zu Mineralstoffen, die die Pflanzen wieder nutzen. Eine <b>Nahrungskette</b> ist eine Linie (Gras → Hase → Fuchs), ein <b>Nahrungsnetz</b> verknüpft viele Ketten. Von jeder Stufe zur nächsten gehen etwa 90 % der Energie verloren – darum gibt es wenige Spitzenräuber.</p>
<p><b>Fotosynthese:</b> 6 CO<sub>2</sub> + 6 H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> (mit Lichtenergie, in den Chloroplasten). Die <b>Zellatmung</b> ist die Umkehrung und setzt Energie frei.</p>
<p><b>Räuber-Beute-Beziehung:</b> Viele Hasen → Füchse vermehren sich → Hasen werden weniger → Füchse werden weniger → Hasen erholen sich. Die Kurven schwanken zeitversetzt (Lotka-Volterra-Regeln).</p>
<p><b>Treibhauseffekt:</b> CO<sub>2</sub>, Methan und Wasserdampf lassen Sonnenlicht durch, halten aber Wärmestrahlung zurück. Der natürliche Effekt macht die Erde bewohnbar (+15 °C statt −18 °C); der <b>zusätzliche</b> Effekt durch Verbrennen fossiler Brennstoffe erwärmt das Klima. Im <b>Kohlenstoffkreislauf</b> wird CO<sub>2</sub> durch Fotosynthese gebunden und durch Atmung, Zersetzung und Verbrennung freigesetzt.</p>`,
      aufgaben: [
        { t: "wahl", f: "Woraus besteht ein Ökosystem?", a: ["Biotop (Lebensraum) und Biozönose (Lebensgemeinschaft)", "Nur aus Pflanzen", "Nur aus Tieren", "Nur aus Klima und Boden"], r: 0, info: "Ökosystem = unbelebter Lebensraum plus alle Lebewesen darin." },
        { t: "wahl", f: "Welcher ist ein abiotischer Umweltfaktor?", a: ["Temperatur", "Fressfeind", "Konkurrenz", "Parasit"], r: 0, info: "Abiotisch = unbelebt: Licht, Temperatur, Wasser, Boden." },
        { t: "wahl", f: "Was sind Produzenten?", a: ["Pflanzen, die mit Fotosynthese Zucker aufbauen", "Pflanzenfresser", "Fleischfresser", "Pilze und Bakterien"], r: 0, info: "Produzenten stellen aus CO2, Wasser und Licht organische Stoffe her." },
        { t: "wahl", f: "Welche Rolle haben Destruenten im Ökosystem?", a: ["Sie zersetzen tote Reste zu Mineralstoffen", "Sie fressen Pflanzen", "Sie jagen andere Tiere", "Sie betreiben Fotosynthese"], r: 0, info: "Pilze und Bakterien schließen den Stoffkreislauf, indem sie Nährstoffe zurückführen." },
        { t: "wahl", f: "In der Kette Gras → Hase → Fuchs ist der Hase …", a: ["Konsument 1. Ordnung", "Produzent", "Konsument 2. Ordnung", "Destruent"], r: 0, info: "Pflanzenfresser sind Konsumenten 1. Ordnung, Fleischfresser 2. Ordnung." },
        { t: "wahl", f: "Wie viel Energie geht von einer Nahrungsstufe zur nächsten ungefähr verloren?", a: ["etwa 90 %", "etwa 10 %", "etwa 50 %", "nichts"], r: 0, info: "Nur rund 10 % werden in Körpermasse eingebaut, der Rest geht als Wärme und Bewegung verloren." },
        { t: "wahl", f: "Welche Gleichung beschreibt die Fotosynthese?", a: ["6 CO2 + 6 H2O → C6H12O6 + 6 O2", "C6H12O6 + 6 O2 → 6 CO2 + 6 H2O", "2 H2 + O2 → 2 H2O", "CO2 + H2O → H2CO3"], r: 0, info: "Aus Kohlenstoffdioxid und Wasser entstehen mit Lichtenergie Traubenzucker und Sauerstoff." },
        { t: "wahl", f: "Wo findet die Fotosynthese statt?", a: ["In den Chloroplasten", "In den Mitochondrien", "Im Zellkern", "In der Wurzel"], r: 0, info: "Chloroplasten enthalten das grüne Chlorophyll, das Lichtenergie aufnimmt." },
        { t: "wahl", f: "Was passiert in einer Räuber-Beute-Beziehung, wenn die Beute stark zunimmt?", a: ["Die Räuber nehmen zeitversetzt zu", "Die Räuber sterben aus", "Nichts ändert sich", "Die Beute nimmt weiter zu"], r: 0, info: "Mehr Nahrung → mehr Räuber → weniger Beute → weniger Räuber; die Kurven schwanken versetzt." },
        { t: "wahl", f: "Welches Gas ist Hauptverursacher des zusätzlichen Treibhauseffekts?", a: ["Kohlenstoffdioxid (CO2)", "Sauerstoff (O2)", "Stickstoff (N2)", "Wasserstoff (H2)"], r: 0, info: "CO2 aus Kohle, Öl und Gas hält Wärmestrahlung in der Atmosphäre zurück." },
        { t: "wahl", f: "Wie wirkt der natürliche Treibhauseffekt?", a: ["Er hält die Erde bewohnbar warm, etwa +15 °C statt −18 °C", "Er kühlt die Erde ab", "Er hat keine Wirkung", "Er entsteht nur durch Menschen"], r: 0, info: "Ohne natürliche Treibhausgase wäre die Erde eine Eiswüste." },
        { t: "wahl", f: "Wodurch wird CO2 aus der Atmosphäre gebunden?", a: ["Fotosynthese der Pflanzen", "Zellatmung", "Verbrennung", "Zersetzung"], r: 0, info: "Pflanzen nehmen CO2 auf und bauen den Kohlenstoff in Zucker ein." },
        { t: "eingabe", f: "Wie nennt man die Lebensgemeinschaft aller Lebewesen in einem Lebensraum?", l: ["Biozönose"], info: "Biozönose = Lebensgemeinschaft; Biotop = Lebensraum." },
        { t: "eingabe", f: "Pilze und Bakterien, die tote Stoffe abbauen, nennt man ___.", l: ["Destruenten", "Zersetzer", "Destruent"], info: "Destruenten machen aus Laub und Kadavern wieder Mineralstoffe." },
        { t: "eingabe", f: "Welches Gas geben Pflanzen bei der Fotosynthese ab?", l: ["Sauerstoff", "O2"], info: "Sauerstoff ist ein Nebenprodukt der Fotosynthese." },
        { t: "eingabe", f: "Der grüne Farbstoff in den Chloroplasten heißt ___.", l: ["Chlorophyll"], info: "Chlorophyll fängt die Lichtenergie für die Fotosynthese ein." },
        { t: "paare", f: "Ordne die Rollen im Ökosystem zu", p: [["Produzent", "Eiche"], ["Konsument 1. Ordnung", "Reh"], ["Konsument 2. Ordnung", "Wolf"], ["Destruent", "Regenwurm und Pilze"]] },
        { t: "reihenfolge", f: "Ordne die Nahrungskette von unten nach oben", items: ["Algen", "Wasserfloh", "kleiner Fisch", "Hecht", "Fischadler"] },
        { t: "paare", f: "Ordne Fotosynthese und Zellatmung zu", p: [["nimmt CO2 auf", "Fotosynthese"], ["gibt O2 ab", "Fotosynthese"], ["setzt Energie frei", "Zellatmung"], ["läuft im Mitochondrium", "Zellatmung"]] },
        { t: "reihenfolge", f: "Ordne den Räuber-Beute-Zyklus", items: ["Beute nimmt zu", "Räuber nehmen zu", "Beute nimmt ab", "Räuber nehmen ab"] }
      ]
    },
    {
      id: "evolution",
      titel: "Evolution",
      kurz: "Darwin, Selektion, Lamarck, Fossilien, Homologie/Analogie, Mensch",
      erklaerung: `<p><b>Charles Darwin</b> (1809–1882) beobachtete auf den Galápagos-Inseln Finken mit unterschiedlichen Schnäbeln und entwickelte die <b>Evolutionstheorie</b> (Buch 1859). Kern: In jeder Art gibt es <b>Variation</b> (Individuen unterscheiden sich, durch Mutation und Neukombination). Es werden mehr Nachkommen geboren als überleben können (<b>Überproduktion</b>). Wer am besten an die Umwelt angepasst ist, überlebt und vermehrt sich eher (<b>natürliche Selektion</b>). Vorteilhafte Merkmale werden <b>vererbt</b> und häufen sich – so verändern sich Arten über Generationen.</p>
<p><b>Lamarck</b> dachte dagegen, Lebewesen passten sich aktiv an (Giraffe streckt den Hals) und gäben erworbene Eigenschaften weiter. Das ist widerlegt: Erworbene Merkmale werden nicht vererbt. Bei Darwin gibt es zuerst zufällig Giraffen mit längeren Hälsen, die dann besser überleben.</p>
<p><b>Belege:</b> <b>Fossilien</b> zeigen ausgestorbene Arten und Übergangsformen (Archaeopteryx zwischen Reptil und Vogel). <b>Homologe Organe</b> haben den gleichen Grundbauplan trotz anderer Funktion (Arm, Flügel, Flosse – gemeinsame Abstammung). <b>Analoge Organe</b> haben gleiche Funktion, aber anderen Bauplan (Flügel von Vogel und Insekt – ähnliche Umwelt). <b>Rudimente</b> sind Reste ohne Funktion (Blinddarm, Steißbein).</p>
<p><b>Stammbaum Mensch:</b> Vor etwa 6–7 Millionen Jahren trennten sich die Linien von Mensch und Schimpanse. Australopithecus (aufrechter Gang, vor ca. 3–4 Mio. Jahren) → Homo habilis (Werkzeuge) → Homo erectus (Feuer, verließ Afrika) → Neandertaler und Homo sapiens (vor ca. 300 000 Jahren in Afrika). Der Mensch stammt <b>nicht</b> vom Schimpansen ab, beide haben gemeinsame Vorfahren.</p>`,
      aufgaben: [
        { t: "wahl", f: "Wer veröffentlichte 1859 die Theorie der natürlichen Selektion?", a: ["Charles Darwin", "Jean-Baptiste Lamarck", "Gregor Mendel", "Alexander Fleming"], r: 0, info: "Darwins Buch „Über die Entstehung der Arten“ erschien 1859." },
        { t: "wahl", f: "Was bedeutet „natürliche Selektion“?", a: ["Besser angepasste Lebewesen überleben und vermehren sich eher", "Tiere wählen ihre Partner aus", "Menschen züchten Tiere", "Alle Lebewesen überleben gleich gut"], r: 0, info: "Die Umwelt „wählt aus“: Angepasste Varianten hinterlassen mehr Nachkommen." },
        { t: "wahl", f: "Wodurch entsteht Variation innerhalb einer Art?", a: ["Mutation und Neukombination der Gene", "Training der Eltern", "Wunsch der Tiere", "Nur durch Ernährung"], r: 0, info: "Zufällige Mutationen und die Durchmischung bei der Fortpflanzung liefern Unterschiede." },
        { t: "wahl", f: "Wie erklärte Lamarck den langen Giraffenhals?", a: ["Giraffen streckten sich und vererbten den längeren Hals", "Zufällig langhalsige Giraffen überlebten besser", "Durch Mutation im Zellkern", "Durch Kreuzung mit anderen Arten"], r: 0, info: "Lamarck glaubte an die Vererbung erworbener Eigenschaften – heute widerlegt." },
        { t: "wahl", f: "Wie erklärt Darwin den langen Giraffenhals?", a: ["Zufällig langhalsige Tiere kamen besser an Futter und hatten mehr Nachkommen", "Giraffen streckten sich jeden Tag", "Giraffen wollten höher reichen", "Der Hals wuchs durch Training"], r: 0, info: "Erst Variation, dann Selektion – der Vorteil wird vererbt." },
        { t: "wahl", f: "Was ist ein Fossil?", a: ["Überrest oder Abdruck eines Lebewesens aus früherer Erdzeit", "Ein lebendes Tier", "Ein Mineral", "Eine Pflanze im Regenwald"], r: 0, info: "Fossilien entstehen, wenn Reste im Sediment eingeschlossen und versteinert werden." },
        { t: "wahl", f: "Der Archaeopteryx gilt als Übergangsform zwischen …", a: ["Reptilien und Vögeln", "Fischen und Amphibien", "Affen und Menschen", "Pflanzen und Tieren"], r: 0, info: "Er hat Federn und Flügel, aber auch Zähne, Krallen und einen langen Knochenschwanz." },
        { t: "wahl", f: "Menschenarm, Walflosse und Vogelflügel haben den gleichen Knochenbauplan. Sie sind …", a: ["homolog", "analog", "rudimentär", "identisch"], r: 0, info: "Homologie = gleicher Bauplan durch gemeinsame Abstammung, auch bei anderer Funktion." },
        { t: "wahl", f: "Vogelflügel und Insektenflügel erfüllen die gleiche Funktion, sind aber ganz anders gebaut. Sie sind …", a: ["analog", "homolog", "rudimentär", "fossil"], r: 0, info: "Analogie entsteht durch ähnliche Umweltanforderungen, nicht durch Verwandtschaft." },
        { t: "wahl", f: "Was ist ein Rudiment?", a: ["Ein rückgebildetes Organ ohne Funktion, z. B. das Steißbein", "Ein neues Organ", "Ein Fossil", "Ein Werkzeug der Frühmenschen"], r: 0, info: "Rudimente wie Steißbein oder Weisheitszähne zeigen die Abstammung von Vorfahren." },
        { t: "wahl", f: "Welche Aussage über Mensch und Schimpanse ist richtig?", a: ["Beide haben gemeinsame Vorfahren", "Der Mensch stammt vom Schimpansen ab", "Der Schimpanse stammt vom Menschen ab", "Beide sind nicht verwandt"], r: 0, info: "Vor etwa 6–7 Millionen Jahren trennten sich die Entwicklungslinien." },
        { t: "wahl", f: "Welcher Frühmensch nutzte als erster regelmäßig Feuer und verließ Afrika?", a: ["Homo erectus", "Australopithecus", "Homo habilis", "Neandertaler"], r: 0, info: "Homo erectus lebte vor etwa 1,9 Millionen bis 100 000 Jahren und breitete sich bis Asien aus." },
        { t: "wahl", f: "Vor wie vielen Jahren entstand der Homo sapiens in Afrika ungefähr?", a: ["vor etwa 300 000 Jahren", "vor etwa 10 000 Jahren", "vor etwa 5 Millionen Jahren", "vor etwa 65 Millionen Jahren"], r: 0, info: "Die ältesten Funde des modernen Menschen (Marokko) sind rund 300 000 Jahre alt." },
        { t: "eingabe", f: "Wie heißt die Theorie, nach der erworbene Eigenschaften vererbt werden (nach ihrem Begründer, Nachname)?", l: ["Lamarck", "Lamarckismus"], info: "Lamarcks Idee der Vererbung erworbener Eigenschaften gilt als widerlegt." },
        { t: "eingabe", f: "Auf welchen Inseln untersuchte Darwin die Finken?", l: ["Galapagos", "Galápagos", "Galapagosinseln", "Galápagos-Inseln"], info: "Die Darwinfinken haben je nach Nahrung auf den Inseln verschiedene Schnabelformen." },
        { t: "eingabe", f: "Organe mit gleichem Grundbauplan, aber unterschiedlicher Funktion nennt man ___ Organe.", l: ["homologe", "homolog"], info: "Homologie weist auf gemeinsame Vorfahren hin." },
        { t: "paare", f: "Homolog oder analog?", p: [["Menschenarm und Walflosse", "homolog"], ["Vogelflügel und Insektenflügel", "analog"], ["Maulwurfshand und Maulwurfsgrillen-Bein", "analog"], ["Fledermausflügel und Hundepfote", "homolog"]] },
        { t: "reihenfolge", f: "Ordne die Schritte der Evolution nach Darwin", items: ["Variation: Individuen unterscheiden sich", "Überproduktion: mehr Nachkommen als überleben", "Selektion: Angepasste überleben eher", "Vererbung: Merkmal häuft sich"] },
        { t: "reihenfolge", f: "Ordne die Vormenschen und Menschen zeitlich", items: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"] },
        { t: "paare", f: "Ordne Darwin und Lamarck zu", p: [["erworbene Eigenschaften werden vererbt", "Lamarck"], ["natürliche Selektion", "Darwin"], ["Giraffe streckt den Hals", "Lamarck"], ["Variation durch Zufall", "Darwin"]] }
      ]
    }
  ]
};
window.FAECHER.push(FACH);
})();
