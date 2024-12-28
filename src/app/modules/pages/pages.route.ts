import express from 'express';
import { PageController } from './pagee.controller';
import { validateRequestPayload } from '../../middleware/validateRequestPayload';
import { PageValidation } from './pages.validation';

const router = express.Router();

router.post(
  '/create-page',
  validateRequestPayload(PageValidation.createPageValidationSchema),
  PageController.createPage,
);
router.get('/', PageController.getAllPage);
router.get('/:id', PageController.getSinglePage);
router.get('/page-content/:path', PageController.getPageContentByPath);
router.patch('/:id', PageController.editPage);
router.delete('/:id', PageController.deletePage);

export const pageRouter = router;
