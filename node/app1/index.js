const express = require('express');
const app = express();
const portNumber = 5000;
app.get('/app1/info', (req, res) => {
  res.send('App1 is developed to handle the invoice management')
})

app.get('/app1/hello', (req, res) => {
  res.send('Hello from App1')
})
app.listen(portNumber, () => console.log(`App1Server is up and running on port number: ${portNumber}`));