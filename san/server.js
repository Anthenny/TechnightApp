const mongoose = require('mongoose');
const {
  PORT,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
  DB_NAME,
} = require('./config/config');

const app = require('./app');

const port = PORT;
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/${DB_NAME}?authSource=admin`;

mongoose
  .connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Succesfully connected to DB, Running on ${port}`);
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err.name, err.message, err.stack);
  });
