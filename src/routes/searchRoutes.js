const express = require('express');
const { searchItems } = require('../controllers/searchController');

const router = express.Router();

router.post('/search', searchItems);

module.exports = router;