import React from "react";
import "./editEmployee.css";
import { ImCross } from "react-icons/im";

const EditEmployee = ({
  closeform04,
  privileges,
  usePrivilege,
  setUsePrivilege,
  activityState,
  isEmpActive,
  setIsEmpActive,
  empId,
  setEmpId,
  empLname,
  setEmpLname,
  empFname,
  setEmpFname,
  empEmail,
  setEmpEmail,
  empPass,
  setEmpPass,
  hiringDate,
  setHiringDate,
  UpdateEmployee,
}) => {
  return (
    <div className="formContainer04" id="formContainer04">
      <form action="" className="formData04" onSubmit={UpdateEmployee}>
        <div className="closeForm04" onClick={closeform04}>
          <ImCross size={18} />
        </div>
        <h3
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "35px",
            marginBottom: "10px",
            color: "white",
          }}
        >
          Employee
        </h3>
        <div className="info01">
          <div className="left">
            <input
              type="text"
              placeholder="ID"
              className="inputCommon"
              value={empId}
              onChange={(e) => setEmpId(e.target.value)}
              disabled
            />
            <input
              type="text"
              placeholder="last Name"
              className="inputCommon"
              value={empLname}
              onChange={(e) => setEmpLname(e.target.value)}
            />
            <input
              type="text"
              placeholder="first Name"
              className="inputCommon"
              value={empFname}
              onChange={(e) => setEmpFname(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              className="inputCommon"
              value={empEmail}
              onChange={(e) => setEmpEmail(e.target.value)}
            />
          </div>
          <div className="right">
            <select
              value={usePrivilege}
              onChange={(e) => setUsePrivilege(e.target.value)}
              className="inputCommon"
            >
              {privileges.map((privilege) => {
                return (
                  <option value={privilege.value} key={privilege.value}>
                    {privilege.label}
                  </option>
                );
              })}
            </select>
            <input
              type="password"
              placeholder="Password"
              className="inputCommon"
              value={empPass}
              onChange={(e) => setEmpPass(e.target.value)}
            />
            <input
              type="date"
              placeholder="hiring date"
              className="selectCommon"
              value={hiringDate}
              onChange={(e) => setHiringDate(e.target.value)}
            />
            <select
              value={isEmpActive}
              onChange={(e) => setIsEmpActive(e.target.value)}
              className="selectCommon"
            >
              {activityState.map((empState) => {
                return (
                  <option value={empState.value} key={empState.value}>
                    {empState.label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {/* <div className="info02"></div> */}
        <div className="btns">
          <button className="btnAction">Cancel</button>
          <input
            type="submit"
            value="Save"
            className="btnAction"
            onClick={UpdateEmployee}
          />
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
