let displyFrameWork = () => {
    return `<img id="mainPageSrc" src="https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/MakeupDesktop.jpg" alt="">
        <div id="content">
            <div id="sidebar">
            </div>
            <div id="productsList">
                <div class="category_list">
                    <div class="list_heading">
                        <img id="heading1" src="" alt="">
                    </div>
                    <h3 style="text-align:right;"><a href="">VIEW ALL</a></h3>
                    <div class="slider">
                        <img class="leftarrow" src="https://th.bing.com/th/id/R.3e687549bc2d0a48a973cbca08447ec4?rik=YGXkIKdpQ%2bwM%2fg&riu=http%3a%2f%2fstevekeane.com%2fimages%2fback.png&ehk=XG6aivNt56vGFX4VwDllcuL7cmnigmzVhg6Dy0bDGHo%3d&risl=&pid=ImgRaw&r=0" alt="">
                        <img class="rightarrow" src="https://stevekeane.com/images/forward.png" alt="">
                        <div id="list_container_1">
                        </div>
                    </div>
                </div>
                <div class="category_list">
                    <div class="list_heading">
                        <img id="heading2" src="" alt="">
                    </div>
                    <h3 style="text-align:right;"><a href="">VIEW ALL</a></h3>
                   <div class="slider">
                        <img class="leftarrow" src="https://th.bing.com/th/id/R.3e687549bc2d0a48a973cbca08447ec4?rik=YGXkIKdpQ%2bwM%2fg&riu=http%3a%2f%2fstevekeane.com%2fimages%2fback.png&ehk=XG6aivNt56vGFX4VwDllcuL7cmnigmzVhg6Dy0bDGHo%3d&risl=&pid=ImgRaw&r=0" alt="">
                        <img class="rightarrow" src="https://stevekeane.com/images/forward.png" alt="">
                        <div id="list_container_2">
                        </div>
                    </div>
                </div>
                <div class="category_list">
                    <div class="list_heading">
                       <img id="heading3" src="" alt="">
                    </div>
                    <h3 style="text-align:right;"><a href="">VIEW ALL </a></h3>
                    <div class="slider">
                        <img class="leftarrow" src="https://th.bing.com/th/id/R.3e687549bc2d0a48a973cbca08447ec4?rik=YGXkIKdpQ%2bwM%2fg&riu=http%3a%2f%2fstevekeane.com%2fimages%2fback.png&ehk=XG6aivNt56vGFX4VwDllcuL7cmnigmzVhg6Dy0bDGHo%3d&risl=&pid=ImgRaw&r=0" alt="">
                        <img class="rightarrow" src="https://stevekeane.com/images/forward.png" alt="">
                        <div id="list_container_3">
                        </div>
                    </div>
                </div>
                <div class="category_list">
                    <div class="list_heading">
                       <img id="heading4" src="" alt="">
                    </div>
                    <h3 style="text-align:right;"><a href="">VIEW ALL</a></h3>
                    <div class="slider">
                        <img class="leftarrow" src="https://th.bing.com/th/id/R.3e687549bc2d0a48a973cbca08447ec4?rik=YGXkIKdpQ%2bwM%2fg&riu=http%3a%2f%2fstevekeane.com%2fimages%2fback.png&ehk=XG6aivNt56vGFX4VwDllcuL7cmnigmzVhg6Dy0bDGHo%3d&risl=&pid=ImgRaw&r=0" alt="">
                        <img class="rightarrow" src="https://stevekeane.com/images/forward.png" alt="">
                        <div id="list_container_4">
                        </div>
                    </div>
                </div>
            </div>
        </div>`
}

let display = (data, container) => {
    console.log(container);
    container.innerHTML = "";

    data.forEach((el) => {
        let div = document.createElement("div");
        div.setAttribute("class", "card");

        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "imgDIV")
        let img = document.createElement("img");
        img.src = el.Image_1;

        img.addEventListener("click", () => {
            let data = [];
            data.push(el);
            localStorage.setItem("sephoraData", JSON.stringify(data));
            window.location.href = "productDetail.html"
        })
        let hiddenDiv = document.createElement("div");
        hiddenDiv.setAttribute("class", "hiddenDiv");

        let addTobag = document.createElement("div");

        let addToBagImg = document.createElement("img");
        addToBagImg.src = "https://i.ibb.co/z73m81n/bagItem.png";
        addToBagImg.addEventListener("click", () => {
            localStorage.setItem("bagdata", JSON.stringify(data));
            alert("item added to bag");
        })

        let addToBagP = document.createElement("p");
        addToBagP.innerText = "Shop Now";

        addTobag.append(addToBagImg, addToBagP);

        let fav = document.createElement("div");

        let favImg = document.createElement("img");
        favImg.src = "https://i.ibb.co/RjJmWNz/heart-Item.png";
        favImg.addEventListener("click", () => {
            localStorage.setItem("myfavdata", JSON.stringify(data));
            alert("item added to Favourites");
        })

        let favP = document.createElement("p");
        favP.innerText = "Favourite";

        fav.append(favImg, favP);

        hiddenDiv.append(addTobag, fav);

        imgDiv.append(img, hiddenDiv);

        let pname = document.createElement("h4");
        pname.innerText = el.Name;

        let pdesc = document.createElement("p");
        pdesc.innerText = el.Description;

        let pprice = document.createElement("h4");
        pprice.innerText = `Rs. ${el.Price}`;

        div.append(imgDiv, pname, pdesc, pprice);
        container.append(div);
    })
}
export { displyFrameWork, display };

