import { displyFrameWork, display } from "../component/main.js";
import { navbar ,footer, loginpopup,cartpopUp} from "../scripts/navbar.js"
cartpopUp()
loginpopup();
let nav = document.querySelector("#navbar");
nav.innerHTML = navbar();
let foot = document.querySelector("#footer");
foot.innerHTML = footer();

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

let data1 = [
    {
        "Product": "FRAGRANCE",
        "Section": "WOMEN",
        "Sub_Section": "Perfume",
        "Image_1": "https://cdn04.nnnow.com/web-images/large/styles/E8MATF2IDYU/1605084283131/1.jpg",
        "Image_2": "https://cdn07.nnnow.com/web-images/large/styles/E8MATF2IDYU/1605084283128/2.jpg",
        "Image_3": "https://cdn05.nnnow.com/web-images/large/styles/E8MATF2IDYU/1605084283129/3.jpg",
        "Name": "ELIZABETH ARDEN",
        "Description": "Green Tea Scent Spray",
        "Price": "3500",
        "Offer_Price": "",
        "Offer": "",
        "Size": "100ML",
        "Rating": "",
        "id": 2
    },
    {
        "Product": "FRAGRANCE",
        "Section": "WOMEN",
        "Sub_Section": "Perfume",
        "Image_1": "https://cdn06.nnnow.com/web-images/large/styles/FEZSSY7OW5A/1632460367395/1.jpg",
        "Image_2": "https://cdn09.nnnow.com/web-images/large/styles/FEZSSY7OW5A/1632460367384/2.jpg",
        "Image_3": "",
        "Name": "DAVIDOFF",
        "Description": "Cool Water Eau De Parfum",
        "Price": "3850",
        "Offer_Price": "",
        "Offer": "",
        "Size": "50ML",
        "Rating": "",
        "id": 3
    }, {
        "Product": "FRAGRANCE",
        "Section": "MEN",
        "Sub_Section": "Perfume",
        "Image_1": "https://cdn08.nnnow.com/web-images/large/styles/LZMRQSG216A/1580465663363/1.jpg",
        "Image_2": "https://cdn07.nnnow.com/web-images/large/styles/LZMRQSG216A/1580465663361/2.jpg",
        "Image_3": "https://cdn01.nnnow.com/web-images/large/styles/LZMRQSG216A/1618843515821/50.jpg",
        "Name": "BURBERRY",
        "Description": "London Men Eau De Toilette",
        "Price": "5050",
        "Offer_Price": "",
        "Offer": "",
        "Size": "100ML",
        "Rating": "",
        "id": 13
    },
    {
        "Product": "FRAGRANCE",
        "Section": "MEN",
        "Sub_Section": "Perfume",
        "Image_1": "https://cdn15.nnnow.com/web-images/large/styles/802F37DQLZ7/1487245292175/1.jpg",
        "Image_2": "https://cdn05.nnnow.com/web-images/large/styles/802F37DQLZ7/1487245292178/4.jpg",
        "Image_3": "https://cdn14.nnnow.com/web-images/large/styles/802F37DQLZ7/1618918788384/50.jpg",
        "Name": "DAVIDOFF",
        "Description": "Cool Water Eau De Toilette",
        "Price": "3700",
        "Offer_Price": "",
        "Offer": "",
        "Size": "100ML",
        "Rating": "",
        "id": 14
    },
    {
        "Product": "FRAGRANCE",
        "Section": "MEN",
        "Sub_Section": "Perfume",
        "Image_1": "https://cdn05.nnnow.com/web-images/large/styles/SLDZJ29BFTR/1487245292193/1.jpg",
        "Image_2": "https://cdn08.nnnow.com/web-images/large/styles/SLDZJ29BFTR/1487245292194/3.jpg",
        "Image_3": "https://cdn11.nnnow.com/web-images/large/styles/SLDZJ29BFTR/1618917724858/50.jpg",
        "Name": "CALVIN KLEIN FRAGRANCES",
        "Description": "Eternity Aqua Eau De Toilette",
        "Price": "4550",
        "Offer_Price": "",
        "Offer": "",
        "Size": "100ML",
        "Rating": "",
        "id": 15
    }, {
        "Product": "FRAGRANCE",
        "Section": "WOMEN",
        "Sub_Section": "Mists and Deodorants",
        "Image_1": "https://cdn03.nnnow.com/web-images/large/styles/MIG3EBEXRMH/1603879921794/1.jpg",
        "Image_2": "https://cdn12.nnnow.com/web-images/large/styles/MIG3EBEXRMH/1603879921792/2.jpg",
        "Image_3": "https://cdn17.nnnow.com/web-images/large/styles/MIG3EBEXRMH/1618914448592/50.jpg",
        "Name": "VERSACE",
        "Description": "Yellow Diamond Deodorant",
        "Price": "2650",
        "Offer_Price": "",
        "Offer": "",
        "Size": "50ML",
        "Rating": "",
        "id": 10
    },
    {
        "Product": "FRAGRANCE",
        "Section": "WOMEN",
        "Sub_Section": "Mists and Deodorants",
        "Image_1": "https://cdn03.nnnow.com/web-images/large/styles/5FNF5YSFF5K/1637553474965/1.jpg",
        "Image_2": "",
        "Image_3": "",
        "Name": "DIOR",
        "Description": "Miss Dior Perfumed Deodorant",
        "Price": "4600",
        "Offer_Price": "",
        "Offer": "",
        "Size": "100ML",
        "Rating": "",
        "id": 11
    },
];
let data2 = [{
    "Product": "FRAGRANCE",
    "Section": "WOMEN",
    "Sub_Section": "Perfume",
    "Image_1": "https://cdn14.nnnow.com/web-images/large/styles/SL9B2177HQZ/1487241079920/1.jpg",
    "Image_2": "https://cdn17.nnnow.com/web-images/large/styles/SL9B2177HQZ/1487241079922/4.jpg",
    "Image_3": "https://cdn17.nnnow.com/web-images/large/styles/SL9B2177HQZ/1618917724856/50.jpg",
    "Name": "CALVIN KLEIN FRAGRANCES",
    "Description": "CK One Eau De Toilette",
    "Price": "3600",
    "Offer_Price": "",
    "Offer": "",
    "Size": "100ML",
    "Rating": "",
    "id": 5
},
{
    "Product": "FRAGRANCE",
    "Section": "WOMEN",
    "Sub_Section": "Perfume",
    "Image_1": "https://cdn13.nnnow.com/web-images/large/styles/1VAO6SHXI15/1584952541400/1.jpg",
    "Image_2": "https://cdn14.nnnow.com/web-images/large/styles/1VAO6SHXI15/1584952541400/2.jpg",
    "Image_3": "https://cdn00.nnnow.com/web-images/large/styles/1VAO6SHXI15/1584952541401/3.jpg",
    "Name": "CALVIN KLEIN FRAGRANCES",
    "Description": "Eternity Flame Woman Eau De Parfum",
    "Price": "5300",
    "Offer_Price": "",
    "Offer": "",
    "Size": "100ML",
    "Rating": "",
    "id": 6
},
{
    "Product": "FRAGRANCE",
    "Section": "WOMEN",
    "Sub_Section": "Mists and Deodorants",
    "Image_1": "https://cdn13.nnnow.com/web-images/large/styles/4F4DC256XG9/1612251838743/1.jpg",
    "Image_2": "",
    "Image_3": "",
    "Name": "FOREST ESSENTIALS",
    "Description": "Body Mist - Iced Pomegranate And Kerala Lime",
    "Price": "2675",
    "Offer_Price": "",
    "Offer": "",
    "Size": "130ML",
    "Rating": "",
    "id": 7
},
{
    "Product": "FRAGRANCE",
    "Section": "WOMEN",
    "Sub_Section": "Mists and Deodorants",
    "Image_1": "https://cdn15.nnnow.com/web-images/large/styles/2A898G26HBZ/1603181737438/1.jpg",
    "Image_2": "https://cdn08.nnnow.com/web-images/large/styles/2A898G26HBZ/1618918801604/50.jpg",
    "Image_3": "",
    "Name": "PACO RABANNE",
    "Description": "Pure XS For Her Deodorant",
    "Price": "1900",
    "Offer_Price": "",
    "Offer": "",
    "Size": "150ML",
    "Rating": "",
    "id": 8
},
{
    "Product": "FRAGRANCE",
    "Section": "WOMEN",
    "Sub_Section": "Mists and Deodorants",
    "Image_1": "https://cdn18.nnnow.com/web-images/large/styles/8QFJPU4K6MD/1580453335492/1.jpg",
    "Image_2": "https://cdn16.nnnow.com/web-images/large/styles/8QFJPU4K6MD/1618844872573/50.jpg",
    "Image_3": "",
    "Name": "TOM FORD",
    "Description": "Black Orchid Body Spray",
    "Price": "3500",
    "Offer_Price": "",
    "Offer": "",
    "Size": "150ML",
    "Rating": "",
    "id": 9
},
{
    "Product": "FRAGRANCE",
    "Section": "WOMEN",
    "Sub_Section": "Mists and Deodorants",
    "Image_1": "https://cdn03.nnnow.com/web-images/large/styles/MIG3EBEXRMH/1603879921794/1.jpg",
    "Image_2": "https://cdn12.nnnow.com/web-images/large/styles/MIG3EBEXRMH/1603879921792/2.jpg",
    "Image_3": "https://cdn17.nnnow.com/web-images/large/styles/MIG3EBEXRMH/1618914448592/50.jpg",
    "Name": "VERSACE",
    "Description": "Yellow Diamond Deodorant",
    "Price": "2650",
    "Offer_Price": "",
    "Offer": "",
    "Size": "50ML",
    "Rating": "",
    "id": 10
},
{
    "Product": "FRAGRANCE",
    "Section": "MEN",
    "Sub_Section": "Perfume",
    "Image_1": "https://cdn15.nnnow.com/web-images/large/styles/802F37DQLZ7/1487245292175/1.jpg",
    "Image_2": "https://cdn05.nnnow.com/web-images/large/styles/802F37DQLZ7/1487245292178/4.jpg",
    "Image_3": "https://cdn14.nnnow.com/web-images/large/styles/802F37DQLZ7/1618918788384/50.jpg",
    "Name": "DAVIDOFF",
    "Description": "Cool Water Eau De Toilette",
    "Price": "3700",
    "Offer_Price": "",
    "Offer": "",
    "Size": "100ML",
    "Rating": "",
    "id": 14
},
];
let data3 = [{
    "Product": "FRAGRANCE",
    "Section": "WOMEN",
    "Sub_Section": "Mists and Deodorants",
    "Image_1": "https://cdn03.nnnow.com/web-images/large/styles/5FNF5YSFF5K/1637553474965/1.jpg",
    "Image_2": "",
    "Image_3": "",
    "Name": "DIOR",
    "Description": "Miss Dior Perfumed Deodorant",
    "Price": "4600",
    "Offer_Price": "",
    "Offer": "",
    "Size": "100ML",
    "Rating": "",
    "id": 11
},
{
    "Product": "FRAGRANCE",
    "Section": "WOMEN",
    "Sub_Section": "Mists and Deodorants",
    "Image_1": "https://cdn11.nnnow.com/web-images/large/styles/MK7H5BPKACD/1637664928240/1.jpg",
    "Image_2": "",
    "Image_3": "",
    "Name": "DIOR",
    "Description": "Joy By Dior - Perfumed Deodorant",
    "Price": "4200",
    "Offer_Price": "",
    "Offer": "",
    "Size": "100ML",
    "Rating": "",
    "id": 12
},
{
    "Product": "FRAGRANCE",
    "Section": "MEN",
    "Sub_Section": "Perfume",
    "Image_1": "https://cdn15.nnnow.com/web-images/large/styles/802F37DQLZ7/1487245292175/1.jpg",
    "Image_2": "https://cdn05.nnnow.com/web-images/large/styles/802F37DQLZ7/1487245292178/4.jpg",
    "Image_3": "https://cdn14.nnnow.com/web-images/large/styles/802F37DQLZ7/1618918788384/50.jpg",
    "Name": "DAVIDOFF",
    "Description": "Cool Water Eau De Toilette",
    "Price": "3700",
    "Offer_Price": "",
    "Offer": "",
    "Size": "100ML",
    "Rating": "",
    "id": 14
}, {
    "Product": "FRAGRANCE",
    "Section": "MEN",
    "Sub_Section": "Perfume",
    "Image_1": "https://cdn05.nnnow.com/web-images/large/styles/SLDZJ29BFTR/1487245292193/1.jpg",
    "Image_2": "https://cdn08.nnnow.com/web-images/large/styles/SLDZJ29BFTR/1487245292194/3.jpg",
    "Image_3": "https://cdn11.nnnow.com/web-images/large/styles/SLDZJ29BFTR/1618917724858/50.jpg",
    "Name": "CALVIN KLEIN FRAGRANCES",
    "Description": "Eternity Aqua Eau De Toilette",
    "Price": "4550",
    "Offer_Price": "",
    "Offer": "",
    "Size": "100ML",
    "Rating": "",
    "id": 15
},
{
    "Product": "FRAGRANCE",
    "Section": "MEN",
    "Sub_Section": "Perfume",
    "Image_1": "https://cdn15.nnnow.com/web-images/large/styles/3471NF4Q7K7/1632460367451/1.jpg",
    "Image_2": "https://cdn00.nnnow.com/web-images/large/styles/3471NF4Q7K7/1632460367435/2.jpg",
    "Image_3": "",
    "Name": "DAVIDOFF",
    "Description": "Cool Water Parfum Man",
    "Price": "5200",
    "Offer_Price": "",
    "Offer": "",
    "Size": "100ML",
    "Rating": "",
    "id": 16
},
{
    "Product": "FRAGRANCE",
    "Section": "MEN",
    "Sub_Section": "Perfume",
    "Image_1": "https://cdn18.nnnow.com/web-images/large/styles/7TQ9BRQ4HE3/1584959779851/1.jpg",
    "Image_2": "https://cdn13.nnnow.com/web-images/large/styles/7TQ9BRQ4HE3/1584959779860/2.jpg",
    "Image_3": "https://cdn14.nnnow.com/web-images/large/styles/7TQ9BRQ4HE3/1584959779860/3.jpg",
    "Name": "CALVIN KLEIN FRAGRANCES",
    "Description": "Eternity Man Eau De Perfum",
    "Price": "3360",
    "Offer_Price": "",
    "Offer": "",
    "Size": "30ML",
    "Rating": "",
    "id": 17
},
{
    "Product": "FRAGRANCE",
    "Section": "MEN",
    "Sub_Section": "Perfume",
    "Image_1": "https://cdn12.nnnow.com/web-images/large/styles/E2HC1OHQZFP/1604487744536/1.jpg",
    "Image_2": "https://cdn03.nnnow.com/web-images/large/styles/E2HC1OHQZFP/1604487744534/2.jpg",
    "Image_3": "https://cdn03.nnnow.com/web-images/large/styles/E2HC1OHQZFP/1619515390954/50.jpg",
    "Name": "HUGO BOSS",
    "Description": "Boss Bottled Night Eau De Toilette",
    "Price": "5900",
    "Offer_Price": "",
    "Offer": "",
    "Size": "100ML",
    "Rating": "",
    "id": 18
},];
let data4 = [{
    "Product": "FRAGRANCE",
    "Section": "MEN",
    "Sub_Section": "Body Sprays & Deodorant",
    "Image_1": "https://cdn10.nnnow.com/web-images/large/styles/X7ZO8G75JHH/1632460367373/1.jpg",
    "Image_2": "",
    "Image_3": "",
    "Name": "CALVIN KLEIN FRAGRANCES",
    "Description": "Defy Deodorant",
    "Price": "1540",
    "Offer_Price": "",
    "Offer": "",
    "Size": "150ML",
    "Rating": "",
    "id": 19
},
{
    "Product": "FRAGRANCE",
    "Section": "MEN",
    "Sub_Section": "Body Sprays & Deodorant",
    "Image_1": "https://cdn16.nnnow.com/web-images/large/styles/CH8AIMZDN2R/1580708015050/1.jpg",
    "Image_2": "https://cdn14.nnnow.com/web-images/large/styles/CH8AIMZDN2R/1580708015048/2.jpg",
    "Image_3": "https://cdn07.nnnow.com/web-images/large/styles/CH8AIMZDN2R/1618918765838/50.jpg",
    "Name": "CAROLINA HERRERA",
    "Description": "Bad Boy Deodorant Natural Spray",
    "Price": "2450",
    "Offer_Price": "",
    "Offer": "",
    "Size": "100ML",
    "Rating": "",
    "id": 20
}, {
    "Product": "FRAGRANCE",
    "Section": "WOMEN",
    "Sub_Section": "Mists and Deodorants",
    "Image_1": "https://cdn03.nnnow.com/web-images/large/styles/5FNF5YSFF5K/1637553474965/1.jpg",
    "Image_2": "",
    "Image_3": "",
    "Name": "DIOR",
    "Description": "Miss Dior Perfumed Deodorant",
    "Price": "4600",
    "Offer_Price": "",
    "Offer": "",
    "Size": "100ML",
    "Rating": "",
    "id": 11
},
{
    "Product": "FRAGRANCE",
    "Section": "WOMEN",
    "Sub_Section": "Mists and Deodorants",
    "Image_1": "https://cdn11.nnnow.com/web-images/large/styles/MK7H5BPKACD/1637664928240/1.jpg",
    "Image_2": "",
    "Image_3": "",
    "Name": "DIOR",
    "Description": "Joy By Dior - Perfumed Deodorant",
    "Price": "4200",
    "Offer_Price": "",
    "Offer": "",
    "Size": "100ML",
    "Rating": "",
    "id": 12
},
{
    "Product": "FRAGRANCE",
    "Section": "MEN",
    "Sub_Section": "Perfume",
    "Image_1": "https://cdn08.nnnow.com/web-images/large/styles/LZMRQSG216A/1580465663363/1.jpg",
    "Image_2": "https://cdn07.nnnow.com/web-images/large/styles/LZMRQSG216A/1580465663361/2.jpg",
    "Image_3": "https://cdn01.nnnow.com/web-images/large/styles/LZMRQSG216A/1618843515821/50.jpg",
    "Name": "BURBERRY",
    "Description": "London Men Eau De Toilette",
    "Price": "5050",
    "Offer_Price": "",
    "Offer": "",
    "Size": "100ML",
    "Rating": "",
    "id": 13
},
{
    "Product": "FRAGRANCE",
    "Section": "MEN",
    "Sub_Section": "Perfume",
    "Image_1": "https://cdn15.nnnow.com/web-images/large/styles/802F37DQLZ7/1487245292175/1.jpg",
    "Image_2": "https://cdn05.nnnow.com/web-images/large/styles/802F37DQLZ7/1487245292178/4.jpg",
    "Image_3": "https://cdn14.nnnow.com/web-images/large/styles/802F37DQLZ7/1618918788384/50.jpg",
    "Name": "DAVIDOFF",
    "Description": "Cool Water Eau De Toilette",
    "Price": "3700",
    "Offer_Price": "",
    "Offer": "",
    "Size": "100ML",
    "Rating": "",
    "id": 14
}, {
    "Product": "FRAGRANCE",
    "Section": "MEN",
    "Sub_Section": "Body Sprays & Deodorant",
    "Image_1": "https://cdn16.nnnow.com/web-images/large/styles/CH8AIMZDN2R/1580708015050/1.jpg",
    "Image_2": "https://cdn14.nnnow.com/web-images/large/styles/CH8AIMZDN2R/1580708015048/2.jpg",
    "Image_3": "https://cdn07.nnnow.com/web-images/large/styles/CH8AIMZDN2R/1618918765838/50.jpg",
    "Name": "CAROLINA HERRERA",
    "Description": "Bad Boy Deodorant Natural Spray",
    "Price": "2450",
    "Offer_Price": "",
    "Offer": "",
    "Size": "100ML",
    "Rating": "",
    "id": 20
},];


let cont1 = document.getElementById("list_container_1");
let cont2 = document.getElementById("list_container_2");
let cont3 = document.getElementById("list_container_3");
let cont4 = document.getElementById("list_container_4");


display(data1, cont1);
display(data2, cont2);
display(data3, cont3);
display(data4, cont4);


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
                    <option onclick="Perfume()"><a href="#">Perfume</a></option>
                    <option onclick="MistsandDeodorants()"><a href="#">Lotion & Oils</a></option>
                    <option><a href="#">Mists And Deodrants</a></option>
                </ul>
            </li>
            <li class="sidebar_cat">MEN
                <ul class="sidebar_cat_content">
                    <option onclick="Perfume()"><a href="#">Perfume</a></option>
                    <option onclick="BodySpraysDeodorant()"><a href="#">Body Sparys & Deodrants</a></option>
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
