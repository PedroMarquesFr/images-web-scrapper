require("dotenv").config();
const express = require("express");
const getPhotoByName = require("./script");
var cors = require("cors");
const movieInfo = require("./movieAPI");

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`- ${req.method} ${req.path}`);
  /* Termina a operação no middleware e chama o próximo middleware ou rota */
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to image scrapper! Type something after the URL, like /sonic");
});

app.use("/movie",movieInfo);

app.listen(process.env.PORT, () =>
  console.log(`listen port: ${process.env.PORT}`)
);
