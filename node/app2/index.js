const express = require('express');
const app = express();
const portNumber = 5100;
app.get('/app2', (req, res) => {
  res.send('Basic route coming from App2 app')
})

app.get('/app2/hello', (req, res) => {
  res.send('Hello route from App2')
})
app.listen(portNumber, () => console.log(`App2 Server is up and running on port number: ${portNumber}`));

console.log('Server up successful');