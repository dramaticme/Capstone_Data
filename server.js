const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// serve static files (like Form.html, CSS, JS)
app.use(express.static(__dirname));

// MongoDB connection
const mongoURI =
  process.env.MONGODB_URI ||
  "mongodb+srv://myAtlasDBUser:aashu310@myatlasclusteredu.qhigots.mongodb.net/Capstone";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Schema updated to include all form fields
const responseSchema = new mongoose.Schema({
  username: String,
  password: String,
  gender: String,
  age: String,
  about: String,
  lifestyle: String,
  status: String,     // How have you been lately?
  mood: String,
  thoughts: String,   // Reflection
  stress: String,     // What's causing stress?
  coping: String,     // How handling stress
  worries: String,
  extra: String,      // Anything else
  consent: Boolean,   // Checkbox
});

// Model
const Response = mongoose.model("Response", responseSchema);

// API endpoint
app.post("/api/responses", async (req, res) => {
  try {
    const response = new Response(req.body);
    await response.save();
    res.status(201).send("Saved successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving response");
  }
});

// use Render's port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
