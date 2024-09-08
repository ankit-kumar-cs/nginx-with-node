const express = require('express');
const app = express();
app.get('/app1', (req, res) => {
  res.send('Basic route coming from App1')
})

app.get('/app1/hello', (req, res) => {
  res.send('Hello route from App1')
})
app.listen(5000, () => console.log('App1 Server is up and running'));