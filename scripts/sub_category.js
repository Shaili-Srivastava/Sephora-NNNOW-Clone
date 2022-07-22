import {display} from '../component/main.js';

let data = [{
    image :"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    name:"FOREST ESSENTIAL1",
    description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    price: 2755
},
{
    image :"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    name:"FOREST ESSENTIAL1",
    description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    price: 3055
},
{
    image :"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    name:"FOREST ESSENTIAL2",
    description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    price: 755
},
{
    image :"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    name:"FOREST ESSENTIAL2",
    description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    price: 1755
},
{
    image :"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    name:"FOREST ESSENTIAL",
    description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    price: 3700
},
{
    image :"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    name:"FOREST ESSENTIAL",
    description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    price: 2999
},
{
    image :"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    name:"FOREST ESSENTIAL",
    description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    price: 3755
},
{
    image :"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    name:"FOREST ESSENTIAL",
    description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    price: 3755
},
{
    image :"https://cdn17.nnnow.com/web-images/medium/styles/T1CA0US0QOH/1614353172645/1.jpg",
    name:"FOREST ESSENTIAL",
    description: "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
    price: 3755
},]


// function append_data(){
//     product_div.innerHTML = ""
//     data.forEach((el) => {
//         let div = document.createElement("div")
//         div.setAttribute ("id", "detailed_pro")
//         let image = document.createElement("image");
//         image.src= el.image
//         let name = document.createElement("h4");
//         name.innerText= el.name
//         let description = document.createElement("p")
//         description.innerText= el.description
//         let price = document.createElement("h4")
//         price.innerText= `Rs. ${el.price}`

//        div.append(image,name,description,price)
       
//        product_div.append(div)

//     });
// }
// // append_data(data);

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
            return el.name== "FOREST ESSENTIAL1";
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
            return el.price > 0 && el.price <= 1000;
      })
        // console.log(data, container);
        display(cdata, container)

    }
    if(value=="thousand"){
      let  cdata= data.filter((el) =>{
            return el.price >1000 && el.price <=2000
        })
        display(cdata, container)

    }
    if(value=="two_thous"){
        let cdata= data.filter((el) =>{
            return el.price >=2000
        })
        display(cdata, container)

    }
    if(value=="price"){
        let cdata= data.filter((el) =>{
            return el.price >=0
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
            return a.price - b.price 
        } );
        console.log(sortedList);
       display(sortedList, container)
        console.log("high to low");
    }
    if (toSort == "HL") {
        let sortedList= data.sort((a, b) => b.price - a.price);
       display(sortedList, container)

        console.log("low to high")
    }
    }