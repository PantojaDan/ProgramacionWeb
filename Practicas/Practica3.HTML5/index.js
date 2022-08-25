const menuHamburger = document.querySelector(".menu-hamburguer");
const btnHamburguer = document.querySelector("#btn-hamburguer");


const likeBtn = document.querySelectorAll('.like');
const loveBtn = document.querySelectorAll('.love');
const clothes = document.querySelector('#clothes');


const linkLaunched = document.querySelector('#launched');
const table = document.querySelector('#items-launched');

linkLaunched.addEventListener('mouseenter',()=>{
    if(table.classList.contains('hide-table')){
        table.classList.remove('hide-table')
    }else{
        table.classList.add('hide-table')
    }
});
/*linkLaunched.addEventListener('mouseleave',()=>{
    table.classList.add('hide-table');
})*/
table.addEventListener('mouseleave',()=>{
    table.classList.add('hide-table')
});

window.addEventListener('resize',()=>{
    let width = document.documentElement.clientWidth;
    if(width>=731){
        if(!menuHamburger.classList.contains('hidemenu')){
            menuHamburger.classList.add('hidemenu');
        }
    }
})

btnHamburguer.addEventListener('click',(e)=>{
    e.preventDefault();

    if(menuHamburger.classList.contains('hidemenu')){
        menuHamburger.classList.remove('hidemenu');
    }else{
        menuHamburger.classList.add('hidemenu');
    }
});

likeBtn.forEach( like => {
    like.addEventListener('click',()=>{
        if(like.classList.contains('pressedLiked')){
            like.classList.remove('pressedLiked');
        }else{
            like.classList.add('pressedLiked');
        }
    })
});

loveBtn.forEach( love => {
    love.addEventListener('click',()=>{
        if(love.classList.contains('pressedLoved')){
            love.classList.remove('pressedLoved');
        }else{
            love.classList.add('pressedLoved');
        }
    })
});