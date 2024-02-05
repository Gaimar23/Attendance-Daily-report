const express = require("express");
const cors = require("cors");
const routes = require("./routes/employeeRoute");
const routerRec = require("./routes/attendanceRoute");

// require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(routerRec);

// app.get("/employee");

app.listen(PORT, () => {
  console.log(`the server has started on port :${PORT}`);
});
