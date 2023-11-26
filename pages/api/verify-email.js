const ALLOWED_DOMAINS = new Set(['gmail', 'hotmail', 'yahoo']);

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    const formattedEmail = email.trim().toLowerCase();

    if (
      !formattedEmail ||
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formattedEmail)
    ) {
      return res.status(200).json({ valid: false });
    }

    const domain = formattedEmail.split('@')[1].split('.')[0];
    const validDomain = ALLOWED_DOMAINS.has(domain);

    return res.status(200).json({ valid: validDomain });
  }

  res.status(405).end(); // Method Not Allowed
}
