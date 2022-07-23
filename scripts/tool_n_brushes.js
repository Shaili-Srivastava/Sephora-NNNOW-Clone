import { displyFrameWork, display } from "../component/main.js";
import { navbar } from "../scripts/navbar.js"

let nav = document.querySelector("#navbar");
nav.innerHTML = navbar();

let main = document.querySelector("#main");
main.innerHTML = displyFrameWork();

let mainImg = document.getElementById("mainPageSrc")
mainImg.src = "https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/Tools_BrushesDesktop.jpg"

let heading1 = document.querySelector("#heading1");
heading1.src = "https://logan.nnnow.com/content/dam/nnnow-project/21-april-2020/makeup-tools&acc/15APR20_TOOLS_CB_STRIP1_DESK.jpg";
let heading2 = document.querySelector("#heading2");
heading2.src = "https://logan.nnnow.com/content/dam/nnnow-project/21-april-2020/makeup-tools&acc/15APR20_SC_CB_STRIP2_DESK.jpg";
let heading3 = document.querySelector("#heading3");
heading3.src = "https://logan.nnnow.com/content/dam/nnnow-project/21-april-2020/makeup-tools&acc/15APR20_SC_CB_STRIP3_DESK.jpg";
let heading4 = document.querySelector("#heading4");
heading4.src = "https://logan.nnnow.com/content/dam/nnnow-project/21-april-2020/makeup-tools&acc/15APR20_SC_CB_STRIP4_DESK.jpg";

