const { Router } = require("express");

const {
  getEmployees,
  addEmployee,
  theEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/empController");

const router = Router();

router.get("/employees", getEmployees);
router.post("/employees", addEmployee);
router.get("/employees/:employee_id", theEmployee);
router.put("/employees/:employee_id", updateEmployee);
router.delete("/employees/:employee_id", deleteEmployee);

module.exports = router;
