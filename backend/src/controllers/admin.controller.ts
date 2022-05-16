import { NextFunction, Request, Response } from 'express';
import AdminModel from '../models/admin.model';
import AppError from '../utils/appError';
import jwt from 'jsonwebtoken';
import { hashPassword } from '../utils/hashPassword';

const catchAsync = require('../utils/catchAsync');

const signToken = (id: string) => {
  return jwt.sign({ id }, 'secret', {
    expiresIn: '90d'
  });
};

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

    let token = signToken(admin.id);

    res.status(200).json({
      status: 'succes',
      token,
      admin
    });
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

    return res.status(201).json({
      status: 'succes',
      data: newAdmin
    });
  }
);

export const protect = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // 1 getting token and check if it's there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
    console.log(token);

    if (!token) {
      return next(
        new AppError(
          'Je bent niet ingelogd, login zodat u toegang krijgt tot de site',
          401
        )
      );
    }
    // 2 verify token

    next();
  }
);
