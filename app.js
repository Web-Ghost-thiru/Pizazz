let openShopping = document.querySelector('.fa-cart-shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Chicken Havana Pizza',
        image: 'image1.jpg',
        price: 439
    },
    {
        id: 2,
        name: 'Peri Peri Chicken Pizza',
        image: 'image2.jpg',
        price: 469
    },
    {
        id: 3,
        name: 'Fire in the Hole Pizza',
        image: 'image3.jpg',
        price: 349
    },
    {
        id: 4,
        name: 'Three Cheese Mushroom',
        image: 'image4.jpg',
        price: 299
    },
    {
        id: 5,
        name: 'Paneer Tikka Pizza',
        image: 'image5.jpg',
        price: 269
    },
    {
        id: 6,
        name: 'Herby Italiano Pizza',
        image: 'image6.jpg',
        price: 239
    },
    {
        id: 7,
        name: 'Exotic Naples Pizza',
        image: 'image13.jpg',
        price: 199
    },
    {
        id: 8,
        name: '7up',
        image: 'image10.jpg',
        price: 99
    }
    ,
    {
        id: 9,
        name: 'Pepsi',
        image: 'image11.jpg',
        price: 99
    },
    {
        id: 10,
        name: 'Coke',
        image: 'image12.jpg',
        price: 99
    }
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">₹ ${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})" class="addbtn" >-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})" class="addbtn">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = `₹Total Amount: ${totalPrice}`.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCart();
}