const url = 'https://fakestoreapi.com/products';

const output = document.querySelector('.output');

async function fetchData() {
    const response = await fetch(url);
    const products = await response.json();

    let fetchedData = products.map((object) => {

        const { price, title, description, image } = object;

        const priceFinal = Math.floor(price);

        return `
        <div class = "output-child">   
        <div class = "output-child-img">
        <img src='${image}'/>
        <div class = "output-child-text">
            <h1 class = "title">${title.replace(/(.{10})..+/, "$1")}</h1>
            <p class = "description" >${description.replace(/(.{30})..+/, "$1")}</p>
            <span class = "priceFinal">${priceFinal}$</span>
            <button class="btn">MORE</button>
            </div>
            </div>
        </div>
        `
    }).join('');
    output.innerHTML = fetchedData;
}

fetchData();
const body = document.body;
const div = document.getElementById("div");
const header = document.getElementById("header")
let isDark = false;
function toggel() {
    isDark = !isDark;
    isDark ? Light() :  Dark()
}
function Light() {
    body.style.backgroundColor = "#FFF"
    header.style.color = "#000"
    header.style.backgroundColor = "#FFF"
    div.src = "../assests/moon-fill.svg"
}
function Dark() {
    body.style.backgroundColor = "#000"
    header.style.color = "#FFF"
    header.style.backgroundColor = "rgb(45, 45, 45)"
    div.style.backgroundColor ="#FFF"
    div.style.border ="none"
    div.src = "../assests/brightness-high-fill.svg"
}