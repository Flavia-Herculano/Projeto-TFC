import { Router } from 'express';
import validateTeam from '../middleware/validateTeam';
import validateToken from '../middleware/validateToken';
import MatchesController from '../controller/matchesController';

const router = Router();
const matchesController = new MatchesController();

router.get('/', matchesController.getMacthes);
router.post('/', validateToken, validateTeam, matchesController.insertMatches);
router.patch('/:id/finish', matchesController.updateInProgress);
router.patch('/:id', matchesController.updateMatches);

export default router;
