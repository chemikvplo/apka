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