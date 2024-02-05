import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "first_name", headerName: "First name", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "morning", headerName: "Arrival", width: 140 },
  { field: "afternoon", headerName: "Departure", width: 140 },
  {
    field: "workday",
    headerName: "Date",
    width: 110,
    valueGetter: ({ value }) => value && new Date(value).toLocaleDateString(),
  },
  { field: "report", headerName: "Report", width: 150 },
  //   type: "date",type: "time", type: "time",
];

// const rows = getEmployeeRecords(auth[0].id);

const EmpRecords = ({
  rows,
  // idsEmpRecords,
  // setIdsEmpRecords,
  // deleteEmp,
  // editEmployee,
}) => {
  return (
    <div style={{ height: 400, width: "100%", position: "relative" }}>
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
          borderRadius: "15px",
          color: "white",
        }}
        // onRowSelectionModelChange={(ids) => setIdsEmpRecords(ids)}
      />
      {/* <div
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
            display: idsEmpRecords.length > 0 ? "block" : "none",
          }}
          onClick={deleteEmp}
        />
        <MdEdit
          size={25}
          style={{
            cursor: "pointer",
            display: idsEmpRecords.length == 1 ? "block" : "none",
          }}
          onClick={editEmployee}
        />
      </div> */}
    </div>
  );
};

export default EmpRecords;
