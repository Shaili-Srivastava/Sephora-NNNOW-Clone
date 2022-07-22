
let data = [{
    Product: "MAKEUP",
    Section: "FACE",
    Sub_Section: "Foundation",
    Image_1: "https://cdn16.nnnow.com/web-images/large/styles/CH65NKWC2ZU/1533201155002/1.jpg",
    Image_2: "https://cdn16.nnnow.com/web-images/large/styles/CH65NKWC2ZU/1617175589724/2.jpg",
    Image_3: "",
    Name: "SEPHORA COLLECTION",
    Description: "Glow Perfection Foundation - 25 Beige",
    Price: 1690,
    Offer_Price: 1352,
    Offer: 20,
    Size: "20ML",
    Rating: "5",
    id: 1
},
{
    Product: "SKINCARE",
    Section: "MOISTURIZERS",
    Sub_Section: "Moisturizer",
    Image_1: "https://cdn11.nnnow.com/web-images/large/styles/7I89U5NMD9A/1605083609928/1.jpg",
    Image_2: "https://cdn04.nnnow.com/web-images/large/styles/7I89U5NMD9A/1605083609924/2.jpg",
    Image_3: "https://cdn09.nnnow.com/web-images/large/styles/7I89U5NMD9A/1605083609926/3.jpg",
    Name: "ELIZABETH ARDEN",
    Description: "Ceramide Lift And Firm Day Cream SPF 30",
    Price: "5800",
    Offer_Price: "",
    Offer: "",
    Size: "50ml",
    Rating: "",
    id: 3
},
{
    Product: "SKINCARE",
    Section: "MOISTURIZERS",
    Sub_Section: "Moisturizers",
    Image_1: "https://cdn17.nnnow.com/web-images/large/styles/O43RBR0M6UA/1636700674079/1.jpg",
    Image_2: "https://cdn04.nnnow.com/web-images/large/styles/O43RBR0M6UA/1636700674068/2.jpg",
    Image_3: "",
    Name: "MARIO BADESCU",
    Description: "Facial Spray With Aloe, Herbs & Rosewater",
    Price: "475",
    Offer_Price: "",
    Offer: "",
    Size: "59ML",
    Rating: "",
    id: 4
},];


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
    }else prodRating.innerText = `( ${data.Rating} Ratings)`;

    let prodOgPrice = document.getElementById("ogPrice");
    let prodOfferPrice = document.getElementById("offerPrice");

    if (data.Offer_Price == "") {
        prodOgPrice.innerText = ``;
        prodOfferPrice.innerText = `Rs .${data.Price}`;
    } else {
        prodOgPrice.innerText = `Rs .${data.Price}`;
        prodOfferPrice.innerText = `Rs .${data.Offer_Price}`;
    }


    let prodOffer = document.getElementById("offerOnPrice");
    if (data.Offer == "") {
        prodOffer.innerText = `0% Off`;
    } else prodOffer.innerText = `${data.Offer}% Off`;

    let prodSize = document.getElementById("size");
    prodSize.innerText = data.Size;

}
displayProduct(data[0]);