const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/web/index.html')
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/web/index.html')
});


app.listen(3000, () => {
  console.log('There are logs.');
});