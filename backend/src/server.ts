import mongoose from 'mongoose';
import { createAdminIfNotExists } from './utils/checkAdmin';
require('dotenv').config();

import app from './app';

const port = process.env.PORT;

const mongoURL = `mongodb://${process.env.MONGO_USER_DEV}:${process.env.MONGO_PASSWORD_DEV}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/${process.env.DB_NAME}?authSource=admin`;

const mongoProdURL = `mongodb+srv://productieAdminAnnasAccessoires:DitIsHetSuperGeheimeWachtWoordQwErTyUIOP@cluster0.cpirwvr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(mongoProdURL)
  .then(async () => {
    await createAdminIfNotExists();
    app.listen(port, () => {
      console.log(`Succesfully connected to DB. Running on ${port}`);
    });
  })
  .catch((e: any) => {
    console.log('Could not connect to db');
    console.log(e);
  });
