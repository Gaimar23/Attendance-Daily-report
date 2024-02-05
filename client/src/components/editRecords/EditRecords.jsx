import React from "react";
import "./editRecords.css";
import { ImCross } from "react-icons/im";
import Cube from "../3DAnimation/Cube";

const EditRecords = ({
  closeform03,
  id,
  setId,
  workday,
  setWorkday,
  firstName,
  setFirstName,
  email,
  setEmail,
  morning,
  setMorning,
  afternoon,
  setAfternoon,
  reportDay,
  setReportDay,
  handleUpdate,
}) => {
  return (
    <div className="formContainer03" id="formContainer03">
      <form action="" className="formData02" onSubmit={handleUpdate}>
        <div className="closeForm02" onClick={closeform03}>
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
          Records
        </h3>
        <div className="info01">
          <div className="left">
            <input
              type="date"
              placeholder="Date"
              className="inputCommon"
              value={workday}
              onChange={(e) => setWorkday(e.target.value)}
            />
            <input
              type="text"
              placeholder="ID"
              className="inputCommon"
              disabled
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input
              type="text"
              placeholder="first Name"
              className="inputCommon"
              disabled
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="inputCommon"
              disabled
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="right">
            <div className="right3D">
              <Cube />
            </div>
            <input
              type="time"
              placeholder="Arrival"
              className="inputCommon"
              value={morning}
              onChange={(e) => setMorning(e.target.value)}
            />
            <input
              type="time"
              placeholder="Departure"
              className="inputCommon"
              value={afternoon}
              onChange={(e) => setAfternoon(e.target.value)}
            />
          </div>
        </div>
        {/* <div className="info02"></div> */}
        <textarea
          rows={8}
          cols={30}
          placeholder="report"
          className="report"
          value={reportDay}
          onChange={(e) => setReportDay(e.target.value)}
        />
        <div className="btns">
          <button className="btnAction">Cancel</button>
          <input
            type="submit"
            value="Save"
            className="btnAction"
            onClick={handleUpdate}
          />
        </div>
      </form>
    </div>
  );
};

export default EditRecords;
