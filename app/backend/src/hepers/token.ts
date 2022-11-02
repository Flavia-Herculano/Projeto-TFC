import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret = process.env.JWT_SECRET || ('secret' as jwt.Secret);

export default class Token {
  static makeToken = (payload: unknown) => {
    const jwtConfig: jwt.SignOptions = { algorithm: 'HS256' };

    const token = jwt.sign({ data: payload }, secret, jwtConfig);
    return token;
  };
}
