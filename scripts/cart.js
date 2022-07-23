let bagdata=[{
    "Product": "MAKEUP",
    "Section": "FACE",
    "Sub_Section": "Foundation",
    "Image_1": "https://cdn16.nnnow.com/web-images/large/styles/CH65NKWC2ZU/1533201155002/1.jpg",
    "Image_2": "https://cdn16.nnnow.com/web-images/large/styles/CH65NKWC2ZU/1617175589724/2.jpg",
    "Image_3": "",
    "Name": "SEPHORA COLLECTION",
    "Description": "Glow Perfection Foundation - 25 Beige",
    "Price": "1690",
    "Offer_Price": "1352",
    "Offer": "20",
    "Size": "20ML",
    "Rating": "5",
    "id": 1
  },{
    "Product": "MAKEUP",
    "Section": "FACE",
    "Sub_Section": "Foundation",
    "Image_1": "https://cdn16.nnnow.com/web-images/large/styles/CH65NKWC2ZU/1533201155002/1.jpg",
    "Image_2": "https://cdn16.nnnow.com/web-images/large/styles/CH65NKWC2ZU/1617175589724/2.jpg",
    "Image_3": "",
    "Name": "SEPHORA COLLECTION",
    "Description": "Glow Perfection Foundation - 25 Beige",
    "Price": "1690",
    "Offer_Price": "1352",
    "Offer": "20",
    "Size": "20ML",
    "Rating": "5",
    "id": 1
  }, {
    "Product": "MAKEUP",
    "Section": "FACE",
    "Sub_Section": "BB & CC Cream",
    "Image_1": "https://cdn09.nnnow.com/web-images/large/styles/DJA1WA697WV/1585307687501/1.jpg",
    "Image_2": "https://cdn16.nnnow.com/web-images/large/styles/DJA1WA697WV/1616758676356/50.jpg",
    "Image_3": "",
    "Name": "CLINIQUE",
    "Description": "Clinique ID™ With Dramatically Different™ Moisturizing BB-Gel",
    "Price": "2950",
    "Offer_Price": "",
    "Offer": "",
    "Size": "115ML",
    "Rating": "",
    "id": 7
  }]
