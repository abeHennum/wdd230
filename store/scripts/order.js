let url = new URL(window.location);
let params  = url.searchParams;
console.log(params)
// Remove this when you are done inspecting parameters in the console
for (const p of params) {
    console.log(p);
}

document.querySelector('#yourfirstname').textContent = params.get("first-name");
document.querySelector('#yourlastname').textContent = params.get("last-name");
// document.querySelector('#yourgender').textContent = params.get("gender");