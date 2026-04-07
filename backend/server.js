const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"],
  }),
);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Contact route
app.post("/contact", (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    console.log("📩 New Contact Form Submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.status(200).json({
      success: true,
      message: "Form data received successfully",
    });
  } catch (error) {
    console.error("🔥 SERVER ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
