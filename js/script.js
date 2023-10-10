const produtosCatalogo = [
    {
        id: 1,
        imagem: '../img/Iphones.jpg',
        nome: 'Produto 1',
        descricao: 'Descrição do Produto 1',
        valor: 19.99,
        tipo: 'celular',
        marca: 'Samsung'
    },
    {
        id: 2,
        imagem: '../img/Iphones.jpg',
        nome: 'Produto 2',
        descricao: 'Descrição do Produto 2',
        valor: 29.99,
        tipo: 'celular',
        marca: 'Motorola'
    },
    {
        id: 3,
        imagem: '../img/Iphones.jpg',
        nome: 'Produto 2',
        descricao: 'Descrição do Produto 3',
        valor: 29.99,
        tipo: 'celular',
        marca: 'LG'
    }
];

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