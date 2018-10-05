module.exports = app => {
  const rateLimit = require("express-rate-limit");
  app.enable("trust proxy");
  const limiter = rateLimit({
    windowMs: 1000 * 3, // convert ms to 3 minute
    max: 5 // number of request per window
  });
  app.use(limiter);
};
