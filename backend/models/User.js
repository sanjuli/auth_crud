// Importar Sequelize
const { DataTypes } = require('sequelize');

// Importar la instancia de sequelize desde tu archivo de configuración
const sequelize = require('../config/database');  // Ajusta la ruta según sea necesario

// Definir el modelo
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contrasenna: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'usuario',  // Nombre de la tabla
  timestamps: false,  // Desactivar los timestamps
});

module.exports = User;
