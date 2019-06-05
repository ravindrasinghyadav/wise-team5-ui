const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const CONFIG = require('../config/config.json');
const login = require('./api/login');
const local = require('./mock/login');
const practice = require('./mock/practice');

server.use(middlewares);

if (process.argv.indexOf('useRemote') > -1) {
  // Prioritize remote API over mock
  console.info(`Using remote APIs @ ${CONFIG.api.url}`);
  login(server);
}

// By default, activate mock data
local(server);
practice(server);

server.listen(CONFIG.api.port, () => console.log(`Running ${CONFIG.name} mock server @ ${CONFIG.api.port}!`));