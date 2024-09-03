const jwt = require("jsonwebtoken");
function authenticate(req, res, next) {
  const cookie = req.cookies;
  if (cookie) {
    const token = cookie.token;
    const decode = jwt.verify(token, "sarbjot");
    req.email = decode;
    next();
  } else return res.send({ message: "not authenticated" });
}

module.exports = { authenticate };
