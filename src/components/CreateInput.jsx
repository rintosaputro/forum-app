import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import TextField from './TextField';
import useInput from '../hooks/useInput';

function CreateInput({ onPostThread }) {
  const roleBodyInput = 'body-input';

  const navigate = useNavigate();

  const [title, handleChangeTitle] = useInput('');
  const [category, handleChangeCategory] = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = document.querySelector('#bodyInput').textContent;
    onPostThread({ title, body, category });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Create Thread</legend>
      <TextField value={title} onChange={handleChangeTitle} placeholder="Title" />
      <TextField value={category} onChange={handleChangeCategory} placeholder="Category" />
      <div contentEditable id="bodyInput" className="body-input" role={roleBodyInput} />
      <button type="submit" className="btn btn-post-thread btn-primary">Post Thread</button>
    </form>
  );
}

CreateInput.propTypes = {
  onPostThread: PropTypes.func.isRequired,
};

export default CreateInput;
