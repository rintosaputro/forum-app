import React from 'react';
import { Link } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  return (
    <section className="register-page">
      <div className="auth-overlay">
        <header>
          REGISTER TO ACCESS FORUM APP
        </header>
        <article>
          <RegisterInput />
          <div className="option-link">
            <span>Have an account?</span>
            <Link to="/">
              Login
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default RegisterPage;
