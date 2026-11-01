// Dział I. Atomy, cząsteczki i stechiometria chemiczna (Indeks 0 na liście)
appData[0] = {
    notatki: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">📚 KOMPENDIUM MATURALNE: ATOMY, CZĄSTECZKI I STECHIOMETRIA CHEMICZNA</h2>

        <!-- SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Wymagania Egzaminacyjne (Podstawa Programowa – Zakres Rozszerzony)</h3>
            <p>Zgodnie z podstawą programową dla zakresu rozszerzonego w dziale I. <em>Atomy, cząsteczki i stechiometria chemiczna</em> maturzysta musi opanować następujące umiejętności:</p>
            <ol class="note-list">
                <li>Stosowanie pojęć: <strong>nuklid, izotop, mol</strong> oraz <strong>stała Avogadra</strong>.</li>
                <li>Odczytywanie z układu okresowego mas atomowych pierwiastków i obliczanie na ich podstawie mas molowych związków nieorganicznych oraz organicznych o podanych wzorach lub nazwach.</li>
                <li>Stosowanie pojęcia masy atomowej jako średniej masy atomów danego pierwiastka z uwzględnieniem jego składu izotopowego.</li>
                <li>Pisanie równań naturalnych przemian promieniotwórczych (&alpha;, &beta;<sup>&minus;</sup>) oraz sztucznych reakcji jądrowych.</li>
                <li>Ustalanie wzoru empirycznego (elementarnego) i rzeczywistego związku chemicznego na podstawie jego składu oraz masy molowej.</li>
                <li>Dokonywanie jakościowej i ilościowej interpretacji równania reakcji w ujęciu molowym, masowym i objętościowym (dla gazów).</li>
                <li>Wykonywanie obliczeń (z uwzględnieniem wydajności reakcji) dotyczących liczby moli, mas substratów i produktów oraz objętości gazów w warunkach normalnych – zarówno przy zmieszaniu substratów w stosunku stechiometrycznym, jak i niestechiometrycznym.</li>
                <li>Stosowanie do obliczeń równania stanu gazu doskonałego (równania Clapeyrona).</li>
            </ol>
        </div>

        <!-- SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Fundamenty Stechiometrii: Jednostki Masy, Mol, Stała Avogadra i Masa Molowa</h3>

            <h4>A. Pojęcie cząstki a cząsteczki oraz jednostki masy</h4>
            <ul class="note-list">
                <li><strong>Cząstka (obiekt elementarny)</strong> to pojęcie szersze niż cząsteczka – obejmuje atomy, cząsteczki, jony, elektrony, a także inne indywidua chemiczne (np. fotony lub kwanty) oraz określone grupy cząstek.</li>
                <li>Jeżeli po słowie „mol” nie dodano doprecyzowania (np. mol atomów, mol jonów), w domyśle przyjmuje się, że mowa o <strong>molach cząsteczek</strong>.</li>
                <li><strong>Bezwzględne jednostki masy</strong> to kilogram (kg) i jego pochodne (np. gram, g) – można je wyznaczyć bezpośrednio za pomocą wagi.</li>
                <li><strong>Względne jednostki masy</strong> (m.in. atomowa jednostka masy <strong>u</strong> oraz <strong>mol</strong>) odnoszą się do przyjętego przez naukowców wzorca, jakim jest izotop węgla <sup>12</sup>C:</li>
            </ul>
            <div class="chem-eq">
                1 u = <sup>1</sup>/<sub>12</sub> masy atomu izotopu węgla <sup>12</sup>C<br>
                1 u = 1,66 &middot; 10<sup>&minus;24</sup> g &approx; 1,66 &middot; 10<sup>&minus;27</sup> kg (lub 1,67 &middot; 10<sup>&minus;27</sup> kg)<br>
                1 g = 6,02 &middot; 10<sup>23</sup> u
            </div>

            <h4>B. Średnia masa atomowa pierwiastka (m<sub>el</sub>)</h4>
            <p>Każdy pierwiastek ma charakterystyczną średnią masę atomową wyrażaną w unitach (u), którą odczytuje się z układu okresowego (np. dla miedzi 63,55 u, dla ołowiu 207,2 u). Uwzględnia ona skład izotopowy pierwiastka zgodnie ze wzorem:</p>
            <div class="chem-eq">
                m<sub>el</sub> = ( %m<sub>1</sub> &middot; A<sub>1</sub> + %m<sub>2</sub> &middot; A<sub>2</sub> + &hellip; + %m<sub>n</sub> &middot; A<sub>n</sub> ) / 100%
            </div>
            <ul class="note-list">
                <li><strong>A<sub>1</sub>, A<sub>2</sub>, &hellip;, A<sub>n</sub></strong> – masy atomowe (lub liczby masowe) poszczególnych izotopów wyrażone w unitach (u),</li>
                <li><strong>%m<sub>1</sub>, %m<sub>2</sub>, &hellip;, %m<sub>n</sub></strong> – zawartości procentowe (abundancje) poszczególnych izotopów (%).</li>
            </ul>

            <h4>C. Mol, Liczba Avogadra i Stała Avogadra (N<sub>A</sub>)</h4>
            <ul class="note-list">
                <li><strong>Mol (n)</strong> jest jednostką liczności materii. Jeden mol to ilość substancji zawierająca dokładnie tyle cząstek, ile atomów znajduje się w 12 g izotopu węgla <sup>12</sup>C, czyli <strong>6,02 &middot; 10<sup>23</sup> obiektów elementarnych</strong>.</li>
                <li><strong>Stała Avogadra (N<sub>A</sub>)</strong> określa liczbę cząstek w 1 molu substancji i posiada jednostkę: <strong>N<sub>A</sub> = 6,02 &middot; 10<sup>23</sup> mol<sup>&minus;1</sup></strong> (często zapisywana jako 6,02 &middot; 10<sup>23</sup> cząstek &middot; mol<sup>&minus;1</sup>).</li>
                <li><strong>Liczba Avogadra</strong> ma identyczne oznaczenie i wartość liczbową (6,02 &middot; 10<sup>23</sup>), ale jest wielkością <strong>bezwymiarową</strong> (nie posiada jednostki).</li>
            </ul>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Pochodna mola</th>
                            <th>Liczba cząstek (N)</th>
                            <th>Odpowiadająca jednostka masy przy obliczeniach z masą molową</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1 mikromol (&mu;mol)</strong></td>
                            <td>6,02 &middot; 10<sup>17</sup></td>
                            <td>mikrogram (&mu;g)</td>
                        </tr>
                        <tr>
                            <td><strong>1 milimol (mmol)</strong></td>
                            <td>6,02 &middot; 10<sup>20</sup></td>
                            <td>miligram (mg)</td>
                        </tr>
                        <tr>
                            <td><strong>1 mol (mol)</strong></td>
                            <td>6,02 &middot; 10<sup>23</sup></td>
                            <td>gram (g)</td>
                        </tr>
                        <tr>
                            <td><strong>1 kilomol (kmol)</strong></td>
                            <td>6,02 &middot; 10<sup>26</sup></td>
                            <td>kilogram (kg)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="note-alert">
                ⚠️ <strong>Ważna uwaga maturalna (związki jonowe i wieloatomowe):</strong> Sole tworzą jonowe sieci krystaliczne, dlatego w 1 molu NaCl znajduje się 6,02 &middot; 10<sup>23</sup> kationów Na<sup>+</sup> oraz 6,02 &middot; 10<sup>23</sup> anionów Cl<sup>&minus;</sup>, co daje łącznie <strong>12,04 &middot; 10<sup>23</sup> jonów</strong>. Analogicznie w 1 molu cząsteczek H<sub>2</sub>S (6,02 &middot; 10<sup>23</sup> cząsteczek) znajduje się 12,04 &middot; 10<sup>23</sup> atomów wodoru i 6,02 &middot; 10<sup>23</sup> atomów siarki, czyli łącznie <strong>18,06 &middot; 10<sup>23</sup> atomów</strong>.
            </div>

            <h4>D. Masa molowa (M) i trzy sposoby wyrażania masy drobin</h4>
            <p><strong>Masa molowa (M)</strong> to masa jednego mola substancji wyrażona w gramach. Jej jednostką jest <strong>g/mol</strong> (lub <strong>g &middot; mol<sup>&minus;1</sup></strong>), a jej wartość liczbowa jest równa masie atomowej lub cząsteczkowej wyrażonej w unitach (u).</p>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Sposób wyrażenia masy</th>
                            <th>Jednostka</th>
                            <th>Przykład dla potasu K</th>
                            <th>Przykład dla chlorowodoru HCl</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Masa atomowa / cząsteczkowa</strong></td>
                            <td>u</td>
                            <td>m<sub>K</sub> = 39 u</td>
                            <td>m<sub>HCl</sub> = 36,5 u</td>
                        </tr>
                        <tr>
                            <td><strong>Masa pojedynczego atomu / cząsteczki</strong></td>
                            <td>g lub kg</td>
                            <td>m<sub>K</sub> = 6,513 &middot; 10<sup>&minus;26</sup> kg</td>
                            <td>m<sub>HCl</sub> = 6,09 &middot; 10<sup>&minus;26</sup> kg</td>
                        </tr>
                        <tr>
                            <td><strong>Masa molowa (M)</strong></td>
                            <td>g &middot; mol<sup>&minus;1</sup> (g/mol)</td>
                            <td>M<sub>K</sub> = 39 g &middot; mol<sup>&minus;1</sup></td>
                            <td>M<sub>HCl</sub> = 36,5 g &middot; mol<sup>&minus;1</sup></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="note-alert danger">
                🔥 <strong>Pułapka maturalna:</strong> Masa molowa substancji <strong>nie zależy od współczynnika stechiometrycznego</strong> w równaniu reakcji chemicznej. W reakcji 4 P + 5 O<sub>2</sub> &rarr; P<sub>4</sub>O<sub>10</sub> masa molowa fosforu wynosi nadal M<sub>P</sub> = 31 g &middot; mol<sup>&minus;1</sup>, natomiast 124 g to masa 4 moli fosforu biorących udział w reakcji.
            </div>

            <h4>E. Zestawienie podstawowych wzorów przeliczeniowych</h4>
            <div class="chem-eq">
                n = m / M &nbsp;&hArr;&nbsp; m = n &middot; M &nbsp;&hArr;&nbsp; M = m / n<br>
                n = N / N<sub>A</sub> &nbsp;&hArr;&nbsp; N = n &middot; N<sub>A</sub><br>
                N = (m / M) &middot; N<sub>A</sub> &nbsp;&hArr;&nbsp; m = (N &middot; M) / N<sub>A</sub> &nbsp;&hArr;&nbsp; M = (m &middot; N<sub>A</sub>) / N
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 1 (Obliczanie liczby atomów w próbce o danej masie):</strong><br>
                <em>Ile atomów żelaza znajduje się w sztabce o masie 1 kg (1000 g)?</em><br>
                • <strong>Dane:</strong> m = 1000 g, M<sub>Fe</sub> = 56 g &middot; mol<sup>&minus;1</sup>, N<sub>A</sub> = 6,02 &middot; 10<sup>23</sup> mol<sup>&minus;1</sup>.<br>
                • <strong>Obliczenia:</strong> N<sub>Fe</sub> = (m / M) &middot; N<sub>A</sub> = (1000 g / 56 g &middot; mol<sup>&minus;1</sup>) &middot; 6,02 &middot; 10<sup>23</sup> mol<sup>&minus;1</sup> = <strong>1,075 &middot; 10<sup>25</sup> atomów Fe</strong>.
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 2 (Obliczanie masy konkretnej liczby atomów):</strong><br>
                <em>Oblicz masę 3 atomów siarki.</em><br>
                • <strong>Dane:</strong> N = 3, M<sub>S</sub> = 32 g &middot; mol<sup>&minus;1</sup>, N<sub>A</sub> = 6,02 &middot; 10<sup>23</sup> mol<sup>&minus;1</sup>.<br>
                • <strong>Obliczenia:</strong> m = (N &middot; M) / N<sub>A</sub> = (3 &middot; 32 g &middot; mol<sup>&minus;1</sup>) / (6,02 &middot; 10<sup>23</sup> mol<sup>&minus;1</sup>) = <strong>1,59 &middot; 10<sup>&minus;22</sup> g</strong>.
            </div>
        </div>

        <!-- SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Prawa Gazowe, Objętość Molowa, Gęstość i Równanie Clapeyrona</h3>

            <h4>A. Prawo Avogadra i Objętość Molowa Gazów</h4>
            <ul class="note-list">
                <li><strong>Prawo Avogadra:</strong> Równe objętości różnych gazów, znajdujących się w tych samych warunkach temperatury i ciśnienia, zawierają taką samą liczbę cząsteczek (oraz moli). Prawo to działa również odwrotnie: równe liczby cząsteczek (moli) różnych gazów w tych samych warunkach ciśnienia i temperatury zajmują jednakowe objętości.</li>
                <li><strong>Warunki normalne:</strong> Temperatura <strong>T = 273,15 K</strong> (w obliczeniach <strong>273 K</strong>, czyli <strong>0&deg;C</strong>) oraz ciśnienie <strong>p = 1013,25 hPa</strong> (101 325 Pa = 1 atm).</li>
                <li><strong>Objętość molowa gazu w warunkach normalnych (V<sub>m</sub> lub V<sub>0</sub>):</strong> 1 mol dowolnego gazu (pierwiastka, związku chemicznego lub mieszaniny gazowej, np. powietrza) w warunkach normalnych zajmuje objętość równą 22,41 dm<sup>3</sup>, co w obliczeniach zaokrągla się do <strong>22,4 dm<sup>3</sup> &middot; mol<sup>&minus;1</sup></strong>.</li>
                <li><strong>Warunki standardowe:</strong> Temperatura wynosi również 273 K (0&deg;C), natomiast ciśnienie jest równe <strong>1000 hPa</strong>.</li>
            </ul>

            <div class="note-alert danger">
                🔥 <strong>Pułapki maturalne dotyczące gazów:</strong>
                <ol class="note-list">
                    <li>Wartość <strong>22,4 dm<sup>3</sup> &middot; mol<sup>&minus;1</sup></strong> obowiązuje wyłącznie dla substancji <strong>w stanie gazowym w warunkach normalnych</strong> – nie wolno jej stosować dla cieczy (np. rtęci Hg, ciekłej wody) ani ciał stałych.</li>
                    <li>Objętość molowa gazu <strong>niedotyczy współczynnika stechiometrycznego</strong> w równaniu reakcji – dla każdego reagenta gazowego w warunkach normalnych wynosi 22,4 dm<sup>3</sup> &middot; mol<sup>&minus;1</sup>.</li>
                    <li>Znając objętość mieszaniny gazów (np. 11,2 dm<sup>3</sup> powietrza w warunkach normalnych), wiemy, że zawiera ona 0,5 mola cząstek (3,01 &middot; 10<sup>23</sup> drobin), ale bez znajomości dokładnego składu nie można podać jej masy jednym wzorem dla czystego związku.</li>
                </ol>
            </div>

            <h4>B. Gęstość bezwzględna (d) oraz gęstość względna gazów</h4>
            <ul class="note-list">
                <li><strong>Gęstość bezwzględna (d)</strong> to stosunek masy substancji (m) do jej objętości (V):
                    <div class="chem-eq">d = m / V</div>
                    Dla ciał stałych i cieczy wyraża się ją najczęściej w <strong>g/cm<sup>3</sup></strong> lub <strong>kg/dm<sup>3</sup></strong>, natomiast dla gazów (ze względu na znacznie mniejszą gęstość) w <strong>g/dm<sup>3</sup></strong> lub <strong>kg/m<sup>3</sup></strong>.
                </li>
                <li><strong>Gęstość gazu w warunkach normalnych:</strong> Ponieważ 1 mol gazu ma masę równą masie molowej M i zajmuje objętość V<sub>m</sub> = 22,4 dm<sup>3</sup>, zachodzi zależność:
                    <div class="chem-eq">d = M / V<sub>m</sub> = M / (22,4 dm<sup>3</sup> &middot; mol<sup>&minus;1</sup>) &nbsp;&hArr;&nbsp; V<sub>m</sub> = M / d</div>
                </li>
                <li><strong>Liczba moli gazu na podstawie gęstości i objętości:</strong>
                    <div class="chem-eq">n = (d &middot; V) / M</div>
                </li>
                <li><strong>Stosunek gęstości dwóch gazów (gęstość względna):</strong> W tych samych warunkach temperatury i ciśnienia objętości molowe gazów są jednakowe, dlatego stosunek gęstości dwóch gazów jest równy stosunkowi ich mas molowych:
                    <div class="chem-eq">d<sub>1</sub> / d<sub>2</sub> = M<sub>1</sub> / M<sub>2</sub></div>
                </li>
            </ul>

            <h4>C. Gaz doskonały a gaz rzeczywisty i Równanie Clapeyrona</h4>
            <ul class="note-list">
                <li><strong>Gaz doskonały</strong> to hipotetyczny model gazu, w którym zakłada się, że cząsteczki są punktami materialnymi (nie mają własnej objętości), nie występują między nimi żadne siły oddziaływania międzycząsteczkowego, a zderzenia między nimi są doskonale sprężyste.</li>
                <li><strong>Gaz rzeczywisty</strong> składa się z cząsteczek posiadających własną objętość, między którymi działają siły wzajemnego przyciągania i odpychania. W warunkach zbliżonych do normalnych (w szerokim zakresie temperatur do 400&deg;C i ciśnień do 100 atm) gazy rzeczywiste spełniają prawa gazu doskonałego.</li>
                <li><strong>Równanie stanu gazu doskonałego (równanie Clapeyrona)</strong> służy do obliczeń w warunkach innych niż normalne:</li>
            </ul>

            <div class="chem-eq">
                p &middot; V = n &middot; R &middot; T &nbsp;&nbsp;lub&nbsp;&nbsp; p &middot; V = (m / M) &middot; R &middot; T
            </div>

            <ul class="note-list">
                <li><strong>p</strong> – ciśnienie gazu [hPa] (pamiętaj: 1 hPa = 100 Pa, 1 kPa = 1000 Pa = 10 hPa),</li>
                <li><strong>V</strong> – objętość gazu [dm<sup>3</sup>],</li>
                <li><strong>n</strong> – liczba moli gazu [mol],</li>
                <li><strong>T</strong> – temperatura w skali Kelwina [K] (<strong>T [K] = t [&deg;C] + 273</strong>; podstawienie stopni Celsjusza to najczęstszy błąd rachunkowy na maturze!),</li>
                <li><strong>R</strong> – uniwersalna stała gazowa: <strong>R = 83,1 (hPa &middot; dm<sup>3</sup>) / (mol &middot; K)</strong>.</li>
            </ul>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Przekształcenie równania Clapeyrona</th>
                            <th>Stałe parametry układu</th>
                            <th>Wniosek fizykochemiczny</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>V / n = (R &middot; T) / p = const</strong></td>
                            <td>p = const, T = const</td>
                            <td>Taka sama liczba cząsteczek dowolnego gazu zajmuje zawsze taką samą objętość (Prawo Avogadra).</td>
                        </tr>
                        <tr>
                            <td><strong>n = (p &middot; V) / (R &middot; T) = const</strong></td>
                            <td>p = const, V = const, T = const</td>
                            <td>W danej objętości znajduje się zawsze taka sama liczba cząsteczek dowolnego gazu.</td>
                        </tr>
                        <tr>
                            <td><strong>p = (n &middot; R &middot; T) / V = const</strong></td>
                            <td>n = const, V = const, T = const</td>
                            <td>Taka sama liczba moli dowolnego gazu wywiera w naczyniu takie samo ciśnienie.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 3 (Zastosowanie równania Clapeyrona do obliczenia masy gazu):</strong><br>
                <em>Oblicz masę tlenku węgla(IV), który w temperaturze 291 K i pod ciśnieniem 1010 hPa zajmuje objętość 4,8 dm<sup>3</sup>.</em><br>
                • <strong>Dane:</strong> V = 4,8 dm<sup>3</sup>, T = 291 K, p = 1010 hPa, R = 83,1 (hPa &middot; dm<sup>3</sup>)/(mol &middot; K), M<sub>CO2</sub> = 44 g/mol.<br>
                • <strong>Obliczenia:</strong><br>
                p &middot; V = (m / M) &middot; R &middot; T &nbsp;&rArr;&nbsp; m = (p &middot; V &middot; M) / (R &middot; T)<br>
                m = (1010 hPa &middot; 4,8 dm<sup>3</sup> &middot; 44 g &middot; mol<sup>&minus;1</sup>) / (83,1 hPa &middot; dm<sup>3</sup> &middot; mol<sup>&minus;1</sup> &middot; K<sup>&minus;1</sup> &middot; 291 K) = <strong>8,82 g</strong>.
            </div>
        </div>

        <!-- SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Skład Ilościowy Związku Chemicznego oraz Wzór Empiryczny i Rzeczywisty</h3>

            <h4>A. Prawo stałości składu i opis ilościowy związku</h4>
            <p><strong>Prawo stałości składu związku chemicznego (Prousta):</strong> Stosunek masowy pierwiastków w każdym czystym związku chemicznym jest wielkością stałą i ściśle określoną (np. w czystej wodzie destylowanej H<sub>2</sub>O stosunek masowy wodoru do tlenu wynosi zawsze 1 : 8), co odróżnia związek chemiczny od mieszaniny o zmiennym składzie.</p>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Sposób opisu składu ilościowego</th>
                            <th>Zasada wyznaczania</th>
                            <th>Przykład dla siarczanu(VI) potasu K<sub>2</sub>SO<sub>4</sub> (M = 174 g/mol)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. Stosunek molowy pierwiastków</strong></td>
                            <td>Stosunek indeksów stechiometrycznych we wzorze związku.</td>
                            <td>n<sub>K</sub> : n<sub>S</sub> : n<sub>O</sub> = <strong>2 : 1 : 4</strong></td>
                        </tr>
                        <tr>
                            <td><strong>2. Stosunek masowy pierwiastków</strong></td>
                            <td>Stosunek mas pierwiastków w 1 molu związku podzielony przez najmniejszą z mas (wartość bezwymiarowa – bez jednostek!).</td>
                            <td>m<sub>K</sub> : m<sub>S</sub> : m<sub>O</sub> = (2 &middot; 39) : 32 : (4 &middot; 16) = 78 : 32 : 64 = <strong>2,44 : 1 : 2</strong></td>
                        </tr>
                        <tr>
                            <td><strong>3. Skład procentowy (procent masowy)</strong></td>
                            <td>Stosunek masy danego pierwiastka w 1 molu związku do masy molowej całego związku pomnożony przez 100%.</td>
                            <td>%K = (78 / 174) &middot; 100% = <strong>44,8%</strong><br>%S = (32 / 174) &middot; 100% = <strong>18,4%</strong><br>%O = (64 / 174) &middot; 100% = <strong>36,8%</strong></td>
                        </tr>
                        <tr>
                            <td><strong>4. Udział liczby atomów w cząsteczce</strong></td>
                            <td>Stosunek liczby atomów danego pierwiastka do sumy wszystkich atomów tworzących cząsteczki (dla K<sub>2</sub>SO<sub>4</sub> suma = 7).</td>
                            <td>K : S : O = <strong><sup>2</sup>/<sub>7</sub> : <sup>1</sup>/<sub>7</sub> : <sup>4</sup>/<sub>7</sub></strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>B. Wzór elementarny (empiryczny) a wzór rzeczywisty</h4>
            <ul class="note-list">
                <li><strong>Wzór elementarny (empiryczny)</strong> określa stosunek liczby atomów poszczególnych pierwiastków w cząsteczce za pomocą najmniejszych liczb całkowitych (np. CH, SO<sub>3</sub>, NO<sub>2</sub>). Jeżeli znamy wyłącznie skład procentowy (lub stosunek masowy) bez masy molowej związku, możliwe jest wyznaczenie jedynie wzoru elementarnego.</li>
                <li><strong>Wzór rzeczywisty (sumaryczny)</strong> podaje dokładną, rzeczywistą liczbę atomów każdego pierwiastka w cząsteczce. Może on być identyczny ze wzorem empirycznym lub stanowić jego całkowitą wielokrotność: <strong>(wzór empiryczny)<sub>n</sub></strong> (np. wzór empiryczny CH &rarr; wzór rzeczywisty C<sub>6</sub>H<sub>6</sub>; wzór empiryczny NO<sub>2</sub> &rarr; wzór rzeczywisty N<sub>2</sub>O<sub>4</sub>).</li>
            </ul>

            <p><strong>Algorytmy wyznaczania wzorów dla związku typu A<sub>x</sub>B<sub>y</sub>:</strong></p>
            <ol class="note-list">
                <li><strong>Z samego składu procentowego (wzór empiryczny):</strong>
                    <div class="chem-eq">(M<sub>A</sub> &middot; x) / (M<sub>B</sub> &middot; y) = %A / %B &nbsp;&rArr;&nbsp; x : y = (%A / M<sub>A</sub>) : (%B / M<sub>B</sub>)</div>
                </li>
                <li><strong>Ze składu procentowego i masy molowej M (wzór rzeczywisty):</strong>
                    <ul class="note-list">
                        <li><strong>Sposób I (proporcja):</strong> Wyliczamy masę przypadającą na każdy pierwiastek w 1 molu związku: <strong>m<sub>A</sub> = (%A &middot; M) / 100%</strong>, a następnie dzielimy ją przez masę molową danego pierwiastka: <strong>x = m<sub>A</sub> / M<sub>A</sub></strong>.</li>
                        <li><strong>Sposób II (układ równań):</strong> Rozwiązujemy układ dwóch równań:
                            <div class="chem-eq">
                                { (M<sub>A</sub> &middot; x) / (M<sub>B</sub> &middot; y) = %A / %B<br>
                                { M = M<sub>A</sub> &middot; x + M<sub>B</sub> &middot; y
                            </div>
                        </li>
                    </ul>
                </li>
            </ol>

            <div class="chem-obs">
                📝 <strong>Przykład 4 (Wzór rzeczywisty na podstawie gęstości względnej i składu procentowego):</strong><br>
                <em>Stosunek gęstości pewnego tlenku azotu do gęstości helu wynosi 11,5, a masowa zawartość procentowa azotu w tym tlenku jest równa 30,4%. Ustal wzór rzeczywisty tlenku azotu.</em><br>
                • <strong>Krok 1 (Masa molowa tlenku N<sub>x</sub>O<sub>y</sub>):</strong> Ponieważ d<sub>NxOy</sub> / d<sub>He</sub> = M<sub>NxOy</sub> / M<sub>He</sub> = 11,5, a M<sub>He</sub> = 4 g/mol, to:<br>
                M<sub>NxOy</sub> = 11,5 &middot; 4 g/mol = <strong>46 g/mol</strong>.<br>
                • <strong>Krok 2 (Masy i liczby moli pierwiastków w 1 molu tlenku):</strong><br>
                m<sub>N</sub> = (30,4% &middot; 46 g) / 100% = 13,984 g &approx; 14 g &nbsp;&rArr;&nbsp; x = 14 g / 14 g &middot; mol<sup>&minus;1</sup> = <strong>1 mol N</strong><br>
                m<sub>O</sub> = 46 g &minus; 14 g = 32 g &nbsp;&rArr;&nbsp; y = 32 g / 16 g &middot; mol<sup>&minus;1</sup> = <strong>2 mole O</strong><br>
                • <strong>Odpowiedź:</strong> Wzór rzeczywisty tlenku azotu to <strong>NO<sub>2</sub></strong>.
            </div>
        </div>

        <!-- SEKCJA 5 -->
        <div class="note-section">
            <h3>5. Prawa Chemiczne w Reakcjach i Ilościowa Interpretacja Równań</h3>

            <h4>A. Prawo zachowania masy (Łomonosowa-Lavoisiera)</h4>
            <p>Masa substancji zużytych do reakcji (substratów) jest równa łącznej masie produktów otrzymanych w wyniku tej reakcji:</p>
            <div class="chem-eq">m<sub>substratów</sub> = m<sub>produktów</sub></div>

            <p><strong>Analiza trzech scenariuszy maturalnych dla reakcji A + B &rarr; X + Y, w której zmieszano 10 g substancji A oraz 40 g substancji B (łączna masa układu przed reakcją wynosi 50 g):</strong></p>
            <ol class="note-list">
                <li><strong>Scenariusz I (substraty w stosunku stechiometrycznym, wydajność 100%):</strong> Po reakcji w naczyniu nie ma już substratów A ani B; łączna masa powstałych produktów X i Y wynosi dokładnie <strong>50 g</strong>.</li>
                <li><strong>Scenariusz II (jeden z substratów, np. B, użyty w nadmiarze):</strong> Po zakończeniu reakcji w naczyniu znajdują się produkty X i Y oraz nieprzereagowana część substratu B; łączna masa X + Y + B<sub>pozostałe</sub> wynosi nadal <strong>50 g</strong>.</li>
                <li><strong>Scenariusz III (wydzielenie produktu gazowego Y w układzie otwartym):</strong> Substraty A i B przereagowały całkowicie, ale gazowy produkt Y opuścił otwarte naczynie. W probówce pozostał tylko produkt X (masa zawartości probówki zmalała o masę wydzielonego gazu Y), jednak suma masy produktu X pozostałego w probówce i masy gazu Y, który uleciał, wynosi wciąż <strong>50 g</strong>.</li>
            </ol>

            <h4>B. Prawo stałości stosunków objętościowych (Gay-Lussaca)</h4>
            <p>W reakcjach zachodzących między gazami objętości reagujących substratów gazowych oraz powstających produktów gazowych (mierzone w tych samych warunkach ciśnienia i temperatury) pozostają do siebie w stosunku niewielkich liczb całkowitych, równych współczynnikom stechiometrycznym w uzgodnionym równaniu reakcji.</p>
            <div class="note-alert">
                ⚠️ <strong>Kluczowa zasada:</strong> Prawo Gay-Lussaca dotyczy <strong>wyłącznie reagentów gazowych</strong>! Substancje stałe i ciekłe całkowicie pomija się w stosunku objętościowym.<br>
                <strong>Przykład:</strong> W reakcji niecałkowitego spalania metanu CH<sub>4(g)</sub> + O<sub>2(g)</sub> &rarr; C<sub>(s)</sub> + 2 H<sub>2</sub>O<sub>(g)</sub> (lub z mnożnikiem &times;2: 2 CH<sub>4</sub> + 2 O<sub>2</sub> &rarr; 2 C<sub>(s)</sub> + 4 H<sub>2</sub>O<sub>(g)</sub>) węgiel jest ciałem stałym, więc stosunek objętościowy reagentów gazowych (CH<sub>4</sub> : O<sub>2</sub> : H<sub>2</sub>O<sub>(g)</sub>) wynosi <strong>1 : 1 : 2</strong> (czyli 2 obj. : 2 obj. : 4 obj.).
            </div>

            <h4>C. Pełna interpretacja ilościowa równania reakcji chemicznej</h4>
            <p>Przeanalizujmy 6 najważniejszych zależności stechiometrycznych na przykładzie reakcji miedzi ze stężonym kwasem azotowym(V) (zakładając warunki normalne i wodę w stanie pary wodnej):</p>
            <div class="chem-eq">
                Cu + 4 HNO<sub>3</sub> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> Cu(NO<sub>3</sub>)<sub>2</sub> + 2 NO<sub>2</sub>&uarr; + 2 H<sub>2</sub>O&uarr;
            </div>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Wielkość / Zależność</th>
                            <th>Cu</th>
                            <th>4 HNO<sub>3</sub></th>
                            <th>Cu(NO<sub>3</sub>)<sub>2</sub></th>
                            <th>2 NO<sub>2</sub></th>
                            <th>2 H<sub>2</sub>O<sub>(g)</sub></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. Liczba moli (n)</strong></td>
                            <td>1 mol</td>
                            <td>4 mole</td>
                            <td>1 mol</td>
                            <td>2 mole</td>
                            <td>2 mole</td>
                        </tr>
                        <tr>
                            <td><strong>2. Masa reagentów (m)</strong></td>
                            <td>64 g</td>
                            <td>252 g</td>
                            <td>188 g</td>
                            <td>92 g</td>
                            <td>36 g</td>
                        </tr>
                        <tr>
                            <td><strong>3. Objętość w war. norm. (tylko gazy!)</strong></td>
                            <td>&mdash; (ciało stałe)</td>
                            <td>&mdash; (ciecz/roztwór)</td>
                            <td>&mdash; (ciało stałe)</td>
                            <td>44,8 dm<sup>3</sup></td>
                            <td>44,8 dm<sup>3</sup></td>
                        </tr>
                        <tr>
                            <td><strong>4. Liczba cząstek (N)</strong></td>
                            <td>6,02 &middot; 10<sup>23</sup></td>
                            <td>2,408 &middot; 10<sup>24</sup></td>
                            <td>6,02 &middot; 10<sup>23</sup></td>
                            <td>1,204 &middot; 10<sup>24</sup></td>
                            <td>1,204 &middot; 10<sup>24</sup></td>
                        </tr>
                        <tr>
                            <td><strong>5. Stosunek masowy (dzielimy przez 36 g)</strong></td>
                            <td>1,78</td>
                            <td>7</td>
                            <td>5,22</td>
                            <td>2,56</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td><strong>6. Stosunek objętościowy (tylko gazy!)</strong></td>
                            <td>&mdash;</td>
                            <td>&mdash;</td>
                            <td>&mdash;</td>
                            <td>1 obj. (lub 2 obj.)</td>
                            <td>1 obj. (lub 2 obj.)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- SEKCJA 6 -->
        <div class="note-section">
            <h3>6. Stosunek Niestechiometryczny (Substrat w Nadmiarze i Niedomiarze)</h3>
            <p>W zadaniach maturalnych bardzo często podaje się ilości (masy, liczby moli lub objętości) wszystkich substratów biorących udział w reakcji. Przed ułożeniem proporcji do obliczenia ilości produktu należy obowiązkowo sprawdzić, czy substraty zmieszano w <strong>stosunku stechiometrycznym</strong> (dokładnie takim, jaki wynika ze współczynników równania reakcji), czy w <strong>stosunku niestechiometrycznym</strong> (gdy jeden z substratów znajduje się w nadmiarze, a drugi w niedomiarze).</p>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Sytuacja eksperymentalna dla reakcji A + B &rarr; X + Y</th>
                            <th>Przebieg reakcji</th>
                            <th>Skład układu po zakończeniu reakcji (W = 100%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. Stosunek stechiometryczny</strong></td>
                            <td>Substraty A i B reagują ze sobą całkowicie.</td>
                            <td>Wyłącznie produkty X oraz Y (brak substratów A i B).</td>
                        </tr>
                        <tr>
                            <td><strong>2. Nadmiar substratu B (niedomiar A)</strong></td>
                            <td>Substrat A (w niedomiarze) przereagowuje w całości i limituje ilość powstających produktów, natomiast część substratu B pozostaje nieprzereagowana.</td>
                            <td>Produkty X i Y oraz nieprzereagowany nadmiar substratu B.</td>
                        </tr>
                        <tr>
                            <td><strong>3. Nadmiar substratu A (niedomiar B)</strong></td>
                            <td>Substrat B (w niedomiarze) przereaguje całkowicie, a część substratu A pozostaje w naczyniu.</td>
                            <td>Produkty X i Y oraz nieprzereagowany nadmiar substratu A.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="note-alert danger">
                🔥 <strong>Złota zasada stechiometrii:</strong> Ilość powstającego produktu oblicza się <strong>zawsze na podstawie substratu znajdującego się w niedomiarze</strong> (tzw. substratu ograniczającego / limitującego), ponieważ to on zużywa się całkowicie i wyznacza moment zatrzymania reakcji.
            </div>

            <h4>Algorytm wyznaczania substratu w niedomiarze i nadmiarze</h4>
            <ol class="note-list">
                <li>Zapisz i uzgodnij równanie reakcji chemicznej.</li>
                <li>Przelicz podane ilości substratów na mole (lub porównaj bezpośrednio ich objętości, jeśli oba substraty są gazami odmierzonymi w tych samych warunkach ciśnienia i temperatury).</li>
                <li>Podziel liczbę moli (lub objętość) jednego substratu przez współczynnik stechiometryczny i wylicz z proporcji, ile moli drugiego substratu potrzeba do całkowitego przereagowania:
                    <ul class="note-list">
                        <li>Jeśli posiadana ilość drugiego substratu jest <strong>większa</strong> niż wyliczona z proporcji – drugi substrat jest w <strong>nadmiarze</strong>, a pierwszy w <strong>niedomiarze</strong>.</li>
                        <li>Jeśli posiadana ilość drugiego substratu jest <strong>mniejsza</strong> niż wyliczona z proporcji – drugi substrat jest w <strong>niedomiarze</strong>, a pierwszy w <strong>nadmiarze</strong>.</li>
                    </ul>
                </li>
                <li>Oblicz ilość produktu, układając proporcję wyłącznie dla substratu będącego w <strong>niedomiarze</strong>.</li>
            </ol>

            <div class="chem-obs">
                📝 <strong>Przykład 5 (Weryfikacja wystarczalności substratu – Synteza HCl):</strong><br>
                <em>Czy 0,4 mola chloru wystarczy do otrzymania 0,6 mola chlorowodoru? Wykonaj odpowiednie obliczenia.</em><br>
                • <strong>Krok 1 (Równanie reakcji i interpretacja molowa):</strong><br>
                H<sub>2</sub> + Cl<sub>2</sub> &rarr; 2 HCl &nbsp;(stosunek molowy: 1 mol H<sub>2</sub> : 1 mol Cl<sub>2</sub> : 2 mole HCl)<br>
                • <strong>Krok 2 (Obliczenie maksymalnej liczby moli HCl z 0,4 mola Cl<sub>2</sub>):</strong><br>
                Z 1 mola Cl<sub>2</sub> powstają 2 mole HCl, więc z 0,4 mola Cl<sub>2</sub> powstaje: x = 0,4 mola &middot; 2 = <strong>0,8 mola HCl</strong>.<br>
                • <strong>Wniosek i odpowiedź:</strong> Z 0,4 mola chloru można otrzymać 0,8 mola HCl (0,8 mol &gt; 0,6 mol), zatem podana ilość chloru w pełni wystarczy do otrzymania 0,6 mola HCl (chlor jest w nadmiarze względem oczekiwanej ilości produktu).
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 6 (Szukanie nadmiaru dla gazów – Katalityczne utlenianie NH<sub>3</sub>):</strong><br>
                <em>Zmieszano 5 m<sup>3</sup> amoniaku z 25 m<sup>3</sup> powietrza i przeprowadzono reakcję katalitycznego utlenienia w temperaturze 800&deg;C, prowadzącą do otrzymania tlenku azotu(II) i pary wodnej. Objętości wszystkich gazów odmierzono w tych samych warunkach ciśnienia i temperatury. Załóż, że tlen stanowi <sup>1</sup>/<sub>5</sub> objętości powietrza. Oblicz maksymalną objętość tlenku azotu(II), jaką można uzyskać w tym procesie.</em><br>
                • <strong>Krok 1 (Objętość czystego tlenu w powietrzu):</strong> V<sub>O2</sub> = <sup>1</sup>/<sub>5</sub> &middot; 25 m<sup>3</sup> = <strong>5 m<sup>3</sup></strong>.<br>
                • <strong>Krok 2 (Równanie reakcji i stosunek objętościowy wg Prawa Gay-Lussaca):</strong><br>
                4 NH<sub>3</sub> + 5 O<sub>2</sub> &rarr; 4 NO + 6 H<sub>2</sub>O &nbsp;(stosunek V<sub>NH3</sub> : V<sub>O2</sub> : V<sub>NO</sub> : V<sub>H2O</sub> = 4 : 5 : 4 : 6)<br>
                • <strong>Krok 3 (Weryfikacja nadmiaru/niedomiaru):</strong> Z równania wynika, że z 5 m<sup>3</sup> O<sub>2</sub> przereagują dokładnie <strong>4 m<sup>3</sup> NH<sub>3</sub></strong>. Ponieważ użyto 5 m<sup>3</sup> NH<sub>3</sub>, amoniak jest w <strong>nadmiarze</strong> (pozostaje 5 m<sup>3</sup> &minus; 4 m<sup>3</sup> = 1 m<sup>3</sup> nieprzereagowanego NH<sub>3</sub>), a tlen (5 m<sup>3</sup>) jest w <strong>niedomiarze</strong>.<br>
                • <strong>Krok 4 (Obliczenie objętości produktu NO):</strong> Ponieważ stosunek V<sub>NH3(przereagowanego)</sub> : V<sub>NO</sub> = 4 : 4 = 1 : 1 (lub względem tlenu V<sub>O2</sub> : V<sub>NO</sub> = 5 : 4), z 4 m<sup>3</sup> przereagowanego NH<sub>3</sub> (i 5 m<sup>3</sup> O<sub>2</sub>) powstają maksymalnie <strong>4 m<sup>3</sup> NO</strong>.
            </div>
        </div>

        <!-- SEKCJA 7 -->
        <div class="note-section">
            <h3>7. Analiza Składu Mieszanin, Hydratów i Związków w Procesach Wieloetapowych</h3>
            <p>Zadania dotyczące mieszanin i hydratów stanowią jeden z najważniejszych elementów arkuszy maturalnych na poziomie rozszerzonym. W zależności od właściwości chemicznych składników mieszaniny stosujemy jedną z pięciu strategii obliczeniowych (A–E):</p>

            <h4>Strategia A: Selektywna reakcja tylko jednego składnika mieszaniny</h4>
            <p>Gdy na dwuskładnikową mieszaninę działamy odczynnikiem, z którym reaguje wyłącznie jeden ze składników, ilość powstałego produktu (np. osadu lub gazu) pozwala bezpośrednio wyliczyć masę reagującego składnika.</p>

            <div class="chem-obs">
                📝 <strong>Przykład 7 (Wyznaczanie składu mieszaniny NaCl i NaNO<sub>3</sub> metodą strąceniową):</strong><br>
                <em>W celu wyznaczenia składu stałej mieszaniny chlorku sodu i azotanu(V) sodu rozpuszczono 10 g tej mieszaniny w wodzie destylowanej i dodano roztwór azotanu(V) srebra(I). Strącony osad po odsączeniu i wysuszeniu miał masę 5 g. Oblicz skład procentowy mieszaniny, przyjmując całkowitą nierozpuszczalność osadu w wodzie.</em><br>
                • <strong>Krok 1 (Analiza przebiegu reakcji):</strong><br>
                NaNO<sub>3</sub> + AgNO<sub>3</sub> &rarr; <em>reakcja nie zachodzi</em><br>
                NaCl + AgNO<sub>3</sub> &rarr; AgCl&darr; + NaNO<sub>3</sub><br>
                • <strong>Krok 2 (Masy molowe):</strong> M<sub>NaCl</sub> = 23 + 35,5 = 58,5 g/mol; &nbsp;M<sub>AgCl</sub> = 108 + 35,5 = 143,5 g/mol.<br>
                • <strong>Krok 3 (Obliczenie masy NaCl w mieszaninie):</strong> Z 1 mola (58,5 g) NaCl powstaje 1 mol (143,5 g) osadu AgCl:<br>
                m<sub>NaCl</sub> = (58,5 g &middot; 5 g) / 143,5 g = <strong>2,04 g</strong><br>
                • <strong>Krok 4 (Masa NaNO<sub>3</sub> i skład procentowy):</strong><br>
                m<sub>NaNO3</sub> = 10 g &minus; 2,04 g = 7,96 g<br>
                %NaCl = (2,04 g / 10 g) &middot; 100% = <strong>20,4%</strong><br>
                %NaNO<sub>3</sub> = 100% &minus; 20,4% = <strong>79,6%</strong>.
            </div>

            <h4>Strategia B: Wieloetapowa analiza pośrednia związku chemicznego (metoda bilansu molowego pierwiastka)</h4>
            <p>W analizie chemicznej często przeprowadza się ciąg reakcji (przy założeniu 100% wydajności i użycia nadmiaru odczynników pomocniczych), w którym badany pierwiastek przechodzi ilościowo z analizowanej próbki przez produkt pośredni do końcowego, łatwego do zważenia związku.</p>

            <div class="chem-obs">
                📝 <strong>Przykład 8 (Oznaczanie zawartości procentowej azotu w nieznanej soli amonowej (NH<sub>4</sub>)<sub>x</sub>R):</strong><br>
                <em>Próbkę soli amonowej o masie 1 g poddano analizie. W etapie I na próbkę podziałano stężonym roztworem wodorotlenku sodu. W etapie II amoniak wydzielony w etapie I został całkowicie pochłonięty w nadmiarze roztworu kwasu siarkowego(VI). Po reakcji powstałą sól wydzielono, a jej masa wynosiła 2,3 g. Oblicz zawartość procentową azotu w analizowanej soli amonowej.</em><br>
                • <strong>Krok 1 (Równania przemian):</strong><br>
                Etap I: (NH<sub>4</sub>)<sub>x</sub>R + x NaOH &rarr; x NH<sub>3</sub>&uarr; + Na<sub>x</sub>R + x H<sub>2</sub>O<br>
                Etap II: 2 NH<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> &rarr; (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub><br>
                • <strong>Krok 2 (Liczba moli (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> z etapu II):</strong><br>
                M<sub>(NH4)2SO4</sub> = 2 &middot; (14 + 4 &middot; 1) + 32 + 4 &middot; 16 = 132 g/mol<br>
                n<sub>(NH4)2SO4</sub> = 2,3 g / 132 g &middot; mol<sup>&minus;1</sup> = <strong>0,0174 mol</strong>.<br>
                • <strong>Krok 3 (Powiązanie liczby moli azotu między etapami):</strong><br>
                n<sub>NH3</sub> = 2 &middot; n<sub>(NH4)2SO4</sub> = 2 &middot; 0,0174 mol = <strong>0,0348 mol</strong>.<br>
                Ponieważ 1 mol NH<sub>3</sub> zawiera 1 mol atomów N, w wyjściowej próbce soli znajdowało się n<sub>N</sub> = n<sub>NH3</sub> = 0,0348 mol atomów azotu.<br>
                • <strong>Krok 4 (Masa i zawartość procentowa azotu w próbce 1 g):</strong><br>
                m<sub>N</sub> = 0,0348 mol &middot; 14 g/mol = 0,4872 g<br>
                %N = (0,4872 g / 1 g) &middot; 100% = <strong>48,72%</strong>.
            </div>

            <h4>Strategia C: Równoczesna reakcja obu składników mieszaniny (Metoda układu równań)</h4>
            <p>Gdy oba składniki mieszaniny ulegają reakcji równolegle i znamy łączną masę mieszaniny przed reakcją oraz łączną ilość produktu (lub sumaryczny ubytek masy), wprowadzamy dwie niewiadome (<em>x</em> oraz <em>y</em>) i budujemy układ dwóch równań: <strong>równanie bilansu masy</strong> oraz <strong>równanie bilansu moli</strong>.</p>

            <div class="chem-obs">
                📝 <strong>Przykład 9 (Prażenie mieszaniny dwóch węglanów: CaCO<sub>3</sub> i BaCO<sub>3</sub>):</strong><br>
                <em>Mieszaninę węglanu wapnia z węglanem baru o masie 5 g prażono aż do uzyskania stałej masy. Ubytek masy stanowił 23,3% masy początkowej. Oblicz masę węglanu baru w mieszaninie.</em><br>
                • <strong>Krok 1 (Równania reakcji rozkładu termicznego):</strong><br>
                CaCO<sub>3</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> CaO + CO<sub>2</sub>&uarr; &nbsp;&nbsp;oraz&nbsp;&nbsp; BaCO<sub>3</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> BaO + CO<sub>2</sub>&uarr;<br>
                • <strong>Krok 2 (Interpretacja ubytku masy i masy molowe):</strong> Ubytek masy to łączna masa wydzielonego CO<sub>2</sub>:<br>
                m<sub>CO2</sub> = (23,3% &middot; 5 g) / 100% = <strong>1,165 g</strong>.<br>
                M<sub>CaCO3</sub> = 100 g/mol, &nbsp;M<sub>BaCO3</sub> = 197 g/mol, &nbsp;M<sub>CO2</sub> = 44 g/mol.<br>
                • <strong>Krok 3 (Układ równań):</strong> Niech <em>x</em> [g] = masa CaCO<sub>3</sub>, a <em>y</em> [g] = masa BaCO<sub>3</sub>:<br>
                { x + y = 5<br>
                { (x / 100) &middot; 44 + (y / 197) &middot; 44 = 1,165<br>
                • <strong>Krok 4 (Rozwiązanie układu):</strong> Podstawiając x = 5 &minus; y i dzieląc drugie równanie przez 44:<br>
                (5 &minus; y)/100 + y/197 = 1,165 / 44 &nbsp;&rArr;&nbsp; 0,05 &minus; 0,01y + 0,005076y = 0,026477<br>
                0,004924y = 0,023523 &nbsp;&rArr;&nbsp; <strong>y = 4,78 g BaCO<sub>3</sub></strong> (oraz x = 0,22 g CaCO<sub>3</sub>).
            </div>

            <h4>Strategia D: Selektywny rozkład termiczny zależny od temperatury oraz częściowy rozkład składnika</h4>
            <p>W zadaniach maturalnych z tabelami temperatur rozkładu (np. węglanów berylowców MCO<sub>3</sub> &rarr; MO + CO<sub>2</sub>&uarr;) kluczowe jest porównanie temperatury eksperymentu z temperaturami rozkładu poszczególnych związków:</p>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Wzór węglanu berylowca</th>
                            <th>Temperatura rozkładu [&deg;C]</th>
                            <th>Zachowanie w 600&deg;C</th>
                            <th>Zachowanie w 700&deg;C</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>MgCO<sub>3</sub> (M = 84 g/mol)</strong></td>
                            <td>540&deg;C</td>
                            <td>Ulega rozkładowi (600&deg;C &gt; 540&deg;C)</td>
                            <td>Ulega rozkładowi (700&deg;C &gt; 540&deg;C)</td>
                        </tr>
                        <tr>
                            <td><strong>CaCO<sub>3</sub> (M = 100 g/mol)</strong></td>
                            <td>900&deg;C</td>
                            <td>Nie ulega rozkładowi (600&deg;C &lt; 900&deg;C)</td>
                            <td>Nie ulega rozkładowi (700&deg;C &lt; 900&deg;C)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 10 (Całkowity rozkład jednego składnika w mieszaninie równomolowej):</strong><br>
                <em>Sporządzono równomolową (n<sub>1</sub> : n<sub>2</sub> = 1 : 1) mieszaninę MgCO<sub>3</sub> i CaCO<sub>3</sub> o masie 23,0 g, którą umieszczono w otwartym naczyniu i ogrzano w temperaturze 600&deg;C do stałej masy. Oblicz procentowy ubytek masy zawartości naczynia.</em><br>
                • <strong>Krok 1 (Skład mieszaniny równomolowej):</strong> Skoro n<sub>MgCO3</sub> / n<sub>CaCO3</sub> = 1 / 1, to stosunek masowy wynosi:<br>
                m<sub>MgCO3</sub> / m<sub>CaCO3</sub> = (1 mol &middot; 84 g/mol) / (1 mol &middot; 100 g/mol) = 84 / 100 = 21 / 25 (suma części masowych: 21 + 25 = 46).<br>
                m<sub>MgCO3</sub> = (23,0 g &middot; 21) / 46 = <strong>10,5 g</strong> &nbsp;(oraz m<sub>CaCO3</sub> = 12,5 g).<br>
                • <strong>Krok 2 (Analiza temperatury 600&deg;C):</strong> W 600&deg;C rozkłada się wyłącznie MgCO<sub>3</sub> (MgCO<sub>3</sub> &rarr; MgO + CO<sub>2</sub>&uarr;) w 100%.<br>
                • <strong>Krok 3 (Obliczenie ubytku masy):</strong> Z 84 g MgCO<sub>3</sub> wydzielają się 44 g CO<sub>2</sub>, więc z 10,5 g MgCO<sub>3</sub> wydzieli się:<br>
                m<sub>CO2</sub> = (10,5 g &middot; 44 g) / 84 g = <strong>5,5 g</strong>.<br>
                %<sub>ubytku</sub> = (5,5 g / 23,0 g) &middot; 100% = <strong>23,9%</strong>.
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 11 (Częściowy / niecałkowity rozkład termiczny składnika mieszaniny):</strong><br>
                <em>W otwartym tyglu umieszczono mieszaninę MgCO<sub>3</sub> i CaCO<sub>3</sub> o masie 11,2 g, w której CaCO<sub>3</sub> stanowi 8,10% masowych. Zawartość tygla prażono w temperaturze 700&deg;C do momentu, kiedy masa znajdujących się w nim substancji stałych wyniosła 10,0 g. Oblicz, jaki procent początkowej masy MgCO<sub>3</sub> zawartego w mieszaninie uległ rozkładowi.</em><br>
                • <strong>Krok 1 (Początkowa masa MgCO<sub>3</sub>):</strong> Zawartość procentowa MgCO<sub>3</sub> to 100% &minus; 8,10% = 91,90%:<br>
                m<sub>MgCO3(początkowa)</sub> = (91,90% &middot; 11,2 g) / 100% = <strong>10,293 g</strong>.<br>
                • <strong>Krok 2 (Masa MgCO<sub>3</sub>, która uległa rozkładowi w 700&deg;C):</strong> Ubytek masy próbki (&Delta;m = 11,2 g &minus; 10,0 g = 1,2 g) to masa wydzielonego CO<sub>2</sub>. Ponieważ z 84 g MgCO<sub>3</sub> powstają 44 g CO<sub>2</sub>, to 1,2 g CO<sub>2</sub> powstało z:<br>
                m<sub>MgCO3(rozłożonego)</sub> = (84 g &middot; 1,2 g) / 44 g = <strong>2,291 g</strong>.<br>
                • <strong>Krok 3 (Stopień przereagowania MgCO<sub>3</sub>):</strong><br>
                %<sub>rozkładu</sub> = (2,291 g / 10,293 g) &middot; 100% = 22,26% &approx; <strong>22,3%</strong>.
            </div>

            <h4>Strategia E: Stechiometria hydratów (soli uwodnionych)</h4>
            <p><strong>Hydraty</strong> to sole zawierające w swojej sieci krystalicznej ściśle określoną liczbę cząsteczek wody krystalizacyjnej (np. CaSO<sub>4</sub> &middot; 2H<sub>2</sub>O, (CaSO<sub>4</sub>)<sub>2</sub> &middot; H<sub>2</sub>O). Podczas ogrzewania hydraty tracą wodę całkowicie (przechodząc w sól bezwodną) lub stopniowo (przechodząc w niższy hydrat o mniejszej liczbie cząsteczek wody).</p>

            <div class="chem-obs">
                📝 <strong>Przykład 12 (Wyznaczanie wzoru soli bezwodnej i stopnia uwodnienia hydratów):</strong><br>
                <em>Pewna sól wapnia krystalizuje z roztworu wodnego jako hydrat sześciowodny X &middot; 6H<sub>2</sub>O. Prażenie tej soli daje sól bezwodną X, której masa molowa stanowi 50,68% masy molowej wyjściowego hydratu. Łagodniejsze ogrzewanie hydratu X &middot; 6H<sub>2</sub>O powoduje powstanie innego hydratu o mniejszej liczbie cząsteczek wody (X &middot; xH<sub>2</sub>O), którego masa molowa stanowi 83,56% masy wyjściowego hydratu:<br>
                1. Oblicz masę molową soli X i ustal jej wzór sumaryczny, wiedząc, że 36,04% jej masy molowej stanowi wapń i jest to sól kwasu beztlenowego.<br>
                2. Oblicz liczbę moli cząsteczek wody (x) przypadającą na 1 mol soli w hydracie X &middot; xH<sub>2</sub>O.</em><br>
                • <strong>Krok 1 (Masa molowa soli bezwodnej M<sub>X</sub>):</strong> W 1 molu X &middot; 6H<sub>2</sub>O masa 6 moli H<sub>2</sub>O wynosi 6 &middot; 18 = 108 g/mol, więc masa molowa hydratu to M<sub>X</sub> + 108:<br>
                M<sub>X</sub> / (M<sub>X</sub> + 108) = 0,5068 &nbsp;&rArr;&nbsp; M<sub>X</sub> = 0,5068 &middot; M<sub>X</sub> + 54,7344 &nbsp;&rArr;&nbsp; 0,4932 &middot; M<sub>X</sub> = 54,7344 &nbsp;&rArr;&nbsp; <strong>M<sub>X</sub> = 111 g/mol</strong> (a masa molowa X &middot; 6H<sub>2</sub>O wynosi 111 + 108 = 219 g/mol).<br>
                • <strong>Krok 2 (Wzór sumaryczny soli X):</strong> Masa wapnia (M<sub>Ca</sub> = 40 g/mol) w 1 molu soli X:<br>
                m<sub>Ca</sub> = (36,04% &middot; 111 g) / 100% = 40 g (1 mol Ca<sup>2+</sup>). Masa reszty kwasowej kwasu beztlenowego wynosi 111 g &minus; 40 g = 71 g. Dla soli CaY<sub>2</sub> mamy 2 &middot; M<sub>Y</sub> = 71 g/mol &rArr; M<sub>Y</sub> = 35,5 g/mol (chlor Cl). Wzór soli X to <strong>CaCl<sub>2</sub></strong>.<br>
                • <strong>Krok 3 (Współczynnik x w hydracie CaCl<sub>2</sub> &middot; xH<sub>2</sub>O):</strong><br>
                M<sub>CaCl2&middot;xH2O</sub> = (83,56% &middot; 219 g/mol) / 100% = <strong>183 g/mol</strong>.<br>
                Masa wody w 1 molu tego hydratu: m<sub>H2O</sub> = 183 g &minus; 111 g = 72 g &nbsp;&rArr;&nbsp; x = 72 g / 18 g &middot; mol<sup>&minus;1</sup> = <strong>4 mole H<sub>2</sub>O</strong> (wzór: <strong>CaCl<sub>2</sub> &middot; 4H<sub>2</sub>O</strong>).
            </div>
        </div>

        <!-- SEKCJA 8 -->
        <div class="note-section">
            <h3>8. Wydajność Reakcji Chemicznej (W) i Procesy Wieloetapowe</h3>
            <p>W warunkach laboratoryjnych oraz w procesach przemysłowych ilość otrzymanego produktu jest zazwyczaj mniejsza niż ilość wynikająca z teoretycznych wyliczeń stechiometrycznych (ze względu na odwracalność reakcji, reakcje uboczne lub straty podczas wydzielania produktu).</p>
            <p><strong>Wydajność reakcji chemicznej (W)</strong> to stosunek rzeczywiście (praktycznie) otrzymanej ilości produktu (<strong>P<sub>r</sub></strong>) do ilości produktu obliczonej teoretycznie z równania reakcji chemicznej (<strong>P<sub>t</sub></strong>), wyrażony w procentach:</p>
            <div class="chem-eq">
                W = (P<sub>r</sub> / P<sub>t</sub>) &middot; 100%
            </div>
            <ul class="note-list">
                <li>Wielkości P<sub>r</sub> oraz P<sub>t</sub> muszą być wyrażone w tych samych jednostkach: gramach (g), kilogramach (kg), decymetrach sześciennych (dm<sup>3</sup>) lub molach (mol).</li>
                <li>Jeżeli w treści zadania nie podano informacji o wydajności reakcji, przyjmuje się, że przebiega ona z wydajnością <strong>W = 100%</strong>.</li>
                <li>Wydajność reakcji zachodzącej nie może wynosić 0% (oznaczałoby to brak przebiegu reakcji) ani przekraczać 100% (P<sub>r</sub> &le; P<sub>t</sub>).</li>
            </ul>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Kryterium porównawcze</th>
                            <th>Ilość teoretyczna produktu (P<sub>t</sub>)</th>
                            <th>Ilość praktyczna / rzeczywista produktu (P<sub>r</sub>)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Źródło wartości</strong></td>
                            <td>Wynika bezpośrednio ze współczynników stechiometrycznych równania reakcji (dla substratu w niedomiarze).</td>
                            <td>Wynika z przeprowadzonego doświadczenia lub procesu technologicznego (jest zmierzona eksperymentalnie).</td>
                        </tr>
                        <tr>
                            <td><strong>Sposób wyznaczenia</strong></td>
                            <td>Wyliczana matematycznie (z proporcji lub wzoru) przy założeniu W = 100%.</td>
                            <td>Podana w treści zadania jako realny wynik doświadczenia lub wyliczona z uwzględnieniem W &lt; 100%.</td>
                        </tr>
                        <tr>
                            <td><strong>Charakter wielkości</strong></td>
                            <td>Dla danej porcji substratu i danego równania reakcji jest wartością stałą i powtarzalną.</td>
                            <td>Zależy od warunków prowadzenia reakcji (ciśnienia, temperatury, obecności katalizatora).</td>
                        </tr>
                        <tr>
                            <td><strong>Przykład (2 H<sub>2</sub>S + O<sub>2</sub> &rarr; 2 S + 2 H<sub>2</sub>O dla 44,8 dm<sup>3</sup> H<sub>2</sub>S)</strong></td>
                            <td>Z 2 moli (44,8 dm<sup>3</sup>) H<sub>2</sub>S teoretycznie powstają 2 mole siarki, czyli P<sub>t</sub> = 64 g S.</td>
                            <td>W laboratorium otrzymano P<sub>r</sub> = 48 g S, co oznacza wydajność W = (48 g / 64 g) &middot; 100% = 75%.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="note-alert">
                💡 <strong>Wskazówka praktyczna – w którą stronę mnożyć lub dzielić przez wydajność?</strong>
                <ol class="note-list">
                    <li><strong>Szukasz ilości produktu (P<sub>r</sub>) z podanej ilości substratu:</strong> Najpierw wylicz teoretyczną ilość produktu (P<sub>t</sub>), a następnie <strong>pomnóż ją przez wydajność</strong>: P<sub>r</sub> = P<sub>t</sub> &middot; (W / 100%) (produktu powstaje mniej niż w teorii).</li>
                    <li><strong>Szukasz ilości substratu potrzebnej do uzyskania narzuconej ilości produktu (P<sub>r</sub>):</strong> Ponieważ proces zachodzi ze stratami (W &lt; 100%), musisz użyć <strong>więcej substratu</strong> niż w teorii (np. przy W = 50%, aby wyprodukować 10 ton nawozu NH<sub>4</sub>NO<sub>3</sub>, trzeba zużyć substraty odpowiadające teoretycznie 20 tonom produktu). Wówczas ilość teoretyczną substratu <strong>dzielisz przez ułamek wydajności</strong> (W / 100%).</li>
                </ol>
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 13 (Obliczanie wydajności procesu przemysłowego – Utlenianie SO<sub>2</sub>):</strong><br>
                <em>W fabryce chemicznej utleniono 20 kg tlenku siarki(IV) w obecności katalizatora platynowego i otrzymano 22,5 kg tlenku siarki(VI). Oblicz wydajność procentową reakcji chemicznej.</em><br>
                • <strong>Krok 1 (Równanie reakcji i masy molowe):</strong> 2 SO<sub>2</sub> + O<sub>2</sub> &rarr; 2 SO<sub>3</sub><br>
                M<sub>SO2</sub> = 64 g/mol (2 mole = 128 g); &nbsp;M<sub>SO3</sub> = 80 g/mol (2 mole = 160 g).<br>
                • <strong>Krok 2 (Teoretyczna masa produktu P<sub>t</sub> przy W = 100%):</strong><br>
                P<sub>t</sub> = (20 kg &middot; 160 g) / 128 g = <strong>25 kg SO<sub>3</sub></strong>.<br>
                • <strong>Krok 3 (Wydajność reakcji W):</strong> Otrzymano P<sub>r</sub> = 22,5 kg SO<sub>3</sub>:<br>
                W = (22,5 kg / 25 kg) &middot; 100% = <strong>90%</strong>.
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 14 (Zadanie łączone: Niedomiar + Wydajność + Bilans mieszaniny poreakcyjnej):</strong><br>
                <em>Zmieszano 7 moli azotu z 15 molami wodoru i przeprowadzono reakcję syntezy, otrzymując 6 moli amoniaku. Oblicz wydajność reakcji oraz liczbę moli każdego ze składników w mieszaninie poreakcyjnej.</em><br>
                • <strong>Krok 1 (Równanie reakcji i ustalenie niedomiaru):</strong> N<sub>2</sub> + 3 H<sub>2</sub> &rarr; 2 NH<sub>3</sub> (stosunek 1 : 3 : 2).<br>
                Do przereagowania 15 moli H<sub>2</sub> potrzeba 15 : 3 = 5 moli N<sub>2</sub>. Dysponujemy 7 molami N<sub>2</sub>, więc azot jest w <strong>nadmiarze</strong> (7 &minus; 5 = 2 mole N<sub>2</sub> nadmiaru), a wodór (15 moli) w <strong>niedomiarze</strong>. Przy W = 100% z 5 moli N<sub>2</sub> i 15 moli H<sub>2</sub> powstałoby teoretycznie P<sub>t</sub> = <strong>10 moli NH<sub>3</sub></strong>.<br>
                • <strong>Krok 2 (Obliczenie wydajności):</strong> Otrzymano P<sub>r</sub> = 6 moli NH<sub>3</sub>, zatem:<br>
                W = (6 mol / 10 mol) &middot; 100% = <strong>60%</strong>.<br>
                • <strong>Krok 3 (Skład mieszaniny poreakcyjnej):</strong> Skoro W = 60%, przereagowało 60% ze stechiometrycznych porcji substratów:<br>
                – Przereagowało azotu: 5 mol &middot; 60% = 3 mole N<sub>2</sub> &nbsp;&rArr;&nbsp; pozostało w naczyniu: 7 mol &minus; 3 mol = <strong>4 mole N<sub>2</sub></strong>.<br>
                – Przereagowało wodoru: 15 mol &middot; 60% = 9 moli H<sub>2</sub> &nbsp;&rArr;&nbsp; pozostało w naczyniu: 15 mol &minus; 9 mol = <strong>6 moli H<sub>2</sub></strong>.<br>
                • <strong>Odpowiedź:</strong> Wydajność wynosi <strong>60%</strong>, a mieszanina poreakcyjna zawiera <strong>6 moli NH<sub>3</sub>, 4 mole N<sub>2</sub> oraz 6 moli H<sub>2</sub></strong>.
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 15 (Proces wieloetapowy z wydajnościami cząstkowymi – Metoda Ostwalda produkcji HNO<sub>3</sub>):</strong><br>
                <em>Przemysłowa produkcja kwasu azotowego(V) metodą Ostwalda przebiega według trzech równań:<br>
                Etap I: 4 NH<sub>3(g)</sub> + 5 O<sub>2(g)</sub> &rarr; 4 NO<sub>(g)</sub> + 6 H<sub>2</sub>O<sub>(g)</sub> &nbsp;(W<sub>1</sub> = 60%)<br>
                Etap II: 2 NO<sub>(g)</sub> + O<sub>2(g)</sub> &rarr; 2 NO<sub>2(g)</sub> &nbsp;(W<sub>2</sub> = 75%)<br>
                Etap III: 2 NO<sub>2(g)</sub> + H<sub>2</sub>O<sub>(c)</sub> &rarr; HNO<sub>3(aq)</sub> + HNO<sub>2(aq)</sub> &nbsp;(W<sub>3</sub> = 60%)<br>
                Oblicz objętość amoniaku (w warunkach normalnych) potrzebną do wytworzenia 100 kg 65% roztworu HNO<sub>3</sub>.</em><br>
                • <strong>Krok 1 (Masa i liczba moli czystego HNO<sub>3</sub>, M = 63 g/mol):</strong><br>
                m<sub>HNO3</sub> = (65% &middot; 100 kg) / 100% = 65 kg = 65 000 g &nbsp;&rArr;&nbsp; n<sub>HNO3</sub> = 65 000 g / 63 g &middot; mol<sup>&minus;1</sup> = <strong>1,031 &middot; 10<sup>3</sup> mol</strong>.<br>
                • <strong>Krok 2 (Etap III, W<sub>3</sub> = 60%):</strong> Z 2 moli NO<sub>2</sub> przy W<sub>3</sub> = 60% powstaje 1 &middot; 0,6 = 0,6 mola HNO<sub>3</sub>. Aby otrzymać 1,031 &middot; 10<sup>3</sup> mola HNO<sub>3</sub>, potrzeba:<br>
                n<sub>NO2</sub> = (2 &middot; 1,031 &middot; 10<sup>3</sup> mol) / 0,6 = <strong>3,437 &middot; 10<sup>3</sup> mol NO<sub>2</sub></strong>.<br>
                • <strong>Krok 3 (Etap II, W<sub>2</sub> = 75%):</strong> Z 2 moli NO przy W<sub>2</sub> = 75% powstaje 2 &middot; 0,75 = 1,5 mola NO<sub>2</sub>. Aby otrzymać 3,437 &middot; 10<sup>3</sup> mola NO<sub>2</sub>, potrzeba:<br>
                n<sub>NO</sub> = (2 &middot; 3,437 &middot; 10<sup>3</sup> mol) / 1,5 = <strong>4,583 &middot; 10<sup>3</sup> mol NO</strong>.<br>
                • <strong>Krok 4 (Etap I, W<sub>1</sub> = 60%):</strong> Z 4 moli NH<sub>3</sub> przy W<sub>1</sub> = 60% powstają 4 &middot; 0,6 = 2,4 mola NO. Aby otrzymać 4,583 &middot; 10<sup>3</sup> mola NO, potrzeba:<br>
                n<sub>NH3</sub> = (4 &middot; 4,583 &middot; 10<sup>3</sup> mol) / 2,4 = <strong>7,638 &middot; 10<sup>3</sup> mol NH<sub>3</sub></strong>.<br>
                • <strong>Krok 5 (Objętość NH<sub>3</sub> w warunkach normalnych):</strong><br>
                V<sub>NH3</sub> = 7,638 &middot; 10<sup>3</sup> mol &middot; 22,4 dm<sup>3</sup> &middot; mol<sup>&minus;1</sup> = 171,1 &middot; 10<sup>3</sup> dm<sup>3</sup> = <strong>171,1 m<sup>3</sup></strong>.
            </div>
        </div>

        <!-- SEKCJA 9 -->
        <div class="note-section">
            <h3>9. Ustalanie Wzoru Elementarnego (Empirycznego) i Rzeczywistego – Podsumowanie i Przykłady</h3>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Rodzaj wzoru</th>
                            <th>Definicja i znaczenie</th>
                            <th>Wymagane dane wejściowe</th>
                            <th>Przykłady porównawcze</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Wzór elementarny (empiryczny)</strong></td>
                            <td>Określa ilościowy stosunek atomów pierwiastków w cząsteczce wyrażony za pomocą najmniejszych liczb całkowitych.</td>
                            <td>Wyłącznie skład procentowy (procent masowy), stosunek masowy pierwiastków lub stosunek produktów spalania (bez masy molowej związku).</td>
                            <td>• <strong>CH</strong> (dla benzenu i acetylenu)<br>• <strong>NO<sub>2</sub></strong> (dla NO<sub>2</sub> i N<sub>2</sub>O<sub>4</sub>)<br>• <strong>SO<sub>3</sub></strong></td>
                        </tr>
                        <tr>
                            <td><strong>Wzór rzeczywisty (sumaryczny)</strong></td>
                            <td>Określa rzeczywistą liczbę atomów każdego pierwiastka w cząsteczce; jest równy wzorowi empirycznemu lub stanowi jego całkowitą wielokrotność: (wzór empiryczny)<sub>n</sub>.</td>
                            <td>Skład ilościowy (np. procent masowy) <strong>oraz</strong> masa cząsteczkowa/molowa (lub gęstość gazu pozwalająca wyliczyć masę molową).</td>
                            <td>• <strong>C<sub>6</sub>H<sub>6</sub></strong> (benzen, n = 6)<br>• <strong>N<sub>2</sub>O<sub>4</sub></strong> (M = 92 g/mol, n = 2)<br>• <strong>NO<sub>2</sub></strong> (M = 46 g/mol, n = 1)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 16 (Ustalanie wzoru elementarnego ze składu procentowego):</strong><br>
                <em>Napisz wzór elementarny związku chemicznego zawierającego 40% masowych siarki i 60% masowych tlenu.</em><br>
                • <strong>Krok 1:</strong> Przyjmujemy wzór ogólny S<sub>x</sub>O<sub>y</sub>, gdzie m<sub>S</sub> = 32 u, m<sub>O</sub> = 16 u.<br>
                • <strong>Krok 2:</strong> (32 u &middot; x) / (16 u &middot; y) = 40% / 60% &nbsp;&rArr;&nbsp; 2x / y = 2 / 3 &nbsp;&rArr;&nbsp; x / y = 1 / 3 &nbsp;&rArr;&nbsp; x = 1, y = 3.<br>
                • <strong>Odpowiedź:</strong> Wzór elementarny związku to <strong>SO<sub>3</sub></strong>.
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 17 (Ustalanie wzoru rzeczywistego dwoma sposobami – dla M = 92 u):</strong><br>
                <em>Napisz wzór rzeczywisty związku chemicznego zawierającego 30,43% masowych azotu i 69,57% masowych tlenu, jeżeli jego masa cząsteczkowa wynosi 92 u.</em><br>
                • <strong>Sposób I (Metoda proporcji):</strong><br>
                1. Masa azotu w cząsteczce (92 u): m<sub>N</sub> = (30,43% &middot; 92 u) / 100% = 28 u.<br>
                2. Masa tlenu w cząsteczce: m<sub>O</sub> = 92 u &minus; 28 u = 64 u.<br>
                3. Liczba atomów: x = 28 u / 14 u = <strong>2 atomy N</strong>; &nbsp;y = 64 u / 16 u = <strong>4 atomy O</strong>.<br>
                • <strong>Sposób II (Metoda układu równań):</strong><br>
                { (14x) / (16y) = 30,43 / 69,57 &nbsp;&rArr;&nbsp; x / y = 1 / 2 &nbsp;&rArr;&nbsp; y = 2x<br>
                { 14x + 16y = 92 &nbsp;&rArr;&nbsp; 14x + 32x = 92 &nbsp;&rArr;&nbsp; 46x = 92 &nbsp;&rArr;&nbsp; x = 2, y = 4.<br>
                • <strong>Odpowiedź:</strong> Wzór rzeczywisty związku to <strong>N<sub>2</sub>O<sub>4</sub></strong>. (Uwaga: Związki N<sub>2</sub>O<sub>4</sub> z Przykładu 17 oraz NO<sub>2</sub> z Przykładu 4 mają identyczny skład procentowy i ten sam wzór empiryczny NO<sub>2</sub>, a rozróżnia je wyłącznie masa molowa!).
            </div>
        </div>

        <!-- SEKCJA 10 -->
        <div class="note-section">
            <h3>10. Warsztat Maturzysty: Konstruowanie Proporcji, Zaokrąglanie i Kompendium Wzorów</h3>

            <h4>A. Budowa proporcji bez błędów rachunkowych</h4>
            <p>Każda proporcja stechiometryczna składa się z czterech ściśle powiązanych elementów:</p>
            <div class="chem-eq">
                Element I (z równania reakcji) &nbsp;&mdash;&mdash; odpowiada &mdash;&mdash;&nbsp; Element II (z równania reakcji)<br>
                Element III (z danych zadania) &nbsp;&mdash;&mdash; odpowiada &mdash;&mdash;&nbsp; Element IV (x – szukana)
            </div>
            <ul class="note-list">
                <li><strong>Warunek zgodności w poziomie:</strong> Element I i Element II muszą wynikać z uzgodnionego równania reakcji chemicznej (np. dla reakcji 2 K + 2 H<sub>2</sub>O &rarr; 2 KOH + H<sub>2</sub>&uarr;: 2 mole K odpowiadają 22,4 dm<sup>3</sup> H<sub>2</sub>; 36 g H<sub>2</sub>O odpowiada 112 g KOH; 78 g K odpowiada 2 molom KOH).</li>
                <li><strong>Warunek zgodności jednostek w pionie:</strong> Element III musi mieć dokładnie taką samą jednostkę i dotyczyć tej samej substancji co Element I, natomiast szukana <em>x</em> (Element IV) ma zawsze taką samą jednostkę i dotyczy tej samej substancji co Element II.</li>
            </ul>

            <h4>B. Maturalne zasady zaokrąglania wyników</h4>
            <ol class="note-list">
                <li><strong>Gdy polecenie narzuca dokładność wyniku końcowego (np. do 1 lub 2 miejsc po przecinku):</strong>
                    <ul class="note-list">
                        <li>Wszystkie obliczenia pośrednie wykonuj z większą dokładnością (zachowując co najmniej o 1–2 cyfry znaczące więcej, np. 3–4 miejsca po przecinku), aby uniknąć kumulacji błędu zaokrągleń.</li>
                        <li>Zaokrąglenia do wskazanej w poleceniu liczby miejsc dokonaj dopiero w wyniku ostatecznym według reguł matematycznych:
                            <br>– pierwsza odrzucana cyfra to <strong>0, 1, 2, 3, 4</strong> &rarr; ostatnia zachowywana cyfra pozostaje bez zmian (np. 0,133 &rarr; 0,13),
                            <br>– pierwsza odrzucana cyfra to <strong>5, 6, 7, 8, 9</strong> &rarr; ostatnią zachowywaną cyfrę zwiększamy o 1 (np. 0,185 &rarr; 0,19).
                        </li>
                    </ul>
                </li>
                <li><strong>Gdy polecenie nie określa dokładności zaokrąglenia:</strong> W obliczeniach z objętością molową gazów i stałymi tablicowymi stosuje się zazwyczaj dokładność do <strong>3 cyfr znaczących</strong> (np. V<sub>m</sub> = 22,4 dm<sup>3</sup>, R = 83,1 (hPa &middot; dm<sup>3</sup>)/(mol &middot; K)).</li>
            </ol>

            <h4>C. Zbiorcza tabela wszystkich wzorów i stałych z działu Stechiometria</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Szukana wielkość / Prawo</th>
                            <th>Wzór matematyczny</th>
                            <th>Jednostki i stałe</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Przelicznik unit – gram</strong></td>
                            <td>1 u = 1,66 &middot; 10<sup>&minus;24</sup> g &nbsp;&hArr;&nbsp; 1 g = 6,02 &middot; 10<sup>23</sup> u</td>
                            <td>[u], [g]</td>
                        </tr>
                        <tr>
                            <td><strong>Średnia masa atomowa (m<sub>el</sub>)</strong></td>
                            <td>m<sub>el</sub> = ( %m<sub>1</sub> &middot; A<sub>1</sub> + %m<sub>2</sub> &middot; A<sub>2</sub> + &hellip; + %m<sub>n</sub> &middot; A<sub>n</sub> ) / 100%</td>
                            <td>[u]</td>
                        </tr>
                        <tr>
                            <td><strong>Liczba moli (n)</strong></td>
                            <td>n = m / M = N / N<sub>A</sub> = V<sub>war.norm.</sub> / (22,4 dm<sup>3</sup> &middot; mol<sup>&minus;1</sup>) = (d &middot; V) / M = (p &middot; V) / (R &middot; T)</td>
                            <td>[mol], N<sub>A</sub> = 6,02 &middot; 10<sup>23</sup> mol<sup>&minus;1</sup></td>
                        </tr>
                        <tr>
                            <td><strong>Liczba cząstek (N)</strong></td>
                            <td>N = n &middot; N<sub>A</sub> = (m / M) &middot; N<sub>A</sub></td>
                            <td>wielkość bezwymiarowa (atomów, cząsteczek, jonów)</td>
                        </tr>
                        <tr>
                            <td><strong>Masa molowa (M)</strong></td>
                            <td>M = m / n = (m &middot; N<sub>A</sub>) / N = d &middot; V<sub>m</sub></td>
                            <td>[g/mol = g &middot; mol<sup>&minus;1</sup>]</td>
                        </tr>
                        <tr>
                            <td><strong>Gęstość bezwzględna (d)</strong></td>
                            <td>d = m / V &nbsp;(dla gazu w war. norm.: d = M / 22,4 dm<sup>3</sup> &middot; mol<sup>&minus;1</sup>)</td>
                            <td>gazy: [g/dm<sup>3</sup>]; ciecze i ciała stałe: [g/cm<sup>3</sup>]</td>
                        </tr>
                        <tr>
                            <td><strong>Gęstość względna dwóch gazów</strong></td>
                            <td>d<sub>1</sub> / d<sub>2</sub> = M<sub>1</sub> / M<sub>2</sub> &nbsp;(w tych samych warunkach p i T)</td>
                            <td>wielkość bezwymiarowa</td>
                        </tr>
                        <tr>
                            <td><strong>Równanie stanu gazu (Clapeyrona)</strong></td>
                            <td>p &middot; V = n &middot; R &middot; T &nbsp;&hArr;&nbsp; p &middot; V = (m / M) &middot; R &middot; T</td>
                            <td>p [hPa], V [dm<sup>3</sup>], T [K], R = 83,1 (hPa &middot; dm<sup>3</sup>)/(mol &middot; K)</td>
                        </tr>
                        <tr>
                            <td><strong>Wydajność reakcji (W)</strong></td>
                            <td>W = (P<sub>r</sub> / P<sub>t</sub>) &middot; 100%</td>
                            <td>[%], gdzie P<sub>r</sub>, P<sub>t</sub> w [g], [dm<sup>3</sup>] lub [mol]</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `,

    notatkiActive: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">🧠 ACTIVE RECALL: ATOMY, CZĄSTECZKI I STECHIOMETRIA CHEMICZNA</h2>
        <p style="text-align: center; color: #94a3b8; font-size: 13px; margin-bottom: 20px;">
            💡 <em>Klikaj na ciemne pola, aby odkryć ukryte wzory, stałe i wartości, oraz rozwijaj pytania, by sprawdzić swoją wiedzę!</em>
        </p>

        <!-- SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Jednostki Masy, Mol i Stała Avogadra</h3>
            <p>Jeden unit (1 u) stanowi dokładnie <span class="recall-blank" onclick="toggleRecall(this)">1/12 masy atomu izotopu węgla <sup>12</sup>C</span> i wyrażony w gramach wynosi <span class="recall-blank" onclick="toggleRecall(this)">1,66 &middot; 10<sup>&minus;24</sup> g</span>.</p>
            <p>W 1 gramie materii mieści się dokładnie <span class="recall-blank" onclick="toggleRecall(this)">6,02 &middot; 10<sup>23</sup> u</span>.</p>
            <p>Stała Avogadra (N<sub>A</sub>) ma wartość i jednostkę: <span class="recall-blank" onclick="toggleRecall(this)">6,02 &middot; 10<sup>23</sup> mol<sup>&minus;1</sup></span>, natomiast Liczba Avogadra jest wielkością <span class="recall-blank" onclick="toggleRecall(this)">bezwymiarową (bez jednostki)</span>.</p>

            <details class="recall-details">
                <summary><span>Ile łącznie jonów znajduje się w 1 molu NaCl, a ile łącznie atomów w 1 molu H<sub>2</sub>S?</span></summary>
                <p>
                    • W 1 molu NaCl znajduje się 6,02 &middot; 10<sup>23</sup> kationów Na<sup>+</sup> i 6,02 &middot; 10<sup>23</sup> anionów Cl<sup>&minus;</sup>, czyli łącznie <strong>12,04 &middot; 10<sup>23</sup> jonów</strong>.<br>
                    • W 1 molu H<sub>2</sub>S znajduje się 12,04 &middot; 10<sup>23</sup> atomów H i 6,02 &middot; 10<sup>23</sup> atomów S, czyli łącznie <strong>18,06 &middot; 10<sup>23</sup> atomów</strong>.
                </p>
            </details>

            <details class="recall-details">
                <summary><span>Podaj wzór na średnią masę atomową pierwiastka (m<sub>el</sub>) na podstawie składu izotopowego.</span></summary>
                <div class="chem-eq">
                    m<sub>el</sub> = ( %m<sub>1</sub> &middot; A<sub>1</sub> + %m<sub>2</sub> &middot; A<sub>2</sub> + &hellip; + %m<sub>n</sub> &middot; A<sub>n</sub> ) / 100%
                </div>
            </details>

            <details class="recall-details">
                <summary><span>Czy współczynnik stechiometryczny w równaniu reakcji (np. 4 P + 5 O<sub>2</sub> &rarr; P<sub>4</sub>O<sub>10</sub>) zmienia masę molową fosforu?</span></summary>
                <p><strong>Nie!</strong> Masa molowa fosforu wynosi zawsze M<sub>P</sub> = 31 g &middot; mol<sup>&minus;1</sup>, natomiast 124 g to masa 4 moli fosforu biorących udział w reakcji.</p>
            </details>
        </div>

        <!-- SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Prawa Gazowe, Warunki Normalne i Równanie Clapeyrona</h3>
            <p>Warunki normalne to temperatura T = <span class="recall-blank" onclick="toggleRecall(this)">273 K (0&deg;C)</span> oraz ciśnienie p = <span class="recall-blank" onclick="toggleRecall(this)">1013,25 hPa</span>.</p>
            <p>Warunki standardowe to temperatura T = <span class="recall-blank" onclick="toggleRecall(this)">273 K (0&deg;C)</span> oraz ciśnienie p = <span class="recall-blank" onclick="toggleRecall(this)">1000 hPa</span>.</p>
            <p>Objętość molowa dowolnego gazu w warunkach normalnych wynosi V<sub>m</sub> = <span class="recall-blank" onclick="toggleRecall(this)">22,4 dm<sup>3</sup> &middot; mol<sup>&minus;1</sup></span>.</p>

            <div class="chem-eq">
                Równanie Clapeyrona: &nbsp; p &middot; V = <span class="recall-blank" onclick="toggleRecall(this)">n &middot; R &middot; T</span> = <span class="recall-blank" onclick="toggleRecall(this)">(m / M) &middot; R &middot; T</span>
            </div>

            <p>Wartość i jednostka uniwersalnej stałej gazowej R: <span class="recall-blank" onclick="toggleRecall(this)">R = 83,1 (hPa &middot; dm<sup>3</sup>) / (mol &middot; K)</span>.</p>

            <details class="recall-details">
                <summary>Jak obliczyć gęstość gazu w warunkach normalnych oraz stosunek gęstości dwóch gazów w tych samych warunkach p i T?</summary>
                <p>
                    • Gęstość gazu w warunkach normalnych: <strong>d = M / 22,4 dm<sup>3</sup> &middot; mol<sup>&minus;1</sup></strong> [g/dm<sup>3</sup>].<br>
                    • Stosunek gęstości dwóch gazów (gęstość względna): <strong>d<sub>1</sub> / d<sub>2</sub> = M<sub>1</sub> / M<sub>2</sub></strong>.
                </p>
            </details>

            <details class="recall-details">
                <summary>Wymień 3 cechy cząsteczek gazu doskonałego.</summary>
                <ol class="note-list">
                    <li>Cząsteczki są punktami materialnymi (nie mają własnej objętości).</li>
                    <li>Nie występują między nimi żadne siły oddziaływania międzycząsteczkowego.</li>
                    <li>Zderzenia między cząsteczkami są doskonale sprężyste.</li>
                </ol>
            </details>
        </div>

        <!-- SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Wzór Empiryczny i Rzeczywisty oraz Prawa Chemiczne</h3>
            <p>Ze składu procentowego związku (bez znajomości jego masy molowej) można wyznaczyć wyłącznie wzór <span class="recall-blank" onclick="toggleRecall(this)">elementarny (empiryczny)</span>.</p>
            <p>Stosunek indeksów we wzorze A<sub>x</sub>B<sub>y</sub> wyznaczamy ze wzoru: x : y = <span class="recall-blank" onclick="toggleRecall(this)">(%A / M<sub>A</sub>) : (%B / M<sub>B</sub>)</span>.</p>

            <details class="recall-details">
                <summary><span>Jaki jest stosunek objętościowy reagentów gazowych w reakcji: CH<sub>4(g)</sub> + O<sub>2(g)</sub> &rarr; C<sub>(s)</sub> + 2 H<sub>2</sub>O<sub>(g)</sub>?</span></summary>
                <p>Zgodnie z prawem Gay-Lussaca uwzględniamy <strong>tylko gazy</strong> (pomijamy stały węgiel C<sub>(s)</sub>). Stosunek objętościowy V<sub>CH4</sub> : V<sub>O2</sub> : V<sub>H2O(g)</sub> wynosi <strong>1 : 1 : 2</strong>.</p>
            </details>
        </div>

        <!-- SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Stosunek Niestechiometryczny, Wydajność i Mieszaniny</h3>
            <p>Ilość powstającego produktu obliczamy zawsze na podstawie substratu znajdującego się w <span class="recall-blank" onclick="toggleRecall(this)">niedomiarze (substratu ograniczającego)</span>.</p>
            <p>Wzór na wydajność reakcji chemicznej: W = <span class="recall-blank" onclick="toggleRecall(this)">(P<sub>r</sub> / P<sub>t</sub>) &middot; 100%</span>.</p>

            <details class="recall-details">
                <summary>Kiedy w zadaniach z wydajnością mnożymy przez (W / 100%), a kiedy dzielimy przez (W / 100%)?</summary>
                <p>
                    • <strong>Mnożymy przez (W / 100%)</strong>, gdy znamy ilość substratu i szukamy rzeczywistej ilości produktu (P<sub>r</sub> = P<sub>t</sub> &middot; W/100%).<br>
                    • <strong>Dzielimy przez (W / 100%)</strong>, gdy mamy narzuconą ilość produktu końcowego i szukamy ilości substratu potrzebnej do jego wytworzenia (ponieważ ze względu na straty musimy wziąć więcej substratu niż w teorii).
                </p>
            </details>

            <details class="recall-details">
                <summary><span>Który węglan ulegnie rozkładowi podczas prażenia mieszaniny MgCO<sub>3</sub> (T<sub>rozkł.</sub> = 540&deg;C) i CaCO<sub>3</sub> (T<sub>rozkł.</sub> = 900&deg;C) w temperaturze 600&deg;C?</span></summary>
                <p>Wyłącznie <strong>MgCO<sub>3</sub></strong> (ponieważ 600&deg;C &gt; 540&deg;C). Węglan wapnia CaCO<sub>3</sub> nie ulegnie rozkładowi (600&deg;C &lt; 900&deg;C). Ubytek masy próbki będzie równy masie CO<sub>2</sub> wydzielonego wyłącznie z rozkładu MgCO<sub>3</sub>.</p>
            </details>
        </div>
    </div>
    `,

    zadania: "<h3>Zadania</h3><br>Miejsce na zadania obliczeniowe i reakcje...",

    fiszki: [
        {
            front: "Czym różni się pojęcie „cząstki” od „cząsteczki”?",
            back: "Cząstka (obiekt elementarny) to pojęcie szersze – obejmuje atomy, cząsteczki, jony, elektrony, fotony lub określone grupy drobin. Cząsteczka to obojętne elektrycznie połączenie atomów wiązaniami kowalencyjnymi."
        },
        {
            front: "Co oznacza zapis „1 mol substancji”, jeśli po słowie „mol” nie podano doprecyzowania (np. mol atomów, mol jonów)?",
            back: "W domyśle przyjmuje się zawsze, że mowa o 1 molu cząsteczek."
        },
        {
            front: "Podaj definicję atomowej jednostki masy (1 u) oraz jej wartość w gramach.",
            back: "1 u to 1/12 masy atomu izotopu węgla <sup>12</sup>C. W gramach: 1 u = 1,66 &middot; 10<sup>&minus;24</sup> g (natomiast 1 g = 6,02 &middot; 10<sup>23</sup> u)."
        },
        {
            front: "Podaj wzór na średnią masę atomową pierwiastka (m<sub>el</sub>) uwzględniającą jego skład izotopowy.",
            back: "m<sub>el</sub> = ( %m<sub>1</sub> &middot; A<sub>1</sub> + %m<sub>2</sub> &middot; A<sub>2</sub> + &hellip; + %m<sub>n</sub> &middot; A<sub>n</sub> ) / 100%, gdzie A<sub>n</sub> to masy atomowe izotopów w unitach (u), a %m<sub>n</sub> to ich zawartości procentowe."
        },
        {
            front: "Czym różni się stała Avogadra (N<sub>A</sub>) od liczby Avogadra?",
            back: "Obie mają wartość 6,02 &middot; 10<sup>23</sup>, ale stała Avogadra posiada jednostkę (6,02 &middot; 10<sup>23</sup> mol<sup>&minus;1</sup>), natomiast liczba Avogadra jest wielkością bezwymiarową (bez jednostki)."
        },
        {
            front: "Ile cząstek znajduje się w 1 mikromolu (&mu;mol), 1 milimolu (mmol) oraz 1 kilomolu (kmol)?",
            back: "• 1 &mu;mol = 6,02 &middot; 10<sup>17</sup> cząstek<br>• 1 mmol = 6,02 &middot; 10<sup>20</sup> cząstek<br>• 1 kmol = 6,02 &middot; 10<sup>26</sup> cząstek"
        },
        {
            front: "Ile łącznie jonów znajduje się w 1 molu chlorku sodu (NaCl)?",
            back: "12,04 &middot; 10<sup>23</sup> jonów (czyli 2 mole jonów: 6,02 &middot; 10<sup>23</sup> kationów Na<sup>+</sup> oraz 6,02 &middot; 10<sup>23</sup> anionów Cl<sup>&minus;</sup>)."
        },
        {
            front: "Ile łącznie atomów znajduje się w 1 molu cząsteczek siarkowodoru (H<sub>2</sub>S)?",
            back: "18,06 &middot; 10<sup>23</sup> atomów (3 mole atomów: 12,04 &middot; 10<sup>23</sup> atomów wodoru i 6,02 &middot; 10<sup>23</sup> atomów siarki)."
        },
        {
            front: "Co to jest masa molowa (M) i w jakich jednostkach się ją wyraża?",
            back: "Masa molowa (M) to masa jednego mola substancji wyrażona w gramach. Jej jednostką jest g/mol (g &middot; mol<sup>&minus;1</sup>), a liczbowo jest równa masie atomowej/cząsteczkowej w unitach (u)."
        },
        {
            front: "Czy w reakcji 4 P + 5 O<sub>2</sub> &rarr; P<sub>4</sub>O<sub>10</sub> masa molowa fosforu wynosi 31 g/mol czy 124 g/mol?",
            back: "Masa molowa fosforu wynosi 31 g/mol! Masa molowa nie zależy od współczynnika stechiometrycznego w równaniu reakcji (124 g to masa 4 moli fosforu)."
        },
        {
            front: "ZADANIE: Ile atomów żelaza (M<sub>Fe</sub> = 56 g/mol) znajduje się w sztabce o masie 1 kg?",
            back: "Dane: m = 1000 g, M = 56 g/mol.<br>N = (m / M) &middot; N<sub>A</sub> = (1000 / 56) &middot; 6,02 &middot; 10<sup>23</sup> = <strong>1,075 &middot; 10<sup>25</sup> atomów Fe</strong>."
        },
        {
            front: "ZADANIE: Oblicz masę (w gramach) 3 atomów siarki (M<sub>S</sub> = 32 g/mol).",
            back: "m = (N &middot; M) / N<sub>A</sub> = (3 &middot; 32 g/mol) / (6,02 &middot; 10<sup>23</sup> mol<sup>&minus;1</sup>) = <strong>1,59 &middot; 10<sup>&minus;22</sup> g</strong>."
        },
        {
            front: "Jak brzmi prawo Avogadra?",
            back: "Równe objętości różnych gazów, znajdujących się w tych samych warunkach temperatury i ciśnienia, zawierają taką samą liczbę cząsteczek (oraz moli)."
        },
        {
            front: "Podaj dokładne parametry temperatury i ciśnienia dla warunków normalnych oraz warunków standardowych.",
            back: "• Warunki normalne: T = 273,15 K (w obliczeniach 273 K = 0&deg;C), p = 1013,25 hPa.<br>• Warunki standardowe: T = 273 K (0&deg;C), p = 1000 hPa."
        },
        {
            front: "Ile wynosi objętość molowa gazu (V<sub>m</sub>) w warunkach normalnych i jakich substancji dotyczy?",
            back: "Wynosi 22,4 dm<sup>3</sup> &middot; mol<sup>&minus;1</sup> (dokładnie 22,41 dm<sup>3</sup> &middot; mol<sup>&minus;1</sup>) i dotyczy wyłącznie substancji w stanie gazowym w warunkach normalnych (nie wolno jej stosować dla cieczy i ciał stałych!)."
        },
        {
            front: "W jakich jednostkach wyraża się najczęściej gęstość bezwzględną (d = m/V) dla gazów, a w jakich dla cieczy i ciał stałych?",
            back: "Dla gazów w g/dm<sup>3</sup> (lub kg/m<sup>3</sup>), natomiast dla cieczy i ciał stałych w g/cm<sup>3</sup> (lub kg/dm<sup>3</sup>)."
        },
        {
            front: "Podaj wzór na gęstość gazu w warunkach normalnych na podstawie jego masy molowej (M).",
            back: "d = M / V<sub>m</sub> = M / (22,4 dm<sup>3</sup> &middot; mol<sup>&minus;1</sup>)."
        },
        {
            front: "Jak wyraża się stosunek gęstości dwóch gazów (d<sub>1</sub> / d<sub>2</sub>) znajdujących się w tych samych warunkach ciśnienia i temperatury?",
            back: "Jest równy stosunkowi ich mas molowych: d<sub>1</sub> / d<sub>2</sub> = M<sub>1</sub> / M<sub>2</sub>."
        },
        {
            front: "Czym różni się model gazu doskonałego od gazu rzeczywistego?",
            back: "W gazie doskonałym cząsteczki są punktami materialnymi bez własnej objętości, nie oddziałują ze sobą, a ich zderzenia są doskonale sprężyste. W gazie rzeczywistym cząsteczki mają własną objętość i działają między nimi siły przyciągania oraz odpychania."
        },
        {
            front: "Zapisz równanie stanu gazu doskonałego (równanie Clapeyrona) w obu postaciach (z liczbą moli oraz z masą) i podaj wartość stałej R.",
            back: "p &middot; V = n &middot; R &middot; T &nbsp;lub&nbsp; p &middot; V = (m / M) &middot; R &middot; T.<br>Stała gazowa: R = 83,1 (hPa &middot; dm<sup>3</sup>) / (mol &middot; K), gdzie p [hPa], V [dm<sup>3</sup>], T [K]."
        },
        {
            front: "Jaki jest najczęstszy błąd rachunkowy popełniany na maturze podczas korzystania z równania Clapeyrona?",
            back: "Podstawienie temperatury w stopniach Celsjusza zamiast w kelwinach! Zawsze należy przeliczyć temperaturę: T [K] = t [&deg;C] + 273."
        },
        {
            front: "ZADANIE: Oblicz masę CO<sub>2</sub> (M = 44 g/mol), który w temperaturze 291 K i pod ciśnieniem 1010 hPa zajmuje objętość 4,8 dm<sup>3</sup>.",
            back: "Z równania Clapeyrona: m = (p &middot; V &middot; M) / (R &middot; T) = (1010 &middot; 4,8 &middot; 44) / (83,1 &middot; 291) = <strong>8,82 g CO<sub>2</sub></strong>."
        },
        {
            front: "Jak brzmi prawo stałości składu (Prousta)?",
            back: "Stosunek masowy pierwiastków w każdym czystym związku chemicznym jest wielkością stałą i ściśle określoną, niezależnie od sposobu otrzymania lub pochodzenia związku (np. w H<sub>2</sub>O m<sub>H</sub> : m<sub>O</sub> = 1 : 8)."
        },
        {
            front: "Podaj stosunek molowy, masowy oraz udział liczby atomów dla siarczanu(VI) potasu K<sub>2</sub>SO<sub>4</sub> (M<sub>K</sub>=39, M<sub>S</sub>=32, M<sub>O</sub>=16 g/mol).",
            back: "• Stosunek molowy n<sub>K</sub> : n<sub>S</sub> : n<sub>O</sub> = 2 : 1 : 4<br>• Stosunek masowy m<sub>K</sub> : m<sub>S</sub> : m<sub>O</sub> = 78 : 32 : 64 = 2,44 : 1 : 2 (bezwymiarowy!)<br>• Udział atomów: 2/7 K : 1/7 S : 4/7 O"
        },
        {
            front: "Czym różni się wzór elementarny (empiryczny) od wzoru rzeczywistego (sumarycznego)?",
            back: "Wzór empiryczny podaje najprostszy stosunek całkowity atomów w cząsteczce (np. CH, NO<sub>2</sub>), a wzór rzeczywisty podaje dokładną liczbę atomów każdego pierwiastka w cząsteczce (np. C<sub>6</sub>H<sub>6</sub>, N<sub>2</sub>O<sub>4</sub>)."
        },
        {
            front: "Jakie dane są niezbędne, aby ze składu procentowego związku wyznaczyć jego wzór rzeczywisty?",
            back: "Oprócz składu procentowego (lub stosunku masowego) konieczna jest znajomość masy molowej (cząsteczkowej) związku lub wielkości pozwalającej ją obliczyć (np. gęstości gazu)."
        },
        {
            front: "ZADANIE: Związek zawiera 40% masowych siarki (M<sub>S</sub> = 32 g/mol) i 60% masowych tlenu (M<sub>O</sub> = 16 g/mol). Wyznacz jego wzór empiryczny.",
            back: "Dla S<sub>x</sub>O<sub>y</sub>: x : y = (%S / M<sub>S</sub>) : (%O / M<sub>O</sub>) = (40 / 32) : (60 / 16) = 1,25 : 3,75 = 1 : 3. Wzór empiryczny to <strong>SO<sub>3</sub></strong>."
        },
        {
            front: "ZADANIE: Stosunek gęstości pewnego tlenku azotu do gęstości helu (M<sub>He</sub> = 4 g/mol) wynosi 11,5, a zawartość azotu to 30,4%. Ustal wzór rzeczywisty tlenku.",
            back: "1. M<sub>tlenku</sub> = 11,5 &middot; 4 g/mol = 46 g/mol.<br>2. m<sub>N</sub> = 30,4% &middot; 46 g &approx; 14 g (1 mol N); m<sub>O</sub> = 46 &minus; 14 = 32 g (2 mole O).<br>Wzór rzeczywisty: <strong>NO<sub>2</sub></strong>."
        },
        {
            front: "ZADANIE: Tlenek azotu zawiera 30,43% N i 69,57% O, a jego masa cząsteczkowa wynosi 92 u. Jaki jest jego wzór rzeczywisty?",
            back: "m<sub>N</sub> = 0,3043 &middot; 92 u = 28 u &rArr; x = 28 / 14 = 2 atomy N.<br>m<sub>O</sub> = 92 &minus; 28 = 64 u &rArr; y = 64 / 16 = 4 atomy O.<br>Wzór rzeczywisty: <strong>N<sub>2</sub>O<sub>4</sub></strong>."
        },
        {
            front: "Jak brzmi prawo zachowania masy (Łomonosowa-Lavoisiera)?",
            back: "Masa substancji zużytych do reakcji (substratów) jest równa łącznej masie produktów otrzymanych w wyniku tej reakcji (m<sub>substratów</sub> = m<sub>produktów</sub>)."
        },
        {
            front: "W otwartej probówce zmieszano 10 g substratu A i 40 g substratu B. Substraty przereagowały całkowicie, ale jeden z produktów (gaz Y) uleciał. Czy prawo zachowania masy zostało naruszone?",
            back: "Nie! Masa zawartości probówki zmalała o masę wydzielonego gazu Y, ale suma masy produktu pozostałego w probówce i masy gazu Y, który opuścił układ, wynosi nadal dokładnie 50 g."
        },
        {
            front: "Jak brzmi prawo stałości stosunków objętościowych (Gay-Lussaca) i o jakiej pułapce trzeba pamiętać?",
            back: "Objętości reagujących gazów i powstających produktów gazowych (w tych samych warunkach p i T) pozostają w stosunku niewielkich liczb całkowitych równych współczynnikom reakcji. PUŁAPKA: Prawo dotyczy wyłącznie gazów – ciecze i ciała stałe całkowicie pomijamy!"
        },
        {
            front: "Podaj stosunek objętościowy reagentów gazowych w reakcji: Cu<sub>(s)</sub> + 4 HNO<sub>3(aq)</sub> &rarr; Cu(NO<sub>3</sub>)<sub>2(s)</sub> + 2 NO<sub>2(g)</sub> + 2 H<sub>2</sub>O<sub>(g)</sub>.",
            back: "Jedynymi gazami są NO<sub>2(g)</sub> oraz para wodna H<sub>2</sub>O<sub>(g)</sub>. Ich stosunek objętościowy wynosi 2 : 2, czyli <strong>1 : 1</strong>."
        },
        {
            front: "Na czym polega złota zasada stechiometrii przy zmieszaniu substratów w stosunku niestechiometrycznym?",
            back: "Ilość powstającego produktu oblicza się zawsze na podstawie substratu znajdującego się w niedomiarze (substratu ograniczającego/limitującego), ponieważ to on zużywa się całkowicie."
        },
        {
            front: "ZADANIE: Czy 0,4 mola Cl<sub>2</sub> wystarczy do otrzymania 0,6 mola HCl w reakcji z wodorem?",
            back: "Równanie: H<sub>2</sub> + Cl<sub>2</sub> &rarr; 2 HCl. Z 1 mola Cl<sub>2</sub> powstają 2 mole HCl, więc z 0,4 mola Cl<sub>2</sub> można otrzymać maksymalnie 0,8 mola HCl. Ponieważ 0,8 mol &gt; 0,6 mol, podana ilość chloru w pełni wystarczy (jest w nadmiarze)."
        },
        {
            front: "ZADANIE: Zmieszano 5 m<sup>3</sup> NH<sub>3</sub> z 25 m<sup>3</sup> powietrza (1/5 obj. to O<sub>2</sub>) w tych samych warunkach p i T. Oblicz maksymalną objętość NO w reakcji: 4 NH<sub>3</sub> + 5 O<sub>2</sub> &rarr; 4 NO + 6 H<sub>2</sub>O.",
            back: "1. V<sub>O2</sub> = 1/5 &middot; 25 m<sup>3</sup> = 5 m<sup>3</sup>.<br>2. Stosunek V<sub>NH3</sub> : V<sub>O2</sub> = 4 : 5, więc z 5 m<sup>3</sup> O<sub>2</sub> przereagują 4 m<sup>3</sup> NH<sub>3</sub> (tlen jest w niedomiarze, a 1 m<sup>3</sup> NH<sub>3</sub> pozostanie w nadmiarze).<br>3. Z 5 m<sup>3</sup> O<sub>2</sub> (i 4 m<sup>3</sup> NH<sub>3</sub>) powstają <strong>4 m<sup>3</sup> NO</strong>."
        },
        {
            front: "Podaj definicję i wzór na wydajność reakcji chemicznej (W).",
            back: "Wydajność reakcji to stosunek ilości produktu otrzymanego praktycznie/rzeczywiście (P<sub>r</sub>) do ilości teoretycznej wynikającej z równania reakcji dla substratu w niedomiarze (P<sub>t</sub>):<br><strong>W = (P<sub>r</sub> / P<sub>t</sub>) &middot; 100%</strong>."
        },
        {
            front: "ZADANIE: W przemyśle utleniono 20 kg SO<sub>2</sub> (M = 64 g/mol) do SO<sub>3</sub> (M = 80 g/mol), otrzymując 22,5 kg SO<sub>3</sub>. Oblicz wydajność reakcji: 2 SO<sub>2</sub> + O<sub>2</sub> &rarr; 2 SO<sub>3</sub>.",
            back: "1. Teoretycznie z 2 &middot; 64 g = 128 g SO<sub>2</sub> powstaje 2 &middot; 80 g = 160 g SO<sub>3</sub>.<br>2. P<sub>t</sub> = (20 kg &middot; 160) / 128 = 25 kg SO<sub>3</sub>.<br>3. W = (22,5 kg / 25 kg) &middot; 100% = <strong>90%</strong>."
        },
        {
            front: "ZADANIE: Zmieszano 7 moli N<sub>2</sub> z 15 molami H<sub>2</sub> i otrzymano 6 moli NH<sub>3</sub> (N<sub>2</sub> + 3 H<sub>2</sub> &rarr; 2 NH<sub>3</sub>). Oblicz wydajność reakcji oraz skład mieszaniny poreakcyjnej.",
            back: "1. Do 15 moli H<sub>2</sub> potrzeba 5 moli N<sub>2</sub> (H<sub>2</sub> w niedomiarze, 2 mole N<sub>2</sub> nadmiaru). Teoretycznie P<sub>t</sub> = 10 moli NH<sub>3</sub>.<br>2. W = (6 / 10) &middot; 100% = <strong>60%</strong>.<br>3. Przereagowało 60% porcji stechiometrycznych: 3 mole N<sub>2</sub> i 9 moli H<sub>2</sub>. W naczyniu pozostało: <strong>6 moli NH<sub>3</sub>, 4 mole N<sub>2</sub> (7&minus;3) i 6 moli H<sub>2</sub> (15&minus;9)</strong>."
        },
        {
            front: "Jak oblicza się ilość substratu wyjściowego w procesie wieloetapowym, w którym każdy etap biegnie z określoną wydajnością (W<sub>1</sub>, W<sub>2</sub>, W<sub>3</sub>)?",
            back: "Obliczenia prowadzi się od produktu końcowego w stronę substratu wyjściowego, dzieląc na każdym etapie liczbę moli wymaganego produktu przez ułamek wydajności danego etapu (ponieważ na każdym kroku występują straty)."
        },
        {
            front: "ZADANIE: Na 10 g mieszaniny NaCl (M = 58,5 g/mol) i NaNO<sub>3</sub> podziałano nadmiarem AgNO<sub>3(aq)</sub>, uzyskując 5 g osadu AgCl (M = 143,5 g/mol). Oblicz % masowy NaCl w mieszaninie.",
            back: "Tylko NaCl reaguje z AgNO<sub>3</sub> (1 mol NaCl daje 1 mol AgCl).<br>m<sub>NaCl</sub> = (58,5 g &middot; 5 g) / 143,5 g = 2,04 g.<br>%NaCl = (2,04 g / 10 g) &middot; 100% = <strong>20,4%</strong> (oraz 79,6% NaNO<sub>3</sub>)."
        },
        {
            front: "ZADANIE: Z 1 g soli amonowej (NH<sub>4</sub>)<sub>x</sub>R wyparto amoniak za pomocą NaOH, a następnie pochłonięto go w H<sub>2</sub>SO<sub>4</sub>, otrzymując 2,3 g (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> (M = 132 g/mol). Oblicz %N w soli.",
            back: "1. n<sub>(NH4)2SO4</sub> = 2,3 / 132 = 0,0174 mol.<br>2. W 1 molu (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> są 2 mole N, więc n<sub>N</sub> = 2 &middot; 0,0174 = 0,0348 mol.<br>3. m<sub>N</sub> = 0,0348 mol &middot; 14 g/mol = 0,4872 g &rArr; <strong>%N = 48,72%</strong>."
        },
        {
            front: "Jak zapisać układ równań dla prażenia 5 g mieszaniny CaCO<sub>3</sub> (M = 100 g/mol) i BaCO<sub>3</sub> (M = 197 g/mol), jeśli ubytek masy (wydzielony CO<sub>2</sub>, M = 44 g/mol) wyniósł 1,165 g?",
            back: "Oznaczając masę CaCO<sub>3</sub> jako x [g] i masę BaCO<sub>3</sub> jako y [g]:<br>1. Bilans masy: <strong>x + y = 5</strong><br>2. Bilans moli/masy CO<sub>2</sub>: <strong>(x / 100) &middot; 44 + (y / 197) &middot; 44 = 1,165</strong> (skąd y = 4,78 g BaCO<sub>3</sub>)."
        },
        {
            front: "Co oznacza pojęcie „mieszanina równomolowa” dwóch substancji (np. MgCO<sub>3</sub> o M = 84 g/mol oraz CaCO<sub>3</sub> o M = 100 g/mol)?",
            back: "Oznacza, że liczby moli obu składników w mieszaninie są sobie równe (n<sub>1</sub> : n<sub>2</sub> = 1 : 1), a ich stosunek masowy odpowiada bezpośrednio stosunkowi ich mas molowych (m<sub>1</sub> : m<sub>2</sub> = 84 : 100 = 21 : 25)."
        },
        {
            front: "ZADANIE: Równomolową mieszaninę MgCO<sub>3</sub> (M=84 g/mol, T<sub>rozkł.</sub>=540&deg;C) i CaCO<sub>3</sub> (M=100 g/mol, T<sub>rozkł.</sub>=900&deg;C) o masie 23,0 g prażono w 600&deg;C do stałej masy. Oblicz % ubytku masy.",
            back: "1. Stosunek masowy 84 : 100 = 21 : 25 (suma 46 części). Masa MgCO<sub>3</sub> = (23,0 &middot; 21)/46 = 10,5 g.<br>2. W 600&deg;C rozkłada się tylko MgCO<sub>3</sub>: m<sub>CO2</sub> = (10,5 g &middot; 44 g) / 84 g = 5,5 g.<br>3. % ubytku = (5,5 / 23,0) &middot; 100% = <strong>23,9%</strong>."
        },
        {
            front: "ZADANIE: 11,2 g mieszaniny MgCO<sub>3</sub> i CaCO<sub>3</sub> (w której CaCO<sub>3</sub> stanowi 8,10% mas.) prażono w 700&deg;C, aż masa stałej pozostałości spadła do 10,0 g. Jaki % MgCO<sub>3</sub> uległ rozkładowi?",
            back: "1. m<sub>MgCO3(pocz.)</sub> = 91,90% &middot; 11,2 g = 10,293 g.<br>2. W 700&deg;C rozkłada się tylko MgCO<sub>3</sub>. Ubytek masy to CO<sub>2</sub>: &Delta;m = 11,2 &minus; 10,0 = 1,2 g CO<sub>2</sub>.<br>3. Masa rozłożonego MgCO<sub>3</sub> = (84 &middot; 1,2) / 44 = 2,291 g.<br>4. % rozkładu = (2,291 / 10,293) &middot; 100% = <strong>22,3%</strong>."
        },
        {
            front: "Czym są hydraty (sole uwodnione) i co dzieje się z nimi podczas ogrzewania?",
            back: "Hydraty to sole zawierające w sieci krystalicznej ściśle określoną liczbę cząsteczek wody krystalizacyjnej (np. CuSO<sub>4</sub> &middot; 5H<sub>2</sub>O). Podczas ogrzewania tracą wodę stopniowo (przechodząc w niższy hydrat) lub całkowicie (dając sól bezwodną)."
        },
        {
            front: "ZADANIE: Masa molowa soli bezwodnej X stanowi 50,68% masy molowej hydratu sześciowodnego X &middot; 6H<sub>2</sub>O. Oblicz masę molową soli bezwodnej X.",
            back: "Masa 6 moli H<sub>2</sub>O wynosi 6 &middot; 18 = 108 g/mol.<br>M<sub>X</sub> / (M<sub>X</sub> + 108) = 0,5068 &rArr; 0,4932 M<sub>X</sub> = 54,7344 &rArr; <strong>M<sub>X</sub> = 111 g/mol</strong> (jest to CaCl<sub>2</sub>)."
        },
        {
            front: "Jakie są dwa warunki poprawnego ułożenia proporcji stechiometrycznej?",
            back: "1. Warunek zgodności w poziomie: górny wiersz proporcji musi wynikać z uzgodnionego równania reakcji.<br>2. Warunek zgodności jednostek w pionie: wielkości podpisane pod sobą w kolumnie muszą dotyczyć tej samej substancji i być wyrażone w tej samej jednostce."
        },
        {
            front: "Jakie zasady obowiązują na maturze z chemii przy zaokrąglaniu wyników obliczeń?",
            back: "Obliczenia pośrednie wykonuje się z większą dokładnością (o 1–2 cyfry znaczące więcej), a zaokrąglenia dokonuje się dopiero w wyniku końcowym. Jeśli polecenie nie narzuca dokładności, wynik podaje się zazwyczaj z dokładnością do 3 cyfr znaczących."
        }
    ]
};