// Dział X. Metale, niemetale i ich związki (Indeks 9 na liście)
appData[9] = {
    notatki: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">📚 KOMPENDIUM MATURALNE: METALE, NIEMETALE I ICH ZWIĄZKI (BLOKI s, p, d)</h2>

        <!-- SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Zmienność Właściwości Pierwiastków w Układzie Okresowym oraz Natura Wiązania Metalicznego</h3>
            <p>Właściwości fizyczne i chemiczne pierwiastków wynikają bezpośrednio z konfiguracji elektronowej ich powłoki walencyjnej i zmieniają się w sposób okresowy wraz ze wzrostem liczby atomowej <i>Z</i>. W obrębie jednej grupy głównej atomy mają taką samą liczbę elektronów walencyjnych (np. litowce <i>ns</i><sup>1</sup>, berylowce <i>ns</i><sup>2</sup>, borowce <i>ns</i><sup>2</sup><i>np</i><sup>1</sup>, fluorowce <i>ns</i><sup>2</sup><i>np</i><sup>5</sup>), co warunkuje ich podobieństwo chemiczne, natomiast w miarę schodzenia w dół grupy rośnie liczba powłok elektronowych i promień atomowy <i>r</i><sub>at</sub>.</p>

            <!-- WYKRES 1: OKRESOWOŚĆ I WIĄZANIE METALICZNE (SVG) -->
            <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 12px; padding: 14px; margin: 16px 0; text-align: center;">
                <svg viewBox="0 0 860 255" style="width: 100%; max-width: 860px; height: auto;">
                    <defs>
                        <marker id="arr-blue-10" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
                        </marker>
                        <marker id="arr-red-10" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1 L 10 5 L 0 9 z" fill="#f87171"/>
                        </marker>
                    </defs>

                    <!-- PANEL A: PRAWIDŁOWOŚCI W GRUPACH I OKRESACH -->
                    <rect x="10" y="10" width="415" height="235" rx="8" fill="rgba(30, 41, 59, 0.85)" stroke="#475569" stroke-width="1.5"/>
                    <text x="217" y="32" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">a) Prawidłowości w grupach i okresach (Z &uarr;)</text>

                    <!-- Strzałka górna (w prawo) -->
                    <text x="217" y="52" fill="#f87171" font-size="10.5" font-weight="bold" text-anchor="middle">Rośnie: E<tspan dy="3" font-size="8">j</tspan><tspan dy="-3">, &chi;, charakter niemetaliczny i aktywność niemetali</tspan></text>
                    <line x1="95" y1="62" x2="340" y2="62" stroke="#f87171" stroke-width="2.5" marker-end="url(#arr-red-10)"/>

                    <!-- Bloki s, d, p -->
                    <rect x="95" y="75" width="48" height="115" rx="4" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="1.5"/>
                    <text x="119" y="137" fill="#bae6fd" font-size="12" font-weight="bold" text-anchor="middle">s</text>

                    <rect x="143" y="110" width="105" height="80" rx="4" fill="rgba(250, 204, 21, 0.18)" stroke="#facc15" stroke-width="1.5"/>
                    <text x="195" y="155" fill="#fef08a" font-size="12" font-weight="bold" text-anchor="middle">d (3–12)</text>

                    <rect x="248" y="75" width="92" height="115" rx="4" fill="rgba(248, 113, 113, 0.2)" stroke="#f87171" stroke-width="1.5"/>
                    <text x="294" y="137" fill="#fecaca" font-size="12" font-weight="bold" text-anchor="middle">p (13–18)</text>

                    <!-- Strzałka lewa (w dół) -->
                    <line x1="75" y1="80" x2="75" y2="185" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arr-blue-10)"/>
                    <text x="44" y="122" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">r<tspan dy="3" font-size="8">at</tspan><tspan dy="-3"> &uarr;</tspan></text>
                    <text x="44" y="138" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Aktywn.</text>
                    <text x="44" y="152" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">metali &uarr;</text>

                    <!-- Strzałka prawa (w górę) -->
                    <line x1="358" y1="185" x2="358" y2="80" stroke="#f87171" stroke-width="2.5" marker-end="url(#arr-red-10)"/>
                    <text x="390" y="122" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">E<tspan dy="3" font-size="8">j</tspan><tspan dy="-3">&uarr;, &chi;&uarr;</tspan></text>
                    <text x="390" y="138" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">Aktywn.</text>
                    <text x="390" y="152" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">niemet. &uarr;</text>

                    <!-- Strzałka dolna (w lewo) -->
                    <line x1="340" y1="205" x2="95" y2="205" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arr-blue-10)"/>
                    <text x="217" y="226" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">Rośnie: promień atomowy r<tspan dy="3" font-size="8">at</tspan><tspan dy="-3">, charakter metaliczny, aktywność metali</tspan></text>

                    <!-- PANEL B: WIĄZANIE METALICZNE -->
                    <rect x="435" y="10" width="415" height="235" rx="8" fill="rgba(30, 41, 59, 0.85)" stroke="#475569" stroke-width="1.5"/>
                    <text x="642" y="32" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">b) Wiązanie metaliczne (model „gazu elektronowego”)</text>

                    <!-- Sieć kationów i elektronów -->
                    <rect x="450" y="50" width="185" height="125" rx="8" fill="rgba(56, 189, 248, 0.1)" stroke="#38bdf8" stroke-dasharray="4,3"/>
                    <!-- Kationy M^n+ -->
                    <circle cx="485" cy="82" r="15" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
                    <text x="485" y="86" fill="#f8fafc" font-size="10.5" font-weight="bold" text-anchor="middle">M<tspan dy="-4" font-size="8">n+</tspan></text>
                    <circle cx="542" cy="82" r="15" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
                    <text x="542" y="86" fill="#f8fafc" font-size="10.5" font-weight="bold" text-anchor="middle">M<tspan dy="-4" font-size="8">n+</tspan></text>
                    <circle cx="600" cy="82" r="15" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
                    <text x="600" y="86" fill="#f8fafc" font-size="10.5" font-weight="bold" text-anchor="middle">M<tspan dy="-4" font-size="8">n+</tspan></text>

                    <circle cx="485" cy="142" r="15" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
                    <text x="485" y="146" fill="#f8fafc" font-size="10.5" font-weight="bold" text-anchor="middle">M<tspan dy="-4" font-size="8">n+</tspan></text>
                    <circle cx="542" cy="142" r="15" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
                    <text x="542" y="146" fill="#f8fafc" font-size="10.5" font-weight="bold" text-anchor="middle">M<tspan dy="-4" font-size="8">n+</tspan></text>
                    <circle cx="600" cy="142" r="15" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2"/>
                    <text x="600" y="146" fill="#f8fafc" font-size="10.5" font-weight="bold" text-anchor="middle">M<tspan dy="-4" font-size="8">n+</tspan></text>

                    <!-- Elektrony e- -->
                    <circle cx="514" cy="65" r="6" fill="#ef4444"/><text x="514" y="68" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">e-</text>
                    <circle cx="572" cy="112" r="6" fill="#ef4444"/><text x="572" y="115" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">e-</text>
                    <circle cx="512" cy="112" r="6" fill="#ef4444"/><text x="512" y="115" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">e-</text>
                    <circle cx="463" cy="112" r="6" fill="#ef4444"/><text x="463" y="115" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">e-</text>
                    <circle cx="618" cy="112" r="6" fill="#ef4444"/><text x="618" y="115" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">e-</text>
                    <circle cx="572" cy="162" r="6" fill="#ef4444"/><text x="572" y="165" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">e-</text>

                    <!-- Tekst konsekwencji -->
                    <text x="648" y="66" fill="#f8fafc" font-size="11" font-weight="bold">Konsekwencje fizyczne:</text>
                    <text x="648" y="86" fill="#cbd5e1" font-size="10.5">1. Przewodnictwo prądu (ruch e<tspan dy="-4" font-size="8">&minus;</tspan><tspan dy="4">)</tspan></text>
                    <text x="648" y="106" fill="#cbd5e1" font-size="10.5">2. Przewodnictwo cieplne</text>
                    <text x="648" y="126" fill="#cbd5e1" font-size="10.5">3. Kowalność i ciągliwość</text>
                    <text x="648" y="144" fill="#94a3b8" font-size="9.5">(przesuwanie warstw M<tspan dy="-4" font-size="7">n+</tspan><tspan dy="4"> bez</tspan></text>
                    <text x="648" y="158" fill="#94a3b8" font-size="9.5">zerwania wiązania!)</text>

                    <text x="642" y="202" fill="#93c5fd" font-size="10.5" font-weight="bold" text-anchor="middle">Wzrost T &rArr; drgania zrębów M<tspan dy="-4" font-size="8">n+</tspan><tspan dy="4"> rosną &rArr; przewodnictwo</tspan></text>
                    <text x="642" y="220" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">elektryczne metali MALEJE ze wzrostem temperatury!</text>
                </svg>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">
                    <strong>Rys. 1.</strong> a) Kierunki zmian najważniejszych wielkości okresowych dla metali i niemetali; b) istota wiązania metalicznego i jej przełożenie na makroskopowe właściwości metali.
                </div>
            </div>

            <ul class="note-list">
                <li><strong>Dlaczego metale są kowalne i ciągliwe, a kryształy jonowe (sole) są kruche?</strong> W sieci krystalicznej metalu dodatnie zręby atomowe M<sup>n+</sup> są otoczone wspólną, ruchliwą chmurą zdelokalizowanych elektronów walencyjnych („gazem elektronowym”). Pod wpływem uderzenia młotkiem warstwy kationów przesuwają się względem siebie, ale zdelokalizowane elektrony natychmiast dostosowują swoje położenie i nadal spajają sieć (wiązanie metaliczne jest <strong>bezukierunkowe</strong>). Natomiast w krysztale jonowym (np. NaCl) przesunięcie warstw o pół parametru sieciowego powoduje zetknięcie się jonów jednoimiennych (Na<sup>+</sup> naprzeciw Na<sup>+</sup> oraz Cl<sup>&minus;</sup> naprzeciw Cl<sup>&minus;</sup>), co wywołuje gwałtowne odpychanie elektrostatyczne i pęknięcie kryształu.</li>
                <li><span style="color: #f87171; font-weight: bold;">🔥 Uwaga maturalna – Od czego zależy aktywność chemiczna metali, a od czego aktywność niemetali?</span>
                    <br>&ndash; <strong>Metale</strong> w reakcjach chemicznych zawsze <strong>oddają elektrony walencyjne</strong> (pełnią wyłącznie funkcję reduktorów: M &rarr; M<sup>n+</sup> + <i>n</i>e<sup>&minus;</sup>). Dlatego aktywność chemiczna metali jest tym większa, im łatwiej atom oddaje elektron (czyli im mniejsza energia jonizacji <i>E<sub>j</sub></i> i większy promień atomowy) – <strong>rośnie w grupie z góry na dół</strong> (Li &lt; Na &lt; K &lt; Rb &lt; Cs) oraz <strong>maleje w okresie od lewej do prawej</strong> (Na &gt; Mg &gt; Al).
                    <br>&ndash; <strong>Niemetale</strong> w reakcjach z metalami i wodorem <strong>przyjmują elektrony</strong> (pełnią funkcję utleniaczy). Dlatego aktywność chemiczna niemetali jest tym większa, im silniej atom przyciąga elektrony (im większa elektroujemność &chi; i mniejszy promień atomowy) – <strong>maleje w grupie z góry na dół</strong> (F<sub>2</sub> &gt; Cl<sub>2</sub> &gt; Br<sub>2</sub> &gt; I<sub>2</sub>) oraz <strong>rośnie w okresie od lewej do prawej</strong> (C &lt; N<sub>2</sub> &lt; O<sub>2</sub> &lt; F<sub>2</sub>).
                </li>
            </ul>
        </div>

        <!-- SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Wodór (<sub>1</sub>H) i Hel (<sub>2</sub>He) – Niemetaliczni Przedstawiciele Bloku s</h3>
            <p><strong>Wodór (<sub>1</sub>H: 1s<sup>1</sup>)</strong> występuje w przyrodzie w postaci trzech izotopów: <strong>protu</strong> (<sup>1</sup><sub>1</sub>H – 99,985%, brak neutronów w jądrze!), <strong>deuteru</strong> (<sup>2</sup><sub>1</sub>H lub D – 1 proton i 1 neutron, ciężka woda D<sub>2</sub>O) oraz promieniotwórczego <strong>trytu</strong> (<sup>3</sup><sub>1</sub>H lub T – 1 proton i 2 neutrony). W warunkach normalnych wodór tworzy dwuatomowe, niepolarne cząsteczki H<sub>2</sub> (wiązanie pojedyncze &sigma; typu <i>s–s</i>), jest bezbarwnym, bezwonnym, bardzo słabo rozpuszczalnym w wodzie gazem o <strong>najmniejszej gęstości spośród wszystkich znanych gazów</strong> (<i>d</i> = 0,0899 g &middot; dm<sup>&minus;3</sup> w warunkach normalnych, <i>M</i> = 2,0 g &middot; mol<sup>&minus;1</sup>). Z powietrzem lub tlenem tworzy wybuchową <strong>mieszaninę piorunującą</strong> (najgwałtowniej wybucha przy stosunku objętościowym H<sub>2</sub> : O<sub>2</sub> = 2 : 1). <strong>Hel (<sub>2</sub>He: 1s<sup>2</sup>)</strong> jest jednoatomowym, niepalnym i biernym chemicznie gazem szlachetnym (helowcem) o trwałym dublecie elektronowym i najniższej temperaturze wrzenia (&minus;268,9&deg;C).</p>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Zagadnienie maturalne (Wodór H<sub>2</sub>)</th>
                            <th>Równania reakcji chemicznych i warunki prowadzenia procesu</th>
                            <th>Obserwacje, identyfikacja i pułapki maturalne</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. Laboratoryjne metody otrzymywania wodoru</strong></td>
                            <td>• <strong>Metoda A (podstawowa):</strong> Reakcja metalu aktywnego (<i>E</i>&deg; &lt; 0 V, np. Zn, Mg, Fe, Al) z kwasem nieutleniającym (HCl, H<sub>2</sub>SO<sub>4(rozc)</sub>) w aparacie Kippa lub probówce:<br>Zn + 2HCl &rarr; ZnCl<sub>2</sub> + H<sub>2</sub>&uarr; &nbsp;(jonowo: Zn + 2H<sup>+</sup> &rarr; Zn<sup>2+</sup> + H<sub>2</sub>&uarr;)<br>• <strong>Metoda B:</strong> Reakcja metali 1. i 2. grupy (oprócz Be; Mg tylko z parą wodną!) z wodą:<br>2Na + 2H<sub>2</sub>O &rarr; 2NaOH + H<sub>2</sub>&uarr; &nbsp;|&nbsp; Ca + 2H<sub>2</sub>O &rarr; Ca(OH)<sub>2</sub> + H<sub>2</sub>&uarr;<br>• <strong>Metoda C:</strong> Reakcja jonowych wodorków metali (LiH, NaH, CaH<sub>2</sub>) z wodą:<br>CaH<sub>2</sub> + 2H<sub>2</sub>O &rarr; Ca(OH)<sub>2</sub> + 2H<sub>2</sub>&uarr;<br>• <strong>Metoda D:</strong> Roztwarzanie metali amfoterycznych (Al, Zn, Be) w mocnych zasadach:<br>2Al + 2NaOH + 6H<sub>2</sub>O &rarr; 2Na[Al(OH)<sub>4</sub>] + 3H<sub>2</sub>&uarr;</td>
                            <td>• <strong>Jak zbierać wodór w laboratorium?</strong><br>1) <strong>Nad wodą</strong> (w odwróconej probówce wypełnionej wodą w krystalizatorze) – ponieważ H<sub>2</sub> praktycznie nie rozpuszcza się w wodzie!<br>2) Przez wypychanie powietrza w probówce odwróconej <strong>DNEM DO GÓRY</strong> – ponieważ H<sub>2</sub> ma gęstość ok. 14,5 razy mniejszą od powietrza i gromadzi się pod dnem!<br>• <strong>Identyfikacja H<sub>2</sub>:</strong> Po zbliżeniu płonącego łuczywa do wylotu probówki gaz zapala się z charakterystycznym dźwiękiem („szczeknięciem” / świstem).</td>
                        </tr>
                        <tr>
                            <td><strong>2. Przemysłowe metody otrzymywania wodoru (gaz syntezowy)</strong></td>
                            <td>• <strong>Konwersja metanu z parą wodną (ok. 800&deg;C, katalizator Ni):</strong><br>CH<sub>4(g)</sub> + H<sub>2</sub>O<sub>(g)</sub> <span class="chem-arrow"><span class="cond-top">Ni, T</span><span class="arrow-sym">&#8652;</span></span> CO<sub>(g)</sub> + 3H<sub>2(g)</sub> &nbsp;(oraz dalej: CO + H<sub>2</sub>O &#8652; CO<sub>2</sub> + H<sub>2</sub>)<br>• <strong>Zgazowanie rozżarzonego węgla (koksu) parą wodną (&sim;1000&deg;C):</strong><br>C<sub>(s)</sub> + H<sub>2</sub>O<sub>(g)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> CO<sub>(g)</sub> + H<sub>2(g)</sub> &nbsp;<em>(mieszanina CO + H<sub>2</sub> to tzw. gaz wodny / syntezowy!)</em><br>• <strong>Elektroliza wody</strong> (z dodatkiem elektrolitu) lub solanki: 2H<sub>2</sub>O <span class="chem-arrow"><span class="cond-top">prąd</span><span class="arrow-sym">&rarr;</span></span> 2H<sub>2</sub>&uarr; + O<sub>2</sub>&uarr;</td>
                            <td>Wodór otrzymany z odnawialnych źródeł energii (OZE) w procesie elektrolizy wody nazywany jest „zielonym wodorem” – jego spalanie daje wyłącznie parę wodną (2H<sub>2</sub> + O<sub>2</sub> &rarr; 2H<sub>2</sub>O), bez emisji CO<sub>2</sub>.</td>
                        </tr>
                        <tr>
                            <td><strong>3. Reakcje wodoru z niemetalami, metalami i tlenkami metali</strong></td>
                            <td>• <strong>Z fluorowcami:</strong> H<sub>2</sub> + F<sub>2</sub> &rarr; 2HF (wybuchowo nawet w ciemności!); H<sub>2</sub> + Cl<sub>2</sub> <span class="chem-arrow"><span class="cond-top">h&nu; (światło)</span><span class="arrow-sym">&rarr;</span></span> 2HCl (reakcja rodnikowa łańcuchowa); H<sub>2</sub> + Br<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T, kat.</span><span class="arrow-sym">&rarr;</span></span> 2HBr; H<sub>2</sub> + I<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&#8652;</span></span> 2HI (reakcja odwracalna i endoenergetyczna!).<br>• <strong>Z tlenem i siarką:</strong> 2H<sub>2</sub> + O<sub>2</sub> <span class="chem-arrow"><span class="cond-top">iskra / T</span><span class="arrow-sym">&rarr;</span></span> 2H<sub>2</sub>O &nbsp;|&nbsp; H<sub>2</sub> + S <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> H<sub>2</sub>S<br>• <strong>Z azotem (metoda Habera–Boscha):</strong> N<sub>2(g)</sub> + 3H<sub>2(g)</sub> <span class="chem-arrow"><span class="cond-top">Fe, p, T (450&deg;C)</span><span class="arrow-sym">&#8652;</span></span> 2NH<sub>3(g)</sub> (&Delta;<i>H</i> &lt; 0)<br>• <strong>Z aktywnymi metalami (1. i 2. grupy, oprócz Be i Mg):</strong> 2Na + H<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 2NaH &nbsp;|&nbsp; Ca + H<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> CaH<sub>2</sub><br>• <strong>Wodorotermia (redukcja tlenków metali, np. CuO, Fe<sub>2</sub>O<sub>3</sub>, WO<sub>3</sub>):</strong><br>CuO<sub>(s)</sub> (<span style="color: #94a3b8;">czarny</span>) + H<sub>2(g)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> Cu<sub>(s)</sub> (<span style="color: #f87171;">różowoczerwony</span>) + H<sub>2</sub>O<sub>(g)</sub></td>
                            <td>• W reakcjach z niemetalami oraz podczas redukcji tlenków metali wodór zawsze przechodzi ze stopnia 0 na <strong>+I (pełni funkcję reduktora)</strong>.<br>• Jedynie w reakcji z aktywnymi metalami (tworzenie wodorków jonowych NaH, CaH<sub>2</sub>) wodór przechodzi ze stopnia 0 na <strong>&minus;I (pełni funkcję utleniacza!)</strong>.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Metale Bloku s: Litowce (1. Grupa) i Berylowce (2. Grupa) – Analiza Porównawcza</h3>
            <p>Pierwiastki <strong>1. grupy</strong> (litowce – metale alkaliczne: Li, Na, K, Rb, Cs, Fr; konfiguracja walencyjna <i>ns</i><sup>1</sup>, w związkach wyłącznie stopień utlenienia <strong>+I</strong>) oraz <strong>2. grupy</strong> (berylowce: Be, Mg, Ca, Sr, Ba, Ra; tzw. metale ziem alkalicznych dla Ca, Sr, Ba, Ra; konfiguracja walencyjna <i>ns</i><sup>2</sup>, w związkach wyłącznie stopień utlenienia <strong>+II</strong>) tworzą grupę tzw. metali lekkich. Ze względu na skrajnie niskie wartości energii jonizacji i niską elektroujemność są najaktywniejszymi metalami w układzie okresowym, dlatego w przyrodzie występują wyłącznie w postaci związanej (minerałów i soli), a wolne litowce oraz wapń, stront i bar należy przechowywać <strong>pod warstwą nafty lub oleju parafinowego</strong> (<em>uwaga:</em> lit ma tak małą gęstość <i>d</i> = 0,53 g &middot; cm<sup>&minus;3</sup>, że pływa nawet po powierzchni nafty, dlatego przechowuje się go w zatopionych ampułkach lub w wazelinie!).</p>

            <h4>A. Porównanie właściwości fizycznych i chemicznych metali grup 1. i 2. należących do tego samego okresu</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Kryterium porównawcze</th>
                            <th>Litowce (Grupa 1. – <i>ns</i><sup>1</sup>: Li, Na, K, Rb, Cs)</th>
                            <th>Berylowce (Grupa 2. – <i>ns</i><sup>2</sup>: Be, Mg, Ca, Sr, Ba)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Promień atomowy i jonowy, twardość, gęstość oraz temp. topnienia</strong><br>(w tym samym okresie, np. Na vs Mg, K vs Ca)</td>
                            <td>• Mają <strong>większy promień atomowy i jonowy</strong> (<i>r</i><sub>Na</sub> &gt; <i>r</i><sub>Mg</sub>) oraz tylko 1 elektron walencyjny tworzący chmurę elektronową.<br>• W konsekwencji wiązanie metaliczne w litowcach jest słabsze: są <strong>bardzo miękkie</strong> (dają się kroić nożem jak masło!), mają <strong>mniejszą gęstość</strong> (Li, Na i K są lżejsze od wody: <i>d</i> &lt; 1 g &middot; cm<sup>&minus;3</sup>!) oraz <strong>niższe temperatury topnienia</strong> (np. Na topi się już w 97,8&deg;C, a K w 63,5&deg;C).</td>
                            <td>• Mają <strong>mniejszy promień atomowy i jonowy</strong> oraz 2 elektrony walencyjne przypadające na każdy zrąb M<sup>2+</sup>.<br>• Wiązanie metaliczne jest silniejsze niż w litowcach z tego samego okresu: berylowce są <strong>twardsze</strong>, mają <strong>większą gęstość</strong> (wszystkie są cięższe od wody: <i>d</i> &gt; 1,5 g &middot; cm<sup>&minus;3</sup> – toną w wodzie!) oraz <strong>znacznie wyższe temperatury topnienia</strong> (np. Mg: 650&deg;C, Ca: 842&deg;C).</td>
                        </tr>
                        <tr>
                            <td><strong>Aktywność chemiczna i potencjał standardowy <i>E</i>&deg;</strong></td>
                            <td><strong>Bardziej aktywne chemicznie</strong> niż berylowce tego samego okresu (mają niższą I energię jonizacji). Aktywność rośnie gwałtownie w dół grupy: Li &rarr; Na &rarr; K &rarr; Rb &rarr; Cs (rubid i cez zapalają się samorzutnie w kontakcie z powietrzem i eksplodują z wodą).</td>
                            <td><strong>Nieco mniej aktywne chemicznie</strong> od sąsiednich litowców, ale ich aktywność również rośnie w dół grupy: Be (najmniej aktywny, amfoteryczny!) &rarr; Mg &rarr; Ca &rarr; Sr &rarr; Ba.</td>
                        </tr>
                        <tr>
                            <td><strong>Reakcja z tlenem O<sub>2</sub> (spalanie na powietrzu)</strong><br><span style="color: #f87171;">(KLUCZOWA RÓŻNICA MATURALNA!)</span></td>
                            <td>Tylko lit tworzy zwykły tlenek! Sód tworzy nadtlenek, a potas, rubid i cez – ponadtlenki:<br>• <strong>Lit:</strong> 4Li + O<sub>2</sub> &rarr; <strong>2Li<sub>2</sub>O</strong> (tlenek litu, jon O<sup>2&minus;</sup>, st. utl. tlenu &minus;II)<br>• <strong>Sód:</strong> 2Na + O<sub>2</sub> &rarr; <strong>Na<sub>2</sub>O<sub>2</sub></strong> (nadtlenek sodu, jon O<sub>2</sub><sup>2&minus;</sup>, st. utl. &minus;I)<br>• <strong>Potas (Rb, Cs):</strong> K + O<sub>2</sub> &rarr; <strong>KO<sub>2</sub></strong> (ponadtlenek potasu, jon O<sub>2</sub><sup>&minus;</sup>, st. utl. &minus;&frac12;)<br><em>(Zwykłe tlenki Na<sub>2</sub>O i K<sub>2</sub>O otrzymuje się przez redukcję nadtlenków metalicznym sodem/potasem bez dostępu tlenu: Na<sub>2</sub>O<sub>2</sub> + 2Na &rarr; 2Na<sub>2</sub>O).</em></td>
                            <td>Wszystkie berylowce (od Be do Sr) podczas spalania w powietrzu tworzą <strong>zwykłe tlenki MO</strong> (jedynie bar w nadmiarze tlenu łatwo przechodzi w nadtlenek BaO<sub>2</sub>):<br>• 2Mg + O<sub>2</sub> &rarr; <strong>2MgO</strong> (oślepiający biały płomień!)<br>• 2Ca + O<sub>2</sub> &rarr; <strong>2CaO</strong><br><em>Uwaga:</em> Podczas spalania magnezu i wapnia w powietrzu (oraz litu wśród litowców!) obok tlenku powstaje również <strong>azotek metalu</strong>:<br><strong>3Mg + N<sub>2</sub> &rarr; Mg<sub>3</sub>N<sub>2</sub></strong>, &nbsp;<strong>3Ca + N<sub>2</sub> &rarr; Ca<sub>3</sub>N<sub>2</sub></strong>, &nbsp;<strong>6Li + N<sub>2</sub> &rarr; 2Li<sub>3</sub>N</strong>!</td>
                        </tr>
                        <tr>
                            <td><strong>Reakcja z wodą H<sub>2</sub>O</strong></td>
                            <td>Wszystkie litowce reagują gwałtownie z zimną wodą (Na i K pływają po powierzchni wody i topią się w srebrzystą kuleczkę wskutek wydzielanego ciepła; w przypadku K, Rb, Cs wydzielający się wodór ulega samozapłonowi!):<br>2Na + 2H<sub>2</sub>O &rarr; 2NaOH + H<sub>2</sub>&uarr;<br>2K + 2H<sub>2</sub>O &rarr; 2KOH + H<sub>2</sub>&uarr;</td>
                            <td>Zróżnicowana reaktywność wobec wody w grupie 2.:<br>• <strong>Beryl (Be):</strong> <strong>NIE REAGUJE</strong> z wodą ani z parą wodną (chroniony pasywną warstewką amfoterycznego BeO!).<br>• <strong>Magnez (Mg):</strong> z zimną wodą praktycznie nie reaguje; reaguje z <strong>wrzącą wodą</strong>: Mg + 2H<sub>2</sub>O<sub>(wrząca)</sub> &rarr; Mg(OH)<sub>2</sub> + H<sub>2</sub>&uarr;, a w <strong>parze wodnej</strong> spala się do tlenku: Mg + H<sub>2</sub>O<sub>(para)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> MgO + H<sub>2</sub>&uarr;!<br>• <strong>Ca, Sr, Ba:</strong> reagują spokojnie z zimną wodą (toną na dno zlewki!):<br>Ca + 2H<sub>2</sub>O &rarr; Ca(OH)<sub>2</sub> + H<sub>2</sub>&uarr; (roztwór mętnieje, bo Ca(OH)<sub>2</sub> jest słabo rozpuszczalny!).</td>
                        </tr>
                        <tr>
                            <td><strong>Charakter tlenków, moc wodorotlenków oraz trendy rozpuszczalności soli</strong></td>
                            <td>• Wszystkie tlenki M<sub>2</sub>O są silnie zasadowe, a wszystkie wodorotlenki MOH są dobrze rozpuszczalne w wodzie i są mocnymi zasadami (moc rośnie w dół grupy: LiOH &lt; NaOH &lt; KOH &lt; RbOH &lt; CsOH).<br>• Prawie wszystkie sole litowców są dobrze rozpuszczalne w wodzie (wyjątki to m.in. trudno rozpuszczalne sole litu: Li<sub>2</sub>CO<sub>3</sub>, Li<sub>3</sub>PO<sub>4</sub>, LiF).</td>
                            <td>• <strong>BeO i Be(OH)<sub>2</sub> są AMFOTERYCZNE!</strong> Pozostałe tlenki (MgO, CaO, SrO, BaO) i wodorotlenki są zasadowe.<br>• Rozpuszczalność wodorotlenków M(OH)<sub>2</sub> w wodzie <strong>ROŚNIE w dół grupy</strong> (Be(OH)<sub>2</sub>&darr; i Mg(OH)<sub>2</sub>&darr; – nierozpuszczalne; Ca(OH)<sub>2</sub> – słabo rozpuszczalny; Ba(OH)<sub>2</sub> – dobrze rozpuszczalny!).<br>• Rozpuszczalność siarczanów(VI) MSO<sub>4</sub> <strong>MALEJE w dół grupy</strong> (BeSO<sub>4</sub> i MgSO<sub>4</sub> – dobrze rozpuszczalne; CaSO<sub>4</sub> – trudno; SrSO<sub>4</sub>&darr; i BaSO<sub>4</sub>&darr; – praktycznie nierozpuszczalne!).<br>• Węglany MCO<sub>3</sub>&darr; i fosforany(V) M<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>&darr; wszystkich berylowców są nierozpuszczalne w wodzie!</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>B. Próba płomieniowa (identyfikacja kationów litowców i berylowców)</h4>
            <p>Lotne sole litowców i berylowców (szczególnie chlorki zwilżone stężonym kwasem HCl) wprowadzone na druciku platynowym lub nichromowym do nieświecącej części płomienia palnika gazowego ulegają wzbudzeniu termicznemu – elektrony walencyjne przechodzą na wyższe poziomy energetyczne, a wracając do stanu podstawowego, emitują kwanty światła widzialnego o charakterystycznej długości fali (barwie płomienia):</p>

            <!-- WYKRES 2: PRÓBA PŁOMIENIOWA (SVG) -->
            <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 12px; padding: 14px; margin: 16px 0; text-align: center;">
                <svg viewBox="0 0 860 95" style="width: 100%; max-width: 860px; height: auto;">
                    <!-- Li+ -->
                    <rect x="8" y="10" width="112" height="72" rx="8" fill="rgba(225, 29, 72, 0.25)" stroke="#f43f5e" stroke-width="2"/>
                    <text x="64" y="34" fill="#fda4af" font-size="13" font-weight="bold" text-anchor="middle">Li<tspan dy="-4" font-size="9">+</tspan><tspan dy="4"> (Lit)</tspan></text>
                    <text x="64" y="54" fill="#fecdd3" font-size="10.5" text-anchor="middle">Karminowo-</text>
                    <text x="64" y="69" fill="#fecdd3" font-size="10.5" text-anchor="middle">czerwona</text>

                    <!-- Na+ -->
                    <rect x="130" y="10" width="112" height="72" rx="8" fill="rgba(234, 179, 8, 0.25)" stroke="#facc15" stroke-width="2"/>
                    <text x="186" y="34" fill="#fde047" font-size="13" font-weight="bold" text-anchor="middle">Na<tspan dy="-4" font-size="9">+</tspan><tspan dy="4"> (Sód)</tspan></text>
                    <text x="186" y="54" fill="#fef08a" font-size="10.5" text-anchor="middle">Intensywnie</text>
                    <text x="186" y="69" fill="#fef08a" font-size="10.5" text-anchor="middle">żółta (złocista)</text>

                    <!-- K+ -->
                    <rect x="252" y="10" width="118" height="72" rx="8" fill="rgba(168, 85, 247, 0.25)" stroke="#c084fc" stroke-width="2"/>
                    <text x="311" y="34" fill="#e9d5ff" font-size="12.5" font-weight="bold" text-anchor="middle">K<tspan dy="-4" font-size="9">+</tspan><tspan dy="4"> (Rb</tspan><tspan dy="-4" font-size="9">+</tspan><tspan dy="4">, Cs</tspan><tspan dy="-4" font-size="9">+</tspan><tspan dy="4">)</tspan></text>
                    <text x="311" y="54" fill="#f3e8ff" font-size="10.5" text-anchor="middle">Fioletowa</text>
                    <text x="311" y="69" fill="#f3e8ff" font-size="10" text-anchor="middle">(różowofioletowa)</text>

                    <!-- Ca2+ -->
                    <rect x="380" y="10" width="112" height="72" rx="8" fill="rgba(234, 88, 12, 0.25)" stroke="#fb923c" stroke-width="2"/>
                    <text x="436" y="34" fill="#fed7aa" font-size="13" font-weight="bold" text-anchor="middle">Ca<tspan dy="-4" font-size="9">2+</tspan><tspan dy="4"> (Wapń)</tspan></text>
                    <text x="436" y="54" fill="#ffedd5" font-size="10.5" text-anchor="middle">Ceglasto-</text>
                    <text x="436" y="69" fill="#ffedd5" font-size="10.5" text-anchor="middle">czerwona</text>

                    <!-- Sr2+ -->
                    <rect x="502" y="10" width="112" height="72" rx="8" fill="rgba(220, 38, 38, 0.25)" stroke="#ef4444" stroke-width="2"/>
                    <text x="558" y="34" fill="#fecaca" font-size="13" font-weight="bold" text-anchor="middle">Sr<tspan dy="-4" font-size="9">2+</tspan><tspan dy="4"> (Stront)</tspan></text>
                    <text x="558" y="54" fill="#fee2e2" font-size="10.5" text-anchor="middle">Karminowo-</text>
                    <text x="558" y="69" fill="#fee2e2" font-size="10.5" text-anchor="middle">czerwona</text>

                    <!-- Ba2+ -->
                    <rect x="624" y="10" width="112" height="72" rx="8" fill="rgba(132, 204, 22, 0.25)" stroke="#a3e635" stroke-width="2"/>
                    <text x="680" y="34" fill="#d9f99d" font-size="13" font-weight="bold" text-anchor="middle">Ba<tspan dy="-4" font-size="9">2+</tspan><tspan dy="4"> (Bar)</tspan></text>
                    <text x="680" y="54" fill="#ecfccb" font-size="10.5" text-anchor="middle">Żółtozielona</text>
                    <text x="680" y="69" fill="#ecfccb" font-size="10" text-anchor="middle">(jabłkowozielona)</text>

                    <!-- Be2+, Mg2+ -->
                    <rect x="746" y="10" width="106" height="72" rx="8" fill="rgba(51, 65, 85, 0.45)" stroke="#94a3b8" stroke-width="1.8"/>
                    <text x="799" y="34" fill="#e2e8f0" font-size="12.5" font-weight="bold" text-anchor="middle">Be<tspan dy="-4" font-size="9">2+</tspan><tspan dy="4">, Mg</tspan><tspan dy="-4" font-size="9">2+</tspan></text>
                    <text x="799" y="54" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">BRAK barwy</text>
                    <text x="799" y="69" fill="#34d399" font-size="9.5" text-anchor="middle">(Cu<tspan dy="-3" font-size="7">2+</tspan><tspan dy="3"> – zielona!)</tspan></text>
                </svg>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">
                    <strong>Rys. 2.</strong> Barwy płomienia palnika w próbie płomieniowej dla kationów litowców i berylowców (uwaga: kationy Be<sup>2+</sup> i Mg<sup>2+</sup> nie barwią płomienia, gdyż emisja ich wzbudzonych elektronów przypada na zakres nadfioletu UV!).
                </div>
            </div>
        </div>

        <!-- SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Pierwiastki Bloku p (Grupy 13–18): Glin, Węglowce, Azotowce, Tlenowce i Fluorowce</h3>

            <h4>4.1. Borowce (grupa 13. – <i>ns</i><sup>2</sup><i>np</i><sup>1</sup>) oraz specyfika Glinu (<sub>13</sub>Al)</h4>
            <p>W 13. grupie tylko bor (B) jest niemetalem (półprzewodnikiem o budowie kowalencyjnej; jego tlenek B<sub>2</sub>O<sub>3</sub> jest kwasowy, a wodorki to polimeryczne borany, np. diboran B<sub>2</sub>H<sub>6</sub>), natomiast pozostałe pierwiastki (Al, Ga, In, Tl) to metale. Charakter tlenków E<sub>2</sub>O<sub>3</sub> w 13. grupie ewoluuje zgodnie z regułą okresowości: B<sub>2</sub>O<sub>3</sub> <em>(kwasowy)</em> &rarr; Al<sub>2</sub>O<sub>3</sub>, Ga<sub>2</sub>O<sub>3</sub>, In<sub>2</sub>O<sub>3</sub> <em>(amfoteryczne)</em> &rarr; Tl<sub>2</sub>O<sub>3</sub> i Tl<sub>2</sub>O <em>(zasadowe; dla talu najtrwalszy jest +I stopień utlenienia – efekt biernej pary elektronowej 6s<sup>2</sup>!)</em>.</p>

            <ul class="note-list">
                <li><strong>Właściwości fizyczne i stopy glinu:</strong> Srebrzystobiały, lekki metal (gęstość <i>d</i> = 2,70 g &middot; cm<sup>&minus;3</sup>), kowalny i ciągliwy, bardzo dobry przewodnik ciepła i prądu elektrycznego. Tworzy lekkie i wytrzymałe stopy (np. <strong>duraluminium: Al + Cu + Mg + Mn</strong>).</li>
                <li><strong>Aluminotermia (reakcja termitowa):</strong> Sproszkowany glin w wysokiej temperaturze wykazuje ogromne powinowactwo do tlenu (&Delta;<sub>tw</sub><i>H</i>&deg;(Al<sub>2</sub>O<sub>3</sub>) = &minus;1676 kJ &middot; mol<sup>&minus;1</sup>), dlatego służy w metalurgii do redukcji tlenków innych metali (Fe<sub>2</sub>O<sub>3</sub>, Fe<sub>3</sub>O<sub>4</sub>, Cr<sub>2</sub>O<sub>3</sub>, Mn<sub>3</sub>O<sub>4</sub>) oraz do spawania szyn kolejowych (mieszanina pyłu Al i tlenku żelaza to <strong>termit</strong>, dający po zapaleniu wstążką magnezową temperaturę ok. 3000&deg;C):
                    <div class="chem-eq">
                        2 Al + Fe<sub>2</sub>O<sub>3</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> Al<sub>2</sub>O<sub>3</sub> + 2 Fe &nbsp;|&nbsp; 8 Al + 3 Fe<sub>3</sub>O<sub>4</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 4 Al<sub>2</sub>O<sub>3</sub> + 9 Fe &nbsp;|&nbsp; 2 Al + Cr<sub>2</sub>O<sub>3</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> Al<sub>2</sub>O<sub>3</sub> + 2 Cr
                    </div>
                </li>
                <li><strong>Reakcje glinu z niemetalami (I<sub>2</sub>, C, S, Cl<sub>2</sub>) i kluczowa pułapka maturalna:</strong>
                    <div class="chem-eq">
                        • Mieszanina pyłu Al i jodu I<sub>2</sub> zapala się po dodaniu 1 kropli wody (<strong>woda pełni rolę katalizatora!</strong>): &nbsp; 2 Al + 3 I<sub>2</sub> <span class="chem-arrow"><span class="cond-top">H<sub>2</sub>O (kat.)</span><span class="arrow-sym">&rarr;</span></span> 2 AlI<sub>3</sub><br>
                        • Z węglem tworzy <strong>węglik glinu (metanorek)</strong>, który w reakcji z wodą wydziela metan: &nbsp; 4 Al + 3 C <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> Al<sub>4</sub>C<sub>3</sub> &nbsp;&rArr;&nbsp; Al<sub>4</sub>C<sub>3</sub> + 12 H<sub>2</sub>O &rarr; 4 Al(OH)<sub>3</sub>&darr; + 3 CH<sub>4</sub>&uarr;
                    </div>
                </li>
            </ul>

            <div class="note-alert danger">
                🔥 <strong>BŁĄD MATURALNY:</strong> Rozpuszczanie metalicznego glinu (Al) w NaOH (2Al + 2NaOH + 6H<sub>2</sub>O &rarr; 2Na[Al(OH)<sub>4</sub>] + 3H<sub>2</sub>&uarr;) <strong>NIE DOWODZI amfoteryczności glinu</strong>! Pierwiastki chemiczne nie są amfoteryczne – jest to reakcja utleniania-redukcji, w której Al jest reduktorem, a woda utleniaczem. Amfoteryczne są wyłącznie <strong>związki glinu: Al<sub>2</sub>O<sub>3</sub> oraz Al(OH)<sub>3</sub></strong>!
            </div>

            <h4>4.2. Węglowce (grupa 14. – <i>ns</i><sup>2</sup><i>np</i><sup>2</sup>): Węgiel (C), Krzem (Si), German (Ge), Cyna (Sn), Ołów (Pb)</h4>
            <ul class="note-list">
                <li><strong>Ewolucja właściwości i efekt biernej pary elektronowej 6s<sup>2</sup>:</strong> Węgiel i krzem to niemetale, german to półmetal (półprzewodnik), a cyna i ołów to metale. Typowe stopnie utlenienia to +II oraz +IV (oraz &minus;IV dla węgla w metanie CH<sub>4</sub> i węglikach). W miarę wzrostu liczby atomowej <i>Z</i> w dół grupy <strong>maleje trwałość stopnia +IV, a rośnie trwałość stopnia +II</strong>: dlatego CO jest silnym reduktorem (łatwo utlenia się do CO<sub>2</sub>), związki Sn<sup>2+</sup> są reduktorami (utleniają się do Sn<sup>IV</sup>), natomiast dla ołowiu najtrwalszy jest stopień +II (Pb<sup>2+</sup>), a tlenek ołowiu(IV) <strong>PbO<sub>2</sub> jest silnym utleniaczem</strong> (w reakcji ze stężonym HCl utlenia go do chloru: PbO<sub>2</sub> + 4HCl &rarr; PbCl<sub>2</sub> + Cl<sub>2</sub>&uarr; + 2H<sub>2</sub>O!).</li>
                <li><strong>Charakter chemiczny tlenków węglowców (bardzo częste pytanie maturalne!):</strong>
                    <br>&ndash; <strong>Stopień +II:</strong> CO <em>(obojętny)</em>, SiO <em>(obojętny)</em>, GeO <em>(obojętny/słabo amfoteryczny)</em>, <strong>SnO <em>(amfoteryczny!)</em>, PbO <em>(amfoteryczny!)</em></strong>.
                    <br>&ndash; <strong>Stopień +IV:</strong> CO<sub>2</sub> <em>(kwasowy)</em>, SiO<sub>2</sub> <em>(słabo kwasowy)</em>, <strong>GeO<sub>2</sub>, SnO<sub>2</sub>, PbO<sub>2</sub> <em>(amfoteryczne!)</em></strong>.
                </li>
                <li><strong>Odmiany alotropowe węgla (hybrydyzacja a właściwości fizyczne):</strong>
                    <ol class="note-list">
                        <li><strong>Diament (hybrydyzacja <i>sp</i><sup>3</sup>):</strong> każdy atom C połączony 4 wiązaniami kowalencyjnymi &sigma; z 4 sąsiadami (tetraedr); najtwardszy minerał, <strong>nie przewodzi prądu elektrycznego</strong> (brak zdelokalizowanych elektronów!), bardzo dobry przewodnik ciepła.</li>
                        <li><strong>Grafit (hybrydyzacja <i>sp</i><sup>2</sup>):</strong> płaskie warstwy sześcioczłonowych pierścieni powiązane ze sobą słabymi siłami van der Waalsa (dlatego jest miękki i łupliwy); czwarty elektron walencyjny każdego atomu C jest zdelokalizowany w obrębie warstwy, dzięki czemu grafit <strong>przewodzi prąd elektryczny</strong> i ma metaliczny połysk.</li>
                        <li><strong>Grafen (<i>sp</i><sup>2</sup>):</strong> pojedyncza warstwa grafitu o grubości 1 atomu (przewodzi prąd i ciepło, niezwykle wytrzymały mechanicznie).</li>
                        <li><strong>Fulereny (np. C<sub>60</sub>, C<sub>70</sub> – <i>sp</i><sup>2</sup>/<i>sp</i><sup>3</sup>):</strong> cząsteczki klatkowe (kształt piłki futbolowej z pięcio- i sześciokątów); w przeciwieństwie do krystalicznego diamentu i grafitu tworzą <strong>kryształy molekularne</strong> i <strong>rozpuszczają się w niepolarnych rozpuszczalnikach organicznych</strong> (np. w benzenie, toluenie!). <em>Uwaga:</em> Sadza, koks i węgiel drzewny NIE są odrębnymi odmianami alotropowymi, lecz drobnokrystalicznymi, zanieczyszczonymi formami grafitu!</li>
                    </ol>
                </li>
                <li><strong>Krzem (Si), tlenek krzemu(IV) (SiO<sub>2</sub>) i produkcja szkła:</strong> Krzem (półprzewodnik o strukturze diamentu <i>sp</i><sup>3</sup>) jest na zimno mało aktywny (reaguje tylko z F<sub>2</sub>), ale roztwarza się w gorących zasadach z wydzieleniem wodoru: Si + 2NaOH + H<sub>2</sub>O &rarr; Na<sub>2</sub>SiO<sub>3</sub> + 2H<sub>2</sub>&uarr;. Tlenek krzemu(IV) (SiO<sub>2</sub> – krzemionka; odmiany w przyrodzie: kwarc, kryształ górski, fioletowy ametyst, żółty cytryn) tworzy kryształ kowalencyjny (atomowy) o bardzo wysokiej temp. topnienia (&sim;1713&deg;C). SiO<sub>2</sub> nie rozpuszcza się w wodzie i nie reaguje z żadnym kwasem oprócz <strong>kwasu fluorowodorowego HF</strong> (trawienie szkła: SiO<sub>2</sub> + 4HF &rarr; SiF<sub>4</sub>&uarr; + 2H<sub>2</sub>O). Podczas wytapiania szkła sodowo-wapniowego (w temp. 1200–1400&deg;C z piasku SiO<sub>2</sub>, sody Na<sub>2</sub>CO<sub>3</sub> i wapienia CaCO<sub>3</sub>) zachodzą reakcje:
                    <div class="chem-eq">
                        Na<sub>2</sub>CO<sub>3</sub> + SiO<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> Na<sub>2</sub>SiO<sub>3</sub> + CO<sub>2</sub>&uarr; &nbsp;&nbsp;oraz&nbsp;&nbsp; CaCO<sub>3</sub> + SiO<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> CaSiO<sub>3</sub> + CO<sub>2</sub>&uarr;
                    </div>
                </li>
            </ul>

            <h4>4.3. Azotowce (grupa 15. – <i>ns</i><sup>2</sup><i>np</i><sup>3</sup>): Azot (N<sub>2</sub>), Fosfor (P<sub>4</sub>), Amoniak i Kwas azotowy(V)</h4>
            <ul class="note-list">
                <li><strong>Budowa i bierność cząsteczki azotu N<sub>2</sub>:</strong> W cząsteczce :N&equiv;N: występuje niezwykle silne wiązanie potrójne (1&sigma; i 2&pi;, energia dysocjacji aż 945 kJ &middot; mol<sup>&minus;1</sup>!). Z tego powodu azot w temperaturze pokojowej jest chemicznie bierny (reaguje tylko z metalicznym litem: 6Li + N<sub>2</sub> &rarr; 2Li<sub>3</sub>N). Z tlenem reaguje dopiero w łuku elektrycznym (wyładowania atmosferyczne) lub powyżej 2000&deg;C w silnikach spalinowych: N<sub>2</sub> + O<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&#8652;</span></span> 2NO (proces endoenergetyczny, &Delta;<i>H</i> &gt; 0!). W laboratorium czysty azot otrzymuje się przez termiczny rozkład azotanu(III) amonu: <strong>NH<sub>4</sub>NO<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> N<sub>2</sub>&uarr; + 2H<sub>2</sub>O</strong> (w praktyce ogrzewa się mieszaninę NH<sub>4</sub>Cl + NaNO<sub>2</sub>).</li>
                <li><strong>Trzy kluczowe reakcje utleniania amoniaku NH<sub>3</sub> (przemysłowa metoda Ostwalda produkcji HNO<sub>3</sub>):</strong>
                    <div class="chem-eq">
                        1) Spalanie NH<sub>3</sub> w czystym tlenie bez katalizatora (zielonkawy płomień): &nbsp; 4 NH<sub>3</sub> + 3 O<sub>2</sub> &rarr; 2 N<sub>2</sub>&uarr; + 6 H<sub>2</sub>O<br>
                        2) Katalityczne utlenianie NH<sub>3</sub> na platynie (Pt/Rh, 800–900&deg;C – I etap metody Ostwalda!): &nbsp; 4 NH<sub>3</sub> + 5 O<sub>2</sub> <span class="chem-arrow"><span class="cond-top">Pt, T</span><span class="arrow-sym">&rarr;</span></span> 4 NO&uarr; + 6 H<sub>2</sub>O<br>
                        3) Dalsze etapy metody Ostwalda: &nbsp; 2 NO + O<sub>2</sub> &rarr; 2 NO<sub>2</sub> &nbsp;&rArr;&nbsp; 4 NO<sub>2</sub> + O<sub>2</sub> + 2 H<sub>2</sub>O &rarr; 4 HNO<sub>3</sub> &nbsp;(lub bez dostępu O<sub>2</sub>: 3 NO<sub>2</sub> + H<sub>2</sub>O <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 2 HNO<sub>3</sub> + NO&uarr;)
                    </div>
                </li>
                <li><strong>Termiczny rozkład soli amonowych (zależność produktów od właściwości utleniających anionu!):</strong>
                    <div class="chem-eq">
                        • Gdy anion <strong>NIE jest utleniaczem</strong> (wydziela się amoniak!): &nbsp; NH<sub>4</sub>Cl <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> NH<sub>3</sub>&uarr; + HCl&uarr; &nbsp;|&nbsp; (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 2 NH<sub>3</sub>&uarr; + CO<sub>2</sub>&uarr; + H<sub>2</sub>O&uarr;<br>
                        • Gdy anion <strong>JEST utleniaczem</strong> (wewnątrzcząsteczkowy redoks – NIE powstaje amoniak!):<br>
                        NH<sub>4</sub>NO<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> <strong>N<sub>2</sub>&uarr;</strong> + 2 H<sub>2</sub>O &nbsp;|&nbsp; NH<sub>4</sub>NO<sub>3</sub> <span class="chem-arrow"><span class="cond-top">T (&sim;200&deg;C)</span><span class="arrow-sym">&rarr;</span></span> <strong>N<sub>2</sub>O&uarr;</strong> + 2 H<sub>2</sub>O &nbsp;|&nbsp; (NH<sub>4</sub>)<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> Cr<sub>2</sub>O<sub>3</sub> + <strong>N<sub>2</sub>&uarr;</strong> + 4 H<sub>2</sub>O&uarr;
                    </div>
                </li>
                <li><strong>Odmiany alotropowe fosforu (P) oraz kwasy fosforu(V):</strong>
                    <br>&ndash; <strong>Fosfor biały (P<sub>4</sub>):</strong> woskowate ciało stałe zbudowane z czteroatomowych, tetraedrycznych cząsteczek P<sub>4</sub> (silnie naprężone kąty 60&deg;!), tworzące kryształy molekularne. Jest silnie trujący, rozpuszcza się w CS<sub>2</sub>, w powietrzu ulega powolnemu utlenianiu połączonemu ze świeceniem w ciemności (chemiluminescencja) i samozapłonowi w ok. 40&deg;C (dlatego <strong>przechowuje się go pod wodą!</strong>).
                    <br>&ndash; <strong>Fosfor czerwony (P<sub><i>n</i></sub>):</strong> odmiana polimeryczna otrzymywana przez ogrzewanie fosforu białego bez dostępu powietrza (&sim;250&deg;C); nietrujący, nie świeci, zapala się dopiero powyżej 260&deg;C (składnik draski na pudełkach zapałek!).
                    <br>&ndash; <strong>Fosfor czarny:</strong> najtrwalsza odmiana o budowie warstwowej, posiada metaliczny połysk i przewodzi prąd elektryczny (półprzewodnik).
                    <br>&ndash; <strong>Reakcje P<sub>4</sub>O<sub>10</sub> z wodą (zależność produktu od stechiometrii wody i temperatury):</strong>
                    <div class="chem-eq">
                        P<sub>4</sub>O<sub>10</sub> + 2 H<sub>2</sub>O<sub>(zimna, niedomiar)</sub> &rarr; 4 HPO<sub>3</sub> <em>(kwas metafosforowy(V))</em> &nbsp;|&nbsp; P<sub>4</sub>O<sub>10</sub> + 4 H<sub>2</sub>O &rarr; 2 H<sub>4</sub>P<sub>2</sub>O<sub>7</sub> <em>(kwas difosforowy(V))</em> &nbsp;|&nbsp; P<sub>4</sub>O<sub>10</sub> + 6 H<sub>2</sub>O<sub>(nadmiar, na gorąco)</sub> &rarr; 4 H<sub>3</sub>PO<sub>4</sub> <em>(kwas ortofosforowy(V))</em>
                    </div>
                </li>
            </ul>

            <h4>4.4. Tlenowce (grupa 16. – <i>ns</i><sup>2</sup><i>np</i><sup>4</sup>): Tlen (O<sub>2</sub>, O<sub>3</sub>), Siarka (S<sub>8</sub>) i jej związki (H<sub>2</sub>S, SO<sub>2</sub>, SO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub>)</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Zagadnienie (Grupa 16.)</th>
                            <th>Właściwości, odmiany alotropowe i kluczowe równania reakcji</th>
                            <th>Obserwacje laboratoryjne i pułapki maturalne</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Tlen (O<sub>2</sub>) i Ozon (O<sub>3</sub>) oraz laboratoryjne otrzymywanie tlenu</strong></td>
                            <td>• Cząsteczka O<sub>2</sub> w stanie podstawowym jest <strong>paramagnetyczna</strong> (biradykał posiadający 2 niesparowane elektrony na orbitalach antywiążących &pi;*). Ozon O<sub>3</sub> (cząsteczka kątowa, <i>sp</i><sup>2</sup>, polarna, niebieskawy gaz o zapachu „powietrza po burzy”) jest znacznie silniejszym utleniaczem niż O<sub>2</sub> (3O<sub>2</sub> <span class="chem-arrow"><span class="cond-top">wyładowania / UV</span><span class="arrow-sym">&#8652;</span></span> 2O<sub>3</sub>, &Delta;<i>H</i> &gt; 0).<br>• <strong>4 główne metody otrzymywania O<sub>2</sub> w laboratorium:</strong><br>1) Katalityczny rozkład wody utlenionej (kat. MnO<sub>2</sub>): 2H<sub>2</sub>O<sub>2</sub> <span class="chem-arrow"><span class="cond-top">MnO<sub>2</sub></span><span class="arrow-sym">&rarr;</span></span> 2H<sub>2</sub>O + O<sub>2</sub>&uarr;<br>2) Termiczny rozkład manganianu(VII) potasu: 2KMnO<sub>4</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> K<sub>2</sub>MnO<sub>4</sub> + MnO<sub>2</sub> + O<sub>2</sub>&uarr;<br>3) Termiczny rozkład chloranu(V) potasu (z MnO<sub>2</sub>): 2KClO<sub>3</sub> <span class="chem-arrow"><span class="cond-top">T, MnO<sub>2</sub></span><span class="arrow-sym">&rarr;</span></span> 2KCl + 3O<sub>2</sub>&uarr;<br>4) Termiczny rozkład azotanu(V) sodu/potasu: 2KNO<sub>3</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 2KNO<sub>2</sub> + O<sub>2</sub>&uarr; (lub 2HgO &rarr; 2Hg + O<sub>2</sub>&uarr;)</td>
                            <td>• <strong>Zbieranie i identyfikacja tlenu:</strong> Ponieważ tlen słabo rozpuszcza się w wodzie, zbiera się go nad wodą (lub w probówce odwróconej dnem do dołu, bo <i>d</i><sub>O<sub>2</sub></sub> &gt; <i>d</i><sub>powietrza</sub>). Po wprowadzeniu do probówki <strong>tlącego się łuczywa rozżarza się ono i zapala jasnym płomieniem!</strong><br>• <em>Uwaga na rozkład KClO<sub>3</sub>:</em> Bez udziału katalizatora MnO<sub>2</sub> ogrzewany KClO<sub>3</sub> ulega dysproporcjonowaniu: 4KClO<sub>3</sub> <span class="chem-arrow"><span class="cond-top">T (400&deg;C)</span><span class="arrow-sym">&rarr;</span></span> 3KClO<sub>4</sub> + KCl!</td>
                        </tr>
                        <tr>
                            <td><strong>Siarka (S<sub>8</sub>) – odmiany alotropowe oraz Siarkowodór (H<sub>2</sub>S)</strong></td>
                            <td>• <strong>Odmiany alotropowe siarki:</strong> 1) <strong>Siarka rombowa (&alpha;-S<sub>8</sub>)</strong> – trwała poniżej 95,6&deg;C, żółte kryształy zbudowane z koronowych pierścieni S<sub>8</sub>; 2) <strong>Siarka jednoskośna (&beta;-S<sub>8</sub>)</strong> – trwała w 95,6–119&deg;C (długie żółte igły); 3) <strong>Siarka plastyczna (S<sub><i>n</i></sub>)</strong> – bezpostaciowa (amorficzna), ciemnobrunatna, gumowata masa otrzymywana przez gwałtowne wlanie wrzącej, stopionej siarki do zimnej wody (łańcuchy polimerowe S<sub><i>n</i></sub>).<br>• <strong>Siarkowodór (H<sub>2</sub>S):</strong> bezbarwny, trujący gaz o zapachu zgniłych jaj, silny reduktor:<br>&ndash; Spalanie przy nadmiarze O<sub>2</sub>: 2H<sub>2</sub>S + 3O<sub>2</sub> &rarr; 2SO<sub>2</sub>&uarr; + 2H<sub>2</sub>O<br>&ndash; Spalanie przy niedomiarze O<sub>2</sub> (lub utlenianie roztworu na powietrzu): 2H<sub>2</sub>S + O<sub>2</sub> &rarr; 2S&darr; + 2H<sub>2</sub>O<br>&ndash; <strong>Reakcja Klausa (synproporcjonowanie!):</strong> 2H<sub>2</sub>S + SO<sub>2</sub> &rarr; 3S&darr; (<span style="color: #facc15;">żółty osad</span>) + 2H<sub>2</sub>O</td>
                            <td>Siarkowodór w laboratorium otrzymuje się przez działanie HCl lub rozc. H<sub>2</sub>SO<sub>4</sub> na siarczek żelaza(II):<br>FeS + 2HCl &rarr; FeCl<sub>2</sub> + H<sub>2</sub>S&uarr;.<br>Jest silnym reduktorem – odbarwia wodę bromową i zakwaszony KMnO<sub>4</sub>, powodując wytrącenie <span style="color: #facc15; font-weight: bold;">żółtego osadu (zmętnienia) koloidalnej siarki S&darr;</span>:<br>H<sub>2</sub>S + Br<sub>2</sub> &rarr; S&darr; + 2HBr!</td>
                        </tr>
                        <tr>
                            <td><strong>Tlenek siarki(IV) (SO<sub>2</sub>) oraz Kwas siarkowy(VI) (H<sub>2</sub>SO<sub>4</sub>)</strong></td>
                            <td>• <strong>Otrzymywanie SO<sub>2</sub> w laboratorium:</strong><br>1) Działanie mocnym kwasem na siarczan(IV) lub wodorosiarczan(IV):<br>Na<sub>2</sub>SO<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> &rarr; Na<sub>2</sub>SO<sub>4</sub> + SO<sub>2</sub>&uarr; + H<sub>2</sub>O<br>2) Działanie stężonym H<sub>2</sub>SO<sub>4</sub> na miedź na gorąco: Cu + 2H<sub>2</sub>SO<sub>4(stęż)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> CuSO<sub>4</sub> + SO<sub>2</sub>&uarr; + 2H<sub>2</sub>O<br>• <strong>Podwójna rola SO<sub>2</sub> w reakcjach redoks (stopień utlenienia +IV jest pośredni!):</strong><br>&ndash; Wobec silnych utleniaczy (KMnO<sub>4</sub>, K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, Cl<sub>2</sub>, Br<sub>2</sub>, H<sub>2</sub>O<sub>2</sub>, HNO<sub>3</sub>) SO<sub>2</sub> (oraz jon SO<sub>3</sub><sup>2&minus;</sup>) jest <strong>REDUKTOREM</strong> i utlenia się do +VI (SO<sub>4</sub><sup>2&minus;</sup>): SO<sub>2</sub> + Br<sub>2</sub> + 2H<sub>2</sub>O &rarr; H<sub>2</sub>SO<sub>4</sub> + 2HBr.<br>&ndash; Wobec silnych reduktorów (H<sub>2</sub>S, Mg, CO) SO<sub>2</sub> jest <strong>UTLENIACZEM</strong> i redukuje się do S<sup>0</sup>.</td>
                            <td>• SO<sub>2</sub> ma właściwości wybielające i dezynfekujące (odbarwia płatki czerwonej róży oraz fioletowy roztwór KMnO<sub>4</sub>!).<br>• Stężony H<sub>2</sub>SO<sub>4</sub> (98%) jest <strong>silnie higroskopijny</strong> (służy w płuczkach do osuszania gazów kwasowych i obojętnych: Cl<sub>2</sub>, HCl, SO<sub>2</sub>, CO<sub>2</sub>, O<sub>2</sub>, H<sub>2</sub>, N<sub>2</sub> – <em>uwaga:</em> <strong>NIE WOLNO osuszać nim gazowego amoniaku NH<sub>3</sub> ani H<sub>2</sub>S i HI</strong>, bo z nimi reaguje!) oraz powoduje <strong>zwęglanie cukrów, bibuły i drewna</strong> (odbiera z nich wodór i tlen w stosunku 2:1 jako H<sub>2</sub>O: C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> <span class="chem-arrow"><span class="cond-top">H<sub>2</sub>SO<sub>4(st)</sub></span><span class="arrow-sym">&rarr;</span></span> 12C + 11H<sub>2</sub>O).</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>4.5. Fluorowce (grupa 17. – <i>ns</i><sup>2</sup><i>np</i><sup>5</sup>): Fluor (F<sub>2</sub>), Chlor (Cl<sub>2</sub>), Brom (Br<sub>2</sub>), Jod (I<sub>2</sub>) – analiza porównawcza</h4>
            <p>Fluorowce (halogeny) tworzą dwuatomowe cząsteczki niepolarne X<sub>2</sub> powiązane pojedynczym wiązaniem kowalencyjnym &sigma;. W miarę wzrostu liczby atomowej <i>Z</i> i masy cząsteczkowej w dół grupy rosną siły dyspersyjne van der Waalsa między cząsteczkami X<sub>2</sub>, dlatego temperatury topnienia i wrzenia rosną w dół grupy, a stan skupienia (w 25&deg;C i 1000 hPa) zmienia się od gazów, przez ciecz, do ciała stałego:</p>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Pierwiastek (X<sub>2</sub>) i potencjał <i>E</i>&deg;(X<sub>2</sub>/2X<sup>&minus;</sup>)</th>
                            <th>Stan skupienia i barwa w 25&deg;C</th>
                            <th>Stopnie utlenienia w związkach</th>
                            <th>Rozpuszczalność w wodzie i w rozpuszczalnikach niepolarnych (CCl<sub>4</sub>, CHCl<sub>3</sub>, benzyna, heksan) – BARWY WARSTW!</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Fluor (F<sub>2</sub>)</strong><br><i>E</i>&deg; = +2,87 V<br><em>(najsilniejszy utleniacz!)</em></td>
                            <td><strong>Gaz</strong> o <span style="color: #fef08a; font-weight: bold;">bladożółtej (żółtozielonkawej)</span> barwie, skrajnie trujący i reaktywny</td>
                            <td><strong>Wyłącznie &minus;I</strong> (oraz 0 w F<sub>2</sub>).<br>(Brak orbitali <i>d</i> na 2. powłoce i najwyższa elektroujemność &chi; = 4,0!).</td>
                            <td><strong>Rozkłada wodę</strong> (nie tworzy „wody fluorowej”, lecz wypiera z wody tlen i ozon!):<br>2F<sub>2</sub> + 2H<sub>2</sub>O &rarr; 4HF + O<sub>2</sub>&uarr; (dlatego F<sub>2</sub> nie można użyć do wypierania Cl<sub>2</sub>/Br<sub>2</sub>/I<sub>2</sub> z wodnych roztworów ich soli!).</td>
                        </tr>
                        <tr>
                            <td><strong>Chlor (Cl<sub>2</sub>)</strong><br><i>E</i>&deg; = +1,36 V</td>
                            <td><strong>Gaz</strong> o <span style="color: #bef264; font-weight: bold;">żółtozielonej</span> barwie i ostrym, duszącym zapachu (2,5 razy cięższy od powietrza)</td>
                            <td>&minus;I, 0, +I, +III, +IV, +V, +VII</td>
                            <td>• W wodzie tworzy <span style="color: #d9f99d;">jasnożółtozieloną</span> <strong>wodę chlorową (Cl<sub>2(aq)</sub>)</strong>, ulegając częściowej odwracalnej dysproporcjonacji:<br>Cl<sub>2</sub> + H<sub>2</sub>O &#8652; HCl + HClO (na świetle: 2HClO <span class="chem-arrow"><span class="cond-top">h&nu;</span><span class="arrow-sym">&rarr;</span></span> 2HCl + O<sub>2</sub>&uarr;; wydzielający się tlen atomowy odpowiada za silne właściwości wybielające i bakteriobójcze wody chlorowej!).<br>• Warstwa organiczna (CCl<sub>4</sub>/benzyna): <strong>bezbarwna lub bladożółta</strong>.</td>
                        </tr>
                        <tr>
                            <td><strong>Brom (Br<sub>2</sub>)</strong><br><i>E</i>&deg; = +1,07 V</td>
                            <td><strong>Ciecz (jedyny ciekły niemetal!)</strong> o <span style="color: #ea580c; font-weight: bold;">ciemnobrunatnej (czerwonobrunatnej)</span> barwie, łatwo parująca</td>
                            <td>&minus;I, 0, +I, +III, +V, +VII</td>
                            <td>• W wodzie tworzy <span style="color: #fb923c; font-weight: bold;">żółtopomarańczową (brunatną)</span> <strong>wodę bromową (Br<sub>2(aq)</sub>)</strong>: Br<sub>2</sub> + H<sub>2</sub>O &#8652; HBr + HBrO.<br>• W rozpuszczalnikach niepolarnych (benzyna, heksan, CHCl<sub>3</sub>, CCl<sub>4</sub>) rozpuszcza się znacznie lepiej niż w wodzie (ekstrakcja!), barwiąc warstwę organiczną na kolor <span style="color: #fb923c; font-weight: bold;">żółtopomarańczowy / pomarańczowobrunatny (brunatny)</span>!</td>
                        </tr>
                        <tr>
                            <td><strong>Jod (I<sub>2</sub>)</strong><br><i>E</i>&deg; = +0,54 V</td>
                            <td><strong>Ciało stałe</strong> (<span style="color: #a855f7; font-weight: bold;">szaroczarne / ciemnofioletowe kryształy</span> o metalicznym połysku; łatwo sublimuje, tworząc <span style="color: #c084fc; font-weight: bold;">fioletowe pary</span>!)</td>
                            <td>&minus;I, 0, +I, +III, +V, +VII</td>
                            <td>• W czystej wodzie rozpuszcza się bardzo słabo (żółtobrunatna woda jodowa), ale doskonale rozpuszcza się w wodnym roztworze KI (<strong>płyn Lugola</strong>) z utworzeniem <span style="color: #b45309; font-weight: bold;">brunatnego</span> jonu trijodkowego: I<sub>2</sub> + I<sup>&minus;</sup> &#8652; I<sub>3</sub><sup>&minus;</sup> (ze skrobią daje <span style="color: #60a5fa; font-weight: bold;">ciemnogranatowe</span> zabarwienie!).<br>• W rozpuszczalnikach niepolarnych (benzyna, CCl<sub>4</sub>, CHCl<sub>3</sub>) barwi warstwę organiczną na intensywny kolor <span style="color: #c084fc; font-weight: bold;">FIOLETOWY (różowofioletowy)</span>!</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <ul class="note-list">
                <li><strong>Szereg aktywności utleniającej fluorowców (wypieranie mniej aktywnego fluorowca z roztworu jego soli):</strong><br>
                W miarę wzrostu liczby atomowej <i>Z</i> w 17. grupie maleje potencjał standardowy redukcji <i>E</i>&deg; i maleje aktywność utleniająca fluorowców: <strong>F<sub>2</sub> &gt; Cl<sub>2</sub> &gt; Br<sub>2</sub> &gt; I<sub>2</sub></strong> (natomiast właściwości redukujące anionów halogenkowych rosną w kierunku odwrotnym: <strong>F<sup>&minus;</sup> &lt; Cl<sup>&minus;</sup> &lt; Br<sup>&minus;</sup> &lt; I<sup>&minus;</sup></strong>!). Dlatego w roztworze wodnym chlor wypiera brom z bromków oraz jod z jodków, a brom wypiera wyłącznie jod z jodków (natomiast jod nie wypiera ani bromu, ani chloru):
                    <div class="chem-eq">
                        • Cl<sub>2</sub> + 2 Br<sup>&minus;</sup> &rarr; 2 Cl<sup>&minus;</sup> + Br<sub>2</sub> &nbsp;<em>(po dodaniu benzyny/CCl<sub>4</sub> i wstrząśnięciu warstwa organiczna barwi się na <span style="color: #fb923c; font-weight: bold;">pomarańczowo/brunatno</span>!)</em><br>
                        • Cl<sub>2</sub> + 2 I<sup>&minus;</sup> &rarr; 2 Cl<sup>&minus;</sup> + I<sub>2</sub> &nbsp;oraz&nbsp; Br<sub>2</sub> + 2 I<sup>&minus;</sup> &rarr; 2 Br<sup>&minus;</sup> + I<sub>2</sub> &nbsp;<em>(warstwa organiczna benzyny/CCl<sub>4</sub> barwi się na <span style="color: #c084fc; font-weight: bold;">fioletowo</span>!)</em><br>
                        • Br<sub>2</sub> + Cl<sup>&minus;</sup> &rarr; <em>brak reakcji!</em> &nbsp;|&nbsp; I<sub>2</sub> + Br<sup>&minus;</sup> &rarr; <em>brak reakcji!</em>
                    </div>
                </li>
                <li><strong>Laboratoryjne metody otrzymywania chloru Cl<sub>2</sub> (utlenianie stężonego kwasu solnego HCl):</strong>
                    <div class="chem-eq">
                        1) Z manganianem(VII) potasu (biegnie już na zimno!): &nbsp; 2 KMnO<sub>4</sub> + 16 HCl<sub>(stęż)</sub> &rarr; 2 KCl + 2 MnCl<sub>2</sub> + 5 Cl<sub>2</sub>&uarr; + 8 H<sub>2</sub>O<br>
                        <em>(Zapis jonowy skrócony: 2 MnO<sub>4</sub><sup>&minus;</sup> + 10 Cl<sup>&minus;</sup> + 16 H<sup>+</sup> &rarr; 2 Mn<sup>2+</sup> + 5 Cl<sub>2</sub>&uarr; + 8 H<sub>2</sub>O)</em><br>
                        2) Z tlenkiem manganu(IV) (wymaga ogrzania!): &nbsp; MnO<sub>2</sub> + 4 HCl<sub>(stęż)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> MnCl<sub>2</sub> + Cl<sub>2</sub>&uarr; + 2 H<sub>2</sub>O<br>
                        3) Z dichromianem(VI) potasu lub chloranem(V) potasu:<br>
                        K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> + 14 HCl<sub>(stęż)</sub> &rarr; 2 KCl + 2 CrCl<sub>3</sub> + 3 Cl<sub>2</sub>&uarr; + 7 H<sub>2</sub>O &nbsp;|&nbsp; KClO<sub>3</sub> + 6 HCl &rarr; KCl + 3 Cl<sub>2</sub>&uarr; + 3 H<sub>2</sub>O
                    </div>
                </li>
                <li><strong>Dysproporcjonowanie chloru (i bromu) w roztworach zasad – wpływ temperatury na produkty!</strong>
                    <div class="chem-eq">
                        • Z <strong>zimną zasadą</strong> (powstaje chlorek i chloran(I) – podchloryn, woda Javela):<br>
                        Cl<sub>2</sub> + 2 NaOH<sub>(zimny)</sub> &rarr; NaCl + <strong>NaClO</strong> + H<sub>2</sub>O &nbsp;(jonowo: Cl<sub>2</sub> + 2 OH<sup>&minus;</sup> &rarr; Cl<sup>&minus;</sup> + ClO<sup>&minus;</sup> + H<sub>2</sub>O)<br>
                        • Z <strong>gorącą zasadą</strong> (powstaje chlorek i chloran(V)!):<br>
                        3 Cl<sub>2</sub> + 6 KOH<sub>(gorący, 70–80&deg;C)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 5 KCl + <strong>KClO<sub>3</sub></strong> + 3 H<sub>2</sub>O &nbsp;(jonowo: 3 Cl<sub>2</sub> + 6 OH<sup>&minus;</sup> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 5 Cl<sup>&minus;</sup> + ClO<sub>3</sub><sup>&minus;</sup> + 3 H<sub>2</sub>O)
                    </div>
                </li>
                <li><strong>Anomalie w grupie 17. – dlaczego HF ma najwyższą temperaturę wrzenia (+19,5&deg;C) i jest słabym kwasem?</strong><br>
                Pomiędzy silnie spolaryzowanymi cząsteczkami fluorowodoru HF tworzą się bardzo mocne międzycząsteczkowe <strong>wiązania wodorowe</strong> (asocjaty (HF)<sub><i>n</i></sub> o strukturze zygzakowatej), których zerwanie wymaga dużej energii – stąd skokowo wysoka temperatura wrzenia HF (+19,5&deg;C) w porównaniu z HCl (&minus;85&deg;C), HBr (&minus;67&deg;C) i HI (&minus;35&deg;C). Z kolei bardzo mały promień atomu fluoru sprawia, że wiązanie kowalencyjne H&ndash;F jest najkrótsze i najsilniejsze w całej grupie, przez co w wodzie cząsteczki HF trudno odszczepiają proton H<sup>+</sup> (HF jest jedynym słabym kwasem halogenowodorowym!).</li>
            </ul>
        </div>

        <!-- SEKCJA 5 -->
        <div class="note-section">
            <h3>5. Pierwiastki Przejściowe Bloku d: Chrom (<sub>24</sub>Cr), Mangan (<sub>25</sub>Mn), Żelazo (<sub>26</sub>Fe), Miedź (<sub>29</sub>Cu) i Srebro (<sub>47</sub>Ag)</h3>
            <p>Pierwiastki bloku <i>d</i> (metale przejściowe, grupy 3–12) rozbudowują podpowłokę wewnętrzną (<i>n</i>&minus;1)<i>d</i> przy obsadzonej podpowłoce <i>ns</i>. Elektrony walencyjne metali bloku <i>d</i> znajdują się <strong>zarówno na podpowłoce <i>ns</i>, jak i na podpowłoce (<i>n</i>&minus;1)<i>d</i></strong>.</p>

            <div class="note-alert danger">
                🔥 <strong>TRZY ŻELAZNE REGUŁY KONFIGURACJI ELEKTRONOWEJ METALI BLOKU d NA MATURZE:</strong>
                <ol class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li><strong>Promocja elektronowa dla Chromu (<sub>24</sub>Cr) oraz Miedzi (<sub>29</sub>Cu) (oraz Ag i Au):</strong> Ze względu na zwiększoną trwałość energetyczną podpowłoki 3<i>d</i> zapełnionej dokładnie w połowie (3<i>d</i><sup>5</sup>) lub całkowicie (3<i>d</i><sup>10</sup>), jeden elektron z podpowłoki 4<i>s</i> przeskakuje na podpowłokę 3<i>d</i>:<br>
                    • <strong><sub>24</sub>Cr: [Ar] 4s<sup>1</sup> 3d<sup>5</sup></strong> (lub [Ar] 3d<sup>5</sup> 4s<sup>1</sup> – atom chromu ma w stanie podstawowym aż <strong>6 niesparowanych elektronów</strong>: 1 na 4s i 5 na 3d!)<br>
                    • <strong><sub>29</sub>Cu: [Ar] 4s<sup>1</sup> 3d<sup>10</sup></strong> (lub [Ar] 3d<sup>10</sup> 4s<sup>1</sup> – atom miedzi ma w stanie podstawowym tylko <strong>1 niesparowany elektron</strong> na podpowłoce 4s!).</li>
                    <li><strong>Tworzenie kationów metali bloku <i>d</i>:</strong> Podczas jonizacji atomu metalu bloku <i>d</i> elektrony odrywane są <strong>ZAWSZE NAJPIERW z zewnętrznej podpowłoki 4<i>s</i></strong>, a dopiero potem z podpowłoki 3<i>d</i>! Przykładowo dla żelaza (<sub>26</sub>Fe: [Ar] 4s<sup>2</sup> 3d<sup>6</sup>): kation <strong>Fe<sup>2+</sup> ma konfigurację [Ar] 3d<sup>6</sup></strong> (4 niesparowane elektrony), a kation <strong>Fe<sup>3+</sup> ma niezwykle trwałą konfigurację półzapełnioną [Ar] 3d<sup>5</sup></strong> (5 niesparowanych elektronów – dlatego związki Fe<sup>2+</sup> tak łatwo utleniają się na powietrzu do trwalszych związków Fe<sup>3+</sup>!).</li>
                    <li><strong>Maksymalny stopień utlenienia i barwność:</strong> Dla pierwiastków grup 3–7 maksymalny stopień utlenienia równy jest sumie elektronów <i>ns</i> i (<i>n</i>&minus;1)<i>d</i> (czyli numerowi grupy: dla Cr +VI, dla Mn +VII). Ponadto metale bloku <i>d</i> tworzą <strong>intensywnie zabarwione</strong> związki (absorpcja światła przez niesparowane elektrony <i>d</i>; kationy o konfiguracji <i>d</i><sup>0</sup> lub całkowicie zapełnionej <i>d</i><sup>10</sup>, np. Zn<sup>2+</sup>, Ag<sup>+</sup>, Cu<sup>+</sup>, Sc<sup>3+</sup>, są w roztworach wodnych <strong>bezbarwne</strong>!).</li>
                </ol>
            </div>

            <h4>5.1. Chrom (<sub>24</sub>Cr: [Ar] 4s<sup>1</sup> 3d<sup>5</sup>) – stopnie utlenienia +II, +III, +VI oraz równowaga CrO<sub>4</sub><sup>2&minus;</sup> / Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup></h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Stopień utlenienia Cr</th>
                            <th>Tlenki, wodorotlenki, jony i ich BARWY</th>
                            <th>Charakter chemiczny i kluczowe równania reakcji (kwasowo-zasadowe oraz redoks)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Chrom(II) (+II)</strong><br>Cr<sup>2+</sup>: [Ar] 3d<sup>4</sup></td>
                            <td>• <strong>CrO</strong> – <span style="color: #94a3b8;">czarny proszek</span><br>• <strong>Cr(OH)<sub>2</sub>&darr;</strong> – <span style="color: #eab308;">żółty/brunatny osad</span><br>• <strong>Cr<sup>2+</sup><sub>(aq)</sub></strong> – <span style="color: #38bdf8; font-weight: bold;">niebieski roztwór</span></td>
                            <td>• Charakter: <strong>ZASADOWY</strong> (CrO + 2HCl &rarr; CrCl<sub>2</sub> + H<sub>2</sub>O).<br>• Metaliczny chrom roztwarza się w HCl lub rozc. H<sub>2</sub>SO<sub>4</sub>:<br>&ndash; bez dostępu powietrza (tlenu) daje <span style="color: #38bdf8;">niebieskie jony Cr<sup>2+</sup></span>: Cr + 2HCl &rarr; CrCl<sub>2</sub> + H<sub>2</sub>&uarr;<br>&ndash; w obecności tlenu z powietrza jony Cr<sup>2+</sup> są bardzo silnymi reduktorami i natychmiast utleniają się do <span style="color: #4ade80;">zielonych jonów Cr<sup>3+</sup></span>: 4Cr<sup>2+</sup> + O<sub>2</sub> + 4H<sup>+</sup> &rarr; 4Cr<sup>3+</sup> + 2H<sub>2</sub>O!</td>
                        </tr>
                        <tr>
                            <td><strong>Chrom(III) (+III)</strong><br>Cr<sup>3+</sup>: [Ar] 3d<sup>3</sup><br><em>(najtrwalszy stopień w środowisku kwasowym!)</em></td>
                            <td>• <strong>Cr<sub>2</sub>O<sub>3</sub></strong> – <span style="color: #22c55e;">ciemnozielony proszek</span><br>• <strong>Cr(OH)<sub>3</sub>&darr;</strong> – <span style="color: #6ee7b7; font-weight: bold;">szarozielony osad</span><br>• <strong>Cr<sup>3+</sup><sub>(aq)</sub></strong> – <span style="color: #4ade80; font-weight: bold;">zielony</span> lub <span style="color: #c084fc;">fioletowy</span> roztwór<br>• <strong>[Cr(OH)<sub>6</sub>]<sup>3&minus;</sup></strong> – <span style="color: #10b981; font-weight: bold;">szmaragdowozielony (ciemnozielony) roztwór</span></td>
                            <td>• Charakter: <strong>AMFOTERYCZNY!</strong><br>&ndash; Z kwasem: Cr(OH)<sub>3</sub> + 3H<sup>+</sup> &rarr; Cr<sup>3+</sup> + 3H<sub>2</sub>O &nbsp;|&nbsp; Cr<sub>2</sub>O<sub>3</sub> + 6H<sup>+</sup> &rarr; 2Cr<sup>3+</sup> + 3H<sub>2</sub>O<br>&ndash; Z zasadą: Cr(OH)<sub>3</sub> + 3OH<sup>&minus;</sup> &rarr; [Cr(OH)<sub>6</sub>]<sup>3&minus;</sup> &nbsp;|&nbsp; Cr<sub>2</sub>O<sub>3</sub> + 6OH<sup>&minus;</sup> + 3H<sub>2</sub>O &rarr; 2[Cr(OH)<sub>6</sub>]<sup>3&minus;</sup><br>• <strong>Utlenianie Cr(III) do Cr(VI) zachodzi łatwo w środowisku ZASADOWYM</strong> (pod wpływem H<sub>2</sub>O<sub>2</sub>, Cl<sub>2</sub> lub Br<sub>2</sub> szmaragdowozielony roztwór zmienia barwę na <span style="color: #facc15; font-weight: bold;">żółtą</span>!):<br><strong>2 [Cr(OH)<sub>6</sub>]<sup>3&minus;</sup> + 3 H<sub>2</sub>O<sub>2</sub> &rarr; 2 CrO<sub>4</sub><sup>2&minus;</sup> (<span style="color: #facc15;">żółty</span>) + 2 OH<sup>&minus;</sup> + 8 H<sub>2</sub>O</strong><br>(lub z wodą bromową: 2[Cr(OH)<sub>6</sub>]<sup>3&minus;</sup> + 3Br<sub>2</sub> + 4OH<sup>&minus;</sup> &rarr; 2CrO<sub>4</sub><sup>2&minus;</sup> + 6Br<sup>&minus;</sup> + 8H<sub>2</sub>O).</td>
                        </tr>
                        <tr>
                            <td><strong>Chrom(VI) (+VI)</strong><br>Cr(VI): [Ar] 3d<sup>0</sup><br><em>(silny utleniacz w środowisku kwasowym!)</em></td>
                            <td>• <strong>CrO<sub>3</sub></strong> – <span style="color: #ef4444;">ciemnoczerwone kryształy</span><br>• <strong>CrO<sub>4</sub><sup>2&minus;</sup> (chromian(VI))</strong> – <span style="color: #facc15; font-weight: bold;">ŻÓŁTY roztwór</span> (trwały w środowisku <strong>zasadowym, pH &gt; 7</strong>!)<br>• <strong>Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> (dichromian(VI))</strong> – <span style="color: #fb923c; font-weight: bold;">POMARAŃCZOWY roztwór</span> (trwały w środowisku <strong>kwasowym, pH &lt; 7</strong>!)<br>• Osady chromianów: BaCrO<sub>4</sub>&darr; (<span style="color: #facc15;">żółty</span>), PbCrO<sub>4</sub>&darr; (<span style="color: #facc15;">żółty</span>), Ag<sub>2</sub>CrO<sub>4</sub>&darr; (<span style="color: #f87171;">ceglastoczerwony</span>).</td>
                            <td>• Charakter CrO<sub>3</sub>: <strong>KWASOWY</strong> (CrO<sub>3</sub> + 2OH<sup>&minus;</sup> &rarr; CrO<sub>4</sub><sup>2&minus;</sup> + H<sub>2</sub>O).<br>• <span style="color: #38bdf8; font-weight: bold;">Równowaga pH-zależna (TO NIE JEST REAKCJA REDOKS – chrom ma stale +VI!):</span><br>&ndash; Zakwaszanie żółtego chromianu(VI) (zmiana barwy z żółtej na pomarańczową):<br><strong>2 CrO<sub>4</sub><sup>2&minus;</sup> (<span style="color: #facc15;">żółty</span>) + 2 H<sup>+</sup> &#8652; Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> (<span style="color: #fb923c;">pomarańczowy</span>) + H<sub>2</sub>O</strong><br>&ndash; Alkalizowanie pomarańczowego dichromianu(VI) zasadą (zmiana z pomarańczowej na żółtą):<br><strong>Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> (<span style="color: #fb923c;">pomarańczowy</span>) + 2 OH<sup>&minus;</sup> &#8652; 2 CrO<sub>4</sub><sup>2&minus;</sup> (<span style="color: #facc15;">żółty</span>) + H<sub>2</sub>O</strong><br>• <strong>Redukcja dichromianu(VI) Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> w środowisku KWASOWYM (H<sub>2</sub>SO<sub>4</sub>):</strong><br>Pod wpływem reduktorów (NO<sub>2</sub><sup>&minus;</sup>, SO<sub>3</sub><sup>2&minus;</sup>, Fe<sup>2+</sup>, I<sup>&minus;</sup>, H<sub>2</sub>S, HCl<sub>(stęż)</sub>, alkoholi I&deg; i II&deg;) pomarańczowe jony Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> redukują się zawsze do <span style="color: #4ade80; font-weight: bold;">zielonych jonów Cr<sup>3+</sup></span>:<br>Równanie połówkowe redukcji: <strong>Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + 14H<sup>+</sup> + 6e<sup>&minus;</sup> &rarr; 2Cr<sup>3+</sup> + 7H<sub>2</sub>O</strong><br>&ndash; Z azotanem(III): Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + 3NO<sub>2</sub><sup>&minus;</sup> + 8H<sup>+</sup> &rarr; 2Cr<sup>3+</sup> + 3NO<sub>3</sub><sup>&minus;</sup> + 4H<sub>2</sub>O<br>&ndash; Z siarczanem(IV): Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + 3SO<sub>3</sub><sup>2&minus;</sup> + 8H<sup>+</sup> &rarr; 2Cr<sup>3+</sup> + 3SO<sub>4</sub><sup>2&minus;</sup> + 4H<sub>2</sub>O<br>&ndash; Z jonami żelaza(II): Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + 6Fe<sup>2+</sup> + 14H<sup>+</sup> &rarr; 2Cr<sup>3+</sup> + 6Fe<sup>3+</sup> + 7H<sub>2</sub>O<br>&ndash; Z siarkowodorem: Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + 3H<sub>2</sub>S + 8H<sup>+</sup> &rarr; 2Cr<sup>3+</sup> + 3S&darr; + 7H<sub>2</sub>O</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>5.2. Mangan (<sub>25</sub>Mn: [Ar] 4s<sup>2</sup> 3d<sup>5</sup>) – wpływ pH na redukcję jonów MnO<sub>4</sub><sup>&minus;</sup> (manganometria)</h4>
            <p>Mangan tworzy związki na stopniach utlenienia od +II do +VII. Metaliczny mangan jest aktywny (<i>E</i>&deg;<sub>Mn<sup>2+</sup>/Mn</sub> = &minus;1,18 V) i roztwarza się w kwasach nieutleniających (HCl, H<sub>2</sub>SO<sub>4(rozc)</sub>) z wydzieleniem wodoru i utworzeniem <span style="color: #fda4af;">bladoróżowych</span> (w rozcieńczeniu niemal bezbarwnych) soli manganu(II): Mn + 2HCl &rarr; MnCl<sub>2</sub> + H<sub>2</sub>&uarr;.</p>

            <!-- WYKRES 3: REDUKCJA MnO4- W 3 ŚRODOWISKACH ORAZ MAPA BARW CHROMU (SVG) -->
            <div style="background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(148, 163, 184, 0.25); border-radius: 12px; padding: 14px; margin: 16px 0; text-align: center;">
                <svg viewBox="0 0 860 255" style="width: 100%; max-width: 860px; height: auto;">
                    <!-- PANEL A: REDUKCJA MnO4- -->
                    <rect x="8" y="8" width="510" height="238" rx="8" fill="rgba(30, 41, 59, 0.85)" stroke="#475569" stroke-width="1.5"/>
                    <text x="263" y="28" fill="#f8fafc" font-size="12.5" font-weight="bold" text-anchor="middle">a) Redukcja jonów MnO<tspan dy="3" font-size="8">4</tspan><tspan dy="-6" font-size="8">&minus;</tspan><tspan dy="3"> (+VII) w 3 środowiskach (pewniak maturalny!)</tspan></text>

                    <!-- Kafelek MnO4- -->
                    <rect x="20" y="92" width="115" height="72" rx="8" fill="#581c87" stroke="#c084fc" stroke-width="2"/>
                    <text x="77" y="118" fill="#f3e8ff" font-size="12.5" font-weight="bold" text-anchor="middle">MnO<tspan dy="3" font-size="8">4</tspan><tspan dy="-6" font-size="8">&minus;</tspan><tspan dy="3"> (+VII)</tspan></text>
                    <text x="77" y="136" fill="#e9d5ff" font-size="10.5" font-weight="bold" text-anchor="middle">FIOLETOWY</text>
                    <text x="77" y="152" fill="#d8b4fe" font-size="9.5" text-anchor="middle">roztwór KMnO<tspan dy="3" font-size="7">4</tspan></text>

                    <!-- Strzałki do 3 środowisk -->
                    <line x1="135" y1="108" x2="205" y2="66" stroke="#f87171" stroke-width="2" marker-end="url(#arr-red-10)"/>
                    <text x="165" y="75" fill="#fca5a5" font-size="9.5" font-weight="bold" text-anchor="middle">+ H<tspan dy="-3" font-size="7">+</tspan><tspan dy="3"> (5e</tspan><tspan dy="-3" font-size="7">&minus;</tspan><tspan dy="3">)</tspan></text>

                    <line x1="135" y1="128" x2="205" y2="128" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr-blue-10)"/>
                    <text x="170" y="121" fill="#cbd5e1" font-size="9.5" font-weight="bold" text-anchor="middle">H<tspan dy="3" font-size="7">2</tspan><tspan dy="-3">O (3e</tspan><tspan dy="-3" font-size="7">&minus;</tspan><tspan dy="3">)</tspan></text>

                    <line x1="135" y1="148" x2="205" y2="192" stroke="#34d399" stroke-width="2" marker-end="url(#arr-blue-10)"/>
                    <text x="165" y="186" fill="#6ee7b7" font-size="9.5" font-weight="bold" text-anchor="middle">+ OH<tspan dy="-3" font-size="7">&minus;</tspan><tspan dy="3"> (1e</tspan><tspan dy="-3" font-size="7">&minus;</tspan><tspan dy="3">)</tspan></text>

                    <!-- 1. Środowisko kwasowe -->
                    <rect x="210" y="40" width="296" height="50" rx="6" fill="rgba(244, 63, 94, 0.16)" stroke="#fb7185" stroke-width="1.5"/>
                    <text x="358" y="58" fill="#fda4af" font-size="11" font-weight="bold" text-anchor="middle">1. Środ. KWASOWE (H<tspan dy="3" font-size="8">2</tspan><tspan dy="-3">SO</tspan><tspan dy="3" font-size="8">4</tspan><tspan dy="-3">): Mn</tspan><tspan dy="-4" font-size="8">2+</tspan><tspan dy="4"> (+II)</tspan></text>
                    <text x="358" y="76" fill="#f8fafc" font-size="9.5" text-anchor="middle">Odbarwienie (bladoróżowy r-r): MnO<tspan dy="3" font-size="7">4</tspan><tspan dy="-5" font-size="7">&minus;</tspan><tspan dy="2"> + 8H</tspan><tspan dy="-3" font-size="7">+</tspan><tspan dy="3"> + 5e</tspan><tspan dy="-3" font-size="7">&minus;</tspan><tspan dy="3"> &rarr; Mn</tspan><tspan dy="-3" font-size="7">2+</tspan><tspan dy="3"> + 4H</tspan><tspan dy="3" font-size="7">2</tspan><tspan dy="-3">O</tspan></text>

                    <!-- 2. Środowisko obojętne -->
                    <rect x="210" y="102" width="296" height="50" rx="6" fill="rgba(180, 83, 9, 0.25)" stroke="#f59e0b" stroke-width="1.5"/>
                    <text x="358" y="120" fill="#fcd34d" font-size="11" font-weight="bold" text-anchor="middle">2. Środ. OBOJĘTNE (lub słabo zas.): MnO<tspan dy="3" font-size="8">2</tspan><tspan dy="-3">&darr; (+IV)</tspan></text>
                    <text x="358" y="138" fill="#f8fafc" font-size="9.5" text-anchor="middle">Brunatny osad: MnO<tspan dy="3" font-size="7">4</tspan><tspan dy="-5" font-size="7">&minus;</tspan><tspan dy="2"> + 2H</tspan><tspan dy="3" font-size="7">2</tspan><tspan dy="-3">O + 3e</tspan><tspan dy="-3" font-size="7">&minus;</tspan><tspan dy="3"> &rarr; MnO</tspan><tspan dy="3" font-size="7">2</tspan><tspan dy="-3">&darr; + 4OH</tspan><tspan dy="-3" font-size="7">&minus;</tspan></text>

                    <!-- 3. Środowisko silnie zasadowe -->
                    <rect x="210" y="164" width="296" height="68" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#34d399" stroke-width="1.5"/>
                    <text x="358" y="182" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">3. Środ. SILNIE ZASADOWE (stęż. NaOH): MnO<tspan dy="3" font-size="8">4</tspan><tspan dy="-6" font-size="8">2&minus;</tspan><tspan dy="3"> (+VI)</tspan></text>
                    <text x="358" y="200" fill="#f8fafc" font-size="9.5" text-anchor="middle">Zielony roztwór: MnO<tspan dy="3" font-size="7">4</tspan><tspan dy="-5" font-size="7">&minus;</tspan><tspan dy="2"> + 1e</tspan><tspan dy="-3" font-size="7">&minus;</tspan><tspan dy="3"> &rarr; MnO</tspan><tspan dy="3" font-size="7">4</tspan><tspan dy="-5" font-size="7">2&minus;</tspan><tspan dy="2"> (manganian(VI))</tspan></text>
                    <text x="358" y="218" fill="#cbd5e1" font-size="8.5" text-anchor="middle">(w kwasie MnO<tspan dy="3" font-size="6">4</tspan><tspan dy="-5" font-size="6">2&minus;</tspan><tspan dy="2"> dysproporcjonuje: 3MnO</tspan><tspan dy="3" font-size="6">4</tspan><tspan dy="-5" font-size="6">2&minus;</tspan><tspan dy="2"> + 4H</tspan><tspan dy="-3" font-size="6">+</tspan><tspan dy="3"> &rarr; 2MnO</tspan><tspan dy="3" font-size="6">4</tspan><tspan dy="-5" font-size="6">&minus;</tspan><tspan dy="2"> + MnO</tspan><tspan dy="3" font-size="6">2</tspan><tspan dy="-3">&darr; + 2H</tspan><tspan dy="3" font-size="6">2</tspan><tspan dy="-3">O)</tspan></text>

                    <!-- PANEL B: MAPA BARW I PRZEMIAN CHROMU -->
                    <rect x="528" y="8" width="324" height="238" rx="8" fill="rgba(30, 41, 59, 0.85)" stroke="#475569" stroke-width="1.5"/>
                    <text x="690" y="28" fill="#f8fafc" font-size="12.5" font-weight="bold" text-anchor="middle">b) Mapa barw i przemian Chromu (Cr)</text>

                    <!-- CrO4^2- -->
                    <rect x="542" y="42" width="132" height="50" rx="6" fill="rgba(234, 179, 8, 0.25)" stroke="#facc15" stroke-width="1.8"/>
                    <text x="608" y="62" fill="#fde047" font-size="11.5" font-weight="bold" text-anchor="middle">CrO<tspan dy="3" font-size="8">4</tspan><tspan dy="-6" font-size="8">2&minus;</tspan><tspan dy="3"> (+VI)</tspan></text>
                    <text x="608" y="80" fill="#fef08a" font-size="10" font-weight="bold" text-anchor="middle">ŻÓŁTY (pH &gt; 7)</text>

                    <!-- Równowaga -->
                    <text x="690" y="72" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">&#8652;</text>

                    <!-- Cr2O7^2- -->
                    <rect x="706" y="42" width="132" height="50" rx="6" fill="rgba(249, 115, 22, 0.25)" stroke="#fb923c" stroke-width="1.8"/>
                    <text x="772" y="62" fill="#fdba74" font-size="11.5" font-weight="bold" text-anchor="middle">Cr<tspan dy="3" font-size="8">2</tspan><tspan dy="-3">O</tspan><tspan dy="3" font-size="8">7</tspan><tspan dy="-6" font-size="8">2&minus;</tspan><tspan dy="3"> (+VI)</tspan></text>
                    <text x="772" y="80" fill="#fed7aa" font-size="9.5" font-weight="bold" text-anchor="middle">POMARAŃCZ. (pH &lt; 7)</text>

                    <!-- Strzałki pionowe między Cr(III) a Cr(VI) -->
                    <line x1="608" y1="132" x2="608" y2="96" stroke="#34d399" stroke-width="2" marker-end="url(#arr-blue-10)"/>
                    <text x="638" y="118" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">+H<tspan dy="3" font-size="7">2</tspan><tspan dy="-3">O</tspan><tspan dy="3" font-size="7">2</tspan><tspan dy="-3">/OH</tspan><tspan dy="-3" font-size="7">&minus;</tspan></text>

                    <line x1="772" y1="92" x2="772" y2="128" stroke="#f87171" stroke-width="2" marker-end="url(#arr-red-10)"/>
                    <text x="802" y="116" fill="#fca5a5" font-size="9" font-weight="bold" text-anchor="middle">+reduktor/H<tspan dy="-3" font-size="7">+</tspan></text>

                    <!-- [Cr(OH)6]^3- -->
                    <rect x="542" y="134" width="132" height="50" rx="6" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" stroke-width="1.8"/>
                    <text x="608" y="154" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">[Cr(OH)<tspan dy="3" font-size="8">6</tspan><tspan dy="-3">]</tspan><tspan dy="-5" font-size="8">3&minus;</tspan><tspan dy="5"> (+III)</tspan></text>
                    <text x="608" y="172" fill="#a7f3d0" font-size="9" font-weight="bold" text-anchor="middle">SZMARAGDOWOZIEL.</text>

                    <!-- Cr^3+(aq) -->
                    <rect x="706" y="134" width="132" height="50" rx="6" fill="rgba(74, 222, 128, 0.22)" stroke="#4ade80" stroke-width="1.8"/>
                    <text x="772" y="154" fill="#bbf7d0" font-size="11" font-weight="bold" text-anchor="middle">Cr<tspan dy="-4" font-size="8">3+</tspan><tspan dy="4">(aq) (+III)</tspan></text>
                    <text x="772" y="172" fill="#dcfce7" font-size="9" font-weight="bold" text-anchor="middle">ZIELONY / FIOLETOWY</text>

                    <!-- Cr(OH)3 osad -->
                    <rect x="600" y="196" width="180" height="42" rx="6" fill="rgba(77, 124, 15, 0.35)" stroke="#84cc16" stroke-width="1.6"/>
                    <text x="690" y="214" fill="#d9f99d" font-size="10.5" font-weight="bold" text-anchor="middle">Cr(OH)<tspan dy="3" font-size="7">3</tspan><tspan dy="-3">&darr; (szarozielony osad)</tspan></text>
                    <text x="690" y="230" fill="#cbd5e1" font-size="9" text-anchor="middle">+NaOH &#8598; &nbsp;|&nbsp; &#8599; +HCl</text>
                </svg>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">
                    <strong>Rys. 3.</strong> a) Schemat redukcji fioletowych jonów manganianowych(VII) w środowisku kwasowym, obojętnym i zasadowym; b) cykl przemian kwasowo-zasadowych i redoks związków chromu(III) i chromu(VI).
                </div>
            </div>

            <ul class="note-list">
                <li><strong>Wzorcowe równania reakcji KMnO<sub>4</sub> z siarczanem(IV) sodu (Na<sub>2</sub>SO<sub>3</sub>) lub azotanem(III) potasu (KNO<sub>2</sub>) w 3 środowiskach:</strong>
                    <div class="chem-eq">
                        1) <strong>W środowisku KWASOWYM</strong> (zakwaszonym H<sub>2</sub>SO<sub>4</sub> – <span style="color: #c084fc;">fioletowy roztwór</span> <strong>odbarwia się</strong>!):<br>
                        <strong>2 MnO<sub>4</sub><sup>&minus;</sup> + 5 SO<sub>3</sub><sup>2&minus;</sup> + 6 H<sup>+</sup> &rarr; 2 Mn<sup>2+</sup> + 5 SO<sub>4</sub><sup>2&minus;</sup> + 3 H<sub>2</sub>O</strong><br>
                        <em>(Cząsteczkowo: 2 KMnO<sub>4</sub> + 5 Na<sub>2</sub>SO<sub>3</sub> + 3 H<sub>2</sub>SO<sub>4</sub> &rarr; 2 MnSO<sub>4</sub> + 5 Na<sub>2</sub>SO<sub>4</sub> + K<sub>2</sub>SO<sub>4</sub> + 3 H<sub>2</sub>O)</em><br><br>
                        2) <strong>W środowisku OBOJĘTNYM</strong> (woda – <span style="color: #c084fc;">fioletowy roztwór</span> odbarwia się i wytrąca się <span style="color: #a16207; font-weight: bold;">brunatny osad MnO<sub>2</sub>&darr;</span>!):<br>
                        <strong>2 MnO<sub>4</sub><sup>&minus;</sup> + 3 SO<sub>3</sub><sup>2&minus;</sup> + H<sub>2</sub>O &rarr; 2 MnO<sub>2</sub>&darr; + 3 SO<sub>4</sub><sup>2&minus;</sup> + 2 OH<sup>&minus;</sup></strong><br>
                        <em>(Uwaga na bilans: ponieważ w wodzie ubywa tlenu z MnO<sub>4</sub><sup>&minus;</sup>, po prawej stronie powstają jony OH<sup>&minus;</sup>, więc odczyn roztworu po reakcji staje się zasadowy!)</em><br><br>
                        3) <strong>W środowisku SILNIE ZASADOWYM</strong> (stężony KOH/NaOH – <span style="color: #c084fc;">fioletowy roztwór</span> zmienia barwę na <span style="color: #22c55e; font-weight: bold;">zieloną</span>!):<br>
                        <strong>2 MnO<sub>4</sub><sup>&minus;</sup> + SO<sub>3</sub><sup>2&minus;</sup> + 2 OH<sup>&minus;</sup> &rarr; 2 MnO<sub>4</sub><sup>2&minus;</sup> (<span style="color: #22c55e;">zielony</span>) + SO<sub>4</sub><sup>2&minus;</sup> + H<sub>2</sub>O</strong>
                    </div>
                </li>
            </ul>

            <h4>5.3. Żelazo (<sub>26</sub>Fe: [Ar] 4s<sup>2</sup> 3d<sup>6</sup>), Miedź (<sub>29</sub>Cu: [Ar] 4s<sup>1</sup> 3d<sup>10</sup>) oraz Srebro (<sub>47</sub>Ag: [Kr] 5s<sup>1</sup> 4d<sup>10</sup>)</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Metal i konfiguracja</th>
                            <th>Reakcje z niemetalami (O<sub>2</sub>, Cl<sub>2</sub>, Br<sub>2</sub>, I<sub>2</sub>, S) oraz z parą wodną</th>
                            <th>Reakcje z kwasami (nieutleniającymi vs utleniającymi), tlenki, wodorotlenki i reakcje charakterystyczne jonów</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Żelazo (<sub>26</sub>Fe)</strong><br>[Ar] 4s<sup>2</sup> 3d<sup>6</sup><br><i>E</i>&deg;<sub>Fe<sup>2+</sup>/Fe</sub> = &minus;0,44 V<br><em>(metal aktywny, ulega pasywacji!)</em><br><br>Stopnie utlenienia: +II, +III (rzadko +VI w FeO<sub>4</sub><sup>2&minus;</sup>)</td>
                            <td>• <strong>Z chlorem i bromem (silne utleniacze) tworzy sole żelaza(III) (+III):</strong><br>2Fe + 3Cl<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 2FeCl<sub>3</sub><br>2Fe + 3Br<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> 2FeBr<sub>3</sub><br>• <strong>Z siarką i jodem (słabsze utleniacze) tworzy sole żelaza(II) (+II):</strong><br>Fe + S <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> FeS &nbsp;|&nbsp; Fe + I<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> FeI<sub>2</sub><br>• <strong>Spalanie w tlenie i reakcja z parą wodną w wysokiej temp. dają czarny, ferromagnetyczny tlenek mieszany – magnetyt Fe<sub>3</sub>O<sub>4</sub> (FeO &middot; Fe<sub>2</sub>O<sub>3</sub>):</strong><br>3Fe + 2O<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> Fe<sub>3</sub>O<sub>4</sub><br>3Fe + 4H<sub>2</sub>O <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&#8652;</span></span> Fe<sub>3</sub>O<sub>4</sub> + 4H<sub>2</sub>&uarr;</td>
                            <td>• <strong>Z kwasami nieutleniającymi (HCl, H<sub>2</sub>SO<sub>4(rozc)</sub>)</strong> daje zawsze sole <strong>Fe<sup>2+</sup></strong> (<span style="color: #86efac;">bladozielony roztwór</span>) i wodór: Fe + 2H<sup>+</sup> &rarr; Fe<sup>2+</sup> + H<sub>2</sub>&uarr;.<br>• <strong>Z HNO<sub>3(stęż)</sub> i H<sub>2</sub>SO<sub>4(stęż)</sub> na zimno – PASYWACJA!</strong><br>• <strong>Z HNO<sub>3</sub> (rozc. oraz stęż. na gorąco) i H<sub>2</sub>SO<sub>4(stęż, na gorąco)</sub></strong> daje sole <strong>Fe<sup>3+</sup></strong> (<span style="color: #f59e0b;">żółtobrunatny roztwór</span>):<br>Fe + 4HNO<sub>3(rozc)</sub> &rarr; Fe(NO<sub>3</sub>)<sub>3</sub> + NO&uarr; + 2H<sub>2</sub>O<br>Fe + 6HNO<sub>3(stęż)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> Fe(NO<sub>3</sub>)<sub>3</sub> + 3NO<sub>2</sub>&uarr; + 3H<sub>2</sub>O<br><em>(Uwaga: Jeśli użyjemy nadmiaru metalicznego żelaza Fe, zredukuje ono powstałe jony Fe<sup>3+</sup> do Fe<sup>2+</sup>: 2Fe<sup>3+</sup> + Fe &rarr; 3Fe<sup>2+</sup>!).</em><br>• <strong>Wodorotlenki:</strong> Fe(OH)<sub>2</sub>&darr; (<span style="color: #86efac;">brudnozielony osad</span>, zasadowy) na powietrzu utlenia się do <span style="color: #b45309; font-weight: bold;">rdzawobrunatnego Fe(OH)<sub>3</sub>&darr;</span>: 4Fe(OH)<sub>2</sub> + O<sub>2</sub> + 2H<sub>2</sub>O &rarr; 4Fe(OH)<sub>3</sub>&darr;.<br>• <strong>Wykrywanie jonów Fe<sup>3+</sup>:</strong> z jonami rodankowymi SCN<sup>&minus;</sup> dają <span style="color: #ef4444; font-weight: bold;">krwistoczerwone zabarwienie kompleksu [Fe(SCN)]<sup>2+</sup></span>!</td>
                        </tr>
                        <tr>
                            <td><strong>Miedź (<sub>29</sub>Cu)</strong><br>[Ar] 4s<sup>1</sup> 3d<sup>10</sup><br><i>E</i>&deg;<sub>Cu<sup>2+</sup>/Cu</sub> = +0,34 V<br><em>(metal półszlachetny – NIE ulega pasywacji w kwasach!)</em><br><br>Stopnie utlenienia: +I, +II</td>
                            <td>• <strong>Z tlenem:</strong> poniżej 1000&deg;C tworzy <span style="color: #94a3b8;">czarny CuO (+II)</span> (2Cu + O<sub>2</sub> &rarr; 2CuO), powyżej 1000&deg;C <span style="color: #f87171;">ceglastoczerwony Cu<sub>2</sub>O (+I)</span> (4Cu + O<sub>2</sub> &rarr; 2Cu<sub>2</sub>O).<br>• <strong>Z chlorem i bromem</strong> daje sole Cu(II): Cu + Cl<sub>2</sub> &rarr; CuCl<sub>2</sub>, Cu + Br<sub>2</sub> &rarr; CuBr<sub>2</sub>.<br>• <strong>Z jodem (oraz jonów Cu<sup>2+</sup> z I<sup>&minus;</sup>!)</strong> powstaje biały osad jodku miedzi(I) CuI&darr; (jodek miedzi(II) CuI<sub>2</sub> nie istnieje – ulega redoks!):<br><strong>2Cu<sup>2+</sup> + 4I<sup>&minus;</sup> &rarr; 2CuI&darr; (biały) + I<sub>2</sub>!</strong><br>• <strong>Z siarką:</strong> w niższej temp. daje czarny CuS (Cu + S &rarr; CuS), w wysokiej Cu<sub>2</sub>S.</td>
                            <td>• <strong>Z HCl i rozc. H<sub>2</sub>SO<sub>4</sub>: NIE REAGUJE!</strong> (Reaguje z HCl tylko przy jednoczesnym przedmuchiwaniu tlenu: 2Cu + 4HCl + O<sub>2</sub> &rarr; 2CuCl<sub>2</sub> + 2H<sub>2</sub>O).<br>• <strong>Z kwasami utleniającymi (reaguje już na zimno z HNO<sub>3</sub>!):</strong><br>&ndash; Cu + 4HNO<sub>3(stęż)</sub> &rarr; Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO<sub>2</sub>&uarr; + 2H<sub>2</sub>O<br>&ndash; 3Cu + 8HNO<sub>3(rozc)</sub> &rarr; 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO&uarr; + 4H<sub>2</sub>O<br>&ndash; Cu + 2H<sub>2</sub>SO<sub>4(stęż)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> CuSO<sub>4</sub> + SO<sub>2</sub>&uarr; + 2H<sub>2</sub>O<br>• <strong>Patynowanie miedzi na powietrzu</strong> (<span style="color: #34d399; font-weight: bold;">zielony nalot</span> hydroksowęglanu):<br>2Cu + O<sub>2</sub> + CO<sub>2</sub> + H<sub>2</sub>O &rarr; [Cu(OH)]<sub>2</sub>CO<sub>3</sub> (patyna / malachit).<br>• <strong>Cu(OH)<sub>2</sub>&darr; (<span style="color: #38bdf8;">niebieski, galaretowaty osad</span>):</strong> po ogrzaniu czernieje (Cu(OH)<sub>2</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> CuO&darr; + H<sub>2</sub>O); wykazuje słaby amfoteryzm (w stężonym NaOH daje <span style="color: #3b82f6;">szafirowy</span> Na<sub>2</sub>[Cu(OH)<sub>4</sub>]); w wodzie amoniakalnej daje <span style="color: #3b82f6;">szafirowy</span> kompleks [Cu(NH<sub>3</sub>)<sub>4</sub>](OH)<sub>2</sub>; służy do wykrywania aldehydów i glukozy (próba Trommera na gorąco daje <span style="color: #f87171;">ceglastoczerwony osad Cu<sub>2</sub>O&darr;</span>) oraz alkoholi polihydroksylowych (szafirowy kompleks na zimno).</td>
                        </tr>
                        <tr>
                            <td><strong>Srebro (<sub>47</sub>Ag)</strong><br>[Kr] 5s<sup>1</sup> 4d<sup>10</sup><br><i>E</i>&deg;<sub>Ag<sup>+</sup>/Ag</sub> = +0,80 V<br><em>(metal szlachetny)</em><br><br>Stopień utlenienia: +I</td>
                            <td>• Z tlenem O<sub>2</sub> nie reaguje nawet po ogrzaniu!<br>• <strong>Czernienie srebra na powietrzu</strong> (w obecności śladów H<sub>2</sub>S i tlenu tworzy się <span style="color: #94a3b8; font-weight: bold;">czarny nalot</span> siarczku srebra(I) Ag<sub>2</sub>S):<br>4Ag + 2H<sub>2</sub>S + O<sub>2</sub> &rarr; 2Ag<sub>2</sub>S&darr; (<span style="color: #94a3b8;">czarny</span>) + 2H<sub>2</sub>O</td>
                            <td>• <strong>Z kwasami utleniającymi:</strong><br>&ndash; Ag + 2HNO<sub>3(stęż)</sub> &rarr; AgNO<sub>3</sub> + NO<sub>2</sub>&uarr; + H<sub>2</sub>O<br>&ndash; 3Ag + 4HNO<sub>3(rozc)</sub> &rarr; 3AgNO<sub>3</sub> + NO&uarr; + 2H<sub>2</sub>O<br>&ndash; 2Ag + 2H<sub>2</sub>SO<sub>4(stęż)</sub> <span class="chem-arrow"><span class="cond-top">T</span><span class="arrow-sym">&rarr;</span></span> Ag<sub>2</sub>SO<sub>4</sub> + SO<sub>2</sub>&uarr; + 2H<sub>2</sub>O<br>• <strong>Reakcja Ag<sup>+</sup> z zasadami (NaOH/KOH):</strong> NIE powstaje AgOH, lecz natychmiast wytrąca się <span style="color: #a16207; font-weight: bold;">ciemnobrunatny osad tlenku srebra(I) Ag<sub>2</sub>O&darr;</span>:<br>2Ag<sup>+</sup> + 2OH<sup>&minus;</sup> &rarr; Ag<sub>2</sub>O&darr; (<span style="color: #a16207;">brunatny</span>) + H<sub>2</sub>O<br>Osad Ag<sub>2</sub>O <strong>NIE rozpuszcza się w nadmiarze NaOH</strong> (jest zasadowy!), ale rozpuszcza się w wodzie amoniakalnej, tworząc odczynnik Tollensa:<br>Ag<sub>2</sub>O + 4NH<sub>3</sub> + H<sub>2</sub>O &rarr; 2[Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> + 2OH<sup>&minus;</sup>.<br>• <strong>Halogenki srebra</strong> (ciemnieją na świetle: 2AgX <span class="chem-arrow"><span class="cond-top">h&nu;</span><span class="arrow-sym">&rarr;</span></span> 2Ag&darr; + X<sub>2</sub>):<br><strong>AgF (dobrze rozpuszczalny w H<sub>2</sub>O!)</strong>; <strong>AgCl&darr;</strong> (biały serowaty osad, rozpuszczalny w NH<sub>3(aq)</sub>); <strong>AgBr&darr;</strong> (<span style="color: #fef08a;">żółtawy/kremowy osad</span>); <strong>AgI&darr;</strong> (<span style="color: #facc15; font-weight: bold;">żółty osad</span>, nierozpuszczalny w NH<sub>3(aq)</sub>!).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- SEKCJA 6 -->
        <div class="note-section">
            <h3>6. Wzorcowe Zadania Maturalne z Działu 10 – Rozwiązania Krok po Kroku</h3>

            <div class="chem-obs">
                📝 <strong>Przykład 1 (Bilans jonowo-elektronowy redoks oraz stechiometria utleniania FeSO<sub>4</sub> za pomocą KMnO<sub>4</sub> – manganometria):</strong><br>
                <em>W celu oznaczenia zawartości siarczanu(VI) żelaza(II) w próbce zakwaszonej kwasem siarkowym(VI) miareczkowano ją wodnym roztworem manganianu(VII) potasu (KMnO<sub>4</sub>) o stężeniu 0,040 mol &middot; dm<sup>&minus;3</sup>. Do całkowitego utlenienia jonów Fe<sup>2+</sup> (do momentu pojawienia się trwałego jasnoróżowego zabarwienia roztworu) zużyto 25,0 cm<sup>3</sup> roztworu KMnO<sub>4</sub>. Zapisz w formie jonowej skróconej równanie zachodzącej reakcji redoks wraz z bilansem jonowo-elektronowym oraz oblicz masę bezwodnego FeSO<sub>4</sub> (<i>M</i> = 152 g &middot; mol<sup>&minus;1</sup>) w badanej próbce.</em><br><br>
                • <strong>Krok 1 (Zapis równań połówkowych i uzgodnionego równania jonowego skróconego w środowisku kwasowym):</strong><br>
                W środowisku kwasowym (H<sup>+</sup>) fioletowy jon MnO<sub>4</sub><sup>&minus;</sup> (+VII) redukuje się do jonu Mn<sup>2+</sup> (+II), pobierając 5 elektronów, natomiast kation Fe<sup>2+</sup> (+II) utlenia się do kationu Fe<sup>3+</sup> (+III), oddając 1 elektron:<br>
                &ndash; Proces redukcji (utleniacz: MnO<sub>4</sub><sup>&minus;</sup>): &nbsp; MnO<sub>4</sub><sup>&minus;</sup> + 8 H<sup>+</sup> + 5 e<sup>&minus;</sup> &rarr; Mn<sup>2+</sup> + 4 H<sub>2</sub>O &nbsp;&nbsp;|&middot; 1<br>
                &ndash; Proces utleniania (reduktor: Fe<sup>2+</sup>): &nbsp; Fe<sup>2+</sup> &rarr; Fe<sup>3+</sup> + 1 e<sup>&minus;</sup> &nbsp;&nbsp;|&middot; 5<br>
                &ndash; <strong>Sumaryczne równanie jonowe skrócone:</strong> &nbsp; <strong>MnO<sub>4</sub><sup>&minus;</sup> + 5 Fe<sup>2+</sup> + 8 H<sup>+</sup> &rarr; Mn<sup>2+</sup> + 5 Fe<sup>3+</sup> + 4 H<sub>2</sub>O</strong>.<br>
                • <strong>Krok 2 (Obliczenie liczby moli zużytego KMnO<sub>4</sub> oraz masy FeSO<sub>4</sub> ze stechiometrii 1 : 5):</strong><br>
                Liczba moli zużytego utleniacza: <i>n</i><sub>MnO<sub>4</sub><sup>&minus;</sup></sub> = <i>C<sub>m</sub></i> &middot; <i>V</i> = 0,040 mol &middot; dm<sup>&minus;3</sup> &middot; 0,0250 dm<sup>3</sup> = <strong>0,00100 mola</strong> (1,00 &middot; 10<sup>&minus;3</sup> mola).<br>
                Z równania reakcji wynika, że 1 mol jonów MnO<sub>4</sub><sup>&minus;</sup> utlenia dokładnie 5 moli jonów Fe<sup>2+</sup>:<br>
                <i>n</i><sub>FeSO<sub>4</sub></sub> = <i>n</i><sub>Fe<sup>2+</sup></sub> = 5 &middot; <i>n</i><sub>MnO<sub>4</sub><sup>&minus;</sup></sub> = 5 &middot; 0,00100 mola = <strong>0,00500 mola FeSO<sub>4</sub></strong>.<br>
                Masa FeSO<sub>4</sub> w próbce: <i>m</i><sub>FeSO<sub>4</sub></sub> = <i>n</i> &middot; <i>M</i> = 0,00500 mol &middot; 152 g &middot; mol<sup>&minus;1</sup> = <strong>0,760 g</strong>.
            </div>

            <div class="chem-obs">
                📝 <strong>Przykład 2 (Zadanie ze zmianą masy płytki metalowej zanurzonej w roztworze soli innego metalu):</strong><br>
                <em>Płytkę kadmową (<i>M</i><sub>Cd</sub> = 112,4 g &middot; mol<sup>&minus;1</sup>) o masie początkowej 20,00 g zanurzono w 200 cm<sup>3</sup> wodnego roztworu azotanu(V) srebra(I) (AgNO<sub>3</sub>, <i>M</i><sub>Ag</sub> = 107,9 g &middot; mol<sup>&minus;1</sup>). Po pewnym czasie płytkę wyjęto, osuszono i zważono – jej masa wzrosła do 22,07 g. Oblicz, ile gramów kadmu przeszło do roztworu oraz o ile zmieniło się stężenie molowe jonów Ag<sup>+</sup> w roztworze.</em><br><br>
                • <strong>Krok 1 (Zapis równania reakcji i analiza bilansu masy płytki na 1 mol przereagowanego Cd):</strong><br>
                Kadm (<i>E</i>&deg; = &minus;0,40 V) jest bardziej aktywny od srebra (<i>E</i>&deg; = +0,80 V), dlatego wypiera srebro z roztworu AgNO<sub>3</sub>:<br>
                <strong>Cd<sub>(s)</sub> + 2 Ag<sup>+</sup><sub>(aq)</sub> &rarr; Cd<sup>2+</sup><sub>(aq)</sub> + 2 Ag<sub>(s)</sub>&darr;</strong>.<br>
                Gdy do roztworu przechodzi 1 mol Cd (ubywa z płytki 112,4 g), na powierzchni płytki osadzają się równocześnie 2 mole Ag (przybywa na płytce 2 &middot; 107,9 g = 215,8 g). Zatem na każdy 1 mol przereagowanego kadmu masa płytki wzrasta o:<br>
                &Delta;<i>m</i><sub>molowe</sub> = 215,8 g &minus; 112,4 g = <strong>+103,4 g &middot; mol<sup>&minus;1</sup></strong>.<br>
                • <strong>Krok 2 (Wyznaczenie liczby moli przereagowanego kadmu z rzeczywistego przyrostu masy &Delta;<i>m</i>):</strong><br>
                Rzeczywisty przyrost masy płytki wynosi: &Delta;<i>m</i> = 22,07 g &minus; 20,00 g = <strong>2,07 g</strong>.<br>
                Liczba moli przereagowanego kadmu: <i>x</i> = <i>n</i><sub>Cd</sub> = &Delta;<i>m</i> / &Delta;<i>m</i><sub>molowe</sub> = 2,07 g / 103,4 g &middot; mol<sup>&minus;1</sup> = <strong>0,0200 mola Cd</strong>.<br>
                Masa kadmu, która przeszła do roztworu: <i>m</i><sub>Cd</sub> = 0,0200 mol &middot; 112,4 g &middot; mol<sup>&minus;1</sup> &approx; <strong>2,25 g Cd</strong>.<br>
                W tym samym czasie z roztworu ubyło <i>n</i><sub>Ag<sup>+</sup></sub> = 2<i>x</i> = 0,0400 mola jonów Ag<sup>+</sup>, zatem stężenie molowe jonów Ag<sup>+</sup> w 200 cm<sup>3</sup> (0,200 dm<sup>3</sup>) roztworu zmalało o: &Delta;<i>C</i><sub>Ag<sup>+</sup></sub> = 0,0400 mol / 0,200 dm<sup>3</sup> = <strong>0,200 mol &middot; dm<sup>&minus;3</sup></strong>.
            </div>
        </div>

        <!-- SEKCJA 7 -->
        <div class="note-section">
            <h3>7. Projektowanie i Opis Doświadczeń Chemicznych (Pewniaki Maturalne z Działu 10)</h3>

            <h4>Doświadczenie 1: Badanie wpływu odczynu środowiska na przebieg redukcji jonów manganianowych(VII) (MnO<sub>4</sub><sup>&minus;</sup>)</h4>
            <ul class="note-list">
                <li><strong>Przebieg:</strong> Do trzech probówek nalewamy po 3 cm<sup>3</sup> <span style="color: #c084fc; font-weight: bold;">fioletowego roztworu KMnO<sub>4</sub></span>. Do probówki I dodajemy roztwór kwasu H<sub>2</sub>SO<sub>4</sub> (środowisko kwasowe), do probówki II wodę destylowaną (środowisko obojętne), a do probówki III stężony roztwór KOH lub NaOH (środowisko silnie zasadowe). Następnie do każdej z trzech probówek dodajemy roztwór siarczanu(IV) sodu (Na<sub>2</sub>SO<sub>3</sub>) lub azotanu(III) potasu (KNO<sub>2</sub>).</li>
                <li><strong>Obserwacje:</strong>
                    <br>&ndash; W probówce I (z H<sub>2</sub>SO<sub>4</sub>) fioletowy roztwór <strong>całkowicie się odbarwia</strong> (powstaje bezbarwny/bladoróżowy klarowny roztwór Mn<sup>2+</sup>).
                    <br>&ndash; W probówce II (z H<sub>2</sub>O) fioletowy roztwór <strong>odbarwia się i wytrąca się <span style="color: #a16207; font-weight: bold;">ciemnobrunatny osad (MnO<sub>2</sub>&darr;)</span></strong>.
                    <br>&ndash; W probówce III (ze stężonym KOH) barwa roztworu <strong>zmienia się z fioletowej na <span style="color: #22c55e; font-weight: bold;">intensywnie zieloną</span></strong> (powstaje klarowny roztwór MnO<sub>4</sub><sup>2&minus;</sup>).
                </li>
            </ul>

            <h4>Doświadczenie 2: Odróżnianie metali za pomocą kwasów utleniających i nieutleniających (np. Al, Fe, Cu, Zn)</h4>
            <div class="note-alert">
                💡 <strong>Klucz diagnostyczny do zadań maturalnych typu „w 4 nieoznakowanych probówkach znajdują się wiórki Al, Zn, Fe i Cu”:</strong>
                <ol class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li><strong>Miedź (Cu):</strong> jedyny z tych metali o <span style="color: #f87171; font-weight: bold;">różowoczerwonej barwie</span>, który <strong>nie reaguje z kwasem solnym HCl</strong> (ani z NaOH), a roztwarza się w HNO<sub>3</sub> z utworzeniem <span style="color: #38bdf8; font-weight: bold;">niebieskiego roztworu Cu(NO<sub>3</sub>)<sub>2</sub></span>.</li>
                    <li><strong>Żelazo (Fe):</strong> nie reaguje z roztworem zasady NaOH, ulega pasywacji w zimnym stężonym HNO<sub>3</sub>, a w kwasie solnym HCl roztwarza się z wydzieleniem H<sub>2</sub>&uarr;, dając <span style="color: #86efac; font-weight: bold;">bladozielony roztwór FeCl<sub>2</sub></span> (który po dodaniu NaOH daje brudnozielony osad Fe(OH)<sub>2</sub>&darr; brunatniejący na powietrzu!).</li>
                    <li><strong>Jak odróżnić Glin (Al) od Cynku (Zn)?</strong> Zarówno Al, jak i Zn roztwarzają się w HCl oraz w roztworze mocnej zasady NaOH (z wydzieleniem H<sub>2</sub>&uarr;)! Różnicują je dwa proste testy:<br>
                    <strong>a) Stężony kwas azotowy(V) (HNO<sub>3(stęż)</sub>) w temperaturze pokojowej:</strong> glin (Al) ulega <strong>pasywacji</strong> (brak reakcji na zimno), natomiast cynk (Zn) nie ulega pasywacji i gwałtownie reaguje z wydzieleniem <span style="color: #b45309; font-weight: bold;">brunatnego NO<sub>2</sub>&uarr;</span>;<br>
                    <strong>b) Działanie nadmiarem wody amoniakalnej NH<sub>3(aq)</sub> na roztwory ich soli:</strong> biały osad Al(OH)<sub>3</sub>&darr; <strong>nie rozpuszcza się</strong> w nadmiarze NH<sub>3(aq)</sub>, natomiast biały osad Zn(OH)<sub>2</sub>&darr; <strong>rozpuszcza się w nadmiarze NH<sub>3(aq)</sub></strong> do bezbarwnego kompleksu [Zn(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>!</li>
                </ol>
            </div>
        </div>
    </div>
    `,

    notatkiActive: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">🧠 ACTIVE RECALL: METALE, NIEMETALE I ICH ZWIĄZKI (BLOKI s, p, d)</h2>
        <p style="text-align: center; color: #94a3b8; font-size: 13px; margin-bottom: 20px;">
            💡 <em>Klikaj na ciemne pola, aby odkryć ukryte barwy, równania redoks i reguły okresowości, oraz rozwijaj pytania kontrolne!</em>
        </p>

        <!-- SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Okresowość, Wodór oraz Litowce i Berylowce (Blok s)</h3>
            <p>Aktywność chemiczna <strong>metali</strong> rośnie w grupie <span class="recall-blank" onclick="toggleRecall(this)">z góry na dół (maleje energia jonizacji E<sub>j</sub>)</span>, natomiast aktywność chemiczna <strong>niemetali</strong> rośnie w grupie <span class="recall-blank" onclick="toggleRecall(this)">z dołu do góry (rośnie elektroujemność &chi;)</span>.</p>
            <p>Wraz ze wzrostem temperatury przewodnictwo elektryczne metali <span class="recall-blank" onclick="toggleRecall(this)">maleje (wzrasta amplituda drgań zrębów M<sup>n+</sup>)</span>.</p>
            <p>Wodór zbiera się w laboratorium nad wodą lub w probówce odwróconej <span class="recall-blank" onclick="toggleRecall(this)">dnem do góry (ponieważ jest 14,5 razy lżejszy od powietrza)</span>.</p>
            <p>Wśród berylowców (grupa 2.) z wodą w ogóle nie reaguje <span class="recall-blank" onclick="toggleRecall(this)">beryl (Be – ma amfoteryczny tlenek BeO)</span>, a rozpuszczalność siarczanów(VI) MSO<sub>4</sub> w dół grupy <span class="recall-blank" onclick="toggleRecall(this)">maleje (BaSO<sub>4</sub>&darr; jest nierozpuszczalny)</span>.</p>

            <details class="recall-details">
                <summary><span>Podaj barwy płomienia w próbie płomieniowej dla kationów: Li<sup>+</sup>, Na<sup>+</sup>, K<sup>+</sup>, Ca<sup>2+</sup>, Sr<sup>2+</sup>, Ba<sup>2+</sup> oraz Mg<sup>2+</sup>.</span></summary>
                <p>
                    • <strong>Li<sup>+</sup> i Sr<sup>2+</sup>:</strong> karminowoczerwona<br>
                    • <strong>Na<sup>+</sup>:</strong> intensywnie żółta (złocista)<br>
                    • <strong>K<sup>+</sup>:</strong> fioletowa (różowofioletowa)<br>
                    • <strong>Ca<sup>2+</sup>:</strong> ceglastoczerwona<br>
                    • <strong>Ba<sup>2+</sup>:</strong> żółtozielona (jabłkowozielona)<br>
                    • <strong>Be<sup>2+</sup> i Mg<sup>2+</sup>:</strong> brak zabarwienia płomienia (emisja w zakresie UV).
                </p>
            </details>
        </div>

        <!-- SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Glin i Niemetale Bloku p (C, Si, N, P, O, S, Fluorowce)</h3>
            <p>Węglik glinu (Al<sub>4</sub>C<sub>3</sub>) w reakcji z wodą wydziela gazowy <span class="recall-blank" onclick="toggleRecall(this)">metan (CH<sub>4</sub>&uarr;) i daje osad Al(OH)<sub>3</sub>&darr;</span>.</p>
            <p>Utlenianie amoniaku NH<sub>3</sub> w czystym tlenie <strong>bez katalizatora</strong> prowadzi do <span class="recall-blank" onclick="toggleRecall(this)">azotu N<sub>2</sub> i H<sub>2</sub>O</span>, a <strong>w obecności katalizatora platynowego (Pt)</strong> prowadzi do <span class="recall-blank" onclick="toggleRecall(this)">tlenku azotu(II) NO i H<sub>2</sub>O (I etap metody Ostwalda)</span>.</p>
            <p>Po ekstrakcji rozpuszczalnikiem niepolarnym (CCl<sub>4</sub>, CHCl<sub>3</sub>, benzyna) warstwa organiczna w obecności <strong>Br<sub>2</sub></strong> ma barwę <span class="recall-blank" onclick="toggleRecall(this)">pomarańczową / brunatną</span>, a w obecności <strong>I<sub>2</sub></strong> ma barwę <span class="recall-blank" onclick="toggleRecall(this)">fioletową (różowofioletową)</span>.</p>

            <details class="recall-details">
                <summary><span>Zapisz równania reakcji chloru (Cl<sub>2</sub>) z zimnym roztworem NaOH oraz z gorącym roztworem KOH.</span></summary>
                <p>
                    • <strong>Z zimnym NaOH (dysproporcjonowanie do &minus;I oraz +I):</strong><br>
                    <strong>Cl<sub>2</sub> + 2 NaOH<sub>(zimny)</sub> &rarr; NaCl + NaClO + H<sub>2</sub>O</strong> (powstaje chloran(I) sodu).<br>
                    • <strong>Z gorącym KOH (dysproporcjonowanie do &minus;I oraz +V):</strong><br>
                    <strong>3 Cl<sub>2</sub> + 6 KOH<sub>(gorący)</sub> &rarr; 5 KCl + KClO<sub>3</sub> + 3 H<sub>2</sub>O</strong> (powstaje chloran(V) potasu).
                </p>
            </details>
        </div>

        <!-- SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Pierwiastki Bloku d: Chrom (Cr) i Mangan (Mn)</h3>
            <p>Konfiguracja walencyjna w stanie podstawowym dla <sub>24</sub>Cr to <span class="recall-blank" onclick="toggleRecall(this)">[Ar] 4s<sup>1</sup> 3d<sup>5</sup> (6 niesparowanych e<sup>&minus;</sup>)</span>, a dla <sub>29</sub>Cu to <span class="recall-blank" onclick="toggleRecall(this)">[Ar] 4s<sup>1</sup> 3d<sup>10</sup> (1 niesparowany e<sup>&minus;</sup>)</span>.</p>
            <p>Jony chromianowe(VI) <strong>CrO<sub>4</sub><sup>2&minus;</sup></strong> mają barwę <span class="recall-blank" onclick="toggleRecall(this)">żółtą (trwałe w zasadowym pH &gt; 7)</span>, a po zakwaszeniu przechodzą w jony dichromianowe(VI) <strong>Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup></strong> o barwie <span class="recall-blank" onclick="toggleRecall(this)">pomarańczowej (trwałe w kwasowym pH &lt; 7)</span>.</p>
            <p>Utlenianie szmaragdowozielonego kompleksu [Cr(OH)<sub>6</sub>]<sup>3&minus;</sup> za pomocą H<sub>2</sub>O<sub>2</sub> w środowisku zasadowym daje <span class="recall-blank" onclick="toggleRecall(this)">żółty roztwór jonów CrO<sub>4</sub><sup>2&minus;</sup></span>.</p>

            <details class="recall-details">
                <summary><span>Podaj produkty i obserwacje redukcji fioletowych jonów MnO<sub>4</sub><sup>&minus;</sup> (+VII) w środowisku: 1) kwasowym, 2) obojętnym, 3) silnie zasadowym.</span></summary>
                <p>
                    1. <strong>Środowisko kwasowe (H<sub>2</sub>SO<sub>4</sub>):</strong> redukcja o 5e<sup>&minus;</sup> do <strong>Mn<sup>2+</sup> (+II)</strong> – całkowite odbarwienie roztworu (bladoróżowy).<br>
                    2. <strong>Środowisko obojętne (H<sub>2</sub>O):</strong> redukcja o 3e<sup>&minus;</sup> do <strong>MnO<sub>2</sub>&darr; (+IV)</strong> – odbarwienie roztworu i wytrącenie ciemnobrunatnego osadu.<br>
                    3. <strong>Środowisko silnie zasadowe (stęż. KOH/NaOH):</strong> redukcja o 1e<sup>&minus;</sup> do <strong>MnO<sub>4</sub><sup>2&minus;</sup> (+VI)</strong> – zmiana barwy z fioletowej na zieloną.
                </p>
            </details>
        </div>

        <!-- SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Żelazo (Fe), Miedź (Cu) i Srebro (Ag)</h3>
            <p>Czułym odczynnikiem służącym do wykrywania jonów <strong>Fe<sup>3+</sup></strong> są jony rodankowe <strong>SCN<sup>&minus;</sup></strong>, które tworzą roztwór o barwie <span class="recall-blank" onclick="toggleRecall(this)">krwistoczerwonej ([Fe(SCN)]<sup>2+</sup>)</span>.</p>
            <p>W reakcji jonów <strong>Cu<sup>2+</sup> z jonami jodkowymi I<sup>&minus;</sup></strong> zachodzi reakcja redoks: 2 Cu<sup>2+</sup> + 4 I<sup>&minus;</sup> &rarr; <span class="recall-blank" onclick="toggleRecall(this)">2 CuI&darr; (biały osad jodku miedzi(I)) + I<sub>2</sub> (brunatny)</span>.</p>

            <details class="recall-details">
                <summary><span>Jak za pomocą dwóch doświadczeń odróżnić wiórki glinu (Al) od wiórków cynku (Zn)?</span></summary>
                <p>
                    1. <strong>Zimny stężony HNO<sub>3</sub>:</strong> Glin (Al) ulega pasywacji (brak objawów reakcji), natomiast cynk (Zn) gwałtownie reaguje z wydzieleniem brunatnego gazu NO<sub>2</sub>&uarr;.<br>
                    2. <strong>Działanie nadmiarem wody amoniakalnej NH<sub>3(aq)</sub> na sole Al<sup>3+</sup> i Zn<sup>2+</sup>:</strong> Biały osad Al(OH)<sub>3</sub>&darr; nie roztwarza się w nadmiarze amoniaku, a biały osad Zn(OH)<sub>2</sub>&darr; roztwarza się, tworząc bezbarwny aminakompleks [Zn(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>.
                </p>
            </details>
        </div>
    </div>
    `,

    zadania: "<h3>Zadania</h3><br>Miejsce na zadania z bilansowania równań redoks (manganometria i dichromatometria), zadania płytkowe ze zmianą masy metalu oraz projektowanie doświadczeń różnicujących metale bloków s, p i d...",

    fiszki: [
        {
            front: "Dlaczego metale są kowalne i ciągliwe, natomiast kryształy jonowe (sole) są kruche?",
            back: "W metalach dodatnie zręby M<sup>n+</sup> otacza ruchliwy „gaz elektronowy” (wiązanie bezukierunkowe), który przy przesunięciu warstw nadal spaja sieć. W krysztale jonowym przesunięcie warstw zbliża do siebie jony jednoimienne (+ do +, &minus; do &minus;), co powoduje odpychanie elektrostatyczne i pęknięcie kryształu."
        },
        {
            front: "Jak zmienia się przewodnictwo elektryczne metali wraz ze wzrostem temperatury i dlaczego?",
            back: "Przewodnictwo elektryczne metali MALEJE ze wzrostem temperatury, ponieważ wzrasta amplituda drgań termicznych zrębów atomowych M<sup>n+</sup> w węzłach sieci, co utrudnia uporządkowany ruch elektronów."
        },
        {
            front: "Jak w grupach i okresach zmienia się aktywność chemiczna metali, a jak aktywność chemiczna niemetali?",
            back: "• Metale (oddają e<sup>&minus;</sup>): aktywność ROŚNIE w dół grupy (Li &lt; Na &lt; K &lt; Cs) i MALEJE w okresie w prawo (Na &gt; Mg &gt; Al).<br>• Niemetale (przyjmują e<sup>&minus;</sup>): aktywność MALEJE w dół grupy (F<sub>2</sub> &gt; Cl<sub>2</sub> &gt; Br<sub>2</sub> &gt; I<sub>2</sub>) i ROŚNIE w okresie w prawo."
        },
        {
            front: "Jakie są dwie metody zbierania gazowego wodoru (H<sub>2</sub>) w laboratorium i jak się go identyfikuje?",
            back: "1) Nad wodą (bo H<sub>2</sub> bardzo słabo rozpuszcza się w wodzie);<br>2) W probówce odwróconej DNEM DO GÓRY (bo H<sub>2</sub> ma gęstość 14,5 razy mniejszą od powietrza).<br>Identyfikacja: po zbliżeniu płomienia zapala się z charakterystycznym „szczeknięciem” (mikrowybuchem)."
        },
        {
            front: "Kiedy wodór w reakcjach chemicznych pełni funkcję reduktora (przechodzi na +I), a kiedy funkcję utleniacza (przechodzi na &minus;I)?",
            back: "• Reduktor (0 &rarr; +I): w reakcjach z niemetalami (O<sub>2</sub>, Cl<sub>2</sub>, N<sub>2</sub>, S) oraz podczas redukcji tlenków metali (np. CuO + H<sub>2</sub> &rarr; Cu + H<sub>2</sub>O).<br>• Utleniacz (0 &rarr; &minus;I): wyłącznie w reakcjach z aktywnymi metalami, gdy powstają wodorki jonowe (np. 2Na + H<sub>2</sub> &rarr; 2NaH)."
        },
        {
            front: "Czym jest gaz syntezowy (gaz wodny) i za pomocą jakich dwóch reakcji przemysłowych się go otrzymuje?",
            back: "To mieszanina tlenku węgla(II) (CO) i wodoru (H<sub>2</sub>). Otrzymuje się go przez:<br>1) Konwersję metanu z parą wodną: CH<sub>4</sub> + H<sub>2</sub>O <span class='chem-arrow'><span class='cond-top'>Ni, T</span><span class='arrow-sym'>&#8652;</span></span> CO + 3H<sub>2</sub><br>2) Zgazowanie rozżarzonego koksu parą wodną: C + H<sub>2</sub>O <span class='chem-arrow'><span class='cond-top'>T</span><span class='arrow-sym'>&rarr;</span></span> CO + H<sub>2</sub>."
        },
        {
            front: "Porównaj gęstość, twardość i temperatury topnienia litowców (grupa 1.) oraz berylowców (grupa 2.) leżących w tym samym okresie.",
            back: "Berylowce mają mniejsze promienie atomowe i po 2 elektrony walencyjne na atom (silniejsze wiązanie metaliczne), dlatego są twardsze, cięższe od wody (d &gt; 1,5 g/cm<sup>3</sup>, podczas gdy Li, Na, K pływają po wodzie d &lt; 1 g/cm<sup>3</sup>) i mają znacznie wyższe temperatury topnienia niż litowce."
        },
        {
            front: "Porównaj produkty spalania w tlenie litu, sodu i potasu z produktami spalania berylowców (Mg, Ca).",
            back: "• W grupie 1.: tylko lit daje zwykły tlenek (Li<sub>2</sub>O), sód daje nadtlenek (Na<sub>2</sub>O<sub>2</sub>), a potas ponadtlenek (KO<sub>2</sub>).<br>• W grupie 2.: berylowce (Be, Mg, Ca, Sr) spalają się do zwykłych tlenków MO (np. MgO, CaO). Dodatkowo Li, Mg i Ca na powietrzu reagują też z azotem, tworząc azotki (Li<sub>3</sub>N, Mg<sub>3</sub>N<sub>2</sub>, Ca<sub>3</sub>N<sub>2</sub>)!"
        },
        {
            front: "Porównaj zachowanie berylu (Be), magnezu (Mg) oraz wapnia (Ca) wobec wody.",
            back: "• Beryl (Be): nie reaguje ani z zimną, ani z wrzącą wodą.<br>• Magnez (Mg): nie reaguje z zimną wodą; z wrzącą wodą daje Mg(OH)<sub>2</sub> + H<sub>2</sub>&uarr;, a w parze wodnej spala się do tlenku: Mg + H<sub>2</sub>O<sub>(g)</sub> &rarr; MgO + H<sub>2</sub>&uarr;.<br>• Wapń (Ca, Sr, Ba): reaguje z zimną wodą: Ca + 2H<sub>2</sub>O &rarr; Ca(OH)<sub>2</sub> + H<sub>2</sub>&uarr;."
        },
        {
            front: "Jak w 2. grupie układu okresowego (od Be do Ba) zmienia się rozpuszczalność w wodzie wodorotlenków M(OH)<sub>2</sub>, a jak siarczanów(VI) MSO<sub>4</sub>?",
            back: "• Rozpuszczalność wodorotlenków M(OH)<sub>2</sub> ROŚNIE w dół grupy (Be(OH)<sub>2</sub> i Mg(OH)<sub>2</sub> to osady, a Ba(OH)<sub>2</sub> to dobrze rozpuszczalna mocna zasada).<br>• Rozpuszczalność siarczanów(VI) MSO<sub>4</sub> MALEJE w dół grupy (MgSO<sub>4</sub> jest dobrze rozpuszczalny, a BaSO<sub>4</sub>&darr; praktycznie nierozpuszczalny)."
        },
        {
            front: "Podaj charakterystyczne barwy płomienia w próbie płomieniowej dla jonów: Li<sup>+</sup>, Na<sup>+</sup>, K<sup>+</sup>, Ca<sup>2+</sup>, Sr<sup>2+</sup> oraz Ba<sup>2+</sup>.",
            back: "• Li<sup>+</sup>: karminowoczerwona<br>• Na<sup>+</sup>: żółta (złocistożółta)<br>• K<sup>+</sup>: fioletowa<br>• Ca<sup>2+</sup>: ceglastoczerwona<br>• Sr<sup>2+</sup>: karminowoczerwona<br>• Ba<sup>2+</sup>: żółtozielona (jabłkowozielona)."
        },
        {
            front: "Na czym polega aluminotermia (reakcja termitowa)? Zapisz równanie reakcji glinu z tlenkiem żelaza(III) oraz magnetytem.",
            back: "To redukcja tlenków metali w wysokiej temperaturze za pomocą sproszkowanego glinu (silnie egzotermiczna):<br>• 2Al + Fe<sub>2</sub>O<sub>3</sub> <span class='chem-arrow'><span class='cond-top'>T</span><span class='arrow-sym'>&rarr;</span></span> Al<sub>2</sub>O<sub>3</sub> + 2Fe<br>• 8Al + 3Fe<sub>3</sub>O<sub>4</sub> <span class='chem-arrow'><span class='cond-top'>T</span><span class='arrow-sym'>&rarr;</span></span> 4Al<sub>2</sub>O<sub>3</sub> + 9Fe."
        },
        {
            front: "Czy roztwarzanie metalicznego glinu w zasadzie sodowej (2Al + 2NaOH + 6H<sub>2</sub>O &rarr; 2Na[Al(OH)<sub>4</sub>] + 3H<sub>2</sub>&uarr;) dowodzi amfoteryczności glinu?",
            back: "NIE! Wolne pierwiastki nie są amfoteryczne – jest to reakcja redoks, w której Al jest reduktorem, a woda utleniaczem. Amfoteryczne są wyłącznie związki glinu: tlenek Al<sub>2</sub>O<sub>3</sub> oraz wodorotlenek Al(OH)<sub>3</sub>!"
        },
        {
            front: "Jaki węglik tworzy glin i jaki gaz wydziela się podczas jego hydrolizy w wodzie?",
            back: "Tworzy węglik glinu Al<sub>4</sub>C<sub>3</sub> (metanorek), który z wodą wydziela metan:<br>Al<sub>4</sub>C<sub>3</sub> + 12H<sub>2</sub>O &rarr; 4Al(OH)<sub>3</sub>&darr; + 3CH<sub>4</sub>&uarr;."
        },
        {
            front: "Porównaj charakter chemiczny tlenków węglowców (grupa 14.) na +II oraz +IV stopniu utlenienia (C, Si, Sn, Pb).",
            back: "• Stopień +II: CO i SiO są obojętne, natomiast <strong>SnO i PbO są amfoteryczne</strong>!<br>• Stopień +IV: CO<sub>2</sub> i SiO<sub>2</sub> są kwasowe, natomiast <strong>GeO<sub>2</sub>, SnO<sub>2</sub> i PbO<sub>2</sub> są amfoteryczne</strong>!"
        },
        {
            front: "Porównaj hybrydyzację atomów węgla, typ sieci krystalicznej i przewodnictwo prądu w diamencie, graficie oraz fulerenie C<sub>60</sub>.",
            back: "• Diament: hybrydyzacja sp<sup>3</sup>, kryształ kowalencyjny (atomowy), izolator (nie przewodzi prądu).<br>• Grafit: hybrydyzacja sp<sup>2</sup>, budowa warstwowa, przewodzi prąd elektryczny (zdelokalizowane elektrony &pi;).<br>• Fuleren C<sub>60</sub>: sp<sup>2</sup>/sp<sup>3</sup>, kryształ molekularny (rozpuszcza się w rozpuszczalnikach niepolarnych, np. benzenie)."
        },
        {
            front: "Z jakimi odczynnikami reaguje tlenek krzemu(IV) (krzemionka, SiO<sub>2</sub>)? Zapisz równanie trawienia szkła.",
            back: "SiO<sub>2</sub> nie reaguje z wodą ani z żadnym kwasem poza kwasem fluorowodorowym HF (trawienie szkła):<br><strong>SiO<sub>2</sub> + 4HF &rarr; SiF<sub>4</sub>&uarr; + 2H<sub>2</sub>O</strong>.<br>Ponadto jako tlenek kwasowy reaguje ze stężonymi zasadami (SiO<sub>2</sub> + 2NaOH &rarr; Na<sub>2</sub>SiO<sub>3</sub> + H<sub>2</sub>O) oraz na gorąco z Na<sub>2</sub>CO<sub>3</sub> i CaCO<sub>3</sub> (wytop szkła)."
        },
        {
            front: "Jak w laboratorium otrzymuje się czysty azot (N<sub>2</sub>) i dlaczego cząsteczka N<sub>2</sub> jest tak bierna chemicznie?",
            back: "W laboratorium przez ogrzewanie roztworu NH<sub>4</sub>NO<sub>2</sub> (lub NH<sub>4</sub>Cl + NaNO<sub>2</sub>): NH<sub>4</sub>NO<sub>2</sub> <span class='chem-arrow'><span class='cond-top'>T</span><span class='arrow-sym'>&rarr;</span></span> N<sub>2</sub>&uarr; + 2H<sub>2</sub>O. Bierność N<sub>2</sub> wynika z obecności bardzo silnego wiązania potrójnego :N&equiv;N: (1&sigma; + 2&pi;, E = 945 kJ/mol)."
        },
        {
            front: "Porównaj równania spalania amoniaku (NH<sub>3</sub>) w tlenie bez katalizatora oraz w obecności katalizatora platynowego (Pt).",
            back: "• Bez katalizatora (powstaje wolny azot): 4NH<sub>3</sub> + 3O<sub>2</sub> &rarr; <strong>2N<sub>2</sub>&uarr;</strong> + 6H<sub>2</sub>O<br>• Z katalizatorem Pt w 800&deg;C (I etap metody Ostwalda): 4NH<sub>3</sub> + 5O<sub>2</sub> <span class='chem-arrow'><span class='cond-top'>Pt, T</span><span class='arrow-sym'>&rarr;</span></span> <strong>4NO&uarr;</strong> + 6H<sub>2</sub>O."
        },
        {
            front: "Porównaj produkty termicznego rozkładu soli amonowych: 1) NH<sub>4</sub>Cl i (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub> oraz 2) NH<sub>4</sub>NO<sub>2</sub>, NH<sub>4</sub>NO<sub>3</sub> i (NH<sub>4</sub>)<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>.",
            back: "1) Gdy anion nie jest utleniaczem, wydziela się amoniak: NH<sub>4</sub>Cl &rarr; NH<sub>3</sub>&uarr; + HCl&uarr;.<br>2) Gdy anion jest utleniaczem, zachodzi redoks: NH<sub>4</sub>NO<sub>2</sub> &rarr; <strong>N<sub>2</sub>&uarr;</strong> + 2H<sub>2</sub>O; NH<sub>4</sub>NO<sub>3</sub> &rarr; <strong>N<sub>2</sub>O&uarr;</strong> + 2H<sub>2</sub>O; (NH<sub>4</sub>)<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> &rarr; Cr<sub>2</sub>O<sub>3</sub> + <strong>N<sub>2</sub>&uarr;</strong> + 4H<sub>2</sub>O."
        },
        {
            front: "Porównaj budowę, właściwości i reaktywność fosforu białego (P<sub>4</sub>) oraz fosforu czerwonego (P<sub>n</sub>).",
            back: "• Fosfor biały (P<sub>4</sub>): cząsteczki tetraedryczne, kryształ molekularny, trujący, świeci w ciemności i ulega samozapłonowi na powietrzu (przechowywany pod wodą!).<br>• Fosfor czerwony (P<sub>n</sub>): budowa polimeryczna, nietrujący, nie świeci, zapala się dopiero powyżej 260&deg;C."
        },
        {
            front: "Wymień 3 laboratoryjne metody otrzymywania tlenu (O<sub>2</sub>) oraz sposób jego identyfikacji.",
            back: "1) 2H<sub>2</sub>O<sub>2</sub> <span class='chem-arrow'><span class='cond-top'>MnO<sub>2</sub></span><span class='arrow-sym'>&rarr;</span></span> 2H<sub>2</sub>O + O<sub>2</sub>&uarr;<br>2) 2KMnO<sub>4</sub> <span class='chem-arrow'><span class='cond-top'>T</span><span class='arrow-sym'>&rarr;</span></span> K<sub>2</sub>MnO<sub>4</sub> + MnO<sub>2</sub> + O<sub>2</sub>&uarr;<br>3) 2KClO<sub>3</sub> <span class='chem-arrow'><span class='cond-top'>T, MnO<sub>2</sub></span><span class='arrow-sym'>&rarr;</span></span> 2KCl + 3O<sub>2</sub>&uarr;.<br>Identyfikacja: tlące się łuczywo wprowadzone do probówki z tlenem gwałtownie rozżarza się i zapala jasnym płomieniem."
        },
        {
            front: "Wymień 3 odmiany alotropowe siarki oraz zapisz reakcję siarkowodoru (H<sub>2</sub>S) z tlenkiem siarki(IV) (SO<sub>2</sub>).",
            back: "• Odmiany alotropowe siarki: krystaliczne – siarka rombowa (&alpha;-S<sub>8</sub>) i siarka jednoskośna (&beta;-S<sub>8</sub>); bezpostaciowa – siarka plastyczna (łańcuchy S<sub>n</sub>).<br>• Reakcja Klausa (synproporcjonowanie): <strong>2H<sub>2</sub>S + SO<sub>2</sub> &rarr; 3S&darr; (żółty osad) + 2H<sub>2</sub>O</strong>."
        },
        {
            front: "Jaką rolę w reakcjach redoks może pełnić tlenek siarki(IV) (SO<sub>2</sub>) i jakich gazów NIE WOLNO osuszać w płuczce ze stężonym H<sub>2</sub>SO<sub>4</sub>?",
            back: "• SO<sub>2</sub> (st. utl. +IV) jest najczęściej reduktorem (utlenia się do +VI wobec KMnO<sub>4</sub>, K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, Br<sub>2</sub>), ale wobec silnych reduktorów (H<sub>2</sub>S, Mg) jest utleniaczem (redukuje się do S<sup>0</sup>).<br>• Stężonym H<sub>2</sub>SO<sub>4</sub> NIE WOLNO osuszać amoniaku NH<sub>3</sub> (reakcja kwas–zasada!) ani silnych reduktorów H<sub>2</sub>S, HI, HBr!"
        },
        {
            front: "Porównaj stan skupienia, barwę w 25&deg;C oraz barwę warstwy niepolarnego rozpuszczalnika (CCl<sub>4</sub> / benzyny) dla Cl<sub>2</sub>, Br<sub>2</sub> oraz I<sub>2</sub>.",
            back: "• Cl<sub>2</sub>: żółtozielony gaz; w CCl<sub>4</sub> bezbarwny/bladożółty.<br>• Br<sub>2</sub>: ciemnobrunatna ciecz; w CCl<sub>4</sub>/benzynie daje barwę <strong>pomarańczową / pomarańczowobrunatną</strong>.<br>• I<sub>2</sub>: szaroczarne/fioletowe kryształy (sublimują!); w CCl<sub>4</sub>/benzynie daje intensywną barwę <strong>fioletową (różowofioletową)</strong>!"
        },
        {
            front: "Jak zmienia się zdolność utleniająca fluorowców X<sub>2</sub> w 17. grupie i które reakcje wypierania halogenków z roztworów soli zachodzą?",
            back: "Aktywność utleniająca maleje w dół grupy: F<sub>2</sub> &gt; Cl<sub>2</sub> &gt; Br<sub>2</sub> &gt; I<sub>2</sub> (F<sub>2</sub> rozkłada wodę!). W roztworach wodnych:<br>• Cl<sub>2</sub> wypiera zarówno Br<sub>2</sub> (z Br<sup>&minus;</sup>), jak i I<sub>2</sub> (z I<sup>&minus;</sup>);<br>• Br<sub>2</sub> wypiera tylko I<sub>2</sub> (z I<sup>&minus;</sup>): Br<sub>2</sub> + 2I<sup>&minus;</sup> &rarr; 2Br<sup>&minus;</sup> + I<sub>2</sub>."
        },
        {
            front: "Zapisz jonowe równania otrzymywania chloru (Cl<sub>2</sub>) w laboratorium z KMnO<sub>4</sub> + HCl<sub>(stęż)</sub> oraz z MnO<sub>2</sub> + HCl<sub>(stęż)</sub>.",
            back: "• Z KMnO<sub>4</sub> (na zimno): 2MnO<sub>4</sub><sup>&minus;</sup> + 10Cl<sup>&minus;</sup> + 16H<sup>+</sup> &rarr; 2Mn<sup>2+</sup> + 5Cl<sub>2</sub>&uarr; + 8H<sub>2</sub>O<br>• Z MnO<sub>2</sub> (na gorąco): MnO<sub>2</sub> + 2Cl<sup>&minus;</sup> + 4H<sup>+</sup> <span class='chem-arrow'><span class='cond-top'>T</span><span class='arrow-sym'>&rarr;</span></span> Mn<sup>2+</sup> + Cl<sub>2</sub>&uarr; + 2H<sub>2</sub>O."
        },
        {
            front: "Zapisz jonowe równania dysproporcjonowania chloru (Cl<sub>2</sub>) w zimnym roztworze NaOH oraz w gorącym roztworze KOH.",
            back: "• Na zimno (do Cl<sup>&minus;</sup> i ClO<sup>&minus;</sup>): Cl<sub>2</sub> + 2OH<sup>&minus;</sup> &rarr; Cl<sup>&minus;</sup> + ClO<sup>&minus;</sup> + H<sub>2</sub>O<br>• Na gorąco (do Cl<sup>&minus;</sup> i ClO<sub>3</sub><sup>&minus;</sup>): 3Cl<sub>2</sub> + 6OH<sup>&minus;</sup> <span class='chem-arrow'><span class='cond-top'>T</span><span class='arrow-sym'>&rarr;</span></span> 5Cl<sup>&minus;</sup> + ClO<sub>3</sub><sup>&minus;</sup> + 3H<sub>2</sub>O."
        },
        {
            front: "Dlaczego fluorowodór (HF) ma najwyższą temperaturę wrzenia (+19,5&deg;C) wśród wszystkich halogenowodorów i jest słabym kwasem?",
            back: "• Wysoka temp. wrzenia: silne międzycząsteczkowe wiązania wodorowe tworzące asocjaty (HF)<sub>n</sub>.<br>• Słaby kwas w wodzie: bardzo mały promień atomu F sprawia, że wiązanie H&ndash;F jest wyjątkowo krótkie i mocne, więc trudno ulega dysocjacji."
        },
        {
            front: "Podaj skrócone konfiguracje elektronowe atomów <sub>24</sub>Cr, <sub>26</sub>Fe, <sub>29</sub>Cu oraz kationów Cr<sup>3+</sup>, Fe<sup>2+</sup> i Fe<sup>3+</sup>.",
            back: "• <sub>24</sub>Cr: [Ar] 4s<sup>1</sup> 3d<sup>5</sup> (promocja!) &rarr; Cr<sup>3+</sup>: [Ar] 3d<sup>3</sup><br>• <sub>26</sub>Fe: [Ar] 4s<sup>2</sup> 3d<sup>6</sup> &rarr; Fe<sup>2+</sup>: [Ar] 3d<sup>6</sup>; &nbsp;Fe<sup>3+</sup>: [Ar] 3d<sup>5</sup> (półzapełniona 3d<sup>5</sup>!)<br>• <sub>29</sub>Cu: [Ar] 4s<sup>1</sup> 3d<sup>10</sup> (promocja!). Elektrony odrywane są zawsze najpierw z 4s!"
        },
        {
            front: "Podaj barwy jonów chromu w roztworach wodnych: Cr<sup>2+</sup>, Cr<sup>3+</sup>, [Cr(OH)<sub>6</sub>]<sup>3&minus;</sup>, CrO<sub>4</sub><sup>2&minus;</sup> oraz Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup>.",
            back: "• Cr<sup>2+</sup>: niebieski<br>• Cr<sup>3+</sup>: zielony lub fioletowy<br>• [Cr(OH)<sub>6</sub>]<sup>3&minus;</sup>: ciemnozielony (szmaragdowozielony)<br>• CrO<sub>4</sub><sup>2&minus;</sup>: żółty (trwały w pH &gt; 7)<br>• Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup>: pomarańczowy (trwały w pH &lt; 7)."
        },
        {
            front: "Zapisz równania przejścia między jonami chromianowymi(VI) (CrO<sub>4</sub><sup>2&minus;</sup>) a dichromianowymi(VI) (Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup>) pod wpływem kwasu i zasady.",
            back: "• Zakwaszanie (żółty &rarr; pomarańczowy): 2CrO<sub>4</sub><sup>2&minus;</sup> + 2H<sup>+</sup> &#8652; Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + H<sub>2</sub>O<br>• Alkalizowanie (pomarańczowy &rarr; żółty): Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + 2OH<sup>&minus;</sup> &#8652; 2CrO<sub>4</sub><sup>2&minus;</sup> + H<sub>2</sub>O.<br>Uwaga: to NIE jest reakcja redoks (chrom ma stale +VI)!"
        },
        {
            front: "Zapisz jonowe równanie utleniania jonów heksahydroksochromianowych(III) [Cr(OH)<sub>6</sub>]<sup>3&minus;</sup> nadtlenkiem wodoru (H<sub>2</sub>O<sub>2</sub>) w środowisku zasadowym.",
            back: "2[Cr(OH)<sub>6</sub>]<sup>3&minus;</sup> (szmaragdowozielony) + 3H<sub>2</sub>O<sub>2</sub> &rarr; 2CrO<sub>4</sub><sup>2&minus;</sup> (żółty) + 2OH<sup>&minus;</sup> + 8H<sub>2</sub>O."
        },
        {
            front: "Zapisz jonowe równanie redukcji jonów dichromianowych(VI) (Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup>) za pomocą jonów Fe<sup>2+</sup> oraz jonów SO<sub>3</sub><sup>2&minus;</sup> w środowisku kwasowym (H<sub>2</sub>SO<sub>4</sub>).",
            back: "Pomarańczowy roztwór zmienia barwę na zieloną (Cr<sup>3+</sup>):<br>• Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + 6Fe<sup>2+</sup> + 14H<sup>+</sup> &rarr; 2Cr<sup>3+</sup> + 6Fe<sup>3+</sup> + 7H<sub>2</sub>O<br>• Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + 3SO<sub>3</sub><sup>2&minus;</sup> + 8H<sup>+</sup> &rarr; 2Cr<sup>3+</sup> + 3SO<sub>4</sub><sup>2&minus;</sup> + 4H<sub>2</sub>O."
        },
        {
            front: "Zapisz równania połówkowe redukcji fioletowych jonów MnO<sub>4</sub><sup>&minus;</sup> (+VII) w środowisku: 1) kwasowym, 2) obojętnym, 3) silnie zasadowym wraz z barwami produktów.",
            back: "1) Kwasowe (+II, odbarwienie/bladoróżowy): MnO<sub>4</sub><sup>&minus;</sup> + 8H<sup>+</sup> + 5e<sup>&minus;</sup> &rarr; Mn<sup>2+</sup> + 4H<sub>2</sub>O<br>2) Obojętne (+IV, brunatny osad): MnO<sub>4</sub><sup>&minus;</sup> + 2H<sub>2</sub>O + 3e<sup>&minus;</sup> &rarr; MnO<sub>2</sub>&darr; + 4OH<sup>&minus;</sup><br>3) Silnie zasadowe (+VI, zielony roztwór): MnO<sub>4</sub><sup>&minus;</sup> + 1e<sup>&minus;</sup> &rarr; MnO<sub>4</sub><sup>2&minus;</sup>."
        },
        {
            front: "Zapisz skrócone jonowe równania reakcji KMnO<sub>4</sub> z Na<sub>2</sub>SO<sub>3</sub> w środowisku: 1) kwasowym (H<sub>2</sub>SO<sub>4</sub>), 2) obojętnym (H<sub>2</sub>O), 3) silnie zasadowym (KOH).",
            back: "1) Kwasowe: 2MnO<sub>4</sub><sup>&minus;</sup> + 5SO<sub>3</sub><sup>2&minus;</sup> + 6H<sup>+</sup> &rarr; 2Mn<sup>2+</sup> + 5SO<sub>4</sub><sup>2&minus;</sup> + 3H<sub>2</sub>O<br>2) Obojętne: 2MnO<sub>4</sub><sup>&minus;</sup> + 3SO<sub>3</sub><sup>2&minus;</sup> + H<sub>2</sub>O &rarr; 2MnO<sub>2</sub>&darr; + 3SO<sub>4</sub><sup>2&minus;</sup> + 2OH<sup>&minus;</sup><br>3) Zasadowe: 2MnO<sub>4</sub><sup>&minus;</sup> + SO<sub>3</sub><sup>2&minus;</sup> + 2OH<sup>&minus;</sup> &rarr; 2MnO<sub>4</sub><sup>2&minus;</sup> + SO<sub>4</sub><sup>2&minus;</sup> + H<sub>2</sub>O."
        },
        {
            front: "Co dzieje się po zakwaszeniu zielonego roztworu manganianu(VI) potasu (K<sub>2</sub>MnO<sub>4</sub>)? Zapisz równanie reakcji.",
            back: "Jony MnO<sub>4</sub><sup>2&minus;</sup> (+VI) są trwałe tylko w środowisku silnie zasadowym; po zakwaszeniu ulegają samorzutnemu dysproporcjonowaniu do fioletowego MnO<sub>4</sub><sup>&minus;</sup> (+VII) i brunatnego osadu MnO<sub>2</sub>&darr; (+IV):<br>3MnO<sub>4</sub><sup>2&minus;</sup> + 4H<sup>+</sup> &rarr; 2MnO<sub>4</sub><sup>&minus;</sup> + MnO<sub>2</sub>&darr; + 2H<sub>2</sub>O."
        },
        {
            front: "Jak w laboratorium wykrywa się kationy żelaza(III) (Fe<sup>3+</sup>) i jaka jest obserwacja?",
            back: "Za pomocą rodanku potasu lub amonu (KSCN / NH<sub>4</sub>SCN). W obecności jonów Fe<sup>3+</sup> powstaje roztwór o intensywnym, <strong>krwistoczerwonym zabarwieniu</strong> (tworzą się jony kompleksowe, np. [Fe(SCN)]<sup>2+</sup>)."
        },
        {
            front: "Co dzieje się podczas reakcji jonów miedzi(II) (Cu<sup>2+</sup>) z jonami jodkowymi (I<sup>&minus;</sup>), np. po zmieszaniu roztworów CuSO<sub>4</sub> i KI?",
            back: "Jodek miedzi(II) (CuI<sub>2</sub>) jest nietrwały i ulega natychmiastowemu utlenianiu-redukcji – wytrąca się biały osad jodku miedzi(I) (CuI&darr;), a roztwór brunatnieje od wydzielonego jodu (I<sub>2</sub>):<br><strong>2Cu<sup>2+</sup> + 4I<sup>&minus;</sup> &rarr; 2CuI&darr; + I<sub>2</sub></strong>."
        },
        {
            front: "Co to jest patyna (malachit) na powierzchni miedzi, a dlaczego srebro czernieje na powietrzu?",
            back: "• Patyna na miedzi to zielony hydroksowęglan miedzi(II): 2Cu + O<sub>2</sub> + CO<sub>2</sub> + H<sub>2</sub>O &rarr; [Cu(OH)]<sub>2</sub>CO<sub>3</sub>.<br>• Czernienie srebra wynika z reakcji Ag ze śladami H<sub>2</sub>S i tlenem z powietrza, dającej czarny nalot siarczku srebra(I): 4Ag + 2H<sub>2</sub>S + O<sub>2</sub> &rarr; 2Ag<sub>2</sub>S&darr; + 2H<sub>2</sub>O."
        },
        {
            front: "Porównaj rozpuszczalność i barwę halogenków srebra(I): AgF, AgCl, AgBr oraz AgI (w wodzie oraz w wodzie amoniakalnej).",
            back: "• AgF: dobrze rozpuszczalny w wodzie (bezbarwny roztwór)!<br>• AgCl&darr;: biały, serowaty osad (rozpuszcza się łatwo w NH<sub>3(aq)</sub> do [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>).<br>• AgBr&darr;: kremowy/żółtawy osad (trudno rozpuszczalny w NH<sub>3(aq)</sub>).<br>• AgI&darr;: żółty osad (praktycznie nierozpuszczalny w NH<sub>3(aq)</sub>!)."
        },
        {
            front: "ZADANIE: Do utlenienia próbki FeSO<sub>4</sub> (M = 152 g/mol) w środowisku H<sub>2</sub>SO<sub>4</sub> zużyto 25,0 cm<sup>3</sup> roztworu KMnO<sub>4</sub> o stężeniu 0,040 mol/dm<sup>3</sup>. Oblicz masę FeSO<sub>4</sub> w próbce.",
            back: "1. Równanie: MnO<sub>4</sub><sup>&minus;</sup> + 5Fe<sup>2+</sup> + 8H<sup>+</sup> &rarr; Mn<sup>2+</sup> + 5Fe<sup>3+</sup> + 4H<sub>2</sub>O.<br>2. n(MnO<sub>4</sub><sup>&minus;</sup>) = 0,040 &middot; 0,0250 = 0,00100 mol.<br>3. n(FeSO<sub>4</sub>) = 5 &middot; 0,00100 = 0,00500 mol &rArr; m = 0,00500 &middot; 152 = <strong>0,760 g FeSO<sub>4</sub></strong>."
        },
        {
            front: "ZADANIE: Płytkę kadmową (M<sub>Cd</sub> = 112,4 g/mol) o masie 20,00 g zanurzono w roztworze AgNO<sub>3</sub> (M<sub>Ag</sub> = 107,9 g/mol). Po wyjęciu masa płytki wynosiła 22,07 g. Ile gramów Cd przeszło do roztworu?",
            back: "1. Reakcja: Cd + 2Ag<sup>+</sup> &rarr; Cd<sup>2+</sup> + 2Ag&darr;. Na 1 mol (112,4 g) roztworzonego Cd osadzają się 2 mole (215,8 g) Ag, więc masa płytki rośnie o &Delta;m<sub>mol</sub> = 215,8 &minus; 112,4 = 103,4 g/mol.<br>2. Rzeczywisty przyrost &Delta;m = 22,07 &minus; 20,00 = 2,07 g &rArr; n<sub>Cd</sub> = 2,07 / 103,4 = 0,0200 mol.<br>3. Masa Cd = 0,0200 &middot; 112,4 = <strong>2,25 g Cd</strong>."
        },
        {
            front: "Jak doświadczalnie odróżnić wiórki glinu (Al) od wiórków cynku (Zn)? Podaj 2 niezależne metody.",
            back: "1) Zimny stężony HNO<sub>3</sub> (lub stężony H<sub>2</sub>SO<sub>4</sub>): glin ulega pasywacji (brak reakcji), a cynk roztwarza się z wydzieleniem brunatnego NO<sub>2</sub>&uarr;.<br>2) Nadmiar wody amoniakalnej NH<sub>3(aq)</sub> dodany do soli Al<sup>3+</sup> i Zn<sup>2+</sup>: biały osad Al(OH)<sub>3</sub>&darr; nie roztwarza się w nadmiarze NH<sub>3(aq)</sub>, a Zn(OH)<sub>2</sub>&darr; roztwarza się do [Zn(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>."
        },
        {
            front: "W czterech probówkach znajdują się metale: Na, Mg, Al, Cu. Jak zachowują się one wobec zimnej wody oraz wodnego roztworu KOH?",
            back: "• Z zimną wodą reaguje gwałtownie tylko sód (Na).<br>• Z roztworem KOH reagują: sód (z wodą) oraz glin (Al &rarr; [Al(OH)<sub>4</sub>]<sup>&minus;</sup> + H<sub>2</sub>&uarr;).<br>• Magnez (Mg) i miedź (Cu) nie reagują ani z zimną wodą, ani z roztworem KOH (rozróżnia je HCl, w którym roztwarza się tylko Mg, oraz czerwona barwa Cu)."
        }
    ]
};