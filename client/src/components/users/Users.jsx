import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "last_name", headerName: "Last name", width: 130 },
  { field: "first_name", headerName: "First name", width: 130 },
  { field: "email", headerName: "Email", width: 170 },
  { field: "privilege", headerName: "Privilege", width: 100 },
  { field: "pass", headerName: "Password", width: 130 },
  {
    field: "hiring_date",
    headerName: "Date",
    width: 130,
    valueGetter: ({ value }) => value && new Date(value).toLocaleDateString(),
  },
  { field: "active", headerName: "Active", width: 130 },
];

const Users = ({
  rows,
  idsEmployee,
  setIdsEmployee,
  deleteEmp,
  // editEmployee,
  displayForm04,
  setUsePrivilege,
  setIsEmpActive,
  setEmpId,
  setEmpLname,
  setEmpFname,
  setEmpEmail,
  setEmpPass,
  setHiringDate,
}) => {
  const editEmployee = () => {
    rows.forEach((employee) => {
      const year_ = new Date(employee.hiring_date).getFullYear();
      const month_ =
        new Date(employee.hiring_date).getMonth() + 1 < 10
          ? `0${new Date(employee.hiring_date).getMonth() + 1}`
          : new Date(employee.hiring_date).getMonth() + 1;
      const day_ =
        new Date(employee.hiring_date).getDate() < 10
          ? `0${new Date(employee.hiring_date).getDate()}`
          : new Date(employee.hiring_date).getDate();
      const date_ = `${year_}-${month_}-${day_}`;
      console.log("date:", date_);

      // format date
      if (employee.id == idsEmployee[0]) {
        setEmpId(employee.id);
        setEmpEmail(employee.email);
        setEmpFname(employee.first_name);
        setEmpLname(employee.last_name);
        setUsePrivilege(employee.privilege);
        setEmpPass(employee.pass);
        setHiringDate(date_);
        setIsEmpActive(employee.active);
      }
    });

    displayForm04();
  };
  return (
    <div
      style={{
        height: 400,
        width: "100%",
        display: "none",
        position: "relative",
        // overflow: "hidden",
      }}
      id="allUsers"
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
          borderRadius: "15px",
          color: "white",
        }}
        onRowSelectionModelChange={(ids) => setIdsEmployee(ids)}
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
            display: idsEmployee.length > 0 ? "block" : "none",
            color: "white",
          }}
          onClick={deleteEmp}
        />
        <MdEdit
          size={25}
          style={{
            cursor: "pointer",
            display: idsEmployee.length == 1 ? "block" : "none",
            color: "white",
          }}
          onClick={editEmployee}
        />
      </div>
    </div>
  );
};

export default Users;
