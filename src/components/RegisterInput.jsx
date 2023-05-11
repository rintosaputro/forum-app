import React from 'react';
import TextField from './TextField';
import useInput from '../hooks/useInput';
import ButtonBase from './ButtonBase';

function RegisterInput() {
  const [name, handleName] = useInput('');
  const [email, handleEmail] = useInput('');
  const [password, handlePassword] = useInput('');

  return (
    <form className="register-input">
      <TextField type="text" value={name} onChange={handleName} placeholder="Name" />
      <TextField type="email" value={email} onChange={handleEmail} placeholder="Email" />
      <TextField type="password" value={password} onChange={handlePassword} placeholder="Password" />
      <ButtonBase type="submit" onClick={() => null}>Register</ButtonBase>
    </form>
  );
}

export default RegisterInput;
