// Dział VI. Reakcje w roztworach wodnych (Indeks 5 na liście)
appData[5] = {
    notatki: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">📚 KOMPENDIUM MATURALNE: REAKCJE W ROZTWORACH WODNYCH (DYSOCJACJA, pH, HYDROLIZA, BUFORY I OSADY)</h2>

        <!-- SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Dysocjacja Elektrolityczna, Moc Elektrolitów i Teorie Kwasów oraz Zasad</h3>
            <p><strong>Definicja i istota dysocjacji elektrolitycznej:</strong> Dysocjacja elektrolityczna (jonowa) to proces rozpadu cząsteczek lub kryształów jonowych elektrolitów na swobodnie poruszające się jony dodatnie (kationy) i ujemne (aniony) pod wpływem polarnych cząsteczek rozpuszczalnika (najczęściej wody). W roztworach wodnych kationy wodoru H<sup>+</sup> w rzeczywistości nie istnieją samodzielnie, ponieważ natychmiast ulegają solwatacji (hydratacji), tworząc <strong>kationy oksoniowe (hydroniowe) H<sub>3</sub>O<sup>+</sup></strong> zgodnie z równaniem: H<sup>+</sup> + H<sub>2</sub>O &rarr; H<sub>3</sub>O<sup>+</sup>. Na maturze dopuszczalny jest zarówno zapis pełny z udziałem wody (tworzenie H<sub>3</sub>O<sup>+</sup>), jak i zapis uproszczony (z umownym kationem H<sup>+</sup>, gdzie H<sub>2</sub>O zapisuje się nad strzałką) – chyba że treść zadania narzuca konkretną formę (np. w oparciu o teorię Br&oslash;nsteda-Lowry'ego).</p>

            <h4>Podział substancji ze względu na przewodnictwo elektryczne i stopień dysocjacji</h4>
            <ul class="note-list">
                <li><strong>Elektrolity mocne:</strong> Substancje, które w roztworach wodnych są zdysocjowane całkowicie lub niemal całkowicie (&alpha; &approx; 100%, zapis ze strzałką jednokierunkową &rarr;). W roztworze znajdują się niemal wyłącznie jony, a brak jest cząsteczek niezdysocjowanych, dzięki czemu roztwór doskonale przewodzi prąd elektryczny.</li>
                <li><strong>Elektrolity słabe:</strong> Substancje dysocjujące w niewielkim stopniu (&alpha; &ll; 100%), w których proces dysocjacji jest odwracalny i prowadzi do ustalenia stanu równowagi dynamicznej między cząsteczkami niezdysocjowanymi a jonami (zapis ze strzałkami odwracalnymi &rlhar;). W roztworze przeważają obojętne cząsteczki, dlatego słabo przewodzi on prąd elektryczny.</li>
                <li><strong>Nieelektrolity:</strong> Związki chemiczne (np. glukoza C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, sacharoza, etanol C<sub>2</sub>H<sub>5</sub>OH, mocznik), które mimo dobrej rozpuszczalności w wodzie nie ulegają dysocjacji na jony (&alpha; = 0%) i ich roztwory w ogóle nie przewodzą prądu elektrycznego.</li>
            </ul>

            <h4>Zestawienie najważniejszych mocnych i słabych elektrolitów na maturze</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Grupa związków</th>
                            <th>Elektrolity mocne (dysocjacja całkowita &rarr;)</th>
                            <th>Elektrolity słabe (dysocjacja odwracalna &rlhar;)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Kwasy</strong></td>
                            <td>• <strong>Beztlenowe:</strong> HCl, HBr, HI<br>• <strong>Tlenowe:</strong> HNO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub>, HClO<sub>4</sub>, HClO<sub>3</sub>, HMnO<sub>4</sub>, H<sub>2</sub>CrO<sub>4</sub></td>
                            <td>• <strong>Beztlenowe:</strong> HF, H<sub>2</sub>S, HCN<br>• <strong>Tlenowe nieorganiczne:</strong> H<sub>2</sub>SO<sub>3</sub>, HNO<sub>2</sub>, H<sub>3</sub>PO<sub>4</sub>, H<sub>2</sub>CO<sub>3</sub> (CO<sub>2</sub> + H<sub>2</sub>O), HClO, H<sub>3</sub>BO<sub>3</sub>, H<sub>4</sub>SiO<sub>4</sub><br>• <strong>Kwasy karboksylowe i fenole:</strong> HCOOH, CH<sub>3</sub>COOH, (COOH)<sub>2</sub>, C<sub>6</sub>H<sub>5</sub>OH</td>
                        </tr>
                        <tr>
                            <td><strong>Wodorotlenki (Zasady)</strong></td>
                            <td>• <strong>Wodorotlenki litowców (1. grupy):</strong> LiOH, NaOH, KOH, RbOH, CsOH<br>• <strong>Wodorotlenki berylowców (2. grupy) z wyjątkiem Be i Mg:</strong> Ca(OH)<sub>2</sub>, Sr(OH)<sub>2</sub>, Ba(OH)<sub>2</sub></td>
                            <td>• <strong>Woda amoniakalna</strong> (NH<sub>3</sub>&middot;H<sub>2</sub>O / NH<sub>3(aq)</sub>) oraz <strong>aminy organiczne</strong> (R&minus;NH<sub>2</sub>, np. CH<sub>3</sub>NH<sub>2</sub>, C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>)<br>• <strong>Pozostałe wodorotlenki metali</strong> (w tym trudno rozpuszczalne i amfoteryczne, np. Mg(OH)<sub>2</sub>, Be(OH)<sub>2</sub>, Cu(OH)<sub>2</sub>, Al(OH)<sub>3</sub>, Zn(OH)<sub>2</sub>, Fe(OH)<sub>3</sub>)</td>
                        </tr>
                        <tr>
                            <td><strong>Sole</strong></td>
                            <td>• <strong>Wszystkie sole dobrze rozpuszczalne w wodzie</strong> (niezależnie od tego, z jak słabego kwasu lub zasady pochodzą!), np. NaCl, KNO<sub>3</sub>, NH<sub>4</sub>Cl, CH<sub>3</sub>COONa, Na<sub>2</sub>CO<sub>3</sub>, CuSO<sub>4</sub></td>
                            <td>• Niektóre nieliczne sole wykazujące w roztworach budowę kowalencyjną (np. HgCl<sub>2</sub>, CdCl<sub>2</sub>).<br><em>(Uwaga: sole trudno rozpuszczalne, np. AgCl, BaSO<sub>4</sub>, w minimalnej części, która przechodzi do roztworu, są zdysocjowane całkowicie).</em></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>Dysocjacja stopniowa (wieloetapowa) kwasów wieloprotonowych</h4>
            <p>Kwasy wieloprotonowe (posiadające w cząsteczce więcej niż jeden atom wodoru zdolny do oderwania w postaci kationu H<sup>+</sup>) dysocjują etapami – w każdym kolejnym etapie odrywa się tylko jeden proton. Liczba etapów dysocjacji jest równa liczbie kwasowych atomów wodoru w cząsteczce.</p>
            <p><strong>Przykład 1: Dysocjacja trójstopniowa słabego kwasu ortofosforowego(V) (H<sub>3</sub>PO<sub>4</sub>):</strong></p>
            <div class="chem-eq">Etap I: H<sub>3</sub>PO<sub>4</sub> + H<sub>2</sub>O <span class="chem-arrow"><span class="arrow-sym">&rlhar;</span></span> H<sub>3</sub>O<sup>+</sup> + H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup> &nbsp;&nbsp;(K<sub>a1</sub> = 6,92 &middot; 10<sup>&minus;3</sup>)</div>
            <div class="chem-eq">Etap II: H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup> + H<sub>2</sub>O <span class="chem-arrow"><span class="arrow-sym">&rlhar;</span></span> H<sub>3</sub>O<sup>+</sup> + HPO<sub>4</sub><sup>2&minus;</sup> &nbsp;&nbsp;(K<sub>a2</sub> = 6,17 &middot; 10<sup>&minus;8</sup>)</div>
            <div class="chem-eq">Etap III: HPO<sub>4</sub><sup>2&minus;</sup> + H<sub>2</sub>O <span class="chem-arrow"><span class="arrow-sym">&rlhar;</span></span> H<sub>3</sub>O<sup>+</sup> + PO<sub>4</sub><sup>3&minus;</sup> &nbsp;&nbsp;(K<sub>a3</sub> = 4,79 &middot; 10<sup>&minus;13</sup>)</div>

            <p><strong>Reguła stężeń i stałych dysocjacji wielostopniowej:</strong> Oderwanie kationu H<sup>+</sup> od obojętnej cząsteczki (H<sub>3</sub>PO<sub>4</sub>) jest znacznie łatwiejsze niż oderwanie go od jonu ujemnego (H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup> i HPO<sub>4</sub><sup>2&minus;</sup>) ze względu na przyciąganie elektrostatyczne różnoimiennych ładunków. Dlatego każdy kolejny etap dysocjacji zachodzi ze znacznie mniejszą wydajnością:</p>
            <div class="chem-eq">K<sub>a1</sub> &gg; K<sub>a2</sub> &gg; K<sub>a3</sub> &nbsp;&nbsp;oraz&nbsp;&nbsp; &alpha;<sub>1</sub> &gg; &alpha;<sub>2</sub> &gg; &alpha;<sub>3</sub></div>
            <p>W wodnym roztworze H<sub>3</sub>PO<sub>4</sub> znajdują się niezdysocjowane cząsteczki H<sub>3</sub>PO<sub>4</sub> oraz jony H<sub>3</sub>O<sup>+</sup>, H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup>, HPO<sub>4</sub><sup>2&minus;</sup>, PO<sub>4</sub><sup>3&minus;</sup> (oraz śladowe ilości OH<sup>&minus;</sup> z autodysocjacji wody), a ich stężenia równowagowe spełniają zależność:</p>
            <div class="chem-eq">[H<sub>3</sub>PO<sub>4</sub>] &gt; [H<sub>3</sub>O<sup>+</sup>] &gt; [H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup>] &gg; [HPO<sub>4</sub><sup>2&minus;</sup>] &gg; [PO<sub>4</sub><sup>3&minus;</sup>]</div>
            <p><em>(Stężenie [H<sub>3</sub>O<sup>+</sup>] jest nieco większe od [H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup>], ponieważ jony H<sub>3</sub>O<sup>+</sup> powstają we wszystkich trzech etapach, jednak o pH i ogólnym stopniu dysocjacji kwasu wieloprotonowego decyduje praktycznie wyłącznie I etap dysocjacji!).</em> Sumaryczna stała dysocjacji jest iloczynem stałych cząstkowych: <strong>K = K<sub>a1</sub> &middot; K<sub>a2</sub> &middot; K<sub>a3</sub></strong>.</p>

            <div class="note-alert danger">
                ⚠️ <strong>Uwaga maturalna – pułapki w dysocjacji kwasów i soli:</strong>
                <ul class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li><strong>Kwas siarkowy(VI) (H<sub>2</sub>SO<sub>4</sub>):</strong> W umiarkowanie stężonych roztworach I etap dysocjacji jest procesem praktycznie całkowitym i nieodwracalnym (H<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O &rarr; H<sub>3</sub>O<sup>+</sup> + HSO<sub>4</sub><sup>&minus;</sup>), natomiast II etap jest procesem odwracalnym (HSO<sub>4</sub><sup>&minus;</sup> + H<sub>2</sub>O &rlhar; H<sub>3</sub>O<sup>+</sup> + SO<sub>4</sub><sup>2&minus;</sup>, K<sub>a2</sub> &approx; 1,0 &middot; 10<sup>&minus;2</sup>). Dopiero w roztworach bardzo rozcieńczonych przyjmuje się całkowitą dysocjację obu etapów (H<sub>2</sub>SO<sub>4</sub> &rarr; 2 H<sup>+</sup> + SO<sub>4</sub><sup>2&minus;</sup>, stąd [H<sup>+</sup>] &approx; 2 &middot; C<sub>H<sub>2</sub>SO<sub>4</sub></sub>).</li>
                    <li><strong>Kwasy fosforowe o mniejszej zasadowości niż liczba atomów H:</strong> Kwas fosforowy(III) H<sub>3</sub>PO<sub>3</sub> (kwas fosfonowy) jest kwasem <strong>dwuprotonowym</strong> (dysocjuje tylko w 2 etapach do jonu HPO<sub>3</sub><sup>2&minus;</sup>), a kwas fosforowy(I) H<sub>3</sub>PO<sub>2</sub> (kwas fosfinowy) jest kwasem <strong>jednoprotonowym</strong> (dysocjuje tylko w 1 etapie do jonu H<sub>2</sub>PO<sub>2</sub><sup>&minus;</sup>). Atomy wodoru połączone bezpośrednio z atomem fosforu (wiązania P&minus;H) nie ulegają odszczepieniu w wodzie!</li>
                    <li><strong>Kwasy organiczne:</strong> W kwasach karboksylowych dysocjacji ulega wyłącznie atom wodoru z grupy karboksylowej &minus;COOH, np. kwas octowy CH<sub>3</sub>COOH jest kwasem jednoprotonowym (CH<sub>3</sub>COOH + H<sub>2</sub>O &rlhar; CH<sub>3</sub>COO<sup>&minus;</sup> + H<sub>3</sub>O<sup>+</sup>), a kwas szczawiowy (etanodiowy, HOOC&minus;COOH) jest kwasem dwuprotonowym.</li>
                    <li><strong>Dysocjacja wodorosoli mocnych kwasów i zasad:</strong> Wodorosiarczan(VI) sodu NaHSO<sub>4</sub> w rozcieńczonym roztworze dysocjuje najpierw całkowicie jako sól (NaHSO<sub>4</sub> &rarr; Na<sup>+</sup> + HSO<sub>4</sub><sup>&minus;</sup>), a powstały jon wodorosiarczanowy(VI) ulega znacznej dysocjacji kwasowej (HSO<sub>4</sub><sup>&minus;</sup> + H<sub>2</sub>O &rlhar; H<sub>3</sub>O<sup>+</sup> + SO<sub>4</sub><sup>2&minus;</sup>), nadając roztworowi silnie kwasowy odczyn.</li>
                </ul>
            </div>

            <h4>Porównanie trzech teorii kwasów i zasad (Arrheniusa, Br&oslash;nsteda-Lowry'ego, Lewisa)</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Teoria</th>
                            <th>Definicja kwasu</th>
                            <th>Definicja zasady</th>
                            <th>Kluczowe cechy, przykłady i ograniczenia maturalne</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Teoria Arrheniusa (jonowa)</strong></td>
                            <td>Związek chemiczny, który w roztworze wodnym dysocjuje z utworzeniem kationów wodoru H<sup>+</sup> (H<sub>3</sub>O<sup>+</sup>) jako jedynych jonów dodatnich i anionów reszty kwasowej R<sup>m&minus;</sup> (H<sub>m</sub>R &rarr; mH<sup>+</sup> + R<sup>m&minus;</sup>).</td>
                            <td>Związek chemiczny, który w roztworze wodnym dysocjuje z utworzeniem anionów wodorotlenkowych OH<sup>&minus;</sup> jako jedynych jonów ujemnych i kationów metalu Me<sup>n+</sup> (Me(OH)<sub>n</sub> &rarr; Me<sup>n+</sup> + nOH<sup>&minus;</sup>).</td>
                            <td>• Ograniczona wyłącznie do roztworów wodnych.<br>• Nie tłumaczy zasadowego odczynu amoniaku (NH<sub>3</sub> nie posiada grupy &minus;OH w cząsteczce) ani odczynu roztworów soli (np. Na<sub>2</sub>CO<sub>3</sub>, NH<sub>4</sub>Cl).</td>
                        </tr>
                        <tr>
                            <td><strong>Teoria Br&oslash;nsteda-Lowry'ego (protonowa)</strong></td>
                            <td><strong>Donor (dawca) protonu H<sup>+</sup></strong> – każda drobina (cząsteczka lub jon) zdolna do oddania kationu wodoru w trakcie reakcji chemicznej.</td>
                            <td><strong>Akceptor (biorca) protonu H<sup>+</sup></strong> – każda drobina (cząsteczka lub jon) posiadająca wolną parę elektronową, zdolna do przyjęcia kationu wodoru.</td>
                            <td>• Reakcja kwas–zasada (protoliza) polega na przeniesieniu protonu H<sup>+</sup> z kwasu na zasadę: Kwas<sub>1</sub> + Zasada<sub>2</sub> &rlhar; Zasada<sub>1</sub> + Kwas<sub>2</sub>.<br>• <strong>Sprzężona para kwas–zasada</strong> to dwie drobiny różniące się dokładnie o jeden proton H<sup>+</sup> (np. NH<sub>4</sub><sup>+</sup> / NH<sub>3</sub>; H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup> / HPO<sub>4</sub><sup>2&minus;</sup>; H<sub>3</sub>O<sup>+</sup> / H<sub>2</sub>O).<br>• <strong>Uwaga:</strong> Wodorotlenki metali (np. NaOH) same w sobie nie są zasadami Br&oslash;nsteda – właściwą zasadą Br&oslash;nsteda są powstające z ich dysocjacji aniony OH<sup>&minus;</sup>!</td>
                        </tr>
                        <tr>
                            <td><strong>Teoria Lewisa (elektronowa)</strong></td>
                            <td><strong>Akceptor (biorca) pary elektronowej</strong> – drobina posiadająca nieobsadzony (pusty) orbital walencyjny (tzw. lukę elektronową), mogąca przyjąć parę elektronową do utworzenia wiązania koordynacyjnego.</td>
                            <td><strong>Donor (dawca) pary elektronowej</strong> – drobina posiadająca co najmniej jedną wolną parę elektronową, którą może udostępnić do utworzenia wiązania koordynacyjnego.</td>
                            <td>• Najbardziej ogólna teoria (nie wymaga udziału protonów ani rozpuszczalnika).<br>• <strong>Kwasy Lewisa:</strong> H<sup>+</sup>, kationy metali (zwłaszcza o małym promieniu i dużym ładunku: Al<sup>3+</sup>, Fe<sup>3+</sup>, Cu<sup>2+</sup>, Zn<sup>2+</sup>, Ag<sup>+</sup>), cząsteczki z niepełnym oktetem (BF<sub>3</sub>, AlCl<sub>3</sub>, SO<sub>3</sub>).<br>• <strong>Zasady Lewisa:</strong> aniony (OH<sup>&minus;</sup>, Cl<sup>&minus;</sup>, CN<sup>&minus;</sup>) oraz cząsteczki z wolną parę elektronową (NH<sub>3</sub>, H<sub>2</sub>O, R&minus;NH<sub>2</sub>).<br>• Przykład: tworzenie akwakompleksów, amminakompleksów oraz adduktu BF<sub>3</sub> + :NH<sub>3</sub> &rarr; F<sub>3</sub>B&larr;NH<sub>3</sub>.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>Substancje amfiprotyczne (amfolity) w teorii Br&oslash;nsteda-Lowry'ego</h4>
            <p>Drobiny amfiprotyczne mogą pełnić funkcję zarówno donora protonu (kwasu Br&oslash;nsteda), jak i akceptora protonu (zasady Br&oslash;nsteda) w zależności od mocy partnera reakcji:</p>
            <ol class="note-list">
                <li><strong>Cząsteczka wody (H<sub>2</sub>O):</strong>
                    <br>• Wobec kwasu (np. HCl, CH<sub>3</sub>COOH) pełni rolę zasady Br&oslash;nsteda: HCl<sub>(kwas 1)</sub> + H<sub>2</sub>O<sub>(zasada 2)</sub> &rarr; Cl<sup>&minus;</sup><sub>(zasada 1)</sub> + H<sub>3</sub>O<sup>+</sup><sub>(kwas 2)</sub>.
                    <br>• Wobec zasady (np. NH<sub>3</sub>, CO<sub>3</sub><sup>2&minus;</sup>) pełni rolę kwasu Br&oslash;nsteda: H<sub>2</sub>O<sub>(kwas 1)</sub> + NH<sub>3(zasada 2)</sub> &rlhar; OH<sup>&minus;</sup><sub>(zasada 1)</sub> + NH<sub>4</sub><sup>+</sup><sub>(kwas 2)</sub>.
                </li>
                <li><strong>Aniony wodorosoli kwasów wieloprotonowych (posiadające zdolny do oderwania proton):</strong> np. HCO<sub>3</sub><sup>&minus;</sup>, HSO<sub>3</sub><sup>&minus;</sup>, HS<sup>&minus;</sup>, H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup>, HPO<sub>4</sub><sup>2&minus;</sup>:
                    <br>• HCO<sub>3</sub><sup>&minus;</sup> jako kwas Br&oslash;nsteda (w reakcji z mocną zasadą OH<sup>&minus;</sup>): HCO<sub>3</sub><sup>&minus;</sup><sub>(kwas 1)</sub> + OH<sup>&minus;</sup><sub>(zasada 2)</sub> &rarr; CO<sub>3</sub><sup>2&minus;</sup><sub>(zasada 1)</sub> + H<sub>2</sub>O<sub>(kwas 2)</sub>.
                    <br>• HCO<sub>3</sub><sup>&minus;</sup> jako zasada Br&oslash;nsteda (w reakcji z mocnym kwasem H<sub>3</sub>O<sup>+</sup>): HCO<sub>3</sub><sup>&minus;</sup><sub>(zasada 1)</sub> + H<sub>3</sub>O<sup>+</sup><sub>(kwas 2)</sub> &rarr; CO<sub>2</sub>&uarr; + 2 H<sub>2</sub>O.
                </li>
                <li><strong>Pułapka maturalna (H<sub>2</sub>PO<sub>2</sub><sup>&minus;</sup> i HPO<sub>3</sub><sup>2&minus;</sup>):</strong> Jon H<sub>2</sub>PO<sub>2</sub><sup>&minus;</sup> (z kwasu H<sub>3</sub>PO<sub>2</sub>) oraz jon HPO<sub>3</sub><sup>2&minus;</sup> (z kwasu H<sub>3</sub>PO<sub>3</sub>) <strong>nie są amfiprotyczne</strong> – są wyłącznie zasadami Br&oslash;nsteda, ponieważ pozostałe w nich atomy wodoru są związane bezpośrednio z fosforem i nie ulegają odszczepieniu jako H<sup>+</sup>!</li>
                <li><strong>Reguła mocy sprzężonych par kwas–zasada:</strong> Im mocniejszy jest dany kwas Br&oslash;nsteda (łatwiej oddaje proton), tym słabsza jest sprzężona z nim zasada (trudniej przyjmuje proton). Związek ilościowy dla sprzężonej pary w temperaturze 25&deg;C wyraża się wzorem:
                    <div class="chem-eq">K<sub>a</sub> &middot; K<sub>b</sub> = K<sub>w</sub> = 1,0 &middot; 10<sup>&minus;14</sup> &nbsp;&nbsp;(czyli pK<sub>a</sub> + pK<sub>b</sub> = pK<sub>w</sub> = 14)</div>
                    Przykład: Ponieważ moc kwasów rośnie w szeregu CH<sub>3</sub>COOH &lt; HF &lt; HCl &lt; HI, to moc sprzężonych z nimi zasad maleje w szeregu: CH<sub>3</sub>COO<sup>&minus;</sup> &gt; F<sup>&minus;</sup> &gt; Cl<sup>&minus;</sup> &gt; I<sup>&minus;</sup>.
                </li>
            </ol>
        </div>

        <!-- SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Ilościowy Opis Dysocjacji – Stopień (&alpha;), Stała Dysocjacji (K) i Prawo Rozcieńczeń Ostwalda</h3>

            <h4>Porównanie stopnia dysocjacji (&alpha;) i stałej dysocjacji (K)</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Cecha porównawcza</th>
                            <th>Stopień dysocjacji elektrolitycznej (&alpha;)</th>
                            <th>Stała dysocjacji elektrolitycznej (K<sub>a</sub>, K<sub>b</sub>)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Definicja i sens fizyczny</strong></td>
                            <td>Stosunek liczby moli cząsteczek zdysocjowanych na jony (n<sub>zdys</sub>) do całkowitej liczby moli cząsteczek elektrolitu wprowadzonych do roztworu (n<sub>wpr</sub>) lub równowagowego stężenia części zdysocjowanej (C<sub>zdys</sub>) do stężenia początkowego (C<sub>0</sub>).</td>
                            <td>Stała równowagi reakcji odwracalnej dysocjacji słabego elektrolitu; stosunek iloczynu stężeń równowagowych jonów (podniesionych do potęg równych współczynnikom stechiometrycznym) do stężenia równowagowego cząsteczek niezdysocjowanych.</td>
                        </tr>
                        <tr>
                            <td><strong>Wzór definicyjny</strong></td>
                            <td>&alpha; = n<sub>zdys</sub> / n<sub>wpr</sub> = C<sub>zdys</sub> / C<sub>0</sub> (ułamek: 0 &le; &alpha; &le; 1) lub w procentach: &alpha; = (C<sub>zdys</sub> / C<sub>0</sub>) &middot; 100%.<br>Dla kwasu HA: &alpha; = [H<sub>3</sub>O<sup>+</sup>] / C<sub>a</sub>;<br>dla zasady B: &alpha; = [OH<sup>&minus;</sup>] / C<sub>b</sub>.</td>
                            <td>Dla kwasu HA + H<sub>2</sub>O &rlhar; H<sub>3</sub>O<sup>+</sup> + A<sup>&minus;</sup>:<br><strong>K<sub>a</sub> = ([H<sub>3</sub>O<sup>+</sup>] &middot; [A<sup>&minus;</sup>]) / [HA]</strong><br>Dla zasady B + H<sub>2</sub>O &rlhar; BH<sup>+</sup> + OH<sup>&minus;</sup>:<br><strong>K<sub>b</sub> = ([BH<sup>+</sup>] &middot; [OH<sup>&minus;</sup>]) / [B]</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Jednostka</strong></td>
                            <td>Wielkość bezwymiarowa lub wyrażana w procentach (%).</td>
                            <td>Wielkość bezwymiarowa (stężenie wody [H<sub>2</sub>O] &approx; 55,5 mol&middot;dm<sup>&minus;3</sup> jest stałe i włączone do wartości K).</td>
                        </tr>
                        <tr>
                            <td><strong>Zależność od stężenia elektrolitu (C<sub>0</sub>)</strong></td>
                            <td><strong>Zależy od stężenia!</strong> Wraz z rozcieńczaniem roztworu (maleje C<sub>0</sub>) stopień dysocjacji słabego elektrolitu <strong>rośnie</strong>; podczas zatężania – <strong>maleje</strong>.</td>
                            <td><strong>Nie zależy od stężenia elektrolitu!</strong> Jest wielkością stałą dla danego elektrolitu w danej temperaturze.</td>
                        </tr>
                        <tr>
                            <td><strong>Zależność od temperatury (T)</strong></td>
                            <td>Zależy od temperatury (zwykle nieznacznie rośnie wraz ze wzrostem temperatury).</td>
                            <td>Zależy wyłącznie od rodzaju elektrolitu, rozpuszczalnika i <strong>temperatury</strong>.</td>
                        </tr>
                        <tr>
                            <td><strong>Porównywanie mocy elektrolitów</strong></td>
                            <td>Pozwala porównać moc dwóch elektrolitów wyłącznie wtedy, gdy mają identyczne stężenie molowe (C<sub>0</sub>) i tę samą temperaturę.</td>
                            <td>Uniwersalna miara mocy elektrolitu: im większa wartość K<sub>a</sub> (lub mniejsza wartość pK<sub>a</sub> = &minus;log K<sub>a</sub>), tym mocniejszy jest kwas.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>Prawo rozcieńczeń Ostwalda – wyprowadzenie i kryteria stosowania wzoru uproszczonego</h4>
            <p>Rozważmy jednozasadowy słaby kwas HA o stężeniu początkowym C<sub>0</sub> i stopniu dysocjacji &alpha;: HA + H<sub>2</sub>O &rlhar; H<sub>3</sub>O<sup>+</sup> + A<sup>&minus;</sup>.<br>
            Równowagowe stężenia jonów wynoszą: [H<sub>3</sub>O<sup>+</sup>] = [A<sup>&minus;</sup>] = C<sub>0</sub> &middot; &alpha;. Równowagowe stężenie cząsteczek niezdysocjowanych wynosi: [HA] = C<sub>0</sub> &minus; [H<sub>3</sub>O<sup>+</sup>] = C<sub>0</sub> &minus; C<sub>0</sub> &middot; &alpha; = C<sub>0</sub>(1 &minus; &alpha;). Podstawiając powyższe zależności do wyrażenia na stałą dysocjacji, otrzymujemy <strong>pełną postać prawa rozcieńczeń Ostwalda</strong>:</p>
            <div class="chem-eq">K = ((C<sub>0</sub> &middot; &alpha;) &middot; (C<sub>0</sub> &middot; &alpha;)) / (C<sub>0</sub>(1 &minus; &alpha;)) &rArr; <strong>K = (&alpha;<sup>2</sup> &middot; C<sub>0</sub>) / (1 &minus; &alpha;)</strong> &nbsp;&nbsp;oraz&nbsp;&nbsp; <strong>K<sub>a</sub> = [H<sub>3</sub>O<sup>+</sup>]<sup>2</sup> / (C<sub>a</sub> &minus; [H<sub>3</sub>O<sup>+</sup>])</strong></div>

            <div class="note-alert">
                <strong>Warunek uproszczenia na maturze:</strong> Jeżeli słaby elektrolit jest zdysocjowany w niewielkim stopniu, czyli spełnia jeden z dwóch równoważnych warunków maturalnych:
                <div class="chem-eq" style="margin: 8px 0;"><strong>&alpha; &le; 0,05 (czyli &alpha; &le; 5%)</strong> &nbsp;&nbsp;lub&nbsp;&nbsp; <strong>C<sub>0</sub> / K &ge; 400</strong></div>
                wówczas w mianowniku można przyjąć przybliżenie 1 &minus; &alpha; &approx; 1 (oraz C<sub>0</sub> &minus; [H<sub>3</sub>O<sup>+</sup>] &approx; C<sub>0</sub>). Prawo rozcieńczeń Ostwalda przyjmuje wtedy postać uproszczoną:
                <div class="chem-eq" style="margin: 8px 0;"><strong>K &approx; &alpha;<sup>2</sup> &middot; C<sub>0</sub> &rArr; &alpha; &approx; &radic;(K / C<sub>0</sub>)</strong> &nbsp;&nbsp;oraz&nbsp;&nbsp; <strong>[H<sub>3</sub>O<sup>+</sup>] &approx; &radic;(K<sub>a</sub> &middot; C<sub>a</sub>)</strong></div>
                <em>(Uwaga: Ze wzoru &alpha; &approx; &radic;(K / C<sub>0</sub>) wynika bezpośrednio, że aby zwiększyć stopień dysocjacji bardzo słabego elektrolitu n-krotnie, należy rozcieńczyć jego roztwór <strong>n<sup>2</sup>-krotnie</strong>!).</em> Gdy &alpha; &gt; 5% lub C<sub>0</sub> / K &lt; 400, na maturze bezwzględnie należy rozwiązać pełne równanie kwadratowe: <strong>C<sub>0</sub>&alpha;<sup>2</sup> + K&alpha; &minus; K = 0</strong> (lub <strong>[H<sub>3</sub>O<sup>+</sup>]<sup>2</sup> + K<sub>a</sub>[H<sub>3</sub>O<sup>+</sup>] &minus; K<sub>a</sub>C<sub>a</sub> = 0</strong>).
            </div>

            <h4>Efekt wspólnego jonu – wpływ innych substancji na równowagę dysocjacji (Reguła przekory Le Chateliera-Brauna)</h4>
            <p>Równowaga dysocjacji słabego elektrolitu, np. kwasu octowego: CH<sub>3</sub>COOH + H<sub>2</sub>O &rlhar; CH<sub>3</sub>COO<sup>&minus;</sup> + H<sub>3</sub>O<sup>+</sup> zostaje zaburzona po wprowadzeniu do roztworu mocnego elektrolitu posiadającego wspólny jon:</p>
            <ul class="note-list">
                <li><strong>Dodatek mocnego kwasu (np. HCl) lub dobrze rozpuszczalnej soli tego słabego kwasu (np. octanu sodu CH<sub>3</sub>COONa):</strong> Powoduje wzrost stężenia jednego z produktów (H<sub>3</sub>O<sup>+</sup> lub CH<sub>3</sub>COO<sup>&minus;</sup>). Zgodnie z regułą przekory układ przesuwa równowagę w lewo (w stronę tworzenia niezdysocjowanych cząsteczek CH<sub>3</sub>COOH), co skutkuje <strong>zmniejszeniem stopnia dysocjacji (&alpha;)</strong> słabego kwasu (tzw. <em>cofnięcie dysocjacji</em>), przy niezmienionej wartości stałej K<sub>a</sub>. Po dodaniu stałego CH<sub>3</sub>COONa do roztworu CH<sub>3</sub>COOH maleje stężenie [H<sub>3</sub>O<sup>+</sup>], a więc <strong>rośnie pH roztworu</strong>.</li>
                <li><strong>Dodatek mocnej zasady (np. NaOH):</strong> Wprowadzone jony OH<sup>&minus;</sup> wiążą jony H<sub>3</sub>O<sup>+</sup> w cząsteczki wody (H<sub>3</sub>O<sup>+</sup> + OH<sup>&minus;</sup> &rarr; 2 H<sub>2</sub>O). Zmniejszenie stężenia produktu (H<sub>3</sub>O<sup>+</sup>) przesuwa równowagę dysocjacji w prawo, powodując <strong>wzrost stopnia dysocjacji (&alpha;)</strong>.</li>
            </ul>

            <h4>Czynniki strukturalne wpływające na moc kwasów i zasad (pewniaki z arkuszy CKE)</h4>
            <ol class="note-list">
                <li><strong>Beztlenowe wodorki niemetali:</strong>
                    <br>• <strong>W grupie układu okresowego (w dół):</strong> Moc kwasów <strong>rośnie</strong> (HF &ll; HCl &lt; HBr &lt; HI oraz H<sub>2</sub>O &lt; H<sub>2</sub>S &lt; H<sub>2</sub>Se &lt; H<sub>2</sub>Te). Przyczyną jest wzrost promienia atomowego niemetalu, co zwiększa długość wiązania H&minus;X i zmniejsza jego energię – proton H<sup>+</sup> łatwiej ulega oderwaniu (czynnik ten dominuje nad spadkiem elektroujemności).
                    <br>• <strong>W okresie układu okresowego (od lewej do prawej):</strong> Moc kwasów <strong>rośnie</strong> (CH<sub>4</sub> &lt; NH<sub>3</sub> &lt; H<sub>2</sub>O &lt; HF), ponieważ przy zbliżonych rozmiarach atomów rośnie elektroujemność niemetalu i wzrasta polaryzacja wiązania H&minus;X.
                </li>
                <li><strong>Kwasy tlenowe (H<sub>m</sub>EO<sub>n</sub>):</strong>
                    <br>• Dla tego samego pierwiastka centralnego moc kwasu rośnie wraz ze <strong>wzrostem jego stopnia utlenienia</strong> (i liczby atomów tlenu niepołączonych z wodorem): HClO<sup>+I</sup> &lt; HClO<sub>2</sub><sup>+III</sup> &lt; HClO<sub>3</sub><sup>+V</sup> &lt; HClO<sub>4</sub><sup>+VII</sup> oraz H<sub>2</sub>SO<sub>3</sub><sup>+IV</sup> &lt; H<sub>2</sub>SO<sub>4</sub><sup>+VI</sup> i HNO<sub>2</sub><sup>+III</sup> &lt; HNO<sub>3</sub><sup>+V</sup>. Większa liczba silnie elektroujemnych atomów tlenu wyciąga gęstość elektronową z wiązania O&minus;H, ułatwiając odszczepienie protonu.
                    <br>• Dla kwasów o analogicznych wzorach i tym samym stopniu utlenienia atomu centralnego moc rośnie wraz ze <strong>wzrostem elektroujemności atomu centralnego</strong>: HIO<sub>3</sub> &lt; HBrO<sub>3</sub> &lt; HClO<sub>3</sub> oraz H<sub>3</sub>AsO<sub>4</sub> &lt; H<sub>3</sub>PO<sub>4</sub>.
                </li>
                <li><strong>Kwasy karboksylowe (wpływ długości łańcucha i podstawników – efekt indukcyjny):</strong>
                    <br>• Wzrost długości łańcucha alkilowego nieznacznie zmniejsza moc kwasu: HCOOH &gt; CH<sub>3</sub>COOH &gt; CH<sub>3</sub>CH<sub>2</sub>COOH.
                    <br>• Obecność podstawników silnie elektroujemnych (np. &minus;F, &minus;Cl, &minus;Br, &minus;NO<sub>2</sub>) wyciągających elektrony (ujemny efekt indukcyjny) stabilizuje anion karboksylanowy i silnie zwiększa moc kwasu. Moc rośnie wraz z:
                    <br>&nbsp;&nbsp;&ndash; <strong>liczbą atomów chlorowca:</strong> CH<sub>3</sub>COOH &lt; CH<sub>2</sub>ClCOOH &lt; CHCl<sub>2</sub>COOH &lt; CCl<sub>3</sub>COOH;
                    <br>&nbsp;&nbsp;&ndash; <strong>elektroujemnością podstawnika:</strong> CH<sub>2</sub>ICOOH &lt; CH<sub>2</sub>BrCOOH &lt; CH<sub>2</sub>ClCOOH &lt; CH<sub>2</sub>FCOOH;
                    <br>&nbsp;&nbsp;&ndash; <strong>zmniejszaniem się odległości podstawnika od grupy &minus;COOH:</strong> kwas 4-chlorobutanowy &lt; kwas 3-chlorobutanowy &lt; kwas 2-chlorobutanowy.
                </li>
                <li><strong>Zasadowość amin w wodzie:</strong>
                    <br>• Aminy alifatyczne są mocniejszymi zasadami niż amoniak, a aminy aromatyczne (np. anilina) są znacznie słabszymi zasadami niż amoniak:
                    <div class="chem-eq">C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> (anilina) &ll; NH<sub>3</sub> (amoniak) &lt; CH<sub>3</sub>NH<sub>2</sub> (metyloamina) &lt; (CH<sub>3</sub>)<sub>2</sub>NH (dimetyloamina)</div>
                    • <strong>Uzasadnienie:</strong> W aminach alifatycznych grupy alkilowe wywierają dodatni efekt indukcyjny (zwiększają gęstość elektronową na atomie azotu, ułatwiając przyłączenie protonu H<sup>+</sup>), natomiast w anilinie wolna para elektronowa atomu azotu ulega sprzężeniu (delokalizacji) z elektronami &pi; pierścienia benzenowego, przez co jest znacznie trudniej dostępna dla protonu.
                </li>
            </ol>
        </div>

        <!-- SEKCJA 3 -->
        <div class="note-section">
            <h3>3. Iloczyn Jonowy Wody (K<sub>w</sub>), Skala pH oraz Wskaźniki Kwasowo-Zasadowe</h3>
            <p><strong>Autodysocjacja (autoprotoliza) wody i iloczyn jonowy wody (K<sub>w</sub>):</strong> Czysta chemicznie woda ulega w znikomym stopniu odwracalnej autodysocjacji zgodnie z równaniem:</p>
            <div class="chem-eq">H<sub>2</sub>O + H<sub>2</sub>O <span class="chem-arrow"><span class="arrow-sym">&rlhar;</span></span> H<sub>3</sub>O<sup>+</sup> + OH<sup>&minus;</sup> &nbsp;&nbsp;(w uproszczeniu: H<sub>2</sub>O &rlhar; H<sup>+</sup> + OH<sup>&minus;</sup>)</div>
            <p>Iloczyn stężeń równowagowych jonów oksoniowych i wodorotlenkowych w wodzie oraz w dowolnym roztworze wodnym ma w danej temperaturze wartość stałą i nazywa się <strong>iloczynem jonowym wody (K<sub>w</sub>)</strong>:</p>
            <div class="chem-eq"><strong>K<sub>w</sub> = [H<sub>3</sub>O<sup>+</sup>] &middot; [OH<sup>&minus;</sup>] = 1,0 &middot; 10<sup>&minus;14</sup></strong> &nbsp;&nbsp;(w temperaturze T = 25&deg;C = 298 K)</div>

            <h4>Definicje pH, pOH oraz pK<sub>w</sub></h4>
            <ul class="note-list">
                <li><strong>pH = &minus;log [H<sub>3</sub>O<sup>+</sup>] &hArr; [H<sub>3</sub>O<sup>+</sup>] = 10<sup>&minus;pH</sup></strong></li>
                <li><strong>pOH = &minus;log [OH<sup>&minus;</sup>] &hArr; [OH<sup>&minus;</sup>] = 10<sup>&minus;pOH</sup></strong></li>
                <li><strong>pK<sub>w</sub> = &minus;log K<sub>w</sub> = pH + pOH = 14</strong> (w temperaturze 25&deg;C)</li>
            </ul>
            <p><strong>Kluczowe własności logarytmów niezbędne do obliczeń maturalnych bez kalkulatora naukowego:</strong></p>
            <ul class="note-list">
                <li>log 1 = 0, &nbsp;log 10 = 1, &nbsp;log(10<sup>a</sup>) = a.</li>
                <li>Jeśli [H<sub>3</sub>O<sup>+</sup>] = a &middot; 10<sup>&minus;b</sup> mol&middot;dm<sup>&minus;3</sup>, to: <strong>pH = &minus;log(a &middot; 10<sup>&minus;b</sup>) = b &minus; log a</strong>.</li>
                <li>Każda zmiana pH o 1 jednostkę oznacza <strong>10-krotną zmianę stężenia jonów H<sub>3</sub>O<sup>+</sup></strong> (np. wzrost pH z 2 do 5 oznacza 1000-krotne zmniejszenie stężenia [H<sub>3</sub>O<sup>+</sup>] oraz 1000-krotny wzrost stężenia [OH<sup>&minus;</sup>]).</li>
            </ul>

            <h4>Zależność odczynu roztworu od stężenia jonów (dla dowolnej temperatury) i wartości pH (w 25&deg;C)</h4>
            <ul class="note-list">
                <li><strong>Odczyn kwasowy:</strong> <strong>[H<sub>3</sub>O<sup>+</sup>] &gt; [OH<sup>&minus;</sup>]</strong> (w 25&deg;C: [H<sub>3</sub>O<sup>+</sup>] &gt; 10<sup>&minus;7</sup> mol&middot;dm<sup>&minus;3</sup>, czyli <strong>pH &lt; 7</strong> i pOH &gt; 7).</li>
                <li><strong>Odczyn obojętny:</strong> <strong>[H<sub>3</sub>O<sup>+</sup>] = [OH<sup>&minus;</sup>]</strong> (w 25&deg;C: [H<sub>3</sub>O<sup>+</sup>] = [OH<sup>&minus;</sup>] = 10<sup>&minus;7</sup> mol&middot;dm<sup>&minus;3</sup>, czyli <strong>pH = pOH = 7</strong>).</li>
                <li><strong>Odczyn zasadowy:</strong> <strong>[H<sub>3</sub>O<sup>+</sup>] &lt; [OH<sup>&minus;</sup>]</strong> (w 25&deg;C: [H<sub>3</sub>O<sup>+</sup>] &lt; 10<sup>&minus;7</sup> mol&middot;dm<sup>&minus;3</sup>, czyli <strong>pH &gt; 7</strong> i pOH &lt; 7).</li>
            </ul>

            <div class="note-alert danger">
                🔥 <strong>Uwaga maturalna – dwie klasyczne pułapki z pH i autodysocjacją wody:</strong>
                <ol class="note-list" style="margin-top: 8px; margin-bottom: 0;">
                    <li><strong>Wpływ temperatury na K<sub>w</sub> i pH czystej wody:</strong> Autodysocjacja wody jest procesem <strong>endoenergetycznym (&Delta;H &gt; 0</strong> – wymaga dostarczenia energii na rozerwanie wiązań kowalencyjnych). Zgodnie z regułą przekory wzrost temperatury przesuwa równowagę autodysocjacji w prawo, powodując wzrost wartości K<sub>w</sub> (np. w 60&deg;C K<sub>w</sub> &approx; 1,0 &middot; 10<sup>&minus;13</sup>). W czystej wodzie o temperaturze 60&deg;C stężenia jonów nadal są sobie równe: [H<sub>3</sub>O<sup>+</sup>] = [OH<sup>&minus;</sup>] = &radic;10<sup>&minus;13</sup> &approx; 3,16 &middot; 10<sup>&minus;7</sup> mol&middot;dm<sup>&minus;3</sup>, skąd <strong>pH = 6,5</strong>. Mimo że pH = 6,5 &lt; 7, <strong>odczyn czystej wody w 60&deg;C jest nadal OBOJĘTNY</strong>, ponieważ [H<sub>3</sub>O<sup>+</sup>] = [OH<sup>&minus;</sup>]! pH nie jest pojęciem tożsamym z odczynem roztworu.</li>
                    <li><strong>Rozcieńczanie kwasów i zasad:</strong> Podczas wielokrotnego rozcieńczania kwasu wodą pH roztworu rośnie, ale <strong>nigdy nie przekroczy wartości 7</strong> (asymptotycznie dąży do 7 od dołu). Podobnie podczas rozcieńczania zasady pH maleje, lecz nigdy nie spadnie poniżej 7 (dąży do 7 od góry). Jeśli obliczamy pH ekstremalnie rozcieńczonego mocnego kwasu (np. HCl o stężeniu 10<sup>&minus;8</sup> mol&middot;dm<sup>&minus;3</sup>), nie można napisać pH = 8 (byłby to odczyn zasadowy!), gdyż przy tak małym stężeniu należy uwzględnić jony H<sub>3</sub>O<sup>+</sup> pochodzące z autodysocjacji wody (pH &approx; 6,98).</li>
                </ol>
            </div>

            <h4>Barwy najważniejszych wskaźników kwasowo-zasadowych (indykatorów pH)</h4>
            <p>Wskaźniki kwasowo-zasadowe to słabe kwasy lub zasady organiczne, których forma niezdysocjowana (np. HInd) oraz zdysocjowana (Ind<sup>&minus;</sup>) mają różne barwy. Każdy wskaźnik zmienia barwę w charakterystycznym dla siebie przedziale pH (tzw. zakresie zmiany barwy):</p>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Wskaźnik kwasowo-zasadowy</th>
                            <th>Barwa w roztworze kwasowym</th>
                            <th>Barwa w roztworze obojętnym (pH = 7)</th>
                            <th>Barwa w roztworze zasadowym</th>
                            <th>Zakres pH zmiany barwy i pułapki maturalne</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Fenoloftaleina</strong></td>
                            <td>bezbarwna</td>
                            <td>bezbarwna</td>
                            <td><strong>malinowa</strong> (różowoczerwona)</td>
                            <td>pH 8,2–10,0. <strong>Nie odróżnia roztworu kwasowego od obojętnego</strong> (w obu jest bezbarwna)! W bardzo silnie stężonych zasadach (pH &gt; 13) ponownie odbarwia się.</td>
                        </tr>
                        <tr>
                            <td><strong>Oranż metylowy</strong></td>
                            <td><strong>czerwona</strong> (różowoczerwona)</td>
                            <td>żółta (żółtopomarańczowa)</td>
                            <td>żółta (żółtopomarańczowa)</td>
                            <td>pH 3,1–4,4. <strong>Nie odróżnia roztworu obojętnego od zasadowego</strong> (powyżej pH &approx; 4,4 ma tę samą żółtą/żółtopomarańczową barwę)!</td>
                        </tr>
                        <tr>
                            <td><strong>Uniwersalny papierek wskaźnikowy</strong></td>
                            <td>czerwona / pomarańczowa</td>
                            <td>żółta</td>
                            <td>zielona / niebieska / granatowa</td>
                            <td>Mieszanina kilku wskaźników – pozwala określić przybliżoną wartość pH w całym zakresie skali (od 1 do 14).</td>
                        </tr>
                        <tr>
                            <td><strong>Błękit bromotymolowy</strong></td>
                            <td>żółta</td>
                            <td>zielona</td>
                            <td>niebieska</td>
                            <td>pH 6,0–7,6. Doskonały wskaźnik do odróżnienia wszystkich trzech odczynów w okolicach pH &approx; 7.</td>
                        </tr>
                        <tr>
                            <td><strong>Lakmus</strong></td>
                            <td>czerwona</td>
                            <td>fioletowa</td>
                            <td>niebieska</td>
                            <td>pH 5,0–8,0. Pozwala jednoznacznie odróżnić odczyn kwasowy, obojętny i zasadowy.</td>
                        </tr>
                        <tr>
                            <td><strong>Czerwień Kongo</strong></td>
                            <td>niebieskofioletowa</td>
                            <td>czerwona</td>
                            <td>czerwona</td>
                            <td>pH 3,0–5,2 (odwrotna zmiana barwy niż dla lakmusu!).</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="chem-obs">
                🔎 <strong>Uwagi praktyczne do zadań maturalnych ze wskaźnikami:</strong>
                <ul class="note-list" style="margin-top: 6px; margin-bottom: 0;">
                    <li><strong>Badanie odczynu gazów:</strong> Papierek uniwersalny (lub lakmusowy), którym sprawdzamy charakter chemiczny wydzielającego się gazu (np. NH<sub>3</sub>, HCl, SO<sub>2</sub>), musi być uprzednio <strong>zwilżony wodą destylowaną</strong>, aby gaz mógł się w niej rozpuścić i ulec dysocjacji z wytworzeniem jonów H<sub>3</sub>O<sup>+</sup> lub OH<sup>&minus;</sup>.</li>
                    <li><strong>Formułowanie obserwacji na maturze:</strong> W przypadku fenoloftaleiny, oranżu metylowego i błękitu bromotymolowego piszemy o zmianie zabarwienia <strong>roztworu</strong> (np. <em>„roztwór przyjął barwę malinową”</em>), natomiast w przypadku papierka wskaźnikowego piszemy o zmianie barwy samego <strong>wskaźnika</strong> (np. <em>„zwilżony papierek uniwersalny zabarwił się na czerwono”</em>).</li>
                </ul>
            </div>
        </div>

        <!-- SEKCJA 4 -->
        <div class="note-section">
            <h3>4. Obliczanie pH Roztworów – Algorytmy Maturalne i Mieszanie Roztworów</h3>

            <h4>Zestawienie wzorów do obliczania pH poszczególnych typów elektrolitów</h4>
            <ul class="note-list">
                <li><strong>Mocny kwas jednoprotonowy</strong> (np. HCl, HNO<sub>3</sub>, HBr, HI, HClO<sub>4</sub>) o stężeniu C<sub>a</sub> (&alpha; &approx; 100%):
                    <div class="chem-eq">[H<sub>3</sub>O<sup>+</sup>] = C<sub>a</sub> &rArr; pH = &minus;log C<sub>a</sub></div>
                </li>
                <li><strong>Mocny kwas dwuprotonowy</strong> (H<sub>2</sub>SO<sub>4</sub> w silnie rozcieńczonym roztworze przy założeniu pełnej dysocjacji obu etapów):
                    <div class="chem-eq">[H<sub>3</sub>O<sup>+</sup>] = 2 &middot; C<sub>a</sub></div>
                </li>
                <li><strong>Mocna zasada jednoprotonowa</strong> (np. NaOH, KOH) o stężeniu C<sub>b</sub> (&alpha; &approx; 100%):
                    <div class="chem-eq">[OH<sup>&minus;</sup>] = C<sub>b</sub> &rArr; pOH = &minus;log C<sub>b</sub> &rArr; pH = 14 &minus; pOH</div>
                </li>
                <li><strong>Mocna zasada dwuprotonowa</strong> (np. Ba(OH)<sub>2</sub>, Ca(OH)<sub>2</sub>, Sr(OH)<sub>2</sub>) o stężeniu C<sub>b</sub> (&alpha; &approx; 100%):
                    <div class="chem-eq">Ba(OH)<sub>2</sub> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> Ba<sup>2+</sup> + 2 OH<sup>&minus;</sup> &rArr; [OH<sup>&minus;</sup>] = 2 &middot; C<sub>b</sub></div>
                </li>
                <li><strong>Słaby kwas jednoprotonowy</strong> (np. CH<sub>3</sub>COOH, HF, HNO<sub>2</sub>) o stężeniu C<sub>a</sub> i stałej K<sub>a</sub>:
                    <br>[H<sub>3</sub>O<sup>+</sup>] = &alpha; &middot; C<sub>a</sub>. Gdy C<sub>a</sub> / K<sub>a</sub> &ge; 400 (&alpha; &le; 5%): <strong>[H<sub>3</sub>O<sup>+</sup>] &approx; &radic;(K<sub>a</sub> &middot; C<sub>a</sub>)</strong>. Gdy C<sub>a</sub> / K<sub>a</sub> &lt; 400: rozwiązujemy równanie kwadratowe <strong>[H<sub>3</sub>O<sup>+</sup>]<sup>2</sup> + K<sub>a</sub>[H<sub>3</sub>O<sup>+</sup>] &minus; K<sub>a</sub>C<sub>a</sub> = 0</strong>.
                </li>
                <li><strong>Słaba zasada jednoprotonowa</strong> (np. NH<sub>3</sub>&middot;H<sub>2</sub>O, R&minus;NH<sub>2</sub>) o stężeniu C<sub>b</sub> i stałej K<sub>b</sub>:
                    <br>[OH<sup>&minus;</sup>] = &alpha; &middot; C<sub>b</sub>. Gdy C<sub>b</sub> / K<sub>b</sub> &ge; 400 (&alpha; &le; 5%): <strong>[OH<sup>&minus;</sup>] &approx; &radic;(K<sub>b</sub> &middot; C<sub>b</sub>)</strong>, skąd obliczamy pOH, a następnie pH = 14 &minus; pOH.
                </li>
            </ul>

            <h4>Wpływ rozcieńczania na pH mocnego i słabego elektrolitu</h4>
            <ul class="note-list">
                <li><strong>N-krotne rozcieńczenie wodą mocnego kwasu</strong> zmniejsza stężenie [H<sub>3</sub>O<sup>+</sup>] dokładnie <strong>N-krotnie</strong> (o ile pH nie zbliża się do 7). Dla 10-krotnego rozcieńczenia pH wzrasta o 1 jednostkę; dla 100-krotnego rozcieńczenia – wzrasta o 2 jednostki.</li>
                <li><strong>N-krotne rozcieńczenie wodą bardzo słabego kwasu</strong> (&alpha; &le; 5%, gdzie &alpha; = &radic;(K<sub>a</sub> / C<sub>a</sub>)) powoduje wzrost stopnia dysocjacji <strong>&radic;N-krotnie</strong> (&alpha;<sub>2</sub> / &alpha;<sub>1</sub> = &radic;(C<sub>1</sub> / C<sub>2</sub>) = &radic;N), przez co stężenie jonów [H<sub>3</sub>O<sup>+</sup>] maleje tylko <strong>&radic;N-krotnie</strong>!
                    <br>• <em>Przykład maturalny:</em> 100-krotne rozcieńczenie roztworu kwasu octowego (C<sub>2</sub> = 0,01 C<sub>1</sub>) powoduje 10-krotny wzrost stopnia dysocjacji (&alpha;<sub>2</sub> = 10 &alpha;<sub>1</sub>), 10-krotny spadek stężenia [H<sub>3</sub>O<sup>+</sup>] ([H<sub>3</sub>O<sup>+</sup>]<sub>2</sub> = 0,1 [H<sub>3</sub>O<sup>+</sup>]<sub>1</sub>) oraz wzrost wartości pH zaledwie o <strong>&Delta;pH = 1 jednostkę</strong> (a nie o 2 jednostki jak w przypadku HCl!).
                </li>
            </ul>

            <h4>Obliczanie pH po zmieszaniu roztworów mocnego kwasu i mocnej zasady (w ilościach niestechiometrycznych)</h4>
            <ol class="note-list">
                <li>Z podanych wartości pH (lub stężeń molowych) obliczamy stężenia jonów [H<sub>3</sub>O<sup>+</sup>] w roztworze kwasu oraz [OH<sup>&minus;</sup>] w roztworze zasady.</li>
                <li>Obliczamy początkową liczbę moli jonów oksoniowych (n<sub>H<sub>3</sub>O<sup>+</sup></sub> = [H<sub>3</sub>O<sup>+</sup>] &middot; V<sub>kwasu</sub>) oraz wodorotlenkowych (n<sub>OH<sup>&minus;</sup></sub> = [OH<sup>&minus;</sup>] &middot; V<sub>zasady</sub>).</li>
                <li>Zapisujemy skrócone równanie reakcji zobojętniania, w której jony reagują w stosunku molowym 1 : 1:
                    <div class="chem-eq">H<sub>3</sub>O<sup>+</sup> + OH<sup>&minus;</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> 2 H<sub>2</sub>O</div>
                </li>
                <li>Ustalamy, których jonów użyto w nadmiarze, i obliczamy liczbę moli jonów pozostałych po reakcji (n<sub>nadmiar</sub>):
                    <br>• Jeśli n<sub>H<sub>3</sub>O<sup>+</sup></sub> &gt; n<sub>OH<sup>&minus;</sup></sub> (odczyn końcowy kwasowy): n<sub>H<sub>3</sub>O<sup>+</sup>(po reakcji)</sub> = n<sub>H<sub>3</sub>O<sup>+</sup></sub> &minus; n<sub>OH<sup>&minus;</sup></sub>
                    <br>• Jeśli n<sub>OH<sup>&minus;</sup></sub> &gt; n<sub>H<sub>3</sub>O<sup>+</sup></sub> (odczyn końcowy zasadowy): n<sub>OH<sup>&minus;</sup>(po reakcji)</sub> = n<sub>OH<sup>&minus;</sup></sub> &minus; n<sub>H<sub>3</sub>O<sup>+</sup></sub>
                </li>
                <li>Obliczamy sumaryczną objętość roztworu po zmieszaniu (zakładając brak kontrakcji): V<sub>końc</sub> = V<sub>kwasu</sub> + V<sub>zasady</sub>, a następnie nowe stężenie nadmiarowego jonu ([H<sub>3</sub>O<sup>+</sup>]<sub>końc</sub> = n<sub>nadmiar</sub> / V<sub>końc</sub>) i końcowe pH.</li>
            </ol>
        </div>

        <!-- SEKCJA 5 -->
        <div class="note-section">
            <h3>5. Hydroliza Soli i Odczyn Roztworów Wodnych Soli</h3>
            <p><strong>Definicja i istota hydrolizy soli:</strong> Hydroliza soli to odwracalna reakcja jonów pochodzących od słabego elektrolitu (słabego kwasu lub słabej zasady), powstałych podczas dysocjacji dobrze rozpuszczalnej soli, z cząsteczkami wody, prowadząca do zmiany stężenia jonów H<sub>3</sub>O<sup>+</sup> lub OH<sup>&minus;</sup> (a tym samym zmiany odczynu roztworu). W ujęciu teorii Br&oslash;nsteda-Lowry'ego jest to po prostu reakcja protolizy (przeniesienia protonu między jonem soli a cząsteczką wody).</p>

            <h4>Złote zasady zapisywania równań hydrolizy na maturze</h4>
            <ul class="note-list">
                <li>Hydrolizie ulegają <strong>wyłącznie sole dobrze rozpuszczalne w wodzie</strong>. Sole nierozpuszczalne (np. AgCl, BaSO<sub>4</sub>, CaCO<sub>3</sub>) praktycznie nie wprowadzają jonów do roztworu, więc nie ulegają hydrolizie i nie zmieniają odczynu wody (pH = 7).</li>
                <li>Proces dysocjacji soli jest <strong>całkowity</strong> (strzałka w jedną stronę &rarr;), natomiast proces hydrolizy jonów jest <strong>odwracalny</strong> (strzałki w dwie strony &rlhar;).</li>
                <li>Równania hydrolizy na maturze zapisujemy zawsze w <strong>formie jonowej skróconej</strong>. W reakcji z wodą biorą udział wyłącznie jony „słabe” (pochodzące od słabego kwasu lub słabej zasady). Jony pochodzące od mocnych zasad (Li<sup>+</sup>, Na<sup>+</sup>, K<sup>+</sup>, Rb<sup>+</sup>, Cs<sup>+</sup>, Ca<sup>2+</sup>, Sr<sup>2+</sup>, Ba<sup>2+</sup>) oraz mocnych kwasów (Cl<sup>&minus;</sup>, Br<sup>&minus;</sup>, I<sup>&minus;</sup>, NO<sub>3</sub><sup>&minus;</sup>, ClO<sub>4</sub><sup>&minus;</sup>, SO<sub>4</sub><sup>2&minus;</sup>) nie reagują z wodą (są jonami-obserwatorami).</li>
                <li>Słabych kwasów (np. CH<sub>3</sub>COOH, H<sub>2</sub>S, HCN) oraz słabych zasad (NH<sub>3</sub>&middot;H<sub>2</sub>O) powstających w produktach hydrolizy nie rozpisujemy na jony.</li>
                <li>Jeśli jon pochodzi od wieloprotonowego słabego kwasu (np. CO<sub>3</sub><sup>2&minus;</sup>, SO<sub>3</sub><sup>2&minus;</sup>, S<sup>2&minus;</sup>, PO<sub>4</sub><sup>3&minus;</sup>) lub wielowodorotlenkowej słabej zasady (np. Cu<sup>2+</sup>, Fe<sup>2+</sup>, Al<sup>3+</sup>), hydroliza przebiega wieloetapowo, jednak na maturze <strong>wystarczy zapisać tylko pierwszy etap hydrolizy</strong>, ponieważ to on decyduje o odczynie roztworu!</li>
            </ul>

            <h4>Klasyfikacja soli i porównanie czterech typów hydrolizy</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Typ soli (pochodzenie)</th>
                            <th>Rodzaj hydrolizy</th>
                            <th>Odczyn i pH roztworu w 25&deg;C</th>
                            <th>Przykłady soli oraz równania dysocjacji i hydrolizy (I etap)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. Sól mocnego kwasu i mocnej zasady</strong></td>
                            <td><strong>Nie zachodzi</strong> (brak jonów zdolnych do reakcji z wodą)</td>
                            <td><strong>Obojętny</strong><br>(pH = 7, [H<sub>3</sub>O<sup>+</sup>] = [OH<sup>&minus;</sup>])</td>
                            <td>NaCl, KNO<sub>3</sub>, Na<sub>2</sub>SO<sub>4</sub>, BaCl<sub>2</sub>, Ca(NO<sub>3</sub>)<sub>2</sub><br>Dysocjacja: NaCl &rarr; Na<sup>+</sup> + Cl<sup>&minus;</sup></td>
                        </tr>
                        <tr>
                            <td><strong>2. Sól mocnego kwasu i słabej zasady</strong></td>
                            <td><strong>Hydroliza kationowa</strong> (z wodą reaguje wyłącznie kation słabej zasady, pełniący rolę kwasu Br&oslash;nsteda)</td>
                            <td><strong>Kwasowy</strong><br>(pH &lt; 7, [H<sub>3</sub>O<sup>+</sup>] &gt; [OH<sup>&minus;</sup>])</td>
                            <td>NH<sub>4</sub>Cl, (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>, NH<sub>4</sub>NO<sub>3</sub>, AlCl<sub>3</sub>, FeCl<sub>3</sub>, CuSO<sub>4</sub>, ZnCl<sub>2</sub><br>• Dla soli amonowych: NH<sub>4</sub>Cl &rarr; NH<sub>4</sub><sup>+</sup> + Cl<sup>&minus;</sup><br><strong>NH<sub>4</sub><sup>+</sup> + H<sub>2</sub>O &rlhar; NH<sub>3</sub> + H<sub>3</sub>O<sup>+</sup></strong> (lub: NH<sub>4</sub><sup>+</sup> + H<sub>2</sub>O &rlhar; NH<sub>3</sub>&middot;H<sub>2</sub>O + H<sup>+</sup>)<br>• Dla kationów metali (zapis uproszczony):<br><strong>Cu<sup>2+</sup> + H<sub>2</sub>O &rlhar; Cu(OH)<sup>+</sup> + H<sup>+</sup></strong> (lub z H<sub>3</sub>O<sup>+</sup>)</td>
                        </tr>
                        <tr>
                            <td><strong>3. Sól słabego kwasu i mocnej zasady</strong></td>
                            <td><strong>Hydroliza anionowa</strong> (z wodą reaguje wyłącznie anion słabego kwasu, pełniący rolę zasady Br&oslash;nsteda)</td>
                            <td><strong>Zasadowy</strong><br>(pH &gt; 7, [H<sub>3</sub>O<sup>+</sup>] &lt; [OH<sup>&minus;</sup>])</td>
                            <td>CH<sub>3</sub>COONa, NaNO<sub>2</sub>, KCN, Na<sub>2</sub>CO<sub>3</sub>, K<sub>2</sub>SO<sub>3</sub>, Na<sub>2</sub>S, K<sub>3</sub>PO<sub>4</sub><br>• Dla kwasu jednoprotonowego: CH<sub>3</sub>COONa &rarr; CH<sub>3</sub>COO<sup>&minus;</sup> + Na<sup>+</sup><br><strong>CH<sub>3</sub>COO<sup>&minus;</sup> + H<sub>2</sub>O &rlhar; CH<sub>3</sub>COOH + OH<sup>&minus;</sup></strong><br>• Dla kwasu wieloprotonowego (tylko I etap!):<br><strong>CO<sub>3</sub><sup>2&minus;</sup> + H<sub>2</sub>O &rlhar; HCO<sub>3</sub><sup>&minus;</sup> + OH<sup>&minus;</sup></strong><br><strong>PO<sub>4</sub><sup>3&minus;</sup> + H<sub>2</sub>O &rlhar; HPO<sub>4</sub><sup>2&minus;</sup> + OH<sup>&minus;</sup></strong></td>
                        </tr>
                        <tr>
                            <td><strong>4. Sól słabego kwasu i słabej zasady</strong></td>
                            <td><strong>Hydroliza kationowo-anionowa</strong> (z wodą reagują równocześnie zarówno kation, jak i anion)</td>
                            <td>Zależy od stosunku stałych dysocjacji kwasu (K<sub>a</sub>) i zasady (K<sub>b</sub>):<br>• gdy K<sub>a</sub> &gt; K<sub>b</sub> &rArr; <strong>kwasowy</strong> (pH &lt; 7)<br>• gdy K<sub>a</sub> &lt; K<sub>b</sub> &rArr; <strong>zasadowy</strong> (pH &gt; 7)<br>• gdy K<sub>a</sub> &approx; K<sub>b</sub> &rArr; <strong>obojętny</strong> (pH &approx; 7)</td>
                            <td>Równania zapisujemy jako dwa równoległe procesy:<br>NH<sub>4</sub><sup>+</sup> + H<sub>2</sub>O &rlhar; NH<sub>3</sub> + H<sub>3</sub>O<sup>+</sup> oraz A<sup>&minus;</sup> + H<sub>2</sub>O &rlhar; HA + OH<sup>&minus;</sup><br>• <strong>CH<sub>3</sub>COONH<sub>4</sub></strong> (octan amonu): K<sub>a</sub>(CH<sub>3</sub>COOH) = 1,8 &middot; 10<sup>&minus;5</sup> = K<sub>b</sub>(NH<sub>3</sub>) &rArr; odczyn <strong>obojętny</strong> (pH = 7) mimo zachodzącej hydrolizy!<br>• <strong>HCOONH<sub>4</sub></strong> (mrówczan amonu) oraz <strong>(NH<sub>4</sub>)<sub>2</sub>SO<sub>3</sub></strong>: K<sub>a</sub> &gt; K<sub>b</sub> &rArr; odczyn słabo <strong>kwasowy</strong>.<br>• <strong>(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub></strong> (węglan amonu) oraz <strong>NH<sub>4</sub>CN</strong>: K<sub>a2</sub>(HCO<sub>3</sub><sup>&minus;</sup>) &lt; K<sub>b</sub>(NH<sub>3</sub>) &rArr; odczyn słabo <strong>zasadowy</strong>.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>Hydroliza kationów z uwzględnieniem powstawania akwakompleksów (wymóg CKE – teoria Br&oslash;nsteda)</h4>
            <p>W roztworach wodnych soli metali o małym promieniu jonowym i dużym ładunku (np. Al<sup>3+</sup>, Cr<sup>3+</sup>, Fe<sup>3+</sup>, Cu<sup>2+</sup>, Zn<sup>2+</sup>, Fe<sup>2+</sup>) kationy te nie występują jako „gołe” jony, lecz ulegają hydratacji (reakcji kwasu Lewisa z zasadą Lewisa), tworząc uwodnione kationy kompleksowe – <strong>akwakompleksy</strong>, w których liczba koordynacyjna wynosi najczęściej 6:</p>
            <div class="chem-eq">[Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup>, &nbsp;[Cr(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup>, &nbsp;[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup>, &nbsp;[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>, &nbsp;[Zn(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup>, &nbsp;[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup></div>
            <p>Silnie dodatni kation centralny przyciąga elektrony z cząsteczek wody (ligandów), osłabiając w nich wiązania O&minus;H. Dzięki temu akwakompleks zachowuje się jak <strong>kwas Br&oslash;nsteda</strong> i ulega dysocjacji kwasowej (hydrolizie kationowej), oddając proton cząsteczce wody z rozpuszczalnika:</p>
            <div class="chem-eq">Etap I: [Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + H<sub>2</sub>O <span class="chem-arrow"><span class="arrow-sym">&rlhar;</span></span> [Al(H<sub>2</sub>O)<sub>5</sub>(OH)]<sup>2+</sup> + H<sub>3</sub>O<sup>+</sup></div>
            <div class="chem-eq">Etap II: [Al(H<sub>2</sub>O)<sub>5</sub>(OH)]<sup>2+</sup> + H<sub>2</sub>O <span class="chem-arrow"><span class="arrow-sym">&rlhar;</span></span> [Al(H<sub>2</sub>O)<sub>4</sub>(OH)<sub>2</sub>]<sup>+</sup> + H<sub>3</sub>O<sup>+</sup></div>
            <p>Analogicznie dla innych kationów:</p>
            <div class="chem-eq">[Cr(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + H<sub>2</sub>O <span class="chem-arrow"><span class="arrow-sym">&rlhar;</span></span> [Cr(H<sub>2</sub>O)<sub>5</sub>(OH)]<sup>2+</sup> + H<sub>3</sub>O<sup>+</sup></div>
            <div class="chem-eq">[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + H<sub>2</sub>O <span class="chem-arrow"><span class="arrow-sym">&rlhar;</span></span> [Cu(H<sub>2</sub>O)<sub>5</sub>(OH)]<sup>+</sup> + H<sub>3</sub>O<sup>+</sup></div>
            <div class="note-alert">
                💡 <strong>Uwaga maturalna:</strong> Jeżeli w zadaniu na maturze polecenie brzmi: <em>„Uzasadnij za pomocą równania reakcji zgodnego z teorią Br&oslash;nsteda-Lowry'ego kwasowy odczyn roztworu AlCl<sub>3</sub> / CuSO<sub>4</sub>”</em>, należy bezwzględnie zapisać równanie z udziałem akwakompleksu <strong>[Me(H<sub>2</sub>O)<sub>6</sub>]<sup>n+</sup></strong>, ponieważ sam jon Al<sup>3+</sup> nie posiada protonu, więc w zapisie uproszczonym nie widać, skąd pochodzi oddawany proton H<sup>+</sup>!
            </div>

            <h4>Odczyn wodnych roztworów wodorosoli (anionów amfiprotycznych) – pewniak maturalny!</h4>
            <p>Wodorosole dobrze rozpuszczalne w wodzie (np. NaH<sub>2</sub>PO<sub>4</sub>, K<sub>2</sub>HPO<sub>4</sub>, NaHCO<sub>3</sub>, NaHSO<sub>3</sub>, NaHS) dysocjują całkowicie na kation metalu oraz amfiprotyczny wodorojon. Wodorojon ten ulega w wodzie równocześnie dwóm konkurencyjnym procesom:</p>
            <ol class="note-list">
                <li><strong>Dysocjacji kwasowej</strong> (pełni funkcję kwasu Br&oslash;nsteda – oddaje proton wodzie, tworząc jony H<sub>3</sub>O<sup>+</sup>), opisywanej przez kolejną stałą dysocjacji kwasu (K<sub>a</sub>).</li>
                <li><strong>Hydrolizie anionowej / dysocjacji zasadowej</strong> (pełni funkcję zasady Br&oslash;nsteda – przyjmuje proton od wody, tworząc jony OH<sup>&minus;</sup>), opisywanej przez stałą zasadowości <strong>K<sub>b</sub> = K<sub>w</sub> / K<sub>a(poprzedniego etapu)</sub></strong>.</li>
            </ol>
            <p>O ostatecznym odczynie roztworu wodorosoli decyduje to, która stała ma większą wartość (K<sub>a</sub> czy K<sub>b</sub>):</p>
            <ul class="note-list">
                <li><strong>Przykład 1: Diwodorofosforan(V) sodu lub potasu (NaH<sub>2</sub>PO<sub>4</sub> / KH<sub>2</sub>PO<sub>4</sub>) – ODCZYN KWASOWY (pH &lt; 7):</strong>
                    <br>Dysocjacja soli: KH<sub>2</sub>PO<sub>4</sub> &rarr; K<sup>+</sup> + H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup>.
                    <br>• Równanie dysocjacji kwasowej: H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup> + H<sub>2</sub>O &rlhar; HPO<sub>4</sub><sup>2&minus;</sup> + H<sub>3</sub>O<sup>+</sup> &nbsp;&nbsp;(K<sub>a2</sub> = 6,17 &middot; 10<sup>&minus;8</sup>)
                    <br>• Równanie hydrolizy anionowej: H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup> + H<sub>2</sub>O &rlhar; H<sub>3</sub>PO<sub>4</sub> + OH<sup>&minus;</sup> &nbsp;&nbsp;(K<sub>b1</sub> = K<sub>w</sub> / K<sub>a1</sub> = 1,0 &middot; 10<sup>&minus;14</sup> / 6,92 &middot; 10<sup>&minus;3</sup> = 1,45 &middot; 10<sup>&minus;12</sup>)
                    <br>• <strong>Wniosek:</strong> Ponieważ <strong>K<sub>a2</sub> &gt; K<sub>b1</sub></strong> (6,17 &middot; 10<sup>&minus;8</sup> &gt; 1,45 &middot; 10<sup>&minus;12</sup>), w większym stopniu zachodzi dysocjacja kwasowa niż hydroliza zasadowa, stąd [H<sub>3</sub>O<sup>+</sup>] &gt; [OH<sup>&minus;</sup>] i odczyn roztworu KH<sub>2</sub>PO<sub>4</sub> jest <strong>kwasowy</strong>.
                </li>
                <li><strong>Przykład 2: Wodorofosforan(V) sodu lub potasu (Na<sub>2</sub>HPO<sub>4</sub> / K<sub>2</sub>HPO<sub>4</sub>) – ODCZYN ZASADOWY (pH &gt; 7):</strong>
                    <br>Dysocjacja soli: K<sub>2</sub>HPO<sub>4</sub> &rarr; 2 K<sup>+</sup> + HPO<sub>4</sub><sup>2&minus;</sup>.
                    <br>• Równanie dysocjacji kwasowej: HPO<sub>4</sub><sup>2&minus;</sup> + H<sub>2</sub>O &rlhar; PO<sub>4</sub><sup>3&minus;</sup> + H<sub>3</sub>O<sup>+</sup> &nbsp;&nbsp;(K<sub>a3</sub> = 4,79 &middot; 10<sup>&minus;13</sup>)
                    <br>• Równanie hydrolizy anionowej: HPO<sub>4</sub><sup>2&minus;</sup> + H<sub>2</sub>O &rlhar; H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup> + OH<sup>&minus;</sup> &nbsp;&nbsp;(K<sub>b2</sub> = K<sub>w</sub> / K<sub>a2</sub> = 1,0 &middot; 10<sup>&minus;14</sup> / 6,17 &middot; 10<sup>&minus;8</sup> = 1,62 &middot; 10<sup>&minus;7</sup>)
                    <br>• <strong>Wniosek:</strong> Ponieważ <strong>K<sub>b2</sub> &gt; K<sub>a3</sub></strong> (1,62 &middot; 10<sup>&minus;7</sup> &gt; 4,79 &middot; 10<sup>&minus;13</sup>), dominuje proces hydrolizy anionowej (zasadowej), stąd [OH<sup>&minus;</sup>] &gt; [H<sub>3</sub>O<sup>+</sup>] i odczyn roztworu K<sub>2</sub>HPO<sub>4</sub> jest <strong>zasadowy</strong>.
                </li>
            </ul>

            <div class="note-alert">
                <strong>Zestawienie odczynów najważniejszych wodorosoli na maturze (do szybkiego zapamiętania):</strong>
                <ul class="note-list" style="margin-top: 6px; margin-bottom: 0;">
                    <li><strong>Odczyn kwasowy (pH &lt; 7):</strong>
                        <br>• <strong>NaHSO<sub>4</sub></strong> (wodorosiarczan(VI) sodu) – jon HSO<sub>4</sub><sup>&minus;</sup> ulega wyłącznie dysocjacji kwasowej (K<sub>a2</sub> = 1,0 &middot; 10<sup>&minus;2</sup>), nie ulega hydrolizie!
                        <br>• <strong>NaH<sub>2</sub>PO<sub>4</sub>, KH<sub>2</sub>PO<sub>4</sub></strong> (diwodorofosforany(V)) – K<sub>a2</sub> &gt; K<sub>b</sub>.
                        <br>• <strong>NaHSO<sub>3</sub>, KHSO<sub>3</sub></strong> (wodorosiarczany(IV)) – K<sub>a2</sub>(HSO<sub>3</sub><sup>&minus;</sup>) = 6,3 &middot; 10<sup>&minus;8</sup> &gt; K<sub>b</sub> = 10<sup>&minus;14</sup> / 1,4 &middot; 10<sup>&minus;2</sup> = 7,1 &middot; 10<sup>&minus;13</sup>.
                    </li>
                    <li><strong>Odczyn zasadowy (pH &gt; 7):</strong>
                        <br>• <strong>Na<sub>2</sub>HPO<sub>4</sub>, K<sub>2</sub>HPO<sub>4</sub></strong> (wodorofosforany(V)) – K<sub>b</sub> &gt; K<sub>a3</sub>.
                        <br>• <strong>NaHCO<sub>3</sub>, KHCO<sub>3</sub></strong> (wodorowęglany, soda oczyszczona) – K<sub>b</sub> = 10<sup>&minus;14</sup> / 4,5 &middot; 10<sup>&minus;7</sup> = 2,2 &middot; 10<sup>&minus;8</sup> &gt; K<sub>a2</sub>(HCO<sub>3</sub><sup>&minus;</sup>) = 4,7 &middot; 10<sup>&minus;11</sup>.
                        <br>• <strong>NaHS, KHS</strong> (wodorosiarczki) – K<sub>b</sub> = 10<sup>&minus;14</sup> / 1,0 &middot; 10<sup>&minus;7</sup> = 1,0 &middot; 10<sup>&minus;7</sup> &gg; K<sub>a2</sub>(HS<sup>&minus;</sup>) = 1,3 &middot; 10<sup>&minus;13</sup>.
                    </li>
                </ul>
            </div>
        </div>

        <!-- SEKCJA 6 -->
        <div class="note-section">
            <h3>6. Reakcje Zobojętniania (Neutralizacji) i Miareczkowanie Alkacymetryczne</h3>
            <p><strong>Istota reakcji zobojętniania i zasady jej zapisywania w 3 formach:</strong> Reakcja zobojętniania to reakcja między kwasem a zasadą prowadząca do powstania soli i wody, której istotą jest łączenie się kationów wodoru (H<sup>+</sup> / H<sub>3</sub>O<sup>+</sup>) z anionami wodorotlenkowymi (OH<sup>&minus;</sup>) w słabo zdysocjowane cząsteczki wody. Sposób zapisu równania jonowego pełnego i skróconego zależy od mocy i rozpuszczalności użytych reagentów:</p>
            <ol class="note-list">
                <li><strong>Mocny kwas + mocna zasada &rarr; dobrze rozpuszczalna sól + woda (np. HCl + NaOH, H<sub>2</sub>SO<sub>4</sub> + 2 KOH):</strong>
                    <br>• Zapis cząsteczkowy: 2 KOH + H<sub>2</sub>SO<sub>4</sub> &rarr; K<sub>2</sub>SO<sub>4</sub> + 2 H<sub>2</sub>O
                    <br>• Zapis jonowy pełny: 2 K<sup>+</sup> + 2 OH<sup>&minus;</sup> + 2 H<sub>3</sub>O<sup>+</sup> + SO<sub>4</sub><sup>2&minus;</sup> &rarr; 2 K<sup>+</sup> + SO<sub>4</sub><sup>2&minus;</sup> + 4 H<sub>2</sub>O (lub z 2 H<sup>+</sup>)
                    <br>• Zapis jonowy skrócony: <strong>H<sub>3</sub>O<sup>+</sup> + OH<sup>&minus;</sup> &rarr; 2 H<sub>2</sub>O</strong> (lub w uproszczeniu: <strong>H<sup>+</sup> + OH<sup>&minus;</sup> &rarr; H<sub>2</sub>O</strong>)
                    <br><em>(Uwaga: Jeżeli mocny kwas i mocna zasada tworzą nierozpuszczalny osad soli, np. H<sub>2</sub>SO<sub>4</sub> + Ba(OH)<sub>2</sub> &rarr; BaSO<sub>4</sub>&darr; + 2 H<sub>2</sub>O, w zapisie jonowym nic się nie skraca poza współczynnikami!).</em>
                </li>
                <li><strong>Mocny kwas + słaba zasada (lub trudno rozpuszczalny wodorotlenek) (np. 2 HCl + Mg(OH)<sub>2</sub>, HCl + NH<sub>3</sub>&middot;H<sub>2</sub>O):</strong>
                    <br>Ponieważ słaba zasada (lub osad wodorotlenku) występuje w przewadze w formie niezdysocjowanej, w równaniu jonowym zapisujemy ją w postaci cząsteczkowej:
                    <br>• Zapis cząsteczkowy: 2 HCl + Mg(OH)<sub>2</sub> &rarr; MgCl<sub>2</sub> + 2 H<sub>2</sub>O
                    <br>• Zapis jonowy pełny: 2 H<sup>+</sup> + 2 Cl<sup>&minus;</sup> + Mg(OH)<sub>2</sub> &rarr; Mg<sup>2+</sup> + 2 Cl<sup>&minus;</sup> + 2 H<sub>2</sub>O
                    <br>• Zapis jonowy skrócony: <strong>2 H<sup>+</sup> + Mg(OH)<sub>2</sub> &rarr; Mg<sup>2+</sup> + 2 H<sub>2</sub>O</strong> (Dla wody amoniakalnej: <strong>H<sub>3</sub>O<sup>+</sup> + NH<sub>3</sub> &rarr; NH<sub>4</sub><sup>+</sup> + H<sub>2</sub>O</strong> lub <strong>H<sup>+</sup> + NH<sub>3</sub>&middot;H<sub>2</sub>O &rarr; NH<sub>4</sub><sup>+</sup> + H<sub>2</sub>O</strong>).
                </li>
                <li><strong>Słaby kwas + mocna zasada (np. 2 HNO<sub>2</sub> + Ca(OH)<sub>2</sub>, CH<sub>3</sub>COOH + NaOH):</strong>
                    <br>Słaby kwas zapisujemy w formie niezdysocjowanej (cząsteczkowej), a mocną zasadę i powstałą sól rozpuszczalną – w formie jonowej:
                    <br>• Zapis cząsteczkowy: 2 HNO<sub>2</sub> + Ca(OH)<sub>2</sub> &rarr; Ca(NO<sub>2</sub>)<sub>2</sub> + 2 H<sub>2</sub>O
                    <br>• Zapis jonowy pełny: 2 HNO<sub>2</sub> + Ca<sup>2+</sup> + 2 OH<sup>&minus;</sup> &rarr; Ca<sup>2+</sup> + 2 NO<sub>2</sub><sup>&minus;</sup> + 2 H<sub>2</sub>O
                    <br>• Zapis jonowy skrócony: <strong>HNO<sub>2</sub> + OH<sup>&minus;</sup> &rarr; NO<sub>2</sub><sup>&minus;</sup> + H<sub>2</sub>O</strong>
                </li>
                <li><strong>Słaby kwas + słaba zasada (np. CH<sub>3</sub>COOH + NH<sub>3</sub>&middot;H<sub>2</sub>O):</strong>
                    <br>Oba substraty są słabymi elektrolitami (zapis cząsteczkowej), a powstała sól (CH<sub>3</sub>COONH<sub>4</sub>) jest mocnym elektrolitem (zapis jonowy). W tym przypadku zapis jonowy pełny jest jednocześnie zapisem jonowym skróconym (brak jonów, które można by skrócić po obu stronach):
                    <div class="chem-eq">CH<sub>3</sub>COOH + NH<sub>3</sub>&middot;H<sub>2</sub>O <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> CH<sub>3</sub>COO<sup>&minus;</sup> + NH<sub>4</sub><sup>+</sup> + H<sub>2</sub>O</div>
                </li>
            </ol>

            <h4>Miareczkowanie alkacymetryczne i krzywe miareczkowania</h4>
            <ul class="note-list">
                <li><strong>Miareczkowanie alkacymetryczne</strong> to metoda analizy objętościowej służąca do dokładnego wyznaczania stężenia (lub masy) kwasu albo zasady w badanej próbce (<strong>analicie</strong>) umieszczonej w kolbie stożkowej (Erlenmeyera), poprzez stopniowe wkraplanie z biurety roztworu o dokładnie znanym stężeniu (<strong>titranta</strong>) w obecności odpowiednio dobranego wskaźnika pH.</li>
                <li><strong>Punkt równoważnikowy (PR)</strong> to teoretyczny moment miareczkowania, w którym liczba moli dodanego titranta przereagowała dokładnie stechiometrycznie z całkowitą liczbą moli oznaczanego analitu.</li>
                <li><strong>Punkt końcowy miareczkowania (PK)</strong> to obserwowany doświadczalnie moment trwałej zmiany barwy wskaźnika kwasowo-zasadowego. Aby analiza była dokładna, wskaźnik musi być dobrany tak, by jego zakres zmiany barwy pokrywał się ze skokiem pH na krzywej miareczkowania (czyli <strong>PK &approx; PR</strong>).</li>
            </ul>

            <h4>Porównanie 3 głównych wariantów miareczkowania alkacymetrycznego (pewniak z arkuszy CKE!)</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Układ miareczkowania</th>
                            <th>pH w punkcie równoważnikowym (PR) i przyczyna</th>
                            <th>Odpowiedni wskaźnik pH</th>
                            <th>Charakterystyka krzywej miareczkowania</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. Mocny kwas + mocna zasada</strong><br>(np. HCl miareczkowany NaOH lub odwrotnie)</td>
                            <td><strong>pH = 7,0 (odczyn obojętny)</strong><br>Powstaje sól mocnego kwasu i mocnej zasady (np. NaCl), która nie ulega hydrolizie.</td>
                            <td><strong>Błękit bromotymolowy</strong> (pH 6,0–7,6), ewentualnie fenoloftaleina lub oranż metylowy (ze względu na bardzo duży skok pH od ok. 4 do 10).</td>
                            <td>Krzywa symetryczna; bardzo duży, pionowy skok pH w punkcie równoważnikowym.</td>
                        </tr>
                        <tr>
                            <td><strong>2. Słaby kwas miareczkowany mocną zasadą</strong><br>(np. CH<sub>3</sub>COOH miareczkowany NaOH)</td>
                            <td><strong>pH &gt; 7,0 (odczyn zasadowy, zwykle pH &approx; 8,5–9,0)</strong><br>W PR w roztworze znajduje się wyłącznie sól słabego kwasu i mocnej zasady (CH<sub>3</sub>COONa), która ulega hydrolizie anionowej: CH<sub>3</sub>COO<sup>&minus;</sup> + H<sub>2</sub>O &rlhar; CH<sub>3</sub>COOH + OH<sup>&minus;</sup>.</td>
                            <td><strong>Fenoloftaleina</strong> (pH 8,2–10,0).<br><em>(Użycie oranżu metylowego jest błędem – zmieniłby barwę znacznie przed PR!).</em></td>
                            <td>Początkowe pH wyższe niż dla mocnego kwasu; przed PR krzywa wypłaszcza się (tworzy się bufor octanowy); skok pH jest mniejszy i przesunięty w górę (pH &gt; 7).</td>
                        </tr>
                        <tr>
                            <td><strong>3. Słaba zasada miareczkowana mocnym kwasem</strong><br>(np. NH<sub>3</sub> miareczkowany HCl)</td>
                            <td><strong>pH &lt; 7,0 (odczyn kwasowy, zwykle pH &approx; 5,0–5,5)</strong><br>W PR w roztworze znajduje się wyłącznie sól mocnego kwasu i słabej zasady (NH<sub>4</sub>Cl), która ulega hydrolizie kationowej: NH<sub>4</sub><sup>+</sup> + H<sub>2</sub>O &rlhar; NH<sub>3</sub> + H<sub>3</sub>O<sup>+</sup>.</td>
                            <td><strong>Oranż metylowy</strong> (pH 3,1–4,4) lub czerwień metylowa.<br><em>(Użycie fenoloftaleiny jest błędem – odbarwiłaby się zbyt wcześnie!).</em></td>
                            <td>Skok pH przesunięty w obszar kwasowy (pH &lt; 7).</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="note-alert danger">
                ⚠️ <strong>Uwaga maturalna:</strong> Częstym podchwytliwym pytaniem na maturze jest: <em>„Czy zmieszanie równomolowych ilości kwasu i zasady zawsze daje roztwór o odczynie obojętnym (pH = 7)?”</em>. Odpowiedź brzmi: <strong>NIE</strong>, dzieje się tak tylko dla mocnego kwasu i mocnej zasady lub gdy K<sub>a</sub> = K<sub>b</sub>. W pozostałych przypadkach po całkowitym zobojętnieniu o odczynie roztworu decyduje hydroliza powstałej soli!
            </div>
        </div>

        <!-- SEKCJA 7 -->
        <div class="note-section">
            <h3>7. Roztwory Buforowe (Bufory pH) – Częsty Temat ze Wstępem Teoretycznym na Maturze</h3>
            <p>Mimo że roztwory buforowe nie są wymienione wprost w podstawie programowej, regularnie pojawiają się w arkuszach CKE jako zadania z informacją wprowadzającą (oparte na prawie działania mas, regule przekory i teorii Br&oslash;nsteda).</p>
            <p><strong>Definicja i skład roztworów buforowych:</strong> Roztwory buforowe to mieszaniny utrzymujące niemal stałą wartość pH pomimo dodania do nich niewielkich ilości mocnego kwasu lub mocnej zasady, a także podczas rozcieńczania wodą. Każdy bufor składa się ze <strong>sprzężonej pary kwas–zasada Br&oslash;nsteda</strong> występującej w porównywalnych, dużych stężeniach:</p>
            <ol class="note-list">
                <li><strong>Bufory kwasowe:</strong> słaby kwas + sól tego kwasu z mocną zasadą, np. <strong>bufor octanowy</strong> (CH<sub>3</sub>COOH / CH<sub>3</sub>COO<sup>&minus;</sup>), <strong>bufor węglanowy</strong> (H<sub>2</sub>CO<sub>3</sub> / HCO<sub>3</sub><sup>&minus;</sup> – główny bufor krwi człowieka utrzymujący pH &approx; 7,4), <strong>bufor fosforanowy</strong> (H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup> / HPO<sub>4</sub><sup>2&minus;</sup> – główny bufor wewnątrzkomórkowy).</li>
                <li><strong>Bufory zasadowe:</strong> słaba zasada + sól tej zasady z mocnym kwasem, np. <strong>bufor amonowy</strong> (NH<sub>3</sub> / NH<sub>4</sub><sup>+</sup>).</li>
            </ol>

            <h4>Mechanizm działania buforu (jak zapisywać równania na maturze)</h4>
            <p>W buforze octanowym obok siebie występują w dużych stężeniach niezdysocjowane cząsteczki kwasu CH<sub>3</sub>COOH (kwas Br&oslash;nsteda, „rezerwuar protonów”) oraz aniony octanowe CH<sub>3</sub>COO<sup>&minus;</sup> z całkowitej dysocjacji CH<sub>3</sub>COONa (zasada Br&oslash;nsteda, „pochłaniacz protonów”):</p>
            <ul class="note-list">
                <li><strong>Po dodaniu niewielkiej ilości mocnego kwasu (jonów H<sub>3</sub>O<sup>+</sup> / H<sup>+</sup>):</strong> wprowadzone jony H<sub>3</sub>O<sup>+</sup> są natychmiast wiązane przez zasadowy składnik buforu (CH<sub>3</sub>COO<sup>&minus;</sup>) w słabo zdysocjowany kwas octowy, przez co pH niemal nie maleje:
                    <div class="chem-eq">CH<sub>3</sub>COO<sup>&minus;</sup> + H<sub>3</sub>O<sup>+</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> CH<sub>3</sub>COOH + H<sub>2</sub>O</div>
                </li>
                <li><strong>Po dodaniu niewielkiej ilości mocnej zasady (jonów OH<sup>&minus;</sup>):</strong> wprowadzone jony OH<sup>&minus;</sup> są natychmiast zobojętniane przez kwasowy składnik buforu (CH<sub>3</sub>COOH), przez co pH niemal nie rośnie:
                    <div class="chem-eq">CH<sub>3</sub>COOH + OH<sup>&minus;</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> CH<sub>3</sub>COO<sup>&minus;</sup> + H<sub>2</sub>O</div>
                </li>
            </ul>

            <h4>Obliczanie pH buforu (ze stałej dysocjacji oraz równania Hendersona-Hasselbalcha)</h4>
            <p>Przekształcając wyrażenie na stałą dysocjacji słabego kwasu K<sub>a</sub> = ([H<sub>3</sub>O<sup>+</sup>] &middot; [A<sup>&minus;</sup>]) / [HA], otrzymujemy bezpośredni wzór na stężenie jonów oksoniowych w buforze:</p>
            <div class="chem-eq"><strong>[H<sub>3</sub>O<sup>+</sup>] = K<sub>a</sub> &middot; (C<sub>kwasu</sub> / C<sub>soli</sub>) = K<sub>a</sub> &middot; (n<sub>kwasu</sub> / n<sub>soli</sub>)</strong> &nbsp;&rArr;&nbsp; <strong>pH = pK<sub>a</sub> + log(C<sub>soli</sub> / C<sub>kwasu</sub>)</strong></div>
            <p>Analogicznie dla buforu zasadowego (np. amonowego):</p>
            <div class="chem-eq"><strong>[OH<sup>&minus;</sup>] = K<sub>b</sub> &middot; (C<sub>zasady</sub> / C<sub>soli</sub>) = K<sub>b</sub> &middot; (n<sub>NH<sub>3</sub></sub> / n<sub>NH<sub>4</sub><sup>+</sup></sub>)</strong></div>
            <p><em>(Uwaga: W ułamku C<sub>kwasu</sub> / C<sub>soli</sub> objętość roztworu się skraca, dlatego można podstawiać bezpośrednio liczbę moli obu składników! Stąd wynika też, że <strong>rozcieńczanie buforu wodą nie zmienia stosunku n<sub>kwasu</sub> / n<sub>soli</sub>, a więc nie zmienia jego pH</strong>!).</em></p>
        </div>

        <!-- SEKCJA 8 -->
        <div class="note-section">
            <h3>8. Reakcje Strącania Osadów i Iloczyn Rozpuszczalności (K<sub>so</sub>)</h3>
            <p><strong>Zasady projektowania reakcji strąceniowych (otrzymywania osadów soli i wodorotlenków):</strong> Reakcje strąceniowe to praktycznie nieodwracalne reakcje wymiany podwójnej między jonami w roztworze wodnym, prowadzące do wydzielenia trudno rozpuszczalnego osadu (oznaczanego strzałką w dół &darr;).</p>
            <ul class="note-list">
                <li><strong>Podział substancji ze względu na rozpuszczalność w wodzie:</strong>
                    <br>• <strong>Dobrze rozpuszczalne (R):</strong> rozpuszczalność &gt; 1 g / 100 g H<sub>2</sub>O.
                    <br>• <strong>Trudno (średnio) rozpuszczalne (T):</strong> rozpuszczalność od 0,1 g do 1 g / 100 g H<sub>2</sub>O (np. Ca(OH)<sub>2</sub>, CaSO<sub>4</sub>, PbCl<sub>2</sub>).
                    <br>• <strong>Praktycznie nierozpuszczalne (N):</strong> rozpuszczalność &lt; 0,1 g / 100 g H<sub>2</sub>O.
                </li>
                <li><strong>Reguły doboru substratów na maturze:</strong>
                    <ol class="note-list">
                        <li>Aby strącić osad trudno rozpuszczalnej soli lub wodorotlenku, <strong>oba wyjściowe substraty muszą być dobrze rozpuszczalne w wodzie</strong> (aby dostarczyły odpowiednich jonów do roztworu), a drugi produkt powinien być dobrze rozpuszczalny lub lotny.</li>
                        <li>Chcąc strącić osad wodorotlenku (np. Cu(OH)<sub>2</sub>&darr;, Al(OH)<sub>3</sub>&darr;, Fe(OH)<sub>3</sub>&darr;), do roztworu dobrze rozpuszczalnej soli danego metalu (np. azotanu(V), chlorku, siarczanu(VI)) dodajemy mocną zasadę (np. NaOH, KOH):
                            <div class="chem-eq">CuSO<sub>4</sub> + 2 KOH <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> Cu(OH)<sub>2</sub>&darr; + K<sub>2</sub>SO<sub>4</sub> &nbsp;&nbsp;(zapis jonowy skrócony: Cu<sup>2+</sup> + 2 OH<sup>&minus;</sup> &rarr; Cu(OH)<sub>2</sub>&darr;)</div>
                        </li>
                        <li>Nie stosuje się słabych kwasów (np. H<sub>2</sub>S, H<sub>2</sub>CO<sub>3</sub>) ani słabych zasad do strącania większości osadów, ponieważ dają one zbyt małe stężenie anionów w roztworze. Zamiast kwasu H<sub>2</sub>S czy H<sub>2</sub>CO<sub>3</sub> należy użyć dobrze rozpuszczalnej soli sodowej lub potasowej: <strong>Na<sub>2</sub>S, K<sub>2</sub>S, Na<sub>2</sub>CO<sub>3</sub>, K<sub>3</sub>PO<sub>4</sub></strong>.
                            <br>• <strong>Wyjątek maturalny dla H<sub>2</sub>S:</strong> Gazowy H<sub>2</sub>S (woda siarkowodorowa) strąca z roztworów soli wyłącznie te siarczki, które mają ekstremalnie mały iloczyn rozpuszczalności i nie rozpuszczają się w rozcieńczonych mocnych kwasach: <strong>CuS&darr;, PbS&darr;, Ag<sub>2</sub>S&darr;, HgS&darr;, CdS&darr;</strong> (np. CuSO<sub>4</sub> + H<sub>2</sub>S &rarr; CuS&darr; + H<sub>2</sub>SO<sub>4</sub>). Nie strąci natomiast FeS, ZnS ani MnS (do ich strącenia trzeba użyć Na<sub>2</sub>S)!
                            <br>• <strong>Wyjątek dla Ag<sub>2</sub>O i HgO:</strong> Wodorotlenki srebra(I) i rtęci(II) są nietrwałe i natychmiast ulegają rozkładowi na tlenki, dlatego po dodaniu NaOH (lub NH<sub>3(aq)</sub>) do AgNO<sub>3</sub> strąca się brunatny osad Ag<sub>2</sub>O&darr;: <strong>2 Ag<sup>+</sup> + 2 OH<sup>&minus;</sup> &rarr; Ag<sub>2</sub>O&darr; + H<sub>2</sub>O</strong>.
                        </li>
                        <li><strong>Uwaga formalna CKE:</strong> Strzałkę w dół (&darr;) piszemy <strong>wyłącznie przy produkcie</strong>, który wytrąca się w postaci osadu z roztworu. Nigdy nie piszemy strzałki przy substracie, nawet jeśli wiemy, że jest to substancja nierozpuszczalna w wodzie (np. w reakcji roztwarzania osadu w kwasie: CaCO<sub>3</sub> + 2 H<sup>+</sup> &rarr; Ca<sup>2+</sup> + CO<sub>2</sub>&uarr; + H<sub>2</sub>O).</li>
                    </ol>
                </li>
            </ul>

            <h4>Zestawienie najważniejszych barw i cech charakterystycznych osadów na maturze</h4>
            <div class="table-responsive">
                <table class="note-table">
                    <thead>
                        <tr>
                            <th>Jon identyfikowany</th>
                            <th>Wzór osadu</th>
                            <th>Barwa i postać osadu oraz kluczowe reakcje na maturze</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Cl<sup>&minus;</sup> (chlorki)</strong></td>
                            <td>AgCl&darr;</td>
                            <td><strong>Biały, serowaty osad</strong>, który pod wpływem światła ciemnieje (szarzeje/fioletowieje) wskutek reakcji fotochemicznej rozkładu do metalicznego srebra (2 AgCl &rarr; 2 Ag + Cl<sub>2</sub>). Rozpuszcza się w wodzie amoniakalnej, tworząc bezbarwny kompleks diaminasrebra(I): AgCl + 2 NH<sub>3</sub> &rarr; [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> + Cl<sup>&minus;</sup>.</td>
                        </tr>
                        <tr>
                            <td><strong>Br<sup>&minus;</sup> (bromki)</strong></td>
                            <td>AgBr&darr;</td>
                            <td><strong>Żółto-kremowy (jasnożółty) osad</strong>, ciemniejący na świetle; trudno rozpuszczalny w rozcieńczonym NH<sub>3</sub>.</td>
                        </tr>
                        <tr>
                            <td><strong>I<sup>&minus;</sup> (jodki)</strong></td>
                            <td>AgI&darr;<br>PbI<sub>2</sub>&darr;</td>
                            <td>• <strong>AgI</strong> – <strong>żółty osad</strong>, całkowicie nierozpuszczalny w wodzie amoniakalnej.<br>• <strong>PbI<sub>2</sub></strong> – <strong>intensywnie żółty (złocistożółty), krystaliczny osad</strong> („złoty deszcz”).</td>
                        </tr>
                        <tr>
                            <td><strong>SO<sub>4</sub><sup>2&minus;</sup> / Ba<sup>2+</sup></strong></td>
                            <td>BaSO<sub>4</sub>&darr;<br>PbSO<sub>4</sub>&darr;</td>
                            <td><strong>Biały, drobnokrystaliczny (ciężki) osad</strong>, nierozpuszczalny ani w kwasach (nawet stężonych), ani w zasadach.</td>
                        </tr>
                        <tr>
                            <td><strong>CO<sub>3</sub><sup>2&minus;</sup> / SO<sub>3</sub><sup>2&minus;</sup> / PO<sub>4</sub><sup>3&minus;</sup></strong></td>
                            <td>CaCO<sub>3</sub>&darr;, BaCO<sub>3</sub>&darr;<br>Ag<sub>3</sub>PO<sub>4</sub>&darr;</td>
                            <td>• Węglany i siarczany(IV) wapnia/baru – <strong>białe osady</strong>, łatwo rozpuszczalne w mocnych kwasach z wydzieleniem gazu (CO<sub>2</sub>&uarr; lub SO<sub>2</sub>&uarr;).<br>• <strong>Ag<sub>3</sub>PO<sub>4</sub></strong> – <strong>żółty osad</strong> (odróżnia fosforany(V) od białych osadów AgCl).</td>
                        </tr>
                        <tr>
                            <td><strong>S<sup>2&minus;</sup> (siarczki)</strong></td>
                            <td>PbS&darr;, CuS&darr;, Ag<sub>2</sub>S&darr;<br>CdS&darr;<br>MnS&darr;<br>ZnS&darr;</td>
                            <td>• <strong>PbS, CuS, Ag<sub>2</sub>S, FeS, HgS</strong> – <strong>czarne osady</strong> (reakcja wykrywania Pb<sup>2+</sup> lub S<sup>2&minus;</sup>).<br>• <strong>CdS</strong> – <strong>żółty osad</strong>.<br>• <strong>MnS</strong> – <strong>cielisty (jasnoróżowy) osad</strong>.<br>• <strong>ZnS</strong> – <strong>biały osad</strong> (jedyny biały siarczek metalu na maturze!).</td>
                        </tr>
                        <tr>
                            <td><strong>Cu<sup>2+</sup></strong></td>
                            <td>Cu(OH)<sub>2</sub>&darr;</td>
                            <td><strong>Niebieski, galaretowaty osad</strong>. Podczas ogrzewania czernieje (Cu(OH)<sub>2</sub> &rarr; CuO&darr; + H<sub>2</sub>O). Rozpuszcza się w stężonym NH<sub>3(aq)</sub> (tworząc szafirowy kompleks [Cu(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>) oraz w alkoholach polihydroksylowych (szafirowy roztwór).</td>
                        </tr>
                        <tr>
                            <td><strong>Al<sup>3+</sup>, Zn<sup>2+</sup>, Be<sup>2+</sup>, Pb<sup>2+</sup></strong></td>
                            <td>Al(OH)<sub>3</sub>&darr;, Zn(OH)<sub>2</sub>&darr;</td>
                            <td><strong>Białe, galaretowate (koloidalne) osady amfoteryczne</strong>. Roztwarzają się zarówno w mocnych kwasach, jak i w nadmiarze mocnej zasady (tworząc bezbarwne hydroksokompleksy, np. [Al(OH)<sub>4</sub>]<sup>&minus;</sup>, [Zn(OH)<sub>4</sub>]<sup>2&minus;</sup>). Zn(OH)<sub>2</sub> rozpuszcza się również w wodzie amoniakalnej, a Al(OH)<sub>3</sub> – nie!</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4>Iloczyn rozpuszczalności (K<sub>so</sub>) i rozpuszczalność molowa (S) – algorytmy obliczeniowe i reguły strącania</h4>
            <ul class="note-list">
                <li><strong>Definicja i wzór:</strong> W nasyconym roztworze trudno rozpuszczalnego elektrolitu (nad osadem) ustala się stan równowagi chemicznej między stałym osadem a jonami w roztworze. Dla ogólnej reakcji dysocjacji soli A<sub>n</sub>B<sub>m</sub> &rlhar; n A<sup>m+</sup> + m B<sup>n&minus;</sup>, <strong>iloczyn rozpuszczalności</strong> wyraża się wzorem:
                    <div class="chem-eq"><strong>K<sub>so</sub> = [A<sup>m+</sup>]<sup>n</sup> &middot; [B<sup>n&minus;</sup>]<sup>m</sup></strong> &nbsp;&nbsp;(gdzie stężenia jonów są stężeniami w roztworze nasyconym)</div>
                </li>
                <li><strong>Kryterium strącania osadu (iloczyn jonowy K<sub>j</sub>):</strong> Aby przewidzieć, czy po zmieszaniu dwóch roztworów wytrąci się osad, oblicza się tzw. <strong>iloczyn jonowy (K<sub>j</sub>)</strong> dla stężeń jonów tuż po zmieszaniu (z uwzględnieniem nowej, sumarycznej objętości). Wyrażenie na K<sub>j</sub> ma identyczną postać jak na K<sub>so</sub>:
                    <br>• <strong>K<sub>j</sub> &lt; K<sub>so</sub></strong> &rarr; roztwór jest nienasycony, <strong>osad nie wytrąca się</strong> (a jeśli był w układzie – ulega rozpuszczeniu).
                    <br>• <strong>K<sub>j</sub> = K<sub>so</sub></strong> &rarr; roztwór jest dokładnie nasycony (stan równowagi).
                    <br>• <strong>K<sub>j</sub> &gt; K<sub>so</sub></strong> &rarr; roztwór jest przesycony, <strong>następuje wytrącenie osadu</strong> aż do momentu, gdy stężenia jonów spadną do poziomu wyznaczonego przez K<sub>so</sub>.
                </li>
                <li><strong>Zależność K<sub>so</sub> od rozpuszczalności molowej (S):</strong> Zależność ta zależy od stechiometrii osadu. Przykładowo dla węglanu srebra(I) Ag<sub>2</sub>CO<sub>3</sub> &rlhar; 2 Ag<sup>+</sup> + CO<sub>3</sub><sup>2&minus;</sup> stężenia jonów wynoszą [Ag<sup>+</sup>] = 2S oraz [CO<sub>3</sub><sup>2&minus;</sup>] = S, co daje wzór K<sub>so</sub> = (2S)<sup>2</sup> &middot; S = 4S<sup>3</sup>:
                    <br>• <strong>Typ 1:1</strong> (np. AgCl, BaSO<sub>4</sub>): <strong>K<sub>so</sub> = S<sup>2</sup> &rArr; S = &radic;K<sub>so</sub></strong>
                    <br>• <strong>Typ 1:2 lub 2:1</strong> (np. PbCl<sub>2</sub>, Ag<sub>2</sub>CO<sub>3</sub>): <strong>K<sub>so</sub> = 4S<sup>3</sup> &rArr; S = &#8731;(K<sub>so</sub> / 4)</strong>
                    <br>• <strong>Typ 1:3 lub 3:1</strong> (np. Al(OH)<sub>3</sub>): <strong>K<sub>so</sub> = 27S<sup>4</sup> &rArr; S = &#8732;(K<sub>so</sub> / 27)</strong>
                    <br>• <em>Uwaga maturalna:</em> Porównywać rozpuszczalność dwóch różnych soli wyłącznie na podstawie samej wartości K<sub>so</sub> (bez liczenia S) można tylko wtedy, gdy mają one <strong>identyczną stechiometrię</strong> (np. AgCl i AgBr).
                </li>
            </ul>
        </div>

        <!-- SEKCJA 9 -->
        <div class="note-section">
            <h3>9. Klasyczne Reakcje w Roztworach Wodnych (Wypieranie Kwasów i Zasad)</h3>
            <p>Tematyka ta stanowi naturalny pomost między chemią roztworów wodnych (Dział 6) a systematyką związków nieorganicznych (Dział 7) i jest absolutnym pewniakiem maturalnym.</p>

            <h4>Wypieranie kwasów słabszych, nietrwałych lub lotnych z ich soli przez mocniejsze kwasy</h4>
            <p>Zgodnie z regułą, mocniejszy kwas wypiera słabszy kwas z jego soli. Przebieg tych reakcji często wiąże się z charakterystycznymi obserwacjami (wydzielanie gazu lub osadu):</p>
            <ul class="note-list">
                <li><strong>Węglany i wodorowęglany + mocny kwas:</strong> Kwas węglowy jest nietrwały i natychmiast rozkłada się na tlenek węgla(IV) i wodę. Obserwujemy burzliwe wydzielanie bezbarwnego, bezwonnego gazu, który powoduje mętnienie wody wapiennej:
                    <div class="chem-eq">CaCO<sub>3</sub> + 2 H<sup>+</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> Ca<sup>2+</sup> + CO<sub>2</sub>&uarr; + H<sub>2</sub>O &nbsp;&nbsp;oraz&nbsp;&nbsp; HCO<sub>3</sub><sup>&minus;</sup> + H<sup>+</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> CO<sub>2</sub>&uarr; + H<sub>2</sub>O</div>
                </li>
                <li><strong>Siarczany(IV) + mocny kwas:</strong> Wydziela się tlenek siarki(IV) – bezbarwny gaz o ostrym, duszącym zapachu, który m.in. odbarwia wodę bromową i fioletowy roztwór KMnO<sub>4</sub>:
                    <div class="chem-eq">SO<sub>3</sub><sup>2&minus;</sup> + 2 H<sup>+</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> SO<sub>2</sub>&uarr; + H<sub>2</sub>O</div>
                </li>
                <li><strong>Siarczki + mocny kwas nieutleniający (np. HCl):</strong> Wydziela się siarkowodór – trujący gaz o zapachu zgniłych jaj <em>(uwaga: z kwasami reagują tylko siarczki dobrze rozpuszczalne, np. Na<sub>2</sub>S, oraz niektóre osady, np. FeS, ZnS, MnS. Osady takie jak CuS czy Ag<sub>2</sub>S w HCl się nie roztworzą!)</em>:
                    <div class="chem-eq">FeS + 2 H<sup>+</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> Fe<sup>2+</sup> + H<sub>2</sub>S&uarr;</div>
                </li>
                <li><strong>Krzemiany + mocny kwas (lub nawet CO<sub>2</sub> z wodą!):</strong> Z roztworów soli kwasu krzemowego (np. szkła wodnego Na<sub>2</sub>SiO<sub>3</sub>) wypierany jest kwas krzemowy, który wytrąca się w postaci białego, galaretowatego osadu:
                    <div class="chem-eq">SiO<sub>3</sub><sup>2&minus;</sup> + 2 H<sup>+</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> H<sub>2</sub>SiO<sub>3</sub>&darr;</div>
                </li>
                <li><strong>Szereg mocy kwasów organicznych i nieorganicznych na maturze:</strong> <strong>CH<sub>3</sub>COOH &gt; H<sub>2</sub>CO<sub>3</sub> &gt; fenol (C<sub>6</sub>H<sub>5</sub>OH) &gt; HCO<sub>3</sub><sup>&minus;</sup></strong>. Wprowadzenie gazowego CO<sub>2</sub> do roztworu fenolanu sodu powoduje zmętnienie, ponieważ kwas węglowy wypiera słabo rozpuszczalny fenol:
                    <div class="chem-eq">C<sub>6</sub>H<sub>5</sub>O<sup>&minus;</sup> + CO<sub>2</sub> + H<sub>2</sub>O <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> C<sub>6</sub>H<sub>5</sub>OH&darr; + HCO<sub>3</sub><sup>&minus;</sup></div>
                </li>
            </ul>

            <h4>Wypieranie słabych i lotnych zasad z ich soli przez mocne zasady</h4>
            <p>Najważniejszym przykładem maturalnym jest wypieranie amoniaku z soli amonowych pod wpływem mocnych wodorotlenków (np. NaOH, KOH, Ca(OH)<sub>2</sub>):</p>
            <ul class="note-list">
                <li>Po zmieszaniu substratów i lekkim ogrzaniu probówki wydziela się amoniak – gaz o charakterystycznym, ostrym zapachu.</li>
                <li>Gaz ten barwi uprzednio zwilżony wodą destylowaną papierek wskaźnikowy na kolor zielono-niebieski (co dowodzi jego zasadowego charakteru):
                    <div class="chem-eq">NH<sub>4</sub><sup>+</sup> + OH<sup>&minus;</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> NH<sub>3</sub>&uarr; + H<sub>2</sub>O</div>
                </li>
            </ul>
        </div>
    </div>
    `,

    notatkiActive: `
    <div class="notes-wrapper">
        <h2 class="notes-main-title">🧠 ACTIVE RECALL: REAKCJE W ROZTWORACH WODNYCH</h2>
        <p style="text-align: center; color: #94a3b8; font-size: 13px; margin-bottom: 20px;">
            💡 <em>Klikaj na ciemne pola, aby odkryć ukryte wzory, stałe równowagi, barwy wskaźników i równania reakcji, oraz rozwijaj pytania kontrolne!</em>
        </p>

        <!-- ACTIVE RECALL SEKCJA 1 -->
        <div class="note-section">
            <h3>1. Dysocjacja, Moc Elektrolitów i Teorie Kwasów oraz Zasad</h3>
            <p>Kwas ortofosforowy(V) (H<sub>3</sub>PO<sub>4</sub>) jest kwasem trójprotonowym, a stężenia równowagowe drobin w jego roztworze wodnym maleją w szeregu: <span class="recall-blank" onclick="toggleRecall(this)">[H<sub>3</sub>PO<sub>4</sub>] &gt; [H<sub>3</sub>O<sup>+</sup>] &gt; [H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup>] &gg; [HPO<sub>4</sub><sup>2&minus;</sup>] &gg; [PO<sub>4</sub><sup>3&minus;</sup>]</span>.</p>
            <p>Kwas fosforowy(III) (H<sub>3</sub>PO<sub>3</sub>, fosfonowy) jest kwasem <span class="recall-blank" onclick="toggleRecall(this)">dwuprotonowym</span>, a kwas fosforowy(I) (H<sub>3</sub>PO<sub>2</sub>, fosfinowy) jest kwasem <span class="recall-blank" onclick="toggleRecall(this)">jednoprotonowym</span>, ponieważ atomy wodoru połączone bezpośrednio z fosforem (P&minus;H) nie odszczepiają się w wodzie.</p>
            <p>Dla sprzężonej pary kwas–zasada Br&oslash;nsteda w temperaturze 25&deg;C iloczyn K<sub>a</sub> &middot; K<sub>b</sub> wynosi <span class="recall-blank" onclick="toggleRecall(this)">K<sub>w</sub> = 1,0 &middot; 10<sup>&minus;14</sup> (pK<sub>a</sub> + pK<sub>b</sub> = 14)</span>.</p>

            <details class="recall-details">
                <summary><span>Dlaczego aniony H<sub>2</sub>PO<sub>2</sub><sup>&minus;</sup> oraz HPO<sub>3</sub><sup>2&minus;</sup> NIE są amfiprotyczne (w przeciwieństwie do H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup> i HPO<sub>4</sub><sup>2&minus;</sup>)?</span></summary>
                <p>Ponieważ pozostałe w nich atomy wodoru są połączone bezpośrednio z atomem fosforu (wiązania P&minus;H) i nie ulegają odszczepieniu w postaci kationów H<sup>+</sup>. Jony H<sub>2</sub>PO<sub>2</sub><sup>&minus;</sup> i HPO<sub>3</sub><sup>2&minus;</sup> pełnią w wodzie <strong>wyłącznie funkcję zasad Br&oslash;nsteda</strong> (akceptorów protonu).</p>
            </details>

            <details class="recall-details">
                <summary><span>Czym różni się definicja kwasu i zasady w teorii Br&oslash;nsteda-Lowry'ego od teorii Lewisa?</span></summary>
                <ul class="note-list">
                    <li><strong>Teoria Br&oslash;nsteda-Lowry'ego:</strong> Kwas to donor (dawca) protonu H<sup>+</sup>, a zasada to akceptor (biorca) protonu H<sup>+</sup>.</li>
                    <li><strong>Teoria Lewisa:</strong> Kwas to akceptor pary elektronowej (posiada pusty orbital walencyjny, np. Al<sup>3+</sup>, Cu<sup>2+</sup>, BF<sub>3</sub>), a zasada to donor wolnej pary elektronowej (np. NH<sub>3</sub>, H<sub>2</sub>O, OH<sup>&minus;</sup>, Cl<sup>&minus;</sup>).</li>
                </ul>
            </details>
        </div>

        <!-- ACTIVE RECALL SEKCJA 2 -->
        <div class="note-section">
            <h3>2. Prawo Rozcieńczeń Ostwalda, Efekt Wspólnego Jonu i Moc Kwasów</h3>
            <p>Pełna postać prawa rozcieńczeń Ostwalda wyraża się wzorem: K = <span class="recall-blank" onclick="toggleRecall(this)">(&alpha;<sup>2</sup> &middot; C<sub>0</sub>) / (1 &minus; &alpha;)</span>. Wzór uproszczony K &approx; &alpha;<sup>2</sup> &middot; C<sub>0</sub> można stosować, gdy spełniony jest warunek <span class="recall-blank" onclick="toggleRecall(this)">&alpha; &le; 5% (&alpha; &le; 0,05)</span> lub <span class="recall-blank" onclick="toggleRecall(this)">C<sub>0</sub> / K &ge; 400</span>.</p>
            <p>Aby zwiększyć stopień dysocjacji bardzo słabego elektrolitu n-krotnie, należy rozcieńczyć jego roztwór <span class="recall-blank" onclick="toggleRecall(this)">n<sup>2</sup>-krotnie</span>.</p>
            <p>Dodanie stałego octanu sodu (CH<sub>3</sub>COONa) do roztworu kwasu octowego (CH<sub>3</sub>COOH) powoduje przesunięcie równowagi dysocjacji w <span class="recall-blank" onclick="toggleRecall(this)">lewo (cofnięcie dysocjacji)</span>, spadek stopnia dysocjacji &alpha; oraz <span class="recall-blank" onclick="toggleRecall(this)">wzrost wartości pH</span>.</p>

            <details class="recall-details">
                <summary><span>Uszereguj podane związki według rosnącej zasadowości w wodzie: amoniak (NH<sub>3</sub>), anilina (C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>), dimetyloamina ((CH<sub>3</sub>)<sub>2</sub>NH), metyloamina (CH<sub>3</sub>NH<sub>2</sub>) i uzasadnij kolejność.</span></summary>
                <p><strong>C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> &ll; NH<sub>3</sub> &lt; CH<sub>3</sub>NH<sub>2</sub> &lt; (CH<sub>3</sub>)<sub>2</sub>NH</strong>.<br>
                W aminach alifatycznych grupy alkilowe wywierają dodatni efekt indukcyjny (zwiększają gęstość elektronową na atomie N, ułatwiając przyłączenie H<sup>+</sup>), natomiast w anilinie wolna para elektronowa azotu ulega delokalizacji (sprzężeniu) z elektronami &pi; pierścienia benzenowego.</p>
            </details>
        </div>

        <!-- ACTIVE RECALL SEKCJA 3 I 4 -->
        <div class="note-section">
            <h3>3. Iloczyn Jonowy Wody, Skala pH, Wskaźniki i Rozcieńczanie</h3>
            <p>Autodysocjacja wody jest procesem <span class="recall-blank" onclick="toggleRecall(this)">endoenergetycznym (&Delta;H &gt; 0)</span>, dlatego wraz ze wzrostem temperatury wartość K<sub>w</sub> <span class="recall-blank" onclick="toggleRecall(this)">rośnie</span>. W temperaturze 60&deg;C (K<sub>w</sub> = 1,0 &middot; 10<sup>&minus;13</sup>) czysta woda ma pH = <span class="recall-blank" onclick="toggleRecall(this)">6,5</span>, a jej odczyn jest <span class="recall-blank" onclick="toggleRecall(this)">obojętny (bo [H<sub>3</sub>O<sup>+</sup>] = [OH<sup>&minus;</sup>])</span>.</p>
            <p>100-krotne rozcieńczenie wodą mocnego kwasu (np. HCl o pH = 2) powoduje wzrost pH o <span class="recall-blank" onclick="toggleRecall(this)">2 jednostki (do pH = 4)</span>, natomiast 100-krotne rozcieńczenie bardzo słabego kwasu (np. CH<sub>3</sub>COOH) powoduje wzrost pH o <span class="recall-blank" onclick="toggleRecall(this)">1 jednostkę</span>.</p>

            <details class="recall-details">
                <summary><span>Dlaczego fenoloftaleina nie odróżni roztworu kwasowego od obojętnego, a oranż metylowy nie odróżni roztworu obojętnego od zasadowego?</span></summary>
                <ul class="note-list">
                    <li><strong>Fenoloftaleina (zakres zmiany barwy pH 8,2–10,0):</strong> Zarówno w środowisku kwasowym, jak i obojętnym jest <strong>bezbarwna</strong> (barwę malinową przyjmuje dopiero w zasadach).</li>
                    <li><strong>Oranż metylowy (zakres zmiany barwy pH 3,1–4,4):</strong> Zarówno w środowisku obojętnym, jak i zasadowym przyjmuje taką samą <strong>żółtą (żółtopomarańczową)</strong> barwę (czerwony jest tylko w kwasach o pH &lt; 3,1).</li>
                </ul>
            </details>
        </div>

        <!-- ACTIVE RECALL SEKCJA 5, 6 I 7 -->
        <div class="note-section">
            <h3>4. Hydroliza Soli, Wodorosole, Miareczkowanie i Bufory</h3>
            <h4>Uzupełnij równania hydrolizy i działania buforu:</h4>
            <div class="chem-eq">
                [Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + H<sub>2</sub>O <span class="chem-arrow"><span class="arrow-sym">&rlhar;</span></span> <span class="recall-blank" onclick="toggleRecall(this)">[Al(H<sub>2</sub>O)<sub>5</sub>(OH)]<sup>2+</sup> + H<sub>3</sub>O<sup>+</sup></span> &nbsp;<em>(hydroliza akwakompleksu glinu)</em>
            </div>
            <div class="chem-eq">
                CO<sub>3</sub><sup>2&minus;</sup> + H<sub>2</sub>O <span class="chem-arrow"><span class="arrow-sym">&rlhar;</span></span> <span class="recall-blank" onclick="toggleRecall(this)">HCO<sub>3</sub><sup>&minus;</sup> + OH<sup>&minus;</sup></span> &nbsp;<em>(I etap hydrolizy węglanu sodu)</em>
            </div>
            <div class="chem-eq">
                CH<sub>3</sub>COO<sup>&minus;</sup> + H<sub>3</sub>O<sup>+</sup> <span class="chem-arrow"><span class="arrow-sym">&rarr;</span></span> <span class="recall-blank" onclick="toggleRecall(this)">CH<sub>3</sub>COOH + H<sub>2</sub>O</span> &nbsp;<em>(bufor octanowy po dodaniu mocnego kwasu)</em>
            </div>

            <details class="recall-details">
                <summary><span>Jaki odczyn mają wodne roztwory wodorosoli: 1) NaHSO<sub>4</sub>, 2) KH<sub>2</sub>PO<sub>4</sub>, 3) K<sub>2</sub>HPO<sub>4</sub>, 4) NaHCO<sub>3</sub>, 5) NaHSO<sub>3</sub>, 6) NaHS?</span></summary>
                <ul class="note-list">
                    <li><strong>Odczyn kwasowy (pH &lt; 7):</strong> <strong>NaHSO<sub>4</sub></strong> (wyłącznie dysocjacja kwasowa), <strong>KH<sub>2</sub>PO<sub>4</sub></strong> (K<sub>a2</sub> &gt; K<sub>b1</sub>) oraz <strong>NaHSO<sub>3</sub></strong> (K<sub>a2</sub> &gt; K<sub>b1</sub>).</li>
                    <li><strong>Odczyn zasadowy (pH &gt; 7):</strong> <strong>K<sub>2</sub>HPO<sub>4</sub></strong> (K<sub>b2</sub> &gt; K<sub>a3</sub>), <strong>NaHCO<sub>3</sub></strong> (K<sub>b1</sub> &gt; K<sub>a2</sub>) oraz <strong>NaHS</strong> (K<sub>b1</sub> &gg; K<sub>a2</sub>).</li>
                </ul>
            </details>

            <details class="recall-details">
                <summary><span>Jaki odczyn panuje w punkcie równoważnikowym (PR) podczas miareczkowania CH<sub>3</sub>COOH za pomocą NaOH i jakiego wskaźnika należy użyć?</span></summary>
                <p>W PR w roztworze znajduje się wyłącznie sól słabego kwasu i mocnej zasady (CH<sub>3</sub>COONa), której aniony ulegają hydrolizie zasadowej (CH<sub>3</sub>COO<sup>&minus;</sup> + H<sub>2</sub>O &rlhar; CH<sub>3</sub>COOH + OH<sup>&minus;</sup>), dlatego odczyn w PR jest <strong>zasadowy (pH &approx; 8,5–9,0)</strong>. Odpowiednim wskaźnikiem jest <strong>fenoloftaleina</strong>.</p>
            </details>
        </div>

        <!-- ACTIVE RECALL SEKCJA 8 I 9 -->
        <div class="note-section">
            <h3>5. Osady, Iloczyn Rozpuszczalności (K<sub>so</sub>) i Wypieranie Kwasów/Zasad</h3>
            <p>Dla soli typu 1:2 lub 2:1 (np. PbCl<sub>2</sub>, Ag<sub>2</sub>CO<sub>3</sub>) zależność iloczynu rozpuszczalności K<sub>so</sub> od rozpuszczalności molowej S wyraża się wzorem: K<sub>so</sub> = <span class="recall-blank" onclick="toggleRecall(this)">4S<sup>3</sup></span>, a dla typu 1:3 (np. Al(OH)<sub>3</sub>): K<sub>so</sub> = <span class="recall-blank" onclick="toggleRecall(this)">27S<sup>4</sup></span>.</p>
            <p>Osad wytrąca się z roztworu wyłącznie wtedy, gdy iloczyn jonowy K<sub>j</sub> spełnia warunek: <span class="recall-blank" onclick="toggleRecall(this)">K<sub>j</sub> &gt; K<sub>so</sub> (roztwór przesycony)</span>.</p>
            <p>Jedynym białym osadem siarczku metalu na maturze jest <span class="recall-blank" onclick="toggleRecall(this)">ZnS</span>, cielistym (jasnoróżowym) jest <span class="recall-blank" onclick="toggleRecall(this)">MnS</span>, żółtym jest <span class="recall-blank" onclick="toggleRecall(this)">CdS</span>, natomiast CuS, PbS, Ag<sub>2</sub>S, FeS i HgS mają barwę <span class="recall-blank" onclick="toggleRecall(this)">czarną</span>.</p>

            <details class="recall-details">
                <summary><span>Jak odróżnić doświadczalnie osady AgCl, AgBr i AgI za pomocą wody amoniakalnej?</span></summary>
                <ul class="note-list">
                    <li><strong>AgCl (biały, serowaty osad):</strong> Łatwo rozpuszcza się w rozcieńczonej wodzie amoniakalnej, tworząc bezbarwny jon kompleksowy [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>.</li>
                    <li><strong>AgBr (żółto-kremowy osad):</strong> Trudno rozpuszcza się w rozcieńczonym NH<sub>3(aq)</sub> (rozpuszcza się dopiero w stężonym).</li>
                    <li><strong>AgI (żółty osad):</strong> Jest całkowicie nierozpuszczalny w wodzie amoniakalnej.</li>
                </ul>
            </details>

            <details class="recall-details">
                <summary><span>Co zaobserwujemy po wprowadzeniu gazowego CO<sub>2</sub> do wodnego roztworu fenolanu sodu (C<sub>6</sub>H<sub>5</sub>ONa) i o czym to świadczy?</span></summary>
                <p>Roztwór ulega zmętnieniu (wydziela się słabo rozpuszczalny fenol): <strong>C<sub>6</sub>H<sub>5</sub>O<sup>&minus;</sup> + CO<sub>2</sub> + H<sub>2</sub>O &rarr; C<sub>6</sub>H<sub>5</sub>OH&darr; + HCO<sub>3</sub><sup>&minus;</sup></strong>. Świadczy to o tym, że kwas węglowy (H<sub>2</sub>CO<sub>3</sub>) jest kwasem mocniejszym niż fenol (C<sub>6</sub>H<sub>5</sub>OH &gt; HCO<sub>3</sub><sup>&minus;</sup>).</p>
            </details>
        </div>
    </div>
    `,

    zadania: "<h3>Zadania</h3><br>Miejsce na zadania obliczeniowe i reakcje...",

    fiszki: [
        // 1
        {
            front: "Co to jest dysocjacja elektrolityczna (jonowa) i w jakiej formie występują kationy wodoru w roztworach wodnych?",
            back: "Dysocjacja elektrolityczna to rozpad cząsteczek lub kryształów jonowych na swobodnie poruszające się kationy i aniony pod wpływem polarnych cząsteczek rozpuszczalnika (wody). Kationy H<sup>+</sup> ulegają hydratacji, tworząc kationy oksoniowe (hydroniowe) H<sub>3</sub>O<sup>+</sup> (H<sup>+</sup> + H<sub>2</sub>O &rarr; H<sub>3</sub>O<sup>+</sup>)."
        },
        // 2
        {
            front: "Wymień wszystkie najważniejsze mocne kwasy obowiązujące na maturze.",
            back: "Kwasy beztlenowe: HCl, HBr, HI. Kwasy tlenowe: HNO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub>, HClO<sub>4</sub>, HClO<sub>3</sub>, HMnO<sub>4</sub>, H<sub>2</sub>CrO<sub>4</sub>."
        },
        // 3
        {
            front: "Wymień najważniejsze słabe kwasy (beztlenowe, tlenowe i organiczne), które w równaniach jonowych zapisuje się w formie cząsteczkowej.",
            back: "Beztlenowe: HF, H<sub>2</sub>S, HCN. Tlenowe: H<sub>2</sub>SO<sub>3</sub>, HNO<sub>2</sub>, H<sub>3</sub>PO<sub>4</sub>, H<sub>2</sub>CO<sub>3</sub> (CO<sub>2</sub> + H<sub>2</sub>O), HClO, H<sub>3</sub>BO<sub>3</sub>, H<sub>4</sub>SiO<sub>4</sub>. Organiczne: HCOOH, CH<sub>3</sub>COOH, (COOH)<sub>2</sub> oraz fenol C<sub>6</sub>H<sub>5</sub>OH."
        },
        // 4
        {
            front: "Które wodorotlenki zaliczamy do mocnych elektrolitów (zasad), a które do słabych?",
            back: "Mocne elektrolity: wodorotlenki litowców (LiOH, NaOH, KOH, RbOH, CsOH) oraz berylowców z wyjątkiem Be i Mg: Ca(OH)<sub>2</sub>, Sr(OH)<sub>2</sub>, Ba(OH)<sub>2</sub>. Słabe elektrolity: woda amoniakalna (NH<sub>3</sub>&middot;H<sub>2</sub>O), aminy (R&minus;NH<sub>2</sub>) oraz pozostałe wodorotlenki metali, w tym Mg(OH)<sub>2</sub>, Be(OH)<sub>2</sub>, Al(OH)<sub>3</sub>, Zn(OH)<sub>2</sub>, Cu(OH)<sub>2</sub>."
        },
        // 5
        {
            front: "Jak dysocjują w wodzie sole dobrze rozpuszczalne (np. CH<sub>3</sub>COONa, NH<sub>4</sub>Cl, Na<sub>2</sub>CO<sub>3</sub>), a jak nieelektrolity (np. glukoza, etanol, mocznik)?",
            back: "Wszystkie sole dobrze rozpuszczalne w wodzie są mocnymi elektrolitami i dysocjują całkowicie (&alpha; &approx; 100%, strzałka &rarr;), niezależnie od mocy kwasu i zasady, z których pochodzą. Nieelektrolity nie dysocjują wcale (&alpha; = 0%) i nie przewodzą prądu."
        },
        // 6
        {
            front: "Zapisz trzy etapy dysocjacji kwasu ortofosforowego(V) (H<sub>3</sub>PO<sub>4</sub>) i uszereguj stężenia równowagowe wszystkich drobin w jego roztworze.",
            back: "I: H<sub>3</sub>PO<sub>4</sub> + H<sub>2</sub>O &rlhar; H<sub>3</sub>O<sup>+</sup> + H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup>; II: H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup> + H<sub>2</sub>O &rlhar; H<sub>3</sub>O<sup>+</sup> + HPO<sub>4</sub><sup>2&minus;</sup>; III: HPO<sub>4</sub><sup>2&minus;</sup> + H<sub>2</sub>O &rlhar; H<sub>3</sub>O<sup>+</sup> + PO<sub>4</sub><sup>3&minus;</sup>. Ponieważ K<sub>a1</sub> &gg; K<sub>a2</sub> &gg; K<sub>a3</sub>, stężenia spełniają zależność: [H<sub>3</sub>PO<sub>4</sub>] &gt; [H<sub>3</sub>O<sup>+</sup>] &gt; [H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup>] &gg; [HPO<sub>4</sub><sup>2&minus;</sup>] &gg; [PO<sub>4</sub><sup>3&minus;</sup>]."
        },
        // 7
        {
            front: "Na czym polega specyfika dysocjacji kwasu siarkowego(VI) (H<sub>2</sub>SO<sub>4</sub>) oraz wodorosiarczanu(VI) sodu (NaHSO<sub>4</sub>) w wodzie?",
            back: "W umiarkowanie stężonym H<sub>2</sub>SO<sub>4</sub> I etap jest całkowity (H<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O &rarr; H<sub>3</sub>O<sup>+</sup> + HSO<sub>4</sub><sup>&minus;</sup>), a II etap odwracalny (HSO<sub>4</sub><sup>&minus;</sup> + H<sub>2</sub>O &rlhar; H<sub>3</sub>O<sup>+</sup> + SO<sub>4</sub><sup>2&minus;</sup>, K<sub>a2</sub> &approx; 10<sup>&minus;2</sup>). Sól NaHSO<sub>4</sub> dysocjuje całkowicie na Na<sup>+</sup> i HSO<sub>4</sub><sup>&minus;</sup>, po czym jon HSO<sub>4</sub><sup>&minus;</sup> ulega dysocjacji kwasowej, dając silnie kwasowy odczyn."
        },
        // 8
        {
            front: "Ile etapów dysocjacji wykazują w wodzie kwasy H<sub>3</sub>PO<sub>4</sub>, H<sub>3</sub>PO<sub>3</sub> (fosfonowy) oraz H<sub>3</sub>PO<sub>2</sub> (fosfinowy)?",
            back: "H<sub>3</sub>PO<sub>4</sub> jest trójprotonowy (3 etapy, do PO<sub>4</sub><sup>3&minus;</sup>), H<sub>3</sub>PO<sub>3</sub> jest dwuprotonowy (2 etapy, do HPO<sub>3</sub><sup>2&minus;</sup>), a H<sub>3</sub>PO<sub>2</sub> jest jednoprotonowy (1 etap, do H<sub>2</sub>PO<sub>2</sub><sup>&minus;</sup>), ponieważ atomy wodoru związane bezpośrednio z fosforem (P&minus;H) nie ulegają odszczepieniu."
        },
        // 9
        {
            front: "Porównaj definicje kwasu i zasady według teorii Arrheniusa oraz teorii Br&oslash;nsteda-Lowry'ego.",
            back: "Arrhenius: kwas odszczepia w wodzie kationy H<sup>+</sup>, a zasada aniony OH<sup>&minus;</sup> (nie tłumaczy zasadowości NH<sub>3</sub> ani hydrolizy soli). Br&oslash;nsted-Lowry: kwas to donor (dawca) protonu H<sup>+</sup>, a zasada to akceptor (biorca) protonu H<sup>+</sup>."
        },
        // 10
        {
            front: "Co to jest sprzężona para kwas–zasada w teorii Br&oslash;nsteda i jaka zależność łączy ich moc oraz stałe dysocjacji w 25&deg;C?",
            back: "To dwie drobiny różniące się dokładnie o jeden proton H<sup>+</sup> (np. NH<sub>4</sub><sup>+</sup> i NH<sub>3</sub>; H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup> i HPO<sub>4</sub><sup>2&minus;</sup>). Im mocniejszy jest kwas, tym słabsza jest sprzężona z nim zasada: K<sub>a</sub> &middot; K<sub>b</sub> = K<sub>w</sub> = 1,0 &middot; 10<sup>&minus;14</sup> (czyli pK<sub>a</sub> + pK<sub>b</sub> = 14)."
        },
        // 11
        {
            front: "Co to jest kwas Lewisa i zasada Lewisa? Podaj po 3 przykłady.",
            back: "Kwas Lewisa to akceptor pary elektronowej posiadający pusty orbital walencyjny (np. kationy H<sup>+</sup>, Al<sup>3+</sup>, Cu<sup>2+</sup>, Fe<sup>3+</sup> oraz cząsteczki z luką elektronową: BF<sub>3</sub>, AlCl<sub>3</sub>, SO<sub>3</sub>). Zasada Lewisa to donor wolnej pary elektronowej (np. OH<sup>&minus;</sup>, Cl<sup>&minus;</sup>, CN<sup>&minus;</sup>, NH<sub>3</sub>, H<sub>2</sub>O)."
        },
        // 12
        {
            front: "Co to są substancje amfiprotyczne (amfolity)? Wykaż za pomocą równań reakcji amfiprotyczny charakter jonu HCO<sub>3</sub><sup>&minus;</sup>.",
            back: "To drobiny mogące być zarówno donorem, jak i akceptorem protonu H<sup>+</sup> (np. H<sub>2</sub>O, HCO<sub>3</sub><sup>&minus;</sup>, HSO<sub>3</sub><sup>&minus;</sup>, HS<sup>&minus;</sup>, H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup>, HPO<sub>4</sub><sup>2&minus;</sup>). Jako kwas Br&oslash;nsteda: HCO<sub>3</sub><sup>&minus;</sup> + OH<sup>&minus;</sup> &rarr; CO<sub>3</sub><sup>2&minus;</sup> + H<sub>2</sub>O. Jako zasada Br&oslash;nsteda: HCO<sub>3</sub><sup>&minus;</sup> + H<sub>3</sub>O<sup>+</sup> &rarr; CO<sub>2</sub>&uarr; + 2H<sub>2</sub>O."
        },
        // 13
        {
            front: "Dlaczego jony H<sub>2</sub>PO<sub>2</sub><sup>&minus;</sup> oraz HPO<sub>3</sub><sup>2&minus;</sup> NIE są amfolitami Br&oslash;nsteda?",
            back: "Ponieważ posiadają jedynie atomy wodoru połączone bezpośrednio z fosforem (P&minus;H), które nie mogą odszczepić się jako protony H<sup>+</sup>. Jony te są wyłącznie zasadami Br&oslash;nsteda."
        },
        // 14
        {
            front: "Porównaj stopień dysocjacji (&alpha;) i stałą dysocjacji (K) pod kątem zależności od stężenia molowego elektrolitu (C<sub>0</sub>) i temperatury (T).",
            back: "Stopień dysocjacji (&alpha; = C<sub>zdys</sub> / C<sub>0</sub>) zależy od stężenia (rośnie wraz z rozcieńczaniem roztworu) oraz od temperatury. Stała dysocjacji (K) NIE zależy od stężenia – zależy wyłącznie od rodzaju elektrolitu, rozpuszczalnika i temperatury."
        },
        // 15
        {
            front: "Podaj pełny i uproszczony wzór prawa rozcieńczeń Ostwalda oraz dwa równoważne warunki maturalne pozwalające zastosować uproszczenie.",
            back: "Wzór pełny: K = (&alpha;<sup>2</sup> &middot; C<sub>0</sub>) / (1 &minus; &alpha;). Wzór uproszczony: K &approx; &alpha;<sup>2</sup> &middot; C<sub>0</sub>, skąd &alpha; &approx; &radic;(K / C<sub>0</sub>) oraz [H<sub>3</sub>O<sup>+</sup>] &approx; &radic;(K<sub>a</sub> &middot; C<sub>a</sub>). Warunki uproszczenia: &alpha; &le; 0,05 (&alpha; &le; 5%) lub C<sub>0</sub> / K &ge; 400."
        },
        // 16
        {
            front: "Jak zmieni się stopień dysocjacji (&alpha;), stała dysocjacji (K<sub>a</sub>) oraz pH roztworu CH<sub>3</sub>COOH po dodaniu do niego stałego octanu sodu (CH<sub>3</sub>COONa)?",
            back: "Wprowadzenie wspólnego jonu CH<sub>3</sub>COO<sup>&minus;</sup> przesuwa równowagę dysocjacji w lewo (cofnięcie dysocjacji): stopień dysocjacji &alpha; maleje, stężenie [H<sub>3</sub>O<sup>+</sup>] maleje, pH roztworu rośnie, natomiast stała K<sub>a</sub> nie ulega zmianie (bo T = const)."
        },
        // 17
        {
            front: "Jak zmienia się moc kwasów beztlenowych w 17. grupie (HF, HCl, HBr, HI) oraz w 2. okresie (CH<sub>4</sub>, NH<sub>3</sub>, H<sub>2</sub>O, HF) i dlaczego?",
            back: "W grupie w dół moc kwasów rośnie (HF &ll; HCl &lt; HBr &lt; HI), gdyż rośnie promień atomowy chlorowca i maleje energia wiązania H&minus;X (łatwiej oderwać H<sup>+</sup>). W okresie od lewej do prawej moc rośnie (CH<sub>4</sub> &lt; NH<sub>3</sub> &lt; H<sub>2</sub>O &lt; HF) ze względu na wzrost elektroujemności i polaryzacji wiązania."
        },
        // 18
        {
            front: "Od czego zależy moc kwasów tlenowych? Porównaj moc: 1) HClO, HClO<sub>2</sub>, HClO<sub>3</sub>, HClO<sub>4</sub> oraz 2) HIO<sub>3</sub>, HBrO<sub>3</sub>, HClO<sub>3</sub>.",
            back: "1) Dla tego samego pierwiastka centralnego moc rośnie ze wzrostem stopnia utlenienia (i liczby atomów tlenu): HClO &lt; HClO<sub>2</sub> &lt; HClO<sub>3</sub> &lt; HClO<sub>4</sub>. 2) Przy tym samym stopniu utlenienia moc rośnie ze wzrostem elektroujemności atomu centralnego: HIO<sub>3</sub> &lt; HBrO<sub>3</sub> &lt; HClO<sub>3</sub>."
        },
        // 19
        {
            front: "Jak obecność podstawników elektronoakceptorowych (np. chlorowców) wpływa na moc kwasów karboksylowych?",
            back: "Silnie elektroujemne podstawniki wywołują ujemny efekt indukcyjny, stabilizują anion karboksylanowy i zwiększają moc kwasu. Moc rośnie z liczbą atomów chlorowca (CH<sub>3</sub>COOH &lt; CH<sub>2</sub>ClCOOH &lt; CHCl<sub>2</sub>COOH &lt; CCl<sub>3</sub>COOH), ich elektroujemnością (&minus;I &lt; &minus;Br &lt; &minus;Cl &lt; &minus;F) i bliskością grupy &minus;COOH."
        },
        // 20
        {
            front: "Porównaj zasadowość w wodzie aniliny (C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub>), amoniaku (NH<sub>3</sub>), metyloaminy (CH<sub>3</sub>NH<sub>2</sub>) i dimetyloaminy ((CH<sub>3</sub>)<sub>2</sub>NH).",
            back: "C<sub>6</sub>H<sub>5</sub>NH<sub>2</sub> &ll; NH<sub>3</sub> &lt; CH<sub>3</sub>NH<sub>2</sub> &lt; (CH<sub>3</sub>)<sub>2</sub>NH. Grupy alkilowe zwiększają gęstość elektronową na azocie (dodatni efekt indukcyjny), natomiast w anilinie wolna para elektronowa azotu jest sprzężona z elektronami &pi; pierścienia benzenowego."
        },
        // 21
        {
            front: "Zapisz równanie autodysocjacji wody oraz wzór i wartość iloczynu jonowego wody (K<sub>w</sub>) w temperaturze 25&deg;C.",
            back: "2H<sub>2</sub>O &rlhar; H<sub>3</sub>O<sup>+</sup> + OH<sup>&minus;</sup>. Iloczyn jonowy wody: K<sub>w</sub> = [H<sub>3</sub>O<sup>+</sup>] &middot; [OH<sup>&minus;</sup>] = 1,0 &middot; 10<sup>&minus;14</sup> (w 25&deg;C = 298 K), skąd pH + pOH = pK<sub>w</sub> = 14."
        },
        // 22
        {
            front: "Jak bez kalkulatora naukowego zapisać pH roztworu, w którym [H<sub>3</sub>O<sup>+</sup>] = a &middot; 10<sup>&minus;b</sup> mol&middot;dm<sup>&minus;3</sup>? Ile wynosi zmiana stężenia [H<sub>3</sub>O<sup>+</sup>], gdy pH maleje o 3 jednostki?",
            back: "pH = &minus;log(a &middot; 10<sup>&minus;b</sup>) = b &minus; log a. Spadek pH o 3 jednostki oznacza 10<sup>3</sup> = 1000-krotny wzrost stężenia jonów [H<sub>3</sub>O<sup>+</sup>] (oraz 1000-krotny spadek stężenia [OH<sup>&minus;</sup>])."
        },
        // 23
        {
            front: "W temperaturze 60&deg;C iloczyn jonowy wody wynosi K<sub>w</sub> = 1,0 &middot; 10<sup>&minus;13</sup>. Oblicz pH czystej wody w tej temperaturze i określ jej odczyn.",
            back: "W czystej wodzie [H<sub>3</sub>O<sup>+</sup>] = [OH<sup>&minus;</sup>] = &radic;10<sup>&minus;13</sup> = 10<sup>&minus;6,5</sup> &approx; 3,16 &middot; 10<sup>&minus;7</sup> mol&middot;dm<sup>&minus;3</sup>, więc pH = 6,5. Odczyn czystej wody w 60&deg;C jest nadal OBOJĘTNY, ponieważ stężenia jonów H<sub>3</sub>O<sup>+</sup> i OH<sup>&minus;</sup> są sobie równe!"
        },
        // 24
        {
            front: "Podaj barwy fenoloftaleiny, oranżu metylowego, błękitu bromotymolowego i lakmusu w roztworze kwasowym, obojętnym i zasadowym.",
            back: "Fenoloftaleina: bezbarwna / bezbarwna / malinowa. Oranż metylowy: czerwona / żółta (pomarańczowa) / żółta. Błękit bromotymolowy: żółta / zielona / niebieska. Lakmus: czerwona / fioletowa / niebieska."
        },
        // 25
        {
            front: "Dlaczego badając odczyn wydzielającego się gazu (np. NH<sub>3</sub> lub HCl) za pomocą papierka wskaźnikowego, należy go najpierw zwilżyć wodą destylowaną?",
            back: "Ponieważ suchy gaz nie ulega dysocjacji jonowej – dopiero po rozpuszczeniu gazu w wodzie na powierzchni papierka powstają jony H<sub>3</sub>O<sup>+</sup> lub OH<sup>&minus;</sup> powodujące zmianę barwy wskaźnika."
        },
        // 26
        {
            front: "Porównaj zmianę pH podczas 100-krotnego rozcieńczenia wodą mocnego kwasu (HCl) oraz bardzo słabego kwasu (CH<sub>3</sub>COOH, gdzie &alpha; &le; 5%).",
            back: "Dla mocnego kwasu (HCl) stężenie [H<sub>3</sub>O<sup>+</sup>] maleje 100-krotnie, więc pH rośnie o 2 jednostki. Dla bardzo słabego kwasu (CH<sub>3</sub>COOH) stopień dysocjacji rośnie &radic;100 = 10-krotnie, więc [H<sub>3</sub>O<sup>+</sup>] maleje tylko 10-krotnie, a pH rośnie zaledwie o 1 jednostkę!"
        },
        // 27
        {
            front: "Jak obliczyć pH roztworu powstałego po zmieszaniu mocnego kwasu i mocnej zasady użytych w ilościach niestechiometrycznych?",
            back: "1) Obliczyć początkowe liczby moli n(H<sub>3</sub>O<sup>+</sup>) = C<sub>k</sub>V<sub>k</sub> oraz n(OH<sup>&minus;</sup>) = C<sub>z</sub>V<sub>z</sub>. 2) Od liczby moli jonu w nadmiarze odjąć liczbę moli jonu w niedomiarze (reagują 1:1). 3) Podzielić pozostałą liczbę moli przez sumaryczną objętość (V<sub>k</sub> + V<sub>z</sub>) i wyznaczyć pH (lub pOH i pH = 14 &minus; pOH)."
        },
        // 28
        {
            front: "Co to jest hydroliza soli i które sole nigdy jej nie ulegają?",
            back: "Hydroliza to odwracalna reakcja protolizy między jonami soli pochodzącymi od słabego elektrolitu a cząsteczkami wody. Hydrolizie nie ulegają sole mocnych kwasów i mocnych zasad (np. NaCl, KNO<sub>3</sub>, Na<sub>2</sub>SO<sub>4</sub>, BaCl<sub>2</sub> &rarr; pH = 7) oraz sole praktycznie nierozpuszczalne w wodzie (np. AgCl, BaSO<sub>4</sub>)."
        },
        // 29
        {
            front: "Zapisz w formie jonowej skróconej równania hydrolizy: 1) NH<sub>4</sub>Cl, 2) CH<sub>3</sub>COONa, 3) Na<sub>2</sub>CO<sub>3</sub> i określ odczyn każdego roztworu.",
            back: "1) NH<sub>4</sub><sup>+</sup> + H<sub>2</sub>O &rlhar; NH<sub>3</sub> + H<sub>3</sub>O<sup>+</sup> (hydroliza kationowa, odczyn kwasowy). 2) CH<sub>3</sub>COO<sup>&minus;</sup> + H<sub>2</sub>O &rlhar; CH<sub>3</sub>COOH + OH<sup>&minus;</sup> (hydroliza anionowa, odczyn zasadowy). 3) CO<sub>3</sub><sup>2&minus;</sup> + H<sub>2</sub>O &rlhar; HCO<sub>3</sub><sup>&minus;</sup> + OH<sup>&minus;</sup> (I etap hydrolizy anionowej, odczyn zasadowy)."
        },
        // 30
        {
            front: "Od czego zależy odczyn wodnego roztworu soli słabego kwasu i słabej zasady? Podaj odczyn roztworów: CH<sub>3</sub>COONH<sub>4</sub>, HCOONH<sub>4</sub> oraz (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub>.",
            back: "Zależy od stosunku stałych dysocjacji K<sub>a</sub> kwasu i K<sub>b</sub> zasady. Dla CH<sub>3</sub>COONH<sub>4</sub> K<sub>a</sub> = K<sub>b</sub>, więc odczyn jest obojętny (pH = 7). Dla HCOONH<sub>4</sub> K<sub>a</sub> &gt; K<sub>b</sub> (odczyn słabo kwasowy). Dla (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub> K<sub>a2</sub>(HCO<sub>3</sub><sup>&minus;</sup>) &lt; K<sub>b</sub>(NH<sub>3</sub>) (odczyn słabo zasadowy)."
        },
        // 31
        {
            front: "Uzasadnij za pomocą równania reakcji zgodnego z teorią Br&oslash;nsteda-Lowry'ego kwasowy odczyn wodnego roztworu chlorku glinu (AlCl<sub>3</sub>) oraz siarczanu(VI) miedzi(II) (CuSO<sub>4</sub>).",
            back: "W wodzie kationy te tworzą akwakompleksy zachowujące się jak kwasy Br&oslash;nsteda: [Al(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + H<sub>2</sub>O &rlhar; [Al(H<sub>2</sub>O)<sub>5</sub>(OH)]<sup>2+</sup> + H<sub>3</sub>O<sup>+</sup> oraz [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + H<sub>2</sub>O &rlhar; [Cu(H<sub>2</sub>O)<sub>5</sub>(OH)]<sup>+</sup> + H<sub>3</sub>O<sup>+</sup>."
        },
        // 32
        {
            front: "Dlaczego wodny roztwór diwodorofosforanu(V) potasu (KH<sub>2</sub>PO<sub>4</sub>) ma odczyn kwasowy, a roztwór wodorofosforanu(V) potasu (K<sub>2</sub>HPO<sub>4</sub>) ma odczyn zasadowy?",
            back: "W KH<sub>2</sub>PO<sub>4</sub> stała dysocjacji kwasowej jonu H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup> (K<sub>a2</sub> = 6,17&middot;10<sup>&minus;8</sup>) jest większa niż stała jego hydrolizy zasadowej (K<sub>b1</sub> = K<sub>w</sub>/K<sub>a1</sub> = 1,45&middot;10<sup>&minus;12</sup>), więc dominuje tworzenie H<sub>3</sub>O<sup>+</sup>. W K<sub>2</sub>HPO<sub>4</sub> dla jonu HPO<sub>4</sub><sup>2&minus;</sup> stała hydrolizy zasadowej (K<sub>b2</sub> = K<sub>w</sub>/K<sub>a2</sub> = 1,62&middot;10<sup>&minus;7</sup>) jest większa niż K<sub>a3</sub> (4,79&middot;10<sup>&minus;13</sup>), więc dominuje tworzenie OH<sup>&minus;</sup>."
        },
        // 33
        {
            front: "Przyporządkuj odczyn (kwasowy lub zasadowy) wodnym roztworom następujących wodorosoli: NaHSO<sub>4</sub>, NaHSO<sub>3</sub>, NaH<sub>2</sub>PO<sub>4</sub>, Na<sub>2</sub>HPO<sub>4</sub>, NaHCO<sub>3</sub>, NaHS.",
            back: "Odczyn kwasowy (pH &lt; 7): NaHSO<sub>4</sub>, NaHSO<sub>3</sub>, NaH<sub>2</sub>PO<sub>4</sub>. Odczyn zasadowy (pH &gt; 7): Na<sub>2</sub>HPO<sub>4</sub>, NaHCO<sub>3</sub> (soda oczyszczona), NaHS."
        },
        // 34
        {
            front: "Zapisz skrócone równania jonowe reakcji zobojętniania: 1) HCl + NaOH, 2) H<sub>2</sub>SO<sub>4</sub> + Ba(OH)<sub>2</sub>, 3) HCl + Mg(OH)<sub>2</sub>, 4) CH<sub>3</sub>COOH + KOH.",
            back: "1) H<sub>3</sub>O<sup>+</sup> + OH<sup>&minus;</sup> &rarr; 2H<sub>2</sub>O (lub H<sup>+</sup> + OH<sup>&minus;</sup> &rarr; H<sub>2</sub>O). 2) 2H<sup>+</sup> + SO<sub>4</sub><sup>2&minus;</sup> + Ba<sup>2+</sup> + 2OH<sup>&minus;</sup> &rarr; BaSO<sub>4</sub>&darr; + 2H<sub>2</sub>O (powstaje osad!). 3) 2H<sup>+</sup> + Mg(OH)<sub>2</sub> &rarr; Mg<sup>2+</sup> + 2H<sub>2</sub>O. 4) CH<sub>3</sub>COOH + OH<sup>&minus;</sup> &rarr; CH<sub>3</sub>COO<sup>&minus;</sup> + H<sub>2</sub>O."
        },
        // 35
        {
            front: "Czym różni się punkt równoważnikowy (PR) od punktu końcowego (PK) w miareczkowaniu alkacymetrycznym?",
            back: "Punkt równoważnikowy (PR) to teoretyczny moment, w którym liczba moli titranta przereagowała dokładnie stechiometrycznie z analitem. Punkt końcowy (PK) to obserwowany doświadczalnie moment trwałej zmiany barwy wskaźnika pH."
        },
        // 36
        {
            front: "Podaj odczyn w punkcie równoważnikowym (PR) oraz odpowiedni wskaźnik podczas miareczkowania: 1) HCl za pomocą NaOH, 2) CH<sub>3</sub>COOH za pomocą NaOH, 3) NH<sub>3(aq)</sub> za pomocą HCl.",
            back: "1) HCl + NaOH: PR przy pH = 7,0 (obojętny) &rarr; błękit bromotymolowy (ew. fenoloftaleina/oranż). 2) CH<sub>3</sub>COOH + NaOH: PR przy pH &gt; 7 (zasadowy, hydroliza CH<sub>3</sub>COO<sup>&minus;</sup>) &rarr; fenoloftaleina. 3) NH<sub>3</sub> + HCl: PR przy pH &lt; 7 (kwasowy, hydroliza NH<sub>4</sub><sup>+</sup>) &rarr; oranż metylowy."
        },
        // 37
        {
            front: "Co to są roztwory buforowe i z czego się składają? Podaj skład buforu octanowego, amonowego, węglanowego i fosforanowego.",
            back: "To roztwory utrzymujące niemal stałe pH po dodaniu niewielkich ilości mocnych kwasów lub zasad oraz podczas rozcieńczania. Składają się ze sprzężonej pary kwas–zasada Br&oslash;nsteda w porównywalnych stężeniach: octanowy (CH<sub>3</sub>COOH / CH<sub>3</sub>COO<sup>&minus;</sup>), amonowy (NH<sub>3</sub> / NH<sub>4</sub><sup>+</sup>), węglanowy we krwi (H<sub>2</sub>CO<sub>3</sub> / HCO<sub>3</sub><sup>&minus;</sup>), fosforanowy (H<sub>2</sub>PO<sub>4</sub><sup>&minus;</sup> / HPO<sub>4</sub><sup>2&minus;</sup>)."
        },
        // 38
        {
            front: "Zapisz równania reakcji wyjaśniające, dlaczego pH buforu octanowego niemal nie zmienia się po dodaniu: 1) niewielkiej ilości HCl, 2) niewielkiej ilości NaOH.",
            back: "1) Po dodaniu mocnego kwasu (H<sub>3</sub>O<sup>+</sup>) reaguje zasadowy składnik buforu: CH<sub>3</sub>COO<sup>&minus;</sup> + H<sub>3</sub>O<sup>+</sup> &rarr; CH<sub>3</sub>COOH + H<sub>2</sub>O. 2) Po dodaniu mocnej zasady (OH<sup>&minus;</sup>) reaguje kwasowy składnik buforu: CH<sub>3</sub>COOH + OH<sup>&minus;</sup> &rarr; CH<sub>3</sub>COO<sup>&minus;</sup> + H<sub>2</sub>O."
        },
        // 39
        {
            front: "Podaj wzór na stężenie jonów [H<sub>3</sub>O<sup>+</sup>] i pH buforu kwasowego (równanie Hendersona-Hasselbalcha) oraz wyjaśnij, dlaczego rozcieńczanie wodą nie zmienia pH buforu.",
            back: "[H<sub>3</sub>O<sup>+</sup>] = K<sub>a</sub> &middot; (C<sub>kwasu</sub> / C<sub>soli</sub>) = K<sub>a</sub> &middot; (n<sub>kwasu</sub> / n<sub>soli</sub>), czyli pH = pK<sub>a</sub> + log(C<sub>soli</sub> / C<sub>kwasu</sub>). Podczas rozcieńczania objętość roztworu skraca się w ułamku, a stosunek liczby moli n<sub>kwasu</sub> / n<sub>soli</sub> pozostaje stały."
        },
        // 40
        {
            front: "Jakie warunki muszą spełniać substraty reakcji strąceniowej i dlaczego do strącania ZnS lub FeS należy użyć roztworu Na<sub>2</sub>S, a nie wody siarkowodorowej (H<sub>2</sub>S)?",
            back: "Oba substraty muszą być dobrze rozpuszczalne w wodzie (mocne elektrolity). Słaby kwas H<sub>2</sub>S daje zbyt małe stężenie jonów S<sup>2&minus;</sup> i strąca wyłącznie siarczki o ekstremalnie małym K<sub>so</sub> nierozpuszczalne w kwasach (CuS, PbS, Ag<sub>2</sub>S, HgS, CdS). Aby strącić FeS, ZnS lub MnS, trzeba użyć dobrze zdysocjowanego Na<sub>2</sub>S."
        },
        // 41
        {
            front: "Co obserwuje się po dodaniu zasady sodowej (NaOH) do roztworu azotanu(V) srebra(I) (AgNO<sub>3</sub>)? Zapisz skrócone równanie jonowe.",
            back: "Wytrąca się brunatny osad tlenku srebra(I) (Ag<sub>2</sub>O), ponieważ wodorotlenek srebra(I) (AgOH) jest nietrwały i ulega rozkładowi: 2Ag<sup>+</sup> + 2OH<sup>&minus;</sup> &rarr; Ag<sub>2</sub>O&darr; + H<sub>2</sub>O."
        },
        // 42
        {
            front: "Podaj barwy i cechy charakterystyczne osadów halogenków srebra: AgCl, AgBr oraz AgI.",
            back: "AgCl: biały, serowaty osad, ciemnieje na świetle, łatwo rozpuszcza się w NH<sub>3(aq)</sub> tworząc [Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>. AgBr: żółto-kremowy (jasnożółty) osad, ciemnieje na świetle, trudno rozpuszczalny w NH<sub>3(aq)</sub>. AgI: żółty osad, całkowicie nierozpuszczalny w NH<sub>3(aq)</sub>."
        },
        // 43
        {
            front: "Podaj barwy osadów: 1) PbI<sub>2</sub>, 2) Ag<sub>3</sub>PO<sub>4</sub>, 3) BaSO<sub>4</sub>, 4) Cu(OH)<sub>2</sub>.",
            back: "1) PbI<sub>2</sub>: złocistożółty, krystaliczny osad („złoty deszcz”). 2) Ag<sub>3</sub>PO<sub>4</sub>: żółty osad. 3) BaSO<sub>4</sub>: biały, drobnokrystaliczny osad nierozpuszczalny w kwasach i zasadach. 4) Cu(OH)<sub>2</sub>: niebieski, galaretowaty osad (czernieje podczas ogrzewania do CuO)."
        },
        // 44
        {
            front: "Podaj barwy charakterystycznych osadów siarczków: 1) PbS, CuS, Ag<sub>2</sub>S, FeS, HgS, 2) CdS, 3) MnS, 4) ZnS.",
            back: "1) PbS, CuS, Ag<sub>2</sub>S, FeS, HgS: czarne osady. 2) CdS: żółty osad. 3) MnS: cielisty (jasnoróżowy) osad. 4) ZnS: biały osad (jedyny biały siarczek na maturze)."
        },
        // 45
        {
            front: "Jak odróżnić od siebie białe, galaretowate osady amfoteryczne Al(OH)<sub>3</sub> oraz Zn(OH)<sub>2</sub>?",
            back: "Oba roztwarzają się w mocnych kwasach i w nadmiarze mocnych zasad (NaOH), natomiast po dodaniu wody amoniakalnej (NH<sub>3(aq)</sub>) osad Zn(OH)<sub>2</sub> ulega roztworzeniu (tworzy kompleks amminacynkowy [Zn(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup>), a osad Al(OH)<sub>3</sub> nie rozpuszcza się."
        },
        // 46
        {
            front: "Co to jest iloczyn rozpuszczalności (K<sub>so</sub>) i jaki warunek musi spełniać iloczyn jonowy (K<sub>j</sub>), aby po zmieszaniu dwóch roztworów wytrącił się osad?",
            back: "Dla soli A<sub>n</sub>B<sub>m</sub> &rlhar; nA<sup>m+</sup> + mB<sup>n&minus;</sup> iloczyn rozpuszczalności to K<sub>so</sub> = [A<sup>m+</sup>]<sup>n</sup> &middot; [B<sup>n&minus;</sup>]<sup>m</sup> w roztworze nasyconym. Osad wytrąca się wyłącznie wtedy, gdy dla stężeń jonów po zmieszaniu zachodzi warunek K<sub>j</sub> &gt; K<sub>so</sub> (roztwór przesycony)."
        },
        // 47
        {
            front: "Wyprowadź zależność między iloczynem rozpuszczalności (K<sub>so</sub>) a rozpuszczalnością molową (S) dla elektrolitów typu: 1:1 (AgCl), 1:2/2:1 (PbCl<sub>2</sub>, Ag<sub>2</sub>CO<sub>3</sub>) oraz 1:3 (Al(OH)<sub>3</sub>).",
            back: "Typ 1:1: K<sub>so</sub> = S &middot; S = S<sup>2</sup>. Typ 1:2 / 2:1: K<sub>so</sub> = S &middot; (2S)<sup>2</sup> = 4S<sup>3</sup>. Typ 1:3 / 3:1: K<sub>so</sub> = S &middot; (3S)<sup>3</sup> = 27S<sup>4</sup>."
        },
        // 48
        {
            front: "Zapisz skrócone równania jonowe i podaj obserwacje dla reakcji mocnego kwasu (np. HCl) z: 1) węglanem wapnia (CaCO<sub>3</sub>), 2) siarczanem(IV) sodu (Na<sub>2</sub>SO<sub>3</sub>), 3) krzemianem sodu (Na<sub>2</sub>SiO<sub>3</sub>).",
            back: "1) CaCO<sub>3</sub> + 2H<sup>+</sup> &rarr; Ca<sup>2+</sup> + CO<sub>2</sub>&uarr; + H<sub>2</sub>O (osad roztwarza się, wydziela się bezbarwny, bezwonny gaz). 2) SO<sub>3</sub><sup>2&minus;</sup> + 2H<sup>+</sup> &rarr; SO<sub>2</sub>&uarr; + H<sub>2</sub>O (wydziela się bezbarwny gaz o ostrym, duszącym zapachu). 3) SiO<sub>3</sub><sup>2&minus;</sup> + 2H<sup>+</sup> &rarr; H<sub>2</sub>SiO<sub>3</sub>&darr; (wytrąca się biały, galaretowaty osad)."
        },
        // 49
        {
            front: "Uszereguj według malejącej mocy kwasowej: fenol (C<sub>6</sub>H<sub>5</sub>OH), kwas octowy (CH<sub>3</sub>COOH), jon wodorowęglanowy (HCO<sub>3</sub><sup>&minus;</sup>), kwas węglowy (H<sub>2</sub>CO<sub>3</sub>) i zapisz reakcję fenolanu sodu z CO<sub>2</sub> + H<sub>2</sub>O.",
            back: "Szereg mocy: CH<sub>3</sub>COOH &gt; H<sub>2</sub>CO<sub>3</sub> &gt; C<sub>6</sub>H<sub>5</sub>OH &gt; HCO<sub>3</sub><sup>&minus;</sup>. Równanie reakcji (zmętnienie roztworu): C<sub>6</sub>H<sub>5</sub>O<sup>&minus;</sup> + CO<sub>2</sub> + H<sub>2</sub>O &rarr; C<sub>6</sub>H<sub>5</sub>OH&darr; + HCO<sub>3</sub><sup>&minus;</sup>."
        },
        // 50
        {
            front: "Jak wykryć kationy amonowe (NH<sub>4</sub><sup>+</sup>) w roztworze soli? Zapisz skrócone równanie jonowe i podaj obserwacje.",
            back: "Do roztworu soli amonowej dodaje się mocną zasadę (np. NaOH) i ogrzewa: NH<sub>4</sub><sup>+</sup> + OH<sup>&minus;</sup> &rarr; NH<sub>3</sub>&uarr; + H<sub>2</sub>O. Wydziela się bezbarwny gaz o charakterystycznym, ostrym zapachu, który barwi zwilżony wodą papierek uniwersalny na zielono-niebiesko."
        }
    ]
};