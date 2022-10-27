import { Request, Response, NextFunction } from 'express';
import ILogin from '../interfaces/login.interface';

export const validateEmail = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { email } = body as ILogin;
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (!email) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

export const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { password } = body as ILogin;

  if (!password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be at least 6 characters' });
  }
  next();
};
