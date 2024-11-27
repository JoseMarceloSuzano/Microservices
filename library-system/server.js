const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database/database');
const userRoutes = require('./usuarios/routes/userRoutes');
const bookRoutes = require('./livros/routes/bookRoutes');
const emprestimoRoutes = require('./emprestimos/routes/emprestimoRoutes');


const app = express();
app.use(bodyParser.json());

app.use('/', userRoutes);
app.use('/', bookRoutes);
app.use('/emprestimos', emprestimoRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
  });
