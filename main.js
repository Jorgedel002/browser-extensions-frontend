document.addEventListener("DOMContentLoaded", () => {
    const htmlContent = document.getElementById("htmlContent");
    const darkModeButton = document.getElementById("darkModeButton");
    const darkModeIcon = document.getElementById("darkModeIcon");
    const logo = document.getElementById("logo");
    const filterAll = document.getElementById("filterAll");
    const filterActive = document.getElementById("filterActive");
    const filterInactive = document.getElementById("filterInactive");
    const filterButtons = document.querySelectorAll(".filter-btn");
    
    darkModeButton.addEventListener("click", () => {
        htmlContent.classList.toggle("dark");
        darkModeIcon.src = htmlContent.classList.contains("dark") ? "assets/img/icon-sun.svg" : "assets/img/icon-moon.svg";
        logo.style.stroke = htmlContent.classList.contains("dark") ? "#EBF2FC" : "#040918";
    });

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    function filterAllFunction(){
        
    }

    function filterActiveFunction(){
        
    }

    function filterInactiveFunction(){
        
    }

    filterAll.addEventListener("click", () => {
       
    });

    filterActive.addEventListener("click", () => {
        
    });

    filterInactive.addEventListener("click", () => {
        
    });
});