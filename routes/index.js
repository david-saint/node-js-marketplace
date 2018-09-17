const express = require('express');
const { catchErrors } = require('../handlers/errorHandlers');
// Controllers
const storeController = require('../controllers/storeController');

const router = express.Router();

// Do work here
router.get('/', catchErrors(storeController.homePage));
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));
router.post('/add/:id', catchErrors(storeController.updateStore));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/stores/:id/edit', catchErrors(storeController.editStore));

module.exports = router;
