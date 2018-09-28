const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");
const bodyParser = require("body-parser");

// express doesn't know how to handle cookies
const cookieSession = require("cookie-session");

// models initilization
require("./models/User");

// passport setup
require("./config/passport");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();

// middleware setup
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

const PORT = process.env.PORT || 5000;
app.listen(PORT);
