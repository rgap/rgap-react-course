import React from "react";
// 1. Import useLocation to read the hidden state
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleCheckout = () => {
    // 2. Pass data in the `state` property of the options object
    const orderData = {
      orderId: "INV-12345",
      totalAmount: 99.99,
      customerName: "John Doe"
    };

    navigate("/success", { state: orderData });
  };

  return (
    <div>
      <h2>🛒 Shopping Cart</h2>
      <p>Items in cart: 3</p>
      <p>Total: $99.99</p>
      
      <button 
        onClick={handleCheckout}
        style={{ padding: "10px 20px", backgroundColor: "#4caf50", color: "white", border: "none", cursor: "pointer" }}
      >
        Complete Checkout
      </button>
    </div>
  );
}

function Success() {
  // 3. Call useLocation to access the hidden state payload
  const location = useLocation();
  const orderData = location.state;

  return (
    <div style={{ backgroundColor: "#e8f5e9", padding: "20px", borderRadius: "5px" }}>
      <h2 style={{ color: "green" }}>🎉 Order Successful!</h2>
      
      {orderData ? (
        <div>
          <p>Thank you for your purchase, <strong>{orderData.customerName}</strong>.</p>
          <p>Your Order ID is: <code>{orderData.orderId}</code></p>
          <p>Total Charged: <strong>${orderData.totalAmount}</strong></p>
        </div>
      ) : (
        <p style={{ color: "red" }}>
          Error: No order data found. Did you navigate here directly instead of checking out?
        </p>
      )}
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Passing State in Navigation</h1>

      <div style={{ border: "2px dashed #ccc", padding: "20px", minHeight: "200px", marginTop: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>

      <div style={{ marginTop: "30px", maxWidth: "600px" }}>
        <h2>Invisible Data</h2>
        <p>
          When you click "Complete Checkout", the application redirects you to <code>/success</code>.
        </p>
        <p>
          Notice that the URL does NOT contain any search parameters (like <code>?orderId=123</code>). The data was passed secretly through React Router's internal state mechanism!
        </p>
        <p>
          <strong>Warning:</strong> If you refresh the page, the state <em>usually</em> persists (because the browser saves it in its History API), but if you copy-paste the URL into a new tab, the state will be null.
        </p>
      </div>
    </div>
  );
}

export default App;