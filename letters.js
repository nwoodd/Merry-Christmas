function generateLetter() {
    const letters = [
    "I am so proud of you.",
    "Be delusional!",
    "You are so capable.",
    "You truly are the most hard-working person I know.",
    "You can do hard things.",
    "You survived orgo.",
    "I love you and I am proud of you.",
    "You are my brilliant girl.",
    "You can do anything you set your mind to.",
    
    ];
    const randomIndex = Math.floor(Math.random() * letters.length);
    const letterBox = document.getElementById("letterDisplay");

    letterBox.textContent = letters[randomIndex];
    letterBox.style.display = "block";
}