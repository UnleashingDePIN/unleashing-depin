import { Schema, Document, model, models } from 'mongoose';

interface IArticle extends Document {
  title: string;
  url: string;
  subtitle: string;
}

const ArticleSchema = new Schema<IArticle>({
  url: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true }
});

export default models.Article || model<IArticle>('Article', ArticleSchema, 'articles');