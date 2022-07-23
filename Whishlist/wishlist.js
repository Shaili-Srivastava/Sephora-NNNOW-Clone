let products=JSON.parse(localStorage.getItem("items")) || []

//console.log(products)
append(products)

function append(data){
    let container=document.getElementById("cart")
    container.innerHTML=null

    let amount=0

    data.forEach(function(el){
        let img=document.createElement('img')
        img.src=el.image

        let name=document.createElement('p')
        name.innerText=el.name

        let price=document.createElement('p')
        price.innerText=el.price
        amount+=el.price

        let imgDiv=document.createElement('div')
        let div=document.createElement('div')
        //div.setAttribute("class", "item")
        

        let removeBtn=document.createElement('button')
        removeBtn.setAttribute("class","remove")
        removeBtn.innerText="Remove"
        removeBtn.addEventListener('click',function(){
            products.remove(el)
            localStorage.setItem("items", JSON.stringify(products))
        })

        let move_to_bag=document.createElement('button')
        move_to_bag.setAttribute("class","move_to_bag")
        move_to_bag.innerText="Move to Bag"
        move_to_bag.addEventListener('click',function(){
            //write functionallity to move to bag
        })

        removeBtn.style.background="tranparent";
        removeBtn.style.border="none"

        imgDiv.append(img)
        div.append(name,price,removeBtn)
        container.append(imgDiv,div)
        
    })
}
