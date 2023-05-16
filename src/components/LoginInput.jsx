import React from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';
import useInput from '../hooks/useInput';
import ButtonBase from './ButtonBase';

function LoginInput({ onLogin }) {
  const [email, handleChangeEmail] = useInput('');
  const [password, handleChangePassword] = useInput('');

  return (
    <form className="login-input">
      <TextField type="email" value={email} onChange={handleChangeEmail} placeholder="Email" />
      <TextField type="password" value={password} onChange={handleChangePassword} placeholder="Password" />
      <ButtonBase type="submit" onClick={(event) => onLogin({ event, email, password })}>Login</ButtonBase>
    </form>
  );
}

LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginInput;
