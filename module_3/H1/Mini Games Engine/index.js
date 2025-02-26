const maakSpeler = (naam = "Player 1") => ({ naam, level: 1, health: 100 });

const doeSchade = (speler, schade) => speler.health = Math.max(speler.health - schade, 0);

const levelOmhoog = speler => { speler.level++; speler.health = 100; };

let speler;

const updateUI = () => {
    playerStats.innerHTML = `👤 ${speler.naam} | 🔼 Level: ${speler.level} | ❤️ Health: ${speler.health}`;
};

const maakNieuweSpeler = () => { speler = maakSpeler(playerName.value || undefined); updateUI(); };

const doeSchadeBijSpeler = () => { speler && doeSchade(speler, 25); updateUI(); };

const levelSpelerOp = () => { speler && levelOmhoog(speler); updateUI(); };
