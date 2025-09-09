const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const bars = document.querySelector(".fa-bars")

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('mobile-list-active');

    bars.classList.toggle('fa-xmark');
})
