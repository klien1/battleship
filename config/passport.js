const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  "login",
  new LocalStrategy(async (username, password, done) => {
    const existingUser = await User.findOne({ username });
    if (existingUser && !existingUser.online) {
      const checkPassword = await bcrypt.compare(
        password,
        existingUser.passwordHash
      );
      if (checkPassword) {
        existingUser.online = true;
        const onlineUser = await existingUser.save();
        return done(null, onlineUser);
      }
      return done({
        error: {
          password: "Incorrect password",
          _error: "Login Failure."
        }
      });
    } else if (existingUser && existingUser.online) {
      return done({
        error: {
          username: "User currently logged in.",
          _error: "Login Failure."
        }
      });
    }
    return done({
      error: {
        username: "User not found",
        _error: "Login Failure."
      }
    });
  })
);

passport.use(
  "signup",
  new LocalStrategy(async (username, password, done) => {
    const existingUser = await User.findOne({ username });
    if (existingUser)
      return done({
        error: {
          username: "Username already exists",
          _error: "User Creation Error"
        }
      });
    else {
      const SALT_ROUNDS = 12;
      bcrypt.hash(password, SALT_ROUNDS, async (err, hash) => {
        if (err)
          return done({
            error: {
              password: "Error creating password",
              _error: "User Creation Error"
            }
          });
        const newUser = await new User({
          username,
          passwordHash: hash,
          online: true
        }).save();
        return done(null, newUser);
      });
    }
  })
);
