const express = require('express');

const app = express();
const absolutePath = `${__dirname}/views/index.html`;
app.get('/', (req, res) => {
  res.sendFile(absolutePath);
});

module.exports = app;
