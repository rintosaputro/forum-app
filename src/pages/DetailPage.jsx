import React from 'react';
import Header from '../components/Header';
import ThreadDetail from '../components/ThreadDetail';

function DetailPage() {
  const empty = 0;

  return (
    <section className="detail-page">
      <div className="detail-overlay">
        <div className={empty === 0 ? 'empty-content' : ''}>
          <Header />
          <ThreadDetail />
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
