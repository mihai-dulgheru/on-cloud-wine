import { WineBottles } from '@/data';

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
  }
}
