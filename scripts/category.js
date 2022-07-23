import { displyFrameWork, display } from "../component/main.js";

let main = document.querySelector("#main");
main.innerHTML = displyFrameWork();


let data = [{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "1",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "2",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "3",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "4",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "5",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "6",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "7",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "8",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "9",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "10",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "11",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
];


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



document.querySelector("#sidebar").innerHTML = `<ul>
            <li class="sidebar_cat">FACE
                <ul class="sidebar_cat_content">
                    <option><a href="#">Foundation</a></option>
                    <option><a href="#">BB & CC Cream</a></option>
                    <option><a href="#">Concealer</a></option>
                </ul>
            </li>
            <li class="sidebar_cat">CHEEK
                <ul class="sidebar_cat_content">
                    <option><a href="#">Brush</a></option>
                    <option><a href="#">Bronzer</a></option>
                    <option><a href="#">Highlighter</a></option>
                </ul>
            </li>
            <li class="sidebar_cat">EYE
                <ul class="sidebar_cat_content">
                    <option><a href="#">Mascara</a></option>
                    <option><a href="#">Eyeliner</a></option>
                    <option><a href="#">Eyeslashes</a></option>
                </ul>
            <li class="sidebar_cat">LIP
                <ul class="sidebar_cat_content">
                    <option><a href="#">Lip Stick</a></option>
                    <option><a href="#">Lip Gloss</a></option>
                    <option><a href="#">Lip Plumper</a></option>
                </ul>
            </li>

            <li class="sidebar_cat">BRUSHES & APPLICATORS
                <ul class="sidebar_cat_content">
                    <option><a href="#">Face Brushes</a></option>
                    <option><a href="#">Lip Brushes</a></option>
                    <option><a href="#">Eye Brushes</a></option>
                </ul>
            </li>
            <li class="sidebar_cat">ACCESSORIES
                <ul class="sidebar_cat_content">
                    <option><a href="#">Nail Tools</a></option>
                    <option><a href="#">make Up Tools & Accessories</a></option>
                </ul>
            </li>
            <li class="sidebar_cat">NAIL
                <ul class="sidebar_cat_content">
                    <option><a href="#">Nail Polish</a></option>
                    <option><a href="#">Nail Care</a></option>
                </ul>
            </li>
            <li class="sidebar_cat">MAKEUP PALETTES
                    <ul class="sidebar_cat_content">
                        <option><a href="#">Makeup Platters</a></option>
                    </ul>
            </li>
            <li class="sidebar_cat">VEGAN</a>
                <ul class="sidebar_cat_content">
                    <option><a href="#">Eye</a></option>
                    <option><a href="#">Face</a></option>
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
