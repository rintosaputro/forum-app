import { ActionType } from './action';

const threadsReducer = (threads = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    default:
      return threads;
  }
};

export default threadsReducer;
