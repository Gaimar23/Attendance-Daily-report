import React from "react";
import "./addEmployee.css";
import { IoMdPersonAdd } from "react-icons/io";
import { ImCross } from "react-icons/im";

const AddEmployee = ({
  closeform05,
  privileges,
  activityState,
  usePrivilege,
  setUsePrivilege,
  isEmpActive,
  setIsEmpActive,
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
  AddNewEmployee,
}) => {
  return (
    <div className="formContainer05" id="formContainer05">
      <form className="formData05" onSubmit={AddNewEmployee}>
        <div className="closeForm05" onClick={closeform05}>
          <ImCross size={18} />
        </div>
        <h3
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "35px",
            marginBottom: "20px",
            color: "white",
          }}
        >
          Employee
        </h3>

        <div className="newOne">
          <div className="left">
            <input
              type="text"
              placeholder="last Name"
              className="inputCommon"
              required
              value={empLname}
              onChange={(e) => setEmpLname(e.target.value)}
            />
            <input
              type="text"
              placeholder="first Name"
              className="inputCommon"
              required
              value={empFname}
              onChange={(e) => setEmpFname(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              className="inputCommon"
              required
              value={empEmail}
              onChange={(e) => setEmpEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="inputCommon"
              required
              value={empPass}
              onChange={(e) => setEmpPass(e.target.value)}
            />
            <input
              type="date"
              placeholder="hiring date"
              className="inputCommon"
              required
              value={hiringDate}
              onChange={(e) => setHiringDate(e.target.value)}
            />
          </div>
          <div className="right">
            <div className="iconAdd">
              <IoMdPersonAdd className="newGuy" />
            </div>
            <select
              name="privilege"
              value={usePrivilege}
              onChange={(e) => setUsePrivilege(e.target.value)}
              className="selectCommon"
            >
              {privileges.map((privilege) => {
                return (
                  <option value={privilege.value} key={privilege.value}>
                    {privilege.label}
                  </option>
                );
              })}
            </select>
            <select
              name="statut"
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
        <div className="btns">
          <input
            type="submit"
            value="Add+"
            className="btnAction"
            onClick={AddNewEmployee}
          />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
