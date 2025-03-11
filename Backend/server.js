require("dotenv").config();
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: req.body.productName, 
            },
            unit_amount: req.body.price * 100, 
          },
          quantity: 1,
        },
      ],
      success_url: "myapp://success", 
      cancel_url: "myapp://cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
