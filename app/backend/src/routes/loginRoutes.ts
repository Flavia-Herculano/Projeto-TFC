import { Router } from 'express';
import validateToken from '../middleware/validateToken';
import LoginController from '../controller/loginController';
import { validateEmail, validatePassword } from '../middleware/validateLogin';

const router = Router();
const loginController = new LoginController();

router.post('/', validateEmail, validatePassword, loginController.findLogin);
router.get('/validate', validateToken, loginController.getRole);

export default router;
