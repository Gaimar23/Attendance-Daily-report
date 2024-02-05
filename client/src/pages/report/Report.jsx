import React, { useEffect } from "react";
import monLogo from "../../assets/images/logoCompany.jpg";
import "./report.css";
import { toPrint } from "../super/Super";
import { useNavigate } from "react-router-dom";

// const printer = () => {
//   if (toPrint.length > 0) {
//     toPrint.forEach((recording) => {
//       reports.push(recording);
//     });
//     print();
//   } else {
//     // Navigate back to super page
//   }
// };

const Report = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (toPrint.length == 0) {
      navigate("/super");
    }
  }, []);

  setTimeout(() => {
    console.log(toPrint);
    if (toPrint.length > 0) {
      print();
    }
  }, 2000);

  return (
    <div className="report">
      <div className="top">
        <div className="logo">
          <img src={monLogo} alt="" className="monLogo" onClick={() => {}} />
          <span className="notre slogan">Rise</span>
        </div>
        <div className="theDate">
          Douala, le {toPrint.length > 0 ? toPrint[0].workday : ""}{" "}
        </div>
      </div>
      <h2 className="title">
        Rapport d'activité de {toPrint.length > 0 ? toPrint[0].first_name : ""}
      </h2>
      <div className="reportContent">
        Je m'appelle joe silvestre. Je suis un enfant du pays. cela m'a pris une
        éternité, que dis-je toute une vie pour parvenir là ou j'en suis.
        {toPrint.length > 0 ? toPrint[0].report : ""}
      </div>
    </div>
  );
};

export default Report;
