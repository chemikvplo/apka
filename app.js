// LISTA WSZYSTKICH 22 DZIAŁÓW Z PODSTAWY PROGRAMOWEJ
const categoriesList = [
    "I. Atomy, cząsteczki i stechiometria chemiczna",
    "II. Budowa atomu",
    "III. Wiązania chemiczne. Oddziaływania międzycząsteczkowe",
    "IV. Kinetyka i statyka chemiczna. Energetyka reakcji",
    "V. Roztwory",
    "VI. Reakcje w roztworach wodnych",
    "VII. Systematyka związków nieorganicznych",
    "VIII. Reakcje utleniania i redukcji",
    "IX. Elektrochemia. Ogniwa",
    "X. Metale, niemetale i ich związki",
    "XI. Zastosowania wybranych związków nieorganicznych",
    "XII. Wstęp do chemii organicznej",
    "XIII. Węglowodory",
    "XIV. Hydroksylowe pochodne węglowodorów",
    "XV. Związki karbonylowe",
    "XVI. Kwasy karboksylowe",
    "XVII. Estry i tłuszcze",
    "XVIII. Związki organiczne zawierające azot",
    "XIX. Białka",
    "XX. Cukry",
    "XXI. Chemia wokół nas",
    "XXII. Elementy ochrony środowiska"
];

