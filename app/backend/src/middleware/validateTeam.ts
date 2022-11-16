import { Request, Response, NextFunction } from 'express';
import TeamsService from '../services/teamsService';

const teamService = new TeamsService();

const validateTeam = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;
  const team = await teamService.teamsById(homeTeam);

  if (awayTeam === team) {
    return res.status(422).json({
      message: 'It is not possible to create a match with two equal teams',
    });
  }
  next();
};

export default validateTeam;
