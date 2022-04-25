import mongoose from 'mongoose';
require('dotenv').config();

import config from 'config';

const app = require('./app');

const port = config.get<number>('PORT');
const mongoURL = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/${process.env.DB_NAME}?authSource=admin`;

mongoose
  .connect(mongoURL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Succesfully connected to DB. Running on ${port}`);
    });
  })
  .catch((e: any) => {
    console.log('Could not connect to db');
    console.log(e.message);
  });
