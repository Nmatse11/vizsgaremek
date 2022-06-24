const express = require('express');
const User = require('../../model/user.model');
const jwt = require('jsonwebtoken');

const refreshTokens = [];

module.exports.login = async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.sendStatus(404);
  }

  const valid = user.verifyPasswordSync(password);
  if (valid) {
    const accessToken = jwt.sign({
      email: user.email,
      costumerID: user.costumerID,
      role: user.role
    }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRY
    });

    const refreshToken = jwt.sign({
      email: user.email,
      costumerID: user.costumerID,
      role: user.role
    }, process.env.REFRESH_TOKEN_SECRET);
    refreshTokens.push(refreshToken)

    res.json({
      success: true,
      accessToken,
      refreshToken,
      user: { ...user._doc, password: '' },
    });
  } else {
    res.send('Username or password incorrect.');
  }
};

module.exports.refresh = (req, res, next) => {
  const { token } = req.body;

  if (!token) {
    return res.sendStatus(401);
  }

  if (!refreshTokens.includes(token)) {
    return res.sendStatus(403);
  }

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403)
    }

    const accessToken = jwt.sign({
      email: user.email,
      costumerID: user.costumerID,
      role: user.role
    }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRY
    });

    res.json({
      success: true,
      accessToken,
      user: { ...user._doc, password: '' },
    });

  });
};

module.exports.logout = (req, res) => {
  const { token } = req.body

  if (!refreshTokens.includes(token)) {
    return res.sendStatus(403);
  }

  const tokenIndex = refreshTokens.indexOf(token)
  refreshTokens.splice[tokenIndex, 1]

  res.sendStatus(200);
}