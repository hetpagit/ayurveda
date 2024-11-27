const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: "yout-host-name",
  user: "yout-user-name",
  password: process.env.SQL_KEY,
  database: "your-database-name",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const admissionRouter = require("../routes/admission")(pool);
app.use("/admission", admissionRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
