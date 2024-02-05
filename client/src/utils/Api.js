import axios from "axios";

async function getAllEmployees(setEmployeesData) {
  const staffData = await fetch("http://localhost:5000/employees");
  if (staffData.ok) {
    const result = await staffData.json();
    console.log(result);
    setEmployeesData(result);
  }
}

async function getAllRecords(setAllRecords) {
  const response = await fetch("http://localhost:5000/employees/user/all");
  if (response.ok) {
    const result = await response.json();
    setAllRecords(result);
  }
}

async function getEmployeeRecords(employee_id, setEmplRecords) {
  const response = await fetch(
    `http://localhost:5000/employees/user/${employee_id}`
  );
  if (response.ok) {
    const result = await response.json();
    setEmplRecords(result);
  }
}

async function morning(employee_id, setEmplRecords) {
  const response = await axios.post(
    `http://localhost:5000/employees/user/${employee_id}`
  );
  getEmployeeRecords(employee_id, setEmplRecords);
}

async function afternoon(employee_id, setEmplRecords, report) {
  const response = await axios.put(
    `http://localhost:5000/employees/user/afternoon/${employee_id}`,
    { report }
  );
  getEmployeeRecords(employee_id, setEmplRecords);
}

async function deleteEmpRecord(record_id, setAllRecords) {
  const response = await axios.delete(
    `http://localhost:5000/employees/user/${record_id}`
  );
  getAllRecords(setAllRecords);
}

async function updateRecord(
  id,
  setAllRecords,
  morning,
  afternoon,
  workday,
  report
) {
  const response = await axios.put(
    `http://localhost:5000/employees/user/${id}`,
    { morning, afternoon, workday, report }
  );
  getAllRecords(setAllRecords);
}

async function updateEmployee(
  id,
  last_name,
  first_name,
  email,
  privilege,
  pass,
  hiring_date,
  setEmployeesData
) {
  const response = await axios.put(`http://localhost:5000/employees/${id}`, {
    last_name,
    first_name,
    email,
    privilege,
    pass,
    hiring_date,
  });
  getAllEmployees(setEmployeesData);
}

async function addingEmployee(
  last_name,
  first_name,
  email,
  privilege,
  pass,
  hiring_date,
  setEmployeesData
) {
  const response = await axios.post(`http://localhost:5000/employees`, {
    last_name,
    first_name,
    email,
    privilege,
    pass,
    hiring_date,
  });
  getAllEmployees(setEmployeesData);
}

export {
  getAllEmployees,
  getAllRecords,
  getEmployeeRecords,
  morning,
  afternoon,
  deleteEmpRecord,
  updateRecord,
  updateEmployee,
  addingEmployee,
};
