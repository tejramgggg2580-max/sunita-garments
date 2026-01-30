const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");

let products = JSON.parse(localStorage.getItem("products")) || [];

function renderProducts(list) {
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = "<p>No products found</p>";
    return;
  }

  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>₹${p.price} <del>₹${p.oldPrice || ""}</del></p>
      <button onclick="orderWA('${p.title}')">Order on WhatsApp</button>
    `;

    grid.appendChild(div);
  });
}

function filterCat(cat) {
  if (cat === "All") {
    renderProducts(products);
  } else {
    renderProducts(products.filter(p => p.category === cat));
  }
}

function orderWA(name) {
  window.open(
    `https://wa.me/919982104506?text=I want to order ${name}`,
    "_blank"
  );
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  renderProducts(
    products.filter(p =>
      p.title.toLowerCase().includes(value)
    )
  );
});

renderProducts(products);
