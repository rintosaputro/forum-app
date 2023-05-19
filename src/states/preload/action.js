import api from '../../utils/api';
import { setAuthUserActionCreator } from '../authUser/action';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

const setIsPreloadActionCreator = (isPreload) => ({
  type: ActionType.SET_IS_PRELOAD,
  payload: { isPreload },
});

const asyncPreloadProcess = () => async (dispatch) => {
  try {
    const user = await api.getOwnProfile();
    dispatch(setAuthUserActionCreator(user));
  } catch (_err) {
    dispatch(setAuthUserActionCreator(null));
  } finally {
    dispatch(setIsPreloadActionCreator(false));
  }
};

export {
  ActionType,
  setIsPreloadActionCreator,
  asyncPreloadProcess,
};
