import { produtosCatalogo } from "./catalogo.js";

export function adicionarCarrinho(idProduto) {

    const produto = produtosCatalogo.find(p => p.id === idProduto); // Ache o produto p tal que o produto p tenha o id igual o idProduto

    const containerCart = document.querySelector('#cart-comper');

    const divContainer = document.createElement('div');
    divContainer.classList.add('container-carrinho');

    const exitSpan = document.createElement('span');
    exitSpan.classList.add('exit-produto');
    const exitI = document.createElement('i');
    exitI.classList.add('fa-solid', 'fa-x');


    const imgProduto = document.createElement('img');
    imgProduto.classList.add('img-produto-carrinho');
    imgProduto.src = produto.imagem; // Defina a imagem do produto

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('info-carrinho');

    const nomeProduto = document.createElement('p');
    nomeProduto.classList.add('nome-produto-carrinho');
    nomeProduto.textContent = produto.nome; // Defina o nome do produto

    const descricaoProduto = document.createElement('p');
    descricaoProduto.classList.add('desc-produto-carrinho');
    descricaoProduto.textContent = produto.descricao; // Defina a descrição do produto

    const valorProduto = document.createElement('p');
    valorProduto.classList.add('valor-produto-carrinho');
    valorProduto.textContent = `R$ ${produto.valor.toFixed(2)}`; // Defina o valor do produto

    exitSpan.append(exitI);
    infoContainer.append(nomeProduto, descricaoProduto, valorProduto, exitSpan);
    divContainer.append(imgProduto, infoContainer);

    containerCart.append(divContainer);
}
