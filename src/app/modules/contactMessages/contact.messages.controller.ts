import { NextFunction, Request, Response } from 'express';
import { ContactMessageService } from './contact.messages.service';
import httpStatus from 'http-status';
import { contactMessageValidationSchema } from './contact.messages.validationt';

const sendContactMessage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validateData = contactMessageValidationSchema.parse(req.body);
    const result = await ContactMessageService.sendContactMessage(validateData);
    res.status(httpStatus.OK).json({
      message: 'Send message successful',
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllContactMessage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ContactMessageService.getAllContactMessage();
    res.status(httpStatus.OK).json({
      message: 'Get all contact message successful',
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ContactMessageController = {
  sendContactMessage,
  getAllContactMessage,
};
