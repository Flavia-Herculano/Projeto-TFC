import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';

class MatchesController {
  public service: MatchesService;

  constructor() {
    this.service = new MatchesService();
  }

  public getMacthes = async (req_: Request, res: Response) => {
    const matches = await this.service.getMatches();
    return res.status(200).json(matches);
  };
}

export default MatchesController;
