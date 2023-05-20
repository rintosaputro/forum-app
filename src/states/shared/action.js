import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsers } from '../users/action';

const asyncPopulateThreadsAndUser = () => async (dispatch) => {
  try {
    const users = await api.getAllUsers();
    const threads = await api.getAllThreads();

    dispatch(receiveUsers(users));

    const resultThreads = threads.map((thread) => {
      const owner = users.find((user) => user.id === thread.ownerId);
      return { ...thread, ownerName: owner.name, ownerAvatar: owner.avatar };
    });

    dispatch(receiveThreadsActionCreator(resultThreads));
  } catch (err) {
    alert(err.message);
  }
};

export { asyncPopulateThreadsAndUser };
