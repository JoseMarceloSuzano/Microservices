const express = require('express');
const router = express.Router();
const emprestimoController = require('../controllers/emprestimoController');

// Registrar um empréstimo
router.post('/', emprestimoController.registrarEmprestimo);

// Listar todos os empréstimos
router.get('/', emprestimoController.listarEmprestimos);

// Registrar devolução
router.post('/:id/devolucao', emprestimoController.registrarDevolucao);

module.exports = router;
