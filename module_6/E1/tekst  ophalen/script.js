document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("haalTekstOp");
    const resultaatDiv = document.getElementById("resultaat");

    const fetchPost = async () => {
        resultaatDiv.innerHTML = "<p>Bezig met ophalen...</p>";

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

            if (!response.ok) {
                throw new Error(`Fout bij ophalen: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            console.log("Ontvangen data:", data);

            if (!data || !data.title || !data.body) {
                throw new Error("Ongeldige data ontvangen.");
            }

            const formattedText = `
                <h2>${data.title}</h2>
                <p>${data.body}</p>
            `;
            resultaatDiv.innerHTML = formattedText;

        } catch (error) {
            console.error("Fout bij het ophalen van gegevens:", error);
            resultaatDiv.innerHTML = `<p class="error">Er is een fout opgetreden: ${error.message}</p>`;
        }
    };

    button.addEventListener("click", fetchPost);
});
