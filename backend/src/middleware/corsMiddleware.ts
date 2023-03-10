import { NextFunction, Request, Response } from 'express';

export const corsMiddleware = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE');

  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') res.sendStatus(200);
  else next();
};
