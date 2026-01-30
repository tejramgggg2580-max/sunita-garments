// Product list container
const productList = document.getElementById("grid");

// LocalStorage se products lo (admin panel se save hote hain)
let products = JSON.parse(localStorage.getItem("products")) || [];

// Search box
const searchInput = document.getElementById("search");

// Default category
let currentCat = "All";

// Show products function
function showProducts() {
  productList.innerHTML = "";

  let filtered = products.filter(p => {
    let matchCat = currentCat === "All" || p.category === currentCat;
    let matchSearch = !searchInput.value || 
      p.title.toLowerCase().includes(searchInput.value.toLowerCase());
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    productList.innerHTML = "<p>No products found</p>";
    return;
  }

  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <h4>${p.title}</h4>
      <p class="price">
        ₹${p.price}
        <del>₹${p.oldPrice}</del>
      </p>
      <button onclick="orderWA('${p.title}')">
        Order on WhatsApp
      </button>
    `;

    productList.appendChild(div);
  });
}

// Category filter
function filterCat(cat) {
  currentCat = cat;
  showProducts();
}

// WhatsApp order
function orderWA(title) {
  const number = "919982104506";
  const msg = `Hello Sunita Garments, I want to order: ${title}`;
  window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`);
}

// Search listener
if (searchInput) {
  searchInput.addEventListener("input", showProducts);
}

// Initial load
showProducts();
