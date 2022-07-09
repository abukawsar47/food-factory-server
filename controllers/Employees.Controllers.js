/*
===========================Employee API=========================
1.GET All Employee
2.POST New Employee
3.GET Employee By ID
4.DELETE Employee By ID
===========================Employee API=========================
*/
const { query } = require("express");
const Employee = require("../models/Employee.model");
const mongoose = require("mongoose");

//1. GET All Employees

const getAllEmployees = async (req, res) => {
  try {
    const allEmployees = await Employee.find({});
    res.status(200).send(allEmployees);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneEmployee = async (req, res) => {
  try {
    const _id = req.params.id;
    const employee = await Employee.findOne({ _id });
    res.status(201).send(employee);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createNewEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee({
      name: req.body.name,
      number: Number(req.body.number),
      email: req.body.email,
      role: req.body.role,
      img: req.body.img,
    });
    await newEmployee.save();
    res.status(201).send(newEmployee);
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

const deleteEmployee = async (req, res) => {
  try {
    await Employee.deleteOne({
      id: mongoose.Schema.ObjectId(id),
    });
    res.status(200).send({ message: "Employee has deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllEmployees,
  createNewEmployee,
  getOneEmployee,
  deleteEmployee,
};
