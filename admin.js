const PASSWORD = "teju9982";
const STORAGE_KEY = "SUNITA_PRODUCTS";

function login(){
  if(document.getElementById("pass").value === PASSWORD){
    document.getElementById("login").style.display="none";
    document.getElementById("panel").style.display="block";
  } else {
    alert("Wrong password");
  }
}

function add(){
  let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  let p = {
    name: name.value.trim(),
    category: cat.value.trim(),
    price: price.value.trim(),
    old: old.value.trim(),
    image: img.value.trim()
  };

  if(!p.name || !p.price || !p.image){
    alert("Name, price & image required");
    return;
  }

  data.push(p);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

  msg.innerText = "✅ Product added";

  name.value = cat.value = price.value = old.value = img.value = "";
}
