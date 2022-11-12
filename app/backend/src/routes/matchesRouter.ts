import { Router } from 'express';
import MatchesController from '../controller/matchesController';

const router = Router();
const matchesController = new MatchesController();

router.get('/', matchesController.getMacthes);

export default router;
