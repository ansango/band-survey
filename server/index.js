const Server = require("./models/server");
const env = require("dotenv");
env.config();
const server = new Server();
server.execute();
