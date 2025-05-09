document.addEventListener("DOMContentLoaded", () => {
    const htmlContent = document.getElementById("htmlContent");
    const darkModeButton = document.getElementById("darkModeButton");
    const darkModeIcon = document.getElementById("darkModeIcon");
    const logo = document.getElementById("logo");
    const filterAll = document.getElementById("filterAll");
    const filterActive = document.getElementById("filterActive");
    const filterInactive = document.getElementById("filterInactive");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const chkBox = document.getElementById("chk-box");
    const toggle = document.getElementById("toggler");
    let slider = document.getElementById("slider");
    
    darkModeButton.addEventListener("click", () => {
        htmlContent.classList.toggle("dark");
        darkModeIcon.src = htmlContent.classList.contains("dark") ? "assets/img/icon-sun.svg" : "assets/img/icon-moon.svg";
        logo.style.stroke = htmlContent.classList.contains("dark") ? "#EBF2FC" : "#040918";
        if(!chkBox.checked){
            toggle.style.backgroundColor = htmlContent.classList.contains("dark") ? "#545969" : "#d6d3d1";
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    toggle.addEventListener("click", () => {
    chkBox.checked = !chkBox.checked;
    if (chkBox.checked) {
        slider.style.transform = "translateX(18px)";
        toggle.style.backgroundColor = "#de473f";
        slider.style.backgroundColor = "white";
    } else {
        slider.style.transform = "translateX(0px)";
        if(htmlContent.classList.contains('dark')){
            toggle.style.backgroundColor = "#545969";
        }else{
            toggle.style.backgroundColor = "#d6d3d1";
        }
        slider.style.backgroundColor = "white";  
    }
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