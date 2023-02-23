require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const projectRoutes = require("./Routes/projectsRoute");
const userRoutes = require("./Routes/userRoute");

//express app
const app = express();

//port
const port = process.env.PORT || 4000;

//middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  // console.log(req.url, req.method);
  next();
});

//routes
app.use("/api/projects", projectRoutes);
app.use("/api/user", userRoutes);

//mongodb
mongoose.set("strictQuery", false); //optional
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    //listen for request
    app.listen(port, () => {
      console.log(`connected to mongo and listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
