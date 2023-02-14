require("dotenv").config();
const express = require("express");
const projectRoutes = require("./Routes/projectsRoute");

//express app
const app = express();

//port
const port = process.env.PORT || 4000;

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use("/api/projects", projectRoutes);

//routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the express app" });
});

//listen for request
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
