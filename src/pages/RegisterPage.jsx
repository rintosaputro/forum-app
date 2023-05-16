import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({
    event, name, email, password,
  }) => {
    event.preventDefault();
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };

  return (
    <section className="register-page">
      <div className="auth-overlay">
        <header>
          REGISTER TO ACCESS FORUM APP
        </header>
        <article>
          <RegisterInput onRegister={onRegister} />
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
