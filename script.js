const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cartCounter = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");


//Abrir modal com carrinho

cartBtn.addEventListener("click", function(){
    cartModal.style.display = "flex"
});

//Clicar em qualquer parte fora do carrinho para fechar!

cartModal.addEventListener("click", function(event) {
    if(event.target === cartModal) {
        cartModal.style.display = "none"
    }
})

//Fechar carrinho clicando no botão "Fechar"

closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})