// ==========================================
// INICJALIZACJA JSME (Usuwa błędy konsoli)
// ==========================================
function jsmeOnLoad() {}

// ==========================================
// STAN APLIKACJI I PAMIĘĆ SESJI
// ==========================================
let currentFlashcards = [];   
let filteredFlashcards = [];  
let cardIndex = 0;
let currentChapterIndex = null;
let currentFilter = 'all';    

let jsmeOrg = null; 

let userProgress = JSON.parse(localStorage.getItem("chemia_user_progress")) || {
    learnedCards: {}, lastViewed: {}, totalLearned: 0
};

function saveProgress() {
    localStorage.setItem("chemia_user_progress", JSON.stringify(userProgress));
    updateProgressUI();
}

document.addEventListener("DOMContentLoaded", () => {
    renderChaptersGrid();
    updateProgressUI();
// Odpalenie obliczania Streaka zaraz po wczytaniu aplikacji
    updateStreak();

    // Rejestruje akcję "cokolwiek poklika"
    document.addEventListener('click', () => {
        updateStreak();
    });
    // 1. ZAMIANA KLAWIATURY NA INDEKSY W LOCIE (Kreator Nieorganiczny)
    const formulaInput = document.getElementById('formula-input');
    if (formulaInput) {
        formulaInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                getInorganicName();
            }
        });

        formulaInput.addEventListener('input', function(e) {
            if (formatMode === 'normal') return;
            
            let cursor = this.selectionStart || 0;
            let text = this.value || "";
            
            if (cursor > 0) {
                let char = text.substring(cursor - 1, cursor);
                let map = formatMode === 'sub' ? unicodeSub : unicodeSup;
                
                // Jeśli wpisany znak istnieje w słowniku indeksów, podmień go
                if (map[char]) {
                    this.value = text.substring(0, cursor - 1) + map[char] + text.substring(cursor);
                    this.selectionStart = this.selectionEnd = cursor;
                }
            }
        });
    }

    // 2. KULOODPORNY WYKRYWACZ SCROLLA (Dla przycisku powrotu do góry)
    window.addEventListener('scroll', handleScrollVisibility, true);
});

