const express = require('express');
const router = express.Router();

const usuarioRoutes = require('./usuarioRoutes');
const tarefaRoutes = require('./tarefaRoutes');
const categoriaRoutes = require('./categoriaRoutes');

router.use('/usuarios', usuarioRoutes);
router.use('/tarefas', tarefaRoutes);
router.use('/categorias', categoriaRoutes);

module.exports = router;
