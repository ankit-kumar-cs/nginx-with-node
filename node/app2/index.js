const express = require('express');
const app = express();
app.get('/app2', (req, res) => {
  res.send('Basic route coming from App2')
})

app.get('/app2/hello', (req, res) => {
  res.send('Hello route from App2')
})
app.listen(5100, () => console.log('App2 Server is up and running'));