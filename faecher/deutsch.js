"use strict";
(function () {
const FACH = {
  id: "deutsch",
  name: "Deutsch",
  icon: "📚",
  farbe: "#b03a48",
  beschreibung: "Rechtschreibung, Grammatik, Stilmittel, Textsorten, Fremdwörter",
  themen: [
    {
      id: "dasdass",
      titel: "das oder dass",
      kurz: "Ersatzprobe mit dieses/jenes/welches",
      erklaerung: `<p><b>das</b> mit einem s ist entweder ein Artikel (<i>das Haus</i>), ein Demonstrativpronomen (<i>Das weiß ich</i>) oder ein Relativpronomen (<i>das Buch, das ich lese</i>). <b>dass</b> mit zwei s ist eine Konjunktion: Es leitet einen Nebensatz ein und hat keine eigene Bedeutung.</p>
<p>Die wichtigste Hilfe ist die <b>Ersatzprobe</b>: Kannst du das Wort durch <i>dieses</i>, <i>jenes</i> oder <i>welches</i> ersetzen, schreibst du <b>das</b>. Geht das nicht, schreibst du <b>dass</b>.</p>
<ul>
<li>Ich hoffe, <b>dass</b> du kommst. – „Ich hoffe, welches du kommst“ geht nicht → dass.</li>
<li>Das Auto, <b>das</b> dort steht, ist neu. – „welches dort steht“ geht → das.</li>
</ul>
<p>Typischer Fehler: Nach Verben wie <i>sagen, glauben, hoffen, wissen, finden</i> folgt sehr oft <b>dass</b>. Steht vor dem Wort ein Komma, ist dass wahrscheinlicher – aber nicht sicher, denn Relativsätze beginnen auch nach einem Komma mit <i>das</i>. Deshalb immer die Ersatzprobe machen.</p>`,
      aufgaben: [
        { t: "eingabe", f: "Ich glaube, ___ wir heute früher Schluss haben.", l: ["dass"], info: "Konjunktion: „welches wir heute früher Schluss haben“ geht nicht – also dass." },
        { t: "eingabe", f: "Das Fahrrad, ___ vor der Tür steht, gehört Lena.", l: ["das"], info: "Relativpronomen: „welches vor der Tür steht“ passt – also das." },
        { t: "eingabe", f: "Weißt du, ___ morgen ein Test ist?", l: ["dass"], info: "„Weißt du, welches morgen ein Test ist“ ergibt keinen Sinn – also dass." },
        { t: "eingabe", f: "___ Wetter wird am Wochenende besser.", l: ["das"], info: "Artikel vor Wetter: „Dieses Wetter wird besser“ passt – also das." },
        { t: "eingabe", f: "Ich finde es schade, ___ du nicht mitkommst.", l: ["dass"], info: "Konjunktion nach „schade“: Ersatz durch dieses/jenes/welches geht nicht." },
        { t: "eingabe", f: "Er erzählte etwas, ___ niemand glauben wollte.", l: ["das"], info: "Relativpronomen zu „etwas“: „welches niemand glauben wollte“ passt." },
        { t: "eingabe", f: "___ kann doch nicht wahr sein!", l: ["das"], info: "Demonstrativpronomen: „Dieses kann doch nicht wahr sein“ passt – also das." },
        { t: "eingabe", f: "Der Trainer verlangt, ___ alle pünktlich sind.", l: ["dass"], info: "Nach „verlangt“ folgt ein dass-Satz; die Ersatzprobe scheitert." },
        { t: "eingabe", f: "Sie war so müde, ___ sie sofort einschlief.", l: ["dass"], info: "„so …, dass“ ist eine feste Verbindung für die Folge – Konjunktion dass." },
        { t: "eingabe", f: "Das Kind, ___ dort spielt, ist mein Cousin.", l: ["das"], info: "Relativpronomen: „welches dort spielt“ passt." },
        { t: "eingabe", f: "Es ist wichtig, ___ du deine Hausaufgaben machst.", l: ["dass"], info: "Konjunktion nach „wichtig“: Ersatzprobe geht nicht." },
        { t: "eingabe", f: "Ich habe ___ Buch gelesen, ___ du mir empfohlen hast. (Schreibe beide Wörter mit Leerzeichen.)", l: ["das das"], info: "Erst Artikel (dieses Buch), dann Relativpronomen (welches du mir empfohlen hast) – beide Male das." },
        { t: "wahl", f: "In welchem Satz ist „dass“ richtig geschrieben?", a: ["Ich weiß, dass er lügt.", "Das Haus, dass dort steht, ist alt.", "Dass ist mein Hund.", "Er nahm dass Geld."], r: 0, info: "Nur im ersten Satz ist es eine Konjunktion; in den anderen passt dieses/jenes/welches, also das." },
        { t: "wahl", f: "Welche Ersatzprobe hilft bei das/dass?", a: ["dieses, jenes, welches", "ob, wenn, weil", "er, sie, es", "hier, dort, da"], r: 0, info: "Passt dieses/jenes/welches, schreibst du das mit einem s." },
        { t: "wahl", f: "„Das Problem ist, ___ wir zu spät sind.“ – Was fehlt?", a: ["dass", "das", "daß", "des"], r: 0, info: "Konjunktion nach „ist“ mit Komma; daß ist alte Rechtschreibung und heute falsch." },
        { t: "wahl", f: "Welche Wortart kann „das“ NICHT sein?", a: ["Konjunktion", "Artikel", "Relativpronomen", "Demonstrativpronomen"], r: 0, info: "Die Konjunktion wird immer dass geschrieben; das ist Artikel oder Pronomen." },
        { t: "paare", f: "Ordne den Sätzen die Wortart des markierten Wortes zu.", p: [["DAS Auto fährt schnell.", "Artikel"], ["Das Auto, DAS ich mag.", "Relativpronomen"], ["DAS gefällt mir.", "Demonstrativpronomen"], ["Ich hoffe, DASS es klappt.", "Konjunktion"]] },
        { t: "reihenfolge", f: "Bringe die Schritte der Ersatzprobe in die richtige Reihenfolge.", items: ["Satz mit das/dass lesen", "Wort probeweise durch dieses/jenes/welches ersetzen", "Prüfen, ob der Satz noch Sinn ergibt", "Passt es: das – passt es nicht: dass"] }
      ]
    },
    {
      id: "kommas",
      titel: "Kommasetzung",
      kurz: "Haupt-/Nebensatz, Aufzählung, Infinitivgruppen, Relativsätze",
      erklaerung: `<p>Kommas trennen Satzteile, damit der Leser den Satz richtig versteht. Die wichtigsten Regeln für Klasse 9:</p>
<ul>
<li><b>Haupt- und Nebensatz:</b> Ein Nebensatz (eingeleitet durch <i>weil, dass, obwohl, wenn, als, nachdem</i> …) wird immer durch Komma abgetrennt: <i>Ich bleibe zu Hause, weil es regnet.</i></li>
<li><b>Relativsätze</b> (mit <i>der, die, das, welcher, wo</i> …) werden vorne und hinten abgetrennt: <i>Der Mann, der dort steht, ist mein Onkel.</i></li>
<li><b>Aufzählungen:</b> Zwischen gleichrangige Wörter kommt ein Komma, außer vor <i>und</i>, <i>oder</i>: <i>Äpfel, Birnen und Kirschen.</i></li>
<li><b>Infinitivgruppen</b> (zu + Verb) brauchen ein Komma, wenn sie mit <i>um, ohne, statt, anstatt, außer, als</i> eingeleitet werden oder von einem Nomen oder Hinweiswort (<i>es, daran, darauf</i>) abhängen: <i>Er lernt, um die Prüfung zu bestehen.</i></li>
<li><b>Zwei Hauptsätze:</b> Komma zwischen ihnen, bei <i>und</i>/<i>oder</i> kann es weggelassen werden: <i>Es regnet, die Straßen sind nass.</i></li>
<li><b>Anrede, Ausruf, Apposition:</b> <i>Tom, komm her! Oh, das wusste ich nicht. Frau Meier, unsere Lehrerin, ist krank.</i></li>
</ul>
<p>Typischer Fehler: Ein Komma vor <i>und</i> in einer einfachen Aufzählung oder ein fehlendes Schlusskomma nach einem eingeschobenen Nebensatz.</p>`,
      aufgaben: [
        { t: "wahl", f: "Wo fehlt das Komma? „Ich komme später weil ich noch Training habe.“", a: ["später, weil", "Ich, komme", "noch, Training", "Es fehlt kein Komma"], r: 0, info: "Vor der Konjunktion „weil“ beginnt ein Nebensatz – Komma davor." },
        { t: "wahl", f: "Wo fehlt das Komma? „Der Hund der im Garten bellt gehört den Nachbarn.“", a: ["Hund, der … bellt, gehört", "Hund der … bellt, gehört", "Hund, der … bellt gehört", "Es fehlt kein Komma"], r: 0, info: "Der Relativsatz „der im Garten bellt“ ist eingeschoben und wird vorne und hinten abgetrennt." },
        { t: "wahl", f: "Welche Aufzählung ist richtig?", a: ["Wir kaufen Brot, Käse und Milch.", "Wir kaufen Brot, Käse, und Milch.", "Wir kaufen, Brot, Käse und Milch.", "Wir kaufen Brot Käse und Milch."], r: 0, info: "In Aufzählungen trennt das Komma die Glieder, vor „und“ steht keins." },
        { t: "wahl", f: "Wo fehlt das Komma? „Er trainiert jeden Tag um das Turnier zu gewinnen.“", a: ["Tag, um", "trainiert, jeden", "Turnier, zu", "Es fehlt kein Komma"], r: 0, info: "Infinitivgruppe mit „um … zu“ wird immer durch Komma abgetrennt." },
        { t: "wahl", f: "Wo fehlt das Komma? „Sie sagte dass sie morgen kommt.“", a: ["sagte, dass", "Sie, sagte", "morgen, kommt", "Es fehlt kein Komma"], r: 0, info: "Der dass-Satz ist ein Nebensatz und wird abgetrennt." },
        { t: "wahl", f: "Welcher Satz mit vorangestelltem Nebensatz ist richtig?", a: ["Obwohl es regnete, gingen wir spazieren.", "Obwohl es regnete gingen wir spazieren.", "Obwohl, es regnete, gingen wir spazieren.", "Obwohl es, regnete gingen wir spazieren."], r: 0, info: "Steht der Nebensatz vorne, kommt das Komma zwischen Nebensatz und Hauptsatz." },
        { t: "wahl", f: "Wo fehlt das Komma? „Lisa unsere Klassensprecherin hat eine Idee.“", a: ["Lisa, unsere Klassensprecherin, hat", "Lisa unsere, Klassensprecherin hat", "Lisa unsere Klassensprecherin, hat", "Es fehlt kein Komma"], r: 0, info: "Die Apposition „unsere Klassensprecherin“ ist ein Einschub und wird beidseitig abgetrennt." },
        { t: "wahl", f: "Braucht dieser Satz ein Komma? „Ich hoffe das Spiel zu gewinnen.“", a: ["Nein, das Komma ist hier freiwillig", "Ja, zwingend vor „das Spiel“", "Ja, zwingend vor „zu“", "Ja, nach „Ich“"], r: 0, info: "Einfache Infinitivgruppen ohne um/ohne/statt und ohne Hinweiswort dürfen, müssen aber nicht abgetrennt werden." },
        { t: "wahl", f: "Wo fehlt das Komma? „Es wurde dunkel die Lichter gingen an.“", a: ["dunkel, die", "Es, wurde", "Lichter, gingen", "Es fehlt kein Komma"], r: 0, info: "Zwei vollständige Hauptsätze ohne Konjunktion werden durch Komma getrennt." },
        { t: "wahl", f: "Welcher Satz mit Infinitivgruppe ist richtig?", a: ["Er ging, ohne sich zu verabschieden.", "Er ging ohne, sich zu verabschieden.", "Er ging ohne sich, zu verabschieden.", "Er ging ohne sich zu verabschieden, ."], r: 0, info: "Infinitivgruppen mit „ohne … zu“ werden immer durch Komma abgetrennt." },
        { t: "wahl", f: "Wo fehlt das Komma? „Ich weiß nicht ob er kommt.“", a: ["nicht, ob", "weiß, nicht", "er, kommt", "Es fehlt kein Komma"], r: 0, info: "„ob“ leitet einen indirekten Fragesatz (Nebensatz) ein – Komma davor." },
        { t: "wahl", f: "Wo fehlt das Komma? „Ach das habe ich ganz vergessen.“", a: ["Ach, das", "habe, ich", "ganz, vergessen", "Es fehlt kein Komma"], r: 0, info: "Ausrufewörter am Satzanfang werden durch Komma abgetrennt." },
        { t: "wahl", f: "Welcher Satz mit „und“ ist richtig?", a: ["Wir gehen ins Kino und essen danach Pizza.", "Wir gehen ins Kino, und essen danach Pizza.", "Wir gehen, ins Kino und essen danach Pizza.", "Wir, gehen ins Kino und essen danach Pizza."], r: 0, info: "Hier verbindet „und“ zwei Satzteile mit demselben Subjekt – kein Komma." },
        { t: "eingabe", f: "Welches Satzzeichen trennt einen Nebensatz vom Hauptsatz ab?", l: ["Komma", "das Komma", "ein Komma"], info: "Nebensätze werden immer durch Komma abgetrennt." },
        { t: "eingabe", f: "Vor welcher Konjunktion steht in einer Aufzählung normalerweise KEIN Komma: „Äpfel, Birnen ___ Kirschen“?", l: ["und"], info: "Vor und/oder in Aufzählungen entfällt das Komma." },
        { t: "paare", f: "Ordne den Beispielen die Kommaregel zu.", p: [["Ich lerne, weil ich eine gute Note will.", "Nebensatz mit Konjunktion"], ["Das Buch, das ich lese, ist spannend.", "Relativsatz"], ["Rot, grün und blau.", "Aufzählung"], ["Er kam, um zu helfen.", "Infinitivgruppe mit um"]] },
        { t: "paare", f: "Ordne zu: Wort → Wortart und Komma-Folge.", p: [["weil", "unterordnende Konjunktion, Komma"], ["und", "nebenordnende Konjunktion, meist kein Komma"], ["der/die/das (Relativpronomen)", "leitet Relativsatz ein, Komma"], ["um … zu", "Infinitivgruppe, Komma"]] },
        { t: "reihenfolge", f: "Bringe die Satzteile in die richtige Reihenfolge (mit Komma gedacht).", items: ["Der Lehrer,", "der heute krank ist,", "hat uns eine Aufgabe", "geschickt."] }
      ]
    },
    {
      id: "rechtschreibung",
      titel: "Rechtschreibung",
      kurz: "Nominalisierung, seit/seid, wieder/wider, Tod/tot, -ig/-lich, Dehnung/Schärfung",
      erklaerung: `<p><b>Groß- und Kleinschreibung:</b> Nomen schreibt man groß. Auch Verben und Adjektive werden groß, wenn sie <b>nominalisiert</b> sind. Signale dafür sind Artikel (<i>das Lesen</i>), Pronomen (<i>sein Lachen</i>), Präpositionen mit Artikel (<i>beim Schwimmen</i>) und Mengenwörter (<i>etwas Neues, viel Gutes</i>).</p>
<p><b>seit/seid:</b> <i>seit</i> bezeichnet Zeit (<i>seit gestern</i>), <i>seid</i> ist die Verbform von sein (<i>ihr seid</i>). Merkhilfe: seid mit d wie „ihr seid“.</p>
<p><b>wieder/wider:</b> <i>wieder</i> heißt „noch einmal“ (<i>wiederholen</i>), <i>wider</i> heißt „gegen“ (<i>widersprechen, widerlich</i>).</p>
<p><b>Tod/tot:</b> <i>der Tod</i> ist das Nomen mit d (<i>des Todes</i>), <i>tot</i> ist das Adjektiv mit t (<i>er ist tot, totenstill</i>). Verlängerungsprobe: Todes → d.</p>
<p><b>-ig/-lich:</b> Verlängern hilft: <i>ruhig → ruhige</i> (hört man g), <i>freundlich → freundliche</i> (hört man ch).</p>
<p><b>Dehnung und Schärfung:</b> Nach kurzem, betontem Vokal wird der Konsonant verdoppelt (<i>kommen, Mitte, Ball</i>; bei k → ck, bei z → tz). Nach langem Vokal steht ein einfacher Konsonant, oft mit Dehnungs-h (<i>fahren, Zahl</i>) oder Doppelvokal (<i>Boot, Meer</i>).</p>
<p>Typischer Fehler: Nominalisierungen nach „beim“, „zum“, „etwas“ klein zu schreiben.</p>`,
      aufgaben: [
        { t: "wahl", f: "Welcher Satz ist richtig geschrieben?", a: ["Beim Lesen vergesse ich die Zeit.", "Beim lesen vergesse ich die Zeit.", "Beim Lesen vergesse ich die zeit.", "beim lesen Vergesse ich die Zeit."], r: 0, info: "Nach „beim“ (bei dem) ist Lesen nominalisiert und wird großgeschrieben." },
        { t: "wahl", f: "Welche Schreibung ist richtig?", a: ["Wir haben etwas Neues gelernt.", "Wir haben etwas neues gelernt.", "Wir haben Etwas neues gelernt.", "Wir haben etwas Neues Gelernt."], r: 0, info: "Nach Mengenwörtern wie etwas, viel, nichts, wenig wird das Adjektiv nominalisiert und großgeschrieben." },
        { t: "eingabe", f: "Ihr ___ heute aber spät dran! (seit/seid)", l: ["seid"], info: "Verbform von sein: „ihr seid“ – mit d." },
        { t: "eingabe", f: "___ gestern regnet es ohne Pause. (seit/seid)", l: ["seit"], info: "Zeitangabe „seit gestern“ – mit t." },
        { t: "eingabe", f: "Kannst du den Satz bitte ___holen? (wieder/wider)", l: ["wieder"], info: "wiederholen = noch einmal machen – mit ie." },
        { t: "eingabe", f: "Sie hat dem Lehrer ___sprochen. (wieder/wider)", l: ["wider"], info: "widersprechen = gegen etwas sprechen – ohne e." },
        { t: "eingabe", f: "Der ___ des Königs löste einen Krieg aus. (Tod/tot)", l: ["Tod"], info: "Nomen mit Artikel „der“, Verlängerung „Todes“ → d." },
        { t: "eingabe", f: "Nach dem Sturm lag der Baum ___ am Boden. (Tod/tot)", l: ["tot"], info: "Adjektiv: Wie ist der Baum? tot – mit t, klein." },
        { t: "wahl", f: "Wie endet das Wort richtig: „Der Himmel ist heute wolk__“?", a: ["wolkig", "wolkich", "wolkisch", "wolklich"], r: 0, info: "Verlängern: wolkige – man hört das g, also -ig." },
        { t: "wahl", f: "Wie endet das Wort richtig: „Sie ist sehr freund____“?", a: ["freundlich", "freundlig", "freundlisch", "freundlik"], r: 0, info: "Verlängern: freundliche – man hört ch, also -lich." },
        { t: "wahl", f: "Welches Wort mit kurzem Vokal ist richtig geschrieben?", a: ["Mitte", "Mite", "Miete (für Zentrum)", "Mitthe"], r: 0, info: "Kurzer betonter Vokal i → Konsonant wird verdoppelt: Mitte." },
        { t: "wahl", f: "Welches Wort mit langem Vokal ist richtig geschrieben?", a: ["fahren", "faren", "fahrren", "farhen"], r: 0, info: "Langer Vokal a mit Dehnungs-h: fahren." },
        { t: "wahl", f: "Nach kurzem Vokal schreibt man statt kk …", a: ["ck", "k", "kh", "ch"], r: 0, info: "Beispiel: Zucker, Rücken – k wird nach kurzem Vokal zu ck." },
        { t: "wahl", f: "Nach kurzem Vokal schreibt man statt zz …", a: ["tz", "z", "zt", "ts"], r: 0, info: "Beispiel: Katze, Platz – z wird nach kurzem Vokal zu tz." },
        { t: "eingabe", f: "Richtig oder falsch? Der Satz „Das lachen der Kinder war laut“ ist korrekt geschrieben. Antworte mit richtig oder falsch.", l: ["falsch"], info: "„Das Lachen“ ist nominalisiert (Artikel das) und wird großgeschrieben." },
        { t: "paare", f: "Ordne die Wörter der passenden Regel zu.", p: [["Boot", "Dehnung durch Doppelvokal"], ["Zahl", "Dehnung durch h"], ["Ball", "Schärfung durch Doppelkonsonant"], ["Katze", "Schärfung mit tz"]] },
        { t: "paare", f: "Ordne die Bedeutung zu.", p: [["seit", "Zeitangabe"], ["seid", "Form von sein"], ["wieder", "noch einmal"], ["wider", "gegen"]] },
        { t: "wahl", f: "Welcher Satz mit nominalisiertem Adjektiv ist richtig geschrieben?", a: ["Das Beste kommt zum Schluss.", "Das beste kommt zum Schluss.", "Das Beste kommt zum schluss.", "das beste kommt zum Schluss."], r: 0, info: "„Das Beste“ ist ein nominalisiertes Adjektiv mit Artikel; „Schluss“ ist ein Nomen." }
      ]
    },
    {
      id: "grammatik",
      titel: "Grammatik",
      kurz: "Satzglieder, Kasus, Aktiv/Passiv, Konjunktiv I und II, indirekte Rede",
      erklaerung: `<p><b>Satzglieder</b> erkennst du mit der Umstellprobe: Alles, was zusammen verschoben werden kann, ist ein Satzglied. Das <b>Subjekt</b> (wer oder was?) steht im Nominativ, das <b>Prädikat</b> ist das Verb. <b>Objekte</b> ergänzen das Verb: Genitivobjekt (wessen?), Dativobjekt (wem?), Akkusativobjekt (wen oder was?). <b>Adverbiale</b> geben Ort (wo?), Zeit (wann?), Grund (warum?) oder Art und Weise (wie?) an.</p>
<p><b>Kasus</b> bestimmst du mit der Frageprobe: Nominativ – wer/was, Genitiv – wessen, Dativ – wem, Akkusativ – wen/was.</p>
<p><b>Aktiv und Passiv:</b> Im Aktiv handelt das Subjekt (<i>Der Koch brät das Fleisch</i>). Im Passiv steht die Handlung im Mittelpunkt, der Täter kann wegfallen (<i>Das Fleisch wird gebraten</i>). Das Vorgangspassiv wird mit <i>werden</i> + Partizip II gebildet, das Zustandspassiv mit <i>sein</i>.</p>
<p><b>Konjunktiv I</b> wird vom Präsensstamm gebildet (<i>er gehe, sie habe, er sei</i>) und dient vor allem der <b>indirekten Rede</b>: <i>Sie sagte, sie habe keine Zeit.</i> Ist der Konjunktiv I gleich dem Indikativ (z. B. <i>wir haben</i>), weicht man auf den <b>Konjunktiv II</b> aus (<i>wir hätten</i>).</p>
<p><b>Konjunktiv II</b> wird vom Präteritum gebildet, oft mit Umlaut (<i>käme, wäre, hätte, könnte</i>) oder mit <i>würde</i> + Infinitiv. Er drückt Wünsche, Irreales und Höflichkeit aus: <i>Wenn ich Zeit hätte, käme ich.</i></p>
<p>Typischer Fehler: In der indirekten Rede den Indikativ zu lassen (<i>Er sagte, er ist krank</i>) statt <i>er sei krank</i>.</p>`,
      aufgaben: [
        { t: "wahl", f: "Welches Satzglied ist „dem Hund“ in „Tim gibt dem Hund einen Knochen“?", a: ["Dativobjekt", "Akkusativobjekt", "Subjekt", "Adverbiale"], r: 0, info: "Frage: Wem gibt Tim einen Knochen? – dem Hund → Dativobjekt." },
        { t: "wahl", f: "Welches Satzglied ist „einen Knochen“ in „Tim gibt dem Hund einen Knochen“?", a: ["Akkusativobjekt", "Dativobjekt", "Genitivobjekt", "Prädikat"], r: 0, info: "Frage: Wen oder was gibt Tim? – einen Knochen → Akkusativobjekt." },
        { t: "wahl", f: "Welches Satzglied ist „am Montag“ in „Am Montag schreiben wir eine Arbeit“?", a: ["Adverbiale der Zeit", "Adverbiale des Ortes", "Subjekt", "Akkusativobjekt"], r: 0, info: "Frage: Wann? – am Montag → temporale Adverbiale." },
        { t: "wahl", f: "Welches Satzglied ist „wegen des Regens“ in „Wegen des Regens fällt das Spiel aus“?", a: ["Adverbiale des Grundes", "Genitivobjekt", "Adverbiale der Art und Weise", "Dativobjekt"], r: 0, info: "Frage: Warum? – wegen des Regens → kausale Adverbiale (nicht Objekt, obwohl Genitiv)." },
        { t: "eingabe", f: "In welchem Kasus steht „des Lehrers“ in „Das Auto des Lehrers ist rot“?", l: ["Genitiv"], info: "Frage: Wessen Auto? – des Lehrers → Genitiv." },
        { t: "eingabe", f: "In welchem Kasus steht „der Hund“ in „Der Hund bellt laut“?", l: ["Nominativ"], info: "Frage: Wer bellt? – der Hund → Nominativ, Subjekt." },
        { t: "eingabe", f: "In welchem Kasus steht „den Ball“ in „Sie wirft den Ball“?", l: ["Akkusativ"], info: "Frage: Wen oder was wirft sie? – den Ball → Akkusativ." },
        { t: "eingabe", f: "In welchem Kasus steht „meiner Schwester“ in „Ich helfe meiner Schwester“?", l: ["Dativ"], info: "Frage: Wem helfe ich? – meiner Schwester → Dativ." },
        { t: "wahl", f: "Wie lautet das Vorgangspassiv zu „Die Klasse plant eine Fahrt“?", a: ["Eine Fahrt wird von der Klasse geplant.", "Eine Fahrt ist von der Klasse geplant.", "Die Klasse wird eine Fahrt planen.", "Eine Fahrt plante die Klasse."], r: 0, info: "Vorgangspassiv = werden + Partizip II; das Akkusativobjekt wird zum Subjekt." },
        { t: "wahl", f: "Welcher Satz steht im Zustandspassiv?", a: ["Die Tür ist geschlossen.", "Die Tür wird geschlossen.", "Er schließt die Tür.", "Die Tür wurde geschlossen."], r: 0, info: "Zustandspassiv = sein + Partizip II, beschreibt das Ergebnis." },
        { t: "wahl", f: "Welche Form ist Konjunktiv I von „er hat“?", a: ["er habe", "er hätte", "er hatte", "er hat gehabt"], r: 0, info: "Konjunktiv I wird vom Präsensstamm gebildet: hab- + e → er habe." },
        { t: "wahl", f: "Welche Form ist Konjunktiv II von „sie kommt“?", a: ["sie käme", "sie komme", "sie kam", "sie kommt"], r: 0, info: "Konjunktiv II vom Präteritum kam mit Umlaut: käme." },
        { t: "wahl", f: "Setze in die indirekte Rede: Lea sagt: „Ich bin müde.“", a: ["Lea sagt, sie sei müde.", "Lea sagt, sie wäre müde.", "Lea sagt, sie ist müde.", "Lea sagt, ich bin müde."], r: 0, info: "Indirekte Rede: Konjunktiv I und Wechsel der Person – sie sei müde." },
        { t: "wahl", f: "Warum heißt es „Sie sagten, sie hätten keine Zeit“ statt „sie haben“?", a: ["Konjunktiv I gleicht dem Indikativ, daher Konjunktiv II als Ersatz", "Weil die Aussage in der Vergangenheit liegt", "Weil hätten höflicher ist", "Weil Plural immer Konjunktiv II braucht"], r: 0, info: "„sie haben“ wäre Konjunktiv I und Indikativ zugleich – zur Unterscheidung nimmt man den Konjunktiv II." },
        { t: "wahl", f: "Welcher Satz drückt einen irrealen Wunsch aus?", a: ["Wenn ich doch fliegen könnte!", "Ich kann fliegen.", "Er sagt, er könne fliegen.", "Kannst du fliegen?"], r: 0, info: "Konjunktiv II könnte für etwas Unwirkliches – typisch für Wünsche." },
        { t: "paare", f: "Ordne die Kasusfragen zu.", p: [["Nominativ", "wer oder was?"], ["Genitiv", "wessen?"], ["Dativ", "wem?"], ["Akkusativ", "wen oder was?"]] },
        { t: "paare", f: "Ordne die Verbformen zu.", p: [["er geht", "Indikativ Präsens"], ["er gehe", "Konjunktiv I"], ["er ginge", "Konjunktiv II"], ["er wird gegangen sein", "Futur II"]] },
        { t: "paare", f: "Ordne die Adverbiale der Frage zu.", p: [["lokal", "wo? wohin?"], ["temporal", "wann? wie lange?"], ["kausal", "warum?"], ["modal", "wie? auf welche Weise?"]] },
        { t: "reihenfolge", f: "Bringe die Schritte der Satzgliedbestimmung in die richtige Reihenfolge.", items: ["Prädikat (Verb) suchen", "Nach dem Subjekt fragen: wer oder was?", "Objekte mit wessen/wem/wen erfragen", "Rest als Adverbiale bestimmen"] }
      ]
    },
    {
      id: "stilmittel",
      titel: "Stilmittel",
      kurz: "Metapher, Vergleich, Personifikation, Alliteration, Anapher, Hyperbel …",
      erklaerung: `<p>Rhetorische <b>Stilmittel</b> machen Texte anschaulich, eindringlich oder witzig. In Gedichten, Reden und Werbung findest du sie überall. Die wichtigsten:</p>
<ul>
<li><b>Metapher:</b> bildlicher Ausdruck ohne „wie“ (<i>ein Meer aus Tränen</i>).</li>
<li><b>Vergleich:</b> mit „wie“ oder „als“ (<i>stark wie ein Bär</i>).</li>
<li><b>Personifikation:</b> Dinge oder Tiere handeln wie Menschen (<i>die Sonne lacht</i>).</li>
<li><b>Alliteration:</b> gleiche Anfangslaute (<i>Milch macht müde Männer munter</i>).</li>
<li><b>Anapher:</b> Wiederholung am Satz- oder Versanfang (<i>Ich will … Ich will …</i>).</li>
<li><b>Hyperbel:</b> starke Übertreibung (<i>Ich habe dir das tausendmal gesagt</i>).</li>
<li><b>Ironie:</b> Man sagt das Gegenteil von dem, was man meint (<i>Na toll, schon wieder Regen</i>).</li>
<li><b>Rhetorische Frage:</b> Frage ohne erwartete Antwort (<i>Wer will das schon?</i>).</li>
<li><b>Ellipse:</b> unvollständiger Satz, Wörter sind ausgelassen (<i>Ende gut, alles gut</i>).</li>
<li><b>Klimax:</b> Steigerung in Stufen (<i>Er kam, sah und siegte</i>).</li>
</ul>
<p>Merke: Steht „wie“ im Satz, ist es ein Vergleich, nicht eine Metapher. Und: Nenne in einer Analyse immer auch die <b>Wirkung</b> des Stilmittels, nicht nur den Namen.</p>`,
      aufgaben: [
        { t: "wahl", f: "Welches Stilmittel: „Der Wind flüstert den Bäumen Geheimnisse zu.“", a: ["Personifikation", "Metapher", "Vergleich", "Hyperbel"], r: 0, info: "Der Wind handelt wie ein Mensch (flüstern) → Personifikation." },
        { t: "wahl", f: "Welches Stilmittel: „Ihre Augen sind zwei Sterne in der Nacht.“", a: ["Metapher", "Vergleich", "Alliteration", "Ellipse"], r: 0, info: "Bildlicher Ausdruck ohne „wie“ → Metapher." },
        { t: "wahl", f: "Welches Stilmittel: „Er rannte schnell wie ein Gepard.“", a: ["Vergleich", "Metapher", "Hyperbel", "Klimax"], r: 0, info: "Mit „wie“ verglichen → Vergleich." },
        { t: "wahl", f: "Welches Stilmittel: „Peter packt prall gefüllte Pakete.“", a: ["Alliteration", "Anapher", "Ellipse", "Ironie"], r: 0, info: "Gleicher Anfangslaut p in mehreren Wörtern → Alliteration." },
        { t: "wahl", f: "Welches Stilmittel: „Wir wollen Frieden. Wir wollen Freiheit. Wir wollen Zukunft.“", a: ["Anapher", "Alliteration", "Klimax", "Rhetorische Frage"], r: 0, info: "Wiederholung „Wir wollen“ am Satzanfang → Anapher." },
        { t: "wahl", f: "Welches Stilmittel: „Ich warte hier schon eine Ewigkeit!“", a: ["Hyperbel", "Metapher", "Ironie", "Ellipse"], r: 0, info: "Starke Übertreibung (Ewigkeit) → Hyperbel." },
        { t: "wahl", f: "Welches Stilmittel: „Super, mein Handy ist schon wieder kaputt.“", a: ["Ironie", "Hyperbel", "Personifikation", "Klimax"], r: 0, info: "Gemeint ist das Gegenteil von „super“ → Ironie." },
        { t: "wahl", f: "Welches Stilmittel: „Wer möchte nicht gern gesund bleiben?“", a: ["Rhetorische Frage", "Ellipse", "Anapher", "Vergleich"], r: 0, info: "Die Antwort ist klar und wird nicht erwartet → rhetorische Frage." },
        { t: "wahl", f: "Welches Stilmittel: „Je früher, desto besser.“", a: ["Ellipse", "Klimax", "Metapher", "Alliteration"], r: 0, info: "Verb und weitere Satzteile fehlen → Ellipse." },
        { t: "wahl", f: "Welches Stilmittel: „Es war gut, es war großartig, es war das Beste überhaupt.“", a: ["Klimax", "Anapher", "Hyperbel", "Vergleich"], r: 0, info: "Steigerung in drei Stufen → Klimax (die Wiederholung „es war“ ist zusätzlich eine Anapher)." },
        { t: "wahl", f: "Was unterscheidet Metapher und Vergleich?", a: ["Der Vergleich benutzt „wie“ oder „als“, die Metapher nicht", "Die Metapher benutzt „wie“, der Vergleich nicht", "Die Metapher übertreibt immer", "Es gibt keinen Unterschied"], r: 0, info: "Vergleich: stark wie ein Bär. Metapher: Er ist ein Bär." },
        { t: "wahl", f: "Welches Stilmittel: „Die Stadt schläft, nur die Laternen wachen.“", a: ["Personifikation", "Hyperbel", "Ironie", "Ellipse"], r: 0, info: "Stadt und Laternen tun Menschliches (schlafen, wachen) → Personifikation." },
        { t: "eingabe", f: "Wie heißt das Stilmittel mit gleichem Anfangslaut: „Fischers Fritz fischt frische Fische“?", l: ["Alliteration"], info: "Mehrere Wörter beginnen mit f → Alliteration." },
        { t: "eingabe", f: "Wie heißt die starke Übertreibung als Stilmittel?", l: ["Hyperbel"], info: "Hyperbel = Übertreibung, z. B. todmüde, tausendmal." },
        { t: "eingabe", f: "Wie heißt die Wiederholung eines Wortes am Anfang mehrerer Sätze oder Verse?", l: ["Anapher"], info: "Anapher = Wiederholung am Anfang, z. B. „Ich will … Ich will …“." },
        { t: "eingabe", f: "Wie heißt ein unvollständiger Satz, bei dem Wörter ausgelassen sind, als Stilmittel?", l: ["Ellipse"], info: "Ellipse = Auslassung, z. B. „Ende gut, alles gut“." },
        { t: "paare", f: "Ordne Beispiel und Stilmittel zu.", p: [["Die Zeit rennt.", "Personifikation"], ["mutig wie ein Löwe", "Vergleich"], ["ein Herz aus Stein", "Metapher"], ["Ich sterbe vor Hunger!", "Hyperbel"]] },
        { t: "paare", f: "Ordne Stilmittel und Wirkung zu.", p: [["Rhetorische Frage", "bezieht den Leser ein, Antwort ist klar"], ["Klimax", "steigert die Spannung"], ["Ironie", "verspottet durch das Gegenteil"], ["Alliteration", "klingt einprägsam, bleibt im Ohr"]] },
        { t: "reihenfolge", f: "Bringe die Stufen dieser Klimax in die richtige Reihenfolge.", items: ["Er war müde,", "dann erschöpft,", "dann völlig am Ende."] }
      ]
    },
    {
      id: "textsorten",
      titel: "Textsorten und Aufbau",
      kurz: "Erörterung, Inhaltsangabe, Charakterisierung, Bewerbung, Kurzgeschichte, Sachtextanalyse",
      erklaerung: `<p><b>Erörterung:</b> Bei der <i>linearen</i> Erörterung beantwortest du eine Frage mit Argumenten in einer Richtung, meist vom schwächsten zum stärksten. Bei der <i>dialektischen</i> Erörterung wägst du Pro und Kontra ab und kommst zu einem eigenen Fazit. Jedes Argument besteht aus Behauptung, Begründung und Beispiel.</p>
<p><b>Inhaltsangabe:</b> Im <b>Präsens</b>, sachlich, ohne wörtliche Rede, eigene Worte. Der Einleitungssatz enthält <b>TATTE</b>: Titel, Autor, Textsorte, Thema, Erscheinungsjahr. Danach folgt der Hauptteil in zeitlicher Reihenfolge, zuletzt ein kurzer Schluss.</p>
<p><b>Charakterisierung:</b> Einleitung mit Figur und Text, dann äußere Merkmale, Verhalten, Gedanken und Gefühle, Beziehungen zu anderen – immer mit Textbelegen (Zeilenangabe). Zum Schluss eine Gesamteinschätzung.</p>
<p><b>Bewerbungsschreiben:</b> Absender, Empfänger, Datum, Betreff, Anrede, Einleitung (Bezug zur Stelle), Hauptteil (Stärken und Erfahrungen), Schluss (Bitte um Gespräch), Grußformel, Unterschrift. Höchstens eine Seite, sachlich und fehlerfrei.</p>
<p><b>Kurzgeschichte:</b> unmittelbarer Einstieg, offener Schluss, Alltagssprache, wenige Figuren, kurze Zeitspanne, oft ein Wendepunkt, Leerstellen für die Deutung.</p>
<p><b>Sachtextanalyse:</b> Einleitung (TATTE und Intention), Inhalt zusammenfassen, Aufbau und Argumentation untersuchen, Sprache und Stilmittel beschreiben, Wirkung und Absicht beurteilen.</p>`,
      aufgaben: [
        { t: "reihenfolge", f: "Bringe den Aufbau einer dialektischen Erörterung in die richtige Reihenfolge.", items: ["Einleitung mit Fragestellung", "Argumente der Gegenseite (Kontra)", "Argumente der eigenen Seite (Pro)", "Fazit mit eigener Meinung"] },
        { t: "reihenfolge", f: "Bringe die Teile eines Arguments in die richtige Reihenfolge.", items: ["Behauptung (These)", "Begründung", "Beispiel oder Beleg"] },
        { t: "reihenfolge", f: "Bringe den Aufbau einer Inhaltsangabe in die richtige Reihenfolge.", items: ["Einleitungssatz mit TATTE", "Hauptteil: Handlung in eigenen Worten im Präsens", "Schluss: knappe Zusammenfassung oder Ausgang"] },
        { t: "reihenfolge", f: "Bringe den Aufbau eines Bewerbungsschreibens in die richtige Reihenfolge.", items: ["Absender und Empfänger", "Datum und Betreff", "Anrede und Einleitung", "Hauptteil: Stärken und Erfahrungen", "Schluss mit Bitte um Gespräch", "Grußformel und Unterschrift"] },
        { t: "reihenfolge", f: "Bringe den Aufbau einer Charakterisierung in die richtige Reihenfolge.", items: ["Einleitung: Figur, Text, Autor", "Äußere Merkmale und Lebensumstände", "Verhalten, Gedanken, Gefühle mit Belegen", "Beziehungen zu anderen Figuren", "Gesamteinschätzung"] },
        { t: "reihenfolge", f: "Bringe die Schritte einer Sachtextanalyse in die richtige Reihenfolge.", items: ["Einleitung mit TATTE und Intention", "Inhalt zusammenfassen", "Aufbau und Argumentation untersuchen", "Sprache und Stilmittel beschreiben", "Wirkung und Absicht beurteilen"] },
        { t: "wahl", f: "Wofür steht das T am Anfang von TATTE?", a: ["Titel", "Thema", "Textsorte", "Tag"], r: 0, info: "TATTE = Titel, Autor, Textsorte, Thema, Erscheinungsjahr." },
        { t: "wahl", f: "In welcher Zeitform schreibst du eine Inhaltsangabe?", a: ["Präsens", "Präteritum", "Perfekt", "Futur I"], r: 0, info: "Inhaltsangaben stehen im Präsens; Vorzeitiges im Perfekt." },
        { t: "wahl", f: "Was gehört NICHT in eine Inhaltsangabe?", a: ["Wörtliche Rede und eigene Meinung", "Die wichtigsten Handlungsschritte", "Der Einleitungssatz mit TATTE", "Eigene Formulierungen"], r: 0, info: "Inhaltsangaben sind sachlich, ohne Zitate, Spannung oder Wertung." },
        { t: "wahl", f: "Was kennzeichnet eine lineare Erörterung?", a: ["Argumente in eine Richtung, meist vom schwächsten zum stärksten", "Pro und Kontra im Wechsel", "Nur ein Argument", "Eine Geschichte mit Wendepunkt"], r: 0, info: "Linear = eine Richtung; dialektisch = Pro und Kontra." },
        { t: "wahl", f: "Welches Merkmal passt NICHT zur Kurzgeschichte?", a: ["Ausführliche Vorgeschichte und Erklärung aller Figuren", "Unmittelbarer Einstieg", "Offener Schluss", "Alltagssprache"], r: 0, info: "Kurzgeschichten verzichten auf lange Einführungen und erklären wenig." },
        { t: "wahl", f: "Was ist bei einer Charakterisierung Pflicht?", a: ["Textbelege mit Zeilenangabe", "Eigene Erlebnisse", "Wörtliche Rede erfinden", "Ein Happy End"], r: 0, info: "Jede Aussage über die Figur wird am Text belegt." },
        { t: "wahl", f: "Wie lang sollte ein Bewerbungsschreiben höchstens sein?", a: ["Eine Seite", "Drei Seiten", "Eine halbe Zeile", "Fünf Seiten"], r: 0, info: "Ein Anschreiben ist kurz, klar und passt auf eine DIN-A4-Seite." },
        { t: "wahl", f: "Was gehört in die Einleitung einer Sachtextanalyse?", a: ["TATTE und Intention des Autors", "Deine Lieblingsstelle", "Eine Nacherzählung aller Details", "Die Zitate der Figuren"], r: 0, info: "Einleitung: Basisinformationen und Absicht des Textes." },
        { t: "wahl", f: "Welche Aussage über Ich-Form und Inhaltsangabe stimmt?", a: ["Die Inhaltsangabe steht in der 3. Person, auch wenn der Text ein Ich-Erzähler hat", "Die Inhaltsangabe übernimmt die Ich-Form", "Die Ich-Form wird zur Wir-Form", "Das ist egal"], r: 0, info: "Du berichtest über den Erzähler, also in der 3. Person: „Der Erzähler …“." },
        { t: "eingabe", f: "Wie heißt die Erörterungsform, die Pro und Kontra abwägt?", l: ["dialektisch", "dialektische Erörterung", "dialektische"], info: "Dialektisch = These und Antithese, dann Synthese im Fazit." },
        { t: "eingabe", f: "Wofür steht das E in TATTE?", l: ["Erscheinungsjahr", "Erscheinungsdatum"], info: "E = Erscheinungsjahr des Textes." },
        { t: "paare", f: "Ordne Textsorte und typisches Merkmal zu.", p: [["Inhaltsangabe", "sachlich, Präsens, eigene Worte"], ["Erörterung", "Argumente mit Begründung und Beispiel"], ["Kurzgeschichte", "offener Schluss, Wendepunkt"], ["Bewerbungsschreiben", "Betreff, Anrede, Bitte um Gespräch"]] },
        { t: "paare", f: "Ordne die Buchstaben von TATTE zu.", p: [["T (1)", "Titel"], ["A", "Autor"], ["T (2)", "Textsorte"], ["T (3)", "Thema"], ["E", "Erscheinungsjahr"]] }
      ]
    },
    {
      id: "fremdwoerter",
      titel: "Fremdwörter und Bildungssprache",
      kurz: "40 Karteikarten: plausibel, ambivalent, Konsens, implizit …",
      erklaerung: `<p>In Sachtexten, Erörterungen und im Unterricht begegnen dir viele <b>Fremdwörter</b> und Ausdrücke der <b>Bildungssprache</b>. Wer sie kennt, versteht Texte schneller und kann in eigenen Texten präziser formulieren.</p>
<p>Viele dieser Wörter stammen aus dem Lateinischen oder Griechischen. Oft helfen Wortbausteine: <i>im-/in-</i> heißt „nicht“ oder „hinein“ (<i>implizit, irrelevant</i>), <i>ex-</i> heißt „heraus“ (<i>explizit</i>), <i>kon-/kom-</i> heißt „zusammen“ (<i>Konsens, Kompromiss</i>), <i>anti-</i> heißt „gegen“ (<i>Antithese</i>).</p>
<p>Lerne die Karten in beide Richtungen: Vom Fremdwort zur Erklärung und von der Erklärung zum Fremdwort. Noch besser: Bilde zu jedem Wort einen eigenen Satz aus deinem Alltag.</p>
<p>Tipp für Klausuren: Setze Fremdwörter nur ein, wenn du ihre Bedeutung sicher kennst – ein falsch benutztes Fremdwort wirkt schlechter als ein einfaches deutsches Wort.</p>`,
      aufgaben: [
        { t: "karte", vorne: "plausibel", hinten: "einleuchtend, nachvollziehbar", bsp: "Deine Erklärung klingt plausibel." },
        { t: "karte", vorne: "ambivalent", hinten: "zwiespältig, widersprüchlich (zwei Seiten zugleich)", bsp: "Sie hat ein ambivalentes Verhältnis zu ihrer Heimatstadt." },
        { t: "karte", vorne: "Konsens", hinten: "Übereinstimmung, Einigkeit", bsp: "In der Klasse herrscht Konsens über das Ausflugsziel." },
        { t: "karte", vorne: "implizit", hinten: "nicht direkt ausgesprochen, mitgemeint", bsp: "Die Kritik war nur implizit zu hören." },
        { t: "karte", vorne: "explizit", hinten: "ausdrücklich, klar ausgesprochen", bsp: "Er hat explizit darum gebeten." },
        { t: "karte", vorne: "relevant", hinten: "wichtig, bedeutsam für eine Sache", bsp: "Dieser Punkt ist für die Prüfung relevant." },
        { t: "karte", vorne: "Kompromiss", hinten: "Einigung, bei der beide Seiten nachgeben", bsp: "Wir haben einen Kompromiss gefunden." },
        { t: "karte", vorne: "Perspektive", hinten: "Blickwinkel, Sichtweise", bsp: "Aus seiner Perspektive sieht das anders aus." },
        { t: "karte", vorne: "Argument", hinten: "Begründung für eine Behauptung", bsp: "Sein stärkstes Argument war der Umweltschutz." },
        { t: "karte", vorne: "These", hinten: "Behauptung, die begründet werden muss", bsp: "Die These des Textes lautet: Lesen macht klug." },
        { t: "karte", vorne: "Antithese", hinten: "Gegenbehauptung", bsp: "Zur These stellt er eine Antithese auf." },
        { t: "karte", vorne: "Synthese", hinten: "Verbindung, Zusammenführung von Gegensätzen", bsp: "Das Fazit ist die Synthese aus Pro und Kontra." },
        { t: "karte", vorne: "Analyse", hinten: "genaue Untersuchung, Zerlegung in Einzelteile", bsp: "Die Analyse des Gedichts dauert zwei Stunden." },
        { t: "karte", vorne: "Intention", hinten: "Absicht, Ziel", bsp: "Die Intention des Autors ist, zu warnen." },
        { t: "karte", vorne: "Interpretation", hinten: "Deutung, Auslegung", bsp: "Deine Interpretation der Metapher ist überzeugend." },
        { t: "karte", vorne: "Kontext", hinten: "Zusammenhang, Umfeld", bsp: "Im Kontext der Zeit ist das verständlich." },
        { t: "karte", vorne: "Fazit", hinten: "Schlussfolgerung, Ergebnis", bsp: "Mein Fazit: Das Buch lohnt sich." },
        { t: "karte", vorne: "Aspekt", hinten: "Gesichtspunkt, Teilbereich", bsp: "Ein wichtiger Aspekt ist der Preis." },
        { t: "karte", vorne: "Kriterium", hinten: "Maßstab, Merkmal zur Beurteilung", bsp: "Ein Kriterium für die Note ist die Rechtschreibung." },
        { t: "karte", vorne: "Konsequenz", hinten: "Folge, Auswirkung", bsp: "Die Konsequenz war ein Verweis." },
        { t: "karte", vorne: "Effizienz", hinten: "Wirksamkeit mit wenig Aufwand", bsp: "Die Effizienz der Maschine wurde gesteigert." },
        { t: "karte", vorne: "Ressource", hinten: "Mittel, Vorrat, Hilfsquelle", bsp: "Wasser ist eine knappe Ressource." },
        { t: "karte", vorne: "Phänomen", hinten: "Erscheinung, auffälliger Vorgang", bsp: "Nordlichter sind ein faszinierendes Phänomen." },
        { t: "karte", vorne: "Prinzip", hinten: "Grundsatz, Grundregel", bsp: "Aus Prinzip esse ich kein Fleisch." },
        { t: "karte", vorne: "Struktur", hinten: "Aufbau, Gliederung", bsp: "Die Struktur des Textes ist klar." },
        { t: "karte", vorne: "Tendenz", hinten: "Neigung, Entwicklungsrichtung", bsp: "Die Tendenz geht zu mehr Homeoffice." },
        { t: "karte", vorne: "Reflexion", hinten: "Nachdenken, Überdenken", bsp: "Nach der Prüfung folgt eine kurze Reflexion." },
        { t: "karte", vorne: "Identität", hinten: "das, was jemanden ausmacht; Selbstbild", bsp: "Sprache ist Teil unserer Identität." },
        { t: "karte", vorne: "Distanz", hinten: "Abstand, Zurückhaltung", bsp: "Der Erzähler hält Distanz zu den Figuren." },
        { t: "karte", vorne: "Ironie", hinten: "Spott, bei dem man das Gegenteil des Gemeinten sagt", bsp: "Seine Ironie verstehen nicht alle." },
        { t: "karte", vorne: "Metapher", hinten: "bildlicher Ausdruck ohne „wie“", bsp: "„Ein Meer aus Menschen“ ist eine Metapher." },
        { t: "karte", vorne: "Symbol", hinten: "Zeichen, das für etwas anderes steht", bsp: "Die Taube ist ein Symbol für Frieden." },
        { t: "karte", vorne: "Dilemma", hinten: "Zwangslage mit zwei schlechten Möglichkeiten", bsp: "Er steckt in einem Dilemma: lügen oder verraten." },
        { t: "karte", vorne: "Konflikt", hinten: "Streit, Auseinandersetzung, Gegensatz", bsp: "Der Konflikt zwischen den Figuren eskaliert." },
        { t: "karte", vorne: "Motiv", hinten: "Beweggrund; in Texten: wiederkehrendes Thema", bsp: "Das Motiv der Reise zieht sich durch das Buch." },
        { t: "karte", vorne: "Diskrepanz", hinten: "Widerspruch, Missverhältnis", bsp: "Zwischen Worten und Taten besteht eine Diskrepanz." },
        { t: "karte", vorne: "adäquat", hinten: "angemessen, passend", bsp: "Das ist keine adäquate Reaktion." },
        { t: "karte", vorne: "subjektiv", hinten: "von der eigenen Meinung geprägt, persönlich", bsp: "Geschmack ist subjektiv." },
        { t: "karte", vorne: "objektiv", hinten: "sachlich, unabhängig von der eigenen Meinung", bsp: "Ein Bericht soll objektiv sein." },
        { t: "karte", vorne: "differenziert", hinten: "genau unterscheidend, nicht pauschal", bsp: "Sie argumentiert sehr differenziert." }
      ]
    }
  ]
};
window.FAECHER.push(FACH);
})();
