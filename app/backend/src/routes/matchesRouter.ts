import { Router } from 'express';
import validateTeam from '../middleware/validateTeam';
import MatchesController from '../controller/matchesController';

const router = Router();
const matchesController = new MatchesController();

router.get('/', matchesController.getMacthes);
router.post('/', validateTeam, matchesController.insertMatches);
router.patch('/:id/finish', matchesController.updateInProgress);

export default router;
