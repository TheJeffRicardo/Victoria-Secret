let checkout = JSON.parse(localStorage.getItem("addProducts"))

function displayCheckProducts(){
    checkout.forEach((item)=>{
        document.querySelector('.adds').innerHTML += 
        `<div class="col-3 p-5">
            <div class="card">
            <img src="${item.image}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
                <h4 class="card-title">Name: ${item.name}</h5></br>
                <h5 class="card-title">Category: ${item.category}</h6>
                <p class="card-text">Value: R${item.value}</p>
                <td><button type="button" id="${item.id}" class="push btn btn-success">Add to Checkout</button></td>
            </div>
            </div>
        </div>
        `
    })
}

displayCheckProducts()