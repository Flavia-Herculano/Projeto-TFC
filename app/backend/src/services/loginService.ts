import UserModel from '../database/models/userModel';

class LoginService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }
}

export default LoginService;
