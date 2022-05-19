import mongoose from 'mongoose';
require('dotenv').config();

import app from './app';

const port = process.env.PORT;
const mongoURL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.7ueuo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

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
