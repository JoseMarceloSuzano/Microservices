const { DataTypes } = require('sequelize');
const sequelize = require('../../database/database');

const Emprestimo = sequelize.define('Emprestimo', {
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  livroId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dataEmprestimo: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  dataDevolucao: {
    type: DataTypes.DATE,
  },
});

module.exports = Emprestimo;
