const { describe } = require('mocha');

describe('Connection', function () {
  before(function () {
    // runs once before the first test in this block
    // e.g. connect to database
  });

  after(function () {
    // runs once after the last test in this block
    // e.g. disconnect from database
  });

  beforeEach(function () {
    // runs before each test in this block
    // e.g. reset database
  });

  afterEach(function () {
    // runs after each test in this block
    // e.g. delete all data from database
  });

  describe('Test-driven development', function () {
    // require('./login.test.js');
    // require('./is-email.test.js');
    // require('./signup.test.js');
    // require('./search.test.js');
    // require('./add-to-favorites.test.js');
    // require('./add-to-cart.test.js');
  });
});
