
const themeBtn = document.getElementById("themeBtn");

// Apply the saved theme, or use dark green by default.
const savedTheme = localStorage.getItem("unityTheme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}

function updateThemeButton() {
    if (!themeBtn) return;

    const isLight = document.body.classList.contains("light-mode");

    themeBtn.textContent = isLight
        ? "🌙 Dark Mode"
        : "☀️ Light Mode";
}

updateThemeButton();

// Switch between dark green and light mode.
if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        const isLight = document.body.classList.contains("light-mode");

        localStorage.setItem(
            "unityTheme",
            isLight ? "light" : "dark"
        );

        updateThemeButton();
    });
}

// Automatically display the current year.
document.querySelectorAll(".year").forEach(function (element) {
    element.textContent = new Date().getFullYear();
});

// Demonstration registration form.
const joinForm = document.getElementById("joinForm");
const formMessage = document.getElementById("formMessage");

if (joinForm && formMessage) {
    joinForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const project = document.getElementById("project").value;

        if (!name || !project) {
            formMessage.textContent =
                "Please enter your name and choose an activity.";
            return;
        }

        formMessage.textContent =
            "Thank you, " + name +
            "! Your interest in " + project +
            " has been recorded in this demonstration.";

        joinForm.reset();
    });
}
