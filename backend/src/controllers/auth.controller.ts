import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { RequestWithUser } from '../utils/requestInterface';
import AppError from '../utils/appError';
import Admin from '../models/admin.model';
import { catchAsync } from '../utils/catchAsync';

const { promisify } = require('util');

export const protect = catchAsync(
  async (req: RequestWithUser, res: Response, next: NextFunction) => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return next(
        new AppError('U bent niet ingelogd, log in om toegang te krijgen', 401)
      );
    }

    const decoded = await promisify(jwt.verify)(token, 'secret');

    const currenthUser = await Admin.findById(decoded.id);
    if (!currenthUser) {
      return next(
        new AppError(
          'De eigenaar van deze token bestaat niet meer! Log opnieuw in',
          401
        )
      );
    }

    req.user = currenthUser;
    next();
  }
);
