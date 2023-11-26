const { describe } = require('mocha');
const {
  connectToDatabase,
  disconnectFromDatabase,
  resetDatabase,
  deleteAllDataFromDatabase,
} = require('../database.js');

describe('Connection', function () {
  before(function () {
    // runs once before the first test in this block
    connectToDatabase();
  });

  after(function () {
    // runs once after the last test in this block
    disconnectFromDatabase();
  });

  beforeEach(function () {
    // runs before each test in this block
    resetDatabase();
  });

  afterEach(function () {
    // runs after each test in this block
    deleteAllDataFromDatabase();
  });

  describe('Test-driven development', function () {
    require('./login.test.js');
    require('./is-email.test.js');
    require('./signup.test.js');
    require('./search.test.js');
    require('./add-to-favorites.test.js');
    require('./add-to-cart.test.js');
  });
});
