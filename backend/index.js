const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT  = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send('Hello World')
})


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
  })