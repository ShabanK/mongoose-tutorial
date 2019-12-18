// const assert = require("assert");
// const MarioChar = require("../models/mariochar");

// //describing tests
// var char;

// beforeEach(done => {
//   char = new MarioChar({ name: "YEET" });
//   char.save().then(() => {
//     done();
//   });
// });

// describe("Updating records", () => {
//   it("Updates a record in the database", done => {
//     MarioChar.findOneAndUpdate({ name: "YEET" }, { name: "Sir YEET" }).then(
//       () => {
//         MarioChar.findOne({ name: "Sir YEET" }).then(result => {
//           console.log(result);
//           assert(true);
//           done();
//         });
//       }
//     );
//   });
// });
