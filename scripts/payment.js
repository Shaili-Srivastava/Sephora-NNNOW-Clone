let totalpricedata=JSON.parse(localStorage.getItem("sephora_paydata"))||[];
totalpricedata.forEach(el => {
    let bagsubtotal=document.querySelector("#bagsubtotal").innerText=el.subtotal;
let bagdelivery=document.querySelector("#bagdelivery").innerText=el.delivery;
let bagdiscount=document.querySelector("#bagdiscount").innerText=el.discount;
let bagtotal=document.querySelector("#bagtotal").innerText=el.total;
let totalpayable=document.querySelector("#totalpayable").innerText=el.total;
let baggst=document.querySelector("#baggst").innerText=el.gst;
});


let paythirdrightarrow= document.querySelector("#paythirdrightarrow");
paythirdrightarrow.addEventListener("click",()=>{
    alert("Please select a Payment method");
})
    
let creditcard=document.querySelector("#creditcard");
creditcard.addEventListener("click", function () {
    document.querySelector(".cartpopup1").classList.add("active");
        });

let payplaceorder=document.querySelector("#payplaceorder");
payplaceorder.addEventListener("click", ()=>{
    let cardnumber=document.querySelector("#cardnumber").value;
    let cvv= document.querySelector("#cvv").value;
    let cardexpiry=document.querySelector("#cardexpiry").value;
    if(cardnumber.length==16 && cvv.length==3){
        document.querySelector(".cartpopup1").classList.remove("active");
        document.querySelector(".cartpopup2").classList.add("active");
    }
    else{
        alert("Invalid card details");
    }
})
let confirmotp=document.querySelector("#confirmotp");
confirmotp.addEventListener("click", ()=>{
    let myotp=document.querySelector("#myotp").value;
    if(myotp==="0497"){
        alert("Order Placed Successfully");
        window.location.href="account.html";
    }
    else{
        alert("Invalid OTP Submitted");
    }
})



let cashondelivery=document.querySelector("#cashondelivery");
cashondelivery.addEventListener("click", ()=>{
alert("Order Placed Successfully");
window.location.href="account.html";
})


document.querySelector(".close_button1").addEventListener("click", function () {
    document.querySelector(".cartpopup1").classList.remove("active");
    });
document.querySelector(".close_button2").addEventListener("click", function () {
 document.querySelector(".cartpopup2").classList.remove("active");
        });




