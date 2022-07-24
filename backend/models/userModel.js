const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    require: [true, "Please add a First Name"],
  },
  lastname: {
    type: String,
    require: [true, "Please add an Last Name"]
  },
  username: {
    type: String,
    require: [true, "Please add an Username"],
    unique: true
  },
  email: {
    type: String,
    require: [true, "Please add an E-mail"],
    unique: true
  },
  password: {
    type: String,
    require: [true, "Please add an Password"],
    unique: true
  }
  
},
{
    timestamps: true
});

module.exports = mongoose.model('User',userSchema)