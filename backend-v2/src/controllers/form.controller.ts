import { NextFunction, Request, Response } from 'express';
import FormModel from '../models/form.model';

const catchAsync = require('../utils/catchAsync');

exports.createForm = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      company,
      role,
      refference
    } = req.body;

    const formInput = await FormModel.create({
      firstName,
      lastName,
      email,
      phoneNumber: +phoneNumber,
      company,
      role,
      refference
    });

    return res.status(200).json({
      status: 'succes',
      data: formInput
    });
  }
);
