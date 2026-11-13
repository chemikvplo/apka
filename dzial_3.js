// Dział III. Wiązania chemiczne. Oddziaływania międzycząsteczkowe (Indeks 2 na liście)
appData[2] = {
    notatki: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">📚 KOMPENDIUM MATURALNE: WIĄZANIA CHEMICZNE, ODDZIAŁYWANIA MIĘDZYCZĄSTECZKOWE I GEOMETRIA CZĄSTECZEK</h2>

        <!-- SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Elektroujemność, Reguła Oktetu i Dubletu oraz Klasyfikacja Wiązań</h3>

            <h4>A. Dlaczego atomy tworzą wiązania chemiczne? (Sens energetyczny)</h4>
            <p>Atomy łączą się w cząsteczki lub kryształy, ponieważ dążą do <strong>obniżenia swojej energii wewnętrznej</strong>, co pozwala im osiągnąć stan o maksymalnej trwałości (bierność chemiczną). Zgodnie z teorią sformułowaną przez W. Kossela i G.N. Lewisa (1916 r.), stan ten odpowiada uzyskaniu w zewnętrznej powłoce elektronowej (walencyjnej) konfiguracji elektronowej najbliższego w układzie okresowym gazu szlachetnego (helowca):</p>
            <ul class="note-list">
                <li><strong>Reguła dubletu elektronowego:</strong> Dążenie do uzyskania <strong>2 elektronów walencyjnych</strong> (konfiguracji helu <sub>2</sub>He: 1s<sup>2</sup>) przez najmniejsze atomy leżące w pobliżu helu (np. H, Li, Be).</li>
                <li><strong>Reguła oktetu elektronowego:</strong> Dążenie do uzyskania <strong>8 elektronów walencyjnych</strong> (ns<sup>2</sup>np<sup>6</sup>) w powłoce zewnętrznej przez pozostałe pierwiastki grup 1–2 oraz 13–17 układu okresowego.</li>
            </ul>

            <p><strong>Trzy sposoby osiągania dubletu lub oktetu przez atomy:</strong></p>
            <ol class="note-list">
                <li><strong>Uwspólnienie elektronów walencyjnych</strong> (utworzenie wspólnych par elektronowych) &rarr; prowadzi do <strong>wiązania kowalencyjnego</strong>.</li>
                <li><strong>Całkowite oddanie lub przyjęcie elektronów walencyjnych</strong> (utworzenie kationów i anionów) &rarr; prowadzi do <strong>wiązania jonowego</strong>.</li>
                <li><strong>Delokalizacja elektronów walencyjnych</strong> w sieci kationów metalu &rarr; prowadzi do <strong>wiązania metalicznego</strong>.</li>
            </ol>

            <div class="note-alert">
                ⚠️ <strong>UWAGA MATURALNA – Wyjątki od reguły oktetu:</strong><br>
                Nie każda trwała cząsteczka spełnia regułę oktetu wokół atomu centralnego! Na maturze często pojawiają się trzy grupy wyjątków:
                <ul class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li><strong>Niepełny oktet (deficyt elektronowy – mniej niż 8 elektronów wokół atomu centralnego):</strong> Związki berylu, boru i glinu, np. BeCl<sub>2</sub> lub BeH<sub>2</sub> (tylko 4 elektrony wokół Be) oraz BF<sub>3</sub>, BH<sub>3</sub>, AlCl<sub>3</sub> (tylko 6 elektronów wokół B lub Al).</li>
                    <li><strong>Rozszerzony (przekroczony) oktet (więcej niż 8 elektronów wokół atomu centralnego):</strong> Dotyczy niemetali od 3. okresu wzwyż (np. P, S, Cl, Xe), które posiadają puste orbitale podpowłoki d (np. 3d) i mogą wzbudzać elektrony, tworząc 5, 6, a nawet 7 wiązań, np. PCl<sub>5</sub> (10 elektronów wokół P), SF<sub>6</sub> (12 elektronów wokół S) oraz IF<sub>7</sub> (14 elektronów wokół I).</li>
                    <li><strong>Cząsteczki z nieparzystą liczbą elektronów (rodniki):</strong> Np. NO lub NO<sub>2</sub>.</li>
                </ul>
            </div>

            <h4>B. Elektroujemność i jej zmiany w układzie okresowym</h4>
            <p><strong>Elektroujemność (<i>E</i> lub &chi;)</strong> to bezwymiarowa wielkość określająca zdolność atomu danego pierwiastka do przyciągania elektronów podczas tworzenia wiązania chemicznego z innym atomem. Najczęściej wyrażana jest w <strong>skali Paulinga</strong> (od 0,7 dla cezu Cs i fransu Fr do 4,0 dla fluoru F). Helowcom nie przypisuje się wartości elektroujemności ze względu na ich bierność chemiczną.</p>
            <ul class="note-list">
                <li><strong>W okresie (od lewej do prawej):</strong> Elektroujemność <strong>ROŚNIE</strong> (maleje promień atomowy, rośnie ładunek jądra, więc jądro silniej przyciąga elektrony).</li>
                <li><strong>W grupie (od góry do dołu, dla grup 1–2 i 13–17):</strong> Elektroujemność <strong>MALEJE</strong> (rośnie liczba powłok elektronowych i promień atomowy, więc elektrony walencyjne są dalej od jądra).</li>
                <li><strong>Pierwiastki elektrododatnie (metale):</strong> Mają niską elektroujemność, niską energię jonizacji i łatwo oddają elektrony.</li>
                <li><strong>Pierwiastki elektroujemne (niemetale):</strong> Mają wysoką elektroujemność, wysokie powinowactwo elektronowe i chętnie przyjmują elektrony.</li>
            </ul>

            <h4>C. Przewidywanie rodzaju wiązania na podstawie różnicy elektroujemności (&Delta;<i>E</i>)</h4>
            <p>Aby określić typ wiązania między dwoma atomami A i B, obliczamy wartość bezwzględną różnicy ich elektroujemności: <strong>&Delta;<i>E</i> = |<i>E</i><sub>A</sub> &minus; <i>E</i><sub>B</sub>|</strong>.</p>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Przedział &Delta;<i>E</i> (skala Paulinga)</th>
                            <th>Rodzaj wiązania chemicznego</th>
                            <th>Kto z kim tworzy to wiązanie?</th>
                            <th>Mechanizm w pigułce</th>
                            <th>Klasyczne przykłady i wyjątki maturalne</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>&Delta;<i>E</i> = 0</strong></td>
                            <td>Kowalencyjne niespolaryzowane (czysto atomowe)</td>
                            <td>Atomy tego samego niemetalu (cząsteczki homoatomowe) lub o identycznej elektroujemności</td>
                            <td>Wspólna para elektronowa należy w równym stopniu do obu atomów (symetryczna chmura elektronowa).</td>
                            <td>H<sub>2</sub>, Cl<sub>2</sub>, O<sub>2</sub>, N<sub>2</sub>, F<sub>2</sub>, P<sub>4</sub>, S<sub>8</sub>, <strong>PH<sub>3</sub></strong> (<i>E</i><sub>P</sub> = 2,1; <i>E</i><sub>H</sub> = 2,1 &rArr; &Delta;<i>E</i> = 0,0).</td>
                        </tr>
                        <tr>
                            <td><strong>0 &lt; &Delta;<i>E</i> &lt; 0,4</strong></td>
                            <td>Kowalencyjne praktycznie niespolaryzowane (słabo spolaryzowane)</td>
                            <td>Atomy dwóch różnych niemetali o bardzo zbliżonej elektroujemności</td>
                            <td>Chmura elektronowa jest przesunięta w minimalnym stopniu.</td>
                            <td>CH<sub>4</sub> (&Delta;<i>E</i> = 2,5 &minus; 2,2 = 0,3), CS<sub>2</sub> (&Delta;<i>E</i> = 0,0), SiH<sub>4</sub> (&Delta;<i>E</i> = 0,3).</td>
                        </tr>
                        <tr>
                            <td><strong>0,4 &le; &Delta;<i>E</i> &lt; 1,7</strong></td>
                            <td>Kowalencyjne spolaryzowane</td>
                            <td>Różne niemetale (lub niemetal z metalem o wyższej elektroujemności)</td>
                            <td>Wspólna para elektronowa jest przesunięta w stronę atomu bardziej elektroujemnego (powstają ładunki cząstkowe &delta;<sup>+</sup> i &delta;<sup>&minus;</sup>).</td>
                            <td>HCl (&Delta;<i>E</i> = 1,0), HBr (&Delta;<i>E</i> = 0,8), HI (&Delta;<i>E</i> = 0,5), H<sub>2</sub>O (&Delta;<i>E</i> = 1,2), NH<sub>3</sub> (&Delta;<i>E</i> = 0,8), CO<sub>2</sub> (&Delta;<i>E</i> = 0,9), <strong>AlCl<sub>3</sub></strong> (&Delta;<i>E</i> = 1,6).</td>
                        </tr>
                        <tr>
                            <td><strong>&Delta;<i>E</i> &ge; 1,7</strong></td>
                            <td>Jonowe</td>
                            <td>Aktywny metal (1., 2. grupa) + aktywny niemetal (16., 17. grupa)</td>
                            <td>Przejście elektronu(ów) z atomu metalu na atom niemetalu; przyciąganie elektrostatyczne kationu i anionu.</td>
                            <td>NaCl (&Delta;<i>E</i> = 2,3), LiCl (&Delta;<i>E</i> = 2,2), MgO (&Delta;<i>E</i> = 2,1), CaCl<sub>2</sub> (&Delta;<i>E</i> = 2,2), KF, NaH.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="note-alert danger">
                🔥 <strong>TRZY PUŁAPKI MATURALNE ZWIĄZANE Z &Delta;<i>E</i>:</strong>
                <ol class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li><strong>Fluorowodór (HF):</strong> Choć różnica elektroujemności wynosi aż &Delta;<i>E</i> = 4,0 &minus; 2,2 = 1,8 (czyli &ge; 1,7), wiązanie w cząsteczce HF jest wiązaniem <strong>kowalencyjnym silnie spolaryzowanym</strong>, a nie jonowym! Pozbawiony elektronu atom wodoru to „goły” proton H<sup>+</sup> o gigantycznej gęstości ładunku, który nie pozwala na całkowite oderwanie elektronu w fazie gazowej (ponadto HF jest gazem zbudowanym z cząsteczek, a nie kryształem jonowym).</li>
                    <li><strong>Tlenki i halogenki metali na wysokich stopniach utlenienia (np. Mn<sub>2</sub>O<sub>7</sub>, CrO<sub>3</sub>, TiCl<sub>4</sub>, AlCl<sub>3</sub>):</strong> Zasada „metal + niemetal = wiązanie jonowe” to niebezpieczny skrót myślowy! W AlCl<sub>3</sub> (&Delta;<i>E</i> = 1,6) czy Mn<sub>2</sub>O<sub>7</sub> występują wiązania <strong>kowalencyjne spolaryzowane</strong>.</li>
                    <li><strong>Sole amonowe, wodorotlenki i sole kwasów tlenowych (np. NH<sub>4</sub>Cl, NH<sub>4</sub>NO<sub>3</sub>, K<sub>2</sub>SO<sub>4</sub>, NaOH):</strong> Zawierają kilka rodzajów wiązań jednocześnie! W chlorku amonu (NH<sub>4</sub>Cl) pomiędzy kationem NH<sub>4</sub><sup>+</sup> a anionem Cl<sup>&minus;</sup> występuje wiązanie <strong>jonowe</strong>, natomiast wewnątrz samego kationu NH<sub>4</sub><sup>+</sup> występują wiązania <strong>kowalencyjne spolaryzowane</strong> (w tym jedno koordynacyjne).</li>
                </ol>
            </div>
        </div>

        <!-- SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Mechanizmy Powstawania Wiązań Chemicznych – Rozbiór Krok po Kroku</h3>

            <h4>2.1. Wiązanie kowalencyjne (niespolaryzowane i spolaryzowane)</h4>
            <p>Wiązanie kowalencyjne powstaje przez <strong>uwspólnienie niesparowanych elektronów walencyjnych</strong> dwóch atomów. Każdy atom wnosi do wiązania po 1, 2 lub 3 elektrony, tworząc odpowiednio 1, 2 lub 3 wiązania (wspólne pary elektronowe). Elektroujemność obu łączących się pierwiastków jest wysoka, więc żaden z nich nie oddaje całkowicie swoich elektronów.</p>

            <p><strong>Jak rysować wzory elektronowe (kropkowe i kreskowe) Lewisa? – Algorytm:</strong></p>
            <ol class="note-list">
                <li>Odczytaj numer grupy pierwiastków i ustal liczbę elektronów walencyjnych każdego atomu (np. H &rarr; 1e<sup>&minus;</sup>, C &rarr; 4e<sup>&minus;</sup>, N &rarr; 5e<sup>&minus;</sup>, O &rarr; 6e<sup>&minus;</sup>, Cl &rarr; 7e<sup>&minus;</sup>).</li>
                <li>Oblicz, ilu elektronów brakuje każdemu atomowi do dubletu (dla H) lub oktetu (dla pozostałych) – tyle wspólnych par elektronowych musi utworzyć dany atom.</li>
                <li>Narysuj wspólne pary elektronowe pomiędzy symbolami atomów, a pozostałe elektrony walencyjne zaznacz wokół symboli atomów jako <strong>wolne (niewiążące) pary elektronowe</strong>.</li>
                <li>Zamień każdą parę elektronową (dwie kropki <strong>:</strong>) na jedną kreskę (<strong>&mdash;</strong>), pamiętając, że na maturze we wzorach elektronowych kreskowych <strong>obowiązkowo trzeba zaznaczyć również wolne pary elektronowe</strong>!</li>
            </ol>

            <div class="chem-obs">
                📝 <strong>Przykłady mechanizmu powstawania wiązań kowalencyjnych:</strong><br>
                • <strong>Cząsteczka wodoru (H<sub>2</sub>) – wiązanie pojedyncze niespolaryzowane (&Delta;<i>E</i> = 0):</strong><br>
                Konfiguracja <sub>1</sub>H: 1s<sup>1</sup> [&uarr;] (brakuje 1e<sup>&minus;</sup> do dubletu helu 1s<sup>2</sup>). Schemat: H&bull; + &bull;H &rarr; H:H (wzór kreskowy: <strong>H&mdash;H</strong>).<br>
                • <strong>Cząsteczka chloru (Cl<sub>2</sub>) – wiązanie pojedyncze niespolaryzowane (&Delta;<i>E</i> = 0):</strong><br>
                Konfiguracja <sub>17</sub>Cl: [Ne] 3s<sup>2</sup>3p<sup>5</sup> [&uarr;&darr;] [&uarr;&darr;][&uarr;&darr;][&uarr;] (7 elektronów walencyjnych: 3 wolne pary i 1 niesparowany elektron). Każdy atom uwspólnia po 1 elektronie z orbitalu 3p, tworząc 1 wiązanie i zachowując po 3 wolne pary elektronowe.<br>
                • <strong>Cząsteczka azotu (N<sub>2</sub>) – wiązanie potrójne niespolaryzowane (&Delta;<i>E</i> = 0):</strong><br>
                Konfiguracja <sub>7</sub>N: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup> [&uarr;&darr;] [&uarr;][&uarr;][&uarr;] (5 elektronów walencyjnych: 1 wolna para na 2s<sup>2</sup> oraz 3 niesparowane elektrony na orbitalach 2p<sub>x</sub>, 2p<sub>y</sub>, 2p<sub>z</sub>). Atomy uwspólniają po 3 elektrony, tworząc wiązanie potrójne, a przy każdym atomie zostaje po 1 wolnej parze: <strong>|N&equiv;N|</strong>.<br>
                • <strong>Cząsteczka chlorowodoru (HCl) – wiązanie pojedyncze spolaryzowane (&Delta;<i>E</i> = 3,2 &minus; 2,2 = 1,0):</strong><br>
                Wodór (1s<sup>1</sup>) i chlor (3s<sup>2</sup>3p<sup>5</sup>) uwspólniają po 1 elektronie. Ponieważ chlor ma większą elektroujemność (3,2 &gt; 2,2), wspólna para elektronowa przesuwa się w stronę atomu chloru. Na atomie wodoru powstaje cząstkowy ładunek dodatni (<strong>&delta;<sup>+</sup></strong>), a na atomie chloru cząstkowy ładunek ujemny (<strong>&delta;<sup>&minus;</sup></strong>).
            </div>

            <h4>Długość a energia (moc) wiązania kowalencyjnego</h4>
            <ul class="note-list">
                <li><strong>Długość wiązania</strong> to odległość między jądrami związanych atomów (wyrażana w pikometrach: 1 pm = 10<sup>&minus;12</sup> m, nanometrach: 1 nm = 10<sup>&minus;9</sup> m lub angstremach: 1 &Aring; = 10<sup>&minus;10</sup> m).</li>
                <li><strong>Energia wiązania</strong> to energia potrzebna do rozerwania danego wiązania.</li>
                <li><strong>Zależność maturalna:</strong> Im większa krotność wiązania (pojedyncze &lt; podwójne &lt; potrójne) lub im mniejsze promienie łączących się atomów (np. w szeregu H&mdash;F &lt; H&mdash;Cl &lt; H&mdash;Br &lt; H&mdash;I), tym wiązanie jest <strong>KRÓTSZE</strong> i jednocześnie <strong>MOCNIEJSZE</strong> (ma większą energię wiązania i trudniej je rozerwać).</li>
            </ul>

            <h4>2.2. Wiązanie koordynacyjne (donorowo-akceptorowe)</h4>
            <p>Jest to odmiana wiązania kowalencyjnego, w której <strong>wspólna para elektronowa pochodzi w całości tylko od jednego z łączących się atomów</strong>:</p>
            <ul class="note-list">
                <li><strong>Donor (dawca) pary elektronowej:</strong> Atom, który uzyskał już swój własny oktet elektronowy, ale posiada przynajmniej jedną wolną parę elektronową, którą może udostępnić drugiemu atomowi (lub jonowi).</li>
                <li><strong>Akceptor (biorca) pary elektronowej:</strong> Atom lub jon o niezapełnionej powłoce walencyjnej (posiadający pusty orbital, tzw. lukę elektronową), któremu brakuje elektronów do uzyskania dubletu lub oktetu.</li>
                <li><strong>Oznaczenie graficzne:</strong> We wzorach kreskowych wiązanie koordynacyjne oznacza się strzałką (<strong>&rarr;</strong>) skierowaną od donora do akceptora.</li>
            </ul>

            <div class="note-alert">
                💡 <strong>ZŁOTA ZASADA MATURALNA:</strong><br>
                • Po utworzeniu wiązania koordynacyjnego jest ono <strong>fizycznie nieodróżnialne</strong> od zwykłego wiązania kowalencyjnego &sigma;! W kationie amonu (NH<sub>4</sub><sup>+</sup>) lub oksoniowym (H<sub>3</sub>O<sup>+</sup>) wszystkie wiązania N&mdash;H (lub O&mdash;H) mają identyczną długość i energię.<br>
                • <strong>Kiedy rysujemy wiązanie koordynacyjne?</strong> Gdy atom centralny (np. S w SO<sub>2</sub>, SO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub> lub N w HNO<sub>3</sub>) osiągnął już pełny oktet elektronowy (8 elektronów wokół siebie) za pomocą zwykłych wiązań kowalencyjnych, a do przyłączenia pozostały jeszcze kolejne atomy tlenu (którym brakuje po 2 elektrony do oktetu). W ujęciu Lewisa atom centralny udostępnia wówczas swoje wolne pary elektronowe atomom tlenu jako donor.
            </div>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Drobina</th>
                            <th>Donor i Akceptor</th>
                            <th>Mechanizm powstawania i struktura Lewisa</th>
                            <th>Liczba wiązań i wolnych par</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Kation amonu (NH<sub>4</sub><sup>+</sup>)</strong></td>
                            <td>• Donor: atom N w NH<sub>3</sub><br>• Akceptor: kation H<sup>+</sup> (pusty orbital 1s<sup>0</sup>)</td>
                            <td>Atom N w amoniaku ma 3 wiązania N&mdash;H i 1 wolną parę elektronową. Przyłącza jon H<sup>+</sup> za pomocą swojej wolnej pary: [H<sub>3</sub>N&rarr;H]<sup>+</sup>.</td>
                            <td>• 3 kowalencyjne spolaryzowane<br>• 1 koordynacyjne<br>• 0 wolnych par na atomie N</td>
                        </tr>
                        <tr>
                            <td><strong>Kation oksoniowy (H<sub>3</sub>O<sup>+</sup>)</strong></td>
                            <td>• Donor: atom O w H<sub>2</sub>O<br>• Akceptor: kation H<sup>+</sup></td>
                            <td>Atom O w wodzie ma 2 wiązania O&mdash;H i 2 wolne pary elektronowe. Jedną wolną parę przekazuje jonowi H<sup>+</sup>, a druga zostaje na tlenie.</td>
                            <td>• 2 kowalencyjne spolaryzowane<br>• 1 koordynacyjne<br>• 1 wolna para na atomie O</td>
                        </tr>
                        <tr>
                            <td><strong>Tlenek siarki(IV) (SO<sub>2</sub>)</strong></td>
                            <td>• Donor: atom S<br>• Akceptor: 1 atom O</td>
                            <td>Siarka i tlen mają po 6e<sup>&minus;</sup> walencyjnych. Siarka tworzy z pierwszym tlenem wiązanie podwójne (S=O), osiągając oktet. Drugi tlen przyłącza za pomocą swojej wolnej pary: O=S&rarr;O.</td>
                            <td>• 1 podwójne (S=O)<br>• 1 koordynacyjne (S&rarr;O)<br>• 1 wolna para na atomie S</td>
                        </tr>
                        <tr>
                            <td><strong>Tlenek siarki(VI) (SO<sub>3</sub>)</strong></td>
                            <td>• Donor: atom S<br>• Akceptor: 2 atomy O</td>
                            <td>Siarka tworzy z jednym tlenem wiązanie podwójne (S=O), a pozostałe dwie wolne pary oddaje dwóm atomom tlenu.</td>
                            <td>• 1 podwójne (S=O)<br>• 2 koordynacyjne (S&rarr;O)<br>• 0 wolnych par na atomie S</td>
                        </tr>
                        <tr>
                            <td><strong>Kwas azotowy(V) (HNO<sub>3</sub>)</strong></td>
                            <td>• Donor: atom N<br>• Akceptor: 1 atom O</td>
                            <td>Wodór łączy się z tlenem (H&mdash;O), tlen z azotem (O&mdash;N), a z drugim tlenem azot tworzy wiązanie podwójne (N=O) – azot ma już oktet. Trzeci tlen przyłącza się wiązaniem koordynacyjnym (N&rarr;O).</td>
                            <td>• 4 wiązania &sigma; i 1 wiązanie &pi;<br>• w tym 1 koordynacyjne (N&rarr;O)<br>• 0 wolnych par na atomie N</td>
                        </tr>
                        <tr>
                            <td><strong>Tlenek węgla(II) (CO)</strong></td>
                            <td>• Donor: atom O<br>• Akceptor: atom C</td>
                            <td>Węgiel (4e<sup>&minus;</sup>) i tlen (6e<sup>&minus;</sup>) tworzą 2 zwykłe wspólne pary elektronowe (tlen ma już oktet, a węgiel ma 6e<sup>&minus;</sup>). Tlen udostępnia trzecią parę koordynacyjnie węglowi: |C&#8666;O|.</td>
                            <td>• Wiązanie potrójne (1&sigma; + 2&pi;), w tym 1 koordynacyjne (O&rarr;C)<br>• po 1 wolnej parze na C i O</td>
                        </tr>
                        <tr>
                            <td><strong>Kwas siarkowy(VI) (H<sub>2</sub>SO<sub>4</sub>)</strong></td>
                            <td>• Donor: atom S<br>• Akceptor: 2 atomy O</td>
                            <td>Siarka tworzy dwa pojedyncze wiązania z grupami &mdash;OH (ma już oktet!), a dwa pozostałe atomy tlenu przyłącza wiązaniami koordynacyjnymi (S&rarr;O).</td>
                            <td>• 4 zwykłe kowalencyjne spolaryzowane<br>• 2 koordynacyjne (S&rarr;O)<br>• 0 wolnych par na atomie S</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>2.3. Wiązanie jonowe i promienie jonowe</h4>
            <p><strong>Mechanizm powstawania wiązania jonowego:</strong> Gdy różnica elektroujemności jest bardzo duża (&Delta;<i>E</i> &ge; 1,7), atom bardziej elektroujemny (niemetal) całkowicie wyrywa elektron(y) walencyjne z atomu mniej elektroujemnego (metalu):</p>
            <ul class="note-list">
                <li><strong>Atom metalu</strong> (o niskiej pierwszej energii jonizacji, czyli minimalnej energii potrzebnej do oderwania najsłabiej związanego elektronu od obojętnego atomu w stanie gazowym) oddaje elektrony i staje się dodatnio naładowanym <strong>kationem</strong>.</li>
                <li><strong>Atom niemetalu</strong> (o dużym powinowactwie elektronowym, czyli energii wydzielanej podczas przyłączania elektronu przez obojętny atom) przyjmuje te elektrony i staje się ujemnie naładowanym <strong>anionem</strong>.</li>
                <li>Różnoimiennie naładowane jony przyciągają się <strong>siłami elektrostatycznymi (kulombowskimi)</strong> we wszystkich kierunkach przestrzeni, tworząc kryształ jonowy.</li>
            </ul>

            <div class="chem-obs">
                📝 <strong>Przykłady zapisu elektronowego tworzenia związków jonowych:</strong><br>
                • <strong>Chlorek litu (LiCl, &Delta;<i>E</i> = 3,2 &minus; 1,0 = 2,2):</strong><br>
                Li (1s<sup>2</sup>2s<sup>1</sup>) &minus; 1e<sup>&minus;</sup> &rarr; Li<sup>+</sup> (1s<sup>2</sup> – dublet helu); &nbsp;&nbsp; Cl ([Ne] 3s<sup>2</sup>3p<sup>5</sup>) + 1e<sup>&minus;</sup> &rarr; Cl<sup>&minus;</sup> ([Ne] 3s<sup>2</sup>3p<sup>6</sup> – oktet argonu).<br>
                • <strong>Tlenek magnezu (MgO, &Delta;<i>E</i> = 3,4 &minus; 1,3 = 2,1):</strong><br>
                Mg (1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>) &minus; 2e<sup>&minus;</sup> &rarr; Mg<sup>2+</sup> (1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup> – oktet neonu); &nbsp;&nbsp; O (1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup>) + 2e<sup>&minus;</sup> &rarr; O<sup>2&minus;</sup> (1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup> – oktet neonu).
            </div>

            <p><strong>Jak zmienia się promień podczas powstawania jonu? (Pewniak maturalny!):</strong></p>
            <ul class="note-list">
                <li><strong>Promień kationu jest ZAWSZE MNIEJSZY niż promień macierzystego atomu (<i>r</i><sub>kationu</sub> &lt; <i>r</i><sub>atomu</sub>, np. <i>r</i><sub>Na<sup>+</sup></sub> &lt; <i>r</i><sub>Na</sub>):</strong><br>
                Po pierwsze, atom metalu oddaje wszystkie elektrony walencyjne, przez co traci całą zewnętrzną powłokę elektronową. Po drugie, przy tym samym dodatnim ładunku jądra (tej samej liczbie protonów) zmniejsza się liczba elektronów, więc pozostałe elektrony są silniej przyciągane przez jądro.</li>
                <li><strong>Promień anionu jest ZAWSZE WIĘKSZY niż promień macierzystego atomu (<i>r</i><sub>anionu</sub> &gt; <i>r</i><sub>atomu</sub>, np. <i>r</i><sub>Cl<sup>&minus;</sup></sub> &gt; <i>r</i><sub>Cl</sub>):</strong><br>
                Liczba protonów w jądrze się nie zmienia, natomiast przybywa elektronów na powłoce walencyjnej. Zwiększa się wzajemne odpychanie elektrostatyczne między elektronami, co powoduje „rozpuchnięcie” (rozszerzenie) chmury elektronowej.</li>
                <li><strong>Porównywanie promieni jonów izoelektronowych</strong> (mających tyle samo elektronów, np. O<sup>2&minus;</sup>, F<sup>&minus;</sup>, Na<sup>+</sup>, Mg<sup>2+</sup>, Al<sup>3+</sup> – każdy ma po 10e<sup>&minus;</sup> i konfigurację 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>):<br>
                Wszystkie te jony mają dokładnie dwie powłoki elektronowe, ale różnią się liczbą protonów w jądrze (<i>Z</i>). Im większa liczba atomowa <i>Z</i> (większy ładunek jądra), tym silniej jądro ściąga ku sobie te 10 elektronów i tym mniejszy jest promień jonu:</li>
            </ul>
            <div class="chem-eq">
                <i>r</i><sub>O<sup>2&minus;</sup></sub> (<i>Z</i>=8) &gt; <i>r</i><sub>F<sup>&minus;</sup></sub> (<i>Z</i>=9) &gt; <i>r</i><sub>Na<sup>+</sup></sub> (<i>Z</i>=11) &gt; <i>r</i><sub>Mg<sup>2+</sup></sub> (<i>Z</i>=12) &gt; <i>r</i><sub>Al<sup>3+</sup></sub> (<i>Z</i>=13)
            </div>

            <div class="note-alert">
                ⚠️ <strong>UWAGA MATURALNA:</strong> W rzeczywistości 100-procentowe wiązanie jonowe niemal nie istnieje – każde wiązanie o dużej różnicy &Delta;<i>E</i> ma pewien procentowy udział charakteru jonowego i kowalencyjnego (im większa różnica &Delta;<i>E</i>, tym większy udział wiązania jonowego, np. w NaCl ok. 67%, w MgCl<sub>2</sub> ok. 55%, a w AlCl<sub>3</sub> tylko 43%). Ponadto <strong>związki jonowe NIE tworzą cząsteczek</strong> – wzór NaCl lub MgCl<sub>2</sub> to wzór empiryczny (elementarny) określający wyłącznie najprostszy stosunek liczby kationów do anionów w sieci krystalicznej (1:1 lub 1:2)!
            </div>

            <h4>2.4. Wiązanie metaliczne</h4>
            <p>Występuje w metalach oraz ich stopach w stanie stałym i ciekłym. Atomy metali mają niskie energie jonizacji i łatwo uwalniają swoje elektrony walencyjne. Dodatnio naładowane <strong>zręby (rdzenie) atomowe</strong> (kationy metali) tworzą regularną sieć krystaliczną, a uwolnione elektrony walencyjne przestają należeć do konkretnego atomu – stają się <strong>elektronami zdelokalizowanymi</strong>. Poruszają się one swobodnie po całym krysztale pomiędzy kationami metalu, tworząc tzw. <strong>gaz elektronowy</strong> (lub „chmurę elektronową”), który spaja elektrostatycznie dodatnie zręby i zapewnia obojętność elektryczną metalu. Wiązanie metaliczne nie jest ukierunkowane w przestrzeni.</p>
        </div>

        <!-- SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Chemia Kwantowa Cząsteczek: Orbitale Molekularne, Wiązania &sigma; (Sigma) i &pi; (Pi)</h3>

            <h4>A. Jak z orbitali atomowych powstaje orbital molekularny?</h4>
            <p>Zgodnie z mechaniką kwantową wiązanie kowalencyjne powstaje wtedy, gdy dwa orbitale atomowe o zbliżonej energii i odpowiedniej symetrii zbliżą się do siebie i nałożą (przenikną), tworząc wspólny dla obu atomów <strong>orbital molekularny (cząsteczkowy)</strong>:</p>
            <ul class="note-list">
                <li>Z nałożenia dwóch orbitali atomowych powstają zawsze dwa orbitale molekularne: jeden <strong>orbital wiążący</strong> (o energii niższej niż wyjściowe orbitale atomowe – jego obsadzenie stabilizuje cząsteczkę) oraz jeden <strong>orbital antywiążący</strong> (o energii wyższej).</li>
                <li>Wspólna para elektronowa (o przeciwnych spinach [&uarr;&darr;] zgodnie z zakazem Pauliego) obsadza orbital molekularny wiążący.</li>
            </ul>

            <h4>B. Porównanie wiązań typu &sigma; (sigma) i typu &pi; (pi)</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Cecha porównawcza</th>
                            <th>Wiązanie typu &sigma; (sigma)</th>
                            <th>Wiązanie typu &pi; (pi)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Sposób nakładania się orbitali</strong></td>
                            <td><strong>CZOŁOWE (osiowe)</strong> nałożenie orbitali wzdłuż prostej (osi) łączącej jądra obu atomów.</td>
                            <td><strong>BOCZNE</strong> nałożenie dwóch równoległych do siebie orbitali w dwóch obszarach (nad i pod osią wiązania).</td>
                        </tr>
                        <tr>
                            <td><strong>Rozmieszczenie chmury elektronowej</strong></td>
                            <td>Maksimum gęstości elektronowej znajduje się bezpośrednio pomiędzy jądrami atomów (na osi łączącej jądra).</td>
                            <td>Chmura elektronowa jest rozdzielona na dwie części: powyżej i poniżej osi (płaszczyzny) łączącej jądra atomów.</td>
                        </tr>
                        <tr>
                            <td><strong>Jakie orbitale mogą je tworzyć?</strong></td>
                            <td>• s + s (&sigma;<sub>s&ndash;s</sub>, np. w H<sub>2</sub>)<br>• s + p (&sigma;<sub>s&ndash;p</sub>, np. w HCl, HBr)<br>• p + p czołowo (&sigma;<sub>p<sub>x</sub>&ndash;p<sub>x</sub></sub>, np. w F<sub>2</sub>, Cl<sub>2</sub>)<br>• orbitale zhybrydyzowane (sp, sp<sup>2</sup>, sp<sup>3</sup>) z innymi orbitalami (np. sp<sup>3</sup> + s w CH<sub>4</sub>, sp<sup>2</sup> + sp<sup>2</sup> w C<sub>2</sub>H<sub>4</sub>).</td>
                            <td>• <strong>Wyłącznie orbitale niezhybrydyzowane</strong> (na maturze: dwa równoległe orbitale atomowe typu p, np. p<sub>y</sub> + p<sub>y</sub> &rarr; &pi;<sub>p&ndash;p</sub> lub p<sub>z</sub> + p<sub>z</sub> &rarr; &pi;<sub>p&ndash;p</sub>, oraz w bardziej złożonych cząsteczkach orbitale d).<br>• Orbitale s oraz orbitale zhybrydyzowane <strong>NIGDY nie tworzą wiązań &pi;</strong>!</td>
                        </tr>
                        <tr>
                            <td><strong>Trwałość (energia) wiązania</strong></td>
                            <td><strong>Silniejsze (bardziej trwałe)</strong>, ponieważ obszar przenikania się orbitali przy nałożeniu czołowym jest duży.</td>
                            <td><strong>Słabsze (łatwiej ulega rozerwaniu)</strong>, np. w reakcjach addycji do alkenów i alkinów, ze względu na mniejsze boczne przenikanie orbitali.</td>
                        </tr>
                        <tr>
                            <td><strong>Swoboda obrotu (rotacji)</strong></td>
                            <td><strong>Umożliwia swobodny obrót</strong> związanych atomów wokół osi wiązania (symetria cylindryczna).</td>
                            <td><strong>Blokuje swobodny obrót</strong> wokół osi wiązania (przekręcenie atomów wymagałoby zerwania bocznego nałożenia orbitali p – stąd zjawisko izomerii <em>cis–trans</em> w alkenach!).</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="chem-eq">
                Wiązanie pojedyncze (A&mdash;B): zawsze <strong>1&sigma; (i 0&pi;)</strong> &nbsp;|&nbsp; Wiązanie podwójne (A=B): zawsze <strong>1&sigma; + 1&pi;</strong> &nbsp;|&nbsp; Wiązanie potrójne (A&equiv;B): zawsze <strong>1&sigma; + 2&pi;</strong>
            </div>

            <div class="note-alert">
                💡 <strong>JAK BŁYSKAWICZNIE POLICZYĆ WIĄZANIA &sigma; I &pi; W DUŻEJ CZĄSTECZCE ORGANICZNEJ?</strong><br>
                • Każde kreskowe połączenie między dwoma atomami (niezależnie od tego, czy jest pojedyncze, podwójne czy potrójne) zawiera dokładnie jedno wiązanie &sigma;. Dla cząsteczki łańcuchowej (niecyklicznej) liczba wiązań &sigma; jest zawsze równa: <strong>Liczba wszystkich atomów w cząsteczce &minus; 1</strong> (w cząsteczce z jednym pierścieniem jest równa liczbie wszystkich atomów).<br>
                • Każda dodatkowa kreska ponad pierwszą (w wiązaniu podwójnym lub potrójnym) to wiązanie &pi;.<br>
                <em>Przykład 1:</em> Eten C<sub>2</sub>H<sub>4</sub> (H<sub>2</sub>C=CH<sub>2</sub>) ma 6 atomów &rarr; 6 &minus; 1 = <strong>5 wiązań &sigma;</strong> (cztery C&mdash;H i jedno C&mdash;C) oraz <strong>1 wiązanie &pi;</strong> (w wiązaniu C=C).<br>
                <em>Przykład 2:</em> Etyn C<sub>2</sub>H<sub>2</sub> (H&mdash;C&equiv;C&mdash;H) ma 4 atomy &rarr; 4 &minus; 1 = <strong>3 wiązania &sigma;</strong> (dwa C&mdash;H i jedno C&mdash;C) oraz <strong>2 wiązania &pi;</strong> (w wiązaniu C&equiv;C).
            </div>
        </div>

        <!-- SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Hybrydyzacja Orbitali Atomowych – Jak i Dlaczego Powstaje?</h3>

            <h4>A. Po co wprowadzono pojęcie hybrydyzacji? (Zagadka metanu CH<sub>4</sub>)</h4>
            <p>W stanie podstawowym atom węgla (<i>Z</i> = 6, konfiguracja 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup>: 2s [&uarr;&darr;], 2p<sub>x</sub> [&uarr;], 2p<sub>y</sub> [&uarr;], 2p<sub>z</sub> [ ]) ma tylko 2 niesparowane elektrony, więc teoretycznie powinien tworzyć cząsteczkę CH<sub>2</sub> z wiązaniami pod kątem 90&deg;. Z doświadczeń wiadomo jednak, że węgiel tworzy trwałą cząsteczkę metanu (CH<sub>4</sub>) posiadającą <strong>4 identyczne (równocenne) wiązania C&mdash;H</strong> o takiej samej długości i energii, nachylone pod kątem <strong>109&deg;28' (ok. 109,5&deg;)</strong>. Wyjaśnia to dwuetapowy model Linusa Paulinga:</p>
            <ul class="note-list">
                <li><strong>KROK 1: Wzbudzenie atomu (C &rarr; C*):</strong> Dostarczenie niewielkiej porcji energii przenosi jeden elektron z podpowłoki 2s na pusty orbital 2p<sub>z</sub>:<br>
                <sub>6</sub>C* (stan wzbudzony): 1s<sup>2</sup> 2s<sup>1</sup> 2p<sup>3</sup> &rarr; 2s [&uarr;], 2p<sub>x</sub> [&uarr;], 2p<sub>y</sub> [&uarr;], 2p<sub>z</sub> [&uarr;]. Atom ma już 4 niesparowane elektrony, ale znajdują się one na nierównocennych orbitalach (jednym 2s i trzech 2p).</li>
                <li><strong>KROK 2: Hybrydyzacja (wymieszanie orbitali):</strong> Operacja matematyczna polegająca na „wymieszaniu” i ujednoliceniu różnych orbitali atomowych tej samej powłoki walencyjnej (o zbliżonej energii, np. s i p). Powstają nowe <strong>orbitale zhybrydyzowane (hybrydy)</strong> o identycznej energii i identycznym kształcie (niesymetrycznej ósemki: jedna duża czasza tworząca wiązanie &sigma; i jedna mała).</li>
            </ul>

            <div class="note-alert danger">
                🔥 <strong>CZTERY ŻELAZNE ZASADY HYBRYDYZACJI NA MATURĘ:</strong>
                <ol class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li><strong>Zasada zachowania liczby orbitali:</strong> Liczba powstałych orbitali zhybrydyzowanych jest zawsze równa liczbie orbitali atomowych, które uległy wymieszaniu (np. 1 orbital s + 3 orbitale p = 4 orbitale sp<sup>3</sup>).</li>
                    <li><strong>Co mieszczą orbitale zhybrydyzowane?</strong> Mogą tworzyć wyłącznie <strong>wiązania typu &sigma;</strong> albo mieścić <strong>wolne pary elektronowe</strong> atomu centralnego.</li>
                    <li><strong>Co z wiązaniami &pi;?</strong> Orbitale zhybrydyzowane <strong>NIGDY nie tworzą wiązań &pi;</strong>! Jeżeli atom centralny tworzy wiązanie podwójne (1&pi;) lub potrójne (2&pi;), to odpowiednia liczba orbitali p (1 lub 2) pozostaje niezhybrydyzowana i nakłada się bocznie, tworząc wiązania &pi;.</li>
                    <li><strong>Kiedy hybrydyzacja zachodzi?</strong> Hybrydyzacji ulegają tylko orbitale atomu tworzącego cząsteczkę wieloatomową (atomu centralnego); w pojedynczych wolnych atomach czy cząsteczkach dwuatomowych (jak H<sub>2</sub>, HCl, Cl<sub>2</sub>) hybrydyzacja nie występuje.</li>
                </ol>
            </div>

            <h4>B. Rozbiór 3 głównych typów hybrydyzacji wymaganych na maturze (sp<sup>3</sup>, sp<sup>2</sup>, sp)</h4>

            <p><strong>1. Hybrydyzacja sp<sup>3</sup> (tetraedryczna):</strong></p>
            <ul class="note-list">
                <li><strong>Mechanizm:</strong> Wymieszaniu ulega 1 orbital s + 3 orbitale p (p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>) &rarr; powstają <strong>4 równocenne orbitale zhybrydyzowane sp<sup>3</sup></strong> (brak niezhybrydyzowanych orbitali p).</li>
                <li><strong>Geometria orbitali:</strong> 4 orbitale sp<sup>3</sup> celują w naroża <strong>czworościanu foremnego (tetraedru)</strong> pod kątem <strong>109&deg;28' (&approx; 109,5&deg;)</strong>.</li>
                <li><strong>Przykłady:</strong>
                    <br>– <em>Metan (CH<sub>4</sub>) i alkany:</em> 4 orbitale sp<sup>3</sup> węgla nakładają się czołowo z orbitalami 1s<sup>1</sup> wodoru, tworząc 4 wiązania &sigma;<sub>sp<sup>3</sup>&ndash;s</sub>.
                    <br>– <em>Amoniak (NH<sub>3</sub>) i woda (H<sub>2</sub>O):</em> Hybrydyzacji sp<sup>3</sup> ulegają orbitale N (2s<sup>2</sup>2p<sup>3</sup>) i O (2s<sup>2</sup>2p<sup>4</sup>) bez uprzedniego wzbudzenia! W NH<sub>3</sub> trzy orbitale sp<sup>3</sup> tworzą wiązania &sigma;, a czwarty zajmuje 1 wolna para elektronowa. W H<sub>2</sub>O dwa orbitale sp<sup>3</sup> tworzą wiązania &sigma;, a dwa zajmują 2 wolne pary elektronowe.
                    <br>– <em>Diament i tlenek krzemu(IV) (SiO<sub>2</sub>):</em> Wszystkie atomy C w diamencie oraz atomy Si i O w kwarcu mają hybrydyzację sp<sup>3</sup>.
                </li>
            </ul>

            <p><strong>2. Hybrydyzacja sp<sup>2</sup> (trygonalna):</strong></p>
            <ul class="note-list">
                <li><strong>Mechanizm:</strong> Wymieszaniu ulega 1 orbital s + 2 orbitale p (p<sub>x</sub>, p<sub>y</sub>) &rarr; powstają <strong>3 równocenne orbitale zhybrydyzowane sp<sup>2</sup></strong>. Trzeci orbital p (p<sub>z</sub>) pozostaje niezhybrydyzowany i jest ustawiony prostopadle do płaszczyzny orbitali sp<sup>2</sup>.</li>
                <li><strong>Geometria orbitali:</strong> 3 orbitale sp<sup>2</sup> leżą w jednej płaszczyźnie i są skierowane ku narożom <strong>trójkąta równobocznego</strong> pod kątem <strong>120&deg;</strong>.</li>
                <li><strong>Przykłady:</strong>
                    <br>– <em>Fluorek boru (BF<sub>3</sub>):</em> Po wzbudzeniu boru (<sub>5</sub>B*: 1s<sup>2</sup>2s<sup>1</sup>2p<sub>x</sub><sup>1</sup>2p<sub>y</sub><sup>1</sup>) 3 orbitale sp<sup>2</sup> nakładają się czołowo z orbitalami 2p trzech atomów fluoru, dając płaską, trójkątną cząsteczkę BF<sub>3</sub>.
                    <br>– <em>Eten (C<sub>2</sub>H<sub>4</sub>, H<sub>2</sub>C=CH<sub>2</sub>) i wiązanie podwójne C=C:</em> W każdym atomie węgla 3 orbitale sp<sup>2</sup> tworzą 3 wiązania &sigma; (dwa &sigma;<sub>sp<sup>2</sup>&ndash;s</sub> z wodorami i jedno &sigma;<sub>sp<sup>2</sup>&ndash;sp<sup>2</sup></sub> między węglami), a niezhybrydyzowane orbitale 2p<sub>z</sub> obu węgli nakładają się bocznie, tworząc wiązanie &pi;<sub>p&ndash;p</sub> (dlatego cząsteczka etenu jest płaska).
                    <br>– <em>Inne drobiny o hybrydyzacji sp<sup>2</sup>:</em> SO<sub>2</sub>, SO<sub>3</sub>, CO<sub>3</sub><sup>2&minus;</sup>, NO<sub>3</sub><sup>&minus;</sup>, benzen (C<sub>6</sub>H<sub>6</sub>), grafit, grafen, aldehydy i ketony (węgiel grupy C=O).
                </li>
            </ul>

            <p><strong>3. Hybrydyzacja sp (dygonalna / liniowa):</strong></p>
            <ul class="note-list">
                <li><strong>Mechanizm:</strong> Wymieszaniu ulega 1 orbital s + 1 orbital p (p<sub>x</sub>) &rarr; powstają <strong>2 równocenne orbitale zhybrydyzowane sp</strong>. Pozostałe dwa orbitale p (p<sub>y</sub> i p<sub>z</sub>) pozostają niezhybrydyzowane i są wzajemnie prostopadłe do siebie oraz do osi orbitali sp.</li>
                <li><strong>Geometria orbitali:</strong> 2 orbitale sp układają się wzdłuż jednej linii prostej pod kątem <strong>180&deg;</strong> (struktura liniowa / dygonalna).</li>
                <li><strong>Przykłady:</strong>
                    <br>– <em>Wodorek berylu (BeH<sub>2</sub>) i chlorek berylu (BeCl<sub>2</sub>):</em> Po wzbudzeniu berylu (<sub>4</sub>Be*: 1s<sup>2</sup>2s<sup>1</sup>2p<sub>x</sub><sup>1</sup>) powstają 2 orbitale sp tworzące 2 liniowe wiązania &sigma; pod kątem 180&deg;.
                    <br>– <em>Etyn (C<sub>2</sub>H<sub>2</sub>, H&mdash;C&equiv;C&mdash;H) i cyjanowodór (H&mdash;C&equiv;N):</em> 2 orbitale sp węgla tworzą 2 wiązania &sigma; pod kątem 180&deg;, natomiast dwa niezhybrydyzowane orbitale 2p<sub>y</sub> i 2p<sub>z</sub> nakładają się bocznie z orbitalami drugiego atomu (C lub N), tworząc dwa prostopadłe do siebie wiązania &pi;.
                    <br>– <em>Tlenek węgla(IV) (CO<sub>2</sub>, O=C=O):</em> Atom węgla tworzy 2 wiązania &sigma; i 2 wiązania &pi; (brak wolnych par na węglu) &rarr; hybrydyzacja sp, kształt liniowy (180&deg;).
                </li>
            </ul>
        </div>

        <!-- SEKCJA 5 -->
        <div class="note-section">
            <h3>5. Geometria Cząsteczek i Metoda VSEPR – Algorytmy Krok po Kroku</h3>

            <h4>A. Słowniczek pojęć i założenia metody VSEPR</h4>
            <ul class="note-list">
                <li><strong>Atom centralny (A):</strong> Atom stanowiący przestrzenny środek cząsteczki lub jonu, z którym połączone są pozostałe atomy (zwykle atom o najwyższej wartościowości lub najmniej liczny we wzorze, np. S w SO<sub>2</sub>, N w NH<sub>3</sub>, O w H<sub>2</sub>O; wodór nigdy nie jest atomem centralnym!).</li>
                <li><strong>Ligandy (B):</strong> Atomy, jony lub grupy atomów bezpośrednio przyłączone do atomu centralnego.</li>
                <li><strong>Liczba koordynacyjna (&sigma;):</strong> Całkowita liczba ligandów połączonych z atomem centralnego (równa liczbie wiązań typu &sigma; tworzonych przez atom centralny).</li>
                <li><strong>Metoda VSEPR (<em>Valence Shell Electron Pair Repulsion</em> – odpychanie par elektronowych powłoki walencyjnej):</strong> Zarówno wiązania typu &sigma;, jak i wolne (niewiążące) pary elektronowe (<i>Wpe</i>) wokół atomu centralnego są ujemnie naładowanymi chmurami elektronowymi, więc odpychają się wzajemnie i dążą do takiego rozmieszczenia w przestrzeni, aby kąty między nimi były maksymalnie duże. (Wiązań &pi; <strong>NIE wlicza się</strong> do liczby przestrzennej!).</li>
            </ul>

            <h4>B. Dwa niezawodne sposoby obliczania Liczby Przestrzennej (<i>Lp</i>)</h4>
            <p><strong>Liczba przestrzenna (<i>Lp</i>)</strong> określa łączną liczbę zhybrydyzowanych orbitali atomu centralnego i bezpośrednio wskazuje typ hybrydyzacji:<br>
            • <strong><i>Lp</i> = 2 &rArr; hybrydyzacja sp</strong> (układ orbitali: linia prosta)<br>
            • <strong><i>Lp</i> = 3 &rArr; hybrydyzacja sp<sup>2</sup></strong> (układ orbitali: trójkąt równoboczny)<br>
            • <strong><i>Lp</i> = 4 &rArr; hybrydyzacja sp<sup>3</sup></strong> (układ orbitali: tetraedr / czworościan foremny)<br>
            <em>(Rozszerzenie ponadprogramowe: Lp = 5 &rArr; sp<sup>3</sup>d bipiramida trygonalna; Lp = 6 &rArr; sp<sup>3</sup>d<sup>2</sup> oktaedr; Lp = 7 &rArr; sp<sup>3</sup>d<sup>3</sup> bipiramida pentagonalna).</em></p>

            <div class="chem-eq">
                <strong>SPOSÓB I (ze struktury Lewisa):</strong> &nbsp; <i>Lp</i> = liczba wiązań &sigma; atomu centralnego + liczba wolnych par elektronowych (<i>Wpe</i>) atomu centralnego
            </div>
            <div class="chem-eq">
                <strong>SPOSÓB II (ze wzoru matematycznego):</strong><br>
                Dla cząsteczki obojętnej: <i>Lp</i> = &sigma; + &frac12;(<i>n</i> &minus; <i>m</i>) &nbsp;|&nbsp; Dla anionu: <i>Lp</i> = &sigma; + &frac12;(<i>n</i> &minus; <i>m</i> + <i>a</i>) &nbsp;|&nbsp; Dla kationu: <i>Lp</i> = &sigma; + &frac12;(<i>n</i> &minus; <i>m</i> &minus; <i>a</i>)
            </div>
            <p>Gdzie: <strong>&sigma;</strong> – liczba ligandów; <strong><i>n</i></strong> – liczba elektronów walencyjnych atomu centralnego; <strong><i>m</i></strong> – łączna liczba elektronów potrzebna wszystkim ligandom do oktetu/dubletu (dla H, F, Cl, Br, I, &mdash;OH wstawiamy 1; dla O, S jako liganda wstawiamy 2; dla N jako liganda wstawiamy 3); <strong><i>a</i></strong> – wartość bezwzględna ładunku jonu. (Wyrażenie &frac12;(<i>n</i> &minus; <i>m</i> &plusmn; <i>a</i>) to dokładnie liczba wolnych par elektronowych <i>Wpe</i> na atomie centralnym!).</p>

            <div class="chem-obs">
                📝 <strong>Przykłady wyznaczania hybrydyzacji i kształtu cząsteczek krok po kroku:</strong><br>
                • <strong>Przykład 1: Tlenek węgla(IV) (CO<sub>2</sub>):</strong> Atom centralny C (<i>n</i> = 4), 2 ligandy O (&sigma; = 2, <i>m</i> = 2&middot;2 = 4). <i>Lp</i> = 2 + &frac12;(4 &minus; 4) = 2 + 0 = <strong>2</strong> (typ AB<sub>2</sub>E<sub>0</sub>) &rArr; <strong>hybrydyzacja sp, kształt liniowy (180&deg;)</strong>.<br>
                • <strong>Przykład 2: Anion węglanowy (CO<sub>3</sub><sup>2&minus;</sup>):</strong> Atom centralny C (<i>n</i> = 4), 3 ligandy O (&sigma; = 3, <i>m</i> = 3&middot;2 = 6), ładunek <i>a</i> = 2. <i>Lp</i> = 3 + &frac12;(4 &minus; 6 + 2) = 3 + 0 = <strong>3</strong> (typ AB<sub>3</sub>E<sub>0</sub>) &rArr; <strong>hybrydyzacja sp<sup>2</sup>, trójkąt równoboczny płaski (120&deg;)</strong>.<br>
                • <strong>Przykład 3: Tlenek siarki(IV) (SO<sub>2</sub>) i anion azotanowy(III) (NO<sub>2</sub><sup>&minus;</sup>):</strong><br>
                Dla SO<sub>2</sub>: S (<i>n</i> = 6), 2 ligandy O (&sigma; = 2, <i>m</i> = 4) &rArr; <i>Lp</i> = 2 + &frac12;(6 &minus; 4) = 2 + 1 = <strong>3</strong> (&sigma; = 2, <i>Wpe</i> = 1).<br>
                Dla NO<sub>2</sub><sup>&minus;</sup>: N (<i>n</i> = 5), 2 ligandy O (&sigma; = 2, <i>m</i> = 4), <i>a</i> = 1 &rArr; <i>Lp</i> = 2 + &frac12;(5 &minus; 4 + 1) = 2 + 1 = <strong>3</strong> (&sigma; = 2, <i>Wpe</i> = 1).<br>
                W obu drobinach <i>Lp</i> = 3 (typ AB<sub>2</sub>E<sub>1</sub>) &rArr; <strong>hybrydyzacja sp<sup>2</sup></strong>, ale jedno naroże trójkąta zajmuje wolna para elektronowa, więc rzeczywisty kształt obu drobin jest <strong>kątowy (V-kształtny, kąt ok. 119&deg;)</strong>!<br>
                • <strong>Przykład 4: Kation amonu (NH<sub>4</sub><sup>+</sup>) vs. Amoniak (NH<sub>3</sub>):</strong><br>
                Dla NH<sub>4</sub><sup>+</sup>: N (<i>n</i> = 5), 4 ligandy H (&sigma; = 4, <i>m</i> = 4), kation <i>a</i> = 1 &rArr; <i>Lp</i> = 4 + &frac12;(5 &minus; 4 &minus; 1) = 4 + 0 = <strong>4</strong> (typ AB<sub>4</sub>E<sub>0</sub>) &rArr; <strong>hybrydyzacja sp<sup>3</sup>, kształt tetraedru (109,5&deg;)</strong>.<br>
                Dla NH<sub>3</sub>: N (<i>n</i> = 5), 3 ligandy H (&sigma; = 3, <i>m</i> = 3) &rArr; <i>Lp</i> = 3 + &frac12;(5 &minus; 3) = 3 + 1 = <strong>4</strong> (typ AB<sub>3</sub>E<sub>1</sub>) &rArr; <strong>hybrydyzacja sp<sup>3</sup>, kształt piramidy trygonalnej (ok. 107&deg;)</strong>.
            </div>

            <h4>C. Wpływ wolnych par elektronowych na kąty między wiązaniami (Zaburzona geometria)</h4>
            <p>Para elektronowa tworząca wiązanie &sigma; jest przyciągana jednocześnie przez dwa jądra atomowe, przez co jej chmura jest wyciągnięta i zajmuje mniej miejsca. Natomiast <strong>wolna para elektronowa (<i>Wpe</i>)</strong> jest przyciągana tylko przez jedno jądro (atomu centralnego) – znajduje się bliżej niego, jej chmura jest bardziej rozmyta w przestrzeni i <strong>odpycha sąsiednie pary elektronowe znacznie silniej</strong> niż robi to para wiążąca:</p>
            <div class="chem-eq">
                <strong>Szereg siły odpychania:</strong> &nbsp; <i>Wpe</i>&ndash;<i>Wpe</i> &nbsp;&gt;&nbsp; <i>Wpe</i>&ndash;para wiążąca &sigma; &nbsp;&gt;&nbsp; para wiążąca &sigma;&ndash;para wiążąca &sigma;
            </div>
            <p><strong>Konsekwencja w szeregu CH<sub>4</sub> &rarr; NH<sub>3</sub> &rarr; H<sub>2</sub>O (wszystkie mają <i>Lp</i> = 4 i hybrydyzację sp<sup>3</sup>!):</strong></p>
            <ul class="note-list">
                <li><strong>CH<sub>4</sub> (0 wolnych par, AB<sub>4</sub>E<sub>0</sub>):</strong> Wszystkie 4 pary są wiążące i odpychają się z identyczną siłą &rArr; idealny tetraedr, kąt <strong>&alpha; = 109,5&deg;</strong>.</li>
                <li><strong>NH<sub>3</sub> (1 wolna para, AB<sub>3</sub>E<sub>1</sub>):</strong> Jedna wolna para na azocie odpycha 3 pary wiążące N&mdash;H silniej, niż one odpychają się między sobą, „ściskając” je ku dołowi &rArr; piramida trygonalna, kąt zmniejsza się do <strong>&alpha; &approx; 107&deg; (107,3&deg;)</strong>.</li>
                <li><strong>H<sub>2</sub>O (2 wolne pary, AB<sub>2</sub>E<sub>2</sub>):</strong> Dwie wolne pary na tlenie odpychają się bardzo silnie i jeszcze mocniej ściskają dwie pary wiążące O&mdash;H &rArr; cząsteczka kątowa (V-kształtna), kąt maleje aż do <strong>&alpha; = 104,5&deg;</strong>.</li>
            </ul>

            <h4>D. Zbiorcza tabela maturalna VSEPR: Liczba przestrzenna, hybrydyzacja i kształt drobin</h4>
            <div class="note-alert">
                ⚠️ <strong>PUŁAPKA MATURALNA:</strong> O kształcie cząsteczki decyduje <strong>rozmieszczenie samych jąder atomowych w przestrzeni</strong> (wolne pary elektronowe wpływają na kształt, odpychając wiązania, ale same nie są wierzchołkami cząsteczki!). Gdy <i>Wpe</i> = 0, kształt cząsteczki pokrywa się z geometrią orbitali zhybrydyzowanych. Gdy <i>Wpe</i> &gt; 0, kształt ulega deformacji! (Dodatkowo każda cząsteczka dwuatomowa typu H<sub>2</sub>, O<sub>2</sub>, HCl, CO jest zawsze liniowa).
            </div>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th><i>Lp</i></th>
                            <th>Typ hybrydyzacji</th>
                            <th>Wiązania &sigma;</th>
                            <th>Wolne pary (<i>Wpe</i>)</th>
                            <th>Typ drobiny</th>
                            <th>Kształt (geometria) cząsteczki / jonu</th>
                            <th>Kąt między wiązaniami</th>
                            <th>Najważniejsze przykłady na maturze</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>2</strong></td>
                            <td><strong>sp</strong> (dygonalna)</td>
                            <td>2</td>
                            <td>0</td>
                            <td>AB<sub>2</sub>E<sub>0</sub></td>
                            <td><strong>Liniowa</strong> (struktura dygonalna)</td>
                            <td>180&deg;</td>
                            <td>BeCl<sub>2</sub>, BeH<sub>2</sub>, CO<sub>2</sub>, CS<sub>2</sub>, HCN, C<sub>2</sub>H<sub>2</sub></td>
                        </tr>
                        <tr>
                            <td><strong>3</strong></td>
                            <td><strong>sp<sup>2</sup></strong> (trygonalna)</td>
                            <td>3</td>
                            <td>0</td>
                            <td>AB<sub>3</sub>E<sub>0</sub></td>
                            <td><strong>Trójkąt równoboczny / płaski</strong> (trygonalna)</td>
                            <td>120&deg;</td>
                            <td>BF<sub>3</sub>, BCl<sub>3</sub>, AlH<sub>3</sub>, SO<sub>3</sub>, CO<sub>3</sub><sup>2&minus;</sup>, NO<sub>3</sub><sup>&minus;</sup>, HCHO, C<sub>2</sub>H<sub>4</sub></td>
                        </tr>
                        <tr>
                            <td><strong>3</strong></td>
                            <td><strong>sp<sup>2</sup></strong> (trygonalna)</td>
                            <td>2</td>
                            <td>1</td>
                            <td>AB<sub>2</sub>E<sub>1</sub></td>
                            <td><strong>Kątowa</strong> (V-kształtna)</td>
                            <td>&lt; 120&deg; (ok. 119&deg;)</td>
                            <td>SO<sub>2</sub>, NO<sub>2</sub><sup>&minus;</sup>, O<sub>3</sub>, SnCl<sub>2</sub></td>
                        </tr>
                        <tr>
                            <td><strong>4</strong></td>
                            <td><strong>sp<sup>3</sup></strong> (tetraedryczna)</td>
                            <td>4</td>
                            <td>0</td>
                            <td>AB<sub>4</sub>E<sub>0</sub></td>
                            <td><strong>Tetraedr / czworościan foremny</strong></td>
                            <td>109,5&deg; (109&deg;28')</td>
                            <td>CH<sub>4</sub>, CCl<sub>4</sub>, SiH<sub>4</sub>, NH<sub>4</sub><sup>+</sup>, SO<sub>4</sub><sup>2&minus;</sup>, PO<sub>4</sub><sup>3&minus;</sup>, ClO<sub>4</sub><sup>&minus;</sup></td>
                        </tr>
                        <tr>
                            <td><strong>4</strong></td>
                            <td><strong>sp<sup>3</sup></strong> (tetraedryczna)</td>
                            <td>3</td>
                            <td>1</td>
                            <td>AB<sub>3</sub>E<sub>1</sub></td>
                            <td><strong>Piramida trygonalna</strong> (piramidalna)</td>
                            <td>&approx; 107&deg; (107,3&deg;)</td>
                            <td>NH<sub>3</sub>, NF<sub>3</sub>, PH<sub>3</sub>, PCl<sub>3</sub>, H<sub>3</sub>O<sup>+</sup>, SO<sub>3</sub><sup>2&minus;</sup>, ClO<sub>3</sub><sup>&minus;</sup></td>
                        </tr>
                        <tr>
                            <td><strong>4</strong></td>
                            <td><strong>sp<sup>3</sup></strong> (tetraedryczna)</td>
                            <td>2</td>
                            <td>2</td>
                            <td>AB<sub>2</sub>E<sub>2</sub></td>
                            <td><strong>Kątowa</strong> (V-kształtna)</td>
                            <td>104,5&deg;</td>
                            <td>H<sub>2</sub>O, H<sub>2</sub>S, OF<sub>2</sub>, Cl<sub>2</sub>O, ClO<sub>2</sub><sup>&minus;</sup>, NH<sub>2</sub><sup>&minus;</sup></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- SEKCJA 6 -->
        <div class="note-section">
            <h3>6. Polarność Cząsteczek i Moment Dipolowy (&mu;)</h3>

            <h4>A. Polaryzacja wiązania a polarność całej cząsteczki</h4>
            <ul class="note-list">
                <li><strong>Dipol elektryczny</strong> to układ dwóch różnoimiennych, lecz równych co do wartości ładunków cząstkowych (&delta;<sup>+</sup> i &delta;<sup>&minus;</sup>) znajdujących się w pewnej odległości <i>l</i> od siebie.</li>
                <li><strong>Moment dipolowy (&mu; = &delta; &middot; <i>l</i>)</strong> jest miarą polarności i wielkością wektorową. W cząsteczkach wieloatomowych wypadkowy moment dipolowy (<strong>&mu;<sub>wyp</sub></strong>) jest sumą wektorową momentów dipolowych poszczególnych wiązań.</li>
            </ul>

            <h4>B. Algorytm: Jak w 5 sekund ocenić, czy cząsteczka jest polarna (&mu; &ne; 0), czy niepolarna (&mu; = 0)?</h4>
            <ul class="note-list">
                <li><strong>PRZYPADEK 1: Cząsteczka NIEPOLARNA (&mu; = 0):</strong>
                    <br>1. Cząsteczki homoatomowe (np. H<sub>2</sub>, O<sub>2</sub>, N<sub>2</sub>, Cl<sub>2</sub>), bo wiązania nie są w ogóle spolaryzowane (&Delta;<i>E</i> = 0).
                    <br>2. Cząsteczki, które mają silnie spolaryzowane wiązania, ale mają <strong>w pełni symetryczną budowę przestrzenną</strong>, przez co wektory momentów dipolowych wiązań znoszą się wzajemnie do zera (&mu;<sub>wyp</sub> = 0)!<br>
                    <strong>Warunek symetrii:</strong> Wszystkie ligandy wokół atomu centralnego są identyczne <strong>ORAZ</strong> atom centralny nie posiada wolnych par elektronowych (<i>Wpe</i> = 0) – typy AB<sub>2</sub>E<sub>0</sub> (liniowy, np. CO<sub>2</sub>, CS<sub>2</sub>, BeCl<sub>2</sub>), AB<sub>3</sub>E<sub>0</sub> (trójkąt równoboczny, np. BF<sub>3</sub>, SO<sub>3</sub>) oraz AB<sub>4</sub>E<sub>0</sub> (tetraedr, np. CH<sub>4</sub>, CCl<sub>4</sub>).
                </li>
                <li><strong>PRZYPADEK 2: Cząsteczka POLARNA – DIPOL (&mu; &gt; 0):</strong>
                    <br>1. Cząsteczki dwuatomowe heteroatomowe o spolaryzowanym wiązaniu (np. HCl, HF, HBr, CO, NO).
                    <br>2. Cząsteczki wieloatomowe niesymetryczne – czyli takie, w których:
                    <br>&ndash; na atomie centralnym znajdują się <strong>wolne pary elektronowe</strong> zaburzające geometrię (kształt kątowy AB<sub>2</sub>E<sub>1</sub>, AB<sub>2</sub>E<sub>2</sub> np. SO<sub>2</sub>, H<sub>2</sub>O, H<sub>2</sub>S lub piramida trygonalna AB<sub>3</sub>E<sub>1</sub> np. NH<sub>3</sub>, PCl<sub>3</sub>), <strong>LUB</strong>
                    <br>&ndash; do atomu centralnego przyłączone są <strong>różne ligandy</strong> (np. CHCl<sub>3</sub>, CH<sub>3</sub>Cl, HCN, HCHO), przez co wektory wiązań mają różne długości i ich suma wektorowa nie znosi się do zera (&mu;<sub>wyp</sub> &gt; 0).
                </li>
            </ul>
        </div>

        <!-- SEKCJA 7 -->
        <div class="note-section">
            <h3>7. Oddziaływania Międzycząsteczkowe (Wtórne)</h3>
            <p>Są to oddziaływania słabsze od wiązań chemicznych, ale to one decydują o stanie skupienia substancji molekularnych, ich temperaturze topnienia, wrzenia oraz rozpuszczalności w różnych rozpuszczalnikach.</p>

            <h4>7.1. Wiązanie wodorowe (Najważniejsze na maturze!)</h4>
            <p>Jest to oddziaływanie elektrostatyczne pomiędzy atomem wodoru o silnym ładunku cząstkowym dodatnim (połączonym kowalencyjnie z bardzo elektroujemnym atomem o małym promieniu: <strong>F, O lub N</strong>) a wolną parą elektronową innego bardzo elektroujemnego atomu (<strong>F, O lub N</strong>) pochodzącą z tej samej lub innej cząsteczki.</p>
            <ul class="note-list">
                <li><strong>Siła i zapis:</strong> Jest ok. 10 razy słabsze od typowego wiązania kowalencyjnego, ale <strong>najsilniejsze ze wszystkich oddziaływań międzycząsteczkowych</strong>. We wzorach oznacza się je linią przerywaną (&bull;&bull;&bull;).</li>
                <li><strong>Występowanie maturalne:</strong> H<sub>2</sub>O, HF, NH<sub>3</sub>, alkohole, fenole, kwasy karboksylowe (tworzą dimery!), aminy I- i II-rzędowe (aminy III-rzędowe nie mają wiązań N&mdash;H, więc nie tworzą wiązań wodorowych między sobą, ale mogą tworzyć je z wodą!), struktura drugorzędowa białek (&alpha;-helisa, &beta;-harmonijka) oraz zasady azotowe w DNA.</li>
                <li><strong>Wpływ na właściwości (Asocjacja):</strong> Wiązania wodorowe powodują łączenie się cząsteczek w większe zespoły (<strong>asocjaty</strong>), co drastycznie podwyższa temperaturę topnienia i wrzenia substancji. Dlatego woda H<sub>2</sub>O (<i>M</i> = 18 g/mol) jest cieczą o temp. wrzenia 100&deg;C, podczas gdy znacznie cięższy siarkowodór H<sub>2</sub>S (<i>M</i> = 34 g/mol, brak silnych wiązań wodorowych) jest gazem (temp. wrzenia &minus;60&deg;C).</li>
                <li><strong>Anomalie wody (Pewniak maturalny):</strong>
                    <br>– <em>Maksymalna gęstość w temp. 4&deg;C:</em> Po zamarznięciu woda tworzy ażurową, luźną sieć krystaliczną lodu (utrzymywaną przez wiązania wodorowe), zwiększając swoją objętość – dlatego lód ma mniejszą gęstość od ciekłej wody i pływa po jej powierzchni, chroniąc zbiorniki wodne przed przemarznięciem do dna.
                    <br>– <em>Wysokie napięcie powierzchniowe i wysokie ciepło właściwe.</em>
                </li>
            </ul>

            <h4>7.2. Siły van der Waalsa i oddziaływania dipol–dipol</h4>
            <ul class="note-list">
                <li><strong>Oddziaływania dipol–dipol:</strong> Przyciąganie elektrostatyczne między trwałymi dipolami (cząsteczkami polarnymi), ustawiającymi się naprzemiennie różnoimiennymi biegunami (&delta;<sup>+</sup> do &delta;<sup>&minus;</sup>).</li>
                <li><strong>Siły dyspersyjne Londona (należące do sił van der Waalsa):</strong> Słabe oddziaływania krótkiego zasięgu występujące pomiędzy <strong>wszystkimi cząsteczkami</strong> (również niepolarnymi węglowodorami, gazami szlachetnymi czy cząsteczkami fluorowców). Powstają na skutek chwilowych fluktuacji chmur elektronowych i tworzenia dipoli chwilowych oraz indukowanych. Ich siła rośnie wraz ze <strong>wzrostem masy cząsteczkowej (liczby elektronów i polaryzowalności)</strong> oraz <strong>powierzchni styku cząsteczek</strong> (łańcuchy proste oddziałują silniej i mają wyższe temp. wrzenia niż izomery rozgałęzione!). Tłumaczy to, dlaczego w grupie fluorowców F<sub>2</sub> i Cl<sub>2</sub> to gazy, Br<sub>2</sub> to ciecz, a najcięższy I<sub>2</sub> to ciało stałe.</li>
            </ul>
        </div>

        <!-- SEKCJA 8 -->
        <div class="note-section">
            <h3>8. Wpływ Rodzaju Wiązania na Właściwości Substancji – Typy Sieci Krystalicznych</h3>
            <p>Na podstawie rodzaju wiązań lub oddziaływań między elementami budującymi sieć krystaliczną substancje klasyfikuje się do 4 głównych typów kryształów:</p>

            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Cecha / Właściwość</th>
                            <th>Kryształy jonowe</th>
                            <th>Kryształy kowalencyjne (atomowe)</th>
                            <th>Kryształy cząsteczkowe (molekularne)</th>
                            <th>Kryształy metaliczne</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Elementy w węzłach sieci</strong></td>
                            <td>Kationy i aniony ułożone naprzemiennie.</td>
                            <td>Atomy.</td>
                            <td>Cząsteczki (polarne lub niepolarne) albo atomy gazów szlachetnych.</td>
                            <td>Kationy metali (zręby atomowe) spajane gazem elektronowym.</td>
                        </tr>
                        <tr>
                            <td><strong>Rodzaj wiązania / oddziaływania</strong></td>
                            <td>Wiązania jonowe (przyciąganie elektrostatyczne).</td>
                            <td>Silne wiązania kowalencyjne w całej sieci przestrzennej.</td>
                            <td>Słabe siły van der Waalsa i/lub wiązania wodorowe między cząsteczkami.</td>
                            <td>Wiązania metaliczne (zdelokalizowane elektrony).</td>
                        </tr>
                        <tr>
                            <td><strong>Przykłady substancji</strong></td>
                            <td>NaCl, KNO<sub>3</sub>, MgO, większość soli, wodorotlenki metali (NaOH, KOH).</td>
                            <td>Diament (C), węglik krzemu (SiC – karborund), tlenek krzemu(IV) (SiO<sub>2</sub> – kwarc, krzemionka), bor.</td>
                            <td>Lód (H<sub>2</sub>O), suchy lód (CO<sub>2</sub>), siarka (S<sub>8</sub>), jod (I<sub>2</sub>), biały fosfor (P<sub>4</sub>), naftalen, cukier.</td>
                            <td>Sód (Na), żelazo (Fe), miedź (Cu), złoto (Au), stopy metali (mosiądz, stal).</td>
                        </tr>
                        <tr>
                            <td><strong>Temperatury topnienia i wrzenia</strong></td>
                            <td><strong>Wysokie</strong> (zwykle &gt; 400&deg;C) – zniszczenie sieci wymaga dużej energii.</td>
                            <td><strong>Bardzo wysokie</strong> (nawet &gt; 3000&deg;C) – topnienie wymaga rozerwania wiązań kowalencyjnych.</td>
                            <td><strong>Niskie lub bardzo niskie</strong> (gazy, ciecze, łatwotopliwe ciała stałe, często sublimują, np. I<sub>2</sub>, CO<sub>2</sub>).</td>
                            <td>Zróżnicowane (od ciekłej rtęci Hg i niskotopliwego cezu Cs do wolframu W).</td>
                        </tr>
                        <tr>
                            <td><strong>Właściwości mechaniczne</strong></td>
                            <td><strong>Kruche</strong> (przesunięcie warstw zbliża jony jednoimienne, co powoduje odpychanie i pęknięcie kryształu).</td>
                            <td><strong>Ekstremalnie twarde</strong> (najtwardsze materiały w przyrodzie; wyjątek: warstwowy grafit).</td>
                            <td><strong>Miękkie</strong>, o małej twardości (np. jod, parafina).</td>
                            <td><strong>Kowalne, ciągliwe</strong>, plastyczne (przesunięcie warstw nie niszczy wiązania metalicznego).</td>
                        </tr>
                        <tr>
                            <td><strong>Przewodnictwo prądu elektrycznego</strong></td>
                            <td><strong>W stanie stałym NIE przewodzą</strong> (jony unieruchomione w węzłach). <strong>Przewodzą po stopieniu oraz w roztworach wodnych</strong> (swobodne jony!).</td>
                            <td><strong>Nie przewodzą</strong> (izolatory). <strong>Wyjątek: grafit i grafen</strong> (posiadają zdelokalizowane elektrony &pi;).</td>
                            <td><strong>Nie przewodzą prądu</strong> w stanie stałym ani ciekłym (wyjątek: wodne roztwory elektrolitów, np. HCl<sub>(aq)</sub>).</td>
                            <td><strong>Bardzo dobrze przewodzą prąd i ciepło</strong> w stanie stałym i ciekłym (ruch gazu elektronowego).</td>
                        </tr>
                        <tr>
                            <td><strong>Rozpuszczalność</strong></td>
                            <td>Często dobra w rozpuszczalnikach polarnych (woda) – ulegają dysocjacji jonowej.</td>
                            <td><strong>Nierozpuszczalne</strong> w żadnych zwykłych rozpuszczalnikach (ani polarnych, ani niepolarnych).</td>
                            <td>Zgodnie z regułą „podobne rozpuszcza się w podobnym” (np. I<sub>2</sub> w CCl<sub>4</sub>/benzynie, cukier w H<sub>2</sub>O).</td>
                            <td>Nierozpuszczalne w wodzie (mogą roztwarzać się w wyniku reakcji chemicznej lub tworzyć stopy/amalgamaty).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- SEKCJA 9 -->
        <div class="note-section">
            <h3>9. Alotropia Pierwiastków (na Przykładzie Węgla)</h3>
            <p><strong>Alotropia</strong> to zjawisko występowania tego samego pierwiastka chemicznego w tym samym stanie skupienia w kilku odmianach (odmianach alotropowych), różniących się strukturą krystaliczną lub liczbą atomów w cząsteczce (np. O<sub>2</sub> i O<sub>3</sub>, P<sub>4</sub> biały i P<sub>n</sub> czerwony, S<sub>8</sub> rombowa i jednoskośna), a co za tym idzie – właściwościami fizycznymi i aktywnością chemiczną.</p>

            <h4>Porównanie 4 najważniejszych odmian alotropowych węgla na maturze</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Odmiana alotropowa węgla</th>
                            <th>Hybrydyzacja atomów C</th>
                            <th>Typ kryształu i budowa przestrzenna</th>
                            <th>Kluczowe właściwości fizyczne wynikające z budowy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Diament</strong></td>
                            <td><strong>sp<sup>3</sup></strong></td>
                            <td><strong>Kryształ kowalencyjny (atomowy):</strong> każdy atom C połączony jest 4 wiązaniami &sigma; pod kątem 109,5&deg; w trójwymiarową sieć tetraedryczną.</td>
                            <td>• Brak swobodnych elektronów &rarr; <strong>izolator elektryczny</strong> (dobrze przewodzi ciepło).<br>• Ekstremalnie twardy, przezroczysty, nierozpuszczalny w rozpuszczalnikach.</td>
                        </tr>
                        <tr>
                            <td><strong>Grafit</strong></td>
                            <td><strong>sp<sup>2</sup></strong></td>
                            <td><strong>Kryształ kowalencyjno-warstwowy:</strong> płaskie warstwy sześcioczłonowych pierścieni (wiązania &sigma; pod kątem 120&deg;). Czwarty elektron (z orbitalu 2p<sub>z</sub>) tworzy zdelokalizowaną chmurę &pi;. Między warstwami działają słabe siły van der Waalsa.</td>
                            <td>• Zdelokalizowane elektrony &rarr; <strong>dobrze przewodzi prąd elektryczny</strong> i ciepło.<br>• Słabe siły między warstwami &rarr; <strong>miękki, łupliwy</strong>, zostawia ślad na papierze.<br>• Czarny/szary z metalicznym połyskiem, nietopliwy, odporny termicznie.</td>
                        </tr>
                        <tr>
                            <td><strong>Grafen</strong></td>
                            <td><strong>sp<sup>2</sup></strong></td>
                            <td>Pojedyncza, dwuwymiarowa warstwa atomów węgla o strukturze plastra miodu (grubość 1 atomu).</td>
                            <td>• <strong>Doskonały przewodnik prądu i ciepła</strong>.<br>• Niezwykle wytrzymały mechanicznie, elastyczny i niemal całkowicie przezroczysty.</td>
                        </tr>
                        <tr>
                            <td><strong>Fullereny (np. C<sub>60</sub>)</strong></td>
                            <td><strong>zbliżona do sp<sup>2</sup></strong></td>
                            <td><strong>Kryształ cząsteczkowy (molekularny):</strong> zamknięte, puste w środku bryły (np. C<sub>60</sub> przypominający piłkę futbolową z pięcio- i sześciokątów), między którymi działają siły van der Waalsa.</td>
                            <td>• <strong>Jedyna odmiana węgla rozpuszczalna</strong> w niepolarnych rozpuszczalnikach organicznych (np. w benzenie, toluenie daje barwne roztwory).<br>• Słabo przewodzi prąd (półprzewodnik/izolator).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `,

    notatkiActive: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">🧠 ACTIVE RECALL: WIĄZANIA, GEOMETRIA CZĄSTECZEK I KRYSZTAŁY</h2>
        <p style="text-align: center; color: #94a3b8; font-size: 13px; margin-bottom: 20px;">
            💡 <em>Klikaj na ciemne pola, aby odkryć ukryte pojęcia, wzory i wartości kątów, oraz rozwijaj pytania kontrolne!</em>
        </p>

        <!-- ACTIVE RECALL SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Elektroujemność, Reguła Oktetu i Klasyfikacja Wiązań</h3>
            <p>W układzie okresowym elektroujemność w okresie (w prawo) <span class="recall-blank" onclick="toggleRecall(this)">rośnie</span>, a w grupie (w dół) <span class="recall-blank" onclick="toggleRecall(this)">maleje</span>. Najbardziej elektroujemnym pierwiastkiem jest <span class="recall-blank" onclick="toggleRecall(this)">fluor (E = 4,0)</span>.</p>
            <p>W cząsteczce BeCl<sub>2</sub> wokół atomu berylu znajdują się tylko <span class="recall-blank" onclick="toggleRecall(this)">4 elektrony (2 pary)</span>, a w cząsteczce BF<sub>3</sub> wokół atomu boru znajduje się <span class="recall-blank" onclick="toggleRecall(this)">6 elektronów (3 pary)</span> – są to klasyczne przykłady niepełnego oktetu.</p>
            <p>Choć dla fluorowodoru (HF) różnica elektroujemności wynosi &Delta;<i>E</i> = 1,8 (&ge; 1,7), wiązanie w cząsteczce HF jest wiązaniem <span class="recall-blank" onclick="toggleRecall(this)">kowalencyjnym silnie spolaryzowanym</span>, a nie jonowym.</p>

            <details class="recall-details">
                <summary><span>Jakie rodzaje wiązań chemicznych występują w chlorku amonu (NH<sub>4</sub>Cl)?</span></summary>
                <p>Występują w nim równocześnie wiązania: <strong>jonowe</strong> (pomiędzy kationem NH<sub>4</sub><sup>+</sup> a anionem Cl<sup>&minus;</sup>) oraz <strong>kowalencyjne spolaryzowane, w tym jedno koordynacyjne</strong> (wewnątrz kationu amonu NH<sub>4</sub><sup>+</sup>).</p>
            </details>

            <details class="recall-details">
                <summary><span>Jak zmienia się długość i energia (moc) wiązania wraz ze wzrostem krotności wiązania (C&mdash;C &rarr; C=C &rarr; C&equiv;C) oraz w szeregu fluorowcowodorów (HF &rarr; HCl &rarr; HBr &rarr; HI)?</span></summary>
                <p>• Ze wzrostem krotności (pojedyncze &rarr; podwójne &rarr; potrójne) wiązanie staje się <strong>krótsze i mocniejsze</strong> (rośnie energia wiązania).<br>
                • W szeregu HF &rarr; HCl &rarr; HBr &rarr; HI (ze względu na rosnący promień fluorowca) wiązanie staje się <strong>coraz dłuższe i coraz słabsze</strong> (maleje energia wiązania).</p>
            </details>
        </div>

        <!-- ACTIVE RECALL SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Wiązania Koordynacyjne, Promienie Jonowe oraz Wiązania &sigma; i &pi;</h3>
            <p>W wiązaniu koordynacyjnym atom udostępniający wolną parę elektronową to <span class="recall-blank" onclick="toggleRecall(this)">donor (dawca)</span>, a atom lub jon posiadający pusty orbital (lukę elektronową) to <span class="recall-blank" onclick="toggleRecall(this)">akceptor (biorca)</span>.</p>
            <p>W cząsteczce kwasu siarkowego(VI) (H<sub>2</sub>SO<sub>4</sub>) atom siarki tworzy <span class="recall-blank" onclick="toggleRecall(this)">2</span> wiązania koordynacyjne, a w cząsteczce HNO<sub>3</sub> atom azotu tworzy <span class="recall-blank" onclick="toggleRecall(this)">1</span> wiązanie koordynacyjne.</p>
            <p>Wiązanie potrójne (np. w N<sub>2</sub> lub etynie C<sub>2</sub>H<sub>2</sub>) składa się zawsze z <span class="recall-blank" onclick="toggleRecall(this)">1 wiązania &sigma; i 2 wiązań &pi;</span>.</p>

            <details class="recall-details">
                <summary><span>Uszereguj jony izoelektronowe (10e<sup>&minus;</sup>): Na<sup>+</sup>, Mg<sup>2+</sup>, O<sup>2&minus;</sup>, F<sup>&minus;</sup>, Al<sup>3+</sup> według malejącego promienia jonowego i uzasadnij kolejność.</span></summary>
                <p>Kolejność: <strong><i>r</i><sub>O<sup>2&minus;</sup></sub> &gt; <i>r</i><sub>F<sup>&minus;</sup></sub> &gt; <i>r</i><sub>Na<sup>+</sup></sub> &gt; <i>r</i><sub>Mg<sup>2+</sup></sub> &gt; <i>r</i><sub>Al<sup>3+</sup></sub></strong>.<br>
                Wszystkie te jony mają taką samą liczbę elektronów (10e<sup>&minus;</sup>) i dwie powłoki elektronowe, ale wraz ze wzrostem liczby atomowej <i>Z</i> (ładunku jądra od <i>Z</i>=8 do <i>Z</i>=13) jądro coraz silniej przyciąga chmurę elektronową, co powoduje zmniejszanie się promienia jonu.</p>
            </details>

            <details class="recall-details">
                <summary>Dlaczego wokół wiązania pojedynczego (&sigma;) możliwy jest swobodny obrót, a wokół wiązania podwójnego (&sigma; + &pi;) obrót jest zablokowany?</summary>
                <p>Wiązanie &sigma; powstaje przez czołowe nałożenie orbitali wzdłuż osi wiązania (ma symetrię cylindryczną). Wiązanie &pi; powstaje przez <strong>boczne nałożenie równoległych orbitali p</strong> w dwóch obszarach (nad i pod osią wiązania) – obrót wymagałby zerwania tego bocznego nałożenia.</p>
            </details>
        </div>

        <!-- ACTIVE RECALL SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Hybrydyzacja, Metoda VSEPR i Polarność Cząsteczek</h3>
            <p>W cząsteczce metanu (CH<sub>4</sub>), amoniaku (NH<sub>3</sub>) i wody (H<sub>2</sub>O) atom centralny wykazuje taką samą hybrydyzację: <span class="recall-blank" onclick="toggleRecall(this)">sp<sup>3</sup> (Lp = 4)</span>, ale kąty między wiązaniami wynoszą odpowiednio: dla CH<sub>4</sub> <span class="recall-blank" onclick="toggleRecall(this)">109,5&deg; (tetraedr)</span>, dla NH<sub>3</sub> <span class="recall-blank" onclick="toggleRecall(this)">ok. 107&deg; (piramida trygonalna)</span>, a dla H<sub>2</sub>O <span class="recall-blank" onclick="toggleRecall(this)">104,5&deg; (kształt kątowy)</span>.</p>
            <p>Drobina SO<sub>2</sub> oraz anion NO<sub>2</sub><sup>&minus;</sup> mają liczbę przestrzenną <i>Lp</i> = <span class="recall-blank" onclick="toggleRecall(this)">3 (2&sigma; + 1 Wpe)</span>, hybrydyzację atomu centralnego <span class="recall-blank" onclick="toggleRecall(this)">sp<sup>2</sup></span> oraz kształt <span class="recall-blank" onclick="toggleRecall(this)">kątowy (V-kształtny)</span>.</p>

            <details class="recall-details">
                <summary><span>Dlaczego cząsteczka CO<sub>2</sub> (oraz CCl<sub>4</sub> i BF<sub>3</sub>) jest niepolarna (&mu; = 0), mimo że pojedyncze wiązania w tych cząsteczkach są silnie spolaryzowane?</span></summary>
                <p>Ponieważ cząsteczki te mają <strong>w pełni symetryczną budowę przestrzenną</strong> (brak wolnych par elektronowych na atomie centralnym i identyczne ligandy: liniowa dla CO<sub>2</sub>, trójkąt równoboczny dla BF<sub>3</sub>, tetraedr dla CCl<sub>4</sub>), przez co wektory momentów dipolowych poszczególnych wiązań znoszą się wzajemnie do zera (&mu;<sub>wyp</sub> = 0).</p>
            </details>
        </div>

        <!-- ACTIVE RECALL SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Oddziaływania Międzycząsteczkowe, Sieci Krystaliczne i Alotropia Węgla</h3>
            <p>Wiązania wodorowe tworzą się, gdy atom wodoru jest połączony kowalencyjnie z silnie elektroujemnym atomem o małym promieniu: <span class="recall-blank" onclick="toggleRecall(this)">fluorem (F), tlenem (O) lub azotem (N)</span>.</p>
            <p>Kryształy jonowe (np. NaCl) w stanie stałym <span class="recall-blank" onclick="toggleRecall(this)">nie przewodzą prądu</span>, ale przewodzą go po <span class="recall-blank" onclick="toggleRecall(this)">stopieniu lub rozpuszczeniu w wodzie</span> dzięki uwolnieniu ruchliwych jonów.</p>
            <p>W diamencie atomy węgla mają hybrydyzację <span class="recall-blank" onclick="toggleRecall(this)">sp<sup>3</sup></span> (kryształ kowalencyjny, izolator), w graficie i grafenie hybrydyzację <span class="recall-blank" onclick="toggleRecall(this)">sp<sup>2</sup></span> (przewodzą prąd dzięki zdelokalizowanym elektronom &pi;), a jedyną odmianą alotropową węgla rozpuszczalną w rozpuszczalnikach organicznych są <span class="recall-blank" onclick="toggleRecall(this)">fullereny (np. C<sub>60</sub> – kryształ cząsteczkowy)</span>.</p>

            <details class="recall-details">
                <summary>Wyjaśnij, dlaczego lód ma mniejszą gęstość niż ciekła woda (pływa po jej powierzchni) oraz dlaczego woda ma znacznie wyższą temperaturę wrzenia niż H<sub>2</sub>S.</summary>
                <p>Oba zjawiska wynikają z obecności silnych <strong>wiązań wodorowych</strong> między cząsteczkami H<sub>2</sub>O:<br>
                1. W stanie ciekłym cząsteczki wody ulegają <strong>asocjacji</strong>, więc ich rozdzielenie podczas wrzenia wymaga dostarczenia dużej ilości energii (w H<sub>2</sub>S działają tylko słabe siły van der Waalsa / dipol–dipol).<br>
                2. Podczas krzepnięcia wiązania wodorowe wymuszają utworzenie <strong>ażurowej (luźnej) sieci krystalicznej lodu</strong> z pustymi przestrzeniami, co zwiększa objętość lodu i zmniejsza jego gęstość względem ciekłej wody (maksymalną gęstość woda ma w 4&deg;C).</p>
            </details>
        </div>
    </div>
    `,

    zadania: "<h3>Zadania</h3><br>Miejsce na zadania maturalne z wiązań chemicznych, hybrydyzacji, metody VSEPR i właściwości kryształów...",

    fiszki: [
        {
            front: "Dlaczego atomy łączą się ze sobą, tworząc wiązania chemiczne (sens energetyczny)?",
            back: "Ponieważ dążą do obniżenia swojej energii wewnętrznej i osiągnięcia stanu o maksymalnej trwałości (konfiguracji elektronowej najbliższego gazu szlachetnego – dubletu lub oktetu elektronowego)."
        },
        {
            front: "Na czym polega reguła dubletu i reguła oktetu elektronowego?",
            back: "Reguła dubletu to dążenie najmniejszych atomów (np. H, Li, Be) do uzyskania 2 elektronów walencyjnych (konfiguracji helu 1s<sup>2</sup>), a reguła oktetu to dążenie pozostałych pierwiastków grup głównych do uzyskania 8 elektronów walencyjnych (ns<sup>2</sup>np<sup>6</sup>)."
        },
        {
            front: "Podaj klasyczne maturalne przykłady cząsteczek z niepełnym oktetem elektronowym (deficytem elektronowym) wokół atomu centralnego.",
            back: "• BeCl<sub>2</sub>, BeH<sub>2</sub> (tylko 4 elektrony walencyjne wokół atomu Be)<br>• BF<sub>3</sub>, BH<sub>3</sub>, BCl<sub>3</sub>, AlCl<sub>3</sub> (tylko 6 elektronów walencyjnych wokół atomu B lub Al)."
        },
        {
            front: "Podaj przykłady cząsteczek z rozszerzonym (przekroczonym) oktetem elektronowym i wyjaśnij, które pierwiastki mogą go tworzyć.",
            back: "Przykłady: PCl<sub>5</sub> (10e<sup>&minus;</sup> wokół P), SF<sub>6</sub> (12e<sup>&minus;</sup> wokół S), IF<sub>7</sub> (14e<sup>&minus;</sup> wokół I). Mogą go tworzyć niemetale od 3. okresu wzwyż, ponieważ posiadają puste orbitale podpowłoki d (np. 3d)."
        },
        {
            front: "Co to jest elektroujemność (wg skali Paulinga) i jak zmienia się w układzie okresowym?",
            back: "To miara zdolności atomu do przyciągania elektronów tworzących wiązanie chemiczne. W okresie (od lewej do prawej) ROŚNIE, a w grupie głównej (z góry na dół) MALEJE. Najwyższą elektroujemność ma fluor (4,0), a najniższą cez i frans (0,7)."
        },
        {
            front: "Jakie przedziały różnicy elektroujemności (&Delta;E) w skali Paulinga odpowiadają poszczególnym typom wiązań?",
            back: "• &Delta;E = 0: kowalencyjne niespolaryzowane<br>• 0 &lt; &Delta;E &lt; 0,4: kowalencyjne praktycznie niespolaryzowane (słabo spolaryzowane)<br>• 0,4 &le; &Delta;E &lt; 1,7: kowalencyjne spolaryzowane<br>• &Delta;E &ge; 1,7: wiązanie jonowe."
        },
        {
            front: "PUŁAPKA MATURALNA: Jaki rodzaj wiązania występuje w cząsteczce fluorowodoru (HF), mimo że &Delta;E = 4,0 &minus; 2,2 = 1,8 (&ge; 1,7)?",
            back: "Wiązanie kowalencyjne silnie spolaryzowane (a nie jonowe!). Pozbawiony elektronu atom wodoru to sam proton H<sup>+</sup> o ogromnej gęstości ładunku, który nie pozwala na całkowite oderwanie elektronu w fazie gazowej."
        },
        {
            front: "PUŁAPKA MATURALNA: Jaki rodzaj wiązania występuje w cząsteczce fosforowodoru (PH<sub>3</sub>) oraz disiarczku węgla (CS<sub>2</sub>)?",
            back: "Wiązanie kowalencyjne niespolaryzowane! Zarówno dla PH<sub>3</sub> (E<sub>P</sub> = 2,1; E<sub>H</sub> = 2,1), jak i dla CS<sub>2</sub> (E<sub>C</sub> = 2,5; E<sub>S</sub> = 2,5) różnica elektroujemności wynosi &Delta;E = 0,0."
        },
        {
            front: "Czy w każdym związku metalu z niemetalem występuje wiązanie jonowe? Podaj kontrprzykłady.",
            back: "Nie! W chlorku glinu AlCl<sub>3</sub> (&Delta;E = 1,6) oraz w tlenkach i chlorkach metali na wysokich stopniach utlenienia (np. Mn<sub>2</sub>O<sub>7</sub>, CrO<sub>3</sub>, TiCl<sub>4</sub>) występują wiązania kowalencyjne spolaryzowane."
        },
        {
            front: "Jakie rodzaje wiązań chemicznych występują w chlorku amonu (NH<sub>4</sub>Cl) oraz azotanie(V) amonu (NH<sub>4</sub>NO<sub>3</sub>)?",
            back: "Występują wiązania jonowe (pomiędzy kationem NH<sub>4</sub><sup>+</sup> a anionem Cl<sup>&minus;</sup> lub NO<sub>3</sub><sup>&minus;</sup>) oraz wiązania kowalencyjne spolaryzowane, w tym koordynacyjne (wewnątrz jonów NH<sub>4</sub><sup>+</sup> i NO<sub>3</sub><sup>&minus;</sup>)."
        },
        {
            front: "W którą stronę przesunięta jest wspólna para elektronowa w wiązaniu kowalencyjnym spolaryzowanym i jakie ładunki cząstkowe powstają?",
            back: "Wspólna para elektronowa jest przesunięta w stronę atomu o większej elektroujemności, na którym powstaje cząstkowy ładunek ujemny (&delta;<sup>&minus;</sup>), natomiast na atomie mniej elektroujemnym powstaje cząstkowy ładunek dodatni (&delta;<sup>+</sup>)."
        },
        {
            front: "Ile wiązań kowalencyjnych i ile wolnych par elektronowych posiada każdy atom azotu w cząsteczce N<sub>2</sub>?",
            back: "Cząsteczka N<sub>2</sub> zawiera jedno wiązanie potrójne (3 wspólne pary elektronowe: 1&sigma; i 2&pi;), a na każdym atomie azotu znajduje się po 1 wolnej parze elektronowej (|N&equiv;N|)."
        },
        {
            front: "Jak zmienia się długość oraz energia (moc) wiązania w szeregu: C&mdash;C, C=C, C&equiv;C?",
            back: "Wraz ze wzrostem krotności wiązania maleje długość wiązania (C&mdash;C &gt; C=C &gt; C&equiv;C), a rośnie jego energia i moc (wiązanie potrójne jest najkrótsze i najmocniejsze)."
        },
        {
            front: "Jak zmienia się długość i energia wiązania w szeregu fluorowcowodorów: HF, HCl, HBr, HI?",
            back: "Wraz ze wzrostem promienia atomowego fluorowca (od F do I) rośnie długość wiązania (HF &lt; HCl &lt; HBr &lt; HI), a maleje energia wiązania (wiązanie w HI jest najdłuższe i najsłabsze, dlatego HI najłatwiej dysocjuje i jest najmocniejszym kwasem w tym szeregu)."
        },
        {
            front: "Na czym polega wiązanie koordynacyjne (donorowo-akceptorowe) i jak oznacza się je we wzorach kreskowych?",
            back: "To odmiana wiązania kowalencyjnego, w której wspólna para elektronowa pochodzi w całości tylko od jednego atomu – donora (dawcy), a drugi atom/jon posiadający pusty orbital jest akceptorem (biorcą). Oznacza się je strzałką (&rarr;) od donora do akceptora."
        },
        {
            front: "Czy po utworzeniu kationu amonu (NH<sub>4</sub><sup>+</sup>) wiązanie koordynacyjne różni się od pozostałych trzech wiązań N&mdash;H?",
            back: "Nie! Po utworzeniu wiązanie koordynacyjne jest fizycznie nieodróżnialne od zwykłego wiązania kowalencyjnego &sigma; – wszystkie cztery wiązania N&mdash;H w NH<sub>4</sub><sup>+</sup> są równocenne (mają identyczną długość i energię)."
        },
        {
            front: "Kto jest donorem, a kto akceptorem pary elektronowej podczas powstawania kationu amonu (NH<sub>4</sub><sup>+</sup>) i kationu oksoniowego (H<sub>3</sub>O<sup>+</sup>)?",
            back: "W NH<sub>4</sub><sup>+</sup> donorem jest atom azotu w cząsteczce NH<sub>3</sub>, a akceptorem kation H<sup>+</sup>. W H<sub>3</sub>O<sup>+</sup> donorem jest atom tlenu w cząsteczce H<sub>2</sub>O, a akceptorem kation H<sup>+</sup>."
        },
        {
            front: "Opisz budowę elektronową (wiązania i wolne pary na atomie siarki) cząsteczek SO<sub>2</sub> oraz SO<sub>3</sub>.",
            back: "• SO<sub>2</sub>: 1 wiązanie podwójne (S=O), 1 wiązanie koordynacyjne (S&rarr;O) oraz 1 wolna para elektronowa na atomie siarki.<br>• SO<sub>3</sub>: 1 wiązanie podwójne (S=O), 2 wiązania koordynacyjne (S&rarr;O) oraz 0 wolnych par na atomie siarki."
        },
        {
            front: "Ile wiązań &sigma;, &pi; oraz koordynacyjnych znajduje się w cząsteczce kwasu azotowego(V) (HNO<sub>3</sub>)?",
            back: "W cząsteczce HNO<sub>3</sub> znajdują się łącznie 4 wiązania &sigma; i 1 wiązanie &pi;. Wśród nich jest 1 wiązanie koordynacyjne (N&rarr;O), w którym atom azotu jest donorem, a atom tlenu akceptorem."
        },
        {
            front: "Opisz rodzaje wiązań w cząsteczce tlenku węgla(II) (CO). Kto jest w niej donorem, a kto akceptorem?",
            back: "W cząsteczce CO występuje wiązanie potrójne (1&sigma; i 2&pi;) złożone z 2 zwykłych wiązań kowalencyjnych spolaryzowanych oraz 1 wiązania koordynacyjnego, w którym donorem jest atom tlenu, a akceptorem atom węgla (|C&#8666;O|). Oba atomy mają po 1 wolnej parze elektronowej."
        },
        {
            front: "Ile wiązań koordynacyjnych znajduje się w cząsteczce kwasu siarkowego(VI) (H<sub>2</sub>SO<sub>4</sub>), a ile w kwasie chlorowym(VII) (HClO<sub>4</sub>)?",
            back: "• W H<sub>2</sub>SO<sub>4</sub>: 2 wiązania koordynacyjne (S&rarr;O).<br>• W HClO<sub>4</sub>: 3 wiązania koordynacyjne (Cl&rarr;O)."
        },
        {
            front: "Na czym polega mechanizm tworzenia wiązania jonowego?",
            back: "Atom metalu (o niskiej energii jonizacji) oddaje elektrony walencyjne, stając się dodatnim kationem, a atom niemetalu (o dużym powinowactwie elektronowym) przyjmuje je, stając się ujemnym anionem. Powstałe jony przyciągają się elektrostatycznie."
        },
        {
            front: "Dlaczego promień kationu jest ZAWSZE mniejszy niż promień macierzystego atomu (np. r<sub>Na<sup>+</sup></sub> &lt; r<sub>Na</sub>)?",
            back: "Ponieważ atom metalu oddaje elektrony walencyjne i traci całą zewnętrzną powłokę elektronową, a ponadto ten sam dodatni ładunek jądra przyciąga mniejszą liczbę pozostałych elektronów znacznie silniej."
        },
        {
            front: "Dlaczego promień anionu jest ZAWSZE większy niż promień macierzystego atomu (np. r<sub>Cl<sup>&minus;</sup></sub> &gt; r<sub>Cl</sub>)?",
            back: "Ponieważ przy niezmienionej liczbie protonów w jądrze zwiększa się liczba elektronów na powłoce walencyjnej, co wzmaga ich wzajemne odpychanie elektrostatyczne i powoduje rozszerzenie chmury elektronowej."
        },
        {
            front: "Uszereguj drobiny izoelektronowe (10e<sup>&minus;</sup>): O<sup>2&minus;</sup>, F<sup>&minus;</sup>, Na<sup>+</sup>, Mg<sup>2+</sup>, Al<sup>3+</sup> według malejącego promienia.",
            back: "r<sub>O<sup>2&minus;</sup></sub> (Z=8) &gt; r<sub>F<sup>&minus;</sup></sub> (Z=9) &gt; r<sub>Na<sup>+</sup></sub> (Z=11) &gt; r<sub>Mg<sup>2+</sup></sub> (Z=12) &gt; r<sub>Al<sup>3+</sup></sub> (Z=13). Im większy ładunek jądra (Z) przy tej samej liczbie elektronów, tym silniejsze przyciąganie i mniejszy promień."
        },
        {
            front: "Czy związki jonowe (np. NaCl, CaF<sub>2</sub>) tworzą cząsteczki?",
            back: "Nie! Związki jonowe tworzą gigantyczne sieci krystaliczne złożone z kationów i anionów, a zapis NaCl czy CaF<sub>2</sub> to jedynie wzór empiryczny (elementarny) określający najprostszy stosunek liczby jonów w krysztale."
        },
        {
            front: "Na czym polega wiązanie metaliczne?",
            back: "Na przyciąganiu elektrostatycznym pomiędzy dodatnio naładowanymi zrębami (rdzeniami) atomowymi metalu, umieszczonymi w węzłach sieci krystalicznej, a swobodnie poruszającą się chmurą zdelokalizowanych elektronów walencyjnych (tzw. gazem elektronowym)."
        },
        {
            front: "Czym różni się orbital molekularny wiążący od antywiążącego?",
            back: "Orbital molekularny wiążący ma niższą energię niż wyjściowe orbitale atomowe, a gęstość elektronowa skupia się między jądrami (stabilizuje cząsteczkę). Orbital antywiążący ma wyższą energię i osłabia wiązanie."
        },
        {
            front: "Czym różni się sposób powstawania wiązania &sigma; (sigma) od wiązania &pi; (pi)?",
            back: "Wiązanie &sigma; powstaje przez CZOŁOWE (osiowe) nałożenie orbitali wzdłuż osi łączącej jądra atomów. Wiązanie &pi; powstaje przez BOCZNE nałożenie dwóch równoległych, niezhybrydyzowanych orbitali (np. p) nad i pod osią wiązania."
        },
        {
            front: "Jakie orbitale mogą tworzyć wiązanie &sigma;, a jakie wiązanie &pi;?",
            back: "• Wiązanie &sigma;: orbitale s+s, s+p, p+p (czołowo) oraz wszystkie orbitale zhybrydyzowane (sp, sp<sup>2</sup>, sp<sup>3</sup>).<br>• Wiązanie &pi;: wyłącznie orbitale NIEZHYBRYDYZOWANE (dwa równoległe orbitale p lub d). Orbitale s oraz zhybrydyzowane nigdy nie tworzą wiązań &pi;!"
        },
        {
            front: "Które wiązanie jest silniejsze (trwalsze): &sigma; czy &pi;, i które z nich umożliwia swobodny obrót wokół osi wiązania?",
            back: "Wiązanie &sigma; jest silniejsze (większe przenikanie orbitali przy nałożeniu czołowym) i umożliwia swobodną rotację atomów. Wiązanie &pi; jest słabsze (łatwiej pęka w reakcjach addycji) i blokuje swobodny obrót."
        },
        {
            front: "Z ilu wiązań &sigma; i &pi; składa się wiązanie pojedyncze, podwójne i potrójne?",
            back: "• Pojedyncze: 1&sigma; (0&pi;)<br>• Podwójne: 1&sigma; + 1&pi;<br>• Potrójne: 1&sigma; + 2&pi;."
        },
        {
            front: "ZADANIE: Oblicz liczbę wiązań &sigma; oraz &pi; w cząsteczce etenu (C<sub>2</sub>H<sub>4</sub>) i etynu (C<sub>2</sub>H<sub>2</sub>).",
            back: "• Eten (H<sub>2</sub>C=CH<sub>2</sub>, 6 atomów): 5 wiązań &sigma; i 1 wiązanie &pi;.<br>• Etyn (H&mdash;C&equiv;C&mdash;H, 4 atomy): 3 wiązania &sigma; i 2 wiązania &pi;."
        },
        {
            front: "Co to jest hybrydyzacja orbitali atomowych?",
            back: "To matematyczne ujednolicenie („wymieszanie”) różnych orbitali atomowych tej samej powłoki walencyjnej (o zbliżonej energii, np. s i p), prowadzące do powstania takiej samej liczby nowych orbitali zhybrydyzowanych o identycznej energii i kształcie."
        },
        {
            front: "Jak powstaje hybrydyzacja sp<sup>3</sup>, ile orbitali zhybrydyzowanych tworzy i jak są one skierowane w przestrzeni?",
            back: "Powstaje przez wymieszanie 1 orbitalu s i 3 orbitali p. Tworzą się 4 równocenne orbitale sp<sup>3</sup> skierowane do naroży czworościanu foremnego (tetraedru) pod kątem 109&deg;28' (ok. 109,5&deg;)."
        },
        {
            front: "Jak powstaje hybrydyzacja sp<sup>2</sup>, ile orbitali zhybrydyzowanych tworzy i jak są one skierowane w przestrzeni?",
            back: "Powstaje przez wymieszanie 1 orbitalu s i 2 orbitali p (trzeci orbital p pozostaje niezhybrydyzowany, prostopadły do płaszczyzny). Tworzą się 3 orbitale sp<sup>2</sup> skierowane do naroży trójkąta równobocznego (płasko) pod kątem 120&deg;."
        },
        {
            front: "Jak powstaje hybrydyzacja sp, ile orbitali zhybrydyzowanych tworzy i jak są one skierowane w przestrzeni?",
            back: "Powstaje przez wymieszanie 1 orbitalu s i 1 orbitalu p (dwa orbitale p pozostają niezhybrydyzowane). Tworzą się 2 orbitale sp ułożone liniowo pod kątem 180&deg;."
        },
        {
            front: "Jak wyznaczyć hybrydyzację atomu węgla w związkach organicznych na podstawie krotności jego wiązań?",
            back: "• Wszystkie 4 wiązania pojedyncze (4&sigma;, 0&pi;) &rarr; sp<sup>3</sup><br>• Jedno wiązanie podwójne (3&sigma;, 1&pi;) &rarr; sp<sup>2</sup><br>• Jedno wiązanie potrójne lub dwa podwójne (2&sigma;, 2&pi;) &rarr; sp."
        },
        {
            front: "Na czym polega metoda VSEPR i jak definiuje się w niej Liczbę Przestrzenną (Lp)?",
            back: "Metoda VSEPR zakłada, że pary elektronowe powłoki walencyjnej atomu centralnego (wiązania &sigma; i wolne pary Wpe) odpychają się, dążąc do maksymalnego oddalenia w przestrzeni. Liczba przestrzenna: Lp = liczba wiązań &sigma; + liczba wolnych par (Wpe) atomu centralnego."
        },
        {
            front: "Podaj wzór matematyczny na Liczbę Przestrzenną (Lp) dla cząsteczki obojętnej, anionu i kationu.",
            back: "• Cząsteczka: Lp = &sigma; + &frac12;(n &minus; m)<br>• Anion: Lp = &sigma; + &frac12;(n &minus; m + a)<br>• Kation: Lp = &sigma; + &frac12;(n &minus; m &minus; a)<br>(gdzie &sigma; – liczba ligandów, n – e<sup>&minus;</sup> walencyjne atomu centralnego, m – e<sup>&minus;</sup> potrzebne ligandom, a – ładunek jonu)."
        },
        {
            front: "Jaka jest zależność między Liczbą Przestrzenną (Lp) a typem hybrydyzacji atomu centralnego?",
            back: "• Lp = 2 &rArr; hybrydyzacja sp<br>• Lp = 3 &rArr; hybrydyzacja sp<sup>2</sup><br>• Lp = 4 &rArr; hybrydyzacja sp<sup>3</sup>."
        },
        {
            front: "Uszereguj pary elektronowe wokół atomu centralnego według malejącej siły wzajemnego odpychania.",
            back: "Wolna para–Wolna para (Wpe–Wpe) &gt; Wolna para–Para wiążąca (Wpe–&sigma;) &gt; Para wiążąca–Para wiążąca (&sigma;–&sigma;)."
        },
        {
            front: "Wyjaśnij, dlaczego w CH<sub>4</sub>, NH<sub>3</sub> i H<sub>2</sub>O atom centralny ma tę samą hybrydyzację sp<sup>3</sup>, a kąty między wiązaniami maleją (109,5&deg; &rarr; 107&deg; &rarr; 104,5&deg;).",
            back: "Ponieważ rośnie liczba wolnych par elektronowych na atomie centralnym (CH<sub>4</sub>: 0, NH<sub>3</sub>: 1, H<sub>2</sub>O: 2). Wolne pary elektronowe zajmują więcej przestrzeni niż pary wiążące i silniej odpychają wiązania &sigma;, zmniejszając kąt między nimi."
        },
        {
            front: "Podaj hybrydyzację atomu centralnego, kształt i kąt między wiązaniami dla: CO<sub>2</sub>, BeCl<sub>2</sub> oraz HCN.",
            back: "Wszystkie mają Lp = 2 (2&sigma; + 0 Wpe) &rArr; hybrydyzacja sp, kształt liniowy, kąt 180&deg;."
        },
        {
            front: "Podaj hybrydyzację atomu centralnego, kształt i kąt między wiązaniami dla: BF<sub>3</sub>, SO<sub>3</sub>, CO<sub>3</sub><sup>2&minus;</sup> oraz NO<sub>3</sub><sup>&minus;</sup>.",
            back: "Wszystkie mają Lp = 3 (3&sigma; + 0 Wpe) &rArr; hybrydyzacja sp<sup>2</sup>, kształt trójkąta równobocznego (płaski), kąt 120&deg;."
        },
        {
            front: "Podaj hybrydyzację atomu centralnego oraz kształt dla: SO<sub>2</sub>, O<sub>3</sub> oraz NO<sub>2</sub><sup>&minus;</sup>.",
            back: "Wszystkie mają Lp = 3 (2&sigma; + 1 Wpe, typ AB<sub>2</sub>E<sub>1</sub>) &rArr; hybrydyzacja sp<sup>2</sup>, kształt kątowy (V-kształtny), kąt &lt; 120&deg; (ok. 119&deg;)."
        },
        {
            front: "Podaj hybrydyzację atomu centralnego, kształt i kąt między wiązaniami dla: CH<sub>4</sub>, NH<sub>4</sub><sup>+</sup>, SO<sub>4</sub><sup>2&minus;</sup>, PO<sub>4</sub><sup>3&minus;</sup> oraz ClO<sub>4</sub><sup>&minus;</sup>.",
            back: "Wszystkie mają Lp = 4 (4&sigma; + 0 Wpe, typ AB<sub>4</sub>E<sub>0</sub>) &rArr; hybrydyzacja sp<sup>3</sup>, kształt tetraedru (czworościanu foremnego), kąt 109,5&deg;."
        },
        {
            front: "Podaj hybrydyzację atomu centralnego oraz kształt dla: NH<sub>3</sub>, PH<sub>3</sub>, PCl<sub>3</sub>, H<sub>3</sub>O<sup>+</sup> oraz SO<sub>3</sub><sup>2&minus;</sup>.",
            back: "Wszystkie mają Lp = 4 (3&sigma; + 1 Wpe, typ AB<sub>3</sub>E<sub>1</sub>) &rArr; hybrydyzacja sp<sup>3</sup>, kształt piramidy trygonalnej, kąt ok. 107&deg;."
        },
        {
            front: "Podaj hybrydyzację atomu centralnego oraz kształt dla: H<sub>2</sub>O, H<sub>2</sub>S, OF<sub>2</sub> oraz ClO<sub>2</sub><sup>&minus;</sup>.",
            back: "Wszystkie mają Lp = 4 (2&sigma; + 2 Wpe, typ AB<sub>2</sub>E<sub>2</sub>) &rArr; hybrydyzacja sp<sup>3</sup>, kształt kątowy (V-kształtny), kąt ok. 104,5&deg;."
        },
        {
            front: "Co to jest moment dipolowy (&mu;) i jaki warunek musi spełniać cząsteczka ze spolaryzowanymi wiązaniami, aby była niepolarna (&mu; = 0)?",
            back: "Moment dipolowy (&mu; = &delta; &middot; l) to wektorowa miara polarności cząsteczki. Cząsteczka ze spolaryzowanymi wiązaniami jest niepolarna (&mu;<sub>wyp</sub> = 0), gdy ma w pełni symetryczną budowę (identyczne ligandy i brak wolnych par na atomie centralnym), przez co wektory wiązań znoszą się wzajemnie."
        },
        {
            front: "Określ, które z cząsteczek są polarne (&mu; &gt; 0), a które niepolarne (&mu; = 0): CO<sub>2</sub>, SO<sub>2</sub>, BF<sub>3</sub>, NH<sub>3</sub>, CH<sub>4</sub>, CHCl<sub>3</sub>, CCl<sub>4</sub>, H<sub>2</sub>O.",
            back: "• Niepolarne (&mu; = 0, symetryczne): CO<sub>2</sub>, BF<sub>3</sub>, CH<sub>4</sub>, CCl<sub>4</sub>.<br>• Polarne (&mu; &gt; 0, dipole): SO<sub>2</sub>, NH<sub>3</sub>, CHCl<sub>3</sub>, H<sub>2</sub>O."
        },
        {
            front: "Co to jest wiązanie wodorowe i między jakimi atomami się tworzy?",
            back: "To silne oddziaływanie elektrostatyczne między atomem wodoru o ładunku &delta;<sup>+</sup> (związanym kowalencyjnie z silnie elektroujemnym atomem o małym promieniu: F, O lub N) a wolną parą elektronową innego atomu F, O lub N."
        },
        {
            front: "Co to jest asocjacja cząsteczek i jak wpływa na temperatury wrzenia oraz topnienia substancji?",
            back: "Asocjacja to łączenie się cząsteczek w większe zespoły (asocjaty, np. dimery kwasów karboksylowych) za pomocą wiązań wodorowych. Powoduje znaczne podwyższenie temperatury wrzenia i topnienia substancji."
        },
        {
            front: "Dlaczego woda (M = 18 g/mol) wrze w 100&deg;C, podczas gdy siarkowodór H<sub>2</sub>S (M = 34 g/mol) jest gazem wrzącym w &minus;60&deg;C?",
            back: "Ponieważ cząsteczki H<sub>2</sub>O tworzą między sobą silne wiązania wodorowe (ulegają asocjacji), których zerwanie wymaga dużej energii. Między cząsteczkami H<sub>2</sub>S działają jedynie znacznie słabsze siły van der Waalsa."
        },
        {
            front: "Wyjaśnij, dlaczego lód ma mniejszą gęstość od ciekłej wody i pływa po jej powierzchni.",
            back: "Podczas zamarzania wiązania wodorowe między cząsteczkami H<sub>2</sub>O wymuszają utworzenie sztywnej, ażurowej sieci krystalicznej lodu z dużymi pustymi przestrzeniami, co powoduje wzrost objętości i spadek gęstości (maksymalną gęstość woda ma w 4&deg;C)."
        },
        {
            front: "Czym są siły dyspersyjne Londona (siły van der Waalsa) i od czego zależy ich moc?",
            back: "To słabe oddziaływania przyciągające między chwilowymi i indukowanymi dipolami, występujące między wszystkimi cząsteczkami (także niepolarnymi). Ich siła rośnie wraz ze wzrostem masy molowej (liczby elektronów) oraz powierzchni styku cząsteczek."
        },
        {
            front: "Dlaczego w grupie 17 układu okresowego F<sub>2</sub> i Cl<sub>2</sub> są gazami, Br<sub>2</sub> cieczą, a I<sub>2</sub> ciałem stałym?",
            back: "Ponieważ wraz ze wzrostem liczby atomowej (i masy cząsteczkowej) od F<sub>2</sub> do I<sub>2</sub> rośnie liczba elektronów i polaryzowalność chmury elektronowej, co wzmacnia siły dyspersyjne (van der Waalsa) między cząsteczkami."
        },
        {
            front: "Wymień 4 główne typy sieci krystalicznych i podaj, co znajduje się w ich węzłach.",
            back: "1. Kryształy jonowe: kationy i aniony.<br>2. Kryształy kowalencyjne (atomowe): atomy połączone wiązaniami kowalencyjnymi.<br>3. Kryształy cząsteczkowe (molekularne): cząsteczki (lub atomy helowców).<br>4. Kryształy metaliczne: dodatnie zręby atomowe (kationy metali) otoczone gazem elektronowym."
        },
        {
            front: "Podaj główne właściwości fizyczne kryształów jonowych (np. NaCl, MgO, KNO<sub>3</sub>).",
            back: "Wysokie temperatury topnienia, są twarde, ale KRUCHE; w stanie stałym NIE przewodzą prądu (jony są unieruchomione), natomiast przewodzą prąd po stopieniu oraz w roztworach wodnych."
        },
        {
            front: "Podaj przykłady oraz właściwości fizyczne kryształów kowalencyjnych (atomowych).",
            back: "Przykłady: diament (C), kwarc/krzemionka (SiO<sub>2</sub>), karborund (SiC). Właściwości: ekstremalnie wysokie temperatury topnienia, ogromna twardość, brak przewodnictwa prądu (wyjątek: warstwowy grafit) i całkowita nierozpuszczalność w rozpuszczalnikach."
        },
        {
            front: "Podaj przykłady oraz właściwości fizyczne kryształów cząsteczkowych (molekularnych).",
            back: "Przykłady: lód (H<sub>2</sub>O), suchy lód (CO<sub>2</sub>), jod (I<sub>2</sub>), siarka (S<sub>8</sub>), fosfor biały (P<sub>4</sub>), naftalen. Właściwości: niskie temperatury topnienia i wrzenia, mała twardość, częsta zdolność do sublimacji, nie przewodzą prądu."
        },
        {
            front: "Dlaczego metale są kowalne i ciągliwe, a kryształy jonowe są kruche?",
            back: "W metalach przesunięcie warstw kationów względem siebie nie niszczy wiązania metalicznego, bo ruchliwy gaz elektronowy nadal spaja jony. W krysztale jonowym przesunięcie warstw zbliża do siebie jony jednoimienne (+ do +, &minus; do &minus;), co powoduje gwałtowne odpychanie elektrostatyczne i pęknięcie kryształu."
        },
        {
            front: "Co to jest alotropia? Podaj przykłady pierwiastków tworzących odmiany alotropowe.",
            back: "To zjawisko występowania tego samego pierwiastka w tym samym stanie skupienia w kilku odmianach różniących się strukturą krystaliczną lub liczbą atomów w cząsteczce. Przykłady: węgiel (diament, grafit, grafen, fullereny), tlen (O<sub>2</sub>, O<sub>3</sub>), fosfor (biały P<sub>4</sub>, czerwony P<sub>n</sub>), siarka (rombowa, jednoskośna)."
        },
        {
            front: "Porównaj hybrydyzację, budowę i przewodnictwo prądu elektrycznego diamentu oraz grafitu.",
            back: "• Diament: hybrydyzacja sp<sup>3</sup>, trójwymiarowa sieć wiązań &sigma;, brak wolnych elektronów &rarr; nie przewodzi prądu (izolator), bardzo twardy.<br>• Grafit: hybrydyzacja sp<sup>2</sup>, budowa warstwowa (słabe siły van der Waalsa między warstwami &rarr; miękki i łupliwy), czwarty elektron każdego węgla tworzy zdelokalizowaną chmurę &pi; &rarr; dobrze przewodzi prąd."
        },
        {
            front: "Czym wyróżniają się fullereny (np. C<sub>60</sub>) na tle pozostałych odmian alotropowych węgla?",
            back: "Tworzą kryształy cząsteczkowe (molekularne) złożone z zamkniętych cząsteczek (np. C<sub>60</sub> o kształcie piłki futbolowej, hybrydyzacja zbliżona do sp<sup>2</sup>) i jako jedyna odmiana alotropowa węgla rozpuszczają się w niepolarnych rozpuszczalnikach organicznych (np. w benzenie lub toluenie)."
        }
    ]
};