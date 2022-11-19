import { Request, Response } from 'express';
import LeaderboardsService from '../services/leaderboardsService';

class LeaderboardController {
  service: LeaderboardsService;

  constructor() {
    this.service = new LeaderboardsService();
  }

  public getAll = async (req: Request, res: Response) => {
    const result = await this.service.getAll();
    return res.status(200).json(result);
  };
}

export default LeaderboardController;
