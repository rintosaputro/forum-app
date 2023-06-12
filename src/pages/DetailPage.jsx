import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import ThreadDetail from '../components/ThreadDetail';
import CommentThreadInput from '../components/CommentThreadInput';
import CommentsList from '../components/CommentsList';
import {
  asyncReceiveThreadDetail, asyncToggleLikeThreadDetail,
  asyncToggleNeutralThreadDetail, asyncToggleUnlikeThreadDetail,
} from '../states/threadDetail/action';

function DetailPage() {
  const { threadDetail } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { id: threadId } = useParams();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  const onLikeThread = (isActive) => {
    if (isActive) {
      return dispatch(asyncToggleNeutralThreadDetail());
    }
    return dispatch(asyncToggleLikeThreadDetail());
  };

  const onUnLikeThread = (isActive) => {
    if (isActive) {
      return dispatch(asyncToggleNeutralThreadDetail());
    }
    return dispatch(asyncToggleUnlikeThreadDetail());
  };

  const onReply = (value) => {
    alert(value);
  };

  return (
    <section className="detail-page">
      <div className="detail-overlay">
        <div className={!threadDetail ? 'empty-content' : ''}>
          <Header />
          {threadDetail && (
          <>
            <ThreadDetail {...threadDetail} onLike={onLikeThread} onUnLike={onUnLikeThread} />
            <CommentThreadInput onReply={onReply} />
            <CommentsList />
          </>
          )}
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
