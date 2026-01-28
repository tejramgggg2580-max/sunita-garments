const WHATSAPP = "919982104506";
const UPI = "tamilsunita51@okhdfcbank";

const products = [
  {name:"Bridal Lehenga",price:2499,cat:"Lehenga",img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"},
  {name:"Cotton Suit",price:1299,cat:"Suit",img:"https://images.unsplash.com/photo-1624206112918-f140f087f9b5"},
  {name:"Daily Kurti",price:699,cat:"Kurti",img:"https://images.unsplash.com/photo-1583391733956-6c78276477e5"},
  {name:"Festive Kurti",price:1199,cat:"Kurti",img:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"}
];

let cart = [];
let currentCat = "All";

const box = document.getElementById("products");
const search = document.getElementById("search");

function showProducts(){
  box.innerHTML="";
  products.filter(p=>{
    return (currentCat==="All"||p.cat===currentCat) &&
           p.name.toLowerCase().includes(search.value.toLowerCase());
  }).forEach(p=>{
    box.innerHTML+=`
      <div class="product">
        <img src="${p.img}">
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
        <button class="btn" onclick="addCart('${p.name}',${p.price})">Add to Cart</button>
        <p style="font-size:12px">UPI: ${UPI}</p>
      </div>`;
  });
}

function filterCat(c){currentCat=c;showProducts();}
search.oninput=showProducts;

function addCart(name,price){
  cart.push({name,price});
  document.getElementById("cartCount").innerText=cart.length;
  document.getElementById("cartTotal").innerText=
    cart.reduce((t,i)=>t+i.price,0);
}

function orderWhatsApp(){
  let text="Hello Sunita Garments,%0AOrder details:%0A";
  cart.forEach(i=>text+=`${i.name} - ₹${i.price}%0A`);
  text+=`%0ATotal: ₹${cart.reduce((t,i)=>t+i.price,0)}%0AUPI: ${UPI}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${text}`);
}

showProducts();
