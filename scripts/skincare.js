import { displyFrameWork, display } from "../component/main.js";
import { navbar } from "../scripts/navbar.js"

let nav = document.querySelector("#navbar");
nav.innerHTML = navbar();

let main = document.querySelector("#main");
main.innerHTML = displyFrameWork();

let mainImg = document.getElementById("mainPageSrc")
mainImg.src =   "https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/SkincareDesktop.jpg"

let heading1 = document.querySelector("#heading1");
heading1.src = "https://logan.nnnow.com/content/dam/nnnow-project/22-april-2020/tom-ford-cat2/13APR20_SKINCARE_CB_STRIP1_DESK_1.jpg";
let heading2 = document.querySelector("#heading2");
heading2.src = "https://logan.nnnow.com/content/dam/nnnow-project/17-april-2020/13APR20_SKINCARE_CB_STRIP2_DESK.jpg";
let heading3 = document.querySelector("#heading3");
heading3.src = "https://logan.nnnow.com/content/dam/nnnow-project/29-may-2020/28MAY20_SKINCARE_SHELF3_DESK.jpg";
let heading4 = document.querySelector("#heading4");
heading4.src = "https://logan.nnnow.com/content/dam/nnnow-project/29-may-2020/28MAY20_SKINCARE_SHELF4_DESK.jpg";

