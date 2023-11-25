const { describe } = require('mocha');

describe('Test-driven development', async function () {
  require('./login.test.js');
  require('./is-email.test.js');
  require('./signup.test.js');
  require('./search.test.js');
});
