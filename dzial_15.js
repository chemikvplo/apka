// Dział XV. Związki karbonylowe − aldehydy i ketony (Indeks 14 na liście)
appData[14] = {
    notatki: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">📚 KOMPENDIUM MATURALNE: ZWIĄZKI KARBONYLOWE (ALDEHYDY I KETONY)</h2>

        <!-- SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Wymagania Podstawy Programowej (Dział XV)</h3>
            <p>Zgodnie z podstawą programową maturzysta powinien umieć:</p>
            <ol class="note-list">
                <li>Opisywać podobieństwa i różnice w budowie cząsteczek aldehydów i ketonów (położenie grupy karbonylowej).</li>
                <li>Projektować i przeprowadzać doświadczenie pozwalające odróżnić aldehyd od ketonu (oraz na podstawie obserwacji dokonywać ich klasyfikacji).</li>
                <li>Pisać odpowiednie równania reakcji aldehydu z odczynnikiem Tollensa i odczynnikiem Trommera.</li>
                <li>Wyszukiwać, porządkować i prezentować informacje o metodach otrzymywania, właściwościach i zastosowaniach aldehydów i ketonów.</li>
            </ol>
        </div>

        <!-- SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Klasyfikacja, Budowa i Nazewnictwo</h3>
            
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Cecha porównawcza</th>
                            <th>Aldehydy</th>
                            <th>Ketony</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Grupa funkcyjna</strong></td>
                            <td>Grupa aldehydowa <strong>–CHO</strong></td>
                            <td>Grupa karbonylowa (ketonowa) <strong>>C=O</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Położenie grupy</strong></td>
                            <td><strong>Zawsze na końcu</strong> łańcucha węglowego. Węgiel łączy się z min. 1 atomem wodoru.</td>
                            <td><strong>Wewnątrz</strong> łańcucha węglowego. Węgiel łączy się z dwiema grupami węglowodorowymi.</td>
                        </tr>
                        <tr>
                            <td><strong>Wzór ogólny</strong></td>
                            <td><strong>R–CHO</strong><br>(dla nasyconych alifatycznych: <strong>C<sub>n</sub>H<sub>2n+1</sub>CHO</strong>)</td>
                            <td><strong>R<sub>1</sub>–CO–R<sub>2</sub></strong></td>
                        </tr>
                        <tr>
                            <td><strong>Nazewnictwo IUPAC</strong></td>
                            <td>Przyrostek <strong>-al</strong> (np. metanal, butanal). Węgiel grupy –CHO ma zawsze lokant 1.</td>
                            <td>Przyrostek <strong>-on</strong> (np. propan-2-on). Łańcuch numerujemy tak, by lokant był jak najmniejszy.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="note-alert">
                ⚠️ <strong>Ważne na Maturze (Izomeria):</strong> Aldehydy i ketony o tej samej liczbie atomów węgla (od C<sub>3</sub> wzwyż) mają identyczny wzór sumaryczny (np. C<sub>3</sub>H<sub>6</sub>O). Stanowią one względem siebie <strong>izomery funkcyjne</strong>.
            </div>
        </div>

        <!-- SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Właściwości Fizyczne</h3>
            <ul class="note-list">
                <li><strong>Temperatury wrzenia i topnienia:</strong> Są wyższe niż w alkanach o podobnej masie cząsteczkowej (dzięki obecności polarnej grupy karbonylowej i oddziaływaniom dipol-dipol), ale niższe niż w alkoholach (nie tworzą wiązań wodorowych między własnymi cząsteczkami).</li>
                <li><strong>Rozpuszczalność w wodzie:</strong> Związki o krótkich łańcuchach (metanal, etanal, propan-2-on) bardzo dobrze rozpuszczają się w wodzie, ponieważ tworzą z nią wiązania wodorowe.</li>
                <li><strong>Odczyn:</strong> Wodne roztwory aldehydów i ketonów mają <strong>odczyn obojętny</strong> (związki te nie ulegają dysocjacji).</li>
                <li><strong>Stan skupienia:</strong> Metanal to duszący gaz, etanal i propan-2-on to lotne ciecze.</li>
            </ul>
        </div>

        <!-- SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Otrzymywanie</h3>

            <h4>A. Otrzymywanie aldehydów</h4>
            <p><strong>1. Utlenianie alkoholi I-rzędowych (np. przy użyciu CuO):</strong></p>
            <div class="chem-eq">
                CH<sub>3</sub>CH<sub>2</sub>OH + CuO 
                <span class="chem-arrow">
                    <span class="cond-top">T</span>
                    <span class="arrow-sym">&rarr;</span>
                </span> 
                CH<sub>3</sub>CHO + Cu + H<sub>2</sub>O
            </div>
            
            <p><strong>2. Hydratacja etynu (reakcja Kuczerowa - uwaga: tylko etyn daje aldehyd):</strong></p>
            <div class="chem-eq">
                CH&equiv;CH + H<sub>2</sub>O 
                <span class="chem-arrow">
                    <span class="cond-top">HgSO<sub>4</sub>, H<sub>2</sub>SO<sub>4</sub></span>
                    <span class="arrow-sym">&rarr;</span>
                </span> 
                CH<sub>3</sub>CHO
            </div>

            <h4>B. Otrzymywanie ketonów</h4>
            <p><strong>1. Utlenianie alkoholi II-rzędowych:</strong></p>
            <div class="chem-eq">
                CH<sub>3</sub>–CH(OH)–CH<sub>3</sub> + CuO 
                <span class="chem-arrow">
                    <span class="cond-top">T</span>
                    <span class="arrow-sym">&rarr;</span>
                </span> 
                CH<sub>3</sub>–CO–CH<sub>3</sub> + Cu + H<sub>2</sub>O
            </div>
            
            <p><strong>2. Hydratacja alkinów wyższych (od propynu wzwyż):</strong> Addycja zgodna z regułą Markownikowa prowadzi do nietrwałego enolu, który ulega tautomeryzacji do ketonu.</p>
        </div>

        <!-- SEKCJA 5 -->
        <div class="note-section">
            <h3>5. Reakcje Charakterystyczne (Odróżnianie)</h3>
            <p>Kluczową różnicą jest to, że <strong>aldehydy mają właściwości redukujące</strong> (łatwo się utleniają), podczas gdy ketony są na łagodne utleniacze odporne.</p>

            <h4>A. Próba Tollensa (Reakcja lustra srebrnego)</h4>
            <ul class="note-list">
                <li><strong>Odczynnik:</strong> Amoniakalny roztwór tlenku srebra(I) / [Ag(NH<sub>3</sub>)<sub>2</sub>]OH (środowisko zasadowe).</li>
                <li><strong>Aldehyd:</strong> Na ściankach probówki wytrąca się <strong>lustro srebrne</strong>.</li>
                <li><strong>Keton:</strong> Brak zmian.</li>
            </ul>
            <div class="chem-eq">
                R–CHO + 2 [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> + 3 OH<sup>&minus;</sup> 
                <span class="chem-arrow">
                    <span class="cond-top">T</span>
                    <span class="arrow-sym">&rarr;</span>
                </span> 
                R–COO<sup>&minus;</sup> + 2 Ag&darr; + 4 NH<sub>3</sub> + 2 H<sub>2</sub>O
            </div>
            <div class="chem-obs">
                🔎 <strong>Uwaga maturalna:</strong> W środowisku zasadowym (które panuje w tej próbie), aldehyd nie utlenia się do kwasu, lecz do <strong>anionu soli kwasu karboksylowego</strong>!
            </div>

            <h4>B. Próba Trommera</h4>
            <ul class="note-list">
                <li><strong>Odczynnik:</strong> Świeżo strącony niebieski osad wodorotlenku miedzi(II) Cu(OH)<sub>2</sub> z dodatkiem nadmiaru NaOH.</li>
                <li><strong>Aldehyd:</strong> Niebieski osad zmienia barwę na <strong>ceglastoczerwoną</strong> (powstaje Cu<sub>2</sub>O).</li>
                <li><strong>Keton:</strong> Brak właściwości redukujących. Po ogrzaniu niebieski osad czernieje, tworząc czarny tlenek miedzi(II) CuO (wynik termicznego rozkładu odczynnika).</li>
            </ul>
            <div class="chem-eq">
                R–CHO + 2 Cu(OH)<sub>2</sub> + OH<sup>&minus;</sup> 
                <span class="chem-arrow">
                    <span class="cond-top">T</span>
                    <span class="arrow-sym">&rarr;</span>
                </span> 
                R–COO<sup>&minus;</sup> + Cu<sub>2</sub>O&darr; + 3 H<sub>2</sub>O
            </div>

            <h4>C. Próba Jodoformowa</h4>
            <p>Służy do wykrywania <strong>metyloketonów</strong> (posiadających grupę CH<sub>3</sub>–CO–) oraz <strong>etanalu</strong>. Reakcja z roztworem jodu (I<sub>2</sub>) i zasadą (NaOH/KOH) powoduje powstanie <strong>żółtego osadu o charakterystycznym zapachu</strong> (jodoformu – CHI<sub>3</sub>).</p>
        </div>

        <!-- SEKCJA 6 -->
        <div class="note-section">
            <h3>6. Inne Reakcje i Zastosowania</h3>
            
            <h4>Addycja wodoru (Redukcja)</h4>
            <p>W obecności katalizatora związki karbonylowe przyłączają wodór:</p>
            <ul class="note-list">
                <li>Aldehydy &rarr; alkohole I-rzędowe.</li>
                <li>Ketony &rarr; alkohole II-rzędowe.</li>
            </ul>
            
            <h4>Polimeryzacja i Polikondensacja</h4>
            <p>Ketony nie ulegają tym reakcjom. Najprostsze aldehydy tak:</p>
            <ul class="note-list">
                <li><strong>Polimeryzacja metanalu:</strong> Powstaje poliformaldehyd (wytrzymałe termicznie tworzywo).</li>
                <li><strong>Polikondensacja:</strong> Reakcja metanalu z fenolem tworzy żywice fenolowo-formaldehydowe (bakelit), wydzielając produkt uboczny (wodę).</li>
            </ul>
        </div>
    </div>
    `,

    notatkiActive: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">🧠 ACTIVE RECALL: ALDEHYDY I KETONY</h2>
        <p style="text-align: center; color: #94a3b8; font-size: 13px; margin-bottom: 20px;">
            💡 <em>Klikaj na ciemne pola, aby odkryć ukryte słowa i równania reakcji, oraz rozwijaj pytania!</em>
        </p>

        <div class="note-section">
            <h3>1. Identyfikacja i Nazewnictwo</h3>
            <p>Aldehydy i ketony o tej samej liczbie atomów węgla to względem siebie izomery <span class="recall-blank" onclick="toggleRecall(this)">funkcyjne</span>.</p>
            <details class="recall-details">
                <summary>Gdzie w łańcuchu znajduje się grupa karbonylowa dla aldehydów, a gdzie dla ketonów?</summary>
                <p>Dla aldehydów: <strong>zawsze na końcu</strong> łańcucha (lokant 1). Dla ketonów: <strong>wewnątrz</strong> łańcucha węglowego.</p>
            </details>
            <p>Końcówka w nazwie systematycznej aldehydów to <span class="recall-blank" onclick="toggleRecall(this)">-al</span>, a ketonów to <span class="recall-blank" onclick="toggleRecall(this)">-on</span>.</p>
        </div>

        <div class="note-section">
            <h3>2. Odróżnianie Aldehydów od Ketonów</h3>
            
            <h4>Próba Tollensa</h4>
            <p>Aldehydy utleniają się w niej do soli kwasu karboksylowego, a jony srebra redukują do <span class="recall-blank" onclick="toggleRecall(this)">lustra srebrnego</span>.</p>
            <div class="chem-eq">
                HCHO + 2 [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> + 3 OH<sup>&minus;</sup> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 
                <span class="recall-blank" onclick="toggleRecall(this)">HCOO<sup>&minus;</sup> + 2 Ag&darr; + 4 NH<sub>3</sub> + 2 H<sub>2</sub>O</span>
            </div>

            <h4>Próba Trommera</h4>
            <details class="recall-details">
                <summary>Dlaczego ogrzewana próba Trommera z ketonem zmienia barwę z niebieskiej na czarną, a z aldehydem na ceglastoczerwoną?</summary>
                <p>Ketony nie ulegają utlenieniu, a czarny osad (<strong>CuO</strong>) to wynik zwykłego termicznego rozkładu niezreagowanego wodorotlenku miedzi(II). Z aldehydem zaszła reakcja redoks, w wyniku której wytrąca się ceglastoczerwony tlenek miedzi(I) (<strong>Cu<sub>2</sub>O</strong>).</p>
            </details>
        </div>

        <div class="note-section">
            <h3>3. Reakcje utleniania i redukcji</h3>
            <p>Utlenianie alkoholu propan-2-olu w podwyższonej temperaturze za pomocą CuO doprowadzi do powstania <span class="recall-blank" onclick="toggleRecall(this)">propan-2-onu (ketonu)</span>.</p>
            <p>Reakcja addycji (przyłączenia) wodoru H<sub>2</sub> do butanalu doprowadzi do powstania alkoholu <span class="recall-blank" onclick="toggleRecall(this)">I-rzędowego (butan-1-olu)</span>.</p>
        </div>
        
        <div class="note-section">
            <h3>4. Wykrywanie Metyloketonów</h3>
            <details class="recall-details">
                <summary>Jakiego odczynnika użyjesz do Próby Jodoformowej i co zaobserwujesz dla propan-2-onu?</summary>
                <p>Używa się <strong>jodu i wodorotlenku sodu (lub potasu)</strong>. W przypadku metyloketonu obserwuje się wytrącenie <strong>żółtego osadu</strong> o charakterystycznym, szpitalnym zapachu (powstaje trijodometan - jodoform).</p>
            </details>
        </div>
    </div>
    `,
    
    zadania: "<h3>Zadania: Związki Karbonylowe</h3><br>Miejsce na zadania PBL, projektowanie doświadczeń odróżniających Tollensa/Trommera oraz syntezy maturalne...",

    fiszki: [
        { 
            front: "Co to są związki karbonylowe?", 
            back: "Jednofunkcyjne pochodne węglowodorów zawierające w cząsteczce silnie spolaryzowaną grupę karbonylową (>C=O)." 
        },
        { 
            front: "Jaka jest grupa funkcyjna aldehydów?", 
            back: "Grupa aldehydowa (-CHO)." 
        },
        { 
            front: "Jaka jest grupa funkcyjna ketonów?", 
            back: "Grupa karbonylowa (ketonowa) (>C=O)." 
        },
        { 
            front: "Gdzie w łańcuchu węglowym znajduje się grupa aldehydowa?", 
            back: "Zawsze na końcu łańcucha węglowego." 
        },
        { 
            front: "Gdzie w łańcuchu węglowym znajduje się grupa karbonylowa w ketonach?", 
            back: "Wewnątrz łańcucha węglowego." 
        },
        { 
            front: "Z iloma atomami wodoru łączy się bezpośrednio atom węgla grupy karbonylowej w aldehydach (poza metanalem)?", 
            back: "Z jednym atomem wodoru." 
        },
        { 
            front: "Z iloma atomami wodoru łączy się węgiel grupy karbonylowej w najprostszym aldehydzie – metanalu (HCHO)?", 
            back: "Z dwoma atomami wodoru." 
        },
        { 
            front: "Z jakimi grupami łączy się węgiel grupy karbonylowej w ketonach?", 
            back: "Z dwiema grupami węglowodorowymi (alkilowymi lub arylowymi)." 
        },
        { 
            front: "Jaki jest ogólny wzór aldehydów?", 
            back: "R-CHO (dla alifatycznych nasyconych: C<sub>n</sub>H<sub>2n+1</sub>CHO)." 
        },
        { 
            front: "Jaki jest ogólny wzór ketonów?", 
            back: "R<sub>1</sub>-CO-R<sub>2</sub>." 
        },
        { 
            front: "Jaką końcówkę dodaje się do nazwy węglowodoru w systematycznym nazewnictwie aldehydów?", 
            back: "Końcówkę \"-al\" (np. metanal, etanal)." 
        },
        { 
            front: "Jaką końcówkę dodaje się do nazwy węglowodoru w systematycznym nazewnictwie ketonów?", 
            back: "Końcówkę \"-on\" (np. propan-2-on)." 
        },
        { 
            front: "Jaki lokant otrzymuje w nazewnictwie systematycznym atom węgla z grupy aldehydowej?", 
            back: "Zawsze lokant 1." 
        },
        { 
            front: "W jaki sposób numeruje się łańcuch węglowy w ketonach?", 
            back: "W taki sposób, aby lokant grupy karbonylowej był jak najmniejszy." 
        },
        { 
            front: "Jaki rodzaj izomerii występuje pomiędzy aldehydami i ketonami o tej samej liczbie atomów węgla?", 
            back: "Izomeria funkcyjna." 
        },
        { 
            front: "Podaj przykład dwóch związków będących wobec siebie izomerami funkcyjnymi o wzorze sumarycznym C<sub>3</sub>H<sub>6</sub>O.", 
            back: "Propanal (aldehyd) i propan-2-on (keton)." 
        },
        { 
            front: "Czy cząsteczki aldehydów i ketonów mogą tworzyć wiązania wodorowe między sobą?", 
            back: "Nie, co powoduje, że mają niższe temperatury wrzenia niż odpowiednie alkohole." 
        },
        { 
            front: "Dlaczego temperatury wrzenia aldehydów i ketonów są wyższe niż alkanów o zbliżonej masie?", 
            back: "Wynika to z obecności silnie polarnej grupy karbonylowej i oddziaływań dipol-dipol." 
        },
        { 
            front: "Dlaczego aldehydy i ketony o krótkich łańcuchach (do C<sub>3</sub>) dobrze rozpuszczają się w wodzie?", 
            back: "Ponieważ mogą tworzyć wiązania wodorowe z cząsteczkami wody." 
        },
        { 
            front: "Jaki odczyn mają wodne roztwory aldehydów i ketonów?", 
            back: "Obojętny (nie ulegają dysocjacji elektrolitycznej)." 
        },
        { 
            front: "Jaki stan skupienia (w warunkach normalnych) ma pierwszy w szeregu aldehyd – metanal?", 
            back: "Jest to gaz (drażniący)." 
        },
        { 
            front: "Co to jest formalina?", 
            back: "37-procentowy wodny roztwór metanalu." 
        },
        { 
            front: "Jaką metodą z alkoholi otrzymuje się aldehydy?", 
            back: "Poprzez łagodne utlenianie alkoholi pierwszorzędowych (1°)." 
        },
        { 
            front: "Jaką metodą z alkoholi otrzymuje się ketony?", 
            back: "Poprzez utlenianie alkoholi drugorzędowych (2°)." 
        },
        { 
            front: "Co powstaje w wyniku utleniania etanolu tlenkiem miedzi(II) (CuO)?", 
            back: "Etanal, miedź metaliczna (Cu) i woda." 
        },
        { 
            front: "Co powstaje w wyniku utleniania propan-2-olu tlenkiem miedzi(II) (CuO)?", 
            back: "Propan-2-on (keton), miedź metaliczna (Cu) i woda." 
        },
        { 
            front: "Reakcja jakiego związku organicznego z wodą (hydratacja) jest metodą otrzymywania etanalu?", 
            back: "Hydratacja etynu (najprostszego alkinu)." 
        },
        { 
            front: "Zgodnie z jaką regułą zachodzi addycja wody do wyższych alkinów (od propynu w górę)?", 
            back: "Zgodnie z regułą Markownikowa." 
        },
        { 
            front: "Jaki typ związku powstaje w wyniku hydratacji alkinów wyższych niż etyn (np. propynu)?", 
            back: "Keton (poprzez nietrwały produkt pośredni – enol)." 
        },
        { 
            front: "Jaka jest najważniejsza różnica we właściwościach chemicznych między aldehydami a ketonami?", 
            back: "Aldehydy mają właściwości redukujące (łatwo się utleniają), a ketony nie mają właściwości redukujących." 
        },
        { 
            front: "Jakie dwie reakcje charakterystyczne pozwalają jednoznacznie odróżnić aldehyd od ketonu?", 
            back: "Próba Tollensa (reakcja lustra srebrnego) i próba Trommera." 
        },
        { 
            front: "Jaki odczynnik stosuje się w próbie Tollensa?", 
            back: "Wodorotlenek diaminasrebra(I) [Ag(NH<sub>3</sub>)<sub>2</sub>]OH (amoniakalny roztwór tlenku srebra(I))." 
        },
        { 
            front: "W jakim środowisku zachodzi próba Tollensa?", 
            back: "W środowisku zasadowym." 
        },
        { 
            front: "Jakie są objawy pozytywnego wyniku próby Tollensa (dla aldehydów)?", 
            back: "Na ściankach ogrzewanej probówki wytrąca się błyszczący osad metalicznego srebra (lustro srebrne)." 
        },
        { 
            front: "Do jakiego jonu utlenia się aldehyd (np. etanal) podczas próby Tollensa w środowisku zasadowym?", 
            back: "Do anionu soli kwasu karboksylowego (np. anionu etanianowego/octanowego)." 
        },
        { 
            front: "Jaki wynik dają ketony w próbie Tollensa?", 
            back: "Negatywny (brak zmian, brak lustra srebrnego)." 
        },
        { 
            front: "Jaki odczynnik stosuje się w próbie Trommera?", 
            back: "Świeżo strącony wodorotlenek miedzi(II) – Cu(OH)<sub>2</sub>." 
        },
        { 
            front: "Jaki jest stan skupienia i barwa świeżo strąconego Cu(OH)<sub>2</sub>?", 
            back: "Jest to niebieski, galaretowaty osad." 
        },
        { 
            front: "W jakim środowisku należy przeprowadzać próbę Trommera?", 
            back: "W środowisku silnie zasadowym (przy obecności np. NaOH)." 
        },
        { 
            front: "Jakie są obserwacje pozytywnego wyniku próby Trommera (reakcja z aldehydem)?", 
            back: "Niebieski osad po podgrzaniu zmienia barwę na ceglastoczerwoną." 
        },
        { 
            front: "Jaki związek chemiczny stanowi ceglastoczerwony osad wytrącający się w udanej próbie Trommera?", 
            back: "Tlenek miedzi(I) – Cu<sub>2</sub>O." 
        },
        { 
            front: "Dlaczego ogrzewany keton z odczynnikiem Trommera tworzy czarny osad?", 
            back: "Keton nie utlenia się, a w wysokiej temperaturze wodorotlenek miedzi(II) ulega termicznemu rozkładowi do czarnego tlenku miedzi(II) – CuO." 
        },
        { 
            front: "W jaki sposób zabezpieczona jest grupa karbonylowa w ketonach przed utlenianiem?", 
            back: "Z dwóch stron wiązaniami węgiel-węgiel (C-C), których zerwanie wymaga użycia silnego utleniacza i bardzo dużej energii." 
        },
        { 
            front: "Do wykrywania jakich związków służy próba jodoformowa (reakcja haloformowa)?", 
            back: "Do metyloketonów (związków z grupą CH<sub>3</sub>-CO-) oraz etanalu (jedynego takiego aldehydu)." 
        },
        { 
            front: "Jakich odczynników używa się w próbie jodoformowej?", 
            back: "Roztworu jodu (I<sub>2</sub> / KI) w obecności silnej zasady (np. NaOH, KOH)." 
        },
        { 
            front: "Jaki jest pozytywny objaw próby jodoformowej?", 
            back: "Wytrącenie się żółtego osadu o charakterystycznym (często określanym jako \"szpitalny\") zapachu." 
        },
        { 
            front: "Jak nazywa się chemicznie żółty osad powstający w próbie jodoformowej?", 
            back: "Jodoform, czyli trijodometan (CHI<sub>3</sub>)." 
        },
        { 
            front: "Czy etanal da pozytywny wynik próby jodoformowej?", 
            back: "Tak, ponieważ zawiera grupę metylową połączoną z grupą karbonylową (CH<sub>3</sub>-CHO)." 
        },
        { 
            front: "Reakcji jakiego typu ulegają aldehydy i ketony podczas przyłączania cząsteczki wodoru (H<sub>2</sub>)?", 
            back: "Reakcji addycji połączonej z redukcją." 
        },
        { 
            front: "Co powstaje w wyniku redukcji aldehydów za pomocą wodoru w obecności katalizatora?", 
            back: "Alkohole pierwszorzędowe (1°)." 
        },
        { 
            front: "Co powstaje w wyniku redukcji ketonów za pomocą wodoru w obecności katalizatora?", 
            back: "Alkohole drugorzędowe (2°)." 
        },
        { 
            front: "Czym jest reakcja polimeryzacji dla związków karbonylowych i co jej ulega?", 
            back: "Łączeniem się ze sobą monomerów; ulegają jej tylko najprostsze aldehydy, np. metanal (ketony nie)." 
        },
        { 
            front: "Jaki produkt powstaje w wyniku polimeryzacji formaldehydu?", 
            back: "Poliformaldehyd (wytrzymały termicznie polimer)." 
        },
        { 
            front: "Z czym reaguje metanal w procesie polikondensacji, by utworzyć żywice?", 
            back: "Z fenolem." 
        },
        { 
            front: "Co odróżnia polikondensację (charakterystyczną dla aldehydów) od zwykłej polimeryzacji?", 
            back: "Powstaje w niej nie tylko wielkocząsteczkowy polikondensat, ale również produkt uboczny o małej masie (np. woda H<sub>2</sub>O)." 
        },
        { 
            front: "Jak nazywa się wielkocząsteczkowy produkt reakcji metanalu z fenolem?", 
            back: "Żywica fenolowo-formaldehydowa (bakelit)." 
        },
        { 
            front: "Dlaczego aldehydy łatwo się utleniają w porównaniu do ketonów?", 
            back: "Ponieważ grupa karbonylowa w aldehydach łączy się z atomem wodoru, łatwym do \"oderwania\" (utlenienia wiązania C-H)." 
        },
        { 
            front: "Zapisz wzór grupowy butanalu.", 
            back: "CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CHO." 
        },
        { 
            front: "Zapisz wzór grupowy propan-2-onu (acetonu).", 
            back: "CH<sub>3</sub>-CO-CH<sub>3</sub>." 
        },
        { 
            front: "Do utleniania na skalę przemysłową metanolu używa się powietrza oraz...", 
            back: "Odpowiedniego katalizatora w podwyższonej temperaturze (wynikiem jest formaldehyd)." 
        },
        { 
            front: "Który z tych związków rozpuszcza lakiery i jest aktywnym składnikiem zmywaczy do paznokci: metanal czy aceton?", 
            back: "Aceton (propan-2-on)." 
        },
        { 
            front: "Jak nazywa się aldehyd będący naturalnym składnikiem olejku pozyskiwanego z kory cynamonowca?", 
            back: "Aldehyd cynamonowy." 
        },
        { 
            front: "Jaki znany keton cykliczny, występujący w preparatach rozgrzewających (leczenie przeziębień), omawia podstawa programowa?", 
            back: "Kamfora." 
        },
        { 
            front: "Oprócz metyloketonów, jakie alkohole dają wynik pozytywny w próbie jodoformowej?", 
            back: "Alkohole drugorzędowe zawierające grupę metylową przy atomie węgla z grupą hydroksylową (np. propan-2-ol) oraz etanol." 
        },
        { 
            front: "Czy kwas karboksylowy to bezpośredni produkt próby Trommera i Tollensa przeprowadzanych we fiolce testowej?", 
            back: "Nie, produktem jest sól kwasu karboksylowego, ponieważ reakcje te zachodzą w środowisku zasadowym." 
        },
        { 
            front: "Jakie jony odpowiadają za zasadowe środowisko w próbie Tollensa i Trommera?", 
            back: "Aniony wodorotlenkowe (OH<sup>-</sup>)." 
        },
        { 
            front: "Do czego wykorzystuje się wodny roztwór aldehydu glutarowego?", 
            back: "Ze względu na właściwości grzybo- i bakteriobójcze, służy do dezynfekcji narzędzi medycznych w szpitalach." 
        },
        { 
            front: "Który związek chemiczny posiada hybrydyzację węgla sp2 w grupie funkcyjnej: propanal, propanol czy propan?", 
            back: "Propanal (węgiel w grupie karbonylowej >C=O ma hybrydyzację sp<sup>2</sup>)." 
        },
        { 
            front: "Jak się nazywa aldehyd, w którym węgiel grupy aldehydowej połączony jest bezpośrednio z pierścieniem benzenowym?", 
            back: "Benzaldehyd (benzenokarboaldehyd)." 
        },
        { 
            front: "W jakiej reakcji etanal ulega redukcji?", 
            back: "W reakcji addycji wodoru (katalizatorem np. nikiel, platyna), dając w produkcie etanol." 
        }
    ]
};