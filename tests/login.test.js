const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('Login', function () {
  // The username does not exist in the database
  it('should return 401 if the username does not exist', async function () {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'foo', password: 'bar' }),
    });
    const data = await response.json();
    expect(response.status).to.equal(404);
    expect(data.message).to.equal('User not found');
  });

  // The username exists in the database, but the password is incorrect
  it('should return 401 if the password is incorrect', async function () {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'test', password: 'bar' }),
    });
    const data = await response.json();
    expect(response.status).to.equal(401);
    expect(data.message).to.equal('Invalid username or password');
  });

  // The username exists in the database, and the password is correct
  it('should return 200 if the username and password are correct', async function () {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'test', password: 'test' }),
    });
    const data = await response.json();
    expect(response.status).to.equal(200);
    expect(data.message).to.equal('Login successful');
  });
});
