const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { sequelize} = require("./models")
require('dotenv').config();
const port = process.env.PORT
const cors = require("cors");

//routers
const repo = require("./routes/repo");
const fork = require("./routes/fork");
//app
const app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//routes
app.use('/repo',repo)
app.use('/fork',fork)

// catch 404 and forward to error handler


app.listen({port: port}, async ()=>{
    console.log("server started http://localhost:5000");
    await sequelize.authenticate()
    console.log('db connected!!!');
})