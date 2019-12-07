const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating a schema
const MarioCharSchema = new Schema({
  name: String,
  weight: Number
});
//creating a model
const MarioChar = mongoose.model("mariochar", MarioCharSchema);

module.exports = MarioChar;
