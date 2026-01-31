const grid = document.getElementById("grid");
const search = document.getElementById("search");

const products = [
  {
    category: "Dresses",
    name: "Designer Dress",
    oldPrice: 2999,
    price: 1499,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
  },
  {
    category: "Salwar Suit",
    name: "Cotton Salwar Suit",
    oldPrice: 2499,
    price: 1299,
    image: "https://images.unsplash.com/photo-1612336307420-1f8d2b5e1b33"
  }
];

function showProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {

    const waMsg =
      "Hello Sunita Garments,%0A" +
      "Product: " + encodeURIComponent(p.name) + "%0A" +
      "Price: Rs " + p.price;

    grid.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h4>${p.name}</h4>

        <p>
          <span style="text-decoration:line-through;color:gray;">
            ₹${p.oldPrice}
          </span>
          <span style="color:green;font-weight:bold;margin-left:6px;">
            ₹${p.price}
          </span>
        </p>

        <div class="btn-group">
          <a class="btn wa"
             href="https://wa.me/919982104506?text=${waMsg}"
             target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg">
            WhatsApp Order
          </a>

          <a class="btn upi"
             href="upi://pay?pa=tamilsunita51@okhdfcbank&pn=Sunita%20Garments&am=${p.price}&cu=INR">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/UPI-Logo-vector.svg">
            Pay via UPI
          </a>
        </div>
      </div>
    `;
  });
}

showProducts(products);
