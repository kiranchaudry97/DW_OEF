class Product {
    constructor(naam, prijs, voorraad) {
        this.naam = naam;
        this.prijs = prijs;
        this.voorraad = voorraad;
    }

    set prijs(nieuwePrijs) {
        this._prijs = Math.max(0, nieuwePrijs);
    }

    get prijs() {
        return this._prijs;
    }

    set voorraad(nieuweVoorraad) {
        this._voorraad = Math.max(0, nieuweVoorraad);
    }

    get voorraad() {
        return this._voorraad;
    }

    get verkoopprijs() {
        return this.prijs * 1.21;
    }

    get beschikbaar() {
        return this.voorraad > 0;
    }

    verkoop(aantal) {
        if (aantal > this.voorraad) {
            console.log(`Niet genoeg voorraad van ${this.naam}.`);
        } else {
            this.voorraad -= aantal;
            console.log(`${aantal} stuks van ${this.naam} verkocht.`);
        }
    }

    static filterBeschikbareProducten(producten) {
        return producten.filter(product => product.beschikbaar);
    }
}

const producten = [
    new Product("cream", 25, 5),
    new Product("tandpasta", 10, 0),
    new Product("handcream", 15, 10)
];

const beschikbareProducten = Product.filterBeschikbareProducten(producten);

const outputDiv = document.getElementById("output");

producten.forEach(product => {
    const productInfo = document.createElement("p");
    productInfo.innerHTML = `<strong>${product.naam}</strong>: Prijs: €${product.prijs.toFixed(2)}, Verkoopprijs: €${product.verkoopprijs.toFixed(2)}, Beschikbaar: ${product.beschikbaar ? "Ja" : "Nee"}`;
    outputDiv.appendChild(productInfo);
});

const beschikbareDiv = document.createElement("div");
beschikbareDiv.innerHTML = `<h3>Beschikbare Producten:</h3>`;
beschikbareProducten.forEach(product => {
    const productInfo = document.createElement("p");
    productInfo.innerHTML = `<strong>${product.naam}</strong>: Verkoopprijs: €${product.verkoopprijs.toFixed(2)}`;
    beschikbareDiv.appendChild(productInfo);
});
outputDiv.appendChild(beschikbareDiv);
