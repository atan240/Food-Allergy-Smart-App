const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((v) => console.log("DEBUG:----CONNECTION ESTABLISHED---"))
  .catch((e) => {
    console.error("Connection error", e.message);
  });
const db = mongoose.connection;
module.exports = db;
