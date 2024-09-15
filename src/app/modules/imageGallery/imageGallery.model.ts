import { model, Schema } from 'mongoose';
import { TImage } from './imageGallery.interface';

const imageGallerySchema = new Schema<TImage>(
  {
    image: { type: String, required: true },
    caption: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Image = model('Image', imageGallerySchema);
