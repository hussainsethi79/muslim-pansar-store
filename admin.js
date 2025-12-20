let adminUser="admin";
let adminPass="1234";

function login(){
 if(user.value===adminUser && pass.value===adminPass){
   loginBox.style.display="none";
   panel.style.display="block";
   render();
 }else alert("Wrong Login");
}

function addProduct(){
 let products=JSON.parse(localStorage.getItem("products")||"[]");
 products.push({
  name:name.value,
  qty:qty.value,
  sell:sell.value==="true"
 });
 localStorage.setItem("products",JSON.stringify(products));
 render();
}

function del(i){
 let p=JSON.parse(localStorage.getItem("products"));
 p.splice(i,1);
 localStorage.setItem("products",JSON.stringify(p));
 render();
}

function render(){
 let p=JSON.parse(localStorage.getItem("products")||"[]");
 list.innerHTML="";
 p.forEach((x,i)=>{
  list.innerHTML+=`
  <div class="card">
   <b>${x.name}</b> | Qty: ${x.qty}
   <br>
   <button onclick="del(${i})">Delete</button>
  </div>`;
 });
}
