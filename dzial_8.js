// Dział VIII. Reakcje utleniania i redukcji (Indeks 7 na liście)
appData[7] = {
    notatki: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">📚 KOMPENDIUM MATURALNE: REAKCJE UTLENIANIA I REDUKCJI (REDOKS)</h2>

        <!-- SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Stopień Utlenienia – Definicja, Reguły i Pułapki Maturalne</h3>
            <p><strong>Definicja i sens fizyczny:</strong> Stopień utlenienia to umowne pojęcie określające liczbę dodatnich lub ujemnych ładunków elementarnych, jakie miałby atom danego pierwiastka chemicznego, gdyby wszystkie wiązania chemiczne w cząsteczce lub jonie miały charakter czysto jonowy. Wartości stopni utlenienia oznacza się <strong>cyframi rzymskimi</strong> i zapisuje nad symbolami pierwiastków chemicznych lub w indeksie górnym po prawej stronie symbolu.</p>

            <h4>Zestawienie reguł wyznaczania stopni utlenienia</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Przypadek / Pierwiastek</th>
                            <th>Stopień utlenienia</th>
                            <th>Przykłady i wyjątki maturalne</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Pierwiastki w stanie wolnym</strong></td>
                            <td>Zawsze <strong>0</strong></td>
                            <td>Na<sup>0</sup>, Mg<sup>0</sup>, Al<sup>0</sup>, C<sup>0</sup>, H<sub>2</sub><sup>0</sup>, O<sub>2</sub><sup>0</sup>, Cl<sub>2</sub><sup>0</sup>, P<sub>4</sub><sup>0</sup>, S<sub>8</sub><sup>0</sup> (niezależnie od liczby połączonych atomów w cząsteczce homoatomowej).</td>
                        </tr>
                        <tr>
                            <td><strong>Litowce (1. grupa) w związkach</strong></td>
                            <td>Zawsze <strong>+I</strong></td>
                            <td>NaCl, KBr, KMnO<sub>4</sub>, Na<sub>2</sub>SO<sub>4</sub>.</td>
                        </tr>
                        <tr>
                            <td><strong>Berylowce (2. grupa) w związkach</strong></td>
                            <td>Zawsze <strong>+II</strong></td>
                            <td>MgO, CaCl<sub>2</sub>, Mg(NO<sub>3</sub>)<sub>2</sub>.</td>
                        </tr>
                        <tr>
                            <td><strong>Glin (Al) i cynk (Zn) w związkach</strong></td>
                            <td>Stały (Al: <strong>+III</strong>, Zn: <strong>+II</strong>)</td>
                            <td>Metale te występują we wszystkich swoich związkach chemicznych tylko na jednym stopniu utlenienia (np. Al<sub>2</sub>S<sub>3</sub>, ZnSO<sub>4</sub>).</td>
                        </tr>
                        <tr>
                            <td><strong>Fluor (F) w związkach</strong></td>
                            <td>Zawsze <strong>&minus;I</strong></td>
                            <td>HF, CF<sub>4</sub>, OF<sub>2</sub> (jako najbardziej elektroujemny pierwiastek nie przyjmuje dodatnich stopni utlenienia).</td>
                        </tr>
                        <tr>
                            <td><strong>Wodór (H) w związkach</strong></td>
                            <td>Zazwyczaj <strong>+I</strong></td>
                            <td>W związkach z niemetalami, kwasach i zasadach: H<sub>2</sub>O, CH<sub>4</sub>, NH<sub>3</sub>, HCl, H<sub>2</sub>SO<sub>4</sub>.<br><strong>Wyjątek:</strong> w wodorkach metali przyjmuje stopień <strong>&minus;I</strong> (np. NaH, CaH<sub>2</sub>, LiH).</td>
                        </tr>
                        <tr>
                            <td><strong>Tlen (O) w związkach</strong></td>
                            <td>Zazwyczaj <strong>&minus;II</strong></td>
                            <td>W większości związków: H<sub>2</sub>O, Ca(OH)<sub>2</sub>, SO<sub>2</sub>, HNO<sub>3</sub>.<br><strong>Wyjątki:</strong> w nadtlenkach wynosi <strong>&minus;I</strong> (np. H<sub>2</sub>O<sub>2</sub>), w ponadtlenkach przyjmuje ułamkowy stopień (np. KO<sub>2</sub>), a we fluorku tlenu OF<sub>2</sub> wynosi <strong>+II</strong>.</td>
                        </tr>
                        <tr>
                            <td><strong>Jony proste (monoatomowe)</strong></td>
                            <td>Równy ładunkowi jonu</td>
                            <td>W Fe<sup>2+</sup> wynosi <strong>+II</strong>, w Fe<sup>3+</sup> wynosi <strong>+III</strong>, w Cl<sup>&minus;</sup> wynosi <strong>&minus;I</strong>, w S<sup>2&minus;</sup> wynosi <strong>&minus;II</strong>.</td>
                        </tr>
                        <tr>
                            <td><strong>Obojętna cząsteczka związku</strong></td>
                            <td>Suma stopni = <strong>0</strong></td>
                            <td>W HNO<sub>3</sub>: I + V + 3&middot;(&minus;II) = 0;<br>w H<sub>3</sub>PO<sub>4</sub>: 3&middot;I + V + 4&middot;(&minus;II) = 0.</td>
                        </tr>
                        <tr>
                            <td><strong>Jon złożony (wieloatomowy)</strong></td>
                            <td>Suma stopni = <strong>ładunek jonu</strong></td>
                            <td>W SO<sub>4</sub><sup>2&minus;</sup>: VI + 4&middot;(&minus;II) = &minus;II;<br>w PO<sub>4</sub><sup>3&minus;</sup>: V + 4&middot;(&minus;II) = &minus;III;<br>w MnO<sub>4</sub><sup>&minus;</sup>: VII + 4&middot;(&minus;II) = &minus;I.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>Przewidywanie skrajnych stopni utlenienia z konfiguracji elektronowej</h4>
            <ul class="note-list">
                <li><strong>Maksymalny (najwyższy) stopień utlenienia:</strong> odpowiada maksymalnej liczbie elektronów walencyjnych, jaką atom może oddać, aby uzyskać trwałą konfigurację elektronową gazu szlachetnego (lub powłoki niższego rzędu).</li>
                <li><strong>Minimalny (najniższy) stopień utlenienia niemetalu:</strong> odpowiada maksymalnej liczbie elektronów, jaką atom może pobrać, aby dopełnić powłokę walencyjną do oktetu (lub dubletu).</li>
                <li><strong>Minimalny (najniższy) stopień utlenienia metalu:</strong> wynosi zawsze <strong>0</strong>, ponieważ atomy metali nie mogą przyjmować elektronów i w związkach występują wyłącznie na dodatnich stopniach utlenienia.</li>
            </ul>
            <p><strong>Przykłady zastosowania konfiguracji elektronowej:</strong></p>
            <ol class="note-list">
                <li><strong>Siarka (S, Z = 16):</strong> Konfiguracja 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup> (6 e<sup>&minus;</sup> walencyjnych). Może pobrać 2 e<sup>&minus;</sup> (konfiguracja argonu) &rarr; najniższy stopień to <strong>&minus;II</strong> (np. H<sub>2</sub>S). Może oddać wszystkie 6 e<sup>&minus;</sup> walencyjnych (konfiguracja neonu) &rarr; najwyższy stopień wynosi <strong>+VI</strong> (np. SO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub>).</li>
                <li><strong>Azot (N, Z = 7):</strong> Posiada 5 e<sup>&minus;</sup> walencyjnych, więc może pobrać maks. 3 e<sup>&minus;</sup> (stopień <strong>&minus;III</strong>, np. NH<sub>3</sub>, C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>) lub oddać 5 e<sup>&minus;</sup> (stopień <strong>+V</strong>, np. HNO<sub>3</sub>).</li>
                <li><strong>Magnez (Mg, Z = 12):</strong> Konfiguracja 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>. Jako metal nie pobiera elektronów (minimalny stopień to <strong>0</strong>), a oddając 2 e<sup>&minus;</sup> walencyjne, osiąga maksymalny stopień <strong>+II</strong>.</li>
            </ol>

            <div class="note-alert danger">
                ⚠️ <strong>Uwaga maturalna – nietypowe związki i pułapki w wyznaczaniu stopni utlenienia:</strong>
                <ul class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li><strong>Piryt (disiarczek żelaza(II), FeS<sub>2</sub>):</strong> Żelazo występuje tu na <strong>+II</strong> stopniu utlenienia, natomiast dwa atomy siarki tworzą anion disiarczkowy S<sub>2</sub><sup>2&minus;</sup>, w którym każdy atom siarki ma stopień utlenienia <strong>&minus;I</strong> (a nie &minus;II!).</li>
                    <li><strong>Magnetyt (tlenek żelaza(II,III), Fe<sub>3</sub>O<sub>4</sub>):</strong> Związek mieszany, w którym ten sam pierwiastek występuje jednocześnie na dwóch różnych stopniach utlenienia – na jeden atom żelaza na stopniu <strong>+II</strong> (FeO) przypadają dwa atomy żelaza na stopniu <strong>+III</strong> (Fe<sub>2</sub>O<sub>3</sub>).</li>
                    <li><strong>Związki organiczne i nitrowe:</strong> Stopnie utlenienia wyznacza się z uwzględnieniem polaryzacji wiązań lub ładunków grup funkcyjnych. W nitrobenzenie (C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub>) atom azotu w grupie &minus;NO<sub>2</sub> ma stopień <strong>+III</strong>, natomiast w powstałej z niego anilinie (C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>) atom azotu w grupie &minus;NH<sub>2</sub> ma stopień <strong>&minus;III</strong>. W aldehydzie octowym (CH<sub>3</sub>CHO) atom węgla grupy aldehydowej ma stopień <strong>+I</strong>, a po utlenieniu do jonu octanowego (CH<sub>3</sub>COO<sup>&minus;</sup>) podwyższa go do <strong>+III</strong>.</li>
                </ul>
            </div>
        </div>

        <!-- SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Procesy Utleniania i Redukcji – Pojęcia, Utleniacze i Reduktory</h3>
            <p><strong>Reakcje utleniania-redukcji (redoks)</strong> to przemiany chemiczne, którym towarzyszy zmiana stopni utlenienia atomów pierwiastków wchodzących w skład substratów i produktów. Procesy utleniania i redukcji są ze sobą ściśle sprzężone i zachodzą zawsze równocześnie.</p>
            <ul class="note-list">
                <li><strong>Utlenianie (oksydacja):</strong> Proces oddawania (utraty) elektronów przez drobinę (atom, cząsteczkę lub jon), czego skutkiem jest <strong>podwyższenie stopnia utlenienia</strong> pierwiastka. W równaniu połówkowym utracone elektrony zapisuje się po prawej stronie (po stronie produktów), np. Zn<sup>0</sup> &rarr; Zn<sup>2+</sup> + 2e<sup>&minus;</sup>.</li>
                <li><strong>Redukcja:</strong> Proces pobierania (przyjmowania) elektronów przez drobinę, czego skutkiem jest <strong>obniżenie stopnia utlenienia</strong> pierwiastka. W równaniu połówkowym pobrane elektrony zapisuje się po lewej stronie (po stronie substratów), np. 2H<sup>+</sup> + 2e<sup>&minus;</sup> &rarr; H<sub>2</sub><sup>0</sup>.</li>
                <li><strong>Reduktor:</strong> Pierwiastek, związek chemiczny lub jon, którego atomy oddają elektrony i podwyższają swój stopień utlenienia. Reduktor powoduje redukcję drugiego reagenta, a <strong>sam ulega utlenieniu</strong>.</li>
                <li><strong>Utleniacz:</strong> Pierwiastek, związek chemiczny lub jon, którego atomy pobierają elektrony i obniżają swój stopień utlenienia. Utleniacz powoduje utlenienie drugiego reagenta, a <strong>sam ulega redukcji</strong>.</li>
            </ul>
            <p><strong>Jak rozpoznać, czy reakcja jest reakcją redoks?</strong> Nie każda reakcja chemiczna jest procesem redoks. Reakcje zobojętniania (np. 2KOH + H<sub>2</sub>SO<sub>4</sub> &rarr; K<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>O), strącania osadów czy wymiany podwójnej bez zmiany stopni utlenienia nie są reakcjami utleniania-redukcji.</p>

            <h4>Klasyfikacja substancji pod kątem właściwości redoksowych</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Rola w reakcji</th>
                            <th>Warunek dotyczący stopnia utlenienia</th>
                            <th>Najważniejsze przykłady na maturze</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Wyłącznie reduktor</strong></td>
                            <td>Atom pierwiastka występuje na swoim <strong>najniższym możliwym stopniu utlenienia</strong> (może go tylko podwyższyć, oddając elektrony).</td>
                            <td>• Metale w stanie wolnym (zwłaszcza aktywne: K, Na, Ca, Mg, Al, Zn, Fe)<br>• Kwas siarkowodorowy i siarczki: H<sub>2</sub>S, S<sup>2&minus;</sup> (S<sup>&minus;II</sup>)<br>• Amoniak i sole amonowe: NH<sub>3</sub>, NH<sub>4</sub><sup>+</sup> (N<sup>&minus;III</sup>)<br>• Jodki i bromki: I<sup>&minus;</sup>, Br<sup>&minus;</sup> (np. KI, HBr, HI)</td>
                        </tr>
                        <tr>
                            <td><strong>Wyłącznie utleniacz</strong></td>
                            <td>Atom pierwiastka występuje na swoim <strong>najwyższym możliwym stopniu utlenienia</strong> (może go tylko obniżyć, przyjmując elektrony) lub jest fluorem F<sub>2</sub>.</td>
                            <td>• Manganian(VII) potasu: KMnO<sub>4</sub> (Mn<sup>+VII</sup>)<br>• Dichromian(VI) i chromian(VI) potasu: K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, K<sub>2</sub>CrO<sub>4</sub> (Cr<sup>+VI</sup>)<br>• Kwas azotowy(V): HNO<sub>3</sub> (N<sup>+V</sup>)<br>• Stężony kwas siarkowy(VI): H<sub>2</sub>SO<sub>4</sub> (S<sup>+VI</sup>)<br>• Kwas chlorowy(VII): HClO<sub>4</sub> (Cl<sup>+VII</sup>)<br>• Tlenek ołowiu(IV): PbO<sub>2</sub> (Pb<sup>+IV</sup>)<br>• Kationy metali na maksymalnym stopniu utlenienia: Fe<sup>3+</sup>, Au<sup>3+</sup>, Ag<sup>+</sup>, Bi<sup>3+</sup></td>
                        </tr>
                        <tr>
                            <td><strong>Zarówno utleniacz, jak i reduktor (dualizm)</strong></td>
                            <td>Atom pierwiastka występuje na <strong>pośrednim stopniu utlenienia</strong> (może zarówno oddać, jak i przyjąć elektrony w zależności od partnera reakcji).</td>
                            <td>• Nadtlenek wodoru: H<sub>2</sub>O<sub>2</sub> (O<sup>&minus;I</sup>: redukuje się do O<sup>&minus;II</sup> w H<sub>2</sub>O/OH<sup>&minus;</sup> lub utlenia do O<sub>2</sub><sup>0</sup>)<br>• Tlenek siarki(IV) i siarczany(IV): SO<sub>2</sub>, H<sub>2</sub>SO<sub>3</sub>, SO<sub>3</sub><sup>2&minus;</sup> (S<sup>+IV</sup>)<br>• Kwas azotowy(III) i azotany(III): HNO<sub>2</sub>, NO<sub>2</sub><sup>&minus;</sup> (N<sup>+III</sup>)<br>• Kwas chlorowy(V) i chlorany(V): HClO<sub>3</sub>, KClO<sub>3</sub> (Cl<sup>+V</sup>)<br>• Niemetale w stanie wolnym: S<sup>0</sup>, Cl<sub>2</sub><sup>0</sup>, Br<sub>2</sub><sup>0</sup>, I<sub>2</sub><sup>0</sup>, C<sup>0</sup><br>• Tlenek węgla(II) CO (C<sup>+II</sup>) oraz kationy Fe<sup>2+</sup>, Sn<sup>2+</sup>, Mn<sup>2+</sup></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Bilansowanie Reakcji Redoks – Algorytmy i Trudne Przykłady Maturalne</h3>
            <p>Podstawą bilansowania każdej reakcji redoks jest zasada, że <strong>liczba elektronów pobranych przez utleniacz musi być równa liczbie elektronów oddanych przez reduktor</strong>. Poprawnie uzgodnione równanie musi jednocześnie spełniać <strong>prawo zachowania masy</strong> oraz <strong>prawo zachowania ładunku elektrycznego</strong>.</p>

            <h4>Metoda bilansu jonowo-elektronowego w roztworach wodnych – reguły środowiskowe</h4>
            <p>W równaniach połówkowych zapisuje się wzory całych, rzeczywiście istniejących w roztworze jonów lub cząsteczek (jony proste, oksoaniony, hydroksokompleksy, trudno rozpuszczalne tlenki i wodorotlenki):</p>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Środowisko reakcji</th>
                            <th>Dopuszczalne drobiny pomocnicze</th>
                            <th>Algorytm wyrównywania atomów tlenu (O) i wodoru (H) w równaniach połówkowych</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Kwasowe<br>(H<sup>+</sup> / H<sub>3</sub>O<sup>+</sup>)</strong></td>
                            <td>H<sup>+</sup> (lub H<sub>3</sub>O<sup>+</sup>) oraz H<sub>2</sub>O</td>
                            <td>1. Po stronie, po której brakuje atomów tlenu, dopisz odpowiednią liczbę cząsteczek H<sub>2</sub>O.<br>2. Po stronie przeciwnej (gdzie brakuje atomów wodoru), dopisz odpowiednią liczbę jonów H<sup>+</sup> (lub jonów oksoniowych H<sub>3</sub>O<sup>+</sup>).</td>
                        </tr>
                        <tr>
                            <td><strong>Zasadowe<br>(OH<sup>&minus;</sup>)</strong></td>
                            <td>OH<sup>&minus;</sup> oraz H<sub>2</sub>O<br><em>(zakaz używania H<sup>+</sup>!)</em></td>
                            <td>1. Gdy drobina traci tlen (np. MnO<sub>4</sub><sup>&minus;</sup> &rarr; MnO<sub>2</sub>), po stronie substratów dopisz H<sub>2</sub>O, a po stronie produktów dwa razy więcej jonów OH<sup>&minus;</sup>.<br>2. Gdy drobina zyskuje tlen lub grupy &minus;OH (np. Cr(OH)<sub>3</sub> &rarr; CrO<sub>4</sub><sup>2&minus;</sup> lub [Sn(OH)<sub>3</sub>]<sup>&minus;</sup> &rarr; [Sn(OH)<sub>6</sub>]<sup>2&minus;</sup>), po stronie substratów dopisz jony OH<sup>&minus;</sup>, a po stronie produktów H<sub>2</sub>O.</td>
                        </tr>
                        <tr>
                            <td><strong>Obojętne<br>(H<sub>2</sub>O)</strong></td>
                            <td><strong>Substraty:</strong> tylko H<sub>2</sub>O<br><strong>Produkty:</strong> H<sub>3</sub>O<sup>+</sup> (H<sup>+</sup>) lub OH<sup>&minus;</sup></td>
                            <td>1. Po stronie substratów nie wolno dopisywać ani H<sub>3</sub>O<sup>+</sup>, ani OH<sup>&minus;</sup> – dopisuje się tam wyłącznie cząsteczki H<sub>2</sub>O.<br>2. Po stronie produktów wyrównuje się ładunek i atomy wodoru za pomocą jonów H<sub>3</sub>O<sup>+</sup> (H<sup>+</sup>) albo OH<sup>&minus;</sup>.<br>3. Jeśli po zsumowaniu równań połówkowych po prawej stronie wystąpią jednocześnie jony H<sub>3</sub>O<sup>+</sup> i OH<sup>&minus;</sup>, należy połączyć je w cząsteczki wody (H<sub>3</sub>O<sup>+</sup> + OH<sup>&minus;</sup> &rarr; 2H<sub>2</sub>O) i skrócić z wodą po lewej stronie.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>Schemat redukcji najważniejszych utleniaczy (MnO<sub>4</sub><sup>&minus;</sup> i Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup>)</h4>
            <ul class="note-list">
                <li><strong>Środowisko kwasowe (pH &lt; 7):</strong>
                    <div class="chem-eq">MnO<sub>4</sub><sup>&minus;</sup> <em>(fioletowy)</em> + 8 H<sup>+</sup> + 5 e<sup>&minus;</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> Mn<sup>2+</sup> <em>(bezbarwny/bladoróżowy)</em> + 4 H<sub>2</sub>O</div>
                    <div class="chem-eq"><em>(lub z H<sub>3</sub>O<sup>+</sup>: MnO<sub>4</sub><sup>&minus;</sup> + 8 H<sub>3</sub>O<sup>+</sup> + 5 e<sup>&minus;</sup> &rarr; Mn<sup>2+</sup> + 12 H<sub>2</sub>O)</em></div>
                    <div class="chem-eq">Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> <em>(pomarańczowy)</em> + 14 H<sup>+</sup> + 6 e<sup>&minus;</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> 2 Cr<sup>3+</sup> <em>(zielony)</em> + 7 H<sub>2</sub>O</div>
                    <div class="chem-eq"><em>(lub z H<sub>3</sub>O<sup>+</sup>: Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + 14 H<sub>3</sub>O<sup>+</sup> + 6 e<sup>&minus;</sup> &rarr; 2 Cr<sup>3+</sup> + 21 H<sub>2</sub>O)</em></div>
                </li>
                <li><strong>Środowisko obojętne (pH &approx; 7) lub słabo zasadowe:</strong>
                    <div class="chem-eq">MnO<sub>4</sub><sup>&minus;</sup> <em>(fioletowy)</em> + 2 H<sub>2</sub>O + 3 e<sup>&minus;</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> MnO<sub>2</sub>&darr; <em>(brunatny osad)</em> + 4 OH<sup>&minus;</sup></div>
                </li>
            </ul>

            <h4>Przykłady krok po kroku – od klasycznych do najtrudniejszych zadań maturalnych</h4>

            <p><strong>Przykład 1 (2 pierwiastki utleniają się jednocześnie, a 1 redukuje): Prażenie pirytu (FeS<sub>2</sub>)</strong><br>
            W trakcie prażenia pirytu w tlenie powstają Fe<sub>2</sub>O<sub>3</sub> oraz SO<sub>2</sub>. Żelazo podwyższa stopień z +II na +III, siarka z &minus;I na +IV, natomiast tlen obniża z 0 na &minus;II. Ponieważ Fe i S tworzą jeden związek (FeS<sub>2</sub> jest w całości reduktorem), ich utlenianie rozpatrujemy łącznie w stosunku 1 : 2:</p>
            <ul class="note-list">
                <li><strong>Utlenianie (dla 1 cząsteczki FeS<sub>2</sub>):</strong> Fe<sup>II</sup> &rarr; Fe<sup>III</sup> + 1e<sup>&minus;</sup> oraz 2S<sup>&minus;I</sup> &rarr; 2S<sup>IV</sup> + 10e<sup>&minus;</sup> &rArr; sumarycznie: Fe<sup>II</sup>S<sub>2</sub><sup>&minus;I</sup> &rarr; Fe<sup>III</sup> + 2S<sup>IV</sup> + 11e<sup>&minus;</sup> &nbsp;|&middot;4</li>
                <li><strong>Redukcja (dla cząsteczki O<sub>2</sub>):</strong> 2O<sup>0</sup> + 4e<sup>&minus;</sup> &rarr; 2O<sup>&minus;II</sup> &nbsp;|&middot;11</li>
                <li><strong>Zsumowanie bilansu (wymiana 44 e<sup>&minus;</sup>):</strong> 4Fe<sup>II</sup> + 8S<sup>&minus;I</sup> + 22O<sup>0</sup> + 44e<sup>&minus;</sup> &rarr; 4Fe<sup>III</sup> + 8S<sup>IV</sup> + 22O<sup>&minus;II</sup> + 44e<sup>&minus;</sup></li>
            </ul>
            <div class="chem-eq">
                4 FeS<sub>2</sub> + 11 O<sub>2</sub> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> 2 Fe<sub>2</sub>O<sub>3</sub> + 8 SO<sub>2</sub> &nbsp;&nbsp;<em>(Reduktor: FeS<sub>2</sub>; Utleniacz: O<sub>2</sub>)</em>
            </div>

            <p><strong>Przykład 2 (Środowisko kwasowe – chemia nieorganiczna): Utlenianie Fe<sup>2+</sup> za pomocą Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup></strong></p>
            <ul class="note-list">
                <li><strong>Redukcja:</strong> Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + 14 H<sub>3</sub>O<sup>+</sup> + 6 e<sup>&minus;</sup> &rarr; 2 Cr<sup>3+</sup> + 21 H<sub>2</sub>O &nbsp;|&middot;1</li>
                <li><strong>Utlenianie:</strong> Fe<sup>2+</sup> &rarr; Fe<sup>3+</sup> + 1 e<sup>&minus;</sup> &nbsp;|&middot;6</li>
            </ul>
            <div class="chem-eq">
                Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + 6 Fe<sup>2+</sup> + 14 H<sub>3</sub>O<sup>+</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> 2 Cr<sup>3+</sup> + 6 Fe<sup>3+</sup> + 21 H<sub>2</sub>O
            </div>
            <p><em>(W zapisie uproszczonym z H<sup>+</sup>: Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + 6 Fe<sup>2+</sup> + 14 H<sup>+</sup> &rarr; 2 Cr<sup>3+</sup> + 6 Fe<sup>3+</sup> + 7 H<sub>2</sub>O).</em></p>

            <p><strong>Przykład 3 (Środowisko kwasowe – chemia organiczna): Redukcja nitrobenzenu do aniliny za pomocą Sn<sup>2+</sup></strong><br>
            Azot w C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub> ma stopień +III, a w C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> stopień &minus;III (pobiera 6e<sup>&minus;</sup>). Cyna zmienia stopień z +II na +IV (oddaje 2e<sup>&minus;</sup>):</p>
            <ul class="note-list">
                <li><strong>Redukcja:</strong> C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub> + 6 H<sub>3</sub>O<sup>+</sup> + 6 e<sup>&minus;</sup> &rarr; C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + 8 H<sub>2</sub>O &nbsp;|&middot;1</li>
                <li><strong>Utlenianie:</strong> Sn<sup>2+</sup> &rarr; Sn<sup>4+</sup> + 2 e<sup>&minus;</sup> &nbsp;|&middot;3</li>
            </ul>
            <div class="chem-eq">
                C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub> + 3 Sn<sup>2+</sup> + 6 H<sub>3</sub>O<sup>+</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + 3 Sn<sup>4+</sup> + 8 H<sub>2</sub>O
            </div>

            <p><strong>Przykład 4 (Środowisko zasadowe): Utlenianie Cr(OH)<sub>3</sub> nadtlenkiem wodoru H<sub>2</sub>O<sub>2</sub> wobec KOH</strong><br>
            Chrom w trudno rozpuszczalnym Cr(OH)<sub>3</sub> (zapis cząsteczkowy!) utlenia się z +III do +VI w jonie CrO<sub>4</sub><sup>2&minus;</sup>. Tlen w H<sub>2</sub>O<sub>2</sub> redukuje się z &minus;I do &minus;II w jonach OH<sup>&minus;</sup>:</p>
            <ul class="note-list">
                <li><strong>Utlenianie:</strong> Cr(OH)<sub>3</sub> + 5 OH<sup>&minus;</sup> &rarr; CrO<sub>4</sub><sup>2&minus;</sup> + 4 H<sub>2</sub>O + 3 e<sup>&minus;</sup> &nbsp;|&middot;2</li>
                <li><strong>Redukcja:</strong> H<sub>2</sub>O<sub>2</sub> + 2 e<sup>&minus;</sup> &rarr; 2 OH<sup>&minus;</sup> &nbsp;|&middot;3</li>
            </ul>
            <div class="chem-eq">
                2 Cr(OH)<sub>3</sub> + 3 H<sub>2</sub>O<sub>2</sub> + 4 OH<sup>&minus;</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> 2 CrO<sub>4</sub><sup>2&minus;</sup> + 8 H<sub>2</sub>O
            </div>
            <div class="chem-eq">
                2 Cr(OH)<sub>3</sub> + 3 H<sub>2</sub>O<sub>2</sub> + 4 KOH <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> 2 K<sub>2</sub>CrO<sub>4</sub> + 8 H<sub>2</sub>O &nbsp;&nbsp;<em>(Reduktor: Cr(OH)<sub>3</sub>; Utleniacz: H<sub>2</sub>O<sub>2</sub>)</em>
            </div>

            <p><strong>Przykład 5 (Środowisko zasadowe – związki kompleksowe): Reakcja K[Sn(OH)<sub>3</sub>] z BiCl<sub>3</sub> i KOH</strong></p>
            <ul class="note-list">
                <li><strong>Utlenianie:</strong> [Sn(OH)<sub>3</sub>]<sup>&minus;</sup> + 3 OH<sup>&minus;</sup> &rarr; [Sn(OH)<sub>6</sub>]<sup>2&minus;</sup> + 2 e<sup>&minus;</sup> &nbsp;|&middot;3</li>
                <li><strong>Redukcja:</strong> Bi<sup>3+</sup> + 3 e<sup>&minus;</sup> &rarr; Bi<sup>0</sup> &nbsp;|&middot;2</li>
            </ul>
            <div class="chem-eq">
                3 [Sn(OH)<sub>3</sub>]<sup>&minus;</sup> + 2 Bi<sup>3+</sup> + 9 OH<sup>&minus;</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> 3 [Sn(OH)<sub>6</sub>]<sup>2&minus;</sup> + 2 Bi&darr;
            </div>
            <div class="chem-eq">
                3 K[Sn(OH)<sub>3</sub>] + 2 BiCl<sub>3</sub> + 9 KOH <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> 3 K<sub>2</sub>[Sn(OH)<sub>6</sub>] + 2 Bi&darr; + 6 KCl
            </div>

            <p><strong>Przykład 6 (Środowisko obojętne – określanie wynikowego odczynu roztworu): Reakcja KMnO<sub>4</sub> z K<sub>2</sub>SO<sub>3</sub></strong></p>
            <ul class="note-list">
                <li><strong>Redukcja:</strong> MnO<sub>4</sub><sup>&minus;</sup> + 2 H<sub>2</sub>O + 3 e<sup>&minus;</sup> &rarr; MnO<sub>2</sub>&darr; + 4 OH<sup>&minus;</sup> &nbsp;|&middot;2</li>
                <li><strong>Utlenianie:</strong> SO<sub>3</sub><sup>2&minus;</sup> + 3 H<sub>2</sub>O &rarr; SO<sub>4</sub><sup>2&minus;</sup> + 2 H<sub>3</sub>O<sup>+</sup> + 2 e<sup>&minus;</sup> &nbsp;|&middot;3</li>
                <li><strong>Zobojętnienie jonów (6 H<sub>3</sub>O<sup>+</sup> + 6 OH<sup>&minus;</sup> &rarr; 12 H<sub>2</sub>O) i skrócenie wody:</strong></li>
            </ul>
            <div class="chem-eq">
                2 MnO<sub>4</sub><sup>&minus;</sup> + 3 SO<sub>3</sub><sup>2&minus;</sup> + H<sub>2</sub>O <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> 2 MnO<sub>2</sub>&darr; + 3 SO<sub>4</sub><sup>2&minus;</sup> + 2 OH<sup>&minus;</sup>
            </div>
            <div class="chem-obs">
                🔎 <strong>Wniosek maturalny:</strong> Obecność jonów OH<sup>&minus;</sup> po stronie produktów dowodzi, że po zakończeniu reakcji roztwór przyjmuje <strong>odczyn zasadowy</strong>.
            </div>

            <h4>Reakcje dysproporcjonowania (dysmutacji) vs. synproporcjonowania (komproporcjonowania)</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Cecha porównawcza</th>
                            <th>Reakcja dysproporcjonowania (dysmutacji)</th>
                            <th>Reakcja synproporcjonowania (komproporcjonowania)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Istota procesu</strong></td>
                            <td>Atomy tego samego pierwiastka z <strong>jednego (pośredniego, nietrwałego)</strong> stopnia utlenienia w substracie przechodzą na <strong>dwa różne stopnie utlenienia</strong> w produktach (jeden niższy, drugi wyższy).</td>
                            <td>Atomy tego samego pierwiastka z <strong>dwóch różnych stopni utlenienia</strong> w substratach przechodzą na <strong>jeden wspólny (pośredni, trwały)</strong> stopień utlenienia w produkcie.</td>
                        </tr>
                        <tr>
                            <td><strong>Funkcja utleniacza i reduktora</strong></td>
                            <td>Ta sama substancja pełni jednocześnie funkcję utleniacza i reduktora.</td>
                            <td>Związek na niższym stopniu utlenienia jest reduktorem, a związek na wyższym stopniu jest utleniaczem; ten sam produkt jest produktem utleniania i redukcji.</td>
                        </tr>
                        <tr>
                            <td><strong>Warunek konieczny</strong></td>
                            <td>Pierwiastek musi tworzyć związki na co najmniej trzech różnych stopniach utlenienia.</td>
                            <td>Pierwiastek musi tworzyć związki na co najmniej trzech różnych stopniach utlenienia.</td>
                        </tr>
                        <tr>
                            <td><strong>Przykład 1</strong></td>
                            <td>Rozkład termiczny chloranu(V) potasu:<br><strong>4 KClO<sub>3</sub> &rarr; 3 KClO<sub>4</sub> + KCl</strong><br>• Utlenianie: Cl<sup>V</sup> &rarr; Cl<sup>VII</sup> + 2e<sup>&minus;</sup> |&middot;3<br>• Redukcja: Cl<sup>V</sup> + 6e<sup>&minus;</sup> &rarr; Cl<sup>&minus;I</sup> |&middot;1</td>
                            <td>Reakcja H<sub>2</sub>S z SO<sub>2</sub>:<br><strong>2 H<sub>2</sub>S + SO<sub>2</sub> &rarr; 3 S + 2 H<sub>2</sub>O</strong><br>• Utlenianie: 2S<sup>&minus;II</sup> &rarr; 2S<sup>0</sup> + 4e<sup>&minus;</sup><br>• Redukcja: S<sup>IV</sup> + 4e<sup>&minus;</sup> &rarr; S<sup>0</sup></td>
                        </tr>
                        <tr>
                            <td><strong>Przykład 2</strong></td>
                            <td>Rozpuszczanie chloru w wodzie:<br><strong>Cl<sub>2</sub><sup>0</sup> + H<sub>2</sub>O &rarr; HCl + HClO</strong><br>• Redukcja: Cl<sup>0</sup> + 1e<sup>&minus;</sup> &rarr; Cl<sup>&minus;I</sup><br>• Utlenianie: Cl<sup>0</sup> &rarr; Cl<sup>I</sup> + 1e<sup>&minus;</sup></td>
                            <td>Otrzymywanie azotu z NH<sub>4</sub>Cl i NaNO<sub>2</sub>:<br><strong>NH<sub>4</sub>Cl + NaNO<sub>2</sub> &rarr; N<sub>2</sub><sup>0</sup> + NaCl + 2 H<sub>2</sub>O</strong><br>• Utlenianie: N<sup>&minus;III</sup> &rarr; N<sup>0</sup> + 3e<sup>&minus;</sup><br>• Redukcja: N<sup>III</sup> + 3e<sup>&minus;</sup> &rarr; N<sup>0</sup></td>
                        </tr>
                        <tr>
                            <td><strong>Przykład 3</strong></td>
                            <td>Rozkład H<sub>2</sub>O<sub>2</sub> lub HNO<sub>2</sub>:<br>• <strong>2 H<sub>2</sub>O<sub>2</sub> &rarr; 2 H<sub>2</sub>O + O<sub>2</sub></strong><br>• <strong>3 HNO<sub>2</sub> &rarr; HNO<sub>3</sub> + 2 NO + H<sub>2</sub>O</strong></td>
                            <td>Reakcja KMnO<sub>4</sub> z MnSO<sub>4</sub> w środowisku obojętnym:<br><strong>3 MnSO<sub>4</sub> + 2 KMnO<sub>4</sub> + 2 H<sub>2</sub>O &rarr; 5 MnO<sub>2</sub>&darr; + K<sub>2</sub>SO<sub>4</sub> + 2 H<sub>2</sub>SO<sub>4</sub></strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p><strong>Szczegółowy rozbiór synproporcjonowania KMnO<sub>4</sub> z MnSO<sub>4</sub> w środowisku obojętnym:</strong><br>
            MnSO<sub>4</sub> (Mn<sup>II</sup>) jest reduktorem, a KMnO<sub>4</sub> (Mn<sup>VII</sup>) utleniaczem; oba przechodzą w brunatny osad MnO<sub>2</sub> (Mn<sup>IV</sup>):</p>
            <ul class="note-list">
                <li><strong>Utlenianie:</strong> Mn<sup>2+</sup> + 6 H<sub>2</sub>O &rarr; MnO<sub>2</sub>&darr; + 2 e<sup>&minus;</sup> + 4 H<sub>3</sub>O<sup>+</sup> &nbsp;|&middot;3</li>
                <li><strong>Redukcja:</strong> MnO<sub>4</sub><sup>&minus;</sup> + 2 H<sub>2</sub>O + 3 e<sup>&minus;</sup> &rarr; MnO<sub>2</sub>&darr; + 4 OH<sup>&minus;</sup> &nbsp;|&middot;2</li>
                <li><strong>Sumowanie i zobojętnienie (8 H<sub>3</sub>O<sup>+</sup> + 8 OH<sup>&minus;</sup> &rarr; 16 H<sub>2</sub>O):</strong> 3 Mn<sup>2+</sup> + 2 MnO<sub>4</sub><sup>&minus;</sup> + 6 H<sub>2</sub>O &rarr; 5 MnO<sub>2</sub>&darr; + 4 H<sub>3</sub>O<sup>+</sup></li>
            </ul>
            <div class="chem-obs">
                🔎 <strong>Wniosek maturalny:</strong> Powstanie kwasu siarkowego(VI) (jonów H<sub>3</sub>O<sup>+</sup>) po stronie produktów oznacza, że po zajściu reakcji roztwór w probówce przyjmuje <strong>odczyn kwasowy</strong>.
            </div>
        </div>

        <!-- SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Szereg Aktywności Metali oraz Reakcje z Wodą, Kwasami i Solami</h3>
            <p><strong>Szereg aktywności chemicznej (szereg napięciowy) metali</strong> porządkuje metale według ich malejącej aktywności chemicznej, czyli malejącej zdolności do oddawania elektronów (Me &rarr; Me<sup>n+</sup> + ne<sup>&minus;</sup>) oraz rosnącej wartości standardowego potencjału elektrochemicznego półogniwa (E&deg;, wyrażonego w woltach V):</p>
            <div class="note-alert">
                <strong>Metale nieszlachetne (E&deg; &lt; 0 V – silniejsze reduktory niż H<sub>2</sub>):</strong><br>
                K, Na, Ca, Mg, Al, Mn, Zn, Cr, Fe, Cd, Co, Ni, Sn, Pb &gt; <strong>H<sub>2</sub></strong> &gt;<br>
                <strong>Metale szlachetne (E&deg; &gt; 0 V – słabe reduktory):</strong><br>
                Bi, Cu, Ag, Hg, Pt, Au
            </div>
            <ul class="note-list">
                <li>Im <strong>wyżej (bardziej na lewo)</strong> w szeregu znajduje się metal, tym ma niższą (bardziej ujemną) wartość potencjału E&deg;, łatwiej utlenia się do kationu, jest <strong>silniejszym reduktorem</strong>, a powstały z niego kation jest słabszym utleniaczem.</li>
                <li>Im <strong>niżej (bardziej na prawo)</strong> w szeregu znajduje się metal, tym ma wyższą (bardziej dodatnią) wartość potencjału E&deg;, jest mniej aktywny chemicznie (słaby reduktor), natomiast jego kation Me<sup>n+</sup> bardzo łatwo ulega redukcji, będąc <strong>silnym utleniaczem</strong>.</li>
            </ul>

            <h4>Reakcje metali z wodą – klasyfikacja warunków i obserwacji maturalnych</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Grupa metali</th>
                            <th>Zachowanie wobec wody i warunki reakcji</th>
                            <th>Równania reakcji i kluczowe obserwacje maturalne</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Litowce<br>(Li, Na, K)</strong></td>
                            <td>Reagują z <strong>zimną wodą</strong> niezwykle gwałtownie i błyskawicznie.</td>
                            <td><strong>2 Na + 2 H<sub>2</sub>O &rarr; 2 NaOH + H<sub>2</sub>&uarr;</strong><br>• <strong>Obserwacje:</strong> Li, Na, K są jedynymi metalami lżejszymi od wody – nie toną, lecz energicznie poruszają się po tafli wody, odbijając od ścianek naczynia; probówka silnie się nagrzewa (proces egzoenergetyczny), mieszanina intensywnie się pieni (wydzielanie H<sub>2</sub>), a metal błyskawicznie roztwarza się, dając klarowny roztwór zasady.</td>
                        </tr>
                        <tr>
                            <td><strong>Berylowce<br>(Ca, Mg, Sr, Ba – bez berylu!)</strong></td>
                            <td>Reagują z zimną wodą znacznie wolniej; ogrzanie wody zdecydowanie przyspiesza proces (nie trzeba pisać T nad strzałką).</td>
                            <td><strong>Mg + 2 H<sub>2</sub>O &rarr; Mg(OH)<sub>2</sub> + H<sub>2</sub>&uarr;</strong><br>• <strong>Obserwacje:</strong> Metale te początkowo toną w wodzie, a następnie na ich powierzchni pojawiają się pęcherzyki wydzielającego się bezbarwnego gazu (H<sub>2</sub>).</td>
                        </tr>
                        <tr>
                            <td><strong>Glin, cynk, żelazo<br>(Al, Zn, Fe)</strong></td>
                            <td><strong>Nie reagują z ciekłą wodą</strong> – ani zimną, ani nawet wrzącą (100&deg;C)! Reagują dopiero po silnym rozgrzaniu metalu z <strong>gorącą parą wodną</strong> (ok. 150&deg;C i wyżej).</td>
                            <td>• Al + H<sub>2</sub>O<sub>(ciecz)</sub> &rarr; <em>reakcja nie zachodzi</em><br>• <strong>2 Al + 6 H<sub>2</sub>O<sub>(para)</sub> &rarr; 2 Al(OH)<sub>3</sub> + 3 H<sub>2</sub>&uarr;</strong> <em>(ok. 150&deg;C)</em><br>• <strong>Obserwacje:</strong> Gorąca woda to nie to samo co gorąca para wodna; na rozgrzanej płytce aluminiowej w strumieniu pary wodnej pojawia się biały nalot nierozpuszczalnego ciała stałego Al(OH)<sub>3</sub>.</td>
                        </tr>
                        <tr>
                            <td><strong>Beryl (Be) oraz Mn, Cr, Cu, Ag, Au</strong></td>
                            <td><strong>Nie reagują z wodą w żadnych warunkach</strong> (ani z ciekłą wodą, ani z parą wodną).</td>
                            <td>• Beryl jako jedyny berylowiec nie reaguje z wodą.<br>• Większość metali bloku <em>d</em> (w tym Mn, Cr, Cu, Ag, Au) nie ulega reakcji z wodą.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>Reakcje metali z kwasami – kwasy nieutleniające, utleniające, pasywacja i woda królewska</h4>
            <p><strong>1. Kwasy nieutleniające (np. HCl, HBr, HI, H<sub>2</sub>S, rozcieńczony H<sub>2</sub>SO<sub>4</sub>, H<sub>3</sub>PO<sub>4</sub>, H<sub>2</sub>SO<sub>3</sub>, HCOOH, CH<sub>3</sub>COOH):</strong></p>
            <ul class="note-list">
                <li>Rolę utleniacza pełnią w nich wyłącznie kationy wodoru H<sup>+</sup> (H<sub>3</sub>O<sup>+</sup>), które redukują się do gazowego wodoru H<sub>2</sub>.</li>
                <li>Reagują wyłącznie z <strong>metalami nieszlachetnymi</strong> (nad wodorem, np. Na, K, Ca, Mg, Al, Zn, Fe, Mn, Cr), tworząc sól (z metalem na niższym stopniu utlenienia, np. Fe<sup>II</sup>, Cr<sup>II</sup>) oraz wodór:
                    <div class="chem-eq">Mg + 2 HCl <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> MgCl<sub>2</sub> + H<sub>2</sub>&uarr; &nbsp;&nbsp;oraz&nbsp;&nbsp; Zn + 2 H<sup>+</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> Zn<sup>2+</sup> + H<sub>2</sub>&uarr;</div>
                </li>
                <li>Z <strong>metalami szlachetnymi</strong> (np. Cu, Ag, Hg, Au) kwasy nieutleniające nie reagują: Cu + HCl &rarr; <em>reakcja nie zachodzi</em>.</li>
            </ul>

            <p><strong>2. Kwasy utleniające (np. stężony i rozcieńczony HNO<sub>3</sub>, stężony H<sub>2</sub>SO<sub>4</sub>, HClO<sub>3</sub>, HClO<sub>4</sub>, H<sub>2</sub>CrO<sub>4</sub>):</strong></p>
            <ul class="note-list">
                <li>Rolę utleniacza pełni w nich <strong>reszta kwasowa</strong> zawierająca atom pierwiastka na wysokim stopniu utlenienia (N<sup>+V</sup>, S<sup>+VI</sup>, Cl<sup>+V</sup>, Cl<sup>+VII</sup>).</li>
                <li>Reagują zarówno z metalami nieszlachetnymi, jak i z większością metali szlachetnych (np. Cu, Ag, Hg), przy czym <strong>nigdy nie wydziela się wodór</strong>, lecz powstaje sól, woda i tlenek będący produktem redukcji reszty kwasowej.</li>
                <li><strong>Reakcja miedzi ze stężonym kwasem azotowym(V):</strong>
                    <div class="chem-eq">Cu + 4 HNO<sub>3(stęż.)</sub> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> Cu(NO<sub>3</sub>)<sub>2</sub> + 2 NO<sub>2</sub>&uarr; + 2 H<sub>2</sub>O</div>
                    <div class="chem-eq">Zapis jonowy skrócony: Cu + 4 H<sup>+</sup> + 2 NO<sub>3</sub><sup>&minus;</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> Cu<sup>2+</sup> + 2 NO<sub>2</sub>&uarr; + 2 H<sub>2</sub>O</div>
                    <div class="chem-obs">🔎 <strong>Obserwacje:</strong> Miedź roztwarza się, roztwór przyjmuje niebieskie zabarwienie (od jonów Cu<sup>2+</sup>), a nad roztworem wydziela się czerwonobrunatny gaz (NO<sub>2</sub>). W reakcji Cu lub Ag z <strong>rozcieńczonym HNO<sub>3</sub></strong> produktem redukcji jest bezbarwny tlenek azotu(II) <strong>NO</strong>, natomiast ze <strong>stężonym H<sub>2</sub>SO<sub>4</sub></strong> – bezbarwny tlenek siarki(IV) <strong>SO<sub>2</sub></strong>.</div>
                </li>
            </ul>

            <p><strong>3. Zjawisko pasywacji (Al, Fe, Cr):</strong></p>
            <p>Glin (Al), żelazo (Fe) oraz chrom (Cr), mimo że są metalami nieszlachetnymi, <strong>nie roztwarzają się na zimno w stężonych kwasach utleniających (stężonym HNO<sub>3</sub> i stężonym H<sub>2</sub>SO<sub>4</sub>)</strong>. Pod wpływem silnego utleniacza na ich powierzchni tworzy się trwała, zwarta i szczelna warstewka tlenku, która całkowicie izoluje metal od kwasu i uniemożliwia dalszy przebieg reakcji.</p>

            <p><strong>4. Woda królewska (<em>aqua regia</em>):</strong></p>
            <p>Mieszanina stężonego kwasu chlorowodorowego (HCl) i stężonego kwasu azotowego(V) (HNO<sub>3</sub>) w stosunku objętościowym <strong>3 : 1</strong>. Roztwarza najbardziej szlachetne metale, takie jak złoto (Au) czy platyna (Pt):</p>
            <div class="chem-eq">
                Au + 4 HCl + HNO<sub>3</sub> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> H[AuCl<sub>4</sub>] + NO&uarr; + 2 H<sub>2</sub>O &nbsp;&nbsp;<em>(kwas tetrachlorozłotowy(III) + bezbarwny NO)</em>
            </div>

            <h4>Reakcje metali z wodnymi roztworami soli (wypieranie metali)</h4>
            <p>Każdy metal (z wyjątkiem metali najaktywniejszych reagujących z wodą) może wyprzeć kationy innego metalu z wodnego roztworu jego soli tylko wtedy, gdy wprowadzony metal leży w szeregu aktywności <strong>powyżej wypieranego metalu</strong> (jest od niego silniejszym reduktorem):</p>
            <ul class="note-list">
                <li><strong>Cynk i miedź:</strong> Zn + CuSO<sub>4</sub> &rarr; ZnSO<sub>4</sub> + Cu&darr; (jonowo: Zn + Cu<sup>2+</sup> &rarr; Zn<sup>2+</sup> + Cu) – zachodzi, bo Zn &gt; Cu (blaszka cynkowa pokrywa się czerwonobrunatnym nalotem miedzi, a niebieski roztwór blednie). Odwrotnie: Cu + ZnSO<sub>4</sub> &rarr; <em>reakcja nie zachodzi</em>.</li>
                <li><strong>Miedź i srebro:</strong> Cu + 2 AgNO<sub>3</sub> &rarr; Cu(NO<sub>3</sub>)<sub>2</sub> + 2 Ag&darr; (jonowo: Cu + 2 Ag<sup>+</sup> &rarr; Cu<sup>2+</sup> + 2 Ag) – zachodzi, bo Cu &gt; Ag (drut miedziany pokrywa się srebrzystoszarym osadem srebra, a bezbarwny roztwór barwi się na niebiesko).</li>
                <li><strong>Porównywanie aktywności kilku metali:</strong> 2 Al + 3 Mn<sup>2+</sup> &rarr; 2 Al<sup>3+</sup> + 3 Mn (gdyż Al &gt; Mn), ale Al + Mg<sup>2+</sup> &rarr; <em>reakcja nie zachodzi</em> (Al &lt; Mg) oraz Fe + Mn<sup>2+</sup> &rarr; <em>reakcja nie zachodzi</em> (Fe &lt; Mn). Analogicznie: 3 Ag + Au<sup>3+</sup> &rarr; 3 Ag<sup>+</sup> + Au (gdyż Ag &gt; Au).</li>
            </ul>

            <div class="note-alert danger">
                🔥 <strong>Dwie żelazne zasady na egzamin maturalny:</strong>
                <ol class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li><strong>Zapis braku reakcji:</strong> Jeżeli z szeregu napięciowego wynika, że reakcja nie biegnie, na arkuszu maturalnym należy zawsze zapisać słownie: <strong>„Reakcja nie zachodzi”</strong> – pozostawienie pustego miejsca lub przekreślenie jest traktowane jako brak odpowiedzi.</li>
                    <li><strong>Pułapka z litowcami i berylowcami (np. Na, K, Ca):</strong> Metale te <strong>nie wypierają</strong> kationów innych metali (np. Cu<sup>2+</sup>) z wodnych roztworów ich soli do wolnego metalu, ponieważ po wrzuceniu do roztworu gwałtownie reagują z wodą, wydzielając H<sub>2</sub> i tworząc jony OH<sup>&minus;</sup> (które następnie strącają osad wodorotlenku danego metalu, np. Cu(OH)<sub>2</sub>).</li>
                </ol>
            </div>

            <h4>Zastosowanie reakcji redoks w przemyśle i laboratorium</h4>
            <ul class="note-list">
                <li><strong>Metalurgia (otrzymywanie czystych metali i niemetali z rud):</strong>
                    <br>• Prażenie blendy cynkowej i redukcja ZnO węglem lub tlenkiem węgla(II): 2 ZnS + 3 O<sub>2</sub> &rarr; 2 ZnO + 2 SO<sub>2</sub>, a następnie ZnO + C &rarr; Zn + CO lub ZnO + CO &rarr; Zn + CO<sub>2</sub>.
                    <br>• Otrzymywanie tytanu, krzemu i miedzi przy użyciu magnezu jako reduktora: TiCl<sub>4</sub> + 2 Mg &rarr; Ti + 2 MgCl<sub>2</sub>; SiO<sub>2</sub> + 2 Mg &rarr; Si + 2 MgO; CuO + Mg &rarr; Cu + MgO.
                </li>
                <li><strong>Laboratoryjne otrzymywanie gazów w reakcjach redoks:</strong>
                    <br>• <strong>Chlor (Cl<sub>2</sub>):</strong> Utlenianie stężonego HCl za pomocą MnO<sub>2</sub>, KMnO<sub>4</sub> lub PbO<sub>2</sub>, np. PbO<sub>2</sub> + 4 HCl &rarr; PbCl<sub>2</sub> + Cl<sub>2</sub>&uarr; + 2 H<sub>2</sub>O (oraz MnO<sub>2</sub> + 4 HCl &rarr; MnCl<sub>2</sub> + Cl<sub>2</sub>&uarr; + 2 H<sub>2</sub>O).
                    <br>• <strong>Tlen (O<sub>2</sub>):</strong> Katalityczny rozkład nadtlenku wodoru (2 H<sub>2</sub>O<sub>2</sub> &rarr; 2 H<sub>2</sub>O + O<sub>2</sub>&uarr;) lub termiczny rozkład KMnO<sub>4</sub>.
                    <br>• <strong>Wodór (H<sub>2</sub>):</strong> Reakcja metali nieszlachetnych z kwasami nieutleniającymi (Zn + 2 HCl &rarr; ZnCl<sub>2</sub> + H<sub>2</sub>&uarr;) lub aktywnych metali z wodą (2 K + 2 H<sub>2</sub>O &rarr; 2 KOH + H<sub>2</sub>&uarr;).
                </li>
            </ul>
        </div>

        <!-- SEKCJA 5 -->
        <div class="note-section">
            <h3>5. Rozbiór Klasycznych i Zaawansowanych Równań Redoks</h3>

            <h4>Trudny przypadek wieloetapowy: Doświadczenie „Bijące serce rtęciowe”</h4>
            <p>Do kropli rtęci zanurzonej w wodzie destylowanej na szkiełku zegarkowym dodaje się kilka kropel stężonego H<sub>2</sub>SO<sub>4</sub> oraz roztworu KMnO<sub>4</sub>, a następnie zbliża się żelazny drucik. Kropla rtęci zaczyna drgać (kurczyć się i rozkurczać) na skutek cyklicznych zmian napięcia powierzchniowego wywołanych dwiema następującymi po sobie reakcjami redoks:</p>
            <ul class="note-list">
                <li><strong>Etap I – Utlenianie rtęci przez KMnO<sub>4</sub> w środowisku stężonego H<sub>2</sub>SO<sub>4</sub>:</strong> Rtęć (Hg) utlenia się ze stopnia 0 do +I w siarczanie(VI) rtęci(I) (Hg<sub>2</sub>SO<sub>4</sub>), a mangan (Mn) redukuje się z +VII w KMnO<sub>4</sub> do +II w MnSO<sub>4</sub> (Utlenianie: 2Hg<sup>0</sup> &rarr; 2Hg<sup>I</sup> + 2e<sup>&minus;</sup> |&middot;5; Redukcja: Mn<sup>VII</sup> + 5e<sup>&minus;</sup> &rarr; Mn<sup>II</sup> |&middot;2):
                    <div class="chem-eq">10 Hg + 8 H<sub>2</sub>SO<sub>4</sub> + 2 KMnO<sub>4</sub> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> 5 Hg<sub>2</sub>SO<sub>4</sub> + K<sub>2</sub>SO<sub>4</sub> + 2 MnSO<sub>4</sub> + 8 H<sub>2</sub>O</div>
                </li>
                <li><strong>Etap II – Redukcja siarczanu(VI) rtęci(I) przy kontakcie z żelaznym drucikiem:</strong> Żelazo (Fe – metal aktywniejszy od rtęci) utlenia się z 0 do +II w FeSO<sub>4</sub>, a rtęć redukuje się z +I z powrotem do metalicznej rtęci Hg<sup>0</sup>:
                    <div class="chem-eq">Fe + Hg<sub>2</sub>SO<sub>4</sub> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> 2 Hg + FeSO<sub>4</sub></div>
                </li>
            </ul>

            <h4>Zestawienie ważnych równań połówkowych w zależności od środowiska</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Środowisko</th>
                            <th>Typ procesu</th>
                            <th>Równanie połówkowe (zapis jonowo-elektronowy)</th>
                            <th>Zmiana stopni utlenienia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Kwasowe</strong></td>
                            <td>Redukcja</td>
                            <td>Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + 14 H<sub>3</sub>O<sup>+</sup> + 6 e<sup>&minus;</sup> &rarr; 2 Cr<sup>3+</sup> + 21 H<sub>2</sub>O</td>
                            <td>Cr<sup>VI</sup> &rarr; Cr<sup>III</sup></td>
                        </tr>
                        <tr>
                            <td><strong>Kwasowe</strong></td>
                            <td>Utlenianie</td>
                            <td>HNO<sub>2</sub> + 3 H<sub>2</sub>O &rarr; NO<sub>3</sub><sup>&minus;</sup> + 2 e<sup>&minus;</sup> + 3 H<sub>3</sub>O<sup>+</sup></td>
                            <td>N<sup>III</sup> &rarr; N<sup>V</sup></td>
                        </tr>
                        <tr>
                            <td><strong>Zasadowe</strong></td>
                            <td>Redukcja</td>
                            <td>NO<sub>2</sub><sup>&minus;</sup> + 5 H<sub>2</sub>O + 6 e<sup>&minus;</sup> &rarr; NH<sub>3</sub> + 7 OH<sup>&minus;</sup></td>
                            <td>N<sup>III</sup> &rarr; N<sup>&minus;III</sup></td>
                        </tr>
                        <tr>
                            <td><strong>Zasadowe</strong></td>
                            <td>Utlenianie</td>
                            <td>CH<sub>3</sub>CHO + 3 OH<sup>&minus;</sup> &rarr; CH<sub>3</sub>COO<sup>&minus;</sup> + 2 H<sub>2</sub>O + 2 e<sup>&minus;</sup></td>
                            <td>C<sup>I</sup> &rarr; C<sup>III</sup> <em>(w grupie funkcyjnej)</em></td>
                        </tr>
                        <tr>
                            <td><strong>Obojętne</strong></td>
                            <td>Redukcja</td>
                            <td>MnO<sub>4</sub><sup>&minus;</sup> + 2 H<sub>2</sub>O + 3 e<sup>&minus;</sup> &rarr; MnO<sub>2</sub>&darr; + 4 OH<sup>&minus;</sup></td>
                            <td>Mn<sup>VII</sup> &rarr; Mn<sup>IV</sup></td>
                        </tr>
                        <tr>
                            <td><strong>Obojętne</strong></td>
                            <td>Utlenianie</td>
                            <td>SO<sub>3</sub><sup>2&minus;</sup> + 3 H<sub>2</sub>O &rarr; SO<sub>4</sub><sup>2&minus;</sup> + 2 e<sup>&minus;</sup> + 2 H<sub>3</sub>O<sup>+</sup></td>
                            <td>S<sup>IV</sup> &rarr; S<sup>VI</sup></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>Wzorcowo rozwiązane równania reakcji redoks z zadań treningowych</h4>
            <ol class="note-list">
                <li><strong>Utlenianie Fe<sup>2+</sup> za pomocą MnO<sub>4</sub><sup>&minus;</sup> w środowisku kwasowym:</strong><br>
                    Utlenianie: 5 Fe<sup>2+</sup> &rarr; 5 Fe<sup>3+</sup> + 5 e<sup>&minus;</sup> &nbsp;|&nbsp; Redukcja: MnO<sub>4</sub><sup>&minus;</sup> + 8 H<sub>3</sub>O<sup>+</sup> + 5 e<sup>&minus;</sup> &rarr; Mn<sup>2+</sup> + 12 H<sub>2</sub>O<br>
                    <strong>5 Fe<sup>2+</sup> + MnO<sub>4</sub><sup>&minus;</sup> + 8 H<sub>3</sub>O<sup>+</sup> &rarr; 5 Fe<sup>3+</sup> + Mn<sup>2+</sup> + 12 H<sub>2</sub>O</strong> <em>(lub z H<sup>+</sup>: 5 Fe<sup>2+</sup> + MnO<sub>4</sub><sup>&minus;</sup> + 8 H<sup>+</sup> &rarr; 5 Fe<sup>3+</sup> + Mn<sup>2+</sup> + 4 H<sub>2</sub>O; ładunek po obu stronach +17)</em>.
                </li>
                <li><strong>Reakcja K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> z NaNO<sub>2</sub> w obecności HClO<sub>4</sub>:</strong><br>
                    Zapis cząsteczkowy: <strong>K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> + 3 NaNO<sub>2</sub> + 8 HClO<sub>4</sub> &rarr; 2 Cr(ClO<sub>4</sub>)<sub>3</sub> + 3 NaNO<sub>3</sub> + 2 KClO<sub>4</sub> + 4 H<sub>2</sub>O</strong><br>
                    Zapis jonowy skrócony: <strong>Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + 3 NO<sub>2</sub><sup>&minus;</sup> + 8 H<sup>+</sup> &rarr; 2 Cr<sup>3+</sup> + 3 NO<sub>3</sub><sup>&minus;</sup> + 4 H<sub>2</sub>O</strong> <em>(Utleniacz: Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup>, reduktor: NO<sub>2</sub><sup>&minus;</sup>)</em>.
                </li>
                <li><strong>Utlenianie anionów jodkowych (I<sup>&minus;</sup>) przez Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> w środowisku kwasowym:</strong><br>
                    Redukcja: Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + 14 H<sub>3</sub>O<sup>+</sup> + 6 e<sup>&minus;</sup> &rarr; 2 Cr<sup>3+</sup> + 21 H<sub>2</sub>O &nbsp;|&nbsp; Utlenianie: 6 I<sup>&minus;</sup> &rarr; 3 I<sub>2</sub> + 6 e<sup>&minus;</sup><br>
                    <strong>Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + 6 I<sup>&minus;</sup> + 14 H<sub>3</sub>O<sup>+</sup> &rarr; 2 Cr<sup>3+</sup> + 3 I<sub>2</sub> + 21 H<sub>2</sub>O</strong> <em>(reduktor: I<sup>&minus;</sup>)</em>.
                </li>
                <li><strong>Utlenianie jodku wodoru (HI) za pomocą stężonego H<sub>2</sub>SO<sub>4</sub>:</strong><br>
                    Silny reduktor (HI, I<sup>&minus;I</sup>) redukuje siarkę w H<sub>2</sub>SO<sub>4</sub> z +VI aż do &minus;II w H<sub>2</sub>S (Utlenianie: 2I<sup>&minus;I</sup> &rarr; I<sub>2</sub><sup>0</sup> + 2e<sup>&minus;</sup> |&middot;4; Redukcja: S<sup>VI</sup> + 8e<sup>&minus;</sup> &rarr; S<sup>&minus;II</sup> |&middot;1):<br>
                    <strong>8 HI + H<sub>2</sub>SO<sub>4</sub> &rarr; 4 I<sub>2</sub> + H<sub>2</sub>S + 4 H<sub>2</sub>O</strong>
                </li>
                <li><strong>Utlenianie fosforu (P) kwasem azotowym(V) (HNO<sub>3</sub>) w środowisku wodnym:</strong><br>
                    Bilans: P<sup>0</sup> &rarr; P<sup>V</sup> + 5e<sup>&minus;</sup> |&middot;3 oraz N<sup>V</sup> + 3e<sup>&minus;</sup> &rarr; N<sup>II</sup> |&middot;5:<br>
                    <strong>3 P + 5 HNO<sub>3</sub> + 2 H<sub>2</sub>O &rarr; 3 H<sub>3</sub>PO<sub>4</sub> + 5 NO&uarr;</strong> <em>(reduktor: P, utleniacz: HNO<sub>3</sub>)</em>.
                </li>
                <li><strong>Reakcja tlenku ołowiu(IV) (PbO<sub>2</sub>) z kwasem solnym (HCl):</strong><br>
                    Bilans: Pb<sup>IV</sup> + 2e<sup>&minus;</sup> &rarr; Pb<sup>II</sup> |&middot;1 oraz 2Cl<sup>&minus;I</sup> &rarr; Cl<sub>2</sub><sup>0</sup> + 2e<sup>&minus;</sup> |&middot;1 (część jonów Cl<sup>&minus;</sup> tworzy sól PbCl<sub>2</sub>):<br>
                    <strong>PbO<sub>2</sub> + 4 HCl &rarr; PbCl<sub>2</sub> + Cl<sub>2</sub>&uarr; + 2 H<sub>2</sub>O</strong> <em>(utleniacz: PbO<sub>2</sub>, reduktor: HCl)</em>.
                </li>
                <li><strong>Utlenianie kwasu siarkowego(IV) (H<sub>2</sub>SO<sub>3</sub>) wodą chlorową (Cl<sub>2</sub> + H<sub>2</sub>O):</strong><br>
                    Bilans: S<sup>IV</sup> &rarr; S<sup>VI</sup> + 2e<sup>&minus;</sup> oraz Cl<sub>2</sub><sup>0</sup> + 2e<sup>&minus;</sup> &rarr; 2Cl<sup>&minus;I</sup>:<br>
                    <strong>H<sub>2</sub>SO<sub>3</sub> + Cl<sub>2</sub> + H<sub>2</sub>O &rarr; H<sub>2</sub>SO<sub>4</sub> + 2 HCl</strong> <em>(reduktor: H<sub>2</sub>SO<sub>3</sub>, utleniacz: Cl<sub>2</sub>)</em>.
                </li>
                <li><strong>Utlenianie jodu (I<sub>2</sub>) za pomocą chloru (Cl<sub>2</sub>) w wodzie:</strong><br>
                    Bilans: I<sub>2</sub><sup>0</sup> &rarr; 2I<sup>V</sup> + 10e<sup>&minus;</sup> |&middot;1 oraz Cl<sub>2</sub><sup>0</sup> + 2e<sup>&minus;</sup> &rarr; 2Cl<sup>&minus;I</sup> |&middot;5:<br>
                    <strong>5 Cl<sub>2</sub> + I<sub>2</sub> + 6 H<sub>2</sub>O &rarr; 2 HIO<sub>3</sub> + 10 HCl</strong> <em>(reduktor: I<sub>2</sub>, utleniacz: Cl<sub>2</sub>)</em>.
                </li>
                <li><strong>Utlenianie jodku potasu (KI) za pomocą KMnO<sub>4</sub> w środowisku obojętnym:</strong><br>
                    Bilans: Mn<sup>VII</sup> + 3e<sup>&minus;</sup> &rarr; Mn<sup>IV</sup> |&middot;2 oraz 2I<sup>&minus;I</sup> &rarr; I<sub>2</sub><sup>0</sup> + 2e<sup>&minus;</sup> |&middot;3:<br>
                    <strong>2 KMnO<sub>4</sub> + 6 KI + 4 H<sub>2</sub>O &rarr; 2 MnO<sub>2</sub>&darr; + 3 I<sub>2</sub> + 8 KOH</strong> <em>(utleniacz: KMnO<sub>4</sub>, reduktor: KI)</em>.
                </li>
                <li><strong>Wypieranie tlenu z wody przez fluor (F<sub>2</sub>):</strong><br>
                    Fluor jako najsilniejszy utleniacz przyjmuje stopień &minus;I i utlenia tlen w wodzie z &minus;II do 0:<br>
                    <strong>2 F<sub>2</sub> + 2 H<sub>2</sub>O &rarr; 4 HF + O<sub>2</sub>&uarr;</strong> <em>(utleniacz: F<sub>2</sub>, reduktor: H<sub>2</sub>O)</em>.
                </li>
                <li><strong>Dysproporcjonowanie jodu (I<sub>2</sub>) w środowisku zasadowym oraz kwasu azotowego(III) (HNO<sub>2</sub>):</strong><br>
                    • Jod w roztworze zasady (I<sup>0</sup> + 1e<sup>&minus;</sup> &rarr; I<sup>&minus;I</sup> |&middot;5 oraz I<sup>0</sup> &rarr; I<sup>V</sup> + 5e<sup>&minus;</sup> |&middot;1): <strong>3 I<sub>2</sub> + 6 OH<sup>&minus;</sup> &rarr; 5 I<sup>&minus;</sup> + IO<sub>3</sub><sup>&minus;</sup> + 3 H<sub>2</sub>O</strong><br>
                    • Nietrwały kwas azotowy(III) (N<sup>III</sup> &rarr; N<sup>V</sup> + 2e<sup>&minus;</sup> |&middot;1 oraz N<sup>III</sup> + 1e<sup>&minus;</sup> &rarr; N<sup>II</sup> |&middot;2): <strong>3 HNO<sub>2</sub> &rarr; HNO<sub>3</sub> + 2 NO&uarr; + H<sub>2</sub>O</strong>
                </li>
            </ol>
        </div>

        <!-- SEKCJA 6 -->
        <div class="note-section">
            <h3>6. Projektowanie i Opis Doświadczeń Chemicznych (Pewniaki Maturalne)</h3>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Doświadczenie</th>
                            <th>Dobór odczynników i przebieg</th>
                            <th>Obserwacje</th>
                            <th>Wnioski i równania reakcji</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Doświadczenie 1:<br>Wykazanie, że stężony HNO<sub>3</sub> jest kwasem utleniającym, a HCl – nieutleniającym</strong></td>
                            <td><strong>Dobór metalu (z zestawu Zn, Fe, Cu):</strong> Należy wybrać <strong>miedź (Cu)</strong>. Cynk (Zn) przereaguje z obydwoma kwasami, a żelazo (Fe) w stęż. HNO<sub>3</sub> ulega pasywacji.<br><strong>Przebieg:</strong> Do probówki I z HCl oraz do probówki II ze stężonym HNO<sub>3</sub> wprowadzamy oczyszczony drut miedziany (Cu).</td>
                            <td>• <strong>Probówka I (Cu + HCl):</strong> Brak objawów reakcji.<br>• <strong>Probówka II (Cu + HNO<sub>3(stęż.)</sub>):</strong> Miedź roztwarza się, roztwór zmienia barwę na niebieską (lub zielononiebieską), a nad roztworem wydziela się czerwonobrunatny gaz.</td>
                            <td>Miedź (metal szlachetny) nie reaguje z HCl, a reaguje ze stężonym HNO<sub>3</sub>.<br>• Probówka I: <em>Reakcja nie zachodzi.</em><br>• Probówka II (cząsteczkowo):<br><strong>Cu + 4 HNO<sub>3</sub> &rarr; Cu(NO<sub>3</sub>)<sub>2</sub> + 2 NO<sub>2</sub>&uarr; + 2 H<sub>2</sub>O</strong><br>• Probówka II (jonowo):<br><strong>Cu + 4 H<sup>+</sup> + 2 NO<sub>3</sub><sup>&minus;</sup> &rarr; Cu<sup>2+</sup> + 2 NO<sub>2</sub>&uarr; + 2 H<sub>2</sub>O</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Doświadczenie 2:<br>Badanie aktywności chemicznej magnezu wobec chlorku żelaza(III)</strong></td>
                            <td><strong>Przebieg:</strong> Oczyszczoną wstążkę magnezową zanurza się w probówce z wodnym roztworem chlorku żelaza(III) (FeCl<sub>3</sub>), a po chwili wyjmuje szczypcami na szkiełko zegarkowe.</td>
                            <td>Wstążka magnezowa pokrywa się ciemnym / rdzawym nalotem.</td>
                            <td>Magnez wypiera żelazo z roztworu soli, co dowodzi, że Mg jest metalem bardziej aktywnym chemicznie (silniejszym reduktorem) niż Fe:<br>• <strong>3 Mg + 2 FeCl<sub>3</sub> &rarr; 3 MgCl<sub>2</sub> + 2 Fe&darr;</strong><br>• Utlenianie: 3 Mg<sup>0</sup> &rarr; 3 Mg<sup>2+</sup> + 6 e<sup>&minus;</sup><br>• Redukcja: 2 Fe<sup>3+</sup> + 6 e<sup>&minus;</sup> &rarr; 2 Fe<sup>0</sup></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `,

    notatkiActive: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">🧠 ACTIVE RECALL: REAKCJE UTLENIANIA I REDUKCJI</h2>
        <p style="text-align: center; color: #94a3b8; font-size: 13px; margin-bottom: 20px;">
            💡 <em>Klikaj na ciemne pola, aby odkryć ukryte stopnie utlenienia, współczynniki i produkty reakcji, oraz rozwijaj pytania kontrolne!</em>
        </p>

        <!-- ACTIVE RECALL SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Stopnie Utlenienia i Pułapki Maturalne</h3>
            <p>Fluor we wszystkich związkach chemicznych przyjmuje zawsze stopień utlenienia <span class="recall-blank" onclick="toggleRecall(this)">&minus;I</span>, dlatego we fluorku tlenu (OF<sub>2</sub>) tlen występuje na wyjątkowym stopniu <span class="recall-blank" onclick="toggleRecall(this)">+II</span>.</p>
            <p>W wodorkach metali (np. NaH, CaH<sub>2</sub>) wodór przyjmuje stopień utlenienia <span class="recall-blank" onclick="toggleRecall(this)">&minus;I</span>, a w nadtlenkach (np. H<sub>2</sub>O<sub>2</sub>) tlen ma stopień <span class="recall-blank" onclick="toggleRecall(this)">&minus;I</span>.</p>
            
            <details class="recall-details">
                <summary><span>Jakie stopnie utlenienia mają żelazo i siarka w pirycie (FeS<sub>2</sub>) oraz żelazo w magnetycie (Fe<sub>3</sub>O<sub>4</sub>)?</span></summary>
                <ul class="note-list">
                    <li><strong>Piryt (FeS<sub>2</sub>):</strong> Żelazo ma stopień <strong>+II</strong>, a każdy atom siarki w anionie disiarczkowym S<sub>2</sub><sup>2&minus;</sup> ma stopień <strong>&minus;I</strong> (nie &minus;II!).</li>
                    <li><strong>Magnetyt (Fe<sub>3</sub>O<sub>4</sub>):</strong> Tlenek mieszany (FeO &middot; Fe<sub>2</sub>O<sub>3</sub>) – jeden atom żelaza ma stopień <strong>+II</strong>, a dwa atomy żelaza mają stopień <strong>+III</strong>.</li>
                </ul>
            </details>

            <details class="recall-details">
                <summary><span>Wyznacz stopnie utlenienia azotu w nitrobenzenie (C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub>) i anilinie (C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>) oraz węgla w grupie funkcyjnej etanalu (CH<sub>3</sub>CHO) i jonu octanowego (CH<sub>3</sub>COO<sup>&minus;</sup>).</span></summary>
                <ul class="note-list">
                    <li>Nitrobenzen (C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub>): azot ma <strong>+III</strong> &rarr; Anilina (C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>): azot ma <strong>&minus;III</strong>.</li>
                    <li>Etanal (CH<sub>3</sub>CHO): węgiel aldehydowy ma <strong>+I</strong> &rarr; Jon octanowy (CH<sub>3</sub>COO<sup>&minus;</sup>): węgiel karboksylowy ma <strong>+III</strong>.</li>
                </ul>
            </details>
        </div>

        <!-- ACTIVE RECALL SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Utleniacze, Reduktory i Równania Połówkowe</h3>
            <p>Reduktor to substancja, która <span class="recall-blank" onclick="toggleRecall(this)">oddaje elektrony</span>, podwyższa swój stopień utlenienia i sama ulega <span class="recall-blank" onclick="toggleRecall(this)">utlenieniu</span>.</p>
            <p>Utleniacz to substancja, która <span class="recall-blank" onclick="toggleRecall(this)">pobiera elektrony</span>, obniża swój stopień utlenienia i sama ulega <span class="recall-blank" onclick="toggleRecall(this)">redukcji</span>.</p>

            <h4>Uzupełnij klasyczne równania redukcji utleniaczy:</h4>
            <div class="chem-eq">
                MnO<sub>4</sub><sup>&minus;</sup> + 8 H<sup>+</sup> + <span class="recall-blank" onclick="toggleRecall(this)">5 e<sup>&minus;</sup></span> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> <span class="recall-blank" onclick="toggleRecall(this)">Mn<sup>2+</sup> + 4 H<sub>2</sub>O</span> &nbsp;<em>(środowisko kwasowe)</em>
            </div>
            <div class="chem-eq">
                MnO<sub>4</sub><sup>&minus;</sup> + 2 H<sub>2</sub>O + <span class="recall-blank" onclick="toggleRecall(this)">3 e<sup>&minus;</sup></span> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> <span class="recall-blank" onclick="toggleRecall(this)">MnO<sub>2</sub>&darr; + 4 OH<sup>&minus;</sup></span> &nbsp;<em>(środowisko obojętne)</em>
            </div>
            <div class="chem-eq">
                Cr<sub>2</sub>O<sub>7</sub><sup>2&minus;</sup> + 14 H<sup>+</sup> + <span class="recall-blank" onclick="toggleRecall(this)">6 e<sup>&minus;</sup></span> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> <span class="recall-blank" onclick="toggleRecall(this)">2 Cr<sup>3+</sup> + 7 H<sub>2</sub>O</span> &nbsp;<em>(środowisko kwasowe)</em>
            </div>

            <details class="recall-details">
                <summary>Jakie drobiny pomocnicze można dopisywać po stronie substratów i produktów podczas bilansowania reakcji w środowisku obojętnym?</summary>
                <p>Po stronie <strong>substratów</strong> wolno dopisywać <strong>wyłącznie cząsteczki H<sub>2</sub>O</strong> (zakaz dopisywania H<sub>3</sub>O<sup>+</sup> oraz OH<sup>&minus;</sup>!). Dopiero po stronie <strong>produktów</strong> wyrównuje się ładunek i wodór za pomocą jonów H<sub>3</sub>O<sup>+</sup> (H<sup>+</sup>) lub OH<sup>&minus;</sup>.</p>
            </details>
        </div>

        <!-- ACTIVE RECALL SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Trudne Bilansowanie, Dysproporcjonowanie i Synproporcjonowanie</h3>
            <h4>Prażenie pirytu:</h4>
            <div class="chem-eq">
                <span class="recall-blank" onclick="toggleRecall(this)">4</span> FeS<sub>2</sub> + <span class="recall-blank" onclick="toggleRecall(this)">11</span> O<sub>2</sub> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> <span class="recall-blank" onclick="toggleRecall(this)">2 Fe<sub>2</sub>O<sub>3</sub> + 8 SO<sub>2</sub></span>
            </div>

            <h4>Utlenianie Cr(OH)<sub>3</sub> w środowisku zasadowym:</h4>
            <div class="chem-eq">
                2 Cr(OH)<sub>3</sub> + 3 H<sub>2</sub>O<sub>2</sub> + 4 OH<sup>&minus;</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> <span class="recall-blank" onclick="toggleRecall(this)">2 CrO<sub>4</sub><sup>2&minus;</sup> + 8 H<sub>2</sub>O</span>
            </div>

            <details class="recall-details">
                <summary><span>Jaki odczyn przyjmuje roztwór po reakcji KMnO<sub>4</sub> z K<sub>2</sub>SO<sub>3</sub> w środowisku obojętnym, a jaki po reakcji KMnO<sub>4</sub> z MnSO<sub>4</sub> w środowisku obojętnym?</span></summary>
                <ul class="note-list">
                    <li><strong>KMnO<sub>4</sub> + K<sub>2</sub>SO<sub>3</sub> + H<sub>2</sub>O:</strong> Po stronie produktów powstają jony <strong>OH<sup>&minus;</sup></strong> (2 MnO<sub>4</sub><sup>&minus;</sup> + 3 SO<sub>3</sub><sup>2&minus;</sup> + H<sub>2</sub>O &rarr; 2 MnO<sub>2</sub>&darr; + 3 SO<sub>4</sub><sup>2&minus;</sup> + 2 OH<sup>&minus;</sup>) &rarr; odczyn staje się <strong>zasadowy</strong>.</li>
                    <li><strong>KMnO<sub>4</sub> + MnSO<sub>4</sub> + H<sub>2</sub>O (synproporcjonowanie):</strong> Po stronie produktów powstają jony <strong>H<sub>3</sub>O<sup>+</sup> / H<sub>2</sub>SO<sub>4</sub></strong> (3 Mn<sup>2+</sup> + 2 MnO<sub>4</sub><sup>&minus;</sup> + 6 H<sub>2</sub>O &rarr; 5 MnO<sub>2</sub>&darr; + 4 H<sub>3</sub>O<sup>+</sup>) &rarr; odczyn staje się <strong>kwasowy</strong>.</li>
                </ul>
            </details>
        </div>

        <!-- ACTIVE RECALL SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Szereg Aktywności Metali, Woda, Kwasy i Sole</h3>
            <p>Glin, cynk i żelazo (Al, Zn, Fe) nie reagują z ciekłą wodą (nawet wrzącą), lecz reagują dopiero z <span class="recall-blank" onclick="toggleRecall(this)">gorącą parą wodną (ok. 150&deg;C)</span>. Jedynym berylowcem, który nie reaguje z wodą w żadnych warunkach, jest <span class="recall-blank" onclick="toggleRecall(this)">beryl (Be)</span>.</p>
            <p>Metale ulegające pasywacji na zimno w stężonym HNO<sub>3</sub> i stężonym H<sub>2</sub>SO<sub>4</sub> to: <span class="recall-blank" onclick="toggleRecall(this)">glin (Al), żelazo (Fe) oraz chrom (Cr)</span>.</p>
            <p>Woda królewska to mieszanina stężonego HCl i stężonego HNO<sub>3</sub> w stosunku objętościowym <span class="recall-blank" onclick="toggleRecall(this)">3 : 1</span>.</p>

            <details class="recall-details">
                <summary><span>Dlaczego metaliczny sód (Na) wrzucony do wodnego roztworu CuSO<sub>4</sub> nie wypiera metalicznej miedzi?</span></summary>
                <p>Ponieważ sód (litowiec) w pierwszej kolejności gwałtownie reaguje z <strong>wodą</strong> (2 Na + 2 H<sub>2</sub>O &rarr; 2 NaOH + H<sub>2</sub>&uarr;), a powstałe jony OH<sup>&minus;</sup> strącają z roztworu niebieski osad wodorotlenku miedzi(II) – Cu(OH)<sub>2</sub>.</p>
            </details>

            <details class="recall-details">
                <summary><span>Jak doświadczalnie odróżnić stężony HNO<sub>3</sub> od HCl za pomocą jednego z metali: Zn, Fe, Cu?</span></summary>
                <p>Należy użyć <strong>miedzi (Cu)</strong>. W probówce z HCl brak objawów reakcji (<em>reakcja nie zachodzi</em>). W probówce ze stężonym HNO<sub>3</sub> miedź roztwarza się, roztwór barwi się na niebiesko (jony Cu<sup>2+</sup>) i wydziela się czerwonobrunatny gaz NO<sub>2</sub>.</p>
            </details>
        </div>
    </div>
    `,

    zadania: "<h3>Zadania</h3><br>Miejsce na zadania obliczeniowe i reakcje...",

    fiszki: [
        {
            front: "Co to jest stopień utlenienia pierwiastka chemicznego?",
            back: "To umowna liczba dodatnich lub ujemnych ładunków elementarnych, jakie miałby atom danego pierwiastka, gdyby wszystkie wiązania w cząsteczce lub jonie miały charakter czysto jonowy."
        },
        {
            front: "Jaki stopień utlenienia mają pierwiastki w stanie wolnym (np. Na<sup>0</sup>, O<sub>2</sub><sup>0</sup>, P<sub>4</sub><sup>0</sup>, S<sub>8</sub><sup>0</sup>)?",
            back: "Zawsze 0 (niezależnie od liczby połączonych atomów w cząsteczce homoatomowej)."
        },
        {
            front: "Jakie stałe stopnie utlenienia w związkach chemicznych przyjmują litowce, berylowce, glin (Al) i cynk (Zn)?",
            back: "Litowce: zawsze +I; Berylowce: zawsze +II; Glin (Al): zawsze +III; Cynk (Zn): zawsze +II."
        },
        {
            front: "Oblicz stopień utlenienia tlenu w cząsteczkach H<sub>2</sub>O<sub>2</sub> oraz OF<sub>2</sub>.",
            back: "W nadtlenku wodoru (H<sub>2</sub>O<sub>2</sub>) tlen ma stopień -I (bo H ma +I). We fluorku tlenu (OF<sub>2</sub>) tlen ma wyjątkowo stopień +II (bo fluor jako najbardziej elektroujemny pierwiastek ma zawsze -I)."
        },
        {
            front: "Jaki stopień utlenienia ma wodór w wodorkach metali (np. NaH, CaH<sub>2</sub>, LiH)?",
            back: "Przyjmuje stopień utlenienia -I (w większości pozostałych związków z niemetalami, kwasach i zasadach ma +I)."
        },
        {
            front: "Oblicz stopnie utlenienia żelaza i siarki w pirycie (FeS<sub>2</sub>) oraz żelaza w magnetycie (Fe<sub>3</sub>O<sub>4</sub>).",
            back: "W pirycie (FeS<sub>2</sub>, disiarczku żelaza(II)) żelazo ma stopień +II, a każdy atom siarki w anionie S<sub>2</sub><sup>2-</sup> ma stopień -I. W magnetycie (Fe<sub>3</sub>O<sub>4</sub>, czyli FeO&middot;Fe<sub>2</sub>O<sub>3</sub>) jeden atom Fe ma stopień +II, a dwa atomy Fe mają stopień +III."
        },
        {
            front: "Oblicz stopień utlenienia chromu w jonie Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> oraz manganu w jonie MnO<sub>4</sub><sup>-</sup>.",
            back: "W Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>: 2x + 7&middot;(-II) = -II &rArr; x = +VI. W MnO<sub>4</sub><sup>-</sup>: x + 4&middot;(-II) = -I &rArr; x = +VII."
        },
        {
            front: "Oblicz stopień utlenienia azotu w nitrobenzenie (C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub>) oraz w anilinie (C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>).",
            back: "W nitrobenzenie (C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub>) atom azotu ma stopień +III, natomiast w anilinie (C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>) atom azotu ma stopień -III."
        },
        {
            front: "Oblicz stopień utlenienia atomu węgla grupy funkcyjnej w etanalu (CH<sub>3</sub>CHO) oraz w jonie octanowym (CH<sub>3</sub>COO<sup>-</sup>).",
            back: "W grupie aldehydowej (-CHO) etanalu atom węgla ma stopień +I (x + I - II = 0), a w grupie karboksylowej (-COO<sup>-</sup>) jonu octanowego ma stopień +III (x + 2&middot;(-II) = -I)."
        },
        {
            front: "Wyznacz na podstawie konfiguracji elektronowej skrajne (minimalny i maksymalny) stopnie utlenienia siarki (Z = 16) oraz magnezu (Z = 12).",
            back: "Siarka (6 e<sup>-</sup> walencyjnych): minimalny -II (pobiera 2 e<sup>-</sup> do oktetu), maksymalny +VI (oddaje 6 e<sup>-</sup>). Magnez (metal, 2 e<sup>-</sup> walencyjne): minimalny 0 (metale nie przyjmują elektronów), maksymalny +II."
        },
        {
            front: "Na czym polega proces utleniania (oksydacji), a na czym proces redukcji?",
            back: "Utlenianie to oddawanie elektronów połączone z podwyższeniem stopnia utlenienia. Redukcja to pobieranie elektronów połączone z obniżeniem stopnia utlenienia."
        },
        {
            front: "Czym różni się rola utleniacza od roli reduktora w reakcji redoks?",
            back: "Utleniacz pobiera elektrony, obniża swój stopień utlenienia i sam ulega redukcji. Reduktor oddaje elektrony, podwyższa swój stopień utlenienia i sam ulega utlenieniu."
        },
        {
            front: "Dlaczego H<sub>2</sub>S, NH<sub>3</sub>, KI oraz metale w stanie wolnym mogą pełnić w reakcjach redoks wyłącznie rolę reduktorów?",
            back: "Ponieważ atomy S<sup>-II</sup>, N<sup>-III</sup>, I<sup>-I</sup> oraz Me<sup>0</sup> znajdują się na swoich najniższych możliwych stopniach utlenienia – mogą jedynie oddawać elektrony i podwyższać stopień utlenienia."
        },
        {
            front: "Dlaczego KMnO<sub>4</sub>, K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, HNO<sub>3</sub>, stężony H<sub>2</sub>SO<sub>4</sub> oraz PbO<sub>2</sub> pełnią rolę wyłącznie utleniaczy?",
            back: "Ponieważ kluczowe pierwiastki (Mn<sup>+VII</sup>, Cr<sup>+VI</sup>, N<sup>+V</sup>, S<sup>+VI</sup>, Pb<sup>+IV</sup>) występują w nich na swoich najwyższych możliwych stopniach utlenienia i mogą wyłącznie pobierać elektrony."
        },
        {
            front: "Wymień 4 przykłady substancji wykazujących dualizm redoksowy (mogących być zarówno utleniaczem, jak i reduktorem).",
            back: "Nadtlenek wodoru H<sub>2</sub>O<sub>2</sub> (O<sup>-I</sup>), tlenek siarki(IV) SO<sub>2</sub> / SO<sub>3</sub><sup>2-</sup> (S<sup>+IV</sup>), kwas azotowy(III) HNO<sub>2</sub> / NO<sub>2</sub><sup>-</sup> (N<sup>+III</sup>), chloran(V) potasu KClO<sub>3</sub> (Cl<sup>+V</sup>) oraz wolne niemetale (Cl<sub>2</sub><sup>0</sup>, I<sub>2</sub><sup>0</sup>, S<sup>0</sup>)."
        },
        {
            front: "Jakie drobiny pomocnicze służą do wyrównywania atomów tlenu i wodoru w metodzie jonowo-elektronowej w środowisku kwasowym, zasadowym i obojętnym?",
            back: "Kwasowe: H<sup>+</sup> (lub H<sub>3</sub>O<sup>+</sup>) i H<sub>2</sub>O. Zasadowe: OH<sup>-</sup> i H<sub>2</sub>O (zakaz używania H<sup>+</sup>!). Obojętne: po stronie substratów wyłącznie H<sub>2</sub>O, a po stronie produktów H<sub>3</sub>O<sup>+</sup> lub OH<sup>-</sup>."
        },
        {
            front: "Zapisz równanie połówkowe redukcji jonu MnO<sub>4</sub><sup>-</sup> w środowisku kwasowym oraz podaj zmianę barwy roztworu.",
            back: "MnO<sub>4</sub><sup>-</sup> + 8H<sup>+</sup> + 5e<sup>-</sup> &rarr; Mn<sup>2+</sup> + 4H<sub>2</sub>O (lub z H<sub>3</sub>O<sup>+</sup>: MnO<sub>4</sub><sup>-</sup> + 8H<sub>3</sub>O<sup>+</sup> + 5e<sup>-</sup> &rarr; Mn<sup>2+</sup> + 12H<sub>2</sub>O). Fioletowy roztwór odbarwia się (jony Mn<sup>2+</sup> są bezbarwne/bladoróżowe)."
        },
        {
            front: "Zapisz równanie połówkowe redukcji jonu MnO<sub>4</sub><sup>-</sup> w środowisku obojętnym oraz podaj obserwacje.",
            back: "MnO<sub>4</sub><sup>-</sup> + 2H<sub>2</sub>O + 3e<sup>-</sup> &rarr; MnO<sub>2</sub>&darr; + 4OH<sup>-</sup>. Fioletowy roztwór odbarwia się i wytrąca się brunatny osad tlenku manganu(IV)."
        },
        {
            front: "Zapisz równanie połówkowe redukcji jonu Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> w środowisku kwasowym oraz podaj zmianę barwy.",
            back: "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 14H<sup>+</sup> + 6e<sup>-</sup> &rarr; 2Cr<sup>3+</sup> + 7H<sub>2</sub>O (lub z H<sub>3</sub>O<sup>+</sup>: Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 14H<sub>3</sub>O<sup>+</sup> + 6e<sup>-</sup> &rarr; 2Cr<sup>3+</sup> + 21H<sub>2</sub>O). Zmiana barwy roztworu z pomarańczowej na zieloną."
        },
        {
            front: "Uzgodnij równanie prażenia pirytu: FeS<sub>2</sub> + O<sub>2</sub> &rarr; Fe<sub>2</sub>O<sub>3</sub> + SO<sub>2</sub> i wskaż, ile elektronów oddaje 1 cząsteczka FeS<sub>2</sub>.",
            back: "4FeS<sub>2</sub> + 11O<sub>2</sub> &rarr; 2Fe<sub>2</sub>O<sub>3</sub> + 8SO<sub>2</sub>. Jedna cząsteczka FeS<sub>2</sub> oddaje łącznie 11 elektronów (Fe<sup>II</sup> &rarr; Fe<sup>III</sup> + 1e<sup>-</sup> oraz 2S<sup>-I</sup> &rarr; 2S<sup>IV</sup> + 10e<sup>-</sup>)."
        },
        {
            front: "Uzgodnij w zapisie jonowym skróconym reakcję utleniania kationów Fe<sup>2+</sup> za pomocą jonów Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> w środowisku kwasowym.",
            back: "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 6Fe<sup>2+</sup> + 14H<sub>3</sub>O<sup>+</sup> &rarr; 2Cr<sup>3+</sup> + 6Fe<sup>3+</sup> + 21H<sub>2</sub>O (lub z H<sup>+</sup>: Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 6Fe<sup>2+</sup> + 14H<sup>+</sup> &rarr; 2Cr<sup>3+</sup> + 6Fe<sup>3+</sup> + 7H<sub>2</sub>O)."
        },
        {
            front: "Uzgodnij w zapisie jonowym reakcję redukcji nitrobenzenu do aniliny w środowisku kwasowym: C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub> + Sn<sup>2+</sup> + H<sub>3</sub>O<sup>+</sup> &rarr; C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + Sn<sup>4+</sup> + H<sub>2</sub>O.",
            back: "C<sub>6</sub>H<sub>5</sub>NO<sub>2</sub> + 3Sn<sup>2+</sup> + 6H<sub>3</sub>O<sup>+</sup> &rarr; C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> + 3Sn<sup>4+</sup> + 8H<sub>2</sub>O (N<sup>+III</sup> + 6e<sup>-</sup> &rarr; N<sup>-III</sup> |&middot;1; Sn<sup>2+</sup> &rarr; Sn<sup>4+</sup> + 2e<sup>-</sup> |&middot;3)."
        },
        {
            front: "Uzgodnij reakcję utleniania Cr(OH)<sub>3</sub> nadtlenkiem wodoru w środowisku zasadowym: Cr(OH)<sub>3</sub> + H<sub>2</sub>O<sub>2</sub> + OH<sup>-</sup> &rarr; CrO<sub>4</sub><sup>2-</sup> + H<sub>2</sub>O.",
            back: "2Cr(OH)<sub>3</sub> + 3H<sub>2</sub>O<sub>2</sub> + 4OH<sup>-</sup> &rarr; 2CrO<sub>4</sub><sup>2-</sup> + 8H<sub>2</sub>O (Utlenianie: Cr(OH)<sub>3</sub> + 5OH<sup>-</sup> &rarr; CrO<sub>4</sub><sup>2-</sup> + 4H<sub>2</sub>O + 3e<sup>-</sup> |&middot;2; Redukcja: H<sub>2</sub>O<sub>2</sub> + 2e<sup>-</sup> &rarr; 2OH<sup>-</sup> |&middot;3)."
        },
        {
            front: "Uzgodnij jonowo reakcję w środowisku zasadowym: [Sn(OH)<sub>3</sub>]<sup>-</sup> + Bi<sup>3+</sup> + OH<sup>-</sup> &rarr; [Sn(OH)<sub>6</sub>]<sup>2-</sup> + Bi&darr;.",
            back: "3[Sn(OH)<sub>3</sub>]<sup>-</sup> + 2Bi<sup>3+</sup> + 9OH<sup>-</sup> &rarr; 3[Sn(OH)<sub>6</sub>]<sup>2-</sup> + 2Bi&darr; (Sn<sup>+II</sup> &rarr; Sn<sup>+IV</sup> + 2e<sup>-</sup> |&middot;3; Bi<sup>3+</sup> + 3e<sup>-</sup> &rarr; Bi<sup>0</sup> |&middot;2)."
        },
        {
            front: "Uzgodnij jonowo reakcję MnO<sub>4</sub><sup>-</sup> z SO<sub>3</sub><sup>2-</sup> w środowisku obojętnym i określ wynikowy odczyn roztworu.",
            back: "2MnO<sub>4</sub><sup>-</sup> + 3SO<sub>3</sub><sup>2-</sup> + H<sub>2</sub>O &rarr; 2MnO<sub>2</sub>&darr; + 3SO<sub>4</sub><sup>2-</sup> + 2OH<sup>-</sup>. Powstające po stronie produktów jony OH<sup>-</sup> nadają roztworowi odczyn zasadowy."
        },
        {
            front: "Czym różni się reakcja dysproporcjonowania (dysmutacji) od reakcji synproporcjonowania (komproporcjonowania)?",
            back: "W dysproporcjonowaniu ten sam pierwiastek z jednego pośredniego stopnia utlenienia przechodzi na dwa skrajne (niższy i wyższy). W synproporcjonowaniu ten sam pierwiastek z dwóch różnych stopni utlenienia przechodzi na jeden wspólny (pośredni) stopień."
        },
        {
            front: "Zapisz i uzgodnij równanie reakcji synproporcjonowania Mn<sup>2+</sup> z MnO<sub>4</sub><sup>-</sup> w środowisku obojętnym oraz określ wynikowy odczyn roztworu.",
            back: "3Mn<sup>2+</sup> + 2MnO<sub>4</sub><sup>-</sup> + 6H<sub>2</sub>O &rarr; 5MnO<sub>2</sub>&darr; + 4H<sub>3</sub>O<sup>+</sup> (cząsteczkowo: 3MnSO<sub>4</sub> + 2KMnO<sub>4</sub> + 2H<sub>2</sub>O &rarr; 5MnO<sub>2</sub>&darr; + K<sub>2</sub>SO<sub>4</sub> + 2H<sub>2</sub>SO<sub>4</sub>). Odczyn roztworu staje się kwasowy."
        },
        {
            front: "Zapisz uzgodnione równania dysproporcjonowania jodu (I<sub>2</sub>) w roztworze zasady (OH<sup>-</sup>) oraz rozkładu kwasu azotowego(III) (HNO<sub>2</sub>).",
            back: "Dla jodu: 3I<sub>2</sub> + 6OH<sup>-</sup> &rarr; 5I<sup>-</sup> + IO<sub>3</sub><sup>-</sup> + 3H<sub>2</sub>O. Dla kwasu azotowego(III): 3HNO<sub>2</sub> &rarr; HNO<sub>3</sub> + 2NO&uarr; + H<sub>2</sub>O."
        },
        {
            front: "Zapisz równania połówkowe utleniania aldehydu octowego (CH<sub>3</sub>CHO) do jonu octanowego oraz redukcji jonu NO<sub>2</sub><sup>-</sup> do amoniaku (NH<sub>3</sub>) w środowisku zasadowym.",
            back: "Utlenianie etanalu: CH<sub>3</sub>CHO + 3OH<sup>-</sup> &rarr; CH<sub>3</sub>COO<sup>-</sup> + 2H<sub>2</sub>O + 2e<sup>-</sup>. Redukcja azotanu(III): NO<sub>2</sub><sup>-</sup> + 5H<sub>2</sub>O + 6e<sup>-</sup> &rarr; NH<sub>3</sub> + 7OH<sup>-</sup>."
        },
        {
            front: "Uzgodnij równanie reakcji jodku wodoru (HI) ze stężonym kwasem siarkowym(VI): HI + H<sub>2</sub>SO<sub>4</sub> &rarr; I<sub>2</sub> + H<sub>2</sub>S + H<sub>2</sub>O.",
            back: "8HI + H<sub>2</sub>SO<sub>4</sub> &rarr; 4I<sub>2</sub> + H<sub>2</sub>S + 4H<sub>2</sub>O (HI jako silny reduktor redukuje siarkę ze stopnia +VI aż do -II w H<sub>2</sub>S)."
        },
        {
            front: "Uzgodnij równanie utleniania fosforu kwasem azotowym(V): P + HNO<sub>3</sub> + H<sub>2</sub>O &rarr; H<sub>3</sub>PO<sub>4</sub> + NO.",
            back: "3P + 5HNO<sub>3</sub> + 2H<sub>2</sub>O &rarr; 3H<sub>3</sub>PO<sub>4</sub> + 5NO&uarr; (P<sup>0</sup> &rarr; P<sup>V</sup> + 5e<sup>-</sup> |&middot;3; N<sup>V</sup> + 3e<sup>-</sup> &rarr; N<sup>II</sup> |&middot;5)."
        },
        {
            front: "Uzgodnij równanie utleniania jodu wodą chlorową: Cl<sub>2</sub> + I<sub>2</sub> + H<sub>2</sub>O &rarr; HIO<sub>3</sub> + HCl.",
            back: "5Cl<sub>2</sub> + I<sub>2</sub> + 6H<sub>2</sub>O &rarr; 2HIO<sub>3</sub> + 10HCl (I<sub>2</sub><sup>0</sup> &rarr; 2I<sup>V</sup> + 10e<sup>-</sup> |&middot;1; Cl<sub>2</sub><sup>0</sup> + 2e<sup>-</sup> &rarr; 2Cl<sup>-I</sup> |&middot;5)."
        },
        {
            front: "Zapisz równanie reakcji fluoru (F<sub>2</sub>) z wodą (H<sub>2</sub>O) oraz wskaż utleniacz i reduktor.",
            back: "2F<sub>2</sub> + 2H<sub>2</sub>O &rarr; 4HF + O<sub>2</sub>&uarr;. Utleniaczem jest F<sub>2</sub> (redukuje się z 0 do -I), a reduktorem jest H<sub>2</sub>O (tlen utlenia się z -II do 0)."
        },
        {
            front: "Co określa szereg aktywności (napięciowy) metali i jak zmieniają się w nim właściwości redukujące metalu oraz utleniające jego kationu?",
            back: "Szereg porządkuje metale według rosnącego potencjału standardowego E&deg;. Im niższy (bardziej ujemny) potencjał E&deg;, tym metal jest aktywniejszy i jest silniejszym reduktorem, a jego kation słabszym utleniaczem."
        },
        {
            front: "Porównaj warunki reakcji z wodą dla: 1) litowców (Na, K), 2) glinu, cynku i żelaza (Al, Zn, Fe), 3) berylu (Be) i miedzi (Cu).",
            back: "1) Na, K reagują gwałtownie z zimną wodą (pływają po powierzchni). 2) Al, Zn, Fe nie reagują z ciekłą wodą (nawet wrzącą), lecz dopiero z gorącą parą wodną (~150&deg;C). 3) Be (jedyny berylowiec!) oraz Cu, Ag, Au, Mn, Cr nie reagują z wodą w żadnych warunkach."
        },
        {
            front: "Czym różnią się kwasy nieutleniające (np. HCl, rozc. H<sub>2</sub>SO<sub>4</sub>) od kwasów utleniających (stęż./rozc. HNO<sub>3</sub>, stęż. H<sub>2</sub>SO<sub>4</sub>) w reakcjach z metalami?",
            back: "W kwasach nieutleniających utleniaczem jest kation H<sup>+</sup> (wydziela się H<sub>2</sub>, reagują tylko metale nad wodorem). W kwasach utleniających utleniaczem jest reszta kwasowa (reagują też z Cu, Ag, Hg; nigdy nie wydziela się H<sub>2</sub>, lecz tlenki np. NO<sub>2</sub>, NO, SO<sub>2</sub>)."
        },
        {
            front: "Jakie gazy wydzielają się w reakcji miedzi (Cu) z: 1) stężonym HNO<sub>3</sub>, 2) rozcieńczonym HNO<sub>3</sub>, 3) stężonym H<sub>2</sub>SO<sub>4</sub>?",
            back: "1) Ze stężonym HNO<sub>3</sub>: czerwonobrunatny NO<sub>2</sub>. 2) Z rozcieńczonym HNO<sub>3</sub>: bezbarwny NO. 3) Ze stężonym H<sub>2</sub>SO<sub>4</sub>: bezbarwny SO<sub>2</sub>."
        },
        {
            front: "Na czym polega zjawisko pasywacji i które trzy metale mu ulegają?",
            back: "Pasywacja to wytworzenie na powierzchni metalu zwartej, szczelnej warstewki tlenku pod wpływem silnego utleniacza, co izoluje metal i hamuje dalszą reakcję. Ulegają jej na zimno w stężonym HNO<sub>3</sub> i stężonym H<sub>2</sub>SO<sub>4</sub>: glin (Al), żelazo (Fe) oraz chrom (Cr)."
        },
        {
            front: "Co to jest woda królewska (aqua regia) i jak reaguje ze złotem (Au)?",
            back: "To mieszanina stężonego HCl i stężonego HNO<sub>3</sub> w stosunku objętościowym 3 : 1. Roztwarza złoto i platynę: Au + 4HCl + HNO<sub>3</sub> &rarr; H[AuCl<sub>4</sub>] + NO&uarr; + 2H<sub>2</sub>O."
        },
        {
            front: "Kiedy metal może wyprzeć inny metal z wodnego roztworu jego soli i dlaczego zasada ta nie działa dla sodu (Na) ani wapnia (Ca)?",
            back: "Metal wypiera inny metal z roztworu soli, gdy leży wyżej od niego w szeregu aktywności (np. Zn + Cu<sup>2+</sup> &rarr; Zn<sup>2+</sup> + Cu). Litowce i berylowce (Na, K, Ca) nie wypierają metalu, gdyż najpierw gwałtownie reagują z wodą z wydzieleniem H<sub>2</sub> i jonów OH<sup>-</sup>."
        },
        {
            front: "Jak należy poprawnie zapisać na maturze brak przebiegu reakcji (np. Cu + ZnSO<sub>4</sub> lub Cu + HCl)?",
            back: "Należy zawsze zapisać słownie: „Reakcja nie zachodzi”. Pozostawienie pustego miejsca lub przekreślenie jest traktowane przez egzaminatora jako brak odpowiedzi."
        },
        {
            front: "Zapisz dwa etapy przemian przemysłowego otrzymywania cynku z blendy cynkowej (ZnS).",
            back: "Etap I (prażenie utleniające): 2ZnS + 3O<sub>2</sub> &rarr; 2ZnO + 2SO<sub>2</sub>. Etap II (redukcja węglem lub CO): ZnO + C &rarr; Zn + CO (lub ZnO + CO &rarr; Zn + CO<sub>2</sub>)."
        },
        {
            front: "Zapisz równanie reakcji otrzymywania metalicznego tytanu z TiCl<sub>4</sub> za pomocą magnezu.",
            back: "TiCl<sub>4</sub> + 2Mg &rarr; Ti + 2MgCl<sub>2</sub> (magnez pełni rolę reduktora)."
        },
        {
            front: "Jak w laboratorium otrzymuje się gazowy chlor (Cl<sub>2</sub>) w reakcji redoks? Podaj równanie z użyciem PbO<sub>2</sub> lub MnO<sub>2</sub>.",
            back: "Przez utlenianie stężonego kwasu solnego (HCl) silnymi utleniaczami: PbO<sub>2</sub> + 4HCl &rarr; PbCl<sub>2</sub> + Cl<sub>2</sub>&uarr; + 2H<sub>2</sub>O (lub MnO<sub>2</sub> + 4HCl &rarr; MnCl<sub>2</sub> + Cl<sub>2</sub>&uarr; + 2H<sub>2</sub>O)."
        },
        {
            front: "Na czym polega doświadczenie „Bijące serce rtęciowe” i jakie dwie reakcje redoks odpowiadają za drgania kropli rtęci?",
            back: "Etap I (utlenianie Hg przez KMnO<sub>4</sub>/H<sub>2</sub>SO<sub>4</sub> zmieniające napięcie powierzchniowe): 10Hg + 8H<sub>2</sub>SO<sub>4</sub> + 2KMnO<sub>4</sub> &rarr; 5Hg<sub>2</sub>SO<sub>4</sub> + K<sub>2</sub>SO<sub>4</sub> + 2MnSO<sub>4</sub> + 8H<sub>2</sub>O. Etap II (redukcja przy dotknięciu żelaznym drucikiem): Fe + Hg<sub>2</sub>SO<sub>4</sub> &rarr; 2Hg + FeSO<sub>4</sub>."
        },
        {
            front: "Uzgodnij równanie utleniania kationów Fe<sup>2+</sup> za pomocą MnO<sub>4</sub><sup>-</sup> w środowisku kwasowym (zapis z H<sub>3</sub>O<sup>+</sup> oraz z H<sup>+</sup>).",
            back: "Z H<sub>3</sub>O<sup>+</sup>: 5Fe<sup>2+</sup> + MnO<sub>4</sub><sup>-</sup> + 8H<sub>3</sub>O<sup>+</sup> &rarr; 5Fe<sup>3+</sup> + Mn<sup>2+</sup> + 12H<sub>2</sub>O. Z H<sup>+</sup>: 5Fe<sup>2+</sup> + MnO<sub>4</sub><sup>-</sup> + 8H<sup>+</sup> &rarr; 5Fe<sup>3+</sup> + Mn<sup>2+</sup> + 4H<sub>2</sub>O (suma ładunków po obu stronach wynosi +17)."
        },
        {
            front: "Uzgodnij równanie utleniania jodku potasu (KI) przez KMnO<sub>4</sub> w środowisku obojętnym.",
            back: "2KMnO<sub>4</sub> + 6KI + 4H<sub>2</sub>O &rarr; 2MnO<sub>2</sub>&darr; + 3I<sub>2</sub> + 8KOH (Mn<sup>VII</sup> + 3e<sup>-</sup> &rarr; Mn<sup>IV</sup> |&middot;2; 2I<sup>-I</sup> &rarr; I<sub>2</sub><sup>0</sup> + 2e<sup>-</sup> |&middot;3)."
        },
        {
            front: "Uzgodnij w zapisie jonowym skróconym reakcję utleniania azotanu(III) (NO<sub>2</sub><sup>-</sup>) przez dichromian(VI) (Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>) w środowisku kwasowym.",
            back: "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 3NO<sub>2</sub><sup>-</sup> + 8H<sup>+</sup> &rarr; 2Cr<sup>3+</sup> + 3NO<sub>3</sub><sup>-</sup> + 4H<sub>2</sub>O."
        },
        {
            front: "Który metal spośród {Zn, Fe, Cu} należy wybrać, aby doświadczalnie odróżnić stężony HNO<sub>3</sub> od HCl? Uzasadnij wybór.",
            back: "Miedź (Cu). Cynk (Zn) przereaguje z obydwoma kwasami, a żelazo (Fe) ulegnie pasywacji w stężonym HNO<sub>3</sub>. Miedź nie reaguje z HCl, a w stężonym HNO<sub>3</sub> roztwarza się (niebieski roztwór i czerwonobrunatny gaz NO<sub>2</sub>)."
        },
        {
            front: "Jakie obserwacje i wniosek wynikają z zanurzenia oczyszczonej wstążki magnezowej w wodnym roztworze FeCl<sub>3</sub>?",
            back: "Obserwacja: Wstążka magnezowa pokrywa się ciemnym/rdzawym nalotem żelaza. Wniosek: Magnez jest metalem aktywniejszym (silniejszym reduktorem) niż żelazo i wypiera je z roztworu soli (3Mg + 2FeCl<sub>3</sub> &rarr; 3MgCl<sub>2</sub> + 2Fe&darr;)."
        }
    ]
};