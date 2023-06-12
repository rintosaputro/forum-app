import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_LIKE_THREAD_DETAIL: 'TOGGLE_LIKE_THREAD_DETAIL',
  TOGGLE_UNLIKE_THREAD_DETAIL: 'TOGGLE_UNLIKE_THREAD_DETAIL',
  TOGGLE_NEUTRAL_THREAD_DETAIL: 'TOGGLE_NEUTRAL_THREAD_DETAIL',
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

const toggleLikeThreadDetailActionCreator = (userId) => ({
  type: ActionType.TOGGLE_LIKE_THREAD_DETAIL,
  payload: { userId },
});

const toggleUnlikeThreadDetailActionCreator = (userId) => ({
  type: ActionType.TOGGLE_UNLIKE_THREAD_DETAIL,
  payload: { userId },
});

const toggleNeutralThreadDetailActionCreator = (userId) => ({
  type: ActionType.TOGGLE_NEUTRAL_THREAD_DETAIL,
  payload: { userId },
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

const asyncToggleLikeThreadDetail = () => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser, threadDetail } = getState();
  dispatch(toggleLikeThreadDetailActionCreator(authUser.id));

  try {
    await api.toggleLikeThread(threadDetail.id);
  } catch (err) {
    alert(err.message);
  }

  dispatch(hideLoading());
};

const asyncToggleUnlikeThreadDetail = () => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser, threadDetail } = getState();
  dispatch(toggleUnlikeThreadDetailActionCreator(authUser.id));

  try {
    await api.toggleUnLikeThread(threadDetail.id);
  } catch (err) {
    alert(err.message);
  }

  dispatch(hideLoading());
};

const asyncToggleNeutralThreadDetail = () => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser, threadDetail } = getState();
  dispatch(toggleNeutralThreadDetailActionCreator(authUser.id));

  try {
    await api.toggleNeutralThread(threadDetail.id);
  } catch (err) {
    alert(err.message);
  }

  dispatch(hideLoading());
};

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleLikeThreadDetailActionCreator,
  toggleNeutralThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncToggleLikeThreadDetail,
  asyncToggleUnlikeThreadDetail,
  asyncToggleNeutralThreadDetail,
};
