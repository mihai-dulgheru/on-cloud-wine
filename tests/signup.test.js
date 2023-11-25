const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('Signup', function () {
  // Missing username
  it('should return 400 if the username is missing', async function () {
    const response = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@email.com', password: 'test' }),
    });
    const data = await response.json();
    expect(response.status).to.equal(400);
    expect(data.message).to.equal('Missing username');
  });

  // Missing email
  it('should return 400 if the email is missing', async function () {
    const response = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'test', password: 'test' }),
    });
    const data = await response.json();
    expect(response.status).to.equal(400);
    expect(data.message).to.equal('Missing email');
  });

  // Missing password
  it('should return 400 if the password is missing', async function () {
    const response = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'test', email: 'test@email.com' }),
    });
    const data = await response.json();
    expect(response.status).to.equal(400);
    expect(data.message).to.equal('Missing password');
  });

  // The username already exists in the database
  it('should return 409 if the username already exists', async function () {
    const response = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'test',
        email: 'test2@email.com',
        password: 'test',
      }),
    });
    const data = await response.json();
    expect(response.status).to.equal(409);
    expect(data.message).to.equal('Username already exists');
  });

  // The email already exists in the database
  it('should return 409 if the email already exists', async function () {
    const response = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'test2',
        email: 'test@email.com',
        password: 'test',
      }),
    });
    const data = await response.json();
    expect(response.status).to.equal(409);
    expect(data.message).to.equal('Email already exists');
  });

  // The username and email do not exist in the database and the password is invalid (less than 8 characters)
  it('should return 400 if the username and email do not exist and the password is invalid', async function () {
    const response = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'test2',
        email: 'test2@email.com',
        password: 'test',
      }),
    });
    const data = await response.json();
    expect(response.status).to.equal(400);
    expect(data.message).to.equal('Invalid password');
  });

  // The username and email do not exist in the database and the password is valid
  it('should return 201 if the username and email do not exist and the password is valid', async function () {
    const response = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'test2',
        email: 'test2@email.com',
        password: 'test',
      }),
    });
    const data = await response.json();
    expect(response.status).to.equal(201);
    expect(data.message).to.equal('Signup successful');
  });
});
