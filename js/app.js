let open = document.getElementById('open');
let exit = document.getElementById('exit')
let menu = document.getElementById('side_bar');


open.addEventListener('click',() =>{
    menu.classList.add('abrir')
})

exit.addEventListener('click',() =>{
    menu.classList.remove('abrir')
})
