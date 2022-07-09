const express = require("express");
const {
  getAllEmployees,
  getOneEmployee,
  createNewEmployee,
  deleteEmployee,
} = require("../controllers/Employees.Controllers");

const router = express.Router();
router.get("/", getAllEmployees);
router.get("/:id", getOneEmployee);
router.post("/", createNewEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;
