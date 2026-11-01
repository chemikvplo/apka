// Dział V. Roztwory i układy dyspersyjne (Indeks 4 na liście)
appData[4] = {
    notatki: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">📚 KOMPENDIUM MATURALNE: ROZTWORY I UKŁADY DYSPERSYJNE</h2>

        <!-- SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Mieszaniny i Układy Dyspersyjne – Klasyfikacja, Koloidy i Metody Rozdzielania</h3>
            <p><strong>Mieszanina</strong> to układ powstały po zmieszaniu co najmniej dwóch różnych substancji w dowolnym stosunku masowym, w którym każdy ze składników zachowuje swoje indywidualne właściwości chemiczne. <strong>Faza</strong> to jednorodna pod względem stanu fizycznego i składu część układu oddzielona od innych części wyraźną powierzchnią rozdziału (granicą faz).</p>
            <ul class="note-list">
                <li><strong>Mieszaniny jednorodne (homogeniczne, jednofazowe):</strong> Składników nie można rozróżnić gołym okiem ani za pomocą prostych przyrządów optycznych (np. lupy czy mikroskopu), ponieważ tworzą jedną fazę.</li>
                <li><strong>Mieszaniny niejednorodne (heterogeniczne, wielofazowe):</strong> Składniki tworzą odrębne, widoczne fazy fizyczne (np. olej roślinny na powierzchni wody, opiłki żelaza z siarką, granit).</li>
                <li><strong>Roztwór:</strong> Mieszanina optycznie jednorodna złożona z co najmniej dwóch składników: rozpuszczalnika oraz substancji rozpuszczonej.</li>
                <li><strong>Rozpuszczalnik (faza rozpraszająca, ośrodek dyspersyjny):</strong> Składnik dominujący ilościowo w układzie, który narzuca swój stan skupienia całemu roztworowi.</li>
                <li><strong>Substancja rozpuszczona (faza rozproszona):</strong> Składnik rozproszony w rozpuszczalniku (liczba cząstek substancji rozpuszczonej jest zawsze mniejsza niż liczba cząstek rozpuszczalnika).</li>
            </ul>

            <h4>Klasyfikacja roztworów ze względu na stan skupienia składników</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Rozpuszczalnik</th>
                            <th>Substancja rozpuszczona</th>
                            <th>Stan roztworu</th>
                            <th>Przykład maturalny</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Gaz</strong></td>
                            <td>Gaz</td>
                            <td>Gazowy</td>
                            <td>Powietrze (O<sub>2</sub>, CO<sub>2</sub>, Ar w N<sub>2</sub>)</td>
                        </tr>
                        <tr>
                            <td><strong>Gaz</strong></td>
                            <td>Ciecz</td>
                            <td>Gazowy</td>
                            <td>Mgła (kropelki wody w powietrzu)</td>
                        </tr>
                        <tr>
                            <td><strong>Gaz</strong></td>
                            <td>Ciało stałe</td>
                            <td>Gazowy</td>
                            <td>Dym (sadza lub pył w powietrzu)</td>
                        </tr>
                        <tr>
                            <td><strong>Ciecz</strong></td>
                            <td>Gaz</td>
                            <td>Ciekły</td>
                            <td>Woda gazowana (CO<sub>2</sub> w wodzie)</td>
                        </tr>
                        <tr>
                            <td><strong>Ciecz</strong></td>
                            <td>Ciecz</td>
                            <td>Ciekły</td>
                            <td>Etanol w wodzie (ocet, wódka)</td>
                        </tr>
                        <tr>
                            <td><strong>Ciecz</strong></td>
                            <td>Ciało stałe</td>
                            <td>Ciekły</td>
                            <td>Cukier lub NaCl w wodzie</td>
                        </tr>
                        <tr>
                            <td><strong>Ciało stałe</strong></td>
                            <td>Gaz</td>
                            <td>Stały</td>
                            <td>Wodór rozpuszczony w palladzie</td>
                        </tr>
                        <tr>
                            <td><strong>Ciało stałe</strong></td>
                            <td>Ciecz</td>
                            <td>Stały</td>
                            <td>Woda zamknięta w krysztale kwarcu</td>
                        </tr>
                        <tr>
                            <td><strong>Ciało stałe</strong></td>
                            <td>Ciało stałe</td>
                            <td>Stały</td>
                            <td>Stopy metali (mosiądz, brąz, stal)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p><em>Uwaga: Stan skupienia powstałego układu jest zawsze tożsamy ze stanem skupienia rozpuszczalnika. Mgła i dym w ujęciu mikroskopowym stanowią aerozole (układy koloidalne lub zawiesiny), jednak w klasyfikacji opartej na dominującym składniku bywają przywoływane jako przykłady rozproszenia cieczy lub ciała stałego w gazie.</em></p>

            <h4>Podział mieszanin ciekłych ze względu na wielkość cząstek fazy rozproszonej</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Cecha porównawcza</th>
                            <th>Roztwór właściwy</th>
                            <th>Koloid (roztwór koloidalny)</th>
                            <th>Zawiesina</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Średnica cząstek</strong></td>
                            <td>Poniżej 10<sup>&minus;9</sup> m</td>
                            <td>Od 10<sup>&minus;9</sup> m do 10<sup>&minus;7</sup> m</td>
                            <td>Powyżej 10<sup>&minus;7</sup> m</td>
                        </tr>
                        <tr>
                            <td><strong>Typ układu</strong></td>
                            <td>Homogeniczny (jednofazowy)</td>
                            <td>Heterogeniczny (mikroskopowo)</td>
                            <td>Heterogeniczny (wielofazowy)</td>
                        </tr>
                        <tr>
                            <td><strong>Wygląd i trwałość</strong></td>
                            <td>Przezroczysty, trwały</td>
                            <td>Pozornie jednorodny, trwały</td>
                            <td>Mętny, nietrwały (osad opada)</td>
                        </tr>
                        <tr>
                            <td><strong>Efekt Tyndalla</strong></td>
                            <td>Nie występuje</td>
                            <td><strong>Występuje (stożek świetlny)</strong></td>
                            <td>Brak (wiązka rozproszona/pochłonięta)</td>
                        </tr>
                        <tr>
                            <td><strong>Rozdział sączeniem</strong></td>
                            <td>Niemożliwy</td>
                            <td>Niemożliwy (zwykły sączek)</td>
                            <td>Możliwy na sączku</td>
                        </tr>
                        <tr>
                            <td><strong>Przykłady</strong></td>
                            <td>Wodny roztwór NaCl, KMnO<sub>4</sub></td>
                            <td>Mleko, zol białka, kleik skrobiowy</td>
                            <td>Mąka z wodą, osad AgCl w wodzie</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Choć koloidy wydają się gołym okiem jednorodne, według podstawy programowej zalicza się je wraz z zawiesinami do <strong>mieszanin niejednorodnych (układów heterogenicznych)</strong>.</p>

            <h4>Słownik pojęć koloidalnych wymaganych na maturze</h4>
            <ul class="note-list">
                <li><strong>Zol:</strong> Płynny układ koloidalny, w którym cząstki fazy rozproszonej przemieszczają się swobodnie w ośrodku dyspersyjnym (np. roztwór białka kurzego w wodzie).</li>
                <li><strong>Żel:</strong> Układ koloidalny o utraconej lub silnie ograniczonej płynności (galaretowaty osad lub galareta), powstający wskutek łączenia się cząstek zolu w przestrzenną sieć.</li>
                <li><strong>Koloid liofilowy (w wodzie: hydrofilowy):</strong> Koloid, którego cząstki silnie oddziałują z cząsteczkami rozpuszczalnika, tworząc otoczki solwatacyjne i wykazując zdolność do pęcznienia (np. białka, żelatyna, skrobia).</li>
                <li><strong>Koloid liofobowy (w wodzie: hydrofobowy):</strong> Koloid, którego cząstki nie wykazują powinowactwa do rozpuszczalnika, przez co układ jest mało trwały i łatwo ulega wytrąceniu (np. zole metali szlachetnych, zol AgCl).</li>
                <li><strong>Efekt Tyndalla:</strong> Zjawisko rozpraszania światła przez cząstki koloidalne, objawiające się widoczną smugą (stożkiem świetlnym) po przepuszczeniu skupionej wiązki światła (np. lasera) przez naczynie z koloidem.</li>
                <li><strong>Koagulacja (wysalanie):</strong> Proces łączenia się pojedynczych cząstek koloidalnych w większe skupiska (agregaty), prowadzący do przemiany zolu w żel (wytrącenia osadu) pod wpływem elektrolitu (np. NaCl), zmiany temperatury lub odwodnienia.</li>
                <li><strong>Peptyzacja:</strong> Proces odwrotny do koagulacji odwracalnej, polegający na ponownym rozproszeniu żelu i przejściu w zol (np. po dolaniu wody destylowanej do białka wysolonego chlorkiem sodu).</li>
                <li><strong>Denaturacja:</strong> Nieodwracalna koagulacja białka połączona ze zniszczeniem jego struktury przestrzennej (II-, III- i IV-rzędowej) pod wpływem wysokiej temperatury, stężonych kwasów i zasad, soli metali ciężkich (np. CuSO<sub>4</sub>, Pb(NO<sub>3</sub>)<sub>2</sub>) lub alkoholi.</li>
                <li><strong>Emulsja i rola emulgatora:</strong> Emulsja to koloidalny układ heterogeniczny dwóch wzajemnie nierozpuszczalnych cieczy (np. oleju i wody), z których jedna jest rozproszona w drugiej w formie mikroskopijnych kropelek. Trwałe utworzenie emulsji (np. majonezu, mleka, kremu kosmetycznego) wymaga energicznego wstrząsania oraz dodatku <strong>emulgatora</strong> (np. lecytyny z żółtka jaja lub mydła). Cząsteczki emulgatora mają budowę <strong>amfifilową</strong>: częścią hydrofilową (polarną „główką”) zwracają się w stronę fazy wodnej, a częścią hydrofobową (niepolarnym łańcuchem węglowodorowym, „ogonem”) wnikają do kropelki tłuszczu, zapobiegając zlewaniu się kropelek i rozwarstwieniu cieczy.</li>
            </ul>

            <h4>Metody rozdzielania mieszanin jednorodnych i niejednorodnych (procesy fizyczne)</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Metoda rozdziału</th>
                            <th>Typ mieszaniny</th>
                            <th>Wykorzystywana właściwość fizyczna</th>
                            <th>Przykładowy układ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Odparowanie</strong></td>
                            <td>Jednorodna (ciało stałe w cieczy)</td>
                            <td>Różnica lotności (temperatury wrzenia)</td>
                            <td>Roztwór wodny NaCl</td>
                        </tr>
                        <tr>
                            <td><strong>Krystalizacja</strong></td>
                            <td>Jednorodna (ciało stałe w cieczy)</td>
                            <td>Zmiana rozpuszczalności z temperaturą</td>
                            <td>Roztwór wodny CuSO<sub>4</sub> lub cukru</td>
                        </tr>
                        <tr>
                            <td><strong>Destylacja</strong></td>
                            <td>Jednorodna (ciecz w cieczy)</td>
                            <td>Różnica temperatur wrzenia cieczy</td>
                            <td>Woda z etanolem, ropa naftowa</td>
                        </tr>
                        <tr>
                            <td><strong>Ekstrakcja</strong></td>
                            <td>Jednorodna (ciecz lub ciało stałe)</td>
                            <td>Różnica rozpuszczalności w dwóch cieczach</td>
                            <td>Jod z wody za pomocą CCl<sub>4</sub> / benzyny</td>
                        </tr>
                        <tr>
                            <td><strong>Chromatografia</strong></td>
                            <td>Jednorodna (ciekła lub gazowa)</td>
                            <td>Różne powinowactwo do fazy stałej i ruchomej</td>
                            <td>Barwniki roślinne (chlorofil, ksantofil)</td>
                        </tr>
                        <tr>
                            <td><strong>Sączenie (filtracja)</strong></td>
                            <td>Niejednorodna (zawiesina)</td>
                            <td>Różnica rozmiarów cząstek stałych i porów sączka</td>
                            <td>Piasek w wodzie, osad BaSO<sub>4</sub></td>
                        </tr>
                        <tr>
                            <td><strong>Dekantacja</strong></td>
                            <td>Niejednorodna (zawiesina)</td>
                            <td>Duża gęstość osadu po sedymentacji</td>
                            <td>Zlewanie wody znad opadłej kredy</td>
                        </tr>
                        <tr>
                            <td><strong>Zastosowanie rozdzielacza</strong></td>
                            <td>Niejednorodna (dwie ciecze)</td>
                            <td>Brak mieszalności i różnica gęstości cieczy</td>
                            <td>Olej roślinny i woda</td>
                        </tr>
                        <tr>
                            <td><strong>Elektroforeza</strong></td>
                            <td>Koloid (lub mieszanina jonów)</td>
                            <td>Różna ruchliwość w polu elektrycznym</td>
                            <td>Rozdział białek osocza krwi</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="note-alert danger">
                ⚠️ <strong>Uwaga maturalna – rozpuszczanie a roztwarzanie oraz pułapki laboratoryjne:</strong>
                <ul class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li><strong>Rozpuszczanie (proces fizyczny):</strong> Przechodzenie substancji do roztworu bez zmiany jej składu chemicznego (ewentualnie z dysocjacją elektrolityczną i hydratacją jonów). Po odparowaniu rozpuszczalnika odzyskuje się tę samą substancję (np. cukier lub NaCl w wodzie), a dla samego procesu fizycznego nie zapisuje się równania reakcji chemicznej.</li>
                    <li><strong>Roztwarzanie (proces chemiczny):</strong> Przechodzenie ciała stałego do roztworu w wyniku nieodwracalnej reakcji chemicznej z rozpuszczalnikiem lub składnikiem roztworu (np. kwasem lub zasadą). Po odparowaniu wody otrzymuje się zupełnie nowy związek chemiczny, a proces opisuje równanie reakcji:
                        <br>2 Na + 2 H<sub>2</sub>O &rarr; 2 NaOH + H<sub>2</sub>&uarr; &nbsp;&nbsp;oraz&nbsp;&nbsp; Zn + 2 HCl &rarr; ZnCl<sub>2</sub> + H<sub>2</sub>&uarr;
                    </li>
                    <li><strong>Pułapka z sączeniem koloidów:</strong> Zwykła bibuła filtracyjna zatrzymuje wyłącznie cząstki zawiesin (&gt; 10<sup>&minus;7</sup> m). Cząstki koloidu (np. kleiku skrobiowego lub zolu białka) swobodnie przechodzą przez pory klasycznego sączka – nie wolno proponować sączenia do oddzielenia koloidu od rozpuszczalnika!</li>
                    <li><strong>Zasada wlewania kwasu do wody:</strong> Sporządzając roztwory stężonych kwasów (zwłaszcza stężonego H<sub>2</sub>SO<sub>4</sub>), zawsze wlewa się ciecz o większej gęstości (kwas, <i>d</i> &approx; 1,84 g&middot;cm<sup>&minus;3</sup>) cienkim strumieniem do cieczy o mniejszej gęstości (wody, <i>d</i> &approx; 1,00 g&middot;cm<sup>&minus;3</sup>). Odwrotna kolejność powoduje gwałtowne wrzenie pierwszej porcji wody na powierzchni ciężkiego kwasu i rozpryskiwanie żrącego roztworu.</li>
                </ul>
            </div>
        </div>

        <!-- SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Rozpuszczalność Substancji oraz Rodzaje Roztworów Właściwych</h3>
            <p><strong>Definicja rozpuszczalności (<i>R</i>):</strong> Maksymalna liczba gramów substancji rozpuszczonej (<i>m<sub>s</sub></i>), jaką można rozpuścić w <strong>100 g rozpuszczalnika</strong> (najczęściej wody) w określonej temperaturze i pod określonym ciśnieniem, aby uzyskać roztwór nasycony. Pełny zapis maturalny uwzględnia wzór substancji w indeksie dolnym oraz temperaturę w indeksie górnym:</p>
            <div class="chem-eq">
                <i>R</i><sup>20&deg;C</sup><sub>NaNO<sub>3</sub></sub> = 88 g / 100 g H<sub>2</sub>O &nbsp;&nbsp;lub&nbsp;&nbsp; <i>R</i><sup>30&deg;C</sup><sub>NaNO<sub>3</sub></sub> = 96 g / 100 g H<sub>2</sub>O
            </div>
            <p>Zapis ten oznacza, że w temperaturze 30&deg;C w 100 g wody rozpuści się maksymalnie 96 g azotanu(V) sodu, tworząc roztwór nasycony o łącznej masie <i>m<sub>r</sub></i> = 100 g + 96 g = 196 g.</p>

            <h4>Czynniki wpływające na rozpuszczalność a szybkość rozpuszczania</h4>
            <ul class="note-list">
                <li><strong>Rodzaj substancji i rozpuszczalnika (reguła „podobne rozpuszcza się w podobnym”):</strong> Substancje o budowie jonowej (np. NaCl, KOH) oraz kowalencyjnej polarnej (np. NH<sub>3</sub>, HCl, etanol, glukoza) dobrze rozpuszczają się w rozpuszczalnikach polarnych (np. w wodzie). Substancje niepolarne (np. I<sub>2</sub>, Br<sub>2</sub>, S<sub>8</sub>, tłuszcze, węglowodory) rozpuszczają się w rozpuszczalnikach niepolarnych (np. w benzynie, heksanie, CCl<sub>4</sub>).</li>
                <li><strong>Temperatura (dla ciał stałych):</strong> Rozpuszczalność zdecydowanej większości substancji stałych w wodzie <strong>rośnie</strong> wraz ze wzrostem temperatury, ponieważ niszczenie ich sieci krystalicznej jest procesem endoenergetycznym (&Delta;<i>H</i> &gt; 0). Wyjątkami, których rozpuszczalność w wodzie <strong>maleje</strong> ze wzrostem temperatury (proces silnie egzoenergetyczny, &Delta;<i>H</i> &lt; 0), są m.in. wodorotlenek wapnia Ca(OH)<sub>2</sub> oraz siarczan(VI) ceru(III) Ce<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.</li>
                <li><strong>Temperatura (dla gazów):</strong> Rozpuszczalność wszystkich gazów w wodzie (np. O<sub>2</sub>, CO<sub>2</sub>, NH<sub>3</sub>, HCl, SO<sub>2</sub>) <strong>zawsze maleje</strong> wraz ze wzrostem temperatury, gdyż dostarczanie energii cieplnej zwiększa energię kinetyczną cząsteczek gazu i ułatwia im opuszczenie cieczy.</li>
                <li><strong>Ciśnienie:</strong> Wywiera istotny wpływ wyłącznie na rozpuszczalność gazów – im wyższe jest ciśnienie gazu nad powierzchnią cieczy, tym większa jest jego rozpuszczalność w tej cieczy (zgodnie z prawem Henry'ego).</li>
                <li><strong>Szybkość rozpuszczania (pułapka pojęciowa!):</strong> Rozdrobnienie substancji stałej (utarcie w moździerzu) oraz mieszanie roztworu przyspieszają osiągnięcie stanu nasycenia (zwiększają <em>szybkość rozpuszczania</em>), ale <strong>nie zmieniają wartości rozpuszczalności <i>R</i></strong> w danej temperaturze. Ogrzewanie zwiększa natomiast zarówno szybkość rozpuszczania, jak i samą wartość rozpuszczalności większości ciał stałych.</li>
            </ul>

            <h4>Klasyfikacja substancji i roztworów właściwych na podstawie rozpuszczalności</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Kategoria</th>
                            <th>Kryterium ilościowe (na 100 g H<sub>2</sub>O)</th>
                            <th>Położenie punktu na wykresie</th>
                            <th>Właściwość układu / Przykład</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Substancja dobrze rozpuszczalna</strong></td>
                            <td><i>R</i> &gt; 2 g (w 20&deg;C)</td>
                            <td>Wysoko położona krzywa</td>
                            <td>Np. NaCl, KNO<sub>3</sub>, CuSO<sub>4</sub>, cukier</td>
                        </tr>
                        <tr>
                            <td><strong>Substancja średnio rozpuszczalna</strong></td>
                            <td>0,1 g &le; <i>R</i> &le; 2 g (w 20&deg;C)</td>
                            <td>Nisko położona krzywa</td>
                            <td>Np. CaSO<sub>4</sub>, Ca(OH)<sub>2</sub></td>
                        </tr>
                        <tr>
                            <td><strong>Substancja trudno rozpuszczalna</strong></td>
                            <td><i>R</i> &lt; 0,1 g (w 20&deg;C)</td>
                            <td>Tuż przy osi odciętych</td>
                            <td>Np. CaCO<sub>3</sub>, AgCl, BaSO<sub>4</sub></td>
                        </tr>
                        <tr>
                            <td><strong>Roztwór nienasycony</strong></td>
                            <td><i>m<sub>s</sub></i> &lt; <i>R</i> w danej temp.</td>
                            <td>Obszar <strong>poniżej</strong> krzywej <i>R</i>(<i>T</i>)</td>
                            <td>Można w nim rozpuścić kolejną porcję substancji</td>
                        </tr>
                        <tr>
                            <td><strong>Roztwór nasycony</strong></td>
                            <td><i>m<sub>s</sub></i> = <i>R</i> w danej temp.</td>
                            <td>Punkt <strong>dokładnie na</strong> krzywej <i>R</i>(<i>T</i>)</td>
                            <td>Stan równowagi dynamicznej z ewentualnym osadem</td>
                        </tr>
                        <tr>
                            <td><strong>Roztwór przesycony</strong></td>
                            <td><i>m<sub>s</sub></i> &gt; <i>R</i> w danej temp.</td>
                            <td>Obszar <strong>powyżej</strong> krzywej <i>R</i>(<i>T</i>)</td>
                            <td>Nietrwały; wrzucenie kryształka wywołuje krystalizację</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Roztwór przesycony można otrzymać wyłącznie przez bardzo powolne, ostrożne ochładzanie klarownego roztworu nasyconego (pozbawionego pyłków i osadu). Wstrząśnięcie naczynia, potarcie ścianki bagietką szklaną lub wprowadzenie zarodka krystalizacji natychmiast wytrąca nadmiar substancji (&Delta;<i>m</i> = <i>m<sub>s</sub></i> &minus; <i>R</i>), a roztwór nad osadem staje się roztworem nasyconym.</p>

            <h4>Interpretacja wykresów (krzywych) rozpuszczalności na maturze</h4>
            <ul class="note-list">
                <li><strong>Prawidłowy opis osi wykresu:</strong> Oś pozioma (OX) musi przedstawiać temperaturę wyrażoną w &deg;C lub K, natomiast oś pionowa (OY) rozpuszczalność wyrażoną w <strong>g / 100 g H<sub>2</sub>O</strong>. Brak jednostek lub opisu osi skutkuje utratą punktów.</li>
                <li><strong>Załamanie krzywej rozpuszczalności (np. Cu(NO<sub>3</sub>)<sub>2</sub> w ok. 60&deg;C):</strong> Gwałtowne załamanie na wykresie rozpuszczalności soli wynika z przejścia fazowego jednego hydratu w inny o mniejszej zawartości wody krystalizacyjnej (np. przejście heksahydratu w trihydrat).</li>
            </ul>

            <div class="note-alert danger">
                🔥 <strong>Uwaga maturalna – dwie żelazne pułapki w zadaniach z rozpuszczalnością:</strong>
                <ol class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li><strong>Rozpuszczalność <i>R</i> to zawsze 100 g wody, a nie 100 g roztworu:</strong> W roztworze nasyconym masa roztworu wynosi <i>m<sub>r</sub></i> = 100 g + <i>R</i>, dlatego stężenie procentowe roztworu nasyconego jest zawsze mniejsze liczbowo od jego rozpuszczalności:
                        <div class="chem-eq" style="margin: 6px 0;"><i>C</i><sub><i>p</i>(nas.)</sub> = [<i>R</i> / (100 g + <i>R</i>)] &middot; 100%</div>
                    </li>
                    <li><strong>Osad na dnie probówki nie wchodzi w skład roztworu:</strong> Jeśli do 100 g wody w temperaturze 30&deg;C (<i>R</i> = 96 g / 100 g H<sub>2</sub>O) wsypiemy 120 g NaNO<sub>3</sub>, to rozpuści się wyłącznie 96 g soli, a pozostałe 24 g opadnie na dno jako osad. Masa powstałego roztworu nasyconego wynosi wówczas <strong>196 g</strong> (a nie 220 g!), a osad pomija się przy obliczaniu stężenia procentowego roztworu znad osadu.</li>
                </ol>
            </div>
        </div>

        <!-- SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Stężenia Roztworów – Wzory, Zależności i Przeliczanie Jednostek</h3>
            <ul class="note-list">
                <li><strong>Stężenie procentowe masowe (<i>C<sub>p</sub></i>, procent masowy):</strong> Określa liczbę gramów substancji rozpuszczonej (<i>m<sub>s</sub></i>) zawartą w 100 g roztworu (<i>m<sub>r</sub></i>). Masa całego roztworu jest sumą masy rozpuszczalnika (<i>m<sub>w</sub></i>) oraz mas wszystkich substancji, które faktycznie uległy w nim rozpuszczeniu (<i>m<sub>r</sub></i> = <i>m<sub>w</sub></i> + <i>m</i><sub><i>s</i>1</sub> + <i>m</i><sub><i>s</i>2</sub> + ...).</li>
                <li><strong>Roztwór wieloskładnikowy (pułapka mianownika):</strong> Jeżeli w 90 g wody rozpuszczono jednocześnie 3 g KNO<sub>3</sub> oraz 7 g NaCl, to całkowita masa roztworu wynosi <i>m<sub>r</sub></i> = 90 g + 3 g + 7 g = 100 g. Stężenie procentowe KNO<sub>3</sub> w tym roztworze wynosi 3%, a stężenie NaCl wynosi 7%.</li>
                <li><strong>Procent objętościowy (<i>C</i><sub><i>p</i>(<i>V</i>)</sub>):</strong> Stosowany dla mieszanin cieczy lub gazów, wyraża stosunek objętości substancji rozpuszczonej (<i>V<sub>s</sub></i>) do objętości całego roztworu (<i>V<sub>r</sub></i>) wyrażonych w tej samej jednostce: <i>C</i><sub><i>p</i>(<i>V</i>)</sub> = (<i>V<sub>s</sub></i> / <i>V<sub>r</sub></i>) &middot; 100%.</li>
                <li><strong>Stężenie molowe (<i>C<sub>m</sub></i>) i gęstość roztworu (<i>d<sub>r</sub></i>):</strong> Stężenie molowe określa liczbę moli substancji rozpuszczonej (<i>n</i>) znajdującą się w 1 dm<sup>3</sup> (1000 cm<sup>3</sup>) roztworu (<i>V<sub>r</sub></i>). Łącznikiem pozwalającym przechodzić pomiędzy masą roztworu (<i>m<sub>r</sub></i>) a jego objętością (<i>V<sub>r</sub></i>) jest wyłącznie gęstość roztworu (<i>d<sub>r</sub></i> = <i>m<sub>r</sub></i> / <i>V<sub>r</sub></i>).</li>
            </ul>

            <h4>Zestawienie wzorów obliczeniowych dla roztworów (<i>M</i> – masa molowa w g&middot;mol<sup>&minus;1</sup>)</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Wielkość fizykochemiczna</th>
                            <th>Wzór definicyjny</th>
                            <th>Wzór przekształcony / przeliczeniowy</th>
                            <th>Jednostka na maturze</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Stężenie procentowe (<i>C<sub>p</sub></i>)</strong></td>
                            <td><i>C<sub>p</sub></i> = (<i>m<sub>s</sub></i> / <i>m<sub>r</sub></i>) &middot; 100%</td>
                            <td><i>C<sub>p</sub></i> = (<i>C<sub>m</sub></i> &middot; <i>M</i> &middot; 100%) / <i>d<sub>r</sub></i></td>
                            <td>% (procent masowy)</td>
                        </tr>
                        <tr>
                            <td><strong>Stężenie molowe (<i>C<sub>m</sub></i>)</strong></td>
                            <td><i>C<sub>m</sub></i> = <i>n</i> / <i>V<sub>r</sub></i></td>
                            <td><i>C<sub>m</sub></i> = <i>m<sub>s</sub></i> / (<i>M</i> &middot; <i>V<sub>r</sub></i>) = (<i>C<sub>p</sub></i> &middot; <i>d<sub>r</sub></i>) / (100% &middot; <i>M</i>)</td>
                            <td>mol&middot;dm<sup>&minus;3</sup></td>
                        </tr>
                        <tr>
                            <td><strong>Masa substancji (<i>m<sub>s</sub></i>)</strong></td>
                            <td><i>m<sub>s</sub></i> = (<i>C<sub>p</sub></i> &middot; <i>m<sub>r</sub></i>) / 100%</td>
                            <td><i>m<sub>s</sub></i> = <i>C<sub>m</sub></i> &middot; <i>V<sub>r</sub></i> &middot; <i>M</i></td>
                            <td>g</td>
                        </tr>
                        <tr>
                            <td><strong>Masa roztworu (<i>m<sub>r</sub></i>)</strong></td>
                            <td><i>m<sub>r</sub></i> = <i>m<sub>s</sub></i> + <i>m<sub>w</sub></i></td>
                            <td><i>m<sub>r</sub></i> = <i>d<sub>r</sub></i> &middot; <i>V<sub>r</sub></i> = (<i>m<sub>s</sub></i> &middot; 100%) / <i>C<sub>p</sub></i></td>
                            <td>g</td>
                        </tr>
                        <tr>
                            <td><strong>Liczba moli (<i>n</i>)</strong></td>
                            <td><i>n</i> = <i>m<sub>s</sub></i> / <i>M</i></td>
                            <td><i>n</i> = <i>C<sub>m</sub></i> &middot; <i>V<sub>r</sub></i></td>
                            <td>mol</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="note-alert">
                ⚠️ <strong>Pułapka jednostek gęstości przy przeliczaniu stężeń:</strong>
                <ul class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li>W zadaniach maturalnych gęstość roztworu podawana jest niemal zawsze w <strong>g&middot;cm<sup>&minus;3</sup></strong> (np. <i>d<sub>r</sub></i> = 1,19 g&middot;cm<sup>&minus;3</sup>), podczas gdy stężenie molowe odnosi się do <strong>1 dm<sup>3</sup></strong> (1000 cm<sup>3</sup>). Podstawiając dane bezpośrednio do wzoru <i>C<sub>m</sub></i> = (<i>C<sub>p</sub></i> &middot; <i>d<sub>r</sub></i>) / (100% &middot; <i>M</i>), należy bezwzględnie przeliczyć gęstość roztworu na jednostkę <strong>g&middot;dm<sup>&minus;3</sup></strong>, mnożąc wartość w g&middot;cm<sup>&minus;3</sup> przez 1000 (np. 1,19 g&middot;cm<sup>&minus;3</sup> = 1190 g&middot;dm<sup>&minus;3</sup>).</li>
                    <li>Jeżeli autor zadania nie podaje gęstości roztworu, <strong>nie wolno zakładać</strong>, że wynosi ona 1 g&middot;cm<sup>&minus;3</sup> – gęstość równa 1 g&middot;cm<sup>&minus;3</sup> (1000 g&middot;dm<sup>&minus;3</sup>) przysługuje domyślnie wyłącznie czystej wodzie destylowanej.</li>
                </ul>
            </div>
        </div>

        <!-- SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Zatężanie, Rozcieńczanie i Mieszanie Roztworów – Algorytmy i Reguła Krzyżowa</h3>
            <p>Każdą operację na roztworach można rozwiązać z bilansu masy substancji (<i>m</i><sub><i>s</i>1</sub> + <i>m</i><sub><i>s</i>2</sub> = <i>m</i><sub><i>s</i>3</sub>), bilansu masy roztworu (<i>m</i><sub><i>r</i>1</sub> + <i>m</i><sub><i>r</i>2</sub> = <i>m</i><sub><i>r</i>3</sub>) lub bilansu liczby moli (<i>n</i><sub>1</sub> + <i>n</i><sub>2</sub> = <i>n</i><sub>3</sub>).</p>

            <h4>Zmiany parametrów roztworu podczas operacji laboratoryjnych</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Operacja laboratoryjna</th>
                            <th>Masa substancji (<i>m<sub>s</sub></i>)</th>
                            <th>Masa roztworu (<i>m<sub>r</sub></i>)</th>
                            <th>Stężenie końcowe (<i>C</i><sub><i>p</i> końc.</sub>)</th>
                            <th>Wartość <i>C<sub>p</sub></i> dodawanego składnika</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Rozcieńczanie (dolanie H<sub>2</sub>O)</strong></td>
                            <td>Nie zmienia się (const)</td>
                            <td>Rośnie o masę wody</td>
                            <td>Maleje (<i>C</i><sub><i>p</i> końc.</sub> &lt; <i>C</i><sub><i>p</i>1</sub>)</td>
                            <td>Woda: <i>C</i><sub><i>p</i>2</sub> = 0%, <i>C</i><sub><i>m</i>2</sub> = 0 mol&middot;dm<sup>&minus;3</sup></td>
                        </tr>
                        <tr>
                            <td><strong>Zatężanie przez odparowanie H<sub>2</sub>O</strong></td>
                            <td>Nie zmienia się (const)</td>
                            <td>Maleje o masę pary</td>
                            <td>Rośnie (<i>C</i><sub><i>p</i> końc.</sub> &gt; <i>C</i><sub><i>p</i>1</sub>)</td>
                            <td>Odparowana woda: <i>C</i><sub><i>p</i>2</sub> = 0% (ze znakiem minus)</td>
                        </tr>
                        <tr>
                            <td><strong>Zatężanie przez dodanie czystej substancji</strong></td>
                            <td>Rośnie o masę dodaną</td>
                            <td>Rośnie o masę dodaną</td>
                            <td>Rośnie (<i>C</i><sub><i>p</i> końc.</sub> &gt; <i>C</i><sub><i>p</i>1</sub>)</td>
                            <td>Czysta substancja bezwodna: <i>C</i><sub><i>p</i>2</sub> = 100%</td>
                        </tr>
                        <tr>
                            <td><strong>Mieszanie dwóch roztworów</strong></td>
                            <td>Suma: <i>m</i><sub><i>s</i>1</sub> + <i>m</i><sub><i>s</i>2</sub></td>
                            <td>Suma: <i>m</i><sub><i>r</i>1</sub> + <i>m</i><sub><i>r</i>2</sub></td>
                            <td>Wartość pośrednia (<i>C</i><sub><i>p</i>1</sub> &lt; <i>C</i><sub><i>p</i> końc.</sub> &lt; <i>C</i><sub><i>p</i>2</sub>)</td>
                            <td>Zgodne ze stężeniami mieszanych roztworów</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p><em>Uwaga: Zatężanie roztworu prowadzi do wzrostu stężenia tylko do momentu osiągnięcia stanu nasycenia. Po przekroczeniu rozpuszczalności <i>R</i> w danej temperaturze nadmiar substancji krystalizuje na dnie naczynia, a stężenie roztworu nad osadem pozostaje stałe i równe stężeniu roztworu nasyconego.</em></p>

            <h4>Algorytm reguły mieszania (metody krzyżowej)</h4>
            <p>Metoda krzyżowa pozwala błyskawicznie wyznaczyć stosunek masowy (dla <i>C<sub>p</sub></i>) lub objętościowy (dla <i>C<sub>m</sub></i>) mieszanych składników, gdzie <i>C</i><sub><i>p</i>3</sub> i <i>C</i><sub><i>m</i>3</sub> oznaczają stężenia roztworu końcowego:</p>
            <div class="chem-eq">
                Dla stężeń procentowych: &nbsp; <i>m</i><sub><i>r</i>1</sub> / <i>m</i><sub><i>r</i>2</sub> = |<i>C</i><sub><i>p</i>2</sub> &minus; <i>C</i><sub><i>p</i>3</sub>| / |<i>C</i><sub><i>p</i>1</sub> &minus; <i>C</i><sub><i>p</i>3</sub>|
            </div>
            <div class="chem-eq">
                Dla stężeń molowych: &nbsp; <i>V</i><sub><i>r</i>1</sub> / <i>V</i><sub><i>r</i>2</sub> = |<i>C</i><sub><i>m</i>2</sub> &minus; <i>C</i><sub><i>m</i>3</sub>| / |<i>C</i><sub><i>m</i>1</sub> &minus; <i>C</i><sub><i>m</i>3</sub>|
            </div>
            <p><strong>Pułapka kontrakcji objętości:</strong> Masy roztworów są zawsze addytywne (<i>m</i><sub><i>r</i>3</sub> = <i>m</i><sub><i>r</i>1</sub> + <i>m</i><sub><i>r</i>2</sub>), natomiast objętości mieszanych roztworów o znacznie różniących się gęstościach (np. stężony H<sub>2</sub>SO<sub>4</sub> lub etanol z wodą) ulegają <strong>kontrakcji</strong> (zmniejszeniu objętości sumarycznej: <i>V</i><sub><i>r</i>3</sub> &lt; <i>V</i><sub><i>r</i>1</sub> + <i>V</i><sub><i>r</i>2</sub>). Regułę krzyżową dla stężeń molowych stosuje się tylko dla roztworów rozcieńczonych o zbliżonych gęstościach. Gdy gęstości znacznie się różnią, objętość roztworu końcowego należy obliczyć z jego masy i gęstości końcowej: <i>V</i><sub><i>r</i>3</sub> = (<i>m</i><sub><i>r</i>1</sub> + <i>m</i><sub><i>r</i>2</sub>) / <i>d</i><sub><i>r</i>3</sub>.</p>

            <h4>Specyfika obliczeń z hydratami oraz substancjami reagującymi z wodą</h4>
            <ul class="note-list">
                <li><strong>Rozpuszczanie hydratu (soli uwodnionej, np. CuSO<sub>4</sub> &middot; 5H<sub>2</sub>O):</strong> Po wprowadzeniu hydratu do wody sieć krystaliczna ulega rozpadowi, a woda hydratacyjna przechodzi do puli rozpuszczalnika. Substancją rozpuszczoną w otrzymanym roztworze jest <strong>wyłącznie sól bezwodna (CuSO<sub>4</sub>)</strong>, natomiast masa powstałego roztworu stanowi sumę masy wody oraz całej masy użytego hydratu (<i>m<sub>r</sub></i> = <i>m<sub>w</sub></i> + <i>m</i><sub>hydratu</sub>). W regule krzyżowej hydrat traktuje się jako „roztwór” o stężeniu procentowym równym udziałowi masowemu soli bezwodnej w hydracie:
                    <div class="chem-eq" style="margin: 6px 0;"><i>C</i><sub><i>p</i>(hydratu)</sub> = (<i>M</i><sub>soli bezwodnej</sub> / <i>M</i><sub>hydratu</sub>) &middot; 100%</div>
                </li>
                <li><strong>Rozpuszczanie tlenków kwasowych lub zasadowych (np. SO<sub>3</sub>, P<sub>4</sub>O<sub>10</sub>, Na<sub>2</sub>O, BaO):</strong> Substancje te reagują z wodą, tworząc odpowiednio kwas lub wodorotlenek (np. Na<sub>2</sub>O + H<sub>2</sub>O &rarr; 2 NaOH). Substancją rozpuszczoną w końcowym roztworze jest <strong>produkt reakcji (NaOH)</strong>, którego masa jest większa niż masa wsypanego tlenku (obliczamy ją ze stechiometrii reakcji!), podczas gdy masa roztworu wynosi <i>m<sub>r</sub></i> = <i>m<sub>w</sub></i> + <i>m</i><sub>tlenku</sub> (zgodnie z prawem zachowania masy).</li>
                <li><strong>Roztwarzanie aktywnych metali lub wodorków w wodzie (np. Na, K, Ca, NaH):</strong> W reakcji wydziela się gazowy wodór, który opuszcza układ (2 Na + 2 H<sub>2</sub>O &rarr; 2 NaOH + H<sub>2</sub>&uarr;). Substancją rozpuszczoną jest powstały NaOH, natomiast masę roztworu końcowego należy <strong>pomniejszyć o masę wydzielonego wodoru</strong>:
                    <div class="chem-eq" style="margin: 6px 0;"><i>m<sub>r</sub></i> = <i>m</i><sub>początkowa wody/roztworu</sub> + <i>m</i><sub>Na</sub> &minus; <i>m</i><sub>H<sub>2</sub></sub></div>
                </li>
            </ul>
        </div>

        <!-- SEKCJA 5 -->
        <div class="note-section">
            <h3>5. Rozbiór Klasycznych i Zaawansowanych Zadań Obliczeniowych Krok po Kroku</h3>

            <p><strong>Przykład 1 (Rozpuszczalność i krystalizacja przy ochładzaniu roztworu nasyconego):</strong><br>
            <em>Rozpuszczalność KNO<sub>3</sub> w temp. 60&deg;C wynosi 110 g / 100 g H<sub>2</sub>O, a w temp. 20&deg;C jest równa 31,6 g / 100 g H<sub>2</sub>O. Oblicz, ile gramów KNO<sub>3</sub> wykrystalizuje po ochłodzeniu 420 g nasyconego w temp. 60&deg;C roztworu tej soli do temp. 20&deg;C.</em></p>
            <ol class="note-list">
                <li><strong>Skład roztworu wyjściowego w 60&deg;C:</strong> Na 100 g wody przypada 110 g soli, co daje 210 g roztworu nasyconego w 60&deg;C. W 420 g takiego roztworu (masa 2-krotnie większa) znajduje się: <i>m</i><sub>H<sub>2</sub>O</sub> = (100 g &middot; 420 g) / 210 g = <strong>200 g wody</strong> oraz <i>m</i><sub><i>s</i>(60&deg;C)</sub> = 420 g &minus; 200 g = <strong>220 g KNO<sub>3</sub></strong>.</li>
                <li><strong>Masa soli pozostająca w roztworze w 20&deg;C:</strong> Masa wody (200 g) nie ulega zmianie. W 200 g wody w 20&deg;C rozpuści się: <i>m</i><sub><i>s</i>(20&deg;C)</sub> = (200 g &middot; 31,6 g) / 100 g = <strong>63,2 g KNO<sub>3</sub></strong>.</li>
                <li><strong>Masa wykrystalizowanego osadu:</strong> &Delta;<i>m</i> = 220 g &minus; 63,2 g = <strong>156,8 g KNO<sub>3</sub></strong>.</li>
            </ol>

            <p><strong>Przykład 2 (Rozpuszczanie hydratu w wodzie):</strong><br>
            <em>Oblicz stężenie procentowe roztworu otrzymanego po rozpuszczeniu 50 g siarczanu(VI) miedzi(II)–woda(1/5) (CuSO<sub>4</sub> &middot; 5H<sub>2</sub>O) w 200 g wody.</em></p>
            <ol class="note-list">
                <li><strong>Masy molowe:</strong> <i>M</i><sub>CuSO<sub>4</sub></sub> = 63,5 + 32 + 4&middot;16 = 159,5 g&middot;mol<sup>&minus;1</sup>; &nbsp; <i>M</i><sub>CuSO<sub>4</sub>&middot;5H<sub>2</sub>O</sub> = 159,5 + 5&middot;18 = 249,5 g&middot;mol<sup>&minus;1</sup>.</li>
                <li><strong>Masa bezwodnego CuSO<sub>4</sub> (<i>m<sub>s</sub></i>) w 50 g hydratu:</strong> <i>m<sub>s</sub></i> = (50 g &middot; 159,5 g&middot;mol<sup>&minus;1</sup>) / 249,5 g&middot;mol<sup>&minus;1</sup> = <strong>31,96 g CuSO<sub>4</sub></strong>.</li>
                <li><strong>Masa roztworu i stężenie procentowe:</strong> <i>m<sub>r</sub></i> = 200 g + 50 g = 250 g &rArr; <i>C<sub>p</sub></i> = (31,96 g / 250 g) &middot; 100% = <strong>12,78% &approx; 12,8%</strong>.</li>
            </ol>

            <p><strong>Przykład 3 (Rozpuszczalność hydratu a <i>C<sub>p</sub></i> i <i>C<sub>m</sub></i> roztworu nasyconego):</strong><br>
            <em>Rozpuszczalność uwodnionego węglanu sodu Na<sub>2</sub>CO<sub>3</sub> &middot; 10H<sub>2</sub>O w wodzie w temp. 20&deg;C wynosi 21,5 g / 100 g wody, a gęstość nasyconego roztworu wynosi 1,07 g&middot;cm<sup>&minus;3</sup>. Oblicz stężenie procentowe oraz molowe nasyconego roztworu Na<sub>2</sub>CO<sub>3</sub>.</em></p>
            <ol class="note-list">
                <li><strong>Masy molowe i masa bezwodnego Na<sub>2</sub>CO<sub>3</sub> w 21,5 g hydratu:</strong> <i>M</i><sub>Na<sub>2</sub>CO<sub>3</sub></sub> = 106 g&middot;mol<sup>&minus;1</sup>; &nbsp; <i>M</i><sub>Na<sub>2</sub>CO<sub>3</sub>&middot;10H<sub>2</sub>O</sub> = 286 g&middot;mol<sup>&minus;1</sup> &rArr; <i>m<sub>s</sub></i> = (21,5 g &middot; 106) / 286 = <strong>7,97 g Na<sub>2</sub>CO<sub>3</sub></strong>.</li>
                <li><strong>Masa roztworu nasyconego i <i>C<sub>p</sub></i>:</strong> <i>m<sub>r</sub></i> = 100 g + 21,5 g = 121,5 g &rArr; <i>C<sub>p</sub></i> = (7,97 g / 121,5 g) &middot; 100% = <strong>6,56%</strong>.</li>
                <li><strong>Stężenie molowe (<i>d<sub>r</sub></i> = 1070 g&middot;dm<sup>&minus;3</sup>):</strong> <i>C<sub>m</sub></i> = (6,56% &middot; 1070 g&middot;dm<sup>&minus;3</sup>) / (100% &middot; 106 g&middot;mol<sup>&minus;1</sup>) = <strong>0,662 mol&middot;dm<sup>&minus;3</sup></strong>.</li>
            </ol>

            <p><strong>Przykład 4 (Ustalanie wzoru hydratu na podstawie rozpuszczalności i stężenia):</strong><br>
            <em>Nasycony wodny roztwór MgSO<sub>4</sub> w temp. 20&deg;C ma stężenie molowe 2,80 mol&middot;dm<sup>&minus;3</sup> i gęstość 1,30 g&middot;cm<sup>&minus;3</sup>. Ustal wzór hydratu MgSO<sub>4</sub> &middot; <i>n</i>H<sub>2</sub>O, jeśli jego rozpuszczalność w 20&deg;C wynosi 113 g / 100 g wody.</em></p>
            <ol class="note-list">
                <li><strong>Stężenie procentowe roztworu nasyconego (<i>M</i><sub>MgSO<sub>4</sub></sub> = 120 g&middot;mol<sup>&minus;1</sup>, <i>d<sub>r</sub></i> = 1300 g&middot;dm<sup>&minus;3</sup>):</strong> <i>C<sub>p</sub></i> = (2,80 &middot; 120 &middot; 100%) / 1300 = <strong>25,85%</strong>.</li>
                <li><strong>Masa bezwodnego MgSO<sub>4</sub> w 213 g roztworu (100 g wody + 113 g hydratu):</strong> <i>m<sub>s</sub></i> = (25,85% &middot; 213 g) / 100% = <strong>55,06 g MgSO<sub>4</sub></strong>.</li>
                <li><strong>Stosunek molowy w 113 g hydratu:</strong> <i>m</i><sub>H<sub>2</sub>O w hydracie</sub> = 113 g &minus; 55,06 g = 57,94 g &rArr; <i>n</i><sub>MgSO<sub>4</sub></sub> : <i>n</i><sub>H<sub>2</sub>O</sub> = (55,06 / 120) : (57,94 / 18) = 0,459 mol : 3,219 mol = 1 : 7 &rArr; <i>n</i> = 7. Wzór hydratu to <strong>MgSO<sub>4</sub> &middot; 7H<sub>2</sub>O</strong> (siarczan(VI) magnezu–woda(1/7)).</li>
            </ol>

            <p><strong>Przykład 5 (Sporządzanie roztworu o zadanym <i>C<sub>m</sub></i> ze stężonego roztworu o znanym <i>C<sub>p</sub></i> i <i>d<sub>r</sub></i>):</strong><br>
            <em>Pewną objętość roztworu H<sub>2</sub>SO<sub>4</sub> o stężeniu 96% i gęstości 1,83 g&middot;cm<sup>&minus;3</sup> dodano do wody i otrzymano 1 dm<sup>3</sup> roztworu o stężeniu 0,1 mol&middot;dm<sup>&minus;3</sup>. Oblicz, ile cm<sup>3</sup> stężonego kwasu użyto.</em></p>
            <ol class="note-list">
                <li><strong>Liczba moli i masa czystego H<sub>2</sub>SO<sub>4</sub> (<i>M</i> = 98 g&middot;mol<sup>&minus;1</sup>):</strong> <i>n</i> = 0,1 mol&middot;dm<sup>&minus;3</sup> &middot; 1 dm<sup>3</sup> = 0,1 mol &rArr; <i>m<sub>s</sub></i> = 0,1 mol &middot; 98 g&middot;mol<sup>&minus;1</sup> = <strong>9,8 g H<sub>2</sub>SO<sub>4</sub></strong>.</li>
                <li><strong>Masa i objętość 96% roztworu kwasu:</strong> <i>m</i><sub><i>r</i>1</sub> = (9,8 g &middot; 100%) / 96% = 10,21 g &rArr; <i>V</i><sub><i>r</i>1</sub> = 10,21 g / 1,83 g&middot;cm<sup>&minus;3</sup> = <strong>5,58 cm<sup>3</sup></strong>.</li>
            </ol>

            <p><strong>Przykład 6 (Zastosowanie reguły krzyżowej do wyznaczenia dokładnych mas mieszanych roztworów):</strong><br>
            <em>Oblicz, ile gramów roztworu 96% oraz ile gramów roztworu 15% H<sub>2</sub>SO<sub>4</sub> należy zmieszać, aby otrzymać 1 kg (1000 g) roztworu o stężeniu 50%.</em></p>
            <ol class="note-list">
                <li><strong>Stosunek masowy z reguły krzyżowej:</strong> <i>m</i><sub><i>r</i>1(96%)</sub> / <i>m</i><sub><i>r</i>2(15%)</sub> = |15 &minus; 50| / |96 &minus; 50| = <strong>35 / 46</strong>.</li>
                <li><strong>Przeliczenie części masowych (suma = 35 + 46 = 81 części) na 1000 g:</strong> <i>m</i><sub><i>r</i>1</sub> = (35 / 81) &middot; 1000 g = <strong>432 g roztworu 96%</strong> oraz <i>m</i><sub><i>r</i>2</sub> = 1000 g &minus; 432 g = <strong>568 g roztworu 15%</strong>.</li>
            </ol>

            <p><strong>Przykład 7 (Trudny przypadek maturalny: Roztwarzanie metalicznego sodu w wodzie):</strong><br>
            <em>Do 100 g wody wrzucono 4,6 g metalicznego sodu (Na). Oblicz stężenie procentowe otrzymanego roztworu NaOH.</em></p>
            <ol class="note-list">
                <li><strong>Równanie reakcji i stechiometria (<i>M</i><sub>Na</sub> = 23 g&middot;mol<sup>&minus;1</sup>, <i>M</i><sub>NaOH</sub> = 40 g&middot;mol<sup>&minus;1</sup>, <i>M</i><sub>H<sub>2</sub></sub> = 2 g&middot;mol<sup>&minus;1</sup>):</strong><br>
                2 Na + 2 H<sub>2</sub>O &rarr; 2 NaOH + H<sub>2</sub>&uarr;<br>
                Liczba moli sodu: <i>n</i><sub>Na</sub> = 4,6 g / 23 g&middot;mol<sup>&minus;1</sup> = 0,2 mol &rArr; powstaje <i>n</i><sub>NaOH</sub> = 0,2 mol oraz wydziela się <i>n</i><sub>H<sub>2</sub></sub> = 0,1 mol gazu.</li>
                <li><strong>Masa powstałego NaOH i wydzielonego wodoru:</strong> <i>m<sub>s</sub></i> = 0,2 mol &middot; 40 g&middot;mol<sup>&minus;1</sup> = <strong>8,0 g NaOH</strong>; &nbsp; <i>m</i><sub>H<sub>2</sub></sub> = 0,1 mol &middot; 2 g&middot;mol<sup>&minus;1</sup> = <strong>0,2 g H<sub>2</sub></strong>.</li>
                <li><strong>Końcowa masa roztworu i stężenie procentowe:</strong> <i>m<sub>r</sub></i> = 100 g + 4,6 g &minus; 0,2 g = <strong>104,4 g</strong> &rArr; <i>C<sub>p</sub></i> = (8,0 g / 104,4 g) &middot; 100% = <strong>7,66%</strong>.</li>
            </ol>
        </div>

        <!-- SEKCJA 6 -->
        <div class="note-section">
            <h3>6. Projektowanie i Opis Doświadczeń Chemicznych (Pewniaki Maturalne)</h3>

            <h4>Doświadczenie 1: Sporządzanie roztworu o określonym stężeniu molowym w kolbie miarowej</h4>
            <ul class="note-list">
                <li><strong>Zadanie:</strong> Sporządzenie 100 cm<sup>3</sup> (0,1 dm<sup>3</sup>) wodnego roztworu azotanu(V) sodu (NaNO<sub>3</sub>, <i>M</i> = 85 g&middot;mol<sup>&minus;1</sup>) o stężeniu 2 mol&middot;dm<sup>&minus;3</sup>.</li>
                <li><strong>Obliczenia wstępne:</strong> <i>n</i> = <i>C<sub>m</sub></i> &middot; <i>V<sub>r</sub></i> = 2 mol&middot;dm<sup>&minus;3</sup> &middot; 0,1 dm<sup>3</sup> = 0,2 mol &rArr; masa odważki <i>m<sub>s</sub></i> = 0,2 mol &middot; 85 g&middot;mol<sup>&minus;1</sup> = <strong>17 g NaNO<sub>3</sub></strong>.</li>
                <li><strong>Szkło i sprzęt laboratoryjny:</strong> Kolba miarowa o pojemności 100 cm<sup>3</sup> z korkiem, waga laboratoryjna, naczynko wagowe (lub szkiełko zegarkowe), suchy lejek, zlewka z wodą destylowaną, pipeta (lub tryskawka).</li>
                <li><strong>Poprawna procedura krok po kroku:</strong>
                    <br>1. Odważ w naczynku wagowym na wadze laboratoryjnej 17 g stałego NaNO<sub>3</sub>.
                    <br>2. Do kolby miarowej o pojemności 100 cm<sup>3</sup> wlej przez lejek wodę destylowaną do około 1/3 – 1/2 objętości kolby i wsyp odważoną porcję soli (spłukując lejek niewielką porcją wody destylowanej do wnętrza kolby).
                    <br>3. Zamknij kolbę korkiem i energicznie wymieszaj jej zawartość ruchem kolistym aż do całkowitego rozpuszczenia kryształów soli.
                    <br>4. Dopełnij kolbę miarową wodą destylowaną za pomocą pipety (bez użycia lejka!) dokładnie do kreski kalibracyjnej na szyjce kolby (tak, aby dolny menisk cieczy pokrywał się z kreską na wysokości wzroku), po czym ponownie zamknij kolbę korkiem i wymieszaj roztwór.
                </li>
            </ul>
            <div class="note-alert">
                💡 <strong>Uwaga maturalna:</strong> Nigdy nie wsypuje się odważonej substancji do kolby miarowej wypełnionej już wodą do kreski (100 cm<sup>3</sup>), ponieważ po rozpuszczeniu ciała stałego objętość roztworu przekroczyłaby 100 cm<sup>3</sup>, a stężenie molowe byłoby niższe od zamierzonego. Kolba miarowa służy wyłącznie do sporządzania roztworów, a nie do odmierzania dowolnych objętości cieczy.
            </div>

            <h4>Zestawienie pozostałych doświadczeń maturalnych z działu Roztwory</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Doświadczenie</th>
                            <th>Przebieg i odczynniki</th>
                            <th>Obserwacje</th>
                            <th>Wnioski i równania reakcji</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Doświadczenie 2:<br>Wpływ rodzaju rozpuszczalnika na rozpuszczalność substancji</strong></td>
                            <td>Do probówki I z 10 cm<sup>3</sup> wody destylowanej oraz probówki II z 10 cm<sup>3</sup> benzyny (w tej samej temp.) wsypano po 2 g krystalicznego NaCl i wymieszano.</td>
                            <td>• <strong>Probówka I:</strong> Kryształy NaCl rozpuszczają się, powstaje klarowny, bezbarwny roztwór.<br>• <strong>Probówka II:</strong> Kryształy NaCl nie rozpuszczają się i opadają na dno.</td>
                            <td>Rozpuszczalność zależy od polarności rozpuszczalnika. Jonowy NaCl dobrze rozpuszcza się w rozpuszczalniku polarnym (wodzie), a nie rozpuszcza się w niepolarnym (benzynie).</td>
                        </tr>
                        <tr>
                            <td><strong>Doświadczenie 3:<br>Wpływ temperatury na rozpuszczalność gazów w wodzie</strong></td>
                            <td>Probówkę ze schłodzoną gazowaną wodą mineralną zamknięto korkiem z rurką odprowadzającą zanurzoną w klarownej wodzie wapiennej Ca(OH)<sub>2</sub> i delikatnie ogrzano.</td>
                            <td>Podczas ogrzewania z cieczy intensywnie wydzielają się pęcherzyki bezbarwnego gazu, a woda wapienna w zlewce mętnieje (biały osad).</td>
                            <td>Rozpuszczalność gazów w wodzie maleje ze wzrostem temperatury. Wydzielony CO<sub>2</sub> reaguje z wodą wapienną:<br>• <strong>CO<sub>2</sub> + Ca(OH)<sub>2</sub> &rarr; CaCO<sub>3</sub>&darr; + H<sub>2</sub>O</strong><br>• Jonowo: <strong>CO<sub>2</sub> + Ca<sup>2+</sup> + 2 OH<sup>&minus;</sup> &rarr; CaCO<sub>3</sub>&darr; + H<sub>2</sub>O</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Doświadczenie 4:<br>Ekstrakcja jodu z wody za pomocą rozdzielacza</strong></td>
                            <td>Do rozdzielacza z brunatnym wodnym roztworem jodu (w KI) dodano chloroform CHCl<sub>3</sub> (lub benzynę), zamknięto korkiem, wstrząśnięto (odpowietrzając kranikiem) i pozostawiono w statywie.</td>
                            <td>Powstały dwie wyraźne warstwy cieczy. Warstwa wodna odbarwiła się, a warstwa organiczna (dolna dla CHCl<sub>3</sub>, górna dla benzyny) przyjęła intensywnie fioletowe zabarwienie.</td>
                            <td>Niepolarny jod (I<sub>2</sub>) znacznie lepiej rozpuszcza się w niepolarnym rozpuszczalniku organicznym niż w polarnej wodzie („podobne w podobnym”) i ulega ekstrakcji do fazy organicznej.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `,

    notatkiActive: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">🧠 ACTIVE RECALL: ROZTWORY I UKŁADY DYSPERSYJNE</h2>
        <p style="text-align: center; color: #94a3b8; font-size: 13px; margin-bottom: 20px;">
            💡 <em>Klikaj na ciemne pola, aby odkryć ukryte pojęcia, wzory i wyniki obliczeń, oraz rozwijaj pytania kontrolne!</em>
        </p>

        <!-- ACTIVE RECALL SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Układy Dyspersyjne, Koloidy i Rozdzielanie Mieszanin</h3>
            <p>Roztwory właściwe mają cząstki o średnicy <span class="recall-blank" onclick="toggleRecall(this)">poniżej 10<sup>&minus;9</sup> m</span>, koloidy od <span class="recall-blank" onclick="toggleRecall(this)">10<sup>&minus;9</sup> m do 10<sup>&minus;7</sup> m</span>, a zawiesiny <span class="recall-blank" onclick="toggleRecall(this)">powyżej 10<sup>&minus;7</sup> m</span>.</p>
            <p>Zjawisko rozpraszania światła przez cząstki koloidalne (widoczny stożek świetlny) to <span class="recall-blank" onclick="toggleRecall(this)">efekt Tyndalla</span>.</p>
            <p>Przemiana zolu w żel pod wpływem elektrolitu to <span class="recall-blank" onclick="toggleRecall(this)">koagulacja (wysalanie)</span>, natomiast proces odwrotny (przejście żelu z powrotem w zol) nazywa się <span class="recall-blank" onclick="toggleRecall(this)">peptyzacją</span>.</p>

            <details class="recall-details">
                <summary>Czym różni się rozpuszczanie od roztwarzania? Podaj po jednym przykładzie.</summary>
                <p>• <strong>Rozpuszczanie (proces fizyczny):</strong> nie zachodzi reakcja chemiczna, po odparowaniu wody odzyskujemy tę samą substancję (np. rozpuszczanie NaCl lub cukru w wodzie).<br>
                • <strong>Roztwarzanie (proces chemiczny):</strong> zachodzi nieodwracalna reakcja chemiczna z rozpuszczalnikiem lub kwasem/zasadą, powstaje nowy związek (np. roztwarzanie sodu w wodzie lub cynku w kwasie solnym).</p>
            </details>

            <details class="recall-details">
                <summary>Jaką budowę mają cząsteczki emulgatora i jaką pełnią funkcję w emulsji?</summary>
                <p>Mają budowę <strong>amfifilową</strong>: hydrofilowa (polarna) „główka” zwraca się do fazy wodnej, a hydrofobowy (niepolarny) „ogon” węglowodorowy wnika do kropelki tłuszczu, co stabilizuje emulsję i zapobiega jej rozwarstwieniu.</p>
            </details>
        </div>

        <!-- ACTIVE RECALL SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Rozpuszczalność i Krzywe Rozpuszczalności</h3>
            <p>Rozpuszczalność (<i>R</i>) określa maksymalną liczbę gramów substancji, jaką można rozpuścić w <span class="recall-blank" onclick="toggleRecall(this)">100 g rozpuszczalnika (wody)</span> w danej temperaturze, aby otrzymać roztwór <span class="recall-blank" onclick="toggleRecall(this)">nasycony</span>.</p>
            <p>Rozpuszczalność wszystkich gazów w wodzie wraz ze wzrostem temperatury <span class="recall-blank" onclick="toggleRecall(this)">zawsze maleje</span>, natomiast wraz ze wzrostem ciśnienia <span class="recall-blank" onclick="toggleRecall(this)">rośnie (prawo Henry'ego)</span>.</p>
            <p>Wzór na stężenie procentowe roztworu nasyconego o znanej rozpuszczalności <i>R</i> to: <i>C</i><sub><i>p</i>(nas.)</sub> = <span class="recall-blank" onclick="toggleRecall(this)">[<i>R</i> / (100 g + <i>R</i>)] &middot; 100%</span>.</p>

            <details class="recall-details">
                <summary>Czy rozdrobnienie substancji w moździerzu oraz mieszanie zwiększają jej rozpuszczalność w wodzie?</summary>
                <p><strong>Nie!</strong> Rozdrobnienie i mieszanie zwiększają wyłącznie <strong>szybkość rozpuszczania</strong> (skracają czas potrzebny do uzyskania roztworu nasyconego), ale nie zmieniają wartości rozpuszczalności <i>R</i> w danej temperaturze.</p>
            </details>

            <details class="recall-details">
                <summary><span>Z czego wynika gwałtowne załamanie na krzywej rozpuszczalności niektórych soli (np. Cu(NO<sub>3</sub>)<sub>2</sub> w ok. 60&deg;C)?</span></summary>
                <p>Wynika z <strong>przejścia fazowego jednego hydratu w inny</strong> o mniejszej zawartości wody krystalizacyjnej (np. przejście heksahydratu w trihydrat).</p>
            </details>
        </div>

        <!-- ACTIVE RECALL SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Stężenia, Hydraty i Reakcje z Wodą</h3>
            <p>Wzór przeliczeniowy łączący stężenie molowe (<i>C<sub>m</sub></i>) ze stężeniem procentowym (<i>C<sub>p</sub></i>) i gęstością roztworu (<i>d<sub>r</sub></i> w g&middot;dm<sup>&minus;3</sup>) to: <i>C<sub>m</sub></i> = <span class="recall-blank" onclick="toggleRecall(this)">(<i>C<sub>p</sub></i> &middot; <i>d<sub>r</sub></i>) / (100% &middot; <i>M</i>)</span>.</p>
            <p>Podczas rozpuszczania hydratu (np. CuSO<sub>4</sub> &middot; 5H<sub>2</sub>O) w wodzie substancją rozpuszczoną (<i>m<sub>s</sub></i>) jest wyłącznie <span class="recall-blank" onclick="toggleRecall(this)">sól bezwodna (CuSO<sub>4</sub>)</span>, a masa roztworu wynosi <span class="recall-blank" onclick="toggleRecall(this)"><i>m<sub>w</sub></i> + <i>m</i><sub>hydratu</sub></span>.</p>
            <p>Podczas roztwarzania metalicznego sodu w wodzie masę końcowego roztworu oblicza się ze wzoru: <i>m<sub>r</sub></i> = <span class="recall-blank" onclick="toggleRecall(this)"><i>m</i><sub>wody</sub> + <i>m</i><sub>Na</sub> &minus; <i>m</i><sub>H<sub>2</sub></sub></span>.</p>

            <details class="recall-details">
                <summary>Dlaczego podczas sporządzania roztworu o określonym stężeniu molowym w kolbie miarowej nie wolno najpierw nalać wody do kreski, a potem wsypać odważonej soli?</summary>
                <p>Ponieważ po wsypaniu i rozpuszczeniu ciała stałego sumaryczna objętość roztworu przekroczyłaby objętość nominalną kolby (ponad kreskę kalibracyjną), przez co otrzymane stężenie molowe byłoby <strong>mniejsze</strong> od zamierzonego.</p>
            </details>
        </div>
    </div>
    `,

    zadania: "<h3>Zadania</h3><br>Miejsce na zadania obliczeniowe i reakcje...",

    fiszki: [
        {
            front: "Co to jest faza w układzie chemicznym?",
            back: "To jednorodna pod względem stanu fizycznego i składu część układu, oddzielona od innych części wyraźną powierzchnią rozdziału (granicą faz)."
        },
        {
            front: "Czym różni się mieszanina jednorodna (homogeniczna) od niejednorodnej (heterogenicznej)?",
            back: "W mieszaninie jednorodnej składniki tworzą jedną fazę i nie można ich rozróżnić gołym okiem ani pod mikroskopem. W mieszaninie niejednorodnej składniki tworzą co najmniej dwie widoczne, odrębne fazy."
        },
        {
            front: "Który składnik roztworu jest rozpuszczalnikiem i od czego zależy stan skupienia roztworu?",
            back: "Rozpuszczalnikiem (fazą rozpraszającą) jest składnik dominujący ilościowo w układzie. Stan skupienia roztworu jest zawsze taki sam jak stan skupienia rozpuszczalnika."
        },
        {
            front: "Podaj przykład roztworu stałego, w którym substancją rozpuszczoną jest: 1) gaz, 2) inne ciało stałe.",
            back: "1) Gaz w ciele stałym: wodór rozpuszczony w palladzie. 2) Ciało stałe w ciele stałym: stopy metali (np. mosiądz, brąz, stal)."
        },
        {
            front: "Jakie są przedziały średnicy cząstek fazy rozproszonej dla roztworu właściwego, koloidu i zawiesiny?",
            back: "Roztwór właściwy: poniżej 10<sup>&minus;9</sup> m. Koloid: od 10<sup>&minus;9</sup> m do 10<sup>&minus;7</sup> m. Zawiesina: powyżej 10<sup>&minus;7</sup> m."
        },
        {
            front: "Czy koloidy (roztwory koloidalne) są mieszaninami jednorodnymi czy niejednorodnymi?",
            back: "Choć gołym okiem wydają się jednorodne, mikroskopowo są układami wielofazowymi i według podstawy programowej zalicza się je do mieszanin niejednorodnych (heterogenicznych)."
        },
        {
            front: "Na czym polega efekt Tyndalla i do czego służy w laboratorium?",
            back: "To zjawisko rozpraszania światła przez cząstki koloidalne, dające widoczny stożek świetlny (smugę) po oświetleniu wiązką lasera. Pozwala odróżnić koloid (np. kleik skrobiowy) od roztworu właściwego (np. roztworu NaCl)."
        },
        {
            front: "Czym różni się zol od żelu?",
            back: "Zol to płynny układ koloidalny o swobodnie poruszających się cząstkach, natomiast żel to układ koloidalny o ograniczonej płynności (galareta/osad), w którym cząstki tworzą przestrzenną sieć."
        },
        {
            front: "Czym różnią się koloidy hydrofilowe (liofilowe) od hydrofobowych (liofobowych)?",
            back: "Koloidy hydrofilowe (np. białka, skrobia, żelatyna) silnie oddziałują z wodą, tworzą otoczki hydratacyjne i pęcznieją. Koloidy hydrofobowe (np. zole metali, zol AgCl) nie mają powinowactwa do wody i łatwo ulegają wytrąceniu."
        },
        {
            front: "Co to jest koagulacja (wysalanie) koloidu, a co to jest peptyzacja?",
            back: "Koagulacja to łączenie się cząstek koloidalnych w większe agregaty i przejście zolu w żel (osad), np. po dodaniu NaCl. Peptyzacja to proces odwrotny – ponowne rozproszenie żelu i przejście w płynny zol (np. po dolaniu wody)."
        },
        {
            front: "Czym różni się denaturacja białka od jego koagulacji (wysolenia)?",
            back: "Wysolenie (np. za pomocą NaCl) jest procesem odwracalnym i nie niszczy struktury białka. Denaturacja (pod wpływem temp., kwasów, zasad, soli metali ciężkich lub alkoholu) jest procesem nieodwracalnym, niszczącym strukturę II-, III- i IV-rzędową białka."
        },
        {
            front: "Co to jest emulsja i w jaki sposób stabilizuje ją emulgator?",
            back: "Emulsja to układ koloidalny dwóch niemieszających się cieczy (np. oleju i wody). Emulgator (np. lecytyna, mydło) ma budowę amfifilową – hydrofilową główką zwraca się do wody, a hydrofobowym ogonem do kropelki tłuszczu, zapobiegając rozwarstwieniu."
        },
        {
            front: "Czy koloid (np. zol białka) można oddzielić od wody przez sączenie na zwykłym sączku z bibuły?",
            back: "Nie. Cząstki koloidalne (10<sup>&minus;9</sup> – 10<sup>&minus;7</sup> m) są zbyt małe i swobodnie przechodzą przez pory zwykłej bibuły filtracyjnej (sączenie zatrzymuje jedynie zawiesiny)."
        },
        {
            front: "Jaką metodą rozdziela się dwie niemieszające się ciecze o różnej gęstości (np. olej i wodę), a jaką dwie mieszające się ciecze o różnych temperaturach wrzenia (np. wodę i etanol)?",
            back: "Ciecze niemieszające się rozdziela się za pomocą rozdzielacza (proces mechaniczny). Ciecze mieszające się (roztwór jednorodny) rozdziela się przez destylację."
        },
        {
            front: "Na czym polega proces ekstrakcji? Podaj przykład.",
            back: "Ekstrakcja polega na wyodrębnieniu składnika z mieszaniny za pomocą rozpuszczalnika, w którym dany składnik rozpuszcza się znacznie lepiej niż w fazie pierwotnej (np. ekstrakcja jodu z wody za pomocą chloroformu lub benzyny w rozdzielaczu)."
        },
        {
            front: "Czym różni się rozpuszczanie od roztwarzania?",
            back: "Rozpuszczanie to proces fizyczny (brak reakcji chemicznej, po odparowaniu odzyskujemy substancję wyjściową, np. NaCl w wodzie). Roztwarzanie to proces chemiczny (zachodzi reakcja z rozpuszczalnikiem, powstaje nowy związek, np. Zn w HCl lub Na w wodzie)."
        },
        {
            front: "Dlaczego podczas sporządzania roztworu kwasu siarkowego(VI) zawsze wlewa się kwas do wody, a nigdy wodę do kwasu?",
            back: "Stężony H<sub>2</sub>SO<sub>4</sub> ma znacznie większą gęstość (ok. 1,84 g&middot;cm<sup>&minus;3</sup>) niż woda (1,00 g&middot;cm<sup>&minus;3</sup>) i miesza się z nią z wydzieleniem ogromnej ilości ciepła. Wlanie lżejszej wody na powierzchnię kwasu powoduje jej gwałtowne wrzenie i rozpryskiwanie żrącej cieczy."
        },
        {
            front: "Podaj definicję rozpuszczalności (<i>R</i>) substancji.",
            back: "Rozpuszczalność to maksymalna liczba gramów substancji, jaką można rozpuścić w 100 g rozpuszczalnika (najczęściej wody) w określonej temperaturze i pod danym ciśnieniem, aby otrzymać roztwór nasycony."
        },
        {
            front: "Co oznacza zapis <i>R</i><sup>30&deg;C</sup><sub>NaNO<sub>3</sub></sub> = 96 g / 100 g H<sub>2</sub>O i ile wynosi masa takiego roztworu nasyconego?",
            back: "Oznacza, że w temperaturze 30&deg;C w 100 g wody rozpuszcza się maksymalnie 96 g azotanu(V) sodu. Masa otrzymanego roztworu nasyconego wynosi 100 g + 96 g = 196 g."
        },
        {
            front: "Jak temperatura wpływa na rozpuszczalność większości ciał stałych w wodzie i jakie są dwa klasyczne wyjątki maturalne?",
            back: "Rozpuszczalność większości ciał stałych w wodzie rośnie ze wzrostem temperatury (proces endoenergetyczny). Wyjątkami, których rozpuszczalność maleje ze wzrostem temperatury, są m.in. Ca(OH)<sub>2</sub> oraz Ce<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>."
        },
        {
            front: "Jak temperatura oraz ciśnienie wpływają na rozpuszczalność gazów w wodzie?",
            back: "Rozpuszczalność wszystkich gazów w wodzie maleje wraz ze wzrostem temperatury, natomiast rośnie wraz ze wzrostem ciśnienia gazu nad cieczą (prawo Henry'ego)."
        },
        {
            front: "Jak na wartość rozpuszczalności <i>R</i> oraz na szybkość rozpuszczania wpływa rozdrobnienie substancji i mieszanie roztworu?",
            back: "Rozdrobnienie i mieszanie zwiększają wyłącznie szybkość rozpuszczania (skracają czas do osiągnięcia nasycenia), ale nie zmieniają wartości rozpuszczalności <i>R</i> w danej temperaturze."
        },
        {
            front: "Jakie kryteria ilościowe (w 20&deg;C na 100 g wody) dzielą substancje na dobrze, średnio i trudno rozpuszczalne?",
            back: "Dobrze rozpuszczalne: <i>R</i> &gt; 2 g. Średnio rozpuszczalne: 0,1 g &le; <i>R</i> &le; 2 g. Trudno rozpuszczalne (praktycznie nierozpuszczalne): <i>R</i> &lt; 0,1 g."
        },
        {
            front: "Czym różni się roztwór nasycony, nienasycony i przesycony (oraz gdzie leżą odpowiadające im punkty względem krzywej rozpuszczalności)?",
            back: "Nienasycony: zawiera mniej substancji niż <i>R</i> (punkt pod krzywą). Nasycony: zawiera dokładnie <i>R</i> g substancji na 100 g wody (punkt na krzywej). Przesycony: nietrwały układ zawierający więcej substancji niż <i>R</i> (punkt nad krzywą)."
        },
        {
            front: "W jaki sposób należy opisać osie wykresu rozpuszczalności na maturze?",
            back: "Oś pozioma (OX): Temperatura [&deg;C] (lub [K]). Oś pionowa (OY): Rozpuszczalność [g / 100 g H<sub>2</sub>O]."
        },
        {
            front: "Oblicz stężenie procentowe nasyconego roztworu soli, której rozpuszczalność w danej temperaturze wynosi <i>R</i> = 25 g / 100 g H<sub>2</sub>O.",
            back: "Masa roztworu nasyconego w 100 g wody to <i>m<sub>r</sub></i> = 100 g + 25 g = 125 g. Stężenie procentowe: <i>C<sub>p</sub></i> = (25 g / 125 g) &middot; 100% = 20%."
        },
        {
            front: "Do 100 g wody w 30&deg;C (<i>R</i><sub>NaNO<sub>3</sub></sub> = 96 g / 100 g H<sub>2</sub>O) wsypano 120 g NaNO<sub>3</sub> i wymieszano. Ile wynosi masa powstałego roztworu?",
            back: "Rozpuści się maksymalnie 96 g soli, a 24 g opadnie na dno jako osad (osad nie wchodzi w skład roztworu!). Masa powstałego roztworu nasyconego wynosi 100 g + 96 g = 196 g."
        },
        {
            front: "Podaj wzór definicyjny na stężenie procentowe (<i>C<sub>p</sub></i>) oraz stężenie molowe (<i>C<sub>m</sub></i>) roztworu wraz z jednostkami.",
            back: "<i>C<sub>p</sub></i> = (<i>m<sub>s</sub></i> / <i>m<sub>r</sub></i>) &middot; 100% [wyrażane w % masowych]. <i>C<sub>m</sub></i> = <i>n</i> / <i>V<sub>r</sub></i> [wyrażane w mol&middot;dm<sup>&minus;3</sup>]."
        },
        {
            front: "W 90 g wody rozpuszczono jednocześnie 3 g KNO<sub>3</sub> oraz 7 g NaCl. Oblicz stężenie procentowe KNO<sub>3</sub> w otrzymanym roztworze.",
            back: "Całkowita masa roztworu wynosi <i>m<sub>r</sub></i> = 90 g + 3 g + 7 g = 100 g. Stężenie procentowe KNO<sub>3</sub> to <i>C<sub>p</sub></i> = (3 g / 100 g) &middot; 100% = 3%."
        },
        {
            front: "Podaj wzór pozwalający przeliczyć stężenie procentowe (<i>C<sub>p</sub></i>) na stężenie molowe (<i>C<sub>m</sub></i>) przy znanej gęstości roztworu (<i>d<sub>r</sub></i>) i masie molowej (<i>M</i>).",
            back: "<i>C<sub>m</sub></i> = (<i>C<sub>p</sub></i> &middot; <i>d<sub>r</sub></i>) / (100% &middot; <i>M</i>), gdzie gęstość <i>d<sub>r</sub></i> musi być wyrażona w g&middot;dm<sup>&minus;3</sup> (wartość w g&middot;cm<sup>&minus;3</sup> pomnożona przez 1000)."
        },
        {
            front: "Oblicz stężenie molowe 20% wodnego roztworu NaOH (<i>M</i> = 40 g&middot;mol<sup>&minus;1</sup>) o gęstości <i>d<sub>r</sub></i> = 1,22 g&middot;cm<sup>&minus;3</sup>.",
            back: "Przeliczamy gęstość: <i>d<sub>r</sub></i> = 1220 g&middot;dm<sup>&minus;3</sup>. Podstawiamy do wzoru: <i>C<sub>m</sub></i> = (20% &middot; 1220 g&middot;dm<sup>&minus;3</sup>) / (100% &middot; 40 g&middot;mol<sup>&minus;1</sup>) = 6,10 mol&middot;dm<sup>&minus;3</sup>."
        },
        {
            front: "Oblicz stężenie procentowe roztworu KCl (<i>M</i> = 74,5 g&middot;mol<sup>&minus;1</sup>) o stężeniu molowym 2,0 mol&middot;dm<sup>&minus;3</sup> i gęstości 1,09 g&middot;cm<sup>&minus;3</sup>.",
            back: "Przeliczamy gęstość: <i>d<sub>r</sub></i> = 1090 g&middot;dm<sup>&minus;3</sup>. Ze wzoru <i>C<sub>p</sub></i> = (<i>C<sub>m</sub></i> &middot; <i>M</i> &middot; 100%) / <i>d<sub>r</sub></i> = (2,0 &middot; 74,5 &middot; 100%) / 1090 = 13,67%."
        },
        {
            front: "Jakie stężenie procentowe przypisuje się w regule krzyżowej czystej wodzie, a jakie czystej, bezwodnej substancji stałej?",
            back: "Czystej wodzie przypisuje się stężenie <i>C<sub>p</sub></i> = 0% (oraz <i>C<sub>m</sub></i> = 0 mol&middot;dm<sup>&minus;3</sup>), natomiast czystej substancji bezwodnej (niereagującej z wodą) przypisuje się <i>C<sub>p</sub></i> = 100%."
        },
        {
            front: "Do 150 g 20% roztworu soli dolano 50 g wody. Oblicz stężenie procentowe otrzymanego roztworu.",
            back: "Masa substancji: <i>m<sub>s</sub></i> = (20% &middot; 150 g) / 100% = 30 g. Nowa masa roztworu: <i>m</i><sub><i>r</i>2</sub> = 150 g + 50 g = 200 g. Nowe stężenie: <i>C</i><sub><i>p</i>2</sub> = (30 g / 200 g) &middot; 100% = 15%."
        },
        {
            front: "Z 300 g 10% roztworu cukru odparowano 100 g wody (roztwór pozostał nienasycony). Oblicz końcowe stężenie procentowe.",
            back: "Masa cukru: <i>m<sub>s</sub></i> = (10% &middot; 300 g) / 100% = 30 g. Nowa masa roztworu: <i>m</i><sub><i>r</i>2</sub> = 300 g &minus; 100 g = 200 g. Stężenie końcowe: <i>C</i><sub><i>p</i>2</sub> = (30 g / 200 g) &middot; 100% = 15%."
        },
        {
            front: "W jakim stosunku masowym należy zmieszać roztwór 40% z roztworem 10%, aby otrzymać roztwór 16%?",
            back: "Z reguły krzyżowej: <i>m</i><sub><i>r</i>(40%)</sub> / <i>m</i><sub><i>r</i>(10%)</sub> = |10 &minus; 16| / |40 &minus; 16| = 6 / 24 = 1 : 4."
        },
        {
            front: "Dlaczego reguły krzyżowej dla stężeń molowych (opartej na sumowaniu objętości) nie wolno stosować przy mieszaniu stężonego H<sub>2</sub>SO<sub>4</sub> lub etanolu z wodą?",
            back: "Ponieważ podczas mieszania cieczy o znacznie różniących się gęstościach zachodzi zjawisko kontrakcji objętości (objętość końcowa jest mniejsza od sumy objętości składników: <i>V</i><sub><i>r</i>3</sub> &lt; <i>V</i><sub><i>r</i>1</sub> + <i>V</i><sub><i>r</i>2</sub>)."
        },
        {
            front: "Jak traktuje się hydrat (np. CuSO<sub>4</sub> &middot; 5H<sub>2</sub>O) podczas obliczania stężenia procentowego roztworu otrzymanego przez jego rozpuszczenie w wodzie?",
            back: "Substancją rozpuszczoną (<i>m<sub>s</sub></i>) jest wyłącznie zawarta w hydracie sól bezwodna (CuSO<sub>4</sub>), natomiast woda krystalizacyjna przechodzi do rozpuszczalnika (masa roztworu to <i>m<sub>r</sub></i> = <i>m<sub>w</sub></i> + <i>m</i><sub>hydratu</sub>)."
        },
        {
            front: "Oblicz „stężenie procentowe” (zawartość procentową soli bezwodnej) w hydracie CuSO<sub>4</sub> &middot; 5H<sub>2</sub>O (<i>M</i><sub>CuSO<sub>4</sub></sub> = 159,5 g&middot;mol<sup>&minus;1</sup>, <i>M</i><sub>hydratu</sub> = 249,5 g&middot;mol<sup>&minus;1</sup>).",
            back: "<i>C</i><sub><i>p</i>(hydratu)</sub> = (159,5 g&middot;mol<sup>&minus;1</sup> / 249,5 g&middot;mol<sup>&minus;1</sup>) &middot; 100% = 63,93%."
        },
        {
            front: "Oblicz stężenie procentowe roztworu otrzymanego przez rozpuszczenie 50 g CuSO<sub>4</sub> &middot; 5H<sub>2</sub>O w 200 g wody.",
            back: "Masa bezwodnego CuSO<sub>4</sub> w 50 g hydratu: <i>m<sub>s</sub></i> = 50 g &middot; (159,5 / 249,5) = 31,96 g. Masa roztworu: <i>m<sub>r</sub></i> = 200 g + 50 g = 250 g. Stężenie: <i>C<sub>p</sub></i> = (31,96 g / 250 g) &middot; 100% = 12,78% &approx; 12,8%."
        },
        {
            front: "Co jest substancją rozpuszczoną po wprowadzeniu tlenku sodu (Na<sub>2</sub>O) lub tlenku siarki(VI) (SO<sub>3</sub>) do wody i jak oblicza się jej masę?",
            back: "Tlenki te reagują z wodą: Na<sub>2</sub>O tworzy NaOH, a SO<sub>3</sub> tworzy H<sub>2</sub>SO<sub>4</sub>. Substancją rozpuszczoną jest produkt reakcji, którego masę (większą od masy tlenku!) oblicza się ze stechiometrii równania reakcji, podczas gdy <i>m<sub>r</sub></i> = <i>m<sub>w</sub></i> + <i>m</i><sub>tlenku</sub>."
        },
        {
            front: "W 93,8 g wody rozpuszczono 6,2 g tlenku sodu (Na<sub>2</sub>O, <i>M</i> = 62 g&middot;mol<sup>&minus;1</sup>). Oblicz stężenie procentowe powstałego roztworu NaOH (<i>M</i> = 40 g&middot;mol<sup>&minus;1</sup>).",
            back: "Równanie: Na<sub>2</sub>O + H<sub>2</sub>O &rarr; 2 NaOH. Liczba moli Na<sub>2</sub>O to 6,2 / 62 = 0,1 mol, więc powstaje 0,2 mol NaOH o masie <i>m<sub>s</sub></i> = 0,2 &middot; 40 = 8,0 g. Masa roztworu: <i>m<sub>r</sub></i> = 93,8 g + 6,2 g = 100 g. Stężenie: <i>C<sub>p</sub></i> = (8,0 g / 100 g) &middot; 100% = 8,0%."
        },
        {
            front: "Do 100 g wody wrzucono 4,6 g sodu (<i>M</i><sub>Na</sub> = 23 g&middot;mol<sup>&minus;1</sup>). Oblicz masę powstałego roztworu oraz jego stężenie procentowe.",
            back: "2 Na + 2 H<sub>2</sub>O &rarr; 2 NaOH + H<sub>2</sub>&uarr;. Z 0,2 mol Na (4,6 g) powstaje 0,2 mol NaOH (8,0 g) i ulatnia się 0,1 mol H<sub>2</sub> (0,2 g). Masa roztworu: <i>m<sub>r</sub></i> = 100 + 4,6 &minus; 0,2 = 104,4 g. Stężenie: <i>C<sub>p</sub></i> = (8,0 / 104,4) &middot; 100% = 7,66%."
        },
        {
            front: "Rozpuszczalność KNO<sub>3</sub> wynosi 110 g / 100 g H<sub>2</sub>O w 60&deg;C oraz 31,6 g / 100 g H<sub>2</sub>O w 20&deg;C. Ile gramów soli wykrystalizuje po ochłodzeniu 210 g nasyconego w 60&deg;C roztworu do 20&deg;C?",
            back: "W 210 g roztworu nasyconego w 60&deg;C znajduje się dokładnie 100 g wody i 110 g KNO<sub>3</sub>. Po ochłodzeniu do 20&deg;C w 100 g wody pozostaje 31,6 g soli, więc wykrystalizuje: 110 g &minus; 31,6 g = 78,4 g KNO<sub>3</sub>."
        },
        {
            front: "Ile gramów NaNO<sub>3</sub> (<i>M</i> = 85 g&middot;mol<sup>&minus;1</sup>) należy odważyć, aby sporządzić w kolbie miarowej 250 cm<sup>3</sup> roztworu o stężeniu 0,4 mol&middot;dm<sup>&minus;3</sup>?",
            back: "Objętość <i>V<sub>r</sub></i> = 0,25 dm<sup>3</sup>. Liczba moli: <i>n</i> = 0,4 mol&middot;dm<sup>&minus;3</sup> &middot; 0,25 dm<sup>3</sup> = 0,1 mol. Masa odważki: <i>m<sub>s</sub></i> = 0,1 mol &middot; 85 g&middot;mol<sup>&minus;1</sup> = 8,5 g NaNO<sub>3</sub>."
        },
        {
            front: "Wymień 4 główne kroki poprawnej procedury sporządzania roztworu substancji stałej o określonym stężeniu molowym w kolbie miarowej.",
            back: "1) Odważenie obliczonej masy substancji. 2) Wlanie do kolby miarowej ok. 1/3 – 1/2 objętości wody destylowanej i wsypanie soli przez lejek (ze spłukaniem lejka). 3) Zamknięcie kolby i wymieszanie do całkowitego rozpuszczenia. 4) Dopełnienie wodą pipetą do kreski kalibracyjnej (na poziomie menisku dolnego) i ponowne wymieszanie."
        },
        {
            front: "Jakie obserwacje i wniosek wynikają z próby rozpuszczenia kryształków NaCl w wodzie destylowanej oraz w benzynie?",
            back: "Obserwacje: W wodzie NaCl rozpuszcza się (klarowny roztwór), a w benzynie nie rozpuszcza się (osad na dnie). Wniosek: Zgodnie z regułą „podobne rozpuszcza się w podobnym”, jonowy NaCl rozpuszcza się w rozpuszczalniku polarnym (wodzie), a nie rozpuszcza w niepolarnym (benzynie)."
        },
        {
            front: "Jak doświadczalnie wykazać, że rozpuszczalność gazów w wodzie maleje wraz ze wzrostem temperatury?",
            back: "Należy ogrzać w probówce gazowaną wodę mineralną i wprowadzić wydzielający się gaz rurką do wody wapiennej Ca(OH)<sub>2</sub>. Wydzielają się pęcherzyki gazu, a woda wapienna mętnieje (CO<sub>2</sub> + Ca(OH)<sub>2</sub> &rarr; CaCO<sub>3</sub>&darr; + H<sub>2</sub>O)."
        },
        {
            front: "Jakie obserwacje towarzyszą ekstrakcji jodu z brunatnej wody jodowej za pomocą chloroformu (CHCl<sub>3</sub>, gęstość większa od wody) w rozdzielaczu?",
            back: "Po wstrząśnięciu i rozwarstwieniu cieczy górna warstwa wodna odbarwia się, natomiast dolna warstwa chloroformowa przyjmuje intensywnie fioletowe zabarwienie."
        },
        {
            front: "Ile cm<sup>3</sup> 96% roztworu H<sub>2</sub>SO<sub>4</sub> (<i>M</i> = 98 g&middot;mol<sup>&minus;1</sup>, <i>d</i> = 1,83 g&middot;cm<sup>&minus;3</sup>) potrzeba do przygotowania 1 dm<sup>3</sup> roztworu o stężeniu 0,1 mol&middot;dm<sup>&minus;3</sup>?",
            back: "Liczba moli kwasu: <i>n</i> = 0,1 mol, czyli <i>m<sub>s</sub></i> = 9,8 g czystego H<sub>2</sub>SO<sub>4</sub>. Masa roztworu 96%: <i>m<sub>r</sub></i> = (9,8 g &middot; 100%) / 96% = 10,21 g. Objętość: <i>V</i> = 10,21 g / 1,83 g&middot;cm<sup>&minus;3</sup> = 5,58 cm<sup>3</sup>."
        }
    ]
};