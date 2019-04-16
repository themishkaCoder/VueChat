const express = require("express");
const app = express()
const server = require("http").createServer(app)

server.listen(3000)

app.use(express.static('dist'));

app.get("/", (request, respons) => {
    respons.sendFile(__dirname + "/dist/index.html" );
});