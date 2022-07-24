import { navbar, footer } from "./navbar.js";
document.querySelector("#navbar").innerHTML=navbar();
document.querySelector("#footer").innerHTML=footer();


let cartdata=JSON.parse(localStorage.getItem("sephoracart"))||[];
let bagcount=document.querySelector("#bagcount");
// if(cartdata.length==null){
//     bagcount.innerText=null;
// }
// else{
//     bagcount.innerText=cartdata.length;
// }


let mycart=document.querySelector("#mycart");
mycart.addEventListener("click", function(){
    if(bagcount.innerText=="0"){
document.querySelector(".cartpopup1").classList.add("active");
    }
    else{
        document.querySelector(".cartpopup2").classList.add("active");
    }
})
document.querySelector(".close_button1").addEventListener("click", function () {
    document.querySelector(".cartpopup1").classList.remove("active");
});
document.querySelector(".close_button2").addEventListener("click", function () {
    document.querySelector(".cartpopup2").classList.remove("active");
});

let sephorauserdata=JSON.parse(localStorage.getItem("sephorauserdata"))||[];

let loginbtn=document.querySelector("#login");
loginbtn.addEventListener("click", ()=>{
    document.querySelector(".loginpopup1").classList.add("active");
});
document.querySelector(".close_button3").addEventListener("click", function () {
    document.querySelector(".loginpopup1").classList.remove("active");
});

let emailphone=document.querySelector("#emailphone");
let submitotp =document.querySelector("#submitotp");
let loginflag=false;
let loginstart=document.querySelector("#loginstart");
loginstart.addEventListener("click", ()=>{
  emailphone=emailphone.value;
    if(emailphone.length<10){
        alert("Enter valid credentials");
    }
   else if(userdatafilter(sephorauserdata,emailphone)==""){
    document.querySelector(".loginpopup1").classList.remove("active");
    document.querySelector(".signuppopup1").classList.add("active");
    document.querySelector(".close_button5").addEventListener("click", function () {
        document.querySelector(".signuppopup1").classList.remove("active");
    });
   }
   else{
    document.querySelector(".loginpopup1").classList.remove("active");
    let otpsent=document.querySelector("#otpsent");
    otpsent.innerText=`We’ve sent an OTP to ${emailphone} via SMS. Please enter it below, and you’re done.`
    document.querySelector(".otppopup1").classList.add("active");
document.querySelector(".close_button4").addEventListener("click", function () {
    document.querySelector(".otppopup1").classList.remove("active");
});
   }
});
submitotp.addEventListener("click", ()=>{
    submitotp=submitotp.value;
    if(submitotp=="0497"){
        
    }
})
   

let userdatafilter= (data,emailphone)=>{
    data.filter(el=>{
        if(el.Email==emailphone || el.Mobile==emailphone){
            return el;
        }
    })
}