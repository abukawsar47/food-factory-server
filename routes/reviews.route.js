const express = require("express");
const { route } = require("../app");

const router = express.Router();

/*reviews API
1. GET all reviews
2. POST new reviews
*/
router.get("/");
router.post("/");
router.patch("/");

module.exports = route;
