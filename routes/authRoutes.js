const passport = require("passport");

module.exports = app => {
  app.post("/auth/login", (req, res, next) => {
    passport.authenticate("login", (err, user, info) => {
      if (err) return res.send(err);
      if (!user) return res.redirect("/login");
      req.login(user, err => {
        if (err) return res.send(err);
        return res.send({ username: req.user.username });
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
        return res.send({ username: req.user.username });
        // return res.redirect("/lobby");
      });
    })(req, res, next);
  });

  app.get("/api/current_user", (req, res) => {
    if (!req.user) res.send("");
    else
      res.send({
        username: req.user.username
      });
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
