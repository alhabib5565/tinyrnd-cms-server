import { Request, Response } from 'express';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { BannerService } from './banner.service';

const createBanner = catchAsync(async (req: Request, res: Response) => {
  const result = await BannerService.createBanner(req.file, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Banner created successfully.!',
    data: result,
  });
});

const getAllBanner = catchAsync(async (req: Request, res: Response) => {
  const result = await BannerService.getAllBanner();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Banners retrieved successfully.',
    data: result,
  });
});

const getSingleBanner = catchAsync(async (req: Request, res: Response) => {
  const result = await BannerService.getSingleBanner(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Banner retrieved successfully',
    data: result,
  });
});

const editBanner = catchAsync(async (req: Request, res: Response) => {
  const result = await BannerService.editBanner(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Banner update successfully',
    data: result,
  });
});

const deleteBanner = catchAsync(async (req: Request, res: Response) => {
  const result = await BannerService.deleteBanner(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Banner delete successfully',
    data: result,
  });
});

export const BannerController = {
  createBanner,
  getAllBanner,
  getSingleBanner,
  editBanner,
  deleteBanner,
};
