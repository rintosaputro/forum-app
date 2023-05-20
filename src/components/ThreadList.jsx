import React from 'react';
import PropTypes from 'prop-types';
import CardThread, { cardThreadShape } from './CardThread';

function ThreadList({ threads, onLike, onUnLike }) {
  return (
    <div className="thread-list">
      {threads.map((thread) => (
        <CardThread
          key={thread.id}
          {...thread}
          onLike={onLike}
          onUnlike={onUnLike}
        />
      ))}
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(cardThreadShape)).isRequired,
  onLike: PropTypes.func.isRequired,
  onUnLike: PropTypes.func.isRequired,
};

export default ThreadList;
