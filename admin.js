const PASSWORD = "teju9982";

function login(){
  if(pass.value === PASSWORD){
    loginBox.style.display="none";
    panel.style.display="block";
    show();
  } else alert("Wrong password");
}

function get(){
  return JSON.parse(localStorage.getItem("products") || "[]");
}

function save(p){
  localStorage.setItem("products", JSON.stringify(p));
}

function add(){
  let p = get();
  p.push({
    name:name.value,
    cat:cat.value,
    price:price.value,
    old:old.value,
    off: Math.round((1-price.value/old.value)*100)+"%",
    img:img.value
  });
  save(p); show();
}

function del(i){
  let p=get(); p.splice(i,1); save(p); show();
}

function show(){
  list.innerHTML="";
  get().forEach((x,i)=>{
    list.innerHTML+=`${x.name} ₹${x.price}
    <button onclick="del(${i})">Delete</button><br>`;
  });
}
