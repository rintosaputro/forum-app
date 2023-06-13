import React from 'react';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { postDateFormat } from '../utils';
import ThumbsUp from './ThumbsUp';
import ThumbsDown from './ThumbsDown';

function CardComment({
  id, owner, createdAt, content, upVotesBy, downVotesBy, onLike, onUnlike,
}) {
  const { authUser } = useSelector((state) => state);

  const handleLike = () => {
    const isActive = upVotesBy.includes(authUser.id);
    onLike({ id, isActive });
  };

  const handleUnlike = () => {
    const isActive = downVotesBy.includes(authUser.id);
    onUnlike({ id, isActive });
  };

  return (
    <div className="card-reply">
      <div className="user-replier">
        <img src={owner.avatar} className="avatar-replier" alt="avatar" />
        <div className="name-replier">{owner.name}</div>
        <div className="date-reply">{postDateFormat(new Date(createdAt))}</div>
      </div>
      <div className="description-thread">
        {parser(content)}
      </div>
      <div className="thumbs-list-reply">
        <ThumbsUp
          totalThumbs={upVotesBy.length}
          isActive={upVotesBy.includes(authUser.id)}
          onLike={handleLike}
        />
        <ThumbsDown
          totalThumbs={downVotesBy.length}
          isActive={downVotesBy.includes(authUser.id)}
          onUnLike={handleUnlike}
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

const cardCommentShape = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};
CardComment.propTypes = {
  ...cardCommentShape,
  onLike: PropTypes.func.isRequired,
  onUnlike: PropTypes.func.isRequired,
};

export { cardCommentShape };

export default CardComment;
