const express = require('express');
const router = express.Router();

const generator = require('../generator.js');

/* GET game page. */
router.get('/', async (req, res, err) => {
  res.render('game', {
    characters: generator.generateGrid(),
  });
});

module.exports = router;
