"use strict";
// Lernwelt – Fach Erdkunde (Klasse 9, NRW). Reines Browser-JS, kein Import/Export.

(function () {
  // 60 Land/Hauptstadt-Paare: Europa komplett-ish plus wichtige Welt
  const HAUPTSTAEDTE = [
    ["Deutschland", "Berlin"], ["Frankreich", "Paris"], ["Italien", "Rom"], ["Spanien", "Madrid"],
    ["Portugal", "Lissabon"], ["Niederlande", "Amsterdam"], ["Belgien", "Brüssel"], ["Luxemburg", "Luxemburg"],
    ["Schweiz", "Bern"], ["Österreich", "Wien"], ["Polen", "Warschau"], ["Tschechien", "Prag"],
    ["Slowakei", "Bratislava"], ["Ungarn", "Budapest"], ["Dänemark", "Kopenhagen"], ["Schweden", "Stockholm"],
    ["Norwegen", "Oslo"], ["Finnland", "Helsinki"], ["Island", "Reykjavik"], ["Irland", "Dublin"],
    ["Vereinigtes Königreich", "London"], ["Griechenland", "Athen"], ["Türkei", "Ankara"], ["Rumänien", "Bukarest"],
    ["Bulgarien", "Sofia"], ["Kroatien", "Zagreb"], ["Slowenien", "Ljubljana"], ["Serbien", "Belgrad"],
    ["Bosnien und Herzegowina", "Sarajevo"], ["Albanien", "Tirana"], ["Nordmazedonien", "Skopje"], ["Ukraine", "Kiew"],
    ["Russland", "Moskau"], ["Belarus", "Minsk"], ["Litauen", "Vilnius"], ["Lettland", "Riga"],
    ["Estland", "Tallinn"], ["Zypern", "Nikosia"], ["Malta", "Valletta"], ["Moldau", "Chișinău"],
    ["USA", "Washington, D.C."], ["Kanada", "Ottawa"], ["Mexiko", "Mexiko-Stadt"], ["Brasilien", "Brasília"],
    ["Argentinien", "Buenos Aires"], ["Chile", "Santiago de Chile"], ["Peru", "Lima"], ["Kolumbien", "Bogotá"],
    ["China", "Peking"], ["Japan", "Tokio"], ["Indien", "Neu-Delhi"], ["Südkorea", "Seoul"],
    ["Indonesien", "Jakarta"], ["Thailand", "Bangkok"], ["Iran", "Teheran"], ["Saudi-Arabien", "Riad"],
    ["Ägypten", "Kairo"], ["Nigeria", "Abuja"], ["Südafrika", "Pretoria"], ["Australien", "Canberra"]
  ];

  // Alternative Schreibweisen für die Eingabe
  const ALT = {
    "Washington, D.C.": ["Washington", "Washington D.C.", "Washington DC"],
    "Mexiko-Stadt": ["Mexiko Stadt", "Mexico City", "Ciudad de Mexico"],
    "Brasília": ["Brasilia"],
    "Santiago de Chile": ["Santiago"],
    "Bogotá": ["Bogota"],
    "Neu-Delhi": ["Neu Delhi", "New Delhi", "Delhi"],
    "Chișinău": ["Chisinau", "Kischinau", "Kischinjow"],
    "Kiew": ["Kyjiw", "Kyiv"],
    "Reykjavik": ["Reykjavík"],
    "Peking": ["Beijing"],
    "Vereinigtes Königreich": ["Großbritannien", "Grossbritannien", "UK", "England"],
    "Bosnien und Herzegowina": ["Bosnien", "Bosnien-Herzegowina"],
    "USA": ["Vereinigte Staaten", "Vereinigte Staaten von Amerika", "Amerika"],
    "Belarus": ["Weißrussland", "Weissrussland"],
    "Moldau": ["Moldawien", "Republik Moldau"],
    "Tschechien": ["Tschechische Republik"],
    "Südkorea": ["Korea", "Republik Korea"]
  };
  const mitAlt = (w) => [w].concat(ALT[w] || []);

  function mischen(rng, arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function genHauptstaedte(rng) {
    const idx = rng.int(0, HAUPTSTAEDTE.length - 1);
    const [land, stadt] = HAUPTSTAEDTE[idx];
    const art = rng.int(1, 4);
    if (art === 1) {
      return {
        t: "eingabe",
        f: "Wie heißt die Hauptstadt von " + land + "?",
        l: mitAlt(stadt),
        info: stadt + " ist die Hauptstadt von " + land + "."
      };
    }
    if (art === 2) {
      return {
        t: "eingabe",
        f: "Von welchem Land ist " + stadt + " die Hauptstadt?",
        l: mitAlt(land),
        info: stadt + " ist die Hauptstadt von " + land + "."
      };
    }
    // Auswahl mit 4 Optionen
    const andere = [];
    while (andere.length < 3) {
      const k = HAUPTSTAEDTE[rng.int(0, HAUPTSTAEDTE.length - 1)];
      if (k[0] !== land && andere.indexOf(k) < 0) andere.push(k);
    }
    if (art === 3) {
      const opts = mischen(rng, [stadt].concat(andere.map((k) => k[1])));
      return {
        t: "wahl",
        f: "Welche Stadt ist die Hauptstadt von " + land + "?",
        a: opts, r: opts.indexOf(stadt),
        info: stadt + " ist die Hauptstadt von " + land + "."
      };
    }
    const opts = mischen(rng, [land].concat(andere.map((k) => k[0])));
    return {
      t: "wahl",
      f: stadt + " ist die Hauptstadt von …",
      a: opts, r: opts.indexOf(land),
      info: stadt + " ist die Hauptstadt von " + land + "."
    };
  }

  const FACH = {
    id: "erdkunde",
    name: "Erdkunde",
    icon: "🌍",
    farbe: "#1f8a70",
    beschreibung: "Hauptstädte, Bundesländer, Klima, Plattentektonik, Bevölkerung, Globalisierung",
    themen: [
      {
        id: "hauptstaedte",
        titel: "Hauptstädte Europa & Welt",
        kurz: "60 Länder und ihre Hauptstädte",
        erklaerung: `<p>Die <b>Hauptstadt</b> ist meist Sitz von Regierung und Parlament eines Landes – aber nicht immer die größte Stadt. In den <b>USA</b> ist Washington, D.C. Hauptstadt, nicht New York; in <b>Australien</b> Canberra, nicht Sydney; in <b>Kanada</b> Ottawa, nicht Toronto; in der <b>Türkei</b> Ankara, nicht Istanbul; in der <b>Schweiz</b> Bern, nicht Zürich.</p>
<p>In Europa helfen Nachbarschaften beim Merken: Die baltischen Staaten von Nord nach Süd sind Estland (Tallinn), Lettland (Riga), Litauen (Vilnius). Auf dem Balkan liegen Slowenien (Ljubljana), Kroatien (Zagreb), Bosnien und Herzegowina (Sarajevo), Serbien (Belgrad), Nordmazedonien (Skopje) und Albanien (Tirana).</p>
<p>Einige Hauptstädte heißen wie ihr Land: Luxemburg, Mexiko-Stadt, Kuwait. Vorsicht bei Verwechslungen: Bratislava (Slowakei) und Ljubljana (Slowenien), Bukarest (Rumänien) und Budapest (Ungarn).</p>
<p>Übe mit dem Generator: Er fragt abwechselnd Land → Hauptstadt und Hauptstadt → Land, als Auswahl oder als Eingabe.</p>`,
        gen: genHauptstaedte
      },
      {
        id: "bundeslaender",
        titel: "Bundesländer & Nachbarländer",
        kurz: "16 Länder, Landeshauptstädte, 9 Nachbarstaaten",
        erklaerung: `<p>Deutschland ist ein <b>Bundesstaat</b> aus <b>16 Bundesländern</b>. Drei davon sind <b>Stadtstaaten</b>: Berlin, Hamburg und Bremen. Das flächengrößte Land ist <b>Bayern</b>, das bevölkerungsreichste <b>Nordrhein-Westfalen</b> mit rund 18 Millionen Menschen und der Landeshauptstadt <b>Düsseldorf</b> – nicht Köln, obwohl Köln größer ist.</p>
<p>Weitere Stolperfallen: Niedersachsen → Hannover, Sachsen → Dresden (nicht Leipzig), Sachsen-Anhalt → Magdeburg, Baden-Württemberg → Stuttgart, Hessen → Wiesbaden (nicht Frankfurt), Rheinland-Pfalz → Mainz, Schleswig-Holstein → Kiel, Mecklenburg-Vorpommern → Schwerin, Brandenburg → Potsdam, Thüringen → Erfurt, Saarland → Saarbrücken, Bayern → München.</p>
<p>Deutschland hat <b>neun Nachbarländer</b>: im Norden Dänemark, im Osten Polen und Tschechien, im Süden Österreich und die Schweiz, im Westen Frankreich, Luxemburg, Belgien und die Niederlande. Merksatz von Norden im Uhrzeigersinn: Dänemark, Polen, Tschechien, Österreich, Schweiz, Frankreich, Luxemburg, Belgien, Niederlande.</p>`,
        aufgaben: [
          { t: "paare", f: "Ordne die Landeshauptstädte zu (Teil 1)", p: [["Nordrhein-Westfalen", "Düsseldorf"], ["Bayern", "München"], ["Hessen", "Wiesbaden"], ["Niedersachsen", "Hannover"]] },
          { t: "paare", f: "Ordne die Landeshauptstädte zu (Teil 2)", p: [["Sachsen", "Dresden"], ["Sachsen-Anhalt", "Magdeburg"], ["Thüringen", "Erfurt"], ["Brandenburg", "Potsdam"]] },
          { t: "paare", f: "Ordne die Landeshauptstädte zu (Teil 3)", p: [["Baden-Württemberg", "Stuttgart"], ["Rheinland-Pfalz", "Mainz"], ["Saarland", "Saarbrücken"], ["Schleswig-Holstein", "Kiel"], ["Mecklenburg-Vorpommern", "Schwerin"]] },
          { t: "wahl", f: "Wie heißt die Landeshauptstadt von Nordrhein-Westfalen?", a: ["Düsseldorf", "Köln", "Dortmund", "Essen"], r: 0, info: "Düsseldorf ist Regierungssitz, obwohl Köln die größte Stadt in NRW ist." },
          { t: "wahl", f: "Welche Stadt ist die Landeshauptstadt von Hessen?", a: ["Wiesbaden", "Frankfurt am Main", "Kassel", "Darmstadt"], r: 0, info: "Frankfurt ist größer, aber die Landesregierung sitzt in Wiesbaden." },
          { t: "wahl", f: "Welche Stadt ist die Landeshauptstadt von Sachsen?", a: ["Dresden", "Leipzig", "Chemnitz", "Halle"], r: 0, info: "Dresden ist Landeshauptstadt; Leipzig ist die größere Stadt, Halle liegt in Sachsen-Anhalt." },
          { t: "eingabe", f: "Wie heißt die Landeshauptstadt von Niedersachsen?", l: ["Hannover"], info: "Hannover liegt an der Leine und ist Messestadt." },
          { t: "eingabe", f: "Wie heißt die Landeshauptstadt von Baden-Württemberg?", l: ["Stuttgart"], info: "Stuttgart ist Sitz der Landesregierung und bekannt für Autoindustrie." },
          { t: "eingabe", f: "Welches Bundesland hat Schwerin als Hauptstadt?", l: ["Mecklenburg-Vorpommern", "Mecklenburg Vorpommern"], info: "Schwerin ist die kleinste Landeshauptstadt Deutschlands, Rostock die größte Stadt des Landes." },
          { t: "wahl", f: "Wie viele Bundesländer hat Deutschland?", a: ["16", "14", "18", "12"], r: 0, info: "Seit der Wiedervereinigung 1990 sind es 16 Länder, darunter 3 Stadtstaaten." },
          { t: "wahl", f: "Welche drei Bundesländer sind Stadtstaaten?", a: ["Berlin, Hamburg, Bremen", "Berlin, München, Köln", "Hamburg, Hannover, Bremen", "Berlin, Hamburg, Frankfurt"], r: 0, info: "Berlin, Hamburg und Bremen sind zugleich Stadt und Bundesland." },
          { t: "wahl", f: "Welches ist das bevölkerungsreichste Bundesland?", a: ["Nordrhein-Westfalen", "Bayern", "Baden-Württemberg", "Niedersachsen"], r: 0, info: "In NRW leben rund 18 Millionen Menschen, mehr als in jedem anderen Bundesland." },
          { t: "wahl", f: "Welches ist das flächengrößte Bundesland?", a: ["Bayern", "Nordrhein-Westfalen", "Niedersachsen", "Brandenburg"], r: 0, info: "Bayern hat mit rund 70 500 km² die größte Fläche, Niedersachsen folgt auf Platz 2." },
          { t: "wahl", f: "Wie viele Nachbarländer hat Deutschland?", a: ["9", "7", "8", "10"], r: 0, info: "Dänemark, Polen, Tschechien, Österreich, Schweiz, Frankreich, Luxemburg, Belgien, Niederlande." },
          { t: "wahl", f: "Welches Land grenzt NICHT an Deutschland?", a: ["Italien", "Luxemburg", "Tschechien", "Dänemark"], r: 0, info: "Italien liegt südlich von Österreich und der Schweiz und hat keine gemeinsame Grenze mit Deutschland." },
          { t: "eingabe", f: "Welches Nachbarland grenzt im Norden an Deutschland?", l: ["Dänemark", "Daenemark"], info: "Die einzige Landgrenze im Norden ist die zu Dänemark in Schleswig-Holstein." },
          { t: "paare", f: "Ordne die Nachbarländer der Himmelsrichtung zu", p: [["Polen", "Osten"], ["Dänemark", "Norden"], ["Frankreich", "Westen"], ["Österreich", "Süden"]] },
          { t: "wahl", f: "An welches Bundesland grenzen die Niederlande und Belgien?", a: ["Nordrhein-Westfalen", "Hessen", "Rheinland-Pfalz", "Bayern"], r: 0, info: "NRW grenzt im Westen an die Niederlande und Belgien; Rheinland-Pfalz grenzt an Belgien, Luxemburg und Frankreich." },
          { t: "reihenfolge", f: "Ordne die Nachbarländer von Norden im Uhrzeigersinn", items: ["Dänemark", "Polen", "Tschechien", "Österreich", "Schweiz", "Frankreich"] },
          { t: "karte", vorne: "Stadtstaaten", hinten: "Berlin, Hamburg, Bremen – Städte, die zugleich Bundesland sind.", bsp: "Bremen besteht aus den Städten Bremen und Bremerhaven." }
        ]
      },
      {
        id: "klima",
        titel: "Klimazonen & Klimadiagramme",
        kurz: "Tropen bis Polarzone, Passat, Monsun, Diagramme lesen",
        erklaerung: `<p>Die Erde ist in <b>Klimazonen</b> gegliedert, weil die Sonne am Äquator steil und an den Polen flach einstrahlt. Von Äquator zu Pol folgen: <b>Tropen</b> (ganzjährig heiß, am Äquator immerfeucht mit Regenwald, weiter außen Savannen mit Regen- und Trockenzeit), <b>Subtropen</b> (heiße, trockene Sommer; Wüsten wie die Sahara und Mittelmeerklima), <b>gemäßigte Zone</b> (vier Jahreszeiten, Laub- und Nadelwälder – hier liegt Deutschland) und <b>polare Zone</b> (lange, eisige Winter, Tundra und Eis).</p>
<p><b>Passatwinde</b> wehen beständig von den Subtropen zum Äquator; wo sie zusammentreffen, steigt die Luft auf und es regnet täglich (innertropische Konvergenzzone). Der <b>Monsun</b> in Südasien ist ein Wind, der im Sommer vom Meer aufs Land weht und heftigen Regen bringt, im Winter vom Land aufs Meer und Trockenheit.</p>
<p>Ein <b>Klimadiagramm</b> zeigt für einen Ort die Monate Januar bis Dezember: eine rote <b>Temperaturkurve</b> (Skala links in °C) und blaue <b>Niederschlagssäulen</b> (Skala rechts in mm). Liegt die Niederschlagskurve über der Temperaturkurve, ist der Monat <b>humid</b> (feucht); liegt sie darunter, ist er <b>arid</b> (trocken). Die Skalen sind so gewählt, dass 10 °C genau 20 mm entsprechen.</p>
<p>Lies im Diagramm immer ab: Jahresmitteltemperatur, Jahresniederschlag, wärmster und kältester Monat, Zahl der ariden Monate. Ein Ort mit Sommertrockenheit und milden Regenwintern liegt zum Beispiel im Mittelmeerraum; ein Ort mit ganzjährig 26 °C und über 2000 mm Regen in den Tropen.</p>`,
        aufgaben: [
          { t: "reihenfolge", f: "Ordne die Klimazonen vom Äquator zum Pol", items: ["Tropen", "Subtropen", "Gemäßigte Zone", "Polare Zone"] },
          { t: "wahl", f: "In welcher Klimazone liegt Deutschland?", a: ["Gemäßigte Zone", "Subtropen", "Tropen", "Polare Zone"], r: 0, info: "Deutschland hat vier Jahreszeiten und Laubwald – typisch für die gemäßigte Zone." },
          { t: "wahl", f: "Warum ist es am Äquator wärmer als an den Polen?", a: ["Die Sonnenstrahlen treffen dort steil auf und verteilen sich auf kleinere Fläche", "Der Äquator ist näher an der Sonne", "Am Äquator gibt es mehr Vulkane", "Die Erdachse zeigt zum Äquator"], r: 0, info: "Je steiler der Einfallswinkel, desto mehr Energie pro Quadratmeter – an den Polen fällt das Licht flach ein." },
          { t: "paare", f: "Ordne die Vegetation der Klimazone zu", p: [["Tropischer Regenwald", "Immerfeuchte Tropen"], ["Savanne", "Wechselfeuchte Tropen"], ["Wüste", "Subtropen"], ["Laubwald", "Gemäßigte Zone"], ["Tundra", "Polare Zone"]] },
          { t: "wahl", f: "Was kennzeichnet die immerfeuchten Tropen?", a: ["Ganzjährig heiß und täglich Regen", "Heiße Sommer, kalte Winter", "Trockenzeit und Regenzeit", "Ganzjährig unter 10 °C"], r: 0, info: "Am Äquator steigt feuchtwarme Luft auf; es regnet fast jeden Nachmittag, die Temperatur bleibt um 26 °C." },
          { t: "eingabe", f: "Wie heißen die beständigen Winde, die von den Subtropen zum Äquator wehen?", l: ["Passat", "Passatwinde", "Passate"], info: "Die Passate wehen auf der Nordhalbkugel aus Nordost, auf der Südhalbkugel aus Südost." },
          { t: "wahl", f: "Was ist der Sommermonsun in Indien?", a: ["Ein Wind vom Meer aufs Land, der starken Regen bringt", "Ein trockener Wind vom Land aufs Meer", "Ein Wirbelsturm im Winter", "Ein kalter Fallwind aus dem Himalaya"], r: 0, info: "Im Sommer erwärmt sich das Land stärker als das Meer, feuchte Meeresluft strömt ein und regnet ab." },
          { t: "wahl", f: "Was zeigt die Kurve in einem Klimadiagramm?", a: ["Die Monatsmitteltemperatur", "Den Niederschlag", "Die Windstärke", "Die Sonnenstunden"], r: 0, info: "Die rote Kurve ist die Temperatur, die blauen Säulen zeigen den Niederschlag." },
          { t: "wahl", f: "Die Niederschlagssäule eines Monats liegt unter der Temperaturkurve. Was bedeutet das?", a: ["Der Monat ist arid (trocken)", "Der Monat ist humid (feucht)", "Es schneit in diesem Monat", "Es ist der kälteste Monat"], r: 0, info: "Liegt der Niederschlag unter der Temperaturkurve, verdunstet mehr als fällt: arider Monat." },
          { t: "eingabe", f: "Wie nennt man einen Monat, in dem mehr Niederschlag fällt als verdunstet?", l: ["humid", "feucht"], info: "Humid = feucht; im Diagramm liegt dann die Niederschlagssäule über der Temperaturkurve." },
          { t: "wahl", f: "Ein Klimadiagramm zeigt trockene, heiße Sommer und milde, regnerische Winter. Wo liegt der Ort?", a: ["Im Mittelmeerraum", "Am Äquator", "In Nordskandinavien", "In Mitteleuropa"], r: 0, info: "Sommertrockenheit und Winterregen sind typisch für das Mittelmeerklima der Subtropen." },
          { t: "wahl", f: "Ein Ort hat das ganze Jahr etwa 27 °C und über 2000 mm Niederschlag. In welcher Zone liegt er?", a: ["Immerfeuchte Tropen", "Subtropen", "Gemäßigte Zone", "Polare Zone"], r: 0, info: "Ganzjährig hohe Temperaturen ohne Jahreszeiten und sehr viel Regen – das gibt es nur in den inneren Tropen." },
          { t: "wahl", f: "Welche Angabe liest man in einem Klimadiagramm an der rechten Achse ab?", a: ["Niederschlag in mm", "Temperatur in °C", "Höhe über dem Meer", "Luftdruck"], r: 0, info: "Links steht die Temperatur in °C, rechts der Niederschlag in mm; 10 °C entsprechen 20 mm." },
          { t: "zahl", f: "Die Monatsniederschläge eines Ortes betragen 12-mal 50 mm. Wie hoch ist der Jahresniederschlag? (in mm)", l: 600, tol: 0.01, einheit: "mm", info: "Der Jahresniederschlag ist die Summe aller Monate: 12 · 50 mm = 600 mm." },
          { t: "wahl", f: "Was ist der Unterschied zwischen Wetter und Klima?", a: ["Wetter ist der Zustand jetzt, Klima der Durchschnitt über mindestens 30 Jahre", "Wetter gilt für Länder, Klima für Städte", "Klima ändert sich täglich, Wetter nie", "Es gibt keinen Unterschied"], r: 0, info: "Klima beschreibt das typische, langjährige Wetter eines Ortes." },
          { t: "paare", f: "Ordne die Begriffe zu", p: [["arid", "trocken"], ["humid", "feucht"], ["Niederschlag", "Säulen im Diagramm"], ["Temperatur", "Kurve im Diagramm"]] },
          { t: "karte", vorne: "Innertropische Konvergenzzone", hinten: "Zone am Äquator, in der die Passate zusammentreffen, Luft aufsteigt und täglich Regen fällt." }
        ]
      },
      {
        id: "tektonik",
        titel: "Plattentektonik & Naturgefahren",
        kurz: "Schalenbau, Plattengrenzen, Erdbeben, Vulkane, Tsunami",
        erklaerung: `<p>Die Erde ist wie eine Zwiebel aufgebaut: ganz innen der feste <b>innere Erdkern</b>, darum der flüssige <b>äußere Kern</b> aus Eisen und Nickel, dann der zähflüssige <b>Erdmantel</b> und außen die dünne, feste <b>Erdkruste</b>. Die Kruste ist in etwa sieben große und viele kleine <b>Platten</b> zerbrochen, die auf dem Mantel schwimmen und sich wenige Zentimeter pro Jahr bewegen – etwa so schnell, wie Fingernägel wachsen. Antrieb sind Strömungen im Erdmantel (Konvektion).</p>
<p>Schon 1912 vermutete <b>Alfred Wegener</b>, dass die Kontinente einst den Urkontinent <b>Pangäa</b> bildeten und auseinanderdriften; Beweis waren passende Küstenlinien, gleiche Fossilien und Gesteine auf beiden Seiten des Atlantiks. Erst Jahrzehnte später wurde seine Theorie anerkannt.</p>
<p>Drei Arten von <b>Plattengrenzen</b>: Bei <b>divergierenden</b> (auseinanderdriftenden) Platten quillt Magma hoch und bildet neue Kruste, z. B. am Mittelatlantischen Rücken (Island). Bei <b>konvergierenden</b> (zusammenstoßenden) Platten taucht eine ozeanische Platte unter (<b>Subduktion</b>) – Tiefseegräben, Vulkane und schwere Beben entstehen (Anden, Japan); stoßen zwei Kontinentalplatten zusammen, falten sich Gebirge auf (Himalaya). An <b>Transformstörungen</b> gleiten Platten aneinander vorbei (San-Andreas-Verwerfung in Kalifornien) – das verhakt und löst Erdbeben aus.</p>
<p><b>Erdbeben</b> messen Seismografen; die Stärke gibt die <b>Richterskala</b> bzw. Momenten-Magnitude an, der Punkt an der Oberfläche über dem Herd heißt <b>Epizentrum</b>. Ein Seebeben kann einen <b>Tsunami</b> auslösen: Im offenen Meer ist die Welle flach und schnell wie ein Flugzeug, an der Küste türmt sie sich auf. Rund um den Pazifik liegt der <b>Pazifische Feuerring</b> mit den meisten Vulkanen und Beben der Erde.</p>`,
        aufgaben: [
          { t: "reihenfolge", f: "Ordne den Schalenbau der Erde von innen nach außen", items: ["Innerer Erdkern", "Äußerer Erdkern", "Erdmantel", "Erdkruste"] },
          { t: "wahl", f: "Aus welchem Material besteht der Erdkern vor allem?", a: ["Eisen und Nickel", "Granit und Basalt", "Wasser und Eis", "Sand und Ton"], r: 0, info: "Der Erdkern besteht hauptsächlich aus den schweren Metallen Eisen und Nickel." },
          { t: "wahl", f: "Wer stellte 1912 die Theorie der Kontinentalverschiebung auf?", a: ["Alfred Wegener", "Charles Darwin", "Alexander von Humboldt", "Isaac Newton"], r: 0, info: "Wegener erkannte, dass die Kontinente wie Puzzleteile zusammenpassen und einst Pangäa bildeten." },
          { t: "eingabe", f: "Wie hieß der Urkontinent, aus dem die heutigen Kontinente entstanden sind?", l: ["Pangäa", "Pangaea", "Pangaa"], info: "Pangäa zerbrach vor rund 200 Millionen Jahren; der Atlantik öffnete sich dabei." },
          { t: "wahl", f: "Welcher Beweis sprach für Wegeners Theorie?", a: ["Gleiche Fossilien an den Küsten Südamerikas und Afrikas", "Die Farbe des Meeres", "Die Höhe der Alpen", "Die Länge der Flüsse"], r: 0, info: "Identische Fossilien und Gesteinsschichten auf beiden Seiten des Atlantiks passen nur, wenn die Kontinente einst verbunden waren." },
          { t: "paare", f: "Ordne die Plattengrenze dem Vorgang zu", p: [["Divergierend", "Platten driften auseinander, neue Kruste entsteht"], ["Konvergierend", "Platten stoßen zusammen, Subduktion oder Gebirgsbildung"], ["Transformstörung", "Platten gleiten aneinander vorbei"]] },
          { t: "wahl", f: "Was passiert, wenn eine ozeanische Platte unter eine kontinentale Platte taucht?", a: ["Subduktion: Tiefseegraben, Vulkane und Erdbeben entstehen", "Ein Mittelozeanischer Rücken entsteht", "Die Platten verschmelzen ohne Folgen", "Ein Flachmeer bildet sich"], r: 0, info: "Die schwerere ozeanische Platte sinkt ab und schmilzt – das Magma steigt als Vulkankette auf, z. B. in den Anden." },
          { t: "wahl", f: "Wie ist der Himalaya entstanden?", a: ["Zwei Kontinentalplatten stießen zusammen und falteten sich auf", "Ein Vulkan brach aus", "Ein Gletscher schob das Gebirge zusammen", "Der Meeresboden hob sich durch Ebbe"], r: 0, info: "Die Indische Platte drückt seit Millionen Jahren gegen die Eurasische Platte – der Himalaya wächst noch immer." },
          { t: "wahl", f: "Was passiert am Mittelatlantischen Rücken?", a: ["Platten driften auseinander, Magma bildet neuen Meeresboden", "Platten tauchen unter", "Platten gleiten seitlich aneinander vorbei", "Nichts, es ist eine stabile Zone"], r: 0, info: "Der Atlantik wird jedes Jahr ein paar Zentimeter breiter; Island liegt genau auf dem Rücken." },
          { t: "eingabe", f: "Wie heißt der Punkt an der Erdoberfläche direkt über dem Erdbebenherd?", l: ["Epizentrum"], info: "Der Herd in der Tiefe heißt Hypozentrum, der Punkt darüber an der Oberfläche Epizentrum." },
          { t: "wahl", f: "Mit welchem Gerät werden Erdbeben aufgezeichnet?", a: ["Seismograf", "Barometer", "Thermometer", "Anemometer"], r: 0, info: "Ein Seismograf zeichnet die Bodenbewegungen als Kurve (Seismogramm) auf." },
          { t: "wahl", f: "Wodurch entsteht ein Tsunami meistens?", a: ["Durch ein Seebeben, das den Meeresboden ruckartig hebt", "Durch starken Wind", "Durch Ebbe und Flut", "Durch starken Regen"], r: 0, info: "Der Ruck verschiebt riesige Wassermassen; die Welle wird an flachen Küsten viele Meter hoch." },
          { t: "wahl", f: "Was ist der Pazifische Feuerring?", a: ["Ein Gürtel aus Vulkanen und Erdbebenzonen rund um den Pazifik", "Ein Korallenriff vor Australien", "Eine Wüste in Südamerika", "Ein Meeresstrom im Pazifik"], r: 0, info: "Rund um den Pazifik tauchen Platten ab – hier liegen etwa drei Viertel aller aktiven Vulkane." },
          { t: "wahl", f: "Wie schnell bewegen sich die Erdplatten etwa?", a: ["Einige Zentimeter pro Jahr", "Einige Meter pro Tag", "Einige Kilometer pro Jahr", "Gar nicht"], r: 0, info: "Etwa 2 bis 10 cm pro Jahr – ungefähr so schnell wie Fingernägel wachsen." },
          { t: "wahl", f: "Was treibt die Bewegung der Platten an?", a: ["Konvektionsströmungen im zähflüssigen Erdmantel", "Der Wind", "Die Gezeiten des Meeres", "Die Drehung des Mondes"], r: 0, info: "Heißes Mantelgestein steigt auf, kühlt ab und sinkt wieder – diese Strömungen ziehen die Platten mit." },
          { t: "paare", f: "Ordne die Orte den Plattengrenzen zu", p: [["Island", "Mittelatlantischer Rücken"], ["Japan", "Subduktionszone"], ["Kalifornien", "San-Andreas-Verwerfung"], ["Himalaya", "Kollision zweier Kontinente"]] },
          { t: "karte", vorne: "Subduktion", hinten: "Abtauchen einer ozeanischen Platte unter eine andere Platte; Folge: Tiefseegraben, Vulkane, Erdbeben.", bsp: "Vor der Küste Chiles taucht die Nazca-Platte unter Südamerika ab – die Anden entstehen." }
        ]
      },
      {
        id: "bevoelkerung",
        titel: "Bevölkerung & Entwicklung",
        kurz: "Pyramiden, demografischer Übergang, Migration, Verstädterung, HDI",
        erklaerung: `<p>Eine <b>Bevölkerungspyramide</b> zeigt, wie viele Männer (links) und Frauen (rechts) es in jeder Altersgruppe gibt. Eine echte <b>Pyramide</b> mit breiter Basis bedeutet viele Kinder und hohes Wachstum (z. B. Niger). Eine <b>Glocke</b> steht für eine stabile Bevölkerung, eine <b>Urne</b> mit schmaler Basis für eine alternde, schrumpfende Gesellschaft wie in Deutschland oder Japan.</p>
<p>Das <b>Modell des demografischen Übergangs</b> beschreibt in Phasen, wie sich Länder entwickeln: Zuerst sind Geburten- und Sterberate hoch, die Bevölkerung wächst kaum. Dann sinkt die Sterberate durch Medizin und Hygiene, die Geburtenrate bleibt hoch – die Bevölkerung explodiert. Später sinkt auch die Geburtenrate, das Wachstum verlangsamt sich, bis beide Raten niedrig sind. Im <b>demografischen Wandel</b> werden Gesellschaften älter: weniger Kinder, längeres Leben, Folgen für Rente und Pflege.</p>
<p><b>Migration</b> heißt Wanderung. <b>Push-Faktoren</b> treiben Menschen aus der Heimat (Krieg, Armut, Dürre), <b>Pull-Faktoren</b> ziehen sie an (Arbeit, Sicherheit, Bildung). Mehr als die Hälfte der Menschheit lebt heute in Städten – <b>Verstädterung</b>; Städte über 10 Millionen Einwohner heißen <b>Megastädte</b> (Tokio, Delhi, Shanghai). In armen Ländern wachsen dabei Slums.</p>
<p>Den Entwicklungsstand misst der <b>HDI</b> (Human Development Index) aus Lebenserwartung, Bildung und Einkommen pro Kopf, mit Werten von 0 bis 1. Man unterscheidet <b>Industrieländer</b> (hoher HDI, Dienstleistungen dominieren), <b>Schwellenländer</b> (schnell wachsend, z. B. Brasilien, Indien) und <b>Entwicklungsländer</b> (niedriger HDI, viele Menschen in der Landwirtschaft).</p>`,
        aufgaben: [
          { t: "wahl", f: "Was bedeutet eine Bevölkerungspyramide mit sehr breiter Basis?", a: ["Viele Kinder, schnell wachsende Bevölkerung", "Viele alte Menschen", "Gleich viele in allen Altersgruppen", "Schrumpfende Bevölkerung"], r: 0, info: "Die Basis zeigt die Jüngsten; ist sie breit, gibt es viele Geburten – typisch für Entwicklungsländer." },
          { t: "wahl", f: "Welche Form hat die Bevölkerungspyramide Deutschlands?", a: ["Urnenform", "Pyramidenform", "Dreiecksform", "Rechteck mit breiter Basis"], r: 0, info: "Wenige Kinder, viele Menschen mittleren und hohen Alters – die Grafik ähnelt einer Urne." },
          { t: "paare", f: "Ordne die Pyramidenform der Bevölkerungsentwicklung zu", p: [["Pyramide", "Stark wachsend"], ["Glocke", "Stabil"], ["Urne", "Schrumpfend und alternd"]] },
          { t: "reihenfolge", f: "Bringe die Phasen des demografischen Übergangs in die richtige Reihenfolge", items: ["Geburten- und Sterberate hoch, kaum Wachstum", "Sterberate sinkt, Geburtenrate bleibt hoch: starkes Wachstum", "Geburtenrate sinkt, Wachstum verlangsamt sich", "Beide Raten niedrig, Bevölkerung stabil oder schrumpfend"] },
          { t: "wahl", f: "Warum wächst die Bevölkerung in der zweiten Phase des demografischen Übergangs so stark?", a: ["Die Sterberate sinkt durch Medizin und Hygiene, die Geburtenrate bleibt hoch", "Es werden plötzlich mehr Kinder geboren", "Viele Menschen wandern ein", "Die Menschen heiraten früher"], r: 0, info: "Weniger Menschen sterben, aber Familien bleiben zunächst groß – die Schere öffnet sich." },
          { t: "wahl", f: "Was versteht man unter dem demografischen Wandel in Deutschland?", a: ["Die Gesellschaft wird älter: weniger Geburten, höhere Lebenserwartung", "Immer mehr Menschen ziehen aufs Land", "Die Bevölkerung wächst stark", "Die Zahl der Kinder steigt"], r: 0, info: "Folgen sind weniger Beitragszahler für die Rente und mehr Bedarf an Pflege." },
          { t: "paare", f: "Push- oder Pull-Faktor? Ordne zu", p: [["Krieg in der Heimat", "Push-Faktor"], ["Arbeitsplätze im Zielland", "Pull-Faktor"], ["Dürre und Hunger", "Push-Faktor"], ["Gute Schulen im Zielland", "Pull-Faktor"]] },
          { t: "eingabe", f: "Wie nennt man Gründe, die Menschen aus ihrer Heimat wegtreiben (z. B. Krieg, Armut)?", l: ["Push-Faktoren", "Pushfaktoren", "Push Faktoren", "Push"], info: "Push = schieben: Diese Faktoren drängen Menschen fort; Pull-Faktoren ziehen sie ins Zielland." },
          { t: "wahl", f: "Was bedeutet Verstädterung (Urbanisierung)?", a: ["Der Anteil der Stadtbevölkerung nimmt zu", "Städte werden abgerissen", "Menschen ziehen aufs Land", "Die Zahl der Dörfer steigt"], r: 0, info: "Weltweit leben inzwischen mehr als die Hälfte aller Menschen in Städten." },
          { t: "wahl", f: "Ab wie vielen Einwohnern spricht man von einer Megastadt?", a: ["10 Millionen", "1 Million", "5 Millionen", "50 Millionen"], r: 0, info: "Megastädte haben über 10 Millionen Einwohner, z. B. Tokio, Delhi, Shanghai, Mexiko-Stadt." },
          { t: "wahl", f: "Welche drei Bereiche fließen in den HDI ein?", a: ["Lebenserwartung, Bildung, Einkommen", "Fläche, Bevölkerung, Klima", "Exporte, Importe, Steuern", "Autos, Handys, Fernseher"], r: 0, info: "Der Human Development Index kombiniert Gesundheit, Bildung und Wohlstand zu einem Wert zwischen 0 und 1." },
          { t: "eingabe", f: "Wofür steht die Abkürzung HDI?", l: ["Human Development Index", "Index der menschlichen Entwicklung"], info: "Der HDI der Vereinten Nationen vergleicht den Entwicklungsstand der Länder." },
          { t: "wahl", f: "Welches Land ist ein typisches Schwellenland?", a: ["Brasilien", "Norwegen", "Niger", "Deutschland"], r: 0, info: "Schwellenländer wie Brasilien, Indien oder China industrialisieren sich schnell, haben aber noch große soziale Unterschiede." },
          { t: "wahl", f: "Was kennzeichnet ein Entwicklungsland?", a: ["Niedriger HDI, viele Menschen arbeiten in der Landwirtschaft", "Hoher HDI, viele Dienstleistungen", "Sehr hohe Lebenserwartung", "Wenig Kinder pro Familie"], r: 0, info: "Entwicklungsländer haben niedriges Einkommen, geringe Lebenserwartung und einen hohen Anteil an Landwirtschaft." },
          { t: "wahl", f: "Was sind Slums?", a: ["Informelle Armenviertel am Rand schnell wachsender Städte", "Moderne Hochhausviertel", "Bauernhöfe auf dem Land", "Einkaufszentren"], r: 0, info: "Wenn Städte schneller wachsen als Wohnungen gebaut werden, entstehen Hüttensiedlungen ohne Wasser- und Stromanschluss." },
          { t: "wahl", f: "Was gibt die Geburtenrate an?", a: ["Die Zahl der Geburten pro 1000 Einwohner und Jahr", "Die Zahl der Kinder pro Schule", "Die Zahl der Todesfälle pro Jahr", "Die Zahl der Einwohner pro km²"], r: 0, info: "Geburten- und Sterberate werden pro 1000 Einwohner und Jahr angegeben; die Differenz ist das natürliche Wachstum." },
          { t: "karte", vorne: "Demografischer Übergang", hinten: "Modell: Von hohen Geburten- und Sterberaten über eine Wachstumsphase zu niedrigen Raten – wie sich die Bevölkerung eines Landes mit der Entwicklung verändert." }
        ]
      },
      {
        id: "globalisierung",
        titel: "Globalisierung & Wirtschaft",
        kurz: "Sektoren, Standortfaktoren, Welthandel, Fair Trade, Klimawandel",
        erklaerung: `<p>Die Wirtschaft teilt man in drei <b>Sektoren</b>: der <b>primäre Sektor</b> gewinnt Rohstoffe (Landwirtschaft, Fischerei, Bergbau), der <b>sekundäre Sektor</b> verarbeitet sie (Industrie, Handwerk), der <b>tertiäre Sektor</b> bietet Dienstleistungen (Handel, Verkehr, Banken, Schule). In Industrieländern arbeiten über 70 % der Menschen im tertiären Sektor, in Entwicklungsländern viele noch im primären.</p>
<p><b>Standortfaktoren</b> entscheiden, wo ein Unternehmen sich ansiedelt: <b>harte</b> Faktoren lassen sich messen (Verkehrsanbindung, Löhne, Steuern, Rohstoffe, Absatzmarkt), <b>weiche</b> Faktoren nicht (Image, Freizeitwert, Wohnumfeld).</p>
<p><b>Globalisierung</b> bedeutet, dass Wirtschaft, Kultur und Kommunikation weltweit zusammenwachsen – möglich durch Containerschiffe, Internet und offene Märkte. <b>Global Player</b> sind Konzerne, die weltweit produzieren und verkaufen und oft dorthin gehen, wo die Löhne niedrig sind. Die <b>WTO</b> regelt den Welthandel. Kritik: Ausbeutung, Kinderarbeit und lange Transportwege. <b>Fair Trade</b> garantiert Produzenten in armen Ländern Mindestpreise und verbietet Kinderarbeit.</p>
<p><b>Nachhaltigkeit</b> heißt, heute so zu wirtschaften, dass auch kommende Generationen gut leben können – ökologisch, ökonomisch und sozial zugleich. Größte Herausforderung ist der <b>Klimawandel</b>: Durch Verbrennen von Kohle, Öl und Gas steigt der CO₂-Gehalt der Luft, der Treibhauseffekt verstärkt sich. Folgen sind Gletscherschmelze, steigender Meeresspiegel, mehr Dürren und Starkregen. Das Pariser Abkommen (2015) will die Erwärmung auf deutlich unter 2 °C begrenzen. <b>Erneuerbare Ressourcen</b> wie Holz, Wind und Sonne wachsen nach; <b>nicht erneuerbare</b> wie Erdöl und Kohle sind endlich.</p>`,
        aufgaben: [
          { t: "paare", f: "Ordne die Berufe den Wirtschaftssektoren zu", p: [["Landwirt", "Primärer Sektor"], ["Automechaniker in der Fabrik", "Sekundärer Sektor"], ["Lehrerin", "Tertiärer Sektor"], ["Bergmann", "Primärer Sektor"]] },
          { t: "wahl", f: "Welcher Wirtschaftssektor beschäftigt in Deutschland die meisten Menschen?", a: ["Tertiärer Sektor (Dienstleistungen)", "Primärer Sektor (Landwirtschaft)", "Sekundärer Sektor (Industrie)", "Alle gleich viel"], r: 0, info: "Rund drei Viertel der Erwerbstätigen arbeiten im Dienstleistungsbereich." },
          { t: "eingabe", f: "Wie heißt der Wirtschaftssektor, der Rohstoffe gewinnt (Landwirtschaft, Bergbau, Fischerei)?", l: ["Primärer Sektor", "primär", "Primärsektor", "erster Sektor"], info: "Primär = der erste: Hier werden Rohstoffe direkt aus der Natur gewonnen." },
          { t: "wahl", f: "Welcher ist ein weicher Standortfaktor?", a: ["Freizeitwert einer Stadt", "Autobahnanschluss", "Lohnkosten", "Steuersätze"], r: 0, info: "Weiche Faktoren wie Image und Lebensqualität lassen sich nicht in Zahlen messen; Verkehr, Löhne und Steuern sind harte Faktoren." },
          { t: "paare", f: "Harter oder weicher Standortfaktor?", p: [["Nähe zum Flughafen", "Hart"], ["Image der Region", "Weich"], ["Höhe der Löhne", "Hart"], ["Kulturangebot", "Weich"]] },
          { t: "wahl", f: "Was ist ein Global Player?", a: ["Ein Konzern, der weltweit produziert und verkauft", "Ein Fußballverein", "Ein Land mit vielen Exporten", "Eine internationale Organisation der UNO"], r: 0, info: "Global Player wie Apple, Toyota oder VW haben Werke und Märkte auf mehreren Kontinenten." },
          { t: "wahl", f: "Welche Erfindung hat den Welthandel besonders verbilligt und beschleunigt?", a: ["Der standardisierte Container", "Das Fahrrad", "Die Dampfmaschine", "Der Kühlschrank"], r: 0, info: "Container lassen sich ohne Umpacken von Schiff auf Zug und Lkw laden – Transport wurde extrem billig." },
          { t: "wahl", f: "Warum verlagern Unternehmen die Produktion oft in Länder wie Bangladesch oder Vietnam?", a: ["Wegen niedriger Löhne und geringerer Auflagen", "Wegen des besseren Klimas", "Weil dort mehr Kunden leben", "Weil Rohstoffe dort teurer sind"], r: 0, info: "Niedrige Lohnkosten senken den Preis – Kritiker sprechen von Ausbeutung, wenn Arbeitsschutz fehlt." },
          { t: "wahl", f: "Was garantiert das Fair-Trade-Siegel?", a: ["Mindestpreise für Produzenten und Verbot von Kinderarbeit", "Den niedrigsten Preis im Supermarkt", "Dass das Produkt aus Deutschland stammt", "Dass das Produkt bio ist"], r: 0, info: "Fairer Handel sichert Bauern z. B. bei Kaffee und Kakao ein verlässliches Einkommen." },
          { t: "wahl", f: "Was bedeutet Nachhaltigkeit?", a: ["So wirtschaften, dass auch künftige Generationen gut leben können", "Möglichst viel produzieren", "Alles möglichst billig kaufen", "Nur regionale Produkte verbieten"], r: 0, info: "Nachhaltigkeit hat drei Säulen: Ökologie, Ökonomie und Soziales." },
          { t: "wahl", f: "Was ist die Hauptursache des menschengemachten Klimawandels?", a: ["Verbrennen fossiler Brennstoffe setzt CO₂ frei", "Veränderte Sonnenaktivität", "Vulkanausbrüche", "Der Mond"], r: 0, info: "Kohle, Öl und Gas setzen Kohlenstoffdioxid frei, das den natürlichen Treibhauseffekt verstärkt." },
          { t: "eingabe", f: "Wie heißt das Gas, das beim Verbrennen von Kohle, Öl und Gas entsteht und den Treibhauseffekt verstärkt?", l: ["Kohlenstoffdioxid", "Kohlendioxid", "CO2", "CO₂"], info: "CO₂ lässt Sonnenlicht durch, hält aber die Wärmestrahlung der Erde zurück." },
          { t: "wahl", f: "Welche Folge hat der Klimawandel?", a: ["Steigender Meeresspiegel durch schmelzende Gletscher", "Mehr Eis an den Polen", "Kältere Sommer in Europa", "Weniger Stürme weltweit"], r: 0, info: "Schmelzendes Eis und sich ausdehnendes warmes Wasser lassen den Meeresspiegel steigen – Inselstaaten sind bedroht." },
          { t: "wahl", f: "Was wurde im Pariser Klimaabkommen 2015 vereinbart?", a: ["Die Erderwärmung auf deutlich unter 2 °C zu begrenzen", "Alle Autos bis 2020 zu verbieten", "Den Regenwald zu verkaufen", "Mehr Kohlekraftwerke zu bauen"], r: 0, info: "Fast alle Staaten verpflichteten sich, Treibhausgase zu senken – Ziel möglichst 1,5 °C." },
          { t: "paare", f: "Erneuerbar oder nicht erneuerbar?", p: [["Holz", "Erneuerbar"], ["Erdöl", "Nicht erneuerbar"], ["Windenergie", "Erneuerbar"], ["Steinkohle", "Nicht erneuerbar"]] },
          { t: "wahl", f: "Welche Organisation regelt die Regeln des Welthandels?", a: ["WTO (Welthandelsorganisation)", "UNICEF", "NATO", "WHO"], r: 0, info: "Die WTO mit Sitz in Genf verhandelt Handelsregeln und schlichtet Streit zwischen Staaten." },
          { t: "wahl", f: "Welcher Begriff beschreibt das weltweite Zusammenwachsen von Wirtschaft, Kultur und Kommunikation?", a: ["Globalisierung", "Nationalisierung", "Industrialisierung", "Urbanisierung"], r: 0, info: "Globalisierung verbindet die Welt durch Handel, Internet und Reisen immer enger." },
          { t: "karte", vorne: "Standortfaktoren", hinten: "Gründe, warum sich ein Unternehmen an einem Ort ansiedelt – harte (messbar: Verkehr, Löhne, Steuern) und weiche (Image, Freizeitwert)." }
        ]
      }
    ]
  };

  window.FAECHER.push(FACH);
})();
