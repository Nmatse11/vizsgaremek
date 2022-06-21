const express = require('express');
const User = require('../../model/user.model');
const jwt = require('jsonwebtoken');

const refreshTokens = [];

module.exports.login = async (req, res, next) => {

  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.sendStatus(404);
  }

  const valid = user.verifyPasswordSync(password);
  if (valid) {
    const accessToken = jwt.sign({
      _id: user._id,
      email: user.email,
      role: user.role,
    }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRY,
    });

    const refreshToken = jwt.sign({
      email: user.email,
      role: user.role
    }, process.env.REFRESH_TOKEN_SECRET);
    refreshTokens.push(refreshToken);

    res.json({
      success: true,
      accessToken,
      user: { ...user._doc, password: '' },
    });
  } else {
    return res.sendStatus(401);
  }
};

module.exports.refresh = (req, res, next) => {
  const { token } = req.body;

  if (!token) {
    return res.sendStatus(401);
  }

  if (!refreshTokens.includes(token)) {
    console.log(refreshTokens, token);
    return res.sendStatus(403);
  }

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    const valid = user.verifyPasswordSync(password);
    if (valid) {
      const accessToken = jwt.sign({
        email: user.email,
        role: user.role
      }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRY
      });

      res.json({
        accessToken
      })
    } else {
      return res.sendStatus(401);
    }
  });
};

module.exports.logout = (req, res) => {
  const { token } = req.body;

  if (!refreshTokens.includes(token)) {
    res.sendStatus(403);
  }

  const tokenIndex = refreshTokens.indexOf(token);
  refreshTokens.splice(tokenIndex, 1);

  res.sendStatus(200);
};