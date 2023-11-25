export default function handler(req, res) {
  if (req.method === 'POST') {
    // TODO: Implement login
    return res.status(401).json({ message: 'Invalid username or password' });
  }
}
