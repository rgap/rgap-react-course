const express = require("express");
const mercadopago = require("mercadopago");

const app = express();
const PORT = 8001;

// MercadoPago configuration
mercadopago.configurations.setAccessToken("APP_USR-2ea1be4c-2be6-4338-8c8f-bf68bac48891");

// Create a payment preference
app.get("/create_preference", async (req, res) => {
  const preference = {
    items: [
      {
        title: "Sample Product",
        unit_price: 100,
        quantity: 1,
      },
    ],
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    res.status(200).json(response.body);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
