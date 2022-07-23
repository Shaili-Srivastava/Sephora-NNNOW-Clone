import { displyFrameWork, display } from "../component/main.js";

let main = document.querySelector("#main");
main.innerHTML = displyFrameWork();

let mainPageImg = document.querySelector("#mainPageSrc");
mainPageImg.src = "https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/FragranceDesktop.jpg";

let heading1 = document.querySelector("#heading1");
heading1.src = "https://logan.nnnow.com/content/dam/nnnow-project/18-feb-2022/On_Sale_Shelf_Desk.jpg";

let heading2 = document.querySelector("#heading2");
heading2.src = "https://logan.nnnow.com/content/dam/nnnow-project/16-april-2020/fragrance/13APR20_FRAGRANCES_CB_STRIP1_DESK_1.jpg";

let heading3 = document.querySelector("#heading3");
heading3.src = "https://logan.nnnow.com/content/dam/nnnow-project/16-april-2020/fragrance/13APR20_FRAGRANCES_CB_STRIP2_DESK.jpg";

let heading4 = document.querySelector("#heading4");
heading4.src = "https://logan.nnnow.com/content/dam/nnnow-project/16-april-2020/fragrance/13APR20_FRAGRANCES_CB_STRIP3_DESK.jpg";

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

let cont1 = document.getElementById("list_container_1");
let cont2 = document.getElementById("list_container_2");
let cont3 = document.getElementById("list_container_3");
let cont4 = document.getElementById("list_container_4");


display(data, cont1);
display(data, cont2);
display(data, cont3);
display(data, cont4);


document.querySelectorAll(".rightarrow").forEach((button, index) => {
    button.addEventListener("click", function () {
        let sliderbox1 = document.querySelector("#list_container_1");
        let sliderbox2 = document.querySelector("#list_container_2");
        let sliderbox3 = document.querySelector("#list_container_3");
        let sliderbox4 = document.querySelector("#list_container_4");
        if (index == 0) {
            myslider(sliderbox1, "right", 40, 300, 40);
        } else if (index == 1) {
            myslider(sliderbox2, "right", 40, 300, 40);
        } else if (index == 2) {
            myslider(sliderbox3, "right", 40, 300, 40);
        } else if (index == 3) {
            myslider(sliderbox4, "right", 40, 300, 40);
        }
    })
});
document.querySelectorAll(".leftarrow").forEach((button, index) => {
    button.addEventListener("click", function () {
        let sliderbox1 = document.querySelector("#list_container_1");
        let sliderbox2 = document.querySelector("#list_container_2");
        let sliderbox3 = document.querySelector("#list_container_3");
        let sliderbox4 = document.querySelector("#list_container_4");
        if (index == 0) {
            myslider(sliderbox1, "left", 40, 300, 40);
        } else if (index == 1) {
            myslider(sliderbox2, "left", 40, 300, 40);
        } else if (index == 2) {
            myslider(sliderbox3, "left", 40, 300, 40);
        } else if (index == 3) {
            myslider(sliderbox4, "left", 40, 300, 40);
        }
    })
});
let myslider = (sliderbox, direction, speed, distance, step) => {
    console.log("hi")
    let scrollAmount = 0;
    let slidetime = setInterval(() => {
        if (direction == "left") {
            sliderbox.scrollLeft -= step;
        }
        else {
            sliderbox.scrollLeft += step;
            console.log("w")
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slidetime);
        }
    }, speed)
}



document.querySelector("#sidebar").innerHTML = `<h3>SHOP</h3><ul>
            <li class="sidebar_cat">WOMEN
                <ul class="sidebar_cat_content">
                    <option><a href="#">Perfume</a></option>
                    <option><a href="#">Lotion & Oils</a></option>
                    <option><a href="#">Mists And Deodrants</a></option>
                </ul>
            </li>
            <li class="sidebar_cat">MEN
                <ul class="sidebar_cat_content">
                    <option><a href="#">Perfume</a></option>
                    <option><a href="#">Body Sparys & Deodrants</a></option>
                </ul>
            </li>
            <li class="sidebar_cat">SHOP BY FRAGRANCE FAMILY
                <ul class="sidebar_cat_content">
                    <option><a href="#">Floral</a></option>
                    <option><a href="#">Fresh</a></option>
                    <option><a href="#">Warm & Spicy</a></option>
                    <option><a href="#">Earthy & Woody</a></option>
                </ul>
            <li class="sidebar_cat">TOP BRANDS
                <ul class="sidebar_cat_content">
                    <option><a href="#">Tom Ford</a></option>
                    <option><a href="#">BurBerry</a></option>
                    <option><a href="#">Davidoff</a></option>
                    <option><a href="#">Bvlgari</a></option>
                </ul>
            </li>
        </ul>`;



document.querySelectorAll(".sidebar_cat").forEach((button) => {
    button.addEventListener("click", function () {
        console.log("button", button.firstElementChild)
        // button.firstElementChild.style.backgroundColor="red";
        if (button.firstElementChild.style.display == "none" && button.style.color == "black") {
            button.firstElementChild.style.display = "block";
            button.style.color = "red";
        } else {
            button.firstElementChild.style.display = "none";
            button.style.color = "black";
        }
    });
});
