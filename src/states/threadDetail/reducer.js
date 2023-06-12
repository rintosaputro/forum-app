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
    case ActionType.CREATE_COMMENT:
      return {
        ...threadDetail,
        comments: [...threadDetail.comments, action.payload.comment],
      };
    case ActionType.TOGGLE_LIKE_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => ({
          ...comment,
          upVotesBy: comment.upVotesBy.concat([action.payload.userId]),
          downVotesBy: comment.downVotesBy.filter((vote) => vote !== action.payload.userId),
        })),
      };
    case ActionType.TOGGLE_UNLIKE_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => ({
          ...comment,
          upVotesBy: comment.upVotesBy.filter((vote) => vote !== action.payload.userId),
          downVotesBy: comment.downVotesBy.concat([action.payload.userId]),
        })),
      };
    case ActionType.TOGGLE_NEUTRAL_COMMENT:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => ({
          ...comment,
          upVotesBy: comment.upVotesBy.filter((vote) => vote !== action.payload.userId),
          downVotesBy: comment.downVotesBy.filter((vote) => vote !== action.payload.userId),
        })),
      };
    default:
      return threadDetail;
  }
};

export default threadDetailReducer;
