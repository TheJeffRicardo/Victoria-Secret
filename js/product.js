let checkProduct = [];
let showAll = document.querySelector("#btnradio1");
let bag = document.querySelector("#btnradio2");
let cosmetic = document.querySelector("#btnradio3");
let perfume = document.querySelector("#btnradio4");
let underwear = document.querySelector("#btnradio5");

let products = JSON.parse(localStorage.getItem("theProducts"));

localStorage.setItem("addProducts", JSON.stringify(checkProduct));

function displayProducts() {
  document.querySelector(".row").innerHTML = "";
  products.forEach((item) => {
    document.querySelector(".row").innerHTML += `<div class="col-3 p-5">
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
        `;
  });
}

displayProducts();

let checkList = document.querySelectorAll(".push");

checkList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let no1 = btn.id - 1;
    push(no1)
  })})

function push(no2) {
  checkProduct.push(products[no2])
  localStorage.setItem("addProducts", JSON.stringify(checkProduct))
}

showAll.addEventListener('click', ()=>{
  displayProducts();
})
// bag.addEventListener("click", (e) => {
//   e.preventDefault
//   products = products.filter((item) => {
//     return item.category === "Bags";
//   });
//   // localStorage.setItem("theProducts", JSON.stringify(products));
//   displayProducts();
//   document.location.reload();
// });

// cosmetic.addEventListener("click", (e) => {
//   e.preventDefault;
//   products = products.filter((item) => {
//     return item.category === "Cosmetics";
//   });
//   localStorage.setItem("theProducts", JSON.stringify(products));
//   displayProducts();
//   document.location.reload();
// });

// perfume.addEventListener("click", (e) => {
//   e.preventDefault;
//   products = products.filter((item) => {
//     return item.category === "Perfumes";
//   });
//   localStorage.setItem("theProducts", JSON.stringify(products));
//   displayProducts();
//   document.location.reload();
// });

// underwear.addEventListener("click", (e) => {
//   e.preventDefault;
//   products = products.filter((item) => {
//     return item.category === "Underwear";
//   });
//   localStorage.setItem("theProducts", JSON.stringify(products));
//   displayProducts();
//   document.location.reload();
// });

function filteredData(arg) {
  let currentData = products.filter((item) => {
    return item.category.toLowerCase() === arg.toLowerCase();
  });
  document.querySelector(".row").innerHTML = "";
  currentData.forEach((data)=>{
    document.querySelector(".row").innerHTML += `<div class="col-3 p-5">
            <div class="card">
            <img src="${data.image}" class="card-img-top" alt="${data.name}">
            <div class="card-body">
                <h4 class="card-title">Name: ${data.name}</h5></br>
                <h5 class="card-title">Category: ${data.category}</h6>
                <p class="card-text">Value: R${data.value}</p>
                <td><button type="button" id="${data.id}" class="push btn btn-success">Add to Checkout</button></td>
            </div>
            </div>
        </div>
        `;

  })
}