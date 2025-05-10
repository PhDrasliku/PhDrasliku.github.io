document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contakt-form");
    const status = document.querySelector(".status-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Zabrání standardnímu odeslání formuláře

        const formData = new FormData(form);

        // Odeslání dat pomocí Fetch API
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    status.textContent = "Formulář byl úspěšně odeslán!";
                    status.style.color = "#26ff00"; // Zelená barva pro úspěch
                    status.style.display = "block"; // Zobrazí status-form
                    form.reset(); // Vyprázdní formulář
                } else {
                    response.json().then((data) => {
                        if (data.errors) {
                            status.textContent = "Chyba při odesílání: " + data.errors.map(e => e.message).join(", ");
                        } else {
                            status.textContent = "Chyba při odesílání formuláře.";
                        }
                        status.style.color = "red";
                        status.style.display = "block"; // Zobrazí status-form
                    });
                }
                // Nastavení časovače na 5 vteřin pro skrytí hlášky
                setTimeout(() => {
                    status.style.display = "none"; // Skryje celý element
                }, 5000);
            })
            .catch(() => {
                status.textContent = "Došlo k chybě při odesílání formuláře.";
                status.style.color = "red";
                status.style.display = "block"; // Zobrazí status-form
                // Nastavení časovače na 5 vteřin pro skrytí hlášky
                setTimeout(() => {
                    status.style.display = "none"; // Skryje celý element
                }, 5000);
            });
    });
});