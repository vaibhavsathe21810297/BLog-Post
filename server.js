const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/api/authenticate', (req, res) => {
  const { username, password } = req.body;
  
  // Here you could implement your own authentication logic to validate the provided credentials
  const isValid = username === 'valid_user' && password === 'valid_password';
  
  // Return a JSON response indicating whether the provided credentials are valid or not
  res.json({ isValid });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
