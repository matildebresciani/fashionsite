/* const url = "https://kea-alt-del.dk/t7/api/products"; */

//nye ændringer for at få kategori linket til at vise den produktliste der passer til den kategori man har klikket på
const urlParams = new URLSearchParams(window.location.search);
const category = (urlParams.get("category"));
let url = "https://kea-alt-del.dk/t7/api/products?category=" + category;

const skabelon = document.querySelector("template").content;
const container = document.querySelector(".products");

window.addEventListener("load", hentData);

function hentData() {
    fetch(url)
    .then((res) => res.json())
    .then((produkter) => visProdukter(produkter));
}

function visProdukter(produkter) {
    produkter.forEach((produkt) => {
        console.log(produkt);
        const kopi = skabelon.cloneNode(true);
        kopi.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp`;
        kopi.querySelector(".product-title").textContent = produkt.productdisplayname;
        kopi.querySelector(".product-category").textContent = produkt.category;
        kopi.querySelector(".price").textContent = produkt.price;
        kopi.querySelector(".read-more").href = `produkt.html?id=${produkt.id}`;
        if(produkt.soldout) {
    /*         kopi.querySelector(".udsolgt").style = "display: block" */
            kopi.querySelector("article").classList.add("soldOut");
        };
        if(produkt.discount) {
            kopi.querySelector(".discounted").style = "display: block";
            kopi.querySelector("article").classList.add("onSale");
            kopi.querySelector(".discounted p span").textContent = Math.round(produkt.price - (produkt.price * produkt.discount / 100));
            kopi.querySelector(".discounted p+p span").textContent = produkt.discount;
        };
        container.appendChild(kopi);
    });
};

if (params.has("category")) {
    url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
  } else {
    url = "https://kea-alt-del.dk/t7/api/products";
  }