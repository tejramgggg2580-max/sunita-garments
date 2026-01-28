const PASSWORD = "teju9982";

let products = JSON.parse(localStorage.getItem("products") || "[]");
let editIndex = -1;

function login(){
  if(pass.value === PASSWORD){
    login.style.display="none";
    panel.style.display="block";
    show();
  } else {
    alert("Wrong password");
  }
}

function save(){
  const file = img.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const item = {
      name: name.value,
      cat: cat.value,
      price: price.value,
      old: old.value,
      img: reader.result
    };

    if(editIndex > -1){
      products[editIndex] = item;
      editIndex = -1;
    } else {
      products.push(item);
    }

    localStorage.setItem("products", JSON.stringify(products));
    clear();
    show();
  };

  if(file){
    reader.readAsDataURL(file);
  } else {
    alert("Please select image");
  }
}

function edit(i){
  const p = products[i];
  name.value = p.name;
  cat.value = p.cat;
  price.value = p.price;
  old.value = p.old;
  editIndex = i;
}

function del(i){
  if(confirm("Delete product?")){
    products.splice(i,1);
    localStorage.setItem("products", JSON.stringify(products));
    show();
  }
}

function show(){
  list.innerHTML="";
  products.forEach((p,i)=>{
    list.innerHTML += `
      <div>
        <div>
          <b>${p.name}</b><br>
          <small>${p.cat} • ₹${p.price}</small>
        </div>
        <div>
          <button onclick="edit(${i})">✏️</button>
          <button class="danger" onclick="del(${i})">❌</button>
        </div>
      </div>
    `;
  });
}

function clear(){
  name.value="";
  price.value="";
  old.value="";
  img.value="";
}
