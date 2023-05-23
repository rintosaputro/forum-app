import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_LIKE_COMMENT: 'TOGGLE_LIKE_COMMENT',
  TOGGLE_UNLIKE_COMMENT: 'TOGGLE_UNLIKE_COMMENT',
  TOGGLE_NEUTRAL_COMMENT: 'TOGGLE_NEUTRAL_COMMENT',
};

const receiveThreadDetailActionCreator = (threadDetail) => ({
  type: ActionType.RECEIVE_THREAD_DETAIL,
  payload: { threadDetail },
});

const clearThreadDetailActionCreator = () => ({
  type: ActionType.CLEAR_THREAD_DETAIL,
});

const asyncReceiveThreadDetail = (threadId) => async (dispatch) => {
  dispatch(showLoading());
  dispatch(clearThreadDetailActionCreator());

  try {
    const threadDetail = await api.getThreadDetail(threadId);
    dispatch(receiveThreadDetailActionCreator(threadDetail));
  } catch (err) {
    alert(err);
  }
  dispatch(hideLoading());
};

export {
  ActionType,
  asyncReceiveThreadDetail,
};
