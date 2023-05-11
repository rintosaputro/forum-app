import React from 'react';
import PropTypes from 'prop-types';

function Badge({ children }) {
  return (
    <div className="badge">{children}</div>
  );
}

Badge.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Badge;
