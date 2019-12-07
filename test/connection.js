const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

before(done => {
  mongoose.connect("mongodb://127.0.0.1/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection
    .once("open", () => {
      console.log("You have connected to your database");
      done();
    })
    .on("error", err => {
      console.log(err);
    });
});

//dropping the collection before each test...
beforeEach(done => {
  mongoose.connection.collections.mariochars.drop(() => {
    console.log("Dropped...");
    done();
  });
});
