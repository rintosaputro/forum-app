import { ActionType } from './action';

const threadDetailReducer = (threadDetail = null, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.TOGGLE_LIKE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.concat([action.payload.userId]),
        downVotesBy: threadDetail.downVotesBy.filter((vote) => vote !== action.payload.userId),
      };
    case ActionType.TOGGLE_UNLIKE_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.filter((vote) => vote !== action.payload.userId),
        downVotesBy: threadDetail.downVotesBy.concat([action.payload.userId]),
      };
    case ActionType.TOGGLE_NEUTRAL_THREAD_DETAIL:
      return {
        ...threadDetail,
        upVotesBy: threadDetail.upVotesBy.filter((upVote) => upVote !== action.payload.userId),
        downVotesBy:
          threadDetail.downVotesBy.filter((downVote) => downVote !== action.payload.userId),
      };
    default:
      return threadDetail;
  }
};

export default threadDetailReducer;
