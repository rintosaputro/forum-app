import React from 'react';
import PropTypes from 'prop-types';
import CardComment, { cardCommentShape } from './CardComment';

function CommentsList({ comments, onLike, onUnlike }) {
  return (
    <>
      <h3 className="title-replies">Comments</h3>
      <div className="reply-list">
        {comments.map((comment) => (
          <CardComment
            key={comment.id}
            onLike={onLike}
            onUnlike={onUnlike}
            {...comment}
          />
        ))}
      </div>
    </>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(cardCommentShape)).isRequired,
  onLike: PropTypes.func.isRequired,
  onUnlike: PropTypes.func.isRequired,
};

export default CommentsList;
