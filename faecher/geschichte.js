"use strict";
(function () {
const FACH = {
  id: "geschichte",
  name: "Geschichte",
  icon: "🏛️",
  farbe: "#8a5a2b",
  beschreibung: "Imperialismus, Weltkriege, Weimar, NS-Zeit, geteiltes Deutschland",
  themen: [
    {
      id: "imperialismus",
      titel: "Imperialismus und Kolonialismus",
      kurz: "Motive, Berliner Konferenz, deutsche Kolonien, Herero und Nama",
      erklaerung: `<p><b>Imperialismus</b> nennt man die Politik europäischer Großmächte (und später auch der USA und Japans) etwa zwischen 1880 und 1914, die Welt in Kolonien und Einflusszonen aufzuteilen. <b>Kolonialismus</b> ist die direkte Beherrschung fremder Gebiete.</p>
<p>Die <b>Motive</b> waren wirtschaftlich (Rohstoffe, Absatzmärkte, Kapitalanlage), politisch (Macht und Prestige, Flottenstützpunkte), ideologisch (Rassismus, angebliche „Zivilisierungsmission“) und sozial (Auswanderung, Ablenkung von Problemen im eigenen Land).</p>
<p>Auf der <b>Berliner Konferenz 1884/85</b> (auch Kongokonferenz) legten die europäischen Mächte Regeln für die Aufteilung Afrikas fest – ohne einen einzigen afrikanischen Vertreter. Der Wettlauf um Afrika („Scramble for Africa“) führte dazu, dass um 1914 fast der ganze Kontinent kolonisiert war.</p>
<p>Das <b>Deutsche Reich</b> besaß ab 1884 Kolonien: Deutsch-Südwestafrika (heute Namibia), Deutsch-Ostafrika (heute Tansania, Ruanda, Burundi), Kamerun, Togo, Deutsch-Neuguinea und Pachtgebiet Kiautschou in China. Kaiser Wilhelm II. forderte einen „Platz an der Sonne“.</p>
<p>In Deutsch-Südwestafrika erhoben sich 1904 die <b>Herero</b> und später die <b>Nama</b> gegen Landraub und Unterdrückung. Die deutsche Schutztruppe unter General von Trotha trieb die Herero in die Omaheke-Wüste; Zehntausende starben an Durst, Hunger oder in Lagern. Dieses Verbrechen gilt heute als erster <b>Völkermord des 20. Jahrhunderts</b>; Deutschland hat ihn 2021 offiziell anerkannt.</p>
<p><b>Folgen</b> bis heute: willkürliche Grenzen, wirtschaftliche Abhängigkeit, Rassismus, aber auch die Erinnerung und Aufarbeitung in den betroffenen Ländern und Europa.</p>`,
      aufgaben: [
        { t: "wahl", f: "Was bedeutet Imperialismus?", a: ["Das Streben von Großmächten nach Weltherrschaft durch Kolonien und Einflusszonen", "Die Einführung der Demokratie in Europa", "Ein Bündnis gegen Frankreich", "Die Industrialisierung Englands"], r: 0, info: "Imperialismus bezeichnet die Expansionspolitik der Großmächte etwa 1880 bis 1914." },
        { t: "wahl", f: "Wann fand die Berliner Konferenz (Kongokonferenz) statt?", a: ["1884/85", "1871", "1900", "1914"], r: 0, info: "Von November 1884 bis Februar 1885 verhandelten die Mächte in Berlin über Afrika." },
        { t: "wahl", f: "Wer war auf der Berliner Konferenz NICHT vertreten?", a: ["Afrikanische Herrscher oder Völker", "Das Deutsche Reich", "Frankreich", "Großbritannien"], r: 0, info: "Über Afrika wurde ohne Afrikaner entschieden." },
        { t: "wahl", f: "Welches heutige Land war Deutsch-Südwestafrika?", a: ["Namibia", "Nigeria", "Südafrika", "Kenia"], r: 0, info: "Deutsch-Südwestafrika ist das heutige Namibia." },
        { t: "wahl", f: "Welches Gebiet gehörte NICHT zu den deutschen Kolonien?", a: ["Indien", "Togo", "Kamerun", "Deutsch-Ostafrika"], r: 0, info: "Indien war britische Kolonie." },
        { t: "wahl", f: "Was geschah 1904 in Deutsch-Südwestafrika?", a: ["Aufstand der Herero gegen die deutsche Kolonialherrschaft", "Gründung der Kolonie", "Unabhängigkeit Namibias", "Berliner Konferenz"], r: 0, info: "Im Januar 1904 begann der Aufstand der Herero, später schlossen sich die Nama an." },
        { t: "wahl", f: "Welcher deutsche General befahl die Vernichtung der Herero?", a: ["Lothar von Trotha", "Otto von Bismarck", "Paul von Hindenburg", "Erich Ludendorff"], r: 0, info: "Von Trothas „Vernichtungsbefehl“ im Oktober 1904 trieb die Herero in die Wüste." },
        { t: "wahl", f: "Wie bewertet man die Vorgänge gegen Herero und Nama heute?", a: ["Als Völkermord, von Deutschland 2021 anerkannt", "Als normale Militäraktion", "Als Bürgerkrieg zwischen Stämmen", "Als Naturkatastrophe"], r: 0, info: "Deutschland erkannte 2021 die Verbrechen offiziell als Völkermord an." },
        { t: "wahl", f: "Welche Forderung Kaiser Wilhelms II. steht für die deutsche Kolonialpolitik?", a: ["„Platz an der Sonne“", "„Blut und Eisen“", "„Nie wieder Krieg“", "„Freiheit, Gleichheit, Brüderlichkeit“"], r: 0, info: "Der Ausdruck stammt aus einer Reichstagsrede Bernhard von Bülows 1897 und wurde zum Leitwort der Weltpolitik Wilhelms II." },
        { t: "wahl", f: "Welches war ein wirtschaftliches Motiv des Imperialismus?", a: ["Rohstoffe und Absatzmärkte gewinnen", "Demokratie verbreiten", "Kirchen bauen", "Sprachen lernen"], r: 0, info: "Die Industrie brauchte billige Rohstoffe und Käufer für ihre Waren." },
        { t: "eingabe", f: "Wie nennt man die Aufteilung Afrikas unter den europäischen Mächten (englischer Begriff: Scramble for …)?", l: ["Africa", "Afrika", "Wettlauf um Afrika"], info: "Der „Scramble for Africa“ war der Wettlauf um afrikanische Kolonien ab den 1880er-Jahren." },
        { t: "eingabe", f: "Wie hieß das deutsche Pachtgebiet in China?", l: ["Kiautschou", "Tsingtau", "Kiautschau"], info: "Kiautschou mit der Stadt Tsingtau wurde 1898 für 99 Jahre gepachtet." },
        { t: "eingabe", f: "Welcher Reichskanzler stand Kolonien zunächst skeptisch gegenüber und berief dennoch die Berliner Konferenz ein?", l: ["Bismarck", "Otto von Bismarck"], info: "Bismarck sah Kolonien lange als Belastung, nutzte die Konferenz aber für die deutsche Großmachtpolitik." },
        { t: "eingabe", f: "Ergänze das Motiv: Europäer behaupteten, sie hätten eine ___-Mission gegenüber anderen Völkern.", l: ["Zivilisierungs", "Zivilisierung", "Zivilisierungsmission", "Zivilisations"], info: "Die angebliche Zivilisierungsmission rechtfertigte Unterdrückung mit rassistischen Vorstellungen." },
        { t: "paare", f: "Ordne die Kolonie dem heutigen Land zu.", p: [["Deutsch-Südwestafrika", "Namibia"], ["Deutsch-Ostafrika", "Tansania"], ["Kamerun", "Kamerun"], ["Togo", "Togo und Teil Ghanas"]] },
        { t: "paare", f: "Ordne Motiv und Beispiel zu.", p: [["wirtschaftlich", "Rohstoffe und Absatzmärkte"], ["politisch", "Prestige und Flottenstützpunkte"], ["ideologisch", "Rassismus, Zivilisierungsmission"], ["sozial", "Auswanderung, Ablenkung von Problemen"]] },
        { t: "reihenfolge", f: "Bringe die Ereignisse in die richtige Reihenfolge.", items: ["Erwerb der ersten deutschen Kolonien (1884)", "Berliner Konferenz (1884/85)", "Pacht von Kiautschou (1898)", "Aufstand der Herero und Nama (1904–1908)"] }
      ]
    },
    {
      id: "wk1",
      titel: "Erster Weltkrieg",
      kurz: "Bündnisse, Sarajevo, Julikrise, Stellungskrieg, USA 1917, Versailles",
      erklaerung: `<p>Vor 1914 standen sich in Europa zwei <b>Bündnisblöcke</b> gegenüber: der <b>Dreibund</b> (Deutsches Reich, Österreich-Ungarn, Italien) und die <b>Triple Entente</b> (Frankreich, Russland, Großbritannien). Wettrüsten, Flottenrivalität und Nationalismus heizten die Lage auf.</p>
<p>Am <b>28. Juni 1914</b> wurde der österreichische Thronfolger Franz Ferdinand in <b>Sarajevo</b> von dem serbischen Nationalisten Gavrilo Princip erschossen. In der <b>Julikrise</b> sicherte das Deutsche Reich Österreich-Ungarn bedingungslose Unterstützung zu („Blankoscheck“). Nach dem Ultimatum an Serbien erklärte Österreich-Ungarn am 28. Juli den Krieg, die Bündnisse zogen alle Großmächte hinein.</p>
<p>Der deutsche <b>Schlieffen-Plan</b> scheiterte an der Marne; im Westen erstarrte der Krieg zum <b>Stellungskrieg</b> mit Schützengräben, Giftgas, Maschinengewehren und Materialschlachten wie <b>Verdun</b> und an der <b>Somme</b> 1916. Es war ein „totaler Krieg“, der auch die Zivilbevölkerung durch Hunger traf.</p>
<p>Der uneingeschränkte U-Boot-Krieg führte <b>1917</b> zum <b>Kriegseintritt der USA</b>. Im gleichen Jahr schied Russland nach der Oktoberrevolution aus dem Krieg aus. Nach der gescheiterten deutschen Frühjahrsoffensive 1918 brach die Front zusammen; am <b>11. November 1918</b> trat der <b>Waffenstillstand</b> von Compiègne in Kraft.</p>
<p>Der <b>Versailler Vertrag</b> vom 28. Juni <b>1919</b> gab Deutschland die alleinige Kriegsschuld (Artikel 231), verlangte Gebietsabtretungen (Elsass-Lothringen, Westpreußen, Posen), Abrüstung auf 100.000 Mann und hohe Reparationen. Etwa 17 Millionen Menschen starben im Krieg.</p>`,
      aufgaben: [
        { t: "wahl", f: "Wann wurde Thronfolger Franz Ferdinand in Sarajevo ermordet?", a: ["28. Juni 1914", "1. August 1914", "28. Juli 1914", "11. November 1918"], r: 0, info: "Das Attentat vom 28. Juni 1914 löste die Julikrise aus." },
        { t: "wahl", f: "Wer gehörte zur Triple Entente?", a: ["Frankreich, Russland, Großbritannien", "Deutschland, Österreich-Ungarn, Italien", "USA, Japan, China", "Spanien, Portugal, Niederlande"], r: 0, info: "Die Entente stand dem Dreibund gegenüber." },
        { t: "wahl", f: "Was war der „Blankoscheck“?", a: ["Die deutsche Zusage bedingungsloser Unterstützung an Österreich-Ungarn", "Ein Friedensvertrag mit Frankreich", "Ein Geldgeschenk an Serbien", "Ein Flottenabkommen mit England"], r: 0, info: "Am 5./6. Juli 1914 sicherte Kaiser Wilhelm II. Österreich-Ungarn volle Rückendeckung zu." },
        { t: "wahl", f: "Was kennzeichnete den Stellungskrieg an der Westfront?", a: ["Schützengräben, kaum Geländegewinn, Materialschlachten", "Schnelle Bewegungen mit Panzern", "Nur Seeschlachten", "Kämpfe ausschließlich in Kolonien"], r: 0, info: "Von 1914 bis 1918 bewegte sich die Front im Westen kaum." },
        { t: "wahl", f: "Welche Schlacht von 1916 steht für die Materialschlachten?", a: ["Verdun", "Stalingrad", "Waterloo", "Sedan"], r: 0, info: "Bei Verdun starben 1916 Hunderttausende, ohne dass die Front sich entscheidend verschob." },
        { t: "wahl", f: "Warum traten die USA 1917 in den Krieg ein?", a: ["Wegen des uneingeschränkten U-Boot-Kriegs Deutschlands", "Weil Russland sie darum bat", "Wegen eines Angriffs auf New York", "Um Kolonien in Afrika zu bekommen"], r: 0, info: "Deutsche U-Boote versenkten auch neutrale und amerikanische Schiffe; dazu kam die Zimmermann-Depesche." },
        { t: "wahl", f: "Wann trat der Waffenstillstand in Kraft?", a: ["11. November 1918", "28. Juni 1919", "9. November 1918", "1. September 1918"], r: 0, info: "Am 11.11.1918 um 11 Uhr schwiegen die Waffen (Waffenstillstand von Compiègne)." },
        { t: "wahl", f: "Welcher Artikel des Versailler Vertrags legte die Kriegsschuld fest?", a: ["Artikel 231", "Artikel 48", "Artikel 1", "Artikel 100"], r: 0, info: "Artikel 231 erklärte Deutschland und seine Verbündeten für den Krieg verantwortlich." },
        { t: "wahl", f: "Welches Gebiet musste Deutschland 1919 an Frankreich abtreten?", a: ["Elsass-Lothringen", "Bayern", "Schlesien", "Ostpreußen"], r: 0, info: "Elsass-Lothringen war 1871 von Frankreich gekommen und ging 1919 zurück." },
        { t: "wahl", f: "Wie stark durfte das deutsche Heer nach Versailles sein?", a: ["100.000 Mann", "1 Million Mann", "500.000 Mann", "10.000 Mann"], r: 0, info: "Das Berufsheer wurde auf 100.000 Mann begrenzt, ohne Panzer, U-Boote und Luftwaffe." },
        { t: "wahl", f: "Was war der Schlieffen-Plan?", a: ["Frankreich schnell über Belgien besiegen, dann gegen Russland wenden", "Ein Friedensplan der Entente", "Ein Angriff auf England von See", "Ein Plan zur Teilung Polens"], r: 0, info: "Der Plan sollte den Zweifrontenkrieg vermeiden, scheiterte aber im September 1914 an der Marne." },
        { t: "eingabe", f: "In welcher Stadt wurde Franz Ferdinand ermordet?", l: ["Sarajevo", "Sarajewo"], info: "Sarajevo war damals Hauptstadt des von Österreich-Ungarn annektierten Bosnien." },
        { t: "eingabe", f: "Wie hieß der Attentäter von Sarajevo?", l: ["Gavrilo Princip", "Princip"], info: "Gavrilo Princip gehörte zur serbisch-nationalistischen Bewegung „Junges Bosnien“." },
        { t: "eingabe", f: "In welchem Jahr wurde der Versailler Vertrag unterzeichnet?", l: ["1919"], info: "Am 28. Juni 1919, genau fünf Jahre nach dem Attentat." },
        { t: "eingabe", f: "Wie nennt man die Wochen zwischen dem Attentat und den Kriegserklärungen 1914?", l: ["Julikrise"], info: "Die Julikrise 1914 führte durch Ultimaten und Mobilmachungen in den Krieg." },
        { t: "eingabe", f: "Welches Land schied 1917 nach einer Revolution aus dem Krieg aus?", l: ["Russland"], info: "Nach der Oktoberrevolution schloss Sowjetrussland 1918 den Frieden von Brest-Litowsk." },
        { t: "paare", f: "Ordne Jahr und Ereignis zu (Teil 1).", p: [["1914", "Attentat von Sarajevo, Kriegsbeginn"], ["1916", "Schlachten um Verdun und an der Somme"], ["1917", "Kriegseintritt der USA"], ["1918", "Waffenstillstand"], ["1919", "Versailler Vertrag"]] },
        { t: "paare", f: "Ordne die Länder ihrem Bündnis zu.", p: [["Deutsches Reich", "Dreibund / Mittelmächte"], ["Österreich-Ungarn", "Dreibund / Mittelmächte"], ["Frankreich", "Entente"], ["Großbritannien", "Entente"]] },
        { t: "reihenfolge", f: "Bringe die Ereignisse von 1914 in die richtige Reihenfolge.", items: ["Attentat von Sarajevo (28.6.)", "Blankoscheck des Deutschen Reichs (5./6.7.)", "Ultimatum Österreich-Ungarns an Serbien (23.7.)", "Kriegserklärung an Serbien (28.7.)", "Deutsche Kriegserklärung an Russland (1.8.)"] },
        { t: "reihenfolge", f: "Bringe den Kriegsverlauf in die richtige Reihenfolge.", items: ["Scheitern des Schlieffen-Plans an der Marne (1914)", "Schlacht um Verdun (1916)", "Kriegseintritt der USA (1917)", "Waffenstillstand (11.11.1918)", "Versailler Vertrag (1919)"] }
      ]
    },
    {
      id: "weimar",
      titel: "Weimarer Republik",
      kurz: "Novemberrevolution, Verfassung, 1923, Goldene Zwanziger, Krise 1929, Artikel 48",
      erklaerung: `<p>Die <b>Novemberrevolution 1918</b> begann mit dem Matrosenaufstand in Kiel. Am <b>9. November 1918</b> rief Philipp Scheidemann (SPD) die Republik aus, Kaiser Wilhelm II. floh in die Niederlande. Friedrich Ebert wurde erster Reichspräsident.</p>
<p>Die <b>Weimarer Verfassung</b> von 1919 war sehr demokratisch: Frauenwahlrecht, Verhältniswahl, ein mächtiger, direkt gewählter Reichspräsident. Schwachstellen waren der <b>Artikel 48</b> (Notverordnungen, mit denen der Präsident am Parlament vorbei regieren konnte) und die fehlende Sperrklausel, die zu vielen Kleinparteien führte.</p>
<p>Das <b>Krisenjahr 1923</b> brachte die Ruhrbesetzung durch Frankreich und Belgien, die <b>Hyperinflation</b> (ein Brot kostete Milliarden Mark) und den Hitler-Putsch in München. Die Rentenmark und der Dawes-Plan (1924) stabilisierten die Lage.</p>
<p>In den <b>Goldenen Zwanzigern</b> (1924–1929) erlebte die Republik eine Blüte: Kino, Jazz, Bauhaus, neue Rolle der Frau. Außenminister Gustav Stresemann erreichte 1926 die Aufnahme in den Völkerbund. Doch die Wirtschaft hing an amerikanischen Krediten.</p>
<p>Die <b>Weltwirtschaftskrise</b> nach dem Börsencrash in New York im Oktober <b>1929</b> traf Deutschland hart: über sechs Millionen Arbeitslose 1932. Ab 1930 regierten <b>Präsidialkabinette</b> (Brüning, Papen, Schleicher) mit Notverordnungen nach Artikel 48, weil es keine Mehrheiten mehr gab. Radikale Parteien, vor allem die NSDAP, gewannen massiv an Stimmen – 1932 wurde sie stärkste Partei.</p>`,
      aufgaben: [
        { t: "wahl", f: "Wo begann die Novemberrevolution 1918?", a: ["Mit dem Matrosenaufstand in Kiel", "In Weimar", "In Wien", "In Versailles"], r: 0, info: "Ende Oktober/Anfang November 1918 verweigerten Matrosen in Kiel den Befehl zu einer letzten Seeschlacht." },
        { t: "wahl", f: "Wer rief am 9. November 1918 die Republik aus?", a: ["Philipp Scheidemann", "Friedrich Ebert", "Karl Liebknecht", "Paul von Hindenburg"], r: 0, info: "Scheidemann (SPD) rief vom Reichstag aus die Republik aus; Liebknecht rief kurz danach eine sozialistische Republik aus." },
        { t: "wahl", f: "Wer war der erste Reichspräsident der Weimarer Republik?", a: ["Friedrich Ebert", "Paul von Hindenburg", "Gustav Stresemann", "Heinrich Brüning"], r: 0, info: "Ebert (SPD) war von 1919 bis zu seinem Tod 1925 Reichspräsident." },
        { t: "wahl", f: "Was erlaubte Artikel 48 der Weimarer Verfassung?", a: ["Der Reichspräsident konnte Notverordnungen erlassen und Grundrechte außer Kraft setzen", "Das Volk konnte den Kanzler direkt wählen", "Parteien durften verboten werden", "Frauen durften wählen"], r: 0, info: "Artikel 48 wurde ab 1930 zum Regieren ohne Parlamentsmehrheit genutzt." },
        { t: "wahl", f: "Was war neu in der Weimarer Verfassung?", a: ["Frauenwahlrecht", "Monarchie", "Dreiklassenwahlrecht", "Zensur der Presse"], r: 0, info: "Frauen durften 1919 erstmals wählen und gewählt werden." },
        { t: "wahl", f: "Welches Ereignis gehört NICHT ins Krisenjahr 1923?", a: ["Börsencrash in New York", "Ruhrbesetzung", "Hyperinflation", "Hitler-Putsch in München"], r: 0, info: "Der Börsencrash war 1929." },
        { t: "wahl", f: "Wie wurde die Hyperinflation 1923 beendet?", a: ["Durch die Einführung der Rentenmark", "Durch den Versailler Vertrag", "Durch Kriegsreparationen", "Durch den Goldstandard der USA"], r: 0, info: "Die Rentenmark (November 1923) ersetzte die wertlose Papiermark; 1924 folgte die Reichsmark." },
        { t: "wahl", f: "Welcher Politiker steht für die Außenpolitik der Verständigung in den Zwanzigern?", a: ["Gustav Stresemann", "Adolf Hitler", "Franz von Papen", "Wilhelm II."], r: 0, info: "Stresemann erreichte den Dawes-Plan, Locarno 1925 und den Völkerbundsbeitritt 1926; Friedensnobelpreis 1926." },
        { t: "wahl", f: "Wann begann die Weltwirtschaftskrise?", a: ["Oktober 1929", "1923", "1933", "1918"], r: 0, info: "Der „Schwarze Donnerstag“ an der New Yorker Börse war der 24. Oktober 1929." },
        { t: "wahl", f: "Was sind Präsidialkabinette?", a: ["Regierungen ohne Parlamentsmehrheit, gestützt auf Notverordnungen des Reichspräsidenten", "Regierungen aus allen Parteien", "Vom Kaiser eingesetzte Regierungen", "Regierungen der Arbeiterräte"], r: 0, info: "Brüning, Papen und Schleicher regierten 1930–1933 mit Artikel 48." },
        { t: "wahl", f: "Wie viele Arbeitslose gab es in Deutschland auf dem Höhepunkt der Krise 1932?", a: ["Über 6 Millionen", "Etwa 500.000", "Etwa 1 Million", "Über 20 Millionen"], r: 0, info: "Anfang 1932 waren über sechs Millionen Menschen offiziell arbeitslos." },
        { t: "wahl", f: "Warum galt die Weltwirtschaftskrise als besonders gefährlich für Deutschland?", a: ["Die Wirtschaft hing an kurzfristigen US-Krediten, die nun abgezogen wurden", "Deutschland hatte keine Industrie", "Deutschland war eine Kolonie", "Es gab keine Banken"], r: 0, info: "Die Stabilität der Goldenen Zwanziger war mit amerikanischem Geld finanziert." },
        { t: "eingabe", f: "An welchem Tag im November 1918 wurde die Republik ausgerufen? (Tag und Monat)", l: ["9. November", "9.11.", "9.11", "9. 11."], info: "Der 9. November 1918 – ein Schicksalstag der deutschen Geschichte." },
        { t: "eingabe", f: "Welches Gebiet besetzten Frankreich und Belgien 1923?", l: ["Ruhrgebiet", "das Ruhrgebiet", "Ruhr"], info: "Die Ruhrbesetzung sollte ausbleibende Reparationen erzwingen; die Regierung rief zum passiven Widerstand auf." },
        { t: "eingabe", f: "Wie hieß der Reichskanzler, der ab 1930 mit Notverordnungen regierte und für seine Sparpolitik bekannt war?", l: ["Brüning", "Heinrich Brüning"], info: "Brüning (Zentrum) wurde wegen seiner harten Sparpolitik „Hungerkanzler“ genannt." },
        { t: "eingabe", f: "Welche Partei wurde bei den Reichstagswahlen im Juli 1932 stärkste Partei?", l: ["NSDAP"], info: "Die NSDAP erhielt im Juli 1932 rund 37 Prozent der Stimmen." },
        { t: "paare", f: "Ordne Jahr und Ereignis zu (Teil 2).", p: [["1918", "Novemberrevolution"], ["1919", "Weimarer Verfassung"], ["1923", "Hyperinflation und Hitler-Putsch"], ["1929", "Beginn der Weltwirtschaftskrise"]] },
        { t: "paare", f: "Ordne Person und Rolle zu.", p: [["Friedrich Ebert", "erster Reichspräsident"], ["Philipp Scheidemann", "rief die Republik aus"], ["Gustav Stresemann", "Außenminister der Verständigung"], ["Paul von Hindenburg", "Reichspräsident ab 1925"]] },
        { t: "reihenfolge", f: "Bringe die Phasen der Weimarer Republik in die richtige Reihenfolge.", items: ["Novemberrevolution (1918)", "Krisenjahr mit Hyperinflation (1923)", "Goldene Zwanziger (1924–1929)", "Weltwirtschaftskrise (ab 1929)", "Präsidialkabinette (1930–1933)"] }
      ]
    },
    {
      id: "ns",
      titel: "Nationalsozialismus",
      kurz: "Machtübernahme 1933, Ermächtigungsgesetz, Gleichschaltung, Nürnberger Gesetze, Pogrome 1938",
      erklaerung: `<p>Am <b>30. Januar 1933</b> ernannte Reichspräsident Hindenburg Adolf Hitler zum Reichskanzler. Die Nationalsozialisten nannten das „Machtergreifung“; genauer ist <b>Machtübertragung</b>, denn Hitler kam durch konservative Politiker legal ins Amt.</p>
<p>Nach dem <b>Reichstagsbrand</b> am 27. Februar 1933 setzte die „Reichstagsbrandverordnung“ die Grundrechte außer Kraft; Kommunisten und Sozialdemokraten wurden verhaftet. Das <b>Ermächtigungsgesetz</b> vom 23. März 1933 erlaubte der Regierung, Gesetze ohne Reichstag zu beschließen – nur die SPD stimmte dagegen, die KPD-Abgeordneten waren bereits verhaftet oder geflohen.</p>
<p>Mit der <b>Gleichschaltung</b> wurden Länder, Parteien, Gewerkschaften, Vereine und Medien unter NS-Kontrolle gebracht. Ab Juli 1933 war die NSDAP die einzige erlaubte Partei. Die <b>Propaganda</b> unter Joseph Goebbels nutzte Rundfunk („Volksempfänger“), Film, Plakate und Massenveranstaltungen, um den „Führerkult“ zu verbreiten.</p>
<p>Die <b>Nürnberger Gesetze</b> vom September <b>1935</b> entzogen Juden die Bürgerrechte und verboten Ehen zwischen Juden und Nichtjuden. In den <b>Novemberpogromen</b> vom 9./10. November <b>1938</b> wurden Synagogen angezündet, Geschäfte zerstört, etwa 1.400 Menschen getötet und rund 30.000 jüdische Männer in Konzentrationslager verschleppt.</p>
<p><b>Widerstand</b> gab es trotz Terror: die Weiße Rose um Sophie und Hans Scholl (Flugblätter 1942/43), Georg Elsers Attentat 1939, die Männer des 20. Juli 1944 um Stauffenberg, Edelweißpiraten, kirchliche Kreise und Kommunisten. Die meisten Deutschen aber passten sich an oder unterstützten das Regime.</p>`,
      aufgaben: [
        { t: "wahl", f: "Wann wurde Hitler zum Reichskanzler ernannt?", a: ["30. Januar 1933", "9. November 1923", "1. September 1939", "23. März 1933"], r: 0, info: "Reichspräsident Hindenburg ernannte Hitler am 30.1.1933." },
        { t: "wahl", f: "Warum spricht man heute eher von „Machtübertragung“ als von „Machtergreifung“?", a: ["Weil Hitler legal von Hindenburg ernannt wurde, nicht durch einen Putsch", "Weil Hitler die Wahl mit absoluter Mehrheit gewann", "Weil das Militär ihn einsetzte", "Weil der Kaiser ihn ernannte"], r: 0, info: "Konservative Politiker um Papen glaubten, Hitler „zähmen“ zu können." },
        { t: "wahl", f: "Welche Folge hatte der Reichstagsbrand vom 27. Februar 1933?", a: ["Die Grundrechte wurden per Notverordnung außer Kraft gesetzt", "Der Reichstag wurde neu gebaut", "Hitler trat zurück", "Die SPD wurde Regierungspartei"], r: 0, info: "Die Reichstagsbrandverordnung ermöglichte Massenverhaftungen vor allem von Kommunisten." },
        { t: "wahl", f: "Was bewirkte das Ermächtigungsgesetz vom 23. März 1933?", a: ["Die Regierung konnte Gesetze ohne Reichstag und Reichspräsident beschließen", "Frauen bekamen das Wahlrecht", "Die Länder wurden selbstständig", "Der Reichstag wurde gestärkt"], r: 0, info: "Es war das Ende der parlamentarischen Demokratie; nur die SPD stimmte dagegen." },
        { t: "wahl", f: "Welche Partei stimmte als einzige gegen das Ermächtigungsgesetz?", a: ["SPD", "Zentrum", "DNVP", "NSDAP"], r: 0, info: "Otto Wels (SPD) begründete das Nein mutig im Reichstag; die KPD war bereits ausgeschaltet." },
        { t: "wahl", f: "Was bedeutet Gleichschaltung?", a: ["Alle Bereiche von Staat und Gesellschaft wurden unter NS-Kontrolle gebracht", "Alle Menschen bekamen gleichen Lohn", "Alle Länder bekamen gleiche Rechte", "Alle Parteien bildeten eine Koalition"], r: 0, info: "Länder, Gewerkschaften, Parteien, Vereine und Medien wurden gleichgeschaltet." },
        { t: "wahl", f: "Was legten die Nürnberger Gesetze von 1935 fest?", a: ["Entzug der Bürgerrechte für Juden und Eheverbot zwischen Juden und Nichtjuden", "Die Wehrpflicht", "Den Bau der Autobahn", "Die Auflösung des Reichstags"], r: 0, info: "„Reichsbürgergesetz“ und „Blutschutzgesetz“ machten die Ausgrenzung zum Gesetz." },
        { t: "wahl", f: "Was geschah in der Nacht vom 9. auf den 10. November 1938?", a: ["Novemberpogrome: Synagogen brannten, jüdische Geschäfte wurden zerstört", "Der Reichstag brannte", "Hitler wurde Kanzler", "Der Krieg begann"], r: 0, info: "Die Pogrome waren von der NS-Führung gesteuert; rund 30.000 jüdische Männer kamen in Lager." },
        { t: "wahl", f: "Wer leitete die NS-Propaganda?", a: ["Joseph Goebbels", "Heinrich Himmler", "Hermann Göring", "Rudolf Heß"], r: 0, info: "Goebbels war Reichsminister für Volksaufklärung und Propaganda." },
        { t: "wahl", f: "Welches Gerät nutzten die Nationalsozialisten gezielt für Propaganda in jedem Haushalt?", a: ["Volksempfänger (Radio)", "Fernseher", "Telefon", "Schreibmaschine"], r: 0, info: "Der billige Volksempfänger brachte Hitlers Reden in die Wohnzimmer." },
        { t: "wahl", f: "Wofür steht die Weiße Rose?", a: ["Studentischer Widerstand mit Flugblättern in München", "Eine NS-Jugendorganisation", "Ein Attentat auf Hitler 1944", "Eine Propagandazeitung"], r: 0, info: "Sophie und Hans Scholl und ihre Freunde wurden 1943 hingerichtet." },
        { t: "wahl", f: "Was geschah am 20. Juli 1944?", a: ["Attentat auf Hitler durch Stauffenberg und Umsturzversuch", "Kriegsbeginn", "Reichstagsbrand", "Novemberpogrome"], r: 0, info: "Die Bombe im Führerhauptquartier verfehlte ihr Ziel; die Verschwörer wurden hingerichtet." },
        { t: "eingabe", f: "Wie heißt das Gesetz vom März 1933, das der Regierung die Gesetzgebung übertrug?", l: ["Ermächtigungsgesetz"], info: "Offiziell „Gesetz zur Behebung der Not von Volk und Reich“." },
        { t: "eingabe", f: "In welcher Stadt wurden 1935 die Rassengesetze auf dem Reichsparteitag verkündet?", l: ["Nürnberg"], info: "Deshalb heißen sie Nürnberger Gesetze." },
        { t: "eingabe", f: "Wer versuchte am 8. November 1939 im Münchner Bürgerbräukeller allein ein Attentat auf Hitler?", l: ["Georg Elser", "Elser"], info: "Der Schreiner Georg Elser handelte ganz allein; Hitler hatte den Saal kurz vorher verlassen." },
        { t: "eingabe", f: "Welche Jugendgruppen im Rheinland und Ruhrgebiet widersetzten sich der Hitlerjugend?", l: ["Edelweißpiraten"], info: "Die Edelweißpiraten waren lose Gruppen Jugendlicher, die sich dem HJ-Zwang entzogen." },
        { t: "paare", f: "Ordne Datum und Ereignis zu.", p: [["30.1.1933", "Hitler wird Reichskanzler"], ["27.2.1933", "Reichstagsbrand"], ["23.3.1933", "Ermächtigungsgesetz"], ["15.9.1935", "Nürnberger Gesetze"], ["9./10.11.1938", "Novemberpogrome"]] },
        { t: "paare", f: "Ordne Widerstandsgruppe oder Person und Merkmal zu.", p: [["Weiße Rose", "Flugblätter von Studierenden"], ["Georg Elser", "Einzeltäter, Attentat 1939"], ["Stauffenberg", "Attentat am 20. Juli 1944"], ["Edelweißpiraten", "Jugendliche gegen die HJ"]] },
        { t: "reihenfolge", f: "Bringe die Schritte zur Diktatur 1933 in die richtige Reihenfolge.", items: ["Ernennung Hitlers zum Kanzler (30.1.)", "Reichstagsbrand und Notverordnung (27./28.2.)", "Ermächtigungsgesetz (23.3.)", "Verbot aller anderen Parteien (Juli)"] }
      ]
    },
    {
      id: "wk2",
      titel: "Zweiter Weltkrieg und Holocaust",
      kurz: "1.9.1939, Blitzkrieg, Überfall auf die Sowjetunion, Wannseekonferenz, Stalingrad, D-Day, 8.5.1945",
      erklaerung: `<p>Am <b>1. September 1939</b> überfiel Deutschland Polen; Großbritannien und Frankreich erklärten daraufhin den Krieg. Zuvor hatte Hitler mit Stalin den Hitler-Stalin-Pakt geschlossen, der Polen heimlich aufteilte. Mit der <b>Blitzkrieg</b>-Taktik (schnelle Panzerverbände und Luftwaffe) besiegte Deutschland 1940 Dänemark, Norwegen, die Benelux-Länder und Frankreich.</p>
<p>Am <b>22. Juni 1941</b> begann der <b>Überfall auf die Sowjetunion</b> („Unternehmen Barbarossa“) – ein rassistischer Vernichtungskrieg, in dem Millionen Zivilisten und Kriegsgefangene starben. Nach dem japanischen Angriff auf Pearl Harbor im Dezember 1941 traten die USA in den Krieg ein.</p>
<p>Der <b>Holocaust</b> (auch Shoah) ist der systematische Mord an etwa <b>sechs Millionen Juden</b> Europas. Er begann mit Ausgrenzung und Ghettos, ab 1941 mit Massenerschießungen durch Einsatzgruppen. Auf der <b>Wannseekonferenz</b> am 20. Januar <b>1942</b> koordinierten Ministerien und SS die „Endlösung“, also die Deportation und Ermordung aller europäischen Juden in Vernichtungslagern wie Auschwitz-Birkenau, Treblinka und Sobibor. Auch Sinti und Roma, Menschen mit Behinderungen, politische Gegner, Homosexuelle und andere wurden verfolgt und ermordet.</p>
<p>Die Wende brachte die Niederlage in <b>Stalingrad</b> (Februar 1943). Am <b>6. Juni 1944</b> (<b>D-Day</b>) landeten die Westalliierten in der Normandie. Am <b>8. Mai 1945</b> kapitulierte die Wehrmacht bedingungslos; der Krieg in Europa war vorbei. Im Pazifik endete er nach den Atombombenabwürfen auf Hiroshima und Nagasaki im September 1945.</p>
<p>Der Zweite Weltkrieg forderte über <b>60 Millionen Tote</b>. Die Erinnerung an die Opfer und die Frage nach Verantwortung prägen Deutschland bis heute.</p>`,
      aufgaben: [
        { t: "wahl", f: "Wann begann der Zweite Weltkrieg in Europa?", a: ["1. September 1939", "30. Januar 1933", "22. Juni 1941", "8. Mai 1945"], r: 0, info: "Mit dem deutschen Überfall auf Polen am 1.9.1939." },
        { t: "wahl", f: "Welches Land wurde am 1. September 1939 angegriffen?", a: ["Polen", "Frankreich", "Sowjetunion", "Dänemark"], r: 0, info: "Großbritannien und Frankreich erklärten Deutschland deshalb am 3. September den Krieg." },
        { t: "wahl", f: "Was bedeutet Blitzkrieg?", a: ["Schneller Angriff mit Panzern und Luftwaffe, um den Gegner in Wochen zu besiegen", "Krieg nur bei Nacht", "Ein Krieg mit Gewitter", "Ein langer Stellungskrieg"], r: 0, info: "So wurde 1940 Frankreich in sechs Wochen besiegt." },
        { t: "wahl", f: "Wann begann der Überfall auf die Sowjetunion?", a: ["22. Juni 1941", "1. September 1939", "6. Juni 1944", "7. Dezember 1941"], r: 0, info: "„Unternehmen Barbarossa“ brach den Hitler-Stalin-Pakt von 1939." },
        { t: "wahl", f: "Was wurde auf der Wannseekonferenz am 20. Januar 1942 besprochen?", a: ["Die Organisation der Deportation und Ermordung der europäischen Juden", "Der Angriff auf Frankreich", "Ein Friedensvertrag mit England", "Der Bau der Autobahn"], r: 0, info: "Hohe Beamte und SS-Führer koordinierten die sogenannte Endlösung." },
        { t: "wahl", f: "Wie viele Juden wurden im Holocaust ermordet?", a: ["Etwa 6 Millionen", "Etwa 600.000", "Etwa 60.000", "Etwa 20 Millionen"], r: 0, info: "Rund sechs Millionen jüdische Menschen aus ganz Europa wurden ermordet." },
        { t: "wahl", f: "Welches Lager war das größte Vernichtungslager?", a: ["Auschwitz-Birkenau", "Dachau", "Buchenwald", "Bergen-Belsen"], r: 0, info: "In Auschwitz-Birkenau wurden über eine Million Menschen ermordet, die meisten Juden." },
        { t: "wahl", f: "Welche Schlacht gilt als Wendepunkt des Krieges in Europa?", a: ["Stalingrad (1942/43)", "Verdun", "Sedan", "Waterloo"], r: 0, info: "Die 6. Armee kapitulierte im Februar 1943; danach befand sich die Wehrmacht im Osten auf dem Rückzug." },
        { t: "wahl", f: "Was geschah am 6. Juni 1944 (D-Day)?", a: ["Landung der Westalliierten in der Normandie", "Kapitulation Deutschlands", "Angriff auf Pearl Harbor", "Beginn des Russlandfeldzugs"], r: 0, info: "Die Invasion eröffnete die zweite Front im Westen." },
        { t: "wahl", f: "Wann kapitulierte die Wehrmacht bedingungslos?", a: ["8. Mai 1945", "30. April 1945", "2. September 1945", "11. November 1945"], r: 0, info: "Der 8. Mai 1945 gilt als Tag der Befreiung vom Nationalsozialismus." },
        { t: "wahl", f: "Warum traten die USA im Dezember 1941 in den Krieg ein?", a: ["Nach dem japanischen Angriff auf Pearl Harbor; Deutschland erklärte den USA den Krieg", "Wegen der Wannseekonferenz", "Weil Frankreich sie bat", "Nach dem D-Day"], r: 0, info: "Am 7.12.1941 griff Japan Pearl Harbor an, am 11.12. erklärte Hitler den USA den Krieg." },
        { t: "wahl", f: "Welche Gruppen wurden neben den Juden im NS-Staat verfolgt und ermordet?", a: ["Sinti und Roma, Menschen mit Behinderungen, politische Gegner, Homosexuelle", "Nur Soldaten feindlicher Länder", "Niemand sonst", "Nur Adlige"], r: 0, info: "Der NS-Rassenwahn richtete sich gegen viele Gruppen; die „Euthanasie“-Morde trafen Menschen mit Behinderungen." },
        { t: "eingabe", f: "Wie heißt der Mord an den europäischen Juden (hebräisches Wort oder griechischer Begriff)?", l: ["Holocaust", "Shoah", "Schoah", "Shoa"], info: "Holocaust (griechisch „vollständig verbrannt“) oder Shoah (hebräisch „Katastrophe“)." },
        { t: "eingabe", f: "Wie hieß der Deckname für den Überfall auf die Sowjetunion?", l: ["Barbarossa", "Unternehmen Barbarossa"], info: "Benannt nach Kaiser Friedrich I. Barbarossa." },
        { t: "eingabe", f: "In welcher Stadt kapitulierte die 6. Armee im Februar 1943?", l: ["Stalingrad", "Wolgograd"], info: "Stalingrad heißt heute Wolgograd." },
        { t: "eingabe", f: "Welcher Pakt von 1939 teilte Polen heimlich zwischen Deutschland und der Sowjetunion auf?", l: ["Hitler-Stalin-Pakt", "Hitler Stalin Pakt", "Molotow-Ribbentrop-Pakt", "Nichtangriffspakt"], info: "Der Nichtangriffspakt vom 23. August 1939 enthielt ein geheimes Zusatzprotokoll." },
        { t: "paare", f: "Ordne Datum und Ereignis zu.", p: [["1.9.1939", "Überfall auf Polen"], ["22.6.1941", "Überfall auf die Sowjetunion"], ["20.1.1942", "Wannseekonferenz"], ["6.6.1944", "D-Day"], ["8.5.1945", "Kapitulation"]] },
        { t: "paare", f: "Ordne Begriff und Erklärung zu.", p: [["Einsatzgruppen", "SS-Einheiten für Massenerschießungen"], ["Ghetto", "abgeriegeltes Wohnviertel für Juden"], ["Deportation", "Verschleppung in Lager"], ["Vernichtungslager", "Ort des industriellen Massenmords"]] },
        { t: "reihenfolge", f: "Bringe den Kriegsverlauf in die richtige Reihenfolge.", items: ["Überfall auf Polen (1939)", "Sieg über Frankreich (1940)", "Überfall auf die Sowjetunion (1941)", "Niederlage in Stalingrad (1943)", "D-Day (1944)", "Kapitulation (1945)"] },
        { t: "reihenfolge", f: "Bringe die Stufen der Judenverfolgung in die richtige Reihenfolge.", items: ["Boykott und Berufsverbote (ab 1933)", "Nürnberger Gesetze (1935)", "Novemberpogrome (1938)", "Massenerschießungen und Ghettos (ab 1941)", "Wannseekonferenz und Vernichtungslager (ab 1942)"] }
      ]
    },
    {
      id: "nachkrieg",
      titel: "Nachkriegszeit und geteiltes Deutschland",
      kurz: "Potsdam, Besatzungszonen, Blockade, 1949, 17. Juni, Mauerbau, Mauerfall, Einheit",
      erklaerung: `<p>Auf der <b>Potsdamer Konferenz</b> (Juli/August 1945) beschlossen die USA, Großbritannien und die Sowjetunion die „vier D“: Demilitarisierung, Denazifizierung, Demokratisierung, Dezentralisierung. Deutschland wurde in <b>vier Besatzungszonen</b> geteilt (USA, Großbritannien, Frankreich, Sowjetunion), Berlin in vier Sektoren.</p>
<p>Der <b>Kalte Krieg</b> zwischen West und Ost machte die Teilung dauerhaft. Nach der Währungsreform im Westen (Juni 1948) sperrte die Sowjetunion alle Zufahrtswege nach West-Berlin: die <b>Berliner Blockade</b> (1948/49). Die Westmächte versorgten die Stadt fast ein Jahr lang über die <b>Luftbrücke</b> („Rosinenbomber“).</p>
<p><b>1949</b> entstanden zwei Staaten: am 23. Mai die <b>Bundesrepublik Deutschland</b> mit dem Grundgesetz (erster Kanzler Konrad Adenauer), am 7. Oktober die <b>DDR</b> unter Führung der SED. Die BRD erlebte das Wirtschaftswunder und band sich an den Westen (NATO 1955), die DDR wurde Teil des Ostblocks (Warschauer Pakt 1955).</p>
<p>Am <b>17. Juni 1953</b> schlugen sowjetische Panzer den Volksaufstand in der DDR nieder. Weil immer mehr Menschen in den Westen flohen, ließ die DDR-Führung am <b>13. August 1961</b> die <b>Berliner Mauer</b> bauen. An der innerdeutschen Grenze starben Hunderte Flüchtende.</p>
<p>Ende der 1980er-Jahre brachten Gorbatschows Reformen, Massenflucht über Ungarn und die <b>Montagsdemonstrationen</b> („Wir sind das Volk“) die SED-Herrschaft zum Wanken. Am <b>9. November 1989</b> fiel die Mauer. Am <b>3. Oktober 1990</b> trat die DDR der Bundesrepublik bei – die <b>Deutsche Einheit</b>.</p>`,
      aufgaben: [
        { t: "wahl", f: "Was beschlossen die Siegermächte auf der Potsdamer Konferenz 1945?", a: ["Demilitarisierung, Denazifizierung, Demokratisierung, Dezentralisierung", "Die sofortige Gründung der BRD", "Den Bau der Berliner Mauer", "Die Rückgabe der Kolonien"], r: 0, info: "Die „vier D“ sollten Deutschland dauerhaft friedlich machen." },
        { t: "wahl", f: "In wie viele Besatzungszonen wurde Deutschland 1945 geteilt?", a: ["Vier", "Zwei", "Drei", "Fünf"], r: 0, info: "USA, Großbritannien, Frankreich und Sowjetunion; Berlin in vier Sektoren." },
        { t: "wahl", f: "Was war die Berliner Luftbrücke?", a: ["Versorgung West-Berlins aus der Luft während der sowjetischen Blockade 1948/49", "Eine Brücke über die Spree", "Ein Flughafen in Ost-Berlin", "Eine Fluglinie der DDR"], r: 0, info: "Fast ein Jahr lang landeten Flugzeuge im Minutentakt in Tempelhof." },
        { t: "wahl", f: "Wann wurde die Bundesrepublik Deutschland gegründet?", a: ["23. Mai 1949", "7. Oktober 1949", "8. Mai 1945", "3. Oktober 1990"], r: 0, info: "Am 23. Mai 1949 wurde das Grundgesetz verkündet." },
        { t: "wahl", f: "Wann wurde die DDR gegründet?", a: ["7. Oktober 1949", "23. Mai 1949", "13. August 1961", "17. Juni 1953"], r: 0, info: "Die DDR entstand am 7. Oktober 1949 in der sowjetischen Zone." },
        { t: "wahl", f: "Wer war der erste Bundeskanzler?", a: ["Konrad Adenauer", "Willy Brandt", "Helmut Kohl", "Walter Ulbricht"], r: 0, info: "Adenauer (CDU) regierte von 1949 bis 1963 und band die BRD an den Westen." },
        { t: "wahl", f: "Was geschah am 17. Juni 1953?", a: ["Volksaufstand in der DDR, von sowjetischen Panzern niedergeschlagen", "Mauerbau", "Gründung der DDR", "Mauerfall"], r: 0, info: "Der Aufstand begann mit Protesten gegen höhere Arbeitsnormen und wurde zur Forderung nach Freiheit." },
        { t: "wahl", f: "Wann begann der Bau der Berliner Mauer?", a: ["13. August 1961", "17. Juni 1953", "9. November 1989", "7. Oktober 1949"], r: 0, info: "Die DDR wollte die Massenflucht in den Westen stoppen." },
        { t: "wahl", f: "Wann fiel die Berliner Mauer?", a: ["9. November 1989", "3. Oktober 1990", "13. August 1961", "17. Juni 1989"], r: 0, info: "Nach einer missverständlichen Pressekonferenz öffneten sich die Grenzübergänge noch in der Nacht." },
        { t: "wahl", f: "Wann wurde Deutschland wiedervereinigt?", a: ["3. Oktober 1990", "9. November 1989", "1. Juli 1990", "23. Mai 1990"], r: 0, info: "Die DDR trat am 3.10.1990 der Bundesrepublik bei – heute Nationalfeiertag." },
        { t: "wahl", f: "Was meint der Begriff Kalter Krieg?", a: ["Den Konflikt zwischen West und Ost ohne direkten Krieg zwischen USA und Sowjetunion", "Einen Krieg im Winter", "Den Krieg in Korea", "Einen Krieg um die Arktis"], r: 0, info: "Wettrüsten, Stellvertreterkriege und Propaganda statt direkter Kampf." },
        { t: "wahl", f: "Welchen Militärbündnissen traten BRD und DDR 1955 bei?", a: ["BRD: NATO, DDR: Warschauer Pakt", "BRD: Warschauer Pakt, DDR: NATO", "Beide: NATO", "Beide: Völkerbund"], r: 0, info: "Damit war die Teilung auch militärisch festgeschrieben." },
        { t: "eingabe", f: "Welche Partei herrschte in der DDR?", l: ["SED", "Sozialistische Einheitspartei Deutschlands"], info: "Die SED entstand 1946 aus der Zwangsvereinigung von KPD und SPD in der Sowjetzone." },
        { t: "eingabe", f: "Wie lautete der Ruf der Montagsdemonstrationen 1989?", l: ["Wir sind das Volk"], info: "Später wurde daraus „Wir sind ein Volk“ als Ruf nach Einheit." },
        { t: "eingabe", f: "Welcher sowjetische Staatschef leitete mit Glasnost und Perestroika Reformen ein?", l: ["Gorbatschow", "Michail Gorbatschow", "Gorbachev"], info: "Gorbatschow verzichtete 1989 darauf, die Proteste militärisch niederzuschlagen." },
        { t: "eingabe", f: "Wie hießen die Flugzeuge der Luftbrücke im Volksmund?", l: ["Rosinenbomber"], info: "Piloten warfen Süßigkeiten an kleinen Fallschirmen für Kinder ab." },
        { t: "paare", f: "Ordne Datum und Ereignis zu.", p: [["23.5.1949", "Gründung der BRD"], ["7.10.1949", "Gründung der DDR"], ["17.6.1953", "Volksaufstand in der DDR"], ["13.8.1961", "Mauerbau"], ["9.11.1989", "Mauerfall"]] },
        { t: "paare", f: "Ordne Person und Rolle zu.", p: [["Konrad Adenauer", "erster Bundeskanzler"], ["Walter Ulbricht", "DDR-Staatschef beim Mauerbau"], ["Helmut Kohl", "Kanzler der Einheit"], ["Michail Gorbatschow", "Reformer in der Sowjetunion"]] },
        { t: "reihenfolge", f: "Bringe die Ereignisse in die richtige Reihenfolge.", items: ["Potsdamer Konferenz (1945)", "Berliner Blockade (1948/49)", "Gründung von BRD und DDR (1949)", "Volksaufstand 17. Juni (1953)", "Mauerbau (1961)", "Mauerfall (1989)"] },
        { t: "reihenfolge", f: "Bringe den Weg zur Einheit in die richtige Reihenfolge.", items: ["Massenflucht über Ungarn (Sommer 1989)", "Montagsdemonstrationen (Herbst 1989)", "Mauerfall (9.11.1989)", "Erste freie Volkskammerwahl (März 1990)", "Deutsche Einheit (3.10.1990)"] }
      ]
    },
    {
      id: "zeitstrahl",
      titel: "Zeitstrahl 1871–1990",
      kurz: "Jahreszahlen und Ereignisse zuordnen und ordnen",
      erklaerung: `<p>Ein <b>Zeitstrahl</b> hilft dir, Ereignisse einzuordnen und Zusammenhänge zu sehen. Hier die wichtigsten Daten von der Reichsgründung bis zur Einheit:</p>
<table>
<tr><td><b>1871</b></td><td>Gründung des Deutschen Kaiserreichs in Versailles</td></tr>
<tr><td><b>1884/85</b></td><td>Berliner Konferenz, erste deutsche Kolonien</td></tr>
<tr><td><b>1914–1918</b></td><td>Erster Weltkrieg</td></tr>
<tr><td><b>1918</b></td><td>Novemberrevolution, Ausrufung der Republik</td></tr>
<tr><td><b>1919</b></td><td>Weimarer Verfassung, Versailler Vertrag</td></tr>
<tr><td><b>1923</b></td><td>Hyperinflation, Ruhrbesetzung, Hitler-Putsch</td></tr>
<tr><td><b>1929</b></td><td>Weltwirtschaftskrise</td></tr>
<tr><td><b>1933</b></td><td>Hitler wird Reichskanzler, Ermächtigungsgesetz</td></tr>
<tr><td><b>1935</b></td><td>Nürnberger Gesetze</td></tr>
<tr><td><b>1938</b></td><td>Novemberpogrome</td></tr>
<tr><td><b>1939–1945</b></td><td>Zweiter Weltkrieg</td></tr>
<tr><td><b>1942</b></td><td>Wannseekonferenz</td></tr>
<tr><td><b>1945</b></td><td>Kapitulation, Potsdamer Konferenz</td></tr>
<tr><td><b>1949</b></td><td>Gründung von BRD und DDR</td></tr>
<tr><td><b>1953</b></td><td>Volksaufstand in der DDR</td></tr>
<tr><td><b>1961</b></td><td>Mauerbau</td></tr>
<tr><td><b>1989</b></td><td>Mauerfall</td></tr>
<tr><td><b>1990</b></td><td>Deutsche Einheit</td></tr>
</table>
<p>Tipp: Merke dir Ankerdaten (1871, 1914, 1933, 1945, 1989) und hänge die anderen Ereignisse daran auf.</p>`,
      aufgaben: [
        { t: "paare", f: "Ordne Jahr und Ereignis zu (Teil 3).", p: [["1871", "Gründung des Kaiserreichs"], ["1914", "Beginn des Ersten Weltkriegs"], ["1918", "Ende des Ersten Weltkriegs"], ["1919", "Versailler Vertrag"]] },
        { t: "paare", f: "Ordne Jahr und Ereignis zu (Teil 4).", p: [["1923", "Hyperinflation"], ["1929", "Weltwirtschaftskrise"], ["1933", "Hitler wird Reichskanzler"], ["1935", "Nürnberger Gesetze"]] },
        { t: "paare", f: "Ordne Jahr und Ereignis zu (Teil 5).", p: [["1938", "Novemberpogrome"], ["1939", "Überfall auf Polen"], ["1941", "Überfall auf die Sowjetunion"], ["1942", "Wannseekonferenz"]] },
        { t: "paare", f: "Ordne Jahr und Ereignis zu (Teil 6).", p: [["1943", "Niederlage in Stalingrad"], ["1944", "D-Day"], ["1945", "Kapitulation und Potsdamer Konferenz"], ["1948", "Beginn der Berliner Blockade"]] },
        { t: "paare", f: "Ordne Jahr und Ereignis zu (Teil 7).", p: [["1949", "Gründung von BRD und DDR"], ["1953", "Volksaufstand in der DDR"], ["1961", "Mauerbau"], ["1989", "Mauerfall"], ["1990", "Deutsche Einheit"]] },
        { t: "paare", f: "Ordne Jahr und Ereignis zu (Teil 8).", p: [["1884/85", "Berliner Konferenz"], ["1904", "Aufstand der Herero"], ["1917", "Kriegseintritt der USA"], ["1926", "Deutschland tritt dem Völkerbund bei"]] },
        { t: "paare", f: "Ordne das genaue Datum dem Ereignis zu (Teil 1).", p: [["28.6.1914", "Attentat von Sarajevo"], ["9.11.1918", "Ausrufung der Republik"], ["30.1.1933", "Hitler wird Kanzler"], ["8.5.1945", "Kapitulation der Wehrmacht"]] },
        { t: "paare", f: "Ordne das genaue Datum dem Ereignis zu (Teil 2).", p: [["17.6.1953", "Volksaufstand DDR"], ["13.8.1961", "Mauerbau"], ["9.11.1989", "Mauerfall"], ["3.10.1990", "Deutsche Einheit"]] },
        { t: "paare", f: "Ordne die Epoche dem Zeitraum zu.", p: [["Kaiserreich", "1871–1918"], ["Weimarer Republik", "1918–1933"], ["NS-Diktatur", "1933–1945"], ["Geteiltes Deutschland", "1949–1990"]] },
        { t: "paare", f: "Ordne das Jahr dem Ereignis zu.", p: [["1924", "Dawes-Plan und Beginn der Goldenen Zwanziger"], ["1955", "BRD in der NATO, DDR im Warschauer Pakt"], ["1898", "Pacht von Kiautschou"], ["1932", "Über 6 Millionen Arbeitslose"]] },
        { t: "reihenfolge", f: "Bringe die Ereignisse in die richtige zeitliche Reihenfolge (Teil 1).", items: ["Gründung des Kaiserreichs", "Berliner Konferenz", "Attentat von Sarajevo", "Versailler Vertrag"] },
        { t: "reihenfolge", f: "Bringe die Ereignisse in die richtige zeitliche Reihenfolge (Teil 2).", items: ["Novemberrevolution", "Hyperinflation", "Weltwirtschaftskrise", "Hitler wird Reichskanzler"] },
        { t: "reihenfolge", f: "Bringe die Ereignisse in die richtige zeitliche Reihenfolge (Teil 3).", items: ["Ermächtigungsgesetz", "Nürnberger Gesetze", "Novemberpogrome", "Überfall auf Polen"] },
        { t: "reihenfolge", f: "Bringe die Ereignisse in die richtige zeitliche Reihenfolge (Teil 4).", items: ["Überfall auf die Sowjetunion", "Wannseekonferenz", "Stalingrad", "D-Day", "Kapitulation"] },
        { t: "reihenfolge", f: "Bringe die Ereignisse in die richtige zeitliche Reihenfolge (Teil 5).", items: ["Potsdamer Konferenz", "Berliner Blockade", "Gründung der BRD", "Gründung der DDR"] },
        { t: "reihenfolge", f: "Bringe die Ereignisse in die richtige zeitliche Reihenfolge (Teil 6).", items: ["Volksaufstand in der DDR", "Mauerbau", "Mauerfall", "Deutsche Einheit"] },
        { t: "reihenfolge", f: "Bringe die Epochen in die richtige Reihenfolge.", items: ["Kaiserreich", "Erster Weltkrieg", "Weimarer Republik", "NS-Diktatur", "Zweiter Weltkrieg", "Geteiltes Deutschland"] },
        { t: "reihenfolge", f: "Bringe die Ereignisse des Jahres 1918/19 in die richtige Reihenfolge.", items: ["Matrosenaufstand in Kiel", "Ausrufung der Republik", "Waffenstillstand", "Weimarer Verfassung", "Versailler Vertrag"] },
        { t: "reihenfolge", f: "Bringe die Ereignisse in die richtige zeitliche Reihenfolge (Teil 7).", items: ["Aufstand der Herero (1904)", "Kriegseintritt der USA (1917)", "Völkerbundsbeitritt Deutschlands (1926)", "NSDAP stärkste Partei (1932)"] },
        { t: "reihenfolge", f: "Bringe die Ereignisse in die richtige zeitliche Reihenfolge (Teil 8).", items: ["Reichstagsbrand (1933)", "Attentat Georg Elser (1939)", "Flugblätter der Weißen Rose (1942/43)", "Attentat vom 20. Juli (1944)"] }
      ]
    }
  ]
};
window.FAECHER.push(FACH);
})();
