class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      const id = socket.id;
      socket.on("messageToServer", (res) => {
        console.log({ id, res });
        this.io.emit("messageFromServer", res);
      });
    });
  }
}

module.exports = Sockets;
