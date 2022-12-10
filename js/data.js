let productsList = [
    {
        id: 1,
        name: "Toilet's Secrets",
        category: "Bags",
        value: 900,
        image: "../Bags/hand bag.jpg"
    },
    {
        id: 2,
        name: "Lunch Box Pack",
        category: "Bags",
        value: 2000,
        image: "../Bags/make up bag.jpg"
    },
    {
        id: 3,
        name: "Hand Bag with Cla$$",
        category: "Bags",
        value: 1020,
        image: "../Bags/purse.jpg"
    },
    {
        id: 4,
        name: "With Laces",
        category: "Bags",
        value: 1500,
        image: "../Bags/travel case.jpg"
    },
    {
        id: 5,
        name: "Bags a Dozen",
        category: "Bags",
        value: 1350,
        image: "../Bags/VS Bags.jpg"
    },
    {
        id: 6,
        name: "I'm Shy",
        category: "Cosmetics",
        value: 150,
        image: "../Cosmetics/Blush.jpg"
    },
    {
        id: 7,
        name: "In the Shadows",
        category: "Cosmetics",
        value: 500,
        image: "../Cosmetics/Eye Shadow.jfif"
    },{
        id: 8,
        name: "My Lash",
        category: "Cosmetics",
        value: 190,
        image: "../Cosmetics/eyelashes.jfif"
    },{
        id: 9,
        name: "Kit Kat",
        category: "Cosmetics",
        value: 600,
        image: "../Cosmetics/makeup kit.jfif"
    },{
        id: 10,
        name: "Eyelines",
        category: "Cosmetics",
        value: 100,
        image: "../Cosmetics/Mascara.jfif"
    },
    {
        id: 11,
        name: "I Smell Like a Queen",
        category: "Cosmetics",
        value: 470,
        image: "../Cosmetics/phagrance.jpeg"
    },
    {
        id: 12,
        name: "Pink Secret",
        category: "Cosmetics",
        value: 340,
        image: "../Cosmetics/Pink secret.jpg"
    },
    {
        id: 13,
        name: "Soft Skin",
        category: "Cosmetics",
        value: 100,
        image: "../Cosmetics/pure lotion.jpg"
    },
    {
        id: 14,
        name: "Shhhhhh",
        category: "Cosmetics",
        value: 170,
        image: "../Cosmetics/Scandalous.jpg"
    },
    {
        id: 15,
        name: "Stick with me",
        category: "Cosmetics",
        value: 125,
        image: "../Cosmetics/Velvel Matte.jpg"
    },
    {
        id: 16,
        name: "Bombshell Forever",
        category: "Perfumes",
        value: 400,
        image: "../Perfumes/Bombshell Forever.jpeg"
    },
    {
        id: 17,
        name: "Bombshell Intense",
        category: "Perfumes",
        value: 420,
        image: "../Perfumes/Bombshell Intense.jpg"
    },
    {
        id: 18,
        name: "Bombshell Forever",
        category: "Perfumes",
        value: 410,
        image: "../Perfumes/Bombshell Passion.jpg"
    },
    {
        id: 19,
        name: "Love Spell",
        category: "Perfumes",
        value: 320,
        image: "../Perfumes/Love Spell.jfif"
    },
    {
        id: 20,
        name: "Very Sexy",
        category: "Perfumes",
        value: 270,
        image: "../Perfumes/Very Sexy.jpg"
    },
    {
        id: 21,
        name: "Violet Lily",
        category: "Perfumes",
        value: 300,
        image: "../Perfumes/Violet lily.jpg"
    },
    {
        id: 22,
        name: "Carribean",
        category: "Underwear",
        value: 1200,
        image: "../Underwear/carribean.jpg"
    },
    {
        id: 23,
        name: "Vickie",
        category: "Underwear",
        value: 1600,
        image: "../Underwear/Elle.jpg"
    },
    {
        id: 24,
        name: "One Step Closer",
        category: "Underwear",
        value: 2000,
        image: "../Underwear/red velvet.jpg"
    },
    {
        id: 25,
        name: "Snowfall",
        category: "Underwear",
        value: 1900,
        image: "../Underwear/Snow.jpg"
    },
    {
        id: 26,
        name: "Two Pieces to Puzzle",
        category: "Underwear",
        value: 2100,
        image: "../Underwear/Two piece snow.jpg"
    },
    {
        id: 27,
        name: "Twos and Blues",
        category: "Underwear",
        value: 2050,
        image: "../Underwear/Two piece.jpg"
    }
]

localStorage.setItem("theProducts", JSON.stringify(productsList))
let products = JSON.parse(localStorage.getItem("theProducts"))

function tableContent() {
    let tbody = document.querySelector('tbody');
    products.forEach( (item)=>{
            tbody.innerHTML +=
            `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.category}</td>
                    <td>${item.value}</td>
                    <td><button type="button" id="${item.id}" class="clear btn btn-danger">Delete</button></td>
                    <td><button type="button" class="edit btn btn-success">Edit</button></td>
                </tr>
            `
        }
    )
}

tableContent()

let clear = document.querySelectorAll(".clear")
clear.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        let no1 = (btn.id)
        dlt(no1)
    })
})

function dlt(no2) {
    products.splice((no2-1),1)
    for(i = 0; i < products.length; i++){
        products[i].id = i + 1
    }
    localStorage.setItem("theProducts", JSON.stringify(products))
}

let addStuff = document.querySelector('#submit')

addStuff.addEventListener('click', (e)=>{
    e.preventDefault()
    let category = document.querySelector('#category').value
    let url = document.querySelector('#url')
    let name = document.querySelector('#productName').value
    let value = document.querySelector('#value').value

    products.push({
        id: products.length +1,
        name ,
        url,
        category ,
        value
    })
    localStorage.setItem("theProducts", JSON.stringify(products))
})