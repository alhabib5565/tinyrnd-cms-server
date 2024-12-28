/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { TErrorResponse } from '../app/interface/error';
import { handleZodError } from '../app/error/handleZodError';
import { handleValidationError } from '../app/error/validationError';
import { handleCastError } from '../app/error/handleCastError';
import { handleDuplicateError } from '../app/error/handleDuplicateError';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  let errorResponse: TErrorResponse = {
    statusCode: 500,
    message: 'something went wrong',
    errorPaths: [
      {
        path: '',
        message: '',
      },
    ],
  };

  if (err instanceof ZodError) {
    errorResponse = handleZodError(err);
  } else if (err?.name === 'ValidationError') {
    errorResponse = handleValidationError(err);
  } else if (err?.name === 'CastError') {
    errorResponse = handleCastError(err);
  } else if (err?.code === 11000) {
    errorResponse = handleDuplicateError(err);
  } else if (err instanceof Error) {
    errorResponse.message = err.message;
  }

  res.status(errorResponse.statusCode).json({
    success: false,
    statusCode: errorResponse.statusCode,
    message: errorResponse.message,
    errorPaths: errorResponse.errorPaths,
    error: err,
  });
};
