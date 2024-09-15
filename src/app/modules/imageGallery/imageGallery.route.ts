import express, { NextFunction, Request, Response } from 'express';
import { validateRequestPayload } from '../../middleware/validateRequestPayload';
import { ImageValidation } from './imageGallery.validation';
import { ImageController } from './imageGallery.controller';
import { upload } from '../../../utils/sendImageToClodinary';

const router = express.Router();

router.post(
  '/create-image',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequestPayload(ImageValidation.createImageValidationSchema),
  ImageController.createImage,
);
router.get('/', ImageController.getAllImage);
router.get('/:id', ImageController.getSingleImage);
router.patch('/:id', ImageController.editImage);
router.delete('/:id', ImageController.deleteImage);

export const imageGalleryRouter = router;
