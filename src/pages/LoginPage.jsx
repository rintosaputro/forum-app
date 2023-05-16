import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ event, email, password }) => {
    event.preventDefault();
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="login-page">
      <div className="auth-overlay">
        <header>
          <h1>LOGIN AT FORUM APP</h1>
        </header>
        <article>
          <LoginInput onLogin={onLogin} />
          <div className="option-link">
            <span>Don`t have an account?</span>
            <Link to="/register">
              Register
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default LoginPage;
