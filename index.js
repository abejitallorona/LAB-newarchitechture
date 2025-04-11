// server/server.js

const express = require("express");
const path = require("path");
const { createServer } = require("http");
const usersRouter = require("./server/routes/users.router.server");
const screen1EventsRouter = require("./server/routes/screen1Events.router.server");
const { initSocketInstance } = require("./server/services/socket.service.server");

const PORT = 5050;
const app = express();
const httpServer = createServer(app);

// Middlewares
app.use(express.json());
// Se sirven los archivos estáticos desde las carpetas client y client2
app.use("/client", express.static(path.join(__dirname, "../app1")));
app.use("/client2", express.static(path.join(__dirname, "../app2")));

// Rutas
app.use("/", usersRouter);
app.use("/", screen1EventsRouter);

// Servicio de sockets (placeholder)
initSocketInstance(httpServer);

httpServer.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
