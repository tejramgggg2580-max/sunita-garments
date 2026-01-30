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
        <img src="${p.image || p.img || ''}">
        <h4>${p.name || p.title || 'No Name'}</h4>
        <p>
          ₹${p.sellingPrice || p.price || ''}
          <del>₹${p.mrp || p.oldPrice || ''}</del>
        </p>
      </div>
    `;
  });
}

showProducts(products);

function filterCat(cat) {
  if (cat === "All") {
    showProducts(products);
  } else {
    showProducts(products.filter(p => p.category === cat));
  }
}

searchInput.addEventListener("input", () => {
  const val = searchInput.value.toLowerCase();
  showProducts(
    products.filter(p =>
      (p.name || p.title || "").toLowerCase().includes(val)
    )
  );
});

function orderWA() {
  window.open(
    "https://wa.me/919982104506?text=Hello%20I%20want%20to%20order",
    "_blank"
  );
}
