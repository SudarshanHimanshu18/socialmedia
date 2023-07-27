const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
var bodyParser = require('body-parser');  // add this line
 

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

//Using Middlewares

app.use(bodyParser.json({limit: '50mb'})); //(new) increase add the size of image
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})); // new
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cookieParser());



// importing  Routes
const post = require("./routes/post");
const user = require("./routes/user");


// Using Routes
app.use("/api/v1", post);
app.use("/api/v1", user);


module.exports = app;
