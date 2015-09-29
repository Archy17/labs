const express = require('express');

let app = express();

app
  .get('/', (req, res) => res.send('Hello, ES6!'));

let server = app.listen(3000, () => {
  console.log('Running at localhost:3000');
});
