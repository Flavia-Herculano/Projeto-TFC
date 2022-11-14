import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';

class MatchesController {
  public service: MatchesService;

  constructor() {
    this.service = new MatchesService();
  }

  public getMacthes = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    const matches = await this.service.getMatches();
    const matchesTrue = matches.filter((match) => match.inProgress === 0);
    const matchesFalse = matches.filter((match) => match.inProgress === 1);

    if (inProgress) {
      return res.status(200).json(matchesTrue);
    }
    if (inProgress) { // condição para falso, falta implementar a lógica
      return res.status(200).json(matchesFalse);
    }
    return res.status(200).json(matches);
  };
}

export default MatchesController;
