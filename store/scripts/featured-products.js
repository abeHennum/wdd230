const file = './data/products.json'
const bestseller = document.querySelector('#home-bestseller-cards');
// const bestsellerCards = document.querySelector('#bestseller-cards');


const displayBestsellerProducts = (products) => {
    products.forEach((product) => {
        let newsection = document.createElement("section");
        newsection.innerHTML = `
        <a href="order.html?product=${product.identifier}" id="order-link">
        <div id="home-bestsellers">
        <h2 id="h2-home-products">${product.name}</h2>
        <img id="home-product-image" src="${product.imageURL}" alt="${product.name} image" loading="lazy" height="400">
        <p id="home-p-products">Artist: ${product.artist}</p>
        <p id="home-p-products">Release Date: ${product.releasedate}</p>
        <p id="home-p-price">Price: ${product.price}</p>
        <div>
        </a>`
        bestseller.append(newsection)
    });
        
  }


async function getBestsellerProductData(){
    const response = await fetch(file)
    if(response.ok){
        const data = await response.json()
        const featured = data.products.filter(x => x.featured)
        displayBestsellerProducts(featured)
    }
    else{
        console.log('This doesnt work')
    }
}
getBestsellerProductData()



