let datespan = document.querySelector("#currentYear")
datespan.innerText = new Date().getFullYear()

let lastmodifiedspan = document.querySelector("#lastModified")
lastmodifiedspan.innerText = document.lastModified


//dark mode stuff
let darkbutton = document.getElementById("dark-mode")
darkbutton.addEventListener("click", () => {
    darkbutton.classList.toggle("dark")
    if (darkbutton.classList.contains("dark")){
        document.documentElement.style.setProperty('--text-color', 'white');   
        document.documentElement.style.setProperty('--header-color', '#1f1f1d');   
        document.documentElement.style.setProperty('--nav-color', '#3a5a40');   
        document.documentElement.style.setProperty('--card-color', '#588157');
        document.documentElement.style.setProperty('--accent-color', '#a98467');

    }
    else{
        document.documentElement.style.setProperty('--header-color', '#dad7cd');   
        document.documentElement.style.setProperty('--nav-color', '#a98467'); 
        document.documentElement.style.setProperty('--card-color', '#a3b18a');  
        document.documentElement.style.setProperty('--text-color', 'black'); 
        document.documentElement.style.setProperty('--accent-color', '#3a5a40');
    }
})