// BAZA DANYCH TREŚCI - TUTAJ BĘDZIESZ DODAWAŁ SWOJE MATERIAŁY
// Kluczem jest numer z listy (np. 0 dla działu I, 1 dla działu II itd.)
const appData = {
    0: { // I. Atomy, cząsteczki i stechiometria
        notatki: "<b>Prawo stałości składu:</b> Stosunek mas pierwiastków w danym związku jest stały...<br><br><b>Wzór na liczbę moli:</b> n = m/M",
        fiszki: [
            { front: "Ile atomów zawiera 1 mol materii?", back: "Zawiera 6,022 × 10^23 elementów (liczba Avogadra)." },
            { front: "Podaj jednostkę masy molowej", back: "g/mol" }
        ],
        zadania: "Zadanie 1: Oblicz objętość CO2 wydzielonego w warunkach normalnych podczas prażenia 100g węglanu wapnia (odp: 22,4 dm3)."
    },
    12: { // XIII. Węglowodory (index 12, bo liczymy od 0)
        notatki: "<b>Reguła Markownikowa:</b> Atom wodoru przyłącza się do tego atomu węgla przy wiązaniu wielokrotnym, który ma już więcej wodorów.",
        fiszki: [
            { front: "Co opisuje reguła Zajceva?", back: "W eliminacji wodór odłącza się od węgla z mniejszą liczbą wodorów (bardziej ugrupowany alken)." },
            { front: "Jakie jony odpowiadają za nitrowanie benzenu?", back: "Jon nitroniowy (NO2+)." }
        ],
        zadania: "Zadanie 1: Napisz ciąg przemian: metan -> chlorometan -> etan."
    }
    13: { // XIV. Hydroksylowe pochodne węglowodorów
        notatki: "Wkrótce pojawią się tu notatki z alkoholi i fenoli...",
        fiszki: [
            { front: "Jak nazywa się grupa funkcyjna charakterystyczna dla alkoholi i fenoli?", back: "Grupa hydroksylowa (-OH)." },
            { front: "Jaki jest wzór ogólny szeregu homologicznego nasyconych alkoholi monohydroksylowych (alkanoli)?", back: "C<sub>n</sub>H<sub>2n+1</sub>OH (lub C<sub>n</sub>H<sub>2n+2</sub>O)." },
            { front: "Czym różni się budowa alkoholi od fenoli?", back: "W alkoholach grupa -OH jest połączona z atomem węgla o hybrydyzacji sp<sup>3</sup> (nasyconym), a w fenolach bezpośrednio z atomem węgla pierścienia aromatycznego (hybrydyzacja sp<sup>2</sup>)." },
            { front: "Jak określamy rzędowość alkoholi?", back: "Rzędowość alkoholu zależy od rzędowości atomu węgla, z którym połączona jest grupa -OH (np. alkohol II-rzędowy ma grupę -OH przy atomie węgla połączonym z dwoma innymi atomami węgla)." },
            { front: "Podaj nazwę systematyczną i zwyczajową alkoholu o wzorze CH<sub>3</sub>OH.", back: "Metanol (nazwa zwyczajowa: alkohol metylowy)." },
            { front: "Podaj nazwę systematyczną i zwyczajową alkoholu o wzorze C<sub>2</sub>H<sub>5</sub>OH.", back: "Etanol (nazwa zwyczajowa: alkohol etylowy)." },
            { front: "Jaką rzędowość wykazuje 2-metylopropan-2-ol?", back: "Jest to alkohol trzeciorzędowy (III-rzędowy)." },
            { front: "Podaj nazwę systematyczną glicerolu.", back: "Propano-1,2,3-triol." },
            { front: "Podaj nazwę systematyczną glikolu etylenowego.", back: "Etano-1,2-diol." },
            { front: "Z iloma atomami węgla łączy się węgiel posiadający grupę hydroksylową w alkoholu I-rzędowym?", back: "Z jednym atomem węgla (lub z żadnym, jak w przypadku metanolu)." },
            { front: "Co to jest zjawisko kontrakcji objętości?", back: "To zjawisko zmniejszenia sumarycznej objętości roztworu podczas mieszania dwóch cieczy, np. etanolu z wodą, wynikające z wsuwania się mniejszych cząsteczek między większe i tworzenia silnych wiązań wodorowych." },
            { front: "Dlaczego alkohole mają znacznie wyższe temperatury wrzenia niż alkany o zbliżonych masach molowych?", back: "Ponieważ cząsteczki alkoholi tworzą między sobą silne wiązania wodorowe, których zerwanie wymaga dostarczenia znacznej ilości energii." },
            { front: "Który alkohol będzie miał wyższą temperaturę wrzenia: butan-1-ol czy 2-metylopropan-2-ol?", back: "Butan-1-ol. Posiada prosty łańcuch, co ułatwia przyleganie cząsteczek do siebie (silniejsze siły dyspersyjne), natomiast kulisty kształt 2-metylopropan-2-olu utrudnia tworzenie wiązań wodorowych i osłabia oddziaływania." },
            { front: "Jak zmienia się rozpuszczalność alkoholi monohydroksylowych w wodzie wraz ze wzrostem długości łańcucha węglowego?", back: "Rozpuszczalność maleje, ponieważ rośnie udział hydrofobowej (niepolarnej) części węglowodorowej w stosunku do hydrofilowej grupy -OH." },
            { front: "Czym jest wiązanie wodorowe?", back: "To oddziaływanie elektrostatyczne między atomem wodoru połączonym z silnie elektroujemnym atomem (np. tlenem) w jednej cząsteczce, a wolną parą elektronową silnie elektroujemnego atomu w innej cząsteczce." },
            { front: "Które niższe alkohole mieszają się z wodą w każdym stosunku?", back: "Metanol, etanol i propan-1-ol." },
            { front: "Jak nazywają się sole alkoholi powstające w reakcji z aktywnymi metalami?", back: "Alkoholany (np. etanolan sodu)." },
            { front: "Czy alkohole reagują z wodorotlenkiem sodu (NaOH)?", back: "Nie. Alkohole są zbyt słabymi kwasami (są słabszymi kwasami niż woda), aby reagować z wodorotlenkami metali alkalicznych." },
            { front: "Zapisz równanie reakcji etanolu z metalicznym sodem.", back: "2C<sub>2</sub>H<sub>5</sub>OH + 2Na &rarr; 2C<sub>2</sub>H<sub>5</sub>ONa + H<sub>2</sub>&uarr; (powstaje etanolan sodu i wydziela się wodór)." },
            { front: "Jakim odczynem charakteryzują się wodne roztwory alkoholanów (np. etanolanu sodu)?", back: "Odczynem silnie zasadowym, ponieważ alkoholany jako sole słabych kwasów (alkoholi) i mocnych zasad silnie hydrolizują z wytworzeniem jonów OH<sup>-</sup>." },
            { front: "Jak alkohol reaguje z chlorowodorem (HCl)? Jaki to typ reakcji?", back: "Grupa -OH jest wymieniana na atom chloru, powstaje chloroalkan (np. chloroetan) i woda. Jest to reakcja substytucji nukleofilowej (S<sub>N</sub>). Wymaga środowiska kwasowego (lub katalizatora np. ZnCl<sub>2</sub>)." },
            { front: "Na czym polega próba Lucasa?", back: "To reakcja alkoholu z roztworem ZnCl<sub>2</sub> w stężonym HCl. Służy do odróżniania alkoholi ze względu na ich rzędowość – III-rzędowe reagują natychmiast (zmętnienie), II-rzędowe po kilku minutach, a I-rzędowe na zimno nie reagują." },
            { front: "Jakie produkty powstają podczas dehydratacji (odwodnienia) etanolu w obecności Al<sub>2</sub>O<sub>3</sub> w podwyższonej temperaturze?", back: "Eten (alken) i woda. Jest to reakcja eliminacji." },
            { front: "Co jest produktem całkowitego utlenienia alkoholi I-rzędowych z użyciem K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> w środowisku kwasowym?", back: "Kwasy karboksylowe (reakcja przebiega przez etap aldehydu)." },
            { front: "Jakie organiczne produkty powstają podczas łagodnego utleniania (za pomocą ogrzanego CuO) alkoholi II-rzędowych?", back: "Ketony." },
            { front: "Czy alkohole III-rzędowe ulegają łatwemu utlenieniu pod wpływem K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> lub KMnO<sub>4</sub>?", back: "Nie, alkohole III-rzędowe są odporne na działanie tych utleniaczy (brak atomu wodoru przy węglu połączonym z grupą hydroksylową)." },
            { front: "Podaj równanie reakcji łagodnego utleniania etanolu za pomocą tlenku miedzi(II).", back: "C<sub>2</sub>H<sub>5</sub>OH + CuO &rarr; CH<sub>3</sub>CHO + Cu + H<sub>2</sub>O (powstaje etanal i czarna warstwa CuO pokrywa się rdzawym miedzianym nalotem)." },
            { front: "Jak odróżnić alkohol monohydroksylowy (np. etanol) od alkoholu polihydroksylowego (np. glicerolu)?", back: "Należy użyć świeżo strąconego Cu(OH)<sub>2</sub>. Alkohol polihydroksylowy roztwarza niebieski osad już na zimno, tworząc klarowny, szafirowy roztwór związku kompleksowego." },
            { front: "Ile moli wodoru wydzieli się w reakcji 1 mola glicerolu z nadmiarem metalicznego sodu?", back: "Wydzieli się 1,5 mola wodoru (ponieważ glicerol ma 3 grupy -OH, a z każdej podstawionej grupy uwalnia się pół mola cząsteczek H<sub>2</sub>)." },
            { front: "Czym jest trójgliceryd i jaki alkohol jest jego szkieletem?", back: "Trójgliceryd (tłuszcz) to ester wyższych kwasów tłuszczowych i propano-1,2,3-triolu (glicerolu)." },
            { front: "Jakie zastosowanie medyczne ma wodny roztwór etanolu (ok. 70%)?", back: "Służy do dezynfekcji, ponieważ w tym stężeniu najskuteczniej uszkadza ściany komórkowe bakterii (denaturuje białka)." },
            { front: "Z jakiego surowca na skalę przemysłową otrzymuje się metanol (dawna nazwa: alkohol drzewny)?", back: "Z gazu syntezowego (mieszaniny CO i H<sub>2</sub>) pod wysokim ciśnieniem wobec katalizatora. Dawniej otrzymywano go przez suchą destylację drewna." },
            { front: "Na czym polega fermentacja alkoholowa? Zapisz uproszczone równanie.", back: "To beztlenowy rozkład cukrów (np. glukozy) przez drożdże. Równanie: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> &rarr; 2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub>&uarr;." },
            { front: "Co jest produktem nitrowania glicerolu mieszaniną nitrującą (stęż. HNO<sub>3</sub> i H<sub>2</sub>SO<sub>4</sub>)?", back: "Triazotan(V) propano-1,2,3-triylu (zwyczajowo: nitrogliceryna) – ester kwasu nieorganicznego." },
            { front: "W jaki sposób etanol wpływa na białka (np. na białko jaja kurzego)?", back: "Wywołuje denaturację białka, czyli nieodwracalne zniszczenie jego struktury drugo-, trzecio- i czwartorzędowej." },
            { front: "Jaki jest stan skupienia i charakterystyczny wygląd fenolu w temperaturze pokojowej?", back: "Jest to substancja stała w postaci bezbarwnych igłowatych kryształów (na powietrzu utlenia się, zmieniając barwę na różową/brunatną) o charakterystycznym zapachu." },
            { front: "Dlaczego fenol ma silniejsze właściwości kwasowe niż alkohole alifatyczne?", back: "Ponieważ pierścień aromatyczny wyciąga elektrony od grupy -OH, zwiększając polaryzację wiązania O-H. Powstający jon fenolanowy jest dodatkowo stabilizowany przez delokalizację ładunku w pierścieniu (efekt rezonansowy)." },
            { front: "Jak udowodnić doświadczalnie, że fenol wykazuje charakter kwasowy?", back: "Należy dodać wodnego roztworu wodorotlenku sodu (NaOH) do mętnej zawiesiny fenolu w wodzie. Zawiesina znika, tworzy się klarowny roztwór fenolanu sodu, co potwierdza reakcję z zasadą." },
            { front: "Zapisz równanie reakcji fenolu z wodorotlenkiem potasu.", back: "C<sub>6</sub>H<sub>5</sub>OH + KOH &rarr; C<sub>6</sub>H<sub>5</sub>OK + H<sub>2</sub>O (powstaje fenolan potasu i woda)." },
            { front: "Uszereguj według rosnącej mocy kwasowej: etanol, fenol, kwas węglowy.", back: "Etanol < fenol < kwas węglowy." },
            { front: "Jak za pomocą prostego doświadczenia udowodnić, że kwas węglowy jest mocniejszy od fenolu?", back: "Należy przepuścić gazowy CO<sub>2</sub> przez klarowny roztwór fenolanu sodu. Roztwór zmętnieje, ponieważ mocniejszy kwas węglowy wyprze słabszy kwas (fenol) z jego soli." },
            { front: "Jak reaguje fenol z wodą bromową? Co obserwujemy?", back: "Zachodzi reakcja substytucji elektrofilowej z wytworzeniem 2,4,6-tribromofenolu. Obserwujemy odbarwienie wody bromowej i wytrącenie białego osadu." },
            { front: "Jaki jest wpływ grupy hydroksylowej (-OH) na pierścień aromatyczny w fenolu podczas reakcji substytucji?", back: "Grupa -OH jest podstawnikiem I rodzaju (aktywującym) i kieruje wprowadzane podstawniki w położenia orto i para." },
            { front: "Jaka reakcja służy do analitycznej identyfikacji fenoli i jaki daje objaw?", back: "Reakcja z wodnym roztworem chlorku żelaza(III) (FeCl<sub>3</sub>). Obecność fenolu powoduje powstanie intensywnie fioletowego zabarwienia pochodzącego od tworzącego się związku kompleksowego." },
            { front: "Co to jest kwas pikrynowy?", back: "To 2,4,6-trinitrofenol, produkt całkowitego nitrowania fenolu silną mieszaniną nitrującą." },
            { front: "Czy fenol reaguje z węglanem sodu (Na<sub>2</sub>CO<sub>3</sub>)?", back: "Fenol nie ulega reakcji z Na<sub>2</sub>CO<sub>3</sub>, ponieważ jest kwasem słabszym od kwasu węglowego i nie wypiera go z jego soli." },
            { front: "Jakie zagrożenia dla zdrowia niesie za sobą fenol?", back: "Fenol jest wysoce toksyczny, ma działanie żrące i łatwo wchłania się przez skórę, powodując trudno gojące się oparzenia i zatrucia ogólnoustrojowe." },
            { front: "Zapisz równanie reakcji otrzymywania fenolanu sodu z wykorzystaniem metalicznego sodu.", back: "2C<sub>6</sub>H<sub>5</sub>OH + 2Na &rarr; 2C<sub>6</sub>H<sub>5</sub>ONa + H<sub>2</sub>&uarr;." },
            { front: "W jaki sposób hydrolizują w wodzie sole takie jak fenolan sodu?", back: "Ulegają hydrolizie anionowej. C<sub>6</sub>H<sub>5</sub>O<sup>-</sup> + H<sub>2</sub>O &harr; C<sub>6</sub>H<sub>5</sub>OH + OH<sup>-</sup>. Z tego powodu ich roztwory mają odczyn zasadowy." },
            { front: "Skąd pochodzi zwyczajowa nazwa fenolu - \"kwas karbolowy\" (karbol)?", back: "Wywodzi się z czasów, gdy fenol był masowo stosowany przez chirurgów (np. Josepha Listera) jako pierwszy powszechny środek antyseptyczny do odkażania ran i narzędzi." }
        ],
        zadania: "Wkrótce pojawią się tu zadania z alkoholi i fenoli..."
    },
};

