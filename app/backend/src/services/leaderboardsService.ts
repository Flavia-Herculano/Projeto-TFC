import modelIndex from '../database/models/index';
import { leaderboard, leaderboardAway, leaderboardHome } from '../helpers/utils';

class Leaderboards {
  public getHome = async () => {
    const query = await modelIndex.query(leaderboardHome);
    return query[0];
  };

  public getAway = async () => {
    const query = await modelIndex.query(leaderboardAway);
    return query[0];
  };

  public getAll = async () => {
    const query = await modelIndex.query(leaderboard);
    return query[0];
  };
}

export default Leaderboards;
