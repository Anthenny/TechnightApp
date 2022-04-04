import express, { NextFunction, Request, Response } from 'express';
import rateLimit from 'express-rate-limit';

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/error.controller');

const app = express();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 200, // Limit each IP to 100 request
  standardHeaders: true,
  legacyHeaders: false // Disable the 'X-RateLimit-*' headers
});

app.use(limiter);

app.use(express.json({ limit: '20kb' }));

app.use((req: Request, res: Response, next: NextFunction) => {
  // At the star we can define a network like "localhost:3000" to make it more secure.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

// Routes
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({
    status: 'succes',
    message: 'hi ee'
  });
});

// Error handler
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`We can not find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
