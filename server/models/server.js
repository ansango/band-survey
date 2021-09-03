const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");
const cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = http.createServer(this.app);
    this.io = socketIo(this.server, {
      /**settings */
    });
  }

  middleware() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));
    this.app.use(cors());
  }

  setupSockets() {
    new Sockets(this.io);
  }

  execute() {
    this.middleware();
    this.setupSockets();
    this.server.listen(this.port, () =>
      console.log(`Server running in: ${this.port}`)
    );
  }
}

module.exports = Server;
