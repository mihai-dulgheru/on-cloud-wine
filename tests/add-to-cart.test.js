const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('Add to cart', function () {
  // Missing wine
  it('should return 400 if missing wine', async function () {
    // Arrange
    const payload = null;

    // Act
    const result = await fetch(`http://localhost:3000/api/cart/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // Assert
    expect(result.status).to.equal(400);
    const data = await result.json();
    expect(data.message).to.equal('Missing wine');
  });

  // Missing wine id
  it('should return 400 if missing wine id', async function () {
    // Arrange
    const payload = {
      name: 'Domaine de la Vallée',
      picture: 'domaine-de-la-vallee.png',
      price: 29.99,
    };

    // Act
    const result = await fetch(`http://localhost:3000/api/cart/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // Assert
    expect(result.status).to.equal(400);
    const data = await result.json();
    expect(data.message).to.equal('Missing wine id');
  });

  // Missing wine name
  it('should return 400 if missing wine name', async function () {
    // Arrange
    const payload = {
      id: 1,
      picture: 'domaine-de-la-vallee.png',
      price: 29.99,
    };

    // Act
    const result = await fetch(`http://localhost:3000/api/cart/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // Assert
    expect(result.status).to.equal(400);
    const data = await result.json();
    expect(data.message).to.equal('Missing wine name');
  });

  // Missing wine picture
  it('should return 400 if missing wine picture', async function () {
    // Arrange
    const payload = {
      id: 1,
      name: 'Domaine de la Vallée',
      price: 29.99,
    };

    // Act
    const result = await fetch(`http://localhost:3000/api/cart/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // Assert
    expect(result.status).to.equal(400);
    const data = await result.json();
    expect(data.message).to.equal('Missing wine picture');
  });

  // Missing wine price
  it('should return 400 if missing wine price', async function () {
    // Arrange
    const payload = {
      id: 1,
      name: 'Domaine de la Vallée',
      picture: 'domaine-de-la-vallee.png',
    };

    // Act
    const result = await fetch(`http://localhost:3000/api/cart/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // Assert
    expect(result.status).to.equal(400);
    const data = await result.json();
    expect(data.message).to.equal('Missing wine price');
  });

  // Add to cart (new item)
  it('should add wine to cart', async function () {
    // Arrange
    const payload = {
      id: 10,
      name: 'Mystic Valley Estates',
      picture: 'mystic-valley-estates.png',
      price: 31.99,
    };

    // Act
    const result = await fetch(`http://localhost:3000/api/cart/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // Assert
    expect(result.status).to.equal(200);
    const data = await result.json();
    expect(data.message).to.equal('Wine added to cart 🛒');
  });

  // Add to cart (existing item)
  it('should add wine to cart', async function () {
    // Arrange
    const payload = {
      id: 1,
      name: 'Domaine de la Vallée',
      picture: 'domaine-de-la-vallee.png',
      price: 29.99,
    };

    // Act
    const result = await fetch(`http://localhost:3000/api/cart/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    // Assert
    expect(result.status).to.equal(200);
    const data = await result.json();
    expect(data.message).to.equal('Quantity updated: +1');
  });
});
