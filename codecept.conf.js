const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './test/e2e/*.test.js',
  output: './test/screenshots',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:3333',
      show: true,
      restart: false
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: './test/e2e/config/bootstrap.js',
  teardown: './test/e2e/config/teardown.js',
  mocha: {},
  name: 'Booking',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
