import { Router } from 'express';
// import validateToken from '../middleware/validateToken';
import MatchesController from '../controller/matchesController';

const router = Router();
const matchesController = new MatchesController();

router.get('/', matchesController.getMacthes);
router.post('/', matchesController.insertMatches);
router.patch('/:id/finish', matchesController.updateInProgress);

export default router;
