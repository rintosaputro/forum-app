import api from '../../utils/api';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

const setAuthUserActionCreator = (authUser) => ({
  type: ActionType.SET_AUTH_USER,
  payload: {
    authUser,
  },
});

const unsetAuthUserActionCreator = () => ({
  type: ActionType.UNSET_AUTH_USER,
  payload: { authUser: null },
});

const asyncSetAuthUser = ({ email, password }) => async (dispatch) => {
  try {
    const token = await api.login({ email, password });
    api.putAccessToken(token);
    const authUser = await api.getOwnProfile();

    dispatch(setAuthUserActionCreator(authUser));
  } catch (err) {
    alert(err.message);
  }
};

const asyncUnsetAuthUser = () => (dispatch) => {
  dispatch(unsetAuthUserActionCreator());
  api.putAccessToken('');
};

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
