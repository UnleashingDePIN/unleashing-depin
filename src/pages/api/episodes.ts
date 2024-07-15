import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/dbConnect';
import Episode from '@/models/Episode';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();
    const episodes = await Episode.find({});
    if (episodes.length === 0) {return res.status(404).json({ error: 'No episodes found' });}
    res.status(200).json(episodes);
  } catch (error) {
    console.error('Error fetching episodes:', error);
    res.status(500).json({ error: 'Failed to fetch episodes' });
  }
}

export default handler;