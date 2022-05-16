const express = require("express");

const chats = require("./data/data");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/erroMiddleware");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is running");
});

app.use("/api/user", userRoutes);

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);

  res.send(singleChat);
});

app.use(notFound);
app.use(errorHandler);

module.exports = app;
