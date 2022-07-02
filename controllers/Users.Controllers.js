const { query } = require('express');

const User = require('../models/User.Model')

const mongoose = require('mongoose');


const registerUser = async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        await newUser.save()
        res.status(200).send(newUser)
    } catch (error) {

    }
}

module.exports = { registerUser }