import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import LeaderboardsList from '../components/LeaderboardsList';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';

function LeaderboardsPage() {
  const dispatch = useDispatch();

  const { leaderboards } = useSelector((state) => state);

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  return (
    <section className="leaderboards-page">
      <div className="leaderboards-overlay">
        <div className="leaderboards-container">
          <Header />
          <h2 className="header-leaderboards">Leaderboards</h2>
          <LeaderboardsList leaderboards={leaderboards} />
        </div>
      </div>
    </section>
  );
}

export default LeaderboardsPage;
