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

    if (inProgress === 'true') {
      const matchesTrue = matches.filter((match) => match.inProgress === 1);
      return res.status(200).json(matchesTrue);
    }
    if (inProgress === 'false') {
      const matchesFalse = matches.filter((match) => match.inProgress === 0);
      return res.status(200).json(matchesFalse);
    }
    return res.status(200).json(matches);
  };

  public insertMatches = async (req: Request, res: Response) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
    const result = await this.service.insertMacthes(
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
    );

    return res.status(201).json(result);
  };

  public updateInProgress = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.service.updateInProgress(id);
    return res.status(200).json({ message: 'Finished' });
  };

  public updateMatches = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    const result = await this.service.updateMatches(id, homeTeamGoals, awayTeamGoals);
    return res.status(200).json(result);
  };
}

export default MatchesController;
