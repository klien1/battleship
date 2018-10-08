const mongoose = require("mongoose");
const { Schema } = mongoose;

const gameSchema = new Schema({
  name: { type: String, unique: true, required: true },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  host: String,
  numPlayers: { type: Number, default: 1 },
  password: { type: String, default: null },
  spectate: Boolean,
  inProgress: { type: Boolean, default: false }
});

mongoose.model("Game", gameSchema);
