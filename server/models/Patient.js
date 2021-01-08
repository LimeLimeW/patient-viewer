const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  lastname: {
    type: String,
    required: true
  },
  firstname: {
      type: String,
      required: true
  },
  birthday: {
      type: String
  },
  height: {
      type: String,
      required: true
  },
  weight: {
      type: String,
      required: true
  },
  email: {
    type: String,
    required: true
  },
  gender: {
      type: String,
      required: true
  }
});

module.exports = Patient = mongoose.model("patient", PatientSchema);