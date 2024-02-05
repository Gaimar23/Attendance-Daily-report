import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import "./dailyReport.css";
import myLogo from "../../assets/images/logoCompany.jpg";

const DailyReport = ({
  handleSubmitAfternoon,
  report,
  setReport,
  closeForm,
}) => {
  return (
    <div className="formContainer02" id="formContainer">
      <form className="formReport" onSubmit={handleSubmitAfternoon}>
        <div className="closeform" onClick={closeForm}>
          <ImCross size={18} />
        </div>
        <h3
          style={{
            width: "100%",
            textAlign: "center",
            marginBottom: "15px",
            color: "white",
            fontSize: "30px",
          }}
        >
          Daily{" "}
          <span
            style={{
              borderBottom: "3px solid white",
              color: "white",
            }}
          >
            Report
          </span>
        </h3>
        <div className="formData">
          <div className="intro">
            <img src={myLogo} alt="logo" className="logoCompany" />
            <span className="slogan">
              We strive
              <br /> together
            </span>
          </div>
          <textarea
            rows={8}
            aria-colcount={60}
            value={report}
            onChange={(e) => setReport(e.target.value)}
            className="report"
            placeholder="Your report..."
          />
        </div>
        <input
          type="submit"
          value="Send"
          className="submitBtn"
          onSubmit={handleSubmitAfternoon}
        />
      </form>
    </div>
  );
};

export default DailyReport;
