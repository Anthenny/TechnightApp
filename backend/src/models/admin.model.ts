import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Typescript definition
export interface adminDocument extends mongoose.Document {
  name: string;
  email: string;
  password: string;
}

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Een admin heeft een voornaam nodig']
    },
    email: {
      type: String,
      required: [true, 'Een admin heeft een email nodig'],
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: [true, 'een admin heeft een email nodig']
    }
  },
  {
    timestamps: true
  }
);

// Document methods
adminSchema.methods.comparePassword = async function (
  enteredPassword: string,
  actualPassword: string
) {
  return await bcrypt.compare(enteredPassword, actualPassword);
};

const AdminModel = mongoose.model('Admin', adminSchema);

export default AdminModel;
