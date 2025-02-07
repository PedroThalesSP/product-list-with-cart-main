let open = document.getElementById('open');
let exit = document.getElementById('exit');
let menu = document.getElementById('side_bar');


// let waffle = document.getElementById('waffle');
// let creme = document.getElementById('creme');
// let macaron = document.getElementById('macaron');
// let tiramisu = document.getElementById('tiramisu');
// let baklava = document.getElementById('baklava');
// let pie = document.getElementById('pie');
// let cake = document.getElementById('cake');
// let brownie = document.getElementById('brownie');
// let panna = document.getElementById('panna');
let preco = 0;

const adicionar = document.querySelectorAll(".add")

// eventos principais

open.addEventListener('click',() => {
    menu.classList.add('abrir')
});


exit.addEventListener('click',() => {
    menu.classList.remove('abrir')
});

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




// funções

// waffle.addEventListener('click',()=>{
//     preco += 6.50;
//     console.log(preco)

// })


// creme.addEventListener('click',()=>{
//     preco += 7.00;
//     console.log(preco)
// })


// macaron.addEventListener('click',()=>{
//     preco += 8.00;
//     console.log(preco)
// })


// tiramisu.addEventListener('click',()=>{
//     preco += 5.50;
//     console.log(preco)
// })


// baklava.addEventListener('click',()=>{
//     preco += 4.00;
//     console.log(preco)
// })


// pie.addEventListener('click',()=>{
//     preco += 5.00;
//     console.log(preco)
// })


// cake.addEventListener('click',()=>{
//     preco += 4.50;
//     console.log(preco)
// })


// brownie.addEventListener('click',()=>{
//     preco += 4.50;
//     console.log(preco)
// })


// panna.addEventListener('click',()=>{
//     preco += 6.50;
//     console.log(preco)
// })