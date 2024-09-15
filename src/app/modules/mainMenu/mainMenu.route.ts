import express from 'express';
import { MainMenuController } from './mainMenu.controller';
import { validateRequestPayload } from '../../middleware/validateRequestPayload';
import { MainMenuValidation } from './mainMenu.validation';

const router = express.Router();

router.post(
  '/create-main-menu',
  validateRequestPayload(MainMenuValidation.createMainMenuValidation),
  MainMenuController.createMainMenu,
);
router.get('/', MainMenuController.getAllMainMenu);
router.get('/:id', MainMenuController.getSingleMainMenu);
router.patch('/:id', MainMenuController.editMainMenu);
router.patch('/rearrange/menu-item', MainMenuController.rearrangeMainMenuItem);
router.delete('/:id', MainMenuController.deleteMainMenu);
router.delete(
  '/:mainMenuItemId/dropdown/:dropdownItemId',
  MainMenuController.deleteDropdownItem,
);

export const mainMenuRouter = router;
