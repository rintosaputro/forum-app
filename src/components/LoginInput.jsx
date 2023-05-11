import React from 'react';
import TextField from './TextField';
import useInput from '../hooks/useInput';
import ButtonBase from './ButtonBase';

function LoginInput() {
  const [email, handleChangeEmail] = useInput('');
  const [password, handleChangePassword] = useInput('');

  return (
    <form className="login-input">
      <TextField type="email" value={email} onChange={handleChangeEmail} placeholder="Email" />
      <TextField type="password" value={password} onChange={handleChangePassword} placeholder="Password" />
      <ButtonBase type="submit" onClick={() => console.log(email, password)}>Login</ButtonBase>
    </form>
  );
}

export default LoginInput;
