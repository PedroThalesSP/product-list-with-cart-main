const adicionar = document.querySelectorAll(".add")

let open = document.getElementById('open');
let exit = document.getElementById('exit');
let menu = document.getElementById('side_bar');
let preco = 0;

// teste
let botao = document.querySelector(".add");
let barraEsquerda = document.querySelector("#sumir")

// Essa função tem como objtivo abrir e fechar a aba

open.addEventListener('click',() => {
    menu.classList.add('abrir')
});


exit.addEventListener('click',() => {
    menu.classList.remove('abrir')
});


// Essa função tem como finalidade adicionar os itens no carrinho
// resolver o problema de estar pegando apenas um item

adicionar.forEach((item) => {
item.addEventListener("click", () => {
        let nome = document.querySelector('.little_name');
        let precos = document.querySelector('.price');
        let nomeItem = nome.textContent;
        let precosItem = precos.textContent;

        const itemTr = document.createElement('tr');
        const nomeTd = document.createElement('td');
        const precosTd = document.createElement('td');

        nomeTd.textContent = (nomeItem);
        precosTd.textContent = (precosItem);

        itemTr.appendChild(nomeTd);
        itemTr.appendChild(precosTd);

        const itens = document.querySelector('.sacola');
        itens.appendChild(itemTr);

    })
})


// Essa função tem a finalidade de fazer a imagem da esqueda sumir ao add um item no carrinho.
botao.addEventListener('click', function (){
    if (barraEsquerda.style.display === 'flex') {
        barraEsquerda.style.display = 'none';
    }
    
    else {
        barraEsquerda.style.display = 'flex'    ;
    }
})