import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imagesDirectory = path.join(process.cwd(), 'public/ecosystem');
  fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
      console.error('Failed to list images:', err);
      return res.status(500).json({ message: 'Failed to list images' });
    }
    const imageUrls = files.filter(file => /\.(png|jpe?g|svg)$/.test(file)).map(file => `/ecosystem/${file}`);
    res.status(200).json(imageUrls);
  });
}