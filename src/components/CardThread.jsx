import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import Badge from './Badge';
import ThumbsDown from './ThumbsDown';
import ThumbsUp from './ThumbsUp';
import { postDateFormat } from '../utils';

function CardThread({
  id, title, body, category, createdAt, ownerId, ownerAvatar, ownerName, upVotesBy,
  downVotesBy, totalComments, onLike, onUnLike,
}) {
  const { authUser } = useSelector((state) => state);

  const navigate = useNavigate();

  const onThread = () => navigate(`/thread/${id}`);

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/thread/${id}`);
    }
  };

  const handleLike = (event) => {
    event.stopPropagation();
    const isActive = upVotesBy.includes(authUser.id);
    onLike({ id, isActive });
  };

  const handleUnLike = (event) => {
    event.stopPropagation();
    const isActive = downVotesBy.includes(authUser.id);
    onUnLike({ id, isActive });
  };

  return (
    <div className="card-thread" role="button" tabIndex={0} onClick={onThread} onKeyDown={onThreadPress}>
      <div className="header-thread">
        <img src={ownerAvatar} alt="avatar" className="avatar-card-thread" />
        <h2 className="name-thread">
          {ownerName}
        </h2>
        <span className="time-thread">{postDateFormat(createdAt)}</span>
      </div>
      <h3 className="title">{title}</h3>
      <div className="description-thread">
        {parse(body)}
      </div>
      <Badge>
        {`#${category}`}
      </Badge>
      <div className="thumbs-container">
        <ThumbsUp
          totalThumbs={upVotesBy.length}
          isActive={upVotesBy.includes(authUser.id)}
          onLike={handleLike}
        />
        <ThumbsDown
          totalThumbs={downVotesBy.length}
          isActive={downVotesBy.includes(authUser.id)}
          onUnLike={handleUnLike}
        />
      </div>
    </div>
  );
}

const cardThreadShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
  ownerAvatar: PropTypes.string,
  ownerName: PropTypes.string,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
};

CardThread.propTypes = {
  ...cardThreadShape,
  onLike: PropTypes.func,
  onUnLike: PropTypes.func,
};

export { cardThreadShape };

export default CardThread;
