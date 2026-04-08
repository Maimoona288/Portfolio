// IMPORTS 
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Contact = require("./models/Contact");

//  APP INIT
const app = express();
const PORT = 5000;

//  MIDDLEWARE
app.use(express.json());
app.use(cors());

//  DATABASE CONNECTION
mongoose.connect("mongodb://127.0.0.1:27017/contactDB")
  .then(() => console.log(" MongoDB Connected"))
  .catch((err) => console.log(" DB Error:", err));

//  TEST ROUTE 
app.get("/", (req, res) => {
  res.send("Server is running...");
});

//  CODE 
app.post("/contact", async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // SAVE TO DATABASE
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    console.log(" Saved to database");

    res.status(200).json({
      success: true,
      message: "Message saved successfully",
    });

  } catch (error) {
    console.error(" ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// START SERVER 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});