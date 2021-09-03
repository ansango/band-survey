const BandList = require("./band-list");

class Sockets {
  constructor(io) {
    this.io = io;
    this.bandList = new BandList();
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      console.log("client connected");

      // emit to client all bands

      socket.emit("currentBands", this.bandList.getBands());
    });
  }
}

module.exports = Sockets;
