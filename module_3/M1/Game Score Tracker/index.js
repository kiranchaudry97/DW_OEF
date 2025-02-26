const verwerkScore = (naam = "Onbekend", score = 0) => ({
    naam: naam.trim() || "Onbekend",
    score: isNaN(score) || score < 0 ? 0 : Number(score),
    timestamp: new Date().toLocaleString()
});

const scores = [];

const voegScoreToe = () => {
    scores.push(verwerkScore(playerName.value, score.value));
    scoreBoard.innerHTML = scores.map(s => `<p>${s.naam}: ${s.score} punten (📅 ${s.timestamp})</p>`).join("");
};
