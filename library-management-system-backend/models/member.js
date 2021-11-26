const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  nic: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
});

const Member = mongoose.model("Member", memberSchema);
module.exports = Member;
