import { displyFrameWork, display } from "../component/main.js";
import { navbar,cartpopUp, loginpopup } from "../scripts/navbar.js"
// cartpopUp();
// loginpopup();
let nav = document.querySelector("#navbar");
nav.innerHTML = navbar();

let main = document.querySelector("#main");
main.innerHTML = displyFrameWork();

let mainImg = document.getElementById("mainPageSrc")
mainImg.src = "https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/HaircareDesktop.jpg";

let heading1 = document.querySelector("#heading1");
heading1.src = "https://logan.nnnow.com/content/dam/nnnow-project/22-april-2020/tom-ford-cat2/13APR20_HAIRCARE_CB_STRIP1_DESK_1.jpg";
let heading2 = document.querySelector("#heading2");
heading2.src = "https://logan.nnnow.com/content/dam/nnnow-project/22-april-2020/tom-ford-cat2/13APR20_HAIRCARE_CB_STRIP2_DESK_1.jpg";
let heading3 = document.querySelector("#heading3");
heading3.src = "https://logan.nnnow.com/content/dam/nnnow-project/16-april-2020/haircare/13APR20_HAIRCARE_CB_STRIP3_DESK.jpg";
let heading4 = document.querySelector("#heading4");
heading4.src = "https://logan.nnnow.com/content/dam/nnnow-project/16-april-2020/haircare/13APR20_HAIRCARE_CB_STRIP4_DESK.jpg";


