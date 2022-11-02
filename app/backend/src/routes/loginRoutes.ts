import { Router } from 'express';
import LoginController from '../controller/loginController';
import { validateEmail, validatePassword } from '../middleware/validateLogin';

const router = Router();
const loginController = new LoginController();

router.post('/', validateEmail, validatePassword, loginController.findLogin);

export default router;
