import mongoose from 'mongoose';

// Typescript definition
export interface FormDocument extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  company: string;
  role: string;
  refference: string;
  createdAt: Date;
  updatedAt: Date;
}

const formSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'This form requires a first name'],
      lowercase: true
    },
    lastName: {
      type: String,
      required: [true, 'This form requires a last name'],
      lowercase: true
    },
    email: {
      type: String,
      required: [true, 'This form requires a email'],
      unique: true,
      lowercase: true
    },
    phoneNumber: {
      type: String,
      required: [true, 'This form requires a phone number']
    },
    company: {
      type: String,
      default: 'undefined'
    },
    role: {
      type: String,
      default: 'undefined'
    },
    refference: {
      type: String,
      default: 'undefined'
    }
  },
  {
    timestamps: true
  }
);

const FormModel = mongoose.model('Form', formSchema);

export default FormModel;
