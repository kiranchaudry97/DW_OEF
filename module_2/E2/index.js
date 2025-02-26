const receptenNaamInput = document.getElementById("recipeName");
const bereidingstijdInput = document.getElementById("prepTime");
const ingredientsInput = document.getElementById("ingredients");
const generateCardButton = document.getElementById("generateCard");
const resultaatDiv = document.getElementById("result");

generateCardButton.addEventListener("click", function () {
    const receptenNaam = receptenNaamInput.value.trim();
    const bereidingstijd = bereidingstijdInput.value.trim();
    const ingredients = ingredientsInput.value.trim().split("\n").map(ing => ing.trim()).filter(ing => ing);

    if (receptenNaam && bereidingstijd && ingredients.length > 0) {
        resultaatDiv.innerHTML = `
            <h2>🥘 ${receptenNaam}</h2>
            <p>⏱️ Bereidingstijd: ${bereidingstijd} minuten</p>
            <h3>Ingrediënten:</h3>
            <ul>
                ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
        `;
    } else {
        alert("Vul alle velden correct in.");
    }
});