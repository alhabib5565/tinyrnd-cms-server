import { model, Schema } from 'mongoose';
import { TBanner } from './banner.interface';

const bannerSchema = new Schema<TBanner>(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    learnMoreURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Banner = model('Banner', bannerSchema);

export default Banner;
