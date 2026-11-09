// Lernwelt – Fach Englisch: Zuordnung zu den Kapiteln von Westermann „Camden Market 9“ (Ausgabe 2020)
// Quelle der Kapitel/Seiten: Inhaltsverzeichnis Textbook 9 (S. 8–12) und Stoffverteilungsplan Gesamtschule NRW (STV_NRW_GES_Kl.9).
// Die Wortkarten sind eigene Wörter zu den Wortfeldern laut Inhaltsverzeichnis – keine Buchvokabellisten.
"use strict";
(function () {
  const FACH = window.FAECHER.find((f) => f.id === "englisch");
  if (!FACH) return;
  FACH.buch = "Westermann Camden Market 9 (Ausgabe 2020)";

  const K = {
    einstieg: "Einstieg · The English-speaking world (S. 4–7)",
    t1: "Theme 1 · Down under (S. 14–43)",
    t2: "Theme 2 · Hello, New Zealand! (S. 44–73)",
    t3: "Theme 3 · Be yourself (S. 76–105)",
    t4: "Theme 4 · Our world, our future (S. 106–135)",
    t5: "Theme 5 · Making a living (S. 138–167)",
    lit: "Literature · Eleanor & Park (S. 168–173)",
    exam: "Exam practice · Abschlussprüfung Themes 1–5 (S. 174–183)",
  };
  const REIHENFOLGE = [K.einstieg, K.t1, K.t2, K.t3, K.t4, K.t5, K.lit, K.exam];

  const kap = (id, kapitel) => { const t = FACH.themen.find((x) => x.id === id); if (t) t.kapitel = kapitel; };

  // ---- Bestehende Themen → Kapitel -------------------------------------------------------------
  // Theme 1: Down under (alle Australien-Themen; Gerundium und Simple past sind laut STV Wiederholung in Theme 1)
  for (const t of FACH.themen) if (t.id.startsWith("aus-")) t.kapitel = K.t1;
  kap("gerund", K.t1);
  kap("irregular", K.t1);
  // Theme 2: Present perfect, Present perfect progressive, Past perfect, Steigerung → Zeitformen
  kap("zeiten", K.t2);
  // Theme 3: Indirekte Rede, Relativsätze
  kap("reportedspeech", K.t3);
  kap("relativsaetze", K.t3);
  // Theme 4: Passiv (R), Bedingungssätze Typ III (neu), Wortfeld Umwelt/Zukunft
  kap("passiv", K.t4);
  kap("ifclauses", K.t4);
  kap("wortschatz", K.t4);
  // Theme 5: Zukunft mit will/going to, Modalverben, Berufe
  kap("modals", K.t5);
  kap("jobs", K.t5);
  // Einstieg: The English-speaking world
  kap("usa-uk", K.einstieg);
  // Literature / Exam practice
  kap("literatur", K.lit);
  kap("mediation", K.exam);
  kap("hoeren1", K.exam);
  kap("hoeren2", K.exam);
  kap("hoeren3", K.exam);

  // ---- Hilfsfunktionen ---------------------------------------------------------------------------
  const karten = (liste) => liste.map((v) => ({ t: "karte", vorne: v[0], hinten: v[1], bsp: v[2] }));
  const luecken = (liste) => liste.map((a) => ({ t: "eingabe", f: a[0], l: a[1], info: a[2] }));

  // ---- Neue Themen -------------------------------------------------------------------------------
  FACH.themen.push(
    // ===== Theme 2: Hello, New Zealand! =====
    {
      id: "th2-woerter", kapitel: K.t2,
      titel: "New Zealand: Extreme sports & Aotearoa",
      kurz: "Wortfelder Sport, Umwelt, Reisen + Landeskunde Neuseeland – 34 Karten, 8 Fragen",
      erklaerung: "<p><b>Neuseeland</b> (Maori: <i>Aotearoa</i>, „Land der langen weißen Wolke“) besteht aus zwei Hauptinseln. Hauptstadt ist <b>Wellington</b>, die größte Stadt ist <b>Auckland</b>. Die <b>Maori</b> kamen vor etwa 700 Jahren aus Polynesien; Neuseeländer europäischer Herkunft heißen <b>Pakeha</b>. 1840 unterschrieben Maori-Häuptlinge und die britische Krone den <b>Treaty of Waitangi</b>.</p><p>Neuseeland gilt als Heimat des Abenteuertourismus: In <b>Queenstown</b> begann 1988 das erste kommerzielle Bungee-Jumping. Beliebt sind auch Rafting, Skydiving und mehrtägige Wanderungen (<i>Great Walks</i>) durch Nationalparks mit Vulkanen, Gletschern und Fjorden. Lerne zuerst die Karten, dann teste dich.</p>",
      aufgaben: karten([
        ["extreme sport", "Extremsportart", "Bungee jumping is an extreme sport."],
        ["to take a risk", "ein Risiko eingehen", "Why do people take risks?"],
        ["adrenaline rush", "Adrenalinkick", "Skydiving gives you a real adrenaline rush."],
        ["safety gear", "Schutzausrüstung", "Always wear your safety gear."],
        ["helmet", "Helm", "A helmet can save your life."],
        ["harness", "Gurt, Klettergurt", "The guide checked my harness twice."],
        ["to dare (to do sth)", "sich trauen", "I wouldn't dare to jump off a bridge."],
        ["challenge", "Herausforderung", "The hike was a real challenge."],
        ["endurance", "Ausdauer", "Long hikes need endurance, not speed."],
        ["to hike / a hike", "wandern / eine Wanderung", "We went on a three-day hike."],
        ["trail", "Wanderweg, Pfad", "The trail leads to the glacier."],
        ["hut", "Hütte", "Hikers sleep in huts along the track."],
        ["summit", "Gipfel", "We reached the summit at sunrise."],
        ["glacier", "Gletscher", "The glacier is melting fast."],
        ["volcano", "Vulkan", "Mount Ruapehu is an active volcano."],
        ["geyser", "Geysir", "The geyser shoots hot water into the air."],
        ["hot spring", "heiße Quelle", "Rotorua is famous for its hot springs."],
        ["white-water rafting", "Wildwasser-Rafting", "White-water rafting is wet and wild."],
        ["skydiving", "Fallschirmspringen", "Skydiving over the lake was unforgettable."],
        ["to jump off", "abspringen", "She jumped off the platform and screamed."],
        ["injury / to injure", "Verletzung / verletzen", "He had a serious injury after the fall."],
        ["sustainable", "nachhaltig", "Sustainable tourism protects nature."],
        ["to protect", "schützen", "National parks protect rare animals."],
        ["wildlife", "Tierwelt, wild lebende Tiere", "New Zealand has unique wildlife."],
        ["native", "einheimisch, ursprünglich", "The kiwi is a native bird."],
        ["sheep farming", "Schafzucht", "Sheep farming is important for the economy."],
        ["Aotearoa", "Maori-Name für Neuseeland („Land der langen weißen Wolke“)", "Welcome to Aotearoa!"],
        ["Maori", "indigene Bevölkerung Neuseelands", "Maori culture is part of everyday life."],
        ["Pakeha", "Neuseeländer europäischer Herkunft", "Her father is Pakeha, her mother is Maori."],
        ["haka", "traditioneller Maori-Tanz mit Gesang", "The All Blacks perform a haka before matches."],
        ["Treaty of Waitangi", "Vertrag von 1840 zwischen Maori und britischer Krone", "The Treaty of Waitangi is New Zealand's founding document."],
        ["backpacker", "Rucksacktourist/in", "Many backpackers travel by bus."],
        ["campervan", "Wohnmobil", "We hired a campervan for two weeks."],
        ["to book", "buchen", "You should book the hut in advance."],
      ]).concat([
        { t: "wahl", f: "What is the capital of New Zealand?", a: ["Wellington", "Auckland", "Christchurch", "Sydney"], r: 0, info: "Wellington ist die Hauptstadt – Auckland ist zwar größer, aber nicht Regierungssitz." },
        { t: "wahl", f: "What does the Maori name Aotearoa mean?", a: ["Land of the long white cloud", "Land of the rising sun", "Island of fire", "Land down under"], r: 0, info: "Aotearoa = „Land der langen weißen Wolke“." },
        { t: "wahl", f: "Who are the Pakeha?", a: ["New Zealanders of European descent", "The indigenous people of New Zealand", "Tourists from Australia", "Sheep farmers"], r: 0, info: "Pakeha ist das Maori-Wort für Neuseeländer europäischer Herkunft." },
        { t: "wahl", f: "When was the Treaty of Waitangi signed?", a: ["1840", "1788", "1901", "1988"], r: 0, info: "1840 – 1788 ist die First Fleet in Australien, 1901 der australische Bundesstaat." },
        { t: "wahl", f: "Which town is known as the home of commercial bungee jumping?", a: ["Queenstown", "Wellington", "Rotorua", "Dunedin"], r: 0, info: "In Queenstown startete 1988 das erste kommerzielle Bungee-Jumping an der Kawarau Bridge." },
        { t: "wahl", f: "In New Zealand English, what are jandals?", a: ["flip-flops", "sunglasses", "hiking boots", "swimming trunks"], r: 0, info: "jandals = Flip-Flops (von „Japanese sandals“); Badesachen heißen togs, ein Ferienhaus bach." },
        { t: "wahl", f: "What is a kiwi NOT?", a: ["a type of dolphin", "a flightless bird", "a nickname for New Zealanders", "a fruit"], r: 0, info: "Kiwi ist Vogel, Spitzname für Neuseeländer und Frucht – aber kein Delfin." },
        { t: "wahl", f: "Which word fits? Before you go rafting you have to put on a life jacket and a ___.", a: ["helmet", "harness", "summit", "trail"], r: 0, info: "Beim Rafting trägt man Schwimmweste und Helm; ein harness (Gurt) gehört zum Klettern oder Bungee." },
      ]),
    },
    {
      id: "th2-perfect-progressive", kapitel: K.t2,
      titel: "Present perfect progressive & past perfect",
      kurz: "Die Verlaufsform des Perfekts und die Vorvergangenheit – 18 Lücken",
      erklaerung: "<p><b>Present perfect progressive</b> (<i>have/has been + -ing</i>) betont, <b>wie lange</b> etwas schon läuft oder dass eine Handlung gerade erst aufgehört hat und man die Folgen sieht: <i>She has been hiking for six hours. – You're wet! Have you been swimming?</i> Signalwörter: <b>for, since, all day, how long</b>. Zustandsverben (<i>know, like, have = besitzen, be</i>) stehen nicht in der Verlaufsform: <i>I have known him for years.</i></p><p><b>Past perfect</b> (<i>had + 3. Form</i>) ist die <b>Vorvergangenheit</b>: Was passierte, <b>bevor</b> etwas anderes in der Vergangenheit geschah. <i>When we arrived, the bus had already left.</i> Signalwörter: <b>before, after, by the time, already, when</b>. Faustregel: Zwei Handlungen in der Vergangenheit – die frühere bekommt das past perfect, die spätere das simple past.</p>",
      aufgaben: luecken([
        ["How long ___ you ___ (wait) for the ferry? – For two hours!", ["have been waiting"], "Frage nach der Dauer bis jetzt → present perfect progressive: have you been waiting."],
        ["They ___ (hike) since seven o'clock and they are exhausted.", ["have been hiking", "'ve been hiking"], "since + Dauer bis jetzt → present perfect progressive."],
        ["Look at your muddy boots! ___ you ___ (walk) through the forest again?", ["have been walking"], "Die Spuren sind sichtbar, die Handlung ist gerade vorbei → have you been walking."],
        ["Tom ___ (learn) Maori for three months now.", ["has been learning", "'s been learning"], "for three months now → Dauer bis heute → has been learning."],
        ["I ___ (know) my best friend since primary school.", ["have known", "'ve known"], "know ist ein Zustandsverb → kein progressive, sondern present perfect simple."],
        ["It ___ (rain) all day, so the trail is closed.", ["has been raining", "'s been raining"], "all day → Dauer bis jetzt → present perfect progressive."],
        ["We ___ (not sleep) well since we arrived in the hut.", ["have not been sleeping", "haven't been sleeping"], "since + bis heute → present perfect progressive, verneint mit haven't."],
        ["She is out of breath because she ___ (run).", ["has been running", "'s been running"], "Die Folge (außer Atem) ist sichtbar → has been running."],
        ["When we got to the bridge, the first group ___ (already / jump).", ["had already jumped"], "Der Sprung war vor unserer Ankunft → past perfect: had already jumped."],
        ["By the time the rescue team arrived, the climbers ___ (reach) the hut.", ["had reached"], "by the time + Vergangenheit → die frühere Handlung im past perfect."],
        ["After Maya ___ (finish) the hike, she slept for twelve hours.", ["had finished"], "after → zuerst finish (past perfect), dann sleep (simple past)."],
        ["I couldn't pay for the ticket because I ___ (lose) my wallet.", ["had lost", "'d lost"], "Der Verlust lag vor dem Bezahlversuch → past perfect."],
        ["The Maori ___ (live) in Aotearoa for hundreds of years before the Europeans came.", ["had lived", "had been living"], "before the Europeans came → Vorvergangenheit; auch past perfect progressive ist hier möglich."],
        ["Before 1988 nobody ___ (do) commercial bungee jumps in New Zealand.", ["had done"], "Vor einem Zeitpunkt in der Vergangenheit → past perfect: had done."],
        ["He ___ (never / see) a glacier before he travelled to the South Island.", ["had never seen"], "never + Vorvergangenheit → had never seen."],
        ["When I woke up, the others ___ (leave) without me.", ["had left"], "Das Gehen war vor dem Aufwachen → past perfect."],
        ["We ___ (not book) a hut, so we had to sleep in the tent.", ["had not booked", "hadn't booked"], "Die fehlende Buchung lag vor dem Zeltschlafen → past perfect, verneint mit hadn't."],
        ["Which tense? 'She has been training for the race since March.' → present perfect ___", ["progressive", "continuous"], "has been training = present perfect progressive (auch continuous genannt)."],
      ]),
    },

    // ===== Theme 3: Be yourself =====
    {
      id: "th3-woerter", kapitel: K.t3,
      titel: "Friendship, feelings & looking different",
      kurz: "Wortfelder Freunde, Gefühle, Mode, Ratschläge geben – 36 Karten, 8 Fragen",
      erklaerung: "<p>In Theme 3 geht es um <b>Freundschaft</b> (Vertrauen, Streit, Versöhnung), um <b>Gefühle</b> und darum, wie man mit <b>Aussehen und Stil</b> umgeht: Kleidung, Jugendkulturen, Vorurteile. Dazu brauchst du Wörter, um Menschen zu beschreiben und <b>Ratschläge</b> zu geben.</p><p>Ratschläge auf Englisch: <i>You should …</i> / <i>You shouldn't …</i> / <i>If I were you, I would …</i> / <i>Why don't you …?</i> / <i>You'd better …</i> / <i>How about + -ing?</i> Eine Diskussion über Mode führst du mit <i>In my opinion …, I agree/disagree because …, On the one hand … on the other hand …</i></p>",
      aufgaben: karten([
        ["to get on (well) with sb", "sich (gut) verstehen mit jdm.", "I get on well with my sister."],
        ["to fall out with sb", "sich zerstreiten mit jdm.", "Lea fell out with her best friend last week."],
        ["to make up", "sich versöhnen", "They made up after two days."],
        ["to trust sb", "jdm. vertrauen", "You can trust me."],
        ["reliable", "zuverlässig", "A reliable friend keeps his promises."],
        ["loyal", "treu, loyal", "A loyal friend stands by you."],
        ["to let sb down", "jdn. im Stich lassen, enttäuschen", "Don't let your friends down."],
        ["to back sb up", "jdn. unterstützen, hinter jdm. stehen", "She always backs me up."],
        ["to keep a secret", "ein Geheimnis bewahren", "Can you keep a secret?"],
        ["to gossip", "tratschen", "Stop gossiping about her!"],
        ["rumour", "Gerücht", "There is a rumour about the new boy."],
        ["to feel left out", "sich ausgeschlossen fühlen", "I felt left out at the party."],
        ["jealous", "eifersüchtig, neidisch", "He is jealous of her new friends."],
        ["embarrassed", "verlegen, peinlich berührt", "I was so embarrassed when I fell."],
        ["ashamed", "beschämt", "She felt ashamed of her lie."],
        ["confident", "selbstbewusst", "Be confident and be yourself."],
        ["shy", "schüchtern", "He is too shy to ask her."],
        ["self-conscious", "unsicher, gehemmt (wegen des Aussehens)", "Teenagers are often self-conscious about their looks."],
        ["to bully sb", "jdn. mobben", "Nobody should be bullied for their clothes."],
        ["peer pressure", "Gruppenzwang", "Peer pressure made him try smoking."],
        ["to fit in", "dazugehören, sich anpassen", "She just wants to fit in."],
        ["to stand out", "auffallen, herausstechen", "His green hair really stands out."],
        ["to judge sb by their looks", "jdn. nach dem Aussehen beurteilen", "Don't judge people by their looks."],
        ["prejudice", "Vorurteil", "Prejudices are hard to change."],
        ["stereotype", "Klischee, Stereotyp", "Not every skater is lazy – that's a stereotype."],
        ["outfit", "Outfit, Kleidung (Zusammenstellung)", "Nice outfit!"],
        ["casual", "leger, lässig", "On Fridays we wear casual clothes."],
        ["smart (clothes)", "schick, elegant", "He wore a smart suit for the interview."],
        ["baggy", "weit, schlabberig", "Baggy jeans are back in fashion."],
        ["tight", "eng", "These trousers are too tight."],
        ["second-hand", "gebraucht", "I buy most of my clothes second-hand."],
        ["brand / label", "Marke", "She only wears expensive brands."],
        ["to dye one's hair", "sich die Haare färben", "He dyed his hair blue."],
        ["piercing", "Piercing", "My mum doesn't like my nose piercing."],
        ["hairstyle", "Frisur", "I love your new hairstyle."],
        ["to give advice", "einen Rat geben", "Can I give you some advice?"],
      ]).concat([
        { t: "wahl", f: "Which sentence gives advice?", a: ["If I were you, I'd talk to her.", "I talked to her yesterday.", "She has been talking all day.", "Did you talk to her?"], r: 0, info: "If I were you, I would … ist eine typische Ratschlag-Formel (if-clause Typ II)." },
        { t: "wahl", f: "What does 'to fall out with somebody' mean?", a: ["to have an argument and stop being friends", "to fall in love with somebody", "to meet somebody by chance", "to help somebody"], r: 0, info: "fall out with = sich zerstreiten." },
        { t: "wahl", f: "Which word describes a person who always keeps their promises?", a: ["reliable", "jealous", "shy", "embarrassed"], r: 0, info: "reliable = zuverlässig." },
        { t: "wahl", f: "Complete: Everybody in my class has the same trainers – that's ___.", a: ["peer pressure", "a rumour", "a hairstyle", "a secret"], r: 0, info: "peer pressure = Gruppenzwang: Man macht mit, weil alle es tun." },
        { t: "wahl", f: "Which is the opposite of 'to fit in'?", a: ["to stand out", "to make up", "to back up", "to get on"], r: 0, info: "fit in = dazugehören; stand out = auffallen." },
        { t: "wahl", f: "'Nobody noticed me and nobody talked to me.' – How did the person feel?", a: ["left out", "confident", "loyal", "smart"], r: 0, info: "feel left out = sich ausgeschlossen fühlen." },
        { t: "wahl", f: "Which phrase is NOT used for giving advice?", a: ["I used to …", "You'd better …", "Why don't you …?", "You should …"], r: 0, info: "I used to … beschreibt eine frühere Gewohnheit, kein Ratschlag." },
        { t: "wahl", f: "What is the adjective for clothes that are not formal?", a: ["casual", "tight", "baggy", "second-hand"], r: 0, info: "casual = leger; das Gegenteil ist smart oder formal." },
      ]),
    },
    {
      id: "th3-adverbialsaetze", kapitel: K.t3,
      titel: "Adverbial clauses & participles",
      kurz: "Adverbialsätze (although, unless, so that …) und Partizipien statt Relativsätzen – 18 Lücken",
      erklaerung: "<p><b>Adverbialsätze</b> sind Nebensätze, die sagen <b>wann, warum, trotz was, unter welcher Bedingung</b> oder <b>wozu</b> etwas passiert. Sie beginnen mit einer Konjunktion:</p><ul><li>Zeit: <i>when, while, as soon as, until, before, after</i></li><li>Grund: <i>because, as, since</i></li><li>Gegensatz: <i>although, even though, whereas</i></li><li>Bedingung: <i>if, unless (= if not), in case</i></li><li>Zweck/Folge: <i>so that, so … that</i></li></ul><p>Steht der Nebensatz vorn, folgt ein Komma: <i>Although it was late, we kept talking.</i> Nach Zeit-Konjunktionen steht für die Zukunft das <b>simple present</b>: <i>I'll call you as soon as I arrive.</i></p><p><b>Partizipien</b> verkürzen Relativsätze (Challenge): <i>the girl who is sitting there → the girl <b>sitting</b> there</i> (aktiv, -ing); <i>the book which was written by her → the book <b>written</b> by her</i> (passiv, 3. Form).</p>",
      aufgaben: luecken([
        ["___ she was tired, she stayed up to help her friend. (obwohl)", ["although", "even though", "though"], "although / even though = obwohl; Gegensatz."],
        ["You'll never make friends ___ you talk to people. (wenn nicht)", ["unless"], "unless = if not: Wenn du nicht mit Leuten redest."],
        ["I'll text you ___ I get home. (sobald)", ["as soon as"], "as soon as = sobald; danach simple present, kein will."],
        ["Take a jacket ___ it gets cold. (für den Fall, dass)", ["in case"], "in case = für den Fall, dass."],
        ["He whispered ___ nobody could hear him. (damit)", ["so that"], "so that = damit, Zweck."],
        ["Mia dyed her hair green ___ she wanted to stand out. (weil)", ["because", "as", "since"], "because / as / since geben den Grund an."],
        ["Wait here ___ I come back. (bis)", ["until", "till"], "until = bis (zu einem Zeitpunkt)."],
        ["___ I was waiting for the bus, I saw my old friend. (während)", ["while", "as"], "while = während; zwei gleichzeitige Handlungen."],
        ["Ben loves skating, ___ his brother prefers reading. (wohingegen)", ["whereas", "while"], "whereas = wohingegen; Gegenüberstellung."],
        ["She was ___ embarrassed that she left the party. (so)", ["so"], "so + Adjektiv + that = so … dass."],
        ["I'll lend you my jacket ___ you give it back tomorrow. (wenn)", ["if"], "if = wenn, Bedingung (Typ I)."],
        ["Punctuation: 'Although he said sorry ___ she didn't forgive him.' – Which sign goes in the gap?", ["comma", ","], "Steht der Nebensatz vorn, trennt ein Komma ihn vom Hauptsatz."],
        ["Shorten: 'The boy who is wearing the red hoodie is my cousin.' → The boy ___ the red hoodie is my cousin.", ["wearing"], "Aktiver Relativsatz → Partizip Präsens (-ing)."],
        ["Shorten: 'The letter which was written by Sam made her cry.' → The letter ___ by Sam made her cry.", ["written"], "Passiver Relativsatz → Partizip Perfekt (3. Form)."],
        ["Shorten: 'People who live in glass houses shouldn't throw stones.' → People ___ in glass houses shouldn't throw stones.", ["living"], "who live → living (Partizip Präsens, aktiv)."],
        ["Shorten: 'The trainers that were sold at the market were fake.' → The trainers ___ at the market were fake.", ["sold"], "that were sold → sold (Partizip Perfekt, passiv)."],
        ["Shorten: 'The girl who is standing next to Tom is new.' → The girl ___ next to Tom is new.", ["standing"], "who is standing → standing."],
        ["Shorten: 'Clothes which are made in Bangladesh are often cheap.' → Clothes ___ in Bangladesh are often cheap.", ["made"], "which are made → made (passiv)."],
      ]),
    },

    // ===== Theme 4: Our world, our future =====
    {
      id: "th4-woerter", kapitel: K.t4,
      titel: "Healthy eating & protecting the planet",
      kurz: "Wortfelder Ernährung, Umwelt, Körper und Gesundheit, Statistik – 38 Karten, 8 Fragen",
      erklaerung: "<p>Theme 4 fragt: Wie <b>ernähren</b> wir uns (vegetarisch, vegan, Massentierhaltung) und wie <b>schützen</b> wir den Planeten (Klimawandel, Plastik, Energie)? Du lernst, eine <b>Statistik</b> auszuwerten und eine <b>Erörterung</b> (comment) oder <b>Filmkritik</b> (review) zu schreiben.</p><p>Statistik-Sprache: <i>The pie chart shows … / According to the survey, … / The majority of … / A quarter of … / 40 per cent of the students … / The number of … has increased / decreased.</i> Erörterung: <i>Some people argue that … / On the other hand … / In conclusion, I think …</i></p>",
      aufgaben: karten([
        ["vegetarian", "Vegetarier/in; vegetarisch", "My sister has been a vegetarian for two years."],
        ["vegan", "Veganer/in; vegan", "Vegans don't eat any animal products."],
        ["factory farming", "Massentierhaltung", "Factory farming is bad for animals and the climate."],
        ["free-range", "aus Freilandhaltung", "We only buy free-range eggs."],
        ["organic", "biologisch, Bio-", "Organic food is often more expensive."],
        ["livestock", "Vieh, Nutztiere", "Livestock produces a lot of methane."],
        ["meat consumption", "Fleischkonsum", "Meat consumption is going down in Germany."],
        ["dairy products", "Milchprodukte", "Cheese and yoghurt are dairy products."],
        ["protein", "Eiweiß, Protein", "Beans are full of protein."],
        ["balanced diet", "ausgewogene Ernährung", "A balanced diet keeps you healthy."],
        ["junk food", "ungesundes Essen, Fast Food", "Too much junk food makes you tired."],
        ["to cut down on sth", "etwas reduzieren, weniger von etwas essen", "I'm trying to cut down on sugar."],
        ["food waste", "Lebensmittelverschwendung", "Food waste is a huge problem."],
        ["carbon footprint", "CO2-Fußabdruck", "Flying increases your carbon footprint."],
        ["greenhouse gas", "Treibhausgas", "CO2 is the best-known greenhouse gas."],
        ["global warming", "globale Erwärmung", "Global warming melts the ice caps."],
        ["climate change", "Klimawandel", "Climate change is already happening."],
        ["fossil fuels", "fossile Brennstoffe", "Coal, oil and gas are fossil fuels."],
        ["renewable energy", "erneuerbare Energie", "Wind and solar are renewable energy sources."],
        ["solar panel", "Solarmodul", "Our school has solar panels on the roof."],
        ["wind turbine", "Windrad", "Wind turbines produce clean electricity."],
        ["to recycle", "recyceln, wiederverwerten", "We recycle glass and paper."],
        ["single-use plastic", "Einwegplastik", "Single-use plastic is banned in many countries."],
        ["reusable", "wiederverwendbar", "Take a reusable bottle to school."],
        ["to reduce", "verringern, reduzieren", "We must reduce our emissions."],
        ["emissions", "Emissionen, Abgase", "Cars cause a lot of emissions."],
        ["pollution / to pollute", "Verschmutzung / verschmutzen", "Air pollution is dangerous for children."],
        ["landfill", "Mülldeponie", "Most rubbish still ends up in landfill."],
        ["deforestation", "Abholzung", "Deforestation destroys habitats."],
        ["endangered species", "bedrohte Art", "The orang-utan is an endangered species."],
        ["to go extinct", "aussterben", "Many species could go extinct."],
        ["drought", "Dürre", "The drought destroyed the harvest."],
        ["flood", "Überschwemmung", "Floods are getting more common."],
        ["activist", "Aktivist/in", "Young activists protest every Friday."],
        ["survey", "Umfrage", "We did a survey in our class."],
        ["per cent / percentage", "Prozent / Prozentsatz", "Sixty per cent of us eat meat every day."],
        ["the majority of", "die Mehrheit von", "The majority of students want more vegetarian food."],
        ["to increase / to decrease", "zunehmen / abnehmen", "The number of vegans has increased."],
      ]).concat([
        { t: "wahl", f: "Which of these is NOT a renewable energy source?", a: ["natural gas", "wind", "solar power", "water power"], r: 0, info: "Erdgas ist ein fossiler Brennstoff; Wind, Sonne und Wasser sind erneuerbar." },
        { t: "wahl", f: "What does 'a quarter of the students' mean?", a: ["25 per cent", "50 per cent", "75 per cent", "4 per cent"], r: 0, info: "a quarter = ein Viertel = 25 %." },
        { t: "wahl", f: "Which chart shows parts of a whole as slices?", a: ["pie chart", "bar chart", "line graph", "table"], r: 0, info: "pie chart = Kreisdiagramm (Tortendiagramm)." },
        { t: "wahl", f: "A vegan does NOT eat …", a: ["cheese", "beans", "rice", "apples"], r: 0, info: "Käse ist ein Milchprodukt – Veganer essen keine tierischen Produkte." },
        { t: "wahl", f: "Which gas is mainly responsible for global warming?", a: ["carbon dioxide (CO2)", "oxygen", "helium", "nitrogen"], r: 0, info: "CO2 ist das wichtigste Treibhausgas; Sauerstoff und Stickstoff sind Hauptbestandteile der Luft." },
        { t: "wahl", f: "Complete: 'The number of cyclists ___ from 20 to 35 per cent.'", a: ["has increased", "has decreased", "has stayed the same", "has fallen"], r: 0, info: "Von 20 auf 35 % → gestiegen → has increased." },
        { t: "wahl", f: "What is 'food waste'?", a: ["food that is thrown away", "food from a factory", "fast food", "food with a lot of fat"], r: 0, info: "food waste = weggeworfene Lebensmittel." },
        { t: "wahl", f: "Which word describes eggs from hens that can walk around outside?", a: ["free-range", "vegan", "single-use", "endangered"], r: 0, info: "free-range = aus Freilandhaltung." },
      ]),
    },
    {
      id: "th4-adverbien", kapitel: K.t4,
      titel: "Adverbs of manner & modals in the passive",
      kurz: "Adverbien der Art und Weise, Steigerung von Adverbien, Modalverb + Passiv – 18 Lücken",
      erklaerung: "<p><b>Adjektive</b> beschreiben ein Nomen (<i>a careful driver</i>), <b>Adverbien</b> beschreiben ein Verb, ein Adjektiv oder ein anderes Adverb (<i>he drives carefully</i>). Bildung: Adjektiv + <b>-ly</b>; <i>happy → happily, terrible → terribly</i>. Ausnahmen: <i>good → <b>well</b></i>; <i>fast, hard, late, early</i> bleiben gleich. Achtung: <i>hardly</i> = kaum, <i>lately</i> = in letzter Zeit. Nach <i>be, look, feel, smell, taste, sound</i> steht das <b>Adjektiv</b>: <i>It tastes good.</i></p><p><b>Steigerung von Adverbien:</b> <i>-ly</i>-Adverbien mit <b>more / most</b> (<i>more carefully, most carefully</i>); kurze mit <b>-er / -est</b> (<i>faster, hardest</i>); unregelmäßig: <i>well – better – best, badly – worse – worst</i>.</p><p><b>Modalverb + Passiv</b> (Challenge): <i>can / must / should / could + <b>be</b> + 3. Form</i>: <i>Plastic bags should <b>be banned</b>. The problem can <b>be solved</b>.</i></p>",
      aufgaben: luecken([
        ["She explained the statistics very ___ (clear).", ["clearly"], "Beschreibt das Verb explained → Adverb: clearly."],
        ["He is a ___ (careful) shopper – he always reads the labels.", ["careful"], "Beschreibt das Nomen shopper → Adjektiv bleibt."],
        ["Our team played ___ (good) in the climate quiz.", ["well"], "good → well (unregelmäßiges Adverb)."],
        ["The vegan burger tastes ___ (good).", ["good"], "Nach taste steht das Adjektiv: tastes good."],
        ["The ice is melting ___ (fast) than scientists expected.", ["faster"], "fast ist Adjektiv und Adverb; Steigerung: faster."],
        ["Of all the students, Lena recycles ___ (careful).", ["the most carefully", "most carefully"], "-ly-Adverb → Superlativ mit most."],
        ["You should drive ___ (slow) in the rain.", ["slowly", "more slowly"], "Beschreibt drive → slowly."],
        ["The farmers worked ___ (hard) during the drought.", ["hard"], "hard bleibt als Adverb gleich; hardly bedeutet kaum."],
        ["We ___ (hard) ever eat meat at home. (kaum)", ["hardly"], "hardly ever = fast nie."],
        ["The activists spoke ___ (angry) about the new coal plant.", ["angrily"], "angry → angrily (y wird zu i)."],
        ["This year the summer was ___ (bad) than last year. (Adjektiv)", ["worse"], "bad → worse → worst."],
        ["She sings ___ (beautiful) – everyone listened quietly.", ["beautifully"], "beautiful → beautifully."],
        ["Single-use plastic should ___ (ban) in schools.", ["be banned"], "Modalverb + be + 3. Form: should be banned."],
        ["This problem can ___ (solve) if we work together.", ["be solved"], "can + be + solved."],
        ["More trees must ___ (plant) every year.", ["be planted"], "must + be + planted."],
        ["Meat could ___ (replace) by plant-based products.", ["be replaced"], "could + be + replaced."],
        ["Old phones shouldn't ___ (throw) away – they can be recycled.", ["be thrown"], "shouldn't + be + thrown (3. Form von throw)."],
        ["Our food has to ___ (produce) in a sustainable way.", ["be produced"], "has to + be + produced (Ersatzform von must)."],
      ]),
    },

    // ===== Theme 5: Making a living =====
    {
      id: "th5-woerter", kapitel: K.t5,
      titel: "Work experience, money & advertising",
      kurz: "Wortfelder Berufe, höfliches Verhalten, Geld, Werbung – 36 Karten, 8 Fragen",
      erklaerung: "<p>In Theme 5 geht es um das <b>Arbeitsleben</b> (Praktikum, Stellenanzeigen, Soft Skills, Vorstellungsgespräch) und um <b>Geld</b>: Kaufverhalten, Sparen, Schulden, Werbung und Obdachlosigkeit. Die Target task: Werbung für ein eigenes Produkt entwerfen.</p><p><b>Höfliches Verhalten</b> im Gespräch: <i>Could you tell me …? / Would you mind + -ing? / I'd like to … / Thank you for your time. / I'm afraid I can't …</i>. Beim Thema Geld: <b>borrow</b> = sich leihen (nehmen), <b>lend</b> = verleihen (geben).</p>",
      aufgaben: karten([
        ["work experience", "Praktikum, Berufserfahrung", "I did my work experience at a bakery."],
        ["apprenticeship / apprentice", "Ausbildung / Auszubildende/r", "He started an apprenticeship as an electrician."],
        ["employer / employee", "Arbeitgeber/in / Arbeitnehmer/in", "A good employer listens to the employees."],
        ["to earn", "verdienen", "How much does a nurse earn?"],
        ["salary / wage", "Gehalt (monatlich) / Lohn (pro Stunde, Woche)", "Her salary is paid every month."],
        ["to hire / to fire", "einstellen / entlassen", "The company hired ten new people."],
        ["shift", "Schicht", "Nurses often work night shifts."],
        ["part-time / full-time", "Teilzeit / Vollzeit", "She works part-time in a shop."],
        ["soft skills", "soziale Kompetenzen", "Teamwork and communication are soft skills."],
        ["team player", "Teamplayer, teamfähige Person", "We are looking for a team player."],
        ["deadline", "Abgabetermin, Frist", "The deadline for applications is 1 May."],
        ["job advert / job ad", "Stellenanzeige", "I found the job advert online."],
        ["to apply for a job", "sich um eine Stelle bewerben", "I applied for a job at the zoo."],
        ["skills / qualifications", "Fähigkeiten / Qualifikationen", "List your skills in your CV."],
        ["pocket money", "Taschengeld", "I get 30 euros pocket money a month."],
        ["to save up (for sth)", "sparen (auf etwas)", "I'm saving up for a new bike."],
        ["to spend money on sth", "Geld ausgeben für etwas", "She spends a lot on clothes."],
        ["to afford sth", "sich etwas leisten können", "I can't afford a new phone."],
        ["budget", "Budget, Haushaltsplan", "Make a budget for the month."],
        ["bargain", "Schnäppchen", "These shoes were a real bargain."],
        ["debt / to be in debt", "Schulden / Schulden haben", "Many young people are in debt."],
        ["to owe sb money", "jdm. Geld schulden", "You still owe me ten euros."],
        ["to borrow / to lend", "sich leihen / verleihen", "Can I borrow your pen? – Sure, I'll lend it to you."],
        ["interest", "Zinsen", "The bank pays very little interest."],
        ["bank account", "Bankkonto", "I opened my first bank account at 14."],
        ["to withdraw money", "Geld abheben", "You can withdraw money at the cash machine."],
        ["cash", "Bargeld", "Do you pay in cash or by card?"],
        ["receipt", "Kassenbon, Quittung", "Keep the receipt in case you want a refund."],
        ["refund", "Rückerstattung", "They gave me a full refund."],
        ["advert / commercial", "Werbeanzeige / Werbespot", "That commercial is really funny."],
        ["slogan", "Werbespruch, Slogan", "A good slogan is short and catchy."],
        ["catchy", "eingängig", "The jingle is really catchy."],
        ["target group", "Zielgruppe", "The target group is teenagers."],
        ["to persuade sb", "jdn. überreden, überzeugen", "Adverts try to persuade you to buy things."],
        ["homeless / homelessness", "obdachlos / Obdachlosigkeit", "Homelessness is a growing problem in big cities."],
        ["charity / to donate", "Wohltätigkeitsorganisation / spenden", "We donated the money to a charity."],
      ]).concat([
        { t: "wahl", f: "Which is correct? 'Can I ___ your charger for a minute?'", a: ["borrow", "lend", "owe", "earn"], r: 0, info: "borrow = sich leihen (nehmen); lend = verleihen (geben)." },
        { t: "wahl", f: "What is a slogan?", a: ["a short, catchy phrase used in advertising", "a type of bank account", "a person who works part-time", "a list of your skills"], r: 0, info: "slogan = Werbespruch." },
        { t: "wahl", f: "'I can't afford it' means …", a: ["I don't have enough money for it.", "I don't like it.", "I have already bought it.", "I lent it to somebody."], r: 0, info: "afford = sich leisten können." },
        { t: "wahl", f: "Who pays your salary?", a: ["your employer", "your employee", "your target group", "your charity"], r: 0, info: "employer = Arbeitgeber/in; employee = Arbeitnehmer/in." },
        { t: "wahl", f: "Which sentence is the most polite way to ask for information?", a: ["Could you tell me when the shift starts?", "Tell me when the shift starts.", "When does the shift start?!", "I want to know when the shift starts."], r: 0, info: "Could you tell me …? ist die höfliche indirekte Frage." },
        { t: "wahl", f: "What do you need to get a refund?", a: ["the receipt", "a slogan", "a deadline", "a bargain"], r: 0, info: "receipt = Kassenbon; ohne ihn gibt es meist kein Geld zurück." },
        { t: "wahl", f: "Which of these is a soft skill?", a: ["teamwork", "speaking three languages", "a driving licence", "a school-leaving certificate"], r: 0, info: "Soft skills sind soziale Fähigkeiten wie Teamwork; die anderen sind fachliche Qualifikationen." },
        { t: "wahl", f: "What is the money a bank pays you for your savings called?", a: ["interest", "debt", "wage", "refund"], r: 0, info: "interest = Zinsen." },
      ]),
    },
    {
      id: "th5-reflexiv-adjektive", kapitel: K.t5,
      titel: "Reflexive pronouns, adjectives as nouns & past perfect progressive",
      kurz: "myself/each other, the rich / the homeless, had been doing – 18 Lücken",
      erklaerung: "<p><b>Reflexivpronomen:</b> <i>myself, yourself, himself, herself, itself, ourselves, yourselves, themselves</i>. Sie stehen, wenn Subjekt und Objekt dieselbe Person sind: <i>I hurt myself.</i> Nicht bei <i>feel, relax, concentrate, meet</i>! <i>by myself</i> = allein. <b>each other</b> = einander (zwei Personen gegenseitig): <i>They help each other.</i></p><p><b>Adjektive als Nomen:</b> <i>the + Adjektiv</i> bezeichnet eine ganze Gruppe und ist <b>Plural</b>: <i>the rich, the poor, the homeless, the unemployed, the elderly, the young, the blind</i>. <i>The homeless <b>need</b> help</i> (nicht needs).</p><p><b>Past perfect progressive</b> (Challenge): <i>had been + -ing</i> – eine Handlung, die bis zu einem Zeitpunkt in der Vergangenheit <b>andauerte</b>: <i>She had been saving for a year when she finally bought the bike.</i></p>",
      aufgaben: luecken([
        ["I cut ___ while I was making sandwiches at work.", ["myself"], "Subjekt I = Objekt → myself."],
        ["Did you enjoy ___ at the job fair? (ihr, Plural)", ["yourselves"], "you (Plural) → yourselves."],
        ["She bought ___ a new laptop with her first salary.", ["herself"], "Sie kauft für sich selbst → herself."],
        ["The boss introduced ___ to the new trainees.", ["himself", "herself"], "Subjekt und Objekt gleich → himself / herself."],
        ["Tom and Anna lend ___ money when they are broke. (einander)", ["each other", "one another"], "Gegenseitig → each other."],
        ["He started the business all by ___. (allein)", ["himself"], "by himself = allein, ohne Hilfe."],
        ["The machine switches ___ off after ten minutes.", ["itself"], "it → itself."],
        ["___ (the + reich) are getting richer.", ["the rich"], "the + Adjektiv = die Gruppe: the rich."],
        ["The charity gives food to ___ (the + obdachlos).", ["the homeless"], "the homeless = die Obdachlosen."],
        ["___ (the + arbeitslos) can apply for this training programme.", ["the unemployed"], "the unemployed = die Arbeitslosen."],
        ["Many shops offer discounts to ___ (the + alt/ältere Menschen, höflich).", ["the elderly"], "the elderly = ältere Menschen (höflicher als the old)."],
        ["The homeless ___ (need / needs) warm places in winter.", ["need"], "the + Adjektiv ist Plural → need."],
        ["___ (the + jung) often spend more than they earn.", ["the young"], "the young = die jungen Leute."],
        ["She ___ (save) for two years when she finally bought her first car.", ["had been saving"], "Andauernde Handlung bis zu einem Punkt in der Vergangenheit → had been saving."],
        ["By the time the shop opened, people ___ (queue) for hours.", ["had been queuing", "had been queueing"], "Dauer bis zu einem vergangenen Zeitpunkt → past perfect progressive."],
        ["He was tired because he ___ (work) night shifts all week.", ["had been working"], "Grund für die Müdigkeit = vorher andauernde Handlung → had been working."],
        ["They ___ (look) for a flat for months before they found one.", ["had been looking"], "Suche dauerte an, bevor sie etwas fanden → had been looking."],
      ]).concat([
        { t: "wahl", f: "Which sentence is correct?", a: ["We relaxed after the long shift.", "We relaxed ourselves after the long shift.", "We relaxed us after the long shift.", "We relaxed each other after the long shift."], r: 0, info: "relax, feel, concentrate und meet stehen im Englischen ohne Reflexivpronomen." },
      ]),
    }
  );

  // ---- Reihenfolge: Themen stabil nach Buchkapitel sortieren (Kapitel ohne Zuordnung ans Ende) -----
  const rang = (t) => { const i = REIHENFOLGE.indexOf(t.kapitel); return i < 0 ? REIHENFOLGE.length : i; };
  FACH.themen = FACH.themen.map((t, i) => [t, i]).sort((a, b) => rang(a[0]) - rang(b[0]) || a[1] - b[1]).map((x) => x[0]);
})();
