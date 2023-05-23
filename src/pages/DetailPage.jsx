import React from 'react';
import Header from '../components/Header';
import ThreadDetail from '../components/ThreadDetail';
import CommentThreadInput from '../components/CommentThreadInput';
import CommentsList from '../components/CommentsList';

function DetailPage() {
  const empty = 0;

  const onReply = (value) => {
    alert(value);
  };

  return (
    <section className="detail-page">
      <div className="detail-overlay">
        <div className={empty === 0 ? 'empty-content' : ''}>
          <Header />
          <ThreadDetail />
          <CommentThreadInput onReply={onReply} />
          <CommentsList />
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
