function append(){

    let data = JSON.parse(localStorage.getItem("products"))||[]
    let container = document.getElementById("all_products");
    container.innerHTML=null;

    data.forEach(function (el,index){

        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.image;
        img.style.width = "100%";
        img.style.height = "200px";
        
        

        let t = document.createElement("p");
        t.innerText = "Type:"+" "+el.type;
        t.style.fontSize="25px"
        t.style.textAlign="center";
        t.style.color="red";
        t.style.lineHeight="10px";

        let d  = document.createElement("p");
        d.innerText= "Description:"+" "+el.desc;
        d.style.textAlign="center";
        d.style.fontSize="25px";
        d.style.color="green";
        // d.style.lineHeight="10px";

        let p = document.createElement("p");
        p.innerText ="Price:"+" "+ el.price;
        p.style.textAlign="center";
        p.style.fontSize="25px";
        p.style.color="blue";
        // p.style.lineHeight="10px";

        let btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.style.margin="auto";
        btn.style.display="block";
        btn.style.fontSize="25px";
        btn.style.color="orange";
        
    

        btn.addEventListener("click",function(){remove(index)});
        btn.parentNode= "Delete";
        div.append(img,t,d,p,btn)
        all_products.append(div);
    })
}
append();

function remove(index) {

    let data = JSON.parse(localStorage.getItem("products")) || [];

    let newData = data.filter(function(el,i){

        if(i===index){

            let trash= JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(el)
            localStorage.setItem("trash",JSON.stringify(trash));
        }
        else{
            return i!==index;
        }
    });
    

    localStorage.setItem("products",JSON.stringify(newData));

      append();
    console.log(newData)
}

function index(e){

    e.preventDefault();

    window.location.href = "index.html"
}


    
