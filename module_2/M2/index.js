document.addEventListener("DOMContentLoaded", function () {
    let scores = [];
    
    const scoreInvoer = document.getElementById("score");
    const voegScoreToeKnop = document.getElementById("addScore");
    const gemiddeldeWeergave = document.getElementById("average");
    const hoogsteWeergave = document.getElementById("highest");
    const scoreLijst = document.getElementById("scoreList");
    
    voegScoreToeKnop.addEventListener("click", function () {
        let scoreWaarde = parseFloat(scoreInvoer.value);
        
        if (!isNaN(scoreWaarde) && scoreWaarde >= 0 && scoreWaarde <= 20) {
            scores.push(scoreWaarde);
            werkStatistiekenBij();
            werkScoreLijstBij();
            scoreInvoer.value = "";
        } else {
            alert("Voer een geldige score in tussen 0 en 20.");
        }
    });
    
    function werkStatistiekenBij() {
        let som = scores.reduce((acc, score) => acc + score, 0);
        let gemiddelde = (som / scores.length).toFixed(2);
        let hoogste = Math.max(...scores);
        
        gemiddeldeWeergave.textContent = scores.length ? gemiddelde : 0;
        hoogsteWeergave.textContent = scores.length ? hoogste : 0;
    }
    
    function werkScoreLijstBij() {
        scoreLijst.innerHTML = scores.map(score => `<li>${score}</li>`).join('');
    }

    // Overzicht Studenten Resultaten
    let studenten = {
        Alex: [],
        Sam: [],
        Jo: []
    };
    
    const studentSelectie = document.getElementById("student");
    const vakInvoer = document.getElementById("course");
    const cijferInvoer = document.getElementById("grade");
    const voegCijferToeKnop = document.getElementById("addGrade");
    const studentenOverzicht = document.getElementById("studentOverview");
    
    voegCijferToeKnop.addEventListener("click", function () {
        let student = studentSelectie.value;
        let vak = vakInvoer.value.trim();
        let cijfer = parseFloat(cijferInvoer.value);
        
        if (vak && !isNaN(cijfer) && cijfer >= 0 && cijfer <= 20) {
            studenten[student].push({ vak, cijfer });
            werkStudentenOverzichtBij();
            vakInvoer.value = "";
            cijferInvoer.value = "";
        } else {
            alert("Voer een geldige vaknaam en score in tussen 0 en 20.");
        }
    });
    
    function werkStudentenOverzichtBij() {
        studentenOverzicht.innerHTML = Object.entries(studenten).map(([naam, resultaten]) => {
            if (resultaten.length === 0) return `<h3>${naam}</h3><p>Geen resultaten.</p>`;
            
            let cijfers = resultaten.map(res => res.cijfer);
            let gemiddelde = (cijfers.reduce((acc, cijfer) => acc + cijfer, 0) / cijfers.length).toFixed(2);
            let hoogste = Math.max(...cijfers);
            let laagste = Math.min(...cijfers);
            
            return `
                <h3>${naam}</h3>
                <ul>
                    ${resultaten.map(res => `<li>${res.vak}: ${res.cijfer}</li>`).join('')}
                </ul>
                <p>Gemiddelde: ${gemiddelde}</p>
                <p>Hoogste score: ${hoogste}</p>
                <p>Laagste score: ${laagste}</p>
            `;
        }).join('');
    }
});
