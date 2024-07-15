import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imagesDirectory = path.join(process.cwd(), 'public/ddhh');
  const filenames = fs.readdirSync(imagesDirectory);
  const images = filenames.map(name => path.join('/ddhh', name));
  res.status(200).json(images);
}