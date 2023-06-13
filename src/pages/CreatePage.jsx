import React from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import CreateInput from '../components/CreateInput';
import { asyncCreateThread } from '../states/threads/action';

function CreatePage() {
  const dispatch = useDispatch();

  const onPostThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));
  };

  return (
    <section className="create-page">
      <div className="create-overlay">
        <Header />
        <CreateInput onPostThread={onPostThread} />
      </div>
    </section>
  );
}

export default CreatePage;
