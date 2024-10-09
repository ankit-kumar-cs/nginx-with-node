const express = require('express');
const app = express();
const portNumber = 5100;
app.get('/app2/info', (req, res) => {
  res.send('App2 is developed to handle the inventory management')
})

app.get('/app2/hello', (req, res) => {
  res.send('Hello route from App2')
})
app.listen(portNumber, () => console.log(`App2 Server is up and running on port number: ${portNumber}`));
