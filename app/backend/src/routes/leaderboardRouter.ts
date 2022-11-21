import { Router } from 'express';
import LeaderboardsController from '../controller/leaderboardsController';

const routerLeaderboards = Router();
const leaderboardsController = new LeaderboardsController();

routerLeaderboards.get('/home', leaderboardsController.findHome);
routerLeaderboards.get('/away', leaderboardsController.findAway);
routerLeaderboards.get('/', leaderboardsController.findAll);

export default routerLeaderboards;
