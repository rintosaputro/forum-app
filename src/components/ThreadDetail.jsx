import React from 'react';
import { postDateFormat } from '../utils';
import Badge from './Badge';
import ThumbsUp from './ThumbsUp';
import ThumbsDown from './ThumbsDown';

function ThreadDetail() {
  return (
    <div className="thread-detail">
      <div className="header-detail">
        <img src="https://images.pexels.com/photos/16791418/pexels-photo-16791418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" className="avatar-card-thread" />
        <h2 className="name-thread">
          apa
        </h2>
        <span className="time-thread">{postDateFormat(new Date())}</span>
      </div>
      <h3 className="title-detail m-title">Rinto</h3>
      <div className="description-detail">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni
        reiciendis iste ipsum maxime temporibus ullam rerum veritatis.
        Libero esse fugit eius modi repellat quis corrupti rem quaerat perspiciatis tenetur?
      </div>
      <div className="badge-detail">
        <Badge size="big">#Category</Badge>
      </div>
      <div className="thumbs-container">
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

export default ThreadDetail;
