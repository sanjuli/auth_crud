// /backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Ruta de registro
router.post('/register', async (req, res) => {
  const { usuario, contrasenna } = req.body;

  if (!usuario || !contrasenna) {
    return res.status(400).json({ error: 'Usuario y contraseña son obligatorios' });
  }

  // Verificar si el usuario ya existe
  const userExists = await User.findOne({ where: { usuario } });

  if (userExists) {
    return res.status(400).json({ error: 'El usuario ya existe' });
  }

  try {
    // Registrar nuevo usuario si no existe
    const newUser = await User.create({
      usuario,
      contrasenna,
    });
    return res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (err) {
    console.error('Error al registrar el usuario:', err);
    return res.status(500).json({ error: 'Hubo un problema al registrar el usuario' });
  }
});




require('dotenv').config();

// Ruta de login
// Si la ruta es '/api/auth/login'
app.post('/api/auth/login', async (req, res) => {
  const { usuario, contrasenna } = req.body;

  try {
    const user = await User.findOne({ where: { usuario } });
    if (!user) {
      return res.status(400).send('Usuario no encontrado');
    }

    // Comparar la contraseña con el hash almacenado
    const match = await bcrypt.compare(contrasenna, user.contrasenna);
    if (!match) {
      return res.status(400).send('Contraseña incorrecta');
    }

    // Generar un JWT (si las credenciales son correctas)
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error al hacer login:', error);
    res.status(500).send('Error interno del servidor');
  }
});



module.exports = router;
