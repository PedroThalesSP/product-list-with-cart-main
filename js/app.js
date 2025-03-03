const adicionar = document.querySelectorAll(".add")

let open = document.getElementById('open');
let exit = document.getElementById('exit');
let menu = document.getElementById('side_bar');
let preco = 0;

// adicionar itens e remover a imagem
let botao = document.querySelector(".add");
let barraEsquerda = document.querySelector("#sumir")
let itemAdicionado = false;

// abrir e fechar o carrihno
open.addEventListener('click',() => {
    menu.classList.add('abrir')
});


exit.addEventListener('click',() => {
    menu.classList.remove('abrir')
});

// evento de escuta do itens e remoção da imagem
botao.addEventListener("click", () =>{
    tabelaDeItens();
    removeImage();

});

// adicionar itens
function tabelaDeItens() {        
    let nomes = [...document.querySelectorAll('.little_name')];
    let precos = [...document.querySelectorAll('.price')];

    
    nomes.forEach((nome,index) => {    
    let nomeItem = nome.textContent;
    let precosItem = precos[index].textContent;
    
    const itemTr = document.createElement('tr');
    const nomeTd = document.createElement('td');
    const precosTd = document.createElement('td');
    
    nomeTd.textContent = (nomeItem);
    precosTd.textContent = (precosItem);
    
    itemTr.appendChild(nomeTd);
    itemTr.appendChild(precosTd);
    
    const itens = document.querySelector('.sacola');
    itens.appendChild(itemTr);

    console.log(nomes,precos);
    

})
}

//remover a imagem
function removeImage(){
    itemAdicionado = true;

    if (itemAdicionado) {
        barraEsquerda.style.display = 'none'
    }
        
    else {
        barraEsquerda.style.display = 'flex';
    }
}




