
const url = "./data/members.json";

const displayMembers = (members) => {
  const cards = document.querySelector(".directory-cards"); 

  members.forEach((business) => {
    let card = document.createElement("section");
    card.innerHTML = `
    <p>${business.name}</p>
    <img src="${business.imageURL}">
    <p>${business.address1}</p>
    <p>${business.address2}</p>
    <p><a class="card-button" href="${business.websiteURL}">website</a></p>
    `;
    cards.appendChild(card);
  }); 
  
}; 



async function getBusinessData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    displayMembers(data.members);

  } else {
    console.error("There was an error loading the data.");
    const cards = document.querySelector("directory-cards");
    cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
  }
}

getBusinessData();





var gridSelector = document.querySelector('#directory-grid');
var listSelector = document.querySelector('#directory-list');
var directoryData = document.querySelector('#directory-data');

gridSelector.addEventListener('click', ()=>{
    if (!gridSelector.classList.contains('active')){    
        gridSelector.classList.add('active');
        listSelector.classList.remove('active');
        directoryData.classList.add('directory-cards')
        directoryData.classList.remove('directory-list')
    }
});

listSelector.addEventListener('click', ()=>{
    if (!listSelector.classList.contains('active')){
        listSelector.classList.add('active');
        gridSelector.classList.remove('active');
        directoryData.classList.add('directory-list')
        directoryData.classList.remove('directory-cards')
    }
});