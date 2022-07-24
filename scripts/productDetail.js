import { navbar, footer } from "../scripts/navbar.js"

let nav = document.querySelector("#navbar");
nav.innerHTML = navbar();
let foot = document.querySelector("#footer");
foot.innerHTML = footer();


document.querySelector("#panelImage1").addEventListener("mouseover", () => {
    let bigImg = document.querySelector("#mainImage");
    let Image_1 = document.querySelector("#panelImage1");
    bigImg.src = Image_1.src;

})

document.querySelector("#panelImage2").addEventListener("mouseover", () => {
    let bigImg = document.querySelector("#mainImage");
    let Image_2 = document.querySelector("#panelImage2");
    bigImg.src = Image_2.src;

})

let data = JSON.parse(localStorage.getItem("sephoraData")) || [];

let displayProduct = (data) => {
    console.log("Working");
    let image1 = document.getElementById("panelImage1");
    image1.src = data.Image_1;
    let image2 = document.getElementById("panelImage2");
    image2.src = data.Image_2;

    let mainImage = document.getElementById("mainImage");
    mainImage.src = data.Image_1;

    let prodName = document.getElementById("productName");
    prodName.innerText = data.Name;
    let prodDesc = document.getElementById("productDesc");
    prodDesc.innerText = data.Description;

    let prodRating = document.getElementById("ratingCount");
    if (data.Rating == "") {
        let random = Math.floor(Math.random() * 5) + 1;
        prodRating.innerText = `( ${random} Ratings)`;
    } else prodRating.innerText = `( ${data.Rating} Ratings)`;

    let prodOgPrice = document.getElementById("ogPrice");
    let prodOfferPrice = document.getElementById("offerPrice");

    if (data.Offer_Price == "") {
        prodOgPrice.innerText = ``;
        prodOfferPrice.innerText = `Rs. ${data.Price}`;
    } else {
        prodOgPrice.innerText = `Rs .${data.Price}`;
        prodOfferPrice.innerText = `Rs. ${data.Offer_Price}`;
    }


    let prodOffer = document.getElementById("offerOnPrice");
    if (data.Offer == "") {
        prodOffer.innerText = `0% Off`;
    } else prodOffer.innerText = `${data.Offer}% Off`;

    let prodSize = document.getElementById("size");
    prodSize.innerText = data.Size;

}
displayProduct(data[0]);

document.querySelector("#addToBag").addEventListener("click", () => {
    localStorage.setItem("bagdata", JSON.stringify(data));
    alert("item added to bag");
})
document.querySelector("#heartImage").addEventListener("click", () => {
    localStorage.setItem("myfavdata", JSON.stringify(data));
    alert("item added to Favourites");
})



document.querySelectorAll(".commonBottomDiv").forEach((button, index) => {
    button.addEventListener("click", function () {

        document.querySelectorAll(".commonBottomDiv").forEach((button) => {
            button.classList.remove("afterClickBottomDiv");
        });
        document.querySelector("#finerDetails").style.zIndex = "0";
        document.querySelector("#sephoraCollectionDetails").style.zIndex = "0";
        document.querySelector("#returnAndExchangeDetails").style.zIndex = "0";
        if (index == 0) {
            let div = document.querySelector("#finerDetails")
            div.style.zIndex = "1";
        } else if (index == 1) {
            let div = document.querySelector("#sephoraCollectionDetails")
            div.style.zIndex = "1";
        } else {
            let div = document.querySelector("#returnAndExchangeDetails")
            div.style.zIndex = "1";
        }
        button.classList.add("afterClickBottomDiv");
    });
});


