const express = require("express");
const { default: mongoose } = require("mongoose");
const { MONGO_PASSWORD, MONGO_PORT, MONGO_USER, MONGO_IP } = require("./config/config");

const app = express();

const port = 5000;
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

mongoose
    .connect(mongoURL)
    .then(() => console.log("Succesfully connected smeh"))
    .catch(e => console.log(e));



app.get("/", (req, res) => {
    res.send("<h2>hiiiii, hallo</h2>")
});

app.listen(port, () => {
    console.log(`RUNNING ON ${port}`)
});