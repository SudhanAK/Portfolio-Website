 const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

 app.use(cors());
app.use(express.json());

 mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

 const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mail: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

 
app.get("/", (req, res) => {
  res.send("Hello from Express backend!");
});

app.post("/", async (req, res) => {
  try {
    const { name, mail, message } = req.body;
    console.log(req.body)
    
    if (!name || !mail || !message) {
      return res.status(400).json({ msg: "All fields are required" });
    }

     
    const newMessage = new Message({ name, mail, message });
    await newMessage.save();

    res.json({ msg: "Message sent and saved to DB!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});

 app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
