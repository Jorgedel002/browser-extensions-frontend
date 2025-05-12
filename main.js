document.addEventListener("DOMContentLoaded", () => {
    const htmlContent = document.getElementById("htmlContent");
    const darkModeButton = document.getElementById("darkModeButton");
    const darkModeIcon = document.getElementById("darkModeIcon");
    const logo = document.getElementById("logo");
    const filterAll = document.getElementById("filterAll");
    const filterActive = document.getElementById("filterActive");
    const filterInactive = document.getElementById("filterInactive");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const extensionContainer = document.getElementById("extensionContainer");

    data.forEach(extension => {
        const extensionCard = document.createElement("div");
        extensionCard.id = extension.name;
        extensionCard.classList.add("flex", "flex-col", "justify-between", "bg-neutral-0", "dark:bg-neutral-800", "shadow-sm", "rounded-xl", "p-4", "border-1", "border-neutral-200", "dark:border-neutral-600", "min-h-[184px]", "3sm:min-h-[272px]", "2sm:min-h-[204px]", "md:min-h-[254px]");
        extensionCard.innerHTML = `
            <div class="flex gap-3 items-start">
                <img src="${extension.logo}" alt="${extension.altLogo}">
                <div>
                    <h2 class="font-bold text-lg text-neutral-900 dark:text-neutral-100 mb-1">${extension.name}</h2>
                    <p class="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">${extension.description}</p>
                </div>
            </div>
            <div class="flex items-center justify-between mt-5 md:mt-12">
                <button class="border-1 border-stone-400 font-semibold cursor-pointer py-2 px-4 text-sm rounded-full text-neutral-900 dark:text-neutral-0 hover:bg-red-500 hover:text-neutral-0 dark:hover:text-neutral-900" id="removeBtn-${extension.id}">Remove</button>
                <label for="" class='relative w-11 h-6 inline-flex'>
                    <input type="checkbox" id="chk-box-${extension.id}" class='w-full h-full opacity-0' />
                    <span id='toggler-${extension.id}' class="absolute w-full h-full bg-stone-300 rounded-full left-0 top-0 cursor-pointer transition-all duration-500 linear dark:bg-neutral-600">
                        <span class="relative w-full h-full top-0 left-0 bottom-0">
                        <span id='slider-${extension.id}' class='absolute w-[19px] h-[19px] bg-white rounded-full left-1 right-1 top-[2px] bottom-1 cursor-pointer transition-all duration-500 linear'></span>
                        </span>
                    </span>
                </label>
            </div>
        `;
        extensionContainer.appendChild(extensionCard);
        
        const chkBox = document.getElementById(`chk-box-${extension.id}`);
        const toggle = document.getElementById(`toggler-${extension.id}`);
        const slider = document.getElementById(`slider-${extension.id}`);
        const removeBtn = document.getElementById(`removeBtn-${extension.id}`);

        if(extension.active){
            chkBox.checked = true;
            slider.style.transform = "translateX(18px)";
            toggle.style.backgroundColor = "#de473f";
            slider.style.backgroundColor = "white";
        }
        
        toggle.addEventListener("click", () => {
            chkBox.checked = !chkBox.checked;
            if (chkBox.checked) {
                slider.style.transform = "translateX(18px)";
                toggle.style.backgroundColor = "#de473f";
                slider.style.backgroundColor = "white";
                extension.active = true;
            } else {
                slider.style.transform = "translateX(0px)";
                if(htmlContent.classList.contains('dark')){
                    toggle.style.backgroundColor = "#545969";
                }else{
                    toggle.style.backgroundColor = "#d6d3d1";
                }
                slider.style.backgroundColor = "white";
                extension.active = false;
            }
        });
        
        removeBtn.addEventListener("click", () => {
            extensionCard.remove();
        });
    });

    darkModeButton.addEventListener("click", () => {
        htmlContent.classList.toggle("dark");
        darkModeIcon.src = htmlContent.classList.contains("dark") ? "assets/img/icon-sun.svg" : "assets/img/icon-moon.svg";
        logo.style.stroke = htmlContent.classList.contains("dark") ? "#EBF2FC" : "#040918";

        data.forEach(extension => {
            const chkBox = document.getElementById(`chk-box-${extension.id}`);
            const toggle = document.getElementById(`toggler-${extension.id}`);
            
            if(chkBox && toggle && !chkBox.checked){
                toggle.style.backgroundColor = htmlContent.classList.contains("dark") ? "#545969" : "#d6d3d1";
            }
        });
    });

    filterAll.addEventListener("click", () => {
        data.forEach(extension => {
            const extensionCard = document.getElementById(extension.name);
            if (extensionCard) {
                extensionCard.style.display = "flex";
            }
        });
    });

    filterActive.addEventListener("click", () => {
        data.forEach(extension => {
            const extensionCard = document.getElementById(extension.name);
            if (extensionCard) {
                extensionCard.style.display = extension.active ? "flex" : "none";
            }
        });
    });

    filterInactive.addEventListener("click", () => {
        data.forEach(extension => {
            const extensionCard = document.getElementById(extension.name);
            if (extensionCard) {
                extensionCard.style.display = extension.active ? "none" : "flex";
            }
        });
    });

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});