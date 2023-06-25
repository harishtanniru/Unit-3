const BaseController = require("./baseController");
const PlayerModel = require("../models/players");
class Player extends BaseController {
  constructor() {
    super(Player, PlayerModel);
  }
}
module.exports = new Player();
