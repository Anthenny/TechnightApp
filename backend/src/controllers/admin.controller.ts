import { NextFunction, Request, Response } from 'express';
import AdminModel from '../models/admin.model';
import AppError from '../utils/appError';
import { hashPassword } from '../utils/hashPassword';
import { catchAsync } from '../utils/catchAsync';
import { createSendToken } from '../utils/handleTokens';

export const loginAdmin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new AppError('Vul aub een email en wachtwoord in', 400));
    }

    const admin = await AdminModel.findOne({ email });

    if (!admin || !(await admin.comparePassword(password, admin.password))) {
      return next(new AppError('Onjuist email of wachtwoord', 401));
    }

    createSendToken(admin, 200, res);
  }
);

export const signupAdmin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;
    const hashedPassword = await hashPassword(password);

    const newAdmin = await AdminModel.create({
      name,
      email,
      password: hashedPassword
    });

    createSendToken(newAdmin, 201, res);
  }
);
