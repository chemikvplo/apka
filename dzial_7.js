// Dział VII. Systematyka związków nieorganicznych (Indeks 6 na liście)
appData[6] = {
    notatki: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">📚 KOMPENDIUM MATURALNE: SYSTEMATYKA ZWIĄZKÓW NIEORGANICZNYCH</h2>

        <!-- SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Architektura i Klasyfikacja Ogólna Związków Nieorganicznych</h3>
            <p>Systematyka związków nieorganicznych porządkuje wszystkie substancje złożone (poza większością związków węgla zaliczanych do chemii organicznej) w logiczne klasy funkcjonalne na podstawie ich składu jakościowego, typu wiązań chemicznych oraz reaktywności kwasowo-zasadowej i redoks. Na poziomie rozszerzonym kluczem do rozwiązania zadań z ciągami przemian (chemografów) jest rozumienie tzw. <strong>szeregów genetycznych pierwiastków</strong>, czyli dróg prowadzących od wolnego metalu lub niemetalu, poprzez tlenek i wodorotlenek lub kwas, aż do soli obojętnych, wodorosoli, hydroksosoli oraz związków kompleksowych.</p>

            <!-- WYKRES 1: GŁÓWNY PODZIAŁ ZWIĄZKÓW NIEORGANICZNYCH (SVG) -->
            <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 12px; padding: 14px; margin: 16px 0; text-align: center;">
                <svg viewBox="0 0 860 270" style="width: 100%; max-width: 860px; height: auto;">
                    <!-- Nagłówek główny -->
                    <rect x="270" y="10" width="320" height="42" rx="8" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
                    <text x="430" y="36" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">ZWIĄZKI NIEORGANICZNE</text>

                    <!-- Linie rozgałęzienia -->
                    <line x1="430" y1="52" x2="430" y2="72" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="90" y1="72" x2="770" y2="72" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="90" y1="72" x2="90" y2="90" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="260" y1="72" x2="260" y2="90" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="430" y1="72" x2="430" y2="90" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="600" y1="72" x2="600" y2="90" stroke="#94a3b8" stroke-width="2"/>
                    <line x1="770" y1="72" x2="770" y2="90" stroke="#94a3b8" stroke-width="2"/>

                    <!-- 1. TLENKI -->
                    <rect x="12" y="90" width="156" height="54" rx="6" fill="rgba(30, 58, 138, 0.55)" stroke="#38bdf8" stroke-width="1.8"/>
                    <text x="90" y="112" fill="#38bdf8" font-size="12.5" font-weight="bold" text-anchor="middle">TLENKI (E<tspan dy="3" font-size="9">2</tspan><tspan dy="-3">O</tspan><tspan dy="3" font-size="9">n</tspan><tspan dy="-3">)</tspan></text>
                    <text x="90" y="131" fill="#cbd5e1" font-size="10.5" text-anchor="middle">oraz nadtlenki, ponadtlenki</text>
                    <rect x="12" y="154" width="156" height="102" rx="6" fill="rgba(30, 41, 59, 0.85)" stroke="#475569" stroke-width="1.2"/>
                    <text x="90" y="174" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&bull; Zasadowe (Na<tspan dy="3" font-size="8">2</tspan><tspan dy="-3">O)</tspan></text>
                    <text x="90" y="194" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&bull; Kwasowe (SO<tspan dy="3" font-size="8">3</tspan><tspan dy="-3">)</tspan></text>
                    <text x="90" y="214" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&bull; Amfoteryczne (ZnO)</text>
                    <text x="90" y="234" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&bull; Obojętne (CO, NO)</text>

                    <!-- 2. WODORKI -->
                    <rect x="182" y="90" width="156" height="54" rx="6" fill="rgba(30, 58, 138, 0.55)" stroke="#38bdf8" stroke-width="1.8"/>
                    <text x="260" y="112" fill="#38bdf8" font-size="12.5" font-weight="bold" text-anchor="middle">WODORKI (EH<tspan dy="3" font-size="9">n</tspan><tspan dy="-3"> / H</tspan><tspan dy="3" font-size="9">n</tspan><tspan dy="-3">E)</tspan></text>
                    <text x="260" y="131" fill="#cbd5e1" font-size="10.5" text-anchor="middle">jonowe i kowalencyjne</text>
                    <rect x="182" y="154" width="156" height="102" rx="6" fill="rgba(30, 41, 59, 0.85)" stroke="#475569" stroke-width="1.2"/>
                    <text x="260" y="174" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&bull; Zasadowe (LiH, NH<tspan dy="3" font-size="8">3</tspan><tspan dy="-3">)</tspan></text>
                    <text x="260" y="194" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&bull; Kwasowe (HCl, H<tspan dy="3" font-size="8">2</tspan><tspan dy="-3">S)</tspan></text>
                    <text x="260" y="214" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&bull; Obojętne (CH<tspan dy="3" font-size="8">4</tspan><tspan dy="-3">, SiH</tspan><tspan dy="3" font-size="8">4</tspan><tspan dy="-3">)</tspan></text>
                    <text x="260" y="234" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&bull; Amfoteryczny (H<tspan dy="3" font-size="8">2</tspan><tspan dy="-3">O)</tspan></text>

                    <!-- 3. WODOROTLENKI -->
                    <rect x="352" y="90" width="156" height="54" rx="6" fill="rgba(30, 58, 138, 0.55)" stroke="#38bdf8" stroke-width="1.8"/>
                    <text x="430" y="112" fill="#38bdf8" font-size="12.5" font-weight="bold" text-anchor="middle">WODOROTLENKI</text>
                    <text x="430" y="131" fill="#cbd5e1" font-size="10.5" text-anchor="middle">M(OH)<tspan dy="3" font-size="8">n</tspan><tspan dy="-3"> (zasady i amfot.)</tspan></text>
                    <rect x="352" y="154" width="156" height="102" rx="6" fill="rgba(30, 41, 59, 0.85)" stroke="#475569" stroke-width="1.2"/>
                    <text x="430" y="176" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&bull; Zasadowe: KOH, Ba(OH)<tspan dy="3" font-size="8">2</tspan></text>
                    <text x="430" y="200" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&bull; Amfoteryczne: Al(OH)<tspan dy="3" font-size="8">3</tspan><tspan dy="-3">,</tspan></text>
                    <text x="430" y="220" fill="#e2e8f0" font-size="10" text-anchor="middle">Zn(OH)<tspan dy="3" font-size="8">2</tspan><tspan dy="-3">, Cr(OH)</tspan><tspan dy="3" font-size="8">3</tspan><tspan dy="-3">, Be(OH)</tspan><tspan dy="3" font-size="8">2</tspan></text>

                    <!-- 4. KWASY -->
                    <rect x="522" y="90" width="156" height="54" rx="6" fill="rgba(30, 58, 138, 0.55)" stroke="#38bdf8" stroke-width="1.8"/>
                    <text x="600" y="112" fill="#38bdf8" font-size="12.5" font-weight="bold" text-anchor="middle">KWASY (H<tspan dy="3" font-size="9">m</tspan><tspan dy="-3">R)</tspan></text>
                    <text x="600" y="131" fill="#cbd5e1" font-size="10.5" text-anchor="middle">beztlenowe i tlenowe</text>
                    <rect x="522" y="154" width="156" height="102" rx="6" fill="rgba(30, 41, 59, 0.85)" stroke="#475569" stroke-width="1.2"/>
                    <text x="600" y="176" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&bull; Utleniające: HNO<tspan dy="3" font-size="8">3</tspan><tspan dy="-3">, H</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3">SO</tspan><tspan dy="3" font-size="8">4(st)</tspan></text>
                    <text x="600" y="200" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&bull; Nieutleniające: HCl, H<tspan dy="3" font-size="8">3</tspan><tspan dy="-3">PO</tspan><tspan dy="3" font-size="8">4</tspan></text>
                    <text x="600" y="224" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&bull; Trwałe i nietrwałe (H<tspan dy="3" font-size="8">2</tspan><tspan dy="-3">CO</tspan><tspan dy="3" font-size="8">3</tspan><tspan dy="-3">)</tspan></text>

                    <!-- 5. SOLE -->
                    <rect x="692" y="90" width="156" height="54" rx="6" fill="rgba(30, 58, 138, 0.55)" stroke="#38bdf8" stroke-width="1.8"/>
                    <text x="770" y="112" fill="#38bdf8" font-size="12.5" font-weight="bold" text-anchor="middle">SOLE (M<tspan dy="3" font-size="9">m</tspan><tspan dy="-3">R</tspan><tspan dy="3" font-size="9">n</tspan><tspan dy="-3">)</tspan></text>
                    <text x="770" y="131" fill="#cbd5e1" font-size="10.5" text-anchor="middle">w tym wodoro-, hydroksosole</text>
                    <rect x="692" y="154" width="156" height="102" rx="6" fill="rgba(30, 41, 59, 0.85)" stroke="#475569" stroke-width="1.2"/>
                    <text x="770" y="174" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&bull; Obojętne (Na<tspan dy="3" font-size="8">2</tspan><tspan dy="-3">SO</tspan><tspan dy="3" font-size="8">4</tspan><tspan dy="-3">)</tspan></text>
                    <text x="770" y="194" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&bull; Wodorosole (NaHCO<tspan dy="3" font-size="8">3</tspan><tspan dy="-3">)</tspan></text>
                    <text x="770" y="214" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&bull; Hydroksosole (Mg(OH)Cl)</text>
                    <text x="770" y="234" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&bull; Hydraty i sole podwójne</text>
                </svg>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 6px;">
                    <strong>Rys. 1.</strong> Główny podział związków nieorganicznych wraz z klasyfikacją funkcjonalną wymaganą na maturze rozszerzonej.
                </div>
            </div>

            <h4>Zasady nomenklatury systematycznej (system Stocka vs system przedrostków stechiometrycznych)</h4>
            <p>Zgodnie z zaleceniami IUPAC oraz Polskiego Towarzystwa Chemicznego (PTChem), w nazewnictwie związków nieorganicznych stosuje się dwa komplementarne systemy:</p>
            <ul class="note-list">
                <li><strong>System Stocka (preferowany na maturze):</strong> Po nazwie głównej klasy związku lub pierwiastka podaje się w nawiasie okrągłym (<strong>bez spacji przed nawiasem!</strong>) cyfrą rzymską wartościowość (lub formalny stopień utlenienia) atomu centralnego/kwasotwórczego lub kationu metalu, np. tlenek żelaza(III) (Fe<sub>2</sub>O<sub>3</sub>), siarczan(VI) miedzi(II) (CuSO<sub>4</sub>), kwas chlorowy(VII) (HClO<sub>4</sub>).<br>
                <span style="color: #f87171; font-weight: bold;">⚠️ Uwaga maturalna:</span> Wartościowości <strong>NIE podaje się</strong> dla pierwiastków, które w związkach wykazują wyłącznie jedną stałą wartościowość: <strong>litowców (grupa 1. – zawsze I), berylowców (grupa 2. – zawsze II), glinu (zawsze III), cynku (zawsze II) oraz fluoru (zawsze I)</strong>. Wpisanie na maturze nazwy „chlorek sodu(I)” lub „tlenek glinu(III)” jest traktowane jako błąd rzeczowy!</li>
                <li><strong>System stechiometryczny (przedrostków greckich: <em>mono-, di-, tri-, tetra-, penta-, heksa-, hepta-, okta-, nona-, deka-</em>):</strong> Stosowany szczególnie często dla tlenków niemetali, nadtlenków oraz jonów kompleksowych, gdyż jednoznacznie określa skład cząsteczki bez konieczności obliczania stopni utlenienia, np. N<sub>2</sub>O<sub>4</sub> to <em>tetratlenek diazotu</em> (w systemie Stocka również tlenek azotu(IV), podobnie jak monomer NO<sub>2</sub>), P<sub>4</sub>O<sub>10</sub> to <em>dekatlenek tetrafosforu</em>, a Fe<sub>3</sub>O<sub>4</sub> to <em>tetratlenek triżelaza</em> (lub tlenek żelaza(II) diżelaza(III)).</li>
            </ul>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Klasa związku</th>
                            <th>Wzór ogólny i budowa</th>
                            <th>Zasada tworzenia nazwy systematycznej</th>
                            <th>Przykłady wzorcowe i pułapki nazewnicze</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Tlenki, nadtlenki i ponadtlenki</strong></td>
                            <td>E<sub>2</sub>O<sub>n</sub> (tlen na &minus;II st. utl.)<br>M<sub>2</sub>O<sub>2</sub> (mostek [&ndash;O&ndash;O&ndash;]<sup>2&minus;</sup>, tlen na &minus;I)<br>MO<sub>2</sub> (jon O<sub>2</sub><sup>&minus;</sup>, tlen na &minus;&frac12;)</td>
                            <td><em>tlenek</em> + nazwa pierwiastka w dopełniaczu (ew. wartościowość)</td>
                            <td>CrO<sub>3</sub> – tlenek chromu(VI); Mn<sub>2</sub>O<sub>7</sub> – tlenek manganu(VII); Na<sub>2</sub>O<sub>2</sub> – <strong>nadtlenek sodu</strong> (NIE „tlenek sodu(II)”!); KO<sub>2</sub> – <strong>ponadtlenek potasu</strong>; OF<sub>2</sub> – <strong>fluorek tlenu</strong> (fluor jest bardziej elektroujemny od tlenu: F ma &minus;I, a O ma +II!).</td>
                        </tr>
                        <tr>
                            <td><strong>Wodorki</strong></td>
                            <td>EH<sub>n</sub> (grupy 1–15)<br>H<sub>n</sub>E (grupy 16–17)</td>
                            <td>Metale: <em>wodorek</em> + nazwa metalu.<br>Niemetale: nazwy zwyczajowe (amoniak, woda) lub <em>-owodór</em>.</td>
                            <td>CaH<sub>2</sub> – wodorek wapnia (H na &minus;I); SiH<sub>4</sub> – silan (krzemowodór); PH<sub>3</sub> – fosfina (fosforiak); HCl<sub>(g)</sub> – <strong>chlorowodór (gaz!)</strong>, ale HCl<sub>(aq)</sub> – <strong>kwas chlorowodorowy (roztwór wodny!)</strong>.</td>
                        </tr>
                        <tr>
                            <td><strong>Wodorotlenki</strong></td>
                            <td>M(OH)<sub>n</sub><br>(kation M<sup>n+</sup> i aniony OH<sup>&minus;</sup>)</td>
                            <td><em>wodorotlenek</em> + nazwa metalu (wartościowość)</td>
                            <td>KOH – wodorotlenek potasu (zwyczajowo: potaż żrący); Cu(OH)<sub>2</sub> – wodorotlenek miedzi(II); Cr(OH)<sub>3</sub> – wodorotlenek chromu(III).</td>
                        </tr>
                        <tr>
                            <td><strong>Kwasy beztlenowe i tlenowe</strong></td>
                            <td>H<sub>m</sub>R<br>(kationy H<sup>+</sup> i reszta kwasowa R<sup>m&minus;</sup>)</td>
                            <td>Beztlenowe: <em>kwas ...-owodorowy</em>.<br>Tlenowe: <em>kwas ...-owy(wartościowość)</em>.</td>
                            <td>HCN<sub>(aq)</sub> – kwas cyjanowodorowy; H<sub>2</sub>SO<sub>3</sub> – kwas siarkowy(IV) (dawniej siarkawy); HClO – kwas chlorowy(I); HMnO<sub>4</sub> – kwas manganowy(VII).</td>
                        </tr>
                        <tr>
                            <td><strong>Sole proste, wodoro-, hydroksosole, hydraty</strong></td>
                            <td>M<sub>m</sub>R<sub>n</sub>, M(H<sub>x</sub>R)<sub>n</sub>, [M(OH)<sub>x</sub>]<sub>m</sub>R<sub>n</sub>, M<sub>m</sub>R<sub>n</sub> &middot; xH<sub>2</sub>O</td>
                            <td>Kwas beztlenowy &rarr; końcówka <em>-ek/-ki</em>.<br>Kwas tlenowy &rarr; końcówka <em>-an(W)/-any(W)</em>.</td>
                            <td>Na<sub>2</sub>S – siarczek sodu; FeSO<sub>4</sub> &middot; 7H<sub>2</sub>O – siarczan(VI) żelaza(II)–woda(1/7); KH<sub>2</sub>PO<sub>4</sub> – diwodorofosforan(V) potasu; [Cu(OH)]<sub>2</sub>CO<sub>3</sub> – węglan diwodorotlenek dimiedzi(II) (malachit).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Tlenki (oraz Nadtlenki i Ponadtlenki) – Otrzymywanie, Budowa i Charakter Chemiczny</h3>
            <p><strong>Tlenki</strong> to dwuskładnikowe związki chemiczne tlenu z innymi pierwiastkami (metalami lub niemetalami), w których atomy tlenu występują na <strong>&minus;II stopniu utlenienia</strong> i nie tworzą między sobą bezpośrednich wiązań kowalencyjnych &mdash;O&mdash;O&mdash;. Związki tlenu z metalami 1. i 2. grupy układu okresowego mogą zawierać również <strong>aniony nadtlenkowe O<sub>2</sub><sup>2&minus;</sup></strong> (mostek tlenowy [&ndash;O&ndash;O&ndash;]<sup>2&minus;</sup>, formalny stopień utlenienia tlenu wynosi &minus;I, np. w Na<sub>2</sub>O<sub>2</sub>, BaO<sub>2</sub>, H<sub>2</sub>O<sub>2</sub>) lub paramagnetyczne <strong>aniony ponadtlenkowe O<sub>2</sub><sup>&minus;</sup></strong> (stopień utlenienia tlenu &minus;&frac12;, np. w KO<sub>2</sub>, RbO<sub>2</sub>, CsO<sub>2</sub>).</p>

            <h4>A. Główne metody otrzymywania tlenków (zakres Z = 1–30)</h4>
            <ol class="note-list">
                <li><strong>Bezpośrednia synteza pierwiastków z tlenem (spalanie metali i niemetali):</strong> Większość pierwiastków reaguje bezpośrednio z tlenem (wyjątkami są gazy szlachetne, złoto, platyna oraz fluorowce Cl<sub>2</sub>, Br<sub>2</sub>, I<sub>2</sub>, których tlenki otrzymuje się metodami pośrednimi). <strong>Uwaga na produkty spalania litowców w tlenie!</strong> Tylko lit spala się do zwykłego tlenku, sód tworzy głównie nadtlenek, a potas, rubid i cez – ponadtlenki:
                    <div class="chem-eq">
                        • Spalanie litu (tworzy tlenek): &nbsp; 4 Li + O<sub>2</sub> &rarr; 2 Li<sub>2</sub>O<br>
                        • Spalanie sodu w powietrzu/tlenie (tworzy nadtlenek!): &nbsp; 2 Na + O<sub>2</sub> &rarr; Na<sub>2</sub>O<sub>2</sub> &nbsp;(zwykły tlenek Na<sub>2</sub>O otrzymuje się przez redukcję nadtlenku metalicznym sodem: Na<sub>2</sub>O<sub>2</sub> + 2 Na &rarr; 2 Na<sub>2</sub>O)<br>
                        • Spalanie potasu w tlenie (tworzy ponadtlenek!): &nbsp; K + O<sub>2</sub> &rarr; KO<sub>2</sub><br>
                        • Spalanie żelaza w czystym tlenie (powstaje magnetyt – tlenek mieszany FeO &middot; Fe<sub>2</sub>O<sub>3</sub>): &nbsp; 3 Fe + 2 O<sub>2</sub> &rarr; Fe<sub>3</sub>O<sub>4</sub><br>
                        • Spalanie miedzi (w temp. do 1000&deg;C tworzy <span style="color: #94a3b8; font-weight: bold;">czarny CuO</span>, powyżej 1000&deg;C <span style="color: #f87171; font-weight: bold;">ceglastoczerwony Cu<sub>2</sub>O</span>): &nbsp; 2 Cu + O<sub>2</sub> &rarr; 2 CuO<br>
                        • Spalanie fosforu przy niedomiarze tlenu: &nbsp; P<sub>4</sub> + 3 O<sub>2</sub> &rarr; P<sub>4</sub>O<sub>6</sub> &nbsp;|&nbsp; przy nadmiarze tlenu: &nbsp; P<sub>4</sub> + 5 O<sub>2</sub> &rarr; P<sub>4</sub>O<sub>10</sub>
                    </div>
                </li>
                <li><strong>Termiczny rozkład wodorotlenków (dehydratacja):</strong> Wodorotlenki metali ciężkich, ziem alkalicznych (oprócz Ba(OH)<sub>2</sub>) oraz LiOH ulegają podczas prażenia rozkładowi na odpowiedni tlenek metalu i parę wodną (<em>uwaga:</em> wodorotlenki NaOH, KOH, RbOH, CsOH są termicznie trwałe – topią się bez rozkładu, natomiast AgOH i Hg(OH)<sub>2</sub> są skrajnie nietrwałe już w temperaturze pokojowej i natychmiast w momencie strącania rozpadają się do tlenków Ag<sub>2</sub>O&darr; i HgO&darr;!):
                    <div class="chem-eq">
                        Cu(OH)<sub>2</sub> (<span style="color: #38bdf8;">niebieski osad</span>) <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> CuO (<span style="color: #94a3b8;">czarny osad</span>) + H<sub>2</sub>O&uarr; &nbsp;|&nbsp; 2 Fe(OH)<sub>3</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> Fe<sub>2</sub>O<sub>3</sub> + 3 H<sub>2</sub>O&uarr; &nbsp;|&nbsp; 2 Al(OH)<sub>3</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> Al<sub>2</sub>O<sub>3</sub> + 3 H<sub>2</sub>O&uarr;<br>
                        2 Ag<sup>+</sup> + 2 OH<sup>&minus;</sup> &rarr; Ag<sub>2</sub>O&darr; (<span style="color: #b45309; font-weight: bold;">brunatny osad</span>) + H<sub>2</sub>O &nbsp;<em>(wodorotlenek srebra(I) nie istnieje w postaci trwałego osadu!)</em>
                    </div>
                </li>
                <li><strong>Termiczny rozkład soli kwasów tlenowych (węglanów, azotanów(V), siarczanów(IV) i (VI), dichromianu(VI) amonu):</strong>
                    <div class="chem-eq">
                        • Rozkład węglanów (wapiennik): &nbsp; CaCO<sub>3</sub> <span class="chem-arrow"><span class="cond-top">T (1000&deg;C)</span><span class="arrow-sym">&rarr;</span></span> CaO + CO<sub>2</sub>&uarr; &nbsp;(uwaga: węglany Na<sub>2</sub>CO<sub>3</sub>, K<sub>2</sub>CO<sub>3</sub>, Rb<sub>2</sub>CO<sub>3</sub>, Cs<sub>2</sub>CO<sub>3</sub> NIE rozkładają się termicznie – wyjątkiem wśród litowców jest Li<sub>2</sub>CO<sub>3</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> Li<sub>2</sub>O + CO<sub>2</sub>&uarr;)<br>
                        • Rozkład azotanów(V) metali o średniej aktywności (od Mg do Cu w szeregu napięciowym, a także LiNO<sub>3</sub>):<br>
                        2 Cu(NO<sub>3</sub>)<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 2 CuO + 4 NO<sub>2</sub>&uarr; + O<sub>2</sub>&uarr; &nbsp;|&nbsp; 2 Pb(NO<sub>3</sub>)<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 2 PbO + 4 NO<sub>2</sub>&uarr; + O<sub>2</sub>&uarr;<br>
                        • „Wulkan chemiczny” (wewnątrzcząsteczkowy redoks dichromianu(VI) amonu):<br>
                        (NH<sub>4</sub>)<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> (<span style="color: #fb923c; font-weight: bold;">pomarańczowy</span>) <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> Cr<sub>2</sub>O<sub>3</sub> (<span style="color: #22c55e; font-weight: bold;">ciemnozielony pył</span>) + N<sub>2</sub>&uarr; + 4 H<sub>2</sub>O&uarr;
                    </div>
                </li>
                <li><strong>Utlenianie tlenków niższych lub redukcja tlenków wyższych oraz prażenie siarczków (procesy metalurgiczne):</strong>
                    <div class="chem-eq">
                        2 SO<sub>2</sub> + O<sub>2</sub> <span class="chem-arrow"><span class="cond-top">V<sub>2</sub>O<sub>5</sub>, T</span><span class="arrow-sym">&#8652;</span></span> 2 SO<sub>3</sub> &nbsp;|&nbsp; 2 NO + O<sub>2</sub> &rarr; 2 NO<sub>2</sub> (reakcja samorzutna na powietrzu!) &nbsp;|&nbsp; CO<sub>2</sub> + C <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 2 CO&uarr;<br>
                        2 ZnS + 3 O<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 2 ZnO + 2 SO<sub>2</sub>&uarr; &nbsp;|&nbsp; 4 FeS<sub>2</sub> (piryt) + 11 O<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 2 Fe<sub>2</sub>O<sub>3</sub> + 8 SO<sub>2</sub>&uarr;
                    </div>
                </li>
            </ol>

            <h4>B. Klasyfikacja tlenków ze względu na charakter chemiczny – definicje operacyjne i kryteria</h4>
            <p>O charakterze chemicznym tlenku decyduje jego zachowanie wobec <strong>mocnych kwasów</strong> oraz <strong>mocnych zasad</strong>, a pomocniczo wobec wody.</p>

            <div class="note-alert danger">
                🔥 <strong>KLUCZOWA PUŁAPKA MATURALNA – Rozpuszczalność tlenku w wodzie a jego charakter chemiczny!</strong><br>
                Brak reakcji tlenku z wodą <strong>NIE OZNACZA</strong>, że tlenek jest obojętny! Przykładowo tlenki CuO, FeO, NiO czy MnO nie reagują z wodą (są w niej nierozpuszczalne), ale reagują z kwasami (np. z HCl), tworząc sól i wodę – są to więc pełnoprawne <strong>tlenki zasadowe</strong>. Podobnie tlenek krzemu(IV) (krzemionka, SiO<sub>2</sub>) nie reaguje z wodą ze względu na gigantyczną energię atomowej sieci krystalicznej, ale reaguje ze stężonymi zasadami (NaOH) – jest więc <strong>tlenkiem kwasowym</strong>! Tlenek obojętny nie reaguje ani z wodą, ani z kwasami, ani z zasadami.
            </div>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Typ tlenku</th>
                            <th>Reakcja z H<sub>2</sub>O</th>
                            <th>Reakcja z kwasem (H<sub>3</sub>O<sup>+</sup>)</th>
                            <th>Reakcja z zasadą (OH<sup>&minus;</sup>)</th>
                            <th>Pełny katalog tlenków obowiązujących na maturze (Z = 1–30)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. Tlenki zasadowe</strong><br>(tworzą wyłącznie metale na niskich stopniach utlenienia +I, +II i rzadziej +III)</td>
                            <td>Tylko tlenki litowców i berylowców (oprócz BeO!):<br>Na<sub>2</sub>O + H<sub>2</sub>O &rarr; 2NaOH<br>CaO + H<sub>2</sub>O &rarr; Ca(OH)<sub>2</sub><br>Pozostałe (np. CuO, FeO, MnO) <strong>NIE reagują z wodą!</strong></td>
                            <td><strong>TAK (wszystkie!)</strong><br>Tlenek zasadowy + kwas &rarr; sól + woda<br>CuO + 2H<sup>+</sup> &rarr; Cu<sup>2+</sup> + H<sub>2</sub>O<br>FeO + 2HCl &rarr; FeCl<sub>2</sub> + H<sub>2</sub>O</td>
                            <td><strong>NIE REAGUJĄ</strong></td>
                            <td>• <strong>Grupa 1.:</strong> Li<sub>2</sub>O, Na<sub>2</sub>O, K<sub>2</sub>O, Rb<sub>2</sub>O, Cs<sub>2</sub>O<br>• <strong>Grupa 2.:</strong> MgO (słabo z H<sub>2</sub>O na gorąco), CaO, SrO, BaO<br>• <strong>Blok d:</strong> CrO, MnO, FeO, CoO, NiO, Cu<sub>2</sub>O, CuO*, Ag<sub>2</sub>O, Sc<sub>2</sub>O<sub>3</sub><br><em>(*CuO w skrajnie stężonym gorącym NaOH wykazuje śladowy amfoteryzm, w zadaniach szkolnych traktowany jako zasadowy lub słabo amfoteryczny zależnie od informacji wstępnej).</em></td>
                        </tr>
                        <tr>
                            <td><strong>2. Tlenki kwasowe</strong><br>(bezwodniki kwasowe: większość tlenków niemetali + tlenki metali bloku d na wysokich st. utl. +VI, +VII)</td>
                            <td>Większość <strong>TAK</strong>:<br>SO<sub>3</sub> + H<sub>2</sub>O &rarr; H<sub>2</sub>SO<sub>4</sub><br>P<sub>4</sub>O<sub>10</sub> + 6H<sub>2</sub>O &rarr; 4H<sub>3</sub>PO<sub>4</sub><br>Wyjątki <strong>NIE reagujące z H<sub>2</sub>O</strong>: <strong>SiO<sub>2</sub></strong> (krzemionka) oraz B<sub>2</sub>O<sub>3</sub> (trudno).</td>
                            <td><strong>NIE REAGUJĄ</strong><br><em>(Wyjątek specyficzny: SiO<sub>2</sub> + 4HF &rarr; SiF<sub>4</sub>&uarr; + 2H<sub>2</sub>O – trawienie szkła, wynikające z trwałości wiązań Si&ndash;F, a nie z zasadowości SiO<sub>2</sub>!)</em></td>
                            <td><strong>TAK (wszystkie, łącznie z SiO<sub>2</sub>!):</strong><br>Tlenek kwasowy + zasada &rarr; sól + woda<br>SO<sub>2</sub> + 2OH<sup>&minus;</sup> &rarr; SO<sub>3</sub><sup>2&minus;</sup> + H<sub>2</sub>O<br>SiO<sub>2</sub> + 2NaOH &rarr; Na<sub>2</sub>SiO<sub>3</sub> + H<sub>2</sub>O</td>
                            <td>• <strong>Niemetale:</strong> CO<sub>2</sub>, SiO<sub>2</sub>, N<sub>2</sub>O<sub>3</sub>, NO<sub>2</sub> (N<sub>2</sub>O<sub>4</sub> – bezwodnik mieszany!), N<sub>2</sub>O<sub>5</sub>, P<sub>4</sub>O<sub>6</sub> (P<sub>2</sub>O<sub>3</sub>), P<sub>4</sub>O<sub>10</sub> (P<sub>2</sub>O<sub>5</sub>), SO<sub>2</sub>, SO<sub>3</sub>, Cl<sub>2</sub>O, Cl<sub>2</sub>O<sub>3</sub>, ClO<sub>2</sub>, Cl<sub>2</sub>O<sub>5</sub>, Cl<sub>2</sub>O<sub>7</sub>, B<sub>2</sub>O<sub>3</sub><br>• <strong>Metale na wysokich stopniach utlenienia:</strong> <strong>CrO<sub>3</sub> (kwasowy!)</strong>, <strong>Mn<sub>2</sub>O<sub>7</sub> (kwasowy!)</strong>, MnO<sub>3</sub>, V<sub>2</sub>O<sub>5</sub> (przewaga właściwości kwasowych, amfoteryczny w mocnych kwasach).</td>
                        </tr>
                        <tr>
                            <td><strong>3. Tlenki amfoteryczne</strong><br>(tlenki metali na pograniczu bloków oraz na średnich stopniach utlenienia +II, +III, +IV)</td>
                            <td><strong>NIE REAGUJĄ Z WODĄ!</strong><br>(Wszystkie tlenki amfoteryczne są w wodzie praktycznie nierozpuszczalne!)</td>
                            <td><strong>TAK (jak zasada):</strong><br>ZnO + 2H<sup>+</sup> &rarr; Zn<sup>2+</sup> + H<sub>2</sub>O<br>Al<sub>2</sub>O<sub>3</sub> + 6H<sup>+</sup> &rarr; 2Al<sup>3+</sup> + 3H<sub>2</sub>O<br>(metal przechodzi do kationu prostego M<sup>n+</sup>)</td>
                            <td><strong>TAK (jak kwas):</strong><br>W roztworze wodnym tworzą hydroksokompleksy:<br>ZnO + 2OH<sup>&minus;</sup> + H<sub>2</sub>O &rarr; [Zn(OH)<sub>4</sub>]<sup>2&minus;</sup><br>Al<sub>2</sub>O<sub>3</sub> + 2OH<sup>&minus;</sup> + 3H<sub>2</sub>O &rarr; 2[Al(OH)<sub>4</sub>]<sup>&minus;</sup></td>
                            <td>• <strong>Obowiązkowa lista maturalna:</strong> <strong>BeO</strong> (jedyny w 2. grupie!), <strong>Al<sub>2</sub>O<sub>3</sub>, ZnO, Cr<sub>2</sub>O<sub>3</sub>, MnO<sub>2</sub></strong>, Fe<sub>2</sub>O<sub>3</sub> (słabo amfoteryczny – reaguje ze stężonym lub stopionym NaOH), Ga<sub>2</sub>O<sub>3</sub>, GeO<sub>2</sub>, SnO, SnO<sub>2</sub>, PbO, PbO<sub>2</sub>, As<sub>2</sub>O<sub>3</sub>, Sb<sub>2</sub>O<sub>3</sub>, TiO<sub>2</sub>.</td>
                        </tr>
                        <tr>
                            <td><strong>4. Tlenki obojętne</strong><br>(niesolotwórcze)</td>
                            <td><strong>NIE REAGUJĄ</strong></td>
                            <td><strong>NIE REAGUJĄ</strong></td>
                            <td><strong>NIE REAGUJĄ</strong></td>
                            <td>Wyłącznie wybrane tlenki niemetali na niskich stopniach utlenienia: <strong>CO</strong> (tlenek węgla(II) – czad), <strong>NO</strong> (tlenek azotu(II)), <strong>N<sub>2</sub>O</strong> (tlenek azotu(I) – gaz rozweselający), <strong>SiO</strong> (tlenek krzemu(II)).<br><em>Uwaga:</em> Tlenki obojętne nie tworzą soli z kwasami ani zasadami, ale ulegają reakcjom redoks (np. spalaniu: 2CO + O<sub>2</sub> &rarr; 2CO<sub>2</sub>).</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>C. Szczegółowa analiza reaktywności wybranych tlenków kwasowych i nadtlenków (pewniaki maturalne)</h4>
            <ul class="note-list">
                <li><strong>Bezwodniki mieszane (podwójne) – przypadek NO<sub>2</sub> (N<sub>2</sub>O<sub>4</sub>) oraz ClO<sub>2</sub>:</strong> W tlenku azotu(IV) azot znajduje się na +IV stopniu utlenienia. Ponieważ nie istnieje trwały kwas azotowy(IV), podczas reakcji NO<sub>2</sub> z wodą lub zasadą zachodzi <strong>reakcja dysproporcjonowania</strong>, w której powstają równocześnie dwa kwasy (lub dwie sole) – azotu(III) oraz azotu(V):
                    <div class="chem-eq">
                        • Z zimną wodą: &nbsp; 2 NO<sub>2</sub> + H<sub>2</sub>O &rarr; HNO<sub>2</sub> + HNO<sub>3</sub> &nbsp;(w gorącej wodzie nietrwały HNO<sub>2</sub> rozkłada się: 3 NO<sub>2</sub> + H<sub>2</sub>O <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 2 HNO<sub>3</sub> + NO&uarr;)<br>
                        • Z zasadą: &nbsp; 2 NO<sub>2</sub> + 2 NaOH &rarr; NaNO<sub>2</sub> (azotan(III) sodu) + NaNO<sub>3</sub> (azotan(V) sodu) + H<sub>2</sub>O<br>
                        • Analogicznie dla ClO<sub>2</sub> (chlor na +IV): &nbsp; 2 ClO<sub>2</sub> + 2 NaOH &rarr; NaClO<sub>2</sub> (chloran(III) sodu) + NaClO<sub>3</sub> (chloran(V) sodu) + H<sub>2</sub>O
                    </div>
                </li>
                <li><strong>Tlenki chromu(VI) i manganu(VII) z wodą oraz zasada równowagi chromian(VI)–dichromian(VI):</strong> Tlenek chromu(VI) (CrO<sub>3</sub>, <span style="color: #ef4444; font-weight: bold;">ciemnoczerwone igły</span>) w zależności od stosunku molowego do wody tworzy <span style="color: #facc15; font-weight: bold;">żółty kwas chromowy(VI) (H<sub>2</sub>CrO<sub>4</sub>)</span> lub <span style="color: #fb923c; font-weight: bold;">pomarańczowy kwas dichromowy(VI) (H<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>)</span>:
                    <div class="chem-eq">
                        CrO<sub>3</sub> + H<sub>2</sub>O &rarr; H<sub>2</sub>CrO<sub>4</sub> &nbsp;&nbsp;oraz&nbsp;&nbsp; 2 CrO<sub>3</sub> + H<sub>2</sub>O &rarr; H<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> &nbsp;|&nbsp; Mn<sub>2</sub>O<sub>7</sub> (zielonkawa, wybuchowa ciecz) + H<sub>2</sub>O &rarr; 2 HMnO<sub>4</sub> (<span style="color: #c084fc; font-weight: bold;">fioletowy roztwór</span>)
                    </div>
                </li>
                <li><strong>Reakcje nadtlenków i ponadtlenków litowców z wodą oraz CO<sub>2</sub> (regeneracja powietrza w łodziach podwodnych):</strong>
                    <div class="chem-eq">
                        Na<sub>2</sub>O<sub>2</sub> + 2 H<sub>2</sub>O <span class="chem-arrow"><span class="cond-top">na zimno</span><span class="arrow-sym">&rarr;</span></span> 2 NaOH + H<sub>2</sub>O<sub>2</sub> &nbsp;|&nbsp; 2 Na<sub>2</sub>O<sub>2</sub> + 2 H<sub>2</sub>O <span class="chem-arrow"><span class="cond-top">na gorąco</span><span class="arrow-sym">&rarr;</span></span> 4 NaOH + O<sub>2</sub>&uarr;<br>
                        4 KO<sub>2</sub> + 2 H<sub>2</sub>O &rarr; 4 KOH + 3 O<sub>2</sub>&uarr; &nbsp;|&nbsp; 2 Na<sub>2</sub>O<sub>2</sub> + 2 CO<sub>2</sub> &rarr; 2 Na<sub>2</sub>CO<sub>3</sub> + O<sub>2</sub>&uarr; &nbsp;<em>(pochłanianie wydychanego CO<sub>2</sub> z jednoczesnym wydzieleniem tlenu!)</em>
                    </div>
                </li>
            </ul>

            <h4>D. Zmienność charakteru chemicznego tlenków w układzie okresowym oraz dla jednego pierwiastka (Cr, Mn)</h4>
            <p><strong>1. W okresie (od lewej do prawej, np. 3. okres):</strong> Wraz ze wzrostem liczby atomowej <i>Z</i> rośnie elektroujemność pierwiastka i maksymalny stopień utlenienia, wiązanie E&ndash;O zmienia charakter z jonowego na kowalencyjny spolaryzowany, przez co <strong>maleją właściwości zasadowe, a rosną właściwości kwasowe tlenków</strong>:</p>

            <!-- WYKRES 2: EWOLUCJA CHARAKTERU TLENKÓW 3. OKRESU (SVG) -->
            <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 12px; padding: 14px; margin: 16px 0; text-align: center;">
                <svg viewBox="0 0 840 135" style="width: 100%; max-width: 840px; height: auto;">
                    <defs>
                        <linearGradient id="grad-period3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#2563eb"/>
                            <stop offset="28%" stop-color="#38bdf8"/>
                            <stop offset="42%" stop-color="#a855f7"/>
                            <stop offset="58%" stop-color="#f59e0b"/>
                            <stop offset="100%" stop-color="#ef4444"/>
                        </linearGradient>
                    </defs>

                    <!-- Kafelki tlenków -->
                    <rect x="15" y="12" width="105" height="52" rx="7" fill="rgba(37, 99, 235, 0.25)" stroke="#3b82f6" stroke-width="2"/>
                    <text x="67" y="34" fill="#93c5fd" font-size="13" font-weight="bold" text-anchor="middle">Na<tspan dy="3" font-size="9">2</tspan><tspan dy="-3">O</tspan></text>
                    <text x="67" y="52" fill="#bfdbfe" font-size="10.5" text-anchor="middle">silnie zasadowy</text>

                    <rect x="132" y="12" width="105" height="52" rx="7" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2"/>
                    <text x="184" y="34" fill="#7dd3fc" font-size="13" font-weight="bold" text-anchor="middle">MgO</text>
                    <text x="184" y="52" fill="#bae6fd" font-size="10.5" text-anchor="middle">zasadowy</text>

                    <rect x="249" y="12" width="105" height="52" rx="7" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" stroke-width="2"/>
                    <text x="301" y="34" fill="#d8b4fe" font-size="13" font-weight="bold" text-anchor="middle">Al<tspan dy="3" font-size="9">2</tspan><tspan dy="-3">O</tspan><tspan dy="3" font-size="9">3</tspan></text>
                    <text x="301" y="52" fill="#e9d5ff" font-size="10.5" text-anchor="middle">amfoteryczny</text>

                    <rect x="366" y="12" width="105" height="52" rx="7" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="2"/>
                    <text x="418" y="34" fill="#fcd34d" font-size="13" font-weight="bold" text-anchor="middle">SiO<tspan dy="3" font-size="9">2</tspan></text>
                    <text x="418" y="52" fill="#fef3c7" font-size="10.5" text-anchor="middle">słabo kwasowy</text>

                    <rect x="483" y="12" width="105" height="52" rx="7" fill="rgba(249, 115, 22, 0.2)" stroke="#f97316" stroke-width="2"/>
                    <text x="535" y="34" fill="#fdba74" font-size="13" font-weight="bold" text-anchor="middle">P<tspan dy="3" font-size="9">4</tspan><tspan dy="-3">O</tspan><tspan dy="3" font-size="9">10</tspan></text>
                    <text x="535" y="52" fill="#ffedd5" font-size="10.5" text-anchor="middle">kwasowy</text>

                    <rect x="600" y="12" width="105" height="52" rx="7" fill="rgba(239, 68, 68, 0.22)" stroke="#ef4444" stroke-width="2"/>
                    <text x="652" y="34" fill="#fca5a5" font-size="13" font-weight="bold" text-anchor="middle">SO<tspan dy="3" font-size="9">3</tspan></text>
                    <text x="652" y="52" fill="#fee2e2" font-size="10.5" text-anchor="middle">silnie kwasowy</text>

                    <rect x="717" y="12" width="108" height="52" rx="7" fill="rgba(220, 38, 38, 0.32)" stroke="#dc2626" stroke-width="2"/>
                    <text x="771" y="34" fill="#fecaca" font-size="13" font-weight="bold" text-anchor="middle">Cl<tspan dy="3" font-size="9">2</tspan><tspan dy="-3">O</tspan><tspan dy="3" font-size="9">7</tspan></text>
                    <text x="771" y="52" fill="#fef2f2" font-size="10.5" text-anchor="middle">b. silnie kwasowy</text>

                    <!-- Pasek gradientu -->
                    <rect x="15" y="76" width="810" height="14" rx="7" fill="url(#grad-period3)"/>
                    <text x="420" y="108" fill="#f8fafc" font-size="11.5" font-weight="bold" text-anchor="middle">Wzrost liczby atomowej Z, wzrost elektroujemności, zmiana wiązania: JONOWE &rarr; KOWALENCYJNE SPOLARYZOWANE</text>
                    <text x="420" y="125" fill="#94a3b8" font-size="11" text-anchor="middle">Maleje charakter zasadowy &nbsp;|&nbsp; Rośnie charakter kwasowy tlenków &rarr;</text>
                </svg>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">
                    <strong>Rys. 2.</strong> Ewolucja charakteru chemicznego i budowy krystalicznej tlenków pierwiastków 3. okresu na maksymalnych stopniach utlenienia.
                </div>
            </div>

            <p><strong>2. W grupie głównej (z góry na dół, np. grupa 2. lub 15.):</strong> Wraz ze wzrostem liczby atomowej <i>Z</i> rośnie promień atomowy i charakter metaliczny pierwiastka, a maleje elektroujemność, dlatego w dół grupy zawsze <strong>rosną właściwości zasadowe, a maleją właściwości kwasowe tlenków</strong>:</p>
            <ul class="note-list">
                <li><strong>W 2. grupie (berylowce):</strong> BeO <em>(amfoteryczny)</em> &rarr; MgO <em>(słabo zasadowy)</em> &rarr; CaO, SrO, BaO <em>(silnie zasadowe)</em>.</li>
                <li><strong>W 15. grupie (azotowce na +III stopniu utlenienia):</strong> N<sub>2</sub>O<sub>3</sub>, P<sub>4</sub>O<sub>6</sub> <em>(kwasowe)</em> &rarr; As<sub>2</sub>O<sub>3</sub>, Sb<sub>2</sub>O<sub>3</sub> <em>(amfoteryczne)</em> &rarr; Bi<sub>2</sub>O<sub>3</sub> <em>(zasadowy!)</em>.</li>
            </ul>

            <p><strong>3. Dla tego samego pierwiastka na różnych stopniach utlenienia (żelazna reguła dla chromu i manganu):</strong> Wraz ze wzrostem stopnia utlenienia pierwiastka w tlenku rośnie polaryzacja wiązania M&ndash;O, przez co <strong>maleje charakter zasadowy, a rośnie charakter kwasowy tlenku</strong>:</p>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Pierwiastek</th>
                            <th>Niskie stopnie utlenienia (+II, +III) – tlenki zasadowe</th>
                            <th>Średnie stopnie utlenienia (+III, +IV) – tlenki amfoteryczne</th>
                            <th>Wysokie stopnie utlenienia (+VI, +VII) – tlenki kwasowe</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Chrom (Cr)</strong><br><sub>24</sub>Cr: [Ar] 3d<sup>5</sup>4s<sup>1</sup></td>
                            <td><strong>CrO – tlenek chromu(II) (stopień +II)</strong><br><span style="color: #94a3b8; font-weight: bold;">Czarny proszek</span>, <strong>zasadowy</strong>:<br>CrO + 2HCl &rarr; CrCl<sub>2</sub> + H<sub>2</sub>O</td>
                            <td><strong>Cr<sub>2</sub>O<sub>3</sub> – tlenek chromu(III) (stopień +III)</strong><br><span style="color: #22c55e; font-weight: bold;">Ciemnozielony</span>, trudno topliwy, <strong>amfoteryczny</strong>:<br>• z HCl: Cr<sub>2</sub>O<sub>3</sub> + 6H<sup>+</sup> &rarr; 2Cr<sup>3+</sup> + 3H<sub>2</sub>O<br>• z NaOH: Cr<sub>2</sub>O<sub>3</sub> + 6OH<sup>&minus;</sup> + 3H<sub>2</sub>O &rarr; 2[Cr(OH)<sub>6</sub>]<sup>3&minus;</sup></td>
                            <td><strong>CrO<sub>3</sub> – tlenek chromu(VI) (stopień +VI)</strong><br><span style="color: #ef4444; font-weight: bold;">Ciemnoczerwony</span>, trujący, <strong>kwasowy</strong> i silnie utleniający:<br>CrO<sub>3</sub> + 2KOH &rarr; K<sub>2</sub>CrO<sub>4</sub> (<span style="color: #facc15;">żółty</span>) + H<sub>2</sub>O<br>2CrO<sub>3</sub> + 2KOH &rarr; K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> (<span style="color: #fb923c;">pomarańczowy</span>) + H<sub>2</sub>O</td>
                        </tr>
                        <tr>
                            <td><strong>Mangan (Mn)</strong><br><sub>25</sub>Mn: [Ar] 3d<sup>5</sup>4s<sup>2</sup></td>
                            <td><strong>MnO – tlenek manganu(II)</strong> (stopień +II, <span style="color: #86efac;">zielonoszary</span>, <strong>zasadowy</strong>)<br><strong>Mn<sub>2</sub>O<sub>3</sub> – tlenek manganu(III)</strong> (stopień +III, <span style="color: #b45309;">brunatny</span>, <strong>słabo zasadowy</strong>)</td>
                            <td><strong>MnO<sub>2</sub> – tlenek manganu(IV) (braunsztyn, stopień +IV)</strong><br><span style="color: #a16207; font-weight: bold;">Czarny/ciemnobrunatny osad</span>, <strong>amfoteryczny</strong> oraz utleniacz (w stężonym HCl wydziela Cl<sub>2</sub>&uarr;!):<br>MnO<sub>2</sub> + 4HCl<sub>(stęż)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> MnCl<sub>2</sub> + Cl<sub>2</sub>&uarr; + 2H<sub>2</sub>O</td>
                            <td><strong>MnO<sub>3</sub> – tlenek manganu(VI)</strong> (stopień +VI, <strong>kwasowy</strong>)<br><strong>Mn<sub>2</sub>O<sub>7</sub> – tlenek manganu(VII)</strong> (stopień +VII, oleista zielonobrunatna ciecz, <strong>silnie kwasowy</strong>):<br>Mn<sub>2</sub>O<sub>7</sub> + 2KOH &rarr; 2KMnO<sub>4</sub> (<span style="color: #c084fc;">fioletowy</span>) + H<sub>2</sub>O</td>
                        </tr>
                        <tr>
                            <td><strong>Żelazo (Fe)</strong><br><sub>26</sub>Fe: [Ar] 3d<sup>6</sup>4s<sup>2</sup></td>
                            <td><strong>FeO – tlenek żelaza(II) (stopień +II)</strong><br><span style="color: #94a3b8; font-weight: bold;">Czarny proszek</span>, <strong>zasadowy</strong>:<br>FeO + H<sub>2</sub>SO<sub>4</sub> &rarr; FeSO<sub>4</sub> + H<sub>2</sub>O</td>
                            <td><strong>Fe<sub>2</sub>O<sub>3</sub> – tlenek żelaza(III)</strong> (hematyt, stopień +III, <span style="color: #f87171;">czerwonobrunatny</span>). Przewaga właściwości zasadowych, ale wykazuje <strong>słaby amfoteryzm</strong> (reaguje ze stopionym NaOH: Fe<sub>2</sub>O<sub>3</sub> + 2NaOH <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 2NaFeO<sub>2</sub> + H<sub>2</sub>O).<br><strong>Fe<sub>3</sub>O<sub>4</sub></strong> (FeO &middot; Fe<sub>2</sub>O<sub>3</sub>, magnetyt) + 8HCl &rarr; FeCl<sub>2</sub> + 2FeCl<sub>3</sub> + 4H<sub>2</sub>O</td>
                            <td><em>(Nie tworzy trwałego tlenku FeO<sub>3</sub>, choć w silnie alkalicznym środowisku istnieją <span style="color: #e879f9;">fioletowoczerwone</span> jony żelazianowe(VI) FeO<sub>4</sub><sup>2&minus;</sup>).</em></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Wodorki – Budowa, Stopnie Utlenienia Wodoru, Charakter Chemiczny i Reaktywność</h3>
            <p><strong>Wodorki</strong> to dwuskładnikowe związki chemiczne wodoru z innymi pierwiastkami. Ponieważ elektroujemność wodoru w skali Paulinga wynosi &chi;<sub>H</sub> = 2,1 (lub 2,2) i przyjmuje wartość pośrednią pomiędzy elektroujemnością metali (&chi; &lt; 1,8) a większości niemetali (&chi; &gt; 2,2), wodór w swoich związkach może występować zarówno na <strong>&minus;I stopniu utlenienia</strong> (w wodorkach metali oraz boru i krzemu, gdzie stanowi anion wodorkowy H<sup>&minus;</sup>), jak i na <strong>+I stopniu utlenienia</strong> (w wodorkach niemetali grup 15–17 oraz w węglowodorach).</p>

            <h4>A. Podział wodorków ze względu na typ wiązania oraz charakter kwasowo-zasadowy</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Grupa wodorków (wymagana w PP)</th>
                            <th>Typ wiązania i stan skupienia (25&deg;C)</th>
                            <th>Stopień utlenienia H i charakter chemiczny</th>
                            <th>Zachowanie wobec wody, kwasów i zasad – równania reakcji</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Wodorki litowców i berylowców (typu soli):</strong><br>LiH, NaH, KH, CaH<sub>2</sub>, MgH<sub>2</sub>, BaH<sub>2</sub></td>
                            <td><strong>Wiązanie jonowe</strong> (kryształy jonowe zbudowane z kationów M<sup>n+</sup> i anionów wodorkowych H<sup>&minus;</sup>). Białe ciała stałe o wysokich temp. topnienia.</td>
                            <td>Stopień utlenienia wodoru: <strong>&minus;I</strong>.<br>Charakter: <strong>SILNIE ZASADOWY</strong> (oraz silnie redukujący!). Anion H<sup>&minus;</sup> jest niezwykle mocną zasadą Br&oslash;nsteda!</td>
                            <td>Reagują gwałtownie i nieodwracalnie z wodą oraz z kwasami z wydzieleniem gazowego wodoru H<sub>2</sub>&uarr; i utworzeniem zasady (roztwór barwi fenoloftaleinę na <span style="color: #f472b6; font-weight: bold;">malinowo</span>!):<br>• LiH + H<sub>2</sub>O &rarr; LiOH + H<sub>2</sub>&uarr; &nbsp;(jonowo: H<sup>&minus;</sup> + H<sub>2</sub>O &rarr; OH<sup>&minus;</sup> + H<sub>2</sub>&uarr;)<br>• CaH<sub>2</sub> + 2H<sub>2</sub>O &rarr; Ca(OH)<sub>2</sub> + 2H<sub>2</sub>&uarr;<br>• NaH + HCl &rarr; NaCl + H<sub>2</sub>&uarr;<br><em>Uwaga redoks:</em> W reakcji H<sup>&minus;I</sup> + H<sup>+I</sup>OH &rarr; H<sub>2</sub><sup>0</sup>&uarr; + OH<sup>&minus;</sup> wodorek pełni rolę reduktora, a woda utleniacza (reakcja synproporcjonowania)!</td>
                        </tr>
                        <tr>
                            <td><strong>Wodorki grupy 14.:</strong><br>CH<sub>4</sub> (metan), SiH<sub>4</sub> (silan)</td>
                            <td><strong>Kowalencyjne słabo spolaryzowane</strong> (cząsteczki tetraedryczne sp<sup>3</sup>, niepolarne &mu; = 0). Gazy.</td>
                            <td>W CH<sub>4</sub>: C(&minus;IV), H(+I).<br>W SiH<sub>4</sub>: Si(+IV), H(&minus;I).<br>Charakter: <strong>OBOJĘTNY</strong> (wobec H<sub>2</sub>O, HCl i NaOH dla CH<sub>4</sub>).</td>
                            <td>• Metan (CH<sub>4</sub>) jest całkowicie obojętny chemicznie wobec wody, kwasów i zasad (nie rozpuszcza się w wodzie, nie zmienia barwy wskaźników).<br>• <em>Uwaga rozszerzona dla SiH<sub>4</sub>:</em> Silan w czystej wodzie (pH = 7) jest obojętny, ale w obecności zasad ulega hydrolizie z wydzieleniem wodoru: SiH<sub>4</sub> + 2NaOH + H<sub>2</sub>O &rarr; Na<sub>2</sub>SiO<sub>3</sub> + 4H<sub>2</sub>&uarr;.</td>
                        </tr>
                        <tr>
                            <td><strong>Wodorki grupy 15.:</strong><br>NH<sub>3</sub> (amoniak), PH<sub>3</sub> (fosfina)</td>
                            <td><strong>Kowalencyjne spolaryzowane</strong> (piramida trygonalna sp<sup>3</sup>, wolna para elektronowa na atomie N/P). Gazy.</td>
                            <td>Stopień utlenienia H: <strong>+I</strong> (N i P mają &minus;III).<br>Charakter: <strong>ZASADOWY</strong> (NH<sub>3</sub> – słaba zasada; PH<sub>3</sub> – skrajnie słaba zasada, niemal obojętny w H<sub>2</sub>O).</td>
                            <td>Dzięki wolnej parze elektronowej na atomie azotu amoniak jest akceptorem protonu (zasadą Br&oslash;nsteda i zasadą Lewisa):<br>• Z wodą (woda amoniakalna, odczyn zasadowy): NH<sub>3</sub> + H<sub>2</sub>O &#8652; NH<sub>4</sub><sup>+</sup> + OH<sup>&minus;</sup><br>• Z kwasami (tworzy sole amonowe, białe dymy z HCl): NH<sub>3(g)</sub> + HCl<sub>(g)</sub> &rarr; NH<sub>4</sub>Cl<sub>(s)</sub><br>• Fosfina PH<sub>3</sub> nie reaguje zauważalnie z wodą, ale z mocnymi kwasami (HI, HClO<sub>4</sub>) tworzy sole fosfoniowe: PH<sub>3</sub> + HI &rarr; PH<sub>4</sub>I (jodek fosfoniowy).</td>
                        </tr>
                        <tr>
                            <td><strong>Wodorki grupy 16. i 17.:</strong><br>H<sub>2</sub>S, HF, HCl, HBr, HI (oraz H<sub>2</sub>O)</td>
                            <td><strong>Kowalencyjne silnie spolaryzowane</strong>. W H<sub>2</sub>O i HF występują silne wiązania wodorowe (stąd H<sub>2</sub>O to ciecz, a HF wrze w +19,5&deg;C). Pozostałe to gazy.</td>
                            <td>Stopień utlenienia H: <strong>+I</strong>.<br>Charakter: <strong>KWASOWY</strong> (dla H<sub>2</sub>S i HX).<br>H<sub>2</sub>O ma charakter <strong>AMFOTERYCZNY</strong> (amfiprotyczny, odczyn obojętny pH = 7).</td>
                            <td>Po rozpuszczeniu w wodzie ulegają dysocjacji jonowej (reakcji z wodą zgodnie z teorią Br&oslash;nsteda), tworząc kwasy beztlenowe (oranż metylowy barwi się na <span style="color: #f87171; font-weight: bold;">czerwono</span>!):<br>• HCl + H<sub>2</sub>O &rarr; H<sub>3</sub>O<sup>+</sup> + Cl<sup>&minus;</sup> (mocny kwas)<br>• HF + H<sub>2</sub>O &#8652; H<sub>3</sub>O<sup>+</sup> + F<sup>&minus;</sup> (<strong>słaby kwas!</strong>)<br>• H<sub>2</sub>S + H<sub>2</sub>O &#8652; H<sub>3</sub>O<sup>+</sup> + HS<sup>&minus;</sup> (słaby kwas dwuprotonowy)<br>• Reagują z zasadami: H<sub>2</sub>S + 2NaOH &rarr; Na<sub>2</sub>S + 2H<sub>2</sub>O</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>B. Otrzymywanie wodorków oraz zmienność ich właściwości w układzie okresowym</h4>
            <ul class="note-list">
                <li><strong>Metody otrzymywania wodorków:</strong>
                    <div class="chem-eq">
                        1) Bezpośrednia synteza z pierwiastków: &nbsp; 2Na + H<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 2NaH &nbsp;|&nbsp; N<sub>2</sub> + 3H<sub>2</sub> <span class="chem-arrow"><span class="cond-top">p, T, Fe</span><span class="arrow-sym">&#8652;</span></span> 2NH<sub>3</sub> &nbsp;|&nbsp; H<sub>2</sub> + Cl<sub>2</sub> <span class="chem-arrow"><span class="cond-top">h&nu;</span><span class="arrow-sym">&rarr;</span></span> 2HCl &nbsp;|&nbsp; H<sub>2</sub> + S <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> H<sub>2</sub>S<br>
                        2) Działanie mocnym kwasem na sól kwasu beztlenowego lub wodą na azotek/fosforek/węglik:<br>
                        FeS + 2HCl &rarr; FeCl<sub>2</sub> + H<sub>2</sub>S&uarr; &nbsp;|&nbsp; NaCl<sub>(s)</sub> + H<sub>2</sub>SO<sub>4(stęż)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> NaHSO<sub>4</sub> + HCl&uarr; &nbsp;|&nbsp; Mg<sub>3</sub>N<sub>2</sub> + 6H<sub>2</sub>O &rarr; 3Mg(OH)<sub>2</sub>&darr; + 2NH<sub>3</sub>&uarr;<br>
                        3) Wypieranie amoniaku z soli amonowych mocną zasadą na gorąco: &nbsp; NH<sub>4</sub>Cl + NaOH <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> NaCl + NH<sub>3</sub>&uarr; + H<sub>2</sub>O
                    </div>
                </li>
                <li><strong>Zmienność w okresie (np. 2. okres: LiH &rarr; BeH<sub>2</sub> &rarr; B<sub>2</sub>H<sub>6</sub> &rarr; CH<sub>4</sub> &rarr; NH<sub>3</sub> &rarr; H<sub>2</sub>O &rarr; HF):</strong> Wraz ze wzrostem liczby atomowej <i>Z</i> w okresie charakter wodorków zmienia się od zasadowego (LiH), poprzez obojętny (CH<sub>4</sub>), ponownie słabo zasadowy (NH<sub>3</sub> – z uwagi na wolną parę elektronową!), amfoteryczny (H<sub>2</sub>O), aż do kwasowego (HF).</li>
                <li><strong>Zmienność w grupie 16. i 17. (z góry na dół: HF &rarr; HCl &rarr; HBr &rarr; HI oraz H<sub>2</sub>O &rarr; H<sub>2</sub>S &rarr; H<sub>2</sub>Se &rarr; H<sub>2</sub>Te):</strong> W miarę schodzenia w dół grupy gwałtownie rośnie promień atomowy niemetalu (<i>r</i><sub>F</sub> &lt; <i>r</i><sub>Cl</sub> &lt; <i>r</i><sub>Br</sub> &lt; <i>r</i><sub>I</sub>), przez co wydłuża się i słabnie wiązanie H&ndash;X (energia dysocjacji wiązania maleje). Skutkuje to trzema fundamentalnymi konsekwencjami maturalnymi:
                    <ol class="note-list">
                        <li><strong>Rośnie moc kwasów beztlenowych w roztworze wodnym:</strong> <strong>HF (słaby!) &lt; HCl &lt; HBr &lt; HI (najmocniejszy)</strong> oraz <strong>H<sub>2</sub>O &lt; H<sub>2</sub>S &lt; H<sub>2</sub>Se &lt; H<sub>2</sub>Te</strong> (łatwiej oderwać proton H<sup>+</sup> od dużego jonu I<sup>&minus;</sup> niż od małego jonu F<sup>&minus;</sup>!).</li>
                        <li><strong>Maleje trwałość termiczna cząsteczek wodorków:</strong> HF jest niezwykle trwały termicznie, natomiast HI łatwo rozpada się po ogrzaniu na pierwiastki (2HI &#8652; H<sub>2</sub> + I<sub>2</sub>).</li>
                        <li><strong>Rosną właściwości redukujące wodorków:</strong> HF nie ma właściwości redukujących, HCl redukuje tylko silne utleniacze (KMnO<sub>4</sub>, MnO<sub>2</sub>), natomiast HBr, HI oraz H<sub>2</sub>S są silnymi reduktorami (utleniają się już pod wpływem stężonego H<sub>2</sub>SO<sub>4</sub>, a roztwory HI i H<sub>2</sub>S mętnieją na powietrzu wskutek utleniania tlenem: 2H<sub>2</sub>S + O<sub>2</sub> &rarr; 2S&darr; + 2H<sub>2</sub>O).</li>
                    </ol>
                </li>
            </ul>
        </div>

        <!-- SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Wodorotlenki, Zasady oraz Chemia Hydroksokompleksów (Amfoteryczność)</h3>
            <p><strong>Wodorotlenki</strong> to związki chemiczne o wzorze ogólnym M(OH)<sub>n</sub>, zbudowane z kationów metalu M<sup>n+</sup> oraz grup wodorotlenkowych (hydroksylowych) OH<sup>&minus;</sup>. W temperaturze pokojowej wszystkie wodorotlenki są ciałami stałymi. Te wodorotlenki, które dobrze rozpuszczają się w wodzie i ulegają dysocjacji elektrolitycznej na kationy metalu i aniony OH<sup>&minus;</sup>, nazywamy <strong>wodorotlenkami zasadowymi</strong>, a ich wodne roztwory (oraz same te związki w ujęciu rozszerzonym) nazywamy <strong>zasadami (alkaliami)</strong>.</p>

            <div class="note-alert danger">
                🔥 <strong>RELACJA POJĘCIOWA: Wodorotlenek a Zasada (klasyczne pytanie prawda/fałsz na maturze):</strong>
                <ul class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li><strong>Nie każdy wodorotlenek jest zasadą!</strong> Wodorotlenki nierozpuszczalne w wodzie (np. Cu(OH)<sub>2</sub>, Fe(OH)<sub>3</sub>, Al(OH)<sub>3</sub>, Zn(OH)<sub>2</sub>, Cr(OH)<sub>3</sub>, Be(OH)<sub>2</sub>) są wodorotlenkami, ale <strong>NIE SĄ zasadami</strong> (ich zawiesiny wodne nie barwią fenoloftaleiny na malinowo!). Zasadami są wyłącznie wodorotlenki litowców (LiOH, NaOH, KOH, RbOH, CsOH) oraz berylowców od wapnia w dół (Ca(OH)<sub>2</sub>, Sr(OH)<sub>2</sub>, Ba(OH)<sub>2</sub>; Mg(OH)<sub>2</sub> jest bardzo trudno rozpuszczalny).</li>
                    <li><strong>Nie każda zasada jest wodorotlenkiem!</strong> Wodny roztwór amoniaku (NH<sub>3(aq)</sub>, woda amoniakalna) czy wodne roztwory amin (np. CH<sub>3</sub>NH<sub>2</sub>) oraz węglanów (Na<sub>2</sub>CO<sub>3</sub>) wykazują odczyn zasadowy i są zasadami według teorii Br&oslash;nsteda–Lowry’ego (NH<sub>3</sub> + H<sub>2</sub>O &#8652; NH<sub>4</sub><sup>+</sup> + OH<sup>&minus;</sup>), mimo że <strong>nie istnieje wyodrębniony związek cząsteczkowy o wzorze „NH<sub>4</sub>OH”!</strong> Na maturze zapisu „NH<sub>4</sub>OH” bezwzględnie nie wolno stosować – zapisujemy wyłącznie <strong>NH<sub>3(aq)</sub></strong> lub <strong>NH<sub>3</sub> &middot; H<sub>2</sub>O</strong>!</li>
                </ul>
            </div>

            <h4>A. Metody otrzymywania wodorotlenków – dobór metody do rozpuszczalności wodorotlenku!</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Grupa docelowa</th>
                            <th>Metoda otrzymywania i warunki reakcji</th>
                            <th>Wzorcowe równania reakcji (cząsteczkowe i jonowe skrócone)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>A. Wodorotlenki dobrze rozpuszczalne w wodzie (ZASADY):</strong><br>LiOH, NaOH, KOH, RbOH, CsOH, Ca(OH)<sub>2</sub>, Sr(OH)<sub>2</sub>, Ba(OH)<sub>2</sub></td>
                            <td>1. Reakcja aktywnego metalu (1. lub 2. grupy, oprócz Be!) z wodą (dla Mg reakcja zachodzi tylko z wrzącą wodą / parą wodną).<br>2. Reakcja tlenku zasadowego (1. lub 2. grupy, oprócz BeO) z wodą (np. gaszenie wapna palonego).<br>3. Reakcja wodorku metalu (1. lub 2. grupy) z wodą.<br>4. Reakcja wymiany soli (np. Na<sub>2</sub>CO<sub>3</sub> lub Na<sub>2</sub>SO<sub>4</sub>) z zasadą strącającą osad (metoda kaustyfikacji).</td>
                            <td>• 2Na + 2H<sub>2</sub>O &rarr; 2Na<sup>+</sup> + 2OH<sup>&minus;</sup> + H<sub>2</sub>&uarr;<br>• Ca + 2H<sub>2</sub>O &rarr; Ca(OH)<sub>2</sub> + H<sub>2</sub>&uarr;<br>• K<sub>2</sub>O + H<sub>2</sub>O &rarr; 2K<sup>+</sup> + 2OH<sup>&minus;</sup><br>• CaO + H<sub>2</sub>O &rarr; Ca(OH)<sub>2</sub> (&Delta;<i>H</i> &lt; 0)<br>• KH + H<sub>2</sub>O &rarr; K<sup>+</sup> + OH<sup>&minus;</sup> + H<sub>2</sub>&uarr;<br>• Na<sub>2</sub>CO<sub>3</sub> + Ca(OH)<sub>2</sub> &rarr; CaCO<sub>3</sub>&darr; + 2NaOH<br>(jonowo: CO<sub>3</sub><sup>2&minus;</sup> + Ca<sup>2+</sup> &rarr; CaCO<sub>3</sub>&darr;)</td>
                        </tr>
                        <tr>
                            <td><strong>B. Wodorotlenki trudno rozpuszczalne (OSADY zasadowe i amfoteryczne):</strong><br>Mg(OH)<sub>2</sub>&darr;, Cu(OH)<sub>2</sub>&darr;, Fe(OH)<sub>2</sub>&darr;, Fe(OH)<sub>3</sub>&darr;, Al(OH)<sub>3</sub>&darr;, Zn(OH)<sub>2</sub>&darr;, Cr(OH)<sub>3</sub>&darr;, Be(OH)<sub>2</sub>&darr;, Mn(OH)<sub>2</sub>&darr;, Ni(OH)<sub>2</sub>&darr;, Co(OH)<sub>2</sub>&darr;</td>
                            <td><strong>NIE MOŻNA ich otrzymać w reakcji metalu lub tlenku z wodą!</strong> Otrzymuje się je wyłącznie w <strong>reakcji strąceniowej</strong>: działając na rozpuszczalną w wodzie sól danego metalu (np. chlorek, azotan(V), siarczan(VI)) roztworem mocnej zasady (NaOH, KOH) lub wodą amoniakalną NH<sub>3(aq)</sub>.<br><br><span style="color: #f87171; font-weight: bold;">⚠️ UWAGA MATURALNA dla wodorotlenków amfoterycznych (Al, Zn, Cr, Be):</span> Aby strącić osad wodorotlenku amfoterycznego, mocną zasadę (NaOH/KOH) należy dodawać <strong>kroplami (w niedomiarze / stechiometrycznie)</strong> lub użyć słabej zasady – wody amoniakalnej NH<sub>3(aq)</sub> (z wyjątkiem Zn<sup>2+</sup> i Cu<sup>2+</sup>, które w nadmiarze NH<sub>3(aq)</sub> tworzą rozpuszczalne aminakompleksy!). W nadmiarze NaOH osad amfoteryczny ulegnie natychmiastowemu roztworzeniu!</td>
                            <td>• <strong>Strącanie mocną zasadą:</strong><br>FeCl<sub>3</sub> + 3NaOH &rarr; Fe(OH)<sub>3</sub>&darr; (<span style="color: #b45309;">rdzawobrunatny</span>) + 3NaCl<br>Fe<sup>3+</sup> + 3OH<sup>&minus;</sup> &rarr; Fe(OH)<sub>3</sub>&darr;<br>CuSO<sub>4</sub> + 2KOH &rarr; Cu(OH)<sub>2</sub>&darr; (<span style="color: #38bdf8;">niebieski</span>) + K<sub>2</sub>SO<sub>4</sub><br>Cu<sup>2+</sup> + 2OH<sup>&minus;</sup> &rarr; Cu(OH)<sub>2</sub>&darr;<br>• <strong>Strącanie wodą amoniakalną (ważny zapis jonowy na maturze – NH<sub>3</sub> jest słabym elektrolitem!):</strong><br>AlCl<sub>3</sub> + 3NH<sub>3</sub> + 3H<sub>2</sub>O &rarr; Al(OH)<sub>3</sub>&darr; + 3NH<sub>4</sub>Cl<br>Al<sup>3+</sup> + 3NH<sub>3</sub> + 3H<sub>2</sub>O &rarr; Al(OH)<sub>3</sub>&darr; + 3NH<sub>4</sub><sup>+</sup><br>• <strong>Strącanie Al(OH)<sub>3</sub> z kompleksu za pomocą słabego kwasu (CO<sub>2</sub>):</strong><br>[Al(OH)<sub>4</sub>]<sup>&minus;</sup> + CO<sub>2</sub> &rarr; Al(OH)<sub>3</sub>&darr; + HCO<sub>3</sub><sup>&minus;</sup></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>B. Barwy osadów wodorotlenków oraz ich przemiany na powietrzu (obowiązkowe obserwacje maturalne)</h4>
            <ul class="note-list">
                <li><strong><span style="color: #f8fafc;">Białe osady</span>:</strong> Mg(OH)<sub>2</sub>&darr;, Be(OH)<sub>2</sub>&darr;, Al(OH)<sub>3</sub>&darr; (biały, galaretowaty), Zn(OH)<sub>2</sub>&darr; (biały, galaretowaty), Pb(OH)<sub>2</sub>&darr;, Sn(OH)<sub>2</sub>&darr;, Cd(OH)<sub>2</sub>&darr;.</li>
                <li><strong>Cu(OH)<sub>2</sub>&darr;:</strong> <span style="color: #38bdf8; font-weight: bold;">jasnoniebieski (błękitny), galaretowaty osad</span>; po ogrzaniu zawiesiny <strong>czernieje</strong> wskutek rozkładu do <span style="color: #94a3b8; font-weight: bold;">CuO&darr;</span>.</li>
                <li><strong>Cr(OH)<sub>3</sub>&darr;:</strong> <span style="color: #6ee7b7; font-weight: bold;">szarozielony (zielonkawoszary) osad</span>.</li>
                <li><strong>Ni(OH)<sub>2</sub>&darr;:</strong> <span style="color: #4ade80; font-weight: bold;">jasnozielony (jabłkowozielony) osad</span>.</li>
                <li><strong>Fe(OH)<sub>2</sub>&darr;:</strong> <span style="color: #86efac; font-weight: bold;">brudnozielony (zielonkawobiały) osad</span>, który na powietrzu szybko <strong>brunatnieje</strong> (utlenia się tlenem atmosferycznym do <span style="color: #b45309; font-weight: bold;">rdzawobrunatnego Fe(OH)<sub>3</sub>&darr;</span>): 4 Fe(OH)<sub>2</sub> + O<sub>2</sub> + 2 H<sub>2</sub>O &rarr; 4 Fe(OH)<sub>3</sub>&darr;.</li>
                <li><strong>Mn(OH)<sub>2</sub>&darr;:</strong> <span style="color: #fda4af; font-weight: bold;">biały (lub jasnoróżowy/cielisty) osad</span>, który na powietrzu natychmiast <strong>ciemnieje (brunatnieje)</strong> na skutek utleniania tlenem do uwodnionego tlenku manganu(IV) lub MnO(OH): 2 Mn(OH)<sub>2</sub> + O<sub>2</sub> &rarr; 2 MnO<sub>2</sub>&darr; (<span style="color: #a16207; font-weight: bold;">brunatny</span>) + 2 H<sub>2</sub>O.</li>
                <li><strong>Ag<sub>2</sub>O&darr;</strong> (z reakcji Ag<sup>+</sup> + OH<sup>&minus;</sup>): <span style="color: #a16207; font-weight: bold;">ciemnobrunatny osad</span>; &nbsp;<strong>HgO&darr;</strong> (z reakcji Hg<sup>2+</sup> + 2OH<sup>&minus;</sup>): <span style="color: #facc15; font-weight: bold;">żółty osad</span>.</li>
            </ul>

            <h4>C. Amfoteryczność wodorotlenków i tlenków – kompendium hydroksokompleksów i aminakompleksów</h4>
            <p><strong>Wodorotlenki amfoteryczne</strong> (w podstawie programowej przede wszystkim: <strong>Al(OH)<sub>3</sub>, Zn(OH)<sub>2</sub>, Cr(OH)<sub>3</sub>, Be(OH)<sub>2</sub></strong>, a także Pb(OH)<sub>2</sub>, Sn(OH)<sub>2</sub> oraz słabo amfoteryczny Cu(OH)<sub>2</sub>) reagują zarówno z mocnymi kwasami (wówczas zachowują się jak zasady, tworząc proste kationy metalu M<sup>n+</sup>), jak i ze stężonymi roztworami mocnych zasad (NaOH, KOH), w których ulegają roztworzeniu z utworzeniem rozpuszczalnych w wodzie soli kompleksowych – <strong>hydroksokompleksów</strong>, gdzie metal amfoteryczny wchodzi w skład anionu kompleksowego [M(OH)<sub><i>k</i></sub>]<sup>(<i>k</i>&minus;<i>n</i>)&minus;</sup>.</p>

            <div class="note-alert">
                💡 <strong>Zasada określania liczby koordynacyjnej (LK) i ładunku jonu kompleksowego na maturze:</strong>
                <ul class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li>Ładunek jonu kompleksowego jest sumą algebraiczną ładunku jonu centralnego M<sup>n+</sup> oraz ładunków wszystkich ligandów (dla OH<sup>&minus;</sup> ładunek wynosi &minus;1, dla NH<sub>3</sub> i H<sub>2</sub>O wynosi 0).</li>
                    <li>Dla kationów dwudodatnich (Be<sup>2+</sup>, Zn<sup>2+</sup>, Cu<sup>2+</sup>, Pb<sup>2+</sup>) typowa liczba koordynacyjna wynosi <strong>LK = 4</strong> &rarr; powstają jony <strong>[M(OH)<sub>4</sub>]<sup>2&minus;</sup></strong> (ładunek: +2 + 4&middot;(&minus;1) = &minus;2).</li>
                    <li>Dla kationu glinu (Al<sup>3+</sup>) liczba koordynacyjna wynosi <strong>LK = 4</strong> (w roztworach bardziej stężonych: <strong>[Al(OH)<sub>4</sub>]<sup>&minus;</sup></strong>) lub <strong>LK = 6</strong> (<strong>[Al(OH)<sub>6</sub>]<sup>3&minus;</sup></strong>).</li>
                    <li>Dla kationu chromu(III) (Cr<sup>3+</sup>) liczba koordynacyjna wynosi najczęściej <strong>LK = 6</strong> &rarr; powstaje <span style="color: #10b981; font-weight: bold;">szmaragdowozielony</span> jon <strong>[Cr(OH)<sub>6</sub>]<sup>3&minus;</sup></strong> (ładunek: +3 + 6&middot;(&minus;1) = &minus;3), choć CKE akceptuje również zapis z LK = 4: [Cr(OH)<sub>4</sub>]<sup>&minus;</sup>.</li>
                </ul>
            </div>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Wodorotlenek amfoteryczny</th>
                            <th>Reakcja z mocnym kwasem (np. HCl, H<sub>2</sub>SO<sub>4</sub>)<br><em>(wodorotlenek zachowuje się jak zasada)</em></th>
                            <th>Reakcja z mocną zasadą w roztworze wodnym (NaOH / KOH)<br><em>(wodorotlenek zachowuje się jak kwas – powstaje hydroksokompleks)</em></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Wodorotlenek glinu Al(OH)<sub>3</sub></strong><br>(biały osad)</td>
                            <td>Cząsteczkowo: Al(OH)<sub>3</sub> + 3HCl &rarr; AlCl<sub>3</sub> + 3H<sub>2</sub>O<br>Jonowo: Al(OH)<sub>3</sub> + 3H<sup>+</sup> &rarr; Al<sup>3+</sup> + 3H<sub>2</sub>O<br><em>Obserwacja:</em> Biały osad roztwarza się, powstaje bezbarwny roztwór.</td>
                            <td>• Dla LK = 4: Al(OH)<sub>3</sub> + NaOH &rarr; Na[Al(OH)<sub>4</sub>] <em>(tetrahydroksoglinian sodu)</em><br>Jonowo: Al(OH)<sub>3</sub> + OH<sup>&minus;</sup> &rarr; [Al(OH)<sub>4</sub>]<sup>&minus;</sup><br>• Dla LK = 6: Al(OH)<sub>3</sub> + 3NaOH &rarr; Na<sub>3</sub>[Al(OH)<sub>6</sub>] <em>(heksahydroksoglinian sodu)</em><br>Jonowo: Al(OH)<sub>3</sub> + 3OH<sup>&minus;</sup> &rarr; [Al(OH)<sub>6</sub>]<sup>3&minus;</sup> (roztwór bezbarwny)</td>
                        </tr>
                        <tr>
                            <td><strong>Wodorotlenek cynku Zn(OH)<sub>2</sub></strong><br>(biały osad)</td>
                            <td>Cząsteczkowo: Zn(OH)<sub>2</sub> + 2HCl &rarr; ZnCl<sub>2</sub> + 2H<sub>2</sub>O<br>Jonowo: Zn(OH)<sub>2</sub> + 2H<sup>+</sup> &rarr; Zn<sup>2+</sup> + 2H<sub>2</sub>O<br><em>Obserwacja:</em> Biały osad roztwarza się, powstaje bezbarwny roztwór.</td>
                            <td>• Dla LK = 4: Zn(OH)<sub>2</sub> + 2NaOH &rarr; Na<sub>2</sub>[Zn(OH)<sub>4</sub>] <em>(tetrahydroksocynkan sodu)</em><br>Jonowo: Zn(OH)<sub>2</sub> + 2OH<sup>&minus;</sup> &rarr; [Zn(OH)<sub>4</sub>]<sup>2&minus;</sup> (roztwór bezbarwny)<br>• <em>Uwaga – reakcja z nadmiarem NH<sub>3(aq)</sub> (roztwarzanie w amoniaku!):</em><br>Zn(OH)<sub>2</sub> + 4NH<sub>3</sub> &rarr; [Zn(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup> + 2OH<sup>&minus;</sup> <em>(kation tetraaminacynkowy)</em></td>
                        </tr>
                        <tr>
                            <td><strong>Wodorotlenek chromu(III) Cr(OH)<sub>3</sub></strong><br>(<span style="color: #6ee7b7;">szarozielony osad</span>)</td>
                            <td>Cząsteczkowo: 2Cr(OH)<sub>3</sub> + 3H<sub>2</sub>SO<sub>4</sub> &rarr; Cr<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 6H<sub>2</sub>O<br>Jonowo: Cr(OH)<sub>3</sub> + 3H<sup>+</sup> &rarr; Cr<sup>3+</sup> + 3H<sub>2</sub>O<br><em>Obserwacja:</em> Szarozielony osad roztwarza się, powstaje <span style="color: #4ade80;">zielony</span> (lub <span style="color: #c084fc;">fioletowy</span>) roztwór.</td>
                            <td>• Dla LK = 6: Cr(OH)<sub>3</sub> + 3NaOH &rarr; Na<sub>3</sub>[Cr(OH)<sub>6</sub>] <em>(heksahydroksochromian(III) sodu)</em><br>Jonowo: Cr(OH)<sub>3</sub> + 3OH<sup>&minus;</sup> &rarr; [Cr(OH)<sub>6</sub>]<sup>3&minus;</sup><br><em>Obserwacja:</em> Szarozielony osad roztwarza się, powstaje klarowny, <span style="color: #10b981; font-weight: bold;">ciemnozielony (szmaragdowozielony) roztwór</span>!</td>
                        </tr>
                        <tr>
                            <td><strong>Wodorotlenek berylu Be(OH)<sub>2</sub></strong><br>(biały osad)</td>
                            <td>Cząsteczkowo: Be(OH)<sub>2</sub> + 2HCl &rarr; BeCl<sub>2</sub> + 2H<sub>2</sub>O<br>Jonowo: Be(OH)<sub>2</sub> + 2H<sup>+</sup> &rarr; Be<sup>2+</sup> + 2H<sub>2</sub>O</td>
                            <td>• Dla LK = 4: Be(OH)<sub>2</sub> + 2NaOH &rarr; Na<sub>2</sub>[Be(OH)<sub>4</sub>] <em>(tetrahydroksoberylan sodu)</em><br>Jonowo: Be(OH)<sub>2</sub> + 2OH<sup>&minus;</sup> &rarr; [Be(OH)<sub>4</sub>]<sup>2&minus;</sup> (roztwór bezbarwny)</td>
                        </tr>
                        <tr>
                            <td><strong>Wodorotlenek miedzi(II) Cu(OH)<sub>2</sub></strong><br>(<span style="color: #38bdf8;">niebieski osad</span> – bardzo słabo amfoteryczny)</td>
                            <td>Cząsteczkowo: Cu(OH)<sub>2</sub> + 2HNO<sub>3</sub> &rarr; Cu(NO<sub>3</sub>)<sub>2</sub> + 2H<sub>2</sub>O<br>Jonowo: Cu(OH)<sub>2</sub> + 2H<sup>+</sup> &rarr; Cu<sup>2+</sup> + 2H<sub>2</sub>O<br><em>Obserwacja:</em> Niebieski osad roztwarza się, powstaje <span style="color: #38bdf8;">niebieski roztwór</span>.</td>
                            <td>• Ze stężonym (np. 40%) NaOH: Cu(OH)<sub>2</sub> + 2NaOH &rarr; Na<sub>2</sub>[Cu(OH)<sub>4</sub>] (<span style="color: #3b82f6; font-weight: bold;">szafirowy roztwór</span> tetrahydroksomiedzianu(II) sodu)<br>• Z wodą amoniakalną NH<sub>3(aq)</sub> (tworzy <span style="color: #3b82f6; font-weight: bold;">szafirowy odczynnik Schweitzera</span> – rozpuszczający celulozę!):<br>Cu(OH)<sub>2</sub> + 4NH<sub>3</sub> &rarr; [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup> (<span style="color: #3b82f6;">szafirowy</span>) + 2OH<sup>&minus;</sup></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="note-alert danger">
                🔥 <strong>DWIE FUNDAMENTALNE PUŁAPKI MATURALNE DOTYCZĄCE AMFOTERYCZNOŚCI:</strong>
                <ol class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li><strong>Reakcja w roztworze wodnym a reakcja stapiania na sucho (bez udziału wody)!</strong><br>
                    Jeżeli tlenek lub wodorotlenek amfoteryczny reaguje z zasadą <strong>w roztworze wodnym</strong>, produktami są zawsze <strong>hydroksokompleksy</strong> (np. Na[Al(OH)<sub>4</sub>], Na<sub>2</sub>[Zn(OH)<sub>4</sub>]). Pamiętaj, że przy reakcji tlenku amfoterycznego z roztworem zasady po lewej stronie równania trzeba dopisać cząsteczki wody (np. ZnO + 2NaOH + H<sub>2</sub>O &rarr; Na<sub>2</sub>[Zn(OH)<sub>4</sub>])!<br>
                    Natomiast jeżeli w treści zadania wyraźnie napisano, że tlenek lub wodorotlenek <strong>stopiono ze stałym NaOH lub KOH</strong> (reakcja w wysokiej temperaturze, bez wody), wówczas woda odparowuje i powstają <strong>sole bezwodne (tzw. meta- lub ortosole)</strong>:<br>
                    • Stapianie ZnO z NaOH: &nbsp; ZnO + 2NaOH<sub>(s)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> <strong>Na<sub>2</sub>ZnO<sub>2</sub></strong> <em>(cynkan sodu / dioksocynkan(II) sodu)</em> + H<sub>2</sub>O&uarr;<br>
                    • Stapianie Al<sub>2</sub>O<sub>3</sub> z NaOH: &nbsp; Al<sub>2</sub>O<sub>3</sub> + 2NaOH<sub>(s)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> <strong>2NaAlO<sub>2</sub></strong> <em>(metaglinian sodu)</em> + H<sub>2</sub>O&uarr;</li>
                    <li><strong>Dlaczego rozpuszczalność Cu(OH)<sub>2</sub>, Zn(OH)<sub>2</sub> lub Ag<sub>2</sub>O w wodzie amoniakalnej NH<sub>3(aq)</sub> NIE DOWODZI ich amfoteryczności?</strong><br>
                    Roztworzenie osadu Cu(OH)<sub>2</sub>, Zn(OH)<sub>2</sub> lub Ag<sub>2</sub>O w nadmiarze wody amoniakalnej (np. Ag<sub>2</sub>O + 4NH<sub>3</sub> + H<sub>2</sub>O &rarr; 2[Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> + 2OH<sup>&minus;</sup> – próba Tollensa!) wynika z tworzenia kationowych kompleksów amonowych (<strong>aminakompleksów</strong>), w których amoniak NH<sub>3</sub> pełni funkcję obojętnego liganda (zasady Lewisa), a kation metalu pozostaje kationem centralnym! Aby udowodnić amfoteryczność wodorotlenku, należy użyć <strong>mocnej zasady (NaOH lub KOH)</strong>, a nie amoniaku! Co więcej, typowo amfoteryczny Al(OH)<sub>3</sub> w ogóle NIE roztwarza się w nadmiarze wody amoniakalnej!</li>
                </ol>
            </div>

            <h4>D. Reakcja amfoterycznych metali (Al, Zn, Be, Cr – na gorąco) oraz krzemu (Si) z roztworami mocnych zasad</h4>
            <p>Metale tworzące tlenki i wodorotlenki amfoteryczne roztwarzają się nie tylko w kwasach, ale również w wodnych roztworach mocnych zasad (NaOH, KOH) z wydzieleniem gazowego wodoru H<sub>2</sub>&uarr; (jest to reakcja utleniania-redukcji, w której utleniaczem jest woda!):</p>
            <div class="chem-eq">
                • 2 Al + 2 NaOH + 6 H<sub>2</sub>O &rarr; 2 Na[Al(OH)<sub>4</sub>] + 3 H<sub>2</sub>&uarr; &nbsp;(jonowo: 2 Al + 2 OH<sup>&minus;</sup> + 6 H<sub>2</sub>O &rarr; 2 [Al(OH)<sub>4</sub>]<sup>&minus;</sup> + 3 H<sub>2</sub>&uarr; – <em>zasada działania preparatów typu „Kret” do udrażniania rur!</em>)<br>
                • Zn + 2 NaOH + 2 H<sub>2</sub>O &rarr; Na<sub>2</sub>[Zn(OH)<sub>4</sub>] + H<sub>2</sub>&uarr; &nbsp;|&nbsp; Be + 2 NaOH + 2 H<sub>2</sub>O &rarr; Na<sub>2</sub>[Be(OH)<sub>4</sub>] + H<sub>2</sub>&uarr;
            </div>
        </div>

        <!-- SEKCJA 5 -->
        <div class="note-section">
            <h3>5. Kwasy Nieorganiczne – Klasyfikacja, Budowa, Moc, Właściwości Utleniające i Reakcje z Metalami</h3>
            <p><strong>Kwasy (w ujęciu Arrheniusa)</strong> to związki chemiczne o wzorze ogólnym H<sub>m</sub>R, które w roztworze wodnym dysocjują na kationy wodoru H<sup>+</sup> (ściślej: kationy oksoniowe H<sub>3</sub>O<sup>+</sup>) oraz aniony reszty kwasowej R<sup>m&minus;</sup>. Liczba atomów wodoru zdolnych do odszczepienia w postaci kationów H<sup>+</sup> określa tzw. <strong>zasadowość (protonowość) kwasu</strong> i decyduje o wartościowości reszty kwasowej (np. HCl, HNO<sub>3</sub>, HClO<sub>4</sub> to kwasy jednoprotonowe; H<sub>2</sub>SO<sub>4</sub>, H<sub>2</sub>SO<sub>3</sub>, H<sub>2</sub>CO<sub>3</sub>, H<sub>2</sub>S to kwasy dwuprotonowe; H<sub>3</sub>PO<sub>4</sub> to kwas trójprotonowy).</p>

            <div class="note-alert danger">
                🔥 <strong>WYJĄTKI STRUKTURALNE – Kiedy liczba atomów wodoru we wzorze kwasu NIE równa się liczbie odszczepianych protonów H<sup>+</sup>?</strong><br>
                W kwasach tlenowych dysocjacji ulegają <strong>wyłącznie te atomy wodoru, które są połączone z atomem centralnym za pośrednictwem atomu tlenu (w grupach &mdash;O&mdash;H)</strong>! Atomy wodoru połączone bezpośrednio z atomem fosforu lub boru (wiązanie P&mdash;H) <strong>NIE ulegają dysocjacji kwasowej</strong>:
                <ul class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li><strong>Kwas fosforawy / fosfonowy (H<sub>3</sub>PO<sub>3</sub>):</strong> Posiada w cząsteczce jedno wiązanie bezpośrednie P&mdash;H oraz tylko dwie grupy &mdash;OH (wzór strukturalny: HP(=O)(OH)<sub>2</sub>). Jest to więc kwas <strong>DWUPROTONOWY</strong> (dysocjuje tylko w dwóch etapach, tworzy maksymalnie dwudodatnie sole obojętne typu Na<sub>2</sub>HPO<sub>3</sub>, gdzie anion HPO<sub>3</sub><sup>2&minus;</sup> <strong>NIE jest już wodorosolą, lecz solą obojętną!</strong>).</li>
                    <li><strong>Kwas podfosforawy / fosfinowy (H<sub>3</sub>PO<sub>2</sub>):</strong> Posiada dwa wiązania P&mdash;H i tylko jedną grupę &mdash;OH (H<sub>2</sub>P(=O)(OH)) – jest to kwas <strong>JEDNOPROTONOWY</strong>!</li>
                    <li><strong>Kwas borowy (H<sub>3</sub>BO<sub>3</sub> / B(OH)<sub>3</sub>):</strong> Bardzo słaby kwas Lewisa, w wodzie nie odszczepia własnego protonu, lecz przyłącza jon OH<sup>&minus;</sup> z cząsteczki wody: B(OH)<sub>3</sub> + 2H<sub>2</sub>O &#8652; [B(OH)<sub>4</sub>]<sup>&minus;</sup> + H<sub>3</sub>O<sup>+</sup>.</li>
                </ul>
            </div>

            <h4>A. Kompleksowa klasyfikacja kwasów nieorganicznych (skład, moc, trwałość, lotność i właściwości utleniające)</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Kryterium podziału</th>
                            <th>Grupa I – charakterystyka i pełna lista maturalna</th>
                            <th>Grupa II – charakterystyka i pełna lista maturalna</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. Skład chemiczny</strong></td>
                            <td><strong>Kwasy beztlenowe (wodne roztwory wodorków):</strong><br>HF, HCl, HBr, HI, H<sub>2</sub>S, H<sub>2</sub>Se, H<sub>2</sub>Te, HCN (kwas cyjanowodorowy), HN<sub>3</sub> (kwas azotowodorowy), HSCN (kwas rodanowodorowy).</td>
                            <td><strong>Kwasy tlenowe (oksokwasy – pochodne bezwodników):</strong><br>HNO<sub>3</sub>, HNO<sub>2</sub>, H<sub>2</sub>SO<sub>4</sub>, H<sub>2</sub>SO<sub>3</sub>, H<sub>2</sub>CO<sub>3</sub>, H<sub>3</sub>PO<sub>4</sub>, H<sub>4</sub>P<sub>2</sub>O<sub>7</sub> (difosforowy(V)), HPO<sub>3</sub> (metafosforowy(V)), H<sub>2</sub>SiO<sub>3</sub>, H<sub>4</sub>SiO<sub>4</sub>, HClO, HClO<sub>2</sub>, HClO<sub>3</sub>, HClO<sub>4</sub>, HMnO<sub>4</sub>, H<sub>2</sub>CrO<sub>4</sub>, H<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>.</td>
                        </tr>
                        <tr>
                            <td><strong>2. Moc elektrolitu</strong><br>(stopień dysocjacji &alpha; i stała <i>K<sub>a</sub></i>)</td>
                            <td><strong>KWASY MOCNE (7 głównych na maturze!):</strong><br>• <strong>Beztlenowe:</strong> <strong>HCl, HBr, HI</strong> (pamiętaj: HF jest SŁABY!)<br>• <strong>Tlenowe:</strong> <strong>HNO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub>, HClO<sub>4</sub>, HClO<sub>3</sub></strong> (oraz HMnO<sub>4</sub>, HBrO<sub>4</sub>, HIO<sub>4</sub>).<br>W roztworach wodnych dysocjują całkowicie (zapis ze strzałką &rarr;).</td>
                            <td><strong>KWASY SŁABE (i średniej mocy):</strong><br>• <strong>Średniej mocy:</strong> H<sub>3</sub>PO<sub>4</sub>, H<sub>2</sub>SO<sub>3</sub> (I etap: <i>K</i><sub>a1</sub> &approx; 10<sup>&minus;2</sup>).<br>• <strong>Słabe i bardzo słabe:</strong> HF, H<sub>2</sub>S, HCN, HNO<sub>2</sub>, H<sub>2</sub>CO<sub>3</sub>, HClO, HClO<sub>2</sub>, H<sub>2</sub>SiO<sub>3</sub>, H<sub>3</sub>BO<sub>3</sub>.<br>Dysocjują odwracalnie i stopniowo (zapis &#8652;).</td>
                        </tr>
                        <tr>
                            <td><strong>3. Trwałość i lotność</strong></td>
                            <td><strong>Kwasy NIETRWAŁE (rozkładają się w momencie wydzielenia z soli!):</strong><br>• <strong>H<sub>2</sub>CO<sub>3</sub></strong> &rarr; H<sub>2</sub>O + CO<sub>2</sub>&uarr; (w zapisie jonowym piszemy: H<sub>2</sub>O + CO<sub>2</sub>&uarr;)<br>• <strong>H<sub>2</sub>SO<sub>3</sub></strong> &rarr; H<sub>2</sub>O + SO<sub>2</sub>&uarr; (w zapisie jonowym: H<sub>2</sub>O + SO<sub>2</sub>&uarr;)<br>• <strong>HNO<sub>2</sub>:</strong> 3HNO<sub>2</sub> &rarr; HNO<sub>3</sub> + 2NO&uarr; + H<sub>2</sub>O (NO na powietrzu &rarr; NO<sub>2</sub>)<br>• <strong>H<sub>2</sub>S<sub>2</sub>O<sub>3</sub></strong> (kwas tiosiarczkowy): H<sub>2</sub>S<sub>2</sub>O<sub>3</sub> &rarr; S&darr; (<span style="color: #facc15;">żółty osad</span>) + SO<sub>2</sub>&uarr; + H<sub>2</sub>O</td>
                            <td><strong>Kwasy TRWAŁE, ale LOTNE vs NIELOTNE:</strong><br>• <strong>Lotne (łatwo odparowują):</strong> HCl, HBr, HI, H<sub>2</sub>S, HCN, HF, HNO<sub>3</sub>.<br>• <strong>Trwałe i NIELOTNE:</strong> H<sub>2</sub>SO<sub>4</sub> (temp. wrzenia &sim;338&deg;C), H<sub>3</sub>PO<sub>4</sub>, H<sub>2</sub>SiO<sub>3</sub>&darr; (jedyny kwas nieorganiczny będący nierozpuszczalnym w wodzie białym/bezbarwnym galaretowatym osadem!).</td>
                        </tr>
                        <tr>
                            <td><strong>4. Właściwości utleniające</strong><br>(kluczowe w reakcjach z metalami!)</td>
                            <td><strong>KWASY NIEUTLENIAJĄCE</strong><br>(utleniaczem jest w nich wyłącznie kation H<sup>+</sup>, który redukuje się do H<sub>2</sub>&uarr;):<br>Wszystkie kwasy beztlenowe (HCl, HBr, HI, H<sub>2</sub>S, HF), <strong>rozcieńczony H<sub>2</sub>SO<sub>4</sub></strong>, H<sub>3</sub>PO<sub>4</sub>, H<sub>2</sub>CO<sub>3</sub> oraz kwasy organiczne (np. CH<sub>3</sub>COOH).<br>Reagują TYLKO z metalami aktywnymi (leżącymi przed wodorem w szeregu napięciowym, <i>E</i>&deg; &lt; 0,00 V).</td>
                            <td><strong>KWASY UTLENIAJĄCE</strong><br>(utleniaczem jest w nich anion reszty kwasowej: NO<sub>3</sub><sup>&minus;</sup>, SO<sub>4</sub><sup>2&minus;</sup>, ClO<sub>4</sub><sup>&minus;</sup>, ClO<sup>&minus;</sup> – NIGDY nie wydziela się z nich czysty wodór H<sub>2</sub> w reakcji z metalami ciężkimi!):<br>• <strong>HNO<sub>3</sub> (zarówno STĘŻONY, jak i ROZCIEŃCZONY!)</strong><br>• <strong>H<sub>2</sub>SO<sub>4</sub> (WYŁĄCZNIE STĘŻONY i zazwyczaj na gorąco!)</strong><br>• Kwasy tlenowe chloru (HClO, HClO<sub>3</sub>, HClO<sub>4</sub>) oraz woda królewska.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>B. Prawidłowości zmiany mocy kwasów tlenowych w układzie okresowym (reguła Paulinga)</h4>

            <!-- WYKRES 3: REGUŁY MOCY KWASÓW TLENOWYCH (SVG) -->
            <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 12px; padding: 14px; margin: 16px 0; text-align: center;">
                <svg viewBox="0 0 840 165" style="width: 100%; max-width: 840px; height: auto;">
                    <!-- Karta 1 -->
                    <rect x="12" y="10" width="400" height="145" rx="8" fill="rgba(30, 41, 59, 0.85)" stroke="#38bdf8" stroke-width="1.8"/>
                    <text x="212" y="34" fill="#38bdf8" font-size="12.5" font-weight="bold" text-anchor="middle">1. Kwasy tlenowe tego samego pierwiastka (wzrost st. utl.)</text>
                    <text x="212" y="54" fill="#cbd5e1" font-size="10.5" text-anchor="middle">Im więcej atomów tlenu niepołączonych z H (wzór (HO)<tspan dy="3" font-size="8">m</tspan><tspan dy="-3">EO</tspan><tspan dy="3" font-size="8">n</tspan><tspan dy="-3">),</tspan></text>
                    <text x="212" y="70" fill="#cbd5e1" font-size="10.5" text-anchor="middle">tym silniej atom centralny E przyciąga elektrony z wiązania O&ndash;H:</text>
                    <rect x="28" y="82" width="368" height="34" rx="6" fill="rgba(15, 23, 42, 0.9)" stroke="#475569" stroke-width="1.2"/>
                    <text x="212" y="104" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">HClO (+I) &lt; HClO<tspan dy="3" font-size="8">2</tspan><tspan dy="-3"> (+III) &lt; HClO</tspan><tspan dy="3" font-size="8">3</tspan><tspan dy="-3"> (+V) &lt; HClO</tspan><tspan dy="3" font-size="8">4</tspan><tspan dy="-3"> (+VII)</tspan></text>
                    <text x="212" y="138" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">Wzrost mocy kwasu (oraz wzrost trwałości, spadek aktywności utl.) &rarr;</text>

                    <!-- Karta 2 -->
                    <rect x="428" y="10" width="400" height="145" rx="8" fill="rgba(30, 41, 59, 0.85)" stroke="#38bdf8" stroke-width="1.8"/>
                    <text x="628" y="34" fill="#38bdf8" font-size="12.5" font-weight="bold" text-anchor="middle">2. Kwasy tlenowe w okresie i w grupie (rola elektroujemności &chi;)</text>
                    <text x="628" y="54" fill="#cbd5e1" font-size="10.5" text-anchor="middle">Moc kwasu tlenowego ROŚNIE ze wzrostem elektroujemności</text>
                    <text x="628" y="70" fill="#cbd5e1" font-size="10.5" text-anchor="middle">atomu centralnego (zarówno w okresie w prawo, jak i w grupie w górę!):</text>
                    <rect x="444" y="82" width="368" height="34" rx="6" fill="rgba(15, 23, 42, 0.9)" stroke="#475569" stroke-width="1.2"/>
                    <text x="628" y="104" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">W okresie: H<tspan dy="3" font-size="8">4</tspan><tspan dy="-3">SiO</tspan><tspan dy="3" font-size="8">4</tspan><tspan dy="-3"> &lt; H</tspan><tspan dy="3" font-size="8">3</tspan><tspan dy="-3">PO</tspan><tspan dy="3" font-size="8">4</tspan><tspan dy="-3"> &lt; H</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3">SO</tspan><tspan dy="3" font-size="8">4</tspan><tspan dy="-3"> &lt; HClO</tspan><tspan dy="3" font-size="8">4</tspan><tspan dy="-3"> | W grupie: HIO</tspan><tspan dy="3" font-size="8">4</tspan><tspan dy="-3"> &lt; HBrO</tspan><tspan dy="3" font-size="8">4</tspan><tspan dy="-3"> &lt; HClO</tspan><tspan dy="3" font-size="8">4</tspan></text>
                    <text x="628" y="138" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">Wzrost elektroujemności atomu centralnego E &rArr; Wzrost mocy kwasu &rarr;</text>
                </svg>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">
                    <strong>Rys. 3.</strong> Zestawienie reguł określających moc kwasów tlenowych: wpływ stopnia utlenienia (liczby tlenów terminalnych =O) oraz elektroujemności atomu centralnego.
                </div>
            </div>

            <h4>C. Reakcje metali z kwasami nieutleniającymi oraz utleniającymi (pasywacja, szereg napięciowy, woda królewska)</h4>
            <p>Zachowanie metalu wobec roztworu kwasu zależy od położenia metalu w szeregu elektrochemicznym (względem półogniwa wodorowego <i>E</i>&deg;<sub>H<sup>+</sup>/H<sub>2</sub></sub> = 0,00 V) oraz od tego, czy kwas wykazuje właściwości utleniające:</p>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Grupa metali w szeregu elektrochemicznym</th>
                            <th>Reakcja z kwasem NIEUTLENIAJĄCYM<br>(HCl, HBr, H<sub>2</sub>SO<sub>4(rozc)</sub>, H<sub>3</sub>PO<sub>4</sub>)</th>
                            <th>Reakcja z kwasem UTLENIAJĄCYM<br>(HNO<sub>3(rozc)</sub>, HNO<sub>3(stęż)</sub>, H<sub>2</sub>SO<sub>4(stęż, gorący)</sub>)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. Metale aktywne (nieszlachetne, <i>E</i>&deg; &lt; 0 V):</strong><br>Li, K, Na, Ca, Mg, Al, Mn, Zn, Cr, Fe, Cd, Co, Ni, Sn, Pb</td>
                            <td><strong>Wypierają wodór H<sub>2</sub>&uarr; i tworzą sól na niższym stopniu utlenienia metalu</strong> (dla Fe, Cr, Sn powstają sole Fe<sup>2+</sup>, Cr<sup>2+</sup>, Sn<sup>2+</sup>!):<br>• Fe + 2HCl &rarr; FeCl<sub>2</sub> + H<sub>2</sub>&uarr;<br>• Cr + 2HCl<sub>(beztlenowy)</sub> &rarr; CrCl<sub>2</sub> + H<sub>2</sub>&uarr;<br><em>(Uwaga dla ołowiu: Pb z HCl i H<sub>2</sub>SO<sub>4</sub> pokrywa się nierozpuszczalną warstewką PbCl<sub>2</sub>&darr; / PbSO<sub>4</sub>&darr; i reakcja ustaje!).</em></td>
                            <td>• <span style="color: #f87171; font-weight: bold;">PASYWACJA NA ZIMNO dla Al, Fe, Cr (oraz Ni, Co)!</span><br>Stężony HNO<sub>3</sub> oraz stężony H<sub>2</sub>SO<sub>4</sub> na zimno <strong>NIE roztwarzają glinu (Al), żelaza (Fe) ani chromu (Cr)</strong>, ponieważ natychmiast utleniają ich powierzchnię, pokrywając metal szczelną, trwałą warstewką tlenku amfoterycznego (Al<sub>2</sub>O<sub>3</sub>, Fe<sub>2</sub>O<sub>3</sub>, Cr<sub>2</sub>O<sub>3</sub>) chroniącą metal przed dalszą reakcją (dlatego stężony H<sub>2</sub>SO<sub>4</sub> można przewozić w stalowych lub aluminiowych cysternach!).<br>• <strong>Na gorąco</strong> warstwa pasywna ulega zniszczeniu i Fe, Al, Cr roztwarzają się do soli na <strong>+III stopniu utlenienia</strong> (Fe<sup>3+</sup>, Al<sup>3+</sup>, Cr<sup>3+</sup>):<br>2Fe + 6H<sub>2</sub>SO<sub>4(stęż)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 3SO<sub>2</sub>&uarr; + 6H<sub>2</sub>O<br>Fe + 6HNO<sub>3(stęż)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> Fe(NO<sub>3</sub>)<sub>3</sub> + 3NO<sub>2</sub>&uarr; + 3H<sub>2</sub>O<br>• Metale nieulegające pasywacji (np. Zn, Mg, Cu) reagują z HNO<sub>3</sub> i H<sub>2</sub>SO<sub>4(stęż)</sub> już na zimno (z Zn i bardzo rozc. HNO<sub>3</sub> może powstać N<sub>2</sub>O, N<sub>2</sub> lub NH<sub>4</sub>NO<sub>3</sub>, a ze stęż. H<sub>2</sub>SO<sub>4</sub> nawet H<sub>2</sub>S&uarr; lub S&darr;).</td>
                        </tr>
                        <tr>
                            <td><strong>2. Metale półszlachetne (<i>E</i>&deg; &gt; 0 V):</strong><br>Cu, Ag, Hg</td>
                            <td><strong>NIE REAGUJĄ!</strong><br>(Miedź, srebro i rtęć nie wypierają wodoru z kwasów nieutleniających: Cu + HCl &rarr; <em>brak reakcji</em>).</td>
                            <td><strong>REAGUJĄ bez wydzielania wodoru!</strong> Powstaje sól, woda oraz produkt redukcji kwasu (tlenek kwasowy):<br>• <strong>Z HNO<sub>3(stężonym)</sub></strong> – zawsze wydziela się <span style="color: #b45309; font-weight: bold;">brunatny gaz NO<sub>2</sub>&uarr;</span>:<br>Cu + 4HNO<sub>3(stęż)</sub> &rarr; Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO<sub>2</sub>&uarr; + 2H<sub>2</sub>O<br>Ag + 2HNO<sub>3(stęż)</sub> &rarr; AgNO<sub>3</sub> + NO<sub>2</sub>&uarr; + H<sub>2</sub>O<br>• <strong>Z HNO<sub>3(rozcieńczonym)</sub></strong> – zawsze wydziela się <strong>bezbarwny gaz NO&uarr;</strong> (brunatniejący dopiero u wylotu probówki w kontakcie z tlenem!):<br>3Cu + 8HNO<sub>3(rozc)</sub> &rarr; 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO&uarr; + 4H<sub>2</sub>O<br>3Ag + 4HNO<sub>3(rozc)</sub> &rarr; 3AgNO<sub>3</sub> + NO&uarr; + 2H<sub>2</sub>O<br>• <strong>Z H<sub>2</sub>SO<sub>4(stężonym, na gorąco)</sub></strong> – wydziela się bezbarwny gaz o ostrym, duszącym zapachu <strong>SO<sub>2</sub>&uarr;</strong>:<br>Cu + 2H<sub>2</sub>SO<sub>4(stęż)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> CuSO<sub>4</sub> + SO<sub>2</sub>&uarr; + 2H<sub>2</sub>O<br>2Ag + 2H<sub>2</sub>SO<sub>4(stęż)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> Ag<sub>2</sub>SO<sub>4</sub> + SO<sub>2</sub>&uarr; + 2H<sub>2</sub>O</td>
                        </tr>
                        <tr>
                            <td><strong>3. Metale szlachetne o bardzo wysokim potencjale:</strong><br>Au (złoto), Pt (platyna)</td>
                            <td><strong>NIE REAGUJĄ!</strong></td>
                            <td><strong>NIE REAGUJĄ</strong> ani z HNO<sub>3</sub>, ani z H<sub>2</sub>SO<sub>4</sub>! Roztwarzają się natomiast w <strong>wodzie królewskiej</strong> (mieszanina stężonego HCl i stężonego HNO<sub>3</sub> w stosunku objętościowym <strong>3 : 1</strong>), tworząc trwałe chlorkowe aniony kompleksowe [AuCl<sub>4</sub>]<sup>&minus;</sup> lub [PtCl<sub>6</sub>]<sup>2&minus;</sup>:<br>• Au + 4HCl<sub>(stęż)</sub> + HNO<sub>3(stęż)</sub> &rarr; H[AuCl<sub>4</sub>] + NO&uarr; + 2H<sub>2</sub>O</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>D. Utlenianie niemetali (C, S, P) przez stężone kwasy utleniające (HNO<sub>3(stęż)</sub> i H<sub>2</sub>SO<sub>4(stęż)</sub> na gorąco)</h4>
            <p>Gorący stężony HNO<sub>3</sub> oraz H<sub>2</sub>SO<sub>4</sub> utleniają również węgiel (do CO<sub>2</sub>&uarr;), siarkę (do SO<sub>2</sub>&uarr; lub H<sub>2</sub>SO<sub>4</sub>) oraz fosfor (do H<sub>3</sub>PO<sub>4</sub>):</p>
            <div class="chem-eq">
                • C + 2H<sub>2</sub>SO<sub>4(stęż)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> CO<sub>2</sub>&uarr; + 2SO<sub>2</sub>&uarr; + 2H<sub>2</sub>O &nbsp;|&nbsp; C + 4HNO<sub>3(stęż)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> CO<sub>2</sub>&uarr; + 4NO<sub>2</sub>&uarr; + 2H<sub>2</sub>O<br>
                • S + 2H<sub>2</sub>SO<sub>4(stęż)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 3SO<sub>2</sub>&uarr; + 2H<sub>2</sub>O &nbsp;|&nbsp; P<sub>4</sub> + 20HNO<sub>3(stęż)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 4H<sub>3</sub>PO<sub>4</sub> + 20NO<sub>2</sub>&uarr; + 4H<sub>2</sub>O
            </div>
        </div>

        <!-- SEKCJA 6 -->
        <div class="note-section">
            <h3>6. Sole – Pełna Systematyka: Sole Obojętne, Wodorosole, Hydroksosole, Sole Podwójne i Hydraty</h3>
            <p><strong>Sole</strong> to związki jonowe zbudowane z kationów metalu M<sup>n+</sup> (lub kationów amonowych NH<sub>4</sub><sup>+</sup>) oraz anionów reszty kwasowej R<sup>m&minus;</sup>. Wszystkie sole w temperaturze pokojowej są krystalicznymi ciałami stałymi o budowie jonowej. Każda część soli, która rozpuści się w wodzie, jest <strong>mocnym elektrolitem</strong> i ulega całkowitej dysocjacji jonowej (z wyjątkiem kilku słabo zdysocjowanych chlorków/jodków/octanów metali ciężkich, np. HgCl<sub>2</sub>, CdCl<sub>2</sub>, Pb(CH<sub>3</sub>COO)<sub>2</sub>).</p>

            <h4>A. 10 fundamentalnych metod otrzymywania soli obojętnych wraz z warunkami przebiegu reakcji</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Nr i schemat metody ogólnej</th>
                            <th>Warunek konieczny zajścia reakcji!</th>
                            <th>Wzorcowe równania reakcji (cząsteczkowe i jonowe skrócone)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. Kwas + Wodorotlenek (Zasada) &rarr; Sól + Woda</strong><br><em>(reakcja zobojętniania / neutralizacji)</em></td>
                            <td>Zachodzi praktycznie zawsze (przynajmniej jeden z substratów musi być rozpuszczalny w wodzie).</td>
                            <td>H<sub>2</sub>SO<sub>4</sub> + 2KOH &rarr; K<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O &nbsp;(jonowo: H<sup>+</sup> + OH<sup>&minus;</sup> &rarr; H<sub>2</sub>O)<br>Gdy wodorotlenek lub sól jest osadem, nie rozpisujemy go na jony:<br>Cu(OH)<sub>2</sub>&darr; + 2H<sup>+</sup> &rarr; Cu<sup>2+</sup> + 2H<sub>2</sub>O &nbsp;|&nbsp; Ba<sup>2+</sup> + 2OH<sup>&minus;</sup> + 2H<sup>+</sup> + SO<sub>4</sub><sup>2&minus;</sup> &rarr; BaSO<sub>4</sub>&darr; + 2H<sub>2</sub>O</td>
                        </tr>
                        <tr>
                            <td><strong>2. Kwas + Tlenek zasadowy/amfoteryczny &rarr; Sól + Woda</strong></td>
                            <td>Tlenków NIGDY nie rozpisujemy na jony w zapisie jonowym! Powstająca sól powinna być rozpuszczalna.</td>
                            <td>Fe<sub>2</sub>O<sub>3</sub> + 6HCl &rarr; 2FeCl<sub>3</sub> + 3H<sub>2</sub>O &nbsp;(jonowo: Fe<sub>2</sub>O<sub>3</sub> + 6H<sup>+</sup> &rarr; 2Fe<sup>3+</sup> + 3H<sub>2</sub>O)<br>MgO + 2HNO<sub>3</sub> &rarr; Mg(NO<sub>3</sub>)<sub>2</sub> + H<sub>2</sub>O &nbsp;(jonowo: MgO + 2H<sup>+</sup> &rarr; Mg<sup>2+</sup> + H<sub>2</sub>O)</td>
                        </tr>
                        <tr>
                            <td><strong>3. Zasada + Tlenek kwasowy/amfoteryczny &rarr; Sól + Woda</strong></td>
                            <td>Zasada musi być rozpuszczalna w wodzie (lub reakcja biegnie przez stapianie w wysokiej temp.).</td>
                            <td>SO<sub>2</sub> + 2NaOH &rarr; Na<sub>2</sub>SO<sub>3</sub> + H<sub>2</sub>O &nbsp;(jonowo: SO<sub>2</sub> + 2OH<sup>&minus;</sup> &rarr; SO<sub>3</sub><sup>2&minus;</sup> + H<sub>2</sub>O)<br>CO<sub>2</sub> + Ca(OH)<sub>2(aq)</sub> &rarr; CaCO<sub>3</sub>&darr; + H<sub>2</sub>O &nbsp;<em>(mętnienie wody wapiennej!)</em></td>
                        </tr>
                        <tr>
                            <td><strong>4. Tlenek zasadowy + Tlenek kwasowy &rarr; Sól (tlenowa)</strong></td>
                            <td>Reakcja syntezy (bez udziału wody, często w podwyższonej temp.).</td>
                            <td>CaO + CO<sub>2</sub> &rarr; CaCO<sub>3</sub> &nbsp;|&nbsp; BaO + SO<sub>3</sub> &rarr; BaSO<sub>4</sub> &nbsp;|&nbsp; CaO + SiO<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> CaSiO<sub>3</sub> (żużel)</td>
                        </tr>
                        <tr>
                            <td><strong>5. Metal + Kwas &rarr; Sól + Wodór&uarr;</strong><br><em>(lub tlenek kwasowy + H<sub>2</sub>O)</em></td>
                            <td>Z kwasem nieutleniającym: metal musi mieć <i>E</i>&deg; &lt; 0 V. Powstająca sól musi być rozpuszczalna w wodzie!</td>
                            <td>Zn + H<sub>2</sub>SO<sub>4(rozc)</sub> &rarr; ZnSO<sub>4</sub> + H<sub>2</sub>&uarr; &nbsp;(jonowo: Zn + 2H<sup>+</sup> &rarr; Zn<sup>2+</sup> + H<sub>2</sub>&uarr;)<br><em>Uwaga:</em> Nie można tak otrzymać BaSO<sub>4</sub> ani PbSO<sub>4</sub> z metalu i H<sub>2</sub>SO<sub>4</sub>, bo osad pokrywa metal!</td>
                        </tr>
                        <tr>
                            <td><strong>6. Metal + Niemetal &rarr; Sól (beztlenowa)</strong></td>
                            <td>Bezpośrednia synteza na gorąco. <strong>Uwaga na stopień utlenienia Fe!</strong></td>
                            <td>• Z chlorem lub bromem żelazo utlenia się do <strong>+III</strong>: 2Fe + 3Cl<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 2FeCl<sub>3</sub><br>• Z siarką lub jodem żelazo utlenia się tylko do <strong>+II</strong>: Fe + S <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> FeS &nbsp;|&nbsp; Fe + I<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> FeI<sub>2</sub></td>
                        </tr>
                        <tr>
                            <td><strong>7. Sól<sub>1</sub> + Kwas<sub>1</sub> &rarr; Sól<sub>2</sub> + Kwas<sub>2</sub></strong><br><em>(wypieranie kwasu z soli)</em></td>
                            <td>Kwas użyty (Kwas<sub>1</sub>) musi być <strong>mocniejszy, trwalszy lub mniej lotny</strong> od kwasu wypieranego (Kwas<sub>2</sub>), albo musi powstać osad Sól<sub>2</sub>&darr;!</td>
                            <td>• Wypieranie kwasu słabszego i nietrwałego: Na<sub>2</sub>CO<sub>3</sub> + 2HCl &rarr; 2NaCl + H<sub>2</sub>O + CO<sub>2</sub>&uarr; &nbsp;(jonowo: CO<sub>3</sub><sup>2&minus;</sup> + 2H<sup>+</sup> &rarr; H<sub>2</sub>O + CO<sub>2</sub>&uarr;)<br>• Wytrącanie kwasu krzemowego: Na<sub>2</sub>SiO<sub>3</sub> + 2HCl &rarr; H<sub>2</sub>SiO<sub>3</sub>&darr; (biały żel) + 2NaCl<br>• Kryterium osadu (słaby H<sub>2</sub>S wypiera mocny HCl/HNO<sub>3</sub> z soli Cu<sup>2+</sup>, Pb<sup>2+</sup>, Ag<sup>+</sup>, Cd<sup>2+</sup>, Hg<sup>2+</sup>!):<br>CuSO<sub>4</sub> + H<sub>2</sub>S &rarr; CuS&darr; (<span style="color: #94a3b8; font-weight: bold;">czarny osad</span>) + H<sub>2</sub>SO<sub>4</sub> (siarczki grupy II analitycznej nie rozpuszczają się w rozcieńczonych kwasach nieutleniających!)</td>
                        </tr>
                        <tr>
                            <td><strong>8. Sól<sub>1</sub> (rozp.) + Zasada<sub>1</sub> (rozp.) &rarr; Sól<sub>2</sub> + Wodorotlenek<sub>2</sub>&darr;</strong> <em>(lub sól<sub>2</sub>&darr;)</em></td>
                            <td>Oba substraty muszą być rozpuszczalne w wodzie, a jeden z produktów musi wypaść z układu jako <strong>osad&darr; lub gaz&uarr; (NH<sub>3</sub>&uarr;)</strong>!</td>
                            <td>• Strącanie osadu wodorotlenku: CuCl<sub>2</sub> + 2NaOH &rarr; Cu(OH)<sub>2</sub>&darr; + 2NaCl<br>• Strącanie osadu soli: Na<sub>2</sub>SO<sub>4</sub> + Ba(OH)<sub>2</sub> &rarr; BaSO<sub>4</sub>&darr; + 2NaOH<br>• Wypieranie amoniaku: (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> + 2NaOH <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> Na<sub>2</sub>SO<sub>4</sub> + 2NH<sub>3</sub>&uarr; + 2H<sub>2</sub>O</td>
                        </tr>
                        <tr>
                            <td><strong>9. Sól<sub>1</sub> (rozp.) + Sól<sub>2</sub> (rozp.) &rarr; Sól<sub>3</sub>&darr; + Sól<sub>4</sub></strong><br><em>(podwójna wymiana – strącanie)</em></td>
                            <td>Obie sole wyjściowe muszą być dobrze rozpuszczalne w wodzie, a przynajmniej jedna z powstających soli musi być <strong>trudno rozpuszczalnym osadem&darr;</strong>!</td>
                            <td>• Wykrywanie jonów Cl<sup>&minus;</sup>: AgNO<sub>3</sub> + NaCl &rarr; AgCl&darr; (biały, serowaty) + NaNO<sub>3</sub><br>• Wykrywanie jonów SO<sub>4</sub><sup>2&minus;</sup>: BaCl<sub>2</sub> + K<sub>2</sub>SO<sub>4</sub> &rarr; BaSO<sub>4</sub>&darr; (biały, drobnokrystaliczny) + 2KCl<br>• Wykrywanie jonów Pb<sup>2+</sup>/I<sup>&minus;</sup>: Pb(NO<sub>3</sub>)<sub>2</sub> + 2KI &rarr; PbI<sub>2</sub>&darr; (<span style="color: #facc15; font-weight: bold;">złocistożółty osad</span>) + 2KNO<sub>3</sub></td>
                        </tr>
                        <tr>
                            <td><strong>10. Metal<sub>1</sub> + Sól<sub>1</sub> (rozp.) &rarr; Metal<sub>2</sub>&darr; + Sól<sub>2</sub></strong><br><em>(wypieranie metalu z roztworu soli)</em></td>
                            <td>Metal<sub>1</sub> musi być bardziej aktywny (mieć niższy potencjał <i>E</i>&deg;) niż Metal<sub>2</sub> w soli, ale <strong>NIE może być litowcem ani berylowcem</strong> (Na, K, Ca reagują najpierw z wodą!).</td>
                            <td>• Płytka żelazna w roztworze CuSO<sub>4</sub>: Fe + Cu<sup>2+</sup> &rarr; Fe<sup>2+</sup> + Cu&darr; (płytka pokrywa się <span style="color: #f87171;">czerwonawym nalotem miedzi</span>, niebieski roztwór blednie/zielenieje; <strong>masa płytki rośnie</strong>, bo <i>M</i><sub>Cu</sub> = 63,5 &gt; <i>M</i><sub>Fe</sub> = 56 g/mol!)<br>• Płytka miedziana w roztworze AgNO<sub>3</sub>: Cu + 2Ag<sup>+</sup> &rarr; Cu<sup>2+</sup> + 2Ag&darr; (roztwór staje się <span style="color: #38bdf8;">niebieski</span>, masa płytki rośnie: ubywa 63,5 g Cu, a osadza się 2&middot;108 = 216 g Ag!).</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="note-alert danger">
                🔥 <strong>PUŁAPKA MATURALNA – Krystaliczny chlorek żelaza(III) a rozpuszczanie metalicznego żelaza w HCl oraz hydroliza węglanu glinu/żelaza(III)!</strong>
                <ol class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li>Jeżeli w zadaniu masz otrzymać <strong>FeCl<sub>3</sub></strong>, <strong>NIE MOŻESZ użyć reakcji Fe + HCl</strong>, ponieważ kwas solny utlenia żelazo tylko do FeCl<sub>2</sub>! Aby otrzymać FeCl<sub>3</sub>, musisz albo spalić żelazo w chlorze (2Fe + 3Cl<sub>2</sub> &rarr; 2FeCl<sub>3</sub>), albo roztworzyć Fe<sub>2</sub>O<sub>3</sub> / Fe(OH)<sub>3</sub> w kwasie HCl, albo utlenić roztwór FeCl<sub>2</sub> wodą chlorową (2FeCl<sub>2</sub> + Cl<sub>2</sub> &rarr; 2FeCl<sub>3</sub>).</li>
                    <li>W tabeli rozpuszczalności przy solach słabych kwasów i amfoterycznych kationów trójwartościowych (np. Al<sub>2</sub>S<sub>3</sub>, Al<sub>2</sub>(CO<sub>3</sub>)<sub>3</sub>, Fe<sub>2</sub>(CO<sub>3</sub>)<sub>3</sub>, Cr<sub>2</sub>(CO<sub>3</sub>)<sub>3</sub>, Fe<sub>2</sub>S<sub>3</sub>) widnieje symbol <strong>„&mdash;”</strong> (związek rozkłada się w wodzie). Po zmieszaniu np. roztworu AlCl<sub>3</sub> z roztworem Na<sub>2</sub>CO<sub>3</sub> lub Na<sub>2</sub>S zachodzi <strong>całkowita, wzajemna hydroliza</strong> z wydzieleniem gazu i strąceniem wodorotlenku Al(OH)<sub>3</sub>&darr;:<br>
                    <strong>2 Al<sup>3+</sup> + 3 CO<sub>3</sub><sup>2&minus;</sup> + 3 H<sub>2</sub>O &rarr; 2 Al(OH)<sub>3</sub>&darr; + 3 CO<sub>2</sub>&uarr;</strong> &nbsp;|&nbsp; <strong>2 Al<sup>3+</sup> + 3 S<sup>2&minus;</sup> + 6 H<sub>2</sub>O &rarr; 2 Al(OH)<sub>3</sub>&darr; + 3 H<sub>2</sub>S&uarr;</strong></li>
                    <li>Natomiast dla kationów <strong>Fe<sup>3+</sup></strong> i jonów <strong>S<sup>2&minus;</sup> lub I<sup>&minus;</sup></strong> zachodzi <strong>reakcja utleniania-redukcji</strong> (jony Fe<sup>3+</sup> utleniają S<sup>2&minus;</sup> do <span style="color: #facc15;">żółtej siarki S&darr;</span>, a I<sup>&minus;</sup> do <span style="color: #b45309;">brunatnego jodu I<sub>2</sub></span>!):<br>
                    <strong>2 Fe<sup>3+</sup> + S<sup>2&minus;</sup> &rarr; 2 Fe<sup>2+</sup> + S&darr;</strong> &nbsp;(lub w nadmiarze S<sup>2&minus;</sup>: 2 Fe<sup>3+</sup> + 3 S<sup>2&minus;</sup> &rarr; 2 FeS&darr; + S&darr;) &nbsp;|&nbsp; <strong>2 Fe<sup>3+</sup> + 2 I<sup>&minus;</sup> &rarr; 2 Fe<sup>2+</sup> + I<sub>2</sub></strong>!</li>
                </ol>
            </div>

            <h4>B. Wodorosole i hydroksosole – otrzymywanie, stechiometria, dysocjacja oraz odczyn wodnych roztworów</h4>
            <p><strong>Wodorosole</strong> (sole kwaśne z nazwy historycznej) powstają w wyniku niecałkowitego zobojętnienia kwasu wieloprotonowego (np. H<sub>2</sub>CO<sub>3</sub>, H<sub>2</sub>SO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub>, H<sub>2</sub>S, H<sub>3</sub>PO<sub>4</sub>) zasadą lub w wyniku działania nadmiarem kwasu wieloprotonowego (bądź jego bezwodnika) na zasadowy tlenek, wodorotlenek lub sól obojętną. <strong>Hydroksosole</strong> (sole zasadowe) powstają natomiast przy niecałkowitym zobojętnieniu wodorotlenku wielowodorotlenowego (np. Mg(OH)<sub>2</sub>, Ca(OH)<sub>2</sub>, Cu(OH)<sub>2</sub>, Al(OH)<sub>3</sub>) niedomiarem kwasu.</p>

            <!-- WYKRES 4: STECHIOMETRIA H3PO4 + NaOH (SVG) -->
            <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 12px; padding: 14px; margin: 16px 0; text-align: center;">
                <svg viewBox="0 0 860 175" style="width: 100%; max-width: 860px; height: auto;">
                    <text x="430" y="22" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">Stechiometria reakcji kwasu trójprotonowego H<tspan dy="3" font-size="9">3</tspan><tspan dy="-3">PO</tspan><tspan dy="3" font-size="9">4</tspan><tspan dy="-3"> z zasadą NaOH (wpływ stosunku molowego n</tspan><tspan dy="3" font-size="9">NaOH</tspan><tspan dy="-3"> : n</tspan><tspan dy="3" font-size="9">H3PO4</tspan><tspan dy="-3">)</tspan></text>

                    <!-- Stosunek 1:1 -->
                    <rect x="12" y="38" width="248" height="125" rx="8" fill="rgba(127, 29, 29, 0.28)" stroke="#f87171" stroke-width="2"/>
                    <text x="136" y="58" fill="#fca5a5" font-size="12" font-weight="bold" text-anchor="middle">Stosunek 1 : 1</text>
                    <text x="136" y="78" fill="#f8fafc" font-size="11" text-anchor="middle">NaOH + H<tspan dy="3" font-size="8">3</tspan><tspan dy="-3">PO</tspan><tspan dy="3" font-size="8">4</tspan><tspan dy="-3"> &rarr; NaH</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3">PO</tspan><tspan dy="3" font-size="8">4</tspan><tspan dy="-3"> + H</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3">O</tspan></text>
                    <text x="136" y="98" fill="#38bdf8" font-size="11.5" font-weight="bold" text-anchor="middle">diwodorofosforan(V) sodu</text>
                    <text x="136" y="122" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">Odczyn roztworu: KWASOWY (pH &lt; 7)</text>
                    <text x="136" y="142" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(K<tspan dy="3" font-size="7">a2</tspan><tspan dy="-3">(H</tspan><tspan dy="3" font-size="7">2</tspan><tspan dy="-3">PO</tspan><tspan dy="3" font-size="7">4</tspan><tspan dy="-6" font-size="7">&minus;</tspan><tspan dy="3">) &gt; K</tspan><tspan dy="3" font-size="7">b</tspan><tspan dy="-3">(H</tspan><tspan dy="3" font-size="7">2</tspan><tspan dy="-3">PO</tspan><tspan dy="3" font-size="7">4</tspan><tspan dy="-6" font-size="7">&minus;</tspan><tspan dy="3">) – przewaga dysocjacji)</tspan></text>

                    <!-- Strzałka 1 -->
                    <text x="283" y="105" fill="#60a5fa" font-size="12.5" font-weight="bold" text-anchor="middle">+ NaOH &rarr;</text>

                    <!-- Stosunek 2:1 -->
                    <rect x="306" y="38" width="248" height="125" rx="8" fill="rgba(30, 58, 138, 0.35)" stroke="#60a5fa" stroke-width="2"/>
                    <text x="430" y="58" fill="#93c5fd" font-size="12" font-weight="bold" text-anchor="middle">Stosunek 2 : 1</text>
                    <text x="430" y="78" fill="#f8fafc" font-size="11" text-anchor="middle">2NaOH + H<tspan dy="3" font-size="8">3</tspan><tspan dy="-3">PO</tspan><tspan dy="3" font-size="8">4</tspan><tspan dy="-3"> &rarr; Na</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3">HPO</tspan><tspan dy="3" font-size="8">4</tspan><tspan dy="-3"> + 2H</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3">O</tspan></text>
                    <text x="430" y="98" fill="#38bdf8" font-size="11.5" font-weight="bold" text-anchor="middle">wodorofosforan(V) sodu</text>
                    <text x="430" y="122" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">Odczyn: SŁABO ZASADOWY (pH &gt; 7)</text>
                    <text x="430" y="142" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(K<tspan dy="3" font-size="7">b</tspan><tspan dy="-3">(HPO</tspan><tspan dy="3" font-size="7">4</tspan><tspan dy="-6" font-size="7">2&minus;</tspan><tspan dy="3">) &gt; K</tspan><tspan dy="3" font-size="7">a3</tspan><tspan dy="-3">(HPO</tspan><tspan dy="3" font-size="7">4</tspan><tspan dy="-6" font-size="7">2&minus;</tspan><tspan dy="3">) – przewaga hydrolizy)</tspan></text>

                    <!-- Strzałka 2 -->
                    <text x="577" y="105" fill="#60a5fa" font-size="12.5" font-weight="bold" text-anchor="middle">+ NaOH &rarr;</text>

                    <!-- Stosunek 3:1 -->
                    <rect x="600" y="38" width="248" height="125" rx="8" fill="rgba(30, 58, 138, 0.55)" stroke="#38bdf8" stroke-width="2"/>
                    <text x="724" y="58" fill="#7dd3fc" font-size="12" font-weight="bold" text-anchor="middle">Stosunek 3 : 1 (lub nadmiar)</text>
                    <text x="724" y="78" fill="#f8fafc" font-size="11" text-anchor="middle">3NaOH + H<tspan dy="3" font-size="8">3</tspan><tspan dy="-3">PO</tspan><tspan dy="3" font-size="8">4</tspan><tspan dy="-3"> &rarr; Na</tspan><tspan dy="3" font-size="8">3</tspan><tspan dy="-3">PO</tspan><tspan dy="3" font-size="8">4</tspan><tspan dy="-3"> + 3H</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3">O</tspan></text>
                    <text x="724" y="98" fill="#38bdf8" font-size="11.5" font-weight="bold" text-anchor="middle">fosforan(V) sodu (sól obojętna)</text>
                    <text x="724" y="122" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Odczyn: SILNIE ZASADOWY (pH &gg; 7)</text>
                    <text x="724" y="142" fill="#cbd5e1" font-size="9.5" text-anchor="middle">(PO<tspan dy="3" font-size="7">4</tspan><tspan dy="-6" font-size="7">3&minus;</tspan><tspan dy="3"> + H</tspan><tspan dy="3" font-size="7">2</tspan><tspan dy="-3">O &#8652; HPO</tspan><tspan dy="3" font-size="7">4</tspan><tspan dy="-6" font-size="7">2&minus;</tspan><tspan dy="3"> + OH</tspan><tspan dy="-4" font-size="7">&minus;</tspan><tspan dy="4">)</tspan></text>
                </svg>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">
                    <strong>Rys. 4.</strong> Stopniowe zobojętnianie kwasu ortofosforowego(V) z porównaniem składu tworzących się soli oraz odczynu ich wodnych roztworów.
                </div>
            </div>

            <ul class="note-list">
                <li><strong>Trzy metody otrzymywania wodorosoli (na przykładzie NaHCO<sub>3</sub> i Ca(HCO<sub>3</sub>)<sub>2</sub>):</strong>
                    <div class="chem-eq">
                        1) Niecałkowite zobojętnienie (1 mol zasady : 1 mol kwasu/tlenku): &nbsp; NaOH + CO<sub>2</sub> &rarr; NaHCO<sub>3</sub> &nbsp;|&nbsp; Ca(OH)<sub>2</sub> + 2CO<sub>2</sub> (nadmiar) &rarr; Ca(HCO<sub>3</sub>)<sub>2</sub><br>
                        2) Reakcja soli obojętnej z dodatkową porcją własnego kwasu (lub tlenku kwasowego i wody – <em>zjawisko krasowe!</em>):<br>
                        CaCO<sub>3(s)</sub> (nierozpuszczalny wapień) + CO<sub>2(g)</sub> + H<sub>2</sub>O<sub>(c)</sub> &#8652; Ca(HCO<sub>3</sub>)<sub>2(aq)</sub> (rozpuszczalny wodorowęglan wapnia)<br>
                        Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2(s)</sub> (nierozpuszczalny fosforyt) + 4H<sub>3</sub>PO<sub>4</sub> &rarr; 3Ca(H<sub>2</sub>PO<sub>4</sub>)<sub>2(aq)</sub> (rozpuszczalny superfosfat potrójny!)<br>
                        3) Przekształcenie wodorosoli z powrotem w sól obojętną poprzez dodanie zasady: &nbsp; NaHCO<sub>3</sub> + NaOH &rarr; Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O &nbsp;lub&nbsp; Ca(HCO<sub>3</sub>)<sub>2</sub> + Ca(OH)<sub>2</sub> &rarr; 2CaCO<sub>3</sub>&darr; + 2H<sub>2</sub>O (metoda wapienna zmiękczania wody!).
                    </div>
                </li>
                <li><span style="color: #f87171; font-weight: bold;">🔥 Kluczowa pułapka maturalna – Odczyn wodnych roztworów wodorosoli (<i>K<sub>a</sub></i> vs <i>K<sub>b</sub></i>):</span><br>
                Wodorosole zawierają amfiprotyczny anion (np. HCO<sub>3</sub><sup>&minus;</sup>, HSO<sub>3</sub><sup>&minus;</sup>, HS<sup>&minus;</sup>, H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup>, HPO<sub>4</sub><sup>2&minus;</sup>), który może zarówno odszczepiać proton (dysocjacja kwasowa, <i>K<sub>a</sub></i>), jak i przyłączać proton z wody (hydroliza anionowa, <i>K<sub>b</sub></i>). Zapamiętaj bezwzględnie odczyny najważniejszych wodorosoli litowców:
                    <br>&ndash; <strong>Odczyn KWASOWY (pH &lt; 7 – przeważa dysocjacja nad hydrolizą, <i>K<sub>a</sub></i> &gt; <i>K<sub>b</sub></i>):</strong> <strong>NaHSO<sub>4</sub> / KHSO<sub>4</sub></strong> (bardzo silnie kwasowy: HSO<sub>4</sub><sup>&minus;</sup> + H<sub>2</sub>O &#8652; SO<sub>4</sub><sup>2&minus;</sup> + H<sub>3</sub>O<sup>+</sup>, nie ulega hydrolizie!), <strong>NaH<sub>2</sub>PO<sub>4</sub> / KH<sub>2</sub>PO<sub>4</sub></strong> oraz <strong>NaHSO<sub>3</sub> / KHSO<sub>3</sub></strong>!
                    <br>&ndash; <strong>Odczyn ZASADOWY (pH &gt; 7 – przeważa hydroliza nad dysocjacją, <i>K<sub>b</sub></i> &gt; <i>K<sub>a</sub></i>):</strong> <strong>NaHCO<sub>3</sub> / KHCO<sub>3</sub></strong> (HCO<sub>3</sub><sup>&minus;</sup> + H<sub>2</sub>O &#8652; H<sub>2</sub>CO<sub>3</sub> + OH<sup>&minus;</sup>), <strong>Na<sub>2</sub>HPO<sub>4</sub> / K<sub>2</sub>HPO<sub>4</sub></strong> oraz <strong>NaHS / KHS</strong>!
                </li>
                <li><strong>Hydroksosole – otrzymywanie i przemiana w sól obojętną:</strong>
                    <div class="chem-eq">
                        • Niedomiar kwasu: &nbsp; Mg(OH)<sub>2</sub> + HCl (1 : 1) &rarr; Mg(OH)Cl <em>(chlorek wodorotlenek magnezu)</em> + H<sub>2</sub>O<br>
                        • Dodanie kolejnej porcji kwasu przekształca hydroksosól w sól obojętną: &nbsp; Mg(OH)Cl + HCl &rarr; MgCl<sub>2</sub> + H<sub>2</sub>O
                    </div>
                </li>
            </ul>

            <h4>C. Hydraty (sole uwodnione), skały wapienne i skały gipsowe oraz twardość wody</h4>
            <p><strong>Hydraty (kryształy uwodnione)</strong> to krystaliczne sole zawierające w swojej sieci krystalicznej ściśle określoną liczbę cząsteczek wody krystalizacyjnej (np. CuSO<sub>4</sub> &middot; 5H<sub>2</sub>O, CoCl<sub>2</sub> &middot; 6H<sub>2</sub>O, Na<sub>2</sub>CO<sub>3</sub> &middot; 10H<sub>2</sub>O – soda krystaliczna, KAl(SO<sub>4</sub>)<sub>2</sub> &middot; 12H<sub>2</sub>O – ałun glinowo-potasowy). Podczas ogrzewania (prażenia) hydraty tracą wodę krystalizacyjną (proces endoenergetyczny, &Delta;<i>H</i> &gt; 0), przechodząc w sole bezwodne, czemu często towarzyszy wyraźna zmiana barwy kryształów:</p>
            <div class="chem-eq">
                • CuSO<sub>4</sub> &middot; 5H<sub>2</sub>O (<span style="color: #38bdf8; font-weight: bold;">szafirowoniebieski</span>) <span class="chem-arrow"><span class="cond-top">T (odwodnienie) / +H<sub>2</sub>O</span><span class="arrow-sym">&#8652;</span></span> CuSO<sub>4</sub> (<span style="color: #f8fafc; font-weight: bold;">biały proszek</span>) + 5 H<sub>2</sub>O&uarr; &nbsp;<em>(biały bezwodny CuSO<sub>4</sub> służy do wykrywania śladów wody w cieczach organicznych!)</em><br>
                • CoCl<sub>2</sub> &middot; 6H<sub>2</sub>O (<span style="color: #f43f5e; font-weight: bold;">różowoczerwony</span>) <span class="chem-arrow"><span class="cond-top">T (odwodnienie) / +H<sub>2</sub>O</span><span class="arrow-sym">&#8652;</span></span> CoCl<sub>2</sub> (<span style="color: #3b82f6; font-weight: bold;">niebieski/granatowy</span>) + 6 H<sub>2</sub>O&uarr; &nbsp;<em>(wskaźnik wilgotności powietrza w żelu krzemionkowym)</em>
            </div>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Zagadnienie z Działu 7 / 11</th>
                            <th>Wzory, nazwy systematyczne i mineralogiczne</th>
                            <th>Kluczowe równania reakcji chemicznych wymagane na maturze</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Skały gipsowe i twardnienie zaprawy gipsowej</strong></td>
                            <td>• <strong>CaSO<sub>4</sub> &middot; 2H<sub>2</sub>O</strong> – siarczan(VI) wapnia–woda(1/2) (zwyczajowo: <em>gips krystaliczny</em>, minerał: gips)<br>• <strong>(CaSO<sub>4</sub>)<sub>2</sub> &middot; H<sub>2</sub>O</strong> (lub CaSO<sub>4</sub> &middot; &frac12;H<sub>2</sub>O) – siarczan(VI) wapnia–woda(2/1) (zwyczajowo: <em>gips palony</em>)<br>• <strong>CaSO<sub>4</sub></strong> – bezwodny siarczan(VI) wapnia (minerał: <em>anhydryt</em>, gips jastrychowy)</td>
                            <td>• <strong>Prażenie gipsu w temp. 110–130&deg;C (otrzymywanie gipsu palonego):</strong><br>2 (CaSO<sub>4</sub> &middot; 2H<sub>2</sub>O) <span class="chem-arrow"><span class="cond-top">120&deg;C</span><span class="arrow-sym">&rarr;</span></span> (CaSO<sub>4</sub>)<sub>2</sub> &middot; H<sub>2</sub>O + 3 H<sub>2</sub>O&uarr;<br>• <strong>Twardnienie zaprawy gipsowej (reakcja odwrotna – wiązanie wody przez gips palony):</strong><br>(CaSO<sub>4</sub>)<sub>2</sub> &middot; H<sub>2</sub>O + 3 H<sub>2</sub>O &rarr; 2 (CaSO<sub>4</sub> &middot; 2H<sub>2</sub>O)<br>• Prażenie powyżej 180–200&deg;C prowadzi do całkowitego odwodnienia (CaSO<sub>4</sub> – gips martwo palony, który bardzo wolno wiąże wodę).</td>
                        </tr>
                        <tr>
                            <td><strong>Skały wapienne i cykl wapienny w budownictwie</strong></td>
                            <td>• <strong>Wapień, marmur, kreda</strong> – głównym składnikiem jest węglan wapnia <strong>CaCO<sub>3</sub></strong> (minerał: kalcyt/aragonit).<br>• <strong>CaO</strong> – <em>wapno palone</em><br>• <strong>Ca(OH)<sub>2</sub></strong> – <em>wapno gaszone</em> (wodna zawiesina: <em>mleko wapienne</em>; klarowny roztwór nasycony: <em>woda wapienna</em>)</td>
                            <td>• <strong>1. Wypalanie wapienia w wapienniku (&sim;1000&deg;C):</strong> &nbsp; CaCO<sub>3</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> CaO + CO<sub>2</sub>&uarr;<br>• <strong>2. Gaszenie wapna palonego:</strong> &nbsp; CaO + H<sub>2</sub>O &rarr; Ca(OH)<sub>2</sub> (&Delta;<i>H</i> &lt; 0)<br>• <strong>3. Twardnienie zaprawy murarskiej (wapiennej) na powietrzu (wiązanie CO<sub>2</sub> z wydzieleniem wilgoci na ścianach!):</strong><br>Ca(OH)<sub>2</sub> + CO<sub>2</sub> &rarr; CaCO<sub>3</sub>&darr; + H<sub>2</sub>O &nbsp;(oraz powolna reakcja z piaskiem: Ca(OH)<sub>2</sub> + SiO<sub>2</sub> &rarr; CaSiO<sub>3</sub> + H<sub>2</sub>O)</td>
                        </tr>
                        <tr>
                            <td><strong>Twardość wody (przemijająca i trwała) oraz metody jej usuwania</strong></td>
                            <td>• <strong>Twardość przemijająca (węglanowa):</strong> wywołana obecnością rozpuszczalnych wodorowęglanów: <strong>Ca(HCO<sub>3</sub>)<sub>2</sub> oraz Mg(HCO<sub>3</sub>)<sub>2</sub></strong>.<br>• <strong>Twardość trwała (niewęglanowa):</strong> wywołana obecnością chlorków, siarczanów(VI) i azotanów(V) wapnia i magnezu (<strong>CaCl<sub>2</sub>, MgSO<sub>4</sub></strong>).</td>
                            <td>• <strong>Usuwanie twardości przemijającej przez przegotowanie wody (powstaje kamień kotłowy!):</strong><br>Ca(HCO<sub>3</sub>)<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T (100&deg;C)</span><span class="arrow-sym">&rarr;</span></span> CaCO<sub>3</sub>&darr; + H<sub>2</sub>O + CO<sub>2</sub>&uarr;<br>Mg(HCO<sub>3</sub>)<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T (100&deg;C)</span><span class="arrow-sym">&rarr;</span></span> MgCO<sub>3</sub>&darr; + H<sub>2</sub>O + CO<sub>2</sub>&uarr;<br>• <strong>Usuwanie twardości przemijającej metodą wapienną:</strong><br>Ca(HCO<sub>3</sub>)<sub>2</sub> + Ca(OH)<sub>2</sub> &rarr; 2 CaCO<sub>3</sub>&darr; + 2 H<sub>2</sub>O<br>• <strong>Usuwanie twardości trwałej i całkowitej za pomocą sody (Na<sub>2</sub>CO<sub>3</sub>) lub fosforanu(V) sodu (Na<sub>3</sub>PO<sub>4</sub>):</strong><br>Ca<sup>2+</sup> + CO<sub>3</sub><sup>2&minus;</sup> &rarr; CaCO<sub>3</sub>&darr; &nbsp;|&nbsp; 3 Ca<sup>2+</sup> + 2 PO<sub>4</sub><sup>3&minus;</sup> &rarr; Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>&darr;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- SEKCJA 7 -->
        <div class="note-section">
            <h3>7. Wzorcowe Zadania Maturalne z Systematyki Związków Nieorganicznych – Rozwiązania Krok po Kroku</h3>

            <div class="chem-obs">
                📝 <strong>Przykład 1 (Stechiometria tworzenia wodorosoli i soli obojętnej – klasyczny problem z nadmiarem CO<sub>2</sub> lub H<sub>3</sub>PO<sub>4</sub>):</strong><br>
                <em>Przez 200 cm<sup>3</sup> wodnego roztworu wodorotlenku sodu (NaOH) o stężeniu molowym 1,50 mol &middot; dm<sup>&minus;3</sup> przepuszczono całkowicie 4,48 dm<sup>3</sup> tlenku węgla(IV) (CO<sub>2</sub>) odmierzonego w warunkach normalnych. Ustal skład jakościowy i ilościowy (liczbę moli soli) w otrzymanym roztworze po zakończeniu reakcji oraz określ odczyn tego roztworu.</em><br><br>
                • <strong>Krok 1 (Obliczenie początkowej liczby moli obu substratów):</strong><br>
                Liczba moli zasady: <i>n</i><sub>NaOH</sub> = <i>C<sub>m</sub></i> &middot; <i>V</i> = 1,50 mol &middot; dm<sup>&minus;3</sup> &middot; 0,200 dm<sup>3</sup> = <strong>0,30 mola NaOH</strong>.<br>
                Liczba moli tlenku kwasowego (w warunkach normalnych <i>V<sub>m</sub></i> = 22,4 dm<sup>3</sup> &middot; mol<sup>&minus;1</sup>): <i>n</i><sub>CO<sub>2</sub></sub> = <i>V</i> / <i>V<sub>m</sub></i> = 4,48 dm<sup>3</sup> / 22,4 dm<sup>3</sup> &middot; mol<sup>&minus;1</sup> = <strong>0,20 mola CO<sub>2</sub></strong>.<br>
                • <strong>Krok 2 (Analiza stosunku molowego <i>n</i><sub>NaOH</sub> : <i>n</i><sub>CO<sub>2</sub></sub> na osi stechiometrycznej):</strong><br>
                Wyznaczamy iloraz: <i>n</i><sub>NaOH</sub> / <i>n</i><sub>CO<sub>2</sub></sub> = 0,30 / 0,20 = <strong>1,5</strong>.<br>
                Zauważmy, że:<br>
                &ndash; gdyby stosunek <i>n</i><sub>NaOH</sub> : <i>n</i><sub>CO<sub>2</sub></sub> wynosił 2 : 1 (= 2,0), powstałaby wyłącznie sól obojętna Na<sub>2</sub>CO<sub>3</sub> (2NaOH + CO<sub>2</sub> &rarr; Na<sub>2</sub>CO<sub>3</sub> + H<sub>2</sub>O);<br>
                &ndash; gdyby stosunek <i>n</i><sub>NaOH</sub> : <i>n</i><sub>CO<sub>2</sub></sub> wynosił 1 : 1 (= 1,0), powstałaby wyłącznie wodorosól NaHCO<sub>3</sub> (NaOH + CO<sub>2</sub> &rarr; NaHCO<sub>3</sub>);<br>
                &ndash; ponieważ nasz stosunek wynosi 1,5 i mieści się w przedziale 1,0 &lt; 1,5 &lt; 2,0, w roztworze powstaje <strong>mieszanina obu soli: Na<sub>2</sub>CO<sub>3</sub> oraz NaHCO<sub>3</sub>!</strong><br>
                • <strong>Krok 3 (Obliczenie liczby moli Na<sub>2</sub>CO<sub>3</sub> i NaHCO<sub>3</sub> metodą układu równań):</strong><br>
                Oznaczmy przez <i>x</i> liczbę moli powstałego Na<sub>2</sub>CO<sub>3</sub>, a przez <i>y</i> liczbę moli powstałego NaHCO<sub>3</sub>. Z bilansu atomów węgla i sodu otrzymujemy układ równań:<br>
                { (1) Bilans węgla: &nbsp; <i>x</i> + <i>y</i> = <i>n</i><sub>CO<sub>2</sub></sub> = 0,20 mola<br>
                { (2) Bilans sodu: &nbsp; 2<i>x</i> + <i>y</i> = <i>n</i><sub>NaOH</sub> = 0,30 mola<br>
                Odejmując równanie (1) od równania (2), otrzymujemy natychmiast: <strong><i>x</i> = 0,30 &minus; 0,20 = 0,10 mola Na<sub>2</sub>CO<sub>3</sub></strong> oraz <strong><i>y</i> = 0,20 &minus; 0,10 = 0,10 mola NaHCO<sub>3</sub></strong>.<br>
                • <strong>Odpowiedź:</strong> Otrzymany roztwór zawiera <strong>0,10 mola węglanu sodu (Na<sub>2</sub>CO<sub>3</sub>) oraz 0,10 mola wodorowęglanu sodu (NaHCO<sub>3</sub>)</strong>. Ponieważ zarówno jony CO<sub>3</sub><sup>2&minus;</sup>, jak i HCO<sub>3</sub><sup>&minus;</sup> ulegają w wodzie hydrolizie anionowej, <strong>odczyn roztworu jest zasadowy (pH &gt; 7)</strong>.
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 2 (Obliczenia stechiometryczne z udziałem hydratów – sporządzanie roztworu i ustalanie wzoru hydratu):</strong><br>
                <em>W celu ustalenia wzoru hydratu chlorku baru (BaCl<sub>2</sub> &middot; nH<sub>2</sub>O) odważono próbkę tej soli o masie 12,20 g, a następnie prażono ją w tyglu do stałej masy. Masa bezwodnej soli po wyprażeniu wynosiła 10,40 g. Wyznacz wzór rzeczywisty badanego hydratu, a następnie oblicz, jakie będzie stężenie procentowe (<i>C<sub>p</sub></i>) soli bezwodnej w roztworze otrzymanym po rozpuszczeniu 12,20 g tego hydratu w 187,8 g wody.</em><br><br>
                • <strong>Krok 1 (Wyznaczenie wzoru hydratu BaCl<sub>2</sub> &middot; nH<sub>2</sub>O):</strong><br>
                Masa soli bezwodnej w próbce wynosi <i>m</i><sub>BaCl<sub>2</sub></sub> = 10,40 g, zatem masa odparowanej wody krystalizacyjnej jest równa: <i>m</i><sub>H<sub>2</sub>O</sub> = 12,20 g &minus; 10,40 g = <strong>1,80 g H<sub>2</sub>O</strong>.<br>
                Obliczamy masy molowe: <i>M</i><sub>BaCl<sub>2</sub></sub> = 137 + 2 &middot; 35,5 = 208 g &middot; mol<sup>&minus;1</sup> oraz <i>M</i><sub>H<sub>2</sub>O</sub> = 18 g &middot; mol<sup>&minus;1</sup>.<br>
                Stosunek molowy soli bezwodnej do wody krystalizacyjnej wynosi:<br>
                1 : <i>n</i> = (<i>m</i><sub>BaCl<sub>2</sub></sub> / <i>M</i><sub>BaCl<sub>2</sub></sub>) : (<i>m</i><sub>H<sub>2</sub>O</sub> / <i>M</i><sub>H<sub>2</sub>O</sub>) = (10,40 / 208) : (1,80 / 18) = 0,050 mol : 0,100 mol = 1 : 2 &nbsp;&rArr;&nbsp; <strong><i>n</i> = 2</strong>.<br>
                Szukany wzór hydratu to <strong>BaCl<sub>2</sub> &middot; 2H<sub>2</sub>O</strong> – chlorek baru–woda(1/2).<br>
                • <strong>Krok 2 (Obliczenie stężenia procentowego roztworu po rozpuszczeniu 12,20 g hydratu w 187,8 g wody):</strong><br>
                <em>Uwaga na pułapkę maturalną!</em> Po wprowadzeniu hydratu do wody cząsteczki wody krystalizacyjnej odłączają się i przechodzą do rozpuszczalnika, dlatego masą substancji rozpuszczonej (<i>m<sub>s</sub></i>) w roztworze jest <strong>wyłącznie masa soli bezwodnej (<i>m</i><sub>BaCl<sub>2</sub></sub> = 10,40 g)</strong>, natomiast masa całego roztworu (<i>m<sub>r</sub></i>) jest sumą masy użytego hydratu i masy dolanej wody:<br>
                <i>m<sub>r</sub></i> = <i>m</i><sub>hydratu</sub> + <i>m</i><sub>wody</sub> = 12,20 g + 187,8 g = <strong>200,0 g</strong><br>
                <i>C<sub>p</sub></i> = (<i>m</i><sub>BaCl<sub>2</sub></sub> / <i>m<sub>r</sub></i>) &middot; 100% = (10,40 g / 200,0 g) &middot; 100% = <strong>5,20%</strong>.
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 3 (Rozpuszczanie stopu metali Al–Cu w kwasie i w zasadzie – wyznaczanie składu procentowego stopu):</strong><br>
                <em>Próbkę duraluminium (stopu glinu i miedzi) o masie 10,0 g podzielono na dwie równe części po 5,00 g każda. Pierwszą część (5,00 g) umieszczono w nadmiarze wodnego roztworu wodorotlenku sodu (NaOH), w wyniku czego wydzieliło się 3,36 dm<sup>3</sup> bezbarwnego, palnego gazu (w warunkach normalnych), a na dnie pozostał nierozpuszczalny osad. Oblicz zawartość procentową (w procentach masowych) glinu i miedzi w badanym stopie oraz oblicz objętość gazu (w warunkach normalnych), jaka wydzieli się po całkowitym roztworzeniu drugiej części stopu (5,00 g) w nadmiarze stężonego kwasu azotowego(V) w temperaturze pokojowej.</em><br><br>
                • <strong>Krok 1 (Analiza reakcji pierwszej części stopu z roztworem NaOH):</strong><br>
                Spośród składników stopu (Al i Cu) z wodnym roztworem NaOH reaguje <strong>wyłącznie glin (Al)</strong> (miedź nie reaguje z NaOH i pozostaje na dnie jako osad):<br>
                2 Al + 2 NaOH + 6 H<sub>2</sub>O &rarr; 2 Na[Al(OH)<sub>4</sub>] + 3 H<sub>2</sub>&uarr;.<br>
                Z równania reakcji wynika, że z 2 moli Al (2 &middot; 27,0 g = 54,0 g Al) powstają 3 mole H<sub>2</sub> (3 &middot; 22,4 dm<sup>3</sup> = 67,2 dm<sup>3</sup> H<sub>2</sub>). Obliczamy masę glinu w 5,00 g stopu:<br>
                <i>m</i><sub>Al</sub> = (3,36 dm<sup>3</sup> &middot; 54,0 g) / 67,2 dm<sup>3</sup> = <strong>2,70 g Al</strong> (czyli 0,10 mola Al).<br>
                Masa miedzi w 5,00 g stopu wynosi zatem: <i>m</i><sub>Cu</sub> = 5,00 g &minus; 2,70 g = <strong>2,30 g Cu</strong>.<br>
                Skład procentowy stopu: <strong>%Al = (2,70 g / 5,00 g) &middot; 100% = 54,0%</strong> oraz <strong>%Cu = 100% &minus; 54,0% = 46,0%</strong>.<br>
                • <strong>Krok 2 (Analiza reakcji drugiej części stopu (5,00 g) ze stężonym HNO<sub>3</sub> w temperaturze pokojowej):</strong><br>
                <em>Uwaga na fundamentalną pułapkę maturalną!</em> W temperaturze pokojowej glin (Al) ulega <strong>pasywacji</strong> w stężonym kwasie azotowym(V) i NIE reaguje z nim! Ze stężonym HNO<sub>3</sub> na zimno reaguje zatem wyłącznie miedź (<i>m</i><sub>Cu</sub> = 2,30 g):<br>
                Cu + 4 HNO<sub>3(stęż)</sub> &rarr; Cu(NO<sub>3</sub>)<sub>2</sub> + 2 NO<sub>2</sub>&uarr; + 2 H<sub>2</sub>O.<br>
                Z 1 mola Cu (63,5 g Cu) wydzielają się 2 mole brunatnego gazu NO<sub>2</sub> (2 &middot; 22,4 dm<sup>3</sup> = 44,8 dm<sup>3</sup> NO<sub>2</sub>). Obliczamy objętość wydzielonego NO<sub>2</sub>:<br>
                <i>V</i><sub>NO<sub>2</sub></sub> = (2,30 g &middot; 44,8 dm<sup>3</sup>) / 63,5 g &approx; <strong>1,62 dm<sup>3</sup></strong>.
            </div>
        </div>

        <!-- SEKCJA 8 -->
        <div class="note-section">
            <h3>8. Projektowanie i Opis Doświadczeń Chemicznych (Pewniaki Maturalne z Działu 7)</h3>

            <h4>Doświadczenie 1: Wykazywanie amfoterycznego charakteru chemicznego wodorotlenku cynku (Zn(OH)<sub>2</sub>) lub wodorotlenku chromu(III) (Cr(OH)<sub>3</sub>)</h4>
            <p><strong>Zasada projektowania (błąd krytyczny z jedną probówką!):</strong> Nigdy nie wolno badać amfoteryczności w jednej probówce (dodając najpierw kwas, a potem zasadę do tej samej probówki)! Świeżo strącony wodorotlenek należy <strong>rozdzielić do dwóch osobnych probówek</strong>: do probówki I dodać roztwór mocnego kwasu (np. HCl<sub>(aq)</sub>), a do probówki II – roztwór mocnej zasady (np. NaOH<sub>(aq)</sub>).</p>

            <!-- WYKRES 5: SCHEMAT DOŚWIADCZENIA Z AMFOTERYCZNOŚCIĄ Cr(OH)3 (SVG) -->
            <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 12px; padding: 14px; margin: 16px 0; text-align: center;">
                <svg viewBox="0 0 840 235" style="width: 100%; max-width: 840px; height: auto;">
                    <!-- Karta Etap I -->
                    <rect x="12" y="10" width="240" height="215" rx="8" fill="rgba(30, 41, 59, 0.85)" stroke="#64748b" stroke-width="1.8"/>
                    <text x="132" y="32" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Etap I: Strącenie osadu Cr(OH)<tspan dy="3" font-size="8">3</tspan><tspan dy="-3">&darr;</tspan></text>
                    <text x="132" y="50" fill="#cbd5e1" font-size="10.5" text-anchor="middle">Dodajemy kroplami NaOH (niedomiar!)</text>
                    <!-- Probówka 0 -->
                    <path d="M 102 68 L 102 168 Q 102 190, 132 190 Q 162 190, 162 168 L 162 68" fill="none" stroke="#cbd5e1" stroke-width="2.2"/>
                    <path d="M 104 105 L 104 168 Q 104 188, 132 188 Q 160 188, 160 168 L 160 105 Z" fill="#4d7c0f" opacity="0.85"/>
                    <text x="132" y="152" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Cr(OH)<tspan dy="3" font-size="8">3</tspan><tspan dy="-3">&darr;</tspan></text>
                    <text x="132" y="212" fill="#a3e635" font-size="11" font-weight="bold" text-anchor="middle">Szarozielony osad Cr(OH)<tspan dy="3" font-size="8">3</tspan></text>

                    <!-- Strzałka Podział -->
                    <text x="282" y="112" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">Podział</text>
                    <text x="282" y="130" fill="#60a5fa" font-size="16" font-weight="bold" text-anchor="middle">&rarr;</text>

                    <!-- Karta Probówka I -->
                    <rect x="312" y="10" width="250" height="215" rx="8" fill="rgba(127, 29, 29, 0.2)" stroke="#f87171" stroke-width="1.8"/>
                    <text x="437" y="32" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">Probówka I: + HCl<tspan dy="3" font-size="8">(aq)</tspan><tspan dy="-3"> (nadmiar)</tspan></text>
                    <text x="437" y="50" fill="#e2e8f0" font-size="10.5" text-anchor="middle">Cr(OH)<tspan dy="3" font-size="8">3</tspan><tspan dy="-3"> + 3H</tspan><tspan dy="-4" font-size="8">+</tspan><tspan dy="4"> &rarr; Cr</tspan><tspan dy="-4" font-size="8">3+</tspan><tspan dy="4"> + 3H</tspan><tspan dy="3" font-size="8">2</tspan><tspan dy="-3">O</tspan></text>
                    <!-- Probówka I -->
                    <path d="M 407 68 L 407 168 Q 407 190, 437 190 Q 467 190, 467 168 L 467 68" fill="none" stroke="#cbd5e1" stroke-width="2.2"/>
                    <path d="M 409 88 L 409 168 Q 409 188, 437 188 Q 465 188, 465 168 L 465 88 Z" fill="#86efac" opacity="0.55"/>
                    <text x="437" y="142" fill="#064e3b" font-size="11.5" font-weight="bold" text-anchor="middle">Cr<tspan dy="-4" font-size="8">3+</tspan><tspan dy="4">(aq)</tspan></text>
                    <text x="437" y="212" fill="#86efac" font-size="11" font-weight="bold" text-anchor="middle">Osad zanika &rarr; klarowny roztwór</text>

                    <!-- Karta Probówka II -->
                    <rect x="578" y="10" width="250" height="215" rx="8" fill="rgba(30, 58, 138, 0.25)" stroke="#38bdf8" stroke-width="1.8"/>
                    <text x="703" y="32" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Probówka II: + NaOH<tspan dy="3" font-size="8">(aq)</tspan><tspan dy="-3"> (nadmiar)</tspan></text>
                    <text x="703" y="50" fill="#e2e8f0" font-size="10.5" text-anchor="middle">Cr(OH)<tspan dy="3" font-size="8">3</tspan><tspan dy="-3"> + 3OH</tspan><tspan dy="-4" font-size="8">&minus;</tspan><tspan dy="4"> &rarr; [Cr(OH)</tspan><tspan dy="3" font-size="8">6</tspan><tspan dy="-3">]</tspan><tspan dy="-4" font-size="8">3&minus;</tspan></text>
                    <!-- Probówka II -->
                    <path d="M 673 68 L 673 168 Q 673 190, 703 190 Q 733 190, 733 168 L 733 68" fill="none" stroke="#cbd5e1" stroke-width="2.2"/>
                    <path d="M 675 88 L 675 168 Q 675 188, 703 188 Q 731 188, 731 168 L 731 88 Z" fill="#059669" opacity="0.85"/>
                    <text x="703" y="142" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">[Cr(OH)<tspan dy="3" font-size="8">6</tspan><tspan dy="-3">]</tspan><tspan dy="-4" font-size="8">3&minus;</tspan></text>
                    <text x="703" y="212" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Osad zanika &rarr; szmaragdowozielony r-r</text>
                </svg>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">
                    <strong>Rys. 5.</strong> Schemat dwuetapowego doświadczenia potwierdzającego właściwości amfoteryczne wodorotlenku chromu(III).
                </div>
            </div>

            <ul class="note-list">
                <li><strong>Obserwacje:</strong> Po wkropleniu niewielkiej ilości roztworu NaOH do roztworu CrCl<sub>3</sub> wytrąca się <span style="color: #6ee7b7; font-weight: bold;">szarozielony osad Cr(OH)<sub>3</sub></span>. Po rozdzieleniu zawiesiny do dwóch probówek: w probówce I (po dodaniu HCl<sub>(aq)</sub>) szarozielony osad ulega roztworzeniu i powstaje klarowny, zielonkawoniebieski/fioletowy roztwór soli chromu(III); w probówce II (po dodaniu nadmiaru NaOH<sub>(aq)</sub>) szarozielony osad również ulega roztworzeniu i powstaje klarowny, <span style="color: #10b981; font-weight: bold;">ciemnozielony (szmaragdowozielony) roztwór</span>.</li>
                <li><strong>Wniosek:</strong> Wodorotlenek chromu(III) reaguje zarówno z mocnym kwasem, jak i z mocną zasadą, wykazuje zatem charakter amfoteryczny.</li>
            </ul>

            <h4>Doświadczenie 2: Odróżnianie skał wapiennych (CaCO<sub>3</sub>) od skał gipsowych (CaSO<sub>4</sub> &middot; 2H<sub>2</sub>O) i kwarcu (SiO<sub>2</sub>) oraz próba z wodą wapienną</h4>
            <ul class="note-list">
                <li><strong>Odczynnik różnicujący:</strong> Wodne roztwory mocnych lub średnich kwasów (np. HCl<sub>(aq)</sub>, HNO<sub>3(aq)</sub> lub nawet ocet CH<sub>3</sub>COOH<sub>(aq)</sub>).</li>
                <li><strong>Obserwacje:</strong> Po naniesieniu kilku kropel kwasu solnego HCl na próbkę skały wapiennej (wapienia, marmuru lub kredy) następuje <strong>intensywne pienienie się (burzenie) i wydzielanie bezbarwnego, bezwonnego gazu</strong> (na gipsie i kwarcu brak objawów reakcji). Po wprowadzeniu wydzielającego się gazu rurką odprowadzającą do probówki z klarowną wodą wapienną Ca(OH)<sub>2(aq)</sub> obserwujemy <strong>zmętnienie wody wapiennej</strong> (strącenie białego osadu CaCO<sub>3</sub>&darr;), które przy dalszym, długotrwałym przepuszczaniu gazu <strong>ponownie zanika</strong> (powstaje klarowny roztwór wodorowęglanu wapnia Ca(HCO<sub>3</sub>)<sub>2</sub>)!</li>
                <li><strong>Równania reakcji:</strong>
                    <div class="chem-eq">
                        1) CaCO<sub>3</sub> + 2 H<sup>+</sup> &rarr; Ca<sup>2+</sup> + H<sub>2</sub>O + CO<sub>2</sub>&uarr; &nbsp;<em>(wypieranie nietrwałego kwasu węglowego przez mocniejszy kwas HCl)</em><br>
                        2) CO<sub>2</sub> + Ca<sup>2+</sup> + 2 OH<sup>&minus;</sup> &rarr; CaCO<sub>3</sub>&darr; <em>(białe zmętnienie)</em> + H<sub>2</sub>O<br>
                        3) CaCO<sub>3</sub>&darr; + CO<sub>2(nadmiar)</sub> + H<sub>2</sub>O &rarr; Ca<sup>2+</sup> + 2 HCO<sub>3</sub><sup>&minus;</sup> <em>(klarowny roztwór)</em>
                    </div>
                </li>
            </ul>

            <h4>Doświadczenie 3: Wykazywanie różnicy mocy kwasów metodą wypierania kwasu słabszego z jego soli</h4>
            <ul class="note-list">
                <li><strong>Szereg mocy wybranych kwasów w doświadczeniach szkolnych:</strong><br>
                <strong>HCl / H<sub>2</sub>SO<sub>4</sub> &gt; H<sub>2</sub>SO<sub>3</sub> &gt; CH<sub>3</sub>COOH &gt; H<sub>2</sub>CO<sub>3</sub> &gt; C<sub>6</sub>H<sub>5</sub>OH (fenol) &gt; H<sub>2</sub>SiO<sub>3</sub></strong>.</li>
                <li><strong>Przebieg i obserwacje (np. porównanie mocy kwasu węglowego i kwasu krzemowego):</strong> Do probówki zawierającej klarowny wodny roztwór krzemianu(IV) sodu (Na<sub>2</sub>SiO<sub>3</sub> – tzw. <em>szkło wodne</em>) wprowadzamy za pomocą rurki gazowy tlenek węgla(IV) (CO<sub>2</sub>). W probówce wytrąca się <strong>biały, galaretowaty (żelowy) osad kwasu metakrzemowego H<sub>2</sub>SiO<sub>3</sub>&darr;</strong>.</li>
                <li><strong>Wniosek i równanie reakcji:</strong> Kwas węglowy (CO<sub>2</sub> + H<sub>2</sub>O) wyparł kwas krzemowy z roztworu jego soli, co dowodzi, że kwas węglowy jest kwasem mocniejszym od kwasu krzemowego (<i>K</i><sub>a(H<sub>2</sub>CO<sub>3</sub>)</sub> &gt; <i>K</i><sub>a(H<sub>2</sub>SiO<sub>3</sub>)</sub>):
                    <div class="chem-eq">
                        Na<sub>2</sub>SiO<sub>3</sub> + CO<sub>2</sub> + H<sub>2</sub>O &rarr; H<sub>2</sub>SiO<sub>3</sub>&darr; + Na<sub>2</sub>CO<sub>3</sub> &nbsp;&nbsp;(zapis jonowy skrócony: SiO<sub>3</sub><sup>2&minus;</sup> + CO<sub>2</sub> + H<sub>2</sub>O &rarr; H<sub>2</sub>SiO<sub>3</sub>&darr; + CO<sub>3</sub><sup>2&minus;</sup>)
                    </div>
                </li>
            </ul>
        </div>
    </div>
    `,

    notatkiActive: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">🧠 ACTIVE RECALL: SYSTEMATYKA ZWIĄZKÓW NIEORGANICZNYCH</h2>
        <p style="text-align: center; color: #94a3b8; font-size: 13px; margin-bottom: 20px;">
            💡 <em>Klikaj na ciemne pola, aby odkryć ukryte wzory, barwy osadów i równania reakcji, oraz rozwijaj pytania kontrolne!</em>
        </p>

        <!-- SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Nomenklatura, Tlenki, Nadtlenki i Ponadtlenki</h3>
            <p>W systemie Stocka wartościowości <strong>NIE podaje się</strong> dla pierwiastków o stałym stopniu utlenienia: <span class="recall-blank" onclick="toggleRecall(this)">litowców (I), berylowców (II), glinu (III), cynku (II) oraz fluoru (I)</span>.</p>
            <p>Spalanie litowców w tlenie: lit spala się do zwykłego tlenku <span class="recall-blank" onclick="toggleRecall(this)">Li<sub>2</sub>O</span>, sód spala się głównie do nadtlenku <span class="recall-blank" onclick="toggleRecall(this)">Na<sub>2</sub>O<sub>2</sub> (tlen na &minus;I)</span>, a potas spala się do ponadtlenku <span class="recall-blank" onclick="toggleRecall(this)">KO<sub>2</sub> (tlen na &minus;&frac12;)</span>.</p>
            <p>Tlenki chromu i ich charakter chemiczny: CrO (+II) to tlenek <span class="recall-blank" onclick="toggleRecall(this)">zasadowy (czarny)</span>, Cr<sub>2</sub>O<sub>3</sub> (+III) to tlenek <span class="recall-blank" onclick="toggleRecall(this)">amfoteryczny (ciemnozielony)</span>, a CrO<sub>3</sub> (+VI) to tlenek <span class="recall-blank" onclick="toggleRecall(this)">kwasowy (ciemnoczerwony)</span>.</p>
            <p>Cztery główne <strong>tlenki obojętne</strong> wymagane na maturze to: <span class="recall-blank" onclick="toggleRecall(this)">CO, NO, N<sub>2</sub>O oraz SiO</span>.</p>

            <details class="recall-details">
                <summary><span>Dlaczego tlenek azotu(IV) (NO<sub>2</sub>) nazywamy bezwodnikiem mieszanym? Zapisz jego reakcję z NaOH.</span></summary>
                <p>Ponieważ azot na +IV stopniu utlenienia nie tworzy trwałego kwasu i podczas reakcji z wodą lub zasadą ulega <strong>dysproporcjonowaniu</strong> do związków azotu(III) oraz azotu(V):<br>
                <strong>2 NO<sub>2</sub> + 2 NaOH &rarr; NaNO<sub>2</sub> + NaNO<sub>3</sub> + H<sub>2</sub>O</strong>.</p>
            </details>

            <details class="recall-details">
                <summary><span>Czy brak reakcji tlenku z wodą (np. dla CuO lub SiO<sub>2</sub>) oznacza, że tlenek jest obojętny?</span></summary>
                <p><strong>Nie!</strong> O charakterze tlenku decyduje reakcja z mocnymi kwasami i mocnymi zasadami. CuO reaguje z kwasami (jest zasadowy), a SiO<sub>2</sub> reaguje ze stężonymi zasadami (jest kwasowy).</p>
            </details>
        </div>

        <!-- SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Wodorki, Wodorotlenki i Hydroksokompleksy</h3>
            <p>W wodorkach metali (np. LiH, CaH<sub>2</sub>) wodór występuje na <span class="recall-blank" onclick="toggleRecall(this)">&minus;I stopniu utlenienia (anion H<sup>&minus;</sup>)</span>, a w reakcji z wodą wydziela się gazowy <span class="recall-blank" onclick="toggleRecall(this)">wodór H<sub>2</sub>&uarr; i powstaje zasada (odczyn zasadowy)</span>.</p>
            <p>W grupie 17. moc kwasów beztlenowych w roztworze wodnym rośnie w szeregu: <span class="recall-blank" onclick="toggleRecall(this)">HF (słaby!) &lt; HCl &lt; HBr &lt; HI (najmocniejszy)</span>.</p>
            <p>Reakcja glinu z wodnym roztworem NaOH (preparat „Kret”): 2 Al + 2 NaOH + 6 H<sub>2</sub>O &rarr; <span class="recall-blank" onclick="toggleRecall(this)">2 Na[Al(OH)<sub>4</sub>] + 3 H<sub>2</sub>&uarr;</span>.</p>

            <details class="recall-details">
                <summary><span>Czym różni się produkt reakcji ZnO z wodnym roztworem NaOH od produktu stapiania ZnO ze stałym NaOH?</span></summary>
                <p>
                    • <strong>W roztworze wodnym</strong> powstaje rozpuszczalny hydroksokompleks (tetrahydroksocynkan sodu):<br>
                    <strong>ZnO + 2 NaOH + H<sub>2</sub>O &rarr; Na<sub>2</sub>[Zn(OH)<sub>4</sub>]</strong>.<br>
                    • <strong>Podczas stapiania na sucho (w wysokiej temp.)</strong> woda odparowuje i powstaje sól bezwodna (cynkan sodu):<br>
                    <strong>ZnO + 2 NaOH<sub>(s)</sub> &rarr; Na<sub>2</sub>ZnO<sub>2</sub> + H<sub>2</sub>O&uarr;</strong>.
                </p>
            </details>

            <details class="recall-details">
                <summary><span>Dlaczego roztwarzanie osadu Cu(OH)<sub>2</sub> lub Zn(OH)<sub>2</sub> w wodzie amoniakalnej NH<sub>3(aq)</sub> NIE dowodzi ich amfoteryczności?</span></summary>
                <p>Ponieważ w reakcji z NH<sub>3(aq)</sub> powstają kationowe <strong>aminakompleksy</strong> (np. [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>, [Zn(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>), gdzie amoniak jest obojętnym ligandem, a nie reakcja kwas–zasada z jonami OH<sup>&minus;</sup>. Aby udowodnić amfoteryczność, trzeba użyć mocnej zasady (NaOH lub KOH)!</p>
            </details>
        </div>

        <!-- SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Kwasy, Pasywacja i Reakcje z Metalami</h3>
            <p>Kwas fosforawy (H<sub>3</sub>PO<sub>3</sub>) jest kwasem <span class="recall-blank" onclick="toggleRecall(this)">dwuprotonowym (ma 1 wiązanie P&ndash;H i 2 grupy &ndash;OH)</span>, a sól Na<sub>2</sub>HPO<sub>3</sub> jest solą <span class="recall-blank" onclick="toggleRecall(this)">obojętną (nie wodorosolą!)</span>.</p>
            <p>W stężonym HNO<sub>3</sub> oraz stężonym H<sub>2</sub>SO<sub>4</sub> <strong>na zimno</strong> pasywacji ulegają metale: <span class="recall-blank" onclick="toggleRecall(this)">Al (glin), Fe (żelazo), Cr (chrom) (oraz Ni, Co)</span>.</p>
            <p>W reakcji miedzi ze <strong>stężonym HNO<sub>3</sub></strong> wydziela się <span class="recall-blank" onclick="toggleRecall(this)">brunatny gaz NO<sub>2</sub>&uarr;</span>, natomiast z <strong>rozcieńczonym HNO<sub>3</sub></strong> wydziela się <span class="recall-blank" onclick="toggleRecall(this)">bezbarwny gaz NO&uarr;</span>.</p>

            <details class="recall-details">
                <summary><span>Jak zmienia się moc kwasów tlenowych chloru: HClO, HClO<sub>2</sub>, HClO<sub>3</sub>, HClO<sub>4</sub>?</span></summary>
                <p>Moc kwasu tlenowego tego samego pierwiastka <strong>rośnie wraz ze wzrostem stopnia utlenienia atomu centralnego</strong> (liczby tlenów terminalnych):<br>
                <strong>HClO (+I) &lt; HClO<sub>2</sub> (+III) &lt; HClO<sub>3</sub> (+V) &lt; HClO<sub>4</sub> (+VII, najmocniejszy)</strong>.</p>
            </details>
        </div>

        <!-- SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Sole, Wodorosole, Hydraty i Skały Wapienne/Gipsowe</h3>
            <p>Odczyn roztworów wodnych wodorosoli: roztwory NaHSO<sub>4</sub>, NaH<sub>2</sub>PO<sub>4</sub> i NaHSO<sub>3</sub> mają odczyn <span class="recall-blank" onclick="toggleRecall(this)">kwasowy (pH &lt; 7, przewaga dysocjacji K<sub>a</sub> &gt; K<sub>b</sub>)</span>, natomiast roztwory NaHCO<sub>3</sub>, Na<sub>2</sub>HPO<sub>4</sub> i NaHS mają odczyn <span class="recall-blank" onclick="toggleRecall(this)">zasadowy (pH &gt; 7, przewaga hydrolizy K<sub>b</sub> &gt; K<sub>a</sub>)</span>.</p>
            <p>Wzór gipsu krystalicznego to <span class="recall-blank" onclick="toggleRecall(this)">CaSO<sub>4</sub> &middot; 2H<sub>2</sub>O</span>, a wzór gipsu palonego (prażonego w 120&deg;C) to <span class="recall-blank" onclick="toggleRecall(this)">(CaSO<sub>4</sub>)<sub>2</sub> &middot; H<sub>2</sub>O (lub CaSO<sub>4</sub> &middot; &frac12;H<sub>2</sub>O)</span>.</p>

            <details class="recall-details">
                <summary><span>Co dzieje się po zmieszaniu wodnych roztworów FeCl<sub>3</sub> i Na<sub>2</sub>S, a co po zmieszaniu AlCl<sub>3</sub> i Na<sub>2</sub>S?</span></summary>
                <p>
                    • <strong>Dla AlCl<sub>3</sub> + Na<sub>2</sub>S:</strong> Zachodzi obustronna, całkowita <strong>hydroliza</strong> z wytrąceniem białego osadu i wydzieleniem gazu: <strong>2 Al<sup>3+</sup> + 3 S<sup>2&minus;</sup> + 6 H<sub>2</sub>O &rarr; 2 Al(OH)<sub>3</sub>&darr; + 3 H<sub>2</sub>S&uarr;</strong>.<br>
                    • <strong>Dla FeCl<sub>3</sub> + Na<sub>2</sub>S:</strong> Zachodzi <strong>reakcja redoks</strong> (kationy Fe<sup>3+</sup> utleniają jony S<sup>2&minus;</sup> do wolnej, żółtej siarki S&darr;): <strong>2 Fe<sup>3+</sup> + S<sup>2&minus;</sup> &rarr; 2 Fe<sup>2+</sup> + S&darr;</strong> (lub w nadmiarze S<sup>2&minus;</sup>: 2 Fe<sup>3+</sup> + 3 S<sup>2&minus;</sup> &rarr; 2 FeS&darr; + S&darr;).
                </p>
            </details>
        </div>
    </div>
    `,

    zadania: "<h3>Zadania</h3><br>Miejsce na zadania z szeregów genetycznych (chemografy), stechiometrii wodorosoli i hydratów oraz projektowanie doświadczeń identyfikacyjnych...",

    fiszki: [
        {
            front: "Dla jakich pierwiastków w nomenklaturze Stocka NIGDY nie podaje się wartościowości w nawiasie?",
            back: "Dla pierwiastków o jednej stałej wartościowości w związkach: litowców (grupa 1. – zawsze I), berylowców (grupa 2. – zawsze II), glinu (zawsze III), cynku (zawsze II) oraz fluoru (zawsze I)."
        },
        {
            front: "Podaj wzór, nazwę i stopnie utlenienia pierwiastków w związku tlenu z fluorem OF<sub>2</sub>.",
            back: "Wzór: OF<sub>2</sub>, nazwa: <strong>fluorek tlenu</strong> (a nie tlenek fluoru!). Fluor jest bardziej elektroujemny od tlenu, więc F ma stopień utlenienia &minus;I, natomiast tlen ma +II."
        },
        {
            front: "Jakie związki są głównymi produktami spalania litu (Li), sodu (Na) oraz potasu (K) w tlenie?",
            back: "• Lit tworzy zwykły tlenek: 4Li + O<sub>2</sub> &rarr; <strong>2Li<sub>2</sub>O</strong> (tlen na &minus;II)<br>• Sód tworzy nadtlenek: 2Na + O<sub>2</sub> &rarr; <strong>Na<sub>2</sub>O<sub>2</sub></strong> (tlen na &minus;I)<br>• Potas tworzy ponadtlenek: K + O<sub>2</sub> &rarr; <strong>KO<sub>2</sub></strong> (tlen na &minus;1/2)."
        },
        {
            front: "Które wodorotlenki metali NIE ulegają rozkładowi termicznemu podczas prażenia, a które rozpadają się do tlenków już w temperaturze pokojowej?",
            back: "• Nie ulegają rozkładowi (topią się bez rozkładu): NaOH, KOH, RbOH, CsOH oraz Ba(OH)<sub>2</sub>.<br>• Rozpadają się już w temp. pokojowej w momencie strącania: AgOH (&rarr; brunatny Ag<sub>2</sub>O&darr; + H<sub>2</sub>O) oraz Hg(OH)<sub>2</sub> (&rarr; żółty HgO&darr; + H<sub>2</sub>O)."
        },
        {
            front: "Zapisz równanie reakcji tzw. „wulkanu chemicznego” (termicznego rozkładu dichromianu(VI) amonu) wraz z barwami.",
            back: "(NH<sub>4</sub>)<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> (pomarańczowy kryształ) &rarr; Cr<sub>2</sub>O<sub>3</sub> (ciemnozielony pył) + N<sub>2</sub>&uarr; + 4H<sub>2</sub>O&uarr;."
        },
        {
            front: "Dlaczego brak reakcji tlenku z wodą (np. dla CuO, FeO lub SiO<sub>2</sub>) NIE oznacza, że tlenek jest obojętny?",
            back: "Ponieważ o charakterze chemicznym tlenku decyduje jego zachowanie wobec mocnych kwasów i mocnych zasad! CuO i FeO reagują z kwasami (są zasadowe), a SiO<sub>2</sub> reaguje ze stężonymi zasadami (jest kwasowy)."
        },
        {
            front: "Wymień 4 tlenki obojętne (niesolotwórcze) obowiązujące na maturze rozszerzonej.",
            back: "CO (tlenek węgla(II)), NO (tlenek azotu(II)), N<sub>2</sub>O (tlenek azotu(I)) oraz SiO (tlenek krzemu(II)). Nie reagują one ani z wodą, ani z kwasami, ani z zasadami."
        },
        {
            front: "Wymień najważniejsze tlenki amfoteryczne wymagane na maturze rozszerzonej.",
            back: "BeO (jedyny w 2. grupie!), Al<sub>2</sub>O<sub>3</sub>, ZnO, Cr<sub>2</sub>O<sub>3</sub>, MnO<sub>2</sub>, PbO, PbO<sub>2</sub>, SnO, SnO<sub>2</sub> (oraz słabo amfoteryczny Fe<sub>2</sub>O<sub>3</sub>)."
        },
        {
            front: "Dlaczego tlenek azotu(IV) (NO<sub>2</sub>) oraz tlenek chloru(IV) (ClO<sub>2</sub>) nazywamy bezwodnikami mieszanymi? Zapisz reakcję NO<sub>2</sub> z NaOH.",
            back: "Ponieważ w reakcji z wodą lub zasadą ulegają dysproporcjonowaniu, tworząc mieszaninę dwóch kwasów lub dwóch soli na +III i +V stopniu utlenienia:<br>2NO<sub>2</sub> + 2NaOH &rarr; NaNO<sub>2</sub> + NaNO<sub>3</sub> + H<sub>2</sub>O."
        },
        {
            front: "Dlaczego nadtlenek sodu (Na<sub>2</sub>O<sub>2</sub>) i ponadtlenek potasu (KO<sub>2</sub>) stosuje się do regeneracji powietrza w łodziach podwodnych? Zapisz równanie reakcji Na<sub>2</sub>O<sub>2</sub> z CO<sub>2</sub>.",
            back: "Ponieważ wiążą wydychany tlenek węgla(IV) i jednocześnie uwalniają gazowy tlen do oddychania:<br>2Na<sub>2</sub>O<sub>2</sub> + 2CO<sub>2</sub> &rarr; 2Na<sub>2</sub>CO<sub>3</sub> + O<sub>2</sub>&uarr;."
        },
        {
            front: "Jak zmienia się charakter chemiczny tlenków w 3. okresie (od Na<sub>2</sub>O do Cl<sub>2</sub>O<sub>7</sub>), a jak w dół grupy głównej?",
            back: "• W okresie (w prawo): maleje charakter zasadowy, a rośnie kwasowy (Na<sub>2</sub>O, MgO zasadowe &rarr; Al<sub>2</sub>O<sub>3</sub> amfoteryczny &rarr; SiO<sub>2</sub>, P<sub>4</sub>O<sub>10</sub>, SO<sub>3</sub>, Cl<sub>2</sub>O<sub>7</sub> kwasowe).<br>• W grupie (w dół): rośnie charakter zasadowy, a maleje kwasowy (np. BeO amfoteryczny &rarr; MgO, CaO, BaO zasadowe)."
        },
        {
            front: "Porównaj barwy, stopnie utlenienia i charakter chemiczny trzech tlenków chromu: CrO, Cr<sub>2</sub>O<sub>3</sub> oraz CrO<sub>3</sub>.",
            back: "• CrO (+II): czarny, zasadowy.<br>• Cr<sub>2</sub>O<sub>3</sub> (+III): ciemnozielony, amfoteryczny.<br>• CrO<sub>3</sub> (+VI): ciemnoczerwony, kwasowy (tworzy z wodą H<sub>2</sub>CrO<sub>4</sub> i H<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>)."
        },
        {
            front: "Porównaj charakter chemiczny tlenków manganu: MnO (+II), MnO<sub>2</sub> (+IV) oraz Mn<sub>2</sub>O<sub>7</sub> (+VII).",
            back: "Wraz ze wzrostem stopnia utlenienia rośnie charakter kwasowy:<br>• MnO (+II): zielonoszary, zasadowy.<br>• MnO<sub>2</sub> (+IV): ciemnobrunatny, amfoteryczny.<br>• Mn<sub>2</sub>O<sub>7</sub> (+VII): zielonobrunatna wybuchowa ciecz, silnie kwasowy (tworzy HMnO<sub>4</sub>)."
        },
        {
            front: "Jaki jest stopień utlenienia wodoru w wodorkach litowców i berylowców (np. LiH, CaH<sub>2</sub>) i jak reagują one z wodą?",
            back: "Wodór ma stopień utlenienia &minus;I (anion wodorkowy H<sup>&minus;</sup>). Reagują gwałtownie z wodą z wydzieleniem wodoru i utworzeniem zasady (charakter silnie zasadowy):<br>CaH<sub>2</sub> + 2H<sub>2</sub>O &rarr; Ca(OH)<sub>2</sub> + 2H<sub>2</sub>&uarr;."
        },
        {
            front: "Porównaj charakter chemiczny wodorków: CaH<sub>2</sub>, CH<sub>4</sub>, NH<sub>3</sub>, H<sub>2</sub>O oraz HCl.",
            back: "• CaH<sub>2</sub>: silnie zasadowy (jonowy)<br>• CH<sub>4</sub>: obojętny<br>• NH<sub>3</sub>: słabo zasadowy (wolna para elektronowa na N)<br>• H<sub>2</sub>O: amfoteryczny (obojętny odczyn pH = 7)<br>• HCl: kwasowy."
        },
        {
            front: "Jak w grupie 17. (HF &rarr; HCl &rarr; HBr &rarr; HI) zmienia się moc kwasów beztlenowych, trwałość termiczna oraz właściwości redukujące wodorków?",
            back: "W dół grupy rośnie promień jonu X<sup>&minus;</sup> i słabnie wiązanie H&ndash;X, dlatego:<br>1. Moc kwasu ROŚNIE: HF (słaby!) &lt; HCl &lt; HBr &lt; HI (najmocniejszy).<br>2. Trwałość termiczna MALEJE.<br>3. Właściwości redukujące ROSNĄ (HI i H<sub>2</sub>S to silne reduktory)."
        },
        {
            front: "Wyjaśnij różnicę między pojęciem „wodorotlenek” a „zasada”. Czy zapis „NH<sub>4</sub>OH” jest poprawny na maturze?",
            back: "• Nie każdy wodorotlenek jest zasadą (nierozpuszczalne w wodzie np. Cu(OH)<sub>2</sub>, Al(OH)<sub>3</sub> nie są zasadami).<br>• Nie każda zasada jest wodorotlenkiem (np. woda amoniakalna NH<sub>3(aq)</sub>).<br>• Zapis „NH<sub>4</sub>OH” jest BŁĘDNY – na maturze piszemy wyłącznie NH<sub>3(aq)</sub> lub NH<sub>3</sub> &middot; H<sub>2</sub>O!"
        },
        {
            front: "W jaki sposób otrzymuje się wodorotlenki nierozpuszczalne w wodzie i o czym trzeba pamiętać przy strącaniu wodorotlenków amfoterycznych (Al(OH)<sub>3</sub>, Zn(OH)<sub>2</sub>, Cr(OH)<sub>3</sub>)?",
            back: "Otrzymuje się je wyłącznie w reakcji strąceniowej (sól rozpuszczalna + zasada). Przy strącaniu wodorotlenków amfoterycznych mocną zasadę (NaOH/KOH) należy dodawać kroplami (w niedomiarze) lub użyć NH<sub>3(aq)</sub>, ponieważ w nadmiarze NaOH osad ulegnie roztworzeniu do hydroksokompleksu!"
        },
        {
            front: "Podaj barwy osadów wodorotlenków: Cu(OH)<sub>2</sub>, Cr(OH)<sub>3</sub>, Ni(OH)<sub>2</sub>, Fe(OH)<sub>2</sub>, Fe(OH)<sub>3</sub> oraz opisz, co dzieje się z Fe(OH)<sub>2</sub> i Mn(OH)<sub>2</sub> na powietrzu.",
            back: "• Cu(OH)<sub>2</sub>: jasnoniebieski (po ogrzaniu czernieje do CuO)<br>• Cr(OH)<sub>3</sub>: szarozielony<br>• Ni(OH)<sub>2</sub>: jabłkowozielony<br>• Fe(OH)<sub>2</sub>: brudnozielony (na powietrzu brunatnieje do Fe(OH)<sub>3</sub>)<br>• Mn(OH)<sub>2</sub>: biały/cielisty (na powietrzu brunatnieje do MnO<sub>2</sub>)."
        },
        {
            front: "Zapisz jonowe równania reakcji potwierdzających amfoteryczność Cr(OH)<sub>3</sub> (z HCl oraz z NaOH) wraz z obserwacjami.",
            back: "1. Z kwasem: Cr(OH)<sub>3</sub> + 3H<sup>+</sup> &rarr; Cr<sup>3+</sup> + 3H<sub>2</sub>O (szarozielony osad zanika, powstaje klarowny roztwór).<br>2. Z zasadą: Cr(OH)<sub>3</sub> + 3OH<sup>&minus;</sup> &rarr; [Cr(OH)<sub>6</sub>]<sup>3&minus;</sup> (szarozielony osad zanika, powstaje szmaragdowozielony roztwór)."
        },
        {
            front: "Porównaj równania reakcji tlenku glinu (Al<sub>2</sub>O<sub>3</sub>) ze stężonym wodnym roztworem NaOH oraz ze stałym NaOH podczas stapiania.",
            back: "• W roztworze wodnym (powstaje hydroksokompleks):<br>Al<sub>2</sub>O<sub>3</sub> + 2NaOH + 3H<sub>2</sub>O &rarr; 2Na[Al(OH)<sub>4</sub>]<br>• Podczas stapiania na sucho (powstaje sól bezwodna – metaglinian sodu):<br>Al<sub>2</sub>O<sub>3</sub> + 2NaOH<sub>(s)</sub> &rarr; 2NaAlO<sub>2</sub> + H<sub>2</sub>O&uarr;."
        },
        {
            front: "Dlaczego roztworzenie osadu Cu(OH)<sub>2</sub> lub Zn(OH)<sub>2</sub> w wodzie amoniakalnej NH<sub>3(aq)</sub> NIE dowodzi ich amfoteryczności?",
            back: "Ponieważ zachodzi wówczas reakcja kompleksowania z utworzeniem kationowych aminakompleksów ([Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup> – szafirowy odczynnik Schweitzera, lub [Zn(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>), a nie reakcja kwas–zasada z jonami OH<sup>&minus;</sup>."
        },
        {
            front: "Zapisz cząsteczkowe i jonowe równanie reakcji roztwarzania metalicznego glinu w wodnym roztworze NaOH.",
            back: "Cząsteczkowo: 2Al + 2NaOH + 6H<sub>2</sub>O &rarr; 2Na[Al(OH)<sub>4</sub>] + 3H<sub>2</sub>&uarr;<br>Jonowo: 2Al + 2OH<sup>&minus;</sup> + 6H<sub>2</sub>O &rarr; 2[Al(OH)<sub>4</sub>]<sup>&minus;</sup> + 3H<sub>2</sub>&uarr; (utleniaczem w tej reakcji jest woda!)."
        },
        {
            front: "Dlaczego kwas fosforawy (H<sub>3</sub>PO<sub>3</sub>) jest kwasem dwuprotonowym, a kwas podfosforawy (H<sub>3</sub>PO<sub>2</sub>) jednoprotonowym?",
            back: "Ponieważ dysocjacji ulegają tylko wodorowe grupy &ndash;OH! W H<sub>3</sub>PO<sub>3</sub> (HP(=O)(OH)<sub>2</sub>) jest jedno wiązanie P&ndash;H i tylko dwie grupy &ndash;OH (dlatego Na<sub>2</sub>HPO<sub>3</sub> to sól obojętna!), a w H<sub>3</sub>PO<sub>2</sub> (H<sub>2</sub>P(=O)(OH)) są dwa wiązania P&ndash;H i jedna grupa &ndash;OH."
        },
        {
            front: "Wymień 7 głównych mocnych kwasów nieorganicznych obowiązujących na maturze oraz najważniejsze kwasy nietrwałe.",
            back: "• Mocne kwasy: HCl, HBr, HI, HNO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub>, HClO<sub>4</sub>, HClO<sub>3</sub> (oraz HMnO<sub>4</sub>).<br>• Kwasy nietrwałe: H<sub>2</sub>CO<sub>3</sub> (&rarr; H<sub>2</sub>O + CO<sub>2</sub>&uarr;), H<sub>2</sub>SO<sub>3</sub> (&rarr; H<sub>2</sub>O + SO<sub>2</sub>&uarr;), HNO<sub>2</sub> oraz H<sub>2</sub>S<sub>2</sub>O<sub>3</sub> (&rarr; S&darr; + SO<sub>2</sub>&uarr; + H<sub>2</sub>O)."
        },
        {
            front: "Jak zmienia się moc kwasów tlenowych w szeregu HClO &ndash; HClO<sub>2</sub> &ndash; HClO<sub>3</sub> &ndash; HClO<sub>4</sub> oraz w okresie H<sub>4</sub>SiO<sub>4</sub> &ndash; H<sub>3</sub>PO<sub>4</sub> &ndash; H<sub>2</sub>SO<sub>4</sub> &ndash; HClO<sub>4</sub>?",
            back: "• Dla tego samego pierwiastka moc rośnie ze wzrostem stopnia utlenienia (liczby tlenów terminalnych): HClO &lt; HClO<sub>2</sub> &lt; HClO<sub>3</sub> &lt; HClO<sub>4</sub>.<br>• W okresie (i w grupie w górę) moc rośnie ze wzrostem elektroujemności atomu centralnego: H<sub>4</sub>SiO<sub>4</sub> &lt; H<sub>3</sub>PO<sub>4</sub> &lt; H<sub>2</sub>SO<sub>4</sub> &lt; HClO<sub>4</sub>."
        },
        {
            front: "Na czym polega zjawisko pasywacji, jakich metali i jakich kwasów dotyczy?",
            back: "Pasywacja to wytworzenie na powierzchni metalu szczelnej warstewki tlenku amfoterycznego chroniącej metal przed dalszym roztwarzaniem. Dotyczy Al, Fe, Cr (oraz Ni, Co) w stężonym HNO<sub>3</sub> oraz stężonym H<sub>2</sub>SO<sub>4</sub> na zimno! (Na gorąco warstwa pasywna ulega zniszczeniu)."
        },
        {
            front: "Zapisz równania reakcji miedzi (Cu) z: 1) rozcieńczonym HNO<sub>3</sub>, 2) stężonym HNO<sub>3</sub>, 3) gorącym stężonym H<sub>2</sub>SO<sub>4</sub>.",
            back: "1) 3Cu + 8HNO<sub>3(rozc)</sub> &rarr; 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO&uarr; (bezbarwny) + 4H<sub>2</sub>O<br>2) Cu + 4HNO<sub>3(stęż)</sub> &rarr; Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO<sub>2</sub>&uarr; (brunatny) + 2H<sub>2</sub>O<br>3) Cu + 2H<sub>2</sub>SO<sub>4(stęż)</sub> &rarr; CuSO<sub>4</sub> + SO<sub>2</sub>&uarr; (ostry zapach) + 2H<sub>2</sub>O."
        },
        {
            front: "Czym jest woda królewska i do czego służy?",
            back: "To mieszanina stężonego kwasu solnego (HCl) i stężonego kwasu azotowego(V) (HNO<sub>3</sub>) w stosunku objętościowym 3 : 1. Roztwarza metale szlachetne (złoto Au do H[AuCl<sub>4</sub>], platynę Pt do H<sub>2</sub>[PtCl<sub>6</sub>])."
        },
        {
            front: "Jakie sole powstają w bezpośredniej syntezie żelaza z chlorem (Fe + Cl<sub>2</sub>), a jakie w reakcji z siarką (Fe + S), jodem (Fe + I<sub>2</sub>) lub kwasem solnym (Fe + HCl)?",
            back: "• Z silnymi utleniaczami (Cl<sub>2</sub>, Br<sub>2</sub>) powstaje sól żelaza(III): 2Fe + 3Cl<sub>2</sub> &rarr; <strong>2FeCl<sub>3</sub></strong>.<br>• Z siarką, jodem oraz z kwasem solnym HCl powstają wyłącznie sole żelaza(II): <strong>FeS, FeI<sub>2</sub> oraz FeCl<sub>2</sub></strong>!"
        },
        {
            front: "Co obserwujemy i jakie reakcje zachodzą po zmieszaniu roztworów: 1) AlCl<sub>3</sub> + Na<sub>2</sub>CO<sub>3</sub> oraz 2) FeCl<sub>3</sub> + KI?",
            back: "1) Zachodzi całkowita wzajemna hydroliza (biały osad i bezbarwny gaz): 2Al<sup>3+</sup> + 3CO<sub>3</sub><sup>2&minus;</sup> + 3H<sub>2</sub>O &rarr; 2Al(OH)<sub>3</sub>&darr; + 3CO<sub>2</sub>&uarr;.<br>2) Zachodzi reakcja redoks (roztwór brunatnieje od wydzielonego jodu): 2Fe<sup>3+</sup> + 2I<sup>&minus;</sup> &rarr; 2Fe<sup>2+</sup> + I<sub>2</sub>."
        },
        {
            front: "Jak zmienia się barwa roztworu i masa płytki żelaznej zanurzonej w wodnym roztworze CuSO<sub>4</sub>?",
            back: "Równanie: Fe + Cu<sup>2+</sup> &rarr; Fe<sup>2+</sup> + Cu&darr;. Płytka pokrywa się czerwonawym nalotem miedzi, niebieski roztwór blednie/zielenieje, a <strong>masa płytki ROŚNIE</strong> (na każdy 1 mol = 56 g roztworzonego Fe osadza się 1 mol = 63,5 g Cu)."
        },
        {
            front: "Porównaj odczyn wodnych roztworów wodorosoli: NaHSO<sub>4</sub>, NaH<sub>2</sub>PO<sub>4</sub>, NaHSO<sub>3</sub>, NaHCO<sub>3</sub>, Na<sub>2</sub>HPO<sub>4</sub> oraz NaHS.",
            back: "• Odczyn KWASOWY (pH &lt; 7, przewaga dysocjacji K<sub>a</sub> &gt; K<sub>b</sub>): <strong>NaHSO<sub>4</sub>, NaH<sub>2</sub>PO<sub>4</sub>, NaHSO<sub>3</sub></strong>.<br>• Odczyn ZASADOWY (pH &gt; 7, przewaga hydrolizy K<sub>b</sub> &gt; K<sub>a</sub>): <strong>NaHCO<sub>3</sub>, Na<sub>2</sub>HPO<sub>4</sub>, NaHS</strong>."
        },
        {
            front: "Podaj wzory i nazwy systematyczne gipsu krystalicznego, gipsu palonego i anhydrytu oraz zapisz równanie twardnienia zaprawy gipsowej.",
            back: "• Gips krystaliczny: CaSO<sub>4</sub> &middot; 2H<sub>2</sub>O (siarczan(VI) wapnia–woda(1/2))<br>• Gips palony: (CaSO<sub>4</sub>)<sub>2</sub> &middot; H<sub>2</sub>O (siarczan(VI) wapnia–woda(2/1))<br>• Anhydryt: CaSO<sub>4</sub>.<br>Twardnienie: (CaSO<sub>4</sub>)<sub>2</sub> &middot; H<sub>2</sub>O + 3H<sub>2</sub>O &rarr; 2(CaSO<sub>4</sub> &middot; 2H<sub>2</sub>O)."
        },
        {
            front: "Zapisz 3 równania składające się na cykl wapienny w budownictwie (wypalanie wapienia, gaszenie wapna i twardnienie zaprawy murarskiej).",
            back: "1. Wypalanie wapienia: CaCO<sub>3</sub> <span class='chem-arrow'><span class='cond-top'>T</span><span class='arrow-sym'>&rarr;</span></span> CaO (wapno palone) + CO<sub>2</sub>&uarr;<br>2. Gaszenie wapna: CaO + H<sub>2</sub>O &rarr; Ca(OH)<sub>2</sub> (wapno gaszone)<br>3. Twardnienie zaprawy: Ca(OH)<sub>2</sub> + CO<sub>2</sub> &rarr; CaCO<sub>3</sub>&darr; + H<sub>2</sub>O."
        },
        {
            front: "Czym różni się twardość wody przemijająca (węglanowa) od trwałej (niewęglanowej) i jak się je usuwa?",
            back: "• Przemijająca: wywołana przez Ca(HCO<sub>3</sub>)<sub>2</sub> i Mg(HCO<sub>3</sub>)<sub>2</sub>; usuwa się ją przez przegotowanie wody (strąca się kamień kotłowy CaCO<sub>3</sub>&darr;) lub dodatek Ca(OH)<sub>2</sub>.<br>• Trwała: wywołana przez chlorki i siarczany(VI) Ca<sup>2+</sup>/Mg<sup>2+</sup>; usuwa się ją przez dodatek sody Na<sub>2</sub>CO<sub>3</sub> lub Na<sub>3</sub>PO<sub>4</sub>."
        },
        {
            front: "ZADANIE: Przez 200 cm<sup>3</sup> roztworu NaOH (1,5 mol/dm<sup>3</sup>) przepuszczono 4,48 dm<sup>3</sup> CO<sub>2</sub> (war. norm.). Ustal skład molowy roztworu po reakcji.",
            back: "1. n<sub>NaOH</sub> = 0,2 &middot; 1,5 = 0,30 mol; n<sub>CO2</sub> = 4,48 / 22,4 = 0,20 mol.<br>2. Stosunek n<sub>NaOH</sub> : n<sub>CO2</sub> = 1,5 (pomiędzy 1:1 a 2:1 &rarr; powstaje mieszanina Na<sub>2</sub>CO<sub>3</sub> i NaHCO<sub>3</sub>).<br>3. Z układu x + y = 0,20 i 2x + y = 0,30 otrzymujemy: <strong>0,10 mola Na<sub>2</sub>CO<sub>3</sub> i 0,10 mola NaHCO<sub>3</sub></strong>."
        },
        {
            front: "ZADANIE: Po wyprażeniu 12,20 g hydratu BaCl<sub>2</sub> &middot; nH<sub>2</sub>O otrzymano 10,40 g bezwodnego BaCl<sub>2</sub> (M = 208 g/mol). Wyznacz wzór hydratu i C<sub>p</sub> roztworu po rozpuszczeniu 12,20 g hydratu w 187,8 g wody.",
            back: "1. m<sub>H2O</sub> = 12,20 &minus; 10,40 = 1,80 g (0,10 mol); n<sub>BaCl2</sub> = 10,40 / 208 = 0,05 mol &rArr; 0,05 : 0,10 = 1 : 2 &rArr; <strong>BaCl<sub>2</sub> &middot; 2H<sub>2</sub>O</strong>.<br>2. m<sub>s</sub> = 10,40 g (tylko sól bezwodna!), m<sub>r</sub> = 12,20 + 187,8 = 200,0 g &rArr; C<sub>p</sub> = (10,40 / 200,0)&middot;100% = <strong>5,20%</strong>."
        },
        {
            front: "ZADANIE: 5,00 g stopu Al–Cu w reakcji z nadmiarem NaOH<sub>(aq)</sub> wydzieliło 3,36 dm<sup>3</sup> H<sub>2</sub> (war. norm.). Oblicz %Al w stopie oraz objętość gazu wydzielonego z 5,00 g tego stopu w reakcji ze stężonym HNO<sub>3</sub> na zimno.",
            back: "1. Z NaOH reaguje tylko Al (2Al &rarr; 3H<sub>2</sub>): m<sub>Al</sub> = (3,36 &middot; 54) / 67,2 = 2,70 g &rArr; <strong>%Al = 54%</strong> (m<sub>Cu</sub> = 2,30 g, %Cu = 46%).<br>2. W stęż. HNO<sub>3</sub> na zimno Al ulega pasywacji! Reaguje tylko Cu (Cu &rarr; 2NO<sub>2</sub>): V<sub>NO2</sub> = (2,30 &middot; 44,8) / 63,5 = <strong>1,62 dm<sup>3</sup> NO<sub>2</sub></strong>."
        },
        {
            front: "Jak doświadczalnie udowodnić, że kwas węglowy (H<sub>2</sub>CO<sub>3</sub>) jest mocniejszy od kwasu krzemowego (H<sub>2</sub>SiO<sub>3</sub>)?",
            back: "Przepuścić gazowy CO<sub>2</sub> przez wodny roztwór krzemianu(IV) sodu (Na<sub>2</sub>SiO<sub>3</sub> – szkło wodne). Wytrąci się biały, galaretowaty osad H<sub>2</sub>SiO<sub>3</sub>&darr;, ponieważ mocniejszy kwas węglowy wypiera słabszy kwas krzemowy z jego soli:<br>SiO<sub>3</sub><sup>2&minus;</sup> + CO<sub>2</sub> + H<sub>2</sub>O &rarr; H<sub>2</sub>SiO<sub>3</sub>&darr; + CO<sub>3</sub><sup>2&minus;</sup>."
        }
    ]
};