import { Users } from '@/data';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, username } = req.body;
    if (!username) {
      return res.status(400).json({ message: 'Missing username' });
    }
    if (!email) {
      return res.status(400).json({ message: 'Missing email' });
    }
    if (!password) {
      return res.status(400).json({ message: 'Missing password' });
    }
    const existingUsername = Users.find((user) => user.username === username);
    if (existingUsername) {
      return res.status(409).json({ message: 'Username already exists' });
    }
    const existingEmail = Users.find((user) => user.email === email);
    if (existingEmail) {
      return res.status(409).json({ message: 'Email already exists' });
    }
    if (password.length < 8) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    const newUser = {
      id: Users.length + 1,
      email,
      favorites: [],
      password,
      username,
    };
    Users.push(newUser);
    return res.status(201).json({ message: 'Signup successful' });
  }

  res.status(405).end(); // Method Not Allowed
}
