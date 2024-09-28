import { homeQuantityToggle } from './homeQuantityToggle';
import { addToCart} from "./addToCart"
const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
    if (!products || products.length === 0) {
        console.error("No products found.");
        return false;
    }

    products.forEach((curEle) => {
        const { id, name, price, actualPrice, image, description, stocks, category } = curEle;

        
        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector("#cardValue").setAttribute("id" , `card${id}`);

        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".product-image").src = image;
        productClone.querySelector(".product-image").alt = name;
        productClone.querySelector(".produnct-description").textContent = description;
        productClone.querySelector(".produnct-price").textContent = `₹ ${price} /-`;
        productClone.querySelector(".produnctActualPrice").textContent = `₹ ${actualPrice * 2}`;
        productClone.querySelector(".produnctStock").textContent = stocks;

        
        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            homeQuantityToggle(event, id, stocks);
        });

        productClone.querySelector(".add-to-cart-button").addEventListener("click" , (event) => {
            addToCart(event , id , stocks)
        })

       
        productContainer.append(productClone);
    });
};
