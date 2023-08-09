const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 1082;

app.use(bodyParser.urlencoded())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

const dotenv = require("dotenv");
const result = dotenv.config();
if (result.error) {
  console.log("****** ERROR-CRITICAL: ENV IS NOT REDABLE");
  console.log(result.error);
}

//* Database setup
const db = require("./config/db");
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => res.status(200).send("version 0.01!"));

// ROUTES
const userRoute = require("./routes/userRoute");


app.use("/user", userRoute);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = app;
