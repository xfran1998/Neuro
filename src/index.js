const path = require('path');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const PORT = 3000 || process.env.PORT;

// Seteando carpeta estatica, carpeta donde contiene todos los datos que requiere el usuario cuando hace la peticion
// a la web buscando recursos.
app.use(express.static(path.join(__dirname, 'public')));

server.listen(PORT, () => {console.log(`runing on port ${PORT}`);});