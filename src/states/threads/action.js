import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
};

const receiveThreadsActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: {
    threads,
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

export {
  ActionType,
  receiveThreadsActionCreator,
  asyncReceiveThreads,
};
