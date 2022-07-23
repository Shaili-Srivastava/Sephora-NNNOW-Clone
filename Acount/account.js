function showContent1(){
    var temp=document.getElementById('button1-div');

    if(temp.style.display==="none"){
        temp.style.display="block"
    }else{
        temp.style.display="none"
    }
}
function showContent2(){
    var temp=document.getElementById('button2-div2');

    if(temp.style.display==="none"){
        temp.style.display="block"
    }else{
        temp.style.display="none"
    }
}
function showContent3(){
    var temp=document.getElementById('button3-div3');

    if(temp.style.display==="none"){
        temp.style.display="block"
    }else{
        temp.style.display="none"
    }
}
function showContent4(){
    var temp=document.getElementById('button4-div4');

    if(temp.style.display==="none"){
        temp.style.display="block"
    }else{
        temp.style.display="none"
    }
}


//let iname=localStorage.getItem("userData")
let iname="Raj"
document.getElementById('iname').value=iname

//let iEmail=localStorage.getItem("userData")
let iEmail="Raj@12345"
document.getElementById('iEmail').value=iEmail

//let iPhone=localStorage.getItem("userData")
let iPhone="1234567"
document.getElementById('iPhone').value=iPhone

//let iPassword=localStorage.getItem("userData")
let iPassword="raj"
document.getElementById('iPassword').value=iPassword

document.querySelector("#edit").addEventListener("click", ()=>{
    let name=document.getElementById('iname').disabled;
    if(name){
        document.getElementById('iname').disabled=false
  
    }else{
        document.getElementById('iname').disabled=true
    }
})

document.querySelector("#change").addEventListener("click", ()=>{
    let password=document.getElementById('iPassword').disabled;
    if(password){
        document.getElementById('iPassword').disabled=false
  
    }else{
        document.getElementById('iPassword').disabled=true
    }
})