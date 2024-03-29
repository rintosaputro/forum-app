import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  CREATE_THREAD: 'CREATE_THREAD',
  TOGGLE_LIKE_THREAD: 'TOGGLE_LIKE_THREAD',
  TOGGLE_UNLIKE_THREAD: 'TOGGLE_UNLIKE_THREAD',
  TOGGLE_NEUTRAL_THREAD: 'TOGGLE_NEUTRAL_THREAD',
};

const receiveThreadsActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: {
    threads,
  },
});

const createThreadActionCreator = (thread) => ({
  type: ActionType.CREATE_THREAD,
  payload: {
    thread,
  },
});

const toggleLikeThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_LIKE_THREAD,
  payload: {
    threadId, userId,
  },
});

const toggleUnLikeThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_UNLIKE_THREAD,
  payload: {
    threadId, userId,
  },
});

const toggleNeutralThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_NEUTRAL_THREAD,
  payload: {
    threadId, userId,
  },
});

const asyncReceiveThreads = () => async (dispatch) => {
  try {
    const threads = await api.getAllThreads();
    dispatch(receiveThreadsActionCreator(threads));
  } catch (err) {
    alert(err.message);
  }
};

const asyncCreateThread = ({ title, body, category }) => async (dispatch) => {
  dispatch(showLoading());

  try {
    const thread = await api.createThread({ title, body, category });
    dispatch(createThreadActionCreator(thread));
  } catch (err) {
    alert(err.message);
  }

  dispatch(hideLoading());
};

const asyncToggleLikeThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleLikeThreadActionCreator({ threadId, userId: authUser.id }));
  try {
    await api.toggleLikeThread(threadId);
  } catch (err) {
    alert(err.message);
    dispatch(toggleLikeThreadActionCreator({ threadId, userId: authUser.id }));
  }
};

const asyncToggleUnLikeThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleUnLikeThreadActionCreator({ threadId, userId: authUser.id }));
  try {
    await api.toggleUnLikeThread(threadId);
  } catch (err) {
    alert(err.message);
    dispatch(toggleUnLikeThreadActionCreator({ threadId, userId: authUser.id }));
  }
};

const asyncToggleNeutralThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleNeutralThreadActionCreator({ threadId, userId: authUser.id }));
  try {
    await api.toggleNeutralThread(threadId);
  } catch (err) {
    alert(err.message);
    dispatch(toggleNeutralThreadActionCreator({ threadId, userId: authUser.id }));
  }
};

export {
  ActionType,
  receiveThreadsActionCreator,
  createThreadActionCreator,
  toggleLikeThreadActionCreator,
  toggleUnLikeThreadActionCreator,
  toggleNeutralThreadActionCreator,
  asyncReceiveThreads,
  asyncCreateThread,
  asyncToggleLikeThread,
  asyncToggleUnLikeThread,
  asyncToggleNeutralThread,
};
