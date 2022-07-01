/*
===========================Foods API=========================
1.GET All Foods
2.POST New Food
3.GET Food By ID
4.DELETE Food By ID
===========================Foods API=========================
*/
const Food = require('../models/Foods.model');


//1. GET all foods 

const getAllFoods = (req, res) => {
    res.status(200).send({ message: "all foods here" })
}
const createNewFood = async (req, res) => {

  try {
    const newFood = new Food({
        name:  request.body.name,
        price:  request.body.price,
        description:  request.body.description,
        img:  request.body.img,
        available:  request.body.available,       
    })
     await newFood.save();
    res.status(201).send(newFood)
  } catch (error) {
    res.status(500).send(error.message);
  }

}

module.exports = {
    getAllFoods, createNewFood
}
