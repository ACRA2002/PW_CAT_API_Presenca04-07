const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});