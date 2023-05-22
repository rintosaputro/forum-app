import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="home-header">
      <Link to="/">
        <h1>
          <span className="text-primary">Forum</span>
          {' '}
          App
        </h1>
      </Link>
    </header>
  );
}

export default Header;
