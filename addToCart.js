import { getCardProducts } from "./getCardProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const addToCart = (event, id, stocks) => {
    
    
    let arrLocalStorageProduct = getCardProducts();
    
    
    const currentProductELe = document.querySelector(`#card${id}`);
    
    
    let quantity = currentProductELe.querySelector(".productQuantity").innerText;
    let price = currentProductELe.querySelector(".produnct-price").innerText;

    
    price = parseFloat(price.replace("₹", "").trim());

   
    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id === id);

    
    if (existingProd) {
        existingProd.quantity = Number(existingProd.quantity) + Number(quantity);
        existingProd.price = parseFloat(price * existingProd.quantity);

        let updatedCart = arrLocalStorageProduct.map((curProd) => {
            return (curProd.id === id) ? existingProd : curProd;
        });

        localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));
        
        showToast("add" , id)

        updateCartValue(updatedCart);

        return;
    }

    
    let newProduct = { id, quantity: Number(quantity), price: parseFloat(price * quantity) };
    arrLocalStorageProduct.push(newProduct);

    
    localStorage.setItem("cartProductsLS", JSON.stringify(arrLocalStorageProduct));

    
    updateCartValue(arrLocalStorageProduct);
};
