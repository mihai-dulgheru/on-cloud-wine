const { WineBottles } = require('@/data');

const filterWineBottles = (search) => {
  // TODO: Implement this function
  /**
   const filteredWineBottles = WineBottles.filter((wineBottle) =>
     wineBottle.name.toLowerCase().includes(search.toLowerCase())
   );
   */
  return WineBottles;
};

module.exports = filterWineBottles;
