const PASSWORD = "teju9982";

function login(){
  if(document.getElementById("pass").value === PASSWORD){
    document.getElementById("login").style.display="none";
    document.getElementById("panel").style.display="block";
  } else {
    alert("Wrong password");
  }
}

function add(){
  let data = JSON.parse(localStorage.getItem("SUN_PRODUCTS")) || [];

  let p = {
    name: name.value,
    category: cat.value,
    price: price.value,
    old: old.value,
    image: img.value
  };

  if(!p.name || !p.price || !p.image){
    alert("Name, price & image required");
    return;
  }

  data.push(p);
  localStorage.setItem("SUN_PRODUCTS", JSON.stringify(data));
  msg.innerText = "✅ Product added";

  name.value = cat.value = price.value = old.value = img.value = "";
}
