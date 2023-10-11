import { produtosCatalogo } from "./catalogo.js";

function renderizarCatalogo(){
    for(const produto of produtosCatalogo){
        const cardProdutos = `
        <div class="produto-card">
        <img src="${produto.imagem}" alt="" class="produto-imagem">
        <p class="produto-text">${produto.nome}</p>
        <p class="produto-text">${produto.descricao}</p>
        <p class="produto-text">${produto.valor}.00</p>
        <button id="adicionar-${produto.id}" class="produto-button"><i class="fa-solid fa-cart-plus"></i> Adicionar ao Carrinho</button>
        </div>`

        document.querySelector("#container-produtos").innerHTML += cardProdutos;
}
}

renderizarCatalogo();

// IDS para o menu
const menuToggle = document.querySelector('#menu-toggle');
const exitMenu = document.querySelector('#exit-menu');
const navMenu = document.querySelector('#nav-menu');

menuToggle.addEventListener('click', () =>{
    navMenu.classList.remove('hide');
    navMenu.classList.add('menu-bar');
})

exitMenu.addEventListener('click', () =>{
    navMenu.classList.remove('menu-bar');
    navMenu.classList.add('hide');
})

const idCart = document.querySelector('#cart');
const idCartComperContainer = document.querySelector('#cart-comper');

idCart.addEventListener('click', () => {
    idCartComperContainer.style.display = 'block'; // Mostrar o contêiner do carrinho
});
