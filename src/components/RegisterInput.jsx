import React from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';
import useInput from '../hooks/useInput';
import ButtonBase from './ButtonBase';

function RegisterInput({ onRegister }) {
  const [name, handleName] = useInput('');
  const [email, handleEmail] = useInput('');
  const [password, handlePassword] = useInput('');

  const handleRegister = (event) => {
    event.preventDefault();
    onRegister({ name, email, password });
  };

  return (
    <form className="register-input">
      <TextField type="text" value={name} onChange={handleName} placeholder="Name" />
      <TextField type="email" value={email} onChange={handleEmail} placeholder="Email" />
      <TextField type="password" value={password} onChange={handlePassword} placeholder="Password" />
      <ButtonBase
        type="submit"
        onClick={(event) => handleRegister(event)}
      >
        Register
      </ButtonBase>
    </form>
  );
}

RegisterInput.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default RegisterInput;
