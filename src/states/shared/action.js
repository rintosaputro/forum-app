import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

const asyncPopulateThreadsAndUser = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const users = await api.getAllUsers();
    const threads = await api.getAllThreads();

    dispatch(receiveUsersActionCreator(users));

    const resultThreads = threads.map((thread) => {
      const owner = users.find((user) => user.id === thread.ownerId);
      return { ...thread, ownerName: owner.name, ownerAvatar: owner.avatar };
    });

    dispatch(receiveThreadsActionCreator(resultThreads));
    dispatch(hideLoading());
  } catch (err) {
    alert(err.message);
  }
};

export { asyncPopulateThreadsAndUser };
