const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  //verify authetication
  const { authorization } = req.headers;
  //if authorizaton is false
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token is required" });
  }

  //token
  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, process.env.SECRET);

    req.user = await User.findOne({ _id: id }).select("_id");

    next();
  } catch (err) {
    res.status(401).json({ error: "Token is not authorized" });
  }
};

module.exports = requireAuth;
