import { Request, Response } from 'express';
import catchAsync from '../../../utils/catchAsync';
import { UserService } from './user.service';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  const result = await UserService.createUser(user);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User created successfully!',
    data: result,
  });
});

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUser();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users retrived successfully',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getSingleUser(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User retrived successfully',
    data: result,
  });
});

const editUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.editUser(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User edit successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.deleteUser(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User delete successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
  editUser,
  deleteUser,
};
