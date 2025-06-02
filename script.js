const btns = document.querySelectorAll('.extensions-list-buttons .btn');
const activeBtn = document.querySelector('#active-btn');
const extensionsContainer = document.querySelectorAll('.extension-container');


btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        btns.forEach(button => button.classList.remove('active'));
        e.target.blur();
        e.target.classList.toggle('active');
        
    });
});

// ACTIVE BTN 

const handleActiveExtensions = () => {
    extensionsContainer.forEach((elem) => {
        const input = elem.querySelector(".checkbox");
        if (input.checked) {
            elem.style.display = "block";
        } else {
            elem.style.display = "none";
        }
    });
     
}

activeBtn.addEventListener('click', handleActiveExtensions);

// INACTIVE BTN

const inactiveBtn = document.querySelector("#inactive-btn");

const handleInactiveExtensions = () => {
    extensionsContainer.forEach((elem) => {
        const input = elem.querySelector(".checkbox");
        if (input.checked) {
            elem.style.display = "none";
        } else {
            elem.style.display = "block";
        }
    });
}


inactiveBtn.addEventListener("click", handleInactiveExtensions);

// ALL BTN

const allBtn = document.querySelector("#all-btn");

const handleAllExtensiosList = ()=>{
    extensionsContainer.forEach((elem) => {
        elem.style.display = "block";
    });
}
allBtn.addEventListener("click", handleAllExtensiosList);

// REMOVE BTN



extensionsContainer.forEach((elem) => {
    const removeBtn = elem.querySelector(".remove-button");

    const handleRemove = () => {
        elem.style.display = "none";
    };

    removeBtn.addEventListener("click", handleRemove);
});


// SWITCH BACKGROUND COLOR
const switchBackground = document.querySelector(".switch-background-button ");

const handleBackgroundColor = () => {
    const bodyBg = document.body;
    const headerBg = document.querySelector(".switch-background-section");
    const title = document.querySelector("h1");
    const logoTitle = document.querySelector("#logo-title");    
    const removeBtnsLight = document.querySelectorAll(".remove-button ");
    const extensionsTitles = document.querySelectorAll(".subtitle");
    const sliderLightMode = document.querySelectorAll(".slider");
    const sunIcon = document.querySelector(".sun-icon");
    const moonIcon = document.querySelector(".moon-icon");
    

    if (bodyBg.classList.contains("light-mood")) {
        bodyBg.classList.remove("light-mood");


    } else {
        bodyBg.classList.add("light-mood")
        switchBackground.blur();
     
        }

        // switch btn 
        switchBackground.classList.toggle("light-background");
        
        // sun icon and moon icon

        sunIcon.classList.toggle("hide");
        moonIcon.classList.toggle("show");

        // logo title
        logoTitle.classList.toggle("font-color-switch");
   
        // header and title light mode

        headerBg.classList.toggle("light-background");
        title.classList.toggle("font-color-switch");
        
        // list buttons
    btns.forEach((btn) => {
        btn.classList.toggle("light-mode-btn");
    });
    

        // extension container
        extensionsContainer.forEach((elem) => {
            elem.classList.toggle("light-background");
            elem.style.border = "none";
            const elemP = elem.querySelector("p");
            elemP.classList.toggle("light-mode-font");
        });

        // extensions titles
        extensionsTitles.forEach((title) => title.classList.toggle("font-color-switch"));

        // remove btn 

        removeBtnsLight.forEach((removeBtn) => removeBtn.classList.toggle("light-background-buttons"));

        // slider
        sliderLightMode.forEach((slider) => {
            slider.classList.toggle("grey");
        });
        

};


switchBackground.addEventListener("click", handleBackgroundColor);


