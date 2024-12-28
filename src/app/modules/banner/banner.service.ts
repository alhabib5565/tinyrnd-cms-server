import { sendImageToCloudinary } from '../../../utils/sendImageToClodinary';
import { TBanner } from './banner.interface';
import Banner from './banner.model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createBanner = async (file: any, payload: TBanner) => {
  const fileBuffer = file?.buffer;
  const imageName = file?.originalname || '';

  //send image to cloudinary
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const { secure_url } = await sendImageToCloudinary(imageName, fileBuffer);
  payload.image = secure_url;
  payload.learnMoreURL = payload.title.split(' ').join('-').toLowerCase();
  const result = await Banner.create(payload);
  return result;
};

const getAllBanner = async () => {
  const result = await Banner.find();
  return result;
};

const getSingleBanner = async (id: string) => {
  const result = await Banner.findById(id);
  return result;
};

const editBanner = async (id: string, payload: Partial<TBanner>) => {
  const result = await Banner.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteBanner = async (id: string) => {
  const result = await Banner.findByIdAndDelete(id);
  return result;
};

export const BannerService = {
  createBanner,
  getAllBanner,
  getSingleBanner,
  editBanner,
  deleteBanner,
};
