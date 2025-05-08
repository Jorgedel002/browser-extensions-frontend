document.addEventListener("DOMContentLoaded", () => {
    const htmlContent = document.getElementById("htmlContent");
    const darkModeButton = document.getElementById("darkModeButton");
    const darkModeIcon = document.getElementById("darkModeIcon");
    const logo = document.getElementById("logo");
    
    darkModeButton.addEventListener("click", () => {
        htmlContent.classList.toggle("dark");
        darkModeIcon.src = htmlContent.classList.contains("dark") ? "assets/img/icon-sun.svg" : "assets/img/icon-moon.svg";
        logo.style.stroke = htmlContent.classList.contains("dark") ? "#EBF2FC" : "#040918";
    });
});