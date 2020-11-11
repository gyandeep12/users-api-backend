const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    requried: true, 
    minlength: 3
  },
    email: {
      type: String,
      required: true,
      validate(value){
        if(!validator.isEmail(value)){
          throw new Error("Email is invalid")
        }
      }
    },
  phone: {
    type: Number,
    min: 10,
    max: 10,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  }
})

const Student = new mongoose.model("Student", studentSchema)

module.exports = Student