const assert = require("assert");
const MarioChar = require("../models/mariochar");

//describing tests

describe("Finding Records", () => {
  beforeEach(done => {
    let char = new MarioChar({ name: "YEET" });
    char.save().then(() => {
      done();
    });
  });

  it("Finds a record in the database", done => {
    MarioChar.findOne({ name: "YEET" }).then(result => {
      console.log(result);
      assert(result.name === "YEET");
      done();
    });
  });
});
