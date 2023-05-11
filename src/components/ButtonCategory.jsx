import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonBase from './ButtonBase';

function ButtonCategory({ children }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <ButtonBase onClick={handleClick} variant={isActive ? 'primary' : 'unset'} size="btn-small">{children}</ButtonBase>
  );
}

ButtonCategory.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonCategory;
