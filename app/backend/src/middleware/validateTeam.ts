import { Request, Response, NextFunction } from 'express';
import TeamsService from '../services/teamsService';

const teamService = new TeamsService();

const validateTeam = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;
  const team1 = await teamService.teamsById(homeTeam);
  const team2 = await teamService.teamsById(awayTeam);

  if (awayTeam === team1) {
    return res.status(422).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }
  if (homeTeam !== team1 || awayTeam !== team2) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }
  next();
};

export default validateTeam;
