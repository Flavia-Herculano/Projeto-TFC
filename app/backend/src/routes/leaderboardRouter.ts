import { Router } from 'express';
import LeaderboardsController from '../controller/leaderboardsController';

const routerLeaderboards = Router();
const leaderboardsController = new LeaderboardsController();

routerLeaderboards.get('/home', leaderboardsController.getAll);

export default routerLeaderboards;
