import {display} from '../component/main.js';
import { navbar } from "../scripts/navbar.js"

let nav = document.querySelector("#navbar");
nav.innerHTML = navbar();

let data = [{
    Image_1 :"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    Name:"FOREST ESSENTIAL1",
    Description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    Price: 2755
},
{
    Image_1 :"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    Name:"FOREST ESSENTIAL1",
    Description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    Price: 3055
},
{
    Image_1:"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    Name:"FOREST ESSENTIAL2",
    Description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    Price: 755
},
{
    Image_1:"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    Name:"FOREST ESSENTIAL2",
    Description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    Price: 1755
},
{
    Image_1:"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    Name:"FOREST ESSENTIAL",
    Description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    Price: 3700
},
{
    Image_1:"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    Name:"FOREST ESSENTIAL",
    Description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    Price: 2999
},
{
    Image_1:"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    Name:"FOREST ESSENTIAL",
    Description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    Price: 3755
},
{
    Image_1:"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    Name:"FOREST ESSENTIAL",
    Description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    Price: 3755
},
{
    Image_1:"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    Name:"FOREST ESSENTIAL",
    Description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    Price: 3755
},]



let container = document.getElementById("product_div")
display(data, container)
let c1 = document.getElementById("c1")
let c2 = document.getElementById("c2")
let c3 = document.getElementById("c3")
let c4 = document.getElementById("c4")


document.getElementById("c1").addEventListener("click",()=>{
    console.log("working")
    if(c1.checked==true){
        data = data.filter((el)=>{
            return el.Name== "FOREST ESSENTIAL1";
        })
        console.log(data);
        append_data(data);
    }
})
document.getElementById("filtertagPrice").addEventListener("click",()=>{
    let value = document.getElementById("filtertagPrice").value;
    console.log(value);
        if(value=="zero"){
        let cdata = data.filter((el)=>{
            return el.Price > 0 && el.Price <= 1000;
      })
        // console.log(data, container);
        display(cdata, container)

    }
    if(value=="thousand"){
      let  cdata= data.filter((el) =>{
            return el.Price >1000 && el.Price <=2000
        })
        display(cdata, container)

    }
    if(value=="two_thous"){
        let cdata= data.filter((el) =>{
            return el.Price >=2000
        })
        display(cdata, container)

    }
    if(value=="Price"){
        let cdata= data.filter((el) =>{
            return el.Price >=0
        })
        console.log(data)
        display(cdata, container)
    }
})

document.querySelector("#select").addEventListener("change", sorting)
function sorting() {
    let toSort = document.getElementById("select").value;
    if (toSort == "LH") {
        let sortedList = data.sort((a, b) => { 
            return a.Price - b.Price 
        } );
        console.log(sortedList);
       display(sortedList, container)
        console.log("high to low");
    }
    if (toSort == "HL") {
        let sortedList= data.sort((a, b) => b.Price - a.Price);
       display(sortedList, container)

        console.log("low to high")
    }
    }

    import { footer } from "../scripts/navbar.js"

let foot = document.querySelector("#footer");
foot.innerHTML = footer();