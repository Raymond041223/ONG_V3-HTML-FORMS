

const sliderContainer = document.querySelector('.slider-container');
const sliders = document.querySelectorAll('.slider');

let slideIndex = 0;
const totalSlides = sliders.length;

function moveSlides() {
    sliders.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    moveSlides();
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    moveSlides();
}


setInterval(nextSlide, 3000);



let cartItems = {};

function addToCart(item, price) {
    const quantity = parseInt(document.getElementById(`quantity${item.replace(/\s+/g, '')}`).value);
    if (quantity > 0) {
        if (cartItems[item]) {
            cartItems[item].quantity += quantity;
        } else {
            cartItems[item] = {
                quantity: quantity,
                price: price
            };
        }
        console.log('Item added to cart:', item, 'Quantity:', quantity);
        updateCartList(); 
    }
}

function clearCart() {
    cartItems = {};
    updateCartList(); 
    console.log('Cart cleared.');
}

function updateCartList() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = ''; 
    let total = 0;
    for (const item in cartItems) {
        const { quantity, price } = cartItems[item];
        const subtotal = quantity * price;
        total += subtotal;
        const listItem = document.createElement('li');
        listItem.textContent = `${item} - Quantity: ${quantity} - Subtotal: ₱${subtotal.toFixed(1)}`;
        cartList.appendChild(listItem);
    }
    document.getElementById('totalAmount').textContent = 'Total Amount: ₱' + total.toFixed(1);
}

function checkout() {
    let total = 0;
    for (const item in cartItems) {
        total += cartItems[item].quantity * cartItems[item].price;
    }
    console.log('Checkout:', cartItems, 'Total:', total);
    
}



