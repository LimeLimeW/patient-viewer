const mongoose = require("mongoose");
const Schema = mongoose.Schema;// Create Schema
const PraticienSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = Praticien = mongoose.model("praticien", PraticienSchema);