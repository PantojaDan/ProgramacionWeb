const required = document.querySelector('#required');

const btnAdd =  document.querySelectorAll('.add');
const secAdd = document.querySelectorAll('.ad');

const numItemsTxt = document.querySelector('#numItems');

let numItems = 1;

console.log(btnAdd);


btnAdd.forEach(btn => {
    btn.addEventListener('click',e=>{
        e.stopPropagation();
    
        numItems++;
        numItemsTxt.textContent = '';
        numItemsTxt.textContent = numItems;

        let address = e.target.parentElement.parentElement.firstElementChild.style.backgroundImage;

        let process1 = address.substr(5);
        let src = process1.slice(0,process1.length-2);
        let id = e.target.parentElement.parentElement.firstElementChild.id;

        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = 
        `
        
            <div class="image-item" style="background-image: url('${src}')"></div>
            <div class="description">
                <h1>Item 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        
        `;

        required.appendChild(item);
    })
})

/*btnAdd.addEventListener('click',e=>{
    
});*/

secAdd.forEach(btn => {
    btn.addEventListener('click',e=>{
        e.stopPropagation();
        numItemsTxt.textContent = '';
        numItemsTxt.textContent = numItems;
        numItems++;
        let address = e.target.parentElement.parentElement.parentElement.firstElementChild.style.backgroundImage;
    
        let process1 = address.substr(5);
        let src = process1.slice(0,process1.length-2);
        let id = e.target.parentElement.parentElement.firstElementChild.id;
    
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = 
        `
        
              <div class="image-item" style="background-image: url('${src}')"></div>
              <div class="description">
                <h1>Item 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
        
        `;
    
        required.appendChild(item);
    });
});

/*secAdd.addEventListener('click',e=>{
   
});*/