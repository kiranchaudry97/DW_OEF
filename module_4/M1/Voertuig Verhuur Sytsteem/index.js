class Voertuig {
    constructor(merk, model, jaar, verhuurPrijs) {
        this.merk = merk;
        this.model = model;
        this.jaar = jaar;
        this.verhuurPrijs = verhuurPrijs;
        this.beschikbaar = true;
    }
    verhuur = () => {
        if (!this.beschikbaar) return `${this.merk} ${this.model} is al verhuurd.`;
        this.beschikbaar = false;
        return ` ${this.merk} ${this.model} is verhuurd voor €${this.verhuurPrijs} per dag.`;
    };
    retourneer = () => {
        if (this.beschikbaar) return `${this.merk} ${this.model} is al beschikbaar.`;
        this.beschikbaar = true;
        return ` ${this.merk} ${this.model} is geretourneerd en weer beschikbaar.`;
    };
}

class Auto extends Voertuig {
    constructor(merk, model, jaar, verhuurPrijs, aantalDeuren, brandstofType) {
        super(merk, model, jaar, verhuurPrijs);
        this.aantalDeuren = aantalDeuren;
        this.brandstofType = brandstofType;
    }
    verhuur = () => ` ${super.verhuur()} (${this.aantalDeuren}-deurs, ${this.brandstofType})`;
}

class Motor extends Voertuig {
    constructor(merk, model, jaar, verhuurPrijs, cilinderinhoud, type) {
        super(merk, model, jaar, verhuurPrijs);
        this.cilinderinhoud = cilinderinhoud;
        this.type = type;
    }
    verhuur = () => `🏍️ ${super.verhuur()} (${this.type}, ${this.cilinderinhoud}cc)`;
}

const voertuigen = [
    new Auto("Toyota", "Corolla", 2022, 50, 5, "Benzine"),
    new Auto("Volkswagen", "Golf", 2021, 45, 5, "Diesel"),
    new Motor("Yamaha", "R1", 2023, 80, 1000, "Sport"),
    new Motor("Honda", "Goldwing", 2020, 70, 1800, "Tour")
];

const outputDiv = document.getElementById("output");
const voertuigTable = document.getElementById("voertuigTable").querySelector("tbody");

const updateTable = () => {
    voertuigTable.innerHTML = "";
    voertuigen.forEach((v, index) => {
        const row = voertuigTable.insertRow();
        row.className = v.beschikbaar ? "" : "unavailable";
        row.innerHTML = `
            <td>${v.merk}</td>
            <td>${v.model}</td>
            <td>${v.jaar}</td>
            <td>${v instanceof Auto ? "Auto" : "Motor"}</td>
            <td>€${v.verhuurPrijs}</td>
            <td>${v.beschikbaar ? " Beschikbaar" : " Verhuurd"}</td>
            <td>
                <button onclick="handleVerhuur(${index})">Verhuur</button>
                <button onclick="handleRetour(${index})">Retourneer</button>
            </td>
        `;
    });
};

const handleVerhuur = (index) => {
    const bericht = voertuigen[index].verhuur();
    outputDiv.innerHTML = `<p>${bericht}</p>`;
    updateTable();
};

const handleRetour = (index) => {
    const bericht = voertuigen[index].retourneer();
    outputDiv.innerHTML = `<p>${bericht}</p>`;
    updateTable();
};

updateTable();