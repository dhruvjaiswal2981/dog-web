import { getCardProducts } from "./getCardProducts";
import { updateCartValue } from "./updateCartValue";
import { showToast } from "./showToast";

export const removeProdFromCart = (id) => {
    let cartProducts = getCardProducts();
    
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id); 

    localStorage.setItem("cartProductsLS", JSON.stringify(cartProducts));

    let removeDiv = document.querySelector(`.card${id}`); 
    if (removeDiv) {
        removeDiv.remove();

        showToast("delete" , id)
    }

    updateCartValue(cartProducts);
};
