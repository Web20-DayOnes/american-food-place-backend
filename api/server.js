require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const passport = require("passport");
require("../config/passport-setup");
const { Auth, User } = require("../routes/index");

const server = express();

const port = process.env.PORT;

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan("combined"));
server.use(passport.initialize());

server.use("/", User);
server.use("/auth", Auth);

server.get("/", (req, res) => {
  res.send(`<h1>This server is up and running.</h1>`);
});

server.listen(port, () => {
  console.log(`Server listening on port ${process.env.PORT}!`);
});

module.exports = server;
