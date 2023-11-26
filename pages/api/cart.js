import { Cart } from '@/data';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const wine = req.body;
    if (!wine) {
      return res.status(400).json({ message: 'Missing wine' });
    }
    if (!wine.id) {
      return res.status(400).json({ message: 'Missing wine id' });
    }
    if (!wine.name) {
      return res.status(400).json({ message: 'Missing wine name' });
    }
    if (!wine.picture) {
      return res.status(400).json({ message: 'Missing wine picture' });
    }
    if (!wine.price) {
      return res.status(400).json({ message: 'Missing wine price' });
    }
    const found = Cart.items.find((item) => item.id === wine.id);
    if (found) {
      found.quantity += 1;
      return res.status(200).json({ message: 'Quantity updated: +1' });
    } else {
      Cart.items.push({ ...wine, quantity: 1 });
      return res.status(200).json({ message: 'Wine added to cart 🛒' });
    }
  }

  res.status(405).end(); // Method Not Allowed
}
