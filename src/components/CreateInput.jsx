import React from 'react';
import TextField from './TextField';
import useInput from '../hooks/useInput';

function CreateInput() {
  const [title, handleChangeTitle] = useInput('');
  const [category, handleChangeCategory] = useInput('');

  return (
    <form>
      <legend>Create Thread</legend>
      <TextField value={title} onChange={handleChangeTitle} placeholder="Title" />
      <TextField value={category} onChange={handleChangeCategory} placeholder="Category" />
      <div contentEditable id="bodyInput" className="body-input" />
      <button type="submit" className="btn btn-post-thread btn-primary">Post Thread</button>
    </form>
  );
}

export default CreateInput;
