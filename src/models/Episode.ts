import { Schema, Document, model, models } from 'mongoose';

interface IEpisode extends Document {
  image: string;
  youtube: string;
  spotify: string;
  apple: string;
}

const EpisodeSchema = new Schema<IEpisode>({
  image: { type: String, required: true },
  youtube: { type: String, required: true },
  spotify: { type: String, required: true },
  apple: { type: String, required: true }
});

export default models.Episode || model<IEpisode>('Episode', EpisodeSchema, 'episodes');