import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import LoginService from '../services/loginService';
import Token from '../helpers/token';
import IUser from '../interfaces/user.interface';

class LoginController {
  public service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public findLogin = async (req: Request, res: Response) => {
    const { body } = req;
    const login = body as IUser;

    const user = await this.service.getUser(login.email);
    const pw = user?.password as string;
    const email = user?.email as string;

    if (email === login.email && bcrypt.compareSync(login.password, pw)) {
      const token = await this.service.findLogin(login);
      return res.status(200).json({ token });
    }
    res.status(401).json({ message: 'Incorrect email or password' });
  };

  public getRole = async (req: Request, res: Response) => {
    const token = req.header('Authorization') as string;

    const { payload } = Token.decodedToken(token) as any;

    const user = await this.service.getUser(payload.email);
    const role = user?.role;
    return res.status(200).json({ role });
  };
}

export default LoginController;
