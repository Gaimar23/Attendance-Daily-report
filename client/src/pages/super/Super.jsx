import React, { useEffect, useState } from "react";
import "./super.css";
import AllRecords from "../../components/allRecords/AllRecords";
import { getAllRecords } from "../../utils/Api";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import { useNavigate } from "react-router-dom";

export const toPrint = [];

const Super = () => {
  const [allRecords, setAllRecords] = useState([]);
  const [idsRecords, setIdsRecords] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    getAllRecords(setAllRecords);
  }, []);

  const collectData = () => {
    if (idsRecords.length > 0) {
      // idsRecords.forEach((record) => {
      //   toPrint.push(record);
      // });

      allRecords.forEach((item) => {
        if (item.id == idsRecords[0]) {
          toPrint.push(item);
        }
      });

      // toPrint.push(idsRecords[0]);
      console.log("navigate");
      gotoReport();
    } else {
      const errorMessage = document.getElementById("errorMessage");
      if (!errorMessage.classList.contains("animate")) {
        errorMessage.classList.add("animate");

        setTimeout(() => {
          errorMessage.classList.remove("animate");
        }, 4000);
      }
    }
  };

  function gotoReport() {
    // navigate to report
    navigation("/super/report");
  }

  return (
    <div className="super">
      <div className="logoCompany">logo</div>
      <div className="errorMessage" id="errorMessage">
        Please kindly select a record first
      </div>
      <div className="mesIcones">
        <span className="print" onClick={collectData}>
          <LocalPrintshopOutlinedIcon className="icon" />
        </span>
        <span className="download">
          <GetAppOutlinedIcon className="icon" />
        </span>
      </div>
      <div className="dataTables">
        <AllRecords
          rows={allRecords}
          idsRecords={idsRecords}
          setIdsRecords={setIdsRecords}
        />
      </div>
    </div>
  );
};

export default Super;
