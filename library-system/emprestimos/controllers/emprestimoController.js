const Emprestimo = require('../models/Emprestimo');
const axios = require('axios');

exports.registrarEmprestimo = async (req, res) => {
  const { usuarioId, livroId } = req.body;

  try {
    const usuarioResponse = await axios.get(`http://localhost:3000/usuarios/${usuarioId}`);
    if (!usuarioResponse.data) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const livroResponse = await axios.get(`http://localhost:3000/livros/${livroId}`);
    if (!livroResponse.data || !livroResponse.data.disponivel) {
      return res.status(400).json({ error: 'Livro não está disponível' });
    }

    const emprestimo = await Emprestimo.create({ usuarioId, livroId });
    await axios.patch(`http://localhost:3000/livros/${livroId}`, { disponivel: false });

    res.status(201).json(emprestimo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listarEmprestimos = async (req, res) => {
    try {
      const emprestimos = await Emprestimo.findAll();
      res.status(200).json(emprestimos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.registrarDevolucao = async (req, res) => {
    const { id } = req.params;
  
    try {
      const emprestimo = await Emprestimo.findByPk(id);
  
      if (!emprestimo) {
        return res.status(404).json({ error: 'Empréstimo não encontrado' });
      }
  
      if (emprestimo.dataDevolucao) {
        return res.status(400).json({ error: 'Livro já devolvido' });
      }
  
      emprestimo.dataDevolucao = new Date();
      await emprestimo.save();
  
      await axios.patch(`http://localhost:3000/livros/${emprestimo.livroId}`, { disponivel: true });
  
      res.status(200).json(emprestimo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
