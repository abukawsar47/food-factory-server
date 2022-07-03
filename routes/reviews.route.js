const express = require("express");

const router = express.Router();

/*reviews API
1. GET all reviews
2. POST new reviews
*/
router.get("/", (req, res) => {
    res.send({ message: "Everything is ok" })
});
router.post("/", (req, res) => {
    res.send({ message: "Everything is ok" })
});
router.patch("/", (req, res) => {
    res.send({ message: "Everything is ok" })
});

module.exports = router;
