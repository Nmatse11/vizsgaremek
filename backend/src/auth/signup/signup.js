const express = require('express');
const User = require('../../model/user.model');

module.exports.signup = async (req, res, next) => {

  const { email, password, customerID } = req.body;
  const newUser = new User({
    email,
    password,
    customerID,
    role: 'customer'
  });

  try {
    await newUser.save();
  } catch (error) {
    res.statusCode = 401;
    return res.json({ error: 'Database Error!' });
  }
  return res.json({ message: 'New User created' });


};