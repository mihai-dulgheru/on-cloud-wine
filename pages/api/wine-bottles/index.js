import { Users, WineBottles } from '@/data';
import { filterWineBottles } from '@/utils';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { favorites } = Users[0];
    const { search } = req.query;
    let wineBottles = WineBottles;
    if (search) {
      wineBottles = filterWineBottles(search);
    }
    if (favorites && favorites.length) {
      wineBottles = wineBottles.map((wineBottle) => {
        const isFavorite = favorites.includes(wineBottle.id);
        return { ...wineBottle, isFavorite };
      });
    }
    return res.status(200).json(wineBottles);
  }
}
