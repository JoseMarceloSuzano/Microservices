const express = require('express');
const { createBook, getAllBooks, getBookById, updateBookAvailability } = require('../controllers/bookController');

const router = express.Router();

router.post('/livros', createBook);
router.get('/livros', getAllBooks);
router.get('/livros/:id', getBookById);
router.patch('/livros/:id', updateBookAvailability);

module.exports = router;
