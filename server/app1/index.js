const express = require('express');
const app = express();
const portNumber = 5000;

const serverName = process.env.SERVER_NAME || 'Unknown Server';

app.get('/app1/info', (req, res) => {
  res.send(`App1 is developed to handle the invoice management. This data is being returned by ${serverName}`)
})

app.get('/app1/hello', (req, res) => {
  res.send('Hello from App1')
})
app.listen(portNumber, () => console.log(`${serverName} is up and running on port number: ${portNumber}`));