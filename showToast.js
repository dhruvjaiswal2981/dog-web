export function showToast(operation , id){
    const toast = document.createElement("div");
    toast.classList.add("toast");

    if (operation === "add"){
        toast.textContent = `Product Added Your Cart`

    }
    else {
        toast.textContent = `Product Delete Your Cart`
    }

    document.body.appendChild(toast)

    setTimeout(() => {
        toast.remove()
    } , 2000);
}