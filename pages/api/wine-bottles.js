import { WineBottles } from '@/data';

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(WineBottles);
  } else if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
