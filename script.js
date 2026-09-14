function showScreen(screenId) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const selectedScreen = document.getElementById(screenId);

    if (selectedScreen) {
        selectedScreen.classList.add("active");
        window.scrollTo(0, 0);
    }
}

function selectCare(option) {
    const selected = document.getElementById("care-selected");

    if (!selected) {
        alert("CarePath error: care-selected was not found.");
        return;
    }

    selected.style.display = "block";

    selected.innerHTML = `
        <div class="selected-care">
            <strong>Selected pathway:</strong>
            <p>${option}</p>
            <small>
                This is a simulated selection. Confirm eligibility,
                availability and actual cost with the provider.
            </small>
        </div>
    `;

    selected.scrollIntoView({ behavior: "smooth", block: "center" });
}

function requestSupport() {
    const message = document.getElementById("support-message");

    if (!message) return;

    message.style.display = "block";

    message.innerHTML = `
        <strong>Support request recorded.</strong>
        <br><br>
        Demo only — no real contact will be made.
        You remain in control of what information you share.
    `;
}

function stopCommunication() {
    const message = document.getElementById("support-message");

    if (!message) return;

    message.style.display = "block";

    message.innerHTML = `
        <strong>Support not requested.</strong>
        <br><br>
        You remain in control of your communication preferences.
    `;
}
