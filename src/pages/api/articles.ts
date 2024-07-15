import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import Article from '@/models/Article';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();
    const articles = await Article.find({});
    if (articles.length === 0) {return res.status(404).json({ error: 'No articles found' });}
    res.status(200).json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
}

export default handler;