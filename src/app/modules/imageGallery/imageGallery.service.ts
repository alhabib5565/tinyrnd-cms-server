import { sendImageToCloudinary } from '../../../utils/sendImageToClodinary';
import { TImage } from './imageGallery.interface';
import { Image } from './imageGallery.model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createImage = async (file: any, payload: TImage) => {
  const fileBuffer = file?.buffer;
  const imageName = file?.originalname || '';

  //send image to cloudinary
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const { secure_url } = await sendImageToCloudinary(imageName, fileBuffer);
  payload.image = secure_url;
  const result = await Image.create(payload);
  return result;
};

const getAllImage = async () => {
  const result = await Image.find();
  return result;
};

const getSingleImage = async (id: string) => {
  const result = await Image.findById(id);
  return result;
};

const editImage = async (id: string, payload: Partial<TImage>) => {
  const result = await Image.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteImage = async (id: string) => {
  const result = await Image.findByIdAndDelete(id);
  return result;
};

export const ImageService = {
  createImage,
  getAllImage,
  getSingleImage,
  editImage,
  deleteImage,
};
