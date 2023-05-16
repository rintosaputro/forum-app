import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

const receiveUsers = (user) => ({
  type: ActionType.RECEIVE_USERS,
  payload: { user },
});

const asyncRegisterUser = ({ name, email, password }) => async (dispatch) => {
  try {
    await api.register({ name, email, password });
  } catch (err) {
    alert(err.message);
  }
};

export {
  ActionType,
  receiveUsers,
  asyncRegisterUser,
};
