const express = require('express');
const app = express();
var morgan = require("morgan"); 
var compression = require("compression"); 
const CONFIG = require('../config/config.json');
const login = require('./api/login');

// Server logging
// Request logging middleware
app.use(morgan("common"));  
app.use(compression());
// TODO add https support
// https://blog.jscrambler.com/setting-up-5-useful-middlewares-for-an-express-api/

// Serve/host build directory
// make sure to to build the application first before running 'npm run serve'
app.use(express.static('build'));

// Add API end points
login(app);

app.listen(CONFIG.port, '0.0.0.0', () => console.log(`Running ${CONFIG.name} @ ${CONFIG.port}!`));