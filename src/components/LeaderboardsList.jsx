import React from 'react';
import PropTypes from 'prop-types';
import CardLeaderboard, { leaderboardShape } from './CardLeaderboard';

function LeaderboardsList({ leaderboards }) {
  return (
    <div className="list-leaderboards">
      <div className="legend-leaderboards">
        <h3>Users</h3>
        <span>Scores</span>
      </div>
      <div>
        {leaderboards?.map((leaderboard) => (
          <CardLeaderboard
            key={leaderboard.user.id}
            score={leaderboard.score}
            user={leaderboard.user}
          />
        ))}
      </div>
    </div>
  );
}

LeaderboardsList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardShape)).isRequired,
};

export default LeaderboardsList;
