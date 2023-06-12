import React from 'react';
import PropTypes from 'prop-types';
import CardComment, { cardCommentShape } from './CardComment';

function CommentsList({ comments }) {
  return (
    <>
      <h3 className="title-replies">Comments</h3>
      <div className="reply-list">
        {comments.map((comment) => (
          <CardComment
            owner={comment.owner}
            createdAt={comment.createdAt}
            content={comment.content}
            upVotesBy={comment.upVotesBy}
            downVotesBy={comment.downVotesBy}
          />
        ))}
      </div>
    </>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(cardCommentShape)).isRequired,
};

export default CommentsList;
