import { hashPassword } from './hashPassword';
import AdminModel from '../models/admin.model';

const findAdmin = async (email: string) => {
  const admin = await AdminModel.findOne({ email });
  return admin;
};

export const createAdminIfNotExists = async () => {
  if (await findAdmin(process.env.ADMIN_EMAIL)) return;

  const hashedPassword = await hashPassword(process.env.ADMIN_PASSWORD);

  await AdminModel.create({
    name: process.env.ADMIN_NAME,
    email: process.env.ADMIN_EMAIL,
    password: hashedPassword
  });
};
