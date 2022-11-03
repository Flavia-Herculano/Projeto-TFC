import Token from '../helpers/token';
import UserModel from '../database/models/userModel';
import ILogin from '../interfaces/login.interface';

class LoginService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public findLogin = async ({ email }: ILogin) => {
    const login = await UserModel.findOne({ where: { email } });
    const token = Token.makeToken(login);
    return token;
  };

  public getUser = async (email: string) => {
    const user = await UserModel.findOne({ where: { email } });
    return user;
  };
}

export default LoginService;