// Zmienne globalne stanu
let currentCategoryId = null;
let currentFlashcardIndex = 0;
let currentFlashcards = [];

// GENEROWANIE KAFELKÓW NA STRONIE GŁÓWNEJ
function renderCategories() {
    const grid = document.getElementById("categories-grid");
    grid.innerHTML = "";
    categoriesList.forEach((cat, index) => {
        const btn = document.createElement("button");
        btn.className = "cat-btn";
        btn.innerText = cat;
        btn.onclick = () => openCategory(index);
        grid.appendChild(btn);
    });
}

// OTWIERANIE KONKRETNEGO DZIAŁU
function openCategory(id) {
    currentCategoryId = id;
    document.getElementById("home-view").classList.add("hidden");
    document.getElementById("category-view").classList.remove("hidden");
    document.getElementById("current-category-title").innerText = categoriesList[id];
    
    // Załadowanie danych z bazy dla tego działu (lub info o braku)
    const data = appData[id] || { notatki: "Brak notatek dla tego działu.", fiszki: [], zadania: "Brak zadań w tym dziale." };
    
    // Ustawianie tekstów
    document.getElementById("notes-content").innerHTML = data.notatki;
    document.getElementById("tasks-content").innerHTML = data.zadania;
    
    currentFlashcards = data.fiszki;
    currentFlashcardIndex = 0;
    
    if (currentFlashcards.length > 0) {
        loadCard();
    } else {
        document.getElementById("cardFront").innerText = "Brak fiszek w tym dziale.";
        document.getElementById("cardBack").innerText = "Brak fiszek w tym dziale.";
    }

    // Odpal zakładkę notatki jako domyślną
    showTab('notatki');
}

