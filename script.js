let products = JSON.parse(localStorage.getItem("products")) || [];

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");

function showProducts(list) {
  productList.innerHTML = "";

  if (list.length === 0) {
    productList.innerHTML = "<p>No products found</p>";
    return;
  }

  list.forEach((p) => {
    productList.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.title}">
        <h4>${p.title}</h4>
        <p>₹${p.price} <del>₹${p.oldPrice}</del></p>
      </div>
    `;
  });
}

// Initial load
showProducts(products);

// Category filter
function filterCat(cat) {
  if (cat === "All") {
    showProducts(products);
  } else {
    const filtered = products.filter(
      (p) => p.category === cat
    );
    showProducts(filtered);
  }
}

// Search
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(value)
  );
  showProducts(filtered);
});

// WhatsApp Order
function orderWA() {
  window.open(
    "https://wa.me/919982104506?text=Hello%20I%20want%20to%20order",
    "_blank"
  );
}
