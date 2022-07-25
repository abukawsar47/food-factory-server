/*
===========================Foods API=========================
1.GET All Foods
2.POST New Food
3.GET Food By ID
4.DELETE Food By ID
===========================Foods API=========================
*/
const { query } = require("express");
const Order = require("../models/Orders.model");
const mongoose = require("mongoose");

//1. GET all foods

const getAllOrders = async (req, res) => {
  try {
    const allOrders = await Order.find({});
    res.status(200).send(allOrders);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneOrder = async (req, res) => {
  try {
    const _id = req.params.id;
    const order = await Order.findOne({ _id });
    res.status(201).send(order);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createNewOrder = async (req, res) => {
  console.log(req.body);
  try {
    const newOrder = new Order({
      productId: req.body.productId,
      name: req.body.name,
      img: req.body.img,
      price: Number(req.body.price),
      address: req.body.address,
      number: Number(req.body.number),
      orderQuantity: Number(req.body.orderQuantity),
      consumerEmail: req.body.consumerEmail,
      consumerName: req.body.consumerName,
    });
    await newOrder.save();
    res.status(201).send(newOrder);
  } catch (error) {
    res.status(500).send("Something Wrong");
  }
};

/* const updateFood = async (req, res) => {
  try {

  } catch (error) {
    res.status(500).send("Something Wrong Can not updated");
  }
} */

const deleteOrder = async (req, res) => {
  try {
    await Order.deleteOne({
      id: mongoose.Schema.ObjectId(id),
    });
    res.status(200).send({ message: "all foods here" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllOrders, createNewOrder, getOneOrder, deleteOrder };
