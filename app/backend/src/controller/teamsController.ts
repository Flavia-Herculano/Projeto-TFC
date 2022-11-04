import { Request, Response } from 'express';
import TeamsService from '../services/teamsService';

class TeamsController {
  public service: TeamsService;

  constructor() {
    this.service = new TeamsService();
  }

  public teamsList = async (req: Request, res: Response) => {
    const teams = await this.service.teamsList();
    return res.status(200).json(teams);
  };
}

export default TeamsController;
