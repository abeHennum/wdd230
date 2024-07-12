const url = './data/products.json'
const cards = document.querySelector('#cards');

const displayProducts = (products) => {
    products.forEach((product) => {
        let newsection = document.createElement("section");
        newsection.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.imageURL}" alt="${product.name} image" loading="lazy" height="400">
        <p>Artist: ${product.artist}</p>
        <p>Release Date: ${product.releasedate}</p>`
        
        cards.append(newsection)
    });
        
  }

async function getProductData(){
    const response = await fetch(url)
    if(response.ok){
        const data = await response.json()
        console.table(data);
        displayProducts(data.products)
    }
    else{
        console.log('This doesnt work')
    }
}
getProductData()