let data1=[{
    "Product": "HAIRCARE",
    "Section": "SHAMPOO & CONDITIONER",
    "Sub_Section": "Shampoo",
    "Image_1": "https://cdn09.nnnow.com/web-images/large/styles/NAG35MWAZB5/1603956012732/1.jpg",
    "Image_2": "https://cdn12.nnnow.com/web-images/large/styles/NAG35MWAZB5/1603956012729/2.jpg",
    "Image_3": "https://cdn17.nnnow.com/web-images/large/styles/NAG35MWAZB5/1603956012725/5.jpg",
    "Name": "OLAPLEX",
    "Description": "N°4 Bond Maintenance Shampoo",
    "Price": "2950",
    "Offer_Price": "",
    "Offer": "",
    "Size": "250ML",
    "Rating": "5",
    "id": 1
  },
  {
    "Product": "HAIRCARE",
    "Section": "SHAMPOO & CONDITIONER",
    "Sub_Section": "Shampoo",
    "Image_1": "https://cdn13.nnnow.com/web-images/large/styles/FCNE5T2TV5T/1634887143628/1.jpg",
    "Image_2": "https://cdn13.nnnow.com/web-images/large/styles/FCNE5T2TV5T/1634887143616/2.jpg",
    "Image_3": "https://cdn15.nnnow.com/web-images/large/styles/FCNE5T2TV5T/1634887143622/3.jpg",
    "Name": "MOROCCANOIL",
    "Description": "Moisture Repair Shampoo",
    "Price": "1890",
    "Offer_Price": "",
    "Offer": "",
    "Size": "250ML",
    "Rating": "",
    "id": 2
  },
  {
    "Product": "HAIRCARE",
    "Section": "SHAMPOO & CONDITIONER",
    "Sub_Section": "Shampoo",
    "Image_1": "https://cdn05.nnnow.com/web-images/large/styles/OPW5DA9Z5DM/1652252637841/1.jpg",
    "Image_2": "https://cdn13.nnnow.com/web-images/large/styles/OPW5DA9Z5DM/1652252637839/2.jpg",
    "Image_3": "https://cdn00.nnnow.com/web-images/large/styles/OPW5DA9Z5DM/1652252637823/4.jpg",
    "Name": "OUAI",
    "Description": "Medium Hair Shampoo",
    "Price": "2300",
    "Offer_Price": "",
    "Offer": "",
    "Size": "300ML",
    "Rating": "5",
    "id": 3
  },
  {
    "Product": "HAIRCARE",
    "Section": "SHAMPOO & CONDITIONER",
    "Sub_Section": "Shampoo",
    "Image_1": "https://cdn05.nnnow.com/web-images/large/styles/W41Z6I31EZM/1652252643776/1.jpg",
    "Image_2": "https://cdn12.nnnow.com/web-images/large/styles/W41Z6I31EZM/1652252643772/2.jpg",
    "Image_3": "https://cdn10.nnnow.com/web-images/large/styles/W41Z6I31EZM/1652252643773/3.jpg",
    "Name": "OUAI",
    "Description": "Detox Shampoo - Refill",
    "Price": "6200",
    "Offer_Price": "",
    "Offer": "",
    "Size": "946ML",
    "Rating": "",
    "id": 4
  },
  {
    "Product": "HAIRCARE",
    "Section": "SHAMPOO & CONDITIONER",
    "Sub_Section": "Shampoo",
    "Image_1": "https://cdn19.nnnow.com/web-images/large/styles/PDOEXQ0ITGY/1586865417839/1.jpg",
    "Image_2": "https://cdn07.nnnow.com/web-images/large/styles/PDOEXQ0ITGY/1618917639196/50.jpg",
    "Image_3": "",
    "Name": "AVEDA",
    "Description": "Be Curly™ Shampoo",
    "Price": "2250",
    "Offer_Price": "",
    "Offer": "",
    "Size": "250ML",
    "Rating": "",
    "id": 5
  },
  {
    "Product": "HAIRCARE",
    "Section": "SHAMPOO & CONDITIONER",
    "Sub_Section": "Shampoo",
    "Image_1": "https://cdn07.nnnow.com/web-images/large/styles/IQO47VIMDO0/1609913734087/1.jpg",
    "Image_2": "https://cdn08.nnnow.com/web-images/large/styles/IQO47VIMDO0/1609913734085/2.jpg",
    "Image_3": "https://cdn02.nnnow.com/web-images/large/styles/IQO47VIMDO0/1618917635965/50.jpg",
    "Name": "AVEDA",
    "Description": "Invati Advanced™ Exfoliating Shampoo: Rich",
    "Price": "2450",
    "Offer_Price": "",
    "Offer": "",
    "Size": "200ML",
    "Rating": "",
    "id": 6
  },
  {
    "Product": "HAIRCARE",
    "Section": "SHAMPOO & CONDITIONER",
    "Sub_Section": "Conditioner",
    "Image_1": "https://cdn18.nnnow.com/web-images/large/styles/E4PUAGOMU8E/1653375921600/1.jpg",
    "Image_2": "https://cdn04.nnnow.com/web-images/large/styles/E4PUAGOMU8E/1653375921588/4.jpg",
    "Image_3": "https://cdn03.nnnow.com/web-images/large/styles/E4PUAGOMU8E/1653375921592/6.jpg",
    "Name": "MOROCCANOIL",
    "Description": "All In One Leave In Conditioner",
    "Price": "2610",
    "Offer_Price": "",
    "Offer": "",
    "Size": "160ML",
    "Rating": "5",
    "id": 7
  },]
  let data2 = [ 
    {
      "Product": "HAIRCARE",
      "Section": "SHAMPOO & CONDITIONER",
      "Sub_Section": "Conditioner",
      "Image_1": "https://cdn18.nnnow.com/web-images/large/styles/9BHLC320FI7/1634888036622/1.jpg",
      "Image_2": "https://cdn15.nnnow.com/web-images/large/styles/9BHLC320FI7/1634888036592/4.jpg",
      "Image_3": "https://cdn16.nnnow.com/web-images/large/styles/9BHLC320FI7/1636709111748/6.jpg",
      "Name": "MOROCCANOIL",
      "Description": "Hydrating Conditioner",
      "Price": "2160",
      "Offer_Price": "",
      "Offer": "",
      "Size": "250ML",
      "Rating": "5",
      "id": 8
    },
    {
      "Product": "HAIRCARE",
      "Section": "SHAMPOO & CONDITIONER",
      "Sub_Section": "Conditioner",
      "Image_1": "https://cdn09.nnnow.com/web-images/large/styles/ZWF553JBR4M/1612251878544/1.jpg",
      "Image_2": "https://cdn07.nnnow.com/web-images/large/styles/ZWF553JBR4M/1612251878532/2.jpg",
      "Image_3": "https://cdn05.nnnow.com/web-images/large/styles/ZWF553JBR4M/1612251878533/3.jpg",
      "Name": "FOREST ESSENTIALS",
      "Description": "Hair Conditioner - Amla, Honey & Mulethi",
      "Price": "975",
      "Offer_Price": "",
      "Offer": "",
      "Size": "130ML",
      "Rating": "",
      "id": 9
    },
    {
      "Product": "HAIRCARE",
      "Section": "SHAMPOO & CONDITIONER",
      "Sub_Section": "Conditioner",
      "Image_1": "https://cdn15.nnnow.com/web-images/large/styles/KOBW76KOJ54/1586865417830/1.jpg",
      "Image_2": "https://cdn17.nnnow.com/web-images/large/styles/KOBW76KOJ54/1618917639182/50.jpg",
      "Image_3": "",
      "Name": "AVEDA",
      "Description": "Be Curly™ Conditioner",
      "Price": "2350",
      "Offer_Price": "",
      "Offer": "",
      "Size": "200ML",
      "Rating": "",
      "id": 10
    },
    {
      "Product": "HAIRCARE",
      "Section": "SHAMPOO & CONDITIONER",
      "Sub_Section": "Conditioner",
      "Image_1": "https://cdn12.nnnow.com/web-images/large/styles/HRR0YRUUCK4/1586865417824/1.jpg",
      "Image_2": "https://cdn01.nnnow.com/web-images/large/styles/HRR0YRUUCK4/1593084196278/2.jpg",
      "Image_3": "https://cdn19.nnnow.com/web-images/large/styles/HRR0YRUUCK4/1618917635962/50.jpg",
      "Name": "AVEDA",
      "Description": "Shampure™ Conditioner",
      "Price": "1750",
      "Offer_Price": "",
      "Offer": "",
      "Size": "250ML",
      "Rating": "",
      "id": 11
    },
    {
      "Product": "HAIRCARE",
      "Section": "SHAMPOO & CONDITIONER",
      "Sub_Section": "Conditioner",
      "Image_1": "https://cdn10.nnnow.com/web-images/large/styles/B428LT1Z7YB/1580451959400/1.jpg",
      "Image_2": "https://cdn11.nnnow.com/web-images/large/styles/B428LT1Z7YB/1580451959400/2.jpg",
      "Image_3": "https://cdn07.nnnow.com/web-images/large/styles/B428LT1Z7YB/1618917635931/50.jpg",
      "Name": "AVEDA",
      "Description": "Nutriplenish™ Leave-In-Conditioner",
      "Price": "2850",
      "Offer_Price": "",
      "Offer": "",
      "Size": "200ML",
      "Rating": "",
      "id": 12
    },]


let cont1 = document.getElementById("list_container_1");
let cont2 = document.getElementById("list_container_2");
let cont3 = document.getElementById("list_container_3");
let cont4 = document.getElementById("list_container_4");


display(data1, cont1);
display(data2, cont2);
display(data1, cont3);
display(data1, cont4);


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
            <li class="sidebar_cat">SHAMPOO & CONDITIONER
                <ul class="sidebar_cat_content">
                    <option><a href="#">Shampoo</a></option>
                    <option><a href="#">Conditioner</a></option>
                </ul>
            </li>
            <li class="sidebar_cat">HAIR STYLING & TREATMENTS
                <ul class="sidebar_cat_content">
                    <option><a href="#">Hair Spray & Styling Products</a></option>
                    <option><a href="#">Hair Oil</a></option>

                </ul>
            </li>
           `;



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

import { footer } from "../scripts/navbar.js"

let foot = document.querySelector("#footer");
foot.innerHTML = footer();