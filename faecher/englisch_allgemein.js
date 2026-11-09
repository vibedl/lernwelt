"use strict";
// Englisch allgemein (Klasse 9, NRW) – Grammatik, Wortschatz, Sprachmittlung.
// Diese Datei legt KEIN eigenes Fach an, sondern liefert Themen, die an das Fach „englisch“ angehängt werden.
// Aufgaben auf Englisch, Erklärungen auf Deutsch, Lösungen auf Englisch (britisches Englisch).

// ---------------------------------------------------------------------------
// Unregelmäßige Verben für den Generator: [Infinitiv, Simple Past, Past Participle, Deutsch]
// Mehrere gültige Formen mit „/“ getrennt.
// ---------------------------------------------------------------------------
const IRREGULAR_VERBS = [
  ["be", "was/were", "been", "sein"],
  ["become", "became", "become", "werden"],
  ["begin", "began", "begun", "beginnen"],
  ["break", "broke", "broken", "zerbrechen"],
  ["bring", "brought", "brought", "bringen"],
  ["build", "built", "built", "bauen"],
  ["buy", "bought", "bought", "kaufen"],
  ["catch", "caught", "caught", "fangen"],
  ["choose", "chose", "chosen", "wählen, aussuchen"],
  ["come", "came", "come", "kommen"],
  ["cost", "cost", "cost", "kosten"],
  ["cut", "cut", "cut", "schneiden"],
  ["do", "did", "done", "tun"],
  ["draw", "drew", "drawn", "zeichnen"],
  ["drink", "drank", "drunk", "trinken"],
  ["drive", "drove", "driven", "fahren (Auto)"],
  ["eat", "ate", "eaten", "essen"],
  ["fall", "fell", "fallen", "fallen"],
  ["feel", "felt", "felt", "fühlen"],
  ["find", "found", "found", "finden"],
  ["fly", "flew", "flown", "fliegen"],
  ["forget", "forgot", "forgotten", "vergessen"],
  ["forgive", "forgave", "forgiven", "vergeben, verzeihen"],
  ["get", "got", "got/gotten", "bekommen"],
  ["give", "gave", "given", "geben"],
  ["go", "went", "gone", "gehen"],
  ["grow", "grew", "grown", "wachsen"],
  ["have", "had", "had", "haben"],
  ["hear", "heard", "heard", "hören"],
  ["hide", "hid", "hidden", "verstecken"],
  ["hit", "hit", "hit", "schlagen, treffen (Ziel)"],
  ["hold", "held", "held", "halten"],
  ["keep", "kept", "kept", "behalten"],
  ["know", "knew", "known", "wissen, kennen"],
  ["leave", "left", "left", "verlassen, weggehen"],
  ["lend", "lent", "lent", "verleihen"],
  ["let", "let", "let", "lassen"],
  ["lose", "lost", "lost", "verlieren"],
  ["make", "made", "made", "machen, herstellen"],
  ["meet", "met", "met", "treffen (Person)"],
  ["pay", "paid", "paid", "bezahlen"],
  ["put", "put", "put", "legen, stellen"],
  ["read", "read", "read", "lesen"],
  ["ride", "rode", "ridden", "reiten, Rad fahren"],
  ["ring", "rang", "rung", "klingeln"],
  ["run", "ran", "run", "laufen, rennen"],
  ["say", "said", "said", "sagen"],
  ["see", "saw", "seen", "sehen"],
  ["sell", "sold", "sold", "verkaufen"],
  ["send", "sent", "sent", "schicken"],
  ["shoot", "shot", "shot", "schießen"],
  ["shut", "shut", "shut", "schließen, zumachen"],
  ["sing", "sang", "sung", "singen"],
  ["sit", "sat", "sat", "sitzen"],
  ["sleep", "slept", "slept", "schlafen"],
  ["speak", "spoke", "spoken", "sprechen"],
  ["spend", "spent", "spent", "ausgeben, verbringen"],
  ["stand", "stood", "stood", "stehen"],
  ["steal", "stole", "stolen", "stehlen"],
  ["swim", "swam", "swum", "schwimmen"],
  ["take", "took", "taken", "nehmen"],
  ["teach", "taught", "taught", "unterrichten"],
  ["tell", "told", "told", "erzählen"],
  ["think", "thought", "thought", "denken"],
  ["throw", "threw", "thrown", "werfen"],
  ["understand", "understood", "understood", "verstehen"],
  ["wake", "woke", "woken", "aufwachen"],
  ["wear", "wore", "worn", "tragen (Kleidung)"],
  ["win", "won", "won", "gewinnen"],
  ["write", "wrote", "written", "schreiben"]
];

function irregularAufgabe(rng) {
  const v = rng.pick(IRREGULAR_VERBS);
  const inf = v[0];
  const past = v[1].split("/");
  const pp = v[2].split("/");
  const de = v[3];
  const alle = inf + " – " + v[1].replace("/", " / ") + " – " + v[2].replace("/", " / ") + " (" + de + ")";
  const info = "Die drei Formen lauten: " + alle + ".";
  const art = rng.int(0, 2);
  if (art === 0) {
    return { t: "eingabe", f: "What is the simple past of '" + inf + "'?", l: past.concat(past.length > 1 ? [v[1]] : []), info };
  }
  if (art === 1) {
    return { t: "eingabe", f: "What is the past participle of '" + inf + "'?", l: pp.concat(pp.length > 1 ? [v[2]] : []), info };
  }
  return { t: "eingabe", f: "Which English verb means '" + de + "'? Write the infinitive.", l: [inf, "to " + inf], info };
}

