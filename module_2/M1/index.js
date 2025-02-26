let winkelwagen = [];
const productNaamInvoer = document.getElementById("productName");
const productPrijsInvoer = document.getElementById("productPrice");
const voegToeAanWinkelwagenKnop = document.getElementById("addToCart");
const sorteerOpPrijsKnop = document.getElementById("sortByPrice");
const totaalWeergave = document.getElementById("total");
const winkelwagenItems = document.getElementById("cartItems");

voegToeAanWinkelwagenKnop.addEventListener("click", function () {
    const naam = productNaamInvoer.value.trim();
    const prijs = parseFloat(productPrijsInvoer.value.trim());

    if (naam && !isNaN(prijs) && prijs > 0) {
        winkelwagen.push({ naam, prijs });
        werkWinkelwagenBij();
        productNaamInvoer.value = "";
        productPrijsInvoer.value = "";
    } else {
        alert("Voer een geldige productnaam en prijs in.");
    }
});

function werkWinkelwagenBij() {
    winkelwagenItems.innerHTML = winkelwagen.map((item, index) => `
        <li>
            ${item.naam} - €${item.prijs.toFixed(2)} 
            <button onclick="verwijderUitWinkelwagen(${index})">Verwijder</button>
        </li>
    `).join('');
    werkTotaalBij();
}

function werkTotaalBij() {
    const totaal = winkelwagen.reduce((acc, item) => acc + item.prijs, 0).toFixed(2);
    totaalWeergave.textContent = totaal;
}

sorteerOpPrijsKnop.addEventListener("click", function () {
    winkelwagen.sort((a, b) => a.prijs - b.prijs);
    werkWinkelwagenBij();
});

window.verwijderUitWinkelwagen = function (index) {
    winkelwagen.splice(index, 1);
    werkWinkelwagenBij();
}
