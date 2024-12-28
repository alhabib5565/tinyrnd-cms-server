import express, { NextFunction, Request, Response } from 'express';
import { validateRequestPayload } from '../../middleware/validateRequestPayload';
import { upload } from '../../../utils/sendImageToClodinary';
import { BannerController } from './banner.controller';
import { BannerValidation } from './banner.validation';

const router = express.Router();

router.post(
  '/create-banner',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequestPayload(BannerValidation.createBannerValidationSchema),
  BannerController.createBanner,
);
router.get('/', BannerController.getAllBanner);
router.get('/:id', BannerController.getSingleBanner);
router.patch('/:id', BannerController.editBanner);
router.delete('/:id', BannerController.deleteBanner);

export const bannerRouter = router;
