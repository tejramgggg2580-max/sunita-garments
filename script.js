let products = JSON.parse(localStorage.getItem("products")) || [];

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");

function showProducts(list) {
  productList.innerHTML = "";

  if (!list || list.length === 0) {
    productList.innerHTML = "<p>No products found</p>";
    return;
  }

  list.forEach((p) => {
    const name =
      p.name || p.title || p.productName || "No Name";

    const price =
      p.sellingPrice || p.price || p.amount || "";

    const oldPrice =
      p.mrp || p.oldPrice || p.originalPrice || "";

    const image =
      p.image || p.img || p.imageUrl || p.photo || "";

    productList.innerHTML += `
      <div class="card">
        <img src="${image}" alt="">
        <h4>${name}</h4>
        <p>
          ₹${price}
          ${oldPrice ? `<del>₹${oldPrice}</del>` : ""}
        </p>
      </div>
    `;
  });
}

// load on start
showProducts(products);

// category filter
function filterCat(cat) {
  if (cat === "All") {
    showProducts(products);
  } else {
    showProducts(products.filter(p => p.category === cat));
  }
}

// search
searchInput.addEventListener("input", () => {
  const val = searchInput.value.toLowerCase();
  showProducts(
    products.filter(p =>
      (p.name || p.title || "").toLowerCase().includes(val)
    )
  );
});

// whatsapp
function orderWA() {
  window.open(
    "https://wa.me/919982104506?text=Hello%20I%20want%20to%20order",
    "_blank"
  );
}
