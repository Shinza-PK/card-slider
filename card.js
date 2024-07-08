let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let ListProductHTML = document.querySelector('.ListProduct');

let ListProducts =[];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

const addDataToHTML = () => {
    ListProductHTML.innerHTML = '';
    if(ListProducts.length > 0){
        ListProducts.forEach(product => {
            let newProduct =document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `
            <img src="${product.image}">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">
                    Add To Cart
                </button>
                `;
                ListProductHTML.appendChild(newProduct);
        })
    }
}
// ListProductHTML.addEventListener('click', (Event) => {
//     let positionClick = Event.target;
//     if(positionClick.classList.contains('addCart')){
//         let product_id =positionClick.parentElement.dataset.id;
//         addToCart(product_id) => {

//         }
//     }
// })

const InItApp = () => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        ListProducts = data;
        // console.log(ListProducts)
        addDataToHTML();
    })
}
InItApp();