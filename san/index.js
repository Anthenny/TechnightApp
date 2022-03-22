const express = require("express");
const { default: mongoose } = require("mongoose");
const {
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USER,
  MONGO_IP,
  DB_NAME,
} = require("./config/config");


const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.json());

const port = 5000;
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/${DB_NAME}?authSource=admin`;

mongoose
  .connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("Succesfully connected"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("<h2>hiiiii, hallo</h2>");
});

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);

app.listen(port, () => {
  console.log(`RUNNING ON ${port}`);
});
