
'use strict';

let score = 0;
let naam = prompt("Wat is je naam?");
alert(`Welkom bij de quiz, ${naam}!`);

const vragen = [
    { vraag: "Wat betekent HTML?", correct: "hypertext markup language" },
    { vraag: "Wat is het nieuwe keyword voor variabelen in JavaScript?", correct: "let" },
    { vraag: "Hoe selecteer je een element met id 'test' in CSS?", correct: "#test" }
];

vragen.forEach(({ vraag, correct }) => {
    let antwoord = prompt(vraag).toLowerCase();
    if (antwoord.includes(correct)) {
        alert("Goed gedaan!");
        score++;
    } else {
        alert(`Helaas! Het juiste antwoord was: ${correct}`);
    }
});

alert(`${naam}, je hebt ${score} van de ${vragen.length} vragen goed!`);
