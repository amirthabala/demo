
var imageURL = "";
var products = [];
document.querySelector("#pic").addEventListener("change",function (){
const reader =new FileReader();
     reader.addEventListener("load", ()=>{
         imageURL = reader.result;
              //localStorage.setItem("picture",reader.result);
    });
    reader.readAsDataURL(this.files[0]);
});
   
if(localStorage.getItem('products')!=null){
    products = JSON.parse(localStorage.getItem('products'));
}

function store(){
    var pname = document.getElementById('pname');
    var quantity = document.getElementById('quantity');
    var price = document.getElementById('price');

   
    if(pname.value.length !=0 && quantity.value.length !=0 && price.value.length !=0){
        var data = {name:pname.value,qty:quantity.value,amount:price.value,image:imageURL};
        products.push(data);
        //localStorage.setItem('pname', pname.value);
        //localStorage.setItem('quantity', quantity.value);
        //localStorage.setItem('price', price.value);
        localStorage.setItem('products',JSON.stringify(products));
        alert("Product added");
        window.location.reload();
    }
    else{
        alert("You cannot leave fields empty");
    }

    
}


var result = JSON.parse(localStorage.getItem('products'));
console.log(result);


