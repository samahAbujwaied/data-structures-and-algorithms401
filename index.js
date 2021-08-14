'use strict';
require('dotenv').config();

const server = require('./src/server');

db.sync().then(()=> {
    server.start(3030);
})
.catch(`error when runing server ${console.error}`);
