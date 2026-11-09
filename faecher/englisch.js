// Lernwelt – Fach Englisch: Unit Australia (Camden Market 9, Theme 1) + allgemeine Grammatik/Wortschatz (englisch_allgemein.js)
"use strict";
(function () {
  const karten = (liste, lang) => liste.map((v) => ({ t: "karte", vorne: v.en, hinten: v.de, bsp: v.bsp, lang }));
  const wahl = (liste) => liste.map((q) => ({ t: "wahl", f: q.f, a: q.a, r: q.r, info: q.info || "" }));
  const australien = [
    {
      id: "aus-vokabeln", titel: "Australia: Vokabeln (Buchliste)", kurz: `Camden Market 9, Theme 1, S. 261–265 – ${window.VOKABELN.length} Wörter`,
      erklaerung: `<p>Die komplette Wortliste zu Theme 1 „Down under“. Lerne zuerst mit den <b>Karteikarten</b> (anhören, umdrehen, „Kann ich“ / „Noch nicht“), dann teste dich in der Übungsrunde: Dort musst du die englischen Wörter <b>tippen</b> oder die richtige Bedeutung wählen.</p><p>Tipp: Verben mit <i>to</i> lernen (<i>to seek – sought – sought</i>), bei Nomen Mehrzahl und „no pl“ beachten.</p>`,
      aufgaben: karten(window.VOKABELN, "en-AU"),
    },
    {
      id: "aus-zusatz", titel: "Australia: Zusatzwörter", kurz: `${window.ZUSATZ.length} weitere Wörter zu Natur, Kultur, Reisen (nicht aus dem Buch)`,
      erklaerung: `<p>Diese Wörter stehen nicht in der Buchliste, kommen aber in Texten zu Australien oft vor – gut für Leseverstehen und eigene Texte.</p>`,
      aufgaben: karten(window.ZUSATZ, "en-AU"),
    },
    {
      id: "aus-woerter", titel: "Falsche Freunde & Umschreibungen", kurz: "sensible ≠ sensibel; englische Erklärung → Wort",
      erklaerung: `<p><b>Falsche Freunde</b> sehen deutsch aus, bedeuten aber etwas anderes: <i>sensible</i> = vernünftig, <i>also</i> = auch, <i>arm</i> = der Arm, <i>become</i> = werden (nicht bekommen), <i>actual</i> = tatsächlich (nicht aktuell), <i>gift</i> = Geschenk.</p><p><b>Umschreiben:</b> Wenn dir ein Wort fehlt, erkläre es auf Englisch: <i>It's a thing you use for … / a person who … / a place where …</i></p>`,
      aufgaben: wahl(window.FALSCHE_FREUNDE).concat(wahl(window.DEFINITIONEN.map((q) => ({ ...q, f: `What is “${q.f}”?`, info: `“${q.a[q.r]}” = ${q.f}` })))),
      lang: "en-GB",
    },
    {
      id: "aus-quiz", titel: "Australia: Landeskunde", kurz: "Geschichte, Natur, Aboriginal Australians, Leben im Outback",
      erklaerung: `<p>Was du über Australien wissen solltest: Kontinent und Land (Commonwealth of Australia, Hauptstadt <b>Canberra</b>), sechs Bundesstaaten und zwei Territorien, Great Barrier Reef, Outback, Uluru. Geschichte: Aboriginal Australians seit über 60 000 Jahren, James Cook 1770, First Fleet mit Sträflingen 1788, Goldrausch 1851, Bundesstaat 1901, Stolen Generations, Entschuldigung 2008 (Kevin Rudd). Kultur: Dreaming, Baker Boy, Rabbit-Proof Fence.</p>`,
      aufgaben: wahl(window.QUIZ),
    },
    ...window.GRAMMATIK.map((g, k) => ({
      id: "aus-gram" + k, titel: g.titel, kurz: "Lückensätze zum Thema Australien",
      erklaerung: `<p>${g.regel}</p>`,
      aufgaben: g.aufgaben.map((a) => ({ t: "eingabe", f: a.s, l: a.l, tippfehler: false })),
    })),
    {
      id: "aus-lesen", titel: "Leseverstehen: Wirrawarra Station", kurz: "Text lesen, 7 Fragen beantworten",
      erklaerung: `<h3>${window.LESETEXT.titel}</h3>${window.LESETEXT.text}<p><b>Zum Aufschreiben:</b></p><ol>${window.LESETEXT.offen.map((o) => `<li>${o}</li>`).join("")}</ol>`,
      vorText: `<details class="textauf"><summary>Text noch mal ansehen</summary><div class="erkl">${window.LESETEXT.text}</div></details>`,
      aufgaben: wahl(window.LESETEXT.fragen),
    },
    {
      id: "aus-schreiben", titel: "Schreiben: Textsorten & Bausteine", kurz: "E-Mail, Vergleich, Mediation – Aufbau und Formulierungen",
      erklaerung: window.SCHREIBEN.map((s) => `<p><b>${s.titel}</b><br><i>${s.aufgabe}</i></p><ul>${s.tipps.map((t) => `<li>${t}</li>`).join("")}</ul>`).join(""),
      aufgaben: [
        { t: "reihenfolge", f: "Aufbau einer E-Mail an einen Freund", items: ["Hi Tom,", "Thanks for your last e-mail. I'm fine – and you?", "Guess what – I have already seen the Opera House!", "Next weekend we're going to visit Uluru.", "Write back soon! Love, Jakob"] },
        { t: "reihenfolge", f: "Aufbau eines Vergleichs (comparison)", items: ["Introduction: what you compare", "Life in Sydney", "Life in the outback", "Your opinion with reasons"] },
        { t: "paare", f: "Welches Wort verbindet?", p: [["Gegensatz", "however"], ["Zusatz", "in addition"], ["Grund", "because"], ["Folge", "therefore"], ["Beispiel", "for example"]] },
        { t: "paare", f: "Meinung ausdrücken", p: [["In my opinion …", "Meiner Meinung nach …"], ["I would prefer to …", "Ich würde lieber …"], ["On the one hand …", "Einerseits …"], ["To sum up …", "Zusammenfassend …"]] },
        { t: "wahl", f: "Which tense do you use for plans in an e-mail? “Next weekend we ___ Uluru.”", a: ["are going to visit", "visited", "have visited", "visit yesterday"], r: 0, info: "going-to-future für Pläne und Absichten." },
        { t: "wahl", f: "Which tense fits? “I ___ already ___ the Opera House.”", a: ["have … seen", "am … seeing", "did … see", "will … see"], r: 0, info: "Present perfect mit already für Erlebtes ohne genaue Zeitangabe." },
        { t: "wahl", f: "What does “mediation” mean?", a: ["explaining the main points of a text in the other language", "translating word for word", "writing a poem", "reading aloud"], r: 0, info: "Bei der Sprachmittlung nur das Wichtigste sinngemäß wiedergeben." },
        { t: "wahl", f: "Good ending for an informal e-mail?", a: ["Write back soon! Love, Mia", "Yours faithfully", "To whom it may concern", "Dear Sir or Madam"], r: 0, info: "Yours faithfully / Dear Sir or Madam gehören in formelle Briefe." },
        { t: "wahl", f: "Which sentence is an if-clause type II (unreal)?", a: ["If I lived in the outback, I would miss my friends.", "If it rains, we stay at home.", "If I had known, I would have come.", "I live in the outback."], r: 0, info: "Typ II: if + simple past, would + Infinitiv." },
        { t: "eingabe", f: "Complete the comparison: Sydney is much ___ (big) than Alice Springs.", l: ["bigger"], info: "Einsilbige Adjektive: -er; Konsonant verdoppeln (big – bigger)." },
        { t: "eingabe", f: "Complete: The outback is ___ (exciting) than the city – at least for Mia.", l: ["more exciting"], info: "Mehrsilbige Adjektive: more + Adjektiv." },
        { t: "eingabe", f: "Complete: I feel a bit ___ (Heimweh habend), but my host family is great.", l: ["homesick"], info: "homesick = Heimweh haben; to be/feel homesick." },
      ],
    },
  ];
  const allgemein = window.ENGLISCH_ALLGEMEIN || [];
  window.FAECHER.push({
    id: "englisch", name: "Englisch", icon: "🇬🇧", farbe: "#c4572e", lang: "en-GB",
    beschreibung: "Australia (Unit 1), Grammatik, Vokabeln, Textsorten",
    themen: australien.concat(allgemein),
  });
})();
