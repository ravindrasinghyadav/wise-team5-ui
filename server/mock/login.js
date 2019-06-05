const util = require('../util');
const CONFIG = require('../../config/config.json');

module.exports = (server) => {
  
  // Login
  server.post(CONFIG.api.login.login, (req, res) => {
    // Send data
    // Get data from json
    // If found - send user data
    res.status(200).jsonp({});
    // Not found - send unauthorized
    res.status(401).jsonp(null);
  });

  // Signup
  server.post(CONFIG.api.login.signup, (req, res) => {
    // Send data
    // Post to user data

    // Send reply
    res.status(200).jsonp({});
  });
}