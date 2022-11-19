import modelIndex from '../database/models/index';
import classification from '../helpers/utils';

class Leaderboards {
  public getAll = async () => {
    const query = await modelIndex.query(classification);
    return query[0];
  };
}

export default Leaderboards;
