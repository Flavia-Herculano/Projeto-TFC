import MatchesModel from '../database/models/matchesModel';
import TeamsModel from '../database/models/teamsModel';

class Macthes {
  public model: MatchesModel;

  constructor() {
    this.model = new MatchesModel();
  }

  public getMatches = async () => {
    const matches = await MatchesModel.findAll({
      include: [
        { model: TeamsModel, attributes: { exclude: ['id'] }, as: 'teamHome' },
        { model: TeamsModel, attributes: { exclude: ['id'] }, as: 'teamAway' },
      ] });
    return matches;
  };

  public insertMacthes = async (
    homeTeam: number,
    awayTeam: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) => {
    const newMatches = await MatchesModel.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });

    return newMatches;
  };

  public updateInProgress = async (id: string) => {
    const result = await MatchesModel.update({ inProgress: false }, { where: { id } });
    return result;
  };

  public updateMatches = async (id: string, homeTeamGoals: number, awayTeamGoals: number) => {
    const result = await MatchesModel.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return result;
  };
}

export default Macthes;
