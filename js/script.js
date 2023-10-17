import { adicionarCarrinho } from "./carrinho.js";
import { produtosCatalogo } from "./catalogo.js";

export function renderizarCatalogo() {
    for(const produto of produtosCatalogo){
        const cardProdutos = `
        <div class="produto-card">
        <img src="${produto.imagem}" alt="" class="produto-imagem">
        <p class="produto-text">${produto.nome}</p>
        <p class="produto-text">${produto.descricao}</p>
        <p class="produto-text">${produto.valor}.00</p>
        <button id="adicionar-${produto.id}" class="produto-button"><i class="fa-solid fa-cart-plus"></i> Adicionar ao Carrinho</button>
        </div>`;

        document.querySelector("#container-produtos").innerHTML += cardProdutos;
    }

    for(const produto of produtosCatalogo){
        document.querySelector(`#adicionar-${produto.id}`).addEventListener('click', () =>{
            adicionarCarrinho(produto.id);
        })
    }
}

export function abrirMenuFecharMenu(){
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
}

export function abrirCarrinhoFecharCarrinho(){
    // IDS para o carrinho 
    const idCart = document.querySelector('#cart');
    const exitCart = document.querySelector('#exit-cart');
    const idCartComperContainer = document.querySelector('#container-cart');

    idCart.addEventListener('click', () => {
        idCartComperContainer.classList.remove('hide');
        idCartComperContainer.classList.add('container-cart');
    });

    exitCart.addEventListener('click', () =>{
        idCartComperContainer.classList.remove('container-cart');
        idCartComperContainer.classList.add('hide');
    })
}