// POWRÓT DO MENU
function goBack() {
    document.getElementById("category-view").classList.add("hidden");
    document.getElementById("home-view").classList.remove("hidden");
}

// PRZEŁĄCZANIE ZAKŁADEK (Notatki / Fiszki / Zadania)
function showTab(tabName) {
    // Ukryj wszystkie
    document.getElementById("tab-notatki").classList.add("hidden");
    document.getElementById("tab-fiszki").classList.add("hidden");
    document.getElementById("tab-zadania").classList.add("hidden");
    
    // Usuń podświetlenie z przycisków
    const btns = document.querySelectorAll('.tab-btn');
    btns.forEach(btn => btn.classList.remove('active'));

    // Pokaż wybraną
    document.getElementById(`tab-${tabName}`).classList.remove("hidden");
    event.currentTarget.classList.add('active');
}

// --- LOGIKA FISZEK ---
function loadCard() {
    const card = currentFlashcards[currentFlashcardIndex];
    document.getElementById("cardFront").innerText = card.front;
    document.getElementById("cardBack").innerText = card.back;
    document.getElementById("flashcard").classList.remove("flipped");
}

function flipsCard() {
    if(currentFlashcards.length > 0) {
        document.getElementById("flashcard").classList.toggle("flipped");
    }
}

function nextCard() {
    if(currentFlashcards.length > 0) {
        currentFlashcardIndex = (currentFlashcardIndex + 1) % currentFlashcards.length;
        loadCard();
    }
}

// --- LOGIKA ZAPISU PROGRESU ZADAŃ ---
let score = localStorage.getItem("chemia_score") ? parseInt(localStorage.getItem("chemia_score")) : 0;
document.getElementById("scoreCount").innerText = score;

function completeTask() {
    score++;
    localStorage.setItem("chemia_score", score);
    document.getElementById("scoreCount").innerText = score;
}

// START APLIKACJI
renderCategories();