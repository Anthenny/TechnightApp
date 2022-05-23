import mongoose from 'mongoose';
import { createAdmin } from './utils/checkAdmin';
require('dotenv').config();

import app from './app';

const port = process.env.PORT;

const mongoURL = `mongodb://${process.env.MONGO_USER_DEV}:${process.env.MONGO_PASSWORD_DEV}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/${process.env.DB_NAME}?authSource=admin`;

mongoose
  .connect(mongoURL)
  .then(async () => {
    await createAdmin();
    app.listen(port, () => {
      console.log(`Succesfully connected to DB. Running on ${port}`);
      console.log(mongoURL);
    });
  })
  .catch((e: any) => {
    console.log('Could not connect to db');
    console.log(mongoURL);
    console.log(e);
  });
