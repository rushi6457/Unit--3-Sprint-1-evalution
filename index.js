//store the products array in localstorage as "products"

function Products(t,d,p,i){

    this.type = t;
    this.desc = d;
    this.price = p;
    this.image=i;
}

function storeData(e){
    e.preventDefault();

    let form = document.getElementById("products");

    let type = form.type.value;
    let description = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let p1 = new Products(type,description,price,image);

    let data = JSON.parse(localStorage.getItem("products")) ||[];

    data.push(p1);

    localStorage.setItem("products",JSON.stringify(data));

    window.location.href = "inventory.html" 
    console.log(data)
}

function showProducts(e){

    e.preventDefault();

    let show = document.getElementById("add_product")

    window.location.href = "inventory.html"
}




// let show = document.getElementById("all_products")

//     window.location.href ="inventory.html" 


