const express = require('express');
const app = express();
const portNumber = 5000;
app.get('/app1', (req, res) => {
  res.send('Basic route coming from App1 app')
})

app.get('/app1/hello', (req, res) => {
  res.send('Hello route from App1')
})
app.listen(portNumber, () => console.log(`App1Server is up and running on port number: ${portNumber}`));