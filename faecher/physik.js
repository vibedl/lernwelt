"use strict";
// Lernwelt – Fach Physik (Klasse 9, NRW). Reines Browser-JS, kein Import/Export.

(function () {
  // Hilfsfunktionen für „schöne“ Zahlen
  const r2 = (x) => Math.round(x * 100) / 100;   // auf 2 Nachkommastellen
  const r1 = (x) => Math.round(x * 10) / 10;     // auf 1 Nachkommastelle
  const de = (x) => String(x).replace(".", ",");  // Zahl mit Komma für den Fragetext

  // ---------- Generator: Stromkreis ----------
  const R_LISTE = [10, 20, 25, 40, 50, 100, 120, 150, 200, 250, 300, 400, 500];
  const I_LISTE = [0.1, 0.2, 0.25, 0.4, 0.5, 0.8, 1, 1.2, 1.5, 2];

  function genStrom(rng) {
    const art = rng.int(1, 10);
    if (art <= 5) {
      // Ohmsches Gesetz: U = R·I, eine Größe gesucht
      const R = rng.pick(R_LISTE);
      const I = rng.pick(I_LISTE);
      const U = r2(R * I);
      const gesucht = rng.pick(["U", "R", "I"]);
      if (gesucht === "U") {
        return {
          t: "zahl",
          f: "Durch einen Widerstand von " + R + " Ω fließt ein Strom von " + de(I) + " A. Welche Spannung liegt an? (in V)",
          l: U, tol: 0.01, einheit: "V",
          info: "U = R · I = " + R + " Ω · " + de(I) + " A = " + de(U) + " V."
        };
      }
      if (gesucht === "R") {
        return {
          t: "zahl",
          f: "An einem Bauteil liegen " + de(U) + " V an, es fließen " + de(I) + " A. Wie groß ist der Widerstand? (in Ω)",
          l: R, tol: 0.01, einheit: "Ω",
          info: "R = U / I = " + de(U) + " V / " + de(I) + " A = " + R + " Ω."
        };
      }
      return {
        t: "zahl",
        f: "Ein Widerstand von " + R + " Ω liegt an " + de(U) + " V. Wie groß ist die Stromstärke? (in A)",
        l: I, tol: 0.01, einheit: "A",
        info: "I = U / R = " + de(U) + " V / " + R + " Ω = " + de(I) + " A."
      };
    }
    if (art <= 7) {
      // Reihenschaltung
      const R1 = rng.pick(R_LISTE);
      const R2 = rng.pick(R_LISTE);
      const Rg = R1 + R2;
      if (rng() < 0.5) {
        return {
          t: "zahl",
          f: "Zwei Widerstände mit " + R1 + " Ω und " + R2 + " Ω sind in Reihe geschaltet. Wie groß ist der Gesamtwiderstand? (in Ω)",
          l: Rg, tol: 0.01, einheit: "Ω",
          info: "In Reihe addieren sich die Widerstände: R_ges = " + R1 + " Ω + " + R2 + " Ω = " + Rg + " Ω."
        };
      }
      const I = rng.pick([0.1, 0.2, 0.25, 0.5, 1]);
      const U = r2(Rg * I);
      return {
        t: "zahl",
        f: "In einer Reihenschaltung aus " + R1 + " Ω und " + R2 + " Ω fließen " + de(I) + " A. Welche Gesamtspannung liegt an? (in V)",
        l: U, tol: 0.01, einheit: "V",
        info: "R_ges = " + Rg + " Ω, dann U = R_ges · I = " + Rg + " Ω · " + de(I) + " A = " + de(U) + " V."
      };
    }
    if (art <= 9) {
      // Elektrische Leistung P = U·I
      const U = rng.pick([6, 12, 24, 230]);
      const I = rng.pick(I_LISTE);
      const P = r2(U * I);
      if (rng() < 0.6) {
        return {
          t: "zahl",
          f: "Ein Gerät läuft mit " + U + " V und nimmt " + de(I) + " A auf. Welche Leistung hat es? (in W)",
          l: P, tol: 0.01, einheit: "W",
          info: "P = U · I = " + U + " V · " + de(I) + " A = " + de(P) + " W."
        };
      }
      return {
        t: "zahl",
        f: "Ein Gerät mit " + de(P) + " W hängt an " + U + " V. Wie groß ist die Stromstärke? (in A)",
        l: I, tol: 0.01, einheit: "A",
        info: "I = P / U = " + de(P) + " W / " + U + " V = " + de(I) + " A."
      };
    }
    // Energie E = P·t in kWh
    const P = rng.pick([100, 200, 250, 500, 1000, 1500, 2000, 2500]);
    const t = rng.pick([1, 2, 3, 4, 5, 6, 8, 10]);
    const E = r2(P * t / 1000);
    return {
      t: "zahl",
      f: "Ein Gerät mit " + P + " W läuft " + t + " Stunden. Wie viel Energie verbraucht es? (in kWh)",
      l: E, tol: 0.01, einheit: "kWh",
      info: "E = P · t = " + P + " W · " + t + " h = " + (P * t) + " Wh = " + de(E) + " kWh (durch 1000 teilen)."
    };
  }

  // ---------- Generator: Mechanik ----------
  const G = 9.81;
  function genMechanik(rng) {
    const art = rng.int(1, 5);
    if (art === 1) {
      const m = rng.int(1, 100);
      const F = r1(m * G);
      return {
        t: "zahl",
        f: "Welche Gewichtskraft wirkt auf einen Körper mit der Masse " + m + " kg? (g = 9,81 N/kg, in N)",
        l: F, tol: 0.2, einheit: "N",
        info: "F = m · g = " + m + " kg · 9,81 N/kg = " + de(F) + " N."
      };
    }
    if (art === 2) {
      const F = rng.int(1, 50) * 10;
      const s = rng.int(1, 20);
      const W = F * s;
      return {
        t: "zahl",
        f: "Ein Körper wird mit der Kraft " + F + " N über " + s + " m in Kraftrichtung bewegt. Welche Arbeit wird verrichtet? (in J)",
        l: W, tol: 0.01, einheit: "J",
        info: "W = F · s = " + F + " N · " + s + " m = " + W + " J."
      };
    }
    if (art === 3) {
      const P = rng.int(1, 50) * 10;
      const t = rng.int(2, 60);
      const W = P * t;
      return {
        t: "zahl",
        f: "Eine Maschine verrichtet in " + t + " s die Arbeit " + W + " J. Welche Leistung hat sie? (in W)",
        l: P, tol: 0.01, einheit: "W",
        info: "P = W / t = " + W + " J / " + t + " s = " + P + " W."
      };
    }
    if (art === 4) {
      const m = rng.int(1, 50);
      const h = rng.int(1, 20);
      const E = r1(m * G * h);
      return {
        t: "zahl",
        f: "Ein Körper mit " + m + " kg liegt " + h + " m über dem Boden. Wie groß ist seine Lageenergie? (g = 9,81 N/kg, in J)",
        l: E, tol: 0.2, einheit: "J",
        info: "E_pot = m · g · h = " + m + " kg · 9,81 N/kg · " + h + " m = " + de(E) + " J."
      };
    }
    const m = rng.int(1, 50) * 2;
    const v = rng.int(1, 20);
    const E = m * v * v / 2;
    return {
      t: "zahl",
      f: "Ein Körper mit " + m + " kg bewegt sich mit " + v + " m/s. Wie groß ist seine Bewegungsenergie? (in J)",
      l: E, tol: 0.01, einheit: "J",
      info: "E_kin = ½ · m · v² = 0,5 · " + m + " kg · (" + v + " m/s)² = " + E + " J."
    };
  }

  // ---------- Generator: Bewegung ----------
  function genBewegung(rng) {
    const art = rng.int(1, 6);
    if (art === 1) {
      const v = rng.int(1, 40);
      const t = rng.int(2, 30);
      const s = v * t;
      return {
        t: "zahl",
        f: "Ein Radfahrer legt " + s + " m in " + t + " s zurück. Wie schnell ist er? (in m/s)",
        l: v, tol: 0.1, einheit: "m/s",
        info: "v = s / t = " + s + " m / " + t + " s = " + v + " m/s."
      };
    }
    if (art === 2) {
      const v = rng.int(1, 40);
      const kmh = r2(v * 3.6);
      return {
        t: "zahl",
        f: "Rechne " + de(kmh) + " km/h in m/s um.",
        l: v, tol: 0.1, einheit: "m/s",
        info: "km/h in m/s: durch 3,6 teilen. " + de(kmh) + " / 3,6 = " + v + " m/s."
      };
    }
    if (art === 3) {
      const v = rng.int(1, 40);
      const kmh = r2(v * 3.6);
      return {
        t: "zahl",
        f: "Rechne " + v + " m/s in km/h um.",
        l: kmh, tol: 0.1, einheit: "km/h",
        info: "m/s in km/h: mal 3,6. " + v + " · 3,6 = " + de(kmh) + " km/h."
      };
    }
    if (art === 4) {
      const v = rng.int(1, 40);
      const t = rng.int(2, 60);
      const s = v * t;
      return {
        t: "zahl",
        f: "Ein Auto fährt " + t + " s lang mit " + v + " m/s. Welche Strecke legt es zurück? (in m)",
        l: s, tol: 0.1, einheit: "m",
        info: "s = v · t = " + v + " m/s · " + t + " s = " + s + " m."
      };
    }
    if (art === 5) {
      const v = rng.pick([60, 80, 90, 100, 110, 120, 130]);
      const t = rng.pick([0.5, 1, 1.5, 2, 2.5, 3]);
      const s = r2(v * t);
      return {
        t: "zahl",
        f: "Ein Zug fährt " + de(t) + " h lang mit " + v + " km/h. Wie weit kommt er? (in km)",
        l: s, tol: 0.1, einheit: "km",
        info: "s = v · t = " + v + " km/h · " + de(t) + " h = " + de(s) + " km."
      };
    }
    const a = rng.pick([0.5, 1, 1.5, 2, 2.5, 3, 4, 5]);
    const t = rng.int(2, 20);
    const dv = r2(a * t);
    const v0 = rng.pick([0, 0, 5, 10]);
    const v1 = r2(v0 + dv);
    return {
      t: "zahl",
      f: "Ein Fahrzeug beschleunigt in " + t + " s von " + v0 + " m/s auf " + de(v1) + " m/s. Wie groß ist die Beschleunigung? (in m/s²)",
      l: a, tol: 0.1, einheit: "m/s²",
      info: "a = Δv / t = (" + de(v1) + " − " + v0 + ") m/s / " + t + " s = " + de(a) + " m/s²."
    };
  }

  const FACH = {
    id: "physik",
    name: "Physik",
    icon: "⚡",
    farbe: "#2f7bd1",
    beschreibung: "Strom, Kräfte, Energie, Bewegung, Wärme, Optik, Radioaktivität",
    themen: [
      {
        id: "strom",
        titel: "Stromkreis & Ohmsches Gesetz",
        kurz: "U = R · I, Reihenschaltung, Leistung, Energie",
        erklaerung: `<p>In einem Stromkreis treibt die <b>Spannung U</b> (Volt, V) die Ladungen an, die <b>Stromstärke I</b> (Ampere, A) sagt, wie viel Ladung pro Sekunde fließt, und der <b>Widerstand R</b> (Ohm, Ω) bremst den Strom. Das <b>Ohmsche Gesetz</b> verbindet die drei Größen: <b>U = R · I</b>. Umgestellt heißt das R = U / I und I = U / R. Merkhilfe: das URI-Dreieck – U oben, R und I unten.</p>
<p>Bei einer <b>Reihenschaltung</b> fließt durch alle Bauteile derselbe Strom; die Widerstände addieren sich: R<sub>ges</sub> = R<sub>1</sub> + R<sub>2</sub>. Bei einer <b>Parallelschaltung</b> liegt an allen Bauteilen dieselbe Spannung, der Gesamtwiderstand ist kleiner als der kleinste Einzelwiderstand.</p>
<p>Die <b>elektrische Leistung</b> ist P = U · I (Watt, W). Die <b>Energie</b> ist Leistung mal Zeit: E = P · t. Für die Stromrechnung rechnet man in Kilowattstunden: 1 kWh = 1000 W · 1 h.</p>
<p>Beispiel: Eine Lampe an 12 V mit 0,5 A hat R = 12 V / 0,5 A = 24 Ω und P = 12 V · 0,5 A = 6 W. Typischer Fehler: Einheiten mischen – vor dem Rechnen Milliampere in Ampere und Watt in Kilowatt umwandeln.</p>`,
        gen: genStrom
      },
      {
        id: "mechanik",
        titel: "Kraft, Arbeit, Energie, Leistung",
        kurz: "F = m·g, W = F·s, P = W/t, E_pot, E_kin",
        erklaerung: `<p>Die <b>Gewichtskraft</b> eines Körpers ist F = m · g mit dem Ortsfaktor g = 9,81 N/kg auf der Erde. Masse (kg) und Gewichtskraft (N) sind also nicht dasselbe: Auf dem Mond ist die Masse gleich, die Gewichtskraft aber nur ein Sechstel.</p>
<p><b>Mechanische Arbeit</b> wird verrichtet, wenn eine Kraft entlang eines Weges wirkt: <b>W = F · s</b>, Einheit Joule (1 J = 1 N · 1 m). Hebst du einen Körper an, steckst du die Arbeit als <b>Lageenergie</b> hinein: E<sub>pot</sub> = m · g · h. Ein bewegter Körper hat <b>Bewegungsenergie</b>: E<sub>kin</sub> = ½ · m · v². Beim freien Fall wandelt sich Lageenergie in Bewegungsenergie um – die Gesamtenergie bleibt erhalten (<b>Energieerhaltungssatz</b>).</p>
<p>Die <b>Leistung</b> sagt, wie schnell Arbeit verrichtet wird: <b>P = W / t</b>, Einheit Watt (1 W = 1 J/s).</p>
<p>Beispiel: 10 kg um 2 m heben: W = 10 kg · 9,81 N/kg · 2 m = 196,2 J. Dauert das 4 s, ist P = 196,2 J / 4 s ≈ 49 W. Typischer Fehler: beim Quadrat in E<sub>kin</sub> nur die Masse halbieren und v nicht quadrieren.</p>`,
        gen: genMechanik
      },
      {
        id: "bewegung",
        titel: "Geschwindigkeit & Beschleunigung",
        kurz: "v = s/t, km/h ↔ m/s, a = Δv/t",
        erklaerung: `<p>Die <b>Geschwindigkeit</b> ist zurückgelegter Weg geteilt durch die dafür benötigte Zeit: <b>v = s / t</b>. Im Alltag rechnet man in km/h, in der Physik in m/s. Der Umrechnungsfaktor ist <b>3,6</b>: von m/s nach km/h mal 3,6, von km/h nach m/s geteilt durch 3,6. Zum Beispiel sind 36 km/h genau 10 m/s.</p>
<p>Bei <b>gleichförmiger Bewegung</b> ist die Geschwindigkeit konstant, der Weg wächst gleichmäßig: s = v · t. Im Zeit-Weg-Diagramm ist das eine Gerade, deren Steigung die Geschwindigkeit ist.</p>
<p>Ändert sich die Geschwindigkeit, spricht man von <b>Beschleunigung</b>: <b>a = Δv / t</b>, Einheit m/s². Ein Auto, das in 10 s von 0 auf 20 m/s kommt, beschleunigt mit 2 m/s². Bremsen ist eine negative Beschleunigung.</p>
<p>Typischer Fehler: Stunden und Sekunden mischen. Erst alle Angaben in dieselben Einheiten bringen, dann rechnen.</p>`,
        gen: genBewegung
      },
      {
        id: "waerme",
        titel: "Wärmelehre",
        kurz: "Temperatur, Aggregatzustände, Wärmetransport, Q = c·m·ΔT",
        erklaerung: `<p><b>Temperatur</b> beschreibt, wie heftig sich die Teilchen eines Stoffes bewegen; <b>Wärme</b> ist die Energie, die dabei von warm nach kalt übertragen wird. Gemessen wird Temperatur in Grad Celsius oder in <b>Kelvin</b>: 0 K = −273,15 °C ist der absolute Nullpunkt, Temperaturdifferenzen sind in beiden Skalen gleich groß.</p>
<p>Stoffe kommen in drei <b>Aggregatzuständen</b> vor: fest, flüssig, gasförmig. Die Übergänge heißen Schmelzen und Erstarren, Verdampfen und Kondensieren, Sublimieren und Resublimieren. Wasser schmilzt bei 0 °C und siedet bei 100 °C (bei Normaldruck). Während des Schmelzens oder Siedens bleibt die Temperatur konstant, obwohl Wärme zugeführt wird.</p>
<p>Wärme breitet sich auf drei Arten aus: <b>Wärmeleitung</b> (im Stoff, z. B. Metalllöffel), <b>Wärmeströmung</b> (mit dem Stoff, z. B. Heizungsluft) und <b>Wärmestrahlung</b> (ohne Stoff, z. B. Sonne).</p>
<p>Wie viel Wärme ein Stoff zum Erwärmen braucht, sagt die <b>spezifische Wärmekapazität c</b>: <b>Q = c · m · ΔT</b>. Wasser hat c = 4,19 kJ/(kg·K), ein sehr hoher Wert – deshalb erwärmt sich Wasser langsam und speichert viel Wärme. Beispiel: 2 kg Wasser um 10 K erwärmen braucht Q = 4,19 · 2 · 10 = 83,8 kJ.</p>
<p>Besonderheit: die <b>Anomalie des Wassers</b> – Wasser hat bei 4 °C seine größte Dichte, Eis ist leichter als Wasser und schwimmt. Deshalb frieren Seen von oben zu.</p>`,
        aufgaben: [
          { t: "wahl", f: "Was ist der Unterschied zwischen Temperatur und Wärme?", a: ["Temperatur ist ein Zustand, Wärme ist übertragene Energie", "Beides ist dasselbe, nur andere Einheit", "Wärme misst man mit dem Thermometer, Temperatur mit der Waage", "Temperatur gibt es nur bei Gasen"], r: 0, info: "Temperatur beschreibt den Zustand eines Körpers, Wärme ist die Energie, die zwischen Körpern unterschiedlicher Temperatur fließt." },
          { t: "zahl", f: "Bei welcher Temperatur siedet Wasser bei Normaldruck? (in °C)", l: 100, tol: 0.01, einheit: "°C", info: "Siedepunkt von Wasser bei Normaldruck: 100 °C; auf hohen Bergen ist er niedriger." },
          { t: "zahl", f: "Wie viel Kelvin sind 27 °C?", l: 300.15, tol: 0.2, einheit: "K", info: "Kelvin = Celsius + 273,15, also 27 + 273,15 = 300,15 K." },
          { t: "zahl", f: "Wie viel Wärme braucht man, um 2 kg Wasser um 50 K zu erwärmen? (c = 4,19 kJ/(kg·K), in kJ)", l: 419, tol: 0.5, einheit: "kJ", info: "Q = c · m · ΔT = 4,19 · 2 · 50 = 419 kJ." },
          { t: "zahl", f: "1 kg Wasser wird von 20 °C auf 100 °C erhitzt. Wie viel Wärme ist nötig? (c = 4,19 kJ/(kg·K), in kJ)", l: 335.2, tol: 0.5, einheit: "kJ", info: "ΔT = 80 K, Q = 4,19 · 1 · 80 = 335,2 kJ." },
          { t: "paare", f: "Ordne die Übergänge den Aggregatzuständen zu", p: [["Schmelzen", "fest → flüssig"], ["Verdampfen", "flüssig → gasförmig"], ["Kondensieren", "gasförmig → flüssig"], ["Erstarren", "flüssig → fest"], ["Sublimieren", "fest → gasförmig"]] },
          { t: "wahl", f: "Was passiert mit der Temperatur von Wasser, während es siedet und weiter erhitzt wird?", a: ["Sie bleibt bei 100 °C konstant", "Sie steigt weiter an", "Sie sinkt leicht", "Sie schwankt stark"], r: 0, info: "Die zugeführte Energie wird zum Verdampfen gebraucht, nicht zum Erwärmen – die Temperatur bleibt beim Siedepunkt." },
          { t: "paare", f: "Ordne die Art des Wärmetransports dem Beispiel zu", p: [["Wärmeleitung", "Metalllöffel in heißem Tee wird warm"], ["Wärmeströmung", "Warme Luft steigt über der Heizung auf"], ["Wärmestrahlung", "Die Sonne wärmt dein Gesicht"]] },
          { t: "eingabe", f: "Wie heißt der Wärmetransport, der auch durch den luftleeren Raum funktioniert?", l: ["Wärmestrahlung", "Strahlung"], info: "Wärmestrahlung braucht keinen Stoff – so kommt die Sonnenwärme durchs Weltall zu uns." },
          { t: "wahl", f: "Warum ist Wasser ein so guter Wärmespeicher?", a: ["Es hat eine sehr hohe spezifische Wärmekapazität", "Es ist durchsichtig", "Es hat eine niedrige Dichte", "Es leitet Strom"], r: 0, info: "Mit c = 4,19 kJ/(kg·K) braucht Wasser sehr viel Energie pro Grad – es erwärmt sich langsam und kühlt langsam ab." },
          { t: "wahl", f: "Bei welcher Temperatur hat Wasser seine größte Dichte?", a: ["4 °C", "0 °C", "100 °C", "20 °C"], r: 0, info: "Das ist die Anomalie des Wassers: Bei 4 °C ist es am dichtesten, deshalb sinkt 4 °C kaltes Wasser im See nach unten." },
          { t: "wahl", f: "Warum schwimmt Eis auf Wasser?", a: ["Eis hat eine geringere Dichte als flüssiges Wasser", "Eis ist wärmer als Wasser", "Eis enthält viel Luft", "Eis ist leichter, weil Wasser beim Gefrieren Masse verliert"], r: 0, info: "Beim Gefrieren dehnt sich Wasser aus, die Dichte sinkt – darum schwimmt Eis oben." },
          { t: "eingabe", f: "Der absolute Nullpunkt liegt bei ___ °C (ganze Zahl, gerundet).", l: ["-273", "−273", "-273,15", "-273.15"], info: "0 Kelvin entsprechen −273,15 °C; kälter geht es nicht, weil die Teilchenbewegung dann minimal ist." },
          { t: "reihenfolge", f: "Bringe die Zustände von Wasser beim Erhitzen in die richtige Reihenfolge", items: ["Eis bei −10 °C", "Eis schmilzt bei 0 °C", "flüssiges Wasser bei 50 °C", "Wasser siedet bei 100 °C", "Wasserdampf bei 120 °C"] },
          { t: "wahl", f: "Was bedeutet die Einheit kJ/(kg·K) der spezifischen Wärmekapazität?", a: ["Energie, um 1 kg eines Stoffes um 1 K zu erwärmen", "Energie, um 1 kg zu schmelzen", "Temperatur von 1 kg Stoff", "Wärme, die 1 kg pro Sekunde abgibt"], r: 0, info: "c gibt an, wie viel Energie nötig ist, um 1 kg des Stoffes um 1 Kelvin (= 1 °C) zu erwärmen." },
          { t: "karte", vorne: "Anomalie des Wassers", hinten: "Wasser hat bei 4 °C die größte Dichte; Eis ist leichter als Wasser.", bsp: "Seen frieren von oben zu, am Grund bleibt es 4 °C warm – Fische überleben." }
        ]
      },
      {
        id: "optik",
        titel: "Optik",
        kurz: "Reflexion, Brechung, Linsen, Auge, Farben",
        erklaerung: `<p>Licht breitet sich geradlinig aus. Trifft es auf einen Spiegel, gilt das <b>Reflexionsgesetz</b>: Einfallswinkel = Ausfallswinkel, beide gemessen zum <b>Lot</b> (der Senkrechten auf die Oberfläche). An einem ebenen Spiegel entsteht ein gleich großes, seitenverkehrtes, virtuelles Bild.</p>
<p>Geht Licht von Luft in Glas oder Wasser über, wird es <b>gebrochen</b>: Es knickt zum Lot hin, weil es im dichteren Stoff langsamer ist. Beim Austritt knickt es vom Lot weg. Deshalb sieht ein Strohhalm im Glas geknickt aus. Ist der Winkel beim Austritt zu groß, kommt es zur <b>Totalreflexion</b> – das nutzen Glasfaserkabel.</p>
<p>Eine <b>Sammellinse</b> (in der Mitte dicker) bündelt parallele Strahlen im <b>Brennpunkt F</b>; der Abstand zur Linse ist die <b>Brennweite f</b>. Liegt ein Gegenstand weiter als f entfernt, entsteht ein umgekehrtes, reelles Bild, das man auf einem Schirm auffangen kann. Liegt er innerhalb von f, wirkt die Linse als Lupe. Eine <b>Zerstreuungslinse</b> (in der Mitte dünner) streut das Licht auseinander.</p>
<p>Das <b>Auge</b> arbeitet wie eine Kamera: Hornhaut und Linse bilden ein verkleinertes, umgekehrtes Bild auf der <b>Netzhaut</b>. Bei <b>Kurzsichtigkeit</b> liegt das Bild vor der Netzhaut – eine Zerstreuungslinse hilft; bei <b>Weitsichtigkeit</b> dahinter – eine Sammellinse hilft.</p>
<p>Weißes Licht ist eine Mischung aller Farben. Ein <b>Prisma</b> zerlegt es in das <b>Spektrum</b> von Rot (am wenigsten gebrochen) bis Violett (am stärksten gebrochen). Ein Gegenstand sieht rot aus, weil er rotes Licht zurückwirft und die anderen Farben verschluckt.</p>`,
        aufgaben: [
          { t: "wahl", f: "Ein Lichtstrahl trifft mit 30° zum Lot auf einen Spiegel. Unter welchem Winkel zum Lot wird er reflektiert?", a: ["30°", "60°", "90°", "15°"], r: 0, info: "Reflexionsgesetz: Einfallswinkel = Ausfallswinkel, beide zum Lot gemessen." },
          { t: "eingabe", f: "Wie heißt die gedachte Senkrechte auf der Spiegelfläche, zu der man Ein- und Ausfallswinkel misst?", l: ["Lot", "Einfallslot"], info: "Alle Winkel in der Optik misst man zum Lot, nicht zur Oberfläche." },
          { t: "wahl", f: "Licht geht von Luft in Wasser. Wie ändert sich seine Richtung?", a: ["Es wird zum Lot hin gebrochen", "Es wird vom Lot weg gebrochen", "Es ändert die Richtung nicht", "Es wird vollständig reflektiert"], r: 0, info: "Im optisch dichteren Stoff ist Licht langsamer und knickt zum Lot hin." },
          { t: "wahl", f: "Warum sieht ein Strohhalm im Wasserglas geknickt aus?", a: ["Wegen der Brechung des Lichts an der Wasseroberfläche", "Weil Wasser den Strohhalm verbiegt", "Wegen der Reflexion am Glasboden", "Weil Wasser Licht verschluckt"], r: 0, info: "Lichtstrahlen vom Strohhalm werden beim Austritt aus dem Wasser gebrochen, das Auge verlängert sie geradlinig zurück." },
          { t: "wahl", f: "Welche Linse ist in der Mitte dicker als am Rand?", a: ["Sammellinse", "Zerstreuungslinse", "Beide", "Keine von beiden"], r: 0, info: "Sammellinsen sind in der Mitte dick und bündeln Licht; Zerstreuungslinsen sind in der Mitte dünn." },
          { t: "eingabe", f: "Wie heißt der Punkt, in dem eine Sammellinse parallel einfallende Strahlen bündelt?", l: ["Brennpunkt", "Fokus"], info: "Der Brennpunkt F liegt im Abstand der Brennweite f hinter der Linse." },
          { t: "eingabe", f: "Der Abstand zwischen Linse und Brennpunkt heißt ___.", l: ["Brennweite"], info: "Je stärker eine Linse gekrümmt ist, desto kürzer ist ihre Brennweite." },
          { t: "wahl", f: "Ein Gegenstand steht weit außerhalb der Brennweite einer Sammellinse. Wie ist das Bild?", a: ["Umgekehrt und reell", "Aufrecht und vergrößert", "Aufrecht und virtuell", "Es entsteht kein Bild"], r: 0, info: "Außerhalb der Brennweite entsteht ein umgekehrtes, reelles Bild, das man auf einem Schirm auffangen kann – wie im Fotoapparat." },
          { t: "wahl", f: "Wie wirkt eine Sammellinse, wenn der Gegenstand innerhalb der Brennweite liegt?", a: ["Als Lupe: aufrechtes, vergrößertes Bild", "Sie erzeugt ein verkleinertes Bild", "Sie erzeugt ein umgekehrtes Bild", "Sie wirkt wie ein Spiegel"], r: 0, info: "Innerhalb der Brennweite entsteht ein aufrechtes, vergrößertes, virtuelles Bild – das Prinzip der Lupe." },
          { t: "paare", f: "Ordne die Teile des Auges ihrer Aufgabe zu", p: [["Netzhaut", "Hier entsteht das Bild, Sinneszellen melden ans Gehirn"], ["Linse", "Stellt scharf, indem sie ihre Krümmung ändert"], ["Pupille", "Öffnung, regelt den Lichteinfall"], ["Hornhaut", "Durchsichtige Vorderseite, bricht das Licht am stärksten"]] },
          { t: "wahl", f: "Welche Brille braucht ein kurzsichtiger Mensch?", a: ["Zerstreuungslinse", "Sammellinse", "Planglas", "Prisma"], r: 0, info: "Bei Kurzsichtigkeit liegt das Bild vor der Netzhaut; eine Zerstreuungslinse schiebt es nach hinten." },
          { t: "wahl", f: "Was passiert, wenn weißes Licht durch ein Prisma fällt?", a: ["Es wird in die Spektralfarben zerlegt", "Es wird vollständig reflektiert", "Es wird weißer", "Es wird nur abgelenkt, bleibt aber weiß"], r: 0, info: "Jede Farbe wird unterschiedlich stark gebrochen – so entsteht das Spektrum von Rot bis Violett." },
          { t: "wahl", f: "Welche Farbe wird im Prisma am stärksten gebrochen?", a: ["Violett", "Rot", "Gelb", "Grün"], r: 0, info: "Violettes Licht wird am stärksten, rotes am schwächsten gebrochen." },
          { t: "wahl", f: "Warum erscheint ein Blatt grün?", a: ["Es wirft grünes Licht zurück und verschluckt die anderen Farben", "Es erzeugt selbst grünes Licht", "Es verschluckt nur grünes Licht", "Es lässt grünes Licht durch, alle anderen Farben reflektiert es"], r: 0, info: "Körperfarbe entsteht, weil ein Gegenstand bestimmte Farben reflektiert und den Rest absorbiert." },
          { t: "reihenfolge", f: "Ordne die Spektralfarben von der schwächsten zur stärksten Brechung", items: ["Rot", "Orange", "Gelb", "Grün", "Blau", "Violett"] },
          { t: "eingabe", f: "Wie heißt das Phänomen, bei dem Licht an der Grenze zum dünneren Stoff vollständig zurückgeworfen wird (genutzt in Glasfasern)?", l: ["Totalreflexion"], info: "Ab einem bestimmten Grenzwinkel tritt kein Licht mehr aus – es wird total reflektiert." },
          { t: "karte", vorne: "Reflexionsgesetz", hinten: "Einfallswinkel = Ausfallswinkel, beide zum Lot gemessen; einfallender Strahl, Lot und reflektierter Strahl liegen in einer Ebene." }
        ]
      },
      {
        id: "radioaktivitaet",
        titel: "Radioaktivität & Kernenergie",
        kurz: "Alpha, Beta, Gamma, Halbwertszeit, Kernspaltung, Strahlenschutz",
        erklaerung: `<p>Manche Atomkerne sind instabil und zerfallen von selbst – sie sind <b>radioaktiv</b>. Dabei senden sie Strahlung aus. <b>Alphastrahlung</b> besteht aus Heliumkernen (2 Protonen, 2 Neutronen); sie wird schon von einem Blatt Papier gestoppt. <b>Betastrahlung</b> besteht aus schnellen Elektronen; ein paar Millimeter Aluminium halten sie auf. <b>Gammastrahlung</b> ist energiereiche elektromagnetische Strahlung ohne Masse; erst dicke Blei- oder Betonschichten schwächen sie deutlich ab.</p>
<p>Die <b>Halbwertszeit</b> ist die Zeit, nach der die Hälfte der Kerne zerfallen ist. Nach zwei Halbwertszeiten ist noch ein Viertel übrig, nach drei ein Achtel. Formel: Restmenge = Anfangsmenge · (½)<sup>n</sup>, wobei n die Zahl der Halbwertszeiten ist. Beispiel: Von 800 g bleiben nach 3 Halbwertszeiten 100 g.</p>
<p>Bei der <b>Kernspaltung</b> trifft ein Neutron einen Uran-235-Kern, der in zwei Bruchstücke zerfällt und dabei Energie und 2–3 neue Neutronen freisetzt. Diese spalten weitere Kerne: eine <b>Kettenreaktion</b>. Im <b>Kernkraftwerk</b> wird sie mit Steuerstäben gebremst; die Wärme erzeugt Dampf, der eine Turbine mit Generator antreibt. Problem: radioaktiver Abfall, der Jahrtausende sicher gelagert werden muss. In der <b>Kernfusion</b> verschmelzen leichte Kerne – so erzeugt die Sonne ihre Energie.</p>
<p><b>Strahlenschutz</b> folgt drei Regeln: Abstand halten, Aufenthaltszeit verkürzen, abschirmen. Die vom Körper aufgenommene Strahlendosis misst man in Sievert (Sv). Natürliche Strahlung aus Boden, Luft und Weltall gibt es überall – gefährlich wird es bei hohen Dosen.</p>`,
        aufgaben: [
          { t: "paare", f: "Ordne die Strahlungsart ihrer Beschreibung zu", p: [["Alphastrahlung", "Heliumkerne, von Papier gestoppt"], ["Betastrahlung", "Schnelle Elektronen, von Aluminiumblech gestoppt"], ["Gammastrahlung", "Elektromagnetische Welle, nur durch dickes Blei abgeschwächt"]] },
          { t: "wahl", f: "Welche Strahlungsart hat die geringste Reichweite und wird schon von Papier gestoppt?", a: ["Alphastrahlung", "Betastrahlung", "Gammastrahlung", "Röntgenstrahlung"], r: 0, info: "Alphateilchen sind groß und schwer, sie geben ihre Energie schnell ab." },
          { t: "wahl", f: "Woraus besteht Betastrahlung?", a: ["Aus schnellen Elektronen", "Aus Heliumkernen", "Aus Neutronen", "Aus Lichtteilchen"], r: 0, info: "Beim Betazerfall wandelt sich im Kern ein Neutron in ein Proton um und ein Elektron wird ausgesendet." },
          { t: "eingabe", f: "Wie heißt die Zeit, nach der die Hälfte der radioaktiven Kerne zerfallen ist?", l: ["Halbwertszeit"], info: "Sie ist für jedes Nuklid fest – von Sekundenbruchteilen bis Milliarden Jahren." },
          { t: "zahl", f: "Von einem Stoff sind 800 g vorhanden. Wie viel ist nach 3 Halbwertszeiten noch übrig? (in g)", l: 100, tol: 0.01, einheit: "g", info: "800 → 400 → 200 → 100 g: dreimal halbieren." },
          { t: "zahl", f: "Ein Stoff hat eine Halbwertszeit von 8 Tagen. Von 64 mg: Wie viel bleibt nach 32 Tagen? (in mg)", l: 4, tol: 0.01, einheit: "mg", info: "32 Tage = 4 Halbwertszeiten: 64 → 32 → 16 → 8 → 4 mg." },
          { t: "zahl", f: "Nach wie vielen Halbwertszeiten ist von 1000 Kernen noch etwa ein Achtel (125) übrig?", l: 3, tol: 0.01, einheit: "", info: "(½)³ = ⅛, also nach 3 Halbwertszeiten." },
          { t: "zahl", f: "Wie viel Prozent der Anfangsmenge sind nach 2 Halbwertszeiten noch vorhanden? (in %)", l: 25, tol: 0.01, einheit: "%", info: "Halbe Hälfte: 100 % → 50 % → 25 %." },
          { t: "wahl", f: "Was passiert bei der Kernspaltung von Uran-235?", a: ["Ein Neutron trifft den Kern, der in zwei Teile zerfällt und neue Neutronen freisetzt", "Zwei Kerne verschmelzen zu einem schwereren", "Der Kern sendet nur Gammastrahlung aus", "Ein Elektron verlässt die Atomhülle"], r: 0, info: "Die freigesetzten Neutronen können weitere Kerne spalten – so entsteht eine Kettenreaktion." },
          { t: "eingabe", f: "Wie heißt der Vorgang, bei dem freigesetzte Neutronen immer weitere Kerne spalten?", l: ["Kettenreaktion"], info: "Im Kraftwerk wird die Kettenreaktion mit Steuerstäben gebremst, in der Atombombe läuft sie ungebremst." },
          { t: "reihenfolge", f: "Bringe die Energieumwandlung im Kernkraftwerk in die richtige Reihenfolge", items: ["Kernspaltung erzeugt Wärme", "Wasser wird zu Dampf", "Dampf treibt die Turbine an", "Generator erzeugt Strom"] },
          { t: "wahl", f: "Wozu dienen die Steuerstäbe im Reaktor?", a: ["Sie fangen Neutronen ein und regeln die Kettenreaktion", "Sie erzeugen den Dampf", "Sie liefern neue Neutronen", "Sie schirmen Gammastrahlung nach außen ab"], r: 0, info: "Steuerstäbe aus Bor oder Cadmium absorbieren Neutronen; fährt man sie ein, wird die Reaktion gebremst." },
          { t: "wahl", f: "Was ist das größte ungelöste Problem der Kernenergie?", a: ["Die sichere Endlagerung des radioaktiven Abfalls über Jahrtausende", "Der hohe CO₂-Ausstoß im Betrieb", "Der Lärm der Turbinen", "Der Mangel an Wasser zum Kühlen"], r: 0, info: "Abgebrannte Brennelemente strahlen über sehr lange Zeiträume – ein Endlager gibt es in Deutschland noch nicht." },
          { t: "wahl", f: "Welche drei Regeln gelten beim Strahlenschutz?", a: ["Abstand, Zeit begrenzen, Abschirmung", "Wärme, Licht, Kälte", "Reinigen, Lüften, Trocknen", "Laufen, Springen, Ducken"], r: 0, info: "Je weiter weg, je kürzer und je besser abgeschirmt, desto geringer die Dosis." },
          { t: "eingabe", f: "In welcher Einheit wird die Strahlendosis angegeben, die ein Mensch aufnimmt?", l: ["Sievert", "Sv"], info: "Sievert berücksichtigt, wie schädlich die Strahlung für Gewebe ist; die Aktivität dagegen misst man in Becquerel." },
          { t: "wahl", f: "Woher bezieht die Sonne ihre Energie?", a: ["Kernfusion: Wasserstoffkerne verschmelzen zu Helium", "Kernspaltung von Uran", "Verbrennung von Wasserstoff", "Radioaktiver Zerfall von Eisen"], r: 0, info: "In der Sonne verschmelzen bei Millionen Grad leichte Kerne – dabei wird enorm viel Energie frei." },
          { t: "karte", vorne: "Halbwertszeit", hinten: "Zeit, nach der die Hälfte der Kerne zerfallen ist. Restmenge = Anfang · (½)^n.", bsp: "Von 400 g bleiben nach 2 Halbwertszeiten 100 g." }
        ]
      }
    ]
  };

  window.FAECHER.push(FACH);
})();
