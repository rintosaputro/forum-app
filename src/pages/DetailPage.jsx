import React from 'react';
import Header from '../components/Header';
import ThreadDetail from '../components/ThreadDetail';
import ReplyThreadInput from '../components/ReplyThreadInput';
import RepliesList from '../components/RepliesList';

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
          <ReplyThreadInput onReply={onReply} />
          <RepliesList />
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
