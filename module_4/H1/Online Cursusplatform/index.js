class Persoon {
    constructor(naam, leeftijd, email) {
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.email = email;
    }
}

class Student extends Persoon {
    constructor(naam, leeftijd, email, studentnummer, studiejaar) {
        super(naam, leeftijd, email);
        this.studentnummer = studentnummer;
        this.studiejaar = studiejaar;
        this.vakken = [];
    }

    samenvatting() {
        return `${this.naam} (Studentnummer: ${this.studentnummer}) is ${this.leeftijd} jaar oud en volgt ${this.vakken.length} vakken.`;
    }
}

class Docent extends Persoon {
    constructor(naam, leeftijd, email, vakgebied, aanstellingsdatum) {
        super(naam, leeftijd, email);
        this.vakgebied = vakgebied;
        this.aanstellingsdatum = aanstellingsdatum;
    }

    samenvatting() {
        return `${this.naam} geeft les in ${this.vakgebied} sinds ${this.aanstellingsdatum}.`;
    }
}

class Cursus {
    constructor(titel, beschrijving, docent, maximumStudenten) {
        this.titel = titel;
        this.beschrijving = beschrijving;
        this.docent = docent;
        this.maximumStudenten = Math.max(1, maximumStudenten);
        this.ingeschrevenStudenten = [];
    }

    inschrijven(student) {
        if (this.ingeschrevenStudenten.length < this.maximumStudenten) {
            if (!this.ingeschrevenStudenten.includes(student)) {
                this.ingeschrevenStudenten.push(student);
                return `Student ${student.naam} ingeschreven voor ${this.titel}.`;
            }
            return `Student ${student.naam} is al ingeschreven voor ${this.titel}.`;
        }
        return `Cursus ${this.titel} is vol.`;
    }
}

class Inschrijving {
    constructor(student, cursus, datum) {
        this.student = student;
        this.cursus = cursus;
        this.datum = datum;
        this.status = "actief";
    }

    wijzigStatus(nieuweStatus) {
        this.status = nieuweStatus;
    }
}

const studenten = [
    new Student("Kiran", 20, "Kiran@example.com", 1001, 2),
    new Student("Jamil", 22, "Jamim@example.com", 1002, 3),
    new Student("Fun", 19, "F@example.com", 1003, 1)
];

const docenten = [
    new Docent("Dr. Smith", 45, "smith@example.com", "Wiskunde", "2010"),
    new Docent("Prof. Johnson", 50, "johnson@example.com", "Informatica", "2005")
];

const cursussen = [
    new Cursus("Programmeren", "Leer de basis van programmeren", docenten[1], 3),
    new Cursus("Dynamic web", "Verdiepende wiskundecursus", docenten[0], 2)
];

const inschrijvingen = [
    new Inschrijving(studenten[0], cursussen[0], "2024-03-14"),
    new Inschrijving(studenten[1], cursussen[1], "2024-03-14"),
    new Inschrijving(studenten[2], cursussen[0], "2024-03-14")
];

function toonStudenten() {
    document.getElementById("student-list").innerHTML = studenten.map(s => `<p>${s.samenvatting()}</p>`).join("");
}

function toonDocenten() {
    document.getElementById("teacher-list").innerHTML = docenten.map(d => `<p>${d.samenvatting()}</p>`).join("");
}

function toonCursussen() {
    document.getElementById("course-list").innerHTML = cursussen.map(c => `<p>${c.titel} - ${c.docent.naam} (${c.ingeschrevenStudenten.length}/${c.maximumStudenten} ingeschreven)</p>`).join("");
}

function toonInschrijvingen() {
    document.getElementById("enrollment-list").innerHTML = inschrijvingen.map(i => `<p>${i.student.naam} ingeschreven voor ${i.cursus.titel} op ${i.datum} (Status: ${i.status})</p>`).join("");
}

toonStudenten();
toonDocenten();
toonCursussen();
toonInschrijvingen();
