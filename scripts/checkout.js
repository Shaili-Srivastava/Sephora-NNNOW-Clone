let checkoutdata=JSON.parse(localStorage.getItem("checkoutdata2"))||[];
let totalbagprice=0;
let sephora_address=JSON.parse(localStorage.getItem("sephora_address1"))||[];

let totalpricedata=JSON.parse(localStorage.getItem("sephora_paydata"))||[];

let leftnavbag3=document.querySelector("#leftnavbag3");
let addbtn=document.createElement("div");
document.querySelector(".close_button2").addEventListener("click", function () {
document.querySelector(".cartpopup2").classList.remove("active");
});
if(sephora_address.length==0){
    let addbtn=document.createElement("div");
    addbtn.innerText="Add Address";
    leftnavbag3.append(addbtn);
    addbtn.addEventListener("click", ()=>{
        document.querySelector(".cartpopup2").classList.add("active");
    });

}
else{
    let myleftfirstrow=document.createElement("div");
    addbtn.innerText="Add Address";
    sephora_address.forEach(el=>{
        let myleftfirstrow1=document.createElement("div");
        let p1=document.createElement("p");
    p1.innerText=el.Name;
    let p2=document.createElement("p");
    p2.innerText=el.House;
    let p3=document.createElement("p");
    p3.innerText=el.Landmark;
    let p4=document.createElement("p");
    p4.innerText=el.Pincode;
    let p5=document.createElement("p");
    p5.innerText=el.Mobile;
    let p6=document.createElement("p");
    p6.innerText=el.altMobile;
    myleftfirstrow1.append(p1,p2,p3,p4,p5,p6);
    myleftfirstrow.append(myleftfirstrow1,addbtn)
    });
    
    
    leftnavbag3.append(myleftfirstrow);
    addbtn.addEventListener("click", ()=>{
        document.querySelector(".cartpopup2").classList.add("active");
    });
}


let saveaddress=document.querySelector("#addsave");
saveaddress.addEventListener("click", ()=>{
    let name=document.querySelector("#addname").value;
    let house=document.querySelector("#addhouse").value;
    let mobile=document.querySelector("#addmobile").value;
    let altmobile=document.querySelector("#addaltermobile").value;
    let pincode=document.querySelector("#addpin").value;
    let landmark=document.querySelector("#addlandmark").value;
    let obj={
        Name:name,
        House:house,
        Landmark:landmark,
        Pincode:pincode,
        Mobile:mobile,
        altMobile:altmobile
    }
    sephora_address.push(obj);
    localStorage.setItem("sephora_address1",JSON.stringify(sephora_address));
    document.querySelector(".close_button2").addEventListener("click", function () {
document.querySelector(".cartpopup2").classList.remove("active");

});
});
saveaddress.addEventListener("click", function () {
document.querySelector(".cartpopup2").classList.remove("active");

});
checkoutdata.forEach((el) => {
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
    
    let itemprice=document.createElement("div");
    let pricetag=document.createElement("h2");
    pricetag.innerText="Rs."
    let price=document.createElement("h2");
    price.innerText=el.Price
    itemprice.append(pricetag,price);
    totalbagprice+=Number(price.innerText);

    mybagitemright.append(name,section,size,itemprice);
    
    mybagitem.append(mybagitemleft,mybagitemright);
    let deliverytime=document.createElement("div");
    let check1=document.createElement("input");
    check1.type="checkbox";
    let para1=document.createElement("h5");
    para1.innerText="Delivery within 5-7 days";
    deliverytime.append(check1, para1);

    
    
    leftfirstrow.append(mybagitem,deliverytime);
    leftnavbag3.append(leftfirstrow);
});
let leftsecondrow=document.createElement("div");
    leftsecondrow.setAttribute("id","leftsecondrow");
    let line1=document.createElement("hr");
    let editbag=document.createElement("h5");
    editbag.innerText="EDIT BAG";
    editbag.addEventListener("click",()=>{
        window.location.href="cart.html";
    })
    let line2=document.createElement("hr");
    leftsecondrow.append(line1,editbag,line2);
    leftnavbag3.append(leftsecondrow);

let promocode=document.querySelector("#firstrightarrrow");
promocode.addEventListener("click", function(){
    document.querySelector(".cartpopup1").classList.add("active");
});

document.querySelector(".close_button1").addEventListener("click", function () {
document.querySelector(".cartpopup1").classList.remove("active");
});
let bagsubtotal=document.querySelector("#bagsubtotal").innerText=totalbagprice;
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


let checkouttopay=document.querySelector("#thirdrightarrow");
checkouttopay.addEventListener("click",()=>{
if(sephora_address.length==0){
        document.querySelector(".cartpopup2").classList.add("active");
}
else{
    let totalpricedata=[];
let obj={
   
    subtotal:bagsubtotal,
    delivery:bagdelivery.innerText,
    discount:bagdiscount.innerText,
    gst:baggst.innerText,
    total:bagtotal.innerText
}
totalpricedata.push(obj);
localStorage.setItem("sephora_paydata", JSON.stringify(totalpricedata));
    window.location.href="payment.html"
}
})