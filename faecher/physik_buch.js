// Lernwelt – Buch-Zuordnung Physik: Westermann „Erlebnis Physik 3“ (Ausgabe 2022 für NRW und Hessen, Klasse 9/10).
// Ordnet vorhandene Themen den fünf Buchkapiteln zu und ergänzt Themen für Kapitel ohne Abdeckung
// (Energieversorgung, Halbleiter, freier Fall/Anhalteweg). Nur Kapitelnamen und Seitenzahlen aus dem
// Inhaltsverzeichnis – keine Buchtexte. Reines Browser-JS, kein Import/Export.
"use strict";
(function () {
  const FACH = window.FAECHER.find((f) => f.id === "physik");
  if (!FACH) return;
  FACH.buch = "Westermann Erlebnis Physik 3 (Ausgabe 2022 NRW)";

  // ---------- Kapitel (das Buch nummeriert nicht; Reihenfolge wie im Inhaltsverzeichnis) ----------
  const P1 = "Kapitel 1 · Elektrische Energie und ihre Nutzung (S. 16–67)";
  const P2 = "Kapitel 2 · Energieversorgung (S. 70–133)";
  const P3 = "Kapitel 3 · Bewegte Körper und ihre Energie (S. 136–175)";
  const P4 = "Kapitel 4 · Halbleiter im Alltag (S. 178–213)";
  const P5 = "Kapitel 5 · Radioaktivität und Kernenergie (S. 216–263)";

  const kap = (id, kapitel) => { const t = FACH.themen.find((x) => x.id === id); if (t) t.kapitel = kapitel; };
  kap("strom", P1);               // elektrische Arbeit, Leistung, Wirkungsgrad stehen in Kapitel 1
  kap("elektromagnetismus", P1);
  kap("waerme", P2);              // „Die zugeführte Wärme berechnen“, Bereitstellung von Wärme
  kap("bewegung", P3);
  kap("mechanik", P3);
  kap("radioaktivitaet", P5);
  // Ohne Kapitel (Stoff aus Band 2, Klasse 7/8): optik, druck, weltall.

  // ---------- Hilfsfunktionen (lokal; nur fz ist global aus js/kern.js) ----------
  const r2 = (x) => Math.round(x * 100) / 100;
  const z = (x) => fz(x);
  const zahl = (f, l, info, einheit, tol) => ({ t: "zahl", f, l, info, einheit, tol: tol ?? (Number.isInteger(l) ? 0.01 : 0.05) });
  const wahl = (f, a, r, info) => ({ t: "wahl", f, a, r, info });
  const eingabe = (f, l, info) => ({ t: "eingabe", f, l, info });
  const G = 9.81;

  // ---------- Generator: Freier Fall, Beschleunigung, Newton, Anhalteweg (Kapitel 3) ----------
  const NEWTON = [
    ["Ein Buch liegt auf dem Tisch und bleibt liegen, solange keine Kraft es verschiebt.", "Trägheitssatz (1. Gesetz)"],
    ["Beim Bremsen des Busses kippst du nach vorn, weil dein Körper sich weiterbewegen „will“.", "Trägheitssatz (1. Gesetz)"],
    ["Je stärker du den Einkaufswagen anschiebst, desto stärker wird er beschleunigt: F = m · a.", "Grundgesetz der Mechanik (2. Gesetz)"],
    ["Ein voller Wagen wird bei gleicher Kraft weniger stark beschleunigt als ein leerer.", "Grundgesetz der Mechanik (2. Gesetz)"],
    ["Eine Rakete stößt Gas nach hinten aus und wird dadurch nach vorn getrieben.", "Wechselwirkungsgesetz (3. Gesetz)"],
    ["Beim Abstoßen vom Beckenrand drückt der Rand dich genauso stark zurück wie du ihn drückst.", "Wechselwirkungsgesetz (3. Gesetz)"],
  ];
  const genFall = (rng) => {
    const art = rng.int(1, 9);
    if (art === 1) { const t = rng.pick([1, 1.5, 2, 2.5, 3, 4, 5]); const s = r2(0.5 * G * t * t); return zahl(`Freier Fall ohne Luftwiderstand (g = 9,81 m/s²): Wie tief ist ein Stein nach ${z(t)} s gefallen?`, s, `s = ½ · g · t² = 0,5 · 9,81 · ${z(t)}² = ${z(s)} m.`, "m", 0.1); }
    if (art === 2) { const t = rng.pick([0.5, 1, 1.5, 2, 2.5, 3, 4, 6]); const v = r2(G * t); return zahl(`Freier Fall (g = 9,81 m/s²): Welche Geschwindigkeit hat ein Körper nach ${z(t)} s erreicht?`, v, `v = g · t = 9,81 · ${z(t)} = ${z(v)} m/s.`, "m/s", 0.05); }
    if (art === 3) { const h = rng.pick([5, 10, 15, 20, 30, 45, 80, 125]); const t = r2(Math.sqrt(2 * h / G)); return zahl(`Ein Ball fällt aus ${h} m Höhe (g = 9,81 m/s², kein Luftwiderstand). Wie lange dauert der Fall?`, t, `Aus s = ½ g t² folgt t = √(2s/g) = √(${2 * h}/9,81) ≈ ${z(t)} s.`, "s", 0.05); }
    if (art === 4) { const m = rng.pick([0.5, 2, 60, 70, 800, 1000, 1200, 1500]), a = rng.pick([0.5, 1, 1.5, 2, 2.5, 3, 4]); const F = r2(m * a); return zahl(`Ein Körper der Masse ${z(m)} kg wird mit a = ${z(a)} m/s² beschleunigt. Welche Kraft ist dafür nötig?`, F, `F = m · a = ${z(m)} · ${z(a)} = ${z(F)} N.`, "N", 0.05); }
    if (art === 5) { const v = rng.pick([30, 50, 70, 80, 100, 120]), tr = rng.pick([0.8, 1, 1.2]); const s = r2(v / 3.6 * tr); return zahl(`Ein Auto fährt ${v} km/h. Die Reaktionszeit beträgt ${z(tr)} s. Wie lang ist der Reaktionsweg?`, s, `${v} km/h = ${z(v / 3.6)} m/s; Reaktionsweg = v · t = ${z(v / 3.6)} · ${z(tr)} ≈ ${z(s)} m.`, "m", 0.15); }
    if (art === 6) { const v = rng.pick([30, 50, 70, 100]), a = rng.pick([5, 6, 7.5, 8]); const vm = v / 3.6, s = r2(vm * vm / (2 * a)); return zahl(`Ein Auto bremst aus ${v} km/h mit a = ${z(a)} m/s² ab. Wie lang ist der Bremsweg?`, s, `v = ${z(vm)} m/s; Bremsweg = v² / (2a) = ${z(vm * vm)} / ${z(2 * a)} ≈ ${z(s)} m.`, "m", 0.15); }
    if (art === 7) { const N = rng.pick(NEWTON); return wahl(`Welches newtonsche Gesetz beschreibt die Situation: „${N[0]}“`, ["Trägheitssatz (1. Gesetz)", "Grundgesetz der Mechanik (2. Gesetz)", "Wechselwirkungsgesetz (3. Gesetz)"], ["Trägheitssatz (1. Gesetz)", "Grundgesetz der Mechanik (2. Gesetz)", "Wechselwirkungsgesetz (3. Gesetz)"].indexOf(N[1]), N[1] === "Trägheitssatz (1. Gesetz)" ? "Ohne Kraft behält ein Körper seinen Bewegungszustand bei – Ruhe bleibt Ruhe, Bewegung bleibt gleichförmig." : N[1] === "Grundgesetz der Mechanik (2. Gesetz)" ? "Kraft, Masse und Beschleunigung hängen über F = m · a zusammen." : "Kräfte treten immer paarweise auf: actio = reactio, gleich groß und entgegengesetzt."); }
    if (art === 8) { const a = rng.pick([1, 1.5, 2, 3, 4]), t = rng.pick([2, 4, 5, 8, 10]); const s = r2(0.5 * a * t * t); return zahl(`Ein Fahrzeug startet aus dem Stand und beschleunigt gleichmäßig mit ${z(a)} m/s². Welche Strecke legt es in ${t} s zurück?`, s, `s = ½ · a · t² = 0,5 · ${z(a)} · ${t}² = ${z(s)} m.`, "m", 0.05); }
    const s1 = rng.pick([30, 60, 90, 120]), t1 = rng.pick([0.5, 1, 1.5]), s2 = rng.pick([20, 40, 50]), t2 = rng.pick([0.5, 1]);
    const v = r2((s1 + s2) / (t1 + t2));
    return zahl(`Ein Radfahrer fährt ${s1} km in ${z(t1)} h und danach ${s2} km in ${z(t2)} h. Wie groß ist seine Durchschnittsgeschwindigkeit für die ganze Fahrt?`, v, `v = Gesamtstrecke : Gesamtzeit = ${s1 + s2} km : ${z(t1 + t2)} h = ${z(v)} km/h (nicht der Mittelwert der Einzelgeschwindigkeiten!).`, "km/h", 0.05);
  };

  FACH.themen.push(
    {
      id: "fall-anhalteweg", kapitel: P3, titel: "Freier Fall, Newton & Anhalteweg",
      kurz: "s = ½ g t², v = g t, F = m · a, newtonsche Gesetze, Reaktions- und Bremsweg, Durchschnittsgeschwindigkeit",
      erklaerung: `<p><b>Gleichmäßig beschleunigte Bewegung</b> aus dem Stand: v = a · t und s = ½ · a · t². Die Geschwindigkeit wächst gleichmäßig, der Weg quadratisch mit der Zeit.</p>
<p><b>Freier Fall</b> ist der Sonderfall mit a = g = 9,81 m/s² (ohne Luftwiderstand fallen alle Körper gleich schnell): s = ½ · g · t², v = g · t. Nach 2 s: s = 19,6 m, v = 19,6 m/s. Die Fallzeit aus der Höhe h: t = √(2h/g).</p>
<p><b>Newtonsche Gesetze:</b> 1. <b>Trägheit</b> – ohne Kraft bleibt ein Körper in Ruhe oder bewegt sich gleichförmig weiter. 2. <b>Grundgesetz</b> F = m · a – Kraft erzeugt Beschleunigung, je größer die Masse, desto kleiner die Beschleunigung. 3. <b>Wechselwirkung</b> – actio = reactio, Kräfte treten immer paarweise auf.</p>
<p><b>Anhalteweg</b> = Reaktionsweg + Bremsweg. Reaktionsweg = v · t<sub>Reaktion</sub> (meist etwa 1 s); Bremsweg = v² / (2 · a). Bei doppelter Geschwindigkeit wird der Bremsweg <b>viermal</b> so lang! Rechne km/h erst in m/s um (: 3,6).</p>
<p><b>Durchschnittsgeschwindigkeit</b> = Gesamtstrecke : Gesamtzeit; die <b>Momentangeschwindigkeit</b> zeigt der Tacho in einem Augenblick.</p>
<p>Typischer Fehler: Den Bremsweg linear mit der Geschwindigkeit wachsen lassen – er hängt vom <i>Quadrat</i> von v ab.</p>`,
      gen: genFall,
    },
    {
      id: "energieversorgung", kapitel: P2, titel: "Energieversorgung: Kraftwerke, Speicher, Stromnetz",
      kurz: "Wärmekraftwerk, Kraft-Wärme-Kopplung, Brennstoffzelle, regenerative Anlagen, Speicher, Hochspannung, HGÜ, Wirkungsgrad",
      erklaerung: `<p>In einem <b>Wärmekraftwerk</b> wird ein Brennstoff (Kohle, Gas, Biomasse) verbrannt oder Kernenergie genutzt: Wasser verdampft, der <b>Dampf treibt eine Turbine</b>, die Turbine den <b>Generator</b>. Energiekette: chemische Energie → Wärme → Bewegungsenergie → elektrische Energie. Ein klassisches Kohlekraftwerk nutzt nur etwa 40 % der Energie elektrisch, der Rest geht als Abwärme über den Kühlturm verloren.</p>
<p><b>Kraft-Wärme-Kopplung (KWK):</b> Die Abwärme wird als Fernwärme oder Prozesswärme genutzt – so steigt die Gesamtnutzung auf bis zu 90 %. Blockheizkraftwerke und Biogasanlagen arbeiten so.</p>
<p><b>Regenerative Anlagen:</b> Wind, Wasser, Sonne (Photovoltaik und Solarthermie), Biomasse, Erdwärme. Da Wind und Sonne schwanken, braucht man <b>Speicher</b>: Pumpspeicherkraftwerke (Wasser hochpumpen, bei Bedarf ablassen), Akkus, Wasserstoff aus Elektrolyse („grüner“ Wasserstoff, wenn der Strom aus erneuerbaren Quellen stammt). Die <b>Brennstoffzelle</b> macht aus Wasserstoff und Sauerstoff wieder Strom und Wärme – Abgas: Wasser.</p>
<p><b>Mobilität:</b> Verbrennungsmotoren erreichen etwa 25–40 % Wirkungsgrad, Elektromotoren über 90 %. Entscheidend ist, woher der Strom kommt.</p>
<p><b>Transport:</b> Verlustleistung in der Leitung P = I² · R. Deshalb wird mit <b>Hochspannung</b> übertragen (Höchstspannung 380 kV, Hochspannung 110 kV, Mittelspannung 10–30 kV, Haushalt 230 V): gleiche Leistung bei kleiner Stromstärke. Transformatoren setzen die Spannung herauf und herab. Für sehr lange Strecken und Seekabel nutzt man <b>HGÜ</b> (Hochspannungs-Gleichstrom-Übertragung).</p>
<p><b>Wirkungsgrad</b> η = E<sub>nutz</sub> / E<sub>zu</sub> (oder P<sub>ab</sub> / P<sub>zu</sub>), immer kleiner als 1. Die Verbrennung fossiler Stoffe setzt CO₂ frei und verstärkt den Treibhauseffekt – daher der Umbau zur erneuerbaren Energieversorgung.</p>`,
      aufgaben: [
        { t: "reihenfolge", f: "Bringe die Energieumwandlung in einem Kohlekraftwerk in die richtige Reihenfolge", items: ["Kohle wird im Kessel verbrannt", "Wasser verdampft zu heißem Dampf", "Der Dampf treibt die Turbine an", "Der Generator erzeugt elektrische Spannung", "Der Transformator setzt die Spannung für das Netz herauf"] },
        wahl("Welche Energieform-Kette beschreibt ein Wärmekraftwerk richtig?", ["chemische Energie → Wärme → Bewegungsenergie → elektrische Energie", "elektrische Energie → Wärme → Bewegungsenergie → chemische Energie", "Wärme → chemische Energie → elektrische Energie", "Bewegungsenergie → Wärme → Lichtenergie"], 0, "Der Brennstoff liefert Wärme, der Dampf bewegt die Turbine, der Generator wandelt Bewegung in elektrische Energie um."),
        zahl("Ein Kraftwerk nimmt mit dem Brennstoff eine Leistung von 1000 MW auf und gibt 400 MW elektrisch ab. Wie groß ist der Wirkungsgrad in Prozent?", 40, "η = P_ab / P_zu = 400 / 1000 = 0,4 = 40 %.", "%"),
        wahl("Was bedeutet Kraft-Wärme-Kopplung?", ["Die Abwärme des Kraftwerks wird zusätzlich als Heizwärme genutzt", "Zwei Kraftwerke werden an dasselbe Netz gekoppelt", "Die Turbine wird direkt mit Wärme statt mit Dampf angetrieben", "Strom wird in Wärme umgewandelt und gespeichert"], 0, "Bei KWK wird die sonst verlorene Abwärme z. B. als Fernwärme genutzt – die Gesamtnutzung steigt auf bis zu 90 %."),
        eingabe("Das Bauteil, das in Kraftwerken Bewegungsenergie in elektrische Energie umwandelt, heißt ___.", ["Generator"], "Der Generator arbeitet nach dem Induktionsprinzip: Eine Spule bewegt sich im Magnetfeld (oder umgekehrt), dadurch entsteht Spannung."),
        wahl("Warum wird elektrische Energie über große Entfernungen mit Hochspannung übertragen?", ["Bei hoher Spannung fließt für dieselbe Leistung weniger Strom, also sind die Leitungsverluste (P = I² · R) kleiner", "Hochspannung kann nicht durch Regen gestört werden", "Bei hoher Spannung ist der Widerstand der Leitung null", "Hochspannung braucht keine Transformatoren"], 0, "P = U · I: Je höher U, desto kleiner I bei gleicher Leistung – und die Verluste hängen vom Quadrat der Stromstärke ab."),
        zahl("Eine Leitung hat einen Widerstand von 2 Ω. Wie groß ist die Verlustleistung, wenn 50 A fließen? (P = I² · R, in W)", 5000, "P = I² · R = 50² · 2 = 2500 · 2 = 5000 W = 5 kW.", "W"),
        { t: "paare", f: "Ordne die Spannungsebenen im Stromnetz zu", p: [["Höchstspannung (Fernleitungen)", "380 kV"], ["Hochspannung (Regionalnetz)", "110 kV"], ["Mittelspannung (Stadtnetz)", "10–30 kV"], ["Niederspannung (Haushalt)", "230 V"]] },
        wahl("Wofür steht die Abkürzung HGÜ?", ["Hochspannungs-Gleichstrom-Übertragung", "Hochleistungs-Generator-Überwachung", "Haushalts-Grundlast-Übertragung", "Hochspannungs-Gleichrichter-Umspannwerk"], 0, "HGÜ überträgt Gleichstrom mit sehr hoher Spannung – günstig für sehr lange Strecken und Seekabel, weil die Verluste kleiner sind als bei Wechselstrom."),
        wahl("Wie speichert ein Pumpspeicherkraftwerk Energie?", ["Es pumpt Wasser in ein hoch gelegenes Becken und lässt es bei Bedarf über Turbinen ablaufen", "Es lädt riesige Kondensatoren im Staudamm auf", "Es erwärmt Wasser und speichert die Wärme", "Es presst Luft in Druckbehälter unter dem Stausee"], 0, "Beim Hochpumpen wird elektrische Energie in Lageenergie (potenzielle Energie) umgewandelt – ein indirekter Speicher."),
        wahl("Was entsteht in einer Wasserstoff-Brennstoffzelle als Abgas?", ["Wasser(dampf)", "Kohlenstoffdioxid", "Stickoxide", "Methan"], 0, "Wasserstoff reagiert mit Sauerstoff zu Wasser; dabei entstehen elektrische Energie und Wärme."),
        eingabe("Wasserstoff, der mit Strom aus erneuerbaren Quellen durch Elektrolyse von Wasser hergestellt wird, nennt man ___ Wasserstoff.", ["grünen", "grüner", "grün"], "„Grüner“ Wasserstoff verursacht kein CO₂; „grauer“ Wasserstoff wird aus Erdgas gewonnen und setzt CO₂ frei."),
        zahl("Auf 10 m² Solarmodule treffen 1000 W je m² Sonnenstrahlung. Die Module haben 20 % Wirkungsgrad. Welche elektrische Leistung liefern sie? (in W)", 2000, "P_zu = 10 · 1000 W = 10 000 W; P_ab = 0,2 · 10 000 W = 2000 W = 2 kW.", "W"),
        wahl("Welcher Motor hat den höchsten Wirkungsgrad?", ["Elektromotor (über 90 %)", "Ottomotor (etwa 30 %)", "Dieselmotor (etwa 40 %)", "Dampfmaschine (unter 20 %)"], 0, "Verbrennungsmotoren verlieren den größten Teil der Energie als Abwärme, Elektromotoren setzen fast alles in Bewegung um."),
        wahl("Welches Gas entsteht bei der Verbrennung fossiler Brennstoffe und verstärkt den Treibhauseffekt am meisten?", ["Kohlenstoffdioxid (CO₂)", "Sauerstoff (O₂)", "Stickstoff (N₂)", "Wasserstoff (H₂)"], 0, "Kohle, Erdöl und Erdgas enthalten Kohlenstoff; bei der Verbrennung wird er zu CO₂, das Wärmestrahlung der Erde zurückhält."),
        wahl("Welche Anlage ist KEINE regenerative Energiequelle?", ["Gaskraftwerk", "Windkraftanlage", "Photovoltaikanlage", "Wasserkraftwerk"], 0, "Erdgas ist ein fossiler Brennstoff, der sich nicht nachbildet; Wind, Sonne und Wasser stehen dauerhaft zur Verfügung."),
        zahl("Eine Wärmepumpe nimmt 1 kWh elektrische Energie auf und gibt 4 kWh Wärme an das Haus ab. Wie viel kWh Wärme hat sie dabei der Umgebung (Luft, Erde) entnommen?", 3, "Energieerhaltung: 4 kWh Wärme = 1 kWh Strom + 3 kWh Umweltwärme.", "kWh"),
        wahl("Warum braucht ein Stromnetz mit viel Wind- und Solarstrom Energiespeicher?", ["Weil Wind und Sonne schwanken, die Verbraucher aber jederzeit Strom brauchen", "Weil Wind- und Solarstrom eine andere Frequenz haben", "Weil Solarstrom Gleichstrom ist und nur gespeichert ins Netz passt", "Weil Speicher den Strom billiger machen"], 0, "Erzeugung und Verbrauch müssen im Netz jederzeit übereinstimmen; Speicher gleichen Flauten und Nächte aus."),
      ],
    },
    {
      id: "halbleiter", kapitel: P4, titel: "Halbleiter: Diode, LED, Transistor, Solarzelle",
      kurz: "Leiter und Halbleiter, Dotierung, p-n-Übergang, Diode, LED, Fotodiode, Transistor, Solarzelle, Sensoren, Glasfaser",
      erklaerung: `<p><b>Halbleiter</b> wie Silicium leiten bei Raumtemperatur schlecht; ihre Leitfähigkeit steigt mit der Temperatur und mit Licht (bei Metallen ist es umgekehrt). Silicium hat <b>4 Außenelektronen</b>. Durch <b>Dotieren</b> baut man Fremdatome ein: Phosphor (5 Außenelektronen) liefert freie Elektronen → <b>n-Leiter</b>; Bor (3 Außenelektronen) erzeugt Elektronenlücken („Löcher“) → <b>p-Leiter</b>.</p>
<p>Eine <b>Diode</b> besteht aus einer p- und einer n-Schicht (<b>p-n-Übergang</b>). Sie lässt Strom nur in <b>Durchlassrichtung</b> fließen (Pluspol an p, Anode); in Sperrrichtung sperrt sie. Eine Silicium-Diode öffnet ab etwa 0,7 V. Vier Dioden als <b>Brückengleichrichter</b> machen aus Wechselspannung Gleichspannung.</p>
<p>Die <b>Leuchtdiode (LED)</b> ist eine Diode, die in Durchlassrichtung Licht aussendet; die Farbe hängt vom Halbleitermaterial ab. Sie braucht einen <b>Vorwiderstand</b>: R = (U − U<sub>LED</sub>) / I. Umgekehrt erzeugen <b>Fotodiode</b> und <b>Solarzelle</b> aus Licht Spannung (etwa 0,5–0,6 V je Zelle, Wirkungsgrad gut 20 %).</p>
<p>Der <b>Transistor</b> hat drei Anschlüsse: Basis, Kollektor, Emitter. Ein kleiner Basisstrom steuert einen großen Kollektorstrom – er arbeitet als <b>Schalter</b> oder <b>Verstärker</b>; Milliarden davon bilden einen Prozessor.</p>
<p><b>Sensoren:</b> Heißleiter (NTC) – Widerstand sinkt bei Erwärmung; Fotowiderstand (LDR) – Widerstand sinkt bei Licht; kapazitiver Touchscreen – der Finger verändert die elektrische Kapazität. <b>Mikrofon</b> wandelt Schall in Spannung (Induktion), <b>Lautsprecher</b> umgekehrt (Kraft auf die stromdurchflossene Spule im Magnetfeld). <b>Glasfasern</b> übertragen Daten als Lichtpulse durch Totalreflexion – schnell und störungsfrei.</p>`,
      aufgaben: [
        wahl("Wie viele Außenelektronen hat ein Silicium-Atom?", ["4", "2", "5", "8"], 0, "Silicium steht in der IV. Hauptgruppe; jedes Atom bindet sich mit vier Nachbarn – deshalb gibt es im reinen Kristall kaum freie Elektronen."),
        wahl("Wie verändert sich die Leitfähigkeit eines Halbleiters beim Erwärmen?", ["Sie nimmt zu, weil mehr Elektronen frei werden", "Sie nimmt ab wie bei Metallen", "Sie bleibt gleich", "Sie sinkt auf null"], 0, "Wärme löst Elektronen aus den Bindungen; bei Metallen stören die schwingenden Atome dagegen den Stromfluss, dort steigt der Widerstand."),
        wahl("Womit dotiert man Silicium, um einen n-Leiter zu erhalten?", ["Mit Atomen mit 5 Außenelektronen, z. B. Phosphor", "Mit Atomen mit 3 Außenelektronen, z. B. Bor", "Mit Edelgasen", "Mit Kupfer"], 0, "Das fünfte Außenelektron des Phosphors findet keinen Bindungspartner und ist frei beweglich (n = negativ)."),
        eingabe("Die Grenzschicht zwischen p- und n-dotiertem Halbleiter heißt ___-Übergang.", ["p-n", "pn", "p-n-Übergang", "pn-Übergang"], "Am p-n-Übergang entsteht eine Sperrschicht; sie macht die Diode zum elektrischen Ventil."),
        wahl("In welcher Richtung lässt eine Diode Strom fließen?", ["Nur in Durchlassrichtung: Pluspol an der p-Schicht (Anode)", "In beide Richtungen gleich", "Nur in Sperrrichtung: Pluspol an der n-Schicht", "Nur bei Wechselspannung"], 0, "In Durchlassrichtung werden Elektronen und Löcher zur Grenzschicht gedrückt und der Strom fließt; umgekehrt wird die Sperrschicht breiter."),
        zahl("Ab welcher Spannung (ungefähr, in V) beginnt eine Silicium-Diode in Durchlassrichtung zu leiten?", 0.7, "Die Schwellenspannung einer Si-Diode liegt bei etwa 0,7 V; darunter fließt praktisch kein Strom.", "V", 0.15),
        wahl("Welches Bauteil macht aus Wechselspannung eine pulsierende Gleichspannung?", ["Gleichrichter aus Dioden", "Transformator", "Elektromotor", "Fotowiderstand"], 0, "Ein Brückengleichrichter aus vier Dioden leitet beide Halbwellen in dieselbe Richtung."),
        zahl("Eine LED (U_LED = 2 V, I = 20 mA) wird an 9 V betrieben. Wie groß muss der Vorwiderstand sein? (in Ω)", 350, "Am Widerstand fallen 9 V − 2 V = 7 V ab; R = U / I = 7 V / 0,02 A = 350 Ω.", "Ω", 1),
        wahl("Wovon hängt die Farbe des Lichts einer LED ab?", ["Vom Halbleitermaterial und seiner Dotierung", "Von der Stromstärke", "Von der Farbe des Gehäuses allein", "Von der Länge der Anschlussdrähte"], 0, "Die Energie, die beim Zusammentreffen von Elektron und Loch frei wird, bestimmt die Wellenlänge – sie ist vom Material festgelegt."),
        wahl("Was macht eine Solarzelle?", ["Sie wandelt Licht direkt in elektrische Energie um", "Sie speichert Sonnenwärme in Wasser", "Sie wandelt Wärme in Strom um", "Sie erzeugt Licht aus Strom"], 0, "Licht löst im p-n-Übergang Elektronen aus; es entsteht eine Spannung von etwa 0,5–0,6 V je Zelle (innerer Fotoeffekt)."),
        { t: "paare", f: "Ordne die Anschlüsse und Bauteile zu", p: [["Transistor", "Basis, Kollektor, Emitter"], ["Diode", "Anode und Kathode"], ["Heißleiter (NTC)", "Widerstand sinkt beim Erwärmen"], ["Fotowiderstand (LDR)", "Widerstand sinkt bei Licht"]] },
        wahl("Wie arbeitet ein Transistor als Verstärker?", ["Ein kleiner Basisstrom steuert einen viel größeren Kollektorstrom", "Er erhöht die Spannung wie ein Transformator", "Er speichert Ladung wie ein Kondensator", "Er wandelt Gleich- in Wechselstrom um"], 0, "Der Basisstrom öffnet den Weg zwischen Kollektor und Emitter; kleine Signale steuern so große Ströme – Grundlage für Schalter und Verstärker."),
        wahl("Wie wandelt ein dynamisches Mikrofon Schall in ein elektrisches Signal um?", ["Die Membran bewegt eine Spule im Magnetfeld – Induktion erzeugt eine Spannung", "Die Membran erwärmt einen Halbleiter", "Der Schall ändert die Farbe einer LED", "Die Membran drückt auf eine Batterie"], 0, "Bewegte Spule im Magnetfeld → induzierte Spannung im Takt des Schalls. Der Lautsprecher nutzt dasselbe Prinzip rückwärts."),
        wahl("Wie werden Daten in einer Glasfaser übertragen?", ["Als Lichtpulse, die durch Totalreflexion in der Faser bleiben", "Als Funkwellen in einem Glasrohr", "Als elektrischer Strom durch das Glas", "Als Schallwellen im Glas"], 0, "Das Licht trifft so flach auf die Faserwand, dass es vollständig reflektiert wird; Glasfasern sind schnell und unempfindlich gegen elektromagnetische Störungen."),
        { t: "reihenfolge", f: "Ordne die elektromagnetischen Wellen von der größten zur kleinsten Wellenlänge", items: ["Radiowellen", "Mikrowellen", "Infrarot", "sichtbares Licht", "Ultraviolett", "Röntgenstrahlung"] },
        wahl("Wie erkennt ein kapazitiver Touchscreen die Berührung?", ["Der Finger verändert die elektrische Kapazität an der Berührungsstelle", "Der Finger drückt zwei Folien zusammen", "Der Finger erwärmt den Bildschirm", "Der Finger unterbricht einen Lichtstrahl"], 0, "Der leitfähige Finger zieht Ladung ab; die Elektronik misst, wo sich die Kapazität ändert."),
        eingabe("Aus Quarzsand (Siliciumdioxid) wird hochreines Silicium gewonnen und zu dünnen Scheiben, den ___, geschnitten, auf denen Chips entstehen.", ["Wafern", "Wafer"], "Ein Wafer ist eine wenige Zehntelmillimeter dünne Scheibe aus einem Silicium-Einkristall."),
        wahl("Welcher Sensor eignet sich, um die Temperatur elektrisch zu messen?", ["Heißleiter (NTC-Widerstand)", "Fotowiderstand (LDR)", "Leuchtdiode", "Lautsprecher"], 0, "Beim NTC sinkt der Widerstand mit steigender Temperatur – aus dem Widerstand lässt sich die Temperatur ablesen."),
      ],
    },
  );
})();
