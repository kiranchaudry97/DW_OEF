document.addEventListener("DOMContentLoaded", function () {
    let specialElements = document.querySelectorAll(".special");
    specialElements.forEach(element => {
        element.style.color = "red";
    });

    let tweedeParagraaf = document.querySelector(".container p:nth-of-type(2)");
    if (tweedeParagraaf) {
        tweedeParagraaf.style.textDecoration = "underline";
    }

    let outputDiv = document.getElementById("output");
    if (outputDiv) {
        outputDiv.textContent = `Aantal special elementen: ${specialElements.length}`;
    }
});
