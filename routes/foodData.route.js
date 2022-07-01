const express = require('express');
const { createNewFood, getAllFoods } = require('../controllers/Foods.controllers');

const router = express.Router()
router.get('/', getAllFoods)

router.post('/', createNewFood)


module.exports = router;