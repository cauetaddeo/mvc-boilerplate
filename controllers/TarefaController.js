const Tarefa = require('../models/Tarefa');

const tarefas = [];

module.exports = {
  listarTarefas: (req, res) => {
    res.json(tarefas);
  },

  criarTarefa: (req, res) => {
    const { titulo, descricao, status, usuarioId } = req.body;
    const novaTarefa = new Tarefa(
      Date.now(),
      titulo,
      descricao,
      status,
      new Date(),
      null,
      usuarioId
    );
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
  }
};
