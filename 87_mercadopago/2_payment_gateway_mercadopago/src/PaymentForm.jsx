import { CardNumber, ExpirationDate, initMercadoPago, SecurityCode } from "@mercadopago/sdk-react";
import { useState } from "react";

initMercadoPago("TEST-a0c24d26-9690-41c6-b8d5-627bcefd739d");

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("4111111111111111"); // Default test card number
  const [securityCode, setSecurityCode] = useState("123"); // Default test security code
  const [expirationDate, setExpirationDate] = useState("12/24"); // Default test expiration date

  const handleSubmit = async event => {
    event.preventDefault();

    // Create card token
    const cardToken = await window.Mercadopago.createToken({
      cardNumber,
      securityCode,
      expirationDate,
    });

    if (cardToken.error) {
      console.error("Error creating card token", cardToken.error);
      return;
    }

    // Get payment methods
    const paymentMethods = await window.Mercadopago.getPaymentMethods({
      bin: cardNumber.substring(0, 6),
    });

    if (paymentMethods.error) {
      console.error("Error getting payment methods", paymentMethods.error);
      return;
    }

    const paymentMethod = paymentMethods[0];
    const issuerId = paymentMethod.issuer.id;
    const paymentMethodId = paymentMethod.id;

    // Send data to the backend
    try {
      const response = await axios.post("https://your-backend.com/api/payment", {
        issuer_id: issuerId,
        payment_method_id: paymentMethodId,
        card_token: cardToken.id,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error sending data to backend", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Card Number</label>
        <input type="text" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
      </div>
      <div>
        <label>Expiration Date</label>
        <input type="text" value={expirationDate} onChange={e => setExpirationDate(e.target.value)} />
      </div>
      <div>
        <label>Security Code</label>
        <input type="text" value={securityCode} onChange={e => setSecurityCode(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentForm;
