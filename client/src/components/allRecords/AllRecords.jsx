import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "first_name", headerName: "First name", width: 130 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "morning", headerName: "Arrival", width: 150 },
  { field: "afternoon", headerName: "Departure", width: 150 },
  {
    field: "workday",
    headerName: "Date",
    width: 130,
    valueGetter: ({ value }) => value && new Date(value).toLocaleDateString(),
  },
  { field: "report", headerName: "Report", width: 150 },
];

const AllRecords = ({
  rows,
  setIdsRecords,
  idsRecords,
  deleteRecord,
  setId,
  setWorkday,
  setFirstName,
  setEmail,
  setMorning,
  setAfternoon,
  setReportDay,
  displayForm03,
}) => {
  const handleEdit = () => {
    rows.forEach((item) => {
      if (item.id == idsRecords[0]) {
        // const year_ = item.workday.slice(0, 4);
        // const month_ = item.workday.slice(5, 7);
        // const day_ = item.workday.slice(8);
        // const date_ = `${day_}/${month_}/${year_}`;
        // console.log("day:", day_, "month:", month_, "year:", year_);

        const year_ = new Date(item.workday).getFullYear();
        const month_ =
          new Date(item.workday).getMonth() + 1 < 10
            ? `0${new Date(item.workday).getMonth() + 1}`
            : new Date(item.workday).getMonth() + 1;
        const day_ =
          new Date(item.workday).getDate() < 10
            ? `0${new Date(item.workday).getDate()}`
            : new Date(item.workday).getDate();
        const date_ = `${year_}-${month_}-${day_}`;
        console.log("date:", date_);

        setId(item.id);
        setWorkday(date_);
        setFirstName(item.first_name);
        setEmail(item.email);
        setMorning(item.morning);
        setAfternoon(item.afternoon);
        setReportDay(item.report);
      }
    });
    // setReportDay(idsRecords[0].report)
    displayForm03();
  };

  return (
    <div
      style={{
        height: 400,
        width: "100%",
        position: "relative",
        // overflow: "hidden",
      }}
      id="allrecords"
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        style={{
          backgroundColor: "#344871",
          color: "white",
          borderRadius: "15px",
        }}
        onRowSelectionModelChange={(ids) => setIdsRecords(ids)}
      />
      <div
        className="btns"
        style={{
          position: "absolute",
          bottom: "15px",
          left: "150px",
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <MdDelete
          size={25}
          style={{
            cursor: "pointer",
            // opacity: idsRecords.length > 0 ? "1" : "0.5",
            display: idsRecords.length > 0 ? "block" : "none",
            // backgroundColor: "white",
            color: "white",
          }}
          onClick={deleteRecord}
          className="deleteRecord"
        />
        <MdEdit
          size={25}
          style={{
            cursor: "pointer",
            // opacity: idsRecords.length == 1 ? "1" : "0.4",
            display: idsRecords.length == 1 ? "block" : "none",
            color: "white",
          }}
          onClick={handleEdit}
          className="editRecord"
        />
      </div>
    </div>
  );
};

export default AllRecords;
