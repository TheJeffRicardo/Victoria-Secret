let checkProduct = [];
let showAll = document.querySelectorAll("#btnradio1");
let bag = document.querySelectorAll("#btnradio2");
let cosmetic = document.querySelectorAll("#btnradio3");
let perfume = document.querySelectorAll("#btnradio4");
let underwear = document.querySelectorAll("#btnradio5");

let products = JSON.parse(localStorage.getItem("theProducts"));

localStorage.setItem("addProducts", JSON.stringify(checkProduct));

function displayProducts() {
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
  console.log(checkProduct)
  localStorage.setItem("addProducts", JSON.stringify(checkProduct))
}

bag.addEventListener("click", (e) => {
  e.preventDefault
  products = products.filter((item) => {
    return item.category === "Bags";
  });
  localStorage.setItem("theProducts", JSON.stringify(products));
  displayProducts();
  document.location.reload();
});

cosmetic.addEventListener("click", (e) => {
  e.preventDefault;
  products = products.filter((item) => {
    return item.category === "Cosmetics";
  });
  localStorage.setItem("theProducts", JSON.stringify(products));
  displayProducts();
  document.location.reload();
});

perfume.addEventListener("click", (e) => {
  e.preventDefault;
  products = products.filter((item) => {
    return item.category === "Perfumes";
  });
  localStorage.setItem("theProducts", JSON.stringify(products));
  displayProducts();
  document.location.reload();
});

underwear.addEventListener("click", (e) => {
  e.preventDefault;
  products = products.filter((item) => {
    return item.category === "Underwear";
  });
  localStorage.setItem("theProducts", JSON.stringify(products));
  displayProducts();
  document.location.reload();
});
