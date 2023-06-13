import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

const receiveLeaderboardsActionCreator = (leaderboards) => ({
  type: ActionType.RECEIVE_LEADERBOARDS,
  payload: {
    leaderboards,
  },
});

const asyncReceiveLeaderboards = () => async (dispatch) => {
  dispatch(showLoading());

  try {
    const leaderboards = await api.getLeaderboards();
    dispatch(receiveLeaderboardsActionCreator(leaderboards));
  } catch (err) {
    alert(err.message);
  }

  dispatch(hideLoading());
};

export {
  ActionType,
  receiveLeaderboardsActionCreator,
  asyncReceiveLeaderboards,
};
