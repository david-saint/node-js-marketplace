const express = require('express');
const { catchErrors } = require('../handlers/errorHandlers');
// Controllers
const storeController = require('../controllers/storeController');

const router = express.Router();

// Do work here
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.get('/stores', storeController.getStores);
router.post('/add', catchErrors(storeController.createStore));

module.exports = router;
