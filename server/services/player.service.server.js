// server/services/players.service.server.js

const db = require("../db/users.db.js");

const getJugadores = () => db.jugadores;

const addOrUpdateJugador = (jugador) => {
  const { id, nombre, seleccion } = jugador;
  const index = db.jugadores.findIndex(j => j.id == id);
  if (index >= 0) {
    db.jugadores[index] = { id, nombre, seleccion };
  } else {
    db.jugadores.push({ id, nombre, seleccion });
  }
};

const resetJugadores = () => {
  db.jugadores = [];
};

const getActivePlayers = () => {
  const data = [];
  db.jugadores.forEach(jugador => {
    if (data.length < 2) {
      data.push({
        nombre: jugador.nombre || "Vacío",
        seleccion: jugador.seleccion || "Vacío"
      });
    }
  });
  return data;
};

module.exports = {
  getJugadores,
  addOrUpdateJugador,
  resetJugadores,
  getActivePlayers
};
