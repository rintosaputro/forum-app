import React from 'react';
import PropTypes from 'prop-types';

function CommentThreadInput({ onReply }) {
  const handleReply = () => {
    const reply = document.querySelector('#replyInput').textContent;
    onReply(reply);
  };

  return (
    <div className="reply-thread">
      <p className="reply-label">Leave a Comment</p>
      <div contentEditable id="replyInput" className="reply-input" />
      <button onClick={handleReply} type="button" className="btn-submit-reply">Send</button>
    </div>
  );
}

CommentThreadInput.propTypes = {
  onReply: PropTypes.func.isRequired,
};

export default CommentThreadInput;
