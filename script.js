document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-section");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const target = this.getAttribute("data-target");

            // Hide all sections smoothly
            sections.forEach(section => {
                section.style.opacity = "0";
                setTimeout(() => {
                    section.style.display = "none"; // Hide completely after fade-out
                }, 300);
            });

            // Show the selected section with a fade-in effect
            setTimeout(() => {
                const targetSection = document.getElementById(target);
                targetSection.style.display = "flex"; // Ensure it's visible
                setTimeout(() => {
                    targetSection.style.opacity = "1";
                }, 50); // Small delay to trigger fade-in effect
            }, 300); // Match fade-out duration
        });
    });

    // Initially show only the About Me section
    sections.forEach(section => {
        section.style.display = "none"; // Hide all
        section.style.opacity = "0";
    });

    const aboutSection = document.getElementById("about");
    aboutSection.style.display = "flex"; // Show About Me initially
    aboutSection.style.opacity = "1";
});
