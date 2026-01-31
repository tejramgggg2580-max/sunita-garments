const products = [
  {
    category: "Dresses",
    name: "Designer Dress",
    oldPrice: 1999,
    price: 999,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
  },
  {
    category: "Tops",
    name: "Stylish Top",
    oldPrice: 1499,
    price: 699,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    category: "Salwar Suit",
    name: "Salwar Suit",
    oldPrice: 2499,
    price: 1299,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
  },
];

const grid = document.getElementById("grid");

function showProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    grid.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h4>${p.name}</h4>
        <div class="price">
          <del>₹${p.oldPrice}</del>
          <span>₹${p.price}</span>
        </div>
        <div class="btn-group">
          <a class="btn wa" href="https://wa.me/919982104506?text=I want to order ${p.name}" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png">
            WhatsApp
          </a>
          <a class="btn upi" href="upi://pay?pa=tamilsunita51@okhdfcbank&pn=Sunita Garments&am=${p.price}">
            Pay
          </a>
        </div>
      </div>
    `;
  });
}

showProducts(products);
