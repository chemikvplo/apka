// Dział IX. Elektrochemia (Indeks 8 na liście)
appData[8] = {
    notatki: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">📚 KOMPENDIUM MATURALNE: ELEKTROCHEMIA I PROCESY ELEKTROCHEMICZNE</h2>

        <!-- SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Wprowadzenie do Elektrochemii i Ogniwa Galwaniczne</h3>
            <p><strong>Elektrochemia</strong> to dział chemii zajmujący się badaniem procesów chemicznych towarzyszących przepływowi prądu elektrycznego w roztworach elektrolitów (kwasów, zasad, soli) lub stopionych solach.</p>
            <p><strong>Ogniwo galwaniczne</strong> to układ dwóch elektrod zanurzonych w roztworach elektrolitów, w którym w wyniku <em>samorzutnie</em> zachodzących reakcji utleniania-redukcji (redoks) energia chemiczna jest przekształcana na energię elektryczną (źródło prądu stałego).</p>
            <ul class="note-list">
                <li><strong>Anoda (&minus;):</strong> elektroda, na której zachodzi proces <strong>utleniania</strong> (oddawania elektronów). W ogniwie galwanicznym jest biegunem ujemnym.</li>
                <li><strong>Katoda (+):</strong> elektroda, na której zachodzi proces <strong>redukcji</strong> (pobierania elektronów). W ogniwie galwanicznym jest biegunem dodatnim.</li>
                <li><strong>Klucz elektrolityczny (mostek solny):</strong> zazwyczaj szklana rurka wypełniona agarem nasączonym nasyconym roztworem soli (np. KCl). Umożliwia przepływ i wymianę jonów między roztworami półogniw, wyrównując ich ładunki elektryczne i zamykając obwód bez bezpośredniego mieszania się roztworów.</li>
            </ul>
        </div>

        <!-- SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Rodzaje Półogniw i Ich Budowa</h3>
            <p>Półogniwo to układ złożony z przewodnikowego elementu (elektrody metalowej, grafitowej lub z metalu szlachetnego) zanurzonego w roztworze elektrolitu. Ze względu na typ reakcji elektrodowej wyróżniamy:</p>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Rodzaj półogniwa</th>
                            <th>Opis budowy</th>
                            <th>Przykłady i schemat</th>
                            <th>Reakcja elektrodowa / Opis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Metaliczne (I rodzaju)</strong></td>
                            <td>Blaszka metalowa zanurzona w roztworze soli tego samego metalu. Odwracalne względem kationu.</td>
                            <td>&bull; Miedziane: Cu &mid; Cu<sup>2+</sup><sub>(aq)</sub><br>&bull; Cynkowe: Zn &mid; Zn<sup>2+</sup><sub>(aq)</sub></td>
                            <td>Me &rightleftharpoons; Me<sup><i>n</i>+</sup> + <i>n</i> e<sup>&minus;</sup><br>Anoda: Zn &rarr; Zn<sup>2+</sup> + 2 e<sup>&minus;</sup></td>
                        </tr>
                        <tr>
                            <td><strong>Redoks</strong></td>
                            <td>Składniki roztworu stanowią parę redoks. Metal szlachetny (np. Pt) pełni rolę wyłącznie obojętnego przekaźnika elektronów.</td>
                            <td>Pt &mid; Fe<sup>2+</sup><sub>(aq)</sub>, Fe<sup>3+</sup><sub>(aq)</sub></td>
                            <td>Anoda: Fe<sup>2+</sup> &rarr; Fe<sup>3+</sup> + e<sup>&minus;</sup><br>Katoda: Fe<sup>3+</sup> + e<sup>&minus;</sup> &rarr; Fe<sup>2+</sup></td>
                        </tr>
                        <tr>
                            <td><strong>Drugiego rodzaju</strong></td>
                            <td>Metal pokryty warstwą swojej trudno rozpuszczalnej soli, zanurzony w roztworze elektrolitu z tymi samymi anionami.</td>
                            <td>&bull; Chlorosrebrowe: Ag &mid; AgCl<sub>(s)</sub> &mid; Cl<sup>&minus;</sup><sub>(aq)</sub><br>&bull; Kalomelowe: Hg &mid; Hg<sub>2</sub>Cl<sub>2(s)</sub> &mid; Cl<sup>&minus;</sup><sub>(aq)</sub></td>
                            <td>Chlorosrebrowe:<br>Anoda: Ag + Cl<sup>&minus;</sup> &rarr; AgCl + e<sup>&minus;</sup><br>Katoda: AgCl + e<sup>&minus;</sup> &rarr; Ag + Cl<sup>&minus;</sup></td>
                        </tr>
                        <tr>
                            <td><strong>Gazowe</strong></td>
                            <td>Metal szlachetny (np. Pt) omywany odpowiednim gazem, zanurzony w roztworze zawierającym jony tego gazu.</td>
                            <td>&bull; Wodorowe: Pt &mid; H<sub>2(g)</sub> &mid; H<sub>3</sub>O<sup>+</sup><sub>(aq)</sub><br>&bull; Chlorowe: Pt &mid; Cl<sub>2(g)</sub> &mid; Cl<sup>&minus;</sup><sub>(aq)</sub></td>
                            <td>Wodorowe:<br>Anoda: H<sub>2</sub> + 2 H<sub>2</sub>O &rarr; 2 H<sub>3</sub>O<sup>+</sup> + 2 e<sup>&minus;</sup><br>Katoda: 2 H<sub>3</sub>O<sup>+</sup> + 2 e<sup>&minus;</sup> &rarr; H<sub>2</sub> + 2 H<sub>2</sub>O</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p><strong>Ogniwo wodorowo-chlorowe:</strong> Powstaje z połączenia półogniwa wodorowego i chlorowego, w którym zachodzi utlenianie wodoru i redukcja chloru: H<sub>2(g)</sub> + 2 H<sub>2</sub>O + Cl<sub>2(g)</sub> &rarr; 2 H<sub>3</sub>O<sup>+</sup><sub>(aq)</sub> + 2 Cl<sup>&minus;</sup><sub>(aq)</sub>.</p>
        </div>

        <!-- SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Ogniwo Daniella i Konwencja Sztokholmska Zapisu</h3>
            <p><strong>Ogniwo Daniella</strong> to klasyczne ogniwo galwaniczne, w którym jednym półogniwem jest blaszka cynkowa w roztworze ZnSO<sub>4</sub>, a drugim blaszka miedziana w roztworze CuSO<sub>4</sub>:</p>
            <ul class="note-list">
                <li><strong>Reakcja na anodzie (&minus;):</strong> Zn<sub>(s)</sub> &rarr; Zn<sup>2+</sup><sub>(aq)</sub> + 2 e<sup>&minus;</sup> (cynk ulega utlenieniu, płytka traci masę).</li>
                <li><strong>Reakcja na katodzie (+):</strong> Cu<sup>2+</sup><sub>(aq)</sub> + 2 e<sup>&minus;</sup> &rarr; Cu<sub>(s)</sub> (jony miedzi ulegają redukcji, płytka miedziana zwiększa masę).</li>
                <li><strong>Równanie sumaryczne:</strong> Zn<sub>(s)</sub> + Cu<sup>2+</sup><sub>(aq)</sub> &rarr; Zn<sup>2+</sup><sub>(aq)</sub> + Cu<sub>(s)</sub>.</li>
            </ul>

            <h4>Zapis schematu ogniwa (Konwencja sztokholmska):</h4>
            <p>Zgodnie z konwencją, po lewej stronie zawsze umieszcza się anodę (&minus;), a po prawej katodę (+). Pojedyncza pionowa kreska (&mid;) oznacza granicę faz (metal &mid; roztwór), a podwójna kreska (&parallel;) to klucz elektrolityczny:</p>
            <div class="chem-eq">
                (&minus;) Zn<sub>(s)</sub> &mid; Zn<sup>2+</sup><sub>(aq)</sub> &parallel; Cu<sup>2+</sup><sub>(aq)</sub> &mid; Cu<sub>(s)</sub> (+)
            </div>
        </div>

        <!-- SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Potencjał Półogniwa, SEW i Szereg Elektrochemiczny</h3>
            <ul class="note-list">
                <li><strong>Potencjał półogniwa (<i>E</i>):</strong> Różnica potencjałów powstająca na granicy faz metal-roztwór wskutek utworzenia się podwójnej warstwy elektrycznej (przechodzenia jonów z sieci krystalicznej do roztworu i odwrotnie).</li>
                <li><strong>Standardowa elektroda wodorowa (SEW / SHE):</strong> Uniwersalna elektroda odniesienia zbudowana z płytki platynowej pokrytej czernią platynową, zanurzonej w roztworze o stężeniu jonów H<sub>3</sub>O<sup>+</sup> równym 1 mol/dm<sup>3</sup> i omywanej czystym wodorem pod ciśnieniem 1000 hPa (1 atm). Przyjęto, że jej standardowy potencjał <i>E</i><sup>&deg;</sup> w każdych temperaturach wynosi dokładnie <strong>0 V</strong>.</li>
                <li><strong>Szereg elektrochemiczny metali:</strong> Zestawienie standardowych potencjałów redukcji (<i>E</i><sup>&deg;</sup>) półogniw metalicznych i gazowych. 
                    <br>&bull; Im <strong>niższa (bardziej ujemna)</strong> wartość <i>E</i><sup>&deg;</sup>, tym dany metal wykazuje większą zdolność do oddawania elektronów – jest silniejszym reduktorem.
                    <br>&bull; Im <strong>wyższa (bardziej dodatnia)</strong> wartość <i>E</i><sup>&deg;</sup>, tym forma utleniona łatwiej ulega redukcji – jest silniejszym utleniaczem.
                </li>
            </ul>
        </div>

        <!-- SEKCJA 5 -->
        <div class="note-section">
            <h3>5. Siła Elektromotoryczna (SEM) Ogniwa</h3>
            <p><strong>Siła elektromotoryczna ogniwa (SEM)</strong> to różnica potencjałów między katodą a anodą w ogniwie niepracującym (w obwodzie otwartym). Wyznacza się ją ze wzoru standardowego:</p>
            <div class="chem-eq">
                SEM = <i>E</i><sup>&deg;</sup><sub>katoda</sub> &minus; <i>E</i><sup>&deg;</sup><sub>anoda</sub>
            </div>
            <p>Gdzie katodą jest półogniwo o wyższym potencjale standardowym, a anodą – o niższym. Wartość SEM ma zawsze znak dodatni. Wynik ujemny sygnalizuje pomyłkę biegunowości (pomylenie anody z katodą).</p>
        </div>

        <!-- SEKCJA 6 -->
        <div class="note-section">
            <h3>6. Równanie Nernsta i Ogniwa Stężeniowe</h3>
            <p>W warunkach niestandardowych (stężenia jonów inne niż 1 mol/dm<sup>3</sup>) potencjał półogniwa oblicza się z <strong>równania Nernsta</strong> (dla temperatury 25&deg;C / 298 K):</p>
            <div class="chem-eq">
                <i>E</i> = <i>E</i><sup>&deg;</sup> + (0{,}059 / <i>z</i>) &middot; log [Me<sup><i>n</i>+</sup>]
            </div>
            <p><strong>Ogniwo stężeniowe:</strong> To ogniwo galwaniczne zbudowane z dwóch takich samych półogniw różniących się jedynie stężeniem roztworu elektrolitu. 
            <br>&bull; <strong>Anodą</strong> jest półogniwo o <strong>niższym stężeniu</strong> jonów.
            <br>&bull; <strong>Katodą</strong> jest półogniwo o <strong>wyższym stężeniu</strong> jonów.</p>
        </div>

        <!-- SEKCJA 7 -->
        <div class="note-section">
            <h3>7. Korozja Elektrochemiczna i Metody Ochrony</h3>
            <p><strong>Korozja elektrochemiczna</strong> to niszczenie metali pod wpływem środowiska z udziałem wilgoci i elektrolitu, prowadzące do samorzutnego powstawania lokalnych mikroogniw galwanicznych (np. na powierzchni stali, gdzie żelazo kontaktuje się z domieszkami węgla lub cementytem Fe<sub>3</sub>C).</p>
            <ul class="note-list">
                <li><strong>Na anodzie (&minus;):</strong> Utlenianie żelaza Fe<sub>(s)</sub> &rarr; Fe<sup>2+</sup><sub>(aq)</sub> + 2 e<sup>&minus;</sup>.</li>
                <li><strong>Na katodzie (+):</strong> Redukcja tlenu 2 H<sub>2</sub>O + O<sub>2</sub> + 4 e<sup>&minus;</sup> &rarr; 4 OH<sup>&minus;</sup> (w obecności tlenu i wody).</li>
                <li><strong>Powstawanie rdzy:</strong> Powstający wodorotlenek żelaza(II) utlenia się dalej, dając uwodniony tlenek żelaza(III) (Fe<sub>2</sub>O<sub>3</sub> &middot; <i>x</i>H<sub>2</sub>O / Fe(OH)<sub>3</sub>), czyli rdzę. Porowata struktura rdzy nie chroni metalu, lecz ułatwia wnikanie wilgoci w głąb.</li>
            </ul>
            <p><strong>Sposoby ochrony metali przed korozją:</strong></p>
            <ol class="note-list">
                <li><strong>Powłoki metaliczne ochronne:</strong> Galwanizowanie (np. ocynkowanie). Cynk jest metalem aktywniejszym (<i>E</i><sup>&deg;</sup> niższy niż żelaza), więc koroduje pierwszy (stanowi protektor).</li>
                <li><strong>Powłoki niemetaliczne:</strong> Malowanie farbami, lakierowanie, emaliowanie.</li>
                <li><strong>Protektory:</strong> Dołączanie bloków z aktywniejszych metali (np. Mg, Zn) do stalowych kadłubów statków czy rurociągów.</li>
                <li><strong>Inhibitory korozji:</strong> Dodatki chemiczne pasywujące powierzchnię metalu.</li>
            </ol>
        </div>

        <!-- SEKCJA 8 -->
        <div class="note-section">
            <h3>8. Elektroliza i Jej Prawa</h3>
            <p><strong>Elektroliza</strong> to proces wymuszony – przepuszczanie prądu stałego z zewnętrznego źródła przez roztwór lub stopiony elektrolit, co wywołuje reakcje redoks odwrotne do tych w ogniwach galwanicznych.</p>
            
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Cecha / Elektroda</th>
                            <th>Ogniwo galwaniczne</th>
                            <th>Elektrolizer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Anoda</strong></td>
                            <td>Biegun ujemny (&minus;), utlenianie</td>
                            <td>Biegun dodatni (+), utlenianie</td>
                        </tr>
                        <tr>
                            <td><strong>Katoda</strong></td>
                            <td>Biegun dodatni (+), redukcja</td>
                            <td>Biegun ujemny (&minus;), redukcja</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p><strong>Kolejność wydzielania produktów w roztworach wodnych:</strong></p>
            <ul class="note-list">
                <li><strong>Na katodzie (redukcja):</strong> Najpierw redukują się kationy metali o najwyższych standardowych potencjałach (np. Ag<sup>+</sup>, Cu<sup>2+</sup>), następnie jony oksoniowe H<sub>3</sub>O<sup>+</sup> z kwasów, a w roztworach soli metali aktywniejszych od glinu – redukcji ulegają cząsteczki wody z wydzieleniem wodoru (2 H<sub>2</sub>O + 2 e<sup>&minus;</sup> &rarr; H<sub>2</sub> + 2 OH<sup>&minus;</sup>).</li>
                <li><strong>Na anodzie (utlenianie):</strong> Najpierw utleniają się aniony kwasów beztlenowych i ich sole (Cl<sup>&minus;</sup>, Br<sup>&minus;</sup>, I<sup>&minus;</sup>) z wydzieleniem wolnego niemetalu. W dalszej kolejności utlenia się woda lub jony OH<sup>&minus;</sup> z wydzieleniem tlenu O<sub>2</sub>. Aniony kwasów tlenowych (SO<sub>4</sub><sup>2&minus;</sup>, NO<sub>3</sub><sup>&minus;</sup>) nie ulegają utlenieniu w roztworach wodnych.</li>
            </ul>
        </div>
    </div>
    `,

    notatkiActive: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">🧠 ACTIVE RECALL: ELEKTROCHEMIA</h2>
        <p style="text-align: center; color: #94a3b8; font-size: 13px; margin-bottom: 20px;">
            💡 <em>Klikaj na ciemne pola, aby odkryć ukryte pojęcia, bieguny oraz produkty reakcji elektrodowych!</em>
        </p>

        <div class="note-section">
            <h3>1. Ogniwa Galwaniczne – Podstawy</h3>
            <p>W ogniwie galwanicznym anoda ma biegun <span class="recall-blank" onclick="toggleRecall(this)">&minus; (ujemny)</span>, a katoda ma biegun <span class="recall-blank" onclick="toggleRecall(this)">+ (dodatni)</span>.</p>
            <p>Na anodzie zawsze zachodzi proces <span class="recall-blank" onclick="toggleRecall(this)">utleniania</span>, a na katodzie proces <span class="recall-blank" onclick="toggleRecall(this)">redukcji</span>.</p>
            <details class="recall-details">
                <summary>Do czego służy klucz elektrolityczny (mostek solny) w ogniwie galwanicznym?</summary>
                <p>Umożliwia przepływ i wymianę jonów między roztworami półogniw, wyrównując ich ładunki elektryczne i zamykając obwód elektryczny bez bezpośredniego mieszania roztworów.</p>
            </details>
        </div>

        <div class="note-section">
            <h3>2. Zapis Schematów i Półogniwa</h3>
            <p>W schematach ogniw pojedyncza pionowa kreska (&mid;) oznacza <span class="recall-blank" onclick="toggleRecall(this)">granicę faz (metal – roztwór elektrolitu)</span>, zaś podwójna kreska (&parallel;) oznacza <span class="recall-blank" onclick="toggleRecall(this)">klucz elektrolityczny (mostek solny)</span>.</p>
            <details class="recall-details">
                <summary>Podaj schemat standardowego półogniwa wodorowego (SEW).</summary>
                <p>Pt<sub>(s)</sub> &mid; H<sub>2(g)</sub> &mid; H<sub>3</sub>O<sup>+</sup><sub>(aq)</sub> (gdzie ciśnienie H<sub>2</sub> wynosi 1000 hPa, a stężenie H<sub>3</sub>O<sup>+</sup> wynosi 1 mol/dm<sup>3</sup>). Jego potencjał standardowy wynosi 0 V.</p>
            </details>
        </div>

        <div class="note-section">
            <h3>3. Potencjały i Obliczanie SEM</h3>
            <p>Wzór na obliczenie siły elektromotorycznej (SEM) ogniwa w warunkach standardowych to: SEM = <span class="recall-blank" onclick="toggleRecall(this)"><i>E</i><sup>&deg;</sup><sub>katoda</sub> &minus; <i>E</i><sup>&deg;</sup><sub>anoda</sub></span>.</p>
            <details class="recall-details">
                <summary>Co oznacza, gdy obliczona wartość SEM ogniwa wychodzi ujemna?</summary>
                <p>Wartość SEM ogniwa galwanicznego musi być zawsze dodatnia. Wynik ujemny oznacza pomyłkę – anoda została pomylona z katodą.</p>
            </details>
        </div>

        <div class="note-section">
            <h3>4. Korozja i Elektroliza</h3>
            <p>Podczas korozji elektrochemicznej stali rolę anody pełni <span class="recall-blank" onclick="toggleRecall(this)">żelazo (Fe)</span>, a na katodzie redukcji ulega <span class="recall-blank" onclick="toggleRecall(this)">tlen (O<sub>2</sub>)</span>.</p>
            <p>W elektrolizerze anoda jest podłączona do bieguna <span class="recall-blank" onclick="toggleRecall(this)">dodatniego (+)</span> źródła prądu, a katoda do bieguna <span class="recall-blank" onclick="toggleRecall(this)">ujemnego (&minus;)</span>.</p>
            <details class="recall-details">
                <summary><span>Co wydziela się na katodzie i anodzie podczas elektrolizy wodnego roztworu CuSO<sub>4</sub> na elektrodach obojętnych?</span></summary>
                <p>&bull; Na katodzie: wydziela się metaliczna miedź (Cu).<br>&bull; Na anodzie: wydziela się gazowy tlen (O<sub>2</sub>) z rozkładu wody.</p>
            </details>
        </div>
    </div>
    `,

    zadania: "<h3>Zadania</h3><br>Miejsce na zadania obliczeniowe i reakcje...",

    fiszki: [
        {
            front: "Czym zajmuje się elektrochemia?",
            back: "Badaniem procesów chemicznych towarzyszących przepływowi prądu elektrycznego w roztworach elektrolitów lub stopionych solach."
        },
        {
            front: "Co to jest ogniwo galwaniczne?",
            back: "Układ dwóch elektrod zanurzonych w elektrolitach, w którym energia chemiczna samorzutnej reakcji redoks jest zamieniana na energię elektryczną (źródło prądu stałego)."
        },
        {
            front: "Jaki znak i jaki proces zachodzi na anodzie w ogniwie galwanicznym?",
            back: "Anoda w ogniwie ma biegun ujemny (&minus;) i zachodzi na niej proces utleniania."
        },
        {
            front: "Jaki znak i jaki proces zachodzi na katodzie w ogniwie galwanicznym?",
            back: "Katoda w ogniwie ma biegun dodatni (+) i zachodzi na niej proces redukcji."
        },
        {
            front: "Jaka jest rola klucza elektrolitycznego (mostka solnego)?",
            back: "Umożliwia wymianę i wyrównanie ładunków między roztworami półogniw, zamykając obwód elektryczny bez bezpośredniego mieszania roztworów."
        },
        {
            front: "Czym charakteryzują się półogniwa metaliczne (pierwszego rodzaju)?",
            back: "Składają się z blaszki metalowej zanurzonej w roztworze soli tego metalu; są odwracalne względem kationu metalu."
        },
        {
            front: "Na czym polega specyfika półogniw typu redoks?",
            back: "W reakcji elektrodowej biorą udział jony w roztworze będące w różnych stopniach utlenienia, a elektroda z metalu szlachetnego (np. Pt) służy tylko jako obojętny przewodnik elektronów."
        },
        {
            front: "Podaj budowę i schemat półogniwa chlorosrebrowego.",
            back: "To półogniwo drugiego rodzaju: srebro pokryte trudno rozpuszczalnym AgCl i zanurzone w roztworze chlorków (np. KCl). Schemat: Ag &mid; AgCl<sub>(s)</sub> &mid; Cl<sup>&minus;</sup><sub>(aq)</sub>."
        },
        {
            front: "Jak jest zbudowane standardowe półogniwo wodorowe (SEW / SHE)?",
            back: "To płytka platynowa pokryta czernią platynową, omywana wodorem pod ciśnieniem 1000 hPa i zanurzona w roztworze o stężeniu jonów H<sub>3</sub>O<sup>+</sup> równym 1 mol/dm<sup>3</sup>. Schemat: Pt &mid; H<sub>2(g)</sub> &mid; H<sub>3</sub>O<sup>+</sup><sub>(aq)</sub>."
        },
        {
            front: "Co oznacza pojedyncza i podwójna pionowa kreska w schematach ogniw?",
            back: "Pojedyncza kreska (&mid;) to granica faz (np. metal &mid; roztwór), a podwójna kreska (&parallel;) to klucz elektrolityczny (mostek solny)."
        },
        {
            front: "Jak zgodnie z konwencją sztokholmską zapisuje się położenie anody i katody w schematach ogniw?",
            back: "Anoda (&minus;) zawsze po lewej stronie, katoda (+) zawsze po prawej stronie."
        },
        {
            front: "Jaki potencjał przypisuje się standardowej elektrodzie wodorowej (SEW) w każdych warunkach?",
            back: "Przyjmuje się, że jej standardowy potencjał redukcji wynosi dokładnie 0 V."
        },
        {
            front: "Co określa szereg elektrochemiczny metali?",
            back: "Zestawienie standardowych potencjałów redukcji półogniw; informuje o zdolności metali do oddawania elektronów i ich sile jako reduktorów."
        },
        {
            front: "Jak obliczyć siłę elektromotoryczną (SEM) ogniwa pracującego w warunkach standardowych?",
            back: "SEM = <i>E</i><sup>&deg;</sup><sub>katoda</sub> &minus; <i>E</i><sup>&deg;</sup><sub>anoda</sub> (różnica wyższego i niższego potencjału standardowego)."
        },
        {
            front: "Czy wartość SEM ogniwa galwanicznego może być ujemna?",
            back: "Nie, SEM ma zawsze wartość dodatnią. Wynik ujemny oznacza pomyłkę – anoda została pomylona z katodą."
        },
        {
            front: "Do czego służy równanie Nernsta?",
            back: "Do obliczania faktycznego potencjału półogniwa (<i>E</i>), gdy stężenia jonów w roztworze różnią się od warunków standardowych (1 mol/dm<sup>3</sup>)."
        },
        {
            front: "Co to jest ogniwo stężeniowe?",
            back: "Ogniwo galwaniczne, w którym przepływ prądu wynika wyłącznie z różnicy stężeń tej samej substancji w obu półogniwach."
        },
        {
            front: "Które półogniwo w ogniwie stężeniowym jest anodą, a które katodą?",
            back: "Anodą jest półogniwo o niższym stężeniu jonów, a katodą – półogniwo o wyższym stężeniu jonów."
        },
        {
            front: "Na czym polega korozja elektrochemiczna stali?",
            back: "To niszczenie metalu w obecności wody i elektrolitu poprzez tworzenie mikroogniw galwanicznych, w których żelazo ulega utlenieniu (anoda), a tlen redukcji (katoda)."
        },
        {
            front: "Dlaczego rdza nie chroni stali przed dalszym niszczeniem?",
            back: "Ponieważ ma porowatą strukturę, która zatrzymuje wilgoć i przyspiesza korozję w głębszych warstwach materiału."
        },
        {
            front: "Na czym polega ochrona protektorowa metali przed korozją?",
            back: "Na dołączeniu do chronionej konstrukcji metalu aktywniejszego o niższym potencjale standardowym (np. Zn lub Mg), który koroduje w pierwszej kolejności."
        },
        {
            front: "Czym różni się elektroliza od działania ogniwa galwanicznego?",
            back: "Ogniwo galwaniczne to proces samorzutny (energia chemiczna na elektryczną), a elektroliza to proces wymuszony przepływem prądu stałego z zewnątrz, wywołujący reakcje odwrotne."
        },
        {
            front: "Jakie są znaki elektrod w elektrolizerze (w porównaniu do ogniwa galwanicznego)?",
            back: "W elektrolizerze anoda jest biegunem dodatnim (+), a katoda biegunem ujemnym (&minus;)."
        },
        {
            front: "Jaka jest kolejność redukcji kationów na katodzie w wodnych roztworach elektrolitów?",
            back: "Najpierw redukują się kationy metali o najwyższych potencjałach standardowych (szlachetne), potem jony H<sub>3</sub>O<sup>+</sup> z kwasów, a dla soli aktywne metale – redukcja wody do H<sub>2</sub>."
        },
        {
            front: "Jaka jest kolejność utleniania anionów na anodzie w wodnych roztworach elektrolitów?",
            back: "Najpierw utleniają się aniony kwasów beztlenowych i ich sole (Cl<sup>&minus;</sup>, Br<sup>&minus;</sup>, I<sup>&minus;</sup>) z wydzieleniem niemetalu, a w dalszej kolejności woda lub jony OH<sup>&minus;</sup> z wydzieleniem tlenu (aniony kwasów tlenowych nie ulegają utlenieniu)."
        },
        {
            front: "Co wydziela się na elektrodach podczas elektrolizy wodnego roztworu HCl?",
            back: "Na katodzie wydziela się wodór (H<sub>2</sub>), a na anodzie chlor (Cl<sub>2</sub>)."
        },
        {
            front: "Co wydziela się na katodzie i anodzie podczas elektrolizy wodnego roztworu CuSO<sub>4</sub> na elektrodach obojętnych?",
            back: "Na katodzie wydziela się metaliczna miedź (Cu), a na anodzie gazowy tlen (O<sub>2</sub>)."
        },
        {
            front: "Jakie produkty powstają podczas elektrolizy stopionego chlorku sodu (NaCl)?",
            back: "Na katodzie wydziela się sód metaliczny (Na), a na anodzie gazowy chlor (Cl<sub>2</sub>)."
        },
        {
            front: "Podaj przykład ogniwa odwracalnego (akumulatora).",
            back: "Akumulator ołowiowy lub akumulator litowo-jonowy (Li-Ion)."
        },
        {
            front: "Podaj przykład ogniwa nieodwracalnego (pierwotnego).",
            back: "Ogniwo Leclanchégo (bateria cynkowo-węglowa)."
        },
        {
            front: "Jakie są główne składniki ogniwa Leclanchégo (baterii cynkowo-węglowej)?",
            back: "Kubek z cynku (anoda), pręt grafitowy otoczony mieszaniną MnO<sub>2</sub> i węgla (katoda) oraz elektrolit w postaci żelu NH<sub>4</sub>Cl i ZnCl<sub>2</sub>."
        },
        {
            front: "Jaka jest rola ogniw paliwowych (np. wodorowo-tlenowego)?",
            back: "Przekształcają energię chemiczną paliwa dostarczanego stale z zewnątrz (np. H<sub>2</sub>) i utleniacza (O<sub>2</sub>) bezpośrednio na energię elektryczną w sposób ekologiczny."
        },
        {
            front: "Do czego służą akumulatory litowo-jonowe (Li-Ion)?",
            back: "Do zasilania nowoczesnej elektroniki przenośnej (smartfony, laptopy) oraz w motoryzacji (samochody hybrydowe i elektryczne)."
        },
        {
            front: "Co to jest napięcie rozkładowe (<i>U</i><sub><i>r</i></sub>) w elektrolizie?",
            back: "To najmniejsza wartość napięcia zewnętrznego konieczna do rozpoczęcia procesu elektrolizy; jest sumą SEM ogniwa i nadnapięcia elektrolizy (<i>U</i><sub><i>r</i></sub> = SEM + &eta;)."
        },
        {
            front: "Co to jest nadnapięcie elektrolizy (&eta;)?",
            back: "Różnica między faktycznym napięciem rozkładowym a SEM ogniwa; zależy od materiału elektrod, ich powierzchni, rodzaju elektrolitu i temperatury."
        },
        {
            front: "Jakie są produkty elektrolizy stopionego wodorotlenku sodu (NaOH)?",
            back: "Na katodzie wydziela się sód (Na), a na anodzie tlen (O<sub>2</sub>) i woda."
        },
        {
            front: "Jakie są produkty elektrolizy stopionego tlenku glinu (Al<sub>2</sub>O<sub>3</sub>) w kriolicie?",
            back: "Na katodzie wydziela się ciekły glin (Al), a na anodzie gazowy tlen (O<sub>2</sub>). Pozyskuje się tak czysty glin w przemyśle."
        },
        {
            front: "Dlaczego wodorotlenek żelaza(II) powstający w korozji przechodzi w rdzę?",
            back: "Ponieważ pod wpływem tlenu atmosferycznego i wilgoci ulega dalszemu utlenieniu do hydratów tlenku żelaza(III)."
        },
        {
            front: "W jakich warunkach korozja elektrochemiczna stali przebiega najszybciej?",
            back: "W środowisku o odczynie kwasowym oraz w obecności rozpuszczonych soli (elektrolitów, np. solenie dróg zimą)."
        },
        {
            front: "Co opisuje stała Faradaya (<i>F</i>)?",
            back: "Ładunek elektryczny 1 mola elektronów, wynoszący w przybliżeniu 96485 C/mol."
        },
        {
            front: "Jakie czynniki oprócz stężenia wpływają na potencjał półogniwa w równaniu Nernsta?",
            back: "Temperatura układu (<i>T</i>), stała gazowa (<i>R</i>), liczba wymienianych elektronów (<i>z</i>) oraz stała Faradaya (<i>F</i>). Zmiana ciśnienia ma znaczenie dla półogniw gazowych."
        },
        {
            front: "Czym różni się korozja chemiczna od elektrochemicznej?",
            back: "Korozja chemiczna zachodzi bez udziału wody pod wpływem suchych gazów lub cieczy nieprzewodzących prądu, a elektrochemiczna wymaga obecności wody i elektrolitu (tworzenie mikroogniw)."
        },
        {
            front: "Jakie są główne reakcje zachodzące podczas rozładowywania akumulatora ołowiowego?",
            back: "Na anodzie: $\text{Pb} + \text{SO}_4^{2-} \to \text{PbSO}_4 + 2\text{e}^-$. Na katodzie: $\text{PbO}_2 + \text{SO}_4^{2-} + 4\text{H}^+ + 2\text{e}^- \to \text{PbSO}_4 + 2\text{H}_2\text{O}$."
        },
        {
            front: "Jakie półogniwo stosuje się jako uniwersalną elektrodę odniesienia w pomiarach laboratoryjnych zamiast SEW?",
            back: "Półogniwo chlorosrebrowe lub półogniwo kalomelowe, ze względu na ich dużą stabilność, stały i łatwo odtwarzalny potencjał."
        },
        {
            front: "Jakie znaczenie mają elektrośmieci i dlaczego nie wolno ich wyrzucać do zwykłych koszy?",
            back: "Zawierają metale ciężkie (ołów, kadm, rtęć) oraz substancje toksyczne, które niszczą środowisko. Muszą trafiać do specjalnych punktów zbiórki (PSZOK) w celu odzysku surowców."
        },
        {
            front: "Co się dzieje z masą blaszki cynkowej podczas pracy ogniwa Daniella?",
            back: "Masa płytki cynkowej maleje, ponieważ cynk ulega utlenieniu i przechodzi do roztworu w postaci kationów Zn<sup>2+</sup>."
        },
        {
            front: "Co się dzieje z masą blaszki miedzianej podczas pracy ogniwa Daniella?",
            back: "Masa płytki miedzianej rośnie, ponieważ jony miedzi Cu<sup>2+</sup> z roztworu ulegają redukcji i osadzają się w postaci metalicznej miedzi na elektrodzie."
        },
        {
            front: "Dlaczego ogniwo Daniella nie jest idealnym akumulatorem wielokrotnego użytku bez ładowania zewnętrznego?",
            back: "Ponieważ jony miedzi mogą swobodnie dyfundować i ulegać redukcji bezpośrednio na blaszce cynkowej (spontaniczna cementacja miedzi), powodując samorzutne rozładowanie ogniwa."
        },
        {
            front: "Czym jest nadnapięcie w procesie elektrolizy?",
            back: "Dodatkowa wartość napięcia ponad wartość teoretyczną SEM, którą należy przyłożyć, aby zapoczątkować wydzielanie się gazów lub metali na elektrodach."
        },
        {
            front: "W jaki sposób ocenia się, czy reakcja redoks zachodzi samorzutnie w określonym kierunku?",
            back: "Na podstawie wartości potencjałów standardowych par redoks – utleniaczem musi być forma o wyższym potencjale <i>E</i><sup>&deg;</sup>, a reduktorem forma o niższym potencjale <i>E</i><sup>&deg;</sup> (reguła zegara)."
        }
    ]
};