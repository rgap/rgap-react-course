// client.js
document.getElementById("payment-form").addEventListener("submit", async function (event) {
  event.preventDefault();
  const paymentData = {
    cardNumber: document.getElementById("card-number").value,
    expiryDate: document.getElementById("expiry-date").value,
    cvc: document.getElementById("cvc").value,
  };

  try {
    const response = await fetch("http://localhost:3000/stripe-mock/v1/charges", {
      // Assuming the proxy is on localhost:3000
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer sk_test_123",
      },
      body: JSON.stringify(paymentData),
    });
    const data = await response.json();
    if (response.ok) {
      alert("Payment processed successfully: " + JSON.stringify(data));
    } else {
      throw new Error(data.error.message);
    }
  } catch (error) {
    console.error("Error processing payment:", error);
    alert("Failed to process payment.");
  }
});
