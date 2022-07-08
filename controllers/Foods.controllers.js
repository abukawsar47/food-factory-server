/*
===========================Foods API=========================
1.GET All Foods
2.POST New Food
3.GET Food By ID
4.DELETE Food By ID
===========================Foods API=========================
*/
const { query } = require("express");
const Food = require("../models/Foods.model");
const mongoose = require("mongoose");


//1. GET all foods

//1. GET all foods 


const getAllFoods = async (req, res) => {
  try {
    const allFoods = await Food.find({});
    res.status(200).send(allFoods);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneFood = async (req, res) => {
  try {
    const _id = req.params.id;
    const food = await Food.findOne({ _id })
    res.status(201).send(food);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const createNewFood = async (req, res) => {

  try {
    const newFood = new Food({
      name: req.body.name,
      price: Number(req.body.price),
      description: req.body.description,
      img: req.body.img,
      available: Number(req.body.available),
    })
    await newFood.save();
    res.status(201).send(newFood)
  } catch (error) {
    res.status(500).send("Something Wrong");
  }

}

/* const updateFood = async (req, res) => {
  try {

  } catch (error) {
    res.status(500).send("Something Wrong Can not updated");
  }
} */

const deleteFood = async (req, res) => {
  try {
    await Food.deleteOne({
      id: mongoose.Schema.ObjectId(id)
    })
    res.status(200).send({ message: "all foods here" });
  } catch (error) {
    res.status(500).send(error.message);
  }
}




module.exports = {
  getAllFoods,
  createNewFood,
  getOneFood,
  deleteFood,
};
