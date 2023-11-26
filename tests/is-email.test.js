const { expect } = require('chai');
const { describe, it } = require('mocha');

const isEmail = (email) => {
  // TODO: Implement this function
  return;
};

describe('isEmail function', function () {
  // Returns true for valid email addresses with providers gmail, yahoo, and hotmail
  it('should return true for valid email addresses with providers gmail, yahoo, and hotmail', async function () {
    // Arrange
    const email = 'test@gmail.com';

    // Act
    const result = isEmail(email);

    // Assert
    expect(result).to.be.true;
  });

  // Returns false for invalid email addresses
  it('should return false for invalid email addresses', async function () {
    // Arrange
    const email = 'invalidemail';

    // Act
    const result = isEmail(email);

    // Assert
    expect(result).to.be.false;
  });

  // Returns false for valid email addresses with providers other than gmail, yahoo, and hotmail
  it('should return false for valid email addresses with providers other than gmail, yahoo, and hotmail', async function () {
    // Arrange
    const email = 'test@example.com';

    // Act
    const result = isEmail(email);

    // Assert
    expect(result).to.be.false;
  });

  // Returns false for empty email string
  it('should return false for empty email string', async function () {
    // Arrange
    const email = '';

    // Act
    const result = isEmail(email);

    // Assert
    expect(result).to.be.false;
  });

  // Returns false for email string with only spaces
  it('should return false for email string with only spaces', async function () {
    // Arrange
    const email = '     ';

    // Act
    const result = isEmail(email);

    // Assert
    expect(result).to.be.false;
  });

  // Returns false for email string without '@' character
  it("should return false for email string without '@' character", async function () {
    // Arrange
    const email = 'testexample.com';

    // Act
    const result = isEmail(email);

    // Assert
    expect(result).to.be.false;
  });
});
