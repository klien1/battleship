const requireLogin = require("../middleware/requireLogin");
const mongoose = require("mongoose");
const Lobby = mongoose.model("Lobby");

module.exports = (app, io) => {
  app.post("/api/lobby/sendMessage", requireLogin, (req, res) => {
    // console.log("received", req.body.msg);
    io.of("/lobbyChat").emit("chatMessage", {
      username: req.user.username,
      msg: req.body.msg
    });
    res.send("message received");
  });
};
