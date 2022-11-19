import { Request, Response } from 'express';
import LeaderboardsService from '../services/leaderboardsService';

class LeaderboardController {
  service: LeaderboardsService;

  constructor() {
    this.service = new LeaderboardsService();
  }

  public findHome = async (req: Request, res: Response) => {
    const result = await this.service.getHome();
    return res.status(200).json(result);
  };

  public findAway = async (req: Request, res: Response) => {
    const result = await this.service.getAway();
    return res.status(200).json(result);
  };
}

export default LeaderboardController;
