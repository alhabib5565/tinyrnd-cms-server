import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

export const validateRequestPayload = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.safeParseAsync(req.body);
    if (!result.success) {
      next(result.error);
    } else {
      req.body = result.data;
      next();
    }
  };
};
