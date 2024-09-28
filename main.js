import './index.css';
import products from "./api/products.json";
import { showProductContainer } from "./homeProductCards";

document.addEventListener('DOMContentLoaded', function() {
    const openModal = document.getElementById('openModal');
    const closeModal1 = document.getElementById('closeModal1');
    const closeModal2 = document.getElementById('closeModal2');
    const modal1 = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');
    const nextToStep2 = document.getElementById('nextToStep2');

    if (openModal) {
        openModal.onclick = function() {
            modal1.style.display = 'flex';
        }
    }

    if (closeModal1) {
        closeModal1.onclick = function() {
            modal1.style.display = 'none';
        }
    }

    if (closeModal2) {
        closeModal2.onclick = function() {
            modal2.style.display = 'none';
        }
    }

    if (nextToStep2) {
        nextToStep2.onclick = function() {
            modal1.style.display = 'none';
            modal2.style.display = 'flex';
        }
    }

    window.onclick = function(event) {
        if (event.target == modal1) {
            modal1.style.display = 'none';
        } else if (event.target == modal2) {
            modal2.style.display = 'none';
        }
    }

    showProductContainer(products);
});