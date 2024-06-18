const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('__');
        let portrait = document.createElement('img');


        fullName.textContent = `${prophet._____} ____________`;

        portrait.setAtttribute('src', prophet.imageurl);
        portrait.setAtttribute('alt', `Portrait of ${prophet.____} ______________`);
        portrait.setAtttribute('loading', 'lazy');
        portrait.setAtttribute('width', '340');
        portrait.setAtttribute('height', '440');


        card.appendChild(_______);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData(); 

