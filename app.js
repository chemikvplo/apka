// Baza fiszek z chemii rozszerzonej
const flashcards = [
    { front: "Co opisuje reguła Zajceva?", back: "W reakcjach eliminacji wodór odłącza się głównie od atomu węgla o mniejszej liczbie atomów wodoru (powstaje bardziej ugrupowany alken)." },
    { front: "Jaki odczyn ma wodny roztwór octanu sodu (CH3COONa)?", back: "Odczyn zasadowy (hydroliza anionowa)." },
    { front: "Podaj wzór kwasu perchlorowego", back: "HClO4" },
    { front: "Jak zmienia się moc kwasów tlenowych w grupie wraz ze wzrostem liczby atomów tlenu resztkowego (przy tej samej liczbie atomów wodoru)?", back: "Moc kwasu rośnie wraz ze wzrostem liczby atomów tlenu." }
];

let currentCardIndex = 0;

function loadCard() {
    const card = flashcards[currentCardIndex];
    document.getElementById("cardFront").innerText = card.front;
    document.getElementById("cardBack").innerText = card.back;
    document.getElementById("flashcard").classList.remove("flipped");
}

function flipsCard() {
    document.getElementById("flashcard").classList.toggle("flipped");
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcards.length;
    loadCard();
}

// Obsługa LocalStorage (zapisywanie progresu bez konta)
let score = localStorage.getItem("chemia_score") ? parseInt(localStorage.getItem("chemia_score")) : 0;
document.getElementById("scoreCount").innerText = score;

function completeTask() {
    score++;
    localStorage.setItem("chemia_score", score);
    document.getElementById("scoreCount").innerText = score;
}

function resetProgress() {
    score = 0;
    localStorage.removeItem("chemia_score");
    document.getElementById("scoreCount").innerText = score;
}

// Uruchomienie fiszek przy starcie
loadCard();