let data1=[{
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Face Brushes",
    "Image_1": "https://cdn16.nnnow.com/web-images/large/styles/S9HBP9JJUYI/1549870556596/1.jpg",
    "Image_2": "https://cdn04.nnnow.com/web-images/large/styles/S9HBP9JJUYI/1618914427777/50.jpg",
    "Image_3": "",
    "Name": "SHISEIDO",
    "Description": "Daiya Fude Face Duo Brush",
    "Price": "3600",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 1
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Face Brushes",
    "Image_1": "https://cdn08.nnnow.com/web-images/large/styles/G4D0EYKVG1F/1492756372541/1.jpg",
    "Image_2": "https://cdn09.nnnow.com/web-images/large/styles/G4D0EYKVG1F/1492756372552/2.jpg",
    "Image_3": "",
    "Name": "SEPHORA COLLECTION",
    "Description": "Pro Allover Powder Brush 61",
    "Price": "9100",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 2
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Face Brushes",
    "Image_1": "https://cdn13.nnnow.com/web-images/large/styles/WISXKMTSCKV/1533194318322/1.jpg",
    "Image_2": "",
    "Image_3": "",
    "Name": "SEPHORA COLLECTION",
    "Description": "Retractable Complexion Brush",
    "Price": "1900",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 3
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Face Brushes",
    "Image_1": "https://cdn16.nnnow.com/web-images/large/styles/GR4R2729FIF/1491393101949/1.jpg",
    "Image_2": "https://cdn03.nnnow.com/web-images/large/styles/GR4R2729FIF/1491393101950/2.jpg",
    "Image_3": "",
    "Name": "SEPHORA COLLECTION",
    "Description": "Pro Airbrush Concealer Brush 57",
    "Price": "2610",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 4
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Face Brushes",
    "Image_1": "https://cdn15.nnnow.com/web-images/large/styles/NL1B1MXCOIU/1549870556592/1.jpg",
    "Image_2": "https://cdn14.nnnow.com/web-images/large/styles/NL1B1MXCOIU/1618914283873/50.jpg",
    "Image_3": "",
    "Name": "SHISEIDO",
    "Description": "Hasu Fude Foundation Brush",
    "Price": "2800",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 5
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Face Brushes",
    "Image_1": "https://cdn02.nnnow.com/web-images/large/styles/XOFHOPGA7UJ/1560852958766/1.jpg",
    "Image_2": "https://cdn19.nnnow.com/web-images/large/styles/XOFHOPGA7UJ/1560852958764/2.jpg",
    "Image_3": "",
    "Name": "SEPHORA COLLECTION",
    "Description": "Classic Kabuki Brush #07",
    "Price": "2500",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "5",
    "id": 6
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Eye Brushes",
    "Image_1": "https://cdn02.nnnow.com/web-images/large/styles/VTWEKSSQIHF/1560852958787/1.jpg",
    "Image_2": "https://cdn19.nnnow.com/web-images/large/styles/VTWEKSSQIHF/1560852958785/2.jpg",
    "Image_3": "",
    "Name": "SEPHORA COLLECTION",
    "Description": "Classic Eyeshadow Brush #08",
    "Price": "900",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 7
  },
 ]
 let data2 =[ {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Eye Brushes",
    "Image_1": "https://cdn08.nnnow.com/web-images/large/styles/62UZW0SPYH0/1560852958829/1.jpg",
    "Image_2": "https://cdn07.nnnow.com/web-images/large/styles/62UZW0SPYH0/1560852958827/2.jpg",
    "Image_3": "",
    "Name": "SEPHORA COLLECTION",
    "Description": "Classic Eyeliner Brush #11",
    "Price": "900",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 8
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Eye Brushes",
    "Image_1": "https://cdn00.nnnow.com/web-images/large/styles/4SI2HJFIMCJ/1549870556605/1.jpg",
    "Image_2": "https://cdn08.nnnow.com/web-images/large/styles/4SI2HJFIMCJ/1618914211423/50.jpg",
    "Image_3": "",
    "Name": " SHISEIDO",
    "Description": "Yane Hake Precision Eye Brush",
    "Price": "1800",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 9
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Eye Brushes",
    "Image_1": "https://cdn07.nnnow.com/web-images/large/styles/D69TCLHUG0U/1597900132540/1.jpg",
    "Image_2": "",
    "Image_3": "",
    "Name": "BENEFIT COSMETICS",
    "Description": "Angled Brow Brush And Spoolie BZ",
    "Price": "2070",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 10
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Eye Brushes",
    "Image_1": "https://cdn18.nnnow.com/web-images/large/styles/Z4JQV20T2HM/1518073456727/1.jpg",
    "Image_2": "https://cdn16.nnnow.com/web-images/large/styles/Z4JQV20T2HM/1518073456728/2.jpg",
    "Image_3": "",
    "Name": "SEPHORA COLLECTION",
    "Description": "Pro Bent Liner Brush 23",
    "Price": "2110",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 11
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Eye Brushes",
    "Image_1": "https://cdn00.nnnow.com/web-images/large/styles/32OX1MGTJWW/1626067108323/1.jpg",
    "Image_2": "",
    "Image_3": "",
    "Name": "SEPHORA COLLECTION",
    "Description": "Full Eyes Brush Set",
    "Price": "3000",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 12
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "TOOLS",
    "Sub_Section": "Sponges & Applicators",
    "Image_1": "https://cdn11.nnnow.com/web-images/large/styles/V3WGKJS6KW8/1583391560342/1.jpg",
    "Image_2": "https://cdn10.nnnow.com/web-images/large/styles/V3WGKJS6KW8/1583391560340/2.jpg",
    "Image_3": "https://cdn08.nnnow.com/web-images/large/styles/V3WGKJS6KW8/1583391560341/3.jpg",
    "Name": "SEPHORA COLLECTION",
    "Description": "Multi-Texture Sponge",
    "Price": "500",
    "Offer_Price": "",
    "Offer": "",
    "Size": "2gm",
    "Rating": "",
    "id": 13
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "TOOLS",
    "Sub_Section": "Sponges & Applicators",
    "Image_1": "https://cdn04.nnnow.com/web-images/large/styles/LNOKEUIHEQC/1583391560346/1.jpg",
    "Image_2": "https://cdn11.nnnow.com/web-images/large/styles/LNOKEUIHEQC/1583391560344/2.jpg",
    "Image_3": "https://cdn13.nnnow.com/web-images/large/styles/LNOKEUIHEQC/1583391560345/3.jpg",
    "Name": "SEPHORA COLLECTION",
    "Description": "Face Konjac Sponge",
    "Price": "980",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 14
  },]
  let data3 = [{
    "Product": "TOOLS & BRUSHES",
    "Section": "TOOLS",
    "Sub_Section": "Face Tools",
    "Image_1": "https://cdn07.nnnow.com/web-images/large/styles/XKQ7A9PGLKD/1653470822275/1.jpg",
    "Image_2": "https://cdn13.nnnow.com/web-images/large/styles/XKQ7A9PGLKD/1653470822273/3.jpg",
    "Image_3": "https://cdn04.nnnow.com/web-images/large/styles/XKQ7A9PGLKD/1653470822266/4.jpg",
    "Name": "STILA",
    "Description": "Save The Day Eye & Lip Perfecter",
    "Price": "1600",
    "Offer_Price": "",
    "Offer": "",
    "Size": "1.23gm",
    "Rating": "",
    "id": 20
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "TOOLS",
    "Sub_Section": "Face Tools",
    "Image_1": "https://cdn14.nnnow.com/web-images/large/styles/XTMO1I1QWJJ/1645182863614/1.jpg",
    "Image_2": "https://cdn11.nnnow.com/web-images/large/styles/XTMO1I1QWJJ/1644914337373/2.jpg",
    "Image_3": "https://cdn08.nnnow.com/web-images/large/styles/XTMO1I1QWJJ/1644914337375/3.jpg",
    "Name": "SEPHORA COLLECTION",
    "Description": "Facial Roller - Purple Quartz",
    "Price": "2400",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 21
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "TOOLS",
    "Sub_Section": "Face Tools",
    "Image_1": "https://cdn18.nnnow.com/web-images/large/styles/PXOHLMXF9VP/1650558360800/1.jpg",
    "Image_2": "https://cdn11.nnnow.com/web-images/large/styles/PXOHLMXF9VP/1650558360797/3.jpg",
    "Image_3": "https://cdn03.nnnow.com/web-images/large/styles/PXOHLMXF9VP/1650558360789/4.jpg",
    "Name": "FOREO",
    "Description": "UFO Smart Face Treatment - Pearl Pink",
    "Price": "18900",
    "Offer_Price": "",
    "Offer": "",
    "Size": "296gm",
    "Rating": "",
    "id": 22
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "TOOLS",
    "Sub_Section": "Face Tools",
    "Image_1": "https://cdn04.nnnow.com/web-images/large/styles/PZXLHXYYCU0/1635851563878/1.jpg",
    "Image_2": "https://cdn17.nnnow.com/web-images/large/styles/PZXLHXYYCU0/1635851563873/3.jpg",
    "Image_3": "https://cdn17.nnnow.com/web-images/large/styles/PZXLHXYYCU0/1635851563861/4.jpg",
    "Name": "FOREO",
    "Description": "ESPADA™ Blue Light Acne Treatment - Magenta",
    "Price": "13900",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 23
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "TOOLS",
    "Sub_Section": "Face Tools",
    "Image_1": "https://cdn06.nnnow.com/web-images/large/styles/UWURL23LD87/1625733659837/1.jpg",
    "Image_2": "https://cdn15.nnnow.com/web-images/large/styles/UWURL23LD87/1625733659835/2.jpg",
    "Image_3": "https://cdn00.nnnow.com/web-images/large/styles/UWURL23LD87/1625733659832/4.jpg",
    "Name": "SWATI COSMETICS",
    "Description": "False Lash Applicator",
    "Price": "899",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 24
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Face Brushes",
    "Image_1": "https://cdn16.nnnow.com/web-images/large/styles/S9HBP9JJUYI/1549870556596/1.jpg",
    "Image_2": "https://cdn04.nnnow.com/web-images/large/styles/S9HBP9JJUYI/1618914427777/50.jpg",
    "Image_3": "",
    "Name": "SHISEIDO",
    "Description": "Daiya Fude Face Duo Brush",
    "Price": "3600",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 25
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Face Brushes",
    "Image_1": "https://cdn08.nnnow.com/web-images/large/styles/G4D0EYKVG1F/1492756372541/1.jpg",
    "Image_2": "https://cdn09.nnnow.com/web-images/large/styles/G4D0EYKVG1F/1492756372552/2.jpg",
    "Image_3": "",
    "Name": "SEPHORA COLLECTION",
    "Description": "Pro Allover Powder Brush 61",
    "Price": "9100",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 26
  },]
  let data4 =[   {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Face Brushes",
    "Image_1": "https://cdn02.nnnow.com/web-images/large/styles/XOFHOPGA7UJ/1560852958766/1.jpg",
    "Image_2": "https://cdn19.nnnow.com/web-images/large/styles/XOFHOPGA7UJ/1560852958764/2.jpg",
    "Image_3": "",
    "Name": "SEPHORA COLLECTION",
    "Description": "Classic Kabuki Brush #07",
    "Price": "2500",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "5",
    "id": 30
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Eye Brushes",
    "Image_1": "https://cdn02.nnnow.com/web-images/large/styles/VTWEKSSQIHF/1560852958787/1.jpg",
    "Image_2": "https://cdn19.nnnow.com/web-images/large/styles/VTWEKSSQIHF/1560852958785/2.jpg",
    "Image_3": "",
    "Name": "SEPHORA COLLECTION",
    "Description": "Classic Eyeshadow Brush #08",
    "Price": "900",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 31
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Eye Brushes",
    "Image_1": "https://cdn08.nnnow.com/web-images/large/styles/62UZW0SPYH0/1560852958829/1.jpg",
    "Image_2": "https://cdn07.nnnow.com/web-images/large/styles/62UZW0SPYH0/1560852958827/2.jpg",
    "Image_3": "",
    "Name": "SEPHORA COLLECTION",
    "Description": "Classic Eyeliner Brush #11",
    "Price": "900",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 32
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Eye Brushes",
    "Image_1": "https://cdn00.nnnow.com/web-images/large/styles/4SI2HJFIMCJ/1549870556605/1.jpg",
    "Image_2": "https://cdn08.nnnow.com/web-images/large/styles/4SI2HJFIMCJ/1618914211423/50.jpg",
    "Image_3": "",
    "Name": " SHISEIDO",
    "Description": "Yane Hake Precision Eye Brush",
    "Price": "1800",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 33
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Eye Brushes",
    "Image_1": "https://cdn07.nnnow.com/web-images/large/styles/D69TCLHUG0U/1597900132540/1.jpg",
    "Image_2": "",
    "Image_3": "",
    "Name": "BENEFIT COSMETICS",
    "Description": "Angled Brow Brush And Spoolie BZ",
    "Price": "2070",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 34
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Eye Brushes",
    "Image_1": "https://cdn18.nnnow.com/web-images/large/styles/Z4JQV20T2HM/1518073456727/1.jpg",
    "Image_2": "https://cdn16.nnnow.com/web-images/large/styles/Z4JQV20T2HM/1518073456728/2.jpg",
    "Image_3": "",
    "Name": "SEPHORA COLLECTION",
    "Description": "Pro Bent Liner Brush 23",
    "Price": "2110",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 35
  },
  {
    "Product": "TOOLS & BRUSHES",
    "Section": "BRUSHES",
    "Sub_Section": "Eye Brushes",
    "Image_1": "https://cdn00.nnnow.com/web-images/large/styles/32OX1MGTJWW/1626067108323/1.jpg",
    "Image_2": "",
    "Image_3": "",
    "Name": "SEPHORA COLLECTION",
    "Description": "Full Eyes Brush Set",
    "Price": "3000",
    "Offer_Price": "",
    "Offer": "",
    "Size": "One Size",
    "Rating": "",
    "id": 36
  }]

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
            <li class="sidebar_cat">BRUSHES
                <ul class="sidebar_cat_content">
                    <option><a href="#">Face Brushes</a></option>
                    <option><a href="#">Eye Brushes</a></option>
                    <option><a href="#">Lip Brushes</a></option>

                </ul>
            </li>
            <li class="sidebar_cat">TOOLS
                <ul class="sidebar_cat_content">
                    <option><a href="#">Sponges & Applicators</a></option>
                    <option><a href="#">Face Tools</a></option>
                    <option><a href="#">Hair Clips</a></option>
                    <option><a href="#">Sharpeners</a></option>
                    <option><a href="#">Tweezers & Eyebrow Tools</a></option>
                    <option><a href="#">Eyelash Curlers</a></option>
                    <option><a href="#">Accessories</a></option>
                    <option><a href="#">Brush Cleaners</a></option>
                    

                </ul>
            </li>
            <li class="sidebar_cat">VEGAN
                <ul class="sidebar_cat_content">
                    <option><a href="#">Face Brushes</a></option>
                    <option><a href="#">Eye Brushes</a></option>
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