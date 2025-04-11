// server/routes/users.router.server.js

const express = require("express");
const router = express.Router();
const playersController = require("../controllers/players.controller.server");

router.get("/users", playersController.getJugadores);
router.post("/play-round/:id", playersController.playRound);

module.exports = router;
