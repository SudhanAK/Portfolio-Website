 const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

 app.use(cors({
  origin: "https://sudhanak.netlify.app"
}));
app.use(express.json());

 mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));

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

    res.status(200).json({ msg: "Message sent and saved to DB!" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
