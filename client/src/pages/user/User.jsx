import React, { useEffect, useState } from "react";
import "./user.css";
import { auth } from "../home/Home";
import EmpRecords from "../../components/emplRecords/EmpRecords";
import { afternoon, getEmployeeRecords, morning } from "../../utils/Api";
import DailyReport from "../../components/dailyReport/DailyReport";

const User = () => {
  const [emplRecords, setEmplRecords] = useState([]);
  const [report, setReport] = useState("");
  const formContainer = document.getElementById("formContainer");

  // const [idsEmpRecords, setIdsEmpRecords] = useState([]);
  const idEmpl = auth[0].id || "";

  useEffect(() => {
    getEmployeeRecords(idEmpl, setEmplRecords);
  }, []);

  const handleSubmitAfternoon = (e) => {
    e.preventDefault();
    afternoon(idEmpl, setEmplRecords, report);
    setReport("");
    closeForm();
  };

  function displayForm() {
    formContainer.style.display = "block";
  }

  function closeForm() {
    formContainer.style.display = "none";
  }

  // const morningRegistration = () => {
  //   //
  //   morning()
  // };

  // const afternoonRegistration = () => {
  //   //
  //   afternoon()
  // };

  return (
    <div className="userEmp">
      <div className="containerUser">
        <h4 className="welcome">
          Hello <span>{auth.at(0).first_name || ""}</span> What's up today ..?
        </h4>
        <div className="buttons">
          <button
            className="morning btn"
            onClick={() => morning(idEmpl, setEmplRecords)}
          >
            Morning
          </button>
          <button
            className="afternoon btn"
            // onClick={() => afternoon(idEmpl, setEmplRecords)}
            onClick={displayForm}
          >
            Afternoon
          </button>
        </div>
        <div className="tableData">
          <EmpRecords
            rows={emplRecords}
            // idsEmpRecords={idsEmpRecords}
            // setIdsEmpRecords={setIdsEmpRecords}
          />
        </div>
        <DailyReport
          report={report}
          setReport={setReport}
          handleSubmitAfternoon={handleSubmitAfternoon}
          closeForm={closeForm}
        />
      </div>
    </div>
  );
};

export default User;
