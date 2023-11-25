import { WineBottles } from '@/data';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const wineBottlesCategories = [];
    const allCategories = WineBottles.reduce((acc, curr) => {
      return [...acc, ...curr.categories];
    }, []);
    const uniqueCategories = [...new Set(allCategories)].sort();
    uniqueCategories.forEach((category) => {
      const wineBottles = WineBottles.filter((wineBottle) => {
        return wineBottle.categories.includes(category);
      });
      wineBottlesCategories.push({
        id: category.toLowerCase(),
        image: wineBottles[0].picture,
        name: category,
        wineBottles,
      });
    });
    return res.status(200).json(wineBottlesCategories);
  }
}
