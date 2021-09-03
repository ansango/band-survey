const { v4: uuidv4 } = require("uuid");

const colorRandom = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

class Band {
  constructor(name) {
    this.id = uuidv4();
    this.name = name;
    this.votes = 0;
    this.color = colorRandom();
  }
}

module.exports = Band;
