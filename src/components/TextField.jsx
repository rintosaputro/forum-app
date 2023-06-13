import React from 'react';
import PropTypes from 'prop-types';

function TextField({
  type = 'text', value, onChange, placeholder = '',
}) {
  return (
    <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
  );
}

TextField.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default TextField;
