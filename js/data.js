let table = []
let products = JSON.parse(localStorage.getItem('products ')) ?
JSON.parse(localStorage.getItem('products ')) : [
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
        id: 232,
        name: "I'm Shy",
        category: "Cosmetics",
        value: 150,
        image: "../Cosmetics/Blush.jpg"
    },
    {
        id: 235,
        name: "In the Shadows",
        category: "Cosmetics",
        value: 500,
        image: "../Cosmetics/Eye Shadow.jfif"
    },{
        id: 237,
        name: "My Lash",
        category: "Cosmetics",
        value: 190,
        image: "../Cosmetics/eyelashes.jfif"
    },{
        id: 233,
        name: "Kit Kat",
        category: "Cosmetics",
        value: 600,
        image: "../Cosmetics/makeup kit.jfif"
    },{
        id: 239,
        name: "Eyelines",
        category: "Cosmetics",
        value: 100,
        image: "../Cosmetics/Mascara.jfif"
    },
    {
        id: 230,
        name: "I Smell Like a Queen",
        category: "Cosmetics",
        value: 470,
        image: "../Cosmetics/phagrance.jpeg"
    },
    {
        id: 229,
        name: "Pink Secret",
        category: "Cosmetics",
        value: 340,
        image: "../Cosmetics/Pink secret.jpg"
    },
    {
        id: 225,
        name: "Soft Skin",
        category: "Cosmetics",
        value: 100,
        image: "../Cosmetics/pure lotion.jpg"
    },
    {
        id: 222,
        name: "Shhhhhh",
        category: "Cosmetics",
        value: 170,
        image: "../Cosmetics/Scandalous.jpg"
    },
    {
        id: 221,
        name: "Stick with me",
        category: "Cosmetics",
        value: 125,
        image: "../Cosmetics/Velvel Matte.jpg"
    },
    {
        id: 50,
        name: "Bombshell Forever",
        category: "Perfumes",
        value: 400,
        image: "../Perfumes/Bombshell Forever.jpeg"
    },
    {
        id: 51,
        name: "Bombshell Intense",
        category: "Perfumes",
        value: 420,
        image: "../Perfumes/Bombshell Intense.jpg"
    },
    {
        id: 52,
        name: "Bombshell Forever",
        category: "Perfumes",
        value: 410,
        image: "../Perfumes/Bombshell Passion.jpg"
    },
    {
        id: 53,
        name: "Love Spell",
        category: "Perfumes",
        value: 320,
        image: "../Perfumes/Love Spell.jfif"
    },
    {
        id: 54,
        name: "Very Sexy",
        category: "Perfumes",
        value: 270,
        image: "../Perfumes/Very Sexy.jpg"
    },
    {
        id: 55,
        name: "Violet Lily",
        category: "Perfumes",
        value: 300,
        image: "../Perfumes/Violet lily.jpg"
    },
    {
        id: 1234,
        name: "Carribean",
        category: "Underwear",
        value: 1200,
        image: "../Underwear/carribean.jpg"
    },
    {
        id: 1235,
        name: "Vickie",
        category: "Underwear",
        value: 1600,
        image: "../Underwear/Elle.jpg"
    },
    {
        id: 1236,
        name: "One Step Closer",
        category: "Underwear",
        value: 2000,
        image: "../Underwear/red velvet.jpg"
    },
    {
        id: 1237,
        name: "Snowfall",
        category: "Underwear",
        value: 1900,
        image: "../Underwear/Snow.jpg"
    },
    {
        id: 1238,
        name: "Two Pieces to Puzzle",
        category: "Underwear",
        value: 2100,
        image: "../Underwear/Two piece snow.jpg"
    },
    {
        id: 1239,
        name: "Twos and Blues",
        category: "Underwear",
        value: 2050,
        image: "../Underwear/Two piece.jpg"
    },
]

function tableContent() {
    let tbody = document.querySelector('tbody');
    Object.keys(products).forEach( (item)=>{
        if(products.length){
            console.log(`${item}: ${products[item]}`);
            tbody.innerHTML +=
            `
                <tr>
                    <td>${products[item].id}</td>
                    <td>${products[item].name}</td>
                    <td>${products[item].category}</td>
                    <td>${products[item].value}</td>
                    <td><button type="button" class="btn btn-danger">Delete</button></td>
                    <td class="clear"><button type="button" class="btn btn-success">Edit</button></td>
                </tr>
            `
        }
    } )
}

tableContent()

let clear = document.querySelector(".clear")

clear.addEventListener('click', (e)=>{
    e.preventDefault()
    console.table(
        JSON.parse(localStorage.getItem('data'))
    )
})

function displayProducts(){
    products.forEach((record)=>{
        wrapper.innerHTML += `
        <div class="card">
            <img src="${record.picture.large}" class="card-img-top" alt="$      {record.name.first}">
            <div class="card-body">
                <h5 class="card-title">${record.name.title} ${record.name.first} ${record.name.last}</h5>
                <p class="card-text">Gender: ${record.gender} and am ${record.dob.age} years old</p>
            </div>
        </div>
        `
    })
}