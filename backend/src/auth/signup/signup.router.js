const express = require('express');
const User = require('../../model/user.model');

const router = express.Router();

router.post('/', async (req, res, next) => {

  const { email, password } = req.body;
  const newUser = new User({
    email: email,
    password: password,
    role: 'customer'
  });

  try {
    await newUser.save();
  } catch (error) {
    res.statusCode = 401;
    return res.json({ error: 'Database Error!' });
  }
  return res.json({ message: 'New User created' });


});

module.exports = router;