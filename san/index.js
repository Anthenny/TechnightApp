const express = require("express");
const { default: mongoose } = require("mongoose");
const session = require("express-session");
const redis = require("redis");
let RedisStore = require("connect-redis")(session);
const {
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_USER,
  MONGO_IP,
  REDIS_URL,
  REDIS_PORT,
  SESSION_SECRET,
} = require("./config/config");
let redisClient = redis.createClient({
  host: REDIS_URL,
  port: REDIS_PORT,
});
const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    cookie: {
      secure: false,
      resave: false,
      saveUninitialized: false,
      httpOnly: true,
      maxAge: 30000,
    },
  })
);
const port = 5000;
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

mongoose
  .connect(mongoURL)
  .then(() => console.log("Succesfully connected smeh"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("<h2>hiiiii, hallo</h2>");
});

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);

app.listen(port, () => {
  console.log(`RUNNING ON ${port}`);
});
