import products from "./api/products.json";
import { getCardProducts } from "./getCardProducts";
import { fetchQuantityFromCartLs } from "./fetchQuantityFromCartLs";
import { removeProdFromCart } from "./removeProdFromCart";
import { incrementDecrement } from "./incrementDecrement";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCardProducts();

let filterProducts = products.filter((curProd) => {
    return cartProducts.some((curElem) => curElem.id === curProd.id);
});

const cartElement = document.querySelector(".productCartContainer");
const templateContainer = document.querySelector("#productCardTemplate");

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        const { category, id, image, name, stocks, price } = curProd;

        let productClone = document.importNode(templateContainer.content, true);

        const lsActualData = fetchQuantityFromCartLs(id, price);

        productClone.querySelector(".cards").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productPrice").textContent = `₹ ${price}`; 

        productClone.querySelector(".productQuantity").textContent = lsActualData.quantity;
        
        productClone.querySelector(".productPrice").textContent = `₹ ${lsActualData.price}`; 

        productClone.querySelector(".stockElement").addEventListener("click" , (event) => {
            incrementDecrement(event , id , stocks , price);
        });

        
        productClone.querySelector(".remove-to-cart-button").addEventListener("click", () => removeProdFromCart(id));

        cartElement.append(productClone);
    });
};

showCartProduct();

updateCartProductTotal();
