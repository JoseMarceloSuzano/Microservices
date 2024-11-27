const { DataTypes } = require('sequelize');
const sequelize = require('../../database/database');

const User = sequelize.define('User', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  nascimento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = User;