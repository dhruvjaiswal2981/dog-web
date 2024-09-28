import { getCardProducts } from "./getCardProducts";

export const fetchQuantityFromCartLs = (id, price) => {
    let cartProducts = getCardProducts();
    let existingProduct = cartProducts.find((curProd) => curProd.id === id);

    
    return existingProduct 
        ? { quantity: existingProduct.quantity, price: existingProduct.quantity * price }
        : { quantity: 1, price }; 
};
