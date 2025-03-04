const adicionar = document.querySelectorAll(".add")

let open = document.getElementById('open');
let exit = document.getElementById('exit');
let menu = document.getElementById('side_bar');
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

botao.forEach((btn,index,) =>{
btn.addEventListener("click",()=>{

    tabelaDeItens(index);
    removeImage();
    somarItensDoCarrinho() // ver depois
    })
})



// adicionar itens + estilização
function tabelaDeItens(index) {        
    let nomes = [...document.querySelectorAll('.little_name')];
    let precos = [...document.querySelectorAll('.price')];

    let nomeItem = nomes[index].textContent;
    let precosItem = precos[index].textContent;
    
    const itemTr = document.createElement('tr');
    const nomeTd = document.createElement('td');
    const precosTd = document.createElement('td');
    nomeTd.style.border = "1px solid black";
    itemTr.style.border = "1px solid black";
    precosTd.style.border = "1px solid black";
    nomeTd.style.width = "60%"
    precosTd.style.width = "50%"
    itemTr.style.width = "50%"
    nomeTd.style.textAlign = "center"
    precosTd.style.textAlign  = "center"
    itemTr.style.textAlign = "center"

    nomeTd.textContent = (nomeItem);
    precosTd.textContent = (precosItem);
    
    itemTr.appendChild(nomeTd);
    itemTr.appendChild(precosTd);
    
    const itens = document.querySelector('.sacola');
    itens.appendChild(itemTr);
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

// somar produtos do carrinho: teste // ver depois
function somarItensDoCarrinho(nossoResultado){
    let somaPrecos = document.querySelectorAll(".price");
    let preco = 0;


    
    somaPrecos.forEach( (elemento) => {
        preco += parseFloat (elemento.textContent);
        return
    })

    console.log(nossoResultado)


}









