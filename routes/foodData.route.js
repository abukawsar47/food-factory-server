const express = require('express');
const { createNewFood, getAllFoods, deleteFood, getOneFood } = require('../controllers/Foods.controllers');

const router = express.Router()
router.get('/', getAllFoods)
router.get('/:id', getOneFood)
router.post('/', createNewFood)
router.delete('/:id', deleteFood)


module.exports = router;