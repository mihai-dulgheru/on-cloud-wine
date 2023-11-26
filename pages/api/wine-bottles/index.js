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

    if (favorites?.length) {
      wineBottles = wineBottles.map((wineBottle) => ({
        ...wineBottle,
        isFavorite: favorites.includes(wineBottle.id),
      }));
    }

    return res.status(200).json(wineBottles);
  }

  res.status(405).end(); // Method Not Allowed
}
