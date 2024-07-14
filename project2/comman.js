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