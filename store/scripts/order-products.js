
const url = './data/products.json'
const cards = document.querySelector('#cards');
let productId = new URL(window.location).searchParams.get("product");
document.getElementById("hiddenField").value = productId;


// const bestsellerCards = document.querySelector('#bestseller-cards');

const displayProducts = (products) => {
    products.forEach((product) => {
        let newsection = document.createElement("section");
        newsection.innerHTML = `
        <div id="negative">
        <a href="order.html?product=${product.identifier}" id="order-link">
        <div id="bestseller-cards">
        <h2 id="h2-products">${product.name}</h2>
        <img id="product-image" src="${product.imageURL}" alt="${product.name} image" loading="lazy" height="400">
        <p id="p-products">Artist: ${product.artist}</p>
        <p id="p-products">Release Date: ${product.releasedate}</p>
        <p id="p-price">Price: ${product.price}</p>
        <div>
        </a>
        </div>`
        cards.append(newsection)
    });
  }


async function getProductData(){
    const response = await fetch(url)
    if(response.ok){
        const data = await response.json()
        let product = data.products.filter(x => x.identifier == parseInt(productId))
        displayProducts(product)
    }
    else{
        console.log('This doesnt work')
    }
}
getProductData()


// let p = new URL(window.locaton).searchParams.get("product");
// document.getElementById("#hiddenField").value = productId;