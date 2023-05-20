import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  TOGGLE_LIKE_THREAD: 'TOGGLE_LIKE_THREAD',
};

const receiveThreadsActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: {
    threads,
  },
});

const toggleLikeThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_LIKE_THREAD,
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

export {
  ActionType,
  receiveThreadsActionCreator,
  asyncReceiveThreads,
  asyncToggleLikeThread,
};
