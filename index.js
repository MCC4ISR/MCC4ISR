const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const { instrument } = require("@socket.io/admin-ui");

const io = new Server(httpServer, {
  cors: {
    origin: ["http://127.0.0.1:299"],
    credentials : true
  }
});

instrument(io, {
    auth: {
        type: "basic",
        username: "admin",
        password: "$2b$10$heqvAkYMez.Va6Et2uXInOnkCT6/uQj1brkrbyG3LpopDklcq7ZOS" // "changeit" encrypted with bcrypt
      },
  mode: "development",
});



httpServer.listen(3000);