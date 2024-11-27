const express = require("express");
const router = express.Router();

module.exports = (pool) => {
  router.post("/add", async (req, res) => {
    const { name, address, phoneNumber, email, age, batch, transactionID } =
      req.body;

    try {
      const [rows, fields] = await pool.execute(
        "INSERT INTO admissiondata (name, address, phoneNumber, email, age, batch) VALUES (?, ?, ?, ?, ?, ?)",
        [name, address, phoneNumber, email, age, batch, transactionID]
      );

      console.log("Admission added:", rows);
      res.json("Admission added!");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json(`Error: ${error}`);
    }
  });

  return router;
};
