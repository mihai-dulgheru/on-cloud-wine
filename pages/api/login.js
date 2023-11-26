import { Users } from '@/data';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { password, username } = req.body;
    if (!username) {
      return res.status(400).json({ message: 'Username is required' });
    }
    if (!password) {
      return res.status(400).json({ message: 'Password is required' });
    }
    const user = Users.find((user) => user.username === username);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    return res.status(200).json({ message: 'Login successful' });
  }

  res.status(405).end(); // Method Not Allowed
}
