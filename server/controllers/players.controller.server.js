// server/controllers/players.controller.server.js

const playersService = require("../services/player.service.server");

const getJugadores = (req, res) => {
  res.send(playersService.getJugadores());
};

const playRound = (req, res) => {
  const { id } = req.params;
  const { nombre, seleccion } = req.body;
  playersService.addOrUpdateJugador({ id, nombre, seleccion });
  res.send(playersService.getJugadores());
};

module.exports = { getJugadores, playRound };
