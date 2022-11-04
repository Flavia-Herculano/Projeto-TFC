import { Router } from 'express';
import TeamsController from '../controller/teamsController';

const routerTeams = Router();
const teamsController = new TeamsController();

routerTeams.get('/', teamsController.teamsList);

export default routerTeams;
