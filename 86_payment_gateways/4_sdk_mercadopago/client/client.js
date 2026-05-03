document.addEventListener("DOMContentLoaded", function () {
  const mp = new MercadoPago("TEST-af96d673-57d2-4b48-966d-cd210ef8566b", {
    locale: "en-US",
  });

  const cardForm = mp.cardForm({
    amount: "100",
    form: {
      id: "form-checkout",
      cardNumber: {
        id: "form-checkout__cardNumber",
        placeholder: "Card Number",
      },
      expirationDate: {
        id: "form-checkout__expirationDate",
        placeholder: "MM/YY",
      },
      securityCode: {
        id: "form-checkout__securityCode",
        placeholder: "Security Code",
      },
      cardholderName: {
        id: "form-checkout__cardholderName",
        placeholder: "Cardholder",
      },
      cardholderEmail: {
        id: "form-checkout__cardholderEmail",
        placeholder: "Email",
      },
      issuer: {
        id: "form-checkout__issuer",
        placeholder: "Issuer",
      },
      installments: {
        id: "form-checkout__installments",
        placeholder: "Installments",
      },
    },
    callbacks: {
      onFormMounted: error => {
        if (error) return console.warn("Form Mounted handling error: ", error);
        console.log("Form mounted");
      },
      onSubmit: async event => {
        event.preventDefault();
        try {
          const {
            paymentMethodId: payment_method_id,
            issuerId: issuer_id,
            cardholderEmail: email,
            amount,
            token,
            installments,
            identificationNumber,
            identificationType,
          } = cardForm.getCardFormData();

          const response = await fetch("http://localhost:3000/process_payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token,
              issuer_id,
              payment_method_id,
              transaction_amount: Number(amount),
              installments: Number(installments),
              description: "Product Description",
              payer: {
                email,
                identification: {
                  type: "DNI",
                  number: "12345678",
                },
              },
            }),
          });

          const result = await response.json();
          if (response.ok) {
            document.getElementById("payment-result").textContent = `Payment successful: ${result.status}`;
          } else {
            document.getElementById("payment-result").textContent = `Error: ${result.error}`;
          }
        } catch (error) {
          document.getElementById("payment-result").textContent = `Error: ${error.message}`;
          console.error("Payment error:", error);
        }
      },
    },
  });

  // Set default values for card fields
  document.getElementById("form-checkout__cardNumber").value = "5031755734530604";
  document.getElementById("form-checkout__expirationDate").value = "11/25";
  document.getElementById("form-checkout__securityCode").value = "123";
});
