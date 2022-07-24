
let cartdata = JSON.parse(localStorage.getItem("sephoracart")) || [];
let bagcount = document.querySelector("#bagcount");
if (cartdata.length == null) {
    bagcount.innerText = null;
}
else {
    // bagcount.innerText=cartdata.length;
}


let mycart = document.querySelector("#mycart");
mycart.addEventListener("click", function () {
    if (bagcount == 0) {
        document.querySelector(".cartpopup1").classList.add("active");
    }
    else {
        document.querySelector(".cartpopup2").classList.add("active");
    }
})
document.querySelector(".close_button1").addEventListener("click", function () {
    document.querySelector(".cartpopup1").classList.remove("active");
});
document.querySelector(".close_button2").addEventListener("click", function () {
    document.querySelector(".cartpopup2").classList.remove("active");
});