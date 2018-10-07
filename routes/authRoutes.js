const passport = require("passport");
const requireLogin = require("../middleware/requireLogin");
const User = require("mongoose").model("users");

module.exports = app => {
  app.post("/auth/login", (req, res, next) => {
    passport.authenticate("login", (err, user, info) => {
      if (err) return res.send(err);
      if (!user) return res.send({ error: "no user" });
      req.login(user, err => {
        if (err) return res.send(err);
        return res.send({ id: req.user.id, username: req.user.username });
        // return res.redirect("/lobby");
      });
    })(req, res, next);
  });

  app.post("/auth/signup", (req, res, next) => {
    passport.authenticate("signup", (err, user, info) => {
      if (err) return res.send(err);
      if (!user) return res.send({ error: "trouble creating new user" });
      req.login(user, err => {
        if (err) return res.send(err);
        return res.send({ id: req.user.id, username: req.user.username });
      });
    })(req, res, next);
  });

  app.get("/api/current_user", (req, res) => {
    if (!req.user) res.send("");
    else
      res.send({
        id: req.user.id,
        username: req.user.username
      });
  });

  app.get("/api/logout", requireLogin, async (req, res) => {
    const { username } = req.user;
    await User.findOneAndUpdate({ username }, { $set: { online: false } });
    req.logout();
    res.redirect("/");
  });
};
