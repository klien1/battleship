const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  // console.log("serial user:", user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  // console.log("deserial user:", id);
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  "login",
  new LocalStrategy(async (username, password, done) => {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      // console.log("user found");
      const checkPassword = await bcrypt.compare(
        password,
        existingUser.passwordHash
      );
      if (checkPassword) return done(null, existingUser);
      else return done({ error: "incorrect password" });
    } else return done({ error: "user not found" });
  })
);

passport.use(
  "signup",
  new LocalStrategy(async (username, password, done) => {
    const existingUser = await User.findOne({ username });
    if (existingUser) return done({ error: "username already exists" });
    else {
      const SALT_ROUNDS = 12;
      bcrypt.hash(password, SALT_ROUNDS, async (err, hash) => {
        if (err) return done(err);
        const newUser = await new User({ username, passwordHash: hash }).save();
        return done(null, newUser);
      });
    }
  })
);
