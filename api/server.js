const express = require('express');

const server = express();
const apiRouter = require('./api-router.js');

server.use(express.json());

server.use('/api', apiRouter);


module.exports = server;