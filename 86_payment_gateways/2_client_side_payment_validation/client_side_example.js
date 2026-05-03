// client_side_example.js
document.getElementById("payment-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const paymentData = {
    cardNumber: document.getElementById("card-number").value,
    expiryDate: document.getElementById("expiry-date").value,
  };
  console.log("Payment Data:", paymentData);
  alert("Payment details submitted for processing.");
});
