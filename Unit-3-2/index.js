var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cors = require("cors");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/myTeam", {
  useNewUrlParser: true,
});
mongoose.connection.on("open", function () {
  console.log("mongodb is connected!!");
});

var app = express();
const allowedOrigins = ["http://localhost:4200"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", require("./routing/api"));

app.listen(3000);
console.log("Listening on port 3000");
