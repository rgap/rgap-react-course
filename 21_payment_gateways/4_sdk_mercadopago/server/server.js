require("dotenv").config();
const express = require("express");
const mercadopago = require("mercadopago");
const app = express();
const PORT = 3000;

mercadopago.configurations.setAccessToken(process.env.MERCADOPAGO_ACCESS_TOKEN);

app.use(express.json());

app.post("/process_payment", async (req, res) => {
  const payment_data = {
    transaction_amount: req.body.transaction_amount,
    token: req.body.token,
    description: req.body.description,
    installments: req.body.installments,
    payment_method_id: req.body.payment_method_id,
    issuer_id: req.body.issuer_id,
    payer: {
      email: req.body.payer.email,
      identification: {
        type: req.body.payer.identification.type,
        number: req.body.payer.identification.number,
      },
    },
  };

  try {
    const payment = await mercadopago.payment.save(payment_data);
    res.send({
      status: payment.body.status,
      status_detail: payment.body.status_detail,
      id: payment.body.id,
    });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).send({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
