const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

// App Routes

module.exports = router; // exporting routes in app.js so they can be used

router.get('/api/food/', foodController.listFoods)