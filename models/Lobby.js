const mongoose = require("mongoose");
const { Schema } = mongoose;

const lobbySchema = new Schema({
  _onlineUser: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("Lobby", lobbySchema);
