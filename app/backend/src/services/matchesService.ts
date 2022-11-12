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
}

export default Macthes;
