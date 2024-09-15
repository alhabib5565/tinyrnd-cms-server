import { Request, Response } from 'express';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { PageService } from './pages.service';

const createPage = catchAsync(async (req: Request, res: Response) => {
  const page = req.body;
  const result = await PageService.createPage(page);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Page created successfully!',
    data: result,
  });
});

const getAllPage = catchAsync(async (req: Request, res: Response) => {
  const result = await PageService.getAllPage();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Pages retrived successfully',
    data: result,
  });
});

const getSinglePage = catchAsync(async (req: Request, res: Response) => {
  const result = await PageService.getSinglePage(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Page retrived successfully',
    data: result,
  });
});

const editPage = catchAsync(async (req: Request, res: Response) => {
  const result = await PageService.editPage(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Page edit successfully',
    data: result,
  });
});

const deletePage = catchAsync(async (req: Request, res: Response) => {
  const result = await PageService.deletePage(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Page delete successfully',
    data: result,
  });
});

export const PageController = {
  createPage,
  getAllPage,
  getSinglePage,
  editPage,
  deletePage,
};
