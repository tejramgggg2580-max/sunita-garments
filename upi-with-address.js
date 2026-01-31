const UPI_ID = "tamilsunita51@okhdfcbank";
const WA_NUMBER = "919982104506";

function buyNow(name, price) {

  // 1️⃣ UPI Auto Pay
  const upi =
    "upi://pay" +
    "?pa=" + UPI_ID +
    "&pn=Sunita%20Garments" +
    "&tn=" + encodeURIComponent(name) +
    "&am=" + price +
    "&cu=INR";

  window.location.href = upi;

  // 2️⃣ WhatsApp for Address
  setTimeout(() => {
    const msg =
      `Order Placed\n\n` +
      `Product: ${name}\n` +
      `Amount: ₹${price}\n\n` +
      `Please send your delivery address.`;

    window.open(
      "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg),
      "_blank"
    );
  }, 2000);
}