function handleScrollVisibility() {
    const scrollBtn = document.getElementById('scroll-to-top');
    if (!scrollBtn) return;
    
    let isScrolled = false;
    if (window.scrollY > 200 || document.documentElement.scrollTop > 200) isScrolled = true;
    
    // Sprawdzamy też wszystkie wewnętrzne zakładki
    document.querySelectorAll('.tab-content, .view, .app-container').forEach(el => {
        if (el.scrollTop > 200) isScrolled = true;
    });

    if (isScrolled) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelectorAll('.tab-content, .view, .app-container, .card-back').forEach(el => {
        el.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==========================================
// ZARZĄDZANIE WIDOKAMI I KARTAMI
// ==========================================
function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');

    if (viewId === 'view-draw-organic' && typeof JSApplet !== 'undefined' && !jsmeOrg) {
        jsmeOrg = new JSApplet.JSME("jsme_container_org", "100%", "300px", {"options":"query,hydrogens,nozoom"});
    }
}

function switchTab(tabId, element = null) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    
    const btn = element || (typeof event !== 'undefined' && event && event.currentTarget) || document.querySelector(`.tab-btn[onclick*="${tabId}"]`);
    if (btn) btn.classList.add('active');
    
    const content = document.getElementById(`tab-${tabId}`);
    if (content) content.classList.add('active');
}

function renderChaptersGrid() {
    const grid = document.getElementById("chapters-list");
    if(!grid) return;
    grid.innerHTML = "";
    romanChapters.forEach((title, index) => {
        const btn = document.createElement("button");
        btn.className = "chapter-btn";
        btn.innerText = title;
        btn.onclick = () => openChapter(index);
        grid.appendChild(btn);
    });
}

function openChapter(index) {
    currentChapterIndex = index;
    switchView('view-details');
    document.getElementById("current-chapter-title").innerText = romanChapters[index];
    
    // Nowy schemat danych uwzględniający notatkiActive
    const data = appData[index] || { notatki: "Wkrótce...", notatkiActive: "Wkrótce...", fiszki: [], zadania: "Wkrótce..." };
    
    document.getElementById("content-notatki").innerHTML = data.notatki || "Wkrótce...";
    document.getElementById("content-notatki-active").innerHTML = data.notatkiActive || "Brak wersji Active Recall dla tego działu.";
    document.getElementById("content-zadania").innerHTML = data.zadania || "Wkrótce...";
    
    currentFlashcards = data.fiszki.map((card, i) => ({ ...card, originalIndex: i }));
    
    currentFilter = 'all';
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const firstFilter = document.querySelector('.filter-btn');
    if (firstFilter) firstFilter.classList.add('active');

    let savedIndex = userProgress.lastViewed[index] || 0;
    if(savedIndex >= currentFlashcards.length) savedIndex = 0;
    cardIndex = savedIndex;

    applyFilter(false); 
    document.getElementById("flashcard").classList.remove("flipped");
    switchTab('notatki'); 
}

// ==========================================
// FILTROWANIE I OBSŁUGA FISZEK
// ==========================================
function setFilter(filterType, element = null) {
    currentFilter = filterType;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    
    const btn = element || (typeof event !== 'undefined' && event && event.currentTarget) || document.querySelector(`.filter-btn[onclick*="${filterType}"]`);
    if (btn) btn.classList.add('active');
    
    applyFilter(true); 
}

function applyFilter(resetIndex = true) {
    if (currentFilter === 'all') {
        filteredFlashcards = [...currentFlashcards];
    } else if (currentFilter === 'learning') {
        filteredFlashcards = currentFlashcards.filter(c => !userProgress.learnedCards[`${currentChapterIndex}-${c.originalIndex}`]);
    } else if (currentFilter === 'learned') {
        filteredFlashcards = currentFlashcards.filter(c => userProgress.learnedCards[`${currentChapterIndex}-${c.originalIndex}`]);
    }
    
    if (resetIndex) {
        cardIndex = 0;
    } else {
        if(cardIndex >= filteredFlashcards.length) cardIndex = 0;
    }
    
    document.getElementById("flashcard").classList.remove("flipped");
    updateFlashcardUI();
}

function updateFlashcardUI() {
    const frontEl = document.getElementById("card-front");
    const backTextEl = document.getElementById("card-back-text");
    const canvasEl = document.getElementById("chem-canvas");
    const counterEl = document.getElementById("flashcard-counter");
    const learnBtn = document.getElementById("btn-learn");

    if (filteredFlashcards.length === 0) {
        let msg = "Brak fiszek w tej kategorii.";
        if (currentFilter === 'learning') msg = "Umiesz już wszystko z tego działu! 🎉";
        if (currentFilter === 'learned') msg = "Jeszcze żadnej nie opanowałeś. Do boju! 🧪";

        frontEl.innerHTML = `<div class="card-content">${msg}</div>`;
        if (backTextEl) backTextEl.innerHTML = msg;
        if (canvasEl) canvasEl.style.display = "none";
        counterEl.innerText = "0 / 0";
        learnBtn.innerText = "Brak kart";
        learnBtn.classList.remove("learned");
        learnBtn.disabled = true;
        return;
    }

    const currentCard = filteredFlashcards[cardIndex];
    frontEl.innerHTML = '<div class="card-content">' + currentCard.front + '</div>';
    if (backTextEl) backTextEl.innerHTML = currentCard.back;
    counterEl.innerText = `${cardIndex + 1} / ${filteredFlashcards.length}`;
    
    if (canvasEl) {
        if (currentCard.smiles) {
            canvasEl.style.display = "block";
            let options = { width: 260, height: 140, bondThickness: 1.5, shortenBonds: true, theme: 'dark' };
            SmilesDrawer.parse(currentCard.smiles, function(tree) {
                let drawer = new SmilesDrawer.Drawer(options);
                drawer.draw(tree, "chem-canvas", "dark", false);
            }, function(err) { console.log("Błąd parsowania SMILES: ", err); });
        } else {
            canvasEl.style.display = "none";
        }
    }

    const cardKey = `${currentChapterIndex}-${currentCard.originalIndex}`;
    learnBtn.disabled = false;

    if (userProgress.learnedCards[cardKey]) {
        learnBtn.innerText = "✓ Umiesz to (Kliknij, aby cofnąć)";
        learnBtn.classList.add("learned");
    } else {
        learnBtn.innerText = "Umiem to! (+1 do statystyk)";
        learnBtn.classList.remove("learned");
    }
}

function flipCard() {
    if (filteredFlashcards.length > 0) document.getElementById("flashcard").classList.toggle("flipped");
}

function nextCard() {
    if (filteredFlashcards.length > 0) {
        cardIndex = (cardIndex + 1) % filteredFlashcards.length;
        if (currentFilter === 'all') { 
            userProgress.lastViewed[currentChapterIndex] = cardIndex;
            saveProgress();
        }
        document.getElementById("flashcard").classList.remove("flipped");
        setTimeout(updateFlashcardUI, 150);
    }
}

function prevCard() {
    if (filteredFlashcards.length > 0) {
        cardIndex = (cardIndex - 1 + filteredFlashcards.length) % filteredFlashcards.length;
        if (currentFilter === 'all') {
            userProgress.lastViewed[currentChapterIndex] = cardIndex;
            saveProgress();
        }
        document.getElementById("flashcard").classList.remove("flipped");
        setTimeout(updateFlashcardUI, 150);
    }
}

function toggleFlashcardLearned() {
    if (filteredFlashcards.length === 0) return;
    const currentCard = filteredFlashcards[cardIndex];
    const cardKey = `${currentChapterIndex}-${currentCard.originalIndex}`;
    const isNowLearned = !userProgress.learnedCards[cardKey];
    
    if (isNowLearned) {
        userProgress.learnedCards[cardKey] = true;
        userProgress.totalLearned += 1;
    } else {
        delete userProgress.learnedCards[cardKey];
        userProgress.totalLearned = Math.max(0, userProgress.totalLearned - 1); 
    }
    saveProgress();
    updateFlashcardUI();

    if (isNowLearned && currentFilter === 'all') {
        setTimeout(() => nextCard(), 400); 
    } else if (currentFilter !== 'all') {
        setTimeout(() => applyFilter(false), 400); 
    }
}

function updateProgressUI() {
    const statEl = document.getElementById("stat-fiszki");
    if(statEl) statEl.innerText = userProgress.totalLearned;
}

function resetProgress() {
    if(confirm("Na pewno chcesz wyzerować całe swoje statystyki nauki i pozycje fiszek?")) {
        userProgress = { learnedCards: {}, lastViewed: {}, totalLearned: 0 };
        saveProgress();
        if(currentChapterIndex !== null && document.getElementById("view-details").classList.contains("active")) {
            applyFilter(true);
        }
    }
}

// =========================================================
// SYSTEM ORGANICZNY: RYSOWANIE I NAZEWNICTWO IUPAC
// =========================================================
async function getIupacName(type) {
    if (type !== 'org') return;
    const resultBox = document.getElementById('iupac-result-org');
    
    if (!jsmeOrg) return;
    const smiles = jsmeOrg.smiles();
    
    if (!smiles) {
        resultBox.innerHTML = "❌ Najpierw narysuj strukturę!";
        return;
    }

    resultBox.innerHTML = "⏳ Analizowanie struktury i tłumaczenie IUPAC...";

    if (typeof resolveCompoundInCloud !== 'undefined') {
        const plName = await resolveCompoundInCloud(smiles, true);
        if (plName) {
            resultBox.innerHTML = `✅ Nazwa IUPAC:<br><span style="color: var(--accent); font-size: 19px; display:block; margin-top:8px;">${plName}</span>`;
        } else {
            resultBox.innerHTML = "⚠️ Związek nie istnieje w rejestrze lub zawiera błędną wartościowość wiązań.";
        }
    } else {
        resultBox.innerHTML = "⚠️ Brak funkcji tłumaczącej w bazie!";
    }
}

// =========================================================
// SYSTEM NIEORGANICZNY: EDYTOR UNICODE I TŁUMACZ
// =========================================================

// Stan formatowania: 'normal', 'sub', 'sup'
let formatMode = 'normal'; 
const unicodeSub = {'0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉','+':'₊','-':'₋'};
const unicodeSup = {'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','+':'⁺','-':'⁻'};

// Przełącznik przycisków indeksów
function toggleFormat(mode) {
    const subBtn = document.getElementById('btn-sub');
    const supBtn = document.getElementById('btn-sup');
    const input = document.getElementById('formula-input');
    
    // Jeśli kliknięto w ten sam aktywny przycisk -> Wyłącz formatowanie (Toggle Off)
    if (formatMode === mode) {
        formatMode = 'normal';
        if (subBtn) subBtn.classList.remove('active-tool');
        if (supBtn) supBtn.classList.remove('active-tool');
    } else {
        // Zmiana formatowania na nowe
        formatMode = mode;
        if (subBtn) subBtn.classList.toggle('active-tool', mode === 'sub');
        if (supBtn) supBtn.classList.toggle('active-tool', mode === 'sup');
    }
    if (input) input.focus(); // Zwraca focus bez chowania klawiatury
}

// Bezpieczne wstawianie tekstu w miejsce kursora (działa na <input>)
function insertText(text) {
    const input = document.getElementById('formula-input');
    if (!input) return;

    const start = input.selectionStart || 0;
    const end = input.selectionEnd || 0;
    const val = input.value || "";

    input.value = val.substring(0, start) + text + val.substring(end);
    input.selectionStart = input.selectionEnd = start + text.length;
    input.focus();
}

// Bezpieczne czyszczenie <input>
function clearEditor() {
    const input = document.getElementById('formula-input');
    if (input) {
        input.value = "";
        input.focus();
    }
    formatMode = 'normal';
    const subBtn = document.getElementById('btn-sub');
    const supBtn = document.getElementById('btn-sup');
    if (subBtn) subBtn.classList.remove('active-tool');
    if (supBtn) supBtn.classList.remove('active-tool');
}

// Przygotowanie danych do wysyłki w API (zamiana ₂ na 2)
function sanitizeForAPI(raw) {
    if (!raw) return "";
    const map = {
        '₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9','₊':'+','₋':'-',
        '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁺':'+','⁻':'-'
    };
    return raw.replace(/[₀-₉⁰-⁹₊₋⁺⁻]/g, m => map[m]);
}

async function getInorganicName() {
    const resultBox = document.getElementById('iupac-result-inorg');
    const input = document.getElementById('formula-input');
    const rawFormula = input ? input.value.trim() : "";
    
    if (!rawFormula) {
        resultBox.innerHTML = "❌ Najpierw wpisz wzór!";
        return;
    }

    // Pozbywamy się małych/górnych cyfr Unicode, by algorytm mógł normalnie liczyć ładunki
    const sanitizedFormula = sanitizeForAPI(rawFormula);

    if (typeof parseInorganicFormulaLocal !== 'undefined') {
        const localName = parseInorganicFormulaLocal(sanitizedFormula);
        if (localName) {
            resultBox.innerHTML = `✅ Oficjalna nazwa systematyczna:<br><span style="color: var(--accent); font-size: 20px; display:block; margin-top: 10px;">${localName}</span>`;
            return;
        }
    }

    resultBox.innerHTML = "⏳ Przeszukuję globalne rejestry chemiczne...";
    
    if (typeof resolveCompoundInCloud !== 'undefined') {
        const cloudName = await resolveCompoundInCloud(sanitizedFormula, false);

        if (cloudName) {
            resultBox.innerHTML = `✅ Rozpoznano związek:<br><span style="color: var(--accent); font-size: 20px; display:block; margin-top: 10px;">${cloudName}</span>`;
        } else {
            resultBox.innerHTML = "⚠️ Nie rozpoznano wzoru. Sprawdź poprawność stechiometryczną i nawiasy (np. CuSO4, Fe2(SO4)3, K4[Fe(CN)6]).";
        }
    } else {
         resultBox.innerHTML = "⚠️ Brak podpiętej funkcji tłumaczącej w chmurze!";
    }
}
// =========================================================
// SYSTEM ACTIVE RECALL W NOTATKACH (Odkrywanie luk)
// =========================================================
function toggleRecall(el) {
    el.classList.toggle('revealed');
}
// =========================================================
// SYSTEM GAMIFIKACJI: STREAK (Licznik codziennej nauki)
// =========================================================

function updateStreak() {
    const streakDisplay = document.getElementById('streak-counter');
    if (!streakDisplay) return;

    // Pobieramy aktualną datę (format YYYY-MM-DD dla łatwego porównywania)
    const now = new Date();
    const todayStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
    
    // Pobieramy dane z pamięci telefonu
    let streakData = JSON.parse(localStorage.getItem('chemia_streak_data')) || { streak: 0, lastVisit: null };
    
    // Jeśli użytkownik już dzisiaj wchodził, tylko wyświetlamy streak i kończymy (nie nabijamy 2 razy dziennie)
    if (streakData.lastVisit === todayStr) {
        streakDisplay.innerText = streakData.streak;
        return;
    }

    // Obliczamy wczorajszą datę
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.getFullYear() + '-' + String(yesterday.getMonth() + 1).padStart(2, '0') + '-' + String(yesterday.getDate()).padStart(2, '0');

    if (streakData.lastVisit === yesterdayStr) {
        // Jeśli był wczoraj, dodajemy 1 do streaka
        streakData.streak += 1;
    } else {
        // Jeśli to pierwszy raz lub ominął jakiś dzień -> zerujemy i ustawiamy na 1
        streakData.streak = 1;
    }

    // Zapisujemy dzisiejszą wizytę
    streakData.lastVisit = todayStr;
    localStorage.setItem('chemia_streak_data', JSON.stringify(streakData));
    
    // Aktualizujemy wyświetlacz
    streakDisplay.innerText = streakData.streak;
}