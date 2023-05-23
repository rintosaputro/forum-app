import React from 'react';
import CardReply from './CardReply';

function RepliesList() {
  return (
    <>
      <h3 className="title-replies">Comments</h3>
      <div className="reply-list">
        <CardReply />
      </div>
    </>
  );
}

export default RepliesList;
