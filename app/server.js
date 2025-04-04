const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  methods: "GET, PUT, POST, DELETE",
  //credentials: true,
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
});