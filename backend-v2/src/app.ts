import express, { NextFunction, Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import routes from './routes/routes';
import AppError from './utils/appError';
import { globalErrorHandler } from './controllers/error.controller';
import { corsMiddleware } from './middleware/corsMiddleware';

const app = express();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 200, // Limit each IP to 100 request
  standardHeaders: true,
  legacyHeaders: false // Disable the 'X-RateLimit-*' headers
});

app.use(limiter);

app.use(express.json({ limit: '20kb' }));

app.use(corsMiddleware);

// Routes
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({
    status: 'succes',
    message: 'hi ee'
  });
});

routes(app);

// Error handler
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`We can not find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
