import { Request, Response } from 'express';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { ImageService } from './imageGallery.service';

const createImage = catchAsync(async (req: Request, res: Response) => {
  const result = await ImageService.createImage(req.file, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Image created successfully!',
    data: result,
  });
});

const getAllImage = catchAsync(async (req: Request, res: Response) => {
  const result = await ImageService.getAllImage();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Images retrived successfully',
    data: result,
  });
});

const getSingleImage = catchAsync(async (req: Request, res: Response) => {
  const result = await ImageService.getSingleImage(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Image retrived successfully',
    data: result,
  });
});

const editImage = catchAsync(async (req: Request, res: Response) => {
  const result = await ImageService.editImage(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Image edit successfully',
    data: result,
  });
});

const deleteImage = catchAsync(async (req: Request, res: Response) => {
  const result = await ImageService.deleteImage(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Image delete successfully',
    data: result,
  });
});

export const ImageController = {
  createImage,
  getAllImage,
  getSingleImage,
  editImage,
  deleteImage,
};
