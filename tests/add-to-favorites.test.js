const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('Add to favorites', function () {
  // Missing id
  it('should return 400 if missing id', async function () {
    // Arrange
    const id = undefined;
    const payload = {
      isFavorite: true,
    };

    // Act
    const result = await fetch(`http://localhost:3000/api/wine-bottles/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // Assert
    expect(result.status).to.equal(400);
    const data = await result.json();
    expect(data.message).to.equal('Missing id');
  });

  // Wine bottle not found
  it('should return 404 if wine bottle not found', async function () {
    // Arrange
    const id = 999;
    const payload = {
      isFavorite: true,
    };

    // Act
    const result = await fetch(`http://localhost:3000/api/wine-bottles/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // Assert
    expect(result.status).to.equal(404);
    const data = await result.json();
    expect(data.message).to.equal('Wine bottle not found');
  });

  // Add to favorites
  it('should add wine bottle to favorites', async function () {
    // Arrange
    const id = 1;
    const payload = {
      isFavorite: true,
    };

    // Act
    const result = await fetch(`http://localhost:3000/api/wine-bottles/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // Assert
    expect(result.status).to.equal(200);
    const user = await result.json();
    expect(user.favorites).to.include(id);
  });
});
