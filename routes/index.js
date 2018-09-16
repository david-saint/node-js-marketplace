const express = require('express');
// Controllers
const storeController = require('../controllers/storeController');

const router = express.Router();

// Do work here
router.get('/', storeController.storesMiddleware, storeController.homePage);

module.exports = router;
