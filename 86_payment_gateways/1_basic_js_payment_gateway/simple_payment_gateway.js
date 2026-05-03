// simple_payment_gateway.js
document.getElementById("payment-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const amount = document.getElementById("amount").value;
  alert(`A payment of $${amount} has been initiated!`);
});
