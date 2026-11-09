// Lernwelt – Buch-Zuordnung Chemie: Westermann „Erlebnis Chemie 2“ (Ausgabe 2022 für NRW und Hessen, Klasse 9/10).
// Ordnet vorhandene Themen den sechs Buchkapiteln zu und ergänzt Themen für Kapitelteile ohne Abdeckung
// (Alkohole/Ethanol, Produkte der Chemie). Nur Kapitelnamen und Seitenzahlen aus dem Inhaltsverzeichnis –
// keine Buchtexte. Reines Browser-JS, kein Import/Export.
"use strict";
(function () {
  const FACH = window.FAECHER.find((f) => f.id === "chemie");
  if (!FACH) return;
  FACH.buch = "Westermann Erlebnis Chemie 2 (Ausgabe 2022 NRW)";

  // ---------- Kapitel (das Buch nummeriert nicht; Reihenfolge wie im Inhaltsverzeichnis) ----------
  const C1 = "Kapitel 1 · Periodensystem und Atombau (S. 8–51)";
  const C2 = "Kapitel 2 · Chemische Bindungen (S. 54–97)";
  const C3 = "Kapitel 3 · Saure und alkalische Lösungen (S. 100–127)";
  const C4 = "Kapitel 4 · Energie aus chemischen Reaktionen (S. 130–147)";
  const C5 = "Kapitel 5 · Stoffe als Energieträger (S. 150–209)";
  const C6 = "Kapitel 6 · Produkte der Chemie (S. 212–237)";

  const kap = (id, kapitel) => { const t = FACH.themen.find((x) => x.id === id); if (t) t.kapitel = kapitel; };
  kap("pse", C1);
  kap("atombau", C1);
  kap("bindungen", C2);
  kap("saeuren", C3);
  kap("reaktionen", C4);        // Redoxreaktion, Elektronenübertragung, Energie bei Reaktionen
  kap("elektrochemie", C4);
  kap("organik", C5);
  kap("alltag", C6);            // Kunststoffe, Reinigungsmittel, Alltagsprodukte

  const wahl = (f, a, r, info) => ({ t: "wahl", f, a, r, info });
  const eingabe = (f, l, info) => ({ t: "eingabe", f, l, info });
  const zahl = (f, l, info, einheit, tol) => ({ t: "zahl", f, l, info, einheit, tol: tol ?? 0.01 });

  FACH.themen.push(
    {
      id: "alkohole", kapitel: C5, titel: "Ethanol & Alkanole, Katalysatoren",
      kurz: "Alkoholische Gärung, Bau des Ethanol-Moleküls, Hydroxygruppe, homologe Reihe der Alkanole, Verwendung, Wirkung, Katalysator",
      erklaerung: `<p><b>Ethanol</b> (Trinkalkohol) entsteht bei der <b>alkoholischen Gärung</b>: Hefezellen bauen Zucker ohne Sauerstoff ab – Glucose → 2 Ethanol + 2 Kohlenstoffdioxid (C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂). Ab etwa 15 Vol.-% stirbt die Hefe ab; höherprozentige Getränke entstehen durch <b>Destillation</b>, weil Ethanol schon bei 78 °C siedet, Wasser erst bei 100 °C.</p>
<p><b>Molekülbau:</b> Ethanol C₂H₅OH besteht aus einem Ethyl-Rest (unpolar, fettfreundlich) und der <b>Hydroxygruppe –OH</b> (polar). Deshalb mischt sich Ethanol mit Wasser <i>und</i> löst Fette und Öle – ein ideales Lösungsmittel. Die OH-Gruppen bilden <b>Wasserstoffbrücken</b>; darum siedet Ethanol viel höher als das gleich große Alkan Ethan (−89 °C).</p>
<p><b>Homologe Reihe der Alkanole</b> (allgemeine Formel C<sub>n</sub>H<sub>2n+1</sub>OH): Methanol CH₃OH (stark giftig, Erblindung), Ethanol C₂H₅OH, Propanol C₃H₇OH, Butanol C₄H₉OH … Mit jeder CH₂-Gruppe steigt der Siedepunkt und sinkt die Wasserlöslichkeit. Mehrwertige Alkohole: Glykol (2 OH-Gruppen, Frostschutz), Glycerin (3 OH-Gruppen, in Fetten und Kosmetik).</p>
<p><b>Verwendung:</b> Lösungsmittel, Desinfektionsmittel, Brennspiritus (vergällt), Kraftstoffzusatz (E10 = 10 % Bioethanol). <b>Wirkung:</b> Ethanol ist ein Zellgift, schädigt Leber und Gehirn und macht abhängig; die Leber baut etwa 0,1–0,15 Promille pro Stunde ab.</p>
<p>Ein <b>Katalysator</b> beschleunigt eine Reaktion, indem er die Aktivierungsenergie senkt, und liegt am Ende unverändert vor. Der Fahrzeug-Katalysator (Platin, Rhodium) wandelt Kohlenstoffmonoxid, Stickoxide und unverbrannte Kohlenwasserstoffe in CO₂, N₂ und Wasser um. Enzyme sind Biokatalysatoren – auch bei der Gärung.</p>`,
      aufgaben: [
        wahl("Welche Stoffe entstehen bei der alkoholischen Gärung aus Traubenzucker?", ["Ethanol und Kohlenstoffdioxid", "Ethanol und Sauerstoff", "Essigsäure und Wasser", "Methan und Wasser"], 0, "Hefe baut Glucose ohne Sauerstoff zu Ethanol und CO₂ ab – die Bläschen im Sekt sind dieses CO₂."),
        eingabe("Die alkoholische Gärung wird von den Enzymen der ___ (einzellige Pilze) durchgeführt.", ["Hefe", "Hefen", "Hefezellen", "Hefepilze"], "Hefezellen leben vom Zucker; der Alkohol ist ihr Abfallprodukt."),
        zahl("Ab etwa wie viel Volumenprozent Ethanol stirbt die Hefe ab, sodass Gärung allein keine stärkeren Getränke liefert?", 15, "Ab rund 15 Vol.-% wirkt Ethanol auf die Hefe tödlich; Schnaps entsteht deshalb erst durch Destillieren.", "Vol.-%", 3),
        wahl("Warum lässt sich Ethanol aus Wein durch Destillation anreichern?", ["Ethanol siedet bei 78 °C, Wasser erst bei 100 °C", "Ethanol ist schwerer als Wasser und setzt sich ab", "Ethanol gefriert eher als Wasser", "Ethanol löst sich nicht in Wasser"], 0, "Beim Erhitzen verdampft zuerst vor allem der Alkohol; der Dampf wird abgekühlt und aufgefangen."),
        eingabe("Die funktionelle Gruppe der Alkohole, –OH, heißt ___.", ["Hydroxygruppe", "Hydroxylgruppe", "Hydroxy-Gruppe"], "Die Hydroxygruppe ist polar und macht kurze Alkohole wasserlöslich."),
        wahl("Welche Summenformel hat Ethanol?", ["C₂H₅OH (C₂H₆O)", "CH₃OH", "C₂H₄", "C₂H₅COOH"], 0, "Ethanol: zwei C-Atome, fünf H-Atome am Ethyl-Rest und die OH-Gruppe – insgesamt C₂H₆O."),
        zahl("Wie groß ist die molare Masse von Ethanol C₂H₆O? (C = 12, H = 1, O = 16; in g/mol)", 46, "2 · 12 + 6 · 1 + 16 = 46 g/mol.", "g/mol"),
        wahl("Warum mischt sich Ethanol sowohl mit Wasser als auch mit Öl?", ["Es hat einen polaren Teil (OH-Gruppe) und einen unpolaren Teil (Ethyl-Rest)", "Weil es eine Säure ist", "Weil seine Moleküle sehr klein sind", "Weil es als Gas vorliegt"], 0, "Die OH-Gruppe bildet Wasserstoffbrücken zum Wasser, der Kohlenwasserstoff-Rest passt zu den unpolaren Ölmolekülen."),
        wahl("Warum siedet Ethanol (78 °C) viel höher als Ethan (−89 °C), obwohl beide Moleküle ähnlich groß sind?", ["Zwischen den OH-Gruppen der Ethanol-Moleküle wirken Wasserstoffbrücken", "Ethanol-Moleküle sind viel schwerer", "Ethanol ist ein Salz", "Ethan enthält Sauerstoff"], 0, "Wasserstoffbrücken halten die Ethanol-Moleküle stärker zusammen als die schwachen Van-der-Waals-Kräfte zwischen Ethan-Molekülen."),
        { t: "reihenfolge", f: "Ordne die Alkanole der homologen Reihe nach steigender Anzahl der Kohlenstoffatome", items: ["Methanol", "Ethanol", "Propanol", "Butanol", "Pentanol"] },
        wahl("Welcher Alkohol ist schon in kleinen Mengen stark giftig und kann zur Erblindung führen?", ["Methanol", "Ethanol", "Glycerin", "Propanol"], 0, "Methanol wird im Körper zu Methanal und Ameisensäure abgebaut, die den Sehnerv schädigen."),
        wahl("Wie heißt die allgemeine Formel der Alkanole?", ["CₙH₂ₙ₊₁OH", "CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙO₂"], 0, "Ein Alkan CₙH₂ₙ₊₂, bei dem ein H gegen OH getauscht ist: CₙH₂ₙ₊₁OH."),
        { t: "paare", f: "Ordne die Alkohole ihrer Anzahl an OH-Gruppen zu", p: [["Ethanol", "1 OH-Gruppe"], ["Glykol (Ethandiol)", "2 OH-Gruppen"], ["Glycerin (Propantriol)", "3 OH-Gruppen"], ["Ethan", "keine OH-Gruppe"]] },
        wahl("Was bedeutet die Bezeichnung E10 an der Tankstelle?", ["Benzin mit bis zu 10 % Bioethanol", "Benzin mit 10 Oktan mehr", "Diesel mit 10 % Rapsöl", "Benzin aus 10 % Erdgas"], 0, "Bioethanol aus Zuckerrüben, Getreide oder Mais wird dem Ottokraftstoff beigemischt."),
        zahl("Ein Glas Bier (0,5 L) hat 5 Vol.-% Alkohol. Wie viel Milliliter reines Ethanol sind das?", 25, "5 % von 500 mL = 0,05 · 500 mL = 25 mL.", "mL"),
        wahl("Welche Aussage über Katalysatoren ist richtig?", ["Sie beschleunigen die Reaktion, indem sie die Aktivierungsenergie senken, und werden dabei nicht verbraucht", "Sie liefern die Energie für die Reaktion und werden verbraucht", "Sie verlangsamen jede Reaktion", "Sie verändern die Produkte der Reaktion"], 0, "Der Katalysator eröffnet einen Reaktionsweg mit niedrigerer Aktivierungsenergie und liegt am Ende unverändert vor."),
        wahl("Welche Schadstoffe wandelt der Abgaskatalysator eines Autos um?", ["Kohlenstoffmonoxid, Stickoxide und unverbrannte Kohlenwasserstoffe", "Kohlenstoffdioxid und Wasserdampf", "Stickstoff und Sauerstoff", "Ruß und Feinstaub"], 0, "CO wird zu CO₂, Stickoxide zu N₂, Kohlenwasserstoffe zu CO₂ und Wasser – CO₂ selbst kann der Katalysator nicht entfernen."),
      ],
    },
    {
      id: "produkte", kapitel: C6, titel: "Produkte der Chemie: Tenside, Essig, Ester, Kunststoffe, Klebstoffe",
      kurz: "Tenside und Seife, Löslichkeit und Emulsionen, Essigsäure, Ester und Fette, Polymerisation, Thermoplaste/Duroplaste, Adhäsion/Kohäsion",
      erklaerung: `<p><b>Löslichkeit:</b> Gleiches löst sich in Gleichem – polare Stoffe (Salz, Zucker) in Wasser, unpolare (Fett, Öl) in Benzin. Die Löslichkeit fester Stoffe steigt meist mit der Temperatur, die von Gasen sinkt. Öl und Wasser mischen sich nicht; ein <b>Emulgator</b> (z. B. Lecithin im Eigelb) hält sie als <b>Emulsion</b> zusammen – Milch, Mayonnaise, Creme.</p>
<p><b>Tenside</b> haben einen wasserliebenden (hydrophilen) Kopf und einen fettliebenden (lipophilen, hydrophoben) Schwanz. Sie senken die Oberflächenspannung des Wassers, umhüllen Fetttröpfchen (<b>Micellen</b>) und machen Schmutz abwaschbar. <b>Seife</b> entsteht aus Fett und Natronlauge (Verseifung) und ist das Natriumsalz von Fettsäuren; in hartem Wasser bildet sie unlösliche Kalkseife, moderne Waschmittel nutzen deshalb synthetische Tenside.</p>
<p><b>Essig:</b> Essigsäurebakterien oxidieren Ethanol mit Luftsauerstoff zu <b>Essigsäure</b> CH₃COOH (Carboxygruppe –COOH) und Wasser; Speiseessig enthält etwa 5 % Essigsäure. Essigsäure, Benzoesäure und Sorbinsäure dienen als Konservierungsstoffe.</p>
<p><b>Ester</b> entstehen aus Säure + Alkohol unter Abspaltung von Wasser (Veresterung, konzentrierte Schwefelsäure als Katalysator). Viele Ester riechen fruchtig und sind Aromastoffe. <b>Fette</b> sind Ester aus Glycerin und drei Fettsäuren, <b>Wachse</b> Ester aus langkettigen Alkoholen und Fettsäuren.</p>
<p><b>Kunststoffe</b> sind Makromoleküle (<b>Polymere</b>) aus vielen kleinen <b>Monomeren</b>. Bei der <b>Polymerisation</b> öffnen sich Doppelbindungen (Ethen → Polyethylen PE); bei der <b>Polykondensation</b> wird ein kleines Molekül wie Wasser abgespalten (Polyester, Nylon). <b>Thermoplaste</b> werden beim Erwärmen weich und sind recycelbar (PE, PET, PVC, PS), <b>Duroplaste</b> bleiben hart (Steckdosen, Topfgriffe), <b>Elastomere</b> sind gummielastisch.</p>
<p><b>Kleben:</b> <b>Adhäsion</b> = Haften des Klebstoffs an der Oberfläche, <b>Kohäsion</b> = Zusammenhalt im Klebstoff selbst. Sekundenkleber (Cyanacrylat) härtet durch Luftfeuchtigkeit, Zweikomponentenkleber durch die Reaktion von Harz und Härter, Lösungsmittelkleber durch Verdunsten.</p>`,
      aufgaben: [
        wahl("Wie ist ein Tensid-Teilchen aufgebaut?", ["Hydrophiler (wasserliebender) Kopf und lipophiler (fettliebender) Schwanz", "Zwei hydrophile Enden", "Ein Metall-Ion mit Wasserhülle", "Ein unpolares Molekül ohne Ladung"], 0, "Der Schwanz steckt im Fett, der Kopf zeigt ins Wasser – so wird Fett im Wasser „verpackt“ und fortgespült."),
        eingabe("Tenside umhüllen Fetttröpfchen und bilden kugelförmige Gebilde, die ___ heißen.", ["Micellen", "Mizellen"], "In der Micelle zeigen die fettliebenden Schwänze nach innen zum Fett, die Köpfe nach außen ins Wasser."),
        wahl("Welche Wirkung hat ein Tensid auf Wasser?", ["Es senkt die Oberflächenspannung, Wasser benetzt besser", "Es erhöht die Oberflächenspannung", "Es macht Wasser sauer", "Es lässt Wasser schneller gefrieren"], 0, "Tenside lagern sich an der Wasseroberfläche an und stören den Zusammenhalt der Wassermoleküle – deshalb perlt Wasser nicht mehr ab."),
        wahl("Woraus wird Seife hergestellt?", ["Aus Fett und Natronlauge (Verseifung)", "Aus Erdöl und Schwefelsäure", "Aus Zucker und Hefe", "Aus Kalk und Wasser"], 0, "Natronlauge spaltet das Fett in Glycerin und die Natriumsalze der Fettsäuren – die Seife."),
        wahl("Welcher Nachteil tritt auf, wenn man mit Seife in hartem (kalkhaltigem) Wasser wäscht?", ["Es bildet sich unlösliche Kalkseife, die Waschwirkung sinkt", "Die Seife wird sauer", "Das Wasser wird weich", "Die Seife löst sich gar nicht"], 0, "Calcium- und Magnesium-Ionen des harten Wassers bilden mit den Fettsäure-Anionen schwer lösliche Kalkseife; synthetische Tenside haben dieses Problem nicht."),
        wahl("Was ist eine Emulsion?", ["Ein fein verteiltes Gemisch zweier nicht mischbarer Flüssigkeiten, z. B. Öl in Wasser", "Eine Lösung von Salz in Wasser", "Ein Gemisch aus Gas und Flüssigkeit", "Ein fester Stoff in einer Flüssigkeit"], 0, "Milch und Mayonnaise sind Emulsionen; ein Emulgator (z. B. Lecithin) verhindert, dass sich Öl und Wasser wieder trennen."),
        wahl("Welche Regel beschreibt die Löslichkeit am besten?", ["Gleiches löst sich in Gleichem: polar in polar, unpolar in unpolar", "Alles löst sich in Wasser", "Feststoffe lösen sich nur in heißem Öl", "Gase lösen sich besser in warmem Wasser"], 0, "Polare Stoffe wie Salz lösen sich in polarem Wasser, unpolares Fett in unpolarem Benzin. Gase lösen sich in kaltem Wasser besser."),
        wahl("Wie entsteht aus Wein Essig?", ["Essigsäurebakterien oxidieren Ethanol mit Sauerstoff zu Essigsäure und Wasser", "Hefe vergärt den Wein weiter", "Der Wein wird destilliert", "Der Wein reagiert mit Kochsalz"], 0, "Ohne Luft kein Essig: Die Bakterien brauchen Sauerstoff für die Oxidation des Alkohols."),
        eingabe("Die funktionelle Gruppe der Carbonsäuren wie Essigsäure, –COOH, heißt ___.", ["Carboxygruppe", "Carboxylgruppe", "Carboxy-Gruppe"], "Die Carboxygruppe gibt ein Proton ab – deshalb reagieren Carbonsäuren sauer."),
        wahl("Welche Formel hat Essigsäure?", ["CH₃COOH", "C₂H₅OH", "HCOOH", "CH₃OH"], 0, "Essigsäure (Ethansäure): Methylgruppe plus Carboxygruppe. HCOOH ist Ameisensäure, C₂H₅OH Ethanol."),
        zahl("Speiseessig enthält etwa wie viel Prozent Essigsäure?", 5, "Haushaltsessig hat rund 5 % Säure; Essigessenz ist mit 25 % deutlich konzentrierter.", "%", 1),
        wahl("Wie entsteht ein Ester?", ["Aus einer Säure und einem Alkohol unter Abspaltung von Wasser", "Aus zwei Alkoholen unter Aufnahme von Wasser", "Aus einer Säure und einer Lauge zu Salz", "Aus einem Alkan und Sauerstoff"], 0, "Veresterung: Säure + Alkohol → Ester + Wasser; konzentrierte Schwefelsäure dient als Katalysator. Viele Ester riechen fruchtig."),
        zahl("Ein Fett-Molekül entsteht aus einem Glycerin-Molekül und drei Fettsäure-Molekülen. Wie viele Wasser-Moleküle werden dabei abgespalten?", 3, "Jede der drei OH-Gruppen des Glycerins bildet mit einer Fettsäure eine Esterbindung – pro Bindung wird ein Wasser-Molekül frei.", ""),
        { t: "paare", f: "Ordne die Stoffklassen zu", p: [["Fett", "Ester aus Glycerin und drei Fettsäuren"], ["Wachs", "Ester aus langkettigem Alkohol und Fettsäure"], ["Seife", "Natriumsalz von Fettsäuren"], ["Essigsäure", "Carbonsäure mit –COOH"]] },
        wahl("Was passiert bei der Polymerisation von Ethen zu Polyethylen?", ["Die Doppelbindungen der Ethen-Moleküle öffnen sich und die Monomere verketten sich zu Makromolekülen", "Ethen verbrennt zu CO₂ und Wasser", "Aus Ethen wird unter Wasserabspaltung ein Ester", "Ethen löst sich in Wasser und kristallisiert"], 0, "Viele kleine Monomere (Ethen) bilden ein langes Polymer (PE) – ohne dass ein Nebenprodukt entsteht."),
        wahl("Worin unterscheidet sich die Polykondensation von der Polymerisation?", ["Bei der Polykondensation wird je Verknüpfung ein kleines Molekül wie Wasser abgespalten", "Bei der Polykondensation entstehen keine Makromoleküle", "Polykondensation läuft nur bei Metallen ab", "Es gibt keinen Unterschied"], 0, "Polyester und Nylon entstehen durch Polykondensation; Polyethylen und PVC durch Polymerisation."),
        { t: "paare", f: "Ordne die Kunststoffgruppen ihren Eigenschaften zu", p: [["Thermoplast", "wird beim Erwärmen weich, gut recycelbar (PE, PET)"], ["Duroplast", "bleibt beim Erwärmen hart, zersetzt sich bei starker Hitze"], ["Elastomer", "gummielastisch, kehrt in die Form zurück"]] },
        wahl("Was bedeutet Adhäsion beim Kleben?", ["Das Haften des Klebstoffs an der Oberfläche des Werkstücks", "Der Zusammenhalt der Klebstoff-Teilchen untereinander", "Das Aushärten durch Wärme", "Das Verdunsten des Lösungsmittels"], 0, "Adhäsion = Haftung am Material, Kohäsion = innerer Zusammenhalt des Klebstoffs. Beides muss stark sein, damit die Verbindung hält."),
      ],
    },
  );
})();
