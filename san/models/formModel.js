const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'This form requires a first name'],
    lowercase: true,
  },
  lastName: {
    type: String,
    required: [true, 'This form requires a last name'],
  },
  email: {
    type: String,
    required: [true, 'This form requires a email'],
    unique: true,
    lowercase: true,
  },
  phoneNumber: {
    type: Number,
    required: [true, 'This form requires a phone number'],
  },
  company: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    default: null,
  },
  refference: {
    type: String,
    default: null,
  },
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
