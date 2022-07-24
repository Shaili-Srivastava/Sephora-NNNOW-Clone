import { navbar, footer,cartpopUp, loginpopup } from "./navbar.js";
document.querySelector("#navbar").innerHTML=navbar();
document.querySelector("#footer").innerHTML=footer();
cartpopUp();
loginpopup();
   

// let userdatafilter= (data,emailphone)=>{
//     data.filter(el=>{
//         if(el.Email==emailphone || el.Mobile==emailphone){
//             return el;
//         }
//     })
// }