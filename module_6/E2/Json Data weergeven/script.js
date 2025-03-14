document.addEventListener("DOMContentLoaded", () => {
    const gebruikersContainer = document.getElementById("gebruikers-container");

    const fetchUsers = async () => {
        gebruikersContainer.innerHTML = "";

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");

            if (!response.ok) {
                throw new Error(`Fout bij ophalen: ${response.status} ${response.statusText}`);
            }

            const users = await response.json();
            console.log("Ontvangen gebruikers:", users);

            const gebruikersLijst = document.createElement("ul");

            users.forEach(user => {
                const gebruikerItem = document.createElement("li");
                
                const naam = user.name.split(" ").map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                ).join(" ");

                gebruikerItem.innerHTML = `
                    <strong>${naam}</strong><br>
                    <em>Email:</em> ${user.email}<br>
                    <em>Telefoon:</em> ${user.phone}
                `;
                gebruikersLijst.appendChild(gebruikerItem);
            });

            gebruikersContainer.appendChild(gebruikersLijst);

        } catch (error) {
            console.error("Fout bij het ophalen van gebruikers:", error);
            gebruikersContainer.innerHTML = `<div class="error-melding">Er is een fout opgetreden: ${error.message}</div>`;
        }
    };

    fetchUsers();
});
