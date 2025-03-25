require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");

const app = express();
app.use(cors());
app.use(express.json());



app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/assignments", assignmentRoutes);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// console.log("JWT_SECRET:", process.env.JWT_SECRET);

