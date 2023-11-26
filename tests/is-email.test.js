const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('isEmail function', function () {
  // Returns true for valid email addresses with providers gmail, yahoo, and hotmail
  it('should return true for valid email addresses with providers gmail, yahoo, and hotmail', async function () {
    // Arrange
    const email = 'test@gmail.com';

    // Act
    const result = await fetch('http://localhost:3000/api/verify-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    // Assert
    expect(result.status).to.equal(200);
    const data = await result.json();
    expect(data.valid).to.be.true;
  });

  // Returns false for invalid email addresses
  it('should return false for invalid email addresses', async function () {
    // Arrange
    const email = 'invalidemail';

    // Act
    const result = await fetch('http://localhost:3000/api/verify-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    // Assert
    expect(result.status).to.equal(200);
    const data = await result.json();
    expect(data.valid).to.be.false;
  });

  // Returns false for valid email addresses with providers other than gmail, yahoo, and hotmail
  it('should return false for valid email addresses with providers other than gmail, yahoo, and hotmail', async function () {
    // Arrange
    const email = 'test@example.com';

    // Act
    const result = await fetch('http://localhost:3000/api/verify-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    // Assert
    expect(result.status).to.equal(200);
    const data = await result.json();
    expect(data.valid).to.be.false;
  });

  // Returns false for empty email string
  it('should return false for empty email string', async function () {
    // Arrange
    const email = '';

    // Act
    const result = await fetch('http://localhost:3000/api/verify-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    // Assert
    expect(result.status).to.equal(200);
    const data = await result.json();
    expect(data.valid).to.be.false;
  });

  // Returns false for email string with only spaces
  it('should return false for email string with only spaces', async function () {
    // Arrange
    const email = '     ';

    // Act
    const result = await fetch('http://localhost:3000/api/verify-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    // Assert
    expect(result.status).to.equal(200);
    const data = await result.json();
    expect(data.valid).to.be.false;
  });

  // Returns false for email string without '@' character
  it("should return false for email string without '@' character", async function () {
    // Arrange
    const email = 'testexample.com';

    // Act
    const result = await fetch('http://localhost:3000/api/verify-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    // Assert
    expect(result.status).to.equal(200);
    const data = await result.json();
    expect(data.valid).to.be.false;
  });
});
