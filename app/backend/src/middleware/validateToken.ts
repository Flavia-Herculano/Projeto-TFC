import { Request, Response, NextFunction } from 'express';
import Token from '../helpers/token';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization') as string;

  if (!token || token === '') {
    return res.status(400).json({ message: 'token not found' });
  }
  const payload = Token.decodedToken(token);

  if (!payload) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  next();
};

export default validateToken;
