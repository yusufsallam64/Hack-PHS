const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, err) => {
  res.render('index', {
    title: 'Word Battle'
  });
});

module.exports = router;
