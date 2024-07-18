let categoryList = document.querySelectorAll('.category-list');

let categoryArr =['women-wears', ' men-wears','sports-wears' ,'elections', 'beauty-products']

categoryArr.map((items)=>{
    let category = document.createElement('div')
    category.classList.add('category-items')
    
    let html = `
     <a href="#" class="category">${items}</a>
     `;
    category.innerHTML += html;
    
  
    categoryList.forEach((items)=>{
        items.appendChild(category)
    })
})


// fetching dynatic data form api


let products = fetch('https://fakestoreapi.com/products').then(res => res.json());
let productDetails = document.querySelectorAll('.productDetails')

products.then((data)=>{
    data.map((productItmes)=>{
        let productCard = document.createElement('div')
        productCard.classList.add('product-card')
        
        let html = `
        <img src="${productItmes.image}" class='product-image' alt="${productItmes.title}">
        <div class='productDetails'>
        <h2>${productItmes.title}</h2>
        <p>$${productItmes.price}</p>
        <button class='btn btn-primary m-2'>Buy</button>
        <button class='btn btn-warning m-2'>Add to Cart</button>

        </div>
        `;
        productCard.innerHTML += html;
        
        productDetails.forEach((items)=>{
            items.appendChild(productCard)
        })
    })
 
})


// gereateing products


 
