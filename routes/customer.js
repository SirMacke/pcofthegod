const auth = require('../middleware/auth');
const express = require('express');
const router = express.Router();

router.get('/', auth, (req, res) => {
  res.sendFile('customer.html', { root: './public' });
})

module.exports = router;
