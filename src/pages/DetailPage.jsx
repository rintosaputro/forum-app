import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ThreadDetail from '../components/ThreadDetail';
import CommentThreadInput from '../components/CommentThreadInput';
import CommentsList from '../components/CommentsList';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

function DetailPage() {
  const { threadDetail } = useSelector((state) => state);
  const {
    id, title, body, category, createdAt, owner, upVotesBy, downVotesBy, comments,
  } = threadDetail;

  const dispatch = useDispatch();

  const { id: threadId } = useParams();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  const onReply = (value) => {
    alert(value);
  };

  return (
    <section className="detail-page">
      <div className="detail-overlay">
        <div className={!threadDetail ? 'empty-content' : ''}>
          <Header />
          <ThreadDetail
            id={id}
            title={title}
            body={body}
            category={category}
            createdAt={createdAt}
            owner={owner}
            upVotedBy={upVotesBy}
            downVoteBy={downVotesBy}
          />
          <CommentThreadInput onReply={onReply} />
          <CommentsList />
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
