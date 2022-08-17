const menuHamburger = document.querySelector(".menu-hamburguer");
const btnHamburguer = document.querySelector("#btn-hamburguer");

btnHamburguer.addEventListener('click',(e)=>{
    e.preventDefault();

    if(menuHamburger.classList.contains('hidemenu')){
        menuHamburger.classList.remove('hidemenu');
    }else{
        menuHamburger.classList.add('hidemenu');
    }
});