const assert = require("assert");
const MarioChar = require("../models/mariochar");

//describing tests
var char;
describe("Finding Records", () => {
  beforeEach(done => {
    char = new MarioChar({ name: "YEET" });
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

  it("Finds a record by Object ID in the database", done => {
    MarioChar.findOne({ _id: char._id }).then(result => {
      console.log(result);
      assert(result._id.toString() === char._id.toString());
      done();
    });
  });
});
