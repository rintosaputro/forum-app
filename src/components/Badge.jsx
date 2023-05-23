import React from 'react';
import PropTypes from 'prop-types';

function Badge({ children, size = 'normal' }) {
  return (
    <div className={`badge badge-${size}`}>{children}</div>
  );
}

Badge.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['normal', 'big']),
};

export default Badge;
