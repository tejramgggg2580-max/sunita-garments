const WHATSAPP = "919982104506";

let currentCat = "All";

const products = [
  {name:"Girls Modern Suit",cat:"Dresses",price:999,old:1599,off:"38%",img:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990"},
  {name:"Cotton Kids Frock",cat:"Dresses",price:499,old:899,off:"44%",img:"https://images.unsplash.com/photo-1542060748-10c28b62716f"},
  {name:"Printed Kids Dress",cat:"Dresses",price:239,old:499,off:"52%",img:"https://images.unsplash.com/photo-1595777457583-95e059d581b8"},
  {name:"Girls Midi Short Dress",cat:"Dresses",price:799,old:1299,off:"38%",img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"},

  {name:"Summer Lace Top",cat:"Tops",price:699,old:1199,off:"42%",img:"https://images.unsplash.com/photo-1583391733956-6c78276477e5"},
  {name:"Rayon Printed Top",cat:"Tops",price:799,old:1399,off:"43%",img:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"},
  {name:"Halter Neck Top",cat:"Tops",price:599,old:999,off:"40%",img:"https://images.unsplash.com/photo-1612423284934-2850a4c7b47d"},

  {name:"Girls Salwar Suit",cat:"Salwar Suit",price:1299,old:1999,off:"35%",img:"https://images.unsplash.com/photo-1624206112918-f140f087f9b5"}
];

const grid = document.getElementById("grid");
const search = document.getElementById("search");

function show(){
  grid.innerHTML="";
  products.filter(p=>{
    return (currentCat==="All"||p.cat===currentCat) &&
      p.name.toLowerCase().includes(search.value.toLowerCase());
  }).forEach(p=>{
    grid.innerHTML += `
      <div class="card">
        <div class="tag">On Offer</div>
        <div class="heart">♡</div>
        <img src="${p.img}">
        <div class="info">
          <h4>${p.name}</h4>
          <div class="price">
            ₹${p.price}
            <del>₹${p.old}</del>
            <span>${p.off} OFF</span>
          </div>
        </div>
      </div>
    `;
  });
}

function filterCat(c){currentCat=c;show()}
search.oninput = show;

function orderWA(){
  window.open(`https://wa.me/${WHATSAPP}?text=Hello Sunita Garments, I want to place an order`);
}

show();
