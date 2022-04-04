import { NextFunction, Request, Response } from 'express';

export function corsMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Websites you want to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request headers you want to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  // Request methods you want to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  // Go to next layer of middleware
  next();
}
