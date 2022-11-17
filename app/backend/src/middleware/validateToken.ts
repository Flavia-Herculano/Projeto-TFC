import { Request, Response, NextFunction } from 'express';
import Token from '../helpers/token';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization') as string;

  try {
    Token.decodedToken(token);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validateToken;
