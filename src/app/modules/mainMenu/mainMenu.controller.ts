import { Request, Response } from 'express';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { MainMenuService } from './mainMenu.service';

const createMainMenu = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  const result = await MainMenuService.createMainMenu(user);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'MainMenu created successfully!',
    data: result,
  });
});

const getAllMainMenu = catchAsync(async (req: Request, res: Response) => {
  const result = await MainMenuService.getAllMainMenu();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'MainMenus retrived successfully',
    data: result,
  });
});

const getSingleMainMenu = catchAsync(async (req: Request, res: Response) => {
  const result = await MainMenuService.getSingleMainMenu(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'MainMenu retrived successfully',
    data: result,
  });
});

const editMainMenu = catchAsync(async (req: Request, res: Response) => {
  const result = await MainMenuService.editMainMenu(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'MainMenu edit successfully',
    data: result,
  });
});

const rearrangeMainMenuItem = catchAsync(
  async (req: Request, res: Response) => {
    const result = await MainMenuService.rearrangeMainMenuItem(req.body);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Rearrange main menu item successfully',
      data: result,
    });
  },
);

const deleteMainMenu = catchAsync(async (req: Request, res: Response) => {
  const result = await MainMenuService.deleteMainMenu(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'MainMenu delete successfully',
    data: result,
  });
});

const deleteDropdownItem = catchAsync(async (req: Request, res: Response) => {
  const { mainMenuItemId, dropdownItemId } = req.params;
  const result = await MainMenuService.deleteDropdownItem(
    mainMenuItemId,
    dropdownItemId,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Dropdown item delete successfully',
    data: result,
  });
});

export const MainMenuController = {
  createMainMenu,
  getAllMainMenu,
  getSingleMainMenu,
  editMainMenu,
  deleteMainMenu,
  deleteDropdownItem,
  rearrangeMainMenuItem,
};
