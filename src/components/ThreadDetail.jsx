import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { postDateFormat } from '../utils';
import Badge from './Badge';
import ThumbsUp from './ThumbsUp';
import ThumbsDown from './ThumbsDown';

function ThreadDetail({
  id, title, body, category, createdAt, owner, upVotesBy, downVotesBy, onLike, onUnLike,
}) {
  const { authUser } = useSelector((state) => state);

  const onLikeThread = () => {
    const isActive = upVotesBy.includes(authUser.id);
    onLike(isActive);
  };

  const onUnlikeThread = () => {
    const isActive = downVotesBy.includes(authUser.id);
    onUnLike(isActive);
  };

  return (
    <div className="thread-detail">
      <div className="header-detail">
        <img src={owner?.avatar} alt="avatar" className="avatar-card-thread" />
        <h2 className="name-thread">
          {owner?.name}
        </h2>
        <span className="time-thread">{postDateFormat(createdAt)}</span>
      </div>
      <h3 className="title-detail m-title">{title}</h3>
      <div className="description-detail">
        {body}
      </div>
      <div className="badge-detail">
        <Badge size="big">{`#${category}`}</Badge>
      </div>
      <div className="thumbs-container">
        <ThumbsUp
          totalThumbs={upVotesBy?.length}
          isActive={upVotesBy?.includes(authUser.id)}
          onLike={onLikeThread}
        />
        <ThumbsDown
          totalThumbs={downVotesBy?.length}
          isActive={downVotesBy?.includes(authUser.id)}
          onUnLike={onUnlikeThread}
        />
      </div>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadDetail.propTypes = {
  ...threadItemShape,
  onLike: PropTypes.func.isRequired,
  onUnLike: PropTypes.func.isRequired,
};

export default ThreadDetail;
