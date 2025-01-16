const hamburguer = document.querySelector("hamburger");
const nav = document.querySelector("nav");

hamburguer.addEventListener("click",() => 
    nav.classList.toggle("active"));