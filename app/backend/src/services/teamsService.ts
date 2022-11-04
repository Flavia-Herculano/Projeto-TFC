import TeamsModel from '../database/models/teamsModel';

class TeamsService {
  public model: TeamsModel;

  constructor() {
    this.model = new TeamsModel();
  }

  public teamsList = async () => {
    const teams = await TeamsModel.findAll();
    return teams;
  };
}

export default TeamsService;
