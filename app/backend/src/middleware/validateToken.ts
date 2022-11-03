import { Request, Response, NextFunction } from 'express';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (!token || token === '') {
    res.status(401).json({ message: 'token not found' });
  }
  next();
};

export default validateToken;
