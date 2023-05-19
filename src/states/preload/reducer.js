import { ActionType } from './action';

const isPreloadReducer = (isPreload = true, action = {}) => {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload.isPreload;
    default:
      return isPreload;
  }
};

export default isPreloadReducer;
