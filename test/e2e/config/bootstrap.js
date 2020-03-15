const server = require('./server');

module.exports = function(done) {
  // call done() to continue execution
  server.start(done);
}
