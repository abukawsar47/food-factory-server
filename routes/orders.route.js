const express = require("express");
const {
  getAllOrders,
  getOneOrder,
  createNewOrder,
  deleteOrder,
} = require("../controllers/Orders.Controllers");

const router = express.Router();
router.get("/", getAllOrders);
router.get("/:id", getOneOrder);
router.post("/", createNewOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
