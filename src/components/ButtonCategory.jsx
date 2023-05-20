import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from './ButtonBase';

function ButtonCategory({ children, isActive, onCategory }) {
  return (
    <ButtonBase onClick={onCategory} variant={isActive ? 'primary' : 'unset'} size="btn-small">{children}</ButtonBase>
  );
}

ButtonCategory.propTypes = {
  children: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onCategory: PropTypes.func.isRequired,
};

export default ButtonCategory;
