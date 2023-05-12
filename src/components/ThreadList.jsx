/* eslint-disable react/no-array-index-key */
import React from 'react';
import CardThread from './CardThread';

function ThreadList() {
  return (
    <div className="thread-list">
      {[...Array(3)].map((_talk, index) => <CardThread key={index} />)}
    </div>
  );
}

export default ThreadList;
