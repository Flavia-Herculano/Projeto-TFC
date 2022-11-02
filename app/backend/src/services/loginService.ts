import Token from '../hepers/token';
import UserModel from '../database/models/userModel';
import ILogin from '../interfaces/login.interface';

class LoginService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public findLogin = async ({ email, password }: ILogin) => {
    const login = await UserModel.findOne({ where: { email, password } });
    const token = Token.makeToken(login);
    return token;
  };

  public getUser = async (email: string) => {
    const hash = await UserModel.findOne({ where: { email } });
    return hash;
  };
}

export default LoginService;
