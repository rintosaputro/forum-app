import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  return (
    <section className="login-page">
      <div className="auth-overlay">
        <header>
          <h1>LOGIN AT FORUM APP</h1>
        </header>
        <article>
          <LoginInput />
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
