console.log("inside js");
document.querySelector("#pic").addEventListener("change",function (){
const reader =new FileReader();
     reader.addEventListener("load", ()=>{
              localStorage.setItem("picture",reader.result);
    });
    reader.readAsDataURL(this.files[0]);
});
   
function store(){
    var pname = document.getElementById('pname');
    var quantity = document.getElementById('quantity');
    var price = document.getElementById('price');
   
    if(pname.value.length !=0 && quantity.value.length !=0 && price.value.length !=0){
    localStorage.setItem('pname', pname.value);
    localStorage.setItem('quantity', quantity.value);
    localStorage.setItem('price', price.value);
    alert("Product added");
    window.location.reload();
    }
    else{
        alert("You cannot leave fields empty");
    }

    
}



