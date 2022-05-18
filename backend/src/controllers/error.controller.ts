import { NextFunction, Request, Response } from 'express';
import AppError from '../utils/appError';

const DUPLICATE_KEY_ERROR_COLLECTION:number = 11000;

export const handleCastErrorDB = (err: any) => {
  const message = `Onjuiste ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

export const handleDuplicateFieldsDB = (err: any) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicaat voor veld ${value}. Gebruik aub een andere waarde`;

  return new AppError(message, 400);
};

export const sendErrorDev = (err: any, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

export const sendErrorProd = (err: any, res: Response) => {
  // Operational error die wij aan kunnen zien komen.
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  }

  // Programmeer of onbekende error die we niet willen lekken aan de client.
  res.status(500).json({
    status: 'error',
    message: 'Oops er ging iets fout, probeer het later opnieuw'
  });
};

export function globalErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  }

  if (process.env.NODE_ENV === 'production') {
    if (err.name === 'CastError') err = handleCastErrorDB(err);
    if (err.code === DUPLICATE_KEY_ERROR_COLLECTION) err = handleDuplicateFieldsDB(err);

    sendErrorProd(err, res);
  }
}
