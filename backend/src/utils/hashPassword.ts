import bcrypt from 'bcrypt';

export const hashPassword = async (enteredPassword: string) => {
  const hashedPassword = await bcrypt.hash(enteredPassword, 12);

  return hashedPassword;
};
