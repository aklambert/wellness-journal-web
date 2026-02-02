const express = require('express');
const cors = require('cors');
const { login, signup } = require('./controllers/authroutes');

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  methods: "GET, PUT, POST, DELETE",
  //credentials: true,
}

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// POST /api/login - Authenticate user and return JWT
app.post('/api/login', login);

// POST /api/signup - Create new user account
app.post('/api/signup', signup);

app.listen(process.env.NODEPORT, () => {
  console.log(`Example app listening on port ${process.env.NODEPORT}`)
});