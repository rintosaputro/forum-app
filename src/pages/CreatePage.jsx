import React from 'react';
import Header from '../components/Header';
import CreateInput from '../components/CreateInput';

function CreatePage() {
  return (
    <section className="create-page">
      <div className="create-overlay">
        <Header />
        <CreateInput />
      </div>
    </section>
  );
}

export default CreatePage;
