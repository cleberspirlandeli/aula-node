const express = require('express');
const routes = express.Router();

const UsuarioController = require('../modules/usuario/usuario.controller');

routes.get('/usuario/:id', UsuarioController.GetById);
routes.post('/usuario', UsuarioController.Insert);
routes.delete('/usuario/:id', UsuarioController.Delete);

module.exports = routes;