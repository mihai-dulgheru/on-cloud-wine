const { expect } = require('chai');
const { describe, it } = require('mocha');

describe('Search', function () {
  // The search query is empty
  it('should return all wine bottles if the search query is empty', async function () {
    const response = await fetch(
      'http://localhost:3000/api/wine-bottles?search='
    );
    const data = await response.json();
    expect(response.status).to.equal(200);
    const wineBottles = await fetch(
      'http://localhost:3000/api/wine-bottles'
    ).then((response) => response.json());
    expect(data.length).to.equal(wineBottles.length);
  });

  // The search query is not empty, and there are no matching wine bottles
  it('should return an empty array if there are no matching wine bottles', async function () {
    const response = await fetch(
      'http://localhost:3000/api/wine-bottles?search=foo'
    );
    const data = await response.json();
    expect(response.status).to.equal(200);
    expect(data.length).to.equal(0);
  });

  // The search query is not empty, and there are matching wine bottles
  it('should return an array of matching wine bottles', async function () {
    const searchQuery = 'chardonnay';
    const response = await fetch(
      `http://localhost:3000/api/wine-bottles?search=${searchQuery}`
    );
    const data = await response.json();
    expect(response.status).to.equal(200);
    const wineBottles = await fetch(
      'http://localhost:3000/api/wine-bottles'
    ).then((response) => response.json());
    expect(data.length).to.equal(
      wineBottles.filter((wineBottle) =>
        wineBottle.name.toLowerCase().includes(searchQuery)
      ).length
    );
  });
});
