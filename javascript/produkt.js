const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(urlParams);
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

function getProduct() {
    fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
document.querySelector(".model-name").textContent = produkt.productdisplayname;
document.querySelector(".brand-name").textContent = produkt.brandname;
document.querySelector(".inventory-number").textContent = produkt.id;
document.querySelector(".custom-properties h1").textContent = produkt.productdisplayname;
document.querySelector(".custom-properties p").textContent = produkt.brandname;
}

getProduct();
