const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("User service is running");
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000, () => console.log("User service running on port 5000"));
  })
  .catch((err) => console.log(err));
