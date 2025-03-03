const adicionar = document.querySelectorAll(".add")

let open = document.getElementById('open');
let exit = document.getElementById('exit');
let menu = document.getElementById('side_bar');
let preco = 0;

// adicionar itens e remover a imagem
let botao = document.querySelectorAll(".add");
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

botao.forEach((btn,index) =>{
btn.addEventListener("click",()=>{

    tabelaDeItens(index);
    removeImage();
    })
})



// adicionar itens
function tabelaDeItens(index) {        
    let nomes = [...document.querySelectorAll('.little_name')];
    let precos = [...document.querySelectorAll('.price')];

    let nomeItem = nomes[index].textContent;
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

// retornou todos os botões nodeList e com o forEach foi percorrido todos eles, pois o lister escuta apenas um evento por vez.
console.log(botao);







