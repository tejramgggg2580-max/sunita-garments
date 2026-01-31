const PASSWORD = "teju9982";

function login(){
  const p = document.getElementById("pass").value;
  if(p === PASSWORD){
    document.getElementById("loginBox").style.display="none";
    document.getElementById("panel").style.display="block";
  }else{
    document.getElementById("msg").innerText="❌ Wrong password";
  }
}

function add(){
  const name = document.getElementById("name").value.trim();
  const cat = document.getElementById("cat").value.trim();
  const price = document.getElementById("price").value.trim();
  const old = document.getElementById("old").value.trim();
  const img = document.getElementById("img").value.trim();

  if(!name || !cat || !price || !img){
    document.getElementById("done").innerText="❌ All fields required";
    return;
  }

  let products = JSON.parse(localStorage.getItem("products")) || [];

  // duplicate check
  if(products.some(p => p.name === name)){
    document.getElementById("done").innerText="⚠️ Product already exists";
    return;
  }

  products.push({ name, cat, price, old, img });
  localStorage.setItem("products", JSON.stringify(products));

  document.getElementById("done").innerText="✅ Product Added Successfully";
  document.querySelectorAll("#panel input").forEach(i=>i.value="");
}
