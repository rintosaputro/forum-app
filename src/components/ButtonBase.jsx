import React from 'react';
import PropTypes from 'prop-types';

function ButtonBase({
  type = 'button', variant = 'primary', children, onClick,
}) {
  return (
    <button type={type} title={children} onClick={onClick} className={variant === 'primary' ? 'btn-primary' : 'btn-secondary'}>{children}</button>
  );
}

ButtonBase.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ButtonBase;