// let bagdata=JSON.parse(localStorage.getItem("bagdata"))||[];
let myfavdata=JSON.parse(localStorage.getItem("myfavdata"))||[];
let checkoutdata1=JSON.parse(localStorage.getItem("checkoutdata2"))||[];
let totalbagprice=0;
let leftnavbag3=document.querySelector("#leftnavbag3");
bagdata.forEach((el,index) => {
    let leftfirstrow=document.createElement("div");
    leftfirstrow.setAttribute("class", "leftfirstrow");
    let mybagitem=document.createElement("div");
    mybagitem.setAttribute("class","mybagitem");
    let mybagitemleft=document.createElement("div");
    let img1=document.createElement("img");
    img1.src=el.Image_1;
    mybagitemleft.append(img1);
    mybagitemright=document.createElement("div");
    let name=document.createElement("p");
    name.innerText=el.Name;
    let section=document.createElement("h3");
    section.innerText=el.Sub_Section;
    let size=document.createElement("p");
    size.innerText=el.Size;
    let movefav=document.createElement("p");
    movefav.innerText="Move to Favourite";
    movefav.addEventListener("click", ()=>{
        myfavdata.push(el);
        localStorage.setItem("myfavdata", JSON.stringify(myfavdata));
        bagdata.splice(index,1);
        localStorage.setItem("bagdata",JSON.stringify(bagdata));
    })
    itemremove=document.createElement("p");
    itemremove.innerText="Remove";
    itemremove.addEventListener("click", ()=>{
        bagdata.splice(index,1);
        localStorage.setItem("bagdata",JSON.stringify(bagdata));
    })
    let subbagitemright=document.createElement("div");
    subbagitemright.setAttribute("class","subbagitemright");
    subbagitemright.append(movefav,itemremove)
    mybagitemright.append(name,section,size,subbagitemright);
    
    mybagitem.append(mybagitemleft,mybagitemright);
    let qty=document.createElement("select");
    let opt1=document.createElement("option");
    opt1.value=1;
    opt1.innerText=1;
    let opt2=document.createElement("option");
    opt2.value=2;
    opt2.innerText=2;
    let opt3=document.createElement("option");
    opt3.value=3;
    opt3.innerText=3;
    let opt4=document.createElement("option");
    opt4.value=4;
    opt4.innerText=4;
    qty.append(opt1,opt2,opt3,opt4);

    
    let itemprice=document.createElement("div");
    let pricetag=document.createElement("h2");
    pricetag.innerText="Rs."
    let price=document.createElement("h2");
    let updatedprice=el.Offer_Price;
    if(el.Offer_Price==""){
        updatedprice=el.Price;
        price.innerText=updatedprice;
    }
    else{
        let updatedprice=el.Offer_Price;
        price.innerText=updatedprice;
    }
    
    itemprice.append(pricetag,price);
   
    qty.addEventListener("change",()=>{
        if(el.Offer_Price==""){
            updatedprice=eval(el.Price*qty.value);
            price.innerText=updatedprice
    }
    else{
        updatedprice=eval(el.Offer_Price*qty.value);
        price.innerText=updatedprice;
    }
    });
    totalbagprice+=Number(updatedprice);

    leftfirstrow.append(mybagitem,qty,itemprice);
    leftnavbag3.append(leftfirstrow);
    let checkoutdata=document.querySelector("#checkoutdata");
    checkoutdata.addEventListener("click", ()=>{
        event.preventDefault();
        let obj={
            Image_1:el.Image_1,
            Name:el.Name,
            Sub_Section:el.Sub_Section,
            Size:el.Size,
            Price:updatedprice,
            Qty:qty.value

        };
        console.log(obj);
        checkoutdata1.push(obj);
        localStorage.setItem("checkoutdata2",JSON.stringify(checkoutdata1));
        window.location.href="checkout.html";

    });


    
});
let promocode=document.querySelector("#firstrightarrrow");
promocode.addEventListener("click", function(){
    document.querySelector(".cartpopup1").classList.add("active");
});

document.querySelector(".close_button1").addEventListener("click", function () {
document.querySelector(".cartpopup1").classList.remove("active");
});
let bagsubtotal=document.querySelector("#bagsubtotal").innerText+=totalbagprice;
let bagdelivery=document.querySelector("#bagdelivery");
bagdelivery.innerText=(Math.random()*100).toFixed(0);
let submitpromo=document.querySelector("#submitpromo");
let bagdiscount=document.querySelector("#bagdiscount");
bagdiscount.innerText=0;
submitpromo.addEventListener("click", ()=>{
let promocodevalue=document.querySelector("#promocodevalue").value;
if(promocodevalue=="masai10"){
    let bagdiscount=document.querySelector("#bagdiscount");
    bagdiscount.innerText=eval(bagsubtotal*.1).toFixed(2);
    document.querySelector(".cartpopup1").classList.remove("active");
    bagtotal.innerText=eval(bagsubtotal-Number(bagdiscount.innerText)+Number(bagdelivery.innerText)+Number(baggst.innerText)).toFixed(2);
}
else{
    alert("Invalid Promocode");
}
});
let baggst=document.querySelector("#baggst");
baggst.innerText=eval((bagsubtotal-bagdiscount.innerText)*.18).toFixed(2);
let bagtotal=document.querySelector("#bagtotal");
bagtotal.innerText=eval(bagsubtotal-Number(bagdiscount.innerText)+Number(bagdelivery.innerText)+Number(baggst.innerText)).toFixed(2);
let totalbagcount=document.querySelector("#totalbagcount");
totalbagcount.innerText=`MY BAG (${bagdata.length})`;