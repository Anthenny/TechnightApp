const mongoose = require('mongoose');
const { PORT, MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT, DB_NAME } = require('./config/config');

const app = require('./app');

const port = PORT
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/${DB_NAME}?authSource=admin`;

mongoose.connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    app.listen(port, () => {
        console.log('Succesfully connected to DB');
        console.log(`Running on ${port}`);
    })
}).catch((err) => {
    console.log(
      'Verbinding met de database is niet gelukt, probeer het later opnieuw'
    );
    console.log(err.name, err.message, err.stack);
  });