const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/testdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .once("open", () => {
    console.log("You have connected to your database");
  })
  .on("error", err => {
    console.log(err);
  });
