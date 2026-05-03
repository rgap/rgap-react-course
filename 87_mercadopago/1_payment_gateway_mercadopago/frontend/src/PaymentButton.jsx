import axios from "axios";
import { useState } from "react";

const PaymentButton = () => {
  const [paymentLink, setPaymentLink] = useState("");

  const handlePayment = async () => {
    try {
      const response = await axios.get("http://localhost:8001/create_preference");
      setPaymentLink(response.data.init_point);
    } catch (error) {
      console.error("Error creating payment preference:", error);
    }
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay $100</button>
      {paymentLink && (
        <a href={paymentLink} target="_blank" rel="noopener noreferrer">
          Complete Payment
        </a>
      )}
    </div>
  );
};

export default PaymentButton;
