
//sets the current year 
let year = new Date().getFullYear();
let currentYearSpan = document.querySelector("#currentYear")
currentYearSpan.innerHTML = `${year}` 

//sets last modified date
let lastModifiedParagraph = document.querySelector("#lastModified")
lastModifiedParagraph.innerHTML = `Last Modified: ${document.lastModified}`