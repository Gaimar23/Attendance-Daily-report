const { Router } = require("express");
const {
  addRecordAfternoon,
  addRecordMorning,
  getAllRecords,
  allEmployeeRecords,
  updateRecord,
  deleteRecord,
} = require("../controllers/attendController");

const routerRec = Router();

routerRec.post("/employees/user/:employee_id", addRecordMorning);
routerRec.get("/employees/user/all", getAllRecords);
routerRec.get("/employees/user/:employee_id", allEmployeeRecords);
routerRec.put("/employees/user/:id", updateRecord);
routerRec.delete("/employees/user/:id", deleteRecord);
routerRec.put("/employees/user/afternoon/:employee_id", addRecordAfternoon);

module.exports = routerRec;
