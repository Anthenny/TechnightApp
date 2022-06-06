import { Response } from 'express';
import jwt from 'jsonwebtoken';

// TODO echte secret hebben voor JWT
const signToken = (id: string) => {
  return jwt.sign({ id }, 'secret', {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

const cookieOptions = {
  expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  secure: false,
  httpOnly: true
};

if (process.env.NODE_ENV === 'production') {
  cookieOptions.secure = true;
}

// TODO Admin object beschrijven
export const createSendToken = (
  admin: any,
  statusCode: number,
  res: Response
) => {
  const token = signToken(admin.id);

  res.cookie('jwt', token, cookieOptions);

  admin.password = undefined;

  return res.status(statusCode).json({
    status: 'succes',
    token,
    data: {
      admin
    }
  });
};
