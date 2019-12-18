const assert = require("assert");
const MarioChar = require("../models/mariochar");

//describing tests
var char;

beforeEach(done => {
  char = new MarioChar({ name: "YEET" });
  char.save().then(() => {
    done();
  });
});

describe("Deletes one record from the database", () => {
  it("Deleting one record in the database", done => {
    MarioChar.findOneAndRemove({ name: "YEET" }).then(() => {
      MarioChar.findOne({ name: "YEET" }).then(result => {
        assert(result === null);
        done();
      });
    });
  });
});
