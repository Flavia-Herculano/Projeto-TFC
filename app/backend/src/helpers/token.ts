import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import { SignOptions, Secret } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || ('secret' as Secret);

export default class Token {
  static makeToken = (payload: unknown) => {
    const jwtConfig: SignOptions = { algorithm: 'HS256' };

    const token = jwt.sign({ payload }, secret, jwtConfig);
    return token;
  };

  static decodedToken = (token: string): string | jwt.JwtPayload => {
    const decoded = jwt.verify(token, secret);
    return decoded;
  };
}
