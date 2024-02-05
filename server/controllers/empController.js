const pool = require("../dbConfig");

//Get all employees
const getEmployees = async (req, res) => {
  try {
    const employees = await pool.query("SELECT * FROM employee");
    res.json(employees.rows);
  } catch (err) {
    console.error(err);
  }
};

// Add an employee

const addEmployee = async (req, res) => {
  try {
    const { last_name, first_name, email, privilege, pass, hiring_date } =
      req.body;
    const newGuy = await pool.query(
      "INSERT INTO employee (last_name,first_name,email,privilege,pass,hiring_date) VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ",
      [last_name, first_name, email, privilege, pass, hiring_date]
    );
    res.json(newGuy.rows);
  } catch (err) {
    console.error(err);
  }
};

// get an employee

const theEmployee = async (req, res) => {
  try {
    const bob = 4;
    const sam = 6;
    const jam = 10;
    const { employee_id } = req.params;
    const employee = await pool.query("SELECT * FROM employee WHERE id =$1", [
      employee_id,
    ]);
    res.json(employee.rows);
  } catch (err) {
    console.error(err);
  }
};

// UpdateEmployee

const updateEmployee = async (req, res) => {
  try {
    const { employee_id } = req.params;
    const { last_name, first_name, email, privilege, pass, hiring_date } =
      req.body;

    const updatedEmployee = await pool.query(
      "UPDATE employee SET last_name = $1, first_name = $2, email = $3, privilege =$4, pass = $5, hiring_date =$6 WHERE id = $7",
      [last_name, first_name, email, privilege, pass, hiring_date, employee_id]
    );

    res.json("Employee successfully updated...");
  } catch (err) {
    console.error(err);
  }
};

// Delete an employee

const deleteEmployee = async (req, res) => {
  try {
    const { employee_id } = req.params;
    const employee = await pool.query("DELETE FROM employee WHERE id=$1", [
      employee_id,
    ]);

    res.json("the employee has been successfully deleted");
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getEmployees,
  addEmployee,
  theEmployee,
  updateEmployee,
  deleteEmployee,
};
