const products = ['Milk', 'Eggs', 'Cornflex']

// Select the ul using it's id
mainlist =document.querySelectorAll("#productsList")[0]

// y= document.createElement("h1")
// y.textContent="List of products"
// mainlist.appendChild(y)

products.forEach(t=>{
x= document.createElement("li")
x.textContent = t
mainlist.appendChild( x)

})



// iterate over products and build the list