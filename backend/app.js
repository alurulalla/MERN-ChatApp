const express = require("express");

const chats = require("./data/data");

const app = express();

app.get("/", (req, res) => {
  res.send("App is running");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);

  res.send(singleChat);
});

module.exports = app;
