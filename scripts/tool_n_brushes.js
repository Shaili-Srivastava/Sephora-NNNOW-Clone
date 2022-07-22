import { displyFrameWork, display } from "../component/main.js";

let main = document.querySelector("#main");
main.innerHTML = displyFrameWork();

let mainImg = document.getElementById("mainPageImg")
mainImg.src = "https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/Tools_BrushesDesktop.jpg"

let data = [{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "CLINIQUE",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "CLINIQUE",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "CLINIQUE",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "CLINIQUE",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "CLINIQUE",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "CLINIQUE",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "CLINIQUE",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "CLINIQUE",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "CLINIQUE",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "CLINIQUE",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "CLINIQUE",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},
];
let data1 = [{
    image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
    name: "CLINIQUE",
    description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
    price: 1956,
},]

let cont1 = document.getElementById("list_container_1");
let cont2 = document.getElementById("list_container_2");
let cont3 = document.getElementById("list_container_3");
let cont4 = document.getElementById("list_container_4");


display(data, cont1);
display(data, cont2);
display(data, cont3);
display(data, cont4);


document.querySelectorAll(".rightarrow").forEach((button) => {
    button.addEventListener("click", function () {
        let sliderbox1 = document.querySelector("#list_container_1");
        let sliderbox2 = document.querySelector("#list_container_2");
        let sliderbox3 = document.querySelector("#list_container_3");
        let sliderbox4 = document.querySelector("#list_container_4");
        myslider(sliderbox1, "right", 40, 300, 40);
        myslider(sliderbox2, "right", 40, 300, 40);
        myslider(sliderbox3, "right", 40, 300, 40);
        myslider(sliderbox4, "right", 40, 300, 40);
    })
});
document.querySelectorAll(".leftarrow").forEach((button) => {
    button.addEventListener("click", function () {
        let sliderbox1 = document.querySelector("#list_container_1");
        let sliderbox2 = document.querySelector("#list_container_2");
        let sliderbox3 = document.querySelector("#list_container_3");
        let sliderbox4 = document.querySelector("#list_container_4");
        myslider(sliderbox1, "left", 40, 300, 40);
        myslider(sliderbox2, "left", 40, 300, 40);
        myslider(sliderbox3, "left", 40, 300, 40);
        myslider(sliderbox4, "left", 40, 300, 40);
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
