

const grid = document.getElementById("grid");
const redCountEl = document.getElementById("redCount");
const blueCountEl = document.getElementById("blueCount");
const greenCountEl = document.getElementById("greenCount");
let colorCounts = { red: 0, blue: 0, green: 0 };

function updateStats() {
    redCountEl.textContent = colorCounts.red;
    blueCountEl.textContent = colorCounts.blue;
    greenCountEl.textContent = colorCounts.green;
}

function resetCounts() {
    colorCounts = { red: 0, blue: 0, green: 0 };
    document.querySelectorAll(".cell").forEach(cell => {
        if (cell.style.backgroundColor === "red") colorCounts.red++;
        else if (cell.style.backgroundColor === "blue") colorCounts.blue++;
        else if (cell.style.backgroundColor === "green") colorCounts.green++;
    });
    updateStats();
}

for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "red";
        resetCounts();
    });

    cell.addEventListener("click", () => {
        cell.style.backgroundColor = "blue";
        resetCounts();
    });

    cell.addEventListener("dblclick", () => {
        cell.style.backgroundColor = "green";
        resetCounts();
    });

    grid.appendChild(cell);
}
