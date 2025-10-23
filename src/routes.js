const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hola desde my-app!',
    version: process.env.APP_VERSION || 'dev'
  });
});

router.get('/time', (req, res) => {
  res.json({ now: new Date().toISOString() });
});

module.exports = router;
