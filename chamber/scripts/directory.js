const sections = document.querySelector('#sections');

const displayMembers = (members) => {
    members.forEach((member) => {
        let newsection = document.createElement("section");
        newsection.innerHTML= `
        <h3>${member.name}</h3>
        <img src="${member.imageURL}" alt="${member.name} image" loading="lazy" height="200">
        <h4>Address</h4>
        <p>${member.address1} 
        ${member.address2}</p>
        <p>Phone: ${member.phone}</p>
        <p>Website: ${member.websiteURL}</p>
        <p>Membership Level: ${member.membership}</p>`
        
        sections.append(newsection)
    });
}

async function getMembersData(){
    const response = await fetch('data/members.json')
    if(response.ok){
        const data = await response.json()
        console.table(data);
        displayMembers(data.members)
    }
    else{
        console.log('This doesnt work')
    }
}

getMembersData()






/*


 "name" : "Bywater Bakery",           
            "address1" : "3 Baker Street 365",
            "address2" : "Bywater, Shireland",
            "phone" : "555-345-6789",
            "websiteURL" : "www.bywaterbakery.com",
            "imageURL" : "https://picsum.photos/200/200",
            "membership" : "Gold"
        },



*/