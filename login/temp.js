// async function Login(){
//     console.log("hello")
//     // let login_data={
//     //     value:document.getElementById('value').value
//     // }

//     // login_data=JSON.stringify(login_data)

//     // let login_api_link="https://masai-api-mocker.herokuapp.com/auth/login"

//     // let responce=await fetch(login_api_link,{
//     //     method:"POST",
//     //     body: login_data,
//     //     headers:{
//     //         'Content-Type':'application/json'
//     //     },
//     // })
//     // let data=await responce.jsone()
//     // console.log("data",data)
// }
let logInform=document.querySelector("#logInData")
logInform.addEventListener('submit',function(event){
    event.preventDefault();
    console.log()
    //localStorage.Email=event.target.Email.value
    // let d1=localStorage.data.length===0 ? 
    // "{}":localStorage.data
    let d1=localStorage.data || "[]" 
    let myData=JSON.parse(d1) || []
    myData.push(JSON.stringify({
        Email:event.target.Email.value,
        Phone:event.target.Phone.value,
        otp:event.target.otp.value,
    }))
    localStorage.data=JSON.stringify(myData)
})

console.log()



//let SignUpform=document.querySelector("#SignInData");
// let userData=JSON.parse(localStorage.getItem("userData")) || []

// SignUpform.addEventListener("submit",function(e){
//     e.preventDefault();
//     console.log(SignInData)
//     let data={
//         name:SignUpform.sName.value
//     }
//     console.log(data)
// })


let loginValue=document.getElementById('loginValue').value



// console.log(pages)
// debugger

function displapy_page(id) {
    let pages =document.querySelectorAll('form')
    pages.forEach((page)=>{
        page.classList.remove("active")
    })
    pages[id].classList.add("active")
}

displapy_page(0)



// let mycart=document.querySelector("#mycart");
//     mycart.addEventListener("click", function(){
//         console.log("hey")
        document.querySelector("#container-login").classList.add("active");
    //})

document.querySelector(".close-btn").addEventListener("click", function () {
         document.querySelector("#container-login").classList.remove("active");
     });
     