let data1 =[ {
  "Product": "SKINCARE",
  "Section": "MOISTURIZERS",
  "Sub_Section": "Moisturizers",
  "Image_1": "https://cdn00.nnnow.com/web-images/large/styles/58VGDBVD7HQ/1646902745349/1.jpg",
  "Image_2": "https://cdn09.nnnow.com/web-images/large/styles/58VGDBVD7HQ/1646902745343/2.jpg",
  "Image_3": "https://cdn07.nnnow.com/web-images/large/styles/58VGDBVD7HQ/1646902745327/11.jpg",
  "Name": "CLINIQUE",
  "Description": "New Moisture Surge™ 100H Auto-Replenishing Hydrator",
  "Price": "950",
  "Offer_Price": "",
  "Offer": "",
  "Size": "15ML",
  "Rating": "5",
  "id": 1
},
{
  "Product": "SKINCARE",
  "Section": "MOISTURIZERS",
  "Sub_Section": "Moisturizers",
  "Image_1": "https://cdn17.nnnow.com/web-images/large/styles/T1CA0US0QOH/1614353172645/1.jpg",
  "Image_2": "https://cdn11.nnnow.com/web-images/large/styles/T1CA0US0QOH/1614353172642/2.jpg",
  "Image_3": "https://cdn10.nnnow.com/web-images/large/styles/T1CA0US0QOH/1614353172638/6.jpg",
  "Name": "FOREST ESSENTIALS",
  "Description": "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
  "Price": "3575",
  "Offer_Price": "",
  "Offer": "",
  "Size": "50gm",
  "Rating": "5",
  "id": 2
},
{
  "Product": "SKINCARE",
  "Section": "MOISTURIZERS",
  "Sub_Section": "Moisturizer",
  "Image_1": "https://cdn11.nnnow.com/web-images/large/styles/7I89U5NMD9A/1605083609928/1.jpg",
  "Image_2": "https://cdn04.nnnow.com/web-images/large/styles/7I89U5NMD9A/1605083609924/2.jpg",
  "Image_3": "https://cdn09.nnnow.com/web-images/large/styles/7I89U5NMD9A/1605083609926/3.jpg",
  "Name": "ELIZABETH ARDEN",
  "Description": "Ceramide Lift And Firm Day Cream SPF 30",
  "Price": "5800",
  "Offer_Price": "",
  "Offer": "",
  "Size": "50ml",
  "Rating": "",
  "id": 3
},
{
  "Product": "SKINCARE",
  "Section": "MOISTURIZERS",
  "Sub_Section": "Moisturizers",
  "Image_1": "https://cdn17.nnnow.com/web-images/large/styles/O43RBR0M6UA/1636700674079/1.jpg",
  "Image_2": "https://cdn04.nnnow.com/web-images/large/styles/O43RBR0M6UA/1636700674068/2.jpg",
  "Image_3": "",
  "Name": "MARIO BADESCU",
  "Description": "Facial Spray With Aloe, Herbs & Rosewater",
  "Price": "475",
  "Offer_Price": "",
  "Offer": "",
  "Size": "59ML",
  "Rating": "",
  "id": 4
},
{
  "Product": "SKINCARE",
  "Section": "MOISTURIZERS",
  "Sub_Section": "Moisturizers",
  "Image_1": "https://cdn12.nnnow.com/web-images/large/styles/8EB9C59K93C/1495781898199/1.jpg",
  "Image_2": "https://cdn02.nnnow.com/web-images/large/styles/8EB9C59K93C/1495781898200/2.jpg",
  "Image_3": "https://cdn13.nnnow.com/web-images/large/styles/8EB9C59K93C/1618914252230/50.jpg",
  "Name": "SHISEIDO",
  "Description": "Benefiance NutriPerfect Day Cream SPF 15",
  "Price": "5400",
  "Offer_Price": "",
  "Offer": "",
  "Size": "50ML",
  "Rating": "",
  "id": 5
},
{
  "Product": "SKINCARE",
  "Section": "MOISTURIZERS",
  "Sub_Section": "Moisturizers",
  "Image_1": "https://cdn08.nnnow.com/web-images/large/styles/5UDBXH8RQG4/1600071238628/1.jpg",
  "Image_2": "https://cdn12.nnnow.com/web-images/large/styles/5UDBXH8RQG4/1600071238627/2.jpg",
  "Image_3": "https://cdn11.nnnow.com/web-images/large/styles/5UDBXH8RQG4/1600071238627/3.jpg",
  "Name": "SEPHORA COLLECTION",
  "Description": "Moringa Oil Illuminating Hydrator - Radiance & Smoothing",
  "Price": "1450",
  "Offer_Price": "",
  "Offer": "",
  "Size": "50ML",
  "Rating": "",
  "id": 6
},
{
  "Product": "SKINCARE",
  "Section": "MOISTURIZERS",
  "Sub_Section": "Night Creams",
  "Image_1": "https://cdn03.nnnow.com/web-images/large/styles/1Q20DT4JW0Q/1519035480214/1.jpg",
  "Image_2": "https://cdn05.nnnow.com/web-images/large/styles/1Q20DT4JW0Q/1519035480215/2.jpg",
  "Image_3": "https://cdn11.nnnow.com/web-images/large/styles/1Q20DT4JW0Q/1618914211432/50.jpg",
  "Name": "SHISEIDO",
  "Description": "Lucent MultiBright Night Cream",
  "Price": "6800",
  "Offer_Price": "",
  "Offer": "",
  "Size": "50ML",
  "Rating": "",
  "id": 7
},]
let data2 =[ {
  "Product": "SKINCARE",
  "Section": "CLEANSERS ",
  "Sub_Section": "Face Wash & Cleansers",
  "Image_1": "https://cdn18.nnnow.com/web-images/large/styles/NCTCTND6XQU/1602058416171/1.jpg",
  "Image_2": "https://cdn13.nnnow.com/web-images/large/styles/NCTCTND6XQU/1602058416166/2.jpg",
  "Image_3": "https://cdn00.nnnow.com/web-images/large/styles/NCTCTND6XQU/1602058416168/3.jpg",
  "Name": "SEPHORA COLLECTION",
  "Description": "All-Over Face & Body Solid Cleanser - Cactus",
  "Price": "600",
  "Offer_Price": "360",
  "Offer": "40",
  "Size": "75gm",
  "Rating": "",
  "id": 13
},
{
  "Product": "SKINCARE",
  "Section": "CLEANSERS",
  "Sub_Section": "Face Wash & Cleansers",
  "Image_1": "https://cdn12.nnnow.com/web-images/large/styles/9UPVRHTJNGY/1585571862833/1.jpg",
  "Image_2": "",
  "Image_3": "",
  "Name": "PIXI",
  "Description": "Glow Mud Cleanser",
  "Price": "1880",
  "Offer_Price": "",
  "Offer": "",
  "Size": "135ML",
  "Rating": "",
  "id": 14
},
{
  "Product": "SKINCARE",
  "Section": "CLEANSERS",
  "Sub_Section": "Face Wash & Cleansers",
  "Image_1": "https://cdn17.nnnow.com/web-images/large/styles/Y2B6WPOZP6V/1602058416238/1.jpg",
  "Image_2": "https://cdn10.nnnow.com/web-images/large/styles/Y2B6WPOZP6V/1602058416234/2.jpg",
  "Image_3": "https://cdn03.nnnow.com/web-images/large/styles/Y2B6WPOZP6V/1602058416236/3.jpg",
  "Name": "SEPHORA COLLECTION",
  "Description": "Men Exfoliating Cleansing Gel",
  "Price": "1320",
  "Offer_Price": "792",
  "Offer": "40",
  "Size": "200ML",
  "Rating": "",
  "id": 15
},
{
  "Product": "SKINCARE",
  "Section": "CLEANSERS",
  "Sub_Section": "Face Wash & Cleansers",
  "Image_1": "https://cdn05.nnnow.com/web-images/large/styles/8I9U0DQTORN/1494572046851/1.jpg",
  "Image_2": "https://cdn18.nnnow.com/web-images/large/styles/8I9U0DQTORN/1494572046853/2.jpg",
  "Image_3": "https://cdn02.nnnow.com/web-images/large/styles/8I9U0DQTORN/1567665801211/7.jpg",
  "Name": "CLINIQUE",
  "Description": "Liquid Facial Soap Mild - Dry Combination Skin",
  "Price": "2000",
  "Offer_Price": "",
  "Offer": "",
  "Size": "200ML",
  "Rating": "",
  "id": 16
},
{
  "Product": "SKINCARE",
  "Section": "CLEANSERS",
  "Sub_Section": "Face Wash & Cleansers",
  "Image_1": "https://cdn18.nnnow.com/web-images/large/styles/N5P0C9VB4U3/1644914354378/1.jpg",
  "Image_2": "https://cdn10.nnnow.com/web-images/large/styles/N5P0C9VB4U3/1644914354372/3.jpg",
  "Image_3": "https://cdn02.nnnow.com/web-images/large/styles/N5P0C9VB4U3/1644914354367/5.jpg",
  "Name": "SEPHORA COLLECTION",
  "Description": "Clean Skin Gel",
  "Price": "1200",
  "Offer_Price": "",
  "Offer": "",
  "Size": "125ML",
  "Rating": "",
  "id": 17
},
{
  "Product": "SKINCARE",
  "Section": "CLEANSERS",
  "Sub_Section": "Face Wash & Cleansers",
  "Image_1": "https://cdn03.nnnow.com/web-images/large/styles/CNT8WX1LDG2/1636699241589/1.jpg",
  "Image_2": "https://cdn09.nnnow.com/web-images/large/styles/CNT8WX1LDG2/1636699241586/2.jpg",
  "Image_3": "",
  "Name": "MARIO BADESCU",
  "Description": "Enzyme Cleansing Gel",
  "Price": "1250",
  "Offer_Price": "",
  "Offer": "",
  "Size": "236ML",
  "Rating": "",
  "id": 18
},
{
  "Product": "SKINCARE",
  "Section": "CLEANSERS",
  "Sub_Section": "Makeup Removers",
  "Image_1": "https://cdn04.nnnow.com/web-images/large/styles/PAHPEGEPVYX/1518007568752/1.jpg",
  "Image_2": "https://cdn02.nnnow.com/web-images/large/styles/PAHPEGEPVYX/1518007568753/2.jpg",
  "Image_3": "",
  "Name": "SEPHORA COLLECTION",
  "Description": "Waterproof Eye Makeup Remover",
  "Price": "1220",
  "Offer_Price": "",
  "Offer": "",
  "Size": "200ML",
  "Rating": "3",
  "id": 19
},]
let data3 = [ {
  "Product": "SKINCARE",
  "Section": "TREATMENTS & HIGH TECH TOOLS ",
  "Sub_Section": "Face Serums",
  "Image_1": "https://cdn18.nnnow.com/web-images/large/styles/WYPHYOAHM39/1566556752958/1.jpg",
  "Image_2": "",
  "Image_3": "",
  "Name": "SEPHORA COLLECTION",
  "Description": "Ultra Glow Serum",
  "Price": "1850",
  "Offer_Price": "",
  "Offer": "",
  "Size": "30ML",
  "Rating": "5",
  "id": 25
},
{
  "Product": "SKINCARE",
  "Section": "TREATMENTS & HIGH TECH TOOLS ",
  "Sub_Section": "Face Serums",
  "Image_1": "https://cdn08.nnnow.com/web-images/large/styles/F5O4QKTQO9B/1626067152173/1.jpg",
  "Image_2": "",
  "Image_3": "",
  "Name": "SEPHORA COLLECTION",
  "Description": "Dark Spots Serum",
  "Price": "2400",
  "Offer_Price": "1440",
  "Offer": "40",
  "Size": "30ML",
  "Rating": "",
  "id": 26
},
{
  "Product": "SKINCARE",
  "Section": "TREATMENTS & HIGH TECH TOOLS ",
  "Sub_Section": "Face Serums",
  "Image_1": "https://cdn04.nnnow.com/web-images/large/styles/VRDUUXAG779/1626067326107/1.jpg",
  "Image_2": "",
  "Image_3": "",
  "Name": "SEPHORA COLLECTION",
  "Description": "Wrinkles Serum",
  "Price": "2400",
  "Offer_Price": "1440",
  "Offer": "40",
  "Size": "30ML",
  "Rating": "5",
  "id": 27
},
{
  "Product": "SKINCARE",
  "Section": "TREATMENTS & HIGH TECH TOOLS ",
  "Sub_Section": "Face Serums",
  "Image_1": "https://cdn10.nnnow.com/web-images/large/styles/GL1L2FRYW1F/1602058416259/1.jpg",
  "Image_2": "https://cdn02.nnnow.com/web-images/large/styles/GL1L2FRYW1F/1602058416254/2.jpg",
  "Image_3": "https://cdn11.nnnow.com/web-images/large/styles/GL1L2FRYW1F/1602058416256/3.jpg",
  "Name": "SEPHORA COLLECTION",
  "Description": "Clarifying Lotion",
  "Price": "1440",
  "Offer_Price": "",
  "Offer": "",
  "Size": "15ML",
  "Rating": "",
  "id": 28
},
{
  "Product": "SKINCARE",
  "Section": "TREATMENTS & HIGH TECH TOOLS ",
  "Sub_Section": "Face Serums",
  "Image_1": "https://cdn19.nnnow.com/web-images/large/styles/DB0BCEYYAZR/1585571862837/1.jpg",
  "Image_2": "",
  "Image_3": "",
  "Name": "PIXI",
  "Description": "Vitamin-C Serum",
  "Price": "2550",
  "Offer_Price": "",
  "Offer": "",
  "Size": "30ML",
  "Rating": "5",
  "id": 29
},
{
  "Product": "SKINCARE",
  "Section": "TREATMENTS & HIGH TECH TOOLS",
  "Sub_Section": " Face Serums",
  "Image_1": "https://cdn18.nnnow.com/web-images/large/styles/9T9TUD9K46B/1585571862832/1.jpg",
  "Image_2": "https://cdn10.nnnow.com/web-images/large/styles/9T9TUD9K46B/1611903862919/2.jpg",
  "Image_3": "https://cdn05.nnnow.com/web-images/large/styles/9T9TUD9K46B/1611903862922/3.jpg",
  "Name": "PIXI",
  "Description": "Rose Caviar Essence",
  "Price": "2400",
  "Offer_Price": "",
  "Offer": "",
  "Size": "45ML",
  "Rating": "",
  "id": 30
},
{
  "Product": "SKINCARE",
  "Section": "TREATMENTS & HIGH TECH TOOLS",
  "Sub_Section": "Cleansing Tools",
  "Image_1": "https://cdn11.nnnow.com/web-images/large/styles/0IQFHP62SRO/1606375877454/1.jpg",
  "Image_2": "https://cdn10.nnnow.com/web-images/large/styles/0IQFHP62SRO/1606375877452/2.jpg",
  "Image_3": "https://cdn08.nnnow.com/web-images/large/styles/0IQFHP62SRO/1606375877453/3.jpg",
  "Name": "SEPHORA COLLECTION",
  "Description": "Green Quartz Facial Roller",
  "Price": "2000",
  "Offer_Price": "1200",
  "Offer": "40",
  "Size": "One Size",
  "Rating": "",
  "id": 31
},
]
let data4 =[ {
  "Product": "SKINCARE",
  "Section": "MASKS",
  "Sub_Section": "Face Masks",
  "Image_1": "https://cdn17.nnnow.com/web-images/large/styles/87UJ86VNS8T/1604477892815/1.jpg",
  "Image_2": "https://cdn09.nnnow.com/web-images/large/styles/87UJ86VNS8T/1603198341509/3.jpg",
  "Image_3": "",
  "Name": "SEPHORA COLLECTION",
  "Description": "Charcoal Nose Strip",
  "Price": "240",
  "Offer_Price": "",
  "Offer": "",
  "Size": "One Size",
  "Rating": "",
  "id": 37
},
{
  "Product": "SKINCARE",
  "Section": "MASKS",
  "Sub_Section": "Face Masks",
  "Image_1": "https://cdn07.nnnow.com/web-images/large/styles/BGOHZI41RY6/1604477899661/1.jpg",
  "Image_2": "https://cdn10.nnnow.com/web-images/large/styles/BGOHZI41RY6/1604477899658/2.jpg",
  "Image_3": "",
  "Name": "SEPHORA COLLECTION",
  "Description": "Face Mask - Lychee",
  "Price": "360",
  "Offer_Price": "",
  "Offer": "",
  "Size": "One Size",
  "Rating": "",
  "id": 38
},
{
  "Product": "SKINCARE",
  "Section": "MASKS",
  "Sub_Section": "Face Masks",
  "Image_1": "https://cdn19.nnnow.com/web-images/large/styles/L6EKNU4FO6D/1585571862852/1.jpg",
  "Image_2": "https://cdn01.nnnow.com/web-images/large/styles/L6EKNU4FO6D/1585571862853/2.jpg",
  "Image_3": "",
  "Name": "PIXI",
  "Description": "Plump Collagen Boost Sheet Mask",
  "Price": "1070",
  "Offer_Price": "",
  "Offer": "",
  "Size": "23gm",
  "Rating": "",
  "id": 39
},
{
  "Product": "SKINCARE",
  "Section": "MASKS",
  "Sub_Section": "Face Masks",
  "Image_1": "https://cdn19.nnnow.com/web-images/large/styles/QX5JOPDJDBP/1617724753290/1.jpg",
  "Image_2": "",
  "Image_3": "",
  "Name": "SEPHORA COLLECTION",
  "Description": "Colorful Vitamin Face Mask - Aloe Vera + Vitamin E (Quenching)",
  "Price": "360",
  "Offer_Price": "",
  "Offer": "",
  "Size": "One Size",
  "Rating": "",
  "id": 40
},
{
  "Product": "SKINCARE",
  "Section": "MASKS",
  "Sub_Section": "Face Masks",
  "Image_1": "https://cdn19.nnnow.com/web-images/large/styles/L95CY1M4YKG/1626067212346/1.jpg",
  "Image_2": "",
  "Image_3": "",
  "Name": "SEPHORA COLLECTION",
  "Description": "Vitamin Mask - Watermelon",
  "Price": "1200",
  "Offer_Price": "",
  "Offer": "",
  "Size": "One Size",
  "Rating": "",
  "id": 41
},
{
  "Product": "SKINCARE",
  "Section": "MASKS",
  "Sub_Section": "Face Masks",
  "Image_1": "https://cdn13.nnnow.com/web-images/large/styles/GO4J3E7Z10P/1617724508512/1.jpg",
  "Image_2": "https://cdn07.nnnow.com/web-images/large/styles/GO4J3E7Z10P/1617724508511/2.jpg",
  "Image_3": "",
  "Name": "SEPHORA COLLECTION",
  "Description": "Hero Mask - The Seaweed Mask",
  "Price": "450",
  "Offer_Price": "",
  "Offer": "",
  "Size": "One Size",
  "Rating": "",
  "id": 42
},
{
  "Product": "SKINCARE",
  "Section": "MASKS",
  "Sub_Section": "Sheet Masks",
  "Image_1": "https://cdn07.nnnow.com/web-images/large/styles/BGOHZI41RY6/1604477899661/1.jpg",
  "Image_2": "https://cdn10.nnnow.com/web-images/large/styles/BGOHZI41RY6/1604477899658/2.jpg",
  "Image_3": "",
  "Name": "SEPHORA COLLECTION",
  "Description": "Face Mask - Lychee",
  "Price": "360",
  "Offer_Price": "",
  "Offer": "",
  "Size": "One Size",
  "Rating": "",
  "id": 43
},
]


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

            <li class="sidebar_cat">MOISTURIZERS
                <ul class="sidebar_cat_content">
                    <option><a href="#">Moisturizers</a></option>
                    <option><a href="#">Night Cream</a></option>
                    <option><a href="#">Face Oils</a></option>
                    <option><a href="#">sunscreens</a></option>
                    <option><a href="#">BB and CC Creams</a></option>
                </ul>
            </li>
            <li class="sidebar_cat">CLEANSERS
                <ul class="sidebar_cat_content">
                    <option><a href="#">Face Wash & Cleansers</a></option>
                    <option><a href="#">Exfoliators</a></option>
                    <option><a href="#">Makeup Removers</a></option>
                    <option><a href="#">Face Wipes</a></option>
                    <option><a href="#">Toners</a></option>

                </ul>
            </li>
            <li class="sidebar_cat">TREATMENTS & HIGHTECH TOOLS
                <ul class="sidebar_cat_content">
                    <option><a href="#">Face Serums</a></option>
                    <option><a href="#">Cleansing Tools</a></option>
                    <option><a href="#">Anti-Aging Tools</a></option>
                    <option><a href="#">Face Masks</a></option>
                    <option><a href="#">Eye Cream & Treatments</a></option>
                    
                </ul>
            <li class="sidebar_cat">MASKS
                <ul class="sidebar_cat_content">
                    <option><a href="#">Face Masks</a></option>
                    <option><a href="#">Sheet Masks</a></option>
                    <option><a href="#">Eye Masks</a></option>
                    <option><a href="#">Nose Masks & Strips</a></option>
                    <option><a href="#">Lip Masks</a></option>
                    <option><a href="#">Hair Masks</a></option>
                </ul>
            </li>

            <li class="sidebar_cat">BATH & SHOWER
                <ul class="sidebar_cat_content">
                    <option><a href="#">Body Wash & Shower Gel</a></option>
                    <option><a href="#">Scrub & Exfoliants</a></option>
                    <option><a href="#">Exfoliators</a></option>
                </ul>
            </li>
            <li class="sidebar_cat">BODY MOISTURIZERS
                <ul class="sidebar_cat_content">
                    <option><a href="#">Body Lotions & Body Oils</a></option>
                    <option><a href="#">Hand Cream & Foot Cream</a></option>
                    <option><a href="#">Sunscreen Lotions</a></option>

                </ul>
            </li>
            <li class="sidebar_cat">VEGAN</a>
                <ul class="sidebar_cat_content">
                    <option><a href="#">Face Care</a></option>
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

import { footer } from "../scripts/navbar.js"

let foot = document.querySelector("#footer");
foot.innerHTML = footer();