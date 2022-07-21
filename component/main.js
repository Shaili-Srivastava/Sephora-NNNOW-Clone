let displyFrameWork = () => {
    return `<img src="https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/MakeupDesktop.jpg" alt="">
        <div id="content">
            <div id="sidebar"><h3>SHOP</h3>
            </div>
            <div id="productsList">
                <div class="category_list">
                    <div class="list_heading">
                        <div class="heading_name">Just Arrived</div><b>|</b>
                        <div class="heading_desc">Description</div>
                    </div>
                    <h3 style="text-align:right;"><a href="">VIEW ALL</a></h3>
                    <div id="slider">
                        <img class="leftarrow" src="https://th.bing.com/th/id/R.3e687549bc2d0a48a973cbca08447ec4?rik=YGXkIKdpQ%2bwM%2fg&riu=http%3a%2f%2fstevekeane.com%2fimages%2fback.png&ehk=XG6aivNt56vGFX4VwDllcuL7cmnigmzVhg6Dy0bDGHo%3d&risl=&pid=ImgRaw&r=0" alt="">
                        <img class="rightarrow" src="https://stevekeane.com/images/forward.png" alt="">
                        <div id="list_container_1">
                        </div>
                    </div>
                </div>
                <div class="category_list">
                    <div class="list_heading">
                        <div class="heading_name">Best Seller</div><b>|</b>
                        <div class="heading_desc">Description</div>
                    </div>
                    <h3 style="text-align:right;"><a href="">VIEW ALL</a></h3>
                   <div id="slider">
                        <img class="leftarrow" src="https://th.bing.com/th/id/R.3e687549bc2d0a48a973cbca08447ec4?rik=YGXkIKdpQ%2bwM%2fg&riu=http%3a%2f%2fstevekeane.com%2fimages%2fback.png&ehk=XG6aivNt56vGFX4VwDllcuL7cmnigmzVhg6Dy0bDGHo%3d&risl=&pid=ImgRaw&r=0" alt="">
                        <img class="rightarrow" src="https://stevekeane.com/images/forward.png" alt="">
                        <div id="list_container_2">
                        </div>
                    </div>
                </div>
                <div class="category_list">
                    <div class="list_heading">
                        <div class="heading_name">Lip Stick</div><b>|</b>
                        <div class="heading_desc">Description</div>
                    </div>
                    <h3 style="text-align:right;"><a href="">VIEW ALL </a></h3>
                    <div id="slider">
                        <img class="leftarrow" src="https://th.bing.com/th/id/R.3e687549bc2d0a48a973cbca08447ec4?rik=YGXkIKdpQ%2bwM%2fg&riu=http%3a%2f%2fstevekeane.com%2fimages%2fback.png&ehk=XG6aivNt56vGFX4VwDllcuL7cmnigmzVhg6Dy0bDGHo%3d&risl=&pid=ImgRaw&r=0" alt="">
                        <img class="rightarrow" src="https://stevekeane.com/images/forward.png" alt="">
                        <div id="list_container_3">
                        </div>
                    </div>
                </div>
                <div class="category_list">
                    <div class="list_heading">
                        <div class="heading_name">Eye Slasher</div><b>|</b>
                        <div class="heading_desc">Description</div>
                    </div>
                    <h3 style="text-align:right;"><a href="">VIEW ALL</a></h3>
                    <div id="slider">
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
    // container.innerHTML = "";

    data.forEach(({ image, name, description, price }) => {
        let div = document.createElement("div");
        div.setAttribute("class", "card");

        let img = document.createElement("img");
        img.src = image;

        let hiddenDiv = document.createElement("div");
        hiddenDiv.setAttribute("class", "hiddenDiv");

        let addTobag = document.createElement("div");

        let addToBagImg = document.createElement("img");
        addToBagImg.src = "https://i.ibb.co/z73m81n/bagItem.png";

        let addToBagP = document.createElement("p");
        addToBagP.innerText = "Shop Now";

        addTobag.append(addToBagImg, addToBagP);

        let fav = document.createElement("div");

        let favImg = document.createElement("img");
        favImg.src = "https://i.ibb.co/RjJmWNz/heart-Item.png";

        let favP = document.createElement("p");
        favP.innerText = "Favourite";

        fav.append(favImg, favP);

        hiddenDiv.append(addTobag, fav);

        let pname = document.createElement("h4");
        pname.innerText = name;

        let pdesc = document.createElement("p");
        pdesc.innerText = description;

        let pprice = document.createElement("h4");
        pprice.innerText = `Rs. ${price};`

        div.append(img, hiddenDiv, pname, pdesc, pprice);
        container.append(div);
    })
}
export { displyFrameWork, display };