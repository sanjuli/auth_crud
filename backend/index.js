const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Importamos cors
const authRoutes = require('./routes/auth');
const authenticateJWT = require('./middleware/authMiddleware');
const sequelize = require('./config/database'); // Conexión a la base de datos

const app = express();

// Usar CORS para permitir solicitudes desde otros orígenes
app.use(cors());


// Middleware para parsear el cuerpo de la solicitud como JSON
app.use(bodyParser.json());

// Usar las rutas de autenticación
app.use('/api/auth', authRoutes);

// Ruta protegida, solo accesible con JWT
app.get('/api/protected', authenticateJWT, (req, res) => {
  res.send('Esta es una ruta protegida');
});

// Iniciar el servidor
app.listen(3000, async () => {
  try {
    // Sincronizar la base de datos
    await sequelize.sync();
    console.log('Servidor iniciado en http://localhost:3000');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
});
