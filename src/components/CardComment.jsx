import React from 'react';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';
import { postDateFormat } from '../utils';
import ThumbsUp from './ThumbsUp';
import ThumbsDown from './ThumbsDown';

function CardComment({
  owner, createdAt, content, upVotesBy, downVotesBy,
}) {
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
          isActive={upVotesBy.length}
          onLike={() => null}
        />
        <ThumbsDown
          totalThumbs={downVotesBy.length}
          isActive={downVotesBy.length}
          onUnLike={() => null}
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
};

export { cardCommentShape };

export default CardComment;
