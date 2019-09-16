const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const express = require('express');
const router = express.Router();

router.get('/', [auth, admin], (req, res) => {
  res.sendFile('admin.html', { root: './public' });
});

module.exports = router;
