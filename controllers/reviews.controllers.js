/*
===========================Reviews API=========================
1.GET Reviews
2.POST Reviews
3.PATCH Reviews

===========================Reviews API=========================
*/

const Review = require("../models/reviews.model");
const mongoose = require("mongoose");

//1. GET all Reviews

const getAllReview = async (req, res) => {
  try {
    const Reviews = await Review.find({});
    res.status(200).send(Reviews);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createNewReview = async (req, res) => {
  try {
    const newReview = new Testimonial({
      name: req.body.name,
      img: req.body.img,
      user: req.body.user,
      profession: req.body.profession,
      ratting: Number(req.body.ratting),
      comment: rea.body.comment,
    });
    await newReview.save();
    res.status(201).send(newReview);
  } catch (error) {
    res.status(500).send("Something Wrong");
  }
};

module.exports = {
  getAllReview,
  createNewReview,
};
