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
const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/responsesDB";
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema
const responseSchema = new mongoose.Schema({
  username: String,
  password: String,
  gender: String,
  age: String,
  about: String,
  lifestyle: String,
  mood: String,
  topic: String,
  worries: String,
});

const Response = mongoose.model("Response", responseSchema);

// API endpoint
app.post("/api/responses", async (req, res) => {
  try {
    const response = new Response(req.body);
    await response.save();
    res.status(201).send("Saved successfully");
  } catch (error) {
    res.status(500).send("Error saving response");
  }
});

// use Render's port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
