// server/controllers/game.controller.server.js

const playersService = require("../services/player.service.server");

const checkGame = (req, res) => {
  res.send(playersService.getActivePlayers());
};

const resetGame = (req, res) => {
  playersService.resetJugadores();
  res.send(playersService.getJugadores());
};

const startGame = (req, res) => {
  res.send(playersService.getJugadores());
};

module.exports = { checkGame, resetGame, startGame };
