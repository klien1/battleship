const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  passwordHash: String,
  online: { type: Boolean, default: false }
});

mongoose.model("users", userSchema);
