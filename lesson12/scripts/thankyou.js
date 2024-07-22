let url = new URL(window.location);
let params  = url.searchParams;
console.log(params)
// Remove this when you are done inspecting parameters in the console
for (const p of params) {
    console.log(p);
}


