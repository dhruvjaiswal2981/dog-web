export const homeQuantityToggle = (event, id, stocks) => {
    
    const currentCardElement = document.querySelector(`#card${id}`);
    
    
    if (!currentCardElement) {
        console.error(`Product card with id ${id} not found.`);
        return;
    }
    
    
    const productQuantity = currentCardElement.querySelector(".productQuantity");

    
    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if (event.target.className === "cartIncrement") {
        if (quantity < stocks) {
            quantity += 1
        } else if (quantity === stocks) {
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

    productQuantity.innerText = quantity
    productQuantity.setAttribute("data-quantity" , quantity.toString())
    return quantity
};
