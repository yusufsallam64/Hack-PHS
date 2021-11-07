// imports 
const express = require('express');
const logger = require('morgan');
const path = require('path');
const http = require('http');
const hbs = require('hbs')
const fs = require('fs');

// routes
const indexRouter = require('./routes/index');
const gameRouter = require('./routes/game')

// scripts
const generator = require('./generator.js');
console.log(generator.generateGrid());

// list of text
const text = fs.readFileSync("words_alpha.txt").toString().split('\r\n');

// setup express app
const app = express();
const PORT = process.env.PORT || 8000;

// setup sockets 
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

io.on('connection', (connection) => {
    connection.emit("words", text);
})

// setup paths for config
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// view engine setup
app.set('views', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

// setup static directory
app.use(express.static(publicDirectoryPath));

// setup express configs
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// setup routes
app.use('/', indexRouter);
app.use('/game', gameRouter);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});