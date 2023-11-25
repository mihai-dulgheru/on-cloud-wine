const { expect } = require('chai');
const { describe, it } = require('mocha');

const WineBottles = [
  {
    id: 1,
    name: 'Domaine de la Vallée',
    picture: 'domaine-de-la-vallee.png',
    description: 'Bordeaux Blend',
    classification: 'Red Bordeaux',
    type: 'Red',
    brand: 'Domaine de la Vallée',
    vintage: '2015',
    country: 'France',
    region: 'Bordeaux',
    grape: 'Merlot, Cabernet Sauvignon',
    volume: 0.75,
    condition: 'New',
    label: 'Excellent',
    drinkable: '2025',
    stock: 20,
    price: 29.99,
    rating: 4.7,
    reviews: 15,
    categories: ['Red', 'Bordeaux Blend', 'France', 'Family Event'],
  },
  {
    id: 2,
    name: 'Castello di Amore',
    picture: 'castello-di-amore.png',
    description: 'Chianti Classico',
    classification: 'DOCG',
    type: 'Red',
    brand: 'Castello di Amore',
    vintage: '2017',
    country: 'Italy',
    region: 'Tuscany',
    grape: 'Sangiovese',
    volume: 0.75,
    condition: 'New',
    label: 'Outstanding',
    drinkable: '2023',
    stock: 15,
    price: 24.99,
    rating: 4.6,
    reviews: 18,
    categories: ['Red', 'Chianti Classico', 'Italy', 'Special Price'],
  },
  {
    id: 3,
    name: 'Silver Creek Reserve',
    picture: 'silver-creek-reserve.png',
    description: 'Napa Valley Reserve',
    classification: 'Cabernet Sauvignon',
    type: 'Red',
    brand: 'Silver Creek',
    vintage: '2014',
    country: 'United States',
    region: 'Napa Valley',
    grape: 'Cabernet Sauvignon',
    volume: 0.75,
    condition: 'Aged',
    label: 'Limited Edition',
    drinkable: '2022',
    stock: 8,
    price: 39.99,
    rating: 4.8,
    reviews: 22,
    categories: ['Red', 'Cabernet Sauvignon', 'California', 'Family Event'],
  },
  {
    id: 4,
    name: 'Villa de Luna',
    picture: 'villa-de-luna.png',
    description: 'Rioja Reserva',
    classification: 'DOCa',
    type: 'Red',
    brand: 'Villa de Luna',
    vintage: '2016',
    country: 'Spain',
    region: 'Rioja',
    grape: 'Tempranillo',
    volume: 0.75,
    condition: 'Aged',
    label: 'Reserva Especial',
    drinkable: '2024',
    stock: 12,
    price: 27.99,
    rating: 4.5,
    reviews: 20,
    categories: ['Red', 'Rioja Reserva', 'Spain', 'Special Price'],
  },
  {
    id: 5,
    name: 'Gold Coast Estates',
    picture: 'gold-coast-estates.png',
    description: 'Sauvignon Blanc',
    classification: 'White',
    type: 'White',
    brand: 'Gold Coast Estates',
    vintage: '2019',
    country: 'New Zealand',
    region: 'Marlborough',
    grape: 'Sauvignon Blanc',
    volume: 0.75,
    condition: 'New',
    label: 'Crisp and Zesty',
    drinkable: '2021',
    stock: 25,
    price: 21.99,
    rating: 4.3,
    reviews: 15,
    categories: ['White', 'Sauvignon Blanc', 'New Zealand', 'Family Event'],
  },
  {
    id: 6,
    name: 'Mountaineer Ridge',
    picture: 'mountaineer-ridge.png',
    description: 'Pinot Noir',
    classification: 'Reserve',
    type: 'Red',
    brand: 'Mountaineer Ridge',
    vintage: '2018',
    country: 'United States',
    region: 'Oregon',
    grape: 'Pinot Noir',
    volume: 0.75,
    condition: 'New',
    label: 'Elegant Reserve',
    drinkable: '2022',
    stock: 18,
    price: 32.99,
    rating: 4.6,
    reviews: 16,
    categories: ['Red', 'Pinot Noir', 'Oregon', 'Special Price'],
  },
  {
    id: 7,
    name: 'Ocean Breeze Vineyards',
    picture: 'ocean-breeze-vineyards.png',
    description: 'Chardonnay',
    classification: 'Unoaked',
    type: 'White',
    brand: 'Ocean Breeze',
    vintage: '2020',
    country: 'Australia',
    region: 'Margaret River',
    grape: 'Chardonnay',
    volume: 0.75,
    condition: 'New',
    label: 'Unoaked Delight',
    drinkable: '2023',
    stock: 22,
    price: 26.99,
    rating: 4.4,
    reviews: 14,
    categories: ['White', 'Chardonnay', 'Australia', 'Family Event'],
  },
  {
    id: 8,
    name: 'Sunset Ridge Winery',
    picture: 'sunset-ridge-winery.png',
    description: 'Zinfandel',
    classification: 'Old Vine',
    type: 'Red',
    brand: 'Sunset Ridge',
    vintage: '2015',
    country: 'United States',
    region: 'California',
    grape: 'Zinfandel',
    volume: 0.75,
    condition: 'Aged',
    label: 'Old Vine Gem',
    drinkable: '2024',
    stock: 10,
    price: 35.99,
    rating: 4.7,
    reviews: 19,
    categories: ['Red', 'Zinfandel', 'California', 'Special Price'],
  },
  {
    id: 9,
    name: 'Villa Serena',
    picture: 'villa-serena.png',
    description: 'Malbec',
    classification: 'Reserva',
    type: 'Red',
    brand: 'Villa Serena',
    vintage: '2016',
    country: 'Argentina',
    region: 'Mendoza',
    grape: 'Malbec',
    volume: 0.75,
    condition: 'Aged',
    label: 'Rich Reserva',
    drinkable: '2023',
    stock: 14,
    price: 28.99,
    rating: 4.6,
    reviews: 17,
    categories: ['Red', 'Malbec', 'Argentina', 'Family Event'],
  },
  {
    id: 10,
    name: 'Mystic Valley Estates',
    picture: 'mystic-valley-estates.png',
    description: 'Syrah',
    classification: 'Single Vineyard',
    type: 'Red',
    brand: 'Mystic Valley Estates',
    vintage: '2019',
    country: 'Chile',
    region: 'Colchagua Valley',
    grape: 'Syrah',
    volume: 0.75,
    condition: 'New',
    label: 'Intense Syrah',
    drinkable: '2025',
    stock: 16,
    price: 31.99,
    rating: 4.8,
    reviews: 21,
    categories: ['Red', 'Syrah', 'Chile', 'Special Price'],
  },
];

describe('Search', function () {
  // The search query is empty
  it('should return all wine bottles if the search query is empty', async function () {
    const response = await fetch(
      'http://localhost:3000/api/wine-bottles?search=',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const data = await response.json();
    expect(response.status).to.equal(200);
    expect(data.length).to.equal(WineBottles.length);
  });

  // The search query is not empty, and there are no matching wine bottles
  it('should return an empty array if there are no matching wine bottles', async function () {
    const response = await fetch(
      'http://localhost:3000/api/wine-bottles?search=foo',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const data = await response.json();
    expect(response.status).to.equal(200);
    expect(data.length).to.equal(0);
  });

  // The search query is not empty, and there are matching wine bottles
  it('should return an array of matching wine bottles', async function () {
    const searchQuery = 'chardonnay';
    const response = await fetch(
      `http://localhost:3000/api/wine-bottles?search=${searchQuery}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const data = await response.json();
    expect(response.status).to.equal(200);
    expect(data.length).to.equal(
      WineBottles.filter((wineBottle) =>
        wineBottle.name.toLowerCase().includes(searchQuery)
      ).length
    );
  });
});
