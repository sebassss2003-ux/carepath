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

function requestSupport() {
    const message = document.getElementById("support-message");

    message.style.display = "block";

    message.innerHTML = `
        <strong>Support request recorded.</strong>
        <br>
        Demo only — no real contact will be made.
    `;
}

function stopCommunication() {
    const message = document.getElementById("support-message");

    message.style.display = "block";

    message.innerHTML = `
        <strong>Communication stopped.</strong>
        <br>
        You remain in control of your communication preferences.
    `;
}
