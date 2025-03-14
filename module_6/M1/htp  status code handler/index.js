document.addEventListener("DOMContentLoaded", () => {
    const statusInfo = document.getElementById("status-info");
    const responseDetails = document.getElementById("response-details");

    const getStatusCategory = (code) => {
        if (code >= 200 && code < 300) {
            return "status-success";
        } else if (code >= 300 && code < 400) {
            return "status-redirect";
        } else if (code >= 400 && code < 500) {
            return "status-client-error";
        } else if (code >= 500 && code < 600) {
            return "status-server-error";
        }
        return "";
    };

    const handleEndpointClick = async (event) => {
        const code = event.target.getAttribute("data-code");
        const url = `https://jsonplaceholder.typicode.com/posts/`;

        try {
            statusInfo.textContent = "Bezig met ophalen...";
            responseDetails.textContent = "";

            const response = await fetch(url);
            const statusText = `${response.status} ${response.statusText}`;
            const categoryClass = getStatusCategory(response.status);

            statusInfo.textContent = `${statusText}`;
            statusInfo.className = categoryClass;

            const headers = [...response.headers].map(([key, value]) => `${key}: ${value}`).join("\n");

            const responseType = response.type;

            responseDetails.textContent = `Response Headers:\n${headers}\n\nResponse Type: ${responseType}`;

        } catch (error) {
            console.error("Error fetching the status code:", error);
            statusInfo.textContent = "Er is een fout opgetreden bij het ophalen van de gegevens.";
            statusInfo.className = "status-server-error";
            responseDetails.textContent = `Fout: ${error.message}`;
        }
    };

    const buttons = document.querySelectorAll(".endpoint-knop");
    buttons.forEach(button => {
        button.addEventListener("click", handleEndpointClick);
    });
});
