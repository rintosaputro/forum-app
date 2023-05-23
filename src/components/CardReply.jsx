import React from 'react';
import parser from 'html-react-parser';
import { postDateFormat } from '../utils';
import ThumbsUp from './ThumbsUp';
import ThumbsDown from './ThumbsDown';

function CardReply() {
  return (
    <div className="card-reply">
      <div className="user-replier">
        <img src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj" className="avatar-replier" alt="avatar" />
        <div className="name-replier">Rinto</div>
        <div className="date-reply">{postDateFormat(new Date())}</div>
      </div>
      <div className="description-thread">
        {parser('oke')}
      </div>
      <div className="thumbs-list-reply">
        <ThumbsUp
          totalThumbs={2}
          isActive
          onLike={() => null}
        />
        <ThumbsDown
          totalThumbs={2}
          isActive
          onUnLike={() => null}
        />
      </div>
    </div>
  );
}

export default CardReply;
