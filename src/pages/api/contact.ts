import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { FULL_NAME, COMPANY, EMAIL } = req.body;
    const apiKey = process.env.BREVO_KEY;
    if (!apiKey) {res.status(500).json({ message: "API key is missing." }); return;}
    const listId = '6';
    const contactData = {email: EMAIL, attributes: {FULL_NAME: FULL_NAME, COMPANY: COMPANY}, listIds: [parseInt(listId)], updateEnabled: false};
    try {
      const createContactResponse = await fetch('https://api.brevo.com/v3/contacts', {method: 'POST', headers: {'accept': 'application/json', 'content-type': 'application/json', 'api-key': apiKey}, body: JSON.stringify(contactData)});
      if (!createContactResponse.ok) {throw new Error('Failed to create contact');}
      const createContactResult = await createContactResponse.json();
      res.status(200).json({ message: "Your subscription has been successful.", createContactResult });
    } catch (error: any) {
      console.error(error);
      res.status(500).json({ message: "Your subscription could not be saved. Please try again.", error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}