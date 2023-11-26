import { Cart } from '@/data';

export default function handler(req, res) {
  if (req.method === 'POST') {
    // TODO: Implement login
    // const wine = req.body;
    // if (!wine) {
    //   return res.status(400).json({ message: 'Missing wine' });
    // }
    // if (!wine.id) {
    //   return res.status(400).json({ message: 'Missing wine id' });
    // }
    // if (!wine.name) {
    //   return res.status(400).json({ message: 'Missing wine name' });
    // }
    // if (!wine.picture) {
    //   return res.status(400).json({ message: 'Missing wine picture' });
    // }
    // if (!wine.price) {
    //   return res.status(400).json({ message: 'Missing wine price' });
    // }

    // const foundItem = Cart.items.find((item) => item.id === wine.id);
    // if (foundItem) {
    //   foundItem.quantity += 1;
    //   return res.status(200).json({ message: 'Quantity updated: +1' });
    // } else {
    //   Cart.items.push({ ...wine, quantity: 1 });
    //   return res.status(200).json({ message: 'Wine added to cart 🛒' });
    // }

    return res.status(400).json({ message: 'Not implemented' });
  }
}
