const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Rotas
const routes = require('./routes');
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
