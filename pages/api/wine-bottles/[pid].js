import { Users, WineBottles } from '@/data';
import { falsy } from '@/utils';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { pid } = req.query;
    if (!pid) {
      res.status(400).json({ error: 'Missing pid' });
    }
    const wineBottle = WineBottles.find(
      (wineBottle) => wineBottle.id.toString() === pid.toString()
    );
    if (!wineBottle) {
      res.status(404).json({ error: 'Wine bottle not found' });
    }
    res.status(200).json(wineBottle);
  } else if (req.method === 'PATCH') {
    const { pid } = req.query;
    if (!falsy(pid)) {
      const wineBottle = WineBottles.find(
        (wineBottle) => wineBottle.id.toString() === pid.toString()
      );
      if (wineBottle) {
        const user = Users[0];
        const { isFavorite } = req.body;
        if (isFavorite) {
          user.favorites?.push(wineBottle.id);
        } else {
          user.favorites = user.favorites?.filter((id) => id !== wineBottle.id);
        }
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'Wine bottle not found' });
      }
    } else {
      res.status(400).json({ message: 'Missing id' });
    }
  }

  res.status(405).end(); // Method Not Allowed
}
