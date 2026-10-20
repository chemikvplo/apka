// Dział II. Budowa atomu (Indeks 2)
appData[1] = {
    notatki: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">📚 KOMPENDIUM MATURALNE: BUDOWA ATOMU</h2>

        <!-- SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Wymagania Podstawy Programowej (Dział I i II – Budowa atomu)</h3>
            <p>Zgodnie z podstawą programową (zakres rozszerzony od 2025 r.) maturzysta powinien umieć:</p>
            <ol class="note-list">
                <li>Stosować pojęcia: nuklid, izotop, mol i stała Avogadra.</li>
                <li>Odczytywać w układzie okresowym masy atomowe pierwiastków oraz stosować pojęcie masy atomowej jako średniej masy atomów danego pierwiastka z uwzględnieniem jego składu izotopowego.</li>
                <li>Pisać równania naturalnych przemian promieniotwórczych (&alpha;, &beta;<sup>&minus;</sup>) oraz sztucznych reakcji jądrowych.</li>
                <li>Interpretować wartości liczb kwantowych, opisywać stan elektronu w atomie za pomocą liczb kwantowych oraz stosować pojęcia: powłoka, podpowłoka, stan orbitalny, spin elektronu.</li>
                <li>Stosować zasady rozmieszczania elektronów na orbitalach (zakaz Pauliego i regułę Hunda) w atomach pierwiastków wieloelektronowych.</li>
                <li>Pisać konfiguracje elektronowe atomów pierwiastków do Z = 38 oraz ich jonów o podanym ładunku, uwzględniając przynależność elektronów do podpowłok (zapisy konfiguracji: pełne, skrócone i schematy klatkowe).</li>
                <li>Określać przynależność pierwiastków do bloków konfiguracyjnych: s, p i d układu okresowego na podstawie konfiguracji elektronowej oraz wskazywać związek między budową elektronową atomu a położeniem pierwiastka w układzie okresowym i jego właściwościami fizycznymi (promieniem atomowym, energią jonizacji) oraz chemicznymi.</li>
            </ol>
        </div>

        <!-- SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Ewolucja Modelu Budowy Atomu i Cząstki Elementarne</h3>
            
            <h4>A. Rozwój teorii budowy atomu</h4>
            <ul class="note-list">
                <li><strong>Koncepcje filozoficzne (V–IV w. p.n.e.):</strong> Leukippos i Demokryt z Abdery założyli, że materia składa się z niepodzielnych cząstek (gr. <em>atomos</em> – niepodzielny).</li>
                <li><strong>Teoria atomistyczna Johna Daltona (1803 r.):</strong> Pierwsza teoria poparta eksperymentalnie – zakładała, że atomy danego pierwiastka są jednakowe, kuliste i niepodzielne, a łącząc się ze sobą, tworzą cząsteczki.</li>
                <li><strong>Model „ciasta z rodzynkami” J.J. Thomsona (1897/1904 r.):</strong> Odkrycie elektronu (1897 r.) podważyło niepodzielność atomu; według Thomsona atom to przestrzennie ciągły ładunek dodatni z równomiernie rozmieszczonymi w nim ujemnymi elektronami.</li>
                <li><strong>Planetarny model Ernesta Rutherforda (1911 r.):</strong> Prześwietlanie cienkiej złotej folii strumieniem cząstek &alpha; wykazało, że większość cząstek przenika swobodnie, część zmienia tor, a nieliczne odbijają się od folii. Udowodniło to, że w centrum atomu znajduje się bardzo małe, gęste i dodatnio naładowane jądro atomowe, wokół którego krążą elektrony.</li>
                <li><strong>Model atomu Nielsa Bohra (1913 r.):</strong> Elektrony krążą wokół jądra po zamkniętych orbitach stacjonarnych, a ich energia jest skwantowana (przyjmuje ściśle określone wartości). Pochłonięcie porcji energii (kwantu) powoduje przeskok elektronu na dalszą orbitę (absorpcja – przejście ze stanu podstawowego w nietrwały stan wzbudzony), natomiast powrót elektronu na bliższą orbitę wiąże się z wypromieniowaniem kwantu energii (emisja). Model ten sprawdza się wyłącznie dla atomu wodoru.</li>
                <li><strong>Model kwantowo-mechaniczny (współczesny):</strong> Opiera się na prawach mechaniki kwantowej – uwzględnia dualizm korpuskularno-falowy cząstek oraz zastępuje pojęcie płaskiej orbity trójwymiarowym orbitalem atomowym (chmurą elektronową).</li>
            </ul>

            <h4>B. Składniki atomu i ich charakterystyka</h4>
            <p>Każdy obojętny atom składa się z dodatnio naładowanego jądra atomowego (skupiającego niemal całą masę atomu, o średnicy rzędu 10<sup>&minus;15</sup>–10<sup>&minus;14</sup> m) oraz otaczającej go ujemnie naładowanej chmury elektronowej (decydującej o rozmiarach atomu, średnica rzędu 10<sup>&minus;10</sup> m = 0,1 nm = 100 pm).</p>
            
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Cząstka elementarna</th>
                            <th>Symbol</th>
                            <th>Przybliżona masa (u)</th>
                            <th>Ładunek względny</th>
                            <th>Wartość ładunku (C)</th>
                            <th>Umiejscowienie i budowa wewnętrzna</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Proton</td>
                            <td>p<sup>+</sup>, p, <sup>1</sup><sub>1</sub>p</td>
                            <td>&approx; 1 u</td>
                            <td>+1</td>
                            <td>+1,602 &middot; 10<sup>&minus;19</sup> C</td>
                            <td>Jądro atomowe (nukleon); zbudowany z 2 kwarków górnych (u, ładunek +2/3) i 1 dolnego (d, ładunek -1/3).</td>
                        </tr>
                        <tr>
                            <td>Neutron</td>
                            <td>n<sup>0</sup>, n, <sup>1</sup><sub>0</sub>n</td>
                            <td>&approx; 1 u</td>
                            <td>0</td>
                            <td>0 C</td>
                            <td>Jądro atomowe (nukleon); zbudowany z 1 kwarka górnego (u) i 2 kwarków dolnych (d).</td>
                        </tr>
                        <tr>
                            <td>Elektron</td>
                            <td>e<sup>&minus;</sup>, <sup>0</sup><sub>&minus;1</sub>e</td>
                            <td>&approx; 1/1836 u</td>
                            <td>-1</td>
                            <td>-1,602 &middot; 10<sup>&minus;19</sup> C</td>
                            <td>Powłoki elektronowe poza jądrem; cząstka elementarna (nie składa się z kwarków).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <ul class="note-list">
                <li><strong>Elektrony walencyjne:</strong> Elektrony znajdujące się na ostatniej (zewnętrznej) powłoce elektronowej (w przypadku pierwiastków grup 1–2 i 13–18) lub na zewnętrznej podpowłoce ns i wewnętrznej (n-1)d (w przypadku pierwiastków bloku d, grup 3–12). Są najsłabiej związane z jądrem i biorą udział w tworzeniu wiązań chemicznych.</li>
                <li><strong>Rdzeń atomowy:</strong> Jądro atomowe wraz ze wszystkimi elektronami niewalencyjnymi (wewnętrznymi). Rdzeń atomowy nie ulega zmianom podczas reakcji chemicznych. Ładunek rdzenia atomowego jest dodatni i liczbowo równy liczbie elektronów walencyjnych.</li>
            </ul>
        </div>

        <!-- SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Liczba Atomowa (Z), Liczba Masowa (A), Nuklidy i Izotopy</h3>
            
            <h4>A. Opis ilościowy atomu i jonu</h4>
            <p>Każdy nuklid opisuje się symbolem <sup>A</sup><sub>Z</sub>E:</p>
            <ul class="note-list">
                <li><strong>Liczba atomowa (Z):</strong> Liczba protonów w jądrze atomowym (Z = p<sup>+</sup>). Określa ładunek jądra atomowego oraz liczbę porządkową pierwiastka w układzie okresowym. W atomie elektrycznie obojętnym jest równa liczbie elektronów (Z = p<sup>+</sup> = e<sup>&minus;</sup>).</li>
                <li><strong>Liczba masowa (A):</strong> Suma liczby protonów (Z) i neutronów (N) w jądrze atomowym, czyli łączna liczba nukleonów (A = Z + N). Liczbę neutronów wyznacza się ze wzoru: N = A &minus; Z.</li>
                <li><strong>Jony proste:</strong> Powstają wyłącznie poprzez oddanie lub przyjęcie elektronów przez atom (liczba protonów w jądrze nigdy nie ulega zmianie w reakcji chemicznej):
                    <ul>
                        <li><strong>Kation</strong> (jon dodatni, E<sup>k+</sup>): powstaje przez oddanie elektronów; liczba elektronów jest mniejsza od liczby protonów (e<sup>&minus;</sup> = Z &minus; k).</li>
                        <li><strong>Anion</strong> (jon ujemny, E<sup>k-</sup>): powstaje przez przyjęcie elektronów; liczba elektronów jest większa od liczby protonów (e<sup>&minus;</sup> = Z + k).</li>
                    </ul>
                </li>
            </ul>

            <h4>B. Pierwiastek, nuklid, izotop</h4>
            <ul class="note-list">
                <li><strong>Pierwiastek chemiczny:</strong> Zbiór atomów posiadających tę samą liczbę protonów w jądrze, czyli jednakową liczbę atomową Z.</li>
                <li><strong>Nuklid:</strong> Zbiór atomów o ściśle określonej liczbie protonów (Z) oraz ściśle określonej liczbie neutronów (N), czyli o konkretnych wartościach Z i A (np. nuklid <sup>16</sup><sub>8</sub>O, nuklid <sup>14</sup><sub>6</sub>C).</li>
                <li><strong>Izotopy:</strong> Atomy tego samego pierwiastka chemicznego, które mają jednakową liczbę atomową (Z – tę samą liczbę protonów), ale różnią się liczbą masową (A – różną liczbą neutronów w jądrze).</li>
            </ul>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Nazwa izotopu wodoru</th>
                            <th>Symbol nuklidu</th>
                            <th>Symbol własny</th>
                            <th>Liczba protonów (p<sup>+</sup>)</th>
                            <th>Liczba neutronów (n<sup>0</sup>)</th>
                            <th>Liczba masowa (A)</th>
                            <th>Zawartość w przyrodzie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Prot (wodór lekki)</td>
                            <td><sup>1</sup><sub>1</sub>H</td>
                            <td>H</td>
                            <td>1</td>
                            <td>0</td>
                            <td>1</td>
                            <td>99,985%</td>
                        </tr>
                        <tr>
                            <td>Deuter (wodór ciężki)</td>
                            <td><sup>2</sup><sub>1</sub>H</td>
                            <td>D</td>
                            <td>1</td>
                            <td>1</td>
                            <td>2</td>
                            <td>0,015%</td>
                        </tr>
                        <tr>
                            <td>Tryt (wodór superciężki, nietrwały)</td>
                            <td><sup>3</sup><sub>1</sub>H</td>
                            <td>T</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>10<sup>&minus;15</sup>% (śladowa)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="note-alert">
                ⚠️ <strong>Ważne na Maturze:</strong>
                <ul>
                    <li>Prot (<sup>1</sup><sub>1</sub>H) to jedyny istniejący w przyrodzie trwały nuklid, którego jądro atomowe nie zawiera ani jednego neutronu (N = 1 - 1 = 0).</li>
                    <li>Nieliczne pierwiastki występują w przyrodzie w postaci tylko jednego trwałego izotopu (pierwiastki mononuklidowe) – należą do nich m.in. beryl (<sup>9</sup><sub>4</sub>Be), fluor (<sup>19</sup><sub>9</sub>F), sód (<sup>23</sup><sub>11</sub>Na), glin (<sup>27</sup><sub>13</sub>Al) oraz fosfor (<sup>31</sup><sub>15</sub>P).</li>
                    <li>Izotopy tego samego pierwiastka mają niemal identyczne właściwości chemiczne (taka sama budowa powłok elektronowych), ale różnią się właściwościami fizycznymi zależnymi od masy (np. gęstością, temperaturą wrzenia; wyjątkiem są izotopy wodoru, które wykazują zauważalne różnice w szybkości reakcji ze względu na dwu- i trzykrotną różnicę mas jąder).</li>
                </ul>
            </div>

            <h4>C. Jednostka masy atomowej (unit) i średnia masa atomowa</h4>
            <ul class="note-list">
                <li><strong>Unit (u):</strong> Atomowa jednostka masy równa 1/12 masy spoczynkowej atomu izotopu węgla <sup>12</sup><sub>6</sub>C (1 u &approx; 1,66 &middot; 10<sup>&minus;24</sup> g).</li>
                <li><strong>Średnia masa atomowa (m<sub>at</sub>):</strong> Wartość podawana w układzie okresowym jest średnią ważoną mas izotopów danego pierwiastka występujących w środowisku przyrodniczym, uwzględniającą ich zawartość procentową (skład izotopowy).<br>
                m<sub>at</sub> = (A<sub>1</sub> &middot; %m<sub>1</sub> + A<sub>2</sub> &middot; %m<sub>2</sub> + ... + A<sub>n</sub> &middot; %m<sub>n</sub>) / 100%<br>
                gdzie %m<sub>1</sub>, %m<sub>2</sub>, ... to zawartości procentowe (w %) poszczególnych izotopów w przyrodzie, a A<sub>1</sub>, A<sub>2</sub>, ... to ich masy atomowe.</li>
            </ul>
        </div>

        <!-- SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Promieniotwórczość Naturalna i Sztuczna</h3>
            
            <h4>A. Zjawisko promieniotwórczości i reguła przesunięć Soddy'ego-Fajansa</h4>
            <p>Promieniotwórczość (radioaktywność) to zdolność nietrwałych jąder atomowych (radionuklidów) do samorzutnego rozpadu, któremu towarzyszy emisja promieniowania jądrowego i przekształcenie w inne jądra aż do uzyskania trwałego nuklidu. Bezwarunkowo nietrwałe są wszystkie pierwiastki posiadające w jądrze powyżej 82 protonów (Z > 82, tj. leżące za ołowiem Pb). Jednostką aktywności promieniotwórczej w układzie SI jest bekerel (Bq), oznaczający 1 rozpad na sekundę.</p>
            <p>Zgodnie z regułą przesunięć Soddy'ego-Fajansa w każdej przemianie jądrowej suma liczb masowych (A) oraz suma liczb atomowych (Z) substratów musi być równa sumie liczb masowych i atomowych produktów:</p>
            <ul class="note-list">
                <li><strong>Przemiana &alpha; (alfa):</strong> Rozpad ciężkich jąder połączony z emisją cząstki &alpha;, czyli jądra atomu helu <sup>4</sup><sub>2</sub>He. Liczba masowa zmniejsza się o 4, a liczba atomowa o 2 (powstaje pierwiastek przesunięty o 2 grupy w lewo w układzie okresowym).<br>
                <sup>A</sup><sub>Z</sub>X &rarr; <sup>A-4</sup><sub>Z-2</sub>Y + <sup>4</sup><sub>2</sub>He</li>
                <li><strong>Przemiana &beta;<sup>&minus;</sup> (beta minus):</strong> Rozpad wynikający z przemiany neutronu w proton wewnątrz jądra, połączony z emisją elektronu <sup>0</sup><sub>&minus;1</sub>e. Liczba masowa A nie ulega zmianie, natomiast liczba atomowa Z wzrasta o 1 (przesunięcie o 1 grupę w prawo).<br>
                <sup>A</sup><sub>Z</sub>X &rarr; <sup>A</sup><sub>Z+1</sub>Y + <sup>0</sup><sub>&minus;1</sub>e</li>
                <li><strong>Przemiana &beta;<sup>+</sup> (beta plus):</strong> Rozpad połączony z przemianą protonu w neutron wewnątrz jądra oraz emisją pozytonu <sup>0</sup><sub>+1</sub>e (antycząstki elektronu). Liczba masowa A pozostaje bez zmian, a liczba atomowa Z maleje o 1.<br>
                <sup>A</sup><sub>Z</sub>X &rarr; <sup>A</sup><sub>Z-1</sub>Y + <sup>0</sup><sub>+1</sub>e</li>
                <li><strong>Wychwyt elektronu (wychwyt K):</strong> Jądro atomowe przechwytuje elektron z najbliższej (pierwszej) powłoki elektronowej, co powoduje przemianę protonu w neutron. Liczba atomowa Z maleje o 1, a liczba masowa A nie zmienia się.<br>
                <sup>A</sup><sub>Z</sub>X + <sup>0</sup><sub>&minus;1</sub>e &rarr; <sup>A</sup><sub>Z-1</sub>Y</li>
                <li><strong>Promieniowanie &gamma; (gamma):</strong> Emisja fali elektromagnetycznej o bardzo wysokiej energii przez wzbudzone jądro atomowe przechodzące do stanu podstawowego. Nie zmienia ani liczby masowej A, ani liczby atomowej Z.</li>
            </ul>

            <h4>B. Okres półtrwania (t<sub>1/2</sub>) i szeregi promieniotwórcze</h4>
            <ul class="note-list">
                <li><strong>Okres półtrwania (czas połowicznego rozpadu, t<sub>1/2</sub>):</strong> Czas, po upływie którego połowa początkowej liczby jąder (a tym samym połowa masy początkowej m<sub>0</sub> oraz aktywności promieniotwórczej) danego izotopu ulega rozpadowi. Wartość t<sub>1/2</sub> jest stała dla danego nuklidu i całkowicie niezależna od warunków zewnętrznych.<br>
                m = m<sub>0</sub> / 2<sup>n</sup> &nbsp; (gdzie n to liczba cykli rozpadowych, n = t / t<sub>1/2</sub>)</li>
            </ul>
            <div class="note-alert">
                ⚠️ <strong>Ważne na Maturze (Pułapka zadaniowa):</strong> W zadaniach maturalnych uważnie czytaj, czy pytanie dotyczy masy izotopu, która <strong>pozostała</strong> (m = m<sub>0</sub> / 2<sup>n</sup>), czy masy izotopu, która <strong>uległa rozpadowi</strong> (m<sub>rozpadu</sub> = m<sub>0</sub> - m), bądź też stosunku liczby jąder powstałych do pozostałych.
            </div>
            <ul class="note-list">
                <li><strong>Szeregi (rodziny) promieniotwórcze:</strong> Sekwencje 10–14 kolejnych rozpadów &alpha; i &beta;<sup>&minus;</sup> prowadzące od macierzystego radionuklidu do trwałego izotopu ołowiu (Pb) lub bizmutu (Bi):
                    <ul>
                        <li>Naturalne: uranowo-radowy, uranowo-aktynowy, torowy.</li>
                        <li>Sztuczny: neptunowy (od <sup>237</sup><sub>93</sub>Np do <sup>209</sup><sub>83</sub>Bi).</li>
                    </ul>
                </li>
            </ul>

            <h4>C. Promieniotwórczość sztuczna i reakcje jądrowe</h4>
            <p>Sztuczne przemiany jądrowe wywołuje się poprzez bombardowanie tarcz jądrowych rozpędzonymi cząstkami (np. cząstkami &alpha;, protonami) lub obojętnymi elektrycznie neutronami.</p>
            <ul class="note-list">
                <li><strong>Pierwsza sztuczna reakcja jądrowa (E. Rutherford, 1919 r.):</strong><br>
                <sup>14</sup><sub>7</sub>N + <sup>4</sup><sub>2</sub>He &rarr; <sup>17</sup><sub>8</sub>O + <sup>1</sup><sub>1</sub>p</li>
                <li><strong>Odkrycie neutronu (J. Chadwick, 1932 r.):</strong><br>
                <sup>9</sup><sub>4</sub>Be + <sup>4</sup><sub>2</sub>He &rarr; <sup>12</sup><sub>6</sub>C + <sup>1</sup><sub>0</sub>n</li>
                <li><strong>Otrzymanie pierwszego sztucznego izotopu promieniotwórczego (I. i F. Joliot-Curie, 1934 r.):</strong><br>
                <sup>27</sup><sub>13</sub>Al + <sup>4</sup><sub>2</sub>He &rarr; <sup>30</sup><sub>15</sub>P + <sup>1</sup><sub>0</sub>n</li>
                <li><strong>Rozszczepienie jądra atomowego:</strong> Rozpad ciężkiego jądra (np. <sup>235</sup><sub>92</sub>U) po pochłonięciu neutronu na dwa lżejsze jądra o zbliżonych masach oraz 2–3 nowe neutrony, które inicjują reakcję łańcuchową.</li>
                <li><strong>Fuzja jądrowa (synteza termojądrowa):</strong> Łączenie się lekkich jąder atomowych (np. izotopów wodoru) w jądro cięższe w skrajnie wysokiej temperaturze, czemu towarzyszy wydzielenie olbrzymiej ilości energii.</li>
            </ul>
        </div>

        <!-- SEKCJA 5 -->
        <div class="note-section">
            <h3>5. Elementy Mechaniki Kwantowej, Orbitale i Liczby Kwantowe</h3>
            
            <h4>A. Założenia kwantowo-mechanicznego modelu atomu</h4>
            <ul class="note-list">
                <li><strong>Hipoteza de Broglie'a (dualizm korpuskularno-falowy):</strong> Każda poruszająca się cząstka materialna (w tym elektron) posiada jednocześnie właściwości korpuskularne (ma masę i pęd) oraz falowe.</li>
                <li><strong>Zasada nieoznaczoności Heisenberga:</strong> Nie jest możliwe jednoczesne i dokładne wyznaczenie położenia oraz pędu elektronu w atomie.</li>
                <li><strong>Orbital atomowy:</strong> Funkcja falowa opisująca stan energetyczny elektronu. Kwadrat wartości tej funkcji określa gęstość prawdopodobieństwa znalezienia elektronu. Kontur orbitalu wyznacza bryłę, wewnątrz której prawdopodobieństwo to jest największe (ok. 90%).</li>
            </ul>

            <h4>B. Charakterystyka czterech liczb kwantowych</h4>
            <p>Stan energetyczny każdego elektronu w atomie jest jednoznacznie opisany zestawem czterech liczb kwantowych (n, l, m, m<sub>s</sub>):</p>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Nazwa liczby kwantowej</th>
                            <th>Symbol</th>
                            <th>Przyjmowane wartości</th>
                            <th>Co określa w budowie atomu?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Główna</td>
                            <td>n</td>
                            <td>n = 1, 2, 3, 4, 5, 6, 7...</td>
                            <td>Określa energię elektronu oraz rozmiar orbitalu. Definiuje powłokę elektronową oznaczaną literami: K (n=1), L (n=2), M (n=3), N (n=4), O (n=5)...</td>
                        </tr>
                        <tr>
                            <td>Poboczna (orbitalna)</td>
                            <td>l</td>
                            <td>l = 0, 1, 2, ..., (n-1)</td>
                            <td>Określa kształt orbitalu atomowego oraz energię podpowłoki elektronowej:<br>
                            l = 0 &rarr; podpowłoka s<br>
                            l = 1 &rarr; podpowłoka p<br>
                            l = 2 &rarr; podpowłoka d<br>
                            l = 3 &rarr; podpowłoka f</td>
                        </tr>
                        <tr>
                            <td>Magnetyczna</td>
                            <td>m (lub m<sub>l</sub>)</td>
                            <td>m = -l, ..., 0, ..., +l<br>(łącznie 2l + 1 wartości)</td>
                            <td>Określa orientację przestrzenną orbitalu w polu magnetycznym oraz liczbę poziomów orbitalnych (klatek) w danej podpowłoce.</td>
                        </tr>
                        <tr>
                            <td>Magnetyczna spinowa</td>
                            <td>m<sub>s</sub></td>
                            <td>m<sub>s</sub> = +1/2 lub -1/2</td>
                            <td>Określa orientację wektora spinu (kierunek obrotu elektronu wokół osi) względem zewnętrznego pola magnetycznego (&uarr; lub &darr;).</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>C. Kształty orbitali i pojemność elektronowa powłok oraz podpowłok</h4>
            <ul class="note-list">
                <li><strong>Orbital typu s (l = 0, m = 0):</strong> Ma kształt kuli (symetria sferyczna). Tworzy 1 poziom orbitalny i mieści maksymalnie 2 elektrony.</li>
                <li><strong>Orbitale typu p (l = 1):</strong> Mają kształt dwulistnych brył (hantli) zorientowanych wzdłuż osi (p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>). Występują w postaci 3 klatek, mieszczą maks. 6 elektronów.</li>
                <li><strong>Orbitale typu d (l = 2):</strong> Mają złożone kształty (głównie czterolistnych rozet). Występują w postaci 5 klatek, mieszczą maks. 10 elektronów.</li>
                <li><strong>Orbitale typu f (l = 3):</strong> Występują w postaci 7 klatek, mieszczą maks. 14 elektronów.</li>
            </ul>
            <p><strong>Wzory na obliczenia kwantowe (Pewniak Maturalny!):</strong></p>
            <ul class="note-list">
                <li>Liczba podpowłok w powłoce o numerze n: <strong>n</strong>.</li>
                <li>Liczba poziomów orbitalnych (klatek) w podpowłoce o danym l: <strong>2l + 1</strong>.</li>
                <li>Maksymalna liczba elektronów w podpowłoce o danym l: <strong>4l + 2</strong>.</li>
                <li>Liczba poziomów orbitalnych w całej powłoce o numerze n: <strong>n<sup>2</sup></strong>.</li>
                <li>Maksymalna liczba elektronów w powłoce o numerze n: <strong>2n<sup>2</sup></strong>.</li>
            </ul>
        </div>

        <!-- SEKCJA 6 -->
        <div class="note-section">
            <h3>6. Konfiguracja Elektronowa Atomów i Jonów</h3>
            
            <h4>A. Prawa rządzące rozbudową powłok elektronowych</h4>
            <ul class="note-list">
                <li><strong>Zasada minimum energii (reguła rozbudowy):</strong> Elektrony obsadzają podpowłoki w kolejności rosnącej energii (zgodnie ze wzrostem sumy n + l). Podpowłoka 4s zapełnia się przed 3d!</li>
                <li><strong>Zakaz Pauliego:</strong> W jednym atomie nie mogą istnieć dwa elektrony mające identyczne wartości wszystkich 4 liczb kwantowych. W jednej klatce mogą być maks. 2 elektrony o przeciwnych spinach (&uarr;&darr;).</li>
                <li><strong>Reguła Hunda:</strong> Atom dąży do maksymalnej liczby elektronów niesparowanych. Elektrony zajmują równocenne orbitale najpierw pojedynczo o zgodnych spinach (&uarr; &uarr; &uarr;).</li>
            </ul>

            <h4>B. Sposoby zapisu konfiguracji (np. manganu <sub>25</sub>Mn)</h4>
            <ul class="note-list">
                <li><strong>Zapis powłokowy:</strong> K<sup>2</sup> L<sup>8</sup> M<sup>13</sup> N<sup>2</sup>.</li>
                <li><strong>Zapis podpowłokowy pełny:</strong> 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>5</sup>.</li>
                <li><strong>Zapis podpowłokowy skrócony:</strong> [Ar] 4s<sup>2</sup> 3d<sup>5</sup>.</li>
                <li><strong>Zapis graficzny (klatkowy):</strong> Rysowanie kratek z odpowiednimi strzałkami &uarr;&darr;.</li>
            </ul>

            <h4>C. Promocja elektronowa i konfiguracja jonów (Kluczowe na Maturze!)</h4>
            <ul class="note-list">
                <li><strong>Promocja elektronowa (Chrom i Miedź):</strong> Samorzutny przeskok elektronu z 4s na 3d w celu osiągnięcia trwałej podpowłoki d<sup>5</sup> lub d<sup>10</sup>.
                    <ul>
                        <li><strong>Chrom (<sub>24</sub>Cr):</strong> [Ar] 4s<sup>1</sup> 3d<sup>5</sup> (aż 6 elektronów niesparowanych!).</li>
                        <li><strong>Miedź (<sub>29</sub>Cu):</strong> [Ar] 4s<sup>1</sup> 3d<sup>10</sup>.</li>
                    </ul>
                </li>
                <li><strong>Kationy metali bloku d:</strong> Oddają najpierw elektrony z powłoki zewnętrznej 4s, a dopiero potem z 3d! (np. <sub>26</sub>Fe: [Ar] 4s<sup>2</sup> 3d<sup>6</sup> &rarr; Fe<sup>2+</sup>: [Ar] 3d<sup>6</sup>).</li>
            </ul>
            <div class="note-alert">
                ⚠️ <strong>Ważne na Maturze:</strong> Zapisując skróconą konfigurację jonu o strukturze helowca (np. K<sup>+</sup>, S<sup>2&minus;</sup>), nie zapisuj samego symbolu [Ar] – użyj gazu z poprzedniego okresu i rozpisz powłokę walencyjną, np. [Ne] 3s<sup>2</sup> 3p<sup>6</sup>.
            </div>
        </div>

        <!-- SEKCJA 7 -->
        <div class="note-section">
            <h3>7. Budowa Atomu a Położenie w Układzie Okresowym i Właściwości Pierwiastków</h3>
            
            <h4>A. Prawo okresowości i struktura układu okresowego</h4>
            <ul class="note-list">
                <li>Współczesne prawo okresowości: Właściwości pierwiastków powtarzają się okresowo wraz ze wzrostem ich liczby atomowej (Z).</li>
                <li><strong>Numer okresu</strong> = liczba powłok elektronowych (wyjątek: pallad <sub>46</sub>Pd posiada 4 powłoki).</li>
                <li><strong>Numer grupy:</strong> Określa liczbę elektronów walencyjnych (dla grup 13–18 jest to numer grupy - 10).</li>
            </ul>

            <h4>B. Charakterystyka bloków konfiguracyjnych</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Blok</th>
                            <th>Grupy</th>
                            <th>Konfiguracja elektr. walencyjnych</th>
                            <th>Charakterystyka</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>s</strong></td>
                            <td>1, 2, oraz wodór i hel</td>
                            <td>ns<sup>1</sup> lub ns<sup>2</sup></td>
                            <td>Aktywne metale (z wyjątkiem H i He).</td>
                        </tr>
                        <tr>
                            <td><strong>p</strong></td>
                            <td>13–18 (bez helu)</td>
                            <td>ns<sup>2</sup> np<sup>1–6</sup></td>
                            <td>Niemetale, półmetale, niektóre metale.</td>
                        </tr>
                        <tr>
                            <td><strong>d</strong></td>
                            <td>3–12 (przejściowe)</td>
                            <td>ns<sup>1–2</sup> (n-1)d<sup>1–10</sup></td>
                            <td>Wyłącznie metale przejściowe.</td>
                        </tr>
                        <tr>
                            <td><strong>f</strong></td>
                            <td>Lantanowce i aktynowce</td>
                            <td>ns<sup>2</sup> (n-1)d<sup>0–1</sup> (n-2)f<sup>1–14</sup></td>
                            <td>Metale wewnątrzprzejściowe.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>C. Zmienność właściwości fizycznych i chemicznych</h4>
            <ul class="note-list">
                <li><strong>Promień atomowy:</strong> W grupie (w dół) ROŚNIE (więcej powłok). W okresie (w prawo) MALEJE (rośnie ładunek jądra przyciągający elektrony).</li>
                <li><strong>Promień jonowy:</strong> Kation jest ZAWSZE mniejszy od atomu macierzystego. Anion jest ZAWSZE większy od atomu macierzystego. W szeregu izoelektronowym (np. S<sup>2&minus;</sup>, Cl<sup>&minus;</sup>, K<sup>+</sup>, Ca<sup>2+</sup>) promień maleje wraz ze wzrostem Z.</li>
                <li><strong>Energia jonizacji (E<sub>j</sub>):</strong> Minimalna energia do oderwania najsłabiej związanego elektronu. W grupie (w dół) MALEJE. W okresie (w prawo) ROŚNIE.</li>
            </ul>
        </div>

        <!-- SEKCJA 8 -->
        <div class="note-section">
            <h3>8. Wzorcowe Algorytmy Rozwiązywania Zadań Maturalnych</h3>
            
            <h4>A. Wyznaczanie składu procentowego izotopów na podstawie średniej masy atomowej</h4>
            <p>Zadanie: Lit występuje w przyrodzie jako mieszanina dwóch trwałych izotopów: <sup>6</sup><sub>3</sub>Li oraz <sup>7</sup><sub>3</sub>Li. Oblicz zawartość procentową, wiedząc, że m<sub>at</sub> = 6,94 u.</p>
            <p><em>Rozwiązanie:</em> Niech %m<sub>1</sub> = x (izotop 6). %m<sub>2</sub> = 100% - x. Wstaw do wzoru na średnią masę atomową i wylicz x.</p>

            <h4>B. Obliczenia związane z okresem półtrwania (t<sub>1/2</sub>)</h4>
            <p>Zadanie: Okres półtrwania izotopu toru <sup>234</sup>Th wynosi 24,1 dnia. Oblicz pozostałą masę z 200 &mu;g po upływie 96,4 dnia.</p>
            <p><em>Rozwiązanie:</em> Liczba cykli n = 96,4 / 24,1 = 4. Masa pozostała: m = 200 / 2<sup>4</sup> = 12,5 &mu;g.</p>

            <h4>C. Identyfikacja pierwiastka z opisu stanów kwantowych</h4>
            <p>Zadanie: Elektrony walencyjne w 6 orbitalach (2 podpowłoki), każdy z nich ma 1 niesparowany elektron, leży w 4. okresie. Jaki to pierwiastek?</p>
            <p><em>Rozwiązanie:</em> 4. okres to n=4. 2 podpowłoki z elektronami walencyjnymi w bloku d to 4s i 3d. 6 niesparowanych elektronów to konfiguracja 4s<sup>1</sup> 3d<sup>5</sup>. Pierwiastek to Chrom (Cr).</p>
        </div>

        <!-- SEKCJA 9 -->
        <div class="note-section">
            <h3>9. Podsumowanie Porównawcze: Rodzaje Promieniowania Jądrowego</h3>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Cecha</th>
                            <th>Promieniowanie &alpha;</th>
                            <th>Promieniowanie &beta;<sup>&minus;</sup></th>
                            <th>Promieniowanie &beta;<sup>+</sup></th>
                            <th>Promieniowanie &gamma;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Natura fizyczna</td>
                            <td>Strumień jąder helu</td>
                            <td>Strumień elektronów</td>
                            <td>Strumień pozytonów</td>
                            <td>Fala elektromagnetyczna</td>
                        </tr>
                        <tr>
                            <td>Ładunek</td>
                            <td>Dodatni (+2)</td>
                            <td>Ujemny (-1)</td>
                            <td>Dodatni (+1)</td>
                            <td>Obojętny (0)</td>
                        </tr>
                        <tr>
                            <td>Zmiana A i Z</td>
                            <td>A - 4, Z - 2</td>
                            <td>A bez zmian, Z + 1</td>
                            <td>A bez zmian, Z - 1</td>
                            <td>Brak zmian A i Z</td>
                        </tr>
                        <tr>
                            <td>Przenikliwość</td>
                            <td>Mała (zatrzymuje kartka)</td>
                            <td>Średnia (zatrzymuje blaszka glinu)</td>
                            <td>Średnia</td>
                            <td>Bardzo duża (wymaga ołowiu/betonu)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `,

    notatkiActive: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">🧠 ACTIVE RECALL: BUDOWA ATOMU</h2>
        <p style="text-align: center; color: #94a3b8; font-size: 13px; margin-bottom: 20px;">
            💡 <em>Klikaj na ciemne pola, aby odkryć ukryte pojęcia i sprawdzić się przed maturą!</em>
        </p>

        <div class="note-section">
            <h3>1. Cząstki Elementarne i Budowa Jądra</h3>
            <p>Jądro atomowe składa się z <span class="recall-blank" onclick="toggleRecall(this)">protonów i neutronów (nukleonów)</span>.</p>
            <p>Proton składa się z kwarków: <span class="recall-blank" onclick="toggleRecall(this)">2 górnych (u) i 1 dolnego (d)</span>. Neutron składa się z <span class="recall-blank" onclick="toggleRecall(this)">1 górnego (u) i 2 dolnych (d)</span>.</p>
            <details class="recall-details">
                <summary>Co różni izotopy tego samego pierwiastka?</summary>
                <p>Mają jednakową liczbę protonów (Z), ale różnią się <strong>liczbą neutronów w jądrze</strong> (czyli różnią się liczbą masową A i masą).</p>
            </details>
        </div>

        <div class="note-section">
            <h3>2. Promieniotwórczość</h3>
            <p>W przemianie <strong>&alpha;</strong> liczba masowa jądra wyjściowego <span class="recall-blank" onclick="toggleRecall(this)">maleje o 4</span>, a liczba atomowa <span class="recall-blank" onclick="toggleRecall(this)">maleje o 2</span>.</p>
            <p>W przemianie <strong>&beta;<sup>&minus;</sup></strong> dochodzi w jądrze do przemiany <span class="recall-blank" onclick="toggleRecall(this)">neutronu w proton</span>, co powoduje wzrost liczby atomowej (Z) o 1.</p>
        </div>

        <div class="note-section">
            <h3>3. Liczby Kwantowe i Konfiguracja</h3>
            <details class="recall-details">
                <summary>Wymień 4 liczby kwantowe i powiedz krótko, co określają.</summary>
                <ul class="note-list">
                    <li><strong>Główna (n):</strong> energia i wielkość orbitalu (powłoka).</li>
                    <li><strong>Poboczna (l):</strong> kształt orbitalu (podpowłoka s, p, d, f).</li>
                    <li><strong>Magnetyczna (m):</strong> ułożenie w przestrzeni (ilość kratek).</li>
                    <li><strong>Magnetyczna spinowa (ms):</strong> orientacja spinu.</li>
                </ul>
            </details>
            <p>Maksymalna liczba elektronów na powłoce wyraża się wzorem <span class="recall-blank" onclick="toggleRecall(this)">2n<sup>2</sup></span>.</p>
            <p>Zjawisko samorzutnego przeskoku elektronu z podpowłoki 4s na 3d u chromu i miedzi to <span class="recall-blank" onclick="toggleRecall(this)">promocja elektronowa</span>.</p>
        </div>

        <div class="note-section">
            <h3>4. Właściwości w Układzie Okresowym</h3>
            <p>Promień atomowy ze wzrostem ładunku jądra w danym okresie <span class="recall-blank" onclick="toggleRecall(this)">maleje</span>.</p>
            <p>Anion jest zawsze <span class="recall-blank" onclick="toggleRecall(this)">większy</span> od atomu macierzystego, a kation <span class="recall-blank" onclick="toggleRecall(this)">mniejszy</span>.</p>
        </div>
    </div>
    `,

    zadania: "<h3>Zadania</h3><br>Miejsce na zadania maturalne z budowy atomu, izotopów, liczb kwantowych...",

    fiszki: [
        { front: "Twórca pierwszego eksperymentalnie potwierdzonego modelu atomu (tzw. model kuli bilardowej).", back: "John Dalton (1803 r.)." },
        { front: "Zjawisko odkryte przez J.J. Thomsona, które obaliło teorię o niepodzielności atomu.", back: "Odkrycie elektronu (model „ciasta z rodzynkami”)." },
        { front: "Wniosek z doświadczenia Rutherforda (prześwietlanie złotej folii cząstkami &alpha;).", back: "Atom posiada bardzo małe, gęste, dodatnio naładowane jądro atomowe skupiające niemal całą jego masę." },
        { front: "Główne założenie modelu atomu Nielsa Bohra.", back: "Elektrony krążą wokół jądra po zamkniętych orbitach stacjonarnych, a ich energia jest skwantowana." },
        { front: "Kwarki wchodzące w skład protonu i ich ładunki.", back: "Dwa kwarki górne (ładunek +2/3) i jeden kwark dolny (ładunek -1/3)." },
        { front: "Kwarki wchodzące w skład neutronu.", back: "Jeden kwark górny i dwa kwarki dolne." },
        { front: "Podstawowe cząstki elementarne tworzące jądro atomowe (nukleony).", back: "Protony i neutrony." },
        { front: "Masa i ładunek elektronu w jednostkach względnych.", back: "Masa ok. 1/1836 u, ładunek elektryczny -1." },
        { front: "Co tworzy rdzeń atomowy?", back: "Jądro atomowe wraz ze wszystkimi elektronami niewalencyjnymi." },
        { front: "Co to są elektrony walencyjne?", back: "Elektrony o najwyższej energii, najsłabiej związane z jądrem, decydujące o właściwościach chemicznych pierwiastka." },
        { front: "Czym jest liczba atomowa Z?", back: "To liczba protonów w jądrze atomowym, określająca ładunek jądra i pozycję pierwiastka w układzie okresowym." },
        { front: "Czym jest liczba masowa A?", back: "To całkowita suma liczby protonów i neutronów w jądrze atomowym." },
        { front: "Jak obliczyć liczbę neutronów w jądrze atomowym?", back: "Odejmując liczbę atomową od liczby masowej (A - Z)." },
        { front: "Definicja nuklidu.", back: "Zbiór atomów o ściśle określonej liczbie protonów i ściśle określonej liczbie neutronów." },
        { front: "Czym są izotopy?", back: "To atomy tego samego pierwiastka (ta sama liczba atomowa), różniące się liczbą masową (różna liczba neutronów)." },
        { front: "Podaj nazwy i skład jąder trzech izotopów wodoru.", back: "Prot (1 proton, 0 neutronów), Deuter (1 proton, 1 neutron), Tryt (1 proton, 2 neutrony)." },
        { front: "Czym jest atomowa jednostka masy (unit, u)?", back: "To 1/12 masy spoczynkowej atomu izotopu węgla-12 (ok. 1,66 * 10&circ;-24 g)." },
        { front: "Czym jest średnia masa atomowa pierwiastka podawana w układzie okresowym?", back: "To średnia ważona mas atomowych wszystkich izotopów danego pierwiastka, uwzględniająca ich zawartość procentową w przyrodzie." },
        { front: "Izotopy tego samego pierwiastka mają niemal identyczne właściwości chemiczne, ale różnią się...", back: "...właściwościami fizycznymi zależnymi od masy (np. gęstością, temperaturą wrzenia)." },
        { front: "Jedyny stabilny nuklid w przyrodzie, który nie posiada w jądrze żadnego neutronu.", back: "Prot (wodór lekki)." },
        { front: "Co to jest promieniotwórczość (radioaktywność)?", back: "Zdolność nietrwałych jąder atomowych do samorzutnego rozpadu połączonego z emisją promieniowania." },
        { front: "Przemiana &alpha; (alfa) – co jest emitowane i jak zmieniają się liczby A i Z?", back: "Emitowane jest jądro helu. Liczba masowa A maleje o 4, a liczba atomowa Z maleje o 2." },
        { front: "Przemiana &beta;&circ;- (beta minus) – zjawisko w jądrze i zmiana liczb A i Z.", back: "Przemiana neutronu w proton i emisja elektronu. Liczba masowa A bez zmian, liczba atomowa Z wzrasta o 1." },
        { front: "Przemiana &beta;&circ;+ (beta plus) – zjawisko w jądrze i zmiana liczb A i Z.", back: "Przemiana protonu w neutron i emisja pozytonu. Liczba masowa A bez zmian, liczba atomowa Z maleje o 1." },
        { front: "Wychwyt elektronu (wychwyt K) – na czym polega i jak zmieniają się liczby A i Z?", back: "Jądro pochłania własny elektron z powłoki K, proton zamienia się w neutron. Liczba masowa A bez zmian, liczba atomowa Z maleje o 1." },
        { front: "Promieniowanie &gamma; (gamma) – charakterystyka i wpływ na liczby A i Z.", back: "Emisja fali elektromagnetycznej o wysokiej energii przez wzbudzone jądro. Nie zmienia liczby masowej A ani atomowej Z." },
        { front: "Które promieniowanie jest najbardziej, a które najmniej przenikliwe?", back: "Najbardziej przenikliwe jest promieniowanie &gamma; (zatrzymuje ołów/beton), najmniej &alpha; (zatrzymuje kartka papieru)." },
        { front: "Czym jest okres półtrwania (t1/2)?", back: "Czasem, po upływie którego połowa początkowej liczby jąder izotopu promieniotwórczego ulega rozpadowi." },
        { front: "Zależność na masę izotopu (m) pozostałą po czasie t, znając masę początkową (m0) i okres półtrwania.", back: "m = m0 / 2&circ;n, gdzie n to liczba cykli rozpadowych (t / t1/2)." },
        { front: "Szereg promieniotwórczy – definicja i końcowy produkt naturalnych szeregów.", back: "Ciąg rozpadów &alpha; i &beta;&circ;- prowadzący od nietrwałego nuklidu do stabilnego. Naturalne szeregi kończą się izotopami ołowiu (Pb) lub bizmutu (Bi)." },
        { front: "Rozszczepienie jądra atomowego (np. uranu-235) – na czym polega?", back: "Rozpad ciężkiego jądra po pochłonięciu neutronu na lżejsze fragmenty oraz nowe neutrony, inicjujące reakcję łańcuchową." },
        { front: "Fuzja jądrowa (synteza termojądrowa) – definicja.", back: "Łączenie się lekkich jąder atomowych (np. izotopów wodoru) w jądro cięższe w bardzo wysokiej temperaturze, z wydzieleniem ogromnej ilości energii." },
        { front: "Pierwsza w historii sztuczna reakcja jądrowa (Rutherford, 1919 r.).", back: "Bombardowanie azotu-14 cząstkami &alpha;, w wyniku czego powstał tlen-17 i proton." },
        { front: "Dualizm korpuskularno-falowy (hipoteza de Broglie'a).", back: "Elektron ma jednocześnie właściwości cząstki materialnej (masa, pęd) oraz fali elektromagnetycznej." },
        { front: "Zasada nieoznaczoności Heisenberga.", back: "Nie jest możliwe jednoczesne, dokładne wyznaczenie położenia oraz pędu elektronu w atomie." },
        { front: "Definicja orbitalu atomowego.", back: "Funkcja falowa opisująca stan energetyczny elektronu. Jej kwadrat określa prawdopodobieństwo znalezienia elektronu w danym obszarze przestrzeni." },
        { front: "Czym jest kontur orbitalu atomowego?", back: "Bryłą geometryczną ograniczającą przestrzeń, w której prawdopodobieństwo znalezienia elektronu wynosi około 90%." },
        { front: "Co określa główna liczba kwantowa (n) i jakie ma wartości?", back: "Określa energię elektronu, rozmiar orbitalu i powłokę elektronową (K, L, M...). Przyjmuje liczby naturalne." },
        { front: "Co określa poboczna liczba kwantowa (l) i jakie ma wartości?", back: "Określa kształt orbitalu i podpowłokę elektronową (s, p, d, f). Przyjmuje wartości całkowite od 0 do n-1." },
        { front: "Co określa magnetyczna liczba kwantowa (m) i jakie ma wartości?", back: "Określa orientację przestrzenną orbitalu i liczbę poziomów orbitalnych (klatek). Przyjmuje wartości całkowite od -l do +l." },
        { front: "Co określa magnetyczna spinowa liczba kwantowa (ms) i jakie ma wartości?", back: "Określa orientację wektora spinu elektronu w zewnętrznym polu magnetycznym. Przyjmuje wartości +1/2 lub -1/2." },
        { front: "Kształt orbitalu typu s (l=0).", back: "Symetria sferyczna (kształt kuli)." },
        { front: "Kształt orbitalu typu p (l=1).", back: "Kształt dwulistnej bryły (przestrzennej ósemki/hantli) zorientowanej wzdłuż osi x, y lub z układu współrzędnych." },
        { front: "Maksymalna liczba elektronów na powłoce o numerze n.", back: "Wzór to 2n&circ;2 (np. powłoka M dla n=3 pomieści maksymalnie 18 elektronów)." },
        { front: "Pojemność elektronowa i liczba poziomów orbitalnych podpowłok s, p, d, f.", back: "s: 2 elektrony (1 klatka), p: 6 elektronów (3 klatki), d: 10 elektronów (5 klatek), f: 14 elektronów (7 klatek)." },
        { front: "Zakaz Pauliego.", back: "W jednym atomie nie mogą istnieć dwa elektrony o identycznych wartościach wszystkich czterech liczb kwantowych (orbital mieści max 2 elektrony o przeciwnych spinach)." },
        { front: "Reguła Hunda.", back: "W podpowłoce atomy przyjmują konfigurację o maksymalnej liczbie elektronów niesparowanych." },
        { front: "Zasada minimum energii (reguła rozbudowy).", back: "Elektrony zapełniają podpowłoki w kolejności rosnącej energii." },
        { front: "Kolejność zapełniania podpowłok elektronowych od 1s do 4p.", back: "1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p." },
        { front: "Na czym polega promocja elektronowa atomu chromu (Cr)?", back: "Na samorzutnym przeskoku elektronu z podpowłoki 4s na 3d. Konfiguracja walencyjna to 4s1 3d5." },
        { front: "Na czym polega promocja elektronowa atomu miedzi (Cu)?", back: "Na samorzutnym przeskoku elektronu z podpowłoki 4s na 3d. Konfiguracja walencyjna to 4s1 3d10." },
        { front: "Jaka jest zasada tworzenia kationów metali bloku d (np. Fe -> Fe2+)?", back: "Elektrony odrywane są w pierwszej kolejności z zewnętrznej podpowłoki s (np. 4s), a dopiero potem z podpowłoki d." },
        { front: "Jak prawidłowo zapisać skróconą konfigurację jonu siarczkowego (S2-) na maturze?", back: "[Ne] 3s2 3p6 (Zapisywanie na egzaminie samego symbolu [Ar] jako konfiguracji jest błędem)." },
        { front: "Co to są elektrony sparowane?", back: "Para elektronów zajmujących ten sam poziom orbitalny (jedną klatkę), posiadających przeciwne orientacje spinu." },
        { front: "Ile elektronów niesparowanych posiada atom żelaza w stanie podstawowym (konfiguracja walencyjna 4s2 3d6)?", back: "4 elektrony niesparowane (wszystkie zlokalizowane na podpowłoce 3d)." },
        { front: "Ile elektronów niesparowanych posiada atom chromu w stanie podstawowym?", back: "6 elektronów niesparowanych (1 na podpowłoce 4s i 5 na podpowłoce 3d)." },
        { front: "Co to jest stan wzbudzony atomu?", back: "Nietrwały stan wywołany dostarczeniem energii, w którym co najmniej jeden elektron przeskoczył na wyższy poziom energetyczny." },
        { front: "Co określa numer okresu w układzie okresowym (z wyjątkiem palladu)?", back: "Liczbę powłok elektronowych w atomie zajętych przez elektrony." },
        { front: "Jak obliczyć liczbę elektronów walencyjnych na podstawie numeru grupy?", back: "Grupy 1-12: równa numerowi grupy. Grupy 13-18: numer grupy minus 10 (wyjątkiem jest hel, który ma 2)." },
        { front: "Które pierwiastki należą do bloku konfiguracyjnego s?", back: "Pierwiastki grup 1 i 2 oraz wodór i hel (elektrony walencyjne obsadzają podpowłokę ns)." },
        { front: "Które pierwiastki należą do bloku konfiguracyjnego p?", back: "Pierwiastki grup 13-18 z wyjątkiem helu (elektrony walencyjne na podpowłokach ns i np)." },
        { front: "Które pierwiastki należą do bloku konfiguracyjnego d?", back: "Metale przejściowe grup 3-12 (elektrony walencyjne obsadzają podpowłoki ns i (n-1)d)." },
        { front: "Jak zmienia się promień atomowy w układzie okresowym?", back: "Rośnie w dół grupy (zwiększa się liczba powłok) i maleje w prawo w okresie (rośnie ładunek jądra przyciągający elektrony)." },
        { front: "Porównaj promienie kationu i anionu z promieniem macierzystego atomu.", back: "Kation jest zawsze mniejszy od atomu macierzystego, a anion jest od niego zawsze większy." },
        { front: "Jak zmienia się promień drobin w szeregu izoelektronowym (np. S2-, Cl-, K+, Ca2+)?", back: "Promień maleje wraz ze wzrostem liczby atomowej Z, ponieważ ta sama liczba elektronów jest silniej przyciągana przez rosnący ładunek jądra." },
        { front: "Definicja energii jonizacji.", back: "Minimalna energia niezbędna do oderwania najsłabiej związanego elektronu od obojętnego atomu w stanie gazowym." },
        { front: "Jak zmienia się pierwsza energia jonizacji w układzie okresowym?", back: "Maleje w dół grupy (elektrony są słabiej przyciągane) i rośnie w prawo w okresie (maleje promień, co utrudnia oderwanie elektronu)." }
    ]
};