const cursussen = [];
const studentenLijst = [];

const cursusTitel = document.getElementById("courseTitle");
const cursusBeschrijving = document.getElementById("courseDesc");
const cursusKnop = document.getElementById("addCourse");
const cursusWeergave = document.getElementById("courseList");
const studentNaam = document.getElementById("studentName");
const cursusKeuze = document.getElementById("coursePicker");
const inschrijvenKnop = document.getElementById("enrollStudent");
const studentWeergave = document.getElementById("studentList");

cursusKnop.addEventListener("click", function () {
    let titel = cursusTitel.value.trim();
    let beschrijving = cursusBeschrijving.value.trim();
    
    if (titel && beschrijving) {
        cursussen.push({ titel, beschrijving, studenten: [] });
        werkCursusOverzichtBij();
        cursusTitel.value = "";
        cursusBeschrijving.value = "";
    } else {
        alert("Voer een geldige titel en beschrijving in.");
    }
});

function werkCursusOverzichtBij() {
    cursusWeergave.innerHTML = cursussen.map(cursus => `<p>${cursus.titel}: ${cursus.beschrijving}</p>`).join('');
    cursusKeuze.innerHTML = cursussen.map(cursus => `<option value="${cursus.titel}">${cursus.titel}</option>`).join('');
}

inschrijvenKnop.addEventListener("click", function () {
    let naam = studentNaam.value.trim();
    let gekozenCursus = cursusKeuze.value;
    
    if (naam && gekozenCursus) {
        let student = { naam, cursussen: [gekozenCursus] };
        studentenLijst.push(student);
        werkStudentOverzichtBij();
        studentNaam.value = "";
    } else {
        alert("Voer een geldige naam en cursus in.");
    }
});

function werkStudentOverzichtBij() {
    studentWeergave.innerHTML = studentenLijst.map(student => `<p>${student.naam}: ${student.cursussen.join(", ")}</p>`).join('');
}
