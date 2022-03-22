const express = require("express");

const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();
 
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h2>hiiiii, hallo</h2>");
});

app.use("/api/v1/posts", postRouter);
app.use("/api/v1/users", userRouter);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status:'fail',
    message: 'kan deze pagina niet vinden'
  })
})

module.exports = app;