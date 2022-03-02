const path = require("path");
const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const PORT = 3000 || process.env.PORT;
const io = socketio(server);

let reloaded = false;

// Seteando carpeta estatica, carpeta donde contiene todos los datos que requiere el usuario cuando hace la peticion
// a la web buscando recursos.
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
	console.log("Nueva conexion!!");
});

server.listen(PORT, () => {
	console.log(`runing on port ${PORT}`);
});
