document.addEventListener("DOMContentLoaded", function () {
    let scores = [];
    
    const scoreInput = document.getElementById("score");
    const addScoreButton = document.getElementById("addScore");
    const averageSpan = document.getElementById("average");
    const highestSpan = document.getElementById("highest");
    const scoreList = document.getElementById("scoreList");
    
    addScoreButton.addEventListener("click", function () {
        let scoreValue = parseFloat(scoreInput.value);
        
        if (!isNaN(scoreValue) && scoreValue >= 0 && scoreValue <= 20) {
            scores.push(scoreValue);
            updateStats();
            updateScoreList();
            scoreInput.value = "";
        } else {
            alert("Voer een geldige score in tussen 0 en 20.");
        }
    });
    
    function updateStats() {
        let sum = scores.reduce((acc, score) => acc + score, 0);
        let average = (sum / scores.length).toFixed(2);
        let highest = Math.max(...scores);
        
        averageSpan.textContent = scores.length ? average : 0;
        highestSpan.textContent = scores.length ? highest : 0;
    }
    
    function updateScoreList() {
        scoreList.innerHTML = scores.map(score => `<li>${score}</li>`).join('');
    }
});
