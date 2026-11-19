// Dział XII. Wstęp do chemii organicznej (Indeks 11 na liście)
appData[11] = {
    notatki: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">📚 KOMPENDIUM MATURALNE: WSTĘP DO CHEMII ORGANICZNEJ</h2>

        <!-- SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Wymagania Podstawy Programowej (Dział XII)</h3>
            <p>Zgodnie z podstawą programową (zakres rozszerzony) maturzysta powinien umieć:</p>
            <ol class="note-list">
                <li>Klasyfikować związki organiczne (węglowodory, pochodne jedno- i wielofunkcyjne), nazywać związki do 8 atomów węgla (IUPAC) oraz zapisywać ich wzory strukturalne, półstrukturalne i szkieletowe.</li>
                <li>Posługiwać się pojęciami: homolog, szereg homologiczny, wzór ogólny, rzędowość oraz rozróżniać typy izomerii konstytucyjnej i przestrzennej.</li>
                <li>Rysować i identyfikować izomery konstytucyjne (szkieletowe, położenia, grup funkcyjnych) o podanym wzorze sumarycznym.</li>
                <li>Wyjaśniać zjawisko izomerii geometrycznej (<em>cis–trans</em> oraz <em>E–Z</em>), uzasadniać warunki jej wystąpienia i rysować odpowiednie stereoizomery.</li>
                <li>Wskazywać centra stereogeniczne (C*), oceniać chiralność cząsteczek, rysować enancjomery i diastereoizomery w projekcji Fischera oraz wyznaczać konfiguracje D/L i <em>R/S</em>.</li>
                <li>Analizować zmiany właściwości fizycznych (t<sub>t</sub>, t<sub>w</sub>, rozpuszczalność) w szeregach homologicznych oraz porównywać właściwości izomerów.</li>
                <li>Klasyfikować reakcje organiczne ze względu na typ procesu (S, A, E, polimeryzacja, kondensacja) i mechanizm (elektrofilowy, nukleofilowy, rodnikowy).</li>
            </ol>
        </div>

        <!-- SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Atom Węgla, Hybrydyzacja, Stopnie Utlenienia i Rzędowość</h3>
            <p>Chemia organiczna to chemia związków węgla (z wyjątkiem m.in. CO, CO<sub>2</sub>, H<sub>2</sub>CO<sub>3</sub>, węglanów, węglików, HCN i cyjanków). Teorię witalistyczną obaliła <strong>synteza Wöhlera (1828)</strong>:</p>
            <div class="chem-eq">
                NH<sub>4</sub>OCN <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> (NH<sub>2</sub>)<sub>2</sub>CO &nbsp;&nbsp;<em>(cyjanian amonu &rarr; mocznik; izomery konstytucyjne)</em>
            </div>

            <ul class="note-list">
                <li><strong>Czterowartościowość i katenacja:</strong> W stanie wzbudzonym (1s<sup>2</sup>2s<sup>1</sup>2p<sup>3</sup>) węgiel tworzy 4 wiązania kowalencyjne i wykazuje zdolność do <strong>katenacji</strong> (łączenia się w trwałe łańcuchy i pierścienie).</li>
                <li><strong>Stopnie utlenienia węgla (od &minus;IV do +IV):</strong> Wyznaczamy metodą wiązań: wiązanie z atomem mniej elektroujemnym (C–H) wnosi <strong>&minus;1</strong>, z bardziej elektroujemnym (C–O, C–N, C–X) wnosi <strong>+1</strong>, a wiązanie C–C (niezależnie od krotności) wnosi <strong>0</strong>.<br>
                <em>Przykłady:</em> CH<sub>4</sub> (&minus;IV), CH<sub>3</sub>OH (&minus;II), HCHO (0), HCOOH (+II), CO<sub>2</sub>/CCl<sub>4</sub> (+IV).</li>
            </ul>

            <h4>Hybrydyzacja orbitali walencyjnych węgla</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Typ</th>
                            <th>Kąt i geometria</th>
                            <th>Wiązania przy C i długość</th>
                            <th>Przykłady związków</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>sp<sup>3</sup></strong></td>
                            <td>109,5&deg; &bull; tetraedryczna</td>
                            <td>4 &sigma; (pojedyncze); dł. C–C &approx; 0,154 nm</td>
                            <td>Alkany, cykloalkany, alkohole, aminy, diament</td>
                        </tr>
                        <tr>
                            <td><strong>sp<sup>2</sup></strong></td>
                            <td>120&deg; &bull; płaski trójkąt (trygonalna)</td>
                            <td>1 podwójne (&sigma; + &pi;) i 2 pojedyncze (&sigma;); dł. C=C &approx; 0,134 nm</td>
                            <td>Alkeny, areny (benzen), aldehydy, ketony, kwasy, grafit</td>
                        </tr>
                        <tr>
                            <td><strong>sp</strong></td>
                            <td>180&deg; &bull; liniowa (digonalna)</td>
                            <td>1 potrójne (&sigma; + 2&pi;) i 1 pojedyncze (&sigma;) lub dwa (=C=); dł. C&equiv;C &approx; 0,120 nm</td>
                            <td>Alkiny, nitryle (–C&equiv;N), alleny, CO<sub>2</sub></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- RYS. 1: HYBRYDYZACJA -->
            <div style="background:#0f172a; border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:12px; margin:14px 0; text-align:center;">
                <svg viewBox="0 0 720 215" style="width:100%; max-width:700px; height:auto; display:block; margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Panel sp3 -->
                    <rect x="8" y="8" width="222" height="198" rx="10" fill="#1e293b" stroke="rgba(56,189,248,0.28)"/>
                    <text x="119" y="30" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="700">Hybrydyzacja sp³ (metan)</text>
                    <line x1="119" y1="108" x2="119" y2="62" stroke="#e2e8f0" stroke-width="2.4"/>
                    <line x1="119" y1="108" x2="72" y2="136" stroke="#e2e8f0" stroke-width="2.4"/>
                    <polygon points="119,108 163,131 157,142" fill="#38bdf8"/>
                    <line x1="126" y1="102" x2="130" y2="107" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="133" y1="97" x2="138" y2="104" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="140" y1="92" x2="147" y2="101" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="147" y1="87" x2="155" y2="98" stroke="#94a3b8" stroke-width="2"/>
                    <circle cx="119" cy="108" r="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
                    <text x="119" y="113" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="700">C</text>
                    <text x="119" y="54" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">H</text>
                    <text x="61" y="144" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">H</text>
                    <text x="171" y="144" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">H</text>
                    <text x="163" y="92" text-anchor="middle" fill="#94a3b8" font-size="13" font-weight="700">H</text>
                    <path d="M 119 82 A 26 26 0 0 0 96 121" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,2"/>
                    <text x="77" y="95" text-anchor="middle" fill="#fbbf24" font-size="11.5" font-weight="600">109,5°</text>
                    <text x="119" y="182" text-anchor="middle" fill="#cbd5e1" font-size="12">4 wiązania σ • tetraedr</text>
                    <text x="119" y="198" text-anchor="middle" fill="#94a3b8" font-size="10.5">swobodny obrót wokół C–C</text>

                    <!-- Panel sp2 -->
                    <rect x="249" y="8" width="222" height="198" rx="10" fill="#1e293b" stroke="rgba(52,211,153,0.28)"/>
                    <text x="360" y="30" text-anchor="middle" fill="#34d399" font-size="14" font-weight="700">Hybrydyzacja sp² (eten)</text>
                    <line x1="330" y1="103" x2="390" y2="103" stroke="#e2e8f0" stroke-width="2.5"/>
                    <line x1="330" y1="112" x2="390" y2="112" stroke="#f87171" stroke-width="2.5"/>
                    <text x="360" y="96" text-anchor="middle" fill="#e2e8f0" font-size="11" font-weight="700">σ</text>
                    <text x="360" y="126" text-anchor="middle" fill="#f87171" font-size="11" font-weight="700">π</text>
                    <line x1="322" y1="107" x2="292" y2="72" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="322" y1="107" x2="292" y2="142" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="398" y1="107" x2="428" y2="72" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="398" y1="107" x2="428" y2="142" stroke="#e2e8f0" stroke-width="2.2"/>
                    <circle cx="326" cy="107" r="13" fill="#0f172a" stroke="#34d399" stroke-width="2"/>
                    <circle cx="394" cy="107" r="13" fill="#0f172a" stroke="#34d399" stroke-width="2"/>
                    <text x="326" y="112" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700">C</text>
                    <text x="394" y="112" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700">C</text>
                    <text x="284" y="67" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">H</text>
                    <text x="284" y="156" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">H</text>
                    <text x="436" y="67" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">H</text>
                    <text x="436" y="156" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">H</text>
                    <path d="M 310 90 A 22 22 0 0 0 310 124" fill="none" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="3,2"/>
                    <text x="278" y="111" text-anchor="middle" fill="#fbbf24" font-size="11.5" font-weight="600">120°</text>
                    <text x="360" y="182" text-anchor="middle" fill="#cbd5e1" font-size="12">3σ + 1π • płaski trójkąt</text>
                    <text x="360" y="198" text-anchor="middle" fill="#94a3b8" font-size="10.5">brak obrotu (wiązanie π)</text>

                    <!-- Panel sp -->
                    <rect x="490" y="8" width="222" height="198" rx="10" fill="#1e293b" stroke="rgba(251,191,36,0.28)"/>
                    <text x="601" y="30" text-anchor="middle" fill="#fbbf24" font-size="14" font-weight="700">Hybrydyzacja sp (etyn)</text>
                    <line x1="528" y1="107" x2="562" y2="107" stroke="#e2e8f0" stroke-width="2.4"/>
                    <line x1="640" y1="107" x2="674" y2="107" stroke="#e2e8f0" stroke-width="2.4"/>
                    <line x1="576" y1="100" x2="626" y2="100" stroke="#f87171" stroke-width="2.2"/>
                    <line x1="576" y1="107" x2="626" y2="107" stroke="#e2e8f0" stroke-width="2.4"/>
                    <line x1="576" y1="114" x2="626" y2="114" stroke="#f87171" stroke-width="2.2"/>
                    <text x="601" y="92" text-anchor="middle" fill="#f87171" font-size="11" font-weight="700">σ + 2π</text>
                    <circle cx="572" cy="107" r="13" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
                    <circle cx="630" cy="107" r="13" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
                    <text x="572" y="112" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700">C</text>
                    <text x="630" y="112" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700">C</text>
                    <text x="515" y="112" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700">H</text>
                    <text x="687" y="112" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700">H</text>
                    <path d="M 548 128 Q 601 146 654 128" fill="none" stroke="#fbbf24" stroke-width="1.4" stroke-dasharray="3,2"/>
                    <text x="601" y="152" text-anchor="middle" fill="#fbbf24" font-size="11.5" font-weight="600">180°</text>
                    <text x="601" y="182" text-anchor="middle" fill="#cbd5e1" font-size="12">2σ + 2π • budowa liniowa</text>
                    <text x="601" y="198" text-anchor="middle" fill="#94a3b8" font-size="10.5">najkrótsze wiązanie C≡C</text>
                </svg>
                <div style="font-size:12px; color:#94a3b8; margin-top:6px;"><em>Rys. 1. Porównanie typów hybrydyzacji węgla: metan (sp<sup>3</sup>), eten (sp<sup>2</sup>) i etyn (sp).</em></div>
            </div>

            <h4>Analiza składu i wzór empiryczny vs rzeczywisty</h4>
            <ul class="note-list">
                <li><strong>Wykrywanie pierwiastków:</strong> C i H przez spalanie/ogrzewanie z CuO (CO<sub>2</sub> mętni wodę wapienną; H<sub>2</sub>O barwi bezwodny CuSO<sub>4</sub> na niebiesko); N przez ogrzewanie ze stęż. NaOH (wydziela się NH<sub>3</sub> – odczyn zasadowy); S przez ogrzewanie z NaOH, zakwaszenie HNO<sub>3</sub> i dodanie Pb(NO<sub>3</sub>)<sub>2</sub> (czarny osad PbS); O oznacza się pośrednio (dopełnienie do 100%).</li>
                <li><strong>Wzór empiryczny vs rzeczywisty:</strong> Empiryczny podaje najprostszy stosunek atomów (np. CH<sub>2</sub>O), a rzeczywisty jest jego wielokrotnością: <em>k</em> = M<sub>rzecz</sub> / M<sub>emp</sub> (np. glukoza: 180 / 30 = 6 &rarr; C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>).</li>
            </ul>

            <h4>Rzędowość w związkach organicznych</h4>
            <ul class="note-list">
                <li><strong>Rzędowość atomu C (I&deg;–IV&deg;):</strong> Liczba innych atomów C połączonych bezpośrednio z danym węglem (niezależnie od krotności wiązania). W C(CH<sub>3</sub>)<sub>4</sub> centralny C jest IV&deg;, a skrajne I&deg;.</li>
                <li><strong>Rzędowość alkoholi i fluorowcopochodnych (I&deg;–III&deg;):</strong> Zależy od rzędowości atomu C, przy którym znajduje się grupa –OH lub –X (np. (CH<sub>3</sub>)<sub>3</sub>C–OH to alkohol III&deg;).</li>
            </ul>
            <div class="note-alert danger">
                ⚠️ <strong>Pułapka maturalna – rzędowość amin!</strong> Rzędowość amin <strong>NIE</strong> zależy od rzędowości atomu węgla, lecz od liczby grup węglowodorowych połączonych bezpośrednio z atomem azotu: <strong>R–NH<sub>2</sub></strong> (amina I&deg;, nawet dla (CH<sub>3</sub>)<sub>3</sub>C–NH<sub>2</sub>!), <strong>R<sub>2</sub>NH</strong> (amina II&deg;), <strong>R<sub>3</sub>N</strong> (amina III&deg;).
            </div>
        </div>

        <!-- SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Sposoby Zapisu Wzorów Związków Organicznych</h3>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Rodzaj wzoru</th>
                            <th>Zasady zapisu</th>
                            <th>Przykład (butan-2-ol)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Sumaryczny</strong></td>
                            <td>Rodzaj i liczba atomów (kolejność Hilla: C, H, potem alfabetycznie). Nie rozróżnia izomerów.</td>
                            <td>C<sub>4</sub>H<sub>10</sub>O</td>
                        </tr>
                        <tr>
                            <td><strong>Strukturalny (pełny)</strong></td>
                            <td>Wszystkie atomy oraz wszystkie wiązania (w tym każde C–H i O–H) rozrysowane kreskami.</td>
                            <td>Pełna siatka wiązań (patrz Rys. 2)</td>
                        </tr>
                        <tr>
                            <td><strong>Półstrukturalny</strong></td>
                            <td>Pomija kreski C–H, zachowuje wiązania C–C oraz wiązania z grupami funkcyjnymi. Najczęstszy na maturze.</td>
                            <td>CH<sub>3</sub>–CH(OH)–CH<sub>2</sub>–CH<sub>3</sub></td>
                        </tr>
                        <tr>
                            <td><strong>Grupowy (skrócony)</strong></td>
                            <td>Pomija kreski wiązań pojedynczych; powtarzające się fragmenty i rozgałęzienia ujmuje w nawiasy.</td>
                            <td>CH<sub>3</sub>CH(OH)CH<sub>2</sub>CH<sub>3</sub></td>
                        </tr>
                        <tr>
                            <td><strong>Szkieletowy</strong></td>
                            <td>Zygzak węglowy (C w wierzchołkach i na końcach; H przy C domyślne). Heteroatomy i ich wodory (–OH, –NH<sub>2</sub>, –CHO) wpisuje się jawnie.</td>
                            <td>Zygzak 4-węglowy z gałęzią –OH przy C2</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- RYS. 2: RODZAJE WZORÓW -->
            <div style="background:#0f172a; border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:12px; margin:14px 0; text-align:center;">
                <svg viewBox="0 0 720 270" style="width:100%; max-width:700px; height:auto; display:block; margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Nagłówki kolumn -->
                    <rect x="8" y="6" width="248" height="28" rx="6" fill="#1e293b"/>
                    <rect x="264" y="6" width="234" height="28" rx="6" fill="#1e293b"/>
                    <rect x="506" y="6" width="206" height="28" rx="6" fill="#1e293b"/>
                    <text x="132" y="25" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">Wzór strukturalny</text>
                    <text x="381" y="25" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">Półstrukturalny / Grupowy</text>
                    <text x="609" y="25" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">Wzór szkieletowy</text>

                    <!-- WIERSZ 1: BUTAN-2-OL -->
                    <rect x="8" y="42" width="704" height="110" rx="10" fill="rgba(30,41,59,0.55)" stroke="rgba(255,255,255,0.08)"/>
                    <text x="20" y="60" fill="#34d399" font-size="12.5" font-weight="700">Butan-2-ol (C₄H₁₀O)</text>
                    <!-- Strukturalny butan-2-ol -->
                    <g stroke="#cbd5e1" stroke-width="1.8">
                        <line x1="40" y1="98" x2="54" y2="98"/>
                        <line x1="72" y1="98" x2="96" y2="98"/>
                        <line x1="114" y1="98" x2="138" y2="98"/>
                        <line x1="156" y1="98" x2="180" y2="98"/>
                        <line x1="198" y1="98" x2="212" y2="98"/>
                        <!-- Pionowe C-H -->
                        <line x1="63" y1="86" x2="63" y2="73"/>
                        <line x1="63" y1="110" x2="63" y2="123"/>
                        <line x1="105" y1="86" x2="105" y2="73"/>
                        <line x1="105" y1="110" x2="105" y2="123" stroke="#f87171"/>
                        <line x1="115" y1="134" x2="128" y2="134" stroke="#f87171"/>
                        <line x1="147" y1="86" x2="147" y2="73"/>
                        <line x1="147" y1="110" x2="147" y2="123"/>
                        <line x1="189" y1="86" x2="189" y2="73"/>
                        <line x1="189" y1="110" x2="189" y2="123"/>
                    </g>
                    <g fill="#f8fafc" font-size="13" font-weight="700" text-anchor="middle">
                        <text x="31" y="103">H</text>
                        <text x="63" y="103">C</text>
                        <text x="105" y="103">C</text>
                        <text x="147" y="103">C</text>
                        <text x="189" y="103">C</text>
                        <text x="221" y="103">H</text>
                        <text x="63" y="69">H</text><text x="63" y="139">H</text>
                        <text x="105" y="69">H</text>
                        <text x="105" y="139" fill="#f87171">O</text><text x="137" y="139" fill="#f87171">H</text>
                        <text x="147" y="69">H</text><text x="147" y="139">H</text>
                        <text x="189" y="69">H</text><text x="189" y="139">H</text>
                    </g>
                    <!-- Półstrukturalny butan-2-ol -->
                    <text x="381" y="88" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700">CH₃–CH(OH)–CH₂–CH₃</text>
                    <text x="381" y="114" text-anchor="middle" fill="#94a3b8" font-size="12">Grupowy:</text>
                    <text x="381" y="133" text-anchor="middle" fill="#cbd5e1" font-size="13" font-weight="600">CH₃CH(OH)CH₂CH₃</text>
                    <!-- Szkieletowy butan-2-ol -->
                    <polyline points="545,126 585,98 625,126 665,98" fill="none" stroke="#f8fafc" stroke-width="2.6" stroke-linejoin="round"/>
                    <line x1="585" y1="98" x2="585" y2="68" stroke="#f87171" stroke-width="2.6"/>
                    <text x="585" y="62" text-anchor="middle" fill="#f87171" font-size="14" font-weight="700">OH</text>
                    <text x="541" y="142" text-anchor="middle" fill="#94a3b8" font-size="10.5">C1</text>
                    <text x="598" y="96" text-anchor="middle" fill="#94a3b8" font-size="10.5">C2</text>
                    <text x="625" y="142" text-anchor="middle" fill="#94a3b8" font-size="10.5">C3</text>
                    <text x="673" y="92" text-anchor="middle" fill="#94a3b8" font-size="10.5">C4</text>

                    <!-- WIERSZ 2: KWAS PROPANOWY -->
                    <rect x="8" y="160" width="704" height="104" rx="10" fill="rgba(30,41,59,0.55)" stroke="rgba(255,255,255,0.08)"/>
                    <text x="20" y="178" fill="#fbbf24" font-size="12.5" font-weight="700">Kwas propanowy (C₃H₆O₂)</text>
                    <!-- Strukturalny kwas propanowy -->
                    <g stroke="#cbd5e1" stroke-width="1.8">
                        <line x1="40" y1="216" x2="54" y2="216"/>
                        <line x1="72" y1="216" x2="96" y2="216"/>
                        <line x1="114" y1="216" x2="140" y2="216"/>
                        <line x1="63" y1="204" x2="63" y2="191"/>
                        <line x1="63" y1="228" x2="63" y2="241"/>
                        <line x1="105" y1="204" x2="105" y2="191"/>
                        <line x1="105" y1="228" x2="105" y2="241"/>
                        <!-- C=O -->
                        <line x1="146" y1="204" x2="146" y2="191" stroke="#f87171"/>
                        <line x1="152" y1="204" x2="152" y2="191" stroke="#f87171"/>
                        <!-- C-O-H -->
                        <line x1="159" y1="216" x2="177" y2="216" stroke="#f87171"/>
                        <line x1="196" y1="216" x2="210" y2="216" stroke="#f87171"/>
                    </g>
                    <g fill="#f8fafc" font-size="13" font-weight="700" text-anchor="middle">
                        <text x="31" y="221">H</text>
                        <text x="63" y="221">C</text>
                        <text x="105" y="221">C</text>
                        <text x="149" y="221">C</text>
                        <text x="63" y="187">H</text><text x="63" y="255">H</text>
                        <text x="105" y="187">H</text><text x="105" y="255">H</text>
                        <text x="149" y="187" fill="#f87171">O</text>
                        <text x="186" y="221" fill="#f87171">O</text>
                        <text x="219" y="221" fill="#f87171">H</text>
                    </g>
                    <!-- Półstrukturalny kwas propanowy -->
                    <text x="381" y="206" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700">CH₃–CH₂–C(=O)–OH</text>
                    <text x="381" y="228" text-anchor="middle" fill="#94a3b8" font-size="12">Grupowy:</text>
                    <text x="381" y="247" text-anchor="middle" fill="#cbd5e1" font-size="13" font-weight="600">CH₃CH₂COOH</text>
                    <!-- Szkieletowy kwas propanowy -->
                    <polyline points="545,238 585,212 622,235" fill="none" stroke="#f8fafc" stroke-width="2.6" stroke-linejoin="round"/>
                    <line x1="619" y1="234" x2="619" y2="196" stroke="#f87171" stroke-width="2.4"/>
                    <line x1="625" y1="234" x2="625" y2="196" stroke="#f87171" stroke-width="2.4"/>
                    <line x1="622" y1="235" x2="652" y2="217" stroke="#f87171" stroke-width="2.5"/>
                    <text x="622" y="190" text-anchor="middle" fill="#f87171" font-size="14" font-weight="700">O</text>
                    <text x="668" y="218" text-anchor="middle" fill="#f87171" font-size="14" font-weight="700">OH</text>
                    <text x="541" y="253" text-anchor="middle" fill="#94a3b8" font-size="10.5">C3</text>
                    <text x="585" y="203" text-anchor="middle" fill="#94a3b8" font-size="10.5">C2</text>
                    <text x="622" y="253" text-anchor="middle" fill="#94a3b8" font-size="10.5">C1</text>
                </svg>
                <div style="font-size:12px; color:#94a3b8; margin-top:6px;"><em>Rys. 2. Zestawienie sposobów zapisu wzorów (butan-2-ol i kwas propanowy).</em></div>
            </div>

            <div class="note-alert">
                ⚠️ <strong>Zasada zapisu wiązań na maturze CKE:</strong> Kreska musi łączyć konkretne wiążące się atomy! Po lewej stronie łańcucha piszemy <strong>HO–CH<sub>2</sub>–CH<sub>3</sub></strong>, <strong>H<sub>3</sub>C–CH<sub>3</sub></strong>, <strong>HOOC–CH<sub>2</sub>–COOH</strong>, <strong>O<sub>2</sub>N–C<sub>6</sub>H<sub>5</sub></strong> (zapis OH–CH<sub>2</sub>– to błąd!). Grupę aldehydową zapisujemy zawsze <strong>–CHO</strong> (nigdy –COH).
            </div>
        </div>

        <!-- SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Klasyfikacja, Szeregi Homologiczne i Nomenklatura IUPAC</h3>
            <p><strong>Szereg homologiczny</strong> to zbiór związków o analogicznej budowie, tej samej grupie funkcyjnej i wspólnym wzorze ogólnym, w którym kolejne związki (<strong>homologi</strong>) różnią się o stałą grupę metylenową <strong>–CH<sub>2</sub>–</strong> (przyrost masy o 14 g/mol). <em>Uwaga:</em> etanol (CH<sub>3</sub>CH<sub>2</sub>OH) i fenol (C<sub>6</sub>H<sub>5</sub>OH) <strong>nie są</strong> homologami!</p>

            <h4>Najważniejsze klasy związków i hierarchia grup funkcyjnych IUPAC</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Priorytet</th>
                            <th>Klasa związków</th>
                            <th>Grupa / wiązanie</th>
                            <th>Przyrostek (główna)</th>
                            <th>Przedrostek (podstawnik)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>1</strong></td><td>Kwasy karboksylowe (C<sub>n</sub>H<sub>2n+1</sub>COOH)</td><td>–COOH</td><td>kwas ...-owy</td><td>karboksy-</td></tr>
                        <tr><td><strong>2</strong></td><td>Estry (R<sup>1</sup>COOR<sup>2</sup>)</td><td>–COO–</td><td>...-ian ...-ylu</td><td>alkoksykarbonylo-</td></tr>
                        <tr><td><strong>3</strong></td><td>Amidy (RCONH<sub>2</sub>)</td><td>–CONH<sub>2</sub></td><td>...-amid</td><td>karbamoilo-</td></tr>
                        <tr><td><strong>4</strong></td><td>Aldehydy (C<sub>n</sub>H<sub>2n+1</sub>CHO)</td><td>–CHO</td><td>...-al</td><td>formylo- / okso-</td></tr>
                        <tr><td><strong>5</strong></td><td>Ketony (R–CO–R')</td><td>&gt;C=O</td><td>...-on</td><td>okso-</td></tr>
                        <tr><td><strong>6</strong></td><td>Alkohole / Fenole (R–OH / Ar–OH)</td><td>–OH</td><td>...-ol</td><td>hydroksy-</td></tr>
                        <tr><td><strong>7</strong></td><td>Aminy (R–NH<sub>2</sub>)</td><td>–NH<sub>2</sub>, &gt;NH, &gt;N–</td><td>...-amina</td><td>amino-</td></tr>
                        <tr><td><strong>8</strong></td><td>Alkeny (C<sub>n</sub>H<sub>2n</sub>) / Alkiny (C<sub>n</sub>H<sub>2n&minus;2</sub>)</td><td>C=C / C&equiv;C</td><td>...-en / ...-yn</td><td>–</td></tr>
                        <tr><td><strong>9</strong></td><td>Fluorowce / Nitro / Alkile</td><td>–X, –NO<sub>2</sub>, –R</td><td><em>zawsze przedrostki</em></td><td>chloro-, bromo-, nitro-, metylo-...</td></tr>
                    </tbody>
                </table>
            </div>

            <h4>Algorytm nazewnictwa IUPAC (łańcuchy C<sub>1</sub>–C<sub>8</sub>: met-, et-, prop-, but-, pent-, heks-, hept-, okt-)</h4>
            <ol class="note-list">
                <li><strong>Łańcuch główny:</strong> Najdłuższy ciągły łańcuch zawierający grupę o najwyższym priorytecie (następnie najwięcej wiązań wielokrotnych i podstawników).</li>
                <li><strong>Numeracja:</strong> Najniższy lokant dla grupy głównej (w –COOH i –CHO węgiel grupy ma zawsze lokant <strong>1</strong>), potem dla wiązania wielokrotnego (przy remisie C=C wygrywa z C&equiv;C), a w alkanach – najniższy zestaw lokantów (przy remisie decyduje alfabet).</li>
                <li><strong>Alfabetyczność i zwielokrotnienia:</strong> Podstawniki układamy alfabetycznie, <strong>ignorując</strong> przedrostki <em>di-, tri-, tetra-</em> (np. <strong>e</strong>tyl stoi przed di<strong>m</strong>etylem).</li>
                <li><strong>Interpunkcja i lokanty:</strong> Cyfry oddzielamy przecinkami, cyfry od liter łącznikami; lokant grupy głównej i wiązania wielokrotnego wpisujemy bezpośrednio przed przyrostkiem (np. <em>pent-2-en</em>, <em>4-chloropentan-2-ol</em>, <em>kwas 2-bromobutanowy</em>).</li>
            </ol>
        </div>

        <!-- SEKCJA 5 -->
        <div class="note-section">
            <h3>5. Izomeria Konstytucyjna (Strukturalna)</h3>
            <p><strong>Izomery</strong> to różne związki o identycznym wzorze sumarycznym, ale innej budowie. W <strong>izomerii konstytucyjnej</strong> różna jest sama kolejność połączeń atomów; w <strong>stereoizomerii</strong> kolejność jest identyczna, a różni się rozmieszczenie przestrzenne 3D.</p>

            <ul class="note-list">
                <li><strong>Izomeria szkieletowa:</strong> Inny szkielet węglowy (prosty vs rozgałęziony lub łańcuchowy vs cykliczny), np. dla C<sub>5</sub>H<sub>12</sub>: pentan, 2-metylobutan, 2,2-dimetylopropan.</li>
                <li><strong>Izomeria położenia:</strong> Ten sam szkielet i grupa/wiązanie wielokrotne, ale przy innym atomie węgla (np. propan-1-ol i propan-2-ol; but-1-en i but-2-en; <em>o-, m-, p-</em>dimetylobenzen).</li>
                <li><strong>Izomeria grup funkcyjnych:</strong> Różne klasy związków o tym samym wzorze ogólnym:</li>
            </ul>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Wzór ogólny</th>
                            <th>Izomeryczne klasy związków</th>
                            <th>Przykładowa para izomerów</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>C<sub>n</sub>H<sub>2n</sub></strong> (n &ge; 3)</td><td>Alkeny &harr; Cykloalkany</td><td>but-1-en &harr; cyklobutan</td></tr>
                        <tr><td><strong>C<sub>n</sub>H<sub>2n&minus;2</sub></strong> (n &ge; 3)</td><td>Alkiny &harr; Alkadieny &harr; Cykloalkeny</td><td>but-1-yn &harr; buta-1,3-dien &harr; cyklobuten</td></tr>
                        <tr><td><strong>C<sub>n</sub>H<sub>2n+2</sub>O</strong> (n &ge; 2)</td><td>Alkohole &harr; Etery</td><td>etanol (CH<sub>3</sub>CH<sub>2</sub>OH) &harr; metoksymetan (CH<sub>3</sub>OCH<sub>3</sub>)</td></tr>
                        <tr><td><strong>C<sub>n</sub>H<sub>2n</sub>O</strong> (n &ge; 3)</td><td>Aldehydy &harr; Ketony</td><td>propanal (CH<sub>3</sub>CH<sub>2</sub>CHO) &harr; propanon (CH<sub>3</sub>COCH<sub>3</sub>)</td></tr>
                        <tr><td><strong>C<sub>n</sub>H<sub>2n</sub>O<sub>2</sub></strong> (n &ge; 2)</td><td>Kwasy karboksylowe &harr; Estry</td><td>kwas propanowy &harr; etanian metylu / metanian etylu</td></tr>
                        <tr><td><strong>C<sub>n</sub>H<sub>2n+1</sub>NO<sub>2</sub></strong> (n &ge; 2)</td><td>Aminokwasy &harr; Nitroalkany</td><td>glicyna (H<sub>2</sub>NCH<sub>2</sub>COOH) &harr; nitroetan (CH<sub>3</sub>CH<sub>2</sub>NO<sub>2</sub>)</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="chem-obs">
                💡 <strong>Metoda wypisywania izomerów (przykład C<sub>4</sub>H<sub>10</sub>O):</strong> Ustal możliwe klasy (tu: 4 alkohole + 3 etery = 7 izomerów), skracaj łańcuch główny, przesuwaj grupę funkcyjną i na końcu <strong>nazwij każdy wzór wg IUPAC</strong> – identyczne nazwy ujawniają duplikaty!
            </div>
        </div>

        <!-- SEKCJA 6 -->
        <div class="note-section">
            <h3>6. Stereoizomeria – Izomeria Geometryczna (cis–trans oraz E–Z)</h3>
            <p>Wokół wiązań pojedynczych C–C (&sigma;) zachodzi swobodny obrót (powstają chwilowe <strong>konformacje</strong>, a nie odrębne związki). Obecność wiązania podwójnego <strong>C=C</strong> (wiązanie &pi;) lub <strong>pierścienia cykloalkanu</strong> blokuje obrót i umożliwia istnienie trwałych <strong>izomerów geometrycznych</strong>.</p>

            <h4>Dwa warunki konieczne wystąpienia izomerii geometrycznej:</h4>
            <ol class="note-list">
                <li>Obecność elementu usztywniającego: wiązania podwójnego <strong>&gt;C=C&lt;</strong> (lub pierścienia alifatycznego).</li>
                <li>Przy <strong>każdym</strong> z dwóch atomów węgla wiązania C=C (lub dwóch różnych węglach pierścienia) muszą znajdować się <strong>dwa różne podstawniki</strong> (<em>a &ne; b</em> oraz <em>c &ne; d</em>).<br>
                <em>Brak izomerii:</em> np. but-1-en (dwa atomy H przy C1), 2-metylobut-2-en (dwie grupy –CH<sub>3</sub> przy C2), alkiny (budowa liniowa 180&deg;), 1,1-dimetylocyklopropan.</li>
            </ol>

            <h4>Nomenklatura cis–trans vs uniwersalny system E–Z (reguły CIP)</h4>
            <ul class="note-list">
                <li><strong>System cis–trans:</strong> Gdy przy obu węglach powtarza się taki sam podstawnik (np. po jednej grupie –CH<sub>3</sub> i po jednym H). <strong>cis</strong> = po tej samej stronie płaszczyzny; <strong>trans</strong> = po przeciwnych stronach (dotyczy też cykloalkanów, np. <em>cis/trans</em>-1,2-dimetylocyklopropanu).</li>
                <li><strong>System E–Z (reguły Cahna–Ingolda–Preloga, CIP):</strong> Obowiązkowy przy 3 lub 4 różnych podstawnikach. Osobno dla lewego i prawego C ustalamy priorytety:
                    <br>&bull; <em>Reguła 1 (liczba atomowa Z):</em> –H (1) &lt; –CH<sub>3</sub> (6) &lt; –NH<sub>2</sub> (7) &lt; –OH (8) &lt; –F (9) &lt; –SH (16) &lt; –Cl (17) &lt; –Br (35) &lt; –I (53).
                    <br>&bull; <em>Reguła 2 (dalsze sfery):</em> Przy remisie porównujemy zbiory atomów przyłączonych do tych atomów aż do pierwszego punktu różnicy (np. –CH<sub>2</sub>OH [O,H,H] &gt; –CH(CH<sub>3</sub>)<sub>2</sub> [C,C,H], bo O &gt; C!).
                    <br>&bull; <em>Reguła 3 (wiązania wielokrotne):</em> Wiązanie podwójne liczy się jako 2 atomy, potrójne jako 3 (np. –CH<sub>2</sub>OH &lt; –CHO &lt; –COOH).
                    <br>&bull; Oba priorytety <strong>(1) po tej samej stronie &rarr; Z</strong> (<em>zusammen</em>); <strong>po przeciwnych stronach &rarr; E</strong> (<em>entgegen</em>).
                </li>
            </ul>

            <!-- RYS. 3: CIS-TRANS I E-Z -->
            <div style="background:#0f172a; border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:12px; margin:14px 0; text-align:center;">
                <svg viewBox="0 0 720 235" style="width:100%; max-width:700px; height:auto; display:block; margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Lewa ramka: cis-trans -->
                    <rect x="8" y="8" width="344" height="218" rx="10" fill="#1e293b" stroke="rgba(52,211,153,0.3)"/>
                    <text x="180" y="30" text-anchor="middle" fill="#34d399" font-size="14" font-weight="700">Izomeria cis–trans (but-2-en)</text>
                    <line x1="180" y1="42" x2="180" y2="214" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>

                    <!-- cis-but-2-en -->
                    <line x1="24" y1="100" x2="168" y2="100" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,4"/>
                    <line x1="76" y1="96" x2="112" y2="96" stroke="#f8fafc" stroke-width="2.4"/>
                    <line x1="76" y1="104" x2="112" y2="104" stroke="#f8fafc" stroke-width="2.4"/>
                    <line x1="65" y1="92" x2="45" y2="66" stroke="#34d399" stroke-width="2.4"/>
                    <line x1="123" y1="92" x2="143" y2="66" stroke="#34d399" stroke-width="2.4"/>
                    <line x1="65" y1="108" x2="45" y2="134" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="123" y1="108" x2="143" y2="134" stroke="#94a3b8" stroke-width="2"/>
                    <text x="69" y="105" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="700">C</text>
                    <text x="119" y="105" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="700">C</text>
                    <text x="38" y="60" text-anchor="middle" fill="#34d399" font-size="13.5" font-weight="700">H₃C</text>
                    <text x="150" y="60" text-anchor="middle" fill="#34d399" font-size="13.5" font-weight="700">CH₃</text>
                    <text x="40" y="148" text-anchor="middle" fill="#94a3b8" font-size="13">H</text>
                    <text x="148" y="148" text-anchor="middle" fill="#94a3b8" font-size="13">H</text>
                    <text x="94" y="176" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">cis-but-2-en</text>
                    <text x="94" y="193" text-anchor="middle" fill="#94a3b8" font-size="11.5">(2Z)-but-2-en</text>
                    <text x="94" y="211" text-anchor="middle" fill="#34d399" font-size="11.5">grupy CH₃ razem</text>

                    <!-- trans-but-2-en -->
                    <line x1="194" y1="100" x2="338" y2="100" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,4"/>
                    <line x1="246" y1="96" x2="282" y2="96" stroke="#f8fafc" stroke-width="2.4"/>
                    <line x1="246" y1="104" x2="282" y2="104" stroke="#f8fafc" stroke-width="2.4"/>
                    <line x1="235" y1="92" x2="215" y2="66" stroke="#34d399" stroke-width="2.4"/>
                    <line x1="293" y1="92" x2="313" y2="66" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="235" y1="108" x2="215" y2="134" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="293" y1="108" x2="313" y2="134" stroke="#34d399" stroke-width="2.4"/>
                    <text x="239" y="105" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="700">C</text>
                    <text x="289" y="105" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="700">C</text>
                    <text x="208" y="60" text-anchor="middle" fill="#34d399" font-size="13.5" font-weight="700">H₃C</text>
                    <text x="318" y="60" text-anchor="middle" fill="#94a3b8" font-size="13">H</text>
                    <text x="210" y="148" text-anchor="middle" fill="#94a3b8" font-size="13">H</text>
                    <text x="321" y="148" text-anchor="middle" fill="#34d399" font-size="13.5" font-weight="700">CH₃</text>
                    <text x="266" y="176" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">trans-but-2-en</text>
                    <text x="266" y="193" text-anchor="middle" fill="#94a3b8" font-size="11.5">(2E)-but-2-en</text>
                    <text x="266" y="211" text-anchor="middle" fill="#34d399" font-size="11.5">grupy CH₃ naprzeciw</text>

                    <!-- Prawa ramka: E-Z -->
                    <rect x="364" y="8" width="348" height="218" rx="10" fill="#1e293b" stroke="rgba(248,113,113,0.3)"/>
                    <text x="538" y="30" text-anchor="middle" fill="#f87171" font-size="14" font-weight="700">System E–Z (reguły CIP)</text>
                    <line x1="538" y1="42" x2="538" y2="214" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>

                    <!-- (2Z) -->
                    <line x1="380" y1="100" x2="526" y2="100" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,4"/>
                    <line x1="432" y1="96" x2="468" y2="96" stroke="#f8fafc" stroke-width="2.4"/>
                    <line x1="432" y1="104" x2="468" y2="104" stroke="#f8fafc" stroke-width="2.4"/>
                    <line x1="421" y1="92" x2="401" y2="66" stroke="#f87171" stroke-width="2.4"/>
                    <line x1="479" y1="92" x2="499" y2="66" stroke="#f87171" stroke-width="2.4"/>
                    <line x1="421" y1="108" x2="401" y2="134" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="479" y1="108" x2="499" y2="134" stroke="#94a3b8" stroke-width="2"/>
                    <text x="425" y="105" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="700">C</text>
                    <text x="475" y="105" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="700">C</text>
                    <text x="398" y="60" text-anchor="middle" fill="#f87171" font-size="12.5" font-weight="700">Cl (1)</text>
                    <text x="502" y="60" text-anchor="middle" fill="#f87171" font-size="12.5" font-weight="700">C₂H₅ (1)</text>
                    <text x="399" y="148" text-anchor="middle" fill="#94a3b8" font-size="12">H₃C (2)</text>
                    <text x="502" y="148" text-anchor="middle" fill="#94a3b8" font-size="12">CH₃ (2)</text>
                    <text x="451" y="174" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">(2Z)-2-chloro-</text>
                    <text x="451" y="190" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">3-metylopent-2-en</text>
                    <text x="451" y="211" text-anchor="middle" fill="#f87171" font-size="11.5">priorytety (1) razem</text>

                    <!-- (2E) -->
                    <line x1="552" y1="100" x2="698" y2="100" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,4"/>
                    <line x1="604" y1="96" x2="640" y2="96" stroke="#f8fafc" stroke-width="2.4"/>
                    <line x1="604" y1="104" x2="640" y2="104" stroke="#f8fafc" stroke-width="2.4"/>
                    <line x1="593" y1="92" x2="573" y2="66" stroke="#f87171" stroke-width="2.4"/>
                    <line x1="651" y1="92" x2="671" y2="66" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="593" y1="108" x2="573" y2="134" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="651" y1="108" x2="671" y2="134" stroke="#f87171" stroke-width="2.4"/>
                    <text x="597" y="105" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="700">C</text>
                    <text x="647" y="105" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="700">C</text>
                    <text x="570" y="60" text-anchor="middle" fill="#f87171" font-size="12.5" font-weight="700">Cl (1)</text>
                    <text x="676" y="60" text-anchor="middle" fill="#94a3b8" font-size="12">CH₃ (2)</text>
                    <text x="571" y="148" text-anchor="middle" fill="#94a3b8" font-size="12">H₃C (2)</text>
                    <text x="676" y="148" text-anchor="middle" fill="#f87171" font-size="12.5" font-weight="700">C₂H₅ (1)</text>
                    <text x="625" y="174" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">(2E)-2-chloro-</text>
                    <text x="625" y="190" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">3-metylopent-2-en</text>
                    <text x="625" y="211" text-anchor="middle" fill="#f87171" font-size="11.5">priorytety (1) naprzeciw</text>
                </svg>
                <div style="font-size:12px; color:#94a3b8; margin-top:6px;"><em>Rys. 3. Porównanie izomerii cis–trans oraz systemu E–Z według reguł CIP.</em></div>
            </div>
        </div>

        <!-- SEKCJA 7 -->
        <div class="note-section">
            <h3>7. Stereoizomeria – Izomeria Optyczna i Chiralność</h3>
            <p><strong>Chiralność</strong> to właściwość cząsteczki polegająca na tym, że <strong>nie nakłada się ona na własne odbicie lustrzane</strong> (brak wewnętrznej płaszczyzny symetrii &sigma;). Najczęstszą przyczyną chiralności jest obecność <strong>centrum chiralności (C*)</strong> – atomu węgla o hybrydyzacji <strong>sp<sup>3</sup></strong> połączonego z <strong>czterema różnymi podstawnikami</strong> (np. C2 w butan-2-olu: –H, –OH, –CH<sub>3</sub>, –C<sub>2</sub>H<sub>5</sub>).</p>

            <h4>A. Wzory klinowe (perspektywiczne) i konfiguracja absolutna R / S</h4>
            <p>Ustalamy priorytety CIP (1 &gt; 2 &gt; 3 &gt; 4) i kierujemy podstawnik <strong>(4) za płaszczyznę kartki</strong> (klin przerywany). Łuk <strong>1 &rarr; 2 &rarr; 3</strong> zgodnie ze wskazówkami zegara to konfiguracja <strong>(R)</strong> (<em>rectus</em>), a przeciwnie – <strong>(S)</strong> (<em>sinister</em>). Jeśli podstawnik (4) jest na klinie pełnym (do nas), wynik odwracamy.</p>

            <!-- RYS. 4: WZORY KLINOWE (R)/(S)-BUTAN-2-OL -->
            <div style="background:#0f172a; border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:12px; margin:14px 0; text-align:center;">
                <svg viewBox="0 0 720 250" style="width:100%; max-width:700px; height:auto; display:block; margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Lustro -->
                    <line x1="360" y1="14" x2="360" y2="188" stroke="#34d399" stroke-width="2" stroke-dasharray="6,5"/>
                    <text x="360" y="206" text-anchor="middle" fill="#34d399" font-size="12.5" font-weight="700">płaszczyzna lustra</text>

                    <!-- LEWY: (R)-butan-2-ol -->
                    <line x1="185" y1="106" x2="185" y2="48" stroke="#e2e8f0" stroke-width="2.5"/>
                    <line x1="185" y1="106" x2="118" y2="145" stroke="#e2e8f0" stroke-width="2.5"/>
                    <polygon points="185,106 254,97 254,115" fill="#f87171"/>
                    <!-- Klin przerywany H (4) -->
                    <line x1="196" y1="121" x2="203" y2="116" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="202" y1="130" x2="212" y2="123" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="208" y1="139" x2="221" y2="130" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="214" y1="148" x2="230" y2="137" stroke="#94a3b8" stroke-width="2"/>
                    <circle cx="185" cy="106" r="17" fill="#1e293b" stroke="#38bdf8" stroke-width="2.4"/>
                    <text x="185" y="112" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="700">C*</text>
                    <text x="195" y="38" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700">CH₃ <tspan fill="#38bdf8">(3)</tspan></text>
                    <text x="80" y="154" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700"><tspan fill="#38bdf8">(2)</tspan> C₂H₅</text>
                    <text x="285" y="111" text-anchor="middle" fill="#f87171" font-size="14" font-weight="700">OH (1)</text>
                    <text x="235" y="166" text-anchor="middle" fill="#94a3b8" font-size="13" font-weight="600">H (4)</text>
                    <!-- Łuk 1 -> 2 -> 3 zgodnie z zegarem -->
                    <path d="M 248 134 A 72 72 0 1 1 160 44" fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="4,3"/>
                    <polygon points="164,42 152,41 158,52" fill="#34d399"/>
                    <text x="175" y="190" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="700">(R)-butan-2-ol</text>
                    <text x="175" y="207" text-anchor="middle" fill="#34d399" font-size="12">1 → 2 → 3: zgodnie ze wskazówkami</text>

                    <!-- PRAWY: (S)-butan-2-ol -->
                    <line x1="535" y1="106" x2="535" y2="48" stroke="#e2e8f0" stroke-width="2.5"/>
                    <line x1="535" y1="106" x2="602" y2="145" stroke="#e2e8f0" stroke-width="2.5"/>
                    <polygon points="535,106 466,97 466,115" fill="#f87171"/>
                    <!-- Klin przerywany H (4) -->
                    <line x1="524" y1="121" x2="517" y2="116" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="518" y1="130" x2="508" y2="123" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="512" y1="139" x2="499" y2="130" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="506" y1="148" x2="490" y2="137" stroke="#94a3b8" stroke-width="2"/>
                    <circle cx="535" cy="106" r="17" fill="#1e293b" stroke="#38bdf8" stroke-width="2.4"/>
                    <text x="535" y="112" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="700">C*</text>
                    <text x="525" y="38" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700"><tspan fill="#38bdf8">(3)</tspan> CH₃</text>
                    <text x="640" y="154" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700">C₂H₅ <tspan fill="#38bdf8">(2)</tspan></text>
                    <text x="435" y="111" text-anchor="middle" fill="#f87171" font-size="14" font-weight="700">(1) HO</text>
                    <text x="485" y="166" text-anchor="middle" fill="#94a3b8" font-size="13" font-weight="600">(4) H</text>
                    <!-- Łuk 1 -> 2 -> 3 przeciwnie do zegara -->
                    <path d="M 472 134 A 72 72 0 1 0 560 44" fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="4,3"/>
                    <polygon points="556,42 568,41 562,52" fill="#34d399"/>
                    <text x="545" y="190" text-anchor="middle" fill="#f8fafc" font-size="14" font-weight="700">(S)-butan-2-ol</text>
                    <text x="545" y="207" text-anchor="middle" fill="#34d399" font-size="12">1 → 2 → 3: przeciwnie do wskazówek</text>

                    <!-- Legenda -->
                    <line x1="16" y1="222" x2="704" y2="222" stroke="rgba(255,255,255,0.1)"/>
                    <text x="360" y="241" text-anchor="middle" fill="#94a3b8" font-size="11.5">Legenda: linia ciągła = w płaszczyźnie kartki  |  klin pełny = przed kartką (do nas)  |  klin przerywany = za kartką (od nas)</text>
                </svg>
                <div style="font-size:12px; color:#94a3b8; margin-top:6px;"><em>Rys. 4. Enancjomery butan-2-olu we wzorach perspektywicznych (klinowych).</em></div>
            </div>

            <h4>B. Projekcja Fischera, szereg D / L i szybka reguła R / S</h4>
            <ul class="note-list">
                <li><strong>Zasady Fischera:</strong> Przecięcie linii = C*. <strong>Linia pionowa</strong> = łańcuch główny skierowany <strong>za kartkę</strong> (na górze C o najniższym lokancie / najbardziej utleniony, np. –CHO, –COOH). <strong>Linie poziome</strong> = podstawniki skierowane <strong>przed kartkę (do nas)</strong>.</li>
                <li><strong>Dozwolone przekształcenia:</strong> Obrót w płaszczyźnie kartki o <strong>180&deg;</strong> daje ten sam izomer; obrót o 90&deg; lub pojedyncza zamiana 2 podstawników daje przeciwny enancjomer (dwie zamiany przywracają ten sam izomer).</li>
                <li><strong>Reguła błyskawiczna R/S w projekcji Fischera:</strong> Gdy podstawnik (4) jest <strong>pionowo</strong> &rarr; czytamy 1&rarr;2&rarr;3 bezpośrednio (zgodnie = R). Gdy podstawnik (4) jest <strong>poziomo</strong> (najczęściej!) &rarr; wynik <strong>ODWRACAMY</strong> (zgodnie = S, przeciwnie = R).<br>
                <em>Przykład (kwas L-mlekowy):</em> góra –COOH (2), lewo –OH (1), prawo –H (4), dół –CH<sub>3</sub> (3). Łuk 1&rarr;2&rarr;3 jest zgodny ze wskazówkami zegara, ale –H jest poziomo &rarr; konfiguracja <strong>(S)</strong>.</li>
            </ul>

            <!-- RYS. 5: PROJEKCJA FISCHERA I D/L -->
            <div style="background:#0f172a; border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:12px; margin:14px 0; text-align:center;">
                <svg viewBox="0 0 720 230" style="width:100%; max-width:700px; height:auto; display:block; margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Lewa ramka: sens przestrzenny -->
                    <rect x="8" y="8" width="318" height="214" rx="10" fill="#1e293b" stroke="rgba(56,189,248,0.28)"/>
                    <text x="167" y="30" text-anchor="middle" fill="#38bdf8" font-size="13.5" font-weight="700">Sens przestrzenny projekcji Fischera</text>
                    <!-- Kliny -->
                    <line x1="88" y1="68" x2="88" y2="104" stroke="#94a3b8" stroke-width="2.4" stroke-dasharray="4,4"/>
                    <line x1="88" y1="126" x2="88" y2="162" stroke="#94a3b8" stroke-width="2.4" stroke-dasharray="4,4"/>
                    <polygon points="88,115 44,107 44,123" fill="#34d399"/>
                    <polygon points="88,115 132,107 132,123" fill="#34d399"/>
                    <circle cx="88" cy="115" r="6" fill="#38bdf8"/>
                    <text x="88" y="59" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">a (C1)</text>
                    <text x="88" y="180" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">c</text>
                    <text x="32" y="120" text-anchor="middle" fill="#34d399" font-size="13.5" font-weight="700">d</text>
                    <text x="144" y="120" text-anchor="middle" fill="#34d399" font-size="13.5" font-weight="700">b</text>
                    <!-- Strzałka -->
                    <line x1="158" y1="115" x2="194" y2="115" stroke="#38bdf8" stroke-width="2.4"/>
                    <polygon points="200,115 190,109 190,121" fill="#38bdf8"/>
                    <!-- Krzyż Fischera -->
                    <line x1="256" y1="68" x2="256" y2="162" stroke="#e2e8f0" stroke-width="2.4"/>
                    <line x1="214" y1="115" x2="298" y2="115" stroke="#34d399" stroke-width="2.4"/>
                    <text x="256" y="59" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">a (C1)</text>
                    <text x="256" y="180" text-anchor="middle" fill="#f8fafc" font-size="13" font-weight="700">c</text>
                    <text x="204" y="120" text-anchor="middle" fill="#34d399" font-size="13.5" font-weight="700">d</text>
                    <text x="308" y="120" text-anchor="middle" fill="#34d399" font-size="13.5" font-weight="700">b</text>
                    <text x="167" y="208" text-anchor="middle" fill="#94a3b8" font-size="11.5">poziome = do nas  •  pionowe = za kartkę</text>

                    <!-- Prawa ramka: D / L aldehyd glicerynowy -->
                    <rect x="338" y="8" width="374" height="214" rx="10" fill="#1e293b" stroke="rgba(248,113,113,0.28)"/>
                    <text x="525" y="30" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700">Konfiguracja względna D / L (aldehyd glicerynowy)</text>
                    <line x1="525" y1="45" x2="525" y2="178" stroke="#64748b" stroke-width="1.6" stroke-dasharray="5,4"/>

                    <!-- D-glicerynowy -->
                    <line x1="430" y1="66" x2="430" y2="152" stroke="#e2e8f0" stroke-width="2.4"/>
                    <line x1="390" y1="109" x2="466" y2="109" stroke="#e2e8f0" stroke-width="2.4"/>
                    <text x="430" y="58" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700">CHO</text>
                    <text x="430" y="170" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700">CH₂OH</text>
                    <text x="378" y="114" text-anchor="middle" fill="#94a3b8" font-size="13.5" font-weight="600">H</text>
                    <rect x="468" y="96" width="38" height="26" rx="5" fill="rgba(56,189,248,0.16)" stroke="#38bdf8" stroke-width="1.6"/>
                    <text x="487" y="114" text-anchor="middle" fill="#38bdf8" font-size="13.5" font-weight="700">OH</text>
                    <text x="430" y="194" text-anchor="middle" fill="#38bdf8" font-size="12.5" font-weight="700">aldehyd D-glicerynowy</text>
                    <text x="430" y="211" text-anchor="middle" fill="#cbd5e1" font-size="11">–OH po prawej (dexter) • (R)</text>

                    <!-- L-glicerynowy -->
                    <line x1="620" y1="66" x2="620" y2="152" stroke="#e2e8f0" stroke-width="2.4"/>
                    <line x1="584" y1="109" x2="660" y2="109" stroke="#e2e8f0" stroke-width="2.4"/>
                    <text x="620" y="58" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700">CHO</text>
                    <text x="620" y="170" text-anchor="middle" fill="#f8fafc" font-size="13.5" font-weight="700">CH₂OH</text>
                    <rect x="544" y="96" width="38" height="26" rx="5" fill="rgba(248,113,113,0.16)" stroke="#f87171" stroke-width="1.6"/>
                    <text x="563" y="114" text-anchor="middle" fill="#f87171" font-size="13.5" font-weight="700">HO</text>
                    <text x="672" y="114" text-anchor="middle" fill="#94a3b8" font-size="13.5" font-weight="600">H</text>
                    <text x="620" y="194" text-anchor="middle" fill="#f87171" font-size="12.5" font-weight="700">aldehyd L-glicerynowy</text>
                    <text x="620" y="211" text-anchor="middle" fill="#cbd5e1" font-size="11">–OH po lewej (laevus) • (S)</text>
                </svg>
                <div style="font-size:12px; color:#94a3b8; margin-top:6px;"><em>Rys. 5. Projekcja Fischera i wzorzec konfiguracji względnej D/L (w cukrach decyduje ostatnie C*).</em></div>
            </div>

            <h4>C. Czynność optyczna i pomiar w polarymetrze</h4>
            <p><strong>Czynność optyczna</strong> to zdolność substancji chiralnej do skręcania płaszczyzny światła spolaryzowanego liniowo o kąt &alpha; w prawo <strong>(+)</strong> lub w lewo <strong>(&minus;)</strong>, mierzona w <strong>polarymetrze</strong>.</p>

            <!-- RYS. 6: POLARYMETR -->
            <div style="background:#0f172a; border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:12px; margin:14px 0; text-align:center;">
                <svg viewBox="0 0 720 175" style="width:100%; max-width:700px; height:auto; display:block; margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Oś promienia -->
                    <line x1="72" y1="88" x2="626" y2="88" stroke="#64748b" stroke-width="2"/>
                    <!-- Źródło -->
                    <circle cx="48" cy="88" r="22" fill="rgba(251,191,36,0.18)" stroke="#fbbf24" stroke-width="2.2"/>
                    <text x="48" y="92" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="700">Źródło</text>
                    <text x="48" y="130" text-anchor="middle" fill="#94a3b8" font-size="11">światło</text>
                    <text x="48" y="144" text-anchor="middle" fill="#94a3b8" font-size="11">niespolaryz.</text>
                    <!-- Gwiazdka drgań -->
                    <g stroke="#fbbf24" stroke-width="2">
                        <line x1="112" y1="64" x2="112" y2="112"/>
                        <line x1="88" y1="88" x2="136" y2="88"/>
                        <line x1="95" y1="71" x2="129" y2="105"/>
                        <line x1="129" y1="71" x2="95" y2="105"/>
                    </g>
                    <!-- Polaryzator -->
                    <ellipse cx="176" cy="88" rx="15" ry="42" fill="rgba(56,189,248,0.14)" stroke="#38bdf8" stroke-width="2.2"/>
                    <line x1="176" y1="56" x2="176" y2="120" stroke="#38bdf8" stroke-width="2.4"/>
                    <text x="176" y="34" text-anchor="middle" fill="#38bdf8" font-size="12.5" font-weight="700">Polaryzator</text>
                    <!-- Płaszczyzna pionowa -->
                    <line x1="238" y1="58" x2="238" y2="118" stroke="#38bdf8" stroke-width="2.4"/>
                    <polygon points="238,52 232,64 244,64" fill="#38bdf8"/>
                    <polygon points="238,124 232,112 244,112" fill="#38bdf8"/>
                    <text x="238" y="142" text-anchor="middle" fill="#cbd5e1" font-size="11">płaszczyzna</text>
                    <text x="238" y="156" text-anchor="middle" fill="#cbd5e1" font-size="11">pionowa (0°)</text>
                    <!-- Rurka z roztworem -->
                    <rect x="282" y="62" width="154" height="52" rx="10" fill="rgba(52,211,153,0.14)" stroke="#34d399" stroke-width="2.2"/>
                    <text x="359" y="84" text-anchor="middle" fill="#34d399" font-size="12.5" font-weight="700">Rurka z roztworem</text>
                    <text x="359" y="102" text-anchor="middle" fill="#cbd5e1" font-size="11.5">substancji chiralnej</text>
                    <text x="359" y="45" text-anchor="middle" fill="#94a3b8" font-size="11.5">skręcanie płaszczyzny</text>
                    <!-- Odchylona płaszczyzna -->
                    <line x1="490" y1="54" x2="490" y2="122" stroke="#64748b" stroke-width="1.4" stroke-dasharray="4,3"/>
                    <line x1="471" y1="115" x2="509" y2="61" stroke="#f87171" stroke-width="2.5"/>
                    <polygon points="513,56 502,62 511,69" fill="#f87171"/>
                    <polygon points="467,120 478,114 469,107" fill="#f87171"/>
                    <path d="M 490 66 A 22 22 0 0 1 502 70" fill="none" stroke="#fbbf24" stroke-width="1.8"/>
                    <text x="526" y="79" text-anchor="middle" fill="#f87171" font-size="13" font-weight="700">+α</text>
                    <text x="490" y="142" text-anchor="middle" fill="#f87171" font-size="11">odchylona o kąt α</text>
                    <!-- Analizator -->
                    <ellipse cx="566" cy="88" rx="15" ry="42" fill="rgba(248,113,113,0.14)" stroke="#f87171" stroke-width="2.2"/>
                    <line x1="556" y1="116" x2="576" y2="60" stroke="#f87171" stroke-width="2.4"/>
                    <text x="566" y="34" text-anchor="middle" fill="#f87171" font-size="12.5" font-weight="700">Analizator</text>
                    <!-- Obserwator (oko) -->
                    <path d="M 628 88 Q 656 66 684 88 Q 656 110 628 88 Z" fill="#1e293b" stroke="#e2e8f0" stroke-width="2.2"/>
                    <circle cx="656" cy="88" r="9" fill="#38bdf8"/>
                    <circle cx="656" cy="88" r="4" fill="#0f172a"/>
                    <text x="656" y="128" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">Obserwator</text>
                    <text x="656" y="144" text-anchor="middle" fill="#94a3b8" font-size="11">odczyt (+) / (−)</text>
                </svg>
                <div style="font-size:12px; color:#94a3b8; margin-top:6px;"><em>Rys. 6. Schemat działania polarymetru.</em></div>
            </div>

            <div class="note-alert danger">
                🔥 <strong>Kluczowe rozróżnienie:</strong> Oznaczenia <strong>D/L</strong> i <strong>R/S</strong> opisują geometrię 3D (z teorii/reguł), natomiast kierunek skręcania światła <strong>(+)/(−)</strong> wyznacza się <strong>wyłącznie doświadczalnie</strong>! Przykład: D-glukoza jest prawoskrętna (+), ale D-fruktoza jest lewoskrętna (&minus;).
            </div>

            <h4>D. Wiele centrów chiralności: enancjomery, diastereoizomery, odmiana mezo i racemat</h4>
            <p>Maksymalna liczba stereoizomerów optycznych dla <em>n</em> centrów chiralności wynosi <strong>2<sup>n</sup></strong> (gdy centra są nierównocenne). Gdy centra są równocenne (np. butano-2,3-diol, kwas winowy), pojawia się <strong>achiralna i optycznie nieczynna odmiana mezo</strong> z wewnętrzną płaszczyzną symetrii &sigma; (kompensacja wewnętrzna). <strong>Mieszanina racemiczna (racemat, &plusmn;)</strong> to równomolowa (1:1) mieszanina obu enancjomerów – optycznie nieczynna na skutek kompensacji zewnętrznej (&alpha; = 0&deg;).</p>

            <!-- RYS. 7: RÓWNOCENNE VS NIERÓWNOCENNE C* -->
            <div style="background:#0f172a; border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:12px; margin:14px 0; text-align:center;">
                <svg viewBox="0 0 720 265" style="width:100%; max-width:700px; height:auto; display:block; margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
                    <!-- Lewa ramka: butano-2,3-diol -->
                    <rect x="6" y="6" width="346" height="252" rx="10" fill="#1e293b" stroke="rgba(52,211,153,0.28)"/>
                    <text x="179" y="27" text-anchor="middle" fill="#34d399" font-size="13" font-weight="700">Równocenne C*: butano-2,3-diol (3 stereoizomery)</text>

                    <!-- (2S,3S) -->
                    <line x1="65" y1="58" x2="65" y2="162" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="36" y1="88" x2="94" y2="88" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="36" y1="132" x2="94" y2="132" stroke="#e2e8f0" stroke-width="2.2"/>
                    <text x="65" y="51" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">CH₃</text>
                    <text x="65" y="177" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">CH₃</text>
                    <text x="27" y="92" text-anchor="middle" fill="#94a3b8" font-size="12">H</text>
                    <text x="108" y="92" text-anchor="middle" fill="#34d399" font-size="12" font-weight="700">OH</text>
                    <text x="23" y="136" text-anchor="middle" fill="#34d399" font-size="12" font-weight="700">HO</text>
                    <text x="103" y="136" text-anchor="middle" fill="#94a3b8" font-size="12">H</text>
                    <text x="65" y="198" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">(2S,3S)</text>

                    <!-- Lustro -->
                    <line x1="126" y1="54" x2="126" y2="176" stroke="#64748b" stroke-width="1.4" stroke-dasharray="4,4"/>

                    <!-- (2R,3R) -->
                    <line x1="184" y1="58" x2="184" y2="162" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="155" y1="88" x2="213" y2="88" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="155" y1="132" x2="213" y2="132" stroke="#e2e8f0" stroke-width="2.2"/>
                    <text x="184" y="51" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">CH₃</text>
                    <text x="184" y="177" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">CH₃</text>
                    <text x="142" y="92" text-anchor="middle" fill="#34d399" font-size="12" font-weight="700">HO</text>
                    <text x="222" y="92" text-anchor="middle" fill="#94a3b8" font-size="12">H</text>
                    <text x="146" y="136" text-anchor="middle" fill="#94a3b8" font-size="12">H</text>
                    <text x="227" y="136" text-anchor="middle" fill="#34d399" font-size="12" font-weight="700">OH</text>
                    <text x="184" y="198" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">(2R,3R)</text>
                    <text x="125" y="220" text-anchor="middle" fill="#34d399" font-size="12" font-weight="700">para enancjomerów</text>
                    <text x="125" y="236" text-anchor="middle" fill="#94a3b8" font-size="11">(czynne optycznie)</text>

                    <!-- Separator przed mezo -->
                    <line x1="244" y1="42" x2="244" y2="245" stroke="rgba(255,255,255,0.1)"/>

                    <!-- Odmiana mezo -->
                    <line x1="296" y1="58" x2="296" y2="162" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="268" y1="88" x2="324" y2="88" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="268" y1="132" x2="324" y2="132" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="254" y1="110" x2="342" y2="110" stroke="#f87171" stroke-width="2" stroke-dasharray="5,3"/>
                    <text x="336" y="104" text-anchor="middle" fill="#f87171" font-size="13" font-weight="700">σ</text>
                    <text x="296" y="51" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">CH₃</text>
                    <text x="296" y="177" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">CH₃</text>
                    <text x="260" y="92" text-anchor="middle" fill="#94a3b8" font-size="12">H</text>
                    <text x="336" y="92" text-anchor="middle" fill="#34d399" font-size="12" font-weight="700">OH</text>
                    <text x="260" y="136" text-anchor="middle" fill="#94a3b8" font-size="12">H</text>
                    <text x="336" y="136" text-anchor="middle" fill="#34d399" font-size="12" font-weight="700">OH</text>
                    <text x="296" y="198" text-anchor="middle" fill="#f87171" font-size="12" font-weight="700">odmiana mezo</text>
                    <text x="296" y="216" text-anchor="middle" fill="#f87171" font-size="11">achiralna (2R,3S)</text>
                    <text x="296" y="234" text-anchor="middle" fill="#94a3b8" font-size="11">diastereoizomer</text>

                    <!-- Prawa ramka: 2,3-dichloropentan -->
                    <rect x="362" y="6" width="352" height="252" rx="10" fill="#1e293b" stroke="rgba(56,189,248,0.28)"/>
                    <text x="538" y="27" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="700">Nierównocenne C*: 2,3-dichloropentan (4 stereoizomery)</text>

                    <!-- I -->
                    <line x1="406" y1="58" x2="406" y2="162" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="382" y1="88" x2="430" y2="88" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="382" y1="132" x2="430" y2="132" stroke="#e2e8f0" stroke-width="2.2"/>
                    <text x="406" y="51" text-anchor="middle" fill="#f8fafc" font-size="11.5" font-weight="700">CH₃</text>
                    <text x="406" y="177" text-anchor="middle" fill="#f8fafc" font-size="11.5" font-weight="700">C₂H₅</text>
                    <text x="374" y="92" text-anchor="middle" fill="#94a3b8" font-size="11.5">H</text>
                    <text x="439" y="92" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">Cl</text>
                    <text x="374" y="136" text-anchor="middle" fill="#94a3b8" font-size="11.5">H</text>
                    <text x="439" y="136" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">Cl</text>
                    <text x="406" y="198" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">I</text>

                    <line x1="452" y1="54" x2="452" y2="176" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4,4"/>

                    <!-- II -->
                    <line x1="496" y1="58" x2="496" y2="162" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="472" y1="88" x2="520" y2="88" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="472" y1="132" x2="520" y2="132" stroke="#e2e8f0" stroke-width="2.2"/>
                    <text x="496" y="51" text-anchor="middle" fill="#f8fafc" font-size="11.5" font-weight="700">CH₃</text>
                    <text x="496" y="177" text-anchor="middle" fill="#f8fafc" font-size="11.5" font-weight="700">C₂H₅</text>
                    <text x="463" y="92" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">Cl</text>
                    <text x="528" y="92" text-anchor="middle" fill="#94a3b8" font-size="11.5">H</text>
                    <text x="463" y="136" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">Cl</text>
                    <text x="528" y="136" text-anchor="middle" fill="#94a3b8" font-size="11.5">H</text>
                    <text x="496" y="198" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">II</text>

                    <line x1="540" y1="44" x2="540" y2="195" stroke="rgba(255,255,255,0.1)"/>

                    <!-- III -->
                    <line x1="582" y1="58" x2="582" y2="162" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="558" y1="88" x2="606" y2="88" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="558" y1="132" x2="606" y2="132" stroke="#e2e8f0" stroke-width="2.2"/>
                    <text x="582" y="51" text-anchor="middle" fill="#f8fafc" font-size="11.5" font-weight="700">CH₃</text>
                    <text x="582" y="177" text-anchor="middle" fill="#f8fafc" font-size="11.5" font-weight="700">C₂H₅</text>
                    <text x="550" y="92" text-anchor="middle" fill="#94a3b8" font-size="11.5">H</text>
                    <text x="615" y="92" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">Cl</text>
                    <text x="549" y="136" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">Cl</text>
                    <text x="614" y="136" text-anchor="middle" fill="#94a3b8" font-size="11.5">H</text>
                    <text x="582" y="198" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">III</text>

                    <line x1="628" y1="54" x2="628" y2="176" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4,4"/>

                    <!-- IV -->
                    <line x1="670" y1="58" x2="670" y2="162" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="646" y1="88" x2="694" y2="88" stroke="#e2e8f0" stroke-width="2.2"/>
                    <line x1="646" y1="132" x2="694" y2="132" stroke="#e2e8f0" stroke-width="2.2"/>
                    <text x="670" y="51" text-anchor="middle" fill="#f8fafc" font-size="11.5" font-weight="700">CH₃</text>
                    <text x="670" y="177" text-anchor="middle" fill="#f8fafc" font-size="11.5" font-weight="700">C₂H₅</text>
                    <text x="637" y="92" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">Cl</text>
                    <text x="702" y="92" text-anchor="middle" fill="#94a3b8" font-size="11.5">H</text>
                    <text x="638" y="136" text-anchor="middle" fill="#94a3b8" font-size="11.5">H</text>
                    <text x="703" y="136" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700">Cl</text>
                    <text x="670" y="198" text-anchor="middle" fill="#f8fafc" font-size="12" font-weight="700">IV</text>

                    <text x="538" y="222" text-anchor="middle" fill="#34d399" font-size="12" font-weight="700">Enancjomery: (I i II) oraz (III i IV)</text>
                    <text x="538" y="241" text-anchor="middle" fill="#f87171" font-size="11.5">Diastereoizomery: (I i III), (I i IV), (II i III), (II i IV)</text>
                </svg>
                <div style="font-size:12px; color:#94a3b8; margin-top:6px;"><em>Rys. 7. Związki z równocennymi C* (obecność odmiany mezo) i nierównocennymi C* (4 stereoizomery).</em></div>
            </div>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Właściwość</th>
                            <th>Enancjomery (odbicia lustrzane)</th>
                            <th>Diastereoizomery (niebędące odbiciami, w tym cis–trans i mezo)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>t<sub>t</sub>, t<sub>w</sub>, gęstość, rozpuszczalność</strong></td>
                            <td><strong>Identyczne</strong> (nie da się rozdzielić zwykłą destylacją ani krystalizacją).</td>
                            <td><strong>Różne</strong> (można rozdzielać klasyczną krystalizacją, destylacją, chromatografią).</td>
                        </tr>
                        <tr>
                            <td><strong>Czynność optyczna</strong></td>
                            <td>Taka sama wartość |&alpha;|, ale <strong>przeciwne znaki</strong>: (+) i (&minus;).</td>
                            <td>Różne wartości &alpha; (odmiany <em>mezo</em> i <em>cis–trans</em> bez C* są optycznie nieczynne).</td>
                        </tr>
                        <tr>
                            <td><strong>Reaktywność</strong></td>
                            <td>Identyczna z odczynnikami achiralnymi; <strong>różna ze środowiskiem chiralnym</strong> (receptory, enzymy, zapach, działanie leków).</td>
                            <td><strong>Różna</strong> zarówno z odczynnikami achiralnymi, jak i chiralnymi.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- SEKCJA 8 -->
        <div class="note-section">
            <h3>8. Właściwości Fizyczne – Szeregi Homologiczne i Izomery</h3>
            <p>O temperaturach wrzenia (t<sub>w</sub>), topnienia (t<sub>t</sub>) i rozpuszczalności decydują oddziaływania międzycząsteczkowe: <strong>siły dyspersyjne Londona &lt; oddziaływania dipol–dipol &lt; wiązania wodorowe</strong>.</p>
            <ul class="note-list">
                <li><strong>W szeregu homologicznym:</strong> Ze wzrostem długości łańcucha (masy molowej) <strong>rosną t<sub>w</sub> i t<sub>t</sub></strong> (silniejsze oddziaływania van der Waalsa; alkany: C<sub>1</sub>–C<sub>4</sub> gazy, C<sub>5</sub>–C<sub>15</sub> ciecze, &ge;C<sub>16</sub> ciała stałe). Jednocześnie dla związków polarnych (–OH, –COOH, –NH<sub>2</sub>) <strong>rozpuszczalność w wodzie maleje</strong> (rośnie udział hydrofobowego łańcucha).</li>
            </ul>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Porównywane izomery</th>
                            <th>Przykład</th>
                            <th>Zależność i uzasadnienie maturalne</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Szkieletowe</strong><br>(prosty vs rozgałęziony)</td>
                            <td><em>n</em>-pentan (t<sub>w</sub> = 36,1&deg;C) &gt; 2-metylobutan (27,8&deg;C) &gt; 2,2-dimetylopropan (9,5&deg;C)</td>
                            <td>Rozgałęzienie <strong>obniża t<sub>w</sub></strong> (kulisty kształt = mniejsza powierzchnia kontaktu = słabsze siły dyspersyjne). Bardzo symetryczny izomer ma jednak wyższą t<sub>t</sub> (lepsze upakowanie w krysztale).</td>
                        </tr>
                        <tr>
                            <td><strong>Funkcyjne</strong><br>(alkohol vs eter)</td>
                            <td>etanol (t<sub>w</sub> = 78,4&deg;C) &gt;&gt; eter dimetylowy (&minus;24,8&deg;C)</td>
                            <td>Etanol tworzy międzycząsteczkowe <strong>wiązania wodorowe</strong> (grupa –OH), a eter nie ma atomu H związanego z O (nie tworzy własnych wiązań wodorowych).</td>
                        </tr>
                        <tr>
                            <td><strong>Funkcyjne</strong><br>(kwas vs ester)</td>
                            <td>kwas propanowy (141&deg;C) &gt;&gt; etanian metylu (57&deg;C)</td>
                            <td>Kwasy karboksylowe tworzą trwałe <strong>dimery</strong> połączone dwoma wiązaniami wodorowymi.</td>
                        </tr>
                        <tr>
                            <td><strong>Geometryczne</strong><br>(<em>cis</em> vs <em>trans</em>)</td>
                            <td><em>cis</em>-but-2-en (t<sub>w</sub> = 3,7&deg;C; t<sub>t</sub> = &minus;138,9&deg;C)<br><em>trans</em>-but-2-en (t<sub>w</sub> = 0,9&deg;C; t<sub>t</sub> = &minus;105,6&deg;C)</td>
                            <td>Izomer <strong>cis</strong> ma zwykle wyższą <strong>t<sub>w</sub></strong> (polarny, &mu; &gt; 0 &rarr; dipol–dipol). Izomer <strong>trans</strong> ma zwykle wyższą <strong>t<sub>t</sub></strong> (symetria &rarr; ściślejsze upakowanie w sieci krystalicznej).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- SEKCJA 9 -->
        <div class="note-section">
            <h3>9. Klasyfikacja i Mechanizmy Reakcji Organicznych</h3>

            <h4>A. Rozrywanie wiązań, elektrofile i nukleofile</h4>
            <ul class="note-list">
                <li><strong>Rozpad homolityczny (A:B &rarr; A&bull; + B&bull;):</strong> Pod wpływem światła (<em>h&nu;</em>) lub T powstają elektrycznie obojętne, bardzo reaktywne <strong>wolne rodniki</strong>.</li>
                <li><strong>Rozpad heterolityczny (A:B &rarr; A<sup>+</sup> + :B<sup>&minus;</sup>):</strong> Powstają jony – <strong>karbokationy</strong> (R<sub>3</sub>C<sup>+</sup>, płaskie sp<sup>2</sup> z luką elektronową) lub <strong>karboaniony</strong> (R<sub>3</sub>C:<sup>&minus;</sup>).</li>
                <li><strong>Elektrofil (E<sup>+</sup>, kwas Lewisa):</strong> Akceptor pary elektronowej, atakuje miejsca bogate w elektrony (&pi;, benzen); np. H<sup>+</sup>, NO<sub>2</sub><sup>+</sup>, Br<sup>+</sup>, R<sub>3</sub>C<sup>+</sup>, AlCl<sub>3</sub>.</li>
                <li><strong>Nukleofil (Nu<sup>&minus;</sup> / Nu:, zasada Lewisa):</strong> Donor pary elektronowej, atakuje atomy C<sup>&delta;+</sup>; np. OH<sup>&minus;</sup>, Cl<sup>&minus;</sup>, Br<sup>&minus;</sup>, CN<sup>&minus;</sup>, H<sub>2</sub>O:, :NH<sub>3</sub>.</li>
                <li><strong>Szereg trwałości karbokationów i rodników:</strong> <strong>III&deg; &gt; II&deg; &gt; I&deg; &gt; CH<sub>3</sub><sup>+</sup></strong> (efekt indukcyjny +<em>I</em> grup alkilowych – wyjaśnia regułę Markownikowa i selektywność substytucji rodnikowej!).</li>
            </ul>

            <h4>B. Klasyfikacja reakcji ze względu na typ procesu</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Typ procesu</th>
                            <th>Istota przemiany</th>
                            <th>Przykładowe równanie</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Substytucja (S)</strong></td>
                            <td>Wymiana atomu/grupy na inny atom/grupę; stopień nasycenia bez zmian.</td>
                            <td>CH<sub>4</sub> + Cl<sub>2</sub> &mdash;(<em>h&nu;</em>)&rarr; CH<sub>3</sub>Cl + HCl<br>C<sub>6</sub>H<sub>6</sub> + Br<sub>2</sub> &mdash;(FeBr<sub>3</sub>)&rarr; C<sub>6</sub>H<sub>5</sub>Br + HBr</td>
                        </tr>
                        <tr>
                            <td><strong>Addycja (A)</strong></td>
                            <td>Przyłączenie do wiązania wielokrotnego (pęka &pi;, powstają 2 wiązania &sigma;).</td>
                            <td>CH<sub>2</sub>=CH–CH<sub>3</sub> + HBr &rarr; CH<sub>3</sub>–CH(Br)–CH<sub>3</sub></td>
                        </tr>
                        <tr>
                            <td><strong>Eliminacja (E)</strong></td>
                            <td>Odszczepienie małej cząsteczki (H<sub>2</sub>O, HCl, H<sub>2</sub>) z utworzeniem wiązania &pi;.</td>
                            <td>CH<sub>3</sub>CH<sub>2</sub>Cl + KOH &mdash;(etanol)&rarr; CH<sub>2</sub>=CH<sub>2</sub> + KCl + H<sub>2</sub>O</td>
                        </tr>
                        <tr>
                            <td><strong>Polimeryzacja</strong></td>
                            <td>Wielokrotna addycja nienasyconego monomeru <strong>bez produktu ubocznego</strong>.</td>
                            <td><em>n</em> CH<sub>2</sub>=CH<sub>2</sub> &mdash;(kat., p, T)&rarr; –(–CH<sub>2</sub>–CH<sub>2</sub>–)<sub>n</sub>–</td>
                        </tr>
                        <tr>
                            <td><strong>Kondensacja</strong></td>
                            <td>Łączenie cząsteczek z <strong>wydzieleniem drobnej cząsteczki</strong> (zwykle H<sub>2</sub>O).</td>
                            <td>CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH &#8652; CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>C. Najważniejsze mechanizmy reakcji na maturze</h4>
            <ul class="note-list">
                <li><strong>Substytucja rodnikowa (S<sub>R</sub> – np. chlorowanie alkanów w obecności <em>h&nu;</em>):</strong> 3 etapy – <em>Inicjacja</em> (Cl<sub>2</sub> &rarr; 2 Cl&bull;), <em>Propagacja</em> (CH<sub>4</sub> + Cl&bull; &rarr; &bull;CH<sub>3</sub> + HCl; &bull;CH<sub>3</sub> + Cl<sub>2</sub> &rarr; CH<sub>3</sub>Cl + Cl&bull;), <em>Terminacja</em> (łączenie dwóch rodników, m.in. śladowy etan CH<sub>3</sub>–CH<sub>3</sub>).</li>
                <li><strong>Addycja elektrofilowa (A<sub>E</sub> – alkeny + HBr/Br<sub>2</sub>):</strong> Atak elektrofila (H<sup>+</sup>) prowadzi przez trwalszy karbokation (reguła Markownikowa), a następnie szybki atak nukleofila (Br<sup>&minus;</sup>).</li>
                <li><strong>Substytucja elektrofilowa (S<sub>E</sub> – areny):</strong> Benzen zachowuje trwały sekstet aromatyczny; katalizator (np. FeBr<sub>3</sub>, stęż. H<sub>2</sub>SO<sub>4</sub>) generuje elektrofil (Br<sup>+</sup>, NO<sub>2</sub><sup>+</sup>), powstaje kompleks &sigma;, po czym odszczepia się H<sup>+</sup>.</li>
                <li><strong>Substytucja nukleofilowa (S<sub>N</sub>1 i S<sub>N</sub>2) oraz Eliminacja (E1 i E2):</strong>
                    <br>&bull; <strong>S<sub>N</sub>1:</strong> dwuetapowa przez płaski karbokation (<em>v</em> = <em>k</em>[R–X]), preferuje substraty <strong>III&deg;</strong>, daje <strong>racemizację</strong>.
                    <br>&bull; <strong>S<sub>N</sub>2:</strong> jednoetapowa synchroniczna (<em>v</em> = <em>k</em>[R–X][Nu<sup>&minus;</sup>]), preferuje substraty <strong>I&deg;</strong>, daje <strong>inwersję konfiguracji</strong>.
                    <br>&bull; <strong>E1 / E2:</strong> tworzą wiązanie podwójne (produkt główny wg reguły Zajcewa – bardziej podstawiony alken).
                </li>
                <li><strong>Addycja nukleofilowa (A<sub>N</sub>) i rodnikowa (A<sub>R</sub>):</strong> A<sub>N</sub> zachodzi na spolaryzowanej grupie &gt;C<sup>&delta;+</sup>=O<sup>&delta;&minus;</sup> aldehydów i ketonów; A<sub>R</sub> m.in. w polimeryzacji rodnikowej alkenów.</li>
            </ul>

            <div class="note-alert">
                ✅ <strong>Checklista CKE (najczęstsze pułapki):</strong><br>
                1) Uzasadniając <em>cis–trans</em>, wymień <strong>oba</strong> warunki (brak obrotu + po 2 różne podstawniki przy każdym C).<br>
                2) Przy 2+ centrach C* zawsze sprawdzaj obecność <strong>płaszczyzny symetrii</strong> (odmiana <em>mezo</em> jest achiralna!).<br>
                3) W –COOH i –CHO atom węgla grupy <strong>wlicza się</strong> do łańcucha głównego (lokant 1).<br>
                4) Polimeryzacja nie daje produktu ubocznego; kondensacja zawsze go wydziela (np. H<sub>2</sub>O).
            </div>
        </div>
    </div>
    `,

    notatkiActive: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">🧠 ACTIVE RECALL: WSTĘP DO CHEMII ORGANICZNEJ</h2>
        <p style="text-align: center; color: #94a3b8; font-size: 13px; margin-bottom: 20px;">
            💡 <em>Klikaj na ciemne pola, aby odkryć ukryte pojęcia i wzory, oraz rozwijaj pytania, by sprawdzić swoją wiedzę przed maturą!</em>
        </p>

        <div class="note-section">
            <h3>1. Atom węgla, hybrydyzacja i rzędowość</h3>
            <p>Zdolność atomów węgla do łączenia się w trwałe łańcuchy i pierścienie to <span class="recall-blank" onclick="toggleRecall(this)">katenacja</span>. Teorię witalistyczną obaliła w 1828 r. synteza mocznika przeprowadzona przez <span class="recall-blank" onclick="toggleRecall(this)">Wöhlera</span>.</p>
            <p>W etanie węgiel ma hybrydyzację <span class="recall-blank" onclick="toggleRecall(this)">sp<sup>3</sup> (109,5&deg;)</span>, w etenie <span class="recall-blank" onclick="toggleRecall(this)">sp<sup>2</sup> (120&deg;)</span>, a w etynie <span class="recall-blank" onclick="toggleRecall(this)">sp (180&deg;)</span>.</p>
            <details class="recall-details">
                <summary>Jaką rzędowość mają związki: (CH₃)₃C–OH oraz (CH₃)₃C–NH₂? Wyjaśnij różnicę!</summary>
                <p><strong>(CH<sub>3</sub>)<sub>3</sub>C–OH</strong> to alkohol <strong>III-rzędowy</strong> (rzędowość alkoholu zależy od rzędowości atomu węgla z grupą –OH). Natomiast <strong>(CH<sub>3</sub>)<sub>3</sub>C–NH<sub>2</sub></strong> to amina <strong>I-rzędowa</strong>, ponieważ o rzędowości amin decyduje liczba grup węglowodorowych przyłączonych bezpośrednio do atomu azotu (tu tylko jedna).</p>
            </details>
        </div>

        <div class="note-section">
            <h3>2. Zapis wzorów, szeregi homologiczne i IUPAC</h3>
            <p>Kolejne związki w szeregu homologicznym różnią się od siebie o grupę <span class="recall-blank" onclick="toggleRecall(this)">–CH<sub>2</sub>– (metylenową, 14 g/mol)</span>. Zapis grupy aldehydowej jako –COH jest <span class="recall-blank" onclick="toggleRecall(this)">błędny (poprawnie: –CHO)</span>.</p>
            <details class="recall-details">
                <summary>Podaj nazwy IUPAC: a) CH₃–CH(Cl)–CH₂–CH(OH)–CH₃ &nbsp;|&nbsp; b) CH₃–CH₂–CH(Br)–COOH</summary>
                <ul class="note-list">
                    <li>a) <strong>4-chloropentan-2-ol</strong> (grupa –OH ma wyższy priorytet niż –Cl i wyznacza numerację).</li>
                    <li>b) <strong>kwas 2-bromobutanowy</strong> (atom węgla grupy –COOH wlicza się do łańcucha głównego i zawsze otrzymuje lokant 1).</li>
                </ul>
            </details>
        </div>

        <div class="note-section">
            <h3>3. Izomeria konstytucyjna</h3>
            <p>Izomerami grup funkcyjnych dla alkenów są <span class="recall-blank" onclick="toggleRecall(this)">cykloalkany</span>, dla alkoholi <span class="recall-blank" onclick="toggleRecall(this)">etery</span>, dla aldehydów <span class="recall-blank" onclick="toggleRecall(this)">ketony</span>, a dla kwasów karboksylowych <span class="recall-blank" onclick="toggleRecall(this)">estry</span>.</p>
            <details class="recall-details">
                <summary>Ile łącznie izomerów konstytucyjnych odpowiada wzorowi C₄H₁₀O? Wymień klasy.</summary>
                <p>Łącznie <strong>7 izomerów</strong>: <strong>4 alkohole</strong> (butan-1-ol, butan-2-ol, 2-metylopropan-1-ol, 2-metylopropan-2-ol) oraz <strong>3 etery</strong> (etoksyetan, 1-metoksypropan, 2-metoksypropan).</p>
            </details>
        </div>

        <div class="note-section">
            <h3>4. Izomeria geometryczna (cis–trans i E–Z)</h3>
            <p>W systemie E–Z konfiguracja <strong>Z</strong> (<em>zusammen</em>) oznacza, że oba podstawniki o priorytecie (1) leżą <span class="recall-blank" onclick="toggleRecall(this)">po tej samej stronie płaszczyzny C=C</span>, a <strong>E</strong> (<em>entgegen</em>) – <span class="recall-blank" onclick="toggleRecall(this)">po przeciwnych stronach</span>.</p>
            <details class="recall-details">
                <summary>Dlaczego but-2-en wykazuje izomerię geometryczną, a but-1-en i 2-metylobut-2-en nie?</summary>
                <p>Aby wystąpiła izomeria geometryczna, musi istnieć element usztywniający (wiązanie C=C) <strong>oraz</strong> przy każdym z obu węgli tego wiązania muszą być dwa różne podstawniki. W but-1-enie przy C1 są dwa identyczne atomy H, a w 2-metylobut-2-enie przy C2 są dwie identyczne grupy –CH<sub>3</sub>.</p>
            </details>
        </div>

        <div class="note-section">
            <h3>5. Izomeria optyczna, projekcje Fischera, R/S i mezo</h3>
            <p>W projekcji Fischera wiązania poziome skierowane są <span class="recall-blank" onclick="toggleRecall(this)">przed kartkę (do nas)</span>, a pionowe <span class="recall-blank" onclick="toggleRecall(this)">za kartkę (od nas)</span>. Dozwolony jest obrót całego wzoru w płaszczyźnie kartki o <span class="recall-blank" onclick="toggleRecall(this)">180&deg;</span>.</p>
            <p>Gdy w projekcji Fischera podstawnik o najniższym priorytecie (4) leży na linii poziomej, kierunek 1&rarr;2&rarr;3 <span class="recall-blank" onclick="toggleRecall(this)">odwracamy (zgodnie = S, przeciwnie = R)</span>.</p>
            <details class="recall-details">
                <summary>Czym różni się przyczyna braku czynności optycznej odmiany mezo od mieszaniny racemicznej?</summary>
                <p><strong>Odmiana mezo</strong> jest pojedynczym, achiralnym związkiem z wewnętrzną płaszczyzną symetrii &sigma; – nie skręca światła na skutek <strong>kompensacji wewnętrznej</strong>. <strong>Racemat</strong> to równomolowa (1:1) mieszanina dwóch czynnych optycznie enancjomerów – brak skręcalności wynika z <strong>kompensacji zewnętrznej</strong>.</p>
            </details>
            <details class="recall-details">
                <summary>Czy z symbolu konfiguracji D lub R można wywnioskować, że związek jest prawoskrętny (+)?</summary>
                <p><strong>Nie!</strong> Symbole D/L i R/S określają wyłącznie geometrię przestrzenną z reguł konwencji/CIP. Kierunek skręcania światła (+)/(−) wyznacza się wyłącznie <strong>doświadczalnie</strong> w polarymetrze (np. D-fruktoza jest lewoskrętna).</p>
            </details>
        </div>

        <div class="note-section">
            <h3>6. Właściwości fizyczne i mechanizmy reakcji</h3>
            <p>Wzrost rozgałęzienia łańcucha alkanu powoduje <span class="recall-blank" onclick="toggleRecall(this)">obniżenie temperatury wrzenia</span>. W parze <em>cis/trans</em>-but-2-en wyższą t<sub>w</sub> ma izomer <span class="recall-blank" onclick="toggleRecall(this)">cis</span>, a wyższą t<sub>t</sub> izomer <span class="recall-blank" onclick="toggleRecall(this)">trans</span>.</p>
            <p>Szereg trwałości karbokationów i rodników to: <span class="recall-blank" onclick="toggleRecall(this)">III&deg; &gt; II&deg; &gt; I&deg; &gt; CH<sub>3</sub><sup>+</sup></span>.</p>
            <details class="recall-details">
                <summary>Porównaj mechanizmy S<sub>N</sub>1 i S<sub>N</sub>2 (etapy, preferowana rzędowość substratu, efekt stereochemiczny).</summary>
                <ul class="note-list">
                    <li><strong>S<sub>N</sub>1:</strong> 2 etapy przez płaski karbokation; preferuje substraty <strong>III&deg;</strong>; daje <strong>racemizację</strong>.</li>
                    <li><strong>S<sub>N</sub>2:</strong> 1 etap (synchroniczny atak od strony przeciwnej); preferuje substraty <strong>I&deg;</strong>; daje <strong>inwersję konfiguracji</strong>.</li>
                </ul>
            </details>
        </div>
    </div>
    `,

    zadania: "<h3>Zadania</h3><br>Miejsce na zadania z nazewnictwa IUPAC, izomerii, stereochemii i mechanizmów reakcji...",

    fiszki: [
        {
            front: "Jakie znaczenie historyczne miała synteza Wöhlera (1828) i jaką reakcję przeprowadził?",
            back: "Obaliła teorię witalistyczną („siły życiowej”), pokazując, że związek organiczny można otrzymać z nieorganicznego: NH<sub>4</sub>OCN &rarr; (NH<sub>2</sub>)<sub>2</sub>CO (cyjanian amonu &rarr; mocznik)."
        },
        {
            front: "Czym jest katenacja w chemii organicznej?",
            back: "To zdolność atomów węgla do łączenia się ze sobą trwałymi wiązaniami kowalencyjnymi C–C w długie łańcuchy proste, rozgałęzione oraz pierścienie."
        },
        {
            front: "Jak wyznacza się stopień utlenienia konkretnego atomu węgla metodą wiązań? Podaj stopnie utlenienia C w CH<sub>4</sub>, CH<sub>3</sub>OH i HCOOH.",
            back: "Wiązanie C–H wnosi &minus;1, wiązanie z atomem bardziej elektroujemnym (O, N, X) wnosi +1, a wiązanie C–C wnosi 0. Przykłady: CH<sub>4</sub> (&minus;IV), CH<sub>3</sub>OH (&minus;II), HCOOH (+II)."
        },
        {
            front: "Podaj typ hybrydyzacji, kąt walencyjny, geometrię i rodzaj wiązań atomu węgla w alkanach, alkenach i alkinach.",
            back: "Alkany: sp<sup>3</sup>, 109,5&deg;, tetraedr (4&sigma;). Alkeny: sp<sup>2</sup>, 120&deg;, płaski trójkąt (3&sigma;+1&pi;). Alkiny: sp, 180&deg;, budowa liniowa (2&sigma;+2&pi;)."
        },
        {
            front: "Dlaczego wiązanie podwójne C=C uniemożliwia swobodny obrót, podczas gdy wokół wiązania C–C obrót jest swobodny?",
            back: "Wiązanie &sigma; powstaje przez czołowe nakładanie orbitali (symetryczne względem osi, pozwala na obrót), natomiast wiązanie &pi; tworzy się przez boczne nakładanie orbitali p – obrót wymagałby jego rozerwania."
        },
        {
            front: "Jak wykrywa się doświadczalnie obecność węgla, wodoru i siarki w związku organicznym?",
            back: "C i H: spalanie/CuO (CO<sub>2</sub> mętni wodę wapienną; H<sub>2</sub>O barwi bezwodny CuSO<sub>4</sub> na niebiesko). S: ogrzewanie z NaOH, zakwaszenie HNO<sub>3</sub> i dodanie Pb(NO<sub>3</sub>)<sub>2</sub> &rarr; czarny osad PbS."
        },
        {
            front: "Czym różni się wzór empiryczny od wzoru rzeczywistego? Wyznacz wzór rzeczywisty glukozy (M = 180 g/mol, wzór empiryczny CH<sub>2</sub>O).",
            back: "Empiryczny podaje najprostszy stosunek atomów, a rzeczywisty ich faktyczną liczbę. M<sub>emp</sub>(CH<sub>2</sub>O) = 30 g/mol &rarr; k = 180/30 = 6 &rarr; C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>."
        },
        {
            front: "Jaką rzędowość ma alkohol (CH<sub>3</sub>)<sub>3</sub>C–OH, a jaką amina (CH<sub>3</sub>)<sub>3</sub>C–NH<sub>2</sub>? Dlaczego?",
            back: "(CH<sub>3</sub>)<sub>3</sub>C–OH to alkohol III-rzędowy (grupa –OH przy węglu III&deg;). (CH<sub>3</sub>)<sub>3</sub>C–NH<sub>2</sub> to amina I-rzędowa, bo o rzędowości amin decyduje liczba grup węglowodorowych przy atomie azotu (tu tylko jedna).",
            smiles: "CC(C)(C)N"
        },
        {
            front: "Czym różni się wzór półstrukturalny od wzoru szkieletowego?",
            back: "Półstrukturalny pomija kreski C–H, ale zachowuje symbole C, H i kreski C–C. Szkieletowy pokazuje wyłącznie zygzak wiązań C–C (C są w wierzchołkach, H przy C są domyślne; jawnie wpisuje się heteroatomy i ich H)."
        },
        {
            front: "Jakie błędy zapisu wzorów są najczęściej karane na maturze CKE (np. dla –OH, –CH<sub>3</sub> i grupy aldehydowej)?",
            back: "Błędem jest skierowanie wiązania do złego atomu po lewej stronie łańcucha (poprawnie: HO–CH<sub>2</sub>–, H<sub>3</sub>C–, O<sub>2</sub>N–) oraz zapis grupy aldehydowej jako –COH zamiast –CHO."
        },
        {
            front: "Co to jest szereg homologiczny i czy etanol (CH<sub>3</sub>CH<sub>2</sub>OH) oraz fenol (C<sub>6</sub>H<sub>5</sub>OH) są homologami?",
            back: "Szereg homologiczny to zbiór związków o analogicznej budowie i tym samym wzorze ogólnym, różniących się o grupę –CH<sub>2</sub>–. Etanol i fenol NIE są homologami, bo należą do różnych klas związków."
        },
        {
            front: "Uszereguj według malejącego priorytetu IUPAC grupy: –OH, –COOH, –CHO, –NH<sub>2</sub>, &gt;C=O, –COOR.",
            back: "–COOH (kwasy) &gt; –COOR (estry) &gt; –CHO (aldehydy) &gt; &gt;C=O (ketony) &gt; –OH (alkohole) &gt; –NH<sub>2</sub> (aminy)."
        },
        {
            front: "Podaj nazwę systematyczną IUPAC związku: CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH(C<sub>2</sub>H<sub>5</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>.",
            back: "3-etylo-2-metyloheksan (łańcuch główny C6; numeracja daje najniższe lokanty 2,3; alfabetycznie „etylo” przed „metylo”).",
            smiles: "CCCC(CC)C(C)C"
        },
        {
            front: "Czy przedrostki zwielokrotniające (di-, tri-, tetra-) wpływają na kolejność alfabetyczną podstawników w nazwach IUPAC?",
            back: "Nie. Podstawnik „dimetylo” szereguje się pod literą „m”, więc w nazwie stoi po podstawniku „etylo” (np. 4-etylo-2,2-dimetyloheksan)."
        },
        {
            front: "Podaj nazwę systematyczną IUPAC związku: CH<sub>3</sub>–CH(Cl)–CH<sub>2</sub>–CH(OH)–CH<sub>3</sub>.",
            back: "4-chloropentan-2-ol (grupa –OH ma wyższy priorytet niż –Cl, dlatego wyznacza przyrostek -ol i numerację łańcucha).",
            smiles: "CC(O)CC(Cl)C"
        },
        {
            front: "Jak nazywa się zgodnie z IUPAC ester o wzorze H–COO–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>?",
            back: "Metanian propylu (nazwa zwyczajowa: mrówczan propylu). Pierwszy człon pochodzi od kwasu (metanowego), drugi od alkilu z alkoholu.",
            smiles: "CCCOC=O"
        },
        {
            front: "Wymień trzy główne rodzaje izomerii konstytucyjnej (strukturalnej).",
            back: "Izomeria szkieletowa, izomeria położenia (podstawnika, grupy funkcyjnej lub wiązania wielokrotnego) oraz izomeria grup funkcyjnych."
        },
        {
            front: "Wymień wszystkie 3 izomery szkieletowe o wzorze sumarycznym C<sub>5</sub>H<sub>12</sub>.",
            back: "1) pentan, 2) 2-metylobutan, 3) 2,2-dimetylopropan."
        },
        {
            front: "Podaj pięć najważniejszych par klas związków będących względem siebie izomerami grup funkcyjnych.",
            back: "1) Alkeny &harr; cykloalkany (C<sub>n</sub>H<sub>2n</sub>); 2) Alkiny &harr; alkadieny (C<sub>n</sub>H<sub>2n&minus;2</sub>); 3) Alkohole &harr; etery (C<sub>n</sub>H<sub>2n+2</sub>O); 4) Aldehydy &harr; ketony (C<sub>n</sub>H<sub>2n</sub>O); 5) Kwasy &harr; estry (C<sub>n</sub>H<sub>2n</sub>O<sub>2</sub>)."
        },
        {
            front: "Czym różni się konformacja od konfiguracji?",
            back: "Konformacje to chwilowe kształty tej samej cząsteczki powstające przez swobodny obrót wokół wiązań pojedynczych C–C (nie można ich rozdzielić). Konfiguracje to trwałe, wyodrębnialne stereoizomery, których wzajemna przemiana wymaga rozerwania wiązania."
        },
        {
            front: "Podaj dwa warunki konieczne wystąpienia izomerii geometrycznej (cis–trans / E–Z).",
            back: "1) Obecność wiązania podwójnego C=C (lub pierścienia) uniemożliwiającego swobodny obrót. 2) Obecność dwóch różnych podstawników przy każdym z dwóch atomów węgla wiązania C=C (a &ne; b oraz c &ne; d)."
        },
        {
            front: "Dlaczego but-1-en oraz 2-metylobut-2-en NIE wykazują izomerii geometrycznej?",
            back: "W but-1-enie przy C1 znajdują się dwa identyczne atomy wodoru, a w 2-metylobut-2-enie przy C2 znajdują się dwie identyczne grupy metylowe (–CH<sub>3</sub>).",
            smiles: "CC=C(C)C"
        },
        {
            front: "Jak ustala się pierwszeństwo podstawników według reguł Cahna–Ingolda–Preloga (CIP)?",
            back: "1) Wyższa liczba atomowa Z atomu bezpośrednio przyłączonego do C. 2) Przy remisie analizujemy dalsze sfery atomów do pierwszego punktu różnicy. 3) Wiązanie podwójne traktuje się jak połączenie z 2 atomami, potrójne – z 3."
        },
        {
            front: "Który podstawnik ma wyższy priorytet CIP: –CH<sub>2</sub>OH czy –CH(CH<sub>3</sub>)<sub>2</sub>? Uzasadnij.",
            back: "Grupa –CH<sub>2</sub>OH. Choć ma mniejszą masę molową, jej atom węgla jest połączony ze zbiorem (O, H, H), a w –CH(CH<sub>3</sub>)<sub>2</sub> ze zbiorem (C, C, H). Decyduje pierwszy punkt różnicy: tlen (Z=8) &gt; węgiel (Z=6)."
        },
        {
            front: "Co oznaczają symbole Z oraz E w nazewnictwie izomerów geometrycznych?",
            back: "Z (niem. zusammen – razem): podstawniki o wyższym priorytecie (1) przy obu węglach C=C leżą po tej samej stronie płaszczyzny wiązania. E (niem. entgegen – naprzeciwko): leżą po przeciwnych stronach."
        },
        {
            front: "Co to jest chiralność i jaki jest najczęstszy warunek jej wystąpienia w związku organicznym?",
            back: "Chiralność to niemożność nałożenia cząsteczki na własne odbicie lustrzane (brak płaszczyzny symetrii). Najczęstszą przyczyną jest centrum chiralności C* – atom węgla sp<sup>3</sup> związany z czterema różnymi podstawnikami."
        },
        {
            front: "Co oznaczają linia ciągła, klin pełny i klin przerywany we wzorach perspektywicznych?",
            back: "Linia ciągła: wiązanie w płaszczyźnie kartki. Klin pełny: wiązanie skierowane przed kartkę (do obserwatora). Klin przerywany: wiązanie skierowane za kartkę (od obserwatora)."
        },
        {
            front: "Jakie znaczenie przestrzenne mają linie poziome i pionowe w projekcji Fischera oraz które obroty są dozwolone?",
            back: "Linie poziome wskazują wiązania skierowane przed kartkę (do nas), a pionowe – za kartkę (łańcuch główny, C1 na górze). Dozwolony jest obrót w płaszczyźnie kartki o 180&deg; (obrót o 90&deg; daje przeciwny enancjomer)."
        },
        {
            front: "Jak szybko wyznaczyć konfigurację absolutną (R/S) bezpośrednio z projekcji Fischera?",
            back: "Ustalamy priorytety CIP (1–4) i sprawdzamy kierunek 1&rarr;2&rarr;3. Jeśli (4) jest na linii pionowej: zgodnie = R, przeciwnie = S. Jeśli (4) jest na linii poziomej: wynik ODWRACAMY (zgodnie = S, przeciwnie = R)."
        },
        {
            front: "Czy na podstawie konfiguracji D/L lub R/S można przewidzieć znak skręcalności optycznej (+) lub (&minus;)?",
            back: "Nie. D/L i R/S to konfiguracje wynikające z geometrii i reguł nazewnictwa, natomiast kierunek skręcania światła (+)/(−) wyznacza się wyłącznie doświadczalnie w polarymetrze (np. D-glukoza jest (+), a D-fruktoza (&minus;))."
        },
        {
            front: "Czym jest odmiana mezo? Podaj przykład związku, w którym występuje.",
            back: "To achiralny i optycznie nieczynny stereoizomer posiadający co najmniej dwa równocenne centra chiralności C*, ale mający wewnętrzną płaszczyznę symetrii &sigma; (kompensacja wewnętrzna), np. mezo-butano-2,3-diol lub kwas mezo-winowy.",
            smiles: "CC(O)C(O)C"
        },
        {
            front: "Czym jest mieszanina racemiczna (racemat) i dlaczego jest optycznie nieczynna?",
            back: "To równomolowa (1:1) mieszanina obu enancjomerów danego związku chiralnego. Jest optycznie nieczynna (&alpha; = 0&deg;), ponieważ efekty skręcania światła przez oba enancjomery wzajemnie się znoszą (kompensacja zewnętrzna)."
        },
        {
            front: "Porównaj temperatury wrzenia, rozpuszczalność i reaktywność pary enancjomerów oraz pary diastereoizomerów.",
            back: "Enancjomery mają identyczne t<sub>t</sub>, t<sub>w</sub>, rozpuszczalność i reaktywność z odczynnikami achiralnymi (różnią się kierunkiem skręcania światła i oddziaływaniem z receptorami/enzymami). Diastereoizomery mają różne właściwości fizyczne i chemiczne."
        },
        {
            front: "Jak rozgałęzienie łańcucha węglowego wpływa na temperaturę wrzenia alkanów (np. pentan vs 2,2-dimetylopropan)?",
            back: "Wzrost rozgałęzienia obniża temperaturę wrzenia, ponieważ cząsteczki przyjmują kształt zbliżony do kulistego, co zmniejsza powierzchnię kontaktu i osłabia siły dyspersyjne van der Waalsa."
        },
        {
            front: "Dlaczego etanol (t<sub>w</sub> = 78,4&deg;C) wrze o ponad 100&deg;C wyżej niż jego izomer funkcyjny – eter dimetylowy (&minus;24,8&deg;C)?",
            back: "Cząsteczki etanolu tworzą między sobą silne międzycząsteczkowe wiązania wodorowe (grupa –OH), natomiast eter dimetylowy (CH<sub>3</sub>–O–CH<sub>3</sub>) nie ma atomu H związanego z tlenem i nie tworzy wiązań wodorowych."
        },
        {
            front: "Porównaj temperatury wrzenia i topnienia izomerów cis-but-2-en oraz trans-but-2-en i podaj przyczynę.",
            back: "Izomer cis ma wyższą t<sub>w</sub> (jest polarny, &mu; &gt; 0 &rarr; oddziaływania dipol–dipol). Izomer trans ma wyższą t<sub>t</sub> (bardziej symetryczna budowa ułatwia ścisłe upakowanie w sieci krystalicznej)."
        },
        {
            front: "Czym różni się elektrofil od nukleofila (w ujęciu Lewisa)? Podaj po 3 przykłady.",
            back: "Elektrofil (E<sup>+</sup>, kwas Lewisa) ma niedobór elektronów i jest akceptorem pary elektronowej (np. H<sup>+</sup>, Br<sup>+</sup>, NO<sub>2</sub><sup>+</sup>). Nukleofil (Nu<sup>&minus;</sup>/Nu:, zasada Lewisa) jest donorem pary elektronowej (np. OH<sup>&minus;</sup>, Br<sup>&minus;</sup>, :NH<sub>3</sub>)."
        },
        {
            front: "Podaj szereg trwałości karbokationów i rodników oraz wskaż, jakie reguły z niego wynikają.",
            back: "III&deg; &gt; II&deg; &gt; I&deg; &gt; CH<sub>3</sub><sup>+</sup> (stabilizacja efektem indukcyjnym +I grup alkilowych). Wynika z niego reguła Markownikowa w addycji A<sub>E</sub> oraz kierunek substytucji rodnikowej S<sub>R</sub>."
        },
        {
            front: "Czym różni się polimeryzacja od polikondensacji (kondensacji)?",
            back: "Polimeryzacja to wielokrotna addycja monomeru z rozerwaniem wiązań &pi; BEZ wydzielania produktu ubocznego. Kondensacja (polikondensacja) wiąże się zawsze z wydzieleniem drobnej cząsteczki ubocznej (najczęściej H<sub>2</sub>O)."
        },
        {
            front: "Wymień trzy etapy substytucji rodnikowej (S<sub>R</sub>) oraz porównaj mechanizmy S<sub>N</sub>1 i S<sub>N</sub>2.",
            back: "Etapy S<sub>R</sub>: 1) inicjacja, 2) propagacja, 3) terminacja. S<sub>N</sub>1: 2 etapy przez karbokation, preferuje substraty III&deg; (racemizacja). S<sub>N</sub>2: 1 etap synchroniczny, preferuje substraty I&deg; (inwersja konfiguracji)."
        }
    ]
};