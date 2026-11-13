// Dział IV. Kinetyka i statyka chemiczna. Energetyka reakcji (Indeks 3 na liście)
appData[3] = {
    notatki: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">📚 KOMPENDIUM MATURALNE: KINETYKA I STATYKA CHEMICZNA. ENERGETYKA REAKCJI (TERMOCHEMIA)</h2>

        <!-- SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Podstawy Termodynamiki Chemicznej – Układ, Otoczenie i Efekty Energetyczne Przemian</h3>

            <h4>A. Definicja układu, otoczenia i parametrów stanu</h4>
            <p>W termodynamice chemicznej <strong>układem</strong> nazywamy wyodrębnioną część przestrzeni wraz z zawartą w niej materią (np. mieszaninę reakcyjną w probówce lub kolbie), która stanowi przedmiot bezpośredniej obserwacji i opisu fizykochemicznego. Wszystko, co znajduje się poza granicami układu i może z nim oddziaływać, stanowi <strong>otoczenie</strong> (np. ścianki naczynia, łaźnia wodna, powietrze w laboratorium). Stan każdego układu opisuje się za pomocą mierzalnych wielkości fizycznych nazywanych <strong>parametrami stanu</strong>, do których należą: temperatura (<i>T</i> [K]), ciśnienie (<i>p</i> [Pa, hPa]), objętość (<i>V</i> [dm<sup>3</sup>, m<sup>3</sup>]) oraz skład chemiczny wyrażony liczbą moli składników (<i>n</i> [mol]) lub ich stężeniem molowym (<i>C</i> [mol &middot; dm<sup>&minus;3</sup>]).</p>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Typ układu</th>
                            <th>Wymiana z otoczeniem</th>
                            <th>Przykłady laboratoryjne</th>
                            <th>Znaczenie w zadaniach maturalnych</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Układ otwarty</strong></td>
                            <td>Wymienia z otoczeniem zarówno <strong>masę (substancję)</strong>, jak i <strong>energię</strong> (ciepło, pracę).</td>
                            <td>Reakcja cynku z kwasem solnym w otwartej zlewce lub probówce; sublimacja suchego lodu CO<sub>2(s)</sub> na szkiełku zegarkowym.</td>
                            <td>W układzie otwartym ucieczka lotnego produktu (np. H<sub>2</sub>&uarr;, CO<sub>2</sub>&uarr;) uniemożliwia ustalenie stanu równowagi chemicznej – reakcja biegnie do końca.</td>
                        </tr>
                        <tr>
                            <td><strong>Układ zamknięty</strong></td>
                            <td>Wymienia z otoczeniem <strong>wyłącznie energię</strong>; nie wymienia masy (granica nieprzepuszczalna dla materii).</td>
                            <td>Szczelnie zakorkowana kolba z mieszaniną gazów NO<sub>2</sub> i N<sub>2</sub>O<sub>4</sub> zanurzona w łaźni wodnej lub lodowej; zamknięty reaktor ciśnieniowy.</td>
                            <td>Warunek konieczny do osiągnięcia stanu równowagi dynamicznej w reakcjach odwracalnych z udziałem reagentów gazowych.</td>
                        </tr>
                        <tr>
                            <td><strong>Układ izolowany</strong></td>
                            <td>Nie wymienia z otoczeniem <strong>ani masy, ani energii</strong> (całkowita izolacja termiczna i materiałowa).</td>
                            <td>Szczelnie zamknięty kalorymetr lub termos o idealnych ściankach adiabatycznych (w praktyce jest to model wyidealizowany).</td>
                            <td>Energia wewnętrzna układu izolowanego pozostaje stała (&Delta;<i>U</i> = 0). Całe wydzielone ciepło reakcji zużywane jest na ogrzanie zawartości kalorymetru.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>B. Energia wewnętrzna układu (<i>U</i>) i I zasada termodynamiki</h4>
            <p>Każda substancja wchodząca w skład układu gromadzi w sobie ściśle określony zasób energii nazywany <strong>energią wewnętrzną (<i>U</i>)</strong>, wyrażaną w dżulach [J] lub kilodżulach [kJ]. Na energię wewnętrzną układu składają się: energia kinetyczna ruchów translacyjnych (postępowych), rotacyjnych (obrotowych) i oscylacyjnych (drgań) drobin, energia wiązań chemicznych i oddziaływań międzycząsteczkowych, energia elektronów w atomach oraz energia jądrowa. Energia wewnętrzna <strong>nie obejmuje</strong> natomiast energii kinetycznej i potencjalnej całego układu traktowanego makroskopowo (nie zależy od tego, czy probówka spoczywa na stole, czy znajduje się w ruchu). Nie można wyznaczyć bezwzględnej wartości <i>U</i>, lecz jedynie jej zmianę (&Delta;<i>U</i> = <i>U</i><sub>produktów</sub> &minus; <i>U</i><sub>substratów</sub>). Zgodnie z <strong>I zasadą termodynamiki (zasadą zachowania energii)</strong>, zmiana energii wewnętrznej układu zamkniętego zachodzi poprzez wymianę ciepła (<i>Q</i>) lub wykonanie pracy (<i>W</i>), np. pracy objętościowej związanej ze sprężaniem bądź rozprężaniem gazów:</p>
            <div class="chem-eq">
                &Delta;<i>U</i> = <i>Q</i> + <i>W</i> &nbsp;&nbsp;(gdzie dla pracy objętościowej przeciw ciśnieniu zewnętrznemu: <i>W</i> = &minus;<i>p</i> &middot; &Delta;<i>V</i>)
            </div>

            <h4>C. Pojęcie entalpii (<i>H</i>) i efektu cieplnego reakcji (&Delta;<i>H</i>)</h4>
            <p>Zdecydowana większość reakcji w laboratorium chemicznym przebiega w naczyniach otwartych pod stałym ciśnieniem atmosferycznym (<i>p</i> = const, przemiana izobaryczna). Ciepło wymieniane z otoczeniem pod stałym ciśnieniem (<i>Q<sub>p</sub></i>) jest równe zmianie funkcji stanu zwanej <strong>entalpią (<i>H</i> = <i>U</i> + <i>pV</i>)</strong>. Zmianę entalpii układu oznacza się symbolem <strong>&Delta;<i>H</i></strong> i definiuje jako różnicę entalpii produktów (stanu końcowego) i entalpii substratów (stanu początkowego):</p>
            <div class="chem-eq">
                &Delta;<i>H</i> = <i>H</i><sub>produktów</sub> &minus; <i>H</i><sub>substratów</sub> = <i>Q<sub>p</sub></i> &nbsp;&nbsp;[kJ] lub [kJ &middot; mol<sup>&minus;1</sup>]
            </div>
            <p>Zgodnie z <strong>konwencją termodynamiczną (egoistyczną)</strong> wszystkie znaki efektów energetycznych określa się z punktu widzenia układu reagującego (a nie otoczenia czy termometru!). Jeżeli układ pobiera energię z otoczenia, jego entalpia rośnie (<strong>&Delta;<i>H</i> &gt; 0</strong>). Jeżeli układ oddaje energię do otoczenia, jego zasób energii maleje, stąd zmiana entalpii przyjmuje znak ujemny (<strong>&Delta;<i>H</i> &lt; 0</strong>).</p>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Kryterium porównawcze</th>
                            <th>Proces egzoenergetyczny / egzotermiczny</th>
                            <th>Proces endoenergetyczny / endotermiczny</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Kierunek przepływu energii</strong></td>
                            <td>Układ <strong>wydziela (oddaje)</strong> energię (na sposób ciepła, światła lub pracy) do otoczenia: <strong>Układ &rarr; Otoczenie</strong>.</td>
                            <td>Układ <strong>pobiera (pochłania)</strong> energię (najczęściej w postaci ciepła lub światła) z otoczenia: <strong>Otoczenie &rarr; Układ</strong>.</td>
                        </tr>
                        <tr>
                            <td><strong>Relacja energii i znak &Delta;<i>H</i></strong></td>
                            <td><i>H</i><sub>produktów</sub> &lt; <i>H</i><sub>substratów</sub> &rArr; <strong>&Delta;<i>H</i> &lt; 0 (wartość ujemna)</strong>. Produkty są uboższe energetycznie i trwalsze termodynamicznie od substratów.</td>
                            <td><i>H</i><sub>produktów</sub> &gt; <i>H</i><sub>substratów</sub> &rArr; <strong>&Delta;<i>H</i> &gt; 0 (wartość dodatnia)</strong>. Produkty mają wyższą energię wewnętrzną niż substraty.</td>
                        </tr>
                        <tr>
                            <td><strong>Zmiana temperatury otoczenia (obserwacja)</strong></td>
                            <td>Temperatura mieszaniny i ścianek naczynia <strong>wzrasta</strong> (probówka staje się gorąca, bo otoczenie przejmuje oddane przez układ ciepło).</td>
                            <td>Temperatura mieszaniny i ścianek naczynia <strong>maleje</strong> (probówka silnie się oziębia, na ściankach może wykraplać się para wodna lub szron).</td>
                        </tr>
                        <tr>
                            <td><strong>Przykłady reakcji chemicznych</strong></td>
                            <td>• Wszystkie reakcje spalania (np. CH<sub>4</sub> + 2O<sub>2</sub> &rarr; CO<sub>2</sub> + 2H<sub>2</sub>O)<br>• Reakcje metali z kwasami (np. Mg + 2HCl &rarr; MgCl<sub>2</sub> + H<sub>2</sub>&uarr;)<br>• Reakcje zobojętniania mocnych kwasów i zasad (H<sup>+</sup> + OH<sup>&minus;</sup> &rarr; H<sub>2</sub>O)<br>• Synteza amoniaku (N<sub>2</sub> + 3H<sub>2</sub> &#8652; 2NH<sub>3</sub>) oraz SO<sub>3</sub> (2SO<sub>2</sub> + O<sub>2</sub> &#8652; 2SO<sub>3</sub>)</td>
                            <td>• Reakcje rozkładu termicznego (np. CaCO<sub>3</sub> &rarr; CaO + CO<sub>2</sub>&uarr;, 2HgO &rarr; 2Hg + O<sub>2</sub>&uarr;)<br>• Reakcja wodorowęglanu sodu z kwasem octowym lub cytrynowym (NaHCO<sub>3</sub> + CH<sub>3</sub>COOH &rarr; CH<sub>3</sub>COONa + H<sub>2</sub>O + CO<sub>2</sub>&uarr;)<br>• Synteza tlenku azotu(II) z pierwiastków (N<sub>2</sub> + O<sub>2</sub> &#8652; 2NO) oraz synteza jodowodoru.</td>
                        </tr>
                        <tr>
                            <td><strong>Przykłady przemian fizycznych</strong></td>
                            <td>• Krzepnięcie cieczy, skraplanie pary wodnej, resublimacja.<br>• Rozpuszczanie w wodzie stałego NaOH, KOH lub stężonego kwasu H<sub>2</sub>SO<sub>4</sub> (silna hydratacja jonów z wydzieleniem ciepła).</td>
                            <td>• Topnienie lodu, parowanie wody, sublimacja suchego lodu.<br>• Rozpuszczanie w wodzie azotanu(V) amonu (NH<sub>4</sub>NO<sub>3</sub>), chlorku amonu (NH<sub>4</sub>Cl) lub KNO<sub>3</sub> (mieszaniny oziębiające).</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>D. Wykresy zmian energii (profile energetyczne) w reakcjach egzo- i endoenergetycznych</h4>
            <p>Aby zderzenie cząsteczek substratów doprowadziło do zerwania dotychczasowych wiązań chemicznych i utworzenia nowych wiązań w produktach, reagujące drobiny muszą pokonać barierę energetyczną zwaną <strong>energią aktywacji (<i>E<sub>a</sub></i>)</strong> i utworzyć nietrwały stan przejściowy o maksymalnej energii – tzw. <strong>kompleks aktywny</strong> (oznaczany symbolem [AB]<sup>*</sup> lub [ABC]<sup>*</sup>). Wartość energii aktywacji (<i>E<sub>a</sub></i> &gt; 0) na wykresie odczytuje się zawsze od poziomu energetycznego substratów do samego szczytu bariery energetycznej (wierzchołka krzywej), natomiast efekt cieplny reakcji (&Delta;<i>H</i>) stanowi różnicę poziomów energetycznych między produktami a substratami.</p>

            <!-- WYKRES 1: PROFILE ENERGETYCZNE (SVG) -->
            <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 12px; padding: 14px; margin: 16px 0; text-align: center;">
                <svg viewBox="0 0 780 290" style="width: 100%; max-width: 780px; height: auto;">
                    <defs>
                        <marker id="arr-axis" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
                        </marker>
                        <marker id="arr-blue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
                        </marker>
                        <marker id="arr-red" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#f87171"/>
                        </marker>
                    </defs>

                    <!-- WYKRES A: EGZOENERGETYCZNA -->
                    <text x="195" y="22" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">a) Reakcja egzoenergetyczna (&Delta;H &lt; 0)</text>
                    <line x1="45" y1="245" x2="45" y2="35" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <line x1="45" y1="245" x2="365" y2="245" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <text x="30" y="45" fill="#cbd5e1" font-size="13" font-weight="bold">E</text>
                    <text x="205" y="272" fill="#cbd5e1" font-size="12" text-anchor="middle">Postęp (droga) reakcji</text>

                    <!-- Linie pomocnicze A -->
                    <line x1="45" y1="55" x2="230" y2="55" stroke="#64748b" stroke-dasharray="4,4"/>
                    <line x1="115" y1="145" x2="290" y2="145" stroke="#64748b" stroke-dasharray="4,4"/>
                    <line x1="45" y1="215" x2="280" y2="215" stroke="#64748b" stroke-dasharray="4,4"/>

                    <!-- Krzywa A -->
                    <path d="M 55 145 L 115 145 C 145 145, 155 55, 190 55 C 225 55, 240 215, 275 215 L 345 215" fill="none" stroke="#60a5fa" stroke-width="3.2"/>
                    <text x="85" y="135" fill="#e2e8f0" font-size="12" font-weight="bold" text-anchor="middle">Substraty</text>
                    <text x="85" y="162" fill="#94a3b8" font-size="11" text-anchor="middle">(E<tspan dy="3" font-size="9">s</tspan><tspan dy="-3">)</tspan></text>
                    <text x="315" y="205" fill="#e2e8f0" font-size="12" font-weight="bold" text-anchor="middle">Produkty</text>
                    <text x="315" y="232" fill="#94a3b8" font-size="11" text-anchor="middle">(E<tspan dy="3" font-size="9">p</tspan><tspan dy="-3">)</tspan></text>
                    <text x="190" y="44" fill="#38bdf8" font-size="11.5" font-weight="bold" text-anchor="middle">Kompleks aktywny [AB]*</text>

                    <!-- Strzałki Ea i dH dla A -->
                    <line x1="190" y1="145" x2="190" y2="60" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr-blue)"/>
                    <text x="200" y="108" fill="#38bdf8" font-size="12" font-weight="bold">E<tspan dy="3" font-size="9">a</tspan><tspan dy="-3"> &gt; 0</tspan></text>
                    <line x1="255" y1="145" x2="255" y2="210" stroke="#f87171" stroke-width="2" marker-end="url(#arr-red)"/>
                    <text x="248" y="185" fill="#f87171" font-size="12" font-weight="bold" text-anchor="end">&Delta;H &lt; 0</text>

                    <!-- WYKRES B: ENDOENERGETYCZNA -->
                    <text x="585" y="22" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">b) Reakcja endoenergetyczna (&Delta;H &gt; 0)</text>
                    <line x1="435" y1="245" x2="435" y2="35" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <line x1="435" y1="245" x2="755" y2="245" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <text x="420" y="45" fill="#cbd5e1" font-size="13" font-weight="bold">E</text>
                    <text x="595" y="272" fill="#cbd5e1" font-size="12" text-anchor="middle">Postęp (droga) reakcji</text>

                    <!-- Linie pomocnicze B -->
                    <line x1="435" y1="55" x2="620" y2="55" stroke="#64748b" stroke-dasharray="4,4"/>
                    <line x1="505" y1="215" x2="680" y2="215" stroke="#64748b" stroke-dasharray="4,4"/>
                    <line x1="595" y1="145" x2="680" y2="145" stroke="#64748b" stroke-dasharray="4,4"/>

                    <!-- Krzywa B -->
                    <path d="M 445 215 L 505 215 C 535 215, 545 55, 580 55 C 615 55, 630 145, 665 145 L 735 145" fill="none" stroke="#60a5fa" stroke-width="3.2"/>
                    <text x="475" y="205" fill="#e2e8f0" font-size="12" font-weight="bold" text-anchor="middle">Substraty</text>
                    <text x="475" y="232" fill="#94a3b8" font-size="11" text-anchor="middle">(E<tspan dy="3" font-size="9">s</tspan><tspan dy="-3">)</tspan></text>
                    <text x="705" y="135" fill="#e2e8f0" font-size="12" font-weight="bold" text-anchor="middle">Produkty</text>
                    <text x="705" y="162" fill="#94a3b8" font-size="11" text-anchor="middle">(E<tspan dy="3" font-size="9">p</tspan><tspan dy="-3">)</tspan></text>
                    <text x="580" y="44" fill="#38bdf8" font-size="11.5" font-weight="bold" text-anchor="middle">Kompleks aktywny [AB]*</text>

                    <!-- Strzałki Ea i dH dla B -->
                    <line x1="580" y1="215" x2="580" y2="60" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr-blue)"/>
                    <text x="588" y="130" fill="#38bdf8" font-size="12" font-weight="bold">E<tspan dy="3" font-size="9">a</tspan><tspan dy="-3"> &gt; 0</tspan></text>
                    <line x1="650" y1="215" x2="650" y2="150" stroke="#f87171" stroke-width="2" marker-end="url(#arr-red)"/>
                    <text x="658" y="188" fill="#f87171" font-size="12" font-weight="bold">&Delta;H &gt; 0</text>
                </svg>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 6px;">
                    <strong>Rys. 1.</strong> Porównanie profili energetycznych reakcji: a) egzoenergetycznej (<i>E<sub>p</sub></i> &lt; <i>E<sub>s</sub></i>, &Delta;<i>H</i> &lt; 0) oraz b) endoenergetycznej (<i>E<sub>p</sub></i> &gt; <i>E<sub>s</sub></i>, &Delta;<i>H</i> &gt; 0).
                </div>
            </div>

            <div class="note-alert danger">
                🔥 <strong>UWAGA MATURALNA – Energia aktywacji a efekt energetyczny oraz związek dla reakcji odwracalnej:</strong>
                <ul class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li>Każda reakcja chemiczna (zarówno endoenergetyczna, jak i silnie egzoenergetyczna, np. spalanie węgla czy benzyny) wymaga dostarczenia pewnej początkowej porcji energii – <strong>energii aktywacji (<i>E<sub>a</sub></i> &gt; 0)</strong> – w celu zainicjowania zderzeń efektywnych. To, że mieszaninę trzeba początkowo ogrzać lub zapalić iskrą, <strong>nie oznacza</strong>, że reakcja jest endoenergetyczna! O tym, czy reakcja jest egzo- czy endoenergetyczna, decyduje wyłącznie bilans netto energii (znak &Delta;<i>H</i> = <i>H<sub>p</sub></i> &minus; <i>H<sub>s</sub></i>).</li>
                    <li>Dla reakcji odwracalnej zachodzi ścisła zależność między energią aktywacji reakcji biegnącej w prawo (<i>E</i><sub>a(wprost)</sub>), energią aktywacji reakcji biegnącej w lewo (<i>E</i><sub>a(odwr)</sub>) oraz entalpią przemiany:<br>
                    <strong>&Delta;<i>H</i> = <i>E</i><sub>a(wprost)</sub> &minus; <i>E</i><sub>a(odwr)</sub></strong>.<br>
                    W reakcji egzotermicznej bariera <i>E</i><sub>a(wprost)</sub> jest zawsze mniejsza niż bariera <i>E</i><sub>a(odwr)</sub>, natomiast w reakcji endotermicznej zachodzi relacja odwrotna: <i>E</i><sub>a(wprost)</sub> &gt; <i>E</i><sub>a(odwr)</sub>.</li>
                </ul>
            </div>
        </div>

        <!-- SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Termochemia – Równania Termochemiczne, Entalpia Standardowa i Prawo Hessa</h3>

            <h4>A. Warunki standardowe w termochemii (nie mylić z warunkami normalnymi dla gazów!)</h4>
            <p>Ponieważ efekt cieplny reakcji zależy od ciśnienia, temperatury oraz stanu skupienia reagentów, pomiary termochemiczne odnosi się do ściśle zdefiniowanych <strong>warunków standardowych</strong>: ciśnienie standardowe <strong><i>p</i>&deg; = 10<sup>5</sup> Pa = 1000 hPa = 1 bar</strong> (w starszych tablicach 1013,25 hPa = 1 atm) oraz temperatura <strong><i>T</i> = 298,15 K (25&deg;C)</strong>, przy czym każdy reagent występuje w swojej najtrwalszej w tych warunkach odmianie alotropowej i stanie skupienia. Zmianę entalpii wyznaczoną w warunkach standardowych oznacza się symbolem <strong>&Delta;<i>H</i>&deg;</strong> i wyraża w <strong>kJ &middot; mol<sup>&minus;1</sup></strong>. (Dla przypomnienia: warunki normalne stosowane w obliczeniach objętości molowej gazu <i>V<sub>m</sub></i> = 22,4 dm<sup>3</sup> &middot; mol<sup>&minus;1</sup> to <i>T</i> = 273,15 K = 0&deg;C i <i>p</i> = 1013,25 hPa).</p>

            <h4>B. Zasady zapisu i interpretacji równań termochemicznych</h4>
            <p><strong>Równanie termochemiczne</strong> to uzgodnione równanie reakcji chemicznej zawierające wartość efektu cieplnego &Delta;<i>H</i> (lub &Delta;<i>H</i>&deg;) oraz <strong>obowiązkowe oznaczenia stanów skupienia</strong> (lub odmian alotropowych) wszystkich substratów i produktów zapisane w indeksie dolnym: <strong>(s)</strong> – ciało stałe (<em>solid</em>), <strong>(c)</strong> lub <strong>(l)</strong> – ciecz (<em>liquid</em>), <strong>(g)</strong> – gaz (<em>gas</em>), <strong>(aq)</strong> – roztwór wodny (<em>aqueous</em>). Stan skupienia ma kluczowe znaczenie, gdyż przemianom fazowym towarzyszy wymiana ciepła (np. podczas skraplania 1 mola pary wodnej H<sub>2</sub>O<sub>(g)</sub> &rarr; H<sub>2</sub>O<sub>(c)</sub> wydziela się dodatkowe 44 kJ energii):</p>
            <div class="chem-eq">
                • Spalanie wodoru z utworzeniem pary wodnej: &nbsp; H<sub>2(g)</sub> + &frac12; O<sub>2(g)</sub> &rarr; H<sub>2</sub>O<sub>(g)</sub> &nbsp;&nbsp; &Delta;<i>H</i>&deg;<sub>1</sub> = &minus;241,8 kJ &middot; mol<sup>&minus;1</sup><br>
                • Spalanie wodoru z utworzeniem wody ciekłej: &nbsp; H<sub>2(g)</sub> + &frac12; O<sub>2(g)</sub> &rarr; H<sub>2</sub>O<sub>(c)</sub> &nbsp;&nbsp; &Delta;<i>H</i>&deg;<sub>2</sub> = &minus;285,8 kJ &middot; mol<sup>&minus;1</sup>
            </div>
            <p>W równaniach termochemicznych dopuszcza się stosowanie <strong>ułamkowych współczynników stechiometrycznych</strong>, ponieważ wartość &Delta;<i>H</i>&deg; wyrażona w kJ &middot; mol<sup>&minus;1</sup> odnosi się do tzw. 1 mola postępu reakcji (czyli do dokładnie takiej liczby moli reagentów, jaka widnieje przed ich wzorami w zapisanym równaniu). Jeżeli pomnożymy lub podzielimy wszystkie współczynniki równania przez dowolną liczbę (np. przez 2), wartość &Delta;<i>H</i>&deg; należy pomnożyć lub podzielić przez tę samą liczbę:</p>
            <div class="chem-eq">
                • Dla 1 mola N<sub>2</sub> (2 moli NH<sub>3</sub>): &nbsp; N<sub>2(g)</sub> + 3 H<sub>2(g)</sub> &rarr; 2 NH<sub>3(g)</sub> &nbsp;&nbsp; &Delta;<i>H</i>&deg; = &minus;92,2 kJ &nbsp;(na 2 mole powstającego NH<sub>3</sub>)<br>
                • Dla &frac12; mola N<sub>2</sub> (1 mola NH<sub>3</sub>): &nbsp; &frac12; N<sub>2(g)</sub> + &frac32; H<sub>2(g)</sub> &rarr; NH<sub>3(g)</sub> &nbsp;&nbsp; &Delta;<i>H</i>&deg;<sub>tw</sub> = &minus;46,1 kJ &middot; mol<sup>&minus;1</sup> &nbsp;(na 1 mol powstającego NH<sub>3</sub>)
            </div>

            <h4>C. Kluczowe wielkości termochemiczne i prawa fundamentalne</h4>
            <ol class="note-list">
                <li><strong>Standardowa entalpia tworzenia związku chemicznego (&Delta;<sub>tw</sub><i>H</i>&deg; lub &Delta;<i>H</i>&deg;<sub>tw</sub>):</strong> Efekt cieplny reakcji syntezy <strong>1 mola</strong> danego związku chemicznego bezpośrednio z pierwiastków wziętych w ich najtrwalszych w warunkach standardowych stanach skupienia i odmianach alotropowych (w temp. 298,15 K i pod ciśnieniem 10<sup>5</sup> Pa).<br>
                <strong>Żelazna reguła:</strong> Umownie przyjęto, że standardowa entalpia tworzenia każdego pierwiastka chemicznego w jego podstawowym stanie skupienia i najtrwalszej odmianie alotropowej jest równa zeru (<strong>&Delta;<sub>tw</sub><i>H</i>&deg; = 0 kJ &middot; mol<sup>&minus;1</sup></strong>). Dotyczy to np.: C<sub>(grafit)</sub>, O<sub>2(g)</sub>, H<sub>2(g)</sub>, N<sub>2(g)</sub>, Cl<sub>2(g)</sub>, Br<sub>2(c)</sub>, I<sub>2(s)</sub>, S<sub>(s, rombowa)</sub>, P<sub>(s, biały)</sub>, Na<sub>(s)</sub>, Fe<sub>(s)</sub>, Hg<sub>(c)</sub>. <em>Uwaga:</em> Dla nietrwałych odmian alotropowych (np. C<sub>(diament)</sub>, O<sub>3(g)</sub>) lub pierwiastków w innym stanie skupienia (np. Br<sub>2(g)</sub>, I<sub>2(g)</sub>) wartość &Delta;<sub>tw</sub><i>H</i>&deg; jest różna od zera!</li>
                <li><strong>Standardowa entalpia spalania (&Delta;<sub>sp</sub><i>H</i>&deg; lub &Delta;<i>H</i>&deg;<sub>sp</sub>):</strong> Efekt cieplny całkowitego spalenia <strong>1 mola</strong> danej substancji (pierwiastka lub związku chemicznego) w czystym tlenie O<sub>2(g)</sub> w warunkach standardowych, prowadzącego do powstania najtrwalszych produktów utlenienia: dla węgla – CO<sub>2(g)</sub>, dla wodoru – ciekłej wody H<sub>2</sub>O<sub>(c)</sub>, dla siarki – SO<sub>2(g)</sub>, dla azotu – wolnego N<sub>2(g)</sub>.</li>
                <li><strong>Prawo Lavoisiera–Laplace’a (1780 r.):</strong> Efekt cieplny reakcji rozkładu danego związku chemicznego jest co do wartości bezwzględnej równy efektowi cieplnemu jego syntezy (tworzenia), lecz ma przeciwny znak. Ogólniej: odwrócenie kierunku zapisu dowolnego równania termochemicznego powoduje zmianę znaku entalpii &Delta;<i>H</i> na przeciwny:<br>
                <strong>&Delta;<i>H</i><sub>rozkładu</sub> = &minus;&Delta;<i>H</i><sub>tworzenia</sub></strong> &nbsp;(np. skoro dla H<sub>2</sub>O<sub>(c)</sub>: &Delta;<sub>tw</sub><i>H</i>&deg; = &minus;285,8 kJ &middot; mol<sup>&minus;1</sup>, to dla rozkładu H<sub>2</sub>O<sub>(c)</sub> &rarr; H<sub>2(g)</sub> + &frac12; O<sub>2(g)</sub>: &Delta;<i>H</i>&deg; = +285,8 kJ &middot; mol<sup>&minus;1</sup>).</li>
                <li><strong>Prawo Hessa (podstawowe prawo termochemii, 1840 r.):</strong> Ciepło reakcji chemicznej przebiegającej pod stałym ciśnieniem (&Delta;<i>H</i>) lub w stałej objętości (&Delta;<i>U</i>) nie zależy od drogi przemiany (liczby i rodzaju etapów pośrednich), a zależy wyłącznie od stanu początkowego (substratów) i stanu końcowego (produktów) układu. Oznacza to, że równania termochemiczne można dodawać, odejmować i mnożyć stronami dokładnie tak samo jak równania algebraiczne.</li>
            </ol>

            <!-- WYKRES 2: CYKL TERMODYNAMICZNY HESSA (SVG) -->
            <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 12px; padding: 14px; margin: 16px 0; text-align: center;">
                <svg viewBox="0 0 760 210" style="width: 100%; max-width: 760px; height: auto;">
                    <defs>
                        <marker id="hess-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
                        </marker>
                        <marker id="hess-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#f87171"/>
                        </marker>
                    </defs>

                    <!-- Stan początkowy -->
                    <rect x="20" y="25" width="200" height="65" rx="8" fill="rgba(30, 41, 59, 0.9)" stroke="#38bdf8" stroke-width="2"/>
                    <text x="120" y="50" fill="#93c5fd" font-size="12" font-weight="bold" text-anchor="middle">STAN POCZĄTKOWY</text>
                    <text x="120" y="72" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">C<tspan dy="3" font-size="9">(grafit)</tspan><tspan dy="-3"> + O</tspan><tspan dy="3" font-size="9">2(g)</tspan></text>

                    <!-- Stan końcowy -->
                    <rect x="540" y="25" width="200" height="65" rx="8" fill="rgba(30, 41, 59, 0.9)" stroke="#38bdf8" stroke-width="2"/>
                    <text x="640" y="50" fill="#93c5fd" font-size="12" font-weight="bold" text-anchor="middle">STAN KOŃCOWY</text>
                    <text x="640" y="72" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">CO<tspan dy="3" font-size="9">2(g)</tspan></text>

                    <!-- Stan pośredni -->
                    <rect x="260" y="130" width="240" height="65" rx="8" fill="rgba(30, 41, 59, 0.9)" stroke="#f87171" stroke-width="2"/>
                    <text x="380" y="155" fill="#fca5a5" font-size="12" font-weight="bold" text-anchor="middle">STAN POŚREDNI</text>
                    <text x="380" y="177" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">CO<tspan dy="3" font-size="9">(g)</tspan><tspan dy="-3"> + &frac12; O</tspan><tspan dy="3" font-size="9">2(g)</tspan></text>

                    <!-- Strzałka Droga I -->
                    <line x1="225" y1="57" x2="532" y2="57" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#hess-blue)"/>
                    <text x="380" y="45" fill="#38bdf8" font-size="12.5" font-weight="bold" text-anchor="middle">Droga I (bezpośrednia): &Delta;H&deg; = &minus;393,5 kJ&middot;mol<tspan dy="-4" font-size="9">&minus;1</tspan></text>

                    <!-- Strzałka Etap 1 -->
                    <path d="M 120 92 L 120 162 L 252 162" fill="none" stroke="#f87171" stroke-width="2.5" marker-end="url(#hess-red)"/>
                    <text x="185" y="148" fill="#fca5a5" font-size="12" font-weight="bold" text-anchor="middle">Etap 1: &Delta;H&deg;<tspan dy="3" font-size="9">1</tspan><tspan dy="-3"> = &minus;110,5 kJ</tspan></text>

                    <!-- Strzałka Etap 2 -->
                    <path d="M 505 162 L 640 162 L 640 97" fill="none" stroke="#f87171" stroke-width="2.5" marker-end="url(#hess-red)"/>
                    <text x="575" y="148" fill="#fca5a5" font-size="12" font-weight="bold" text-anchor="middle">Etap 2: &Delta;H&deg;<tspan dy="3" font-size="9">2</tspan><tspan dy="-3"> = &minus;283,0 kJ</tspan></text>
                </svg>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 6px;">
                    <strong>Rys. 2.</strong> Cykl termodynamiczny Hessa: niezależnie od tego, czy grafit spalamy bezpośrednio do CO<sub>2</sub>, czy dwuetapowo przez CO, całkowity efekt cieplny jest identyczny: &Delta;<i>H</i>&deg; = &Delta;<i>H</i>&deg;<sub>1</sub> + &Delta;<i>H</i>&deg;<sub>2</sub> = &minus;110,5 + (&minus;283,0) = &minus;393,5 kJ &middot; mol<sup>&minus;1</sup>.
                </div>
            </div>

            <h4>D. Trzy algorytmy obliczania entalpii reakcji (&Delta;<i>H</i>&deg;) na maturze – uważaj na znaki i kolejność!</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Metoda obliczeniowa (dane wejściowe w zadaniu)</th>
                            <th>Wzór roboczy (kolejność odejmowania!)</th>
                            <th>Wyjaśnienie fizyczne i pułapki maturalne</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. Z entalpii tworzenia (&Delta;<sub>tw</sub><i>H</i>&deg;)</strong><br>Gdy w tabeli podano standardowe ciepła tworzenia reagentów.</td>
                            <td><strong>&Delta;<i>H</i>&deg;<sub>reakcji</sub> = &Sigma; <i>n<sub>i</sub></i> &middot; &Delta;<sub>tw</sub><i>H</i>&deg;<sub>(produktów)</sub> &minus; &Sigma; <i>n<sub>j</sub></i> &middot; &Delta;<sub>tw</sub><i>H</i>&deg;<sub>(substratów)</sub></strong><br><em>(Od produktów odejmujemy substraty!)</em></td>
                            <td>Każdą wartość tablicową &Delta;<sub>tw</sub><i>H</i>&deg; należy pomnożyć przez współczynnik stechiometryczny (<i>n</i>) stojący przed danym związkiem w równaniu reakcji. Dla wolnych pierwiastków podstawiamy <strong>0</strong>.</td>
                        </tr>
                        <tr>
                            <td><strong>2. Z entalpii spalania (&Delta;<sub>sp</sub><i>H</i>&deg;)</strong><br>Częste w chemii organicznej, gdy podano ciepła spalania węglowodorów, alkoholi, estrów.</td>
                            <td><strong>&Delta;<i>H</i>&deg;<sub>reakcji</sub> = &Sigma; <i>n<sub>j</sub></i> &middot; &Delta;<sub>sp</sub><i>H</i>&deg;<sub>(substratów)</sub> &minus; &Sigma; <i>n<sub>i</sub></i> &middot; &Delta;<sub>sp</sub><i>H</i>&deg;<sub>(produktów)</sub></strong><br><em>(Od substratów odejmujemy produkty!)</em></td>
                            <td>Kolejność jest <strong>odwrotna</strong> niż dla entalpii tworzenia! Jeśli w równaniu reakcji występuje tlen O<sub>2(g)</sub>, woda ciekła H<sub>2</sub>O<sub>(c)</sub> lub CO<sub>2(g)</sub>, to ich standardowe entalpie spalania wynoszą zero (&Delta;<sub>sp</sub><i>H</i>&deg; = 0), gdyż są to już produkty całkowitego spalenia.</td>
                        </tr>
                        <tr>
                            <td><strong>3. Z energii (entalpii) wiązań chemicznych (<i>E</i><sub>wiąz</sub>)</strong><br>Dla reakcji w fazie gazowej na podstawie tablic energii dysocjacji wiązań.</td>
                            <td><strong>&Delta;<i>H</i>&deg;<sub>reakcji</sub> &approx; &Sigma; <i>E</i><sub>wiąz (zrywanych w substratach)</sub> &minus; &Sigma; <i>E</i><sub>wiąz (tworzonych w produktach)</sub></strong><br><em>(Substraty minus produkty!)</em></td>
                            <td>Zerwanie wiązania wymaga dostarczenia energii (proces endoenergetyczny, znak +), natomiast tworzenie wiązania zawsze uwalnia energię (proces egzoenergetyczny, znak &minus;). Zalecane jest narysowanie wzorów kreskowych cząsteczek, aby nie pominąć żadnego wiązania (np. w CH<sub>4</sub> są 4 wiązania C&mdash;H, a w 2 H<sub>2</sub>O są 4 wiązania O&mdash;H).</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>E. Wzorcowe zadania maturalne z termochemii – rozwiązania krok po kroku</h4>

            <div class="chem-obs">
                📝 <strong>Przykład 1 (Prawo Hessa – metoda algebraiczna układania równań i metoda z entalpii spalania):</strong><br>
                <em>Oblicz standardową entalpię tworzenia gazowego metanu (CH<sub>4(g)</sub>) na podstawie poniższych danych termochemicznych dotyczących standardowych entalpii spalania:<br>
                (I) C<sub>(grafit)</sub> + O<sub>2(g)</sub> &rarr; CO<sub>2(g)</sub> &nbsp;&nbsp; &Delta;<sub>sp</sub><i>H</i>&deg;<sub>1</sub> = &minus;393,5 kJ &middot; mol<sup>&minus;1</sup><br>
                (II) H<sub>2(g)</sub> + &frac12; O<sub>2(g)</sub> &rarr; H<sub>2</sub>O<sub>(c)</sub> &nbsp;&nbsp; &Delta;<sub>sp</sub><i>H</i>&deg;<sub>2</sub> = &minus;285,8 kJ &middot; mol<sup>&minus;1</sup><br>
                (III) CH<sub>4(g)</sub> + 2 O<sub>2(g)</sub> &rarr; CO<sub>2(g)</sub> + 2 H<sub>2</sub>O<sub>(c)</sub> &nbsp;&nbsp; &Delta;<sub>sp</sub><i>H</i>&deg;<sub>3</sub> = &minus;890,3 kJ &middot; mol<sup>&minus;1</sup></em><br><br>
                • <strong>Krok 1 (Zapis równania docelowego):</strong> Szukamy entalpii tworzenia 1 mola CH<sub>4(g)</sub> z pierwiastków:<br>
                C<sub>(grafit)</sub> + 2 H<sub>2(g)</sub> &rarr; CH<sub>4(g)</sub> &nbsp;&nbsp; &Delta;<sub>tw</sub><i>H</i>&deg;(CH<sub>4</sub>) = ?<br>
                • <strong>Krok 2 (Sposób I – przekształcanie i sumowanie równań cząstkowych):</strong> Aby otrzymać równanie docelowe, równanie (I) pozostawiamy bez zmian (potrzebujemy 1 mola C<sub>(grafit)</sub> po lewej stronie), równanie (II) mnożymy obustronnie przez 2 (potrzebujemy 2 moli H<sub>2(g)</sub> po lewej stronie), natomiast równanie (III) odwracamy (zmieniając znak &Delta;<i>H</i>&deg;<sub>3</sub> na przeciwny zgodnie z prawem Lavoisiera–Laplace’a, ponieważ CH<sub>4(g)</sub> musi znaleźć się po stronie produktów):<br>
                &ndash; (I) C<sub>(grafit)</sub> + O<sub>2(g)</sub> &rarr; CO<sub>2(g)</sub> &nbsp;&nbsp; &Delta;<i>H</i>&deg;<sub>I</sub> = &minus;393,5 kJ<br>
                &ndash; (II &middot; 2) 2 H<sub>2(g)</sub> + O<sub>2(g)</sub> &rarr; 2 H<sub>2</sub>O<sub>(c)</sub> &nbsp;&nbsp; &Delta;<i>H</i>&deg;<sub>II</sub> = 2 &middot; (&minus;285,8 kJ) = &minus;571,6 kJ<br>
                &ndash; (&minus;III) CO<sub>2(g)</sub> + 2 H<sub>2</sub>O<sub>(c)</sub> &rarr; CH<sub>4(g)</sub> + 2 O<sub>2(g)</sub> &nbsp;&nbsp; &Delta;<i>H</i>&deg;<sub>III</sub> = &minus;(&minus;890,3 kJ) = +890,3 kJ<br>
                • <strong>Krok 3 (Dodanie stronami i redukcja wyrazów podobnych):</strong> Po zsumowaniu stronami skracają się 2 O<sub>2(g)</sub>, CO<sub>2(g)</sub> oraz 2 H<sub>2</sub>O<sub>(c)</sub>. Otrzymujemy:<br>
                &Delta;<sub>tw</sub><i>H</i>&deg;(CH<sub>4</sub>) = &Delta;<i>H</i>&deg;<sub>I</sub> + 2 &middot; &Delta;<i>H</i>&deg;<sub>II</sub> &minus; &Delta;<i>H</i>&deg;<sub>III</sub> = &minus;393,5 kJ + (&minus;571,6 kJ) + 890,3 kJ = <strong>&minus;74,8 kJ &middot; mol<sup>&minus;1</sup></strong>.<br>
                • <strong>Krok 4 (Sposób II – bezpośrednio ze wzoru na entalpie spalania dla reakcji C + 2 H<sub>2</sub> &rarr; CH<sub>4</sub>):</strong><br>
                &Delta;<i>H</i>&deg;<sub>reakcji</sub> = [1 &middot; &Delta;<sub>sp</sub><i>H</i>&deg;(C) + 2 &middot; &Delta;<sub>sp</sub><i>H</i>&deg;(H<sub>2</sub>)] &minus; [1 &middot; &Delta;<sub>sp</sub><i>H</i>&deg;(CH<sub>4</sub>)] = [&minus;393,5 + 2 &middot; (&minus;285,8)] &minus; (&minus;890,3) = &minus;965,1 + 890,3 = <strong>&minus;74,8 kJ &middot; mol<sup>&minus;1</sup></strong>.
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 2 (Obliczanie entalpii reakcji z energii wiązań oraz przeliczanie efektu cieplnego na konkretną masę reagenta):</strong><br>
                <em>Oblicz standardową entalpię reakcji syntezy amoniaku N<sub>2(g)</sub> + 3 H<sub>2(g)</sub> &rarr; 2 NH<sub>3(g)</sub> wiedząc, że średnie energie wiązań wynoszą: <i>E</i>(N&equiv;N) = 945 kJ &middot; mol<sup>&minus;1</sup>, <i>E</i>(H&mdash;H) = 436 kJ &middot; mol<sup>&minus;1</sup> oraz <i>E</i>(N&mdash;H) = 391 kJ &middot; mol<sup>&minus;1</sup>. Następnie oblicz, ile ciepła wydzieli się podczas otrzymywania 85,0 g amoniaku przy wydajności procesu równej 100%.</em><br><br>
                • <strong>Krok 1 (Bilans zrywanych i tworzonych wiązań):</strong> W substratach zrywamy 1 mol wiązań potrójnych N&equiv;N oraz 3 mole wiązań pojedynczych H&mdash;H. W 1 cząsteczce NH<sub>3</sub> występują 3 wiązania N&mdash;H, zatem w 2 molach cząsteczek NH<sub>3</sub> powstaje łącznie 2 &middot; 3 = 6 moli wiązań N&mdash;H:<br>
                &Delta;<i>H</i><sub>reakcji</sub> = [1 &middot; <i>E</i>(N&equiv;N) + 3 &middot; <i>E</i>(H&mdash;H)] &minus; [6 &middot; <i>E</i>(N&mdash;H)] = [945 + 3 &middot; 436] &minus; [6 &middot; 391] = 2253 &minus; 2346 = <strong>&minus;93 kJ</strong> (na 2 mole NH<sub>3</sub>).<br>
                • <strong>Krok 2 (Przeliczenie stechiometryczne na 85,0 g NH<sub>3</sub>):</strong> Masa molowa amoniaku wynosi <i>M</i><sub>NH<sub>3</sub></sub> = 17,0 g &middot; mol<sup>&minus;1</sup>. W równaniu reakcji powstają 2 mole NH<sub>3</sub> (czyli 2 &middot; 17,0 g = 34,0 g), czemu towarzyszy wydzielenie 93 kJ energii na sposób ciepła. Układamy proporcję:<br>
                34,0 g NH<sub>3</sub> &mdash;&mdash;&mdash; 93 kJ wydzielonego ciepła<br>
                85,0 g NH<sub>3</sub> &mdash;&mdash;&mdash; <i>Q</i> kJ wydzielonego ciepła &nbsp;&rArr;&nbsp; <i>Q</i> = (85,0 g &middot; 93 kJ) / 34,0 g = <strong>232,5 kJ</strong> (lub &Delta;<i>H</i> = &minus;232,5 kJ).
            </div>
        </div>

        <!-- SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Kinetyka Chemiczna – Szybkość Reakcji, Teoria Zderzeń i Równanie Kinetyczne</h3>

            <h4>A. Definicja i wzór na szybkość reakcji chemicznej</h4>
            <p><strong>Kinetyka chemiczna</strong> bada przebieg procesów chemicznych w czasie oraz mechanizmy, według których substraty przekształcają się w produkty. <strong>Szybkość reakcji chemicznej (<i>v</i>)</strong> w układzie homogenicznym o stałej objętości definiuje się jako ubytek stężenia molowego substratu (&minus;&Delta;<i>C<sub>S</sub></i>) lub przyrost stężenia molowego produktu (+&Delta;<i>C<sub>P</sub></i>) przypadający na jednostkę czasu (&Delta;<i>t</i>):</p>
            <div class="chem-eq">
                <i>v</i> = &minus;&Delta;<i>C</i><sub>substratu</sub> / &Delta;<i>t</i> = &minus;(<i>C</i><sub>2</sub> &minus; <i>C</i><sub>1</sub>) / (<i>t</i><sub>2</sub> &minus; <i>t</i><sub>1</sub>) &nbsp;&nbsp;lub&nbsp;&nbsp; <i>v</i> = +&Delta;<i>C</i><sub>produktu</sub> / &Delta;<i>t</i> = +(<i>C</i><sub>2</sub> &minus; <i>C</i><sub>1</sub>) / (<i>t</i><sub>2</sub> &minus; <i>t</i><sub>1</sub>)<br>
                Jednostka podstawowa: <strong>mol / (dm<sup>3</sup> &middot; s) = mol &middot; dm<sup>&minus;3</sup> &middot; s<sup>&minus;1</sup></strong>
            </div>
            <p><strong>Dlaczego we wzorze dla substratu stoi znak minus?</strong> W miarę postępu reakcji substraty zużywają się, zatem ich stężenie końcowe jest mniejsze od stężenia początkowego (<i>C</i><sub>2</sub> &lt; <i>C</i><sub>1</sub>), co sprawia, że przyrost stężenia substratu jest ujemny (&Delta;<i>C<sub>S</sub></i> &lt; 0). Ponieważ szybkość reakcji chemicznej jako wielkość fizyczna musi być zawsze dodatnia (<i>v</i> &gt; 0), przed ułamkiem dla substratu stawia się znak minus, który znosi ujemną wartość &Delta;<i>C<sub>S</sub></i>.</p>

            <h4>B. Zależność szybkości zmian stężeń poszczególnych reagentów od stechiometrii równania</h4>
            <p>W reakcji o różnych współczynnikach stechiometrycznych, np. w procesie syntezy amoniaku N<sub>2(g)</sub> + 3 H<sub>2(g)</sub> &rarr; 2 NH<sub>3(g)</sub>, w tym samym przedziale czasu &Delta;<i>t</i> na każdy 1 mol przereagowanego azotu zużywają się aż 3 mole wodoru i powstają 2 mole amoniaku. Oznacza to, że ubytek stężenia wodoru jest 3-krotnie szybszy niż ubytek stężenia azotu, a przyrost stężenia amoniaku jest 2-krotnie szybszy niż ubytek stężenia azotu. Dla ogólnej reakcji <i>a</i>A + <i>b</i>B &rarr; <i>c</i>C + <i>d</i>D relacja pomiędzy szybkościami zaniku poszczególnych substratów (<i>v</i><sub>A</sub>, <i>v</i><sub>B</sub>) i szybkościami tworzenia produktów (<i>v</i><sub>C</sub>, <i>v</i><sub>D</sub>) ma postać:</p>
            <div class="chem-eq">
                <i>v</i><sub>ogólna</sub> = <i>v</i><sub>A</sub> / <i>a</i> = <i>v</i><sub>B</sub> / <i>b</i> = <i>v</i><sub>C</sub> / <i>c</i> = <i>v</i><sub>D</sub> / <i>d</i> &nbsp;&hArr;&nbsp; &minus;(1/<i>a</i>)(&Delta;[A]/&Delta;<i>t</i>) = &minus;(1/<i>b</i>)(&Delta;[B]/&Delta;<i>t</i>) = +(1/<i>c</i>)(&Delta;[C]/&Delta;<i>t</i>) = +(1/<i>d</i>)(&Delta;[D]/&Delta;<i>t</i>)
            </div>
            <p>Przykładowo dla reakcji N<sub>2</sub> + 3 H<sub>2</sub> &rarr; 2 NH<sub>3</sub> zachodzi równość: <i>v</i><sub>N<sub>2</sub></sub> = &frac13; <i>v</i><sub>H<sub>2</sub></sub> = &frac12; <i>v</i><sub>NH<sub>3</sub></sub>, czyli <strong><i>v</i><sub>H<sub>2</sub></sub> = 3 &middot; <i>v</i><sub>N<sub>2</sub></sub></strong> oraz <strong><i>v</i><sub>NH<sub>3</sub></sub> = 2 &middot; <i>v</i><sub>N<sub>2</sub></sub></strong>.</p>

            <!-- WYKRES 3: KRZYWE KINETYCZNE STĘŻENIA I SZYBKOŚCI W CZASIE (SVG) -->
            <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 12px; padding: 14px; margin: 16px 0; text-align: center;">
                <svg viewBox="0 0 780 275" style="width: 100%; max-width: 780px; height: auto;">
                    <!-- WYKRES A: STĘŻENIE W CZASIE -->
                    <text x="195" y="22" fill="#f8fafc" font-size="12.5" font-weight="bold" text-anchor="middle">a) Zmiana stężeń reagentów w czasie (reakcja A &rarr; 2B)</text>
                    <line x1="55" y1="230" x2="55" y2="35" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <line x1="55" y1="230" x2="365" y2="230" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <text x="45" y="30" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="end">C [mol&middot;dm<tspan dy="-4" font-size="8">&minus;3</tspan><tspan dy="4">]</tspan></text>
                    <text x="210" y="258" fill="#cbd5e1" font-size="12" text-anchor="middle">Czas trwania reakcji t [s]</text>

                    <!-- Znaczniki osi C -->
                    <line x1="50" y1="60" x2="55" y2="60" stroke="#94a3b8" stroke-width="2"/>
                    <text x="46" y="64" fill="#cbd5e1" font-size="11" text-anchor="end">2C<tspan dy="3" font-size="8">0</tspan></text>
                    <line x1="50" y1="145" x2="55" y2="145" stroke="#94a3b8" stroke-width="2"/>
                    <text x="46" y="149" fill="#cbd5e1" font-size="11" text-anchor="end">C<tspan dy="3" font-size="8">0</tspan></text>
                    <text x="46" y="233" fill="#cbd5e1" font-size="11" text-anchor="end">0</text>

                    <!-- Krzywe produktu B i substratu A -->
                    <path d="M 55 230 Q 115 70, 345 62" fill="none" stroke="#38bdf8" stroke-width="3"/>
                    <path d="M 55 145 Q 130 220, 345 227" fill="none" stroke="#f87171" stroke-width="3"/>
                    <text x="235" y="52" fill="#38bdf8" font-size="11.5" font-weight="bold" text-anchor="middle">Produkt B (przyrost +&Delta;C<tspan dy="3" font-size="8">B</tspan><tspan dy="-3"> = 2&middot;|&Delta;C</tspan><tspan dy="3" font-size="8">A</tspan><tspan dy="-3">|)</tspan></text>
                    <text x="255" y="205" fill="#f87171" font-size="11.5" font-weight="bold" text-anchor="middle">Substrat A (ubytek &minus;&Delta;C<tspan dy="3" font-size="8">A</tspan><tspan dy="-3">)</tspan></text>

                    <!-- WYKRES B: SZYBKOŚĆ W CZASIE -->
                    <text x="585" y="22" fill="#f8fafc" font-size="12.5" font-weight="bold" text-anchor="middle">b) Zmiana szybkości reakcji nieodwracalnej w czasie</text>
                    <line x1="445" y1="230" x2="445" y2="35" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <line x1="445" y1="230" x2="755" y2="230" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <text x="438" y="30" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="end">v [mol&middot;dm<tspan dy="-4" font-size="8">&minus;3</tspan><tspan dy="4">&middot;s</tspan><tspan dy="-4" font-size="8">&minus;1</tspan><tspan dy="4">]</tspan></text>
                    <text x="600" y="258" fill="#cbd5e1" font-size="12" text-anchor="middle">Czas trwania reakcji t [s]</text>

                    <!-- Krzywa v(t) -->
                    <circle cx="445" cy="65" r="4.5" fill="#38bdf8"/>
                    <path d="M 445 65 Q 520 210, 735 226" fill="none" stroke="#38bdf8" stroke-width="3"/>
                    <text x="460" y="65" fill="#38bdf8" font-size="11" font-weight="bold">v<tspan dy="3" font-size="8">max</tspan><tspan dy="-3"> (w chwili t = 0, gdy C</tspan><tspan dy="3" font-size="8">substratu</tspan><tspan dy="-3"> jest największe)</tspan></text>
                    <text x="615" y="175" fill="#cbd5e1" font-size="11" text-anchor="middle">Szybkość maleje w miarę</text>
                    <text x="615" y="191" fill="#cbd5e1" font-size="11" text-anchor="middle">zużywania się substratów</text>
                </svg>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 6px;">
                    <strong>Rys. 3.</strong> Wykresy kinetyczne: a) krzywe stężeniowe dla reakcji A &rarr; 2B (nachylenie stycznej w dowolnym punkcie odpowiada szybkości chwilowej); b) spadek szybkości reakcji w funkcji czasu wynikający z malejącego stężenia substratów.
                </div>
            </div>

            <h4>C. Teoria zderzeń aktywnych (efektywnych)</h4>
            <p>Aby zaszła elementarna reakcja chemiczna pomiędzy drobinami (atomami, cząsteczkami lub jonami) substratów, drobiny te muszą się ze sobą zderzyć. Zdecydowana większość zderzeń w mieszaninie reakcyjnej to jednak zderzenia sprężyste (nieefektywne), po których cząsteczki rozbiegają się bez zmiany budowy chemicznej. Aby zderzenie było <strong>zderzeniem aktywnym (efektywnym)</strong>, czyli prowadzącym do powstania produktów, muszą zostać spełnione <strong>jednocześnie dwa warunki konieczne</strong>:</p>
            <ol class="note-list">
                <li><strong>Warunek energetyczny:</strong> Zderzające się cząsteczki muszą posiadać łączną energię kinetyczną równą lub większą od bariery energii aktywacji (<strong><i>E<sub>k</sub></i> &ge; <i>E<sub>a</sub></i></strong>), co pozwala na rozluźnienie i zerwanie dotychczasowych wiązań w substratach oraz utworzenie kompleksu aktywnego.</li>
                <li><strong>Warunek steryczny (geometryczny / przestrzenny):</strong> Zderzające się cząsteczki muszą być w momencie kontaktu odpowiednio zorientowane względem siebie w przestrzeni (np. w reakcji NO<sub>2</sub> + CO &rarr; NO + CO<sub>2</sub> atom węgla z cząsteczki CO musi uderzyć bezpośrednio w jeden z atomów tlenu cząsteczki NO<sub>2</sub>, a nie w atom azotu).</li>
            </ol>

            <h4>D. Równanie kinetyczne, stała szybkości reakcji (<i>k</i>) oraz rząd reakcji</h4>
            <p>Związek pomiędzy chwilową szybkością reakcji chemicznej a aktualnymi stężeniami molowymi reagujących substratów w danej temperaturze opisuje wyznaczane doświadczalnie <strong>równanie kinetyczne</strong>. Dla ogólnej reakcji chemicznej zapisanej równaniem stechiometrycznym <i>a</i>A + <i>b</i>B &rarr; produkty równanie kinetyczne ma postać:</p>
            <div class="chem-eq">
                <i>v</i> = <i>k</i> &middot; [A]<sup>&alpha;</sup> &middot; [B]<sup>&beta;</sup> &nbsp;&nbsp;(lub w notacji ze stężeniem <i>C</i>: &nbsp; <i>v</i> = <i>k</i> &middot; <i>C</i><sub>A</sub><sup>&alpha;</sup> &middot; <i>C</i><sub>B</sub><sup>&beta;</sup>)
            </div>
            <ul class="note-list">
                <li><strong>[A], [B] (lub <i>C</i><sub>A</sub>, <i>C</i><sub>B</sub>):</strong> Aktualne stężenia molowe substratów A i B wyrażone w [mol &middot; dm<sup>&minus;3</sup>]. <em>Uwaga:</em> W równaniu kinetycznym uwzględnia się wyłącznie stężenia substratów znajdujących się w fazie gazowej lub w roztworze. <strong>Nie wpisuje się do niego stężeń ciał stałych (s)</strong>, gdyż ich stężenie wewnątrz fazy stałej jest stałe i włączone do wartości <i>k</i> (np. dla reakcji heterogenicznej C<sub>(s)</sub> + O<sub>2(g)</sub> &rarr; CO<sub>2(g)</sub> równanie kinetyczne ma postać <i>v</i> = <i>k</i> &middot; [O<sub>2</sub>]). Nie wpisuje się tam również produktów!</li>
                <li><strong>Wykładniki potęgowe &alpha; oraz &beta; (często oznaczane jako <i>r</i><sub>A</sub>, <i>r</i><sub>B</sub>):</strong> Nazywane są <strong>cząstkowymi rzędami reakcji</strong> odpowiednio względem substratu A oraz względem substratu B. Suma wszystkich wykładników potęgowych w równaniu kinetycznym (<strong><i>n</i> = &alpha; + &beta;</strong>) stanowi <strong>całkowity (ogólny) rząd reakcji chemicznej</strong>.</li>
                <li><strong>Współczynnik proporcjonalności <i>k</i> – stała szybkości reakcji:</strong> Fizycznie jest to szybkość danej reakcji chemicznej w sytuacji, gdy stężenia wszystkich substratów są jednostkowe ([A] = [B] = 1 mol &middot; dm<sup>&minus;3</sup>).</li>
                <li><strong>Od czego zależy stała szybkości <i>k</i>?</strong> Wartość <i>k</i> zależy od: <strong>1) rodzaju reagujących substancji</strong> (natury chemicznej i energii aktywacji <i>E<sub>a</sub></i>), <strong>2) temperatury (<i>T</i>)</strong> – rośnie wykładniczo ze wzrostem temperatury zgodnie z równaniem Arrheniusa, oraz <strong>3) obecności katalizatora</strong> (katalizator obniża <i>E<sub>a</sub></i>, przez co zwiększa wartość stałej szybkości <i>k</i>).</li>
                <li><strong>Od czego NIE zależy stała szybkości <i>k</i>?</strong> Stała szybkości <i>k</i> w danej temperaturze <strong>nie zależy od stężeń molowych substratów, od ciśnienia gazów ani od czasu trwania reakcji!</strong></li>
            </ul>

            <div class="note-alert danger">
                🔥 <strong>KLUCZOWA PUŁAPKA MATURALNA – Rząd reakcji a współczynniki stechiometryczne i etap limitujący:</strong>
                <ul class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li>Wykładniki potęgowe &alpha; i &beta; w równaniu kinetycznym są równe współczynnikom stechiometrycznym <i>a</i> i <i>b</i> <strong>wyłącznie dla reakcji prostych (jednoetapowych / elementarnych)</strong>, w których przemiana zachodzi w jednym akcie zderzenia (wówczas rząd pokrywa się z tzw. cząsteczkowością reakcji, np. dla jednoetapowej reakcji 2 NO<sub>(g)</sub> + O<sub>2(g)</sub> &rarr; 2 NO<sub>2(g)</sub> równanie kinetyczne ma postać <i>v</i> = <i>k</i> &middot; [NO]<sup>2</sup> &middot; [O<sub>2</sub>], rząd względem NO wynosi 2, względem O<sub>2</sub> wynosi 1, a całkowity rząd <i>n</i> = 2 + 1 = 3).</li>
                    <li>Większość reakcji chemicznych to jednak <strong>reakcje złożone (wieloetapowe)</strong>. O całkowitej szybkości reakcji wieloetapowej i postaci jej równania kinetycznego decyduje zawsze <strong>etap najwolniejszy, nazywany etapem limitującym</strong> (zasada przewężenia w klepsydrze). Dlatego na maturze rząd reakcji (0, I, II, III, a nawet ułamkowy) wyznacza się zawsze na podstawie danych doświadczalnych z tabeli pomiarowej, chyba że w treści zadania wyraźnie zaznaczono, iż reakcja jest jednoetapowa (elementarna)!</li>
                </ul>
            </div>

            <h4>E. Zestawienie charakterystyk reakcji zerowego, pierwszego, drugiego i trzeciego rzędu</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Rząd całkowity (<i>n</i>)</th>
                            <th>Przykładowe równanie kinetyczne</th>
                            <th>Wyprowadzenie i jednostka stałej szybkości <i>k</i></th>
                            <th>Wpływ zmiany stężenia substratu na szybkość <i>v</i> oraz przykłady reakcji</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Zerowy rząd (<i>n</i> = 0)</strong></td>
                            <td><i>v</i> = <i>k</i> &middot; [A]<sup>0</sup> = <i>k</i> = const</td>
                            <td><i>k</i> = <i>v</i><br><strong>mol &middot; dm<sup>&minus;3</sup> &middot; s<sup>&minus;1</sup></strong></td>
                            <td>Szybkość reakcji jest stała i całkowicie niezależna od stężenia substratu (np. 3-krotny wzrost [A] nie zmienia <i>v</i>). Przykłady: reakcje fotochemiczne, reakcje enzymatyczne przy pełnym wysyceniu enzymu substratem, rozkład NH<sub>3</sub> lub N<sub>2</sub>O na powierzchni gorącego katalizatora Pt/Au.</td>
                        </tr>
                        <tr>
                            <td><strong>Pierwszy rząd (<i>n</i> = 1)</strong></td>
                            <td><i>v</i> = <i>k</i> &middot; [A]</td>
                            <td><i>k</i> = <i>v</i> / [A]<br><strong>s<sup>&minus;1</sup></strong> (lub min<sup>&minus;1</sup>, h<sup>&minus;1</sup>)</td>
                            <td>Szybkość jest wprost proporcjonalna do pierwszej potęgi stężenia substratu: <i>k</i>-krotny wzrost stężenia [A] powoduje dokładnie <i>k</i>-krotny wzrost szybkości <i>v</i>. Przykłady: rozkład termiczny N<sub>2</sub>O<sub>5</sub> (2N<sub>2</sub>O<sub>5</sub> &rarr; 4NO<sub>2</sub> + O<sub>2</sub>), izomeryzacja cyklopropanu do propenu, przemiany promieniotwórcze.</td>
                        </tr>
                        <tr>
                            <td><strong>Drugi rząd (<i>n</i> = 2)</strong></td>
                            <td><i>v</i> = <i>k</i> &middot; [A]<sup>2</sup><br>lub<br><i>v</i> = <i>k</i> &middot; [A] &middot; [B]</td>
                            <td><i>k</i> = <i>v</i> / [A]<sup>2</sup><br><strong>dm<sup>3</sup> &middot; mol<sup>&minus;1</sup> &middot; s<sup>&minus;1</sup></strong></td>
                            <td>Gdy <i>v</i> = <i>k</i> &middot; [A]<sup>2</sup>, to 2-krotny wzrost [A] zwiększa szybkość 2<sup>2</sup> = 4-krotnie, a 3-krotny wzrost [A] zwiększa szybkość 3<sup>2</sup> = 9-krotnie. Przykłady: synteza i rozkład jodowodoru (H<sub>2</sub> + I<sub>2</sub> &rarr; 2HI, 2HI &rarr; H<sub>2</sub> + I<sub>2</sub>), dimeryzacja 2NO<sub>2</sub> &rarr; N<sub>2</sub>O<sub>4</sub>, zasadowa hydroliza estrów (CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + OH<sup>&minus;</sup> &rarr; CH<sub>3</sub>COO<sup>&minus;</sup> + C<sub>2</sub>H<sub>5</sub>OH).</td>
                        </tr>
                        <tr>
                            <td><strong>Trzeci rząd (<i>n</i> = 3)</strong></td>
                            <td><i>v</i> = <i>k</i> &middot; [A]<sup>2</sup> &middot; [B]<br>lub <i>v</i> = <i>k</i> &middot; [A]<sup>3</sup></td>
                            <td><i>k</i> = <i>v</i> / [A]<sup>3</sup><br><strong>dm<sup>6</sup> &middot; mol<sup>&minus;2</sup> &middot; s<sup>&minus;1</sup></strong></td>
                            <td>Gdy <i>v</i> = <i>k</i> &middot; [A]<sup>2</sup> &middot; [B], to jednoczesne 2-krotne zwiększenie stężenia obu substratów zwiększa szybkość aż 2<sup>2</sup> &middot; 2<sup>1</sup> = 8-krotnie! Przykłady: utlenianie tlenku azotu(II) tlenem (2NO + O<sub>2</sub> &rarr; 2NO<sub>2</sub>) oraz redukcja tlenku azotu(II) wodorem (2NO + 2H<sub>2</sub> &rarr; N<sub>2</sub> + 2H<sub>2</sub>O, gdzie <i>v</i> = <i>k</i> &middot; [NO]<sup>2</sup> &middot; [H<sub>2</sub>]).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p><strong>Ogólny wzór na jednostkę stałej szybkości <i>k</i> dla reakcji dowolnego <i>n</i>-tego rzędu:</strong> <strong>[<i>k</i>] = mol<sup>1&minus;<i>n</i></sup> &middot; dm<sup>3(<i>n</i>&minus;1)</sup> &middot; s<sup>&minus;1</sup></strong>.</p>

            <!-- WYKRES 4: GRAFICZNA CHARAKTERYSTYKA RZĘDOWOŚCI REAKCJI (SVG) -->
            <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 12px; padding: 14px; margin: 16px 0; text-align: center;">
                <svg viewBox="0 0 780 275" style="width: 100%; max-width: 780px; height: auto;">
                    <!-- WYKRES A: v = f([A]) -->
                    <text x="195" y="22" fill="#f8fafc" font-size="12.5" font-weight="bold" text-anchor="middle">a) Zależność szybkości reakcji v od stężenia substratu [A]</text>
                    <line x1="50" y1="230" x2="50" y2="35" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <line x1="50" y1="230" x2="365" y2="230" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <text x="38" y="42" fill="#cbd5e1" font-size="12" font-weight="bold">v</text>
                    <text x="205" y="258" fill="#cbd5e1" font-size="11.5" text-anchor="middle">Stężenie substratu [A] [mol&middot;dm<tspan dy="-4" font-size="8">&minus;3</tspan><tspan dy="4">]</tspan></text>

                    <!-- Rząd 0, I, II -->
                    <line x1="50" y1="185" x2="345" y2="185" stroke="#34d399" stroke-width="3"/>
                    <text x="305" y="175" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Rząd 0 (v = k = const)</text>

                    <line x1="50" y1="230" x2="335" y2="65" stroke="#38bdf8" stroke-width="3"/>
                    <text x="295" y="65" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="end">Rząd I (v = k&middot;[A])</text>

                    <path d="M 50 230 Q 170 225, 250 40" fill="none" stroke="#f87171" stroke-width="3"/>
                    <text x="210" y="50" fill="#f87171" font-size="11" font-weight="bold" text-anchor="end">Rząd II (v = k&middot;[A]<tspan dy="-4" font-size="8">2</tspan><tspan dy="4">)</tspan></text>

                    <!-- WYKRES B: [A] = f(t) -->
                    <text x="585" y="22" fill="#f8fafc" font-size="12.5" font-weight="bold" text-anchor="middle">b) Zanik stężenia substratu [A] w czasie (wpływ rzędu i stałej k)</text>
                    <line x1="445" y1="230" x2="445" y2="35" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <line x1="445" y1="230" x2="755" y2="230" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <text x="435" y="42" fill="#cbd5e1" font-size="12" font-weight="bold" text-anchor="end">[A]</text>
                    <text x="435" y="72" fill="#cbd5e1" font-size="11" text-anchor="end">C<tspan dy="3" font-size="8">0</tspan></text>
                    <text x="600" y="258" fill="#cbd5e1" font-size="11.5" text-anchor="middle">Czas t [s]</text>

                    <!-- Krzywe zaniku -->
                    <line x1="445" y1="68" x2="640" y2="230" stroke="#34d399" stroke-width="2.8"/>
                    <text x="635" y="160" fill="#34d399" font-size="11" font-weight="bold">Rząd 0 (liniowy spadek)</text>

                    <path d="M 445 68 Q 520 190, 740 215" fill="none" stroke="#38bdf8" stroke-width="3"/>
                    <text x="695" y="198" fill="#38bdf8" font-size="11" font-weight="bold">Rząd I (k<tspan dy="3" font-size="8">1</tspan><tspan dy="-3">)</tspan></text>

                    <path d="M 445 68 Q 480 218, 700 226" fill="none" stroke="#f87171" stroke-width="2.8" stroke-dasharray="6,4"/>
                    <text x="580" y="220" fill="#f87171" font-size="11" font-weight="bold">Rząd I (k<tspan dy="3" font-size="8">2</tspan><tspan dy="-3"> &gt; k</tspan><tspan dy="3" font-size="8">1</tspan><tspan dy="-3"> – szybszy zanik)</tspan></text>
                </svg>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 6px;">
                    <strong>Rys. 4.</strong> Charakterystyka graficzna rzędowości reakcji: a) wykresy <i>v</i> = <i>f</i>([A]) pozwalające natychmiast odróżnić reakcję rzędu 0 (funkcja stała), I (funkcja liniowa) oraz II (parabola); b) krzywe kinetyczne zaniku substratu w czasie (im większa stała szybkości <i>k</i>, tym bardziej stromo opada krzywa).
                </div>
            </div>

            <h4>F. Okres półtrwania (czas połowicznej przemiany, <i>t</i><sub>1/2</sub>)</h4>
            <p>Jest to czas potrzebny do przereagowania dokładnie połowy początkowej ilości (stężenia) substratu (czyli czas, po którym stężenie spada z wartości <i>C</i><sub>0</sub> do &frac12; <i>C</i><sub>0</sub>). Dla <strong>reakcji I rzędu</strong> (podobnie jak dla rozpadu promieniotwórczego) okres półtrwania jest stały i <strong>nie zależy od stężenia początkowego substratu</strong> (po upływie każdego kolejnego okresu <i>t</i><sub>1/2</sub> stężenie maleje o połowę: <i>C</i><sub>0</sub> &rarr; &frac12; <i>C</i><sub>0</sub> &rarr; &frac14; <i>C</i><sub>0</sub> &rarr; &#8539; <i>C</i><sub>0</sub>):</p>
            <div class="chem-eq">
                Dla reakcji I rzędu: &nbsp; <i>t</i><sub>1/2</sub> = (ln 2) / <i>k</i> &approx; 0,693 / <i>k</i> = const &nbsp;&nbsp;oraz&nbsp;&nbsp; <i>C<sub>t</sub></i> = <i>C</i><sub>0</sub> / 2<sup><i>n</i></sup> &nbsp;(gdzie <i>n</i> = <i>t</i> / <i>t</i><sub>1/2</sub> to liczba okresów półtrwania)
            </div>
        </div>

        <!-- SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Czynniki Wpływające na Szybkość Reakcji Chemicznej, Reguła van’t Hoffa i Kataliza</h3>

            <h4>A. Zestawienie czynników kinetycznych</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Czynnik kinetyczny</th>
                            <th>Mechanizm wpływu na szybkość reakcji (wg teorii zderzeń)</th>
                            <th>Wpływ na stałą szybkości (<i>k</i>) i energię aktywacji (<i>E<sub>a</sub></i>)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. Stężenie molowe substratów</strong> (w roztworach i gazach)</td>
                            <td>Zwiększenie stężenia substratów (zagęszczenie drobin w jednostce objętości) zwiększa częstość zderzeń między nimi, a tym samym liczbę zderzeń aktywnych w jednostce czasu &rarr; <strong>szybkość <i>v</i> rośnie</strong> (z wyjątkiem reakcji 0 rzędu).</td>
                            <td><strong>Nie zmienia</strong> ani energii aktywacji (<i>E<sub>a</sub></i> = const), ani stałej szybkości reakcji (<i>k</i> = const).</td>
                        </tr>
                        <tr>
                            <td><strong>2. Ciśnienie gazów</strong> (zmiana objętości reaktora)</td>
                            <td>Dotyczy <strong>wyłącznie reakcji z udziałem substratów gazowych</strong>! Zwiększenie ciśnienia poprzez <i>k</i>-krotne zmniejszenie objętości naczynia (<i>C</i> = <i>n</i>/<i>V</i>) powoduje dokładnie <i>k</i>-krotny wzrost stężenia molowego wszystkich gazowych reagentów &rarr; <strong>szybkość <i>v</i> rośnie</strong>.</td>
                            <td><strong>Nie zmienia</strong> ani <i>E<sub>a</sub></i>, ani stałej szybkości <i>k</i> (w stałej temperaturze).</td>
                        </tr>
                        <tr>
                            <td><strong>3. Stopień rozdrobnienia</strong> (dla ciał stałych i cieczy niemieszających się)</td>
                            <td>Dotyczy wyłącznie układów <strong>heterogenicznych (wielofazowych)</strong>, np. metal + kwas (Zn<sub>(s)</sub> + HCl<sub>(aq)</sub>) lub węgiel + tlen. Zastąpienie granulek pyłem drastycznie zwiększa powierzchnię styku faz, na której zachodzą zderzenia &rarr; <strong>szybkość <i>v</i> rośnie</strong>.</td>
                            <td>Zwiększa efektywną powierzchnię kontaktu wchodzącą w skład pozornej stałej szybkości procesu powierzchniowego; nie zmienia natury bariery energetycznej.</td>
                        </tr>
                        <tr>
                            <td><strong>4. Temperatura (<i>T</i>)</strong></td>
                            <td>Podwyższenie temperatury zwiększa średnią energię kinetyczną i prędkość poruszających się drobin. Skutkuje to gwałtownym (wykładniczym) wzrostem ułamka cząsteczek posiadających energię przewyższającą barierę energii aktywacji (<i>E</i> &ge; <i>E<sub>a</sub></i>) &rarr; <strong>szybkość <i>v</i> każdej reakcji (zarówno endo-, jak i egzotermicznej!) rośnie ze wzrostem temperatury</strong>.</td>
                            <td><strong>Zwiększa wartość stałej szybkości reakcji</strong> (<i>k</i> rośnie ze wzrostem <i>T</i>). Wartość samej bariery energii aktywacji dla danej drogi reakcji nie ulega zmianie (<i>E<sub>a</sub></i> = const).</td>
                        </tr>
                        <tr>
                            <td><strong>5. Obecność katalizatora</strong> (lub inhibitora)</td>
                            <td>Katalizator to substancja, która przyspiesza reakcję chemiczną, biorąc udział w tworzeniu przejściowego kompleksu aktywnego [A&ndash;Kat]<sup>*</sup>, a po zakończeniu elementarnego cyklu odtwarza się (nie zużywa się w bilansie sumarycznym i nie wchodzi w skład produktów). Inhibitor działa odwrotnie – spowalnia reakcję.</td>
                            <td>Katalizator kieruje reakcję na nową drogę o <strong>niższej energii aktywacji (<i>E</i><sub>a(kat)</sub> &lt; <i>E<sub>a</sub></i>)</strong>, dzięki czemu <strong>zwiększa wartość stałej szybkości <i>k</i></strong> (w tej samej temperaturze!). Katalizator <strong>NIE zmienia entalpii przemiany (&Delta;<i>H</i> = const)!</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>B. Reguła van’t Hoffa – ilościowy wpływ temperatury na szybkość reakcji</h4>
            <p>Zgodnie z przybliżoną empiryczną <strong>regułą van’t Hoffa</strong>, podwyższenie temperatury układu reagującego o każde <strong>10 K</strong> (czyli o <strong>10&deg;C</strong>, gdyż różnica temperatur w skali Kelvina i Celsjusza jest identyczna: &Delta;<i>T</i> [K] = &Delta;<i>t</i> [&deg;C]) powoduje zwiększenie szybkości reakcji chemicznej (oraz stałej szybkości <i>k</i>) od 2 do 4 razy:</p>
            <div class="chem-eq">
                <i>v</i><sub>2</sub> = <i>v</i><sub>1</sub> &middot; &gamma;<sup>(<i>T</i><sub>2</sub> &minus; <i>T</i><sub>1</sub>) / 10</sup> = <i>v</i><sub>1</sub> &middot; &gamma;<sup>&Delta;<i>T</i> / 10</sup> &nbsp;&nbsp;oraz analogicznie dla stałych szybkości:&nbsp;&nbsp; <i>k</i><sub>2</sub> = <i>k</i><sub>1</sub> &middot; &gamma;<sup>&Delta;<i>T</i> / 10</sup>
            </div>
            <p>gdzie <strong>&gamma; (gamma)</strong> to <strong>temperaturowy współczynnik szybkości reakcji</strong> (dla większości reakcji homogenicznych &gamma; &isin; &lang;2; 4&rang;), określający, ile razy wzrasta szybkość danej reakcji przy podwyższeniu temperatury o 10 K (10&deg;C). Jeżeli temperaturę obniżymy o &Delta;<i>T</i>, szybkość reakcji zmaleje &gamma;<sup>(&Delta;<i>T</i>/10)</sup>-krotnie.</p>

            <h4>C. Kataliza chemiczna: homogeniczna, heterogeniczna, autokataliza i biokataliza</h4>

            <!-- WYKRES 5: PROFIL ENERGETYCZNY Z KATALIZATOREM (SVG) -->
            <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 12px; padding: 14px; margin: 16px 0; text-align: center;">
                <svg viewBox="0 0 740 245" style="width: 100%; max-width: 740px; height: auto;">
                    <defs>
                        <marker id="arr-green" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399"/>
                        </marker>
                    </defs>

                    <!-- Osie -->
                    <line x1="65" y1="205" x2="65" y2="25" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <line x1="65" y1="205" x2="685" y2="205" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <text x="55" y="38" fill="#cbd5e1" font-size="12" font-weight="bold" text-anchor="end">Energia E</text>
                    <text x="375" y="232" fill="#cbd5e1" font-size="12" text-anchor="middle">Postęp (współrzędna) reakcji</text>

                    <!-- Linie pomocnicze poziomów -->
                    <line x1="65" y1="40" x2="400" y2="40" stroke="#64748b" stroke-dasharray="4,4"/>
                    <line x1="65" y1="95" x2="480" y2="95" stroke="#64748b" stroke-dasharray="4,4"/>
                    <line x1="170" y1="150" x2="640" y2="150" stroke="#64748b" stroke-dasharray="4,4"/>
                    <line x1="470" y1="185" x2="640" y2="185" stroke="#64748b" stroke-dasharray="4,4"/>

                    <!-- Krzywa bez katalizatora (przerywana czerwona) -->
                    <path d="M 165 150 C 210 150, 235 40, 305 40 C 375 40, 410 185, 465 185" fill="none" stroke="#f87171" stroke-width="2.8" stroke-dasharray="7,5"/>
                    <text x="305" y="28" fill="#f87171" font-size="11.5" font-weight="bold" text-anchor="middle">Bez udziału katalizatora (kompleks [AB]*)</text>

                    <!-- Krzywa z katalizatorem (ciągła zielona z dwoma mniejszymi maksimami) -->
                    <path d="M 75 150 L 165 150 C 195 150, 215 95, 250 95 C 280 95, 290 122, 310 122 C 330 122, 340 98, 365 98 C 395 98, 430 185, 465 185 L 585 185" fill="none" stroke="#34d399" stroke-width="3.2"/>
                    <text x="295" y="84" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Z udziałem katalizatora ([A&ndash;Kat]* &rarr; [AB&ndash;Kat]*)</text>

                    <text x="120" y="140" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">Substraty (A + B)</text>
                    <text x="530" y="175" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">Produkty (AB)</text>

                    <!-- Strzałki Ea, Ea,kat, dH -->
                    <line x1="390" y1="150" x2="390" y2="45" stroke="#f87171" stroke-width="2" marker-end="url(#arr-red)"/>
                    <text x="396" y="70" fill="#f87171" font-size="11.5" font-weight="bold">E<tspan dy="3" font-size="8">a</tspan><tspan dy="-3"> (bez kat.)</tspan></text>

                    <line x1="465" y1="150" x2="465" y2="100" stroke="#34d399" stroke-width="2" marker-end="url(#arr-green)"/>
                    <text x="472" y="130" fill="#34d399" font-size="11.5" font-weight="bold">E<tspan dy="3" font-size="8">a,kat</tspan><tspan dy="-3"> &lt; E</tspan><tspan dy="3" font-size="8">a</tspan></text>

                    <line x1="625" y1="150" x2="625" y2="182" stroke="#cbd5e1" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <text x="635" y="172" fill="#e2e8f0" font-size="11.5" font-weight="bold">&Delta;H = const</text>
                </svg>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 6px;">
                    <strong>Rys. 5.</strong> Mechanizm działania katalizatora: przeprowadzenie reakcji przez etapy pośrednie o znacznie niższej barierze energetycznej (<i>E</i><sub>a,kat</sub> &lt; <i>E<sub>a</sub></i>) przy zachowaniu identycznego efektu cieplnego przemiany (&Delta;<i>H</i> = const).
                </div>
            </div>

            <ul class="note-list">
                <li><strong>Jak rozpoznać katalizator, a jak produkt przejściowy w zapisie wieloetapowym? (Klasyczne zadanie maturalne!):</strong>
                    <br>&ndash; <strong>Katalizator</strong> wchodzi do reakcji jako substrat w pierwszym etapie (Etap I: A + <strong>Kat</strong> &rarr; AKat), a w etapie końcowym ulega całkowitemu odtworzeniu jako produkt (Etap II: AKat + B &rarr; AB + <strong>Kat</strong>).
                    <br>&ndash; <strong>Produkt przejściowy (intermediat)</strong> powstaje w pierwszym etapie (jako produkt), a w kolejnym etapie zostaje całkowicie zużyty (jako substrat). Ani katalizator, ani produkt przejściowy nie występują w sumarycznym równaniu reakcji (A + B &rarr; AB).
                    <br>&ndash; <em>Przykład maturalny (komorowa metoda utleniania SO<sub>2</sub> w obecności tlenku azotu(II) jako katalizatora):</em><br>
                    Etap I: 2 NO<sub>(g)</sub> + O<sub>2(g)</sub> &rarr; 2 NO<sub>2(g)</sub><br>
                    Etap II: 2 SO<sub>2(g)</sub> + 2 NO<sub>2(g)</sub> &rarr; 2 SO<sub>3(g)</sub> + 2 NO<sub>(g)</sub><br>
                    Równanie sumaryczne: 2 SO<sub>2(g)</sub> + O<sub>2(g)</sub> &rarr; 2 SO<sub>3(g)</sub>. <strong>Katalizatorem jest NO</strong> (wprowadzony w I etapie i odtworzony w II etapie), natomiast <strong>produktem przejściowym jest NO<sub>2</sub></strong> (powstał w I etapie i przereagował w II etapie).
                </li>
                <li><strong>Kataliza homogeniczna (jednofazowa):</strong> Katalizator i reagenty znajdują się w tej samej fazie (tym samym stanie skupienia), np. opisane wyżej utlenianie gazowego SO<sub>2(g)</sub> tlenem O<sub>2(g)</sub> wobec gazowego katalizatora NO<sub>(g)</sub>, lub estryfikacja kwasu octowego etanolem w fazie ciekłej w obecności stężonego H<sub>2</sub>SO<sub>4(c)</sub> (katalizator kwasowy H<sup>+</sup>).</li>
                <li><strong>Kataliza heterogeniczna (wielofazowa / kontaktowa):</strong> Katalizator (zazwyczaj ciało stałe – tzw. <strong>kontakt</strong>, np. Pt, Pd, Ni, Fe, V<sub>2</sub>O<sub>5</sub>, MnO<sub>2</sub>, Al<sub>2</sub>O<sub>3</sub>) znajduje się w innej fazie niż reagujące substraty (gazy lub ciecze). Reakcja zachodzi na powierzchni kontaktu w tzw. centrach aktywnych (dlatego kontakt silnie się rozdrabnia lub osadza na porowatym nośniku). Przykłady: utlenianie SO<sub>2(g)</sub> do SO<sub>3(g)</sub> na stałym V<sub>2</sub>O<sub>5(s)</sub>, synteza amoniaku z N<sub>2(g)</sub> i H<sub>2(g)</sub> na stałym żelazie Fe<sub>(s)</sub> z dodatkiem aktywatorów (Al<sub>2</sub>O<sub>3</sub>, K<sub>2</sub>O), rozkład wodnego roztworu H<sub>2</sub>O<sub>2(aq)</sub> na stałym MnO<sub>2(s)</sub>.</li>
                <li><strong>Autokataliza (reakcja autokatalityczna):</strong> Proces, w którym rolę katalizatora pełni jeden z powstających w trakcie reakcji produktów. Z tego powodu szybkość reakcji autokatalitycznej początkowo jest bardzo mała, następnie w miarę gromadzenia się produktu-katalizatora gwałtownie wzrasta (osiągając maksimum), po czym maleje na skutek wyczerpywania się substratów.<br>
                <em>Obowiązkowy przykład maturalny:</em> Utlenianie kwasu szczawiowego (etanodiowego, H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>) za pomocą manganianu(VII) potasu (KMnO<sub>4</sub>) w środowisku kwasu siarkowego(VI):<br>
                <strong>2 MnO<sub>4</sub><sup>&minus;</sup> + 5 H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> + 6 H<sup>+</sup> &rarr; 2 Mn<sup>2+</sup> + 10 CO<sub>2</sub>&uarr; + 8 H<sub>2</sub>O</strong><br>
                Katalizatorem tej reakcji są powstające jony manganu(II) <strong>Mn<sup>2+</sup></strong>. Pierwsze krople fioletowego roztworu KMnO<sub>4</sub> odbarwiają się bardzo powoli, natomiast kolejne porcje (gdy w roztworze obecne są już jony Mn<sup>2+</sup>) odbarwiają się natychmiastowo.</li>
                <li><strong>Biokataliza:</strong> Przyspieszanie reakcji biochemicznych przez specyficzne białka katalityczne – <strong>enzymy</strong> – działające poprzez dopasowanie substratu do centrum aktywnego (model „zamka i klucza” lub indukowanego dopasowania).</li>
            </ul>

            <h4>D. Wzorcowe zadania maturalne z kinetyki chemicznej – rozwiązania krok po kroku</h4>

            <div class="chem-obs">
                📝 <strong>Przykład 3 (Wyznaczanie rzędu reakcji, równania kinetycznego i stałej szybkości <i>k</i> z danych tabelarycznych):</strong><br>
                <em>W określonej temperaturze zbadano początkową szybkość reakcji redukcji tlenku azotu(II) wodorem przebiegającej w fazie gazowej zgodnie z sumarycznym równaniem: 2 NO<sub>(g)</sub> + 2 H<sub>2(g)</sub> &rarr; N<sub>2(g)</sub> + 2 H<sub>2</sub>O<sub>(g)</sub>. Wyniki trzech pomiarów zestawiono w tabeli. Wyznacz cząstkowe rzędy reakcji względem NO i H<sub>2</sub>, zapisz równanie kinetyczne, określ całkowity rząd reakcji oraz oblicz wartość stałej szybkości <i>k</i> wraz z jednostką.</em>

                <div class="table-responsive" style="margin: 10px 0;">
                    <table class="note-table">
                        <thead>
                            <tr>
                                <th>Numer pomiaru</th>
                                <th>Stężenie początkowe [NO] [mol &middot; dm<sup>&minus;3</sup>]</th>
                                <th>Stężenie początkowe [H<sub>2</sub>] [mol &middot; dm<sup>&minus;3</sup>]</th>
                                <th>Szybkość początkowa <i>v</i><sub>0</sub> [mol &middot; dm<sup>&minus;3</sup> &middot; s<sup>&minus;1</sup>]</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Pomiar 1</strong></td>
                                <td>0,10</td>
                                <td>0,10</td>
                                <td>1,2 &middot; 10<sup>&minus;3</sup></td>
                            </tr>
                            <tr>
                                <td><strong>Pomiar 2</strong></td>
                                <td>0,20</td>
                                <td>0,10</td>
                                <td>4,8 &middot; 10<sup>&minus;3</sup></td>
                            </tr>
                            <tr>
                                <td><strong>Pomiar 3</strong></td>
                                <td>0,20</td>
                                <td>0,30</td>
                                <td>1,44 &middot; 10<sup>&minus;2</sup> (= 14,4 &middot; 10<sup>&minus;3</sup>)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                • <strong>Krok 1 (Zapis ogólnej postaci równania kinetycznego):</strong> <i>v</i> = <i>k</i> &middot; [NO]<sup>&alpha;</sup> &middot; [H<sub>2</sub>]<sup>&beta;</sup> (nie wolno przepisać współczynników z równania reakcji!).<br>
                • <strong>Krok 2 (Wyznaczenie rzędu &alpha; względem NO):</strong> Porównujemy dwa pomiary, w których stężenie drugiego substratu ([H<sub>2</sub>]) jest stałe – wybieramy Pomiar 1 i Pomiar 2 ([H<sub>2</sub>] = 0,10 mol &middot; dm<sup>&minus;3</sup> = const). Stężenie [NO] wzrosło z 0,10 do 0,20 mol &middot; dm<sup>&minus;3</sup> (czyli 2-krotnie), a szybkość reakcji wzrosła z 1,2 &middot; 10<sup>&minus;3</sup> do 4,8 &middot; 10<sup>&minus;3</sup> (czyli 4-krotnie):<br>
                <i>v</i><sub>2</sub> / <i>v</i><sub>1</sub> = (4,8 &middot; 10<sup>&minus;3</sup>) / (1,2 &middot; 10<sup>&minus;3</sup>) = (0,20 / 0,10)<sup>&alpha;</sup> &nbsp;&rArr;&nbsp; 4 = 2<sup>&alpha;</sup> &nbsp;&rArr;&nbsp; <strong>&alpha; = 2 (reakcja II rzędu względem NO)</strong>.<br>
                • <strong>Krok 3 (Wyznaczenie rzędu &beta; względem H<sub>2</sub>):</strong> Porównujemy Pomiar 2 i Pomiar 3, w których stężenie [NO] jest stałe i wynosi 0,20 mol &middot; dm<sup>&minus;3</sup>. Stężenie [H<sub>2</sub>] wzrosło z 0,10 do 0,30 mol &middot; dm<sup>&minus;3</sup> (3-krotnie), a szybkość wzrosła z 4,8 &middot; 10<sup>&minus;3</sup> do 14,4 &middot; 10<sup>&minus;3</sup> (również 3-krotnie):<br>
                <i>v</i><sub>3</sub> / <i>v</i><sub>2</sub> = (14,4 &middot; 10<sup>&minus;3</sup>) / (4,8 &middot; 10<sup>&minus;3</sup>) = (0,30 / 0,10)<sup>&beta;</sup> &nbsp;&rArr;&nbsp; 3 = 3<sup>&beta;</sup> &nbsp;&rArr;&nbsp; <strong>&beta; = 1 (reakcja I rzędu względem H<sub>2</sub>)</strong>.<br>
                • <strong>Krok 4 (Zapis równania kinetycznego i obliczenie stałej <i>k</i>):</strong> Równanie kinetyczne ma postać: <strong><i>v</i> = <i>k</i> &middot; [NO]<sup>2</sup> &middot; [H<sub>2</sub>]</strong>, a całkowity rząd reakcji wynosi <strong><i>n</i> = 2 + 1 = 3</strong> (dowodzi to, że badana reakcja jest procesem złożonym wieloetapowym, gdyż współczynnik przed H<sub>2</sub> w równaniu sumarycznym wynosił 2, a w równaniu kinetycznym wykładnik jest równy 1). Podstawiając dane z Pomiaru 1, obliczamy <i>k</i>:<br>
                <i>k</i> = <i>v</i><sub>1</sub> / ([NO]<sup>2</sup> &middot; [H<sub>2</sub>]) = (1,2 &middot; 10<sup>&minus;3</sup> mol &middot; dm<sup>&minus;3</sup> &middot; s<sup>&minus;1</sup>) / [(0,10 mol &middot; dm<sup>&minus;3</sup>)<sup>2</sup> &middot; (0,10 mol &middot; dm<sup>&minus;3</sup>)] = (1,2 &middot; 10<sup>&minus;3</sup>) / (1,0 &middot; 10<sup>&minus;3</sup>) = <strong>1,2 dm<sup>6</sup> &middot; mol<sup>&minus;2</sup> &middot; s<sup>&minus;1</sup></strong>.
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 4 (Wpływ zmiany objętości reaktora / ciśnienia oraz temperatury na szybkość reakcji):</strong><br>
                <em>Jednoetapowa reakcja utleniania tlenku siarki(IV) przebiega w fazie gazowej zgodnie z równaniem: 2 SO<sub>2(g)</sub> + O<sub>2(g)</sub> &rarr; 2 SO<sub>3(g)</sub>. Oblicz, jak zmieni się szybkość tej reakcji, jeżeli równocześnie: zmniejszymy objętość naczynia reakcyjnego 3-krotnie oraz podwyższymy temperaturę z 20&deg;C do 50&deg;C, wiedząc, że temperaturowy współczynnik szybkości tej reakcji wynosi &gamma; = 2.</em><br><br>
                • <strong>Krok 1 (Wpływ 3-krotnego zmniejszenia objętości naczynia):</strong> Ponieważ reakcja jest jednoetapowa, jej równanie kinetyczne ma postać <i>v</i><sub>1</sub> = <i>k</i> &middot; [SO<sub>2</sub>]<sup>2</sup> &middot; [O<sub>2</sub>]. Trzykrotne zmniejszenie objętości naczynia (<i>V</i><sub>2</sub> = &frac13; <i>V</i><sub>1</sub>) powoduje 3-krotny wzrost stężenia molowego każdego gazu ([SO<sub>2</sub>]<sub>2</sub> = 3[SO<sub>2</sub>]<sub>1</sub> oraz [O<sub>2</sub>]<sub>2</sub> = 3[O<sub>2</sub>]<sub>1</sub>):<br>
                <i>v'</i> = <i>k</i> &middot; (3[SO<sub>2</sub>])<sup>2</sup> &middot; (3[O<sub>2</sub>]) = 9 &middot; 3 &middot; <i>k</i> &middot; [SO<sub>2</sub>]<sup>2</sup> &middot; [O<sub>2</sub>] = <strong>27 &middot; <i>v</i><sub>1</sub></strong> (wzrost 27-krotny z powodu wzrostu stężeń).<br>
                • <strong>Krok 2 (Wpływ podwyższenia temperatury o &Delta;<i>T</i> = 50&deg;C &minus; 20&deg;C = 30 K z reguły van’t Hoffa):</strong><br>
                <i>v</i><sub>(<i>T</i>2)</sub> / <i>v</i><sub>(<i>T</i>1)</sub> = &gamma;<sup>&Delta;<i>T</i> / 10</sup> = 2<sup>30 / 10</sup> = 2<sup>3</sup> = <strong>8</strong> (wzrost 8-krotny z powodu wzrostu temperatury).<br>
                • <strong>Krok 3 (Efekt łączny):</strong> Całkowita szybkość reakcji wzrośnie 27 &middot; 8 = <strong>216 razy</strong>.
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 5 (Złożone zadanie kinetyczne ze zmianą szybkości w miarę przereagowania substratów):</strong><br>
                <em>Do zamkniętego reaktora o stałej pojemności wprowadzono gazowe reagenty A i B o stężeniach początkowych: <i>C</i><sub>0(A)</sub> = 0,80 mol &middot; dm<sup>&minus;3</sup> oraz <i>C</i><sub>0(B)</sub> = 0,60 mol &middot; dm<sup>&minus;3</sup>. Zainicjowano jednoetapową reakcję przebiegającą w stałej temperaturze według równania: 2 A<sub>(g)</sub> + B<sub>(g)</sub> &rarr; C<sub>(g)</sub>. Oblicz stosunek początkowej szybkości tej reakcji (<i>v</i><sub>0</sub>) do szybkości (<i>v</i><sub>1</sub>) w chwili, gdy przereagowało 50% początkowej ilości substratu A.</em><br><br>
                • <strong>Krok 1 (Szybkość początkowa <i>v</i><sub>0</sub>):</strong> Dla reakcji jednoetapowej równanie kinetyczne ma postać <i>v</i> = <i>k</i> &middot; [A]<sup>2</sup> &middot; [B]. W chwili <i>t</i> = 0:<br>
                <i>v</i><sub>0</sub> = <i>k</i> &middot; (0,80)<sup>2</sup> &middot; (0,60) = <i>k</i> &middot; 0,64 &middot; 0,60 = <strong>0,384 &middot; <i>k</i></strong>.<br>
                • <strong>Krok 2 (Stężenia obu substratów po przereagowaniu 50% substratu A):</strong> Przereagowało 50% z 0,80 mol &middot; dm<sup>&minus;3</sup> substratu A, czyli &Delta;<i>C</i><sub>A</sub> = 0,40 mol &middot; dm<sup>&minus;3</sup>. Z równania stechiometrycznego (2A + B &rarr; C) wynika, że na każde 2 mole substratu A zużywa się 1 mol substratu B, zatem w tym samym czasie ubyło &Delta;<i>C</i><sub>B</sub> = &frac12; &middot; &Delta;<i>C</i><sub>A</sub> = 0,20 mol &middot; dm<sup>&minus;3</sup> substratu B! Stężenia pozostałe w reaktorze wynoszą więc: [A]<sub>1</sub> = 0,80 &minus; 0,40 = 0,40 mol &middot; dm<sup>&minus;3</sup> oraz [B]<sub>1</sub> = 0,60 &minus; 0,20 = 0,40 mol &middot; dm<sup>&minus;3</sup>:<br>
                <i>v</i><sub>1</sub> = <i>k</i> &middot; (0,40)<sup>2</sup> &middot; (0,40) = <strong>0,064 &middot; <i>k</i></strong> &nbsp;&rArr;&nbsp; <i>v</i><sub>0</sub> / <i>v</i><sub>1</sub> = (0,384 &middot; <i>k</i>) / (0,064 &middot; <i>k</i>) = <strong>6</strong> (szybkość zmalała 6-krotnie).
            </div>
        </div>

        <!-- SEKCJA 5 -->
        <div class="note-section">
            <h3>5. Statyka Chemiczna – Stan Równowagi Dynamicznej i Stała Równowagi (<i>K<sub>c</sub></i>, <i>K<sub>p</sub></i>)</h3>

            <h4>A. Reakcje nieodwracalne a odwracalne i istota równowagi dynamicznej</h4>
            <p>Reakcje chemiczne, które biegną praktycznie w jednym kierunku aż do całkowitego wyczerpania przynajmniej jednego z substratów (np. spalanie węglowodorów, strącanie trudno rozpuszczalnego osadu Ag<sup>+</sup> + Cl<sup>&minus;</sup> &rarr; AgCl&darr;, wydzielanie gazu uciekającego z otwartego naczynia CaCO<sub>3</sub> + 2HCl &rarr; CaCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub>&uarr;), nazywamy <strong>reakcjami nieodwracalnymi</strong> (zapis z pojedynczą strzałką &rarr;). Natomiast przemiany przeprowadzane w układzie zamkniętym, w których powstające produkty mogą reagować ze sobą z odtworzeniem wyjściowych substratów w tych samych warunkach, nazywamy <strong>reakcjami odwracalnymi</strong> (zapis z dwiema strzałkami &#8652;).</p>
            <p>Rozważmy ogólną reakcję odwracalną <i>a</i>A + <i>b</i>B &#8652; <i>c</i>C + <i>d</i>D zachodzącą w stałej temperaturze w zamkniętym reaktorze, do którego wprowadzono wyłącznie substraty A i B. W chwili początkowej (<i>t</i> = 0) szybkość reakcji biegnącej w prawo (wprost, <i>v</i><sub>1</sub> = <i>k</i><sub>1</sub> &middot; [A]<sup><i>a</i></sup> &middot; [B]<sup><i>b</i></sup>) jest maksymalna, natomiast szybkość reakcji odwrotnej (w lewo, <i>v</i><sub>2</sub> = <i>k</i><sub>2</sub> &middot; [C]<sup><i>c</i></sup> &middot; [D]<sup><i>d</i></sup>) wynosi zero, gdyż nie ma jeszcze produktów. W miarę upływu czasu stężenia substratów A i B maleją (więc <i>v</i><sub>1</sub> maleje), a stężenia produktów C i D rosną (więc <i>v</i><sub>2</sub> rośnie). Po pewnym czasie <i>t<sub>r</sub></i> szybkości obu przeciwbieżnych reakcji zrównują się (<strong><i>v</i><sub>1</sub> = <i>v</i><sub>2</sub></strong>) i układ osiąga <strong>stan równowagi chemicznej</strong>:</p>
            <ul class="note-list">
                <li><strong>Dlaczego równowaga chemiczna ma charakter dynamiczny?</strong> Ponieważ po osiągnięciu stanu równowagi reakcje chemiczne wcale nie ustają (<strong><i>v</i><sub>1</sub> = <i>v</i><sub>2</sub> &ne; 0</strong>)! Zarówno reakcja tworzenia produktów (w prawo), jak i reakcja odtwarzania substratów (w lewo) nadal biegną nieprzerwanie z dokładnie taką samą szybkością. W każdej sekundzie ubywa dokładnie tyle samo moli każdego reagenta, ile powstaje w reakcji przeciwnej.</li>
                <li><strong>Konsekwencja makroskopowa:</strong> Od momentu osiągnięcia stanu równowagi dynamicznej stężenia molowe wszystkich substratów i produktów w mieszaninie reakcyjnej pozostają stałe w czasie ([A] = const, [B] = const, [C] = const, [D] = const) dopóty, dopóki nie zmienimy warunków zewnętrznych.</li>
            </ul>

            <div class="note-alert danger">
                🔥 <strong>CZĘSTY BŁĄD MATURALNY – Równość szybkości (<i>v</i><sub>1</sub> = <i>v</i><sub>2</sub>) a stężenia równowagowe:</strong><br>
                W stanie równowagi chemicznej szybkości reakcji wprost i odwrotnej są sobie zawsze równe (<strong><i>v</i><sub>1</sub> = <i>v</i><sub>2</sub></strong>), ale stężenia równowagowe substratów i produktów zazwyczaj <strong>NIE SĄ sobie równe ([substratów] &ne; [produktów])</strong>! Stężenia w stanie równowagi są <strong>stałe w czasie</strong> (na wykresie <i>C</i> = <i>f</i>(<i>t</i>) linie stają się poziome), przy czym w zależności od wartości stałej równowagi stężenie produktów może być większe, mniejsze lub – tylko w szczególnym przypadku – równe stężeniu substratów.
            </div>

            <!-- WYKRES 6: OSIĄGANIE STANU RÓWNOWAGI DYNAMICZNEJ (SVG) -->
            <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 12px; padding: 14px; margin: 16px 0; text-align: center;">
                <svg viewBox="0 0 780 275" style="width: 100%; max-width: 780px; height: auto;">
                    <!-- WYKRES A: SZYBKOŚCI v1 i v2 -->
                    <text x="195" y="22" fill="#f8fafc" font-size="12.5" font-weight="bold" text-anchor="middle">a) Szybkości reakcji wprost (v<tspan dy="3" font-size="8">1</tspan><tspan dy="-3">) i odwrotnej (v</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3">) w czasie</tspan></text>
                    <rect x="210" y="38" width="145" height="192" fill="rgba(56, 189, 248, 0.08)"/>
                    <line x1="210" y1="38" x2="210" y2="230" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>
                    <text x="282" y="58" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">STAN RÓWNOWAGI</text>

                    <line x1="50" y1="230" x2="50" y2="35" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <line x1="50" y1="230" x2="365" y2="230" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <text x="38" y="42" fill="#cbd5e1" font-size="12" font-weight="bold">v</text>
                    <text x="210" y="246" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="middle">t<tspan dy="3" font-size="8">r</tspan></text>
                    <text x="210" y="264" fill="#cbd5e1" font-size="11.5" text-anchor="middle">Czas t [s]</text>

                    <path d="M 50 55 Q 120 135, 210 135 L 355 135" fill="none" stroke="#f87171" stroke-width="3"/>
                    <path d="M 50 230 Q 120 135, 210 135 L 355 135" fill="none" stroke="#38bdf8" stroke-width="3"/>
                    <text x="135" y="88" fill="#f87171" font-size="11.5" font-weight="bold">v<tspan dy="3" font-size="8">1</tspan><tspan dy="-3"> (w prawo)</tspan></text>
                    <text x="135" y="202" fill="#38bdf8" font-size="11.5" font-weight="bold">v<tspan dy="3" font-size="8">2</tspan><tspan dy="-3"> (w lewo)</tspan></text>
                    <text x="282" y="124" fill="#f8fafc" font-size="11.5" font-weight="bold" text-anchor="middle">v<tspan dy="3" font-size="8">1</tspan><tspan dy="-3"> = v</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3"> = const &ne; 0</tspan></text>

                    <!-- WYKRES B: STĘŻENIA W CZASIE -->
                    <text x="585" y="22" fill="#f8fafc" font-size="12.5" font-weight="bold" text-anchor="middle">b) Stężenia substratów i produktów w czasie (np. dla K<tspan dy="3" font-size="8">c</tspan><tspan dy="-3"> &gt; 1)</tspan></text>
                    <rect x="600" y="38" width="145" height="192" fill="rgba(56, 189, 248, 0.08)"/>
                    <line x1="600" y1="38" x2="600" y2="230" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>
                    <text x="672" y="58" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">STAN RÓWNOWAGI</text>

                    <line x1="440" y1="230" x2="440" y2="35" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <line x1="440" y1="230" x2="755" y2="230" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <text x="432" y="32" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="end">C [mol&middot;dm<tspan dy="-4" font-size="8">&minus;3</tspan><tspan dy="4">]</tspan></text>
                    <text x="600" y="246" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="middle">t<tspan dy="3" font-size="8">r</tspan></text>
                    <text x="600" y="264" fill="#cbd5e1" font-size="11.5" text-anchor="middle">Czas t [s]</text>

                    <path d="M 440 65 Q 515 170, 600 170 L 745 170" fill="none" stroke="#f87171" stroke-width="3"/>
                    <path d="M 440 230 Q 515 95, 600 95 L 745 95" fill="none" stroke="#38bdf8" stroke-width="3"/>
                    <text x="672" y="84" fill="#38bdf8" font-size="11.5" font-weight="bold" text-anchor="middle">[Produkty] = const</text>
                    <text x="672" y="190" fill="#f87171" font-size="11.5" font-weight="bold" text-anchor="middle">[Substraty] = const</text>
                </svg>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 6px;">
                    <strong>Rys. 6.</strong> Graficzny obraz osiągania stanu równowagi w chwili <i>t<sub>r</sub></i>: a) na wykresie szybkości krzywe <i>v</i><sub>1</sub> i <i>v</i><sub>2</sub> zawsze łączą się w jedną linię poziomą; b) na wykresie stężeń krzywe mogą się przeciąć lub nie, ale od chwili <i>t<sub>r</sub></i> biegną poziomo (stężenie żadnego reagenta nie spada do zera!).
                </div>
            </div>

            <h4>B. Prawo działania mas (Guldberga i Waagego) oraz wyrażenia na stałą równowagi (<i>K<sub>c</sub></i> i <i>K<sub>p</sub></i>)</h4>
            <p>Przyrównując szybkości reakcji elementarnych w stanie równowagi (<i>k</i><sub>1</sub> &middot; [A]<sup><i>a</i></sup> &middot; [B]<sup><i>b</i></sup> = <i>k</i><sub>2</sub> &middot; [C]<sup><i>c</i></sup> &middot; [D]<sup><i>d</i></sup>), otrzymujemy iloraz dwóch stałych szybkości (<i>k</i><sub>1</sub> / <i>k</i><sub>2</sub> = <i>K<sub>c</sub></i>), co stanowi matematyczny zapis <strong>prawa działania mas Guldberga i Waagego (1864 r.)</strong>: W stanie równowagi chemicznej w danej temperaturze stosunek iloczynu stężeń molowych produktów do iloczynu stężeń molowych substratów, podniesionych do potęg równych współczynnikom stechiometrycznym w uzgodnionym równaniu reakcji, jest wielkością stałą, zwaną <strong>stężeniową stałą równowagi (<i>K<sub>c</sub></i>)</strong>:</p>
            <div class="chem-eq">
                Dla reakcji: <i>a</i>A + <i>b</i>B &#8652; <i>c</i>C + <i>d</i>D &nbsp;&rArr;&nbsp; <i>K<sub>c</sub></i> = <i>k</i><sub>1</sub> / <i>k</i><sub>2</sub> = ([C]<sup><i>c</i></sup> &middot; [D]<sup><i>d</i></sup>) / ([A]<sup><i>a</i></sup> &middot; [B]<sup><i>b</i></sup>) &nbsp;&nbsp;oraz dla gazów:&nbsp;&nbsp; <i>K<sub>p</sub></i> = ((<i>p</i><sub>C</sub>)<sup><i>c</i></sup> &middot; (<i>p</i><sub>D</sub>)<sup><i>d</i></sup>) / ((<i>p</i><sub>A</sub>)<sup><i>a</i></sup> &middot; (<i>p</i><sub>B</sub>)<sup><i>b</i></sup>)
            </div>
            <p>gdzie [A], [B], [C], [D] oznaczają wyłącznie <strong>równowagowe stężenia molowe</strong> reagentów (w mol &middot; dm<sup>&minus;3</sup>), a <i>p</i><sub>A</sub>, <i>p</i><sub>B</sub>, <i>p</i><sub>C</sub>, <i>p</i><sub>D</sub> to równowagowe ciśnienia cząstkowe (parcjalne) gazów w wyrażeniu na ciśnieniową stałą równowagi <i>K<sub>p</sub></i>. W obliczeniach szkolnych i maturalnych wartość <i>K<sub>c</sub></i> podaje się jako wielkość bezwymiarową.</p>
            <ul class="note-list">
                <li><strong>Jak interpretować wartość liczbową stałej równowagi <i>K<sub>c</sub></i>?</strong>
                    <br>&ndash; Jeżeli <strong><i>K<sub>c</sub></i> &gt; 1</strong> (szczególnie gdy <i>K<sub>c</sub></i> &gg; 1, np. 10<sup>5</sup>): licznik ułamka jest większy od mianownika, co oznacza, że w stanie równowagi <strong>przeważają produkty</strong>, a równowaga reakcji jest przesunięta w prawo (wysoka wydajność tworzenia produktów).
                    <br>&ndash; Jeżeli <strong><i>K<sub>c</sub></i> &lt; 1</strong> (szczególnie gdy <i>K<sub>c</sub></i> &ll; 1, np. 10<sup>&minus;6</sup>): mianownik jest większy od licznika, więc w mieszaninie równowagowej <strong>dominują nieprzereagowane substraty</strong>, a równowaga jest przesunięta w lewo (niska wydajność reakcji).
                </li>
                <li><strong>Od czego zależy wartość stałej równowagi <i>K<sub>c</sub></i>?</strong> Dla danej reakcji chemicznej wartość liczbową stałej równowagi <i>K<sub>c</sub></i> zmienia <strong>WYŁĄCZNIE ZMIANA TEMPERATURY (<i>T</i>)</strong>! Wartość <i>K<sub>c</sub></i> <strong>nie zależy</strong> od początkowych stężeń substratów, od dodania lub usunięcia reagenta, od zmiany ciśnienia czy objętości reaktora, ani od wprowadzenia katalizatora!</li>
            </ul>

            <h4>C. Równowaga homogeniczna a heterogeniczna – czego NIE wpisujemy do wyrażenia na <i>K<sub>c</sub></i>?</h4>
            <p>W układach heterogenicznych (wielofazowych), w których obok gazów lub roztworów występują <strong>czyste ciała stałe (s)</strong> lub czyste ciecze występujące w dużym nadmiarze jako rozpuszczalnik (np. woda H<sub>2</sub>O<sub>(c)</sub> w rozcieńczonych roztworach wodnych), ich stężenie molowe wewnątrz własnej fazy jest stałe i nie ulega zmianie w trakcie reakcji. Dlatego w wyrażeniu na stałą równowagi <i>K<sub>c</sub></i> (oraz <i>K<sub>p</sub></i>) <strong>całkowicie pomija się czyste ciała stałe (s) oraz czystą wodę jako rozpuszczalnik H<sub>2</sub>O<sub>(c)</sub></strong> (formalnie wstawia się w ich miejsce liczbę 1). <em>Uwaga:</em> Wodę w stanie gazowym H<sub>2</sub>O<sub>(g)</sub> (parę wodną) w reakcjach gazowych lub wodę ciekłą w reakcji estryfikacji w fazie ciekłej bez rozpuszczalnika należy <strong>bezwzględnie uwzględnić</strong> w wyrażeniu na <i>K<sub>c</sub></i>!</p>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Równanie reakcji odwracalnej (z oznaczeniem faz)</th>
                            <th>Poprawne wyrażenie na <i>K<sub>c</sub></i></th>
                            <th>Komentarz i pułapki maturalne</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>N<sub>2(g)</sub> + 3 H<sub>2(g)</sub> &#8652; 2 NH<sub>3(g)</sub> &nbsp;<em>(homogeniczna gazowa)</em></td>
                            <td><i>K<sub>c</sub></i> = [NH<sub>3</sub>]<sup>2</sup> / ([N<sub>2</sub>] &middot; [H<sub>2</sub>]<sup>3</sup>)</td>
                            <td>Wszystkie reagenty są gazami – uwzględniamy każdy z nich z odpowiednim wykładnikiem.</td>
                        </tr>
                        <tr>
                            <td>CH<sub>3</sub>COOH<sub>(c)</sub> + C<sub>2</sub>H<sub>5</sub>OH<sub>(c)</sub> &#8652; CH<sub>3</sub>COOC<sub>2</sub>H<sub>5(c)</sub> + H<sub>2</sub>O<sub>(c)</sub></td>
                            <td><i>K<sub>c</sub></i> = ([CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub>] &middot; [H<sub>2</sub>O]) / ([CH<sub>3</sub>COOH] &middot; [C<sub>2</sub>H<sub>5</sub>OH])</td>
                            <td><strong>Uwaga!</strong> W reakcji estryfikacji woda nie jest rozpuszczalnikiem w nadmiarze, lecz równorzędnym produktem – <strong>musi być wpisana w liczniku!</strong></td>
                        </tr>
                        <tr>
                            <td>C<sub>(s)</sub> + CO<sub>2(g)</sub> &#8652; 2 CO<sub>(g)</sub> &nbsp;<em>(heterogeniczna)</em></td>
                            <td><i>K<sub>c</sub></i> = [CO]<sup>2</sup> / [CO<sub>2</sub>]</td>
                            <td><strong>Pomijamy stały węgiel C<sub>(s)</sub>!</strong> Wpisanie [C] w mianowniku to błąd skutkujący utratą punktów na maturze.</td>
                        </tr>
                        <tr>
                            <td>CaCO<sub>3(s)</sub> &#8652; CaO<sub>(s)</sub> + CO<sub>2(g)</sub> &nbsp;<em>(heterogeniczna)</em></td>
                            <td><i>K<sub>c</sub></i> = [CO<sub>2</sub>] &nbsp;(oraz <i>K<sub>p</sub></i> = <i>p</i><sub>CO<sub>2</sub></sub>)</td>
                            <td>Zarówno CaCO<sub>3(s)</sub>, jak i CaO<sub>(s)</sub> są ciałami stałymi – w wyrażeniu pozostaje wyłącznie gazowy CO<sub>2(g)</sub>.</td>
                        </tr>
                        <tr>
                            <td>3 Fe<sub>(s)</sub> + 4 H<sub>2</sub>O<sub>(g)</sub> &#8652; Fe<sub>3</sub>O<sub>4(s)</sub> + 4 H<sub>2(g)</sub></td>
                            <td><i>K<sub>c</sub></i> = [H<sub>2</sub>]<sup>4</sup> / [H<sub>2</sub>O]<sup>4</sup></td>
                            <td>Pomijamy stałe Fe<sub>(s)</sub> oraz Fe<sub>3</sub>O<sub>4(s)</sub>, natomiast <strong>uwzględniamy H<sub>2</sub>O<sub>(g)</sub></strong>, bo jest parą wodną w fazie gazowej!</td>
                        </tr>
                        <tr>
                            <td>NH<sub>3(aq)</sub> + H<sub>2</sub>O<sub>(c)</sub> &#8652; NH<sub>4</sub><sup>+</sup><sub>(aq)</sub> + OH<sup>&minus;</sup><sub>(aq)</sub></td>
                            <td><i>K<sub>b</sub></i> = ([NH<sub>4</sub><sup>+</sup>] &middot; [OH<sup>&minus;</sup>]) / [NH<sub>3</sub>]</td>
                            <td>W rozcieńczonym roztworze wodnym stężenie ciekłej wody H<sub>2</sub>O<sub>(c)</sub> (&approx; 55,5 mol &middot; dm<sup>&minus;3</sup>) jest stałe i włączone do stałej dysocjacji <i>K<sub>b</sub></i>.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- SEKCJA 6 -->
        <div class="note-section">
            <h3>6. Reguła Przekory Le Chateliera–Brauna i Wydajność Reakcji Odwracalnej</h3>

            <h4>A. Treść reguły przekory (zasady Le Chateliera–Brauna, 1884 r.)</h4>
            <p>Jeżeli na układ znajdujący się w stanie równowagi dynamicznej zadziała bodziec (czynnik) zewnętrzny zmieniający jeden z parametrów stanu (stężenie reagenta, ciśnienie lub temperaturę), to w układzie zachodzą procesy zmierzające do <strong>przeciwdziałania (osłabienia) skutkom tego bodźca</strong> i układ osiąga nowy stan równowagi.</p>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Bodziec zewnętrzny</th>
                            <th>Kierunek przesunięcia równowagi i wpływ na wydajność reakcji</th>
                            <th>Wpływ na wartość stałej równowagi <i>K<sub>c</sub></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. Zmiana stężenia reagenta</strong> (dodanie lub usunięcie z układu)<br><em>(dotyczy tylko gazów i substancji w roztworze!)</em></td>
                            <td>• <strong>Dodanie substratu lub usunięcie produktu:</strong> równowaga przesuwa się <strong>w prawo</strong> (w stronę tworzenia produktów) &rarr; wydajność reakcji wzrasta.<br>• <strong>Dodanie produktu lub usunięcie substratu:</strong> równowaga przesuwa się <strong>w lewo</strong> (w stronę odtwarzania substratów) &rarr; wydajność reakcji maleje.<br>• <em>Uwaga:</em> Dosypanie lub odebranie ciała stałego (s) (np. C<sub>(s)</sub> lub CaCO<sub>3(s)</sub>) <strong>nie przesuwa</strong> stanu równowagi!</td>
                            <td><strong><i>K<sub>c</sub></i> = const (nie zmienia się!)</strong><br>Układ zmienia stężenia wszystkich reagentów właśnie po to, aby ułamek stężeniowy powrócił do tej samej wartości <i>K<sub>c</sub></i>.</td>
                        </tr>
                        <tr>
                            <td><strong>2. Zmiana ciśnienia</strong> (poprzez zmianę objętości reaktora)<br><em>(dotyczy tylko reakcji z udziałem gazów!)</em></td>
                            <td>Zliczamy sumę moli wyłącznie gazowych substratów (<i>n</i><sub>gaz,S</sub>) i wyłącznie gazowych produktów (<i>n</i><sub>gaz,P</sub>):<br>• <strong>Wzrost ciśnienia (zmniejszenie objętości naczynia):</strong> równowaga przesuwa się w tę stronę, po której jest <strong>mniejsza liczba moli (mniejsza objętość) gazów</strong>.<br>• <strong>Spadek ciśnienia (zwiększenie objętości naczynia):</strong> równowaga przesuwa się w stronę <strong>większej liczby moli (większej objętości) gazów</strong>.<br>• <strong>Gdy &Delta;<i>n</i><sub>gaz</sub> = 0</strong> (np. H<sub>2(g)</sub> + I<sub>2(g)</sub> &#8652; 2HI<sub>(g)</sub> lub N<sub>2(g)</sub> + O<sub>2(g)</sub> &#8652; 2NO<sub>(g)</sub>, gdzie po obu stronach są po 2 mole gazów): zmiana ciśnienia <strong>NIE wpływa</strong> na położenie stanu równowagi ani na wydajność reakcji!</td>
                            <td><strong><i>K<sub>c</sub></i> = const (nie zmienia się!)</strong></td>
                        </tr>
                        <tr>
                            <td><strong>3. Zmiana temperatury</strong> (ogrzanie lub ochłodzenie układu)</td>
                            <td>Ciepło traktujemy jak wirtualny reagent (w reakcji egzotermicznej &Delta;<i>H</i> &lt; 0 zapisujemy <strong>+ <i>Q</i> po stronie produktów</strong>; w endotermicznej &Delta;<i>H</i> &gt; 0 zapisujemy <strong>+ <i>Q</i> po stronie substratów</strong>):<br>• <strong>Podwyższenie temperatury (ogrzanie):</strong> układ zużywa dostarczone ciepło, więc równowaga przesuwa się w kierunku przebiegu <strong>reakcji endotermicznej</strong> (dla &Delta;<i>H</i> &gt; 0 w prawo – wydajność rośnie; dla &Delta;<i>H</i> &lt; 0 w lewo – wydajność maleje).<br>• <strong>Obniżenie temperatury (ochłodzenie):</strong> układ uzupełnia ubytek ciepła, więc równowaga przesuwa się w kierunku <strong>reakcji egzotermicznej</strong> (dla &Delta;<i>H</i> &lt; 0 w prawo; dla &Delta;<i>H</i> &gt; 0 w lewo).</td>
                            <td><strong><i>K<sub>c</sub></i> ZMIENIA SIĘ!</strong><br>• Dla reakcji endotermicznej (&Delta;<i>H</i> &gt; 0): <strong>wzrost <i>T</i> powoduje wzrost <i>K<sub>c</sub></i></strong>.<br>• Dla reakcji egzotermicznej (&Delta;<i>H</i> &lt; 0): <strong>wzrost <i>T</i> powoduje spadek <i>K<sub>c</sub></i></strong>.</td>
                        </tr>
                        <tr>
                            <td><strong>4. Wprowadzenie katalizatora</strong></td>
                            <td>Katalizator <strong>NIE przesuwa stanu równowagi chemicznej i NIE wpływa na wydajność przemiany!</strong> Obniża on o dokładnie taką samą wartość (&Delta;<i>E<sub>a</sub></i>) barierę energii aktywacji zarówno dla reakcji biegnącej w prawo, jak i dla reakcji odwrotnej, przyspieszając obie reakcje w tym samym stopniu. Katalizator pozwala jedynie <strong>szybciej osiągnąć</strong> stan równowagi.</td>
                            <td><strong><i>K<sub>c</sub></i> = const (nie zmienia się!)</strong><br>(Stałe <i>k</i><sub>1</sub> i <i>k</i><sub>2</sub> rosną tyle samo razy, więc ich iloraz <i>K<sub>c</sub></i> = <i>k</i><sub>1</sub>/<i>k</i><sub>2</sub> pozostaje stały).</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- WYKRES 7: ZALEŻNOŚĆ Kc(T) ORAZ ZABURZENIE RÓWNOWAGI (SVG) -->
            <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 12px; padding: 14px; margin: 16px 0; text-align: center;">
                <svg viewBox="0 0 780 280" style="width: 100%; max-width: 780px; height: auto;">
                    <!-- WYKRES A: Kc(T) -->
                    <text x="195" y="22" fill="#f8fafc" font-size="12.5" font-weight="bold" text-anchor="middle">a) Zależność stałej równowagi K<tspan dy="3" font-size="8">c</tspan><tspan dy="-3"> od temperatury T</tspan></text>
                    <line x1="50" y1="230" x2="50" y2="35" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <line x1="50" y1="230" x2="365" y2="230" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <text x="38" y="42" fill="#cbd5e1" font-size="12" font-weight="bold" text-anchor="end">K<tspan dy="3" font-size="8">c</tspan></text>
                    <text x="205" y="260" fill="#cbd5e1" font-size="12" text-anchor="middle">Temperatura T [K]</text>

                    <!-- Endo i Egzo -->
                    <path d="M 65 210 Q 190 190, 325 48" fill="none" stroke="#38bdf8" stroke-width="3.2"/>
                    <text x="195" y="72" fill="#38bdf8" font-size="11.5" font-weight="bold" text-anchor="middle">Reakcja endotermiczna</text>
                    <text x="195" y="88" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">(&Delta;H &gt; 0: T&uarr; &rArr; K<tspan dy="3" font-size="8">c</tspan><tspan dy="-3">&uarr;)</tspan></text>

                    <path d="M 65 50 Q 185 190, 335 212" fill="none" stroke="#f87171" stroke-width="3.2"/>
                    <text x="245" y="180" fill="#f87171" font-size="11.5" font-weight="bold" text-anchor="middle">Reakcja egzotermiczna</text>
                    <text x="245" y="196" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">(&Delta;H &lt; 0: T&uarr; &rArr; K<tspan dy="3" font-size="8">c</tspan><tspan dy="-3">&darr;)</tspan></text>

                    <!-- WYKRES B: ZABURZENIE RÓWNOWAGI N2 + 3H2 <-> 2NH3 -->
                    <text x="585" y="22" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">b) Zaburzenie równowagi N<tspan dy="3" font-size="8">2</tspan><tspan dy="-3"> + 3H</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3"> &#8652; 2NH</tspan><tspan dy="3" font-size="8">3</tspan><tspan dy="-3"> (dodanie N</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3"> w t</tspan><tspan dy="3" font-size="8">1</tspan><tspan dy="-3">)</tspan></text>
                    <line x1="435" y1="230" x2="435" y2="35" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <line x1="435" y1="230" x2="755" y2="230" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-axis)"/>
                    <text x="425" y="42" fill="#cbd5e1" font-size="12" font-weight="bold" text-anchor="end">C</text>

                    <!-- Linie czasu t1 i t2 -->
                    <line x1="515" y1="38" x2="515" y2="230" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>
                    <line x1="620" y1="38" x2="620" y2="230" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>
                    <text x="515" y="246" fill="#cbd5e1" font-size="10.5" font-weight="bold" text-anchor="middle">t<tspan dy="3" font-size="8">1</tspan><tspan dy="-3"> (dodano N</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3">)</tspan></text>
                    <text x="655" y="246" fill="#cbd5e1" font-size="10.5" font-weight="bold" text-anchor="middle">t<tspan dy="3" font-size="8">2</tspan><tspan dy="-3"> (nowa równ.)</tspan></text>
                    <text x="585" y="266" fill="#cbd5e1" font-size="11.5" text-anchor="middle">Czas t [s]</text>

                    <!-- Krzywa [H2] -->
                    <path d="M 435 65 L 515 65 Q 555 102, 620 102 L 735 102" fill="none" stroke="#38bdf8" stroke-width="2.8"/>
                    <text x="470" y="57" fill="#38bdf8" font-size="11" font-weight="bold">[H<tspan dy="3" font-size="8">2</tspan><tspan dy="-3">]</tspan></text>
                    <text x="685" y="94" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">[H<tspan dy="3" font-size="8">2</tspan><tspan dy="-3">]</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3"> &lt; [H</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3">]</tspan><tspan dy="3" font-size="8">1</tspan></text>

                    <!-- Krzywa [N2] z pionowym skokiem w t1 -->
                    <path d="M 435 145 L 515 145 L 515 80 Q 555 118, 620 118 L 735 118" fill="none" stroke="#f87171" stroke-width="2.8"/>
                    <text x="470" y="137" fill="#f87171" font-size="11" font-weight="bold">[N<tspan dy="3" font-size="8">2</tspan><tspan dy="-3">]</tspan></text>
                    <text x="685" y="133" fill="#f87171" font-size="10.5" font-weight="bold" text-anchor="middle">[N<tspan dy="3" font-size="8">2</tspan><tspan dy="-3">]</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3"> &gt; [N</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3">]</tspan><tspan dy="3" font-size="8">1</tspan></text>

                    <!-- Krzywa [NH3] -->
                    <path d="M 435 198 L 515 198 Q 555 168, 620 168 L 735 168" fill="none" stroke="#34d399" stroke-width="2.8"/>
                    <text x="470" y="190" fill="#34d399" font-size="11" font-weight="bold">[NH<tspan dy="3" font-size="8">3</tspan><tspan dy="-3">]</tspan></text>
                    <text x="685" y="184" fill="#34d399" font-size="10.5" font-weight="bold" text-anchor="middle">[NH<tspan dy="3" font-size="8">3</tspan><tspan dy="-3">]</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3"> &gt; [NH</tspan><tspan dy="3" font-size="8">3</tspan><tspan dy="-3">]</tspan><tspan dy="3" font-size="8">1</tspan></text>
                </svg>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 6px;">
                    <strong>Rys. 7.</strong> Wykresy równowagowe: a) zmiana wartości <i>K<sub>c</sub></i> z temperaturą jako kryterium rozpoznawania znaku &Delta;<i>H</i>; b) odpowiedź układu w stanie równowagi na nagłe wprowadzenie porcji azotu w chwili <i>t</i><sub>1</sub> (pionowy skok [N<sub>2</sub>], a następnie częściowe zużycie N<sub>2</sub> i H<sub>2</sub> na wytworzenie dodatkowej ilości NH<sub>3</sub>).
                </div>
            </div>

            <h4>B. Wzorcowe zadania maturalne ze statyki chemicznej (Metoda Tabelki Bilansowej: Początkowe – Zmiana – Równowagowe)</h4>

            <div class="chem-obs">
                📝 <strong>Przykład 6 (Obliczanie stałej równowagi <i>K<sub>c</sub></i> oraz wydajności reakcji na podstawie składu równowagowego):</strong><br>
                <em>Do zamkniętego reaktora o pojemności <i>V</i> = 2,0 dm<sup>3</sup> wprowadzono 4,0 mole tlenku siarki(IV) (SO<sub>2</sub>) oraz 4,0 mole tlenu (O<sub>2</sub>). Po ogrzaniu układu do stałej temperatury <i>T</i> ustalił się stan równowagi reakcji 2 SO<sub>2(g)</sub> + O<sub>2(g)</sub> &#8652; 2 SO<sub>3(g)</sub>, w którym w reaktorze znajdowały się 3,0 mole tlenku siarki(VI) (SO<sub>3</sub>). Oblicz stężeniową stałą równowagi <i>K<sub>c</sub></i> tej reakcji oraz wydajność przereagowania tlenku siarki(IV).</em><br><br>
                • <strong>Krok 1 (Przeliczenie liczby moli na stężenia molowe <i>C</i> = <i>n</i>/<i>V</i>):</strong> <em>Uwaga!</em> Jednym z najczęstszych błędów maturalnych jest podstawianie do tabeli i wzoru na <i>K<sub>c</sub></i> liczby moli zamiast stężeń molowych, gdy <i>V</i> &ne; 1 dm<sup>3</sup>! Dzielimy wszystkie liczby moli przez <i>V</i> = 2,0 dm<sup>3</sup>:<br>
                &ndash; Stężenia początkowe: <i>C</i><sub>0(SO<sub>2</sub>)</sub> = 4,0 mol / 2,0 dm<sup>3</sup> = 2,0 mol &middot; dm<sup>&minus;3</sup>; &nbsp;<i>C</i><sub>0(O<sub>2</sub>)</sub> = 4,0 mol / 2,0 dm<sup>3</sup> = 2,0 mol &middot; dm<sup>&minus;3</sup>; &nbsp;<i>C</i><sub>0(SO<sub>3</sub>)</sub> = 0 mol &middot; dm<sup>&minus;3</sup>.<br>
                &ndash; Stężenie równowagowe produktu: [SO<sub>3</sub>] = 3,0 mol / 2,0 dm<sup>3</sup> = 1,5 mol &middot; dm<sup>&minus;3</sup>.<br>
                • <strong>Krok 2 (Tabelka bilansowa stężeń [mol &middot; dm<sup>&minus;3</sup>]):</strong> Stosunek stechiometryczny w równaniu 2SO<sub>2</sub> + O<sub>2</sub> &#8652; 2SO<sub>3</sub> wynosi 2 : 1 : 2. Skoro przybyło +2<i>x</i> = 1,5 mol &middot; dm<sup>&minus;3</sup> produktu SO<sub>3</sub> (czyli <i>x</i> = 0,75 mol &middot; dm<sup>&minus;3</sup>), to w tym samym czasie ubyło 2<i>x</i> = 1,5 mol &middot; dm<sup>&minus;3</sup> substratu SO<sub>2</sub> oraz ubyło <i>x</i> = 0,75 mol &middot; dm<sup>&minus;3</sup> tlenu O<sub>2</sub>:

                <div class="table-responsive" style="margin: 10px 0;">
                    <table class="note-table">
                        <thead>
                            <tr>
                                <th>Etap bilansu stężeń [mol &middot; dm<sup>&minus;3</sup>]</th>
                                <th>2 SO<sub>2(g)</sub></th>
                                <th>+ 1 O<sub>2(g)</sub></th>
                                <th>&#8652; 2 SO<sub>3(g)</sub></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Stężenie początkowe (<i>C</i><sub>0</sub>)</strong></td>
                                <td>2,0</td>
                                <td>2,0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td><strong>Zmiana stężenia (&Delta;<i>C</i> – ze stechiometrii 2 : 1 : 2)</strong></td>
                                <td>&minus;2<i>x</i> = &minus;1,5</td>
                                <td>&minus;<i>x</i> = &minus;0,75</td>
                                <td>+2<i>x</i> = +1,5</td>
                            </tr>
                            <tr>
                                <td><strong>Stężenie równowagowe ([<i>C<sub>r</sub></i>] = <i>C</i><sub>0</sub> + &Delta;<i>C</i>)</strong></td>
                                <td>2,0 &minus; 1,5 = <strong>0,50</strong></td>
                                <td>2,0 &minus; 0,75 = <strong>1,25</strong></td>
                                <td>0 + 1,5 = <strong>1,50</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                • <strong>Krok 3 (Obliczenie stałej równowagi <i>K<sub>c</sub></i> oraz wydajności <i>W</i>):</strong><br>
                <i>K<sub>c</sub></i> = [SO<sub>3</sub>]<sup>2</sup> / ([SO<sub>2</sub>]<sup>2</sup> &middot; [O<sub>2</sub>]) = (1,50)<sup>2</sup> / ((0,50)<sup>2</sup> &middot; 1,25) = 2,25 / (0,25 &middot; 1,25) = <strong>7,2</strong><br>
                <i>W</i> = (|&Delta;<i>C</i><sub>SO<sub>2</sub></sub>| / <i>C</i><sub>0(SO<sub>2</sub>)</sub>) &middot; 100% = (1,5 mol &middot; dm<sup>&minus;3</sup> / 2,0 mol &middot; dm<sup>&minus;3</sup>) &middot; 100% = <strong>75%</strong>.
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 7 (Obliczanie stężeń równowagowych przy znanej wartości <i>K<sub>c</sub></i> z rozwiązaniem równania kwadratowego):</strong><br>
                <em>W temperaturze 400&deg;C stężeniowa stała równowagi reakcji CO<sub>(g)</sub> + H<sub>2</sub>O<sub>(g)</sub> &#8652; CO<sub>2(g)</sub> + H<sub>2(g)</sub> wynosi <i>K<sub>c</sub></i> = 9,0. W zamkniętym naczyniu o pojemności 1,0 dm<sup>3</sup> zmieszano 1,0 mol CO oraz 1,0 mol pary wodnej H<sub>2</sub>O<sub>(g)</sub>. Oblicz stężenia molowe wszystkich reagentów po ustaleniu się stanu równowagi.</em><br><br>
                • <strong>Krok 1 (Ustalenie stężeń równowagowych przez niewiadomą <i>x</i>):</strong> Ponieważ <i>V</i> = 1,0 dm<sup>3</sup>, stężenia początkowe wynoszą <i>C</i><sub>0(CO)</sub> = 1,0 mol &middot; dm<sup>&minus;3</sup> i <i>C</i><sub>0(H<sub>2</sub>O)</sub> = 1,0 mol &middot; dm<sup>&minus;3</sup>. Oznaczmy przez <i>x</i> [mol &middot; dm<sup>&minus;3</sup>] stężenie przereagowanego CO. Ze stosunku stechiometrycznego 1 : 1 : 1 : 1 w stanie równowagi mamy: [CO] = 1,0 &minus; <i>x</i>, [H<sub>2</sub>O] = 1,0 &minus; <i>x</i>, [CO<sub>2</sub>] = <i>x</i> oraz [H<sub>2</sub>] = <i>x</i> (przy założeniu fizycznym 0 &lt; <i>x</i> &lt; 1,0).<br>
                • <strong>Krok 2 (Podstawienie do wzoru na <i>K<sub>c</sub></i> i obustronne spierwiastkowanie):</strong><br>
                <i>K<sub>c</sub></i> = ([CO<sub>2</sub>] &middot; [H<sub>2</sub>]) / ([CO] &middot; [H<sub>2</sub>O]) &nbsp;&rArr;&nbsp; 9,0 = (<i>x</i> &middot; <i>x</i>) / ((1,0 &minus; <i>x</i>) &middot; (1,0 &minus; <i>x</i>)) = <i>x</i><sup>2</sup> / (1,0 &minus; <i>x</i>)<sup>2</sup><br>
                Po obustronnym spierwiastkowaniu: 3,0 = <i>x</i> / (1,0 &minus; <i>x</i>) &nbsp;&rArr;&nbsp; <i>x</i> = 3,0 &minus; 3,0<i>x</i> &nbsp;&rArr;&nbsp; 4,0<i>x</i> = 3,0 &nbsp;&rArr;&nbsp; <strong><i>x</i> = 0,75 mol &middot; dm<sup>&minus;3</sup></strong>.<br>
                • <strong>Odpowiedź:</strong> Stężenia równowagowe wynoszą: <strong>[CO<sub>2</sub>] = [H<sub>2</sub>] = 0,75 mol &middot; dm<sup>&minus;3</sup></strong> oraz <strong>[CO] = [H<sub>2</sub>O] = 1,0 &minus; 0,75 = 0,25 mol &middot; dm<sup>&minus;3</sup></strong>. (<em>Uwaga:</em> Gdyby stężenia początkowe substratów były różne, np. 1,0 i 2,0 mol &middot; dm<sup>&minus;3</sup>, równanie sprowadzamy do postaci ogólnej <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0, obliczamy wyróżnik &Delta; = <i>b</i><sup>2</sup> &minus; 4<i>ac</i> i odrzucamy ten pierwiastek, który daje ujemne stężenie równowagowe).
            </div>
        </div>

        <!-- SEKCJA 7 -->
        <div class="note-section">
            <h3>7. Projektowanie i Opis Doświadczeń Chemicznych (Pewniaki Maturalne z Działu 4)</h3>

            <h4>Doświadczenie 1: Badanie wpływu temperatury i ciśnienia na stan równowagi układu 2 NO<sub>2(g)</sub> &#8652; N<sub>2</sub>O<sub>4(g)</sub> (&Delta;<i>H</i>&deg; = &minus;57,2 kJ)</h4>
            <ul class="note-list">
                <li><strong>Podstawa teoretyczna:</strong> Tlenek azotu(IV) (NO<sub>2</sub>) jest gazem o intensywnej <strong>czerwonobrunatnej barwie</strong>, natomiast jego dimer – tetratlenek diazotu (N<sub>2</sub>O<sub>4</sub>) – jest <strong>gazem bezbarwnym</strong>. Reakcja dimeryzacji 2 NO<sub>2(g)</sub> <em>(czerwonobrunatny)</em> &#8652; N<sub>2</sub>O<sub>4(g)</sub> <em>(bezbarwny)</em> jest procesem <strong>egzotermicznym (&Delta;<i>H</i>&deg; &lt; 0)</strong> i przebiega ze <strong>zmniejszeniem liczby moli gazów</strong> (z 2 moli gazu powstaje 1 mol gazu).</li>
                <li><strong>Przebieg (część A – temperatura):</strong> Trzy identyczne, szczelnie zatkane probówki wypełnione mieszaniną równowagową NO<sub>2</sub>/N<sub>2</sub>O<sub>4</sub> umieszczamy odpowiednio: probówkę I w zlewce z wodą z lodem (0&deg;C), probówkę II pozostawiamy w temperaturze pokojowej (20&deg;C – próba kontrolna), a probówkę III zanurzamy w zlewce z gorącą wodą (80&deg;C).</li>
                <li><strong>Obserwacje:</strong> W probówce I (w lodzie) czerwonobrunatna barwa gazu <strong>blednie (rozjaśnia się)</strong>. W probówce III (w gorącej wodzie) barwa gazu staje się <strong>znacznie bardziej intensywna (ciemnobrunatna)</strong>.</li>
                <li><strong>Wnioski:</strong> Obniżenie temperatury przesuwa równowagę reakcji egzotermicznej w prawo (w stronę powstawania bezbarwnego N<sub>2</sub>O<sub>4</sub>), natomiast podwyższenie temperatury przesuwa równowagę w lewo (w kierunku rozkładu N<sub>2</sub>O<sub>4</sub> do czerwonobrunatnego NO<sub>2</sub>), zgodnie z regułą przekory.</li>
                <li><strong>Przebieg i obserwacje (część B – ciśnienie w strzykawce):</strong> Gdy mieszaninę NO<sub>2</sub>/N<sub>2</sub>O<sub>4</sub> zamkniętą w przezroczystej strzykawce gwałtownie sprężymy (wciśniemy tłok, zmniejszając objętość 2-krotnie), w pierwszym ułamku sekundy barwa gazu <strong>chwilowo ciemnieje</strong> (ponieważ gwałtownie wzrosło stężenie wszystkich gazów, w tym NO<sub>2</sub> w mniejszej objętości!), a następnie <strong>po chwili blednie</strong>, gdyż podwyższenie ciśnienia przesuwa równowagę w stronę mniejszej objętości gazów, czyli w prawo (ku bezbarwnemu N<sub>2</sub>O<sub>4</sub>).</li>
            </ul>

            <h4>Doświadczenie 2: Badanie wpływu stężenia reagentów na stan równowagi reakcji rodanków z jonami żelaza(III)</h4>
            <ul class="note-list">
                <li><strong>Równanie reakcji i barwy:</strong> Fe<sup>3+</sup><sub>(aq)</sub> <em>(żółty)</em> + SCN<sup>&minus;</sup><sub>(aq)</sub> <em>(bezbarwny)</em> &#8652; [Fe(SCN)]<sup>2+</sup><sub>(aq)</sub> <em>(krwistoczerwony)</em> (lub zapis sumaryczny: FeCl<sub>3</sub> + 3 KSCN &#8652; Fe(SCN)<sub>3</sub> + 3 KCl).</li>
                <li><strong>Przebieg:</strong> Jasnoczerwony, rozcieńczony roztwór zawierający mieszaninę równowagową rozlewamy do 4 probówek: probówka I stanowi próbę porównawczą, do probówki II dodajemy kilka kropel stężonego roztworu FeCl<sub>3</sub>, do probówki III – kilka kropel stężonego KSCN, a do probówki IV – stały chlorek potasu KCl.</li>
                <li><strong>Obserwacje i wnioski:</strong> W probówkach II i III roztwór przyjmuje <strong>znacznie intensywniejsze, ciemnoczerwone (krwistoczerwone) zabarwienie</strong>, ponieważ zwiększenie stężenia któregokolwiek z substratów (jonów Fe<sup>3+</sup> lub SCN<sup>&minus;</sup>) przesuwa równowagę w prawo (w stronę tworzenia krwistoczerwonych jonów kompleksowych). W probówce IV (przy badaniu w zapisie jonowym Fe<sup>3+</sup> + SCN<sup>&minus;</sup> &#8652; [Fe(SCN)]<sup>2+</sup>) dodanie KCl nie wprowadza jonów uczestniczących bezpośrednio w równowadze kompleksowania (choć w stężonych roztworach nadmiar Cl<sup>&minus;</sup> może wiązać Fe<sup>3+</sup> w chlorkowe kompleksy i rozjaśniać roztwór).</li>
            </ul>

            <h4>Doświadczenie 3: Badanie wpływu stężenia kwasu, temperatury, rozdrobnienia i katalizatora na szybkość reakcji</h4>
            <div class="note-alert">
                💡 <strong>Zasada jednej zmiennej (żelazna reguła projektowania doświadczeń na maturze):</strong> Badając wpływ wybranego czynnika na szybkość reakcji (np. wpływu stężenia kwasu HCl na szybkość reakcji z cynkiem: Zn + 2HCl &rarr; ZnCl<sub>2</sub> + H<sub>2</sub>&uarr;), w obu porównywanych probówkach <strong>wszystkie pozostałe parametry muszą być identyczne</strong>! Należy więc użyć dokładnie takiej samej masy cynku o tym samym stopniu rozdrobnienia (np. po jednej granulce Zn w obu probówkach) i prowadzić reakcję w tej samej temperaturze, różnicując wyłącznie stężenie kwasu solnego (np. w probówce I: 5 cm<sup>3</sup> HCl o stężeniu 0,5 mol &middot; dm<sup>&minus;3</sup>, a w probówce II: 5 cm<sup>3</sup> HCl o stężeniu 2,0 mol &middot; dm<sup>&minus;3</sup>). <strong>Obserwacja:</strong> W probówce II pęcherzyki bezbarwnego gazu wydzielają się znacznie intensywniej, a granulka cynku roztwarza się w krótszym czasie.
            </div>
        </div>
    </div>
    `,

    notatkiActive: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">🧠 ACTIVE RECALL: KINETYKA, STATYKA I TERMOCHEMIA</h2>
        <p style="text-align: center; color: #94a3b8; font-size: 13px; margin-bottom: 20px;">
            💡 <em>Klikaj na ciemne pola, aby odkryć ukryte wzory, reguły i wartości, oraz rozwijaj pytania, by sprawdzić swoją wiedzę!</em>
        </p>

        <!-- SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Układy Termodynamiczne i Efekty Energetyczne (&Delta;<i>H</i>)</h3>
            <p>Układ, który wymienia z otoczeniem wyłącznie energię, ale nie wymienia masy (materii), to układ <span class="recall-blank" onclick="toggleRecall(this)">zamknięty</span>.</p>
            <p>Pierwsza zasada termodynamiki wyraża się wzorem: &Delta;<i>U</i> = <span class="recall-blank" onclick="toggleRecall(this)"><i>Q</i> + <i>W</i> (gdzie <i>W</i> = &minus;<i>p</i> &middot; &Delta;<i>V</i>)</span>.</p>
            <p>W reakcji <strong>egzotermicznej</strong> układ oddaje ciepło do otoczenia, entalpia produktów jest mniejsza od entalpii substratów, znak &Delta;<i>H</i> jest <span class="recall-blank" onclick="toggleRecall(this)">ujemny (&Delta;<i>H</i> &lt; 0)</span>, a temperatura otoczenia (probówki) <span class="recall-blank" onclick="toggleRecall(this)">wzrasta</span>.</p>
            <p>Dla reakcji odwracalnej związek między entalpią reakcji (&Delta;<i>H</i>) a energiami aktywacji reakcji wprost i odwrotnej ma postać: &Delta;<i>H</i> = <span class="recall-blank" onclick="toggleRecall(this)"><i>E</i><sub>a(wprost)</sub> &minus; <i>E</i><sub>a(odwr)</sub></span>.</p>

            <details class="recall-details">
                <summary><span>Czy fakt, że reakcja wymaga początkowego ogrzania (zainicjowania płomieniem), oznacza, że jest ona endoenergetyczna?</span></summary>
                <p><strong>Nie!</strong> Każda reakcja (nawet silnie egzotermiczne spalanie węgla czy metanu) wymaga pokonania początkowej bariery <strong>energii aktywacji (<i>E<sub>a</sub></i> &gt; 0)</strong>. O tym, czy reakcja jest egzo- czy endoenergetyczna, decyduje wyłącznie bilans netto energii (&Delta;<i>H</i> = <i>H</i><sub>produktów</sub> &minus; <i>H</i><sub>substratów</sub>).</p>
            </details>
        </div>

        <!-- SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Termochemia i Prawo Hessa</h3>
            <p>Warunki standardowe w termochemii to ciśnienie <i>p</i>&deg; = <span class="recall-blank" onclick="toggleRecall(this)">10<sup>5</sup> Pa (1000 hPa = 1 bar)</span> oraz temperatura <i>T</i> = <span class="recall-blank" onclick="toggleRecall(this)">298,15 K (25&deg;C)</span>.</p>
            <p>Standardowa entalpia tworzenia (&Delta;<sub>tw</sub><i>H</i>&deg;) każdego pierwiastka w jego podstawowym stanie skupienia i najtrwalszej odmianie alotropowej (np. C<sub>(grafit)</sub>, O<sub>2(g)</sub>, Br<sub>2(c)</sub>) wynosi <span class="recall-blank" onclick="toggleRecall(this)">0 kJ &middot; mol<sup>&minus;1</sup></span>.</p>

            <div class="chem-eq">
                1. Z entalpii tworzenia: &nbsp; &Delta;<i>H</i>&deg;<sub>reakcji</sub> = <span class="recall-blank" onclick="toggleRecall(this)">&Sigma; <i>n<sub>i</sub></i>&Delta;<sub>tw</sub><i>H</i>&deg;(produktów) &minus; &Sigma; <i>n<sub>j</sub></i>&Delta;<sub>tw</sub><i>H</i>&deg;(substratów)</span><br>
                2. Z entalpii spalania: &nbsp; &Delta;<i>H</i>&deg;<sub>reakcji</sub> = <span class="recall-blank" onclick="toggleRecall(this)">&Sigma; <i>n<sub>j</sub></i>&Delta;<sub>sp</sub><i>H</i>&deg;(substratów) &minus; &Sigma; <i>n<sub>i</sub></i>&Delta;<sub>sp</sub><i>H</i>&deg;(produktów)</span><br>
                3. Z energii wiązań: &nbsp; &Delta;<i>H</i>&deg;<sub>reakcji</sub> &approx; <span class="recall-blank" onclick="toggleRecall(this)">&Sigma; <i>E</i><sub>wiąz</sub>(zrywanych w substratach) &minus; &Sigma; <i>E</i><sub>wiąz</sub>(tworzonych w produktach)</span>
            </div>

            <details class="recall-details">
                <summary><span>Jak brzmi prawo Lavoisiera–Laplace’a oraz prawo Hessa?</span></summary>
                <p>
                    • <strong>Prawo Lavoisiera–Laplace’a:</strong> Efekt cieplny reakcji rozkładu danego związku jest co do wartości bezwzględnej równy efektowi cieplnemu jego syntezy, lecz ma przeciwny znak (&Delta;<i>H</i><sub>rozkładu</sub> = &minus;&Delta;<i>H</i><sub>tworzenia</sub>).<br>
                    • <strong>Prawo Hessa:</strong> Efekt cieplny reakcji (pod stałym ciśnieniem lub w stałej objętości) nie zależy od drogi przemiany (liczby etapów pośrednich), a zależy wyłącznie od stanu początkowego (substratów) i końcowego (produktów) układu.
                </p>
            </details>
        </div>

        <!-- SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Kinetyka Chemiczna, Równanie Kinetyczne i Kataliza</h3>
            <p>Dla reakcji N<sub>2</sub> + 3 H<sub>2</sub> &rarr; 2 NH<sub>3</sub> zależność między szybkością zaniku azotu (<i>v</i><sub>N<sub>2</sub></sub>), szybkością zaniku wodoru (<i>v</i><sub>H<sub>2</sub></sub>) i szybkością tworzenia amoniaku (<i>v</i><sub>NH<sub>3</sub></sub>) ma postać: <span class="recall-blank" onclick="toggleRecall(this)"><i>v</i><sub>N<sub>2</sub></sub> = &frac13; <i>v</i><sub>H<sub>2</sub></sub> = &frac12; <i>v</i><sub>NH<sub>3</sub></sub></span>.</p>
            <p>Stała szybkości reakcji (<i>k</i>) zależy od 3 czynników: <span class="recall-blank" onclick="toggleRecall(this)">rodzaju reagentów, temperatury (<i>T</i>) oraz obecności katalizatora</span>, natomiast NIE zależy od <span class="recall-blank" onclick="toggleRecall(this)">stężeń substratów, ciśnienia i czasu</span>.</p>
            <p>Wzór na regułę van’t Hoffa: <i>v</i><sub>2</sub> = <span class="recall-blank" onclick="toggleRecall(this)"><i>v</i><sub>1</sub> &middot; &gamma;<sup>(<i>T</i><sub>2</sub> &minus; <i>T</i><sub>1</sub>) / 10</sup></span>.</p>

            <details class="recall-details">
                <summary><span>Podaj jednostki stałej szybkości <i>k</i> dla reakcji 0, I, II oraz III rzędu.</span></summary>
                <p>
                    Z ogólnego wzoru [<i>k</i>] = mol<sup>1&minus;<i>n</i></sup> &middot; dm<sup>3(<i>n</i>&minus;1)</sup> &middot; s<sup>&minus;1</sup>:<br>
                    • <strong>Rząd 0 (<i>n</i> = 0):</strong> mol &middot; dm<sup>&minus;3</sup> &middot; s<sup>&minus;1</sup><br>
                    • <strong>Rząd I (<i>n</i> = 1):</strong> s<sup>&minus;1</sup><br>
                    • <strong>Rząd II (<i>n</i> = 2):</strong> dm<sup>3</sup> &middot; mol<sup>&minus;1</sup> &middot; s<sup>&minus;1</sup><br>
                    • <strong>Rząd III (<i>n</i> = 3):</strong> dm<sup>6</sup> &middot; mol<sup>&minus;2</sup> &middot; s<sup>&minus;1</sup>
                </p>
            </details>

            <details class="recall-details">
                <summary><span>Jaki jon pełni rolę autokatalizatora podczas utleniania kwasu szczawiowego (H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>) roztworem KMnO<sub>4</sub> w środowisku H<sub>2</sub>SO<sub>4</sub>?</span></summary>
                <p>Rolę autokatalizatora pełnią powstające w trakcie reakcji kationy manganu(II) – <strong>Mn<sup>2+</sup></strong>. Dlatego pierwsze krople KMnO<sub>4</sub> odbarwiają się powoli, a kolejne (gdy powstały już jony Mn<sup>2+</sup>) odbarwiają się błyskawicznie.</p>
            </details>
        </div>

        <!-- SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Statyka Chemiczna, Stała Równowagi (<i>K<sub>c</sub></i>) i Reguła Przekory</h3>
            <p>Jedynym czynnikiem zewnętrznym, który zmienia wartość liczbową stałej równowagi <i>K<sub>c</sub></i> danej reakcji, jest <span class="recall-blank" onclick="toggleRecall(this)">temperatura (<i>T</i>)</span>.</p>
            <p>Dla reakcji heterogenicznej C<sub>(s)</sub> + CO<sub>2(g)</sub> &#8652; 2 CO<sub>(g)</sub> poprawne wyrażenie na stężeniową stałą równowagi ma postać: <i>K<sub>c</sub></i> = <span class="recall-blank" onclick="toggleRecall(this)">[CO]<sup>2</sup> / [CO<sub>2</sub>] (pomijamy stały węgiel!)</span>.</p>
            <p>Dla reakcji egzotermicznej (&Delta;<i>H</i> &lt; 0) podwyższenie temperatury przesuwa stan równowagi w <span class="recall-blank" onclick="toggleRecall(this)">lewo (w stronę substratów)</span> i powoduje, że wartość stałej równowagi <i>K<sub>c</sub></i> <span class="recall-blank" onclick="toggleRecall(this)">maleje</span>.</p>

            <details class="recall-details">
                <summary><span>Co zaobserwujemy w pierwszym ułamku sekundy, a co po chwili, gdy gwałtownie wciśniemy tłok strzykawki z mieszaniną 2 NO<sub>2(g)</sub> (brunatny) &#8652; N<sub>2</sub>O<sub>4(g)</sub> (bezbarwny)?</span></summary>
                <p>
                    1. <strong>W pierwszym ułamku sekundy:</strong> Barwa gazu <strong>chwilowo ciemnieje</strong>, ponieważ zmniejszenie objętości gwałtownie zwiększyło stężenie molowe wszystkich gazów (w tym brunatnego NO<sub>2</sub>).<br>
                    2. <strong>Po chwili:</strong> Barwa gazu <strong>blednie (rozjaśnia się)</strong>, ponieważ wzrost ciśnienia przesuwa równowagę w stronę mniejszej liczby moli gazów (z 2 moli NO<sub>2</sub> do 1 mola bezbarwnego N<sub>2</sub>O<sub>4</sub>).
                </p>
            </details>
        </div>
    </div>
    `,

    zadania: "<h3>Zadania</h3><br>Miejsce na zadania obliczeniowe z termochemii (prawo Hessa), kinetyki (wyznaczanie rzędu reakcji i reguła van't Hoffa) oraz statyki chemicznej (tabelki bilansowe stężeń równowagowych Kc)...",

    fiszki: [
        {
            front: "Czym różni się układ otwarty, zamknięty i izolowany w termodynamice chemicznej?",
            back: "• Układ otwarty: wymienia z otoczeniem zarówno masę, jak i energię.<br>• Układ zamknięty: wymienia z otoczeniem wyłącznie energię (nie wymienia masy).<br>• Układ izolowany: nie wymienia z otoczeniem ani masy, ani energii (&Delta;U = 0)."
        },
        {
            front: "Dlaczego reakcja odwracalna z udziałem gazów osiąga stan równowagi wyłącznie w układzie zamkniętym?",
            back: "Ponieważ w układzie otwartym lotny produkt opuszcza środowisko reakcji, co uniemożliwia bieg reakcji odwrotnej i sprawia, że przemiana biegnie w jedną stronę aż do wyczerpania substratów."
        },
        {
            front: "Zapisz wzór wyrażający I zasadę termodynamiki oraz pracę objętościową gazu pod stałym ciśnieniem.",
            back: "&Delta;U = Q + W, gdzie dla pracy objętościowej przeciw ciśnieniu zewnętrznemu: W = &minus;p &middot; &Delta;V."
        },
        {
            front: "Czym jest zmiana entalpii (&Delta;H) i jak się ją definiuje?",
            back: "Zmiana entalpii (&Delta;H = H<sub>produktów</sub> &minus; H<sub>substratów</sub> = Q<sub>p</sub>) to ciepło wymienione między układem a otoczeniem podczas przemiany zachodzącej pod stałym ciśnieniem (p = const)."
        },
        {
            front: "Porównaj reakcję egzotermiczną i endotermiczną pod kątem znaku &Delta;H, relacji entalpii reagentów i zmiany temperatury probówki.",
            back: "• Egzotermiczna: &Delta;H &lt; 0, H<sub>produktów</sub> &lt; H<sub>substratów</sub>, układ oddaje ciepło do otoczenia (probówka się nagrzewa).<br>• Endotermiczna: &Delta;H &gt; 0, H<sub>produktów</sub> &gt; H<sub>substratów</sub>, układ pobiera ciepło z otoczenia (probówka się oziębia)."
        },
        {
            front: "Podaj po 3 klasyczne przykłady procesów egzotermicznych (&Delta;H &lt; 0) oraz endotermicznych (&Delta;H &gt; 0).",
            back: "• Egzotermiczne: wszystkie reakcje spalania, reakcje metali z kwasami, zobojętnianie (H<sup>+</sup> + OH<sup>&minus;</sup> &rarr; H<sub>2</sub>O), rozpuszczanie stałego NaOH/KOH lub stęż. H<sub>2</sub>SO<sub>4</sub> w wodzie.<br>• Endotermiczne: rozkład termiczny (np. CaCO<sub>3</sub>), synteza N<sub>2</sub> + O<sub>2</sub> &#8652; 2NO, rozpuszczanie NH<sub>4</sub>NO<sub>3</sub> lub NH<sub>4</sub>Cl w wodzie."
        },
        {
            front: "Czym jest energia aktywacji (E<sub>a</sub>) i kompleks aktywny?",
            back: "Energia aktywacji (E<sub>a</sub> &gt; 0) to minimalna bariera energetyczna, jaką muszą pokonać zderzające się cząsteczki substratów, aby utworzyć nietrwały stan przejściowy o maksymalnej energii – tzw. kompleks aktywny [AB]<sup>*</sup>."
        },
        {
            front: "Jaka zależność łączy entalpię reakcji odwracalnej (&Delta;H) z energiami aktywacji reakcji wprost (E<sub>a,wprost</sub>) i odwrotnej (E<sub>a,odwr</sub>)?",
            back: "&Delta;H = E<sub>a(wprost)</sub> &minus; E<sub>a(odwr)</sub>.<br>Dla reakcji egzotermicznej (&Delta;H &lt; 0): E<sub>a(wprost)</sub> &lt; E<sub>a(odwr)</sub>.<br>Dla reakcji endotermicznej (&Delta;H &gt; 0): E<sub>a(wprost)</sub> &gt; E<sub>a(odwr)</sub>."
        },
        {
            front: "Podaj parametry warunków standardowych stosowanych w termochemii (i porównaj je z warunkami normalnymi dla gazów).",
            back: "• Warunki standardowe (termochemia): T = 298,15 K (25&deg;C), p&deg; = 10<sup>5</sup> Pa (1000 hPa = 1 bar).<br>• Warunki normalne (objętość molowa gazów 22,4 dm<sup>3</sup>/mol): T = 273,15 K (0&deg;C), p = 1013,25 hPa."
        },
        {
            front: "Dlaczego w równaniach termochemicznych obowiązkowo trzeba podawać stany skupienia reagentów (s, c, g, aq)?",
            back: "Ponieważ przemianom fazowym towarzyszy wymiana ciepła (np. podczas skraplania 1 mola pary wodnej H<sub>2</sub>O<sub>(g)</sub> &rarr; H<sub>2</sub>O<sub>(c)</sub> wydziela się dodatkowe 44 kJ energii, przez co &Delta;H spalania H<sub>2</sub> do wody ciekłej wynosi &minus;285,8 kJ/mol, a do pary wodnej &minus;241,8 kJ/mol)."
        },
        {
            front: "Podaj definicję standardowej entalpii tworzenia związku chemicznego (&Delta;<sub>tw</sub>H&deg;) oraz jej wartość dla wolnych pierwiastków.",
            back: "To efekt cieplny syntezy 1 mola związku bezpośrednio z pierwiastków w ich najtrwalszych w warunkach standardowych stanach skupienia i odmianach alotropowych. Dla pierwiastków w stanie podstawowym (np. C<sub>(grafit)</sub>, O<sub>2(g)</sub>, Br<sub>2(c)</sub>, I<sub>2(s)</sub>) &Delta;<sub>tw</sub>H&deg; = 0 kJ/mol."
        },
        {
            front: "Podaj definicję standardowej entalpii spalania (&Delta;<sub>sp</sub>H&deg;) oraz produkty całkowitego spalania C, H, S i N.",
            back: "To efekt cieplny całkowitego spalenia 1 mola substancji w czystym tlenie O<sub>2(g)</sub> w warunkach standardowych do najtrwalszych tlenków: C &rarr; CO<sub>2(g)</sub>, H &rarr; H<sub>2</sub>O<sub>(c)</sub> (ciekła!), S &rarr; SO<sub>2(g)</sub>, N &rarr; N<sub>2(g)</sub>."
        },
        {
            front: "Jak brzmi prawo Lavoisiera–Laplace’a?",
            back: "Efekt cieplny reakcji rozkładu danego związku chemicznego jest co do wartości bezwzględnej równy efektowi cieplnemu jego syntezy (tworzenia), lecz ma przeciwny znak: &Delta;H<sub>rozkładu</sub> = &minus;&Delta;H<sub>tworzenia</sub>."
        },
        {
            front: "Jak brzmi prawo Hessa?",
            back: "Ciepło reakcji chemicznej przebiegającej pod stałym ciśnieniem (&Delta;H) lub w stałej objętości (&Delta;U) nie zależy od drogi przemiany (liczby etapów pośrednich), lecz wyłącznie od stanu początkowego (substratów) i końcowego (produktów)."
        },
        {
            front: "Porównaj wzory na obliczanie &Delta;H&deg; reakcji z entalpii tworzenia (&Delta;<sub>tw</sub>H&deg;), z entalpii spalania (&Delta;<sub>sp</sub>H&deg;) oraz z energii wiązań (E<sub>wiąz</sub>).",
            back: "1. Z entalpii tworzenia (Produkty &minus; Substraty): &Delta;H&deg; = &Sigma; n<sub>i</sub>&Delta;<sub>tw</sub>H&deg;(prod.) &minus; &Sigma; n<sub>j</sub>&Delta;<sub>tw</sub>H&deg;(substr.)<br>2. Z entalpii spalania (Substraty &minus; Produkty): &Delta;H&deg; = &Sigma; n<sub>j</sub>&Delta;<sub>sp</sub>H&deg;(substr.) &minus; &Sigma; n<sub>i</sub>&Delta;<sub>sp</sub>H&deg;(prod.)<br>3. Z energii wiązań (Substraty &minus; Produkty): &Delta;H&deg; &approx; &Sigma; E<sub>wiąz</sub>(zrywanych) &minus; &Sigma; E<sub>wiąz</sub>(tworzonych)."
        },
        {
            front: "ZADANIE: Oblicz &Delta;<sub>tw</sub>H&deg;(CH<sub>4(g)</sub>) wiedząc, że entalpie spalania wynoszą: C<sub>(grafit)</sub> = &minus;393,5 kJ/mol, H<sub>2(g)</sub> = &minus;285,8 kJ/mol, CH<sub>4(g)</sub> = &minus;890,3 kJ/mol.",
            back: "Dla reakcji C + 2H<sub>2</sub> &rarr; CH<sub>4</sub> korzystamy ze wzoru dla entalpii spalania (Substraty &minus; Produkty):<br>&Delta;<sub>tw</sub>H&deg; = [&minus;393,5 + 2&middot;(&minus;285,8)] &minus; (&minus;890,3) = &minus;965,1 + 890,3 = <strong>&minus;74,8 kJ/mol</strong>."
        },
        {
            front: "ZADANIE: Oblicz &Delta;H syntezy N<sub>2</sub> + 3H<sub>2</sub> &rarr; 2NH<sub>3</sub> z energii wiązań: E(N&equiv;N) = 945, E(H&mdash;H) = 436, E(N&mdash;H) = 391 kJ/mol. Ile ciepła wydzieli się przy otrzymaniu 85 g NH<sub>3</sub> (M = 17 g/mol)?",
            back: "1. W 2 molach NH<sub>3</sub> jest 6 wiązań N&mdash;H: &Delta;H = [945 + 3&middot;436] &minus; [6&middot;391] = 2253 &minus; 2346 = <strong>&minus;93 kJ</strong> (na 2 mole = 34 g NH<sub>3</sub>).<br>2. Dla 85 g NH<sub>3</sub>: Q = (85 g &middot; 93 kJ) / 34 g = <strong>232,5 kJ</strong> wydzielonego ciepła."
        },
        {
            front: "Podaj definicję, wzór i jednostkę podstawową szybkości reakcji chemicznej (v).",
            back: "Szybkość reakcji to ubytek stężenia molowego substratu (&minus;&Delta;C<sub>S</sub>) lub przyrost stężenia molowego produktu (+&Delta;C<sub>P</sub>) w jednostce czasu (&Delta;t):<br>v = &minus;&Delta;C<sub>S</sub> / &Delta;t = +&Delta;C<sub>P</sub> / &Delta;t &nbsp; [mol &middot; dm<sup>&minus;3</sup> &middot; s<sup>&minus;1</sup>]."
        },
        {
            front: "Dlaczego we wzorze na szybkość reakcji względem substratu (v = &minus;&Delta;C<sub>S</sub> / &Delta;t) stawiamy znak minus?",
            back: "Ponieważ stężenie substratu maleje w czasie (C<sub>2</sub> &lt; C<sub>1</sub>, więc &Delta;C<sub>S</sub> &lt; 0), a szybkość reakcji musi być wielkością dodatnią (v &gt; 0)."
        },
        {
            front: "Zapisz relację między szybkościami zmian stężeń reagentów dla reakcji: N<sub>2(g)</sub> + 3 H<sub>2(g)</sub> &rarr; 2 NH<sub>3(g)</sub>.",
            back: "v<sub>N2</sub> = 1/3 v<sub>H2</sub> = 1/2 v<sub>NH3</sub> (czyli wodór zużywa się 3 razy szybciej niż azot: v<sub>H2</sub> = 3&middot;v<sub>N2</sub>, a amoniak powstaje 2 razy szybciej niż zużywa się azot: v<sub>NH3</sub> = 2&middot;v<sub>N2</sub>)."
        },
        {
            front: "Jakie dwa warunki muszą być spełnione jednocześnie wg teorii zderzeń, aby zderzenie cząsteczek było aktywne (efektywne)?",
            back: "1. Warunek energetyczny: łączna energia kinetyczna zderzających się drobin musi być równa lub większa od energii aktywacji (E<sub>k</sub> &ge; E<sub>a</sub>).<br>2. Warunek steryczny (przestrzenny): cząsteczki muszą być odpowiednio zorientowane względem siebie w chwili zderzenia."
        },
        {
            front: "Jaką postać ma równanie kinetyczne dla reakcji aA + bB &rarr; produkty i czego NIE wpisuje się do tego równania?",
            back: "v = k &middot; [A]<sup>&alpha;</sup> &middot; [B]<sup>&beta;</sup>.<br>Do równania kinetycznego NIE wpisuje się produktów oraz NIE wpisuje się stężeń czystych ciał stałych (s)!"
        },
        {
            front: "Kiedy wykładniki potęgowe (&alpha;, &beta;) w równaniu kinetycznym są równe współczynnikom stechiometrycznym (a, b), a co decyduje o rzędzie reakcji wieloetapowej?",
            back: "Wykładniki są równe współczynnikom wyłącznie dla reakcji prostych (jednoetapowych / elementarnych). W reakcjach złożonych (wieloetapowych) o szybkości i równaniu kinetycznym decyduje zawsze etap najwolniejszy (etap limitujący)."
        },
        {
            front: "Od czego zależy, a od czego NIE zależy stała szybkości reakcji (k)?",
            back: "• Zależy od: rodzaju reagujących substancji (E<sub>a</sub>), temperatury (T) oraz obecności katalizatora.<br>• NIE zależy od: stężeń molowych substratów, ciśnienia gazów oraz czasu trwania reakcji."
        },
        {
            front: "Podaj wzór ogólny na jednostkę stałej szybkości k dla reakcji n-tego rzędu oraz jednostki dla rzędu 0, I, II i III.",
            back: "Wzór ogólny: [k] = mol<sup>1&minus;n</sup> &middot; dm<sup>3(n&minus;1)</sup> &middot; s<sup>&minus;1</sup>.<br>• Rząd 0: mol &middot; dm<sup>&minus;3</sup> &middot; s<sup>&minus;1</sup><br>• Rząd I: s<sup>&minus;1</sup><br>• Rząd II: dm<sup>3</sup> &middot; mol<sup>&minus;1</sup> &middot; s<sup>&minus;1</sup><br>• Rząd III: dm<sup>6</sup> &middot; mol<sup>&minus;2</sup> &middot; s<sup>&minus;1</sup>."
        },
        {
            front: "Jak wygląda wykres zależności szybkości reakcji od stężenia substratu v = f([A]) dla reakcji rzędu 0, I oraz II?",
            back: "• Rząd 0 (v = k): linia prosta pozioma (równoległa do osi stężenia).<br>• Rząd I (v = k&middot;[A]): linia prosta rosnąca przechodząca przez początek układu współrzędnych.<br>• Rząd II (v = k&middot;[A]<sup>2</sup>): gałąź paraboli."
        },
        {
            front: "Czym jest okres półtrwania (t<sub>1/2</sub>) w kinetyce i jakim wzorem wyraża się dla reakcji I rzędu?",
            back: "To czas, po którym stężenie substratu maleje do połowy wartości początkowej (z C<sub>0</sub> do 1/2 C<sub>0</sub>). Dla reakcji I rzędu jest stały i niezależny od C<sub>0</sub>: t<sub>1/2</sub> = (ln 2) / k &approx; 0,693 / k."
        },
        {
            front: "Jak brzmi reguła van’t Hoffa i jakim wzorem się wyraża?",
            back: "Podwyższenie temperatury o każde 10 K (10&deg;C) powoduje wzrost szybkości reakcji (oraz stałej k) od 2 do 4 razy:<br>v<sub>2</sub> = v<sub>1</sub> &middot; &gamma;<sup>(T<sub>2</sub> &minus; T<sub>1</sub>)/10</sup> = v<sub>1</sub> &middot; &gamma;<sup>&Delta;T/10</sup>."
        },
        {
            front: "ZADANIE: Jak zmieni się szybkość jednoetapowej reakcji gazowej 2 SO<sub>2(g)</sub> + O<sub>2(g)</sub> &rarr; 2 SO<sub>3(g)</sub>, jeśli 3-krotnie zmniejszymy objętość naczynia i podniesiemy temperaturę z 20&deg;C do 50&deg;C (&gamma; = 2)?",
            back: "1. Równanie kinetyczne: v = k&middot;[SO<sub>2</sub>]<sup>2</sup>&middot;[O<sub>2</sub>]. 3-krotny spadek V daje 3-krotny wzrost stężeń: v' = 3<sup>2</sup> &middot; 3<sup>1</sup> = 27 razy szybciej.<br>2. Wzrost T o 30 K: 2<sup>30/10</sup> = 2<sup>3</sup> = 8 razy szybciej.<br>3. Łącznie szybkość wzrośnie 27 &middot; 8 = <strong>216 razy</strong>."
        },
        {
            front: "ZADANIE: W reaktorze zmieszano A (0,8 mol/dm<sup>3</sup>) i B (0,6 mol/dm<sup>3</sup>) dla jednoetapowej reakcji 2A<sub>(g)</sub> + B<sub>(g)</sub> &rarr; C<sub>(g)</sub>. Oblicz stosunek szybkości początkowej v<sub>0</sub> do szybkości v<sub>1</sub> po przereagowaniu 50% substratu A.",
            back: "1. v<sub>0</sub> = k &middot; (0,8)<sup>2</sup> &middot; 0,6 = 0,384 k.<br>2. Przereagowało &Delta;C<sub>A</sub> = 0,4 mol/dm<sup>3</sup>, więc ubyło &Delta;C<sub>B</sub> = 0,2 mol/dm<sup>3</sup> (stosunek 2:1). Pozostało [A]<sub>1</sub> = 0,4 i [B]<sub>1</sub> = 0,4 mol/dm<sup>3</sup>.<br>3. v<sub>1</sub> = k &middot; (0,4)<sup>2</sup> &middot; 0,4 = 0,064 k &rArr; v<sub>0</sub> / v<sub>1</sub> = 0,384 / 0,064 = <strong>6</strong>."
        },
        {
            front: "Na czym polega mechanizm działania katalizatora i jak wpływa on na E<sub>a</sub>, k oraz &Delta;H?",
            back: "Katalizator tworzy z substratem przejściowy kompleks aktywny, kierując reakcję na nową drogę o niższej energii aktywacji (E<sub>a,kat</sub> &lt; E<sub>a</sub>), a na końcu się odtwarza. Zwiększa stałą szybkości k, ale NIE zmienia entalpii reakcji (&Delta;H = const)!"
        },
        {
            front: "Jak w zapisie dwuetapowym odróżnić katalizator od produktu przejściowego (intermediatu)? (Na przykładzie: I. 2NO + O<sub>2</sub> &rarr; 2NO<sub>2</sub>, II. 2SO<sub>2</sub> + 2NO<sub>2</sub> &rarr; 2SO<sub>3</sub> + 2NO).",
            back: "• Katalizator jest substratem w I etapie i odtwarza się jako produkt w II etapie (tutaj: <strong>NO</strong>).<br>• Produkt przejściowy powstaje w I etapie i zużywa się całkowicie w II etapie (tutaj: <strong>NO<sub>2</sub></strong>)."
        },
        {
            front: "Czym różni się kataliza homogeniczna od heterogenicznej (kontaktowej)? Podaj po 1 przykładzie.",
            back: "• Homogeniczna: katalizator i reagenty są w tej samej fazie (np. utlenianie SO<sub>2(g)</sub> tlenem wobec gazowego NO<sub>(g)</sub> lub estryfikacja wobec H<sub>2</sub>SO<sub>4(c)</sub>).<br>• Heterogeniczna: katalizator (stały kontakt) jest w innej fazie niż reagenty (np. rozkład H<sub>2</sub>O<sub>2(aq)</sub> na stałym MnO<sub>2(s)</sub> lub synteza NH<sub>3</sub> na Fe<sub>(s)</sub>)."
        },
        {
            front: "Co to jest autokataliza? Podaj najważniejszy przykład maturalny wraz z równaniem reakcji.",
            back: "To proces, w którym katalizatorem jest jeden z powstających produktów reakcji. Przykład: utlenianie kwasu szczawiowego za pomocą KMnO<sub>4</sub> w środowisku H<sub>2</sub>SO<sub>4</sub>:<br>2 MnO<sub>4</sub><sup>&minus;</sup> + 5 H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> + 6 H<sup>+</sup> &rarr; 2 Mn<sup>2+</sup> + 10 CO<sub>2</sub>&uarr; + 8 H<sub>2</sub>O (autokatalizatorem są jony <strong>Mn<sup>2+</sup></strong>)."
        },
        {
            front: "Na czym polega stan równowagi dynamicznej w reakcji odwracalnej?",
            back: "To stan, w którym szybkość reakcji biegnącej w prawo (v<sub>1</sub>) zrównuje się z szybkością reakcji odwrotnej (v<sub>2</sub>): v<sub>1</sub> = v<sub>2</sub> &ne; 0, wskutek czego stężenia molowe wszystkich substratów i produktów pozostają stałe w czasie."
        },
        {
            front: "Czy w stanie równowagi chemicznej stężenia substratów i produktów muszą być sobie równe?",
            back: "NIE! W stanie równowagi równe są szybkości reakcji (v<sub>1</sub> = v<sub>2</sub>), natomiast stężenia substratów i produktów są stałe w czasie (const), ale zazwyczaj mają różne wartości."
        },
        {
            front: "Jak brzmi prawo działania mas (Guldberga i Waagego) i jak zapisuje się wzór na stężeniową stałą równowagi K<sub>c</sub> dla reakcji aA + bB &#8652; cC + dD?",
            back: "W stanie równowagi w danej temperaturze stosunek iloczynu stężeń równowagowych produktów do iloczynu stężeń równowagowych substratów (podniesionych do potęg równych współczynnikom stechiometrycznym) jest stały:<br>K<sub>c</sub> = ([C]<sup>c</sup> &middot; [D]<sup>d</sup>) / ([A]<sup>a</sup> &middot; [B]<sup>b</sup>)."
        },
        {
            front: "O czym informuje wartość stałej równowagi K<sub>c</sub> &gg; 1, a o czym K<sub>c</sub> &ll; 1?",
            back: "• K<sub>c</sub> &gg; 1: w stanie równowagi zdecydowanie przeważają produkty (wysoka wydajność reakcji).<br>• K<sub>c</sub> &ll; 1: w stanie równowagi dominują nieprzereagowane substraty (niska wydajność reakcji)."
        },
        {
            front: "Od czego zależy wartość liczbowa stałej równowagi K<sub>c</sub> danej reakcji chemicznej?",
            back: "WYŁĄCZNIE od temperatury (T)! Nie zależy od stężeń początkowych, dodania/usunięcia reagentów, zmiany ciśnienia ani obecności katalizatora."
        },
        {
            front: "Zapisz poprawne wyrażenia na stałą równowagi K<sub>c</sub> dla reakcji heterogenicznych: 1) C<sub>(s)</sub> + CO<sub>2(g)</sub> &#8652; 2CO<sub>(g)</sub> oraz 2) CaCO<sub>3(s)</sub> &#8652; CaO<sub>(s)</sub> + CO<sub>2(g)</sub>.",
            back: "Czyste ciała stałe (s) całkowicie pomijamy:<br>1) K<sub>c</sub> = [CO]<sup>2</sup> / [CO<sub>2</sub>]<br>2) K<sub>c</sub> = [CO<sub>2</sub>]."
        },
        {
            front: "Kiedy w wyrażeniu na stałą równowagi K<sub>c</sub> uwzględniamy wodę H<sub>2</sub>O, a kiedy ją pomijamy?",
            back: "• Pomijamy: gdy ciekła woda H<sub>2</sub>O<sub>(c)</sub> pełni rolę rozpuszczalnika występującego w dużym nadmiarze (w roztworach wodnych).<br>• Uwzględniamy: gdy woda występuje jako para wodna H<sub>2</sub>O<sub>(g)</sub> w reakcjach gazowych lub jako równorzędny produkt w fazie ciekłej bez rozpuszczalnika (np. w estryfikacji!)."
        },
        {
            front: "Jak brzmi reguła przekory Le Chateliera–Brauna?",
            back: "Jeżeli na układ znajdujący się w stanie równowagi dynamicznej zadziała bodziec zewnętrzny (zmiana stężenia, ciśnienia lub temperatury), to w układzie zachodzą procesy zmierzające do przeciwdziałania skutkom tego bodźca i układ osiąga nowy stan równowagi."
        },
        {
            front: "Jak zmiana ciśnienia (poprzez zmniejszenie objętości reaktora) wpływa na położenie stanu równowagi reakcji gazowej?",
            back: "Wzrost ciśnienia przesuwa równowagę w stronę mniejszej liczby moli (mniejszej objętości) gazów. Jeżeli liczba moli gazów po obu stronach równania jest identyczna (&Delta;n<sub>gaz</sub> = 0, np. H<sub>2(g)</sub> + I<sub>2(g)</sub> &#8652; 2HI<sub>(g)</sub>), zmiana ciśnienia nie wpływa na stan równowagi!"
        },
        {
            front: "Jak podwyższenie temperatury wpływa na położenie równowagi oraz na wartość K<sub>c</sub> w reakcji egzotermicznej (&Delta;H &lt; 0), a jak w endotermicznej (&Delta;H &gt; 0)?",
            back: "• Reakcja egzotermiczna (&Delta;H &lt; 0): wzrost T przesuwa równowagę w lewo (w stronę substratów), a wartość K<sub>c</sub> maleje.<br>• Reakcja endotermiczna (&Delta;H &gt; 0): wzrost T przesuwa równowagę w prawo (w stronę produktów), a wartość K<sub>c</sub> rośnie."
        },
        {
            front: "Jak dodanie katalizatora wpływa na położenie stanu równowagi, wydajność reakcji oraz wartość K<sub>c</sub>?",
            back: "Katalizator NIE przesuwa stanu równowagi, NIE zmienia wydajności reakcji i NIE zmienia wartości K<sub>c</sub>! Przyspiesza on w równym stopniu reakcję wprost i odwrotną, dzięki czemu układ jedynie szybciej osiąga stan równowagi."
        },
        {
            front: "ZADANIE: Do reaktora o V = 2,0 dm<sup>3</sup> wprowadzono 4,0 mole SO<sub>2</sub> i 4,0 mole O<sub>2</sub> (2SO<sub>2(g)</sub> + O<sub>2(g)</sub> &#8652; 2SO<sub>3(g)</sub>). W stanie równowagi otrzymano 3,0 mole SO<sub>3</sub>. Oblicz K<sub>c</sub> oraz wydajność przereagowania SO<sub>2</sub>.",
            back: "1. Stężenia początkowe (dzielimy przez 2 dm<sup>3</sup>!): C<sub>0(SO2)</sub> = 2,0 mol/dm<sup>3</sup>, C<sub>0(O2)</sub> = 2,0 mol/dm<sup>3</sup>. Równowagowe [SO<sub>3</sub>] = 3,0 / 2,0 = 1,5 mol/dm<sup>3</sup>.<br>2. Z bilansu 2:1:2: [SO<sub>2</sub>] = 2,0 &minus; 1,5 = 0,50 mol/dm<sup>3</sup>; [O<sub>2</sub>] = 2,0 &minus; 0,75 = 1,25 mol/dm<sup>3</sup>.<br>3. K<sub>c</sub> = (1,50)<sup>2</sup> / ((0,50)<sup>2</sup> &middot; 1,25) = <strong>7,2</strong>. Wydajność W = (1,5 / 2,0)&middot;100% = <strong>75%</strong>."
        },
        {
            front: "ZADANIE: Dla reakcji CO<sub>(g)</sub> + H<sub>2</sub>O<sub>(g)</sub> &#8652; CO<sub>2(g)</sub> + H<sub>2(g)</sub> stała K<sub>c</sub> = 9,0. Zmieszano po 1,0 molu CO i H<sub>2</sub>O w naczyniu o V = 1,0 dm<sup>3</sup>. Oblicz stężenia równowagowe reagentów.",
            back: "Oznaczając ubytek stężenia przez x: [CO] = [H<sub>2</sub>O] = 1,0 &minus; x oraz [CO<sub>2</sub>] = [H<sub>2</sub>] = x.<br>K<sub>c</sub> = x<sup>2</sup> / (1,0 &minus; x)<sup>2</sup> = 9,0 &rArr; x / (1,0 &minus; x) = 3,0 &rArr; 4x = 3,0 &rArr; x = 0,75 mol/dm<sup>3</sup>.<br>Odp.: <strong>[CO<sub>2</sub>] = [H<sub>2</sub>] = 0,75 mol/dm<sup>3</sup></strong>, a <strong>[CO] = [H<sub>2</sub>O] = 0,25 mol/dm<sup>3</sup></strong>."
        },
        {
            front: "Opisz obserwacje i wnioski przy oziębianiu i ogrzewaniu ampułki z mieszaniną równowagową: 2 NO<sub>2(g)</sub> (czerwonobrunatny) &#8652; N<sub>2</sub>O<sub>4(g)</sub> (bezbarwny), &Delta;H&deg; = &minus;57,2 kJ.",
            back: "• W łaźni lodowej (0&deg;C): barwa gazu blednie (równowaga reakcji egzotermicznej przesuwa się w prawo, ku bezbarwnemu N<sub>2</sub>O<sub>4</sub>).<br>• W gorącej wodzie (80&deg;C): barwa staje się intensywnie ciemnobrunatna (równowaga przesuwa się w lewo, ku NO<sub>2</sub>)."
        },
        {
            front: "Co obserwujemy w pierwszej chwili, a co po chwili, gdy gwałtownie sprężymy w strzykawce mieszaninę gazów 2 NO<sub>2(g)</sub> &#8652; N<sub>2</sub>O<sub>4(g)</sub>?",
            back: "W pierwszym ułamku sekundy barwa gazu ciemnieje (gwałtowny wzrost stężenia NO<sub>2</sub> wskutek zmniejszenia objętości), a po chwili blednie (wzrost ciśnienia przesuwa równowagę w prawo, w stronę mniejszej liczby moli gazów, czyli bezbarwnego N<sub>2</sub>O<sub>4</sub>)."
        },
        {
            front: "Jakie zmiany barwy zaobserwujemy po dodaniu kilku kropel stężonego FeCl<sub>3</sub> lub KSCN do roztworu równowagowego Fe<sup>3+</sup> + SCN<sup>&minus;</sup> &#8652; [Fe(SCN)]<sup>2+</sup>?",
            back: "Jasnoczerwony roztwór przyjmuje intensywne, krwistoczerwone zabarwienie, ponieważ zwiększenie stężenia substratu (Fe<sup>3+</sup> lub SCN<sup>&minus;</sup>) przesuwa równowagę w prawo, w stronę tworzenia krwistoczerwonego kompleksu."
        }
    ]
};