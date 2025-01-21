// /backend/config/database.js
const { Sequelize } = require('sequelize');

// Configuración de la base de datos
const sequelize = new Sequelize('metroBD', 'postgres', 'j', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Para no mostrar los logs de SQL
});

// Probar la conexión
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a PostgreSQL establecida con éxito');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

testConnection();

module.exports = sequelize;
