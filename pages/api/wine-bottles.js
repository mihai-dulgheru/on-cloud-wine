import { WineBottles } from '@/data';
import { filterWineBottles } from '@/utils';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { search } = req.query;
    if (search) {
      const filteredWineBottles = filterWineBottles(search);
      return res.status(200).json(filteredWineBottles);
    }
    return res.status(200).json(WineBottles);
  }
}
