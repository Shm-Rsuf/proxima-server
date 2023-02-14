require("dotenv").config();
const express = require("express");

//express app
const app = express();

//port
const port = process.env.PORT || 4000;

//listen for request
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
