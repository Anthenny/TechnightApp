import mongoose from 'mongoose';

// Typescript definition
export interface FormDocument extends mongoose.Document {
  name: string;
  email: string;
  phoneNumber: string;
  company: string;
  role: string;
  refference: string;
  checkbox: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'This form requires a name'],
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
    },
    checkbox: {
      type: Boolean,
    }
  },
  {
    timestamps: true
  }
);

const FormModel = mongoose.model('Form', formSchema);

export default FormModel;
