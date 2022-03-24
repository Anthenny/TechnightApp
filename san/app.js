const express = require('express');
const rateLimit = require('express-rate-limit');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');
const formRouter = require('./routes/formRoutes');

const app = express();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 200, // Limit each IP to 100 request
  standardHeaders: true,
  legacyHeaders: false, // Disable the 'X-RateLimit-*' headers
});

app.use(limiter);

app.use(express.json({ limit: '20kb' }));

app.use((req, res, next) => {
  // Je hebt 3 headers nodig 1e is hoe het heet 2e argument is vanwaar ze je api mogen gebruiken. ipv * zet je dan localhost:3000
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

// Routes

app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/form', formRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
