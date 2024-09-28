import { updateCartProductTotal } from "./updateCartProductTotal";
import { getCartProducts } from "./updateCartValue";

export const incrementDecrement = (event , id , stocks , price) => {
    const currentCardElement = document.querySelector(`#card${id}`)
    const productQuantity = currentCardElement.querySelector(".productQuantity");
    const productPrice = currentCardElement.querySelector(".productPrice");

    let quantity = 1;
    let localStoragePrice = 0;

    let loclCartProducts = getCartProducts();

    let existingProd = loclCartProducts.find((curProd) => curProd.id === id);
    
    if (existingProd){
        quantity = existingProd.quantity
        localStoragePrice = existingProd.price;
    }
    else{
        localStoragePrice = price;
        price = price;
    }

    if (event.target.className === "cartIncrement") {
        if (quantity < stocks) {
            quantity += 1
        } else if (quantity === stocks) {
            localStoragePrice = price * stocks
            alert('Cannot exceed available stock');
        } 
    }

    if (event.target.className === 'cartDecrement') {
        if (quantity > 1) {
            quantity -= 1;
        } 
        else{
            alert('Cannot go below 1');
        }
    }

    localStoragePrice = price * quantity

    localStoragePrice = Number(localStoragePrice.toFixed(2));


    let updatedCart = {id , quantity , price: localStoragePrice};

    updatedCart = loclCartProducts.map((curProd) => {
        return (curProd.id === id) ? updatedCart : curProd;
    });

    localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));
    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice

    updateCartProductTotal()
};

