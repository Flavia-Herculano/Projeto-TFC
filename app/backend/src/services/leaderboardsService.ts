import modelIndex from '../database/models/index';
import { leaderboardAway, leaderboardHome } from '../helpers/utils';

class Leaderboards {
  public getHome = async () => {
    const query = await modelIndex.query(leaderboardHome);
    return query[0];
  };

  public getAway = async () => {
    const query = await modelIndex.query(leaderboardAway);
    return query[0];
  };
}

export default Leaderboards;
