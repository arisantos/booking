const server = require('./server');

module.exports = async function(done) {
  server.close(done);
}
