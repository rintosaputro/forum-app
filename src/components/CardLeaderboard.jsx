import React from 'react';
import PropTypes from 'prop-types';

function CardLeaderboard({ score, user }) {
  return (
    <div className="card-leaderboard">
      <div className="user-leaderboard">
        <img
          src={user.avatar}
          alt="avatar"
          className="avatar-leaderboards"
        />
        <h4 className="username-leaderboard">{user.name}</h4>
      </div>
      <div className="score-leaderboard">{score}</div>
    </div>
  );
}

const userShape = {
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const leaderboardShape = {
  score: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

CardLeaderboard.propTypes = {
  ...leaderboardShape,
};

export {
  userShape,
  leaderboardShape,
};

export default CardLeaderboard;
