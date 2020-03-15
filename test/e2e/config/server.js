const { Nuxt, Builder } = require('nuxt');

const config = require('../../../nuxt.config.js');
config.dev = false;

let nuxt = null;


module.exports = {
  start: async done => {
    try {
      nuxt = new Nuxt(config);
      await new Builder(nuxt).build();
      await nuxt.listen(3333, 'localhost');
      done();
    } catch(err) {
      console.log(err);
    }
  },
  close: async done => {
    try {
      await nuxt.close();
      done();
    } catch(err) {
      console.log(err);
    }
  }
};
