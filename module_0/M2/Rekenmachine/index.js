'use strict';

const getalInput1 = document.getElementById('getal1');
const getalInput2 = document.getElementById('getal2');
const berekenKnop = document.getElementById('bereken'); 
const resultaatVeld = document.getElementById('resultaat');

berekenKnop.addEventListener('click', () => {
    const nr1 = Number(getalInput1.value);
    const nr2 = Number(getalInput2.value);

    if (isNaN(nr1) || isNaN(nr2)) {
        resultaatVeld.textContent = "Voer geldige getallen in";
        return;
    }

    const som = nr1 + nr2;
    resultaatVeld.textContent = `${som}`; 
});
