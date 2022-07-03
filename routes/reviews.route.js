const express = require("express");
const {
    getAllReview,
    createNewReview,
} = require("../controllers/reviews.controllers");

const router = express.Router();

/*reviews API
1. GET all reviews
2. POST new reviews
*/
router.get("/", getAllReview);
router.post("/", createNewReview);
router.patch("/", (req, res) => {
    res.send({ message: "Everything is ok" });
});

module.exports = router;
