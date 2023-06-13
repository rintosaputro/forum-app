import { ActionType } from './action';

const leaderboardsReducer = (leaderboards = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARDS:
      return action.type.leaderboards;
    default:
      return leaderboards;
  }
};

export default leaderboardsReducer;
