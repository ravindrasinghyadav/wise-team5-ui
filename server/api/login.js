const proxy = require('http-proxy-middleware');
const modifyResponse = require('node-http-proxy-json');
const CONFIG = require('../../config/config.json');

module.exports = (server) => {

  // Login
  server.use(CONFIG.api.login.login, proxy({
    target: `${CONFIG.api.url}:${CONFIG.api.port}`,
    changeOrigin: true,
    logLevel: 'debug'
  }));

  // Signup
  server.use(CONFIG.api.login.signup, proxy({
    target: `${CONFIG.api.url}:${CONFIG.api.port}`,
    changeOrigin: true,
    logLevel: 'debug'
  }));

  // Reset
  server.use(CONFIG.api.login.resetpassword, proxy({
    target: `${CONFIG.api.url}:${CONFIG.api.port}`,
    changeOrigin: true,
    logLevel: 'debug'
  }));
}