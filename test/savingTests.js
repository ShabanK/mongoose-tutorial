const assert = require("assert");
const MarioChar = require("../models/mariochar");

//describing tests

describe("Saving Records", () => {
  it("Saves a record to a database", done => {
    let char = new MarioChar({ name: "YEET" });
    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });
});
