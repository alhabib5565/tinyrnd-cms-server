import { model, Schema } from 'mongoose';
import { TPage } from './pages.interface';

const pageSchema = new Schema<TPage>({
  pageName: { type: String, required: true },
  path: { type: String, required: true },
  pageContent: { type: String, required: true },
});

export const Page = model('Page', pageSchema);
