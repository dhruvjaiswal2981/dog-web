import { getCardProducts } from "./getCardProducts"

export const updateCartProductTotal = () => {

    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal")

    let loclCartProducts = getCardProducts()
    let initialValue = 0

    let totalProductPrice = loclCartProducts.reduce((accum , curElem ) => {
        let productPrice = parseInt(curElem.price) || 0
        return accum + productPrice
    } , initialValue);

    productSubTotal.textContent = `₹ ${totalProductPrice}`;
    productFinalTotal.textContent = `₹ ${totalProductPrice + 50}`
}