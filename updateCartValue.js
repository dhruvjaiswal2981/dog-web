export const getCartProducts = () => {
    const cartProducts = localStorage.getItem("cartProductsLS");
    
    if (!cartProducts) {
        return [];
    }

    return JSON.parse(cartProducts);
};


const cartValue = document.querySelector("#cartItem");

export const updateCartValue = (cartProducts) => {
    if (cartProducts && cartProducts.length > 0) {
        cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`;
    } else {
        cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> 0 </i>`;
    }
};


document.addEventListener("DOMContentLoaded", () => {
    const cartProducts = getCartProducts();
    updateCartValue(cartProducts);
    
});
