import React, { useEffect, useState } from "react";
import "./admin.css";
import { FaFolderOpen } from "react-icons/fa6";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import {
  addingEmployee,
  deleteEmpRecord,
  getAllEmployees,
  getAllRecords,
  updateEmployee,
  updateRecord,
} from "../../utils/Api";
import AllRecords from "../../components/allRecords/AllRecords";
import Users from "../../components/users/Users";
import EditRecords from "../../components/editRecords/EditRecords";
import EditEmployee from "../../components/editEmployee/EditEmployee";
import AddEmployee from "../../components/addEmployee/AddEmployee";
import logoCompany from "../../assets/images/logoCompany.jpg";
// import { MdDelete } from "react-icons/md";
// import { MdEdit } from "react-icons/md";

const Admin = () => {
  const [allRecords, setAllRecords] = useState([]);
  const [employeesData, setEmployeesData] = useState([]);
  const registrations = document.getElementById("allrecords");
  const employees = document.getElementById("allUsers");
  const [idsRecords, setIdsRecords] = useState([]);

  //
  const formContainer03 = document.getElementById("formContainer03");
  const formContainer04 = document.getElementById("formContainer04");
  const formContainer05 = document.getElementById("formContainer05");

  //Records
  const [id, setId] = useState("");
  const [workday, setWorkday] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [morning, setMorning] = useState("");
  const [afternoon, setAfternoon] = useState("");
  const [reportDay, setReportDay] = useState("");

  //Employees
  const [idsEmployee, setIdsEmployee] = useState([]);

  //

  // Edit employees
  const privileges = [
    { value: "user", label: "User" },
    { value: "admin", label: "Admin" },
    { value: "super", label: "Super" },
  ];

  const activityState = [
    { value: true, label: "True" },
    { value: false, label: "False" },
  ];

  const [usePrivilege, setUsePrivilege] = useState(privileges.at(0).value);
  const [isEmpActive, setIsEmpActive] = useState(activityState[0].value);
  const [empId, setEmpId] = useState("");
  const [empLname, setEmpLname] = useState("");
  const [empFname, setEmpFname] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empPass, setEmpPass] = useState("");
  const [hiringDate, setHiringDate] = useState("");
  //

  useEffect(() => {
    getAllRecords(setAllRecords);
    getAllEmployees(setEmployeesData);
  }, []);

  useEffect(() => {
    console.log(idsRecords);
  }, [idsRecords]);

  setTimeout(() => {
    document.getElementById("adminNav").classList.add("animation");
  }, 2000);

  function handleUsers() {
    registrations.style.display = "none";
    employees.style.display = "block";
  }

  function deleteRecord() {
    // if (idsRecords.length >= 1) {
    idsRecords.forEach((id) => {
      deleteEmpRecord(id, setAllRecords);
    });
    // }
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    updateRecord(id, setAllRecords, morning, afternoon, workday, reportDay);
    closeform03();
  };

  const UpdateEmpl = (e) => {
    e.preventDefault();
    updateEmployee(
      empId,
      empLname,
      empFname,
      empEmail,
      usePrivilege,
      empPass,
      hiringDate,
      setEmployeesData
    );

    closeform04();
  };

  const AddNewEmployee = (e) => {
    e.preventDefault();
    addingEmployee(
      empLname,
      empFname,
      empEmail,
      usePrivilege,
      empPass,
      hiringDate,
      setEmployeesData
    );
    setUsePrivilege(privileges.at(0).value);
    setIsEmpActive(activityState[0].value);
    setEmpLname("");
    setEmpFname("");
    setEmpEmail("");
    setEmpPass("");
    setHiringDate("");

    closeform05();
  };

  function closeform03() {
    formContainer03.style.display = "none";
  }

  function closeform04() {
    setUsePrivilege(privileges.at(0).value);
    setIsEmpActive(activityState[0].value);
    setEmpId("");
    setEmpLname("");
    setEmpFname("");
    setEmpEmail("");
    setEmpPass("");
    setHiringDate("");

    formContainer04.style.display = "none";
  }

  function closeform05() {
    formContainer05.style.display = "none";
  }

  function displayForm03() {
    formContainer03.style.display = "block";
  }

  function displayForm04() {
    formContainer04.style.display = "block";
  }

  function displayForm05() {
    formContainer05.style.display = "block";
  }

  return (
    <div className="admin">
      <div className="logoCompany">
        <span>Rise</span>
      </div>
      <div className="monLogo">
        <img
          src={logoCompany}
          alt="logo"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            position: "absolute",
            top: "70px",
            left: "220px",
          }}
        />
      </div>
      <div className="adminNav" id="adminNav">
        <div className="cardNav" onClick={handleUsers}>
          {/* icon */}
          <RiTeamFill size={35} style={{ color: "rgb(74, 224, 217)" }} />
          <span style={{ color: "rgb(74, 224, 217)", fontWeight: "800" }}>
            Users
          </span>
        </div>
        <div className="cardNav" onClick={displayForm05}>
          {/* icon */}
          <BsFillPersonPlusFill
            size={35}
            style={{ color: "rgb(74, 224, 217)" }}
          />
          <span style={{ color: "rgb(74, 224, 217)", fontWeight: "800" }}>
            Add Users
          </span>
        </div>
        <div className="cardNav">
          {/* icon */}
          <FaFolderOpen size={35} style={{ color: "rgb(74, 224, 217)" }} />
          <span style={{ color: "rgb(74, 224, 217)", fontWeight: "800" }}>
            Records
          </span>
        </div>
      </div>
      <div className="dataTables">
        <AllRecords
          rows={allRecords}
          setIdsRecords={setIdsRecords}
          idsRecords={idsRecords}
          deleteRecord={deleteRecord}
          setId={setId}
          setWorkday={setWorkday}
          setFirstName={setFirstName}
          setEmail={setEmail}
          setMorning={setMorning}
          setAfternoon={setAfternoon}
          setReportDay={setReportDay}
          displayForm03={displayForm03}
        />
        <Users
          rows={employeesData}
          // idsEmpRecords={idsEmpRecords}
          // setIdsEmpRecords={setIdsEmpRecords}
          setEmpFname={setEmpFname}
          setEmpId={setEmpId}
          setEmpLname={setEmpLname}
          setEmpEmail={setEmpEmail}
          setEmpPass={setEmpPass}
          setIsEmpActive={setIsEmpActive}
          setUsePrivilege={setUsePrivilege}
          idsEmployee={idsEmployee}
          setIdsEmployee={setIdsEmployee}
          displayForm04={displayForm04}
          setHiringDate={setHiringDate}
        />
      </div>
      <EditRecords
        closeform03={closeform03}
        id={id}
        setId={setId}
        workday={workday}
        setWorkday={setWorkday}
        firstName={firstName}
        setFirstName={setFirstName}
        email={email}
        setEmail={setEmail}
        morning={morning}
        setMorning={setMorning}
        afternoon={afternoon}
        setAfternoon={setAfternoon}
        reportDay={reportDay}
        setReportDay={setReportDay}
        handleUpdate={handleUpdate}
      />
      <EditEmployee
        privileges={privileges}
        usePrivilege={usePrivilege}
        setUsePrivilege={setUsePrivilege}
        activityState={activityState}
        isEmpActive={isEmpActive}
        setIsEmpActive={setIsEmpActive}
        empId={empId}
        setEmpId={setEmpId}
        empLname={empLname}
        setEmpLname={setEmpLname}
        empFname={empFname}
        setEmpFname={setEmpFname}
        empEmail={empEmail}
        setEmpEmail={setEmpEmail}
        empPass={empPass}
        setEmpPass={setEmpPass}
        hiringDate={hiringDate}
        setHiringDate={setHiringDate}
        UpdateEmployee={UpdateEmpl}
        closeform04={closeform04}
      />
      <AddEmployee
        privileges={privileges}
        activityState={activityState}
        usePrivilege={usePrivilege}
        setUsePrivilege={setUsePrivilege}
        isEmpActive={isEmpActive}
        setIsEmpActive={setIsEmpActive}
        empLname={empLname}
        setEmpLname={setEmpLname}
        empFname={empFname}
        setEmpFname={setEmpFname}
        empEmail={empEmail}
        setEmpEmail={setEmpEmail}
        empPass={empPass}
        setEmpPass={setEmpPass}
        hiringDate={hiringDate}
        setHiringDate={setHiringDate}
        closeform05={closeform05}
        AddNewEmployee={AddNewEmployee}
      />
    </div>
  );
};

export default Admin;
