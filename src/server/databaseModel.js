const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createUserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", createUserSchema);
