import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';
const notion = new Client({auth: process.env.NOTION_SECRET});
if (!process.env.NOTION_SECRET || !process.env.CONTACT_DATABASE_ID) {throw new Error('Notion secret or contact database ID is not set');}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.NOTION_SECRET || !process.env.CONTACT_DATABASE_ID) {return res.status(500).json({ message: "Environment variables are not set." });}
  if (req.method === 'POST') {
    const { FULL_NAME, COMPANY, EMAIL, TELEGRAM, MESSAGE } = req.body;
    try {
      await notion.pages.create({
        parent: { database_id: process.env.CONTACT_DATABASE_ID },
        properties: {
          Name: {title: [{ text: { content: FULL_NAME } }],},
          Project: {rich_text: [{ text: { content: COMPANY } }],},
          Email: {email: EMAIL,},
          Telegram: {rich_text: [{ text: { content: TELEGRAM } }],},
          Message: {rich_text: [{ text: { content: MESSAGE } }],},
          Source: {select: { name: "Unleashing DePIN" },},
        },
      });
      res.status(200).json({ message: "Your submission has been successful." });
    } 
    catch (error) {console.error(error); res.status(500).json({ message: "Your submission could not be saved. Please try again." });}
  } 
  else {res.setHeader('Allow', ['POST']); res.status(405).end(`Method ${req.method} Not Allowed`);}
}