import React from 'react';
import ButtonCategory from '../components/ButtonCategory';
import CardThread from '../components/CardThread';

function HomePage() {
  return (
    <section className="home-page">
      <div className="home-overlay">
        <div>
          <header className="home-header">
            <h1>
              <span className="text-primary">Forum</span>
              {' '}
              App
            </h1>
          </header>
          <h5>Popular Category</h5>
          <div>
            <ButtonCategory>Makan</ButtonCategory>
          </div>
          <div>
            <CardThread />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
