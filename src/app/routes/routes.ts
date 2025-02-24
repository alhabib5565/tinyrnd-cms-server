import express from 'express';
import { userRouter } from '../modules/user/user.route';
import { mainMenuRouter } from '../modules/mainMenu/mainMenu.route';
import { pageRouter } from '../modules/pages/pages.route';
import { imageGalleryRouter } from '../modules/imageGallery/imageGallery.route';
import { bannerRouter } from '../modules/banner/banner.route';

const router = express.Router();

router.use('/users', userRouter);
router.use('/main-menus', mainMenuRouter);
router.use('/pages', pageRouter);
router.use('/images', imageGalleryRouter);
router.use('/banners', bannerRouter);

export const Routes = router;
