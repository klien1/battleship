const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");
const bodyParser = require("body-parser");

// express doesn't know how to handle cookies
const cookieSession = require("cookie-session");

// models initilization
require("./models/User");
// require("./models/Lobby");
require("./models/Game");

// passport setup
require("./config/passport");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const socketPORT = process.env.PORT || 5000;
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);

require("./services/socketio")(io);
require("./config/requestLimit")(app);

// Middleware
app.use(
  cookieSession({
    maxAge: 1000 * 60 * 60 * 24,
    keys: [keys.secretCookieKey]
  })
);

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/authRoutes")(app);
require("./routes/lobbyRoutes")(app, io);
require("./routes/gameRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
server.listen(socketPORT);
