const { WineBottles } = require('@/data');

const filterWineBottles = (search) => {
  if (!search) {
    return WineBottles;
  }

  const lowercasedSearch = search.toLowerCase();
  const filteredWineBottles = WineBottles.filter(({ name }) =>
    name.toLowerCase().includes(lowercasedSearch)
  );

  return filteredWineBottles;
};

module.exports = filterWineBottles;
