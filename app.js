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
    learnedCards: {}, 
    lastViewed: {},   
    totalLearned: 0
};

function saveProgress() {
    localStorage.setItem("chemia_user_progress", JSON.stringify(userProgress));
    updateProgressUI();
}

document.addEventListener("DOMContentLoaded", () => {
    renderChaptersGrid();
    updateProgressUI();

    // 1. Obsługa klawisza ENTER w edytorze
    const formulaInput = document.getElementById('formula-input');
    if (formulaInput) {
        formulaInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                getInorganicName();
            }
        });
    }

    // 2. Monitorowanie przewijania strony dla przycisku "Wróć do góry"
    const scrollBtn = document.getElementById('scroll-to-top');
    if(scrollBtn) {
        window.addEventListener('scroll', function(e) {
            // Łapiemy element, który faktycznie jest w danym momencie scrollowany
            let target = e.target;
            if (target === document || target === window) target = document.documentElement;
            
            // Pojawia się, jeśli użytkownik zjechał o 300 pikseli w dół
            if (target.scrollTop > 300) {
                scrollBtn.classList.add('visible');
            } else if (target.scrollTop < 100) {
                scrollBtn.classList.remove('visible');
            }
        }, true); // "true" pozwala przechwycić scroll z każdego zagnieżdżonego diva
    }
});

// Funkcja przewijająca na samą górę wszystkich sekcji
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelectorAll('.tab-content, .view, .card-back').forEach(el => {
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
    
    const data = appData[index] || { notatki: "Wkrótce...", fiszki: [], zadania: "Wkrótce..." };
    document.getElementById("content-notatki").innerHTML = data.notatki;
    document.getElementById("content-zadania").innerHTML = data.zadania;
    
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

    const plName = await resolveCompoundInCloud(smiles, true);
    if (plName) {
        resultBox.innerHTML = `✅ Nazwa IUPAC:<br><span style="color: var(--accent); font-size: 19px; display:block; margin-top:8px;">${plName}</span>`;
    } else {
        resultBox.innerHTML = "⚠️ Związek nie istnieje w rejestrze lub zawiera błędną wartościowość wiązań.";
    }
}

// =========================================================
// SYSTEM NIEORGANICZNY: EDYTOR I SILNIK STECHIOMETRYCZNY
// =========================================================

// Usunięto tutaj wywołanie .focus() - zapobiega to gubieniu kursora i naprawia problem "podwójnych indeksów"
function formatText(command) {
    document.execCommand(command, false, null);
}

function insertText(text) {
    document.execCommand('insertText', false, text);
}

function clearEditor() {
    const editor = document.getElementById('formula-input');
    editor.innerHTML = "";
    editor.focus(); // Focus potrzebny tylko po pełnym wyczyszczeniu pola
}

async function getInorganicName() {
    const resultBox = document.getElementById('iupac-result-inorg');
    const rawFormula = document.getElementById('formula-input').innerText.trim();
    
    if (!rawFormula) {
        resultBox.innerHTML = "❌ Najpierw wpisz wzór!";
        return;
    }

    // ETAP 1: Natychmiastowa analiza matematyczno-stechiometryczna w nomenklatura.js
    const localName = parseInorganicFormulaLocal(rawFormula);
    if (localName) {
        resultBox.innerHTML = `✅ Oficjalna nazwa systematyczna:<br><span style="color: var(--accent); font-size: 20px; display:block; margin-top: 10px;">${localName}</span>`;
        return;
    }

    // ETAP 2: Jeśli to wzór organiczny lub nietypowy minerał -> Chmura (PubChem + Wikidata PL + Translator)
    resultBox.innerHTML = "⏳ Przeszukuję globalne rejestry chemiczne...";
    const cloudName = await resolveCompoundInCloud(rawFormula, false);

    if (cloudName) {
        resultBox.innerHTML = `✅ Rozpoznano związek:<br><span style="color: var(--accent); font-size: 20px; display:block; margin-top: 10px;">${cloudName}</span>`;
    } else {
        resultBox.innerHTML = "⚠️ Nie rozpoznano wzoru. Sprawdź poprawność stechiometryczną i nawiasy (np. CuSO4, Fe2(SO4)3, K4[Fe(CN)6]).";
    }
}