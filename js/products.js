const storeData = localStorage.getItem("db")

const display = document.getElementById("productList")


let data = []

if (storeData) {

    data = JSON.parse(storeData)
}

data.forEach(item => {
    const div = document.createElement("div")
    div.className = "productsCard"
    div.innerHTML = `<img src="${item.url}" alt="" class="imageOfproduct">
            <h3 class="nameOfproduct">${item.name}</h3>
            <p class="priceOfproduct">₹${item.price}</p>
            <button class="AddtoCart">Add to cart</button>`
    display.append(div)

    let cartItem =[]

    const addTocart = div.querySelector(".AddtoCart")

    display.addEventListener("click",function(event){
if(event.target.classList.contains("AddtoCart")){
    const cart = event.target.closest(".productsCard")
    cartItem.push(cart)
    console.log(cartItem)
}
        

    }
)


})


