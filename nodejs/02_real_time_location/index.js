const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Config view engine et fichiers statiques
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function (socket) {
  console.log("Client connecté :", socket.id);

  socket.on("send-location", function (data) {
    io.emit("recive-location", {
      id: socket.id,
      ...data,
    });
  });

  socket.on("disconnect", function () {
    io.emit("user-disconnected", socket.id);
  });
});

app.get("/", function (req, res) {
  res.render("index");
});

server.listen(8001, () => {
  console.log("Server démarré sur http://localhost:8001");
});



// const express = require("express");
// const socketio = require("socket.io");
// const http = require("http");
// const path = require("path");

// const app = express();
// const server = http.createServer(app);
// const io = socketio(server);

// app.set("view engine", "ejs");
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));

// io.on("connection", function (socket) {
//   console.log("connected");
//   socket.on("send-location", function (data) {
//     io.emit("recive-location", {
//       id: socket.id,
//       ...data,
//     });
//   });
//   socket.on("disconnect", function () {
//     io.emit("user-disconnected", socket.id);
//   });
// });

// app.get("/", function (req, res) {
//   res.render("index");
// });

// server.listen(8001, () => {
//   console.log("Server Start");
// });