import mongoose from 'mongoose';
import { createAdminIfNotExists } from './utils/checkAdmin';
require('dotenv').config();

import app from './app';

const port = process.env.PORT;

// Lokale database die we gebruiken met ontwikkelen
const mongoDevURL = `mongodb://${process.env.MONGO_USER_DEV}:${process.env.MONGO_PASSWORD_DEV}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/${process.env.DB_NAME}?authSource=admin`;

// TODO Met ivo overleggen via waar we de productie database gaan hosten een developers.nl acc?
// Productie database
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