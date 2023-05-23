import React from 'react';
import CardComment from './CardComment';

function CommentsList() {
  return (
    <>
      <h3 className="title-replies">Comments</h3>
      <div className="reply-list">
        <CardComment />
      </div>
    </>
  );
}

export default CommentsList;
