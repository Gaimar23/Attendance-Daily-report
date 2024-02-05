import React, { useEffect, useState } from "react";
import "./home.css";
import { getAllEmployees } from "../../utils/Api";
import { IoPerson } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";

export const auth = [];

function Home() {
  const [employeesData, setEmployeesData] = useState([]);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    getAllEmployees(setEmployeesData);
  }, []);

  function handleChange(e) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function closeForm() {
    document.getElementById("form").style.display = "none";
    document.getElementById("userContainer").style.opacity = "1";
  }

  function showForm(email, password) {
    setUser((prev) => ({ ...prev, email: email }));
    document.getElementById("userContainer").style.opacity = "0";
    document.getElementById("form").style.display = "flex";
  }

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (employeesData) {
      employeesData.forEach((employee) => {
        let route = "";
        if (employee.pass == user.password && employee.email == user.email) {
          if (employee.privilege == "user") {
            auth.push(employee);
            route = "/user";
            return navigate(route);
          } else if (employee.privilege == "admin") {
            auth.push(employee);
            route = "/admin";
            return navigate(route);
          } else {
            auth.push(employee);
            route = "/super";
            return navigate(route);
          }
        }
      });
    }
  }

  return (
    <div className="home">
      <div className="formContainer">
        <form className="form" id="form" onSubmit={handleSubmit}>
          <h3>LOGIN</h3>
          <ImCross className="iconClose" onClick={closeForm} />
          <div className="email">
            <IoPerson size={20} className="icon" />
            <input
              type="email"
              id="email"
              disabled
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="password">
            {/* <label htmlFor="">Password:</label> */}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <input type="submit" value="Login" onClick={handleSubmit} />
        </form>
      </div>
      <div className="userContainer" id="userContainer">
        <div className="users">
          {employeesData.map((employee) => {
            return (
              <span
                key={employee.id}
                className="user"
                onClick={() => showForm(employee.email)}
              >
                {employee.first_name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
