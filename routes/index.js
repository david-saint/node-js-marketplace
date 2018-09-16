const express = require('express');

const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // console.log('❤🔥 it freaking works');
  const wes = {
    name: req.query.name || 'David Saint',
    age: req.query.age || 21,
    cool: req.query.cool,
    message: 'Hey! It works! ❤🔥',
  };
  res.render('hello');
});

module.exports = router;
