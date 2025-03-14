class Bankrekening {
    static laatsteRekeningNummer = 1000;
    static transacties = [];
    
    constructor(eigenaar, saldo = 0) {
        this.rekeningnummer = ++Bankrekening.laatsteRekeningNummer;
        this.eigenaar = eigenaar;
        this.saldo = saldo;
    }

    storten(bedrag) {
        if (bedrag > 0) {
            this.saldo += bedrag;
            Bankrekening.transacties.push(`Storting: ${bedrag} op rekening ${this.rekeningnummer}`);
            this.updateUI();
        }
    }

    opnemen(bedrag) {
        if (bedrag > 0 && bedrag <= this.saldo) {
            this.saldo -= bedrag;
            Bankrekening.transacties.push(`Opname: ${bedrag} van rekening ${this.rekeningnummer}`);
            this.updateUI();
        }
    }

    overzicht() {
        return `Rekeningnummer: ${this.rekeningnummer}, Eigenaar: ${this.eigenaar}, Saldo: ${this.saldo}`;
    }

    updateUI() {
        document.getElementById("accounts").innerHTML = [rekening1, rekening2]
            .map(r => `<p>${r.overzicht()}</p>`).join('');
        document.getElementById("transactions").innerHTML = `
            <h3>Transacties:</h3>
            <ul>${Bankrekening.transacties.map(t => `<li>${t}</li>`).join('')}</ul>
        `;
    }
}

class Spaarrekening extends Bankrekening {
    constructor(eigenaar, saldo, rentepercentage) {
        super(eigenaar, saldo);
        this.rentepercentage = rentepercentage;
    }

    renteToevoegen() {
        this.saldo += this.saldo * (this.rentepercentage / 100);
        Bankrekening.transacties.push(`Rente toegevoegd op rekening ${this.rekeningnummer}`);
        this.updateUI();
    }
}

// Voorbeeldgebruik
const rekening1 = new Bankrekening("Kiran", 500);
const rekening2 = new Spaarrekening("Jamil", 1000, 2);

rekening1.storten(200);
rekening2.opnemen(500);
rekening2.renteToevoegen();

rekening1.updateUI();
