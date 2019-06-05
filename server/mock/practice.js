const PRACTICE_DATA = require('./data/practice.json')
const CONFIG = require('../../config/config.json');

module.exports = (server) => {
  

  // Entity listing
  server.get(CONFIG.api.practice.question, (req, res) => {
    // Send data
    // Since we hace one category just statically send it for mock purposes
    res.jsonp(PRACTICE_DATA[0]);
  
    // To test error behavior
    // res.status(400).jsonp([]);
  });

  server.get(CONFIG.api.practice.answer, (req, res) => {
    // Send data
    res.jsonp('');
  
    // To test error behavior
    // res.status(400).jsonp('');
  });
}