import mongoose from 'mongoose';
require('dotenv').config();

import app from './app';

const port = process.env.PORT;

// TODO Ivo vragen waar ik de prod url moet laten en of het wel een goed idee is om een online database te hebben.
// const mongoURLProd = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.7ueuo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// TODO check in de database of er al een admin bestaat zo niet maak er een aan met behulp van docker entrypoints
 const mongoURLdev = `mongodb://${process.env.MONGO_USER_DEV}:${process.env.MONGO_PASSWORD_DEV}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/${process.env.DB_NAME}?authSource=admin`;

mongoose
  .connect(mongoURLdev)
  .then(() => {
    app.listen(port, () => {
      console.log(`Succesfully connected to DB. Running on ${port}`);
      console.log(mongoURLdev)
    });
  })
  .catch((e: any) => {
    console.log('Could not connect to db');
    console.log(e.message);
    console.log(mongoURLdev)

  });
