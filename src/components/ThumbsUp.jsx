import React from 'react';
import { HiOutlineThumbUp, HiThumbUp } from 'react-icons/hi';
import PropTypes from 'prop-types';

function ThumbsUp({ totalThumbs = 0, isActive }) {
  return (
    <button className="thumbs" title="like">
      {isActive ? <HiThumbUp color="#00c1c4" size="17px" /> : <HiOutlineThumbUp size="17px" />}
      <span className="total-thumbs">{totalThumbs}</span>
    </button>
  );
}

ThumbsUp.propTypes = {
  totalThumbs: PropTypes.number,
  isActive: PropTypes.bool,
};

export default ThumbsUp;
