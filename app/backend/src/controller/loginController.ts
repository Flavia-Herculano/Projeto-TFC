import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import ILogin from '../interfaces/login.interface';
import LoginService from '../services/loginService';

class LoginController {
  public service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public findLogin = async (req: Request, res: Response) => {
    const { body } = req;
    const login = body as ILogin;
    const user = await this.service.getUser(login.email);
    const pw = user?.password as string;

    if (bcrypt.compareSync(login.password, pw)) {
      const token = await this.service.findLogin(login);
      return res.status(200).json({ token });
    }
    res.status(401).json({ message: 'Incorrect email or password' });
  };
}

export default LoginController;