// ---------------------------------------------------------------------------
// Themen
// ---------------------------------------------------------------------------
const THEMEN = [
  // -------------------------------------------------------------------------
  {
    id: "zeiten",
    titel: "Tenses – die Zeitformen",
    kurz: "Simple present/progressive, simple past/present perfect, past progressive, past perfect, will/going-to",
    erklaerung: `<p>Die englischen Zeiten sagen dir nicht nur <b>wann</b> etwas passiert, sondern auch <b>wie</b> du es siehst: als Gewohnheit, als laufende Handlung, als abgeschlossen oder als Ergebnis bis heute.</p>
<ul>
<li><b>Simple present</b> (he goes): Gewohnheiten, Fakten, Fahrpläne. Signalwörter: always, usually, every day, often, never. Achtung: <i>he/she/it + -s</i>.</li>
<li><b>Present progressive</b> (he is going): passiert gerade jetzt oder ist für die nahe Zukunft fest verabredet. Signalwörter: now, at the moment, Look!, Listen!</li>
<li><b>Simple past</b> (he went): abgeschlossene Handlung in der Vergangenheit mit Zeitangabe. Signalwörter: yesterday, last week, ago, in 2010.</li>
<li><b>Present perfect</b> (he has gone): Handlung mit Bezug zur Gegenwart, Zeitpunkt egal oder bis jetzt andauernd. Signalwörter: since, for, already, just, yet, ever, never, so far.</li>
<li><b>Past progressive</b> (he was going): Hintergrundhandlung in der Vergangenheit, die von etwas unterbrochen wird (while, when).</li>
<li><b>Past perfect</b> (he had gone): Vorvergangenheit – was <i>vor</i> einer anderen Vergangenheitshandlung passiert war (before, after, by the time, already).</li>
<li><b>Will-future</b> (he will go): spontane Entscheidung, Vermutung, Versprechen. <b>Going-to</b> (he is going to go): fester Plan oder sichtbare Anzeichen (Look at those clouds!).</li>
</ul>
<p>Typischer Fehler: <i>I live here since 2015</i> – mit since/for brauchst du das present perfect: <i>I have lived here since 2015</i>.</p>`,
    aufgaben: [
      { t: "eingabe", f: "She ___ (go) to school every day.", l: ["goes"], info: "Gewohnheit mit every day → simple present, 3. Person Singular mit -s." },
      { t: "eingabe", f: "Look! The children ___ (play) football in the garden.", l: ["are playing"], info: "Look! zeigt: Es passiert gerade jetzt → present progressive." },
      { t: "eingabe", f: "We ___ (visit) our grandparents last weekend.", l: ["visited"], info: "last weekend ist eine abgeschlossene Zeitangabe → simple past." },
      { t: "eingabe", f: "I ___ (never / be) to Scotland.", l: ["have never been", "'ve never been"], info: "never + Lebenserfahrung bis heute → present perfect: have never been." },
      { t: "eingabe", f: "While I ___ (do) my homework, the phone rang.", l: ["was doing"], info: "while leitet die längere Hintergrundhandlung ein → past progressive." },
      { t: "eingabe", f: "When we arrived at the cinema, the film ___ (already / start).", l: ["had already started"], info: "Der Film begann vor unserer Ankunft → Vorvergangenheit, past perfect." },
      { t: "eingabe", f: "Look at those clouds! It ___ (rain).", l: ["is going to rain", "'s going to rain"], info: "Sichtbare Anzeichen (Wolken) → going-to-future." },
      { t: "eingabe", f: "I think it ___ (be) sunny tomorrow.", l: ["will be", "'ll be"], info: "I think + Vermutung über die Zukunft → will-future." },
      { t: "eingabe", f: "Tom ___ (not / like) horror films.", l: ["does not like", "doesn't like"], info: "Verneinung im simple present mit does not / doesn't + Grundform (ohne -s!)." },
      { t: "eingabe", f: "They ___ (live) here since 2015.", l: ["have lived", "'ve lived", "have been living", "'ve been living"], info: "since zeigt einen Zeitraum bis heute → present perfect (simple oder progressive)." },
      { t: "eingabe", f: "Yesterday she ___ (buy) a new phone.", l: ["bought"], info: "yesterday → simple past; buy ist unregelmäßig: bought." },
      { t: "eingabe", f: "I ___ (not / see) him yet.", l: ["have not seen", "haven't seen"], info: "yet in der Verneinung ist ein Signalwort für das present perfect." },
      { t: "eingabe", f: "By the time the bus came, we ___ (wait) for an hour.", l: ["had waited", "had been waiting", "'d waited", "'d been waiting"], info: "Das Warten lag vor dem Kommen des Busses → past perfect (simple oder progressive)." },
      { t: "eingabe", f: "At 8 o'clock yesterday I ___ (watch) TV.", l: ["was watching"], info: "Ein genauer Zeitpunkt in der Vergangenheit, an dem etwas gerade lief → past progressive." },
      { t: "wahl", f: "Which sentence is correct?", a: ["I have lived here since 2019.", "I live here since 2019.", "I am living here since 2019.", "I lived here since 2019."], r: 0, info: "since + Zeitpunkt verlangt das present perfect, weil die Handlung bis heute andauert." },
      { t: "wahl", f: "Which tenses are used? 'She was reading when the lights went out.'", a: ["Past progressive + simple past", "Simple past + past perfect", "Present perfect + simple past", "Past perfect + past progressive"], r: 0, info: "Die längere Handlung (was reading) steht im past progressive, die kurze Unterbrechung (went out) im simple past." },
      { t: "wahl", f: "'We ___ to Spain next week. Everything is booked.'", a: ["are going to fly", "will fly", "fly", "flew"], r: 0, info: "Ein fester, schon organisierter Plan → going-to-future (auch present progressive wäre möglich)." },
      { t: "wahl", f: "'The phone is ringing.' – 'OK, I ___ answer it.'", a: ["will", "am going to", "am", "was"], r: 0, info: "Eine spontane Entscheidung im Moment des Sprechens → will-future." },
      { t: "wahl", f: "Which question is correct?", a: ["Have you ever eaten sushi?", "Did you ever eaten sushi?", "Have you eat sushi yesterday?", "Has you eaten sushi?"], r: 0, info: "ever + Lebenserfahrung → present perfect: have + past participle (eaten); you verlangt have, nicht has." },
      { t: "wahl", f: "'Water ___ at 100 degrees Celsius.'", a: ["boils", "is boiling", "boiled", "has boiled"], r: 0, info: "Allgemeine Wahrheiten und Naturgesetze stehen im simple present." },
      { t: "paare", f: "Match the signal words with the tense.", p: [["yesterday", "simple past"], ["since", "present perfect"], ["every day", "simple present"], ["at the moment", "present progressive"], ["tomorrow", "will-future"]] },
      { t: "paare", f: "Match more signal words with the tense.", p: [["two days ago", "simple past"], ["already", "present perfect"], ["usually", "simple present"], ["Look!", "present progressive"]] },
      { t: "reihenfolge", f: "Put the words in the right order to make a sentence.", items: ["She", "has been", "learning", "English", "for five years."] },
      { t: "reihenfolge", f: "Put the words in the right order (past perfect).", items: ["When I got home,", "my brother", "had already", "eaten", "all the pizza."] }
    ]
  },

  // -------------------------------------------------------------------------
  {
    id: "ifclauses",
    titel: "If-clauses – Bedingungssätze",
    kurz: "Typ I, II, III (und Typ 0) erkennen und bilden",
    erklaerung: `<p>Ein if-clause besteht aus einem <b>Bedingungssatz</b> (if ...) und einem <b>Hauptsatz</b>. Welcher Typ gebraucht wird, hängt davon ab, wie wahrscheinlich die Bedingung ist.</p>
<table>
<tr><th>Typ</th><th>if-Satz</th><th>Hauptsatz</th><th>Bedeutung</th></tr>
<tr><td>0</td><td>simple present</td><td>simple present</td><td>allgemeine Wahrheit: If you heat ice, it melts.</td></tr>
<tr><td>I</td><td>simple present</td><td>will-future</td><td>wahrscheinlich, Zukunft: If it rains, we will stay at home.</td></tr>
<tr><td>II</td><td>simple past</td><td>would + Infinitiv</td><td>unwahrscheinlich/unrealistisch, Gegenwart: If I had a dog, I would walk it.</td></tr>
<tr><td>III</td><td>past perfect</td><td>would have + past participle</td><td>Vergangenheit, nicht mehr änderbar: If I had known, I would have come.</td></tr>
</table>
<p>Merke: <b>Nie would im if-Satz!</b> (Falsch: <i>If I would have time ...</i>) Bei Typ II darf <i>were</i> für alle Personen stehen: <i>If I were you ...</i>. Der if-Satz kann vorne oder hinten stehen; steht er vorne, kommt ein Komma. <i>Unless</i> bedeutet <i>if not</i>.</p>`,
    aufgaben: [
      { t: "eingabe", f: "If it rains tomorrow, we ___ (stay) at home.", l: ["will stay", "'ll stay"], info: "Typ I: if + simple present, Hauptsatz mit will-future." },
      { t: "eingabe", f: "If I ___ (have) more time, I would learn Spanish.", l: ["had"], info: "Typ II: Der Hauptsatz hat would, also steht im if-Satz das simple past." },
      { t: "eingabe", f: "If she had studied harder, she ___ (pass) the exam.", l: ["would have passed", "'d have passed", "would've passed"], info: "Typ III: if + past perfect, Hauptsatz would have + past participle." },
      { t: "eingabe", f: "If you ___ (heat) ice, it melts.", l: ["heat"], info: "Typ 0: Naturgesetz, beide Teile im simple present." },
      { t: "eingabe", f: "If I were you, I ___ (not / buy) that car.", l: ["would not buy", "wouldn't buy"], info: "Typ II (If I were you ...): Hauptsatz mit would not / wouldn't + Infinitiv." },
      { t: "eingabe", f: "We would have missed the train if we ___ (not / run).", l: ["had not run", "hadn't run"], info: "Typ III: Der Hauptsatz hat would have missed, also past perfect im if-Satz." },
      { t: "eingabe", f: "If he ___ (call) me tonight, I will tell him the news.", l: ["calls"], info: "Typ I: simple present im if-Satz, auch bei Zukunftsbedeutung; 3. Person mit -s." },
      { t: "eingabe", f: "If they ___ (be) richer, they would travel more.", l: ["were"], info: "Typ II: simple past; bei be steht in if-Sätzen meist were." },
      { t: "eingabe", f: "If I ___ (know) about the party, I would have come.", l: ["had known", "'d known"], info: "Typ III: Vergangenheit, nicht mehr änderbar → past perfect im if-Satz." },
      { t: "eingabe", f: "You ___ (get) a better mark if you check your spelling.", l: ["will get", "'ll get"], info: "Typ I: Der if-Satz steht hinten im simple present, der Hauptsatz im will-future." },
      { t: "eingabe", f: "If we lived by the sea, we ___ (go) swimming every day.", l: ["would go", "'d go"], info: "Typ II: unrealistische Vorstellung → would + Infinitiv." },
      { t: "eingabe", f: "Unless you ___ (hurry), you will be late.", l: ["hurry"], info: "unless = if not; danach wie bei Typ I das simple present." },
      { t: "wahl", f: "Which type? 'If I had a dog, I would walk it every morning.'", a: ["Typ II", "Typ I", "Typ III", "Typ 0"], r: 0, info: "simple past + would → Typ II, eine unrealistische Vorstellung in der Gegenwart." },
      { t: "wahl", f: "Which type? 'If you press this button, the light goes on.'", a: ["Typ 0", "Typ I", "Typ II", "Typ III"], r: 0, info: "simple present in beiden Teilen → Typ 0, es passiert immer so." },
      { t: "wahl", f: "Which type? 'If she had left earlier, she wouldn't have been late.'", a: ["Typ III", "Typ II", "Typ I", "Typ 0"], r: 0, info: "past perfect + would have → Typ III, die Vergangenheit lässt sich nicht mehr ändern." },
      { t: "wahl", f: "Which type? 'If it snows, school will be closed.'", a: ["Typ I", "Typ II", "Typ III", "Typ 0"], r: 0, info: "simple present + will → Typ I, eine realistische Bedingung in der Zukunft." },
      { t: "wahl", f: "Which sentence is correct?", a: ["If I won the lottery, I would buy a house.", "If I would win the lottery, I would buy a house.", "If I win the lottery, I would buy a house.", "If I won the lottery, I will buy a house."], r: 0, info: "Typ II: simple past im if-Satz, would im Hauptsatz; would steht nie im if-Satz." },
      { t: "wahl", f: "Which sentence is correct (type I)?", a: ["If you don't hurry, you will miss the bus.", "If you won't hurry, you will miss the bus.", "If you didn't hurry, you will miss the bus.", "If you don't hurry, you would miss the bus."], r: 0, info: "Typ I: Im if-Satz steht das simple present (auch verneint), im Hauptsatz will." },
      { t: "wahl", f: "Welche Aussage über Typ II stimmt?", a: ["Die Bedingung ist unwahrscheinlich oder unrealistisch und bezieht sich auf die Gegenwart.", "Die Bedingung ist wahrscheinlich und liegt in der Zukunft.", "Die Bedingung lag in der Vergangenheit und ist nicht mehr änderbar.", "Es geht um eine allgemeine Wahrheit."], r: 0, info: "Typ II beschreibt Wunschvorstellungen oder unwahrscheinliche Fälle in der Gegenwart (If I were rich ...)." },
      { t: "paare", f: "Match the type with its form.", p: [["Typ 0", "if + simple present, simple present"], ["Typ I", "if + simple present, will-future"], ["Typ II", "if + simple past, would + infinitive"], ["Typ III", "if + past perfect, would have + past participle"]] },
      { t: "reihenfolge", f: "Put the words in the right order.", items: ["If I", "had known", "about the test,", "I would have", "studied more."] },
      { t: "reihenfolge", f: "Put the words in the right order (type 0).", items: ["If you", "mix", "blue and yellow,", "you get", "green."] }
    ]
  },

  // -------------------------------------------------------------------------
  {
    id: "passiv",
    titel: "Passive – das Passiv",
    kurz: "Passiv in allen Zeiten, Aktiv → Passiv umformen, by-agent",
    erklaerung: `<p>Im <b>Passiv</b> steht nicht der Täter im Mittelpunkt, sondern das, <b>womit etwas geschieht</b>. Du bildest es immer gleich: <b>Form von be + past participle</b> (3. Verbform). Nur <i>be</i> ändert die Zeit, das past participle bleibt.</p>
<ul>
<li>simple present: <i>Cheese <b>is made</b> from milk.</i></li>
<li>simple past: <i>The tower <b>was built</b> in 1889.</i></li>
<li>present perfect: <i>My bike <b>has been stolen</b>.</i></li>
<li>past perfect: <i>The car <b>had been repaired</b>.</i></li>
<li>will-future: <i>The results <b>will be announced</b> tomorrow.</i></li>
<li>mit Modalverb: <i>This <b>can be solved</b>. The rules <b>must be followed</b>.</i></li>
<li>progressive: <i>The windows <b>are being cleaned</b>.</i></li>
</ul>
<p><b>Umformung Aktiv → Passiv:</b> Das Objekt des Aktivsatzes wird Subjekt. <i>Shakespeare wrote Hamlet.</i> → <i>Hamlet was written by Shakespeare.</i> Den Täter nennst du nur mit <b>by</b>, wenn er wichtig ist; <i>by people, by someone, by them</i> lässt man weg. Bei zwei Objekten wird im Englischen meist die Person Subjekt: <i>They gave her a prize.</i> → <i>She was given a prize.</i></p>
<p>Typischer Fehler: das past participle vergessen (<i>was build</i> statt <i>was built</i>).</p>`,
    aufgaben: [
      { t: "eingabe", f: "Cheese ___ (make) from milk.", l: ["is made"], info: "Allgemeine Tatsache → simple present passive: is + made." },
      { t: "eingabe", f: "The Eiffel Tower ___ (build) in 1889.", l: ["was built"], info: "in 1889 → simple past passive: was + built." },
      { t: "eingabe", f: "The homework ___ (not / finish) yet.", l: ["has not been finished", "hasn't been finished"], info: "yet → present perfect passive: has not been + finished." },
      { t: "eingabe", f: "The new bridge ___ (open) next year.", l: ["will be opened"], info: "next year → will-future passive: will be + opened." },
      { t: "eingabe", f: "This problem ___ (can / solve) easily.", l: ["can be solved"], info: "Modalverb + be + past participle: can be solved." },
      { t: "eingabe", f: "The windows ___ (clean) at the moment.", l: ["are being cleaned"], info: "at the moment → present progressive passive: are being + cleaned." },
      { t: "eingabe", f: "The thief ___ (catch) by the police last night.", l: ["was caught"], info: "last night → simple past passive; catch ist unregelmäßig: caught." },
      { t: "eingabe", f: "Many letters ___ (write) every day.", l: ["are written"], info: "every day → simple present passive, Plural: are + written." },
      { t: "eingabe", f: "The car ___ (repair) before we got there.", l: ["had been repaired"], info: "Es passierte vor unserer Ankunft → past perfect passive: had been + repaired." },
      { t: "eingabe", f: "The rules ___ (must / follow).", l: ["must be followed"], info: "must + be + past participle: must be followed." },
      { t: "eingabe", f: "Passive with two objects: 'They gave her a prize.' → 'She ___ a prize.'", l: ["was given"], info: "Die Person wird Subjekt: She was given a prize (simple past passive)." },
      { t: "eingabe", f: "Rewrite in the passive: 'Shakespeare wrote Hamlet.'", l: ["Hamlet was written by Shakespeare.", "Hamlet was written by Shakespeare"], info: "Objekt Hamlet wird Subjekt; was written; der Täter ist wichtig → by Shakespeare." },
      { t: "eingabe", f: "Rewrite in the passive: 'They speak English in Australia.'", l: ["English is spoken in Australia.", "English is spoken in Australia by them.", "In Australia English is spoken."], info: "simple present passive: is spoken; 'by them' ist unwichtig und fällt weg." },
      { t: "eingabe", f: "Rewrite in the passive: 'Someone has stolen my bike.'", l: ["My bike has been stolen.", "My bike has been stolen by someone."], info: "present perfect passive: has been stolen; 'by someone' lässt man weg." },
      { t: "eingabe", f: "Rewrite in the passive: 'The teacher will check the tests.'", l: ["The tests will be checked by the teacher.", "The tests will be checked."], info: "will-future passive: will be checked; der Täter (the teacher) kann genannt werden." },
      { t: "eingabe", f: "Rewrite in the passive: 'You can buy tickets online.'", l: ["Tickets can be bought online.", "Tickets can be bought online by you."], info: "Modalverb: can be bought; das allgemeine 'you' fällt weg." },
      { t: "eingabe", f: "Rewrite in the passive: 'My mum is cooking dinner.'", l: ["Dinner is being cooked by my mum.", "Dinner is being cooked."], info: "present progressive passive: is being cooked." },
      { t: "wahl", f: "Which sentence is in the passive?", a: ["The letter was sent yesterday.", "She sent the letter yesterday.", "They are sending letters.", "He has sent a letter."], r: 0, info: "Nur hier steht eine Form von be + past participle (was sent)." },
      { t: "wahl", f: "Wann nennst du den Täter mit by?", a: ["Nur wenn er wichtig oder interessant ist (z. B. by Shakespeare); by people / by someone lässt man weg.", "Immer, sonst ist der Passivsatz falsch.", "Nie, im Passiv gibt es keinen Täter.", "Nur in Fragen."], r: 0, info: "Das Passiv benutzt man gerade, weil der Täter unwichtig oder unbekannt ist; nur ein wichtiger Täter wird mit by genannt." },
      { t: "wahl", f: "'The dog ___ twice a day.'", a: ["is fed", "feeds", "is feeding", "fed"], r: 0, info: "Der Hund wird gefüttert → simple present passive: is fed." },
      { t: "wahl", f: "'The results ___ tomorrow.'", a: ["will be announced", "will announce", "are announced by", "will been announced"], r: 0, info: "will-future passive: will + be + past participle." },
      { t: "paare", f: "Match the passive form with the tense.", p: [["is made", "simple present"], ["was made", "simple past"], ["has been made", "present perfect"], ["will be made", "will-future"], ["is being made", "present progressive"]] },
      { t: "reihenfolge", f: "Put the words in the right order.", items: ["The window", "was", "broken", "by", "the boys."] }
    ]
  },

  // -------------------------------------------------------------------------
  {
    id: "reportedspeech",
    titel: "Reported speech – indirekte Rede",
    kurz: "Backshift, Pronomen, Zeit- und Ortsangaben, Fragen und Befehle",
    erklaerung: `<p>Mit der <b>indirekten Rede</b> gibst du wieder, was jemand gesagt hat: <i>'I am tired,' she said.</i> → <i>She said (that) she was tired.</i> Wenn der Einleitungssatz in der Vergangenheit steht (said, told, asked), gilt der <b>Backshift</b>: Die Zeit rückt einen Schritt zurück.</p>
<table>
<tr><th>direkt</th><th>indirekt</th></tr>
<tr><td>simple present</td><td>simple past</td></tr>
<tr><td>present progressive</td><td>past progressive</td></tr>
<tr><td>simple past / present perfect</td><td>past perfect</td></tr>
<tr><td>will / can / may / must</td><td>would / could / might / had to</td></tr>
</table>
<p>Außerdem ändern sich <b>Pronomen</b> (I → he/she, my → his/her) sowie <b>Zeit- und Ortsangaben</b>: today → that day, tomorrow → the next day, yesterday → the day before, now → then, here → there, this → that, ago → before.</p>
<p><b>Fragen:</b> Wortstellung wie im Aussagesatz, kein do/does/did. Ja/Nein-Fragen mit <i>if</i> oder <i>whether</i>: <i>She asked if I liked pizza.</i> W-Fragen behalten das Fragewort: <i>He asked where I lived.</i></p>
<p><b>Befehle:</b> tell/ask + Person + <i>to</i> + Infinitiv; verneint mit <i>not to</i>: <i>Mum told me not to be late.</i></p>
<p>Kein Backshift, wenn der Einleitungssatz im Präsens steht (<i>She says that she is tired.</i>) oder die Aussage immer noch gilt.</p>`,
    aufgaben: [
      { t: "eingabe", f: "'I am tired,' she said. → She said (that) she ___ tired.", l: ["was"], info: "Backshift: am → was." },
      { t: "eingabe", f: "'We live in London,' they said. → They said they ___ in London.", l: ["lived"], info: "Backshift: simple present (live) → simple past (lived)." },
      { t: "eingabe", f: "'I have finished my homework,' Tom said. → Tom said he ___ his homework.", l: ["had finished", "'d finished"], info: "Backshift: present perfect → past perfect." },
      { t: "eingabe", f: "'I will call you,' he said. → He said he ___ me.", l: ["would call", "'d call"], info: "Backshift: will → would." },
      { t: "eingabe", f: "'I saw the film yesterday,' she said. → She said she had seen the film ___.", l: ["the day before", "the previous day"], info: "Zeitangabe: yesterday → the day before (oder the previous day)." },
      { t: "eingabe", f: "'I can swim,' Lisa said. → Lisa said she ___ swim.", l: ["could"], info: "Backshift: can → could." },
      { t: "eingabe", f: "'We are meeting here,' he said. → He said they were meeting ___.", l: ["there"], info: "Ortsangabe: here → there." },
      { t: "eingabe", f: "'I'll do it tomorrow,' she said. → She said she would do it ___.", l: ["the next day", "the following day"], info: "Zeitangabe: tomorrow → the next day / the following day." },
      { t: "eingabe", f: "'Where do you live?' he asked me. → He asked me where I ___.", l: ["lived"], info: "Indirekte Frage: kein do, Wortstellung wie im Aussagesatz, Backshift live → lived." },
      { t: "eingabe", f: "'Do you like pizza?' she asked. → She asked me ___ I liked pizza.", l: ["if", "whether"], info: "Ja/Nein-Fragen werden mit if oder whether eingeleitet." },
      { t: "eingabe", f: "'Open the window!' the teacher said. → The teacher told us ___ the window.", l: ["to open"], info: "Befehle: tell + Person + to + Infinitiv." },
      { t: "eingabe", f: "'Don't be late!' Mum said. → Mum told me ___ late.", l: ["not to be"], info: "Verneinte Befehle: not to + Infinitiv." },
      { t: "eingabe", f: "'I must go now,' he said. → He said he ___ go then.", l: ["had to"], info: "Backshift: must → had to; now → then." },
      { t: "eingabe", f: "'My parents are at work today,' she said. → She said her parents were at work ___.", l: ["that day"], info: "Zeitangabe: today → that day." },
      { t: "wahl", f: "'I'm going to buy a car,' Ben said. – Reported speech:", a: ["Ben said he was going to buy a car.", "Ben said I am going to buy a car.", "Ben said he is going to buy a car.", "Ben said he had going to buy a car."], r: 0, info: "Pronomen I → he, Backshift am going to → was going to." },
      { t: "wahl", f: "'Have you ever been to Rome?' she asked him. – Reported speech:", a: ["She asked him if he had ever been to Rome.", "She asked him had he ever been to Rome.", "She asked him if he has ever been to Rome.", "She asked him whether had he been to Rome."], r: 0, info: "Ja/Nein-Frage → if, Wortstellung wie im Aussagesatz, Backshift have been → had been." },
      { t: "wahl", f: "'What time does the train leave?' he asked. – Reported speech:", a: ["He asked what time the train left.", "He asked what time did the train leave.", "He asked what time the train leaves.", "He asked what time does the train leave."], r: 0, info: "W-Frage: Fragewort bleibt, kein does, Backshift leave → left." },
      { t: "wahl", f: "Wann gibt es KEINEN Backshift?", a: ["Wenn der Einleitungssatz im Präsens steht (She says ...).", "Wenn der Satz eine Frage ist.", "Wenn der Satz einen Befehl enthält.", "Backshift ist immer Pflicht."], r: 0, info: "Nur bei einem Einleitungssatz in der Vergangenheit (said, told, asked) rückt die Zeit zurück." },
      { t: "paare", f: "Match the direct and reported time and place expressions.", p: [["today", "that day"], ["here", "there"], ["tomorrow", "the next day"], ["yesterday", "the day before"], ["now", "then"]] },
      { t: "paare", f: "Match the direct and reported expressions.", p: [["this", "that"], ["ago", "before"], ["next week", "the following week"], ["last night", "the night before"]] },
      { t: "paare", f: "Backshift: match the tenses.", p: [["simple present", "simple past"], ["simple past", "past perfect"], ["present perfect", "past perfect"], ["will", "would"], ["can", "could"]] },
      { t: "reihenfolge", f: "Put the words in the right order.", items: ["She asked me", "if", "I", "had seen", "her keys."] },
      { t: "reihenfolge", f: "Put the words in the right order (reported command).", items: ["He told", "his sister", "not to", "touch", "his laptop."] }
    ]
  },

  // -------------------------------------------------------------------------
  {
    id: "relativsaetze",
    titel: "Relative clauses – Relativsätze",
    kurz: "who/which/that/whose/where, defining vs. non-defining, contact clauses",
    erklaerung: `<p>Ein <b>Relativsatz</b> gibt mehr Informationen zu einem Nomen. Er wird mit einem <b>Relativpronomen</b> eingeleitet:</p>
<ul>
<li><b>who</b> – Personen: <i>the woman who lives next door</i></li>
<li><b>which</b> – Dinge, Tiere: <i>the book which I bought</i></li>
<li><b>that</b> – Personen oder Dinge, aber nur in defining relative clauses</li>
<li><b>whose</b> – Besitz (dessen/deren): <i>the boy whose bike was stolen</i></li>
<li><b>where</b> – Orte: <i>the town where I was born</i></li>
</ul>
<p><b>Defining relative clause</b> (notwendig): Ohne ihn weißt du nicht, wer oder was gemeint ist. Keine Kommas. <i>The nurse who treated me was kind.</i></p>
<p><b>Non-defining relative clause</b> (Zusatzinfo): Das Bezugswort ist schon eindeutig (Namen, my mother, London). Immer <b>Kommas</b>, <b>kein that</b>, Pronomen darf nicht wegfallen. <i>My brother, who lives in Berlin, is a teacher.</i></p>
<p><b>Contact clause:</b> Ist das Relativpronomen das <b>Objekt</b> des Relativsatzes (danach folgt ein neues Subjekt), darfst du es weglassen: <i>The pizza (which) we ordered was cold.</i> Ist es das Subjekt (danach folgt direkt das Verb), muss es bleiben: <i>The man who called you ...</i></p>
<p>Typischer Fehler: <i>who's</i> (= who is) statt <i>whose</i>.</p>`,
    aufgaben: [
      { t: "eingabe", f: "The woman ___ lives next door is a doctor.", l: ["who", "that"], info: "Person als Subjekt des Relativsatzes → who (oder that im defining clause)." },
      { t: "eingabe", f: "This is the book ___ I told you about.", l: ["which", "that"], info: "Ding → which/that; hier Objekt, also dürfte das Pronomen sogar wegfallen." },
      { t: "eingabe", f: "That is the boy ___ bike was stolen.", l: ["whose"], info: "Besitz (dessen Fahrrad) → whose." },
      { t: "eingabe", f: "The town ___ I was born is very small.", l: ["where", "in which"], info: "Ort → where (oder in which)." },
      { t: "eingabe", f: "My brother, ___ lives in Berlin, is a teacher.", l: ["who"], info: "Non-defining (Kommas) → nur who, kein that." },
      { t: "eingabe", f: "The film ___ we watched yesterday was boring.", l: ["which", "that"], info: "Ding, defining → which oder that." },
      { t: "eingabe", f: "I know a girl ___ father is a pilot.", l: ["whose"], info: "Besitz (deren Vater) → whose." },
      { t: "eingabe", f: "This is the restaurant ___ we had our first date.", l: ["where"], info: "Ort → where." },
      { t: "eingabe", f: "London, ___ is the capital of the UK, has about nine million inhabitants.", l: ["which"], info: "Non-defining mit einem Ding/Ort als Bezugswort → which (kein that)." },
      { t: "eingabe", f: "The people ___ work here are very friendly.", l: ["who", "that"], info: "Personen als Subjekt → who oder that." },
      { t: "eingabe", f: "Join the sentences: 'I met a man. He speaks six languages.' → 'I met a man ___ speaks six languages.'", l: ["who", "that"], info: "He wird zum Relativpronomen who (Person, Subjekt)." },
      { t: "eingabe", f: "The hotel ___ we stayed was right by the beach.", l: ["where", "at which", "in which"], info: "Ort → where." },
      { t: "wahl", f: "In which sentence can the relative pronoun be left out (contact clause)?", a: ["The jacket which I bought was expensive.", "The man who called you is my uncle.", "The dog which bit me was black.", "My aunt, who lives in Spain, is visiting us."], r: 0, info: "Nur hier ist das Pronomen Objekt (which I bought → nach which folgt ein neues Subjekt: I)." },
      { t: "wahl", f: "Which sentence needs commas (non-defining)?", a: ["My mother who is a nurse works at night.", "The nurse who treated me was very kind.", "The car that I want is too expensive.", "People who smoke damage their health."], r: 0, info: "My mother ist schon eindeutig, der Relativsatz ist nur Zusatzinfo → Kommas: My mother, who is a nurse, works at night." },
      { t: "wahl", f: "Which sentence is correct?", a: ["The girl whose bag was stolen cried.", "The girl who's bag was stolen cried.", "The girl which bag was stolen cried.", "The girl whom bag was stolen cried."], r: 0, info: "Besitz → whose; who's heißt who is." },
      { t: "wahl", f: "Which sentence is a contact clause?", a: ["The pizza we ordered was cold.", "The pizza which was cold was ours.", "The pizza, which was cold, was ours.", "The waiter who brought the pizza was slow."], r: 0, info: "Das Relativpronomen fehlt: The pizza (which) we ordered." },
      { t: "wahl", f: "Was gilt für non-defining relative clauses?", a: ["Sie geben Zusatzinformationen, stehen zwischen Kommas und erlauben kein that.", "Sie bestimmen, welche Person oder Sache gemeint ist.", "Sie stehen nie am Satzende.", "Man darf das Pronomen weglassen."], r: 0, info: "Non-defining = Zusatzinfo, deshalb Kommas; that und Weglassen sind nur in defining clauses möglich." },
      { t: "wahl", f: "Why can't you leave out 'who' in 'The man who called you is my uncle'?", a: ["Because 'who' is the subject of the relative clause.", "Because the sentence is non-defining.", "Because 'who' refers to a person.", "You can leave it out."], r: 0, info: "Nach who folgt direkt das Verb (called) → who ist Subjekt und muss bleiben." },
      { t: "paare", f: "Match the relative pronoun with its use.", p: [["who", "people"], ["which", "things and animals"], ["whose", "possession (dessen/deren)"], ["where", "places"], ["that", "people or things, only in defining clauses"]] },
      { t: "reihenfolge", f: "Put the words in the right order.", items: ["The teacher", "who", "teaches us maths", "is", "very strict."] },
      { t: "reihenfolge", f: "Put the words in the right order (non-defining).", items: ["My cousin,", "who lives in Canada,", "is coming", "to visit us", "next summer."] }
    ]
  },

  // -------------------------------------------------------------------------
  {
    id: "gerund",
    titel: "Gerund vs. infinitive",
    kurz: "enjoy doing, want to do, stop/remember/forget, Präposition + -ing",
    erklaerung: `<p>Nach manchen Verben folgt das <b>Gerund</b> (-ing-Form), nach anderen der <b>to-Infinitiv</b>. Das musst du größtenteils lernen.</p>
<ul>
<li><b>+ Gerund:</b> enjoy, like, love, hate, mind, avoid, finish, stop, give up, suggest, can't stand, keep (on), practise – <i>I enjoy reading.</i></li>
<li><b>+ to-Infinitiv:</b> want, would like, decide, hope, promise, plan, agree, refuse, learn, need, manage – <i>She wants to become a vet.</i></li>
<li><b>Nach Präpositionen immer Gerund:</b> interested in, good at, afraid of, tired of, look forward to, instead of, without – <i>He is good at playing chess.</i></li>
<li><b>Nach Modalverben und let/make:</b> Grundform ohne to – <i>Let me help you.</i></li>
</ul>
<p><b>Bedeutungsunterschied:</b></p>
<ul>
<li><i>stop doing</i> = mit etwas aufhören; <i>stop to do</i> = anhalten, um etwas zu tun.</li>
<li><i>remember doing</i> = sich erinnern, dass man etwas getan hat; <i>remember to do</i> = daran denken, etwas zu tun.</li>
<li><i>forget doing</i> = vergessen, dass man etwas getan hat; <i>forget to do</i> = vergessen, etwas zu tun.</li>
</ul>
<p>Typischer Fehler: <i>I'm looking forward to see you.</i> – Hier ist <i>to</i> eine Präposition, deshalb <i>looking forward to see<b>ing</b> you</i>.</p>`,
    aufgaben: [
      { t: "eingabe", f: "I enjoy ___ (read) comics.", l: ["reading"], info: "enjoy + Gerund." },
      { t: "eingabe", f: "She wants ___ (become) a vet.", l: ["to become"], info: "want + to-Infinitiv." },
      { t: "eingabe", f: "He stopped ___ (smoke) two years ago.", l: ["smoking"], info: "stop doing = mit etwas aufhören." },
      { t: "eingabe", f: "We stopped ___ (buy) some water on the way.", l: ["to buy"], info: "stop to do = anhalten, um etwas zu tun." },
      { t: "eingabe", f: "I remember ___ (lock) the door – I can still see myself doing it.", l: ["locking"], info: "remember doing = sich erinnern, dass man etwas getan hat." },
      { t: "eingabe", f: "Please remember ___ (lock) the door when you leave.", l: ["to lock"], info: "remember to do = daran denken, etwas zu tun." },
      { t: "eingabe", f: "She is interested in ___ (learn) Japanese.", l: ["learning"], info: "Nach einer Präposition (in) folgt immer das Gerund." },
      { t: "eingabe", f: "They decided ___ (move) to Hamburg.", l: ["to move"], info: "decide + to-Infinitiv." },
      { t: "eingabe", f: "I can't stand ___ (wait) in long queues.", l: ["waiting"], info: "can't stand + Gerund." },
      { t: "eingabe", f: "He is good at ___ (play) chess.", l: ["playing"], info: "good at + Gerund (Präposition)." },
      { t: "eingabe", f: "We are looking forward to ___ (see) you.", l: ["seeing"], info: "look forward to + Gerund – to ist hier eine Präposition." },
      { t: "eingabe", f: "Would you mind ___ (close) the window?", l: ["closing"], info: "mind + Gerund." },
      { t: "eingabe", f: "I hope ___ (pass) my driving test.", l: ["to pass"], info: "hope + to-Infinitiv." },
      { t: "eingabe", f: "You should avoid ___ (eat) too much sugar.", l: ["eating"], info: "avoid + Gerund." },
      { t: "eingabe", f: "Let me ___ (help) you with that.", l: ["help"], info: "Nach let folgt die Grundform ohne to." },
      { t: "wahl", f: "'He suggested ___ a film.'", a: ["watching", "to watch", "watch", "to watching"], r: 0, info: "suggest + Gerund." },
      { t: "wahl", f: "'She promised ___ me.'", a: ["to help", "helping", "help", "to helping"], r: 0, info: "promise + to-Infinitiv." },
      { t: "wahl", f: "'I forgot ___ my keys – now I'm locked out.'", a: ["to take", "taking", "take", "took"], r: 0, info: "forget to do = vergessen, etwas zu tun (die Schlüssel wurden nicht mitgenommen)." },
      { t: "wahl", f: "'I'll never forget ___ the Grand Canyon for the first time.'", a: ["seeing", "to see", "see", "saw"], r: 0, info: "forget doing = die Erinnerung an etwas, das man erlebt hat." },
      { t: "wahl", f: "After a preposition (in, at, of, about, for) you use ...", a: ["the gerund (-ing form)", "the to-infinitive", "the bare infinitive", "the past participle"], r: 0, info: "Nach Präpositionen steht im Englischen immer das Gerund." },
      { t: "paare", f: "Match the verbs with the form that follows.", p: [["enjoy, mind, avoid, finish", "+ gerund"], ["want, decide, promise, hope", "+ to-infinitive"], ["can, must, should, let", "+ bare infinitive"], ["interested in, good at, afraid of", "+ gerund"]] },
      { t: "paare", f: "Match the expression with its meaning.", p: [["stop doing", "mit etwas aufhören"], ["stop to do", "anhalten, um etwas zu tun"], ["remember doing", "sich erinnern, dass man etwas getan hat"], ["remember to do", "daran denken, etwas zu tun"]] },
      { t: "reihenfolge", f: "Put the words in the right order.", items: ["My dad", "gave up", "smoking", "when I", "was born."] }
    ]
  },

  // -------------------------------------------------------------------------
  {
    id: "modals",
    titel: "Modal verbs & substitutes",
    kurz: "must/have to, mustn't/needn't, should, can/be able to, may/might, be allowed to",
    erklaerung: `<p><b>Modalverben</b> (can, must, may, might, should, will, would, could) haben nur eine Form: kein -s, kein to, kein do in Frage und Verneinung. Weil sie keine Vergangenheit oder Zukunft bilden können, brauchst du <b>Ersatzformen</b>.</p>
<table>
<tr><th>Bedeutung</th><th>Modalverb</th><th>Ersatzform</th><th>Vergangenheit</th></tr>
<tr><td>Pflicht</td><td>must</td><td>have to / has to</td><td>had to</td></tr>
<tr><td>Fähigkeit</td><td>can</td><td>be able to</td><td>could / was able to</td></tr>
<tr><td>Erlaubnis</td><td>may / can</td><td>be allowed to</td><td>was allowed to</td></tr>
<tr><td>Zukunft</td><td>–</td><td>will have to / will be able to</td><td>–</td></tr>
</table>
<p>Aufpassen bei der <b>Verneinung</b>: <i>mustn't</i> = Verbot (du darfst nicht), aber <i>needn't</i> / <i>don't have to</i> = nicht nötig (du brauchst nicht). <i>You mustn't tell anyone</i> heißt also etwas ganz anderes als <i>You don't have to tell anyone</i>.</p>
<p><b>should</b> / <b>ought to</b> = Rat, <b>may</b> / <b>might</b> / <b>could</b> = Möglichkeit (vielleicht), <b>can't</b> kann auch eine logische Schlussfolgerung sein (<i>He can't be at home – the lights are off.</i>). Höfliche Bitten: <i>Could you ... ? / Would you mind ... ?</i></p>`,
    aufgaben: [
      { t: "eingabe", f: "You ___ wear a helmet when you ride a motorbike. (It is the law.)", l: ["must", "have to"], info: "Pflicht → must oder have to." },
      { t: "eingabe", f: "You ___ smoke here. (It is forbidden.)", l: ["mustn't", "must not", "are not allowed to", "aren't allowed to", "can't", "cannot"], info: "Verbot → mustn't (oder are not allowed to)." },
      { t: "eingabe", f: "You ___ bring a present – it's not necessary.", l: ["needn't", "need not", "don't have to", "do not have to", "don't need to"], info: "Nicht nötig → needn't / don't have to, NICHT mustn't." },
      { t: "eingabe", f: "Yesterday I ___ (must) stay at home because I was ill.", l: ["had to"], info: "must hat keine Vergangenheitsform → had to." },
      { t: "eingabe", f: "When I was five, I ___ (can) already swim.", l: ["could", "was able to"], info: "Fähigkeit in der Vergangenheit → could oder was able to." },
      { t: "eingabe", f: "You look tired. You ___ go to bed earlier.", l: ["should", "ought to"], info: "Ratschlag → should (oder ought to)." },
      { t: "eingabe", f: "___ I use your phone, please? (polite request for permission)", l: ["may", "could", "can"], info: "Höfliche Bitte um Erlaubnis → May I ... ? (auch Could/Can I ... ?)." },
      { t: "eingabe", f: "It ___ rain later – take an umbrella just in case.", l: ["might", "may", "could"], info: "Möglichkeit (vielleicht) → might / may / could." },
      { t: "eingabe", f: "Next year we ___ (can) drive a moped.", l: ["will be able to", "'ll be able to"], info: "can hat keine Zukunftsform → will be able to." },
      { t: "eingabe", f: "In our school we ___ (allowed) use our phones in the breaks.", l: ["are allowed to"], info: "Erlaubnis als Ersatzform → be allowed to: are allowed to." },
      { t: "eingabe", f: "Last year students ___ (not allowed) leave the school grounds.", l: ["were not allowed to", "weren't allowed to"], info: "Erlaubnis in der Vergangenheit, verneint → were not allowed to." },
      { t: "eingabe", f: "She ___ (not can) come to the party yesterday.", l: ["could not", "couldn't", "was not able to", "wasn't able to"], info: "Verneinte Fähigkeit/Möglichkeit in der Vergangenheit → couldn't / wasn't able to." },
      { t: "eingabe", f: "Substitute for must (3rd person, present): 'He ___ get up at six every day.'", l: ["has to"], info: "have to passt sich der Person an: he/she/it has to." },
      { t: "wahl", f: "'You mustn't tell anyone.' bedeutet:", a: ["Du darfst es niemandem sagen.", "Du musst es niemandem sagen.", "Du brauchst es niemandem zu sagen.", "Du solltest es niemandem sagen."], r: 0, info: "mustn't ist ein Verbot, kein fehlender Zwang." },
      { t: "wahl", f: "'You don't have to come.' bedeutet:", a: ["Du brauchst nicht zu kommen.", "Du darfst nicht kommen.", "Du musst kommen.", "Du solltest nicht kommen."], r: 0, info: "don't have to = nicht nötig; für ein Verbot bräuchte man mustn't." },
      { t: "wahl", f: "Which sentence is correct?", a: ["She has to work on Saturdays.", "She must to work on Saturdays.", "She musts work on Saturdays.", "She have to work on Saturdays."], r: 0, info: "must steht nie mit to oder -s; have to richtet sich nach der Person: she has to." },
      { t: "wahl", f: "What is the future form of 'must'?", a: ["will have to", "will must", "must will", "would must"], r: 0, info: "Zwei Modalverben hintereinander sind unmöglich → will + Ersatzform have to." },
      { t: "wahl", f: "Which is the most polite request?", a: ["Could you open the window, please?", "Open the window.", "You must open the window.", "You open the window, okay?"], r: 0, info: "Could you ... please? ist die höfliche Bitte; must klingt wie ein Befehl." },
      { t: "wahl", f: "'He can't be at home – the lights are off.' Here can't expresses ...", a: ["a logical conclusion (it is impossible)", "a prohibition", "a missing ability", "a request"], r: 0, info: "can't drückt hier aus, dass etwas logisch ausgeschlossen ist." },
      { t: "paare", f: "Match the modal with its meaning.", p: [["must / have to", "Pflicht"], ["mustn't", "Verbot"], ["needn't / don't have to", "nicht nötig"], ["should", "Rat"], ["may / might", "Möglichkeit"]] },
      { t: "paare", f: "Match the modal with its past form.", p: [["must", "had to"], ["can", "could / was able to"], ["may (permission)", "was allowed to"], ["will", "would"]] },
      { t: "reihenfolge", f: "Put the words in the right order.", items: ["You", "don't have to", "wear", "a uniform", "at our school."] }
    ]
  },

  // -------------------------------------------------------------------------
  {
    id: "irregular",
    titel: "Irregular verbs – unregelmäßige Verben",
    kurz: "70 Verben: Infinitiv, simple past, past participle (Generator)",
    erklaerung: `<p>Unregelmäßige Verben bilden simple past und past participle <b>nicht mit -ed</b>. Du brauchst sie ständig: simple past (<i>I went</i>), present perfect und past perfect (<i>I have gone</i>, <i>I had gone</i>) und im Passiv (<i>it was written</i>).</p>
<p>Lerne immer <b>alle drei Formen zusammen</b>: <i>go – went – gone</i>. Viele Verben folgen Mustern:</p>
<ul>
<li>alle drei Formen gleich: cut – cut – cut, put – put – put, let – let – let</li>
<li>zweite und dritte Form gleich: buy – bought – bought, teach – taught – taught, send – sent – sent</li>
<li>Vokalwechsel i – a – u: sing – sang – sung, drink – drank – drunk, swim – swam – swum</li>
<li>dritte Form auf -en: speak – spoke – spoken, write – wrote – written, eat – ate – eaten</li>
</ul>
<p>Typischer Fehler: die zweite Form im present perfect (<i>I have went</i>) – richtig ist <i>I have gone</i>. Bei <i>read</i> sehen alle Formen gleich aus, aber die Vergangenheit wird wie „red“ gesprochen.</p>
<p>Der Übungsgenerator fragt zufällig nach simple past, past participle oder dem englischen Verb zu einem deutschen Wort.</p>`,
    gen: irregularAufgabe
  },

  // -------------------------------------------------------------------------
  {
    id: "wortschatz",
    titel: "Vocabulary – Wortschatz Klasse 9",
    kurz: "Schule, Zukunft und Beruf, Medien, Umwelt – 50 Karteikarten",
    erklaerung: `<p>Diese Karteikarten decken typische Wortfelder der Klasse 9 ab: <b>Schule</b>, <b>Zukunft und Beruf</b>, <b>Medien</b> und <b>Umwelt</b>. Vorne steht das englische Wort, hinten die deutsche Bedeutung, dazu ein Beispielsatz.</p>
<p>So lernst du am besten: Lies den Beispielsatz laut, präge dir das Wort <b>im Zusammenhang</b> ein und achte bei Verben auf die Präposition (<i>to apply <b>for</b> a job</i>, <i>to be responsible <b>for</b></i>). Nomen, die oft zusammenstehen, lernst du als Paar (<i>job interview</i>, <i>climate change</i>, <i>renewable energy</i>).</p>
<p>In Übungsrunden wird aus jeder Karte eine Eingabe-Aufgabe: Du siehst die deutsche Bedeutung und tippst das englische Wort.</p>`,
    aufgaben: [
      // Schule
      { t: "karte", vorne: "timetable", hinten: "Stundenplan", bsp: "Our new timetable has double maths on Monday morning." },
      { t: "karte", vorne: "subject", hinten: "Schulfach", bsp: "My favourite subject is biology." },
      { t: "karte", vorne: "mark", hinten: "Note (Schulnote)", bsp: "She got a good mark in her English test." },
      { t: "karte", vorne: "to revise", hinten: "wiederholen, lernen (für eine Prüfung)", bsp: "I have to revise for my history exam tonight." },
      { t: "karte", vorne: "exam", hinten: "Prüfung", bsp: "The exams start in two weeks." },
      { t: "karte", vorne: "to pass", hinten: "bestehen", bsp: "He passed his driving test at the first attempt." },
      { t: "karte", vorne: "to fail", hinten: "durchfallen, scheitern", bsp: "If you don't study, you might fail the test." },
      { t: "karte", vorne: "school leaving certificate", hinten: "Schulabschluss(zeugnis)", bsp: "You need a school leaving certificate to start an apprenticeship." },
      { t: "karte", vorne: "term", hinten: "Schulhalbjahr, Trimester", bsp: "The autumn term ends just before Christmas." },
      { t: "karte", vorne: "work experience", hinten: "Praktikum", bsp: "I did my work experience at a vet's surgery." },
      // Zukunft und Beruf
      { t: "karte", vorne: "apprenticeship", hinten: "Ausbildung, Lehre", bsp: "After Year 10 she wants to start an apprenticeship as a carpenter." },
      { t: "karte", vorne: "apprentice", hinten: "Auszubildende(r), Lehrling", bsp: "The apprentice learns from an experienced electrician." },
      { t: "karte", vorne: "application", hinten: "Bewerbung", bsp: "I sent my application to three companies." },
      { t: "karte", vorne: "to apply for", hinten: "sich bewerben um", bsp: "He is going to apply for a job at the bank." },
      { t: "karte", vorne: "applicant", hinten: "Bewerber(in)", bsp: "There were over fifty applicants for the job." },
      { t: "karte", vorne: "CV (curriculum vitae)", hinten: "Lebenslauf", bsp: "Please attach your CV to the email." },
      { t: "karte", vorne: "job interview", hinten: "Vorstellungsgespräch", bsp: "She was very nervous before her job interview." },
      { t: "karte", vorne: "employer", hinten: "Arbeitgeber(in)", bsp: "My employer pays for my training." },
      { t: "karte", vorne: "employee", hinten: "Arbeitnehmer(in), Angestellte(r)", bsp: "The company has about 200 employees." },
      { t: "karte", vorne: "to earn", hinten: "verdienen", bsp: "How much does a nurse earn a month?" },
      { t: "karte", vorne: "salary", hinten: "Gehalt", bsp: "The salary is paid at the end of each month." },
      { t: "karte", vorne: "career", hinten: "Karriere, Laufbahn", bsp: "She wants a career in engineering." },
      { t: "karte", vorne: "skill", hinten: "Fähigkeit, Fertigkeit", bsp: "Teamwork is an important skill in every job." },
      { t: "karte", vorne: "experience", hinten: "Erfahrung", bsp: "You don't need any experience for this job." },
      { t: "karte", vorne: "to achieve", hinten: "erreichen, schaffen", bsp: "You can achieve a lot if you work hard." },
      { t: "karte", vorne: "opportunity", hinten: "Gelegenheit, Chance", bsp: "The exchange programme is a great opportunity to improve your English." },
      { t: "karte", vorne: "challenge", hinten: "Herausforderung", bsp: "Learning a new language is a real challenge." },
      { t: "karte", vorne: "responsibility", hinten: "Verantwortung", bsp: "Having a pet is a big responsibility." },
      { t: "karte", vorne: "to be responsible for", hinten: "verantwortlich sein für", bsp: "Who is responsible for the school newspaper?" },
      { t: "karte", vorne: "goal", hinten: "Ziel", bsp: "My goal is to become a pilot." },
      { t: "karte", vorne: "to hire", hinten: "einstellen (Mitarbeiter)", bsp: "The restaurant is hiring new staff for the summer." },
      // Medien
      { t: "karte", vorne: "headline", hinten: "Schlagzeile", bsp: "The headline on the front page was about the storm." },
      { t: "karte", vorne: "to broadcast", hinten: "senden, ausstrahlen", bsp: "The match will be broadcast live on Saturday." },
      { t: "karte", vorne: "device", hinten: "Gerät", bsp: "Please switch off all electronic devices during the exam." },
      { t: "karte", vorne: "screen", hinten: "Bildschirm", bsp: "I spend too much time looking at a screen." },
      { t: "karte", vorne: "to post", hinten: "veröffentlichen, posten (online)", bsp: "She posted a photo of her dog on Instagram." },
      { t: "karte", vorne: "advertisement", hinten: "Werbung, Anzeige", bsp: "There are too many advertisements before the video starts." },
      { t: "karte", vorne: "audience", hinten: "Publikum, Zuschauer", bsp: "The show has a young audience." },
      { t: "karte", vorne: "reliable", hinten: "zuverlässig, verlässlich", bsp: "Is this website a reliable source of information?" },
      { t: "karte", vorne: "fake news", hinten: "Falschmeldungen", bsp: "You should check the facts before you share fake news." },
      { t: "karte", vorne: "privacy", hinten: "Privatsphäre", bsp: "Many apps don't respect your privacy." },
      { t: "karte", vorne: "to download", hinten: "herunterladen", bsp: "You can download the app for free." },
      // Umwelt
      { t: "karte", vorne: "environment", hinten: "Umwelt", bsp: "Plastic bags are bad for the environment." },
      { t: "karte", vorne: "pollution", hinten: "Verschmutzung", bsp: "Air pollution is a big problem in many cities." },
      { t: "karte", vorne: "to recycle", hinten: "recyceln, wiederverwerten", bsp: "We recycle paper, glass and plastic at home." },
      { t: "karte", vorne: "waste", hinten: "Müll, Abfall", bsp: "Every person produces a lot of waste each year." },
      { t: "karte", vorne: "to protect", hinten: "schützen", bsp: "We must protect endangered animals." },
      { t: "karte", vorne: "climate change", hinten: "Klimawandel", bsp: "Climate change is causing more extreme weather." },
      { t: "karte", vorne: "renewable energy", hinten: "erneuerbare Energie", bsp: "Wind and solar power are forms of renewable energy." },
      { t: "karte", vorne: "to reduce", hinten: "verringern, reduzieren", bsp: "We should reduce the amount of plastic we use." },
      { t: "karte", vorne: "endangered species", hinten: "bedrohte (Tier-)Arten", bsp: "Tigers are an endangered species." },
      { t: "karte", vorne: "sustainable", hinten: "nachhaltig", bsp: "The school wants to become more sustainable." },
      { t: "karte", vorne: "global warming", hinten: "Erderwärmung", bsp: "Global warming makes the ice at the poles melt." },
      { t: "karte", vorne: "litter", hinten: "herumliegender Müll", bsp: "Don't drop litter in the park." }
    ]
  },

  // -------------------------------------------------------------------------
  {
    id: "mediation",
    titel: "Mediation & Textsorten",
    kurz: "Sprachmittlung, E-Mail/Letter/Comment/Summary, Linking words",
    erklaerung: `<p><b>Mediation (Sprachmittlung)</b> heißt: Du gibst den Inhalt eines deutschen Textes auf Englisch wieder – <b>sinngemäß</b>, nicht Wort für Wort. Überlege, was der Empfänger wirklich wissen muss, lass Unwichtiges weg und umschreibe Wörter, die du nicht kennst.</p>
<p><b>Textsorten:</b></p>
<ul>
<li><b>Informal e-mail:</b> Subject – Hi Tom, – Dank/Frage nach dem Befinden – Hauptteil – Write back soon! – Love / Best wishes.</li>
<li><b>Formal letter:</b> Adresse und Datum – Dear Sir or Madam, (Name unbekannt) oder Dear Mrs Smith, – Grund des Schreibens – Details – I look forward to hearing from you. – <i>Yours faithfully</i> (nach Sir or Madam) bzw. <i>Yours sincerely</i> (nach Namen).</li>
<li><b>Comment:</b> Einleitung mit Thema/Frage – Argumente pro – Argumente kontra – eigene Meinung mit Begründung – Schluss.</li>
<li><b>Summary:</b> Einleitungssatz mit Titel, Autor, Textsorte und Thema – Hauptpunkte in eigenen Worten im Präsens – <b>keine eigene Meinung</b>, keine Zitate, keine Details.</li>
</ul>
<p><b>Linking words</b> machen deinen Text flüssig: Gegensatz (<i>however, on the other hand, although</i>), Folge (<i>therefore, as a result, so</i>), Ergänzung (<i>in addition, moreover, furthermore</i>), Reihenfolge (<i>firstly, secondly, finally</i>), Beispiel (<i>for example, for instance</i>), Zusammenfassung (<i>to sum up, in conclusion</i>).</p>`,
    aufgaben: [
      { t: "wahl", f: "German: 'Ich wollte fragen, ob du mir helfen kannst.' – Best English version:", a: ["I was wondering if you could help me.", "I wanted to ask if you can help me, yes?", "I want that you help me.", "Could you help me, I wanted ask?"], r: 0, info: "I was wondering if you could ... ist die natürliche, höfliche Formulierung." },
      { t: "wahl", f: "German: 'Bitte melde dich bald.' – Best English version:", a: ["Please get back to me soon.", "Please report yourself soon.", "Please announce you soon.", "Please call yourself soon."], r: 0, info: "get back to someone = sich bei jemandem melden; 'report yourself' wäre eine wörtliche Fehlübersetzung." },
      { t: "wahl", f: "German: 'Das kommt nicht in Frage.' – Best English version:", a: ["That's out of the question.", "That doesn't come into question.", "That is not in question.", "That comes not in question."], r: 0, info: "Die feste Wendung lautet out of the question." },
      { t: "wahl", f: "German: 'Ich freue mich auf deine Antwort.' (ending an email) – Best English version:", a: ["I'm looking forward to hearing from you.", "I'm happy on your answer.", "I look forward for your answer.", "I am glad to your reply."], r: 0, info: "look forward to + -ing: I'm looking forward to hearing from you." },
      { t: "wahl", f: "German: 'Meiner Meinung nach ...' – Best English version:", a: ["In my opinion ...", "After my opinion ...", "In my meaning ...", "To my mind of view ..."], r: 0, info: "In my opinion (auch: To my mind, I think); 'after my opinion' ist eine wörtliche Fehlübersetzung." },
      { t: "wahl", f: "German: 'Einerseits ..., andererseits ...' – Best English version:", a: ["On the one hand ..., on the other hand ...", "On one side ..., on the other side ...", "On the one side ..., on the other hand ...", "At one hand ..., at the other hand ..."], r: 0, info: "Feste Wendung: on the one hand ... on the other hand." },
      { t: "wahl", f: "German: 'Zusammenfassend lässt sich sagen ...' – Best English version:", a: ["To sum up, ...", "To summarise together, ...", "In the end of all, ...", "Together said, ..."], r: 0, info: "To sum up / In conclusion leiten den Schluss ein." },
      { t: "wahl", f: "Mediation: A German article says 'Die Zahl der Auszubildenden ist gesunken.' What do you tell your English exchange partner?", a: ["The number of apprentices has gone down.", "The number of the Azubis is sunk.", "The apprentice number has fallen down.", "The count of trainees sank."], r: 0, info: "Sinngemäß übertragen: the number of apprentices has gone down / has fallen." },
      { t: "wahl", f: "Mediation: A sign says 'Der Eintritt ist für Schüler frei.' – In English:", a: ["Admission is free for students.", "The entrance is free for pupils to enter.", "Entry is for free from students.", "Students pay nothing to the door."], r: 0, info: "Admission is free = der Eintritt ist frei." },
      { t: "wahl", f: "Was gehört NICHT in eine summary?", a: ["Deine eigene Meinung", "Titel, Autor und Textsorte", "Die Hauptaussagen im Präsens", "Eigene Worte statt Zitate"], r: 0, info: "Eine summary ist neutral – die eigene Meinung gehört in den comment." },
      { t: "wahl", f: "Was ist bei einer Mediation am wichtigsten?", a: ["Den Sinn übertragen, nicht Wort für Wort übersetzen.", "Jedes Wort genau übersetzen.", "Alles wörtlich zitieren.", "Den Text möglichst lang machen."], r: 0, info: "Mediation = Sprachmittlung: Der Empfänger soll verstehen, worum es geht; Unwichtiges darf wegfallen." },
      { t: "wahl", f: "Which is the right opening for a formal letter when you don't know the name?", a: ["Dear Sir or Madam,", "Hi there,", "Hey,", "Dear Mr Unknown,"], r: 0, info: "Ohne Namen: Dear Sir or Madam, – dazu passt am Ende Yours faithfully." },
      { t: "wahl", f: "Which ending goes with 'Dear Sir or Madam,'?", a: ["Yours faithfully,", "Yours sincerely,", "Love,", "Cheers,"], r: 0, info: "Britische Regel: Sir or Madam → Yours faithfully; mit Namen → Yours sincerely." },
      { t: "wahl", f: "Which ending goes with 'Dear Mrs Smith,'?", a: ["Yours sincerely,", "Yours faithfully,", "Bye,", "Love,"], r: 0, info: "Nach einer Anrede mit Namen endet ein formeller Brief mit Yours sincerely." },
      { t: "eingabe", f: "Fill in the linking word (German: jedoch): 'It was raining. ___, we went for a walk.'", l: ["However", "Nevertheless"], info: "Gegensatz → However (auch Nevertheless)." },
      { t: "eingabe", f: "Fill in the linking word (German: deshalb): 'I was very tired. ___, I went to bed early.'", l: ["Therefore", "So", "As a result"], info: "Folge → Therefore (auch So / As a result)." },
      { t: "eingabe", f: "Fill in the linking word (German: außerdem): 'Sport keeps you fit. ___, it is fun.'", l: ["In addition", "Moreover", "Furthermore", "Besides", "Also"], info: "Ergänzung → In addition (auch Moreover / Furthermore / Besides)." },
      { t: "paare", f: "Match the linking words with their German meaning.", p: [["however", "jedoch, allerdings"], ["therefore", "deshalb"], ["in addition", "außerdem"], ["on the other hand", "andererseits"]] },
      { t: "paare", f: "Match more linking words with their German meaning.", p: [["firstly", "erstens"], ["finally", "schließlich, zuletzt"], ["for example", "zum Beispiel"], ["although", "obwohl"], ["as a result", "infolgedessen"]] },
      { t: "paare", f: "Match the linking word with its function.", p: [["however", "contrast"], ["therefore", "result"], ["in addition", "adding an idea"], ["firstly", "order"], ["for instance", "example"]] },
      { t: "reihenfolge", f: "Put the parts of a formal letter in the right order.", items: ["Sender's address and date", "Salutation: Dear Sir or Madam,", "Opening: reason for writing", "Main body: details and questions", "Closing sentence: I look forward to hearing from you.", "Yours faithfully, + name"] },
      { t: "reihenfolge", f: "Put the parts of an informal e-mail in the right order.", items: ["Subject line", "Hi Tom,", "Opening: Thanks for your email. How are you?", "Main part: your news or your answer", "Closing: Write back soon!", "Love / Best wishes, + name"] },
      { t: "reihenfolge", f: "Put the parts of a comment in the right order.", items: ["Introduction: present the topic and the question", "Arguments for one side", "Arguments for the other side", "Your own opinion with reasons", "Conclusion"] },
      { t: "reihenfolge", f: "Put the parts of a summary in the right order.", items: ["Introductory sentence: title, author, text type and topic", "Main points in the order of the text", "Only the most important information, in your own words", "Short final sentence without your own opinion"] }
    ]
  }
];

window.ENGLISCH_ALLGEMEIN = THEMEN;   // Array von Themen-Objekten nach Schema
