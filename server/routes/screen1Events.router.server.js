// server/routes/screen1Events.router.server.js

const express = require("express");
const router = express.Router();
const gameController = require("../controllers/game.controller.server");

router.get("/check", gameController.checkGame);
router.post("/reset", gameController.resetGame);
router.post("/start", gameController.startGame);

module.exports = router;
