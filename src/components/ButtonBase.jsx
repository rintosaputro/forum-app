import React from 'react';
import PropTypes from 'prop-types';

function ButtonBase({
  type = 'button', variant = 'primary', children, onClick, size = 'btn-normal',
}) {
  let classVariant = 'btn-unset';
  if (variant === 'primary') {
    classVariant = 'btn-primary';
  }
  if (variant === 'secondary') {
    classVariant = 'btn-secondary';
  }

  return (
    <button
      type={type}
      title={children}
      onClick={onClick}
      className={`${classVariant} ${size}`}
    >
      {children}
    </button>
  );
}

ButtonBase.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'unset']),
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['btn-normal', 'btn-small']),
};

export default ButtonBase;
