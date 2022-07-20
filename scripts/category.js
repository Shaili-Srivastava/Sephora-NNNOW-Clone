import { displyFrameWork, display } from "../component/main.js";

let main = document.querySelector("#main");
main.innerHTML = displyFrameWork();


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
let cont4 = document.getElementById("demo");


display(data, cont1);
display(data, cont2);
display(data, cont3);
display(data1, cont4);


let elements = document.getElementsByClassName("sidebar_cat");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", toggle);
}
// elements.addEventListener("click",toggle());


function toggle() {
    let toggleValue = document.getElementsByClassName("sidebar_cat_content");
    for (let i = 0; i < toggleValue.length; i++) {
        if (toggleValue[i].style.display == "block") {
            toggleValue[i].style.display = "none";
        } else {
            toggleValue[i].style.display = "block";
        }
    }

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



