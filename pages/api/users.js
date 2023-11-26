import { Users } from '@/data';

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res
      .status(200)
      .json(Users.map((user) => ({ username: user.username })));
  }

  res.status(405).end(); // Method Not Allowed
}
