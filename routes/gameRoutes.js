const Game = require("mongoose").model("Game");
const bcrypt = require("bcryptjs");
const requireLogin = require("../middleware/requireLogin");

module.exports = app => {
  app.get("/api/gamelist", requireLogin, async (req, res) => {
    const gameList = await Game.find({});
    res.send(gameList);
  });

  app.post("/api/create_game", requireLogin, async (req, res) => {
    const { name, password, spectate } = req.body;
    const gameExists = await Game.findOne({ name });
    if (gameExists) return res.send({ error: true });

    const gameObject = {
      name,
      host: req.user.username,
      _user: req.user.id,
      spectate
    };

    if (password) {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) return res.send(err);
        gameObject.password = hash;
      });
    }
    const newGame = await new Game(gameObject).save();
    res.send({ id: newGame._id });
  });
};
