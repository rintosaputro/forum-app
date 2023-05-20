import { ActionType } from './action';

const threadsReducer = (threads = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.TOGGLE_LIKE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          // return {
          //   ...thread,
          //   upVotesBy: thread.upVotesBy.includes(action.payload.userId)
          //     ? thread.upVotesBy.filter((voter) => voter !== action.payload.userId)
          //     : thread.upVotesBy.concat([action.payload.userId]),
          // };
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.concat([action.payload.userId]),
          };
        }
        return thread;
      });
    case ActionType.TOGGLE_NEUTRAL_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.filter((voter) => voter !== action.payload.userId),
          };
        }
        return thread;
      });
    default:
      return threads;
  }
};

export default threadsReducer;
