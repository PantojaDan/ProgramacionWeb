const menuHamburger = document.querySelector(".menu-hamburguer");
const btnHamburguer = document.querySelector("#btn-hamburguer");


const likeBtn = document.querySelectorAll('.like');
const loveBtn = document.querySelectorAll('.love');
const clothes = document.querySelector('#clothes');

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


/*const key = '25140215-b3755536bf42e27e6df754c1f';
const url = `https://pixabay.com/api/?key=${key}&q=clothes&image_type=photo`;

fetch(url) 
    .then(respuesta => respuesta.json())
    .then( resultado => {
        resultado.hits.forEach(cloth => {
            console.log(cloth);
            const item = document.createElement('div');
            item.innerHTML = "";
            item.innerHTML = `
            <div class="image-item" style="background-image: url(${cloth.previewURL});">
            <div class="reactions">
              <span class="like"><i class="fa-solid fa-thumbs-up"></i></span>
              <span class="love"><i class="fa-solid fa-heart"></i></span>
            </div>
            </div>
            <div class="description">
                <h1>Item 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>`;
            clothes.appendChild(item);
        })
    });
*/