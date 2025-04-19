const express = require('express');
const router = express.Router();
const { askDoubt, getDoubts } = require('../controllers/doubtsController');

router.post('/', askDoubt);
router.get('/', getDoubts);

module.exports = router;
