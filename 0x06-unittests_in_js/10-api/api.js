const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to the payment system'));
app.get('/cart/:id([0-9]+)', (req, res) =>
  res.status(200).send(`Payment methods for cart ${req.params.id}`)
);
app.get('/available_payments/', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});
app.post('/login/', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});
