
let allProducts = [
    { id: 1, title: 'Product 1', price: 450, dec: 'description excerpt...  for this product', img: 'img/laptop1.jpg' },
    { id: 2, title: 'Product 2', price: 500, dec: 'description excerpt...  for this product', img: 'img/laptop2.jpg' },
    { id: 3, title: 'Product 3', price: 650, dec: 'description excerpt...  for this product', img: 'img/laptop3.jpg' }
]

let userBasket = [
    // { id: 1, title: 'Product 1', price: 450, },
];

let $ = document
let boxProducts = $.querySelector('.box-products')
let boxCartInfoList = $.querySelector('.box-cart-info-list')
let totalPrice = $.querySelector('.total-price')
let totalItem = $.querySelector('.total-item')
let emptyBtn = $.querySelector('.emptyBtn')




allProducts.forEach(function (product) {

    boxProducts.insertAdjacentHTML("afterbegin", '<div class="box-products-item"><img src="' + product.img + '" class="box-products-item-img"><h5 class="box-products-item-title">' + product.title + '</h5><p class="box-products-item-dec">' + product.dec + '</p><span class="box-products-item-price">$' + product.price + '</span><button class="box-products-item-btn" onclick="addToBasket(' + product.id + ')" ><svg class="box-products-item-btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>Add To Cart</button></div>')


})

function addToBasket(productId) {
    let selectedProduct = allProducts.find(function (product) {
        return product.id === productId
    })
    userBasket.push(selectedProduct)
    generateUserBasket(userBasket)
    calcTotalPrice(userBasket)
    // console.log(userBasket);
    // console.log(selectedProduct.title);
}

function generateUserBasket(userBasketArray) {
    boxCartInfoList.innerHTML = ''
    userBasketArray.forEach(function (product) {
        boxCartInfoList.insertAdjacentHTML('afterbegin', '<div class="box-cart-info-list-content"> <span class="box-cart-info-list-product-title">' + product.title + '</span> <span class="box-cart-info-list-price-title">$' + product.price + '</span> </div>')

    })
}

function calcTotalPrice(userBasketArray) {
    sum = 0;
    userBasketArray.forEach(function (product) {
        sum = sum+ product.price
    })
    totalPrice.innerHTML = '$'+ sum
    totalItem.innerHTML = '×' +userBasket.length
}

emptyBtn.addEventListener('click', function(){
    userBasket = []
    generateUserBasket(userBasket)
    calcTotalPrice(userBasket)
})

