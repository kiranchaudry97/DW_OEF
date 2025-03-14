class Student {
    constructor(naam, vakken) {
        this.naam = naam;
        this.vakken = vakken;
        this.punten = {}; // Punten opslaan per vak
    }

    voegPuntenToe(vak, punt) {
        if (this.vakken.includes(vak)) {
            this.punten[vak] = punt; 
            return `Punt ${punt} toegevoegd voor ${vak}`;
        } else {
            return `Vak ${vak} is niet geregistreerd voor ${this.naam}`;
        }
    }

    gemiddelde() {
        let totaal = 0;
        let aantalVakken = 0;

        for (const vak in this.punten) {
            totaal += this.punten[vak]; 
            aantalVakken++;
        }

        return aantalVakken > 0 ? totaal / aantalVakken : 0;
    }

    ToonRapport() {
        let rapport = `<h2>Rapport voor ${this.naam}</h2>`;
        rapport += "<ul>";

        for (const vak in this.punten) {
            rapport += `<li>${vak}: ${this.punten[vak]}/20</li>`;
        }

        rapport += "</ul>";
        document.body.innerHTML = rapport; 
    }
}


const student1 = new Student("Kiran", ["Wiskunde", "Nederlands"]);
console.log(student1.voegPuntenToe("Wiskunde", 10));
console.log(student1.voegPuntenToe("Engels", 8)); 
student1.ToonRapport();
console.log(`Gemiddelde: ${student1.gemiddelde()}`);
