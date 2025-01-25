let open = document.getElementById('open');
let exit = document.getElementById('exit')
let menu = document.getElementById('side_bar');
let waffle = document.getElementById('waffle')
let creme = document.getElementById('creme')
let macaron = document.getElementById('macaron')
let tiramisu = document.getElementById('tiramisu')
let baklava = document.getElementById('baklava')
let pie = document.getElementById('pie')
let cake = document.getElementById('cake')
let brownie = document.getElementById('brownie')
let panna = document.getElementById('panna')
let preco = 0;

waffle.addEventListener('click',()=>{
    preco += 6.50;
    console.log(preco)

})


creme.addEventListener('click',()=>{
    preco += 7.00;
    console.log(preco)
})


macaron.addEventListener('click',()=>{
    preco += 8.00;
    console.log(preco)
})


tiramisu.addEventListener('click',()=>{
    preco += 5.50;
    console.log(preco)
})


baklava.addEventListener('click',()=>{
    preco += 4.00;
    console.log(preco)
})


pie.addEventListener('click',()=>{
    preco += 5.00;
    console.log(preco)
})


cake.addEventListener('click',()=>{
    preco += 4.50;
    console.log(preco)
})


brownie.addEventListener('click',()=>{
    preco += 4.50;
    console.log(preco)
})


panna.addEventListener('click',()=>{
    preco += 6.50;
    console.log(preco)
})



open.addEventListener('click',() =>{
    menu.classList.add('abrir')
})


exit.addEventListener('click',() =>{
    menu.classList.remove('abrir')
})
