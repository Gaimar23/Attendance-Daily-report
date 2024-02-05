const pool = require("../dbConfig");

// Add new record
// Morning
const addRecordMorning = async (req, res) => {
  try {
    const { employee_id } = req.params;
    // const { morning, workday } = req.body;
    const arrivalTime = new Date().toTimeString();
    // const morning = new Date().toLocaleTimeString();
    const morning = arrivalTime.substring(0, 8);

    const theDate = new Date().toLocaleDateString();
    const theDay = new Date(theDate).getDate();
    const theMonth = new Date(theDate).getMonth() + 1;
    const theYear = new Date(theDate).getFullYear();

    const workday = `${theYear}-${theMonth}-${theDay}`;
    // const workday = new Date().toLocaleDateString();
    const newRecord = await pool.query(
      "INSERT INTO attendance (morning,workday,employee_id) VALUES($1,$2,$3) RETURNING * ",
      [morning, workday, employee_id]
    );

    res.json(newRecord.rows);
  } catch (err) {
    console.error(err);
  }
};
// Add new record
// Afternoon
const addRecordAfternoon = async (req, res) => {
  try {
    const { employee_id } = req.params;
    // const { morning, afternoon, workday } = req.body;
    const { report } = req.body;
    // const afternoon = new Date().toLocaleTimeString();
    // const workday = new Date().toLocaleDateString();

    const departureTime = new Date().toTimeString();
    const afternoon = departureTime.substring(0, 8);

    const theDate = new Date().toLocaleDateString();
    const theDay = new Date(theDate).getDate();
    const theMonth = new Date(theDate).getMonth() + 1;
    const theYear = new Date(theDate).getFullYear();

    const workday = `${theYear}-${theMonth}-${theDay}`;

    //
    // const newRecord = await pool.query(
    //   "INSERT INTO attendance (morning,afternoon,workday,employee_id) VALUES($1,$2,$3,$4) RETURNING * ",
    //   [morning, afternoon, workday, employee_id]
    // );
    // res.json(newRecord.rows);

    const emplRecords = await pool.query(
      "SELECT * FROM attendance WHERE workday = CURRENT_DATE AND employee_id = $1",
      [employee_id]
    );
    // res.json(emplRecords.rows);

    if (emplRecords.rows.length == 0) {
      const newRecord = await pool.query(
        "INSERT INTO attendance (afternoon,workday,employee_id,report) VALUES($1,$2,$3,$4) RETURNING * ",
        [afternoon, workday, employee_id, report]
      );
      res.json(newRecord.rows);
    } else {
      const updateRec = await pool.query(
        "UPDATE attendance SET afternoon = $1, report = $2 WHERE id = $3",
        [afternoon, report, emplRecords.rows[0].id]
      );
      res.json(updateRec.rows);
    }
  } catch (err) {
    console.error(err);
  }
};

// Get all records
const getAllRecords = async (req, res) => {
  // try {
  //   const allRecords = await pool.query("SELECT * FROM attendance");
  //   res.json(allRecords.rows);
  // } catch (err) {
  //   console.error(err);
  // }

  try {
    const allRecords = await pool.query(
      "SELECT attendance.id, first_name, email, morning, afternoon, workday, report FROM attendance INNER JOIN employee ON attendance.employee_id = employee.id"
    );
    res.json(allRecords.rows);
  } catch (err) {
    console.error(err);
  }
};

// Get all employee's records
const allEmployeeRecords = async (req, res) => {
  // try {
  //   const { employee_id } = req.params;
  //   const allempRecords = await pool.query(
  //     "SELECT * FROM attendance WHERE employee_id = $1",
  //     [employee_id]
  //   );

  //   res.json(allempRecords.rows);
  // } catch (err) {
  //   console.error(err);
  // }

  try {
    const { employee_id } = req.params;
    const allempRecords = await pool.query(
      "SELECT attendance.id, first_name, email, morning, afternoon, workday, report FROM attendance INNER JOIN employee ON attendance.employee_id = employee.id WHERE employee.id = $1",
      [employee_id]
    );

    res.json(allempRecords.rows);
  } catch (err) {
    console.error(err);
  }
};

// Update records
const updateRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const { morning, afternoon, workday, report } = req.body;
    const updateOne = await pool.query(
      "UPDATE attendance SET morning = $1, afternoon = $2, workday = $3, report = $4 WHERE id = $5",
      [morning, afternoon, workday, report, id]
    );

    res.json("the record has been successfully updated...");
  } catch (err) {
    console.error(err);
  }
};

// Delete a record
const deleteRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteOne = await pool.query("DELETE FROM attendance WHERE id = $1", [
      id,
    ]);

    res.json("Record successfully deleted...");
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addRecordAfternoon,
  addRecordMorning,
  getAllRecords,
  allEmployeeRecords,
  updateRecord,
  deleteRecord,
};
