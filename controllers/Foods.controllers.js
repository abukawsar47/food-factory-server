/*
===========================Foods API=========================
1.GET All Foods
2.POST New Food
3.GET Food By ID
4.DELETE Food By ID
===========================Foods API=========================
*/
const { query } = require('express');
const Food = require('../models/Foods.model');
// const {ObjectId} = require('mongodb');
const mongoose = require('mongoose');


//1. GET all foods 

const getAllFoods = (req, res) => {
    res.status(200).send({ message: "all foods here" })
}

const getOneFood = async (req, res) => {
  try {
    const food = await Food.findOne({
      id: mongoose.Schema.ObjectId(id)
    })
    res.status(201).send(newFood);
  } catch (error) {
    res.status(500).send(error.message);
  }
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

const deleteFood = async (req, res) => {
try {
  // const id = req.params.id;
  //  const query = {
  //     mongoose.Schema.ObjectId: ObjectId(id)
  //   }
  Food.deleteOne({
   id: mongoose.Schema.ObjectId(id)
  })
  res.status(200).send({ message: "all foods here" });
  


} catch (error) {
  res.status(500).send(error.message);
}
}
module.exports = {
    getAllFoods, createNewFood , getOneFood, deleteFood
}